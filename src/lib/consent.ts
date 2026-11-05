// Consentimiento para etiquetas publicitarias (Google Ads vía GTM y Meta Pixel).
//
// Alcance deliberadamente acotado: solo las rutas listadas en
// CONSENT_GATED_PATH_PREFIXES arrancan con las señales publicitarias en
// "denied" hasta que la persona acepte. El resto del sitio conserva su
// comportamiento actual (no hay banner global). Para extender el esquema a otra
// landing basta con añadir su prefijo aquí y montar <AdsConsentBanner />.

export const CONSENT_STORAGE_KEY = "jaak_ads_consent";
export const CONSENT_GATED_PATH_PREFIXES: readonly string[] = ["/webinar/firma-digital-mexico-nom-151"];

export type AdsConsent = "granted" | "denied";

export function parseStoredConsent(value: string | null | undefined): AdsConsent | null {
  return value === "granted" || value === "denied" ? value : null;
}

export function isConsentGatedPath(pathname: string): boolean {
  return CONSENT_GATED_PATH_PREFIXES.some((p) => pathname === p || pathname.startsWith(`${p}/`));
}

/**
 * Script inline (beforeInteractive en el root layout) que debe ejecutarse ANTES
 * de GTM y del Pixel: fija el Consent Mode v2 por defecto y expone
 * `window.__jaakAdsConsent` ("granted" | "denied") solo en rutas con gating.
 * `analytics_storage` se mantiene concedido: la medición de GA4 es la base de
 * esta campaña; lo que se condiciona son las señales publicitarias.
 */
export function buildConsentBootstrapScript(): string {
  return `(function(){try{
var P=${JSON.stringify(CONSENT_GATED_PATH_PREFIXES)},p=location.pathname;
if(!P.some(function(x){return p===x||p.indexOf(x+'/')===0})){return}
var s=null;try{s=localStorage.getItem(${JSON.stringify(CONSENT_STORAGE_KEY)})}catch(e){}
var st=s==='granted'?'granted':'denied';
window.__jaakAdsConsent=st;
window.dataLayer=window.dataLayer||[];
function gtag(){window.dataLayer.push(arguments)}
gtag('consent','default',{ad_storage:st,ad_user_data:st,ad_personalization:st,analytics_storage:'granted',wait_for_update:500});
}catch(e){}})();`;
}

/** Aplica la decisión a GTM (Consent Mode v2) y al Meta Pixel, y la persiste. Nunca lanza. */
export function applyAdsConsent(choice: AdsConsent): void {
  try {
    window.__jaakAdsConsent = choice;
    window.dataLayer = window.dataLayer || [];
    // gtag() exige empujar el objeto `arguments`, no un array.
    (function gtag(..._args: unknown[]) {
      // eslint-disable-next-line prefer-rest-params
      window.dataLayer.push(arguments as unknown as Record<string, unknown>);
    })("consent", "update", {
      ad_storage: choice,
      ad_user_data: choice,
      ad_personalization: choice,
    });
    window.fbq?.("consent", choice === "granted" ? "grant" : "revoke");
  } catch {
    /* el consentimiento nunca debe romper la página */
  }
  try {
    localStorage.setItem(CONSENT_STORAGE_KEY, choice);
  } catch {
    /* storage bloqueado: la decisión rige solo en esta carga */
  }
}

export function readStoredConsent(): AdsConsent | null {
  try {
    return parseStoredConsent(localStorage.getItem(CONSENT_STORAGE_KEY));
  } catch {
    return null;
  }
}

declare global {
  interface Window {
    __jaakAdsConsent?: AdsConsent;
    fbq?: (...args: unknown[]) => void;
  }
}
