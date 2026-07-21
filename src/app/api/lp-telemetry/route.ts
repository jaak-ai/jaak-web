import { NextRequest, NextResponse } from "next/server";

/**
 * First-party LP telemetry sink.
 * - Always 204/200 so clients don't retry-storm.
 * - Forwards to GA4 Measurement Protocol when GA4_MEASUREMENT_ID + GA4_API_SECRET set.
 * - Logs structured JSON in server logs (Vercel) for ad-hoc diagnosis.
 *
 * Body: { event, session_id, visitor_id, channel, traffic_class, bot_score, ... }
 */

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

type TelemetryBody = Record<string, unknown>;

const MAX_BYTES = 12_000;

function clampBody(raw: string): TelemetryBody | null {
  if (!raw || raw.length > MAX_BYTES) return null;
  try {
    const data = JSON.parse(raw) as TelemetryBody;
    if (!data || typeof data !== "object") return null;
    return data;
  } catch {
    return null;
  }
}

async function forwardGa4(body: TelemetryBody, clientIp: string | null) {
  const measurementId = process.env.GA4_MEASUREMENT_ID || process.env.NEXT_PUBLIC_GA4_MEASUREMENT_ID;
  const apiSecret = process.env.GA4_API_SECRET;
  if (!measurementId || !apiSecret) return { forwarded: false as const };

  const clientId =
    (typeof body.visitor_id === "string" && body.visitor_id) ||
    (typeof body.session_id === "string" && body.session_id) ||
    "anon.1";

  const eventName = String(body.event || "lp_telemetry").replace(/[^a-zA-Z0-9_]/g, "_").slice(0, 40);

  // GA4 MP custom params must be primitive
  const params: Record<string, string | number | boolean> = {};
  for (const [k, v] of Object.entries(body)) {
    if (k === "event") continue;
    if (typeof v === "string") params[k.slice(0, 40)] = v.slice(0, 100);
    else if (typeof v === "number" && Number.isFinite(v)) params[k.slice(0, 40)] = v;
    else if (typeof v === "boolean") params[k.slice(0, 40)] = v;
  }
  params.engagement_time_msec = typeof body.engagement_ms === "number" ? body.engagement_ms : 1;

  const url = `https://www.google-analytics.com/mp/collect?measurement_id=${encodeURIComponent(
    measurementId
  )}&api_secret=${encodeURIComponent(apiSecret)}`;

  const res = await fetch(url, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      client_id: clientId.slice(0, 64),
      user_id: typeof body.visitor_id === "string" ? body.visitor_id.slice(0, 64) : undefined,
      timestamp_micros: String(Date.now() * 1000),
      events: [{ name: eventName, params }],
      // ip_override not always honored; still useful when available
      ...(clientIp ? { ip_override: clientIp } : {}),
    }),
  });

  return { forwarded: true as const, status: res.status };
}

async function forwardKairos(body: TelemetryBody, origin: string | null) {
  const base = process.env.KAIROS_API_URL || process.env.NEXT_PUBLIC_KAIROS_API_URL;
  if (!base) return { forwarded: false as const };
  const url = `${base.replace(/\/$/, "")}/api/v1/public/lp-telemetry`;
  const headers: Record<string, string> = { "Content-Type": "application/json" };
  const key = process.env.KAIROS_LEAD_API_KEY;
  if (key) headers["X-LEAD-API-KEY"] = key;
  if (origin) headers.Origin = origin;
  else if (process.env.NEXT_PUBLIC_SITE_ORIGIN) headers.Origin = process.env.NEXT_PUBLIC_SITE_ORIGIN;

  // Normalize page path for Kairos summary filters
  if (typeof body.page === "string" && body.page && !String(body.page).startsWith("/")) {
    body.page = `/${body.page}`;
  }
  if (!body.page && typeof body.page_name === "string") {
    body.page = `/${body.page_name}`.replace(/\/+/g, "/");
  }

  try {
    const res = await fetch(url, {
      method: "POST",
      headers,
      body: JSON.stringify(body),
    });
    return { forwarded: true as const, status: res.status };
  } catch {
    return { forwarded: false as const };
  }
}

export async function POST(req: NextRequest) {
  const raw = await req.text();
  const body = clampBody(raw);
  if (!body) {
    return NextResponse.json({ ok: false }, { status: 400 });
  }

  const ip =
    req.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ||
    req.headers.get("x-real-ip") ||
    null;
  const origin = req.headers.get("origin");

  const line = {
    src: "lp-telemetry",
    ts: new Date().toISOString(),
    ip,
    ua: req.headers.get("user-agent")?.slice(0, 200) || "",
    event: body.event,
    session_id: body.session_id,
    visitor_id: body.visitor_id,
    channel: body.channel,
    traffic_class: body.traffic_class,
    bot_score: body.bot_score,
    page: body.page || body.page_name,
    utm_campaign: body.utm_campaign,
    max_scroll_pct: body.max_scroll_pct,
    engagement_ms: body.engagement_ms,
  };

  console.info(JSON.stringify(line));

  let ga: { forwarded: boolean; status?: number } = { forwarded: false };
  let kairos: { forwarded: boolean; status?: number } = { forwarded: false };
  try {
    ga = await forwardGa4(body, ip);
  } catch (err) {
    console.warn("lp-telemetry ga4 forward failed", err);
  }
  try {
    kairos = await forwardKairos(body, origin);
  } catch (err) {
    console.warn("lp-telemetry kairos forward failed", err);
  }

  return NextResponse.json(
    { ok: true, ga4: ga.forwarded, kairos: kairos.forwarded },
    { status: 200 }
  );
}

export async function OPTIONS() {
  return new NextResponse(null, {
    status: 204,
    headers: {
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Methods": "POST, OPTIONS",
      "Access-Control-Allow-Headers": "Content-Type",
    },
  });
}
