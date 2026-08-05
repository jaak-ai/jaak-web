"use client";

import { useState } from "react";

const TEAL = "#1ECAD3";
const NAVY_MED = "#0B1E3F";

type Scenario = {
  id: string;
  label: string;
  layer: string;
  result: string;
  status: "rechazado" | "revision" | "inconsistencia";
};

const scenarios: Scenario[] = [
  {
    id: "documento-prestado",
    label: "Documento prestado",
    layer: "Comparación facial 1:1",
    result: "Face match: no coincide",
    status: "rechazado",
  },
  {
    id: "foto-camara",
    label: "Fotografía frente a la cámara",
    layer: "Prueba de vida pasiva",
    result: "Liveness: rechazado",
    status: "rechazado",
  },
  {
    id: "identificacion-no-vigente",
    label: "Identificación no vigente",
    layer: "Verificación documental y OCR",
    result: "Documento: vencido",
    status: "rechazado",
  },
  {
    id: "datos-renapo",
    label: "Datos que no coinciden con RENAPO",
    layer: "Fuentes oficiales mexicanas",
    result: "RENAPO: inconsistencia",
    status: "inconsistencia",
  },
  {
    id: "coincidencia-lista",
    label: "Coincidencia en una lista",
    layer: "Consulta de listas de riesgo",
    result: "Riesgo: revisión requerida",
    status: "revision",
  },
  {
    id: "ubicacion-inconsistente",
    label: "Ubicación inconsistente",
    layer: "Geolocalización",
    result: "Ubicación: señal contextual en revisión",
    status: "revision",
  },
];

const STATUS_STYLE: Record<Scenario["status"], { color: string; bg: string; border: string }> = {
  rechazado: { color: "#F87171", bg: "rgba(248,113,113,0.08)", border: "rgba(248,113,113,0.3)" },
  inconsistencia: { color: "#F59E0B", bg: "rgba(245,158,11,0.08)", border: "rgba(245,158,11,0.3)" },
  revision: { color: TEAL, bg: "rgba(30,202,211,0.08)", border: "rgba(30,202,211,0.3)" },
};

export default function ScenarioSimulator() {
  const [activeId, setActiveId] = useState(scenarios[0].id);
  const active = scenarios.find((s) => s.id === activeId) ?? scenarios[0];
  const style = STATUS_STYLE[active.status];

  return (
    <div>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-2.5 mb-8" role="tablist" aria-label="Elegir escenario">
        {scenarios.map((s) => {
          const isActive = s.id === activeId;
          return (
            <button
              key={s.id}
              type="button"
              onClick={() => setActiveId(s.id)}
              role="tab"
              aria-selected={isActive}
              className="text-left px-4 py-3 rounded-xl text-sm font-semibold transition-all duration-300 hover:-translate-y-0.5"
              style={{
                background: NAVY_MED,
                border: `1px solid ${isActive ? TEAL : "rgba(255,255,255,0.08)"}`,
                boxShadow: isActive ? "0 10px 30px rgba(0,0,0,0.18)" : "none",
                color: isActive ? "#fff" : "#A8B6C8",
              }}
            >
              {s.label}
            </button>
          );
        })}
      </div>

      <div
        key={activeId}
        className="max-w-xl mx-auto rounded-2xl p-6 sm:p-8 text-center animate-fade-in-up"
        style={{ background: style.bg, border: `1px solid ${style.border}` }}
      >
        <p className="text-xs font-semibold uppercase tracking-wide mb-3" style={{ color: "#A8B6C8" }}>
          Capa que interviene
        </p>
        <p className="text-lg font-bold text-white mb-5">{active.layer}</p>
        <div
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-bold"
          style={{ background: "rgba(255,255,255,0.06)", color: style.color, border: `1px solid ${style.border}` }}
        >
          {active.result}
        </div>
      </div>

      <p className="text-center text-xs text-white/40 mt-6 max-w-lg mx-auto">
        Simulación ilustrativa. El resultado real depende de la configuración del flujo y de la evidencia disponible
        en cada verificación.
      </p>
    </div>
  );
}
