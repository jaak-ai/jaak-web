---
name: JAAK Web
description: Sistema de diseño del sitio de marketing de JAAK. Dos anclas de marca — azul marino (navy) profundo y teal cian — sobre superficies claras de papel o marino oscuro. Confianza, precisión regulatoria y claridad de producto.

# Todos los valores reflejan src/app/globals.css de forma literal. Ese fichero
# es la fuente de verdad; este frontmatter es la exportación portable. Si un
# token cambia allí, actualiza ambos.
colors:
  # Anclas de marca
  navy: "#212A45"              # primary — texto, superficies oscuras, botón azul
  navy-deep: "#0E1133"         # primary-dark — fondo marino más profundo
  teal: "#2DB6C1"              # accent — CTA principal, enlaces, foco
  teal-hover: "#25969f"        # accent-hover — estado hover del teal
  green: "#2AD796"             # accent-green — éxito, señal "verificado"

  # Texto
  text-dark: "#212A45"         # titulares sobre claro
  text-body: "#4A5568"         # cuerpo sobre claro
  text-muted: "#64748B"        # metadatos, captions
  text-gray: "#6B7280"         # subdued

  # Superficies claras
  background: "#ffffff"        # fondo de página por defecto
  section-alt: "#FAFAFA"       # sección alterna
  section-light: "#F3F4F8"     # sección clara
  border-light: "#EEEEEE"      # borde/divisor por defecto

  # Superficies marinas (secciones oscuras homepage)
  hp-bg-1: "#0E1133"
  hp-bg-2: "#141a3a"
  hp-hero-from: "#0A1628"      # gradiente hero marino

  # Superficies claras del tema homepage (data-hp-theme="light")
  hp-light-1: "#EFF4FF"
  hp-light-2: "#FFFFFF"
  hp-light-logos: "#F5F7FF"
  hp-light-ink: "#0A1628"      # tinta sobre papel azulado

  # Estado
  danger: "#b91c1c"            # error sobre claro
  danger-dark: "#ff8a8a"       # error sobre marino
  warning: "rgba(120,55,0,0.90)"  # aviso sobre claro (--hp-orange-text modo claro)

typography:
  # Familia única: Montserrat. La jerarquía se construye con peso y tamaño,
  # no con un segundo tipo. Confianza institucional sin ruido tipográfico.
  wordmark:
    fontFamily: "Montserrat, system-ui, sans-serif"
    fontWeight: 700
    letterSpacing: "0"
  display:
    fontFamily: "Montserrat, system-ui, sans-serif"
    fontSize: "clamp(2.6rem, 5vw, 4rem)"
    fontWeight: 800
    lineHeight: 1.05
  headline:
    fontFamily: "Montserrat, system-ui, sans-serif"
    fontSize: "clamp(1.9rem, 3.5vw, 2.6rem)"
    fontWeight: 700
    lineHeight: 1.15
  title:
    fontFamily: "Montserrat, system-ui, sans-serif"
    fontSize: "1.18rem"
    fontWeight: 600
    lineHeight: 1.35
  body:
    fontFamily: "Montserrat, system-ui, sans-serif"
    fontSize: "1rem"
    fontWeight: 400
    lineHeight: 1.7
  eyebrow:
    fontFamily: "Montserrat, system-ui, sans-serif"
    fontSize: "0.8rem"
    fontWeight: 600
    letterSpacing: "0.08em"

rounded:
  none: "0"
  sm: "8px"        # botones, inputs
  md: "16px"       # cards
  lg: "20px"       # glass-card
  pill: "999px"

spacing:
  xs: "8px"
  sm: "16px"
  md: "24px"
  lg: "32px"
  xl: "48px"
  section: "80px"       # .section-padding móvil
  section-lg: "120px"   # .section-padding ≥768px

