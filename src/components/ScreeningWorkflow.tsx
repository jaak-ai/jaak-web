"use client";

import { useState } from "react";
import { gtmEvent } from "./GoogleTagManager";
import { SCHEDULE_DEMO_URL } from "@/lib/scheduling";

const NAVY = "#202945";
const TEAL = "#1ECAD3";

const steps = [
  {
    number: "01",
    title: "Configura el sujeto",
    items: ["Nombre", "Alias", "Tipo de persona", "Nacionalidad", "Datos disponibles para comparación"],
    description: "Define quién será consultado y con qué datos cuentas para la comparación.",
  },
  {
    number: "02",
    title: "Configura la consulta",
    items: ["Selección de fuentes", "Umbral de coincidencia", "Modo de comparación", "Criterios definidos por la organización"],
    description:
      "El umbral de coincidencia se muestra como ejemplo de configuración. TODO: VALIDACIÓN PRODUCTO — no presentar un valor fijo como estándar contractual o universal.",
  },
  {
    number: "03",
    title: "Ejecuta la búsqueda",
    items: [],
    description: "Consulta las fuentes configuradas y recibe una respuesta en segundos.",
  },
  {
    number: "04",
    title: "Analiza el resultado",
    items: ["Sin coincidencias", "Posible coincidencia", "Coincidencia que requiere análisis"],
    description: "Cada resultado incluye score, fuente, campo coincidente, programa, país, fecha y snapshot.",
  },
  {
    number: "05",
    title: "Escala o monitorea",
    items: [],
    description:
      "Cuando el servicio contratado lo permita, el sujeto puede incorporarse a un proceso de monitoreo para detectar cambios posteriores. TODO: VALIDACIÓN PRODUCTO — confirmar alcance real (manual vs. contratado) antes de prometer monitoreo continuo.",
  },
  {
    number: "06",
    title: "Integra el expediente",
    items: [],
    description:
      "Cuando la consulta se combina con KYC, el resultado puede incorporarse al expediente digital del cliente junto con la evidencia de identidad y trazabilidad del proceso.",
  },
];

export default function ScreeningWorkflow() {
  const [active, setActive] = useState(0);

  return (
    <section className="py-20" style={{ background: NAVY }} aria-labelledby="workflow-heading">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div data-sr className="text-center mb-14">
          <h2 id="workflow-heading" className="text-3xl md:text-4xl font-black text-white mb-4">
            Consulta y documenta desde el inicio
          </h2>
        </div>

        {/* Step selector */}
        <div className="flex flex-wrap justify-center gap-2 mb-10" role="tablist" aria-label="Pasos del proceso de consulta">
          {steps.map((step, i) => (
            <button
              key={step.number}
              type="button"
              role="tab"
              aria-selected={active === i}
              aria-controls={`workflow-panel-${i}`}
              id={`workflow-tab-${i}`}
              onClick={() => setActive(i)}
              className="w-9 h-9 rounded-full flex items-center justify-center text-sm font-bold transition-all border"
              style={{
                background: active === i ? TEAL : "transparent",
                color: active === i ? NAVY : "rgba(255,255,255,0.6)",
                borderColor: active === i ? TEAL : "rgba(255,255,255,0.2)",
              }}
            >
              {i + 1}
            </button>
          ))}
        </div>

        <div
          role="tabpanel"
          id={`workflow-panel-${active}`}
          aria-labelledby={`workflow-tab-${active}`}
          className="bg-white/5 border border-white/10 rounded-2xl p-8 md:p-10"
        >
          <div className="flex items-start gap-6 flex-col md:flex-row">
            <div className="text-5xl font-black flex-shrink-0" style={{ color: "rgba(30,202,211,0.3)" }}>
              {steps[active].number}
            </div>
            <div>
              <h3 className="text-2xl font-bold text-white mb-3">{steps[active].title}</h3>
              <p className="text-white/70 mb-4 leading-relaxed">{steps[active].description}</p>
              {steps[active].items.length > 0 && (
                <ul className="flex flex-wrap gap-2">
                  {steps[active].items.map((item) => (
                    <li
                      key={item}
                      className="text-sm px-3 py-1.5 rounded-full bg-white/5 border border-white/10 text-white/80"
                    >
                      {item}
                    </li>
                  ))}
                </ul>
              )}
            </div>
          </div>

          <div className="flex justify-between mt-8 pt-6 border-t border-white/10">
            <button
              type="button"
              onClick={() => setActive((a) => Math.max(0, a - 1))}
              disabled={active === 0}
              className="text-sm font-semibold text-white/60 hover:text-white disabled:opacity-30 disabled:cursor-not-allowed transition-colors"
            >
              ← Anterior
            </button>
            <button
              type="button"
              onClick={() => setActive((a) => Math.min(steps.length - 1, a + 1))}
              disabled={active === steps.length - 1}
              className="text-sm font-semibold text-[#1ECAD3] hover:text-white disabled:opacity-30 disabled:cursor-not-allowed transition-colors"
            >
              Siguiente →
            </button>
          </div>
        </div>

        <div className="text-center mt-10">
          <a
            href={SCHEDULE_DEMO_URL}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() =>
              gtmEvent("demo_midpage_click", { source: "workflow", destination: "meetings_hubspot", page_path: window.location.pathname })
            }
            data-cta="agendar-demo"
            data-source="workflow"
            className="inline-flex px-6 py-3.5 min-h-[48px] items-center bg-[#1ECAD3] text-[#202945] font-bold rounded-lg hover:bg-[#17b5bd] transition-all"
          >
            Ver una demo del proceso
          </a>
        </div>
      </div>
    </section>
  );
}
