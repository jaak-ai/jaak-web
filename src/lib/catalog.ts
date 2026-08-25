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
// - `unidad` (verificaciones/firmas/…) viene del endpoint (catalog_display);
//   se mantiene un mapa local por slug/categoría como fallback por si el
//   backend aún no lo trae (deploy en progreso).
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

// Los productos recurrentes (KYC/suscripción) van al checkout unificado /register
// con el plan KYC pre-seleccionado (TO-809 Fase 3 / AUTO-20). Opción b (SD-283).

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

// Segmento comercial del SKU (AUTO-7): mismo catálogo de productos, distinto
// empaque. `autoservicio` (paquetes estándar → /autoservicio) vs `enterprise`
// (alto volumen, pago anual → /autoservicio-enterprise). La fuente de verdad es
// el backend (`/public/v1/catalog` expone `segment` por tier), NO una lista en
// el front. Un tier sin `segment` es autoservicio (default del backfill AUTO-7).
export type Segment = "autoservicio" | "enterprise";
const tierSegment = (t: CatalogTier): Segment =>
  (t.segment as Segment) === "enterprise" ? "enterprise" : "autoservicio";

// ── Forma (parcial) de la respuesta del endpoint ──────────────────────────────
export interface CatalogTier {
  id: string;
  tier: string;
  tierName: string;
  tierOrder: number;
  price: number; // CON IVA
  segment?: string; // autoservicio | enterprise (AUTO-7)
  quota: { value: number; prefix?: string; postfix?: string };
}
export interface CatalogProduct {
  slug: string;
  displayName: string;
  group: string;
  unidad?: string; // sustantivo de consumo (del endpoint; fallback local abajo)
  tagline: string;
  incluye: string[];
  recommendedTier: string;
  sellable: boolean;
  billingType?: string; // one_time | recurring
  fulfillment?: { rail: string; productKey: string };
  tiers: CatalogTier[];
}
export interface CatalogResponse {
  products: CatalogProduct[];
  total: number;
}

// pricingIndex: slug → tier → pricing _id (para hidratar el checkout).
export type PricingIndex = Record<string, Record<string, string>>;

// Precio CON IVA → SIN IVA (redondeado a centavos).
function sinIVA(conIVA: number): number {
  return Math.round((conIVA / (1 + IVA)) * 100) / 100;
}

function mapPaquete(t: CatalogTier): Paquete | null {
  if (!t.tier) return null;
  return {
    id: t.tier,
    nombre: t.tierName || t.tier,
    cantidad: t.quota?.value ?? 0,
    precio: sinIVA(t.price),
  };
}

// Mapea un producto del endpoint al modelo `Producto` de la UI, quedándose solo
// con los tiers del `segment` pedido (AUTO-7/AUTO-8). Un mismo producto puede
// tener SKUs en ambos segmentos; por eso el filtro es a nivel tier. Devuelve null
// si no le queda ningún paquete vendible en ese segmento (no se muestra).
export function mapProducto(p: CatalogProduct, segment: Segment = "autoservicio"): Producto | null {
  // Orden desde el backend (tierOrder), no una lista fija en el front.
  const paquetes = [...(p.tiers || [])]
    .filter((t) => tierSegment(t) === segment)
    .sort((a, b) => a.tierOrder - b.tierOrder)
    .map(mapPaquete)
    .filter((q): q is Paquete => q !== null);
  if (paquetes.length === 0) return null;

  return {
    id: p.slug,
    nombre: p.displayName,
    categoria: p.group as CategoriaId,
    unidad: p.unidad || UNIDAD_BY_SLUG[p.slug] || UNIDAD_BY_GROUP[p.group] || "unidades",
    tagline: p.tagline || "",
    incluye: p.incluye || [],
    recomendado: p.recommendedTier || undefined,
    paquetes,
    plan: p.billingType === "recurring",
  };
}

export function mapCatalog(data: CatalogResponse, segment: Segment = "autoservicio"): Producto[] {
  // KYC y demás recurrentes SÍ se muestran (SD-283); entran al carrito como todo,
  // marcados `plan: true` para rutearlos al slot de plan del checkout unificado.
  return (data.products || [])
    .map((p) => mapProducto(p, segment))
    .filter((p): p is Producto => p !== null);
}

// pricingIndex (slug → tier → _id) desde la respuesta del endpoint, solo para los
// tiers del segmento pedido (el checkout hidrata con el _id del SKU correcto).
export function buildPricingIndex(data: CatalogResponse, segment: Segment = "autoservicio"): PricingIndex {
  const index: PricingIndex = {};
  for (const p of data.products || []) {
    for (const t of p.tiers || []) {
      if (t.tier && t.id && tierSegment(t) === segment) (index[p.slug] ??= {})[t.tier] = t.id;
    }
  }
  return index;
}

// productKeys (slug → productKey del backend) para el `k` del deep-link. Solo los
// productos con al menos un tier del segmento pedido.
export function buildProductKeys(data: CatalogResponse, segment: Segment = "autoservicio"): Record<string, string> {
  const keys: Record<string, string> = {};
  for (const p of data.products || []) {
    if (p.fulfillment?.productKey && (p.tiers || []).some((t) => tierSegment(t) === segment)) {
      keys[p.slug] = p.fulfillment.productKey;
    }
  }
  return keys;
}

export async function getAutoservicioCatalog(segment: Segment = "autoservicio"): Promise<{
  categorias: Categoria[];
  productos: Producto[];
  pricingIndex: PricingIndex;
  productKeys: Record<string, string>;
}> {
  try {
    const res = await fetch(`${API_BASE}/public/v1/catalog`, {
      next: { revalidate: 300 },
    });
    if (!res.ok) throw new Error(`catalog ${res.status}`);
    const data: CatalogResponse = await res.json();
    const productos = mapCatalog(data, segment);
    // Autoservicio: si el endpoint no trae productos, es una falla (siempre hay
    // catálogo estándar) → caemos al hardcodeado. Enterprise: vacío es un estado
    // VÁLIDO (aún no se cargan los 44 SKUs, AUTO-6), así que NO forzamos error ni
    // caemos a un fallback autoservicio que contaminaría la página enterprise.
    if (productos.length === 0 && segment === "autoservicio") throw new Error("catalog empty");
    return {
      categorias: fallbackCategorias,
      productos,
      pricingIndex: buildPricingIndex(data, segment),
      productKeys: buildProductKeys(data, segment),
    };
  } catch {
    // Fallback seguro SOLO para autoservicio: la página estándar no se rompe si el
    // endpoint no responde. Para enterprise no hay catálogo hardcodeado —
    // devolvemos vacío y la página muestra su estado "próximamente".
    return {
      categorias: fallbackCategorias,
      productos: segment === "enterprise" ? [] : fallbackProductos,
      pricingIndex: {},
      productKeys: {},
    };
  }
}
