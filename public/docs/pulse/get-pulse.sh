#!/usr/bin/env bash
# Fuente canónica del instalador standalone: ESTE archivo. Se sirve en
# https://www.jaak.ai/docs/pulse/get-pulse.sh (Volo: INTC-229). No existe una
# copia en jaak-pulse-terraform/installer/. Comparte lógica con —pero no se
# genera desde— modules/compute_pulse/install.sh.tpl; mantener en sync a mano.
# =============================================================================
# get-pulse.sh — instalador nativo del bundle JAAK Pulse (pulse-api + pulse-web)
#
#   curl -fsSL https://get.pulse.jaak.ai | sudo bash
#
# Instala Pulse en una VM Linux (Ubuntu/Debian) en modo NATIVO: systemd + nginx,
# igual que el cloud-init de jaak-pulse-terraform, pero SIN OCI (sin Vault, sin
# Autonomous DB). El usuario aporta su JAAK_LICENSE_KEY y el ORACLE_DSN de su
# Oracle 26ai existente (BYO DSN). Los binarios se descargan firmados desde
# licensing-api y se verifican con minisign + sha256.
#
# Idempotente: seguro re-ejecutar. Las actualizaciones posteriores las maneja el
# timer jaak-pulse-updater ya instalado (no este script).
#
# Modo desatendido:
#   JAAK_LICENSE_KEY=... ORACLE_DSN='oracle://...' ADMIN_EMAIL=admin@pulse.local \
#     ADMIN_PASSWORD='...' \
#     curl -fsSL https://get.pulse.jaak.ai | sudo bash -s -- --yes
# Post-instalación: sudo bash get-pulse.sh --create-admin [--admin-email <email>]
#
# Volo: INTC-214, INTC-372
# =============================================================================

set -euo pipefail

# ---------------------------------------------------------------------------
# Config embebida (mismos defaults que jaak-pulse-terraform)
# ---------------------------------------------------------------------------
DEFAULT_LICENSING_URL="https://api.licensing.jaak.ai"
MINISIGN_PUBLIC_KEY="RWRP2rrBbj7JEsxKlwPG2XhyCNA+8RrGlVd9HV0/go8P1jHcjf5hxAWg"

# minisign 0.12 (pinneado por sha256 — mismo que cloud-init)
MINISIGN_URL="https://github.com/jedisct1/minisign/releases/download/0.12/minisign-0.12-linux.tar.gz"
MINISIGN_SHA256="9a599b48ba6eb7b1e80f12f36b94ceca7c00b7a5173c95c3efc88d9822957e73"

# Layout (idéntico al de compute_pulse). INSTALL_DIR es overridable por env
# para poder testear write_env contra un directorio temporal.
INSTALL_DIR="${INSTALL_DIR:-/opt/jaak-pulse}"
BIN_DIR="$INSTALL_DIR/bin"
WEB_DIR="$INSTALL_DIR/web"
RELEASES_DIR="$INSTALL_DIR/releases"
ENV_FILE="$INSTALL_DIR/.env"

API_PORT="8787"
LOG_PREFIX="[get-pulse]"

# curl: tolera blips de red
CURL_RETRY="--retry 5 --retry-delay 2 --retry-connrefused --max-time 300"

# Config recolectada (rellenada por collect_config)
JAAK_LICENSE_KEY="${JAAK_LICENSE_KEY:-}"
ORACLE_DSN="${ORACLE_DSN:-}"
LICENSING_URL="${LICENSING_URL:-$DEFAULT_LICENSING_URL}"
SERVER_NAME="${SERVER_NAME:-_}"
ASSUME_YES="${ASSUME_YES:-0}"
ADMIN_EMAIL="${ADMIN_EMAIL:-}"
ADMIN_PASSWORD="${ADMIN_PASSWORD:-}"
CREATE_ADMIN="${CREATE_ADMIN:-0}"

# ---------------------------------------------------------------------------
# Helpers
# ---------------------------------------------------------------------------
log()  { echo "$LOG_PREFIX $*" >&2; }
die()  { echo "$LOG_PREFIX ERROR: $*" >&2; exit 1; }