components:
  button-primary:      # .btn-primary / .btn-cyan
    backgroundColor: "{colors.teal}"
    textColor: "#ffffff"
    rounded: "{rounded.sm}"
    padding: "14px 32px"
    fontWeight: 600
  button-primary-hover:
    backgroundColor: "{colors.teal-hover}"
    transform: "translateY(-1px)"
  button-secondary:    # .btn-secondary
    backgroundColor: "transparent"
    textColor: "{colors.navy}"
    borderColor: "{colors.navy}"
    rounded: "{rounded.sm}"
    padding: "14px 32px"
  card:
    backgroundColor: "#ffffff"
    borderColor: "{colors.border-light}"
    rounded: "{rounded.md}"
    padding: "32px"
  glass-card:          # .glass-card (sobre marino)
    backgroundColor: "rgba(255,255,255,0.06)"
    borderColor: "rgba(255,255,255,0.10)"
    rounded: "{rounded.lg}"
  input-focus:
    outline: "2px solid {colors.teal}"
    outlineOffset: "2px"
---

# Sistema de Diseño: JAAK Web

## 1. Overview

**Norte creativo: confianza regulatoria, claridad de producto.**

JAAK es una plataforma de identidad y firma electrónica para mercados regulados
(CNBV, LFPIORPI, UIF, NOM-151). El sitio debe leerse como una institución seria y
técnica, no como una herramienta genérica de SaaS. La marca vive entre dos anclas:
**azul marino profundo** para autoridad y **teal cian** para acción y señal de
producto. El verde marca lo verificado.

**Características clave**

- Superficies claras (papel blanco/gris) para contenido editorial y de producto;
  superficies marinas oscuras (`#0E1133`) para hero, CTA y momentos de peso.
- Teal como acento primario: CTA, enlaces, foco, señal "en vivo".
- Verde reservado para éxito / verificación, nunca decoración genérica.
- Un solo tipo (Montserrat). La jerarquía es de peso y tamaño.
- Radios medios (8–20px), bordes de hairline claros, sombras suaves y contadas.
- Tema dual sincronizado por `data-hp-theme` (dark/light) en la homepage.

## 2. Colores: Marino, Teal, Verde

### Suelo y superficie

- **Blanco** (`#ffffff`): fondo de página por defecto.
- **Sección Alt** (`#FAFAFA`) y **Sección Clara** (`#F3F4F8`): alternancia de bandas.
- **Marino Profundo** (`#0E1133`): fondo de secciones oscuras, hero y CTA.
- **Marino Medio** (`#141a3a`): un paso por encima; bandas oscuras intermedias.

### Sistema Teal (acento primario)

- **Teal** (`#2DB6C1`): CTA principal, enlaces, anillo de foco, señal de producto.
- **Teal Hover** (`#25969f`): estado hover.
- Sobre marino, el teal aparece con alpha (`rgba(45,182,193,…)`) en bordes de
  `.glass-card` y sombras de elevación.

### Marino (marca / autoridad)

- **Navy** (`#212A45`): titulares sobre claro, borde de `.btn-secondary`.
- **Navy Deep** (`#0E1133`): superficie oscura y `--primary-dark`.

### Verde (estado)

- **Verde** (`#2AD796`): éxito, verificación. Tiene significado —
  no es un tercer color decorativo.

### Texto

- **Text Dark** (`#212A45`): titulares sobre claro.
- **Text Body** (`#4A5568`): cuerpo sobre claro.
- **Text Muted** (`#64748B`) / **Text Gray** (`#6B7280`): metadatos, captions.
- Sobre marino, el texto usa blanco con alpha: `--hp-text-hi` (0.82) para alto
  contraste, bajando a `--hp-text-faint` (0.28).

### Reglas de color

**Regla del Teal Acción.** El teal es la señal de acción y producto. Si un solo
acento debe representar interacción, es teal — no verde ni marino.

**Regla del Verde Significa.** El verde marca verificado / éxito / paso completado.
No usarlo como relleno decorativo.

**Regla de la Banda.** Secciones claras y marinas alternan para dar ritmo. El hero
y el CTA final son marinos; el cuerpo editorial es claro.

**Regla del Tema Dual.** En la homepage, cada superficie declara su variante
`[data-hp-theme="light"]`. Al construir una sección `.hp-section` nueva, define
ambos temas; un token que solo existe en dark rompe el modo claro.

## 3. Tipografía: un tipo, jerarquía por peso

**Tipo único:** Montserrat (400/500/600/700/800), system-ui de respaldo.

