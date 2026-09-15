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
import {
  buildTrafficIdentity,
  trafficClassLabel,
  type TrafficIdentity,
} from "@/lib/trafficIdentity";

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

    let identity: TrafficIdentity;
    try {
      identity = buildTrafficIdentity(window);
    } catch {
      return;
    }

    // Partimos de la identidad completa para no desincronizarnos cuando
    // trafficIdentity gane campos nuevos; solo aplanamos lo que el sink
    // necesita en primitivos (GA4 Measurement Protocol no admite arrays).
    const payload = {
      ...identity,
      page,
      bot_reasons: identity.bot_reasons.join(","),
      traffic_label: trafficClassLabel(identity.traffic_class),
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
