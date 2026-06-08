// ─────────────────────────────────────────────────────────────────────────────
// FUENTE ÚNICA DE VERDAD del catálogo de autoservicio.
// Toda la UI (cards, paquetes, comparación, carrito) se construye desde aquí,
// de modo que precios y cantidades son uniformes en todas las superficies.
// (Propuesta A — Catálogo / Marketplace)
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
    incluye: ["Prueba de vida (iBeta)", "Biometría facial 1:1", "OCR de identificación", "Listas nominales y negras"],
    recomendado: "plata",
    paquetes: tiers(99, 1500, 2800, 6625, 12500, 5, 50, 100, 250, 500),
  },
  {
    id: "firma-simple",
    nombre: "Firma Simple",
    categoria: "firma",
    unidad: "firmas",
    tagline: "Firma electrónica con aceptación, IP, dispositivo y sello de tiempo.",
    incluye: ["Aceptación con clic", "Registro de IP y dispositivo", "Sello de tiempo", "Evidencia descargable"],
    recomendado: "plata",
    paquetes: tiers(49, 400, 700, 1500, 2500, 10, 50, 100, 250, 500),
  },
  {
    id: "firma-nom151",
    nombre: "Firma NOM-151",
    categoria: "firma",
    unidad: "firmas",
    tagline: "Firma electrónica avanzada con la máxima validez legal en México.",
    incluye: ["Constancia NOM-151", "Conservación con sello certificado", "Cadena de custodia", "Expediente auditable"],
    recomendado: "plata",
    paquetes: tiers(99, 750, 1400, 3250, 6000, 5, 50, 100, 250, 500),
  },
  {
    id: "firma-nom151-bio",
    nombre: "Firma NOM-151 + Biometría",
    categoria: "firma",
    unidad: "firmas",
    tagline: "Firma NOM-151 vinculada a la validación facial del firmante.",
    incluye: ["Todo lo de NOM-151", "Validación biométrica del firmante", "Prueba de vida", "Vínculo firma–identidad"],
    recomendado: "plata",
    paquetes: tiers(130, 1500, 2700, 6625, 12500, 5, 50, 100, 250, 500),
  },
  {
    id: "firma-nom151-kyc",
    nombre: "Firma NOM-151 + KYC",
    categoria: "firma",
    unidad: "firmas",
    tagline: "La solución más completa: onboarding con KYC y firma con validez legal.",
    incluye: ["Todo lo de NOM-151 + Bio", "KYC biométrico completo", "Consulta de listas", "Expediente integrado"],
    recomendado: "plata",
    paquetes: tiers(174, 2625, 4725, 11594, 21875, 5, 50, 100, 250, 500),
  },
  {
    id: "ine",
    nombre: "Consulta INE",
    categoria: "validaciones",
    unidad: "consultas",
    tagline: "Valida la vigencia y autenticidad de una credencial ante el padrón electoral.",
    incluye: ["Validación ante INE/IFE", "Estatus de la credencial", "Respuesta en segundos", "Registro de consulta"],
    recomendado: "plata",
    paquetes: tiers(14, 105, 200, 475, 900, 10, 50, 100, 250, 500),
  },
  {
    id: "curp",
    nombre: "Consulta CURP",
    categoria: "validaciones",
    unidad: "consultas",
    tagline: "Valida la CURP ante RENAPO y obtén los datos biográficos asociados.",
    incluye: ["Validación ante RENAPO", "Datos biográficos", "Respuesta en segundos", "Registro de consulta"],
    recomendado: "plata",
    paquetes: tiers(14, 105, 200, 475, 900, 10, 50, 100, 250, 500),
  },
  {
    id: "ocr-inteligente",
    nombre: "OCR Inteligente",
    categoria: "ocr",
    unidad: "documentos",
    tagline: "Extrae información estructurada de +500 tipos de documentos con IA.",
    incluye: ["Actas, CSF, estados de cuenta", "Extracción estructurada", "Validación de campos", "API lista para integrar"],
    recomendado: "plata",
    paquetes: tiers(99, 1500, 2800, 6625, 12500, 5, 50, 100, 250, 500),
  },
  {
    id: "ocr-id",
    nombre: "OCR para Identificación Oficial",
    categoria: "ocr",
    unidad: "documentos",
    tagline: "Extrae datos y fotografía de INE, pasaporte y otras identificaciones.",
    incluye: ["INE y pasaporte", "Datos y fotografía", "Sin captura manual", "API lista para integrar"],
    recomendado: "plata",
    paquetes: tiers(99, 1500, 2800, 6625, 12500, 5, 50, 100, 250, 500),
  },
];

export function formatMXN(n: number): string {
  return new Intl.NumberFormat("es-MX", { style: "currency", currency: "MXN", maximumFractionDigits: 0 }).format(n);
}