usage() {
  cat <<'EOF'
get-pulse.sh — instala el bundle JAAK Pulse (pulse-api + pulse-web) nativo.

USO:
  curl -fsSL https://get.pulse.jaak.ai | sudo bash
  curl -fsSL https://get.pulse.jaak.ai | sudo bash -s -- [opciones]
  sudo bash get-pulse.sh --create-admin [--admin-email <email>]

OPCIONES:
  --yes                    No pedir confirmación (modo desatendido).
  --licensing-url <url>    URL del licensing-api (default: https://api.licensing.jaak.ai).
  --server-name <name>     server_name de nginx (default: "_").
  --admin-email <email>    Email del admin (default: admin@pulse.local).
  --create-admin           Crear o rotar el admin de una instalación existente.
  -h, --help               Esta ayuda.

VARIABLES DE ENTORNO (para modo desatendido):
  JAAK_LICENSE_KEY   (requerido) License key con entitlement PULSE.
  ORACLE_DSN         (requerido) DSN de tu Oracle 26ai, ej:
                     oracle://user:pass@host:1522/service?ssl=true&ssl%20verify=false
  LICENSING_URL      (opcional)  Igual que --licensing-url.
  SERVER_NAME        (opcional)  Igual que --server-name.
  ADMIN_EMAIL        (opcional)  Email del admin (default: admin@pulse.local).
  ADMIN_PASSWORD     (opcional)  Password del admin; si falta, se genera.

MODO POST-INSTALACIÓN:
  sudo bash get-pulse.sh --create-admin [--admin-email <email>]
  Actualiza las credenciales y ejecuta solo el seed, sin reinstalar Pulse.

Precedencia: flags > env > prompt (si hay TTY) > error.
EOF
}

parse_args() {
  while [[ $# -gt 0 ]]; do
    case "$1" in
      --yes|-y)          ASSUME_YES=1; shift ;;
      --licensing-url)   LICENSING_URL="${2:?--licensing-url requiere valor}"; shift 2 ;;
      --server-name)     SERVER_NAME="${2:?--server-name requiere valor}"; shift 2 ;;
      --admin-email)     ADMIN_EMAIL="${2:?--admin-email requiere valor}"; shift 2 ;;
      --create-admin)    CREATE_ADMIN=1; shift ;;
      -h|--help)         usage; exit 0 ;;
      *)                 die "opción desconocida: $1 (usa --help)" ;;
    esac
  done
}

have_tty() { [[ -t 0 || -r /dev/tty ]]; }

# Lee de /dev/tty aunque stdin sea el pipe de curl. Args: <var> <prompt> [default] [silent]
prompt_var() {
  local __var="$1" __prompt="$2" __default="${3:-}" __silent="${4:-0}" __val=""
  local __src=/dev/stdin
  [[ -r /dev/tty ]] && __src=/dev/tty
  if [[ "$__silent" == "1" ]]; then
    read -r -s -p "$__prompt" __val < "$__src" || true; echo >&2
  else
    read -r -p "$__prompt" __val < "$__src" || true
  fi
  [[ -z "$__val" && -n "$__default" ]] && __val="$__default"
  printf -v "$__var" '%s' "$__val"
}

collect_admin_credentials() {
  local default_email="${1:-admin@pulse.local}"
  if [[ -z "$ADMIN_EMAIL" ]]; then
    if have_tty; then
      prompt_var ADMIN_EMAIL "  ADMIN_EMAIL [$default_email]: " "$default_email"
    else
      ADMIN_EMAIL="$default_email"
    fi
  fi

  if [[ -z "$ADMIN_PASSWORD" ]]; then
    ADMIN_PASSWORD="$(openssl rand -base64 24 | tr -d '/+=' | cut -c1-20)"
  fi
}

print_admin_credentials() {
  cat >&2 <<EOF

Primer inicio de sesión:
  URL:            http://<esta-vm>/
  ADMIN_EMAIL:    $ADMIN_EMAIL
  ADMIN_PASSWORD: $ADMIN_PASSWORD

Para rotar el password: sudo bash get-pulse.sh --create-admin. Queda guardada en $ENV_FILE (0600).
EOF
}

