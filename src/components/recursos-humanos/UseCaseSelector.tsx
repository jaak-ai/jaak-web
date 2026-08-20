"use client";

import { useState } from "react";
import { gtmEvent } from "@/components/GoogleTagManager";
import { signatureOptions } from "./data";

const NAVY = "#02132D";
const TEAL = "#1ECAD3";
const BORDER = "#E3E8EE";
const LIGHT = "#EEF2F5";
const TEXT_BODY = "#4B5768";
const TEXT_MUTED = "#5C6B7A";

function CheckIcon() {
  return (
    <svg className="w-3.5 h-3.5 mt-0.5 flex-shrink-0" fill="none" stroke={TEAL} viewBox="0 0 24 24" aria-hidden="true">
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
                background: isActive ? TEAL : "transparent",
                color: isActive ? NAVY : TEXT_MUTED,
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
        style={{ background: "#fff", border: `1px solid ${BORDER}`, boxShadow: "0 20px 50px rgba(2,19,45,0.06)" }}
      >
        <h3 className="text-xl font-black mb-5" style={{ color: NAVY }}>
          {active.panelTitle}
        </h3>
        <ul className="space-y-3 mb-7">
          {active.layers.map((layer) => (
            <li key={layer.label} className="flex items-start gap-2.5">
              <CheckIcon />
              <span className="text-sm" style={{ color: TEXT_BODY }}>
                <strong style={{ color: NAVY }}>{layer.label}.</strong> {layer.note}
              </span>
            </li>
          ))}
        </ul>
        <a
          href={`#casos-de-uso`}
          onClick={() => gtmEvent("rh_use_case_flow_click", { option: active.id, page: "recursos-humanos" })}
          className="inline-flex items-center gap-2 px-6 py-3 rounded-xl text-sm font-bold transition-all hover:opacity-90"
          style={{ background: NAVY, color: "#fff" }}
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
