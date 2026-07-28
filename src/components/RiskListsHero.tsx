"use client";

import { useEffect, useState } from "react";
import Breadcrumbs from "./Breadcrumbs";
import { gtmEvent } from "./GoogleTagManager";
import { SCHEDULE_DEMO_URL } from "@/lib/scheduling";
import { TOTAL_SOURCES } from "@/lib/riskLists";

const TEAL = "#1ECAD3";
const NAVY = "#202945";

const steps = [
  "Identidad verificada",
  `${TOTAL_SOURCES} fuentes documentadas`,
  "Consulta ejecutada",
  "Coincidencia por analizar",
  "Expediente actualizado",
];

const microbenefits = [
  "Personas físicas y morales",
  "Resultado en segundos",
  "Consulta configurable",
  "Evidencia auditable",
];

export default function RiskListsHero() {
  const [activeStep, setActiveStep] = useState(0);

  useEffect(() => {
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduceMotion) {
      setActiveStep(steps.length - 1);
      return;
    }
    const interval = setInterval(() => {
      setActiveStep((prev) => (prev + 1) % steps.length);
    }, 1800);
    return () => clearInterval(interval);
  }, []);

  const track = (eventName: string, destination: string) => {
    gtmEvent(eventName, { source: "hero", destination, page_path: window.location.pathname });
  };

  return (
    <section
      className="pt-32 pb-20 relative overflow-hidden"
      style={{ background: NAVY }}
      aria-labelledby="hero-heading"
    >
      <div className="absolute inset-0 overflow-hidden pointer-events-none" aria-hidden="true">
        <div className="absolute top-1/4 right-0 w-[500px] h-[500px] bg-[#1ECAD3]/10 rounded-full blur-[120px]" />
        <div className="absolute bottom-0 left-1/4 w-[400px] h-[400px] bg-[#655DC6]/10 rounded-full blur-[100px]" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="mb-8 text-white/50">
          <Breadcrumbs
            items={[
              { name: "Inicio", href: "/" },
              { name: "Cumplimiento", href: "/cumplimiento" },
              { name: "Listas de riesgo PLD/AML" },
            ]}
          />
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div data-sr>
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#1ECAD3]/10 border border-[#1ECAD3]/30 rounded-full mb-6">
              <span className="w-2 h-2 bg-[#1ECAD3] rounded-full" />
              <span className="text-[#1ECAD3] text-xs sm:text-sm font-bold tracking-wide">
                LISTAS DE RIESGO PLD/AML/FT
              </span>
            </div>

            <h1
              id="hero-heading"
              className="text-4xl md:text-5xl lg:text-6xl font-black text-white mb-6 leading-tight"
            >
              Consulta más de {TOTAL_SOURCES} fuentes de riesgo antes de iniciar una relación comercial
            </h1>

            <p className="text-lg md:text-xl text-white/70 mb-4">
              JAAK permite consultar personas y empresas contra fuentes nacionales e internacionales de
              sanciones, PEP, riesgo fiscal, alertas regulatorias, personas buscadas y registros preventivos.
            </p>
            <p className="text-lg md:text-xl text-white/70 mb-8">
              Integra la consulta en tu onboarding y, al combinarla con KYC, construye un expediente digital
              con identidad, resultado y trazabilidad del proceso.
            </p>

            <div className="flex flex-wrap gap-4 mb-8">
              <a
                href={SCHEDULE_DEMO_URL}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => track("demo_hero_click", "meetings_hubspot")}
                data-cta="agendar-demo"
                data-source="hero"
                className="px-6 py-3.5 min-h-[48px] flex items-center bg-[#1ECAD3] text-[#202945] font-bold rounded-lg hover:bg-[#17b5bd] transition-all"
              >
                Agendar demo
              </a>
              <a
                href="#ebook"
                onClick={() => track("ebook_cta_click", "ebook_section")}
                data-cta="descargar-guia"
                data-source="hero"
                className="px-6 py-3.5 min-h-[48px] flex items-center bg-white/10 border border-white/20 text-white font-semibold rounded-lg hover:bg-white/20 transition-all"
              >
                Descargar guía 2026
              </a>
            </div>

            <ul className="flex flex-wrap gap-x-6 gap-y-2 mb-6">
              {microbenefits.map((b) => (
                <li key={b} className="flex items-center gap-2 text-white/70 text-sm">
                  <svg className="w-4 h-4 text-[#1ECAD3] flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                  </svg>
                  {b}
                </li>
              ))}
            </ul>

            <p className="text-xs text-white/40 max-w-xl leading-relaxed">
              La guía 2026 documenta {TOTAL_SOURCES} fuentes. La disponibilidad y composición de las fuentes
              puede variar conforme a las actualizaciones y disponibilidad de cada autoridad.
            </p>
          </div>

          {/* Visual: persona/empresa → verificación → consulta → análisis → expediente */}
          <div data-sr="right" className="flex justify-center">
            <div className="bg-white/5 border border-white/10 rounded-2xl p-8 max-w-sm w-full backdrop-blur-sm">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 bg-[#1ECAD3]/20 rounded-lg flex items-center justify-center">
                  <svg className="w-6 h-6 text-[#1ECAD3]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                  </svg>
                </div>
                <span className="text-white font-semibold">Persona o empresa consultada</span>
              </div>

              <div className="space-y-3" role="list" aria-label="Estado del proceso de consulta">
                {steps.map((step, i) => {
                  const isDone = i < activeStep;
                  const isActive = i === activeStep;
                  return (
                    <div
                      key={step}
                      role="listitem"
                      className="flex items-center gap-3 p-3 rounded-lg transition-all duration-500"
                      style={{
                        background: isActive ? "rgba(30,202,211,0.12)" : "rgba(255,255,255,0.05)",
                        border: isActive ? "1px solid rgba(30,202,211,0.35)" : "1px solid transparent",
                      }}
                    >
                      <span
                        className="w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0 text-[10px] font-bold transition-colors duration-500"
                        style={{
                          background: isDone || isActive ? TEAL : "rgba(255,255,255,0.15)",
                          color: isDone || isActive ? NAVY : "rgba(255,255,255,0.4)",
                        }}
                        aria-hidden="true"
                      >
                        {isDone ? "✓" : i + 1}
                      </span>
                      <span
                        className="text-sm transition-colors duration-500"
                        style={{ color: isDone || isActive ? "rgba(255,255,255,0.92)" : "rgba(255,255,255,0.45)" }}
                      >
                        {step}
                      </span>
                    </div>
                  );
                })}
              </div>

              <p className="mt-6 text-[11px] text-white/35 leading-relaxed">
                Ejemplo ilustrativo. No se muestran datos personales reales.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
