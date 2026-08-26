"use client";

import { useEffect, useRef, useState } from "react";
import { gtmEvent } from "@/components/GoogleTagManager";
import { buyerPersonas } from "./data";

const NAVY = "#02132D";
const BORDER = "#E3E8EE";
const LIGHT = "#EEF2F5";
const TEXT_MUTED = "#5C6B7A";
// Acento cálido del sector RH (ver LandingClient.tsx).
const RH_ACCENT = "#FF6B4A";

const ANCHOR_TO_PERSONA = new Map(buyerPersonas.map((p) => [p.anchor, p.id]));

/**
 * Tabs por buyer persona (Dirección RH, Operaciones, Legal, HR Tech, Nómina).
 * Cada tab lleva su propio anchor (#direccion-rh, #operaciones, #evidencia,
 * #integraciones, #compensacion) para que las secuencias de outbound
 * enlacen directo y activen el tab correspondiente al cargar la página.
 * Dispara rh_buyer_anchor_view la primera vez que se activa cada persona.
 */
export default function BuyerPersonaSection() {
  const [activeId, setActiveId] = useState(buyerPersonas[0].id);
  const seen = useRef<Set<string>>(new Set());

  const activatePersona = (id: string, pushHash = false) => {
    setActiveId(id);
    const persona = buyerPersonas.find((p) => p.id === id);
    if (!persona) return;
    if (!seen.current.has(persona.anchor)) {
      seen.current.add(persona.anchor);
      gtmEvent("rh_buyer_anchor_view", { anchor: persona.anchor, page: "recursos-humanos" });
    }
    if (pushHash) {
      history.replaceState(null, "", `#${persona.anchor}`);
    }
  };

  useEffect(() => {
    const applyHash = () => {
      const hash = window.location.hash.replace("#", "");
      const personaId = ANCHOR_TO_PERSONA.get(hash);
      if (personaId) activatePersona(personaId);
    };
    applyHash();
    window.addEventListener("hashchange", applyHash);
    return () => window.removeEventListener("hashchange", applyHash);
  }, []);

  const active = buyerPersonas.find((p) => p.id === activeId)!;

  return (
    <div>
      {/* Tabs */}
      <div
        className="flex flex-wrap gap-2 mb-8 p-1.5 rounded-2xl"
        style={{ background: LIGHT, border: `1px solid ${BORDER}` }}
        role="tablist"
        aria-label="Selecciona tu rol dentro de RH"
      >
        {buyerPersonas.map((persona) => {
          const isActive = persona.id === activeId;
          return (
            <button
              key={persona.id}
              id={persona.anchor}
              type="button"
              onClick={() => activatePersona(persona.id, true)}
              role="tab"
              aria-selected={isActive}
              aria-controls={`buyer-panel-${persona.id}`}
              className="scroll-mt-28 flex-1 min-w-[7rem] px-4 py-2.5 rounded-xl text-sm font-semibold transition-all"
              style={{
                background: isActive ? RH_ACCENT : "transparent",
                color: isActive ? "#fff" : TEXT_MUTED,
                boxShadow: isActive ? "0 4px 14px rgba(255,107,74,0.3)" : "none",
              }}
            >
              {persona.shortLabel}
            </button>
          );
        })}
      </div>

      {/* Panel */}
      <div
        key={active.id}
        id={`buyer-panel-${active.id}`}
        role="tabpanel"
        aria-labelledby={active.anchor}
        className="rounded-2xl p-7 sm:p-9 animate-fade-in-up"
        style={{ background: NAVY, border: `1px solid ${BORDER}` }}
      >
        <span
          className="inline-flex items-center px-3 py-1 rounded-full text-[11px] font-bold uppercase tracking-wider mb-4"
          style={{ background: "rgba(255,107,74,0.16)", color: RH_ACCENT }}
        >
          {active.audience}
        </span>
        <h3 className="text-2xl font-black text-white mb-1">{active.title}</h3>
        <p className="text-base font-semibold mb-4" style={{ color: RH_ACCENT }}>
          {active.subtitle}
        </p>
        <p className="text-[15px] leading-relaxed mb-7 max-w-2xl" style={{ color: "rgba(255,255,255,0.75)" }}>
          {active.text}
        </p>
        <a
          href={`#${active.relatedUseCaseId}`}
          className="inline-flex items-center gap-2 text-sm font-bold underline"
          style={{ color: RH_ACCENT }}
        >
          Ver cómo funciona →
        </a>
      </div>

      <p className="text-sm text-center mt-6" style={{ color: TEXT_MUTED }}>
        ¿No te ves reflejado aquí?{" "}
        <a href="#contacto" className="font-semibold underline" style={{ color: "#0A6870" }}>
          Cuéntanos qué documentos firma tu equipo
        </a>
        .
      </p>
    </div>
  );
}
