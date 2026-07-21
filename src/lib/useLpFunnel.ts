"use client";

/**
 * LP funnel diagnostics: scroll, engagement, pointer, FAQ, CTA impression, heartbeat.
 * Pushes to GTM dataLayer + optional first-party /api/lp-telemetry.
 */

import { useEffect, useRef } from "react";
import { gtmEvent } from "@/components/GoogleTagManager";
import {
  buildTrafficIdentity,
  type TrafficIdentity,
  trafficClassLabel,
} from "@/lib/trafficIdentity";

export type LpFunnelConfig = {
  page: string;
  experiment: string;
  sku?: string;
  payment_mode?: string;
  /** default true */
  beacon?: boolean;
};

type FunnelState = {
  identity: TrafficIdentity;
  started_at: number;
  max_scroll: number;
  pointer_moves: number;
  pointer_downs: number;
  keys: number;
  engaged: boolean;
  scroll_marks: Set<number>;
  cta_impressed: boolean;
  faq_opens: number;
  last_section: string;
};

function push(event: string, payload: Record<string, unknown>) {
  gtmEvent(event, payload);
}

function beacon(body: Record<string, unknown>, enabled: boolean) {
  if (!enabled || typeof window === "undefined") return;
  try {
    const json = JSON.stringify(body);
    if (navigator.sendBeacon) {
      const blob = new Blob([json], { type: "application/json" });
      navigator.sendBeacon("/api/lp-telemetry", blob);
      return;
    }
    void fetch("/api/lp-telemetry", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: json,
      keepalive: true,
    });
  } catch {
    /* non-fatal */
  }
}

function common(state: FunnelState, extra: Record<string, unknown> = {}) {
  const id = state.identity;
  return {
    page: id.page_path,
    experiment: extra.experiment,
    visitor_id: id.visitor_id,
    session_id: id.session_id,
    channel: id.channel,
    traffic_class: id.traffic_class,
    traffic_label: trafficClassLabel(id.traffic_class),
    bot_score: id.bot_score,
    bot_reasons: id.bot_reasons.join(","),
    utm_source: id.utm_source,
    utm_medium: id.utm_medium,
    utm_campaign: id.utm_campaign,
    utm_content: id.utm_content,
    utm_term: id.utm_term,
    gclid: id.gclid,
    fbclid: id.fbclid,
    ttclid: id.ttclid,
    msclkid: id.msclkid,
    referrer_host: id.referrer_host,
    device: id.device,
    language: id.language,
    tz: id.tz,
    screen: id.screen,
    engagement_ms: Date.now() - state.started_at,
    max_scroll_pct: state.max_scroll,
    pointer_moves: state.pointer_moves,
    pointer_downs: state.pointer_downs,
    ...extra,
  };
}

/**
 * Mount once on LP. Tracks identity + progressive funnel events.
 */
