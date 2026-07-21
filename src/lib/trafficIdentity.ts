/**
 * First-party traffic identity + bot heuristics for LP diagnostics.
 * Pure browser helpers — no secrets. Pair with gtmEvent + optional /api/lp-telemetry.
 */

export const VISITOR_KEY = "jaak_vid";
export const SESSION_KEY = "jaak_sid";
export const SESSION_META_KEY = "jaak_sid_meta";

export type TrafficChannel =
  | "email"
  | "paid_search"
  | "paid_social"
  | "organic_search"
  | "organic_social"
  | "referral"
  | "direct"
  | "internal"
  | "unknown";

export interface TrafficIdentity {
  visitor_id: string;
  session_id: string;
  /** ISO */
  session_started_at: string;
  page_path: string;
  page_url: string;
  referrer: string;
  referrer_host: string;
  channel: TrafficChannel;
  utm_source: string;
  utm_medium: string;
  utm_campaign: string;
  utm_content: string;
  utm_term: string;
  gclid: string;
  fbclid: string;
  ttclid: string;
  msclkid: string;
  li_fat_id: string;
  device: "mobile" | "tablet" | "desktop";
  ua: string;
  language: string;
  tz: string;
  screen: string;
  /** 0–100; >=70 treat as likely bot for analysis filters */
  bot_score: number;
  bot_reasons: string[];
  traffic_class: "likely_human" | "suspicious" | "likely_bot";
  /** heuristic purchase intent proxy from engagement (filled later) */
  engagement_ms?: number;
}

function uid(prefix: string): string {
  const rand =
    typeof crypto !== "undefined" && "randomUUID" in crypto
      ? crypto.randomUUID().replace(/-/g, "")
      : `${Date.now().toString(36)}${Math.random().toString(36).slice(2, 12)}`;
  return `${prefix}_${rand.slice(0, 24)}`;
}

function safeStorage(kind: "local" | "session"): Storage | null {
  try {
    if (typeof window === "undefined") return null;
    return kind === "local" ? window.localStorage : window.sessionStorage;
  } catch {
    return null;
  }
}

export function getOrCreateVisitorId(): string {
  const ls = safeStorage("local");
  const ss = safeStorage("session");
  const existing = ls?.getItem(VISITOR_KEY) || ss?.getItem(VISITOR_KEY);
  if (existing) return existing;
  const id = uid("v");
  try {
    ls?.setItem(VISITOR_KEY, id);
    ss?.setItem(VISITOR_KEY, id);
  } catch {
    /* ignore */
  }
  return id;
}

export function getOrCreateSessionId(): string {
  const ss = safeStorage("session");
  const existing = ss?.getItem(SESSION_KEY);
  if (existing) return existing;
  const id = uid("s");
  try {
    ss?.setItem(SESSION_KEY, id);
    ss?.setItem(
      SESSION_META_KEY,
      JSON.stringify({ started_at: new Date().toISOString() })
    );
  } catch {
    /* ignore */
  }
  return id;
}

function hostOf(url: string): string {
  try {
    return new URL(url).hostname.replace(/^www\./, "");
  } catch {
    return "";
  }
}

const SEARCH_HOSTS = [
  "google.",
  "bing.",
  "yahoo.",
  "duckduckgo.",
  "ecosia.",
  "search.brave.",
  "yandex.",
];
const SOCIAL_HOSTS = [
  "facebook.",
  "fb.",
  "instagram.",
  "t.co",
  "twitter.",
  "x.com",
  "linkedin.",
  "lnkd.",
  "tiktok.",
  "youtube.",
  "youtu.be",
  "pinterest.",
  "reddit.",
  "whatsapp.",
  "telegram.",
  "threads.",
];
const PAID_MEDIUM = /^(cpc|ppc|paid|paidsearch|paid_social|paidsocial|display|retargeting|retarget|ads?)$/i;
const EMAIL_MEDIUM = /^(email|e-mail|newsletter|crm|kairos|outbound)$/i;
const SOCIAL_MEDIUM = /^(social|organic_social|sm)$/i;

export function classifyChannel(input: {
  utm_source: string;
  utm_medium: string;
  gclid: string;
  fbclid: string;
  ttclid: string;
  msclkid: string;
  referrer_host: string;
  page_host: string;
}): TrafficChannel {
  const { utm_source, utm_medium, gclid, fbclid, ttclid, msclkid, referrer_host, page_host } =
    input;
  const src = utm_source.toLowerCase();
  const med = utm_medium.toLowerCase();

  if (gclid || msclkid || med === "cpc" || med === "ppc" || med === "paidsearch") {
    return "paid_search";
  }
  if (fbclid || ttclid || /paid.?social|paidsocial|cpm/.test(med)) {
    return "paid_social";
  }
  if (EMAIL_MEDIUM.test(med) || src.includes("kairos") || src === "email") {
    return "email";
  }
  if (PAID_MEDIUM.test(med)) {
    if (SOCIAL_HOSTS.some((h) => src.includes(h.replace(".", ""))) || SOCIAL_MEDIUM.test(med)) {
      return "paid_social";
    }
    return "paid_search";
  }
  if (SOCIAL_MEDIUM.test(med)) return "organic_social";
  if (med === "organic" || med === "seo") return "organic_search";

  if (referrer_host) {
    if (referrer_host === page_host || referrer_host.endsWith(".jaak.ai")) return "internal";
    if (SEARCH_HOSTS.some((h) => referrer_host.includes(h))) return "organic_search";
    if (SOCIAL_HOSTS.some((h) => referrer_host.includes(h))) return "organic_social";
    return "referral";
  }

  if (!utm_source && !utm_medium && !gclid && !fbclid) return "direct";
  return "unknown";
}