# ---------------------------------------------------------------------------
# 1. preflight — root, distro apt, prerequisitos, minisign
# ---------------------------------------------------------------------------
preflight() {
  log "Preflight…"
  [[ "$(id -u)" -eq 0 ]] || die "corre como root o con sudo (curl ... | sudo bash)."
  command -v apt-get >/dev/null 2>&1 || die "solo soportado en distros apt (Ubuntu/Debian) en v1."

  export DEBIAN_FRONTEND=noninteractive
  apt-get update -y
  apt-get install -y curl wget jq unzip tar ca-certificates openssl nginx

  if ! command -v minisign >/dev/null 2>&1; then
    log "  instalando minisign 0.12 (pinneado por sha256)…"
    # shellcheck disable=SC2086
    curl -fsSL $CURL_RETRY "$MINISIGN_URL" -o /tmp/minisign.tar.gz
    echo "$MINISIGN_SHA256  /tmp/minisign.tar.gz" | sha256sum -c -
    tar -xzf /tmp/minisign.tar.gz -C /tmp
    install -m 0755 /tmp/minisign-linux/x86_64/minisign /usr/local/bin/minisign
    rm -rf /tmp/minisign.tar.gz /tmp/minisign-linux
  fi
}

# ---------------------------------------------------------------------------
# 2. collect_config — prompts (TTY) o env/flags (desatendido)
# ---------------------------------------------------------------------------
collect_config() {
  log "Configuración…"

  if [[ -z "$JAAK_LICENSE_KEY" ]]; then
    if have_tty; then
      prompt_var JAAK_LICENSE_KEY "  JAAK_LICENSE_KEY (con entitlement PULSE): " "" 1
    fi
    [[ -n "$JAAK_LICENSE_KEY" ]] || die "JAAK_LICENSE_KEY requerido (env o prompt)."
  fi

  if [[ -z "$ORACLE_DSN" ]]; then
    if have_tty; then
      echo "  ORACLE_DSN — DSN de tu Oracle 26ai (BYO). Ejemplo:" >&2
      echo "    oracle://user:pass@host:1522/service?ssl=true&ssl%20verify=false" >&2
      prompt_var ORACLE_DSN "  ORACLE_DSN: "
    fi
    [[ -n "$ORACLE_DSN" ]] || die "ORACLE_DSN requerido (env o prompt)."
  fi

  if have_tty; then
    prompt_var LICENSING_URL "  LICENSING_URL [$LICENSING_URL]: " "$LICENSING_URL"
    prompt_var SERVER_NAME   "  nginx server_name [$SERVER_NAME]: " "$SERVER_NAME"
  fi
  collect_admin_credentials

  # Secretos efímeros generados localmente (nunca se imprimen)
  JWT_SECRET="$(openssl rand -hex 32)"
  API_KEY="$(openssl rand -hex 32)"
  SERVICE_KEY="$(openssl rand -hex 32)"

  echo "" >&2
  log "Se instalará:"
  log "  LICENSING_URL = $LICENSING_URL"
  log "  server_name   = $SERVER_NAME"
  log "  ADMIN_EMAIL   = $ADMIN_EMAIL"
  log "  ORACLE_DSN    = ${ORACLE_DSN%%@*}@… (oculto)"
  log "  destino       = $INSTALL_DIR (systemd + nginx)"
  if [[ "$ASSUME_YES" != "1" ]]; then
    if have_tty; then
      local ok=""
      prompt_var ok "  ¿Continuar? [Y/n]: " "Y"
      [[ "$ok" =~ ^[Yy] ]] || die "cancelado por el usuario."
    else
      die "sin TTY y sin --yes: aborto por seguridad. Re-corre con --yes."
    fi
  fi
}

# ---------------------------------------------------------------------------
# 3. write_env — /opt/jaak-pulse/.env (mismo formato que fetch_secrets.py)
# ---------------------------------------------------------------------------
# Emite KEY="value" con el MISMO escaping que fetch_secrets.py. Imprescindible:
# ORACLE_DSN lleva `&` y espacios (…&ssl verify=false) que romperían tanto el
# `source` de bash como el parseo si fueran crudos.
emit_env() {
  local k="$1" v="$2"
  v="${v//\\/\\\\}"   # \  -> \\   (primero)
  v="${v//\"/\\\"}"   # "  -> \"
  v="${v//\$/\\\$}"   # $  -> \$
  v="${v//\`/\\\`}"   # `  -> \`
  printf '%s="%s"\n' "$k" "$v"
}

