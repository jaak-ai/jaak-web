// Configuración y lógica pura de la landing del webinar JAAK × PSC Codex
// «El mapa de la firma digital en México». Sin dependencias de React ni del
// DOM para poder probarla con Vitest (ver firmaDigital.test.ts).

export const WEBINAR_SLUG = "firma-digital-mexico-nom-151";
export const WEBINAR_PATH = `/webinar/${WEBINAR_SLUG}`;
export const WEBINAR_URL = `https://jaak.ai${WEBINAR_PATH}`;

export const WEBINAR_TITLE = "El mapa de la firma digital en México";
export const WEBINAR_SEO_TITLE = "Firma digital en México y NOM-151 | Webinar JAAK + PSC Codex";
export const WEBINAR_SEO_DESCRIPTION =
  "Descubre cómo elegir una firma digital con identidad verificada, integridad y evidencia NOM-151. Webinar gratuito con JAAK y PSC Codex. 25 de noviembre.";

/* ── Fecha absoluta del evento (America/Mexico_City, UTC-6 sin horario de verano) ── */
export const EVENT_START_ISO = "2026-11-25T11:00:00-06:00";
export const EVENT_END_ISO = "2026-11-25T12:00:00-06:00";
export const EVENT_START_MS = Date.parse(EVENT_START_ISO);
export const EVENT_END_MS = Date.parse(EVENT_END_ISO);

/* ── Registro (GoToWebinar) ── */
export const REGISTRATION_BASE_URL = "https://attendee.gotowebinar.com/register/1928277772520615765";

export const ALLOWED_SOURCES = [
  "jaak_linkedin",
  "jaak_facebook",
  "psc_personal",
  "psc_linkedin",
  "psc_email",
] as const;
export type WebinarSource = (typeof ALLOWED_SOURCES)[number];

export const SOURCE_STORAGE_KEY = "jaak_webinar_source";

export function isWebinarSource(value: unknown): value is WebinarSource {
  return typeof value === "string" && (ALLOWED_SOURCES as readonly string[]).includes(value);
}

/** Normaliza (trim + minúsculas) y valida contra la lista cerrada; null si no es reconocida. */
export function parseSource(raw: string | null | undefined): WebinarSource | null {
  const value = (raw ?? "").trim().toLowerCase();
  return isWebinarSource(value) ? value : null;
}

/**
 * Procedencia de la sesión. Una fuente válida en la URL manda y reemplaza a la
 * guardada; una ausente o no reconocida no borra la que ya se conservó
 * (la procedencia se mantiene durante la sesión).
 */
export function resolveSource(search: string, stored: string | null | undefined): WebinarSource | null {
  const fromUrl = parseSource(new URLSearchParams(search).get("source"));
  return fromUrl ?? parseSource(stored);
}

/** Enlace de GoToWebinar: con `source` solo si es una fuente admitida; si no, el enlace base. */
export function buildRegistrationUrl(source: WebinarSource | null): string {
  if (!source) return REGISTRATION_BASE_URL;
  const url = new URL(REGISTRATION_BASE_URL);
  url.searchParams.set("source", source);
  return url.toString();
}

/* ── Estado del evento y cuenta regresiva ── */
export type EventPhase = "upcoming" | "live" | "ended";

export function getEventPhase(nowMs: number): EventPhase {
  if (nowMs < EVENT_START_MS) return "upcoming";
  if (nowMs < EVENT_END_MS) return "live";
  return "ended";
}

export interface CountdownParts {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

/** Tiempo restante hasta el inicio, calculado siempre contra la fecha absoluta. */
export function getCountdownParts(nowMs: number, targetMs: number = EVENT_START_MS): CountdownParts {
  const totalSeconds = Math.max(0, Math.floor((targetMs - nowMs) / 1000));
  return {
    days: Math.floor(totalSeconds / 86400),
    hours: Math.floor((totalSeconds % 86400) / 3600),
    minutes: Math.floor((totalSeconds % 3600) / 60),
    seconds: totalSeconds % 60,
  };
}

/* ── Enlaces oficiales ── */
export const LINKS = {
  jaak: "https://jaak.ai",
  jaakLinkedin: "https://mx.linkedin.com/company/jaakmx",
  psc: "https://psccodex.com",
  pscPrivacy: "https://psccodex.com/aviso-de-privacidad",
  pscLinkedin: "https://mx.linkedin.com/company/psc-codex",
  ariannaLinkedin: "https://mx.linkedin.com/in/ariannaquezada",
  benjaminLinkedin: "https://mx.linkedin.com/in/benjaminglez1",
  // Fuentes oficiales de la NOM-151 (las mismas que ya cita /cumplimiento/nom-151)
  nom151Dof: "https://www.dof.gob.mx/nota_detalle.php?codigo=5478024&fecha=30/03/2017",
  codigoComercio: "https://www.diputados.gob.mx/LeyesBiblio/pdf/CCom.pdf",
  pscDirectorio: "https://psc.economia.gob.mx/directorio.html",
  gotoPrivacy: "https://www.goto.com/company/legal/privacy",
} as const;

/** Evento GA4 de un clic en un enlace externo, con su destino normalizado. */
export function outboundDomain(href: string): string {
  try {
    return new URL(href).hostname.replace(/^www\./, "");
  } catch {
    return "";
  }
}
