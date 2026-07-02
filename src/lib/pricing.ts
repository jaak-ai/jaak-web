// ─────────────────────────────────────────────────────────────────────────────
// Hidratación de los IDs de pricing reales desde la API pública de JAAK.
//
// El catálogo de autoservicio (autoservicio-catalogo.ts) es la fuente de la copy
// y la estructura, pero NO conoce los `_id` de pricing de la plataforma — y el
// checkout de /register los exige (si el producto llega sin `id`, aborta con
// "Tu sesión está incompleta"). Aquí resolvemos, por cada producto+tier del
// catálogo, su `_id` real consultando `/public/v1/product-pricing`.
//
// El join se hace por (etiqueta de producto + tier), NO por `productKey`, porque
// el backend reutiliza la misma key para productos distintos (`blacklist` cubre
// INE/CURP/Listas; `document` cubre los dos OCR) — solo el texto los distingue.
// ─────────────────────────────────────────────────────────────────────────────

const API_BASE = process.env.JAAK_API_BASE_URL || "https://services.api.jaak.ai";

// Índice: productId (del catálogo) → tierId (cobre…platino) → pricing `_id`.
export type PricingIndex = Record<string, Record<string, string>>;

// Mapa explícito: id de producto del catálogo → etiqueta con la que el backend
// nombra ese producto dentro de `description` (el prefijo antes del tier).
// KYC se omite a propósito: no tiene renglón de pricing comprable en producción.
const BACKEND_LABEL: Record<string, string> = {
  "firma-simple": "Firma Simple",
  "firma-nom151": "Firma NOM151",
  "firma-nom151-bio": "Firma NOM151 + BIO",
  "firma-nom151-kyc": "Firma NOM151 + KYC",
  ine: "Consulta INE",
  curp: "Consulta CURP",
  "listas-negras": "Listas Negras",
  "ocr-inteligente": "OCR Inteligente",
  "ocr-id": "OCR para Identificación Oficial",
};

const TIERS = ["cobre", "bronce", "plata", "oro", "platino"] as const;

const norm = (s: string) => (s || "").replace(/\s+/g, " ").trim().toLowerCase();

interface PricingRow {
  id: string;
  productKey: string;
  productName: string;
  description: string;
  quota: number;
  price: number;
}

// Deriva (etiqueta, tier) de un `description` del backend, replicando la misma
// normalización que usa /register: normaliza espacios, ubica el keyword de tier
// y toma como etiqueta el texto anterior.
function deriveLabelTier(description: string): { label: string; tier: string } | null {
  const raw = (description || "").replace(/\s+/g, " ").trim();
  if (!raw) return null;
  const idx = TIERS.findIndex((t) => new RegExp(`\\b${t}\\b`, "i").test(raw));
  if (idx === -1) return null;
  const tier = TIERS[idx];
  const label = raw
    .replace(new RegExp(`\\b${tier}\\b.*$`, "i"), "")
    .replace(/[\s\-·|]+$/, "")
    .trim();
  if (!label) return null;
  return { label, tier };
}

// Consulta la API y construye el índice productId → tier → `_id`.
// Ante cualquier fallo devuelve un índice vacío: el checkout hará su fallback
// (sin `id`, como hoy) en vez de romper el render de la página.
export async function getPricingIndex(): Promise<PricingIndex> {
  const index: PricingIndex = {};
  try {
    const res = await fetch(`${API_BASE}/public/v1/product-pricing`, {
      next: { revalidate: 300 },
    });
    if (!res.ok) return index;
    const data = await res.json();
    const rows: PricingRow[] = data?.items ?? (Array.isArray(data) ? data : []);

    // etiqueta+tier (normalizados) → primer `_id` visto
    const byLabelTier = new Map<string, string>();
    for (const row of rows) {
      const dt = deriveLabelTier(row.description);
      if (!dt || !row.id) continue;
      const key = `${norm(dt.label)}||${dt.tier}`;
      if (!byLabelTier.has(key)) byLabelTier.set(key, row.id);
    }

    for (const [productId, label] of Object.entries(BACKEND_LABEL)) {
      for (const tier of TIERS) {
        const id = byLabelTier.get(`${norm(label)}||${tier}`);
        if (id) (index[productId] ??= {})[tier] = id;
      }
    }
  } catch {
    // red/parseo → índice vacío (fallback en buildCheckoutUrl)
  }
  return index;
}