export function useLpFunnel(config: LpFunnelConfig) {
  const stateRef = useRef<FunnelState | null>(null);
  const cfg = config;

  useEffect(() => {
    if (typeof window === "undefined") return;

    const identity = buildTrafficIdentity(window);
    const state: FunnelState = {
      identity,
      started_at: Date.now(),
      max_scroll: 0,
      pointer_moves: 0,
      pointer_downs: 0,
      keys: 0,
      engaged: false,
      scroll_marks: new Set(),
      cta_impressed: false,
      faq_opens: 0,
      last_section: "hero",
    };
    stateRef.current = state;

    // Expose for CTA handlers
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    (window as any).__jaakLpIdentity = identity;

    const baseExtra = {
      experiment: cfg.experiment,
      sku: cfg.sku,
      payment_mode: cfg.payment_mode,
      page_name: cfg.page,
    };

    const payload0 = common(state, baseExtra);
    push("lp_traffic_identified", payload0);
    push("lp_view", payload0);
    beacon({ event: "lp_traffic_identified", ...payload0, ts: Date.now() }, cfg.beacon !== false);

    // Clarity custom tags when available
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const clarity = (window as any).clarity as undefined | ((...a: unknown[]) => void);
    if (typeof clarity === "function") {
      clarity("set", "session_id", identity.session_id);
      clarity("set", "visitor_id", identity.visitor_id);
      clarity("set", "channel", identity.channel);
      clarity("set", "traffic_class", identity.traffic_class);
      clarity("set", "experiment", cfg.experiment);
      clarity("set", "page", cfg.page);
      if (identity.utm_campaign) clarity("set", "utm_campaign", identity.utm_campaign);
    }

    const markEngaged = () => {
      if (state.engaged) return;
      if (Date.now() - state.started_at < 1000 && state.pointer_moves < 2) return;
      state.engaged = true;
      const p = common(state, { ...baseExtra, event_label: "engaged" });
      push("lp_engaged", p);
      beacon({ event: "lp_engaged", ...p, ts: Date.now() }, cfg.beacon !== false);
    };

    const onScroll = () => {
      const doc = document.documentElement;
      const scrollTop = window.scrollY || doc.scrollTop;
      const height = doc.scrollHeight - window.innerHeight;
      const pct = height > 0 ? Math.min(100, Math.round((scrollTop / height) * 100)) : 0;
      if (pct > state.max_scroll) state.max_scroll = pct;
      for (const mark of [25, 50, 75, 90, 100]) {
        if (pct >= mark && !state.scroll_marks.has(mark)) {
          state.scroll_marks.add(mark);
          const p = common(state, { ...baseExtra, scroll_pct: mark });
          push("lp_scroll_depth", p);
          beacon({ event: "lp_scroll_depth", ...p, ts: Date.now() }, cfg.beacon !== false);
          if (mark >= 25) markEngaged();
        }
      }
      // section heuristic
      if (pct < 35) state.last_section = "hero";
      else if (pct < 70) state.last_section = "steps";
      else state.last_section = "faq_footer";
    };

    let moveTicks = 0;
    const onPointerMove = () => {
      state.pointer_moves += 1;
      moveTicks += 1;
      if (moveTicks === 3) markEngaged();
    };
    const onPointerDown = () => {
      state.pointer_downs += 1;
      markEngaged();
    };
    const onKey = () => {
      state.keys += 1;
      markEngaged();
    };

    // CTA impression via IntersectionObserver
    const ctaObserver = new IntersectionObserver(
      (entries) => {
        for (const e of entries) {
          if (e.isIntersecting && !state.cta_impressed) {
            state.cta_impressed = true;
            const loc = (e.target as HTMLElement).dataset.ctaLocation || "unknown";
            const p = common(state, { ...baseExtra, cta_location: loc });
            push("lp_cta_impression", p);
            beacon({ event: "lp_cta_impression", ...p, ts: Date.now() }, cfg.beacon !== false);
          }
        }
      },
      { threshold: 0.5 }
    );
    document.querySelectorAll<HTMLElement>("[data-cta-track]").forEach((el) => ctaObserver.observe(el));

    // FAQ open
    const onToggle = (ev: Event) => {
      const t = ev.target;
      if (!(t instanceof HTMLDetailsElement)) return;
      if (!t.open) return;
      state.faq_opens += 1;
      const summary = t.querySelector("summary")?.textContent?.trim().slice(0, 120) || "";
      const p = common(state, { ...baseExtra, faq_title: summary, faq_opens: state.faq_opens });
      push("lp_faq_open", p);
      beacon({ event: "lp_faq_open", ...p, ts: Date.now() }, cfg.beacon !== false);
      markEngaged();
    };
    document.addEventListener("toggle", onToggle, true);

    // Heartbeat every 15s while visible
    const heart = window.setInterval(() => {
      if (document.visibilityState !== "visible") return;
      const p = common(state, {
        ...baseExtra,
        last_section: state.last_section,
        faq_opens: state.faq_opens,
        engaged: state.engaged,
      });
      push("lp_heartbeat", p);
      beacon({ event: "lp_heartbeat", ...p, ts: Date.now() }, cfg.beacon !== false);
    }, 15000);

    // Time milestones
    const t15 = window.setTimeout(() => {
      push("lp_time_15s", common(state, baseExtra));
    }, 15000);
    const t30 = window.setTimeout(() => {
      push("lp_time_30s", common(state, baseExtra));
      markEngaged();
    }, 30000);
    const t60 = window.setTimeout(() => {
      push("lp_time_60s", common(state, baseExtra));
    }, 60000);

    // Exit / pagehide summary
    const flushExit = () => {
      // Re-score bot with engagement (fast bounce + no pointer → +bot)
      let botAdj = identity.bot_score;
      const eng = Date.now() - state.started_at;
      if (eng < 2000 && state.pointer_moves === 0 && state.max_scroll < 10) {
        botAdj = Math.min(100, botAdj + 25);
      }
      if (state.pointer_moves >= 5 && eng > 5000) {
        botAdj = Math.max(0, botAdj - 15);
      }
      const traffic_class =
        botAdj >= 70 ? "likely_bot" : botAdj >= 35 ? "suspicious" : "likely_human";
      const p = common(state, {
        ...baseExtra,
        bot_score_final: botAdj,
        traffic_class_final: traffic_class,
        traffic_label_final: trafficClassLabel(traffic_class),
        last_section: state.last_section,
        faq_opens: state.faq_opens,
        engaged: state.engaged,
        cta_impressed: state.cta_impressed,
      });
      push("lp_exit", p);
      beacon({ event: "lp_exit", ...p, ts: Date.now() }, cfg.beacon !== false);
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("pointermove", onPointerMove, { passive: true });
    window.addEventListener("pointerdown", onPointerDown, { passive: true });
    window.addEventListener("keydown", onKey);
    window.addEventListener("pagehide", flushExit);
    document.addEventListener("visibilitychange", () => {
      if (document.visibilityState === "hidden") flushExit();
    });
    onScroll();

    return () => {
      window.clearInterval(heart);
      window.clearTimeout(t15);
      window.clearTimeout(t30);
      window.clearTimeout(t60);
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("pointermove", onPointerMove);
      window.removeEventListener("pointerdown", onPointerDown);
      window.removeEventListener("keydown", onKey);
      window.removeEventListener("pagehide", flushExit);
      document.removeEventListener("toggle", onToggle, true);
      ctaObserver.disconnect();
    };
  }, [cfg.page, cfg.experiment, cfg.sku, cfg.payment_mode, cfg.beacon]);
}

/** Attach identity fields to a checkout event. */
export function identityFields(): Record<string, unknown> {
  if (typeof window === "undefined") return {};
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const id = (window as any).__jaakLpIdentity as TrafficIdentity | undefined;
  if (!id) {
    try {
      const fresh = buildTrafficIdentity(window);
      return {
        visitor_id: fresh.visitor_id,
        session_id: fresh.session_id,
        channel: fresh.channel,
        traffic_class: fresh.traffic_class,
        bot_score: fresh.bot_score,
      };
    } catch {
      return {};
    }
  }
  return {
    visitor_id: id.visitor_id,
    session_id: id.session_id,
    channel: id.channel,
    traffic_class: id.traffic_class,
    bot_score: id.bot_score,
    utm_source: id.utm_source,
    utm_medium: id.utm_medium,
    utm_campaign: id.utm_campaign,
    utm_content: id.utm_content,
    gclid: id.gclid,
    fbclid: id.fbclid,
  };
}

export function checkoutClientReference(parts: string[]): string {
  const id = identityFields();
  const sid = String(id.session_id || "").slice(0, 24);
  const base = parts.filter(Boolean).join("|");
  return `${base}|sid=${sid}`.slice(0, 200);
}