La voz es geométrica y estable. La jerarquía se construye subiendo peso y tamaño,
no cambiando de familia. Esto mantiene el tono institucional y reduce el ruido.

### Jerarquía

- **Display · h1**: 800, `clamp(2.6rem, 5vw, 4rem)`, line-height 1.05. Hero.
- **Headline · h2**: 700, `clamp(1.9rem, 3.5vw, 2.6rem)`. Títulos de sección.
- **Title · h3**: 600, `1.18rem`. Encabezados de card/panel.
- **Body**: 400, `1rem`, line-height 1.7. Copia larga.
- **Eyebrow**: 600, `0.8rem`, letter-spacing `0.08em`. Marcadores sobre título.

### Reglas tipográficas

**Peso Sube con Importancia.** El h1 es el peso más alto (800); el cuerpo el más
bajo (400). No aplanar la escala.

**Un Solo Tipo.** No introducir un segundo tipo (serif, display) sin decisión
deliberada. Montserrat cubre display, UI y cuerpo.

**Cuerpo Necesita Aire.** Texto de cuerpo con line-height 1.7 y ancho máximo
~65–75ch.

## 4. Elevación y Material

El sistema es mayormente plano. La profundidad viene del contraste de superficie
(claro vs. marino), bordes de hairline y sombras suaves.

### Vocabulario de sombra

- **Card Hover:** `0 8px 32px rgba(0,0,0,0.08)`.
- **Hover Lift:** `translateY(-4px)` + `0 12px 40px rgba(0,0,0,0.1)`.
- **CTA Teal Lift:** `translateY(-2px)` + `0 8px 25px rgba(45,182,193,0.3)`.
- **Sin sombra por defecto:** las cards descansan sobre borde + cambio de fondo.

### Reglas de material

**Hairline Primero.** Usa un borde de 1px (`--border-light` sobre claro,
`rgba(255,255,255,0.09)` sobre marino) antes de añadir sombra.

**Glass con Moderación.** `.glass` / `.glass-card` existen para secciones marinas,
pero el blur decorativo no es la base del sistema. En superficies claras el
contenido descansa sobre color sólido, no glass.

**Gradientes de Marca.** `.gradient-bg` (marino) es un momento de marca, no
relleno de fondo genérico.

## 5. Componentes

### Botones

- **Primario (`.btn-primary` / `.btn-cyan`):** relleno teal, texto blanco, radio
  8px. `.btn-cyan` es la variante grande (padding 16×40, peso 700).
- **Secundario (`.btn-secondary`):** transparente, borde navy, texto navy.
- **Hover:** ligero `translateY(-1px/-2px)`, oscurecer el relleno, sombra suave. Sin bounce.
- **Foco:** anillo teal de 2px con 2px de offset (`:focus-visible`).

### Cards

- **`.card`:** blanca, radio 16px, borde `--border-light`, padding 32px. Compacta y plana.
- **`.glass-card`:** para secciones marinas; borde blanco con alpha, hover a borde teal.
- No anidar cards ni usar radios exagerados.

### Secciones Homepage

- `.hp-section` con fondos `.hp-bg-1/2/hero/cta`. Cada uno define su par
  `[data-hp-theme="light"]`. El toggle `.hp-theme-toggle` (esquina inferior derecha)
  cambia el tema.
- Titulares dentro de `.hp-section` conmutan a `#0A1628` en modo claro.

### Estado y señal

- **Peligro:** `#b91c1c` sobre claro, `#ff8a8a` sobre marino (`--hp-red-*`).
- **Aviso:** tonos naranja (`--hp-orange-*`).
- **Éxito/verificado:** verde `#2AD796`.

## 6. Do y Do Not

### Do

- Usa teal como acento de acción primario.
- Usa verde solo para éxito / verificación.
- Alterna bandas claras y marinas para dar ritmo.
- Mantén cards compactas, planas y bien delimitadas.
- Define ambos temas (dark/light) en cada sección homepage nueva.
- Conserva la utilidad: formularios, tablas de cumplimiento, simuladores y precios
  deben quedar legibles antes que decorados.
- Respeta `:focus-visible` con anillo teal para accesibilidad de teclado.

### Do Not

