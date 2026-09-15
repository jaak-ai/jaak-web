"use client";

/**
 * Pageview medible por página: empuja `page_view` al dataLayer de GTM y lo
 * replica al sink first-party `/api/lp-telemetry` (que a su vez reenvía a GA4
 * vía Measurement Protocol y a Kairos).
 *
 * Incluye `visitor_id` (localStorage, persona recurrente) y `session_id`
 * (sessionStorage, visita) para poder contar visitas y personas únicas, además
 * de canal/UTM y `bot_score` para filtrar tráfico automatizado.
 */

import { useEffect, useRef } from "react";
import { gtmEvent } from "@/components/GoogleTagManager";
import { buildTrafficIdentity, trafficClassLabel } from "@/lib/trafficIdentity";

type Props = {
  /** Identificador estable de la página, p. ej. "home" */
  page: string;
  /** Envío al sink first-party. Default: true */
  beacon?: boolean;
};

export default function PageViewTracker({ page, beacon = true }: Props) {
  const fired = useRef(false);

  useEffect(() => {
    if (fired.current) return;
    fired.current = true;

    let identity;
    try {
      identity = buildTrafficIdentity(window);
    } catch {
      return;
    }

    const payload = {
      page,
      page_path: identity.page_path,
      page_url: identity.page_url,
      visitor_id: identity.visitor_id,
      session_id: identity.session_id,
      session_started_at: identity.session_started_at,
      referrer: identity.referrer,
      referrer_host: identity.referrer_host,
      channel: identity.channel,
      traffic_class: identity.traffic_class,
      traffic_label: trafficClassLabel(identity.traffic_class),
      bot_score: identity.bot_score,
      bot_reasons: identity.bot_reasons.join(","),
      utm_source: identity.utm_source,
      utm_medium: identity.utm_medium,
      utm_campaign: identity.utm_campaign,
      utm_content: identity.utm_content,
      utm_term: identity.utm_term,
      gclid: identity.gclid,
      fbclid: identity.fbclid,
      device: identity.device,
      language: identity.language,
      tz: identity.tz,
      screen: identity.screen,
    };

    gtmEvent("page_view", payload);

    if (!beacon) return;
    try {
      const json = JSON.stringify({ event: "page_view", ...payload });
      if (navigator.sendBeacon) {
        navigator.sendBeacon(
          "/api/lp-telemetry",
          new Blob([json], { type: "application/json" })
        );
      } else {
        void fetch("/api/lp-telemetry", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: json,
          keepalive: true,
        });
      }
    } catch {
      /* la medición nunca debe romper la página */
    }
  }, [page, beacon]);

  return null;
}
