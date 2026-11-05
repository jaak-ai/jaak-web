"use client";

/**
 * Contexto de la landing: procedencia (source), enlace de registro y fase del
 * evento. Se renderiza en servidor con el enlace base y, tras hidratar, se
 * ajusta a la procedencia de la sesión (sessionStorage) — así la página sigue
 * siendo estática y cacheable.
 */

import { createContext, useCallback, useContext, useEffect, useMemo, useState } from "react";
import type { ReactNode } from "react";
import { gtmEvent } from "@/components/GoogleTagManager";
import {
  EVENT_END_MS,
  EVENT_START_MS,
  REGISTRATION_BASE_URL,
  SOURCE_STORAGE_KEY,
  WEBINAR_SLUG,
  buildRegistrationUrl,
  getEventPhase,
  outboundDomain,
  resolveSource,
} from "@/lib/webinar/firmaDigital";
import type { EventPhase, WebinarSource } from "@/lib/webinar/firmaDigital";

interface WebinarContextValue {
  source: WebinarSource | null;
  registrationUrl: string;
  phase: EventPhase;
  /** webinar_cta_click + webinar_registration_click (un clic en un CTA que abre GoToWebinar). */
  trackRegistrationClick: (location: string) => void;
  /** outbound_link_click para enlaces externos que no son el registro. */
  trackOutbound: (href: string, label: string, location: string) => void;
}

const WebinarContext = createContext<WebinarContextValue | null>(null);

export function useWebinar(): WebinarContextValue {
  const ctx = useContext(WebinarContext);
  if (!ctx) throw new Error("useWebinar debe usarse dentro de <WebinarProvider>");
  return ctx;
}

export default function WebinarProvider({ children }: { children: ReactNode }) {
  const [source, setSource] = useState<WebinarSource | null>(null);
  const [phase, setPhase] = useState<EventPhase>("upcoming");

  // Procedencia: URL > sessionStorage. Nunca lanza (webviews con storage bloqueado).
  useEffect(() => {
    let stored: string | null = null;
    try {
      stored = sessionStorage.getItem(SOURCE_STORAGE_KEY);
    } catch {
      /* sin storage */
    }
    const resolved = resolveSource(window.location.search, stored);
    if (resolved) {
      try {
        sessionStorage.setItem(SOURCE_STORAGE_KEY, resolved);
      } catch {
        /* sin storage */
      }
    }
    setSource(resolved);
  }, []);

  // Fase del evento: se recalcula en los límites exactos de inicio y fin.
  useEffect(() => {
    let timer: ReturnType<typeof setTimeout> | undefined;
    const tick = () => {
      const now = Date.now();
      setPhase(getEventPhase(now));
      const next = now < EVENT_START_MS ? EVENT_START_MS : now < EVENT_END_MS ? EVENT_END_MS : null;
      // setTimeout admite hasta ~24.8 días; se reprograma en tramos de 6 h como máximo.
      if (next) timer = setTimeout(tick, Math.min(next - now + 50, 6 * 3600 * 1000));
    };
    tick();
    return () => clearTimeout(timer);
  }, []);

  const registrationUrl = useMemo(() => buildRegistrationUrl(source), [source]);

  const trackRegistrationClick = useCallback(
    (location: string) => {
      // Un clic NO es un registro confirmado: ambos eventos miden intención.
      const base = {
        event_id: WEBINAR_SLUG,
        webinar_source: source ?? "direct",
        cta_location: location,
        event_phase: phase,
      };
      gtmEvent("webinar_cta_click", base);
      gtmEvent("webinar_registration_click", {
        ...base,
        link_url: registrationUrl,
        link_domain: outboundDomain(REGISTRATION_BASE_URL),
      });
    },
    [source, phase, registrationUrl]
  );

  const trackOutbound = useCallback(
    (href: string, label: string, location: string) => {
      gtmEvent("outbound_link_click", {
        event_id: WEBINAR_SLUG,
        webinar_source: source ?? "direct",
        link_url: href,
        link_domain: outboundDomain(href),
        link_text: label,
        link_location: location,
      });
    },
    [source]
  );

  const value = useMemo<WebinarContextValue>(
    () => ({ source, registrationUrl, phase, trackRegistrationClick, trackOutbound }),
    [source, registrationUrl, phase, trackRegistrationClick, trackOutbound]
  );

  return <WebinarContext.Provider value={value}>{children}</WebinarContext.Provider>;
}