update_env_var() {
  local key="$1" value="$2" tmp
  [[ "$key" =~ ^[A-Z_][A-Z0-9_]*$ ]] || die "clave de configuración inválida: $key"
  [[ -f "$ENV_FILE" ]] || die "no existe $ENV_FILE. Ejecuta primero la instalación completa."

  umask 077
  tmp="$(mktemp "${ENV_FILE}.tmp.XXXXXX")"
  awk -v key="$key" 'index($0, key "=") != 1' "$ENV_FILE" > "$tmp" \
    || { rm -f "$tmp"; die "no pude leer $ENV_FILE."; }
  emit_env "$key" "$value" >> "$tmp" \
    || { rm -f "$tmp"; die "no pude actualizar $key en $ENV_FILE."; }
  chmod 600 "$tmp" \
    || { rm -f "$tmp"; die "no pude proteger el temporal de $ENV_FILE."; }
  mv -f "$tmp" "$ENV_FILE" \
    || { rm -f "$tmp"; die "no pude reemplazar $ENV_FILE."; }
  chmod 600 "$ENV_FILE"
}

write_env() {
  log "Escribiendo $ENV_FILE…"
  local ncpu gomaxprocs gomemlimit
  ncpu="$(nproc 2>/dev/null || echo 2)"
  gomaxprocs=$(( ncpu > 2 ? ncpu - 2 : 2 ))
  gomemlimit=$(( ncpu * 3 ))

  umask 077
  {
    echo "# Generado por get-pulse.sh — NO commitear. $(date -u +%Y-%m-%dT%H:%M:%SZ)"
    emit_env ORACLE_DSN       "$ORACLE_DSN"
    emit_env JWT_SECRET       "$JWT_SECRET"
    emit_env API_KEY          "$API_KEY"
    emit_env SERVICE_KEY      "$SERVICE_KEY"
    emit_env JAAK_LICENSE_KEY "$JAAK_LICENSE_KEY"
    emit_env LICENSING_URL    "$LICENSING_URL"
    emit_env ADMIN_EMAIL      "$ADMIN_EMAIL"
    emit_env ADMIN_PASSWORD   "$ADMIN_PASSWORD"
    emit_env GOMAXPROCS       "$gomaxprocs"
    emit_env GOMEMLIMIT       "${gomemlimit}GiB"
  } > "$ENV_FILE"
  chmod 600 "$ENV_FILE"
  chown root:jaak "$ENV_FILE" 2>/dev/null || true  # jaak/root pueden no existir en tests
}

# ---------------------------------------------------------------------------
# 4. setup_user_layout — usuario jaak + directorios
# ---------------------------------------------------------------------------
setup_user_layout() {
  log "Usuario y directorios…"
  id jaak >/dev/null 2>&1 || useradd --system --no-create-home --shell /usr/sbin/nologin jaak
  mkdir -p "$BIN_DIR" "$WEB_DIR" "$RELEASES_DIR" "$INSTALL_DIR/etc"
  chown -R jaak:jaak "$INSTALL_DIR"
}

