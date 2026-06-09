// ─────────────────────────────────────────────────────────────────────────────
// FUENTE ÚNICA DE VERDAD del catálogo de autoservicio.
// Toda la UI (cards, paquetes, comparación, carrito) se construye desde aquí,
// de modo que precios y cantidades son uniformes en todas las superficies.
// Las listas "incluye" son el copy real del sitio (AutoservicioPricingGrid).
// ─────────────────────────────────────────────────────────────────────────────

export type CategoriaId = "identidad" | "firma" | "validaciones" | "ocr";

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
}

export const IVA = 0.16;

export const categorias: Categoria[] = [
  { id: "identidad", nombre: "Identidad", descripcion: "Verifica quién es tu cliente con biometría y prueba de vida." },
  { id: "firma", nombre: "Firma electrónica", descripcion: "Firma documentos con validez legal, desde simple hasta NOM-151." },
  { id: "validaciones", nombre: "Validaciones", descripcion: "Consulta identidad contra padrones oficiales (INE, RENAPO)." },
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
  },
  {
    id: "firma-simple",
    nombre: "Firma Simple",
    categoria: "firma",
    unidad: "firmas",
    tagline: "Firma electrónica con aceptación, IP, dispositivo y sello de tiempo.",
    incluye: [
      "Firma electrónica con validez legal en México",
      "Hasta 4 firmantes por documento",
      "Flujo de firma 100% digital, sin instalar nada",
      "Integración vía API REST o plataforma web",
      "Notificaciones automáticas a firmantes",
      "Evidencia y trazabilidad de cada firma",
    ],
    recomendado: "plata",
    paquetes: tiers(49, 400, 700, 1500, 2500, 10, 50, 100, 250, 500),
  },
  {
    id: "firma-nom151",
    nombre: "Firma NOM-151",
    categoria: "firma",
    unidad: "firmas",
    tagline: "Firma electrónica avanzada con la máxima validez legal en México.",
    incluye: [
      "Constancia de conservación NOM-151 (PSCC acreditado)",
      "Firma electrónica avanzada con validez en juicio",
      "Hasta 4 firmantes por documento",
      "Expediente digital con evidencia forense",
      "Sellado de tiempo y hash criptográfico",
      "Cumplimiento con Código de Comercio y LFEA",
    ],
    recomendado: "plata",
    paquetes: tiers(99, 750, 1400, 3250, 6000, 5, 50, 100, 250, 500),
  },
  {
    id: "firma-nom151-bio",
    nombre: "Firma NOM-151 + Biometría",
    categoria: "firma",
    unidad: "sesiones",
    tagline: "Firma NOM-151 vinculada a la validación facial del firmante.",
    incluye: [
      "Prueba de vida facial del firmante en tiempo real",
      "Firma NOM-151 con validez legal plena",
      "Hasta 2 firmantes por sesión biométrica",
      "Validación 1:1 contra identificación oficial",
      "Expediente con video y fotogramas de la sesión",
      "Constancia NOM-151 por cada documento firmado",
    ],
    recomendado: "plata",
    paquetes: tiers(130, 1500, 2700, 6625, 12500, 5, 50, 100, 250, 500),
  },
  {
    id: "firma-nom151-kyc",
    nombre: "Firma NOM-151 + KYC",
    categoria: "firma",
    unidad: "sesiones",
    tagline: "La solución más completa: onboarding con KYC y firma con validez legal.",
    incluye: [
      "Todo lo de Firma NOM-151 + Biometría",
      "KYC completo del firmante en la misma sesión",
      "OCR de identificación oficial integrado",
      "Consulta RENAPO, INE, OFAC, Interpol, SAT",
      "Expediente único: firma + identidad + biometría",
      "Ideal para cumplimiento AML / PLD / CNBV",
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
  "firma-nom151-bio": "signa_biometric",
  "firma-nom151-kyc": "signa_advanced_biometric",
  ine: "blacklist",
  curp: "official-list",
  "ocr-inteligente": "document",
  "ocr-id": "document",
};

// Construye el deep-link que la plataforma ya consume: /#/register/user-info?d=<base64>
// con el carrito embebido (mismo formato que el flujo actual de registro).
export function buildCheckoutUrl(
  items: { producto: Producto; paquete: Paquete }[],
  base = "https://platform.jaak.ai/#/register/user-info"
): string {
  const payload = {
    pk: [] as string[],
    products: items.map(({ producto, paquete }) => {
      const nombre = producto.nombre.split(" — ")[0];
      return {
        i: "",
        k: productKeys[producto.id] ?? producto.id,
        n: nombre,
        pr: Math.round(paquete.precio * (1 + IVA) * 100) / 100,
        c: "MXN",
        s: 0,
        d: `${nombre} ${paquete.nombre} ${paquete.cantidad}`,
        q: paquete.cantidad,
      };
    }),
  };
  const d = btoa(encodeURIComponent(JSON.stringify(payload)));
  return `${base}?d=${d}`;
}