export function scoreBot(win: Window): { score: number; reasons: string[] } {
  const reasons: string[] = [];
  let score = 0;
  const nav = win.navigator;
  const ua = nav.userAgent || "";

  // Explicit automation
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const anyNav = nav as any;
  if (anyNav.webdriver) {
    score += 45;
    reasons.push("webdriver");
  }
  if (/HeadlessChrome|PhantomJS|Puppeteer|Playwright|Slackbot|WhatsApp|bot|crawler|spider|preview/i.test(ua)) {
    score += 40;
    reasons.push("ua_bot");
  }
  if (!nav.languages || nav.languages.length === 0) {
    score += 15;
    reasons.push("no_languages");
  }
  if (nav.plugins && nav.plugins.length === 0 && !/Mobile|Android|iPhone/i.test(ua)) {
    score += 10;
    reasons.push("no_plugins");
  }
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  if (!(win as any).chrome && /Chrome\//.test(ua) && !/Edg\//.test(ua) && !/OPR\//.test(ua)) {
    score += 10;
    reasons.push("chrome_missing");
  }
  if (win.outerWidth === 0 && win.outerHeight === 0) {
    score += 20;
    reasons.push("zero_outer");
  }
  // Very small viewports common in some scrapers
  if (win.innerWidth > 0 && win.innerWidth < 100) {
    score += 15;
    reasons.push("tiny_viewport");
  }
  // Notification permission denied instantly is normal; skip
  // Connection downlink 0 sometimes headless
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const conn = (nav as any).connection;
  if (conn && conn.downlink === 0 && conn.rtt === 0) {
    score += 10;
    reasons.push("zero_network");
  }

  return { score: Math.min(100, score), reasons };
}

function deviceOf(win: Window): "mobile" | "tablet" | "desktop" {
  const w = win.innerWidth || 0;
  if (w > 0 && w < 768) return "mobile";
  if (w >= 768 && w < 1024) return "tablet";
  return "desktop";
}

export function buildTrafficIdentity(win: Window = window): TrafficIdentity {
  const params = new URLSearchParams(win.location.search);
  const get = (k: string) => params.get(k) || "";
  const referrer = document.referrer || "";
  const referrer_host = hostOf(referrer);
  const page_host = win.location.hostname.replace(/^www\./, "");
  const utm = {
    utm_source: get("utm_source"),
    utm_medium: get("utm_medium"),
    utm_campaign: get("utm_campaign"),
    utm_content: get("utm_content"),
    utm_term: get("utm_term"),
  };
  const clicks = {
    gclid: get("gclid"),
    fbclid: get("fbclid"),
    ttclid: get("ttclid"),
    msclkid: get("msclkid"),
    li_fat_id: get("li_fat_id"),
  };
  const bot = scoreBot(win);
  const traffic_class =
    bot.score >= 70 ? "likely_bot" : bot.score >= 35 ? "suspicious" : "likely_human";

  let session_started_at = new Date().toISOString();
  try {
    const raw = sessionStorage.getItem(SESSION_META_KEY);
    if (raw) {
      const meta = JSON.parse(raw) as { started_at?: string };
      if (meta.started_at) session_started_at = meta.started_at;
    }
  } catch {
    /* ignore */
  }

  return {
    visitor_id: getOrCreateVisitorId(),
    session_id: getOrCreateSessionId(),
    session_started_at,
    page_path: win.location.pathname,
    page_url: win.location.href,
    referrer,
    referrer_host,
    channel: classifyChannel({
      ...utm,
      ...clicks,
      referrer_host,
      page_host,
    }),
    ...utm,
    ...clicks,
    device: deviceOf(win),
    ua: (navigator.userAgent || "").slice(0, 300),
    language: navigator.language || "",
    tz: Intl.DateTimeFormat().resolvedOptions().timeZone || "",
    screen: `${win.screen?.width || 0}x${win.screen?.height || 0}`,
    bot_score: bot.score,
    bot_reasons: bot.reasons,
    traffic_class,
  };
}

export function trafficClassLabel(c: TrafficIdentity["traffic_class"]): string {
  if (c === "likely_bot") return "bot";
  if (c === "suspicious") return "suspicious";
  return "human";
}
