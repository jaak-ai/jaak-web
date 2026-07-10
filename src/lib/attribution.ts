// First-party UTM attribution helpers.
// Funciones puras + persistAttribution (storage inyectado, nunca lanza).
// La captura en carga de módulo vive en CloudflareTurnstile.tsx, así los UTMs
// sobreviven la navegación dentro del funnel y llegan a Kairos en cada submit.

export const UTM_STORAGE_KEY = "jaak_utm_params";

export interface AttributionParams {
  utm_source: string;
  utm_medium: string;
  utm_campaign: string;
  utm_content: string;
  utm_term: string;
  /** Autoservicio SKU selection (e.g. "firma-simple.cobre"), kept for context. */
  sel: string;
}

const EMPTY: AttributionParams = {
  utm_source: "",
  utm_medium: "",
  utm_campaign: "",
  utm_content: "",
  utm_term: "",
  sel: "",
};

/** Parses attribution params from a query string. Returns null when none present. */
export function readUtmFromSearch(search: string): AttributionParams | null {
  const params = new URLSearchParams(search);
  const data: AttributionParams = {
    utm_source: params.get("utm_source") || "",
    utm_medium: params.get("utm_medium") || "",
    utm_campaign: params.get("utm_campaign") || "",
    utm_content: params.get("utm_content") || "",
    utm_term: params.get("utm_term") || "",
    sel: params.get("sel") || "",
  };
  const hasAny = Object.values(data).some((v) => v !== "");
  return hasAny ? data : null;
}

/**
 * Merges fresh URL params over previously stored ones. URL wins per field,
 * but an absent URL field never erases a stored value (partial URLs keep
 * earlier attribution).
 */
export function mergeAttribution(
  fromUrl: Partial<AttributionParams> | null,
  stored: Partial<AttributionParams> | null
): AttributionParams {
  const result: AttributionParams = { ...EMPTY, ...normalize(stored) };
  const url = normalize(fromUrl);
  for (const key of Object.keys(EMPTY) as (keyof AttributionParams)[]) {
    if (url[key]) result[key] = url[key] as string;
  }
  return result;
}

/** Subconjunto de Storage que necesita la atribución (inyectable en tests). */
export interface AttributionStorage {
  getItem(key: string): string | null;
  setItem(key: string, value: string): void;
}

/**
 * Lee UTMs del query string, los mezcla con lo ya almacenado y persiste bajo
 * UTM_STORAGE_KEY. Nunca lanza: con storage bloqueado (webviews de email,
 * cookies deshabilitadas) la atribución se pierde en silencio en vez de tirar
 * la página. Devuelve true si persistió.
 */
export function persistAttribution(
  search: string,
  storage: AttributionStorage,
  capturedAt: number
): boolean {
  const fromUrl = readUtmFromSearch(search);
  if (!fromUrl) return false;
  try {
    let stored: Partial<AttributionParams> | null = null;
    try {
      const raw = storage.getItem(UTM_STORAGE_KEY);
      stored = raw ? (JSON.parse(raw) as Partial<AttributionParams>) : null;
    } catch {
      stored = null;
    }
    storage.setItem(
      UTM_STORAGE_KEY,
      JSON.stringify({ ...mergeAttribution(fromUrl, stored), captured_at: capturedAt })
    );
    return true;
  } catch {
    return false;
  }
}

function normalize(data: Partial<AttributionParams> | null): Partial<AttributionParams> {
  if (!data) return {};
  const out: Partial<AttributionParams> = {};
  for (const key of Object.keys(EMPTY) as (keyof AttributionParams)[]) {
    const value = data[key];
    if (typeof value === "string" && value !== "") out[key] = value;
  }
  return out;
}
