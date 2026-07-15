// ─────────────────────────────────────────────────────────────────────────────
// FUENTE ÚNICA DE VERDAD del catálogo de autoservicio.
// Toda la UI (cards, paquetes, comparación, carrito) se construye desde aquí,
// de modo que precios y cantidades son uniformes en todas las superficies.
// Las listas "incluye" son el copy real del sitio (AutoservicioPricingGrid).
// ─────────────────────────────────────────────────────────────────────────────

export type CategoriaId = "identidad" | "firma" | "validaciones" | "listas-negras" | "ocr";

export interface Categoria {
  id: CategoriaId;
  nombre: string;
  descripcion: string;
}

export interface Paquete {
  id: "cobre" | "bronce" | "plata" | "oro" | "platino";
  nombre: string;
  cantidad: number; // unidades incluidas
  precio: number; // MXN, sin IVA
}

export interface Producto {
  id: string;
  nombre: string;
  categoria: CategoriaId;
  unidad: string; // "verificaciones", "firmas", "consultas", "documentos"
  tagline: string;
  incluye: string[];
  recomendado?: Paquete["id"];
  paquetes: Paquete[];
  // Si está presente, el producto NO va por el carrito de /register sino que su
  // CTA enlaza aquí (ej. KYC/suscripción → /onboarding/plans). Opción b, SD-283.
  checkoutUrl?: string;
}

export const IVA = 0.16;

export const categorias: Categoria[] = [
  { id: "identidad", nombre: "Identidad", descripcion: "Verifica quién es tu cliente con biometría y prueba de vida." },
  { id: "firma", nombre: "Firma electrónica", descripcion: "Firma documentos con validez legal, desde simple hasta NOM-151." },
  { id: "validaciones", nombre: "Listas nominales", descripcion: "Consulta identidad contra padrones oficiales (INE, RENAPO)." },
  { id: "listas-negras", nombre: "Listas negras", descripcion: "Detecta personas sancionadas, buscadas o en lista de deudores fiscales (OFAC, INTERPOL, SAT-69B)." },
  { id: "ocr", nombre: "Lectura de documentos", descripcion: "Extrae datos de identificaciones y documentos con IA." },
];

const tiers = (
  c: number, b: number, p: number, o: number, pl: number,
  qc: number, qb: number, qp: number, qo: number, qpl: number,
): Paquete[] => [
  { id: "cobre", nombre: "Cobre", cantidad: qc, precio: c },
  { id: "bronce", nombre: "Bronce", cantidad: qb, precio: b },
  { id: "plata", nombre: "Plata", cantidad: qp, precio: p },
  { id: "oro", nombre: "Oro", cantidad: qo, precio: o },
  { id: "platino", nombre: "Platino", cantidad: qpl, precio: pl },
];

