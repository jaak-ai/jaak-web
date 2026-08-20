"use client";

import { useEffect, useRef } from "react";
import { gtmEvent } from "@/components/GoogleTagManager";
import { buyerPersonas } from "./data";

const NAVY = "#02132D";
const TEAL = "#1ECAD3";
const BORDER = "#E3E8EE";
const LIGHT = "#EEF2F5";
const TEXT_BODY = "#4B5768";
// Acento cálido del sector RH (ver LandingClient.tsx).
const RH_ACCENT = "#FF6B4A";
const RH_ACCENT_DARK = "#C2410C";

/**
 * Cinco bloques por buyer persona, cada uno con su propio anchor
 * (#direccion-rh, #operaciones, #evidencia, #integraciones, #compensacion)
 * para que las secuencias de outbound enlacen directo a su sección.
 * Dispara rh_buyer_anchor_view una vez por bloque cuando entra en viewport.
 */
export default function BuyerPersonaSection() {
  const seen = useRef<Set<string>>(new Set());

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          const anchor = (entry.target as HTMLElement).id;
          if (seen.current.has(anchor)) return;
          seen.current.add(anchor);
          gtmEvent("rh_buyer_anchor_view", { anchor, page: "recursos-humanos" });
        });
      },
      { threshold: 0.5 }
    );
    buyerPersonas.forEach((persona) => {
      const el = document.getElementById(persona.anchor);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, []);

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      {buyerPersonas.map((persona) => (
        <section
          key={persona.id}
          id={persona.anchor}
          className="scroll-mt-28 rounded-2xl p-7 transition-all duration-300 hover:shadow-lg hover:-translate-y-1"
          style={{ background: LIGHT, borderTop: `1px solid ${BORDER}`, borderRight: `1px solid ${BORDER}`, borderBottom: `1px solid ${BORDER}`, borderLeft: `3px solid ${RH_ACCENT}` }}
          aria-labelledby={`${persona.anchor}-heading`}
        >
          <span
            className="inline-flex items-center px-3 py-1 rounded-full text-[11px] font-bold uppercase tracking-wider mb-4"
            style={{ background: "rgba(255,107,74,0.14)", color: RH_ACCENT_DARK }}
          >
            {persona.audience}
          </span>
          <h3 id={`${persona.anchor}-heading`} className="text-xl font-black mb-1" style={{ color: NAVY }}>
            {persona.title}
          </h3>
          <p className="text-sm font-semibold mb-3" style={{ color: RH_ACCENT_DARK }}>
            {persona.subtitle}
          </p>
          <p className="text-[15px] leading-relaxed" style={{ color: TEXT_BODY }}>
            {persona.text}
          </p>
        </section>
      ))}
      <div
        className="rounded-2xl p-7 flex flex-col justify-center"
        style={{ background: NAVY, border: `1px solid ${BORDER}` }}
      >
        <p className="text-sm font-bold uppercase tracking-wider mb-2" style={{ color: TEAL }}>
          ¿No te ves reflejado aquí?
        </p>
        <p className="text-[15px] leading-relaxed mb-4" style={{ color: "rgba(255,255,255,0.75)" }}>
          Cuéntanos qué documentos firma tu equipo y te mostramos el flujo que mejor se adapta.
        </p>
        <a
          href="#contacto"
          className="text-sm font-bold underline"
          style={{ color: TEAL }}
        >
          Hablar con JAAK →
        </a>
      </div>
    </div>
  );
}
