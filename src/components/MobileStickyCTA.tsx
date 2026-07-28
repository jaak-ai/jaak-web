"use client";

import { useEffect, useState } from "react";
import { gtmEvent } from "./GoogleTagManager";
import { SCHEDULE_DEMO_URL } from "@/lib/scheduling";

const TEAL = "#1ECAD3";
const NAVY = "#202945";
const SCROLL_RATIO_TRIGGER = 0.12;
const DISMISS_KEY = "jaak_listas_riesgo_sticky_dismissed";

// IDs de secciones que no deben quedar tapadas por la barra (formularios y CTA final).
const HIDE_WHILE_VISIBLE_IDS = ["ebook", "cta-final"];

export default function MobileStickyCTA() {
  const [revealed, setRevealed] = useState(false);
  const [dismissed, setDismissed] = useState(false);
  const [obscured, setObscured] = useState(false);

  useEffect(() => {
    if (sessionStorage.getItem(DISMISS_KEY) === "1") {
      setDismissed(true);
    }
  }, []);

  useEffect(() => {
    const onScroll = () => {
      const scrollable = document.documentElement.scrollHeight - window.innerHeight;
      if (scrollable <= 0) return;
      if (window.scrollY / scrollable >= SCROLL_RATIO_TRIGGER) {
        setRevealed(true);
        window.removeEventListener("scroll", onScroll);
      }
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const targets = HIDE_WHILE_VISIBLE_IDS.map((id) => document.getElementById(id)).filter(
      (el): el is HTMLElement => Boolean(el)
    );
    if (targets.length === 0) return;

    const visibleIds = new Set<string>();
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const id = (entry.target as HTMLElement).id;
          if (entry.isIntersecting) {
            visibleIds.add(id);
          } else {
            visibleIds.delete(id);
          }
        });
        setObscured(visibleIds.size > 0);
      },
      { threshold: 0.2 }
    );
    targets.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  const dismiss = () => {
    setDismissed(true);
    sessionStorage.setItem(DISMISS_KEY, "1");
    gtmEvent("mobile_sticky_cta_dismiss", { page_path: window.location.pathname });
  };

  if (!revealed || dismissed || obscured) return null;

  return (
    <div
      className="sm:hidden fixed bottom-0 left-0 right-0 z-40 bg-white border-t border-gray-200 shadow-[0_-4px_16px_rgba(0,0,0,0.08)]"
      style={{ paddingBottom: "env(safe-area-inset-bottom)" }}
      role="region"
      aria-label="Acciones rápidas"
    >
      <div className="flex items-center gap-2 px-3 py-2.5">
        <a
          href={SCHEDULE_DEMO_URL}
          target="_blank"
          rel="noopener noreferrer"
          onClick={() => gtmEvent("demo_final_click", { source: "mobile_sticky_cta", destination: "meetings_hubspot", page_path: window.location.pathname })}
          data-cta="agendar-demo"
          data-source="mobile_sticky_cta"
          className="flex-1 min-h-[44px] flex items-center justify-center px-3 rounded-lg font-bold text-sm text-white"
          style={{ background: TEAL, color: NAVY }}
        >
          Agendar demo
        </a>
        <a
          href="#ebook"
          onClick={() => gtmEvent("ebook_cta_click", { source: "mobile_sticky_cta", destination: "ebook_section", page_path: window.location.pathname })}
          data-cta="descargar-guia"
          data-source="mobile_sticky_cta"
          className="flex-1 min-h-[44px] flex items-center justify-center px-3 rounded-lg font-bold text-sm border"
          style={{ borderColor: NAVY, color: NAVY }}
        >
          Descargar guía
        </a>
        <button
          type="button"
          onClick={dismiss}
          aria-label="Cerrar barra de acciones"
          className="min-h-[44px] min-w-[44px] flex items-center justify-center text-gray-400 hover:text-gray-600 flex-shrink-0"
        >
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
      </div>
    </div>
  );
}