export const productos: Producto[] = [
  {
    id: "kyc",
    nombre: "KYC — Verificación de identidad",
    categoria: "identidad",
    unidad: "verificaciones",
    tagline: "Biometría facial con prueba de vida, OCR y consulta de listas en un solo flujo.",
    incluye: [
      "Prueba de vida iBeta Level 1 (antisuplantación)",
      "OCR de identificación oficial (INE, pasaporte)",
      "Consulta en listas nominales INE / RENAPO",
      "Alertas OFAC · Interpol · listas negras SAT",
      "Geolocalización y metadatos del dispositivo",
      "Expediente digital descargable",
    ],
    recomendado: "plata",
    paquetes: tiers(99, 1500, 2800, 6625, 12500, 5, 50, 100, 250, 500),
    checkoutUrl: "https://platform.jaak.ai/#/onboarding/plans",
  },
  {
    id: "firma-simple",
    nombre: "Firma Simple",
    categoria: "firma",
    unidad: "firmas",
    tagline: "Firma electrónica básica sin NOM-151.",
    incluye: [
      "Flujo de firma 100% digital, sin instalar nada",
      "Notificaciones automáticas a firmantes",
      "Evidencia y trazabilidad de cada firma",
      "Disponible en minutos en web con marca blanca",
      "No incluye sello de tiempo ni verificación de identidad.",
    ],
    recomendado: "plata",
    paquetes: tiers(49, 400, 700, 1500, 2500, 10, 50, 100, 250, 500),
  },
  {
    id: "firma-nom151",
    nombre: "Firma Digital NOM-151",
    categoria: "firma",
    unidad: "firmas",
    tagline: "Firma electrónica avanzada con la máxima validez legal en México.",
    incluye: [
      "Sello de tiempo oficial: nadie puede disputar cuándo se firmó",
      "Hash criptográfico que detecta cualquier alteración post-firma",
      "Constancia de conservación legal por 10 años",
      "Expediente con validez en juicio",
      "Expediente digital con evidencia descargable",
    ],
    recomendado: "plata",
    paquetes: tiers(99, 750, 1400, 3250, 6000, 5, 50, 100, 250, 500),
  },
  {
    id: "firma-nom151-bio",
    nombre: "Firma Digital NOM-151 + Biometría",
    categoria: "firma",
    unidad: "sesiones",
    tagline: "Firma Digital NOM-151 vinculada a la validación facial del firmante.",
    incluye: [
      "Todo lo de Firma Digital NOM-151",
      "Verificación facial del firmante al momento de firmar",
      "Video y fotografías de la sesión vinculados al expediente",
      "Constancia individual por cada firmante",
      "Si alguien impugna, quien debe probar es el firmante, no tú",
      "Hasta 2 firmantes por sesión biométrica",
    ],
    recomendado: "plata",
    paquetes: tiers(130, 1500, 2700, 6625, 12500, 5, 50, 100, 250, 500),
  },
  {
    id: "firma-nom151-kyc",
    nombre: "Firma Digital NOM-151 + KYC",
    categoria: "firma",
    unidad: "sesiones",
    tagline: "La solución más completa: onboarding con KYC y firma con validez legal.",
    incluye: [
      "Todo lo de NOM-151 + Biometría",
      "KYC completo del firmante en la misma sesión",
      "Captura automática de datos de identificación oficial",
      "Consulta en listas de riesgo nacionales (INE/RENAPO) e internacionales (OFAC, INTERPOL, SAT-69B)",
      "Geolocalización y metadatos del dispositivo registrados",
      "Expediente único: identidad + biometría + firma",
    ],
    recomendado: "plata",
    paquetes: tiers(174, 2625, 4725, 11594, 21875, 5, 50, 100, 250, 500),
  },
  {
    id: "ine",
    nombre: "Consulta INE",
    categoria: "validaciones",
    unidad: "consultas",
    tagline: "Valida la vigencia y autenticidad de una credencial ante el padrón electoral.",
    incluye: [
      "Validación en tiempo real contra padrón INE",
      "Verificación de vigencia del documento",
      "Confirmación de datos biográficos del titular",
      "Disponible vía plataforma web",
      "Respuesta en menos de un minuto",
      "Evidencia de consulta descargable",
    ],
    recomendado: "plata",
    paquetes: tiers(14, 105, 200, 475, 900, 10, 50, 100, 250, 500),
  },
  {
    id: "curp",
    nombre: "Consulta CURP",
    categoria: "validaciones",
    unidad: "consultas",
    tagline: "Valida la CURP ante RENAPO y obtén los datos biográficos asociados.",
    incluye: [
      "Consulta directa a RENAPO",
      "Validación de CURP y datos biográficos",
      "Detección de CURP inválidas o duplicadas",
      "Disponible vía plataforma web",
      "Respuesta en tiempo real",
      "Evidencia de consulta descargable",
    ],
    recomendado: "plata",
    paquetes: tiers(14, 105, 200, 475, 900, 10, 50, 100, 250, 500),
  },
  {
    id: "listas-negras",
    nombre: "Consulta de listas negras",
    categoria: "listas-negras",
    unidad: "consultas",
    tagline: "Paquete OFAC + INTERPOL + SAT-69B en una sola consulta.",
    incluye: [
      "Verificación simultánea en OFAC, INTERPOL y SAT-69B en segundos",
      "Detecta personas sancionadas, buscadas o en lista de deudores fiscales",
      "Resultado documentado y descargable para tu expediente de cumplimiento",
      "Listas actualizadas de forma continua, sin mantenimiento de tu parte",
      "Consulta directa desde tu plataforma",
    ],
    recomendado: "plata",
    paquetes: tiers(99, 215, 400, 950, 1790, 35, 50, 100, 250, 500),
  },
  {
    id: "ocr-inteligente",
    nombre: "PDF OCR Inteligente",
    categoria: "ocr",
    unidad: "tokens",
    tagline: "Extrae información estructurada de +500 tipos de documentos con IA.",
    incluye: [
      "Actas constitutivas, CSF, estados de cuenta, comprobantes de domicilio (documentos de hasta 20 páginas)",
      "+500 tipos de documentos entrenados con IA",
      "El consumo de tokens varía según el tipo y extensión del documento",
      "Modelo que se actualiza y mejora continuamente",
    ],
    recomendado: "plata",
    paquetes: tiers(99, 1500, 2800, 6625, 12500, 210, 2100, 4200, 10500, 21000),
  },
  {
    id: "ocr-id",
    nombre: "OCR para Identificación Oficial",
    categoria: "ocr",
    unidad: "tokens",
    tagline: "Extrae datos y fotografía de INE, pasaporte y otras identificaciones.",
    incluye: [
      "Extracción de datos de INE y pasaporte",
      "Fotografía del documento y del portador",
      "Detección de documentos falsificados o alterados",
      "Disponible vía plataforma web",
      "Evidencia descargable",
    ],
    recomendado: "plata",
    paquetes: tiers(99, 1500, 2800, 6625, 12500, 210, 2100, 4200, 10500, 21000),
  },
];