# ---------------------------------------------------------------------------
# 5. verificación + descarga (reutiliza la lógica de install.sh.tpl)
# ---------------------------------------------------------------------------
write_pubkey() {
  local keyfile; keyfile="$(mktemp /tmp/jaak-pulse-pubkey.XXXXXX)"
  printf 'untrusted comment: jaak-pulse minisign public key\n%s\n' "$MINISIGN_PUBLIC_KEY" > "$keyfile"
  echo "$keyfile"
}
verify_minisign() {
  local file="$1" sig="$2" pub="$3"
  log "  verificando minisign: $(basename "$file")"
  minisign -V -p "$pub" -m "$file" -x "$sig" || die "minisign falló para $file"
}
verify_sha256() {
  local file="$1" expected="$2" actual
  log "  verificando sha256: $(basename "$file")"
  actual="$(sha256sum "$file" | awk '{print $1}')"
  [[ "$actual" == "$expected" ]] || die "sha256 mismatch $file: got $actual, want $expected"
}
# Consulta el endpoint releases de licensing-api con auth por license key. En
# éxito deja el JSON en la global RELEASE_JSON. Distingue 409 (release incompleto
# en el servidor — artefactos no publicados del todo, gate INTC-306) y 403
# (licencia) de otros fallos, para dar un mensaje accionable en vez del error
# crudo de curl. Args: <url> <product>.
#
# Usa una global en vez de capturar stdout a propósito: die() debe correr en el
# scope de la función para que su exit detenga el script; dentro de $(...) un
# exit solo terminaría el subshell y el caller seguiría con JSON vacío.
RELEASE_JSON=""
fetch_release_json() {
  local url="$1" product="$2" body_file code
  body_file="$(mktemp)"
  # shellcheck disable=SC2086
  code="$(curl -sSL $CURL_RETRY \
    -H "X-License-Key: $JAAK_LICENSE_KEY" -H "Accept: application/json" \
    -o "$body_file" -w '%{http_code}' "$url")" \
    || { rm -f "$body_file"; die "error de red consultando releases para $product"; }
  case "$code" in
    2??) RELEASE_JSON="$(cat "$body_file")"; rm -f "$body_file" ;;
    409) rm -f "$body_file"
         die "release de $product incompleto en el servidor (HTTP 409): los artefactos aún no están todos publicados en el bucket. Reintenta más tarde o contacta a JAAK." ;;
    403) rm -f "$body_file"
         die "licencia rechazada para $product (HTTP 403): revisa tu JAAK_LICENSE_KEY y el entitlement PULSE." ;;
    *)   rm -f "$body_file"
         die "consulta a releases para $product falló (HTTP $code)" ;;
  esac
}

# Descarga un objeto del release a un archivo, distinguiendo un 404 de release
# incompleto (objeto aún no en el bucket — pasa contra un licensing-api sin el
# gate INTC-306) de otros fallos. Args: <url> <dest> <qué>. Se llama como
# sentencia (no dentro de $(...)) para que die() detenga el script. Usa $version
# del caller (install_product).
download_release_file() {
  local url="$1" dest="$2" what="$3" code
  # shellcheck disable=SC2086
  code="$(curl -sSL $CURL_RETRY -o "$dest" -w '%{http_code}' "$url")" \
    || die "error de red descargando $what"
  case "$code" in
    2??) : ;;
    404) die "release $version parece incompleto en el servidor: falta '$what' (HTTP 404). El publish del release no terminó de subir todos los artefactos (p. ej. la mitad de pulse-web que genera manifest.json). Reintenta más tarde o contacta a JAAK." ;;
    *)   die "descarga de '$what' falló (HTTP $code)" ;;
  esac
}

