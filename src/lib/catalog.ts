// ─────────────────────────────────────────────────────────────────────────────
// Fase 2 (TO-809): el catálogo de autoservicio se vuelve data-driven.
// Consume el endpoint unificado GET /public/v1/catalog y lo mapea al modelo
// `Producto` que ya usa la UI, de modo que los componentes no cambian su forma.
// Mantiene el catálogo hardcodeado como *fallback* (Strangler-Fig): si el
// endpoint falla, la página sigue funcionando con los datos locales.
//
// Notas de mapeo:
// - El endpoint devuelve precios CON IVA; `Producto.paquetes.precio` es SIN IVA
//   (buildCheckoutUrl vuelve a aplicar IVA), así que dividimos ÷(1+IVA).
// - `unidad` (verificaciones/firmas/…) aún no viene del endpoint → mapa local
//   por slug con fallback por categoría. TODO: moverlo a catalog_display.
// ─────────────────────────────────────────────────────────────────────────────

import {
  IVA,
  categorias as fallbackCategorias,
  productos as fallbackProductos,
  type Categoria,
  type CategoriaId,
  type Paquete,
  type Producto,
} from "@/data/autoservicio-catalogo";

const API_BASE = process.env.JAAK_API_BASE_URL || "https://services.api.jaak.ai";

// Unidad de consumo por producto (no viene del endpoint todavía).
const UNIDAD_BY_SLUG: Record<string, string> = {
  kyc: "verificaciones",
  "firma-simple": "firmas",
  "firma-nom151": "firmas",
  "firma-nom151-bio": "sesiones",
  "firma-nom151-kyc": "sesiones",
  "efirma-sat": "firmas",
  "firma-certificada-sellos": "firmas",
  "consulta-ine": "consultas",
  "consulta-curp": "consultas",
  "listas-negras": "consultas",
  "ocr-inteligente": "tokens",
  "ocr-id": "tokens",
};
const UNIDAD_BY_GROUP: Record<string, string> = {
  identidad: "verificaciones",
  firma: "firmas",
  validaciones: "consultas",
  "listas-negras": "consultas",
  ocr: "tokens",
};

const TIER_IDS: Paquete["id"][] = ["cobre", "bronce", "plata", "oro", "platino"];
const isTier = (t: string): t is Paquete["id"] => (TIER_IDS as string[]).includes(t);

// ── Forma (parcial) de la respuesta del endpoint ──────────────────────────────
interface CatalogTier {
  id: string;
  tier: string;
  tierName: string;
  tierOrder: number;
  price: number; // CON IVA
  quota: { value: number; prefix?: string; postfix?: string };
}
interface CatalogProduct {
  slug: string;
  displayName: string;
  group: string;
  tagline: string;
  incluye: string[];
  recommendedTier: string;
  sellable: boolean;
  tiers: CatalogTier[];
}
interface CatalogResponse {
  products: CatalogProduct[];
  total: number;
}

// Precio CON IVA → SIN IVA (redondeado a centavos).
function sinIVA(conIVA: number): number {
  return Math.round((conIVA / (1 + IVA)) * 100) / 100;
}

function mapPaquete(t: CatalogTier): Paquete | null {
  if (!isTier(t.tier)) return null;
  return {
    id: t.tier,
    nombre: t.tierName || t.tier,
    cantidad: t.quota?.value ?? 0,
    precio: sinIVA(t.price),
  };
}

// Mapea un producto del endpoint al modelo `Producto` de la UI. Devuelve null si
// no tiene paquetes válidos (no se puede comprar).
export function mapProducto(p: CatalogProduct): Producto | null {
  const paquetes = (p.tiers || [])
    .map(mapPaquete)
    .filter((q): q is Paquete => q !== null)
    .sort((a, b) => TIER_IDS.indexOf(a.id) - TIER_IDS.indexOf(b.id));
  if (paquetes.length === 0) return null;

  return {
    id: p.slug,
    nombre: p.displayName,
    categoria: p.group as CategoriaId,
    unidad: UNIDAD_BY_SLUG[p.slug] || UNIDAD_BY_GROUP[p.group] || "unidades",
    tagline: p.tagline || "",
    incluye: p.incluye || [],
    recomendado: isTier(p.recommendedTier) ? p.recommendedTier : undefined,
    paquetes,
  };
}

export function mapCatalog(data: CatalogResponse): Producto[] {
  return (data.products || [])
    .map(mapProducto)
    .filter((p): p is Producto => p !== null);
}

// Fetch + mapeo, con fallback al catálogo hardcodeado si el endpoint falla.
// `categorias` sigue siendo taxonomía local estable (5 rótulos), no copy por
// producto — no es el hardcodeo que Fase 2 elimina.
export async function getAutoservicioCatalog(): Promise<{
  categorias: Categoria[];
  productos: Producto[];
}> {
  try {
    const res = await fetch(`${API_BASE}/public/v1/catalog`, {
      next: { revalidate: 300 },
    });
    if (!res.ok) throw new Error(`catalog ${res.status}`);
    const data: CatalogResponse = await res.json();
    const productos = mapCatalog(data);
    if (productos.length === 0) throw new Error("catalog empty");
    return { categorias: fallbackCategorias, productos };
  } catch {
    // Fallback seguro: la página no se rompe si el endpoint no responde.
    return { categorias: fallbackCategorias, productos: fallbackProductos };
  }
}