// Estilo metálico de cada paquete para los chips de tier.
// - base: color del metal (chip seleccionado / punto en tablas)
// - soft: tinte claro (chip sin seleccionar)
// - text: texto sobre el tinte claro
// - on:   texto sobre el metal sólido (contraste legible)
export interface TierEstilo { base: string; soft: string; text: string; on: string; }
export const tierEstilos: Record<Paquete["id"], TierEstilo> = {
  cobre:   { base: "#C77B45", soft: "#F8EDE4", text: "#9A5A2C", on: "#3A2410" },
  bronce:  { base: "#7E4F28", soft: "#EFE7DF", text: "#6E441F", on: "#FFFFFF" },
  plata:   { base: "#AEB6C2", soft: "#F1F2F5", text: "#525B68", on: "#1F2937" },
  oro:     { base: "#D4AF37", soft: "#FAF3DA", text: "#8A6D12", on: "#3A2F08" },
  platino: { base: "#59677A", soft: "#EBEEF2", text: "#475264", on: "#FFFFFF" },
};

export function formatMXN(n: number): string {
  return new Intl.NumberFormat("es-MX", { style: "currency", currency: "MXN", maximumFractionDigits: 0 }).format(n);
}

// Mapeo a las "keys" de producto que ya usa la plataforma (jaak-nfury-web /register).
// Permite construir el deep-link de checkout llevando el carrito a la plataforma.
// En producción, los IDs de pricing deben venir de la API (fuente única de verdad).
export const productKeys: Record<string, string> = {
  kyc: "kyc",
  "firma-simple": "signa_simple",
  "firma-nom151": "signa_advanced",
  "firma-nom151-bio": "signa_advanced_biometric",
  "firma-nom151-kyc": "signa_biometric",
  ine: "blacklist",
  curp: "blacklist",
  "listas-negras": "blacklist",
  "ocr-inteligente": "document",
  "ocr-id": "document",
};

// Construye el deep-link que la plataforma ya consume: /#/register/user-info?d=<base64>
// con el carrito embebido (mismo formato que el flujo actual de registro).
// `pricingIndex` (productId → tier → _id) hidrata el `i` real de cada producto,
// requisito del checkout de /register. Si no se pasa o falta el id, se envía
// vacío (fallback: mismo comportamiento previo).
export function buildCheckoutUrl(
  items: { producto: Producto; paquete: Paquete }[],
  options: {
    pricingIndex?: Record<string, Record<string, string>>;
    /** productKey por producto (del endpoint). Si no se pasa, usa el mapa local
     *  (fallback cuando el catálogo viene del hardcode). */
    productKeys?: Record<string, string>;
    base?: string;
    /** Atribución first-party (utm_*) que viaja como query ANTES del hash
     *  para que platform.jaak.ai (analytics/checkout) la reciba. */
    utm?: Partial<import("@/lib/attribution").AttributionParams>;
  } = {}
): string {
  const { pricingIndex, productKeys: productKeysOverride, base = "https://platform.jaak.ai/#/register/user-info", utm } = options;
  const products = items.map(({ producto, paquete }) => {
    const nombre = producto.nombre.split(" — ")[0];
    return {
      i: pricingIndex?.[producto.id]?.[paquete.id] ?? "",
      k: productKeysOverride?.[producto.id] ?? productKeys[producto.id] ?? producto.id,
      n: nombre,
      pr: Math.round(paquete.precio * (1 + IVA) * 100) / 100,
      c: "MXN",
      s: 0,
      d: `${nombre} ${paquete.nombre} ${paquete.cantidad}`,
      q: paquete.cantidad,
    };
  });
  const payload = {
    pk: products.map((p) => p.i).filter(Boolean),
    products,
  };
  const d = btoa(encodeURIComponent(JSON.stringify(payload)));
  let url = `${base}?d=${d}`;
  // Inserta utm_* como query previa al hash (#) — los routers hash no ven
  // esa parte, pero analytics y el servidor de platform sí.
  const utmEntries = Object.entries(utm ?? {}).filter(
    (entry): entry is [string, string] =>
      entry[0].startsWith("utm_") && typeof entry[1] === "string" && entry[1] !== ""
  );
  if (utmEntries.length) {
    const qs = new URLSearchParams(utmEntries).toString();
    const hashIdx = url.indexOf("#");
    // Sin hash la URL ya lleva `?d=`, asi que se encadena con `&`.
    url = hashIdx === -1
      ? `${url}&${qs}`
      : `${url.slice(0, hashIdx)}?${qs}${url.slice(hashIdx)}`;
  }
  return url;
}
