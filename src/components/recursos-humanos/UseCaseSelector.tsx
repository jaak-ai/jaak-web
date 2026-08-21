"use client";

import { useState } from "react";
import { gtmEvent } from "@/components/GoogleTagManager";
import { signatureOptions } from "./data";

const NAVY = "#02132D";
const BORDER = "#E3E8EE";
const LIGHT = "#EEF2F5";
const TEXT_BODY = "#4B5768";
const TEXT_MUTED = "#5C6B7A";
// Acento cálido del sector RH (ver LandingClient.tsx).
const RH_ACCENT = "#FF6B4A";
const RH_ACCENT_DARK = "#C2410C";

function CheckIcon({ white = false }: { white?: boolean }) {
  return (
    <svg className="w-3.5 h-3.5 flex-shrink-0" fill="none" stroke={white ? "#fff" : RH_ACCENT} viewBox="0 0 24 24" aria-hidden="true">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
    </svg>
  );
}

export default function UseCaseSelector() {
  const [activeId, setActiveId] = useState(signatureOptions[0].id);
  const active = signatureOptions.find((o) => o.id === activeId)!;

  const selectOption = (id: string) => {
    setActiveId(id);
    gtmEvent("rh_use_case_selected", { option: id, page: "recursos-humanos" });
  };

  return (
    <div>
      {/* Desktop: pills */}
      <div
        className="hidden md:flex flex-wrap gap-2 mb-8 p-1.5 rounded-2xl"
        style={{ background: LIGHT, border: `1px solid ${BORDER}` }}
        role="tablist"
        aria-label="¿Qué necesitas firmar?"
      >
        {signatureOptions.map((option) => {
          const isActive = option.id === activeId;
          return (
            <button
              key={option.id}
              type="button"
              onClick={() => selectOption(option.id)}
              role="tab"
              aria-selected={isActive}
              aria-controls={`option-panel-${option.id}`}
              id={`option-tab-${option.id}`}
              className="px-4 py-2.5 rounded-xl text-sm font-semibold transition-all flex-1"
              style={{
                background: isActive ? RH_ACCENT : "transparent",
                color: isActive ? "#fff" : TEXT_MUTED,
                boxShadow: isActive ? "0 4px 14px rgba(255,107,74,0.3)" : "none",
              }}
            >
              {option.label}
            </button>
          );
        })}
      </div>

      {/* Mobile: dropdown */}
      <div className="md:hidden mb-6">
        <label htmlFor="rh-option-select" className="sr-only">
          Selecciona qué necesitas firmar
        </label>
        <select
          id="rh-option-select"
          value={activeId}
          onChange={(e) => selectOption(e.target.value)}
          className="w-full px-4 py-3.5 rounded-xl text-sm font-semibold"
          style={{ background: LIGHT, border: `1px solid ${BORDER}`, color: NAVY }}
        >
          {signatureOptions.map((option) => (
            <option key={option.id} value={option.id}>
              {option.label}
            </option>
          ))}
        </select>
      </div>

      {/* Panel */}
      <div
        key={active.id}
        id={`option-panel-${active.id}`}
        role="tabpanel"
        aria-labelledby={`option-tab-${active.id}`}
        className="rounded-2xl p-6 sm:p-8 animate-fade-in-up"
        style={{ background: "#fff", border: `1px solid rgba(255,107,74,0.25)`, boxShadow: "0 20px 50px rgba(255,107,74,0.08)" }}
      >
        <p className="text-[11px] font-black uppercase tracking-widest mb-1.5" style={{ color: RH_ACCENT }}>
          Tu flujo recomendado
        </p>
        <h3 className="text-xl font-black mb-7" style={{ color: NAVY }}>
          {active.panelTitle}
        </h3>

        <div className="relative pl-1">
          {/* Línea conectora vertical */}
          <div className="absolute left-[13px] top-2 bottom-2 w-0.5" style={{ background: `linear-gradient(180deg, ${RH_ACCENT}, rgba(255,107,74,0.15))` }} aria-hidden="true" />

          <div className="relative flex items-center gap-3.5 mb-4">
            <span className="relative z-10 flex-shrink-0 w-7 h-7 rounded-full flex items-center justify-center" style={{ background: LIGHT, border: `1px solid ${BORDER}` }}>
              <svg className="w-3.5 h-3.5" fill="none" stroke={TEXT_MUTED} viewBox="0 0 24 24" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
            </span>
            <span className="text-sm font-bold" style={{ color: NAVY }}>Documento</span>
          </div>

          {active.layers.map((layer) => (
            <div key={layer.label} className="relative flex items-start gap-3.5 mb-4">
              <span
                className="relative z-10 flex-shrink-0 w-7 h-7 rounded-full flex items-center justify-center mt-0.5"
                style={
                  layer.conditional
                    ? { background: "#fff", border: `1.5px dashed ${RH_ACCENT}` }
                    : { background: RH_ACCENT }
                }
              >
                {layer.conditional ? (
                  <span className="w-1.5 h-1.5 rounded-full" style={{ background: RH_ACCENT }} aria-hidden="true" />
                ) : (
                  <CheckIcon white />
                )}
              </span>
              <span className="text-sm">
                <span className="flex items-center gap-2 flex-wrap">
                  <strong style={{ color: NAVY }}>{layer.label}</strong>
                  {layer.conditional && (
                    <span className="text-[10px] font-bold uppercase tracking-wide px-2 py-0.5 rounded-full" style={{ background: "rgba(255,107,74,0.12)", color: RH_ACCENT_DARK }}>
                      Según proceso
                    </span>
                  )}
                </span>
                <span style={{ color: TEXT_BODY }}> {layer.note}</span>
              </span>
            </div>
          ))}

          <div className="relative flex items-center gap-3.5">
            <span className="relative z-10 flex-shrink-0 w-7 h-7 rounded-full flex items-center justify-center" style={{ background: NAVY }}>
              <CheckIcon white />
            </span>
            <span className="text-sm font-black uppercase tracking-wide" style={{ color: NAVY }}>Expediente listo</span>
          </div>
        </div>

        <a
          href={`#casos-de-uso`}
          onClick={() => gtmEvent("rh_use_case_flow_click", { option: active.id, page: "recursos-humanos" })}
          className="inline-flex items-center gap-2 px-6 py-3 rounded-xl text-sm font-bold transition-all hover:opacity-90 hover:scale-105 mt-7"
          style={{ background: RH_ACCENT, color: "#fff" }}
        >
          Ver este flujo
          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
          </svg>
        </a>
      </div>
    </div>
  );
}
