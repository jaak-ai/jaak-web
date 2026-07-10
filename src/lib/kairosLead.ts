// Server-side forwarder: mirrors form submissions into Kairos public lead
// intake (POST /api/v1/public/leads) so campaign attribution (utm_*) lands on
// the lead row. HubSpot remains the primary CRM path; this call must never
// break the user-facing flow — it swallows every error and just reports
// success/failure for logging.

const KAIROS_TIMEOUT_MS = 5000;

export interface KairosLeadInput {
  email: string;
  phone?: string;
  contact_name?: string;
  company_name?: string;
  message?: string;
  turnstile_token?: string;
  utm_source?: string;
  utm_medium?: string;
  utm_campaign?: string;
  utm_term?: string;
  utm_content?: string;
  page_url?: string;
}

export function buildKairosLeadPayload(input: KairosLeadInput): Record<string, string> {
  const payload: Record<string, string> = { email: input.email };
  const optional: (keyof KairosLeadInput)[] = [
    "phone",
    "contact_name",
    "company_name",
    "message",
    "turnstile_token",
    "utm_source",
    "utm_medium",
    "utm_campaign",
    "utm_term",
    "utm_content",
    "page_url",
  ];
  for (const key of optional) {
    const value = input[key];
    if (typeof value === "string" && value.trim() !== "") payload[key] = value;
  }
  return payload;
}

export async function forwardLeadToKairos(input: KairosLeadInput): Promise<boolean> {
  const baseUrl = process.env.KAIROS_API_URL;
  if (!baseUrl || !input.email) return false;

  const controller = new AbortController();
  const timer = setTimeout(() => controller.abort(), KAIROS_TIMEOUT_MS);
  try {
    const headers: Record<string, string> = {
      "Content-Type": "application/json",
      // Kairos validates the Origin header against PUBLIC_LEAD_ORIGINS.
      Origin: process.env.NEXT_PUBLIC_SITE_ORIGIN || "https://www.jaak.ai",
    };
    const apiKey = process.env.KAIROS_LEAD_API_KEY;
    if (apiKey) headers["X-LEAD-API-KEY"] = apiKey;

    const res = await fetch(`${baseUrl.replace(/\/$/, "")}/api/v1/public/leads`, {
      method: "POST",
      headers,
      body: JSON.stringify(buildKairosLeadPayload(input)),
      signal: controller.signal,
    });
    if (!res.ok) {
      console.error("Kairos lead forward failed:", res.status, await res.text().catch(() => ""));
      return false;
    }
    return true;
  } catch (e) {
    console.error("Kairos lead forward error:", e);
    return false;
  } finally {
    clearTimeout(timer);
  }
}