install_product() {
  local product="$1"
  log "Instalando $product…"
  local workdir; workdir="$(mktemp -d "$RELEASES_DIR/$product-XXXXXX")"
  local pubkeyfile; pubkeyfile="$(write_pubkey)"
  # shellcheck disable=SC2064
  trap "rm -f '$pubkeyfile'; rm -rf '$workdir'" RETURN

  fetch_release_json "$LICENSING_URL/api/v1/releases/latest?channel=stable&product=$product" "$product"
  local release_json="$RELEASE_JSON"

  local manifest_url manifest_sig_url version
  manifest_url="$(echo "$release_json" | jq -r '.manifest_url')"
  manifest_sig_url="$(echo "$release_json" | jq -r '.manifest_sig_url')"
  version="$(echo "$release_json" | jq -r '.version')"
  log "  version=$version"

  local manifest="$workdir/manifest.json" manifest_sig="$workdir/manifest.json.minisig"
  download_release_file "$manifest_url"     "$manifest"     "manifest.json"
  download_release_file "$manifest_sig_url" "$manifest_sig" "manifest.json.minisig"
  verify_minisign "$manifest" "$manifest_sig" "$pubkeyfile"

  # name + sha256 vienen del manifest FIRMADO (la verificación no es decorativa);
  # download_url + sig_url son PARs dinámicos del release_json.
  local name sha256 download_url sig_url
  name="$(jq -r --arg p "$product" '.artifacts[]|select(.product==$p)|.name' "$manifest")"
  sha256="$(jq -r --arg p "$product" '.artifacts[]|select(.product==$p)|.sha256' "$manifest")"
  download_url="$(echo "$release_json" | jq -r --arg p "$product" '.artifacts[]|select(.product==$p)|.download_url')"
  sig_url="$(echo "$release_json" | jq -r --arg p "$product" '.artifacts[]|select(.product==$p)|.sig_url')"
  [[ -n "$name" && "$name" != "null" ]] || die "manifest firmado sin artifacts[].name para $product"
  [[ -n "$sha256" && "$sha256" != "null" ]] || die "manifest firmado sin artifacts[].sha256 para $product"
  [[ -n "$download_url" && "$download_url" != "null" ]] || die "download_url vacío para $product"
  [[ -n "$sig_url" && "$sig_url" != "null" ]] || die "sig_url vacío para $product"

  local artifact="$workdir/$name" artifact_sig="$workdir/$name.minisig"
  download_release_file "$download_url" "$artifact"     "$name"
  download_release_file "$sig_url"      "$artifact_sig" "$name.minisig"
  verify_sha256   "$artifact" "$sha256"
  verify_minisign "$artifact" "$artifact_sig" "$pubkeyfile"

  case "$product" in
    pulse-api)
      tar -xzf "$artifact" -C "$workdir"
      install -m 0755 "$workdir/jaak-pulse-api" "$BIN_DIR/jaak-pulse-api"
      chown jaak:jaak "$BIN_DIR/jaak-pulse-api"
      ;;
    pulse-web)
      rm -rf "${WEB_DIR:?}"/*
      tar -xzf "$artifact" -C "$WEB_DIR"
      chown -R jaak:jaak "$WEB_DIR"
      ;;
    *) die "producto desconocido: $product" ;;
  esac
  log "$product $version instalado."
}

# ---------------------------------------------------------------------------
# 6. db_migrate_seed
# ---------------------------------------------------------------------------
db_migrate_seed() {
  log "Migraciones + seed…"
  set -a; # shellcheck disable=SC1090
  source "$ENV_FILE"; set +a

  # Capture migrate output to enforce that the DB supports the native VECTOR
  # type. Pulse runs facial re-identification and blacklist match with Oracle's
  # native VECTOR_DISTANCE (Oracle 23ai+). Older databases make the store fall
  # back to storing embeddings as CLOB and computing cosine in the app — a
  # degraded mode that does not scale. That is NOT a supported configuration:
  # if the fallback triggers we abort so the operator provisions a proper DB.
  local mlog; mlog="$(mktemp)"
  "$BIN_DIR/jaak-pulse-api" migrate 2>&1 | tee "$mlog"
  [[ "${PIPESTATUS[0]}" -eq 0 ]] || { rm -f "$mlog"; die "migrate falló (¿ORACLE_DSN correcto/alcanzable?)."; }

  if grep -qiE "VECTOR (type )?not supported|CLOB fallback|created as CLOB|created without .*VECTOR column" "$mlog"; then
    rm -f "$mlog"
    log ""
    log "  Tu Oracle Database NO soporta el tipo nativo VECTOR, requerido por Pulse"
    log "  para la reidentificación facial y el match de blacklist (VECTOR_DISTANCE)."
    log "  El esquema quedó parcialmente creado en modo CLOB (no soportado)."
    log ""
    log "  Requerido: Oracle 23ai (mínimo)  ·  Recomendado: Oracle 26ai."
    log "  Provisiona el ADB en esa versión, apunta ORACLE_DSN a esa base (vacía)"
    log "  y vuelve a ejecutar el instalador."
    log ""
    die "Oracle sin soporte VECTOR nativo — instalación abortada (requiere 23ai+, recomendado 26ai)."
  fi
  rm -f "$mlog"

  "$BIN_DIR/jaak-pulse-api" seed    || die "seed falló."
}

create_admin_mode() {
  local existing_admin_email=""
  [[ "$(id -u)" -eq 0 ]] || die "corre --create-admin como root o con sudo."
  [[ -f "$ENV_FILE" ]] || die "instalación existente no encontrada: falta $ENV_FILE. Ejecuta primero la instalación completa."
  [[ -x "$BIN_DIR/jaak-pulse-api" ]] || die "instalación existente no encontrada: falta $BIN_DIR/jaak-pulse-api. Ejecuta primero la instalación completa."

  log "Creando o rotando el usuario admin…"
  if [[ -z "$ADMIN_EMAIL" ]]; then
    existing_admin_email="$(sed -n 's/^ADMIN_EMAIL="\([^"]*\)"$/\1/p' "$ENV_FILE" | tail -n 1)"
  fi
  collect_admin_credentials "${existing_admin_email:-admin@pulse.local}"
  update_env_var ADMIN_EMAIL "$ADMIN_EMAIL"
  update_env_var ADMIN_PASSWORD "$ADMIN_PASSWORD"

  set -a; # shellcheck disable=SC1090
  source "$ENV_FILE"; set +a
  "$BIN_DIR/jaak-pulse-api" seed || die "seed falló."
  print_admin_credentials
}

# ---------------------------------------------------------------------------
# 7. systemd + nginx + hardening
# ---------------------------------------------------------------------------
setup_systemd() {
  log "Units systemd…"
  cat > /etc/systemd/system/jaak-pulse-api.service <<EOF
[Unit]
Description=JAAK Pulse API
After=network-online.target
Wants=network-online.target

[Service]
Type=simple
User=jaak
Group=jaak
WorkingDirectory=$INSTALL_DIR
EnvironmentFile=$ENV_FILE
ExecStart=$BIN_DIR/jaak-pulse-api serve
Restart=on-failure
RestartSec=5s
StandardOutput=journal
StandardError=journal
SyslogIdentifier=jaak-pulse-api
LimitNOFILE=65535
LimitNPROC=65535

[Install]
WantedBy=multi-user.target
EOF

  cat > /etc/systemd/system/jaak-pulse-updater.service <<EOF
[Unit]
Description=JAAK Pulse Updater (oneshot)
After=network-online.target
Wants=network-online.target

[Service]
Type=oneshot
User=root
EnvironmentFile=$ENV_FILE
ExecStart=$BIN_DIR/jaak-pulse-api update --check
StandardOutput=journal
StandardError=journal
SyslogIdentifier=jaak-pulse-updater
EOF

  cat > /etc/systemd/system/jaak-pulse-updater.timer <<'EOF'
[Unit]
Description=JAAK Pulse Updater Timer (every 30 min)

[Timer]
OnBootSec=5min
OnUnitActiveSec=30min
Unit=jaak-pulse-updater.service

[Install]
WantedBy=timers.target
EOF
}

setup_nginx() {
  log "nginx…"
  cat > /etc/nginx/sites-available/jaak-pulse <<EOF
limit_req_zone \$binary_remote_addr zone=api_limit:10m rate=100r/s;
limit_req_zone \$binary_remote_addr zone=web_limit:10m rate=200r/s;

upstream pulse_api {
    server 127.0.0.1:$API_PORT;
    keepalive 32;
}

server {
    listen 80;
    listen [::]:80;
    server_name $SERVER_NAME;

    location /healthz {
        access_log off;
        return 200 "healthy\n";
        add_header Content-Type text/plain;
    }

    location /api/ {
        limit_req zone=api_limit burst=20 nodelay;
        proxy_pass http://pulse_api/;
        proxy_http_version 1.1;
        proxy_set_header Connection "";
        proxy_set_header Host \$host;
        proxy_set_header X-Real-IP \$remote_addr;
        proxy_set_header X-Forwarded-For \$proxy_add_x_forwarded_for;
        proxy_set_header X-Forwarded-Proto \$scheme;
        proxy_read_timeout 60s;
        proxy_send_timeout 60s;
    }

    location / {
        limit_req zone=web_limit burst=50 nodelay;
        root $WEB_DIR;
        index index.html;
        try_files \$uri \$uri/ /index.html;

        location ~* \.(js|css|png|jpg|jpeg|gif|ico|svg|woff|woff2|ttf|eot)\$ {
            expires 1y;
            add_header Cache-Control "public, immutable";
        }
    }
}
EOF
  rm -f /etc/nginx/sites-enabled/default
  ln -sf /etc/nginx/sites-available/jaak-pulse /etc/nginx/sites-enabled/jaak-pulse
  nginx -t
}

harden() {
  log "sysctl / limits / firewall…"
  cat > /etc/sysctl.d/99-jaak-pulse.conf <<'EOF'
net.core.somaxconn = 65535
net.core.netdev_max_backlog = 65535
net.core.rmem_max = 16777216
net.core.wmem_max = 16777216
net.ipv4.tcp_rmem = 4096 87380 16777216
net.ipv4.tcp_wmem = 4096 65536 16777216
net.ipv4.tcp_max_syn_backlog = 65535
net.ipv4.tcp_fin_timeout = 15
net.ipv4.tcp_tw_reuse = 1
net.ipv4.ip_local_port_range = 1024 65535
fs.file-max = 2097152
fs.nr_open = 1048576
vm.max_map_count = 262144
vm.swappiness = 10
kernel.pid_max = 4194304
EOF
  cat > /etc/security/limits.d/99-jaak-pulse.conf <<'EOF'
jaak soft nofile 1048576
jaak hard nofile 1048576
jaak soft nproc  1048576
jaak hard nproc  1048576
EOF
  sysctl --system >/dev/null

  # Ubuntu trae un REJECT final en INPUT; sin abrir 80/443 el health check falla.
  local last
  last=$(iptables -L INPUT --line-numbers | tail -1 | awk '{print $1}')
  if [[ "$last" =~ ^[0-9]+$ ]]; then
    iptables -C INPUT -p tcp -m state --state NEW -m multiport --dports 80,443 -j ACCEPT 2>/dev/null \
      || iptables -I INPUT "$last" -p tcp -m state --state NEW -m multiport --dports 80,443 -j ACCEPT
    command -v netfilter-persistent >/dev/null 2>&1 && netfilter-persistent save || true
  fi
}

# ---------------------------------------------------------------------------
# 8. start_and_verify
# ---------------------------------------------------------------------------
start_and_verify() {
  log "Arrancando servicios…"
  systemctl daemon-reload
  systemctl enable --now jaak-pulse-api.service
  # nginx may already be running (pre-installed by apt); `enable --now` is a
  # no-op on an active unit and would leave the freshly written site config
  # unapplied, so /healthz would hit the stale/default config and 404.
  # Enable, then reload to load our site (restart if it wasn't running yet).
  systemctl enable nginx
  systemctl reload nginx || systemctl restart nginx
  systemctl enable --now jaak-pulse-updater.timer

  sleep 10
  curl -fsS http://localhost/healthz     >/dev/null || { journalctl -u nginx -n 20 --no-pager; die "healthz nginx falló."; }
  curl -fsS http://localhost/api/healthz >/dev/null || { journalctl -u jaak-pulse-api -n 30 --no-pager; die "healthz api falló."; }
  log "Deployment verificado."
}

# ---------------------------------------------------------------------------
# 9. summary
# ---------------------------------------------------------------------------
summary() {
  cat >&2 <<EOF

$LOG_PREFIX ✅ JAAK Pulse instalado.
  Web/API:   http://<esta-vm>/  (API bajo /api/)
  Logs API:  journalctl -u jaak-pulse-api -f
  Logs web:  journalctl -u nginx -f
  Updater:   systemctl status jaak-pulse-updater.timer
  Config:    $ENV_FILE  (0600, no commitear)

Actualizaciones automáticas cada 30 min vía jaak-pulse-updater.timer.
EOF
  print_admin_credentials
}

# ---------------------------------------------------------------------------
# Main
# ---------------------------------------------------------------------------
main() {
  parse_args "$@"
  if [[ "$CREATE_ADMIN" == "1" ]]; then
    create_admin_mode
    return
  fi
  log "Instalador JAAK Pulse (nativo, sin OCI)."
  preflight
  collect_config
  setup_user_layout
  write_env
  install_product pulse-api    # binario primero (necesario para migrate/seed)
  db_migrate_seed
  install_product pulse-web
  setup_systemd
  setup_nginx
  harden
  start_and_verify
  summary
}

# Permite sourcear el script en tests sin ejecutar main (RUN_MAIN=0).
if [[ "${RUN_MAIN:-1}" == "1" ]]; then
  main "$@"
fi
