"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";
import { gtmEvent } from "./GoogleTagManager";
import { getWhatsAppUrl } from "@/lib/whatsapp";
import { demoCards, type DemoCard } from "@/lib/demoCards";

const TEAL = "#1ECAD3";

function DemoCardItem({ card }: { card: DemoCard }) {
  const isProduct = card.type === "product";
  return (
    <div
      className="rounded-3xl p-7 lg:p-8 hp-glass flex flex-col h-full"
      style={{ boxShadow: "0 24px 48px rgba(0,0,0,0.22)" }}
    >
      <span
        className="inline-flex items-center self-start rounded-full px-3 py-1 text-xs font-semibold tracking-wide mb-5"
        style={{
          background: isProduct ? "rgba(30,202,211,0.12)" : "rgba(101,93,198,0.14)",
          border: `1px solid ${isProduct ? "rgba(30,202,211,0.35)" : "rgba(101,93,198,0.35)"}`,
          color: isProduct ? "#7FE8EC" : "#B4AEEF",
        }}
      >
        {card.badge}
      </span>

      <h3 className="text-2xl font-black mb-3" style={{ color: "var(--hp-text-hi)" }}>
        {card.title}
      </h3>
      <p className="text-[15px] leading-relaxed mb-5" style={{ color: "var(--hp-text-md)" }}>
        {card.description}
      </p>

      <ul className="space-y-2.5 mb-7">
        {card.bullets.map((b) => (
          <li key={b} className="flex items-center gap-2.5 text-sm" style={{ color: "var(--hp-text-md)" }}>
            <svg className="w-4 h-4 flex-shrink-0" style={{ color: TEAL }} fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
            </svg>
            {b}
          </li>
        ))}
      </ul>

      <div className="mt-auto">
        <div className="flex flex-wrap gap-3">
          <Link
            href={card.href}
            onClick={() =>
              gtmEvent(
                card.trackingId === "firma_nom151" ? "demo_firma_nom151_click" : "demo_kyc_inmobiliario_click",
                { source: "demo_section", destination: card.trackingId, page_path: window.location.pathname }
              )
            }
            data-cta={`demo-${card.trackingId}`}
            data-source="demo_section"
            className="inline-flex items-center gap-2 rounded-xl px-5 py-3 text-sm font-bold transition-transform hover:-translate-y-0.5"
            style={{ background: TEAL, color: "#071426" }}
          >
            {card.ctaLabel}
          </Link>
          <Link
            href="/contacto"
            onClick={() =>
              gtmEvent("contact_click", { source: "demo_section", destination: "contacto", page_path: window.location.pathname })
            }
            data-cta="hablar-especialista"
            data-source="demo_section"
            className="inline-flex items-center gap-2 rounded-xl px-5 py-3 text-sm font-semibold transition-colors"
            style={{ color: "var(--hp-ghost-btn-color)", background: "var(--hp-ghost-btn-bg)", border: "1px solid var(--hp-ghost-btn-border)" }}
          >
            Hablar con un especialista
          </Link>
        </div>
        {card.priceNote && (
          <p className="mt-3 text-xs" style={{ color: "var(--hp-text-faint)" }}>
            {card.priceNote}
          </p>
        )}
      </div>
    </div>
  );
}

export default function DemosSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const trackedRef = useRef(false);

  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0]?.isIntersecting && !trackedRef.current) {
          trackedRef.current = true;
          gtmEvent("demo_section_scroll", { source: "demo_section", page_path: window.location.pathname });
        }
      },
      { threshold: 0.3 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="demos" ref={sectionRef} className="hp-section hp-bg-2 py-20 lg:py-28 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-2xl mx-auto mb-14" data-sr>
          <span
            className="inline-flex items-center rounded-full px-3 py-1 text-xs font-semibold tracking-wide mb-4"
            style={{ color: TEAL, border: "1px solid rgba(30,202,211,0.3)", background: "rgba(30,202,211,0.08)" }}
          >
            Demos
          </span>
          <h2 className="text-3xl md:text-4xl font-black" style={{ color: "var(--hp-text-hi)" }}>
            Conoce JAAK en un proceso real
          </h2>
          <p className="mt-4 text-base md:text-lg" style={{ color: "var(--hp-text-md)" }}>
            Explora nuestras soluciones por producto o por sector y conoce cómo se adaptan a cada operación.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 lg:gap-8" data-sr-grid>
          {demoCards.map((card) => (
            <DemoCardItem key={card.trackingId} card={card} />
          ))}
        </div>

        {/* Cierre — sectores adicionales */}
        <div
          className="mt-8 rounded-2xl px-6 py-6 sm:px-8 sm:py-7 flex flex-col sm:flex-row items-center justify-between gap-4"
          style={{ background: "var(--hp-card-bg)", border: "1px solid var(--hp-divider)" }}
        >
          <p className="text-[15px] font-medium text-center sm:text-left" style={{ color: "var(--hp-text-md)" }}>
            ¿Tu industria necesita un flujo diferente?
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            <Link
              href="/contacto"
              onClick={() => gtmEvent("contact_click", { source: "demo_section", destination: "contacto", page_path: window.location.pathname })}
              data-cta="cuentanos-tu-caso"
              data-source="demo_section"
              className="inline-flex items-center gap-1.5 text-sm font-bold transition-colors"
              style={{ color: TEAL }}
            >
              Cuéntanos tu caso →
            </Link>
            <a
              href={getWhatsAppUrl("demo_section")}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => gtmEvent("whatsapp_click", { source: "demo_section", destination: "whatsapp", page_path: window.location.pathname })}
              data-cta="whatsapp"
              data-source="demo_section"
              className="inline-flex items-center gap-1.5 text-sm font-semibold transition-colors"
              style={{ color: "var(--hp-text-faint)" }}
            >
              WhatsApp
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