- No introduzcas un segundo tipo sin decisión deliberada (el sistema es Montserrat).
- No uses verde como decoración genérica.
- No apiles glass sobre glass ni uses blur como fondo por defecto en claro.
- No uses cards anchas redondeadas ni cards anidadas.
- No uses negro puro ni blanco puro como texto sobre marino (usa blanco con alpha).
- No dejes que el sistema visual tape la prueba de producto.
- No hardcodees hex en CSS de página: lee las variables de `globals.css`.
- No uses `border-l-4` (ni borde grueso de color en ningún lado de una card): es el
  "side-tab", el tell más reconocible de UI generada por IA. Usa el patrón de callout.
- No uses `gradient-text` (`bg-clip-text` + gradiente) fuera del H1 del hero.
- No inventes datos: cifras, testimonios, logos, comparativas o certificaciones que no
  se puedan verificar no van en el sitio. Ver §7.

## 7. Veracidad del contenido y patrones anti-slop

### Regla de veracidad (innegociable)

JAAK vende confianza regulatoria; un dato falso detectado destruye la credibilidad del
sitio y es riesgo legal (publicidad engañosa, art. 32 LFPC). Por eso:

- **Nada inventado.** Toda cifra, testimonio, logo, comparativa o certificación debe ser
  verificable. Lo que no se puede respaldar se **quita**, nunca se sustituye por otra
  suposición.
- **Fuente única de claims:** `src/lib/trust.ts` centraliza los datos reales y repetidos
  (`IBETA`, `CERTIFICACIONES` [6], `STATS`, `RETENCION`). Si un número aparece en varias
  páginas, impórtalo de ahí — nunca lo hardcodees, así no se contradice entre secciones.
- **iBeta:** siempre "iBeta Nivel 1" (dato real). Prohibido el superlativo "el estándar
  más exigente/alto" (falso: existe el Nivel 2).
- **Competidores:** no se nombran (Jumio, Onfido, AWS Rekognition, Azure Face, Mifiel,
  DocuSign, OpenClaw…). Se afirma el hecho propio: "motor biométrico propio, desarrollado
  y operado en México".
- **Ejemplos/mocks:** un dashboard o respuesta de API demostrativa debe llevar rótulo
  "Ejemplo ilustrativo" y datos obviamente de muestra.
- **Sin garantías absolutas** sin respaldo ("te devolvemos el dinero", "cumplimiento
  garantizado", "elimina el fraude"): se suavizan a hechos defendibles ("reduce el fraude").

### Patrón de callout (reemplaza al side-tab)

Para alertas, citas y datos destacados en contenido editorial (blog, docs), en vez de
`border-l-4`:

- **Card plana + kicker:** contenedor `border border-[color:var(--primary)]/10` con fondo
  suave (`#F3F4F8` / `#FAFAFA`) y un **kicker** encima —
  `text-[11px] font-semibold tracking-wide uppercase text-[color:var(--accent)]`
  (rojo `#b91c1c` solo para advertencias). El acento vive en la tipografía, no en un borde.
- **Icon-chip:** icono SVG stroke (16–24px) o número en contenedor
  `border border-[color:var(--accent)]/30 bg-[color:var(--accent)]/10`.
- **Acento micro superior** (opcional): `before:h-px before:w-12 before:bg-[color:var(--accent)]`
  — nunca un borde de ancho completo (mismo cliché rotado).
- **Iconografía:** SVG stroke, nunca emojis como iconos de producto.

### Taxonomía de CTA

Dos verbos canónicos en todo el shell, sin variantes ("Comprar", "Solicitar demo",
"Hablar con un experto"…):

- **"Comenzar ahora"** → ruta de autoservicio (`/autoservicio`).
- **"Agendar demo"** → ruta de contacto/ventas (`/contacto`), una sola ruta para la demo.
- "Solicitar revisión regulatoria" queda solo como CTA contextual del mega-menú de
  Cumplimiento.

### Validación

`npx impeccable detect src/` debe dar 0 hallazgos (side-tab, gradient-text,
layout-transition, overused-font). Es puerta obligatoria antes de commit, junto con
`npm run lint` y `npm run build`.

---

Última sincronización: 2026-07-08
