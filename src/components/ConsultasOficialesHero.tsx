"use client";

import Link from "next/link";
import Breadcrumbs from "./Breadcrumbs";
import { gtmEvent } from "./GoogleTagManager";

const NAVY = "#02132D";

const indicators = ["CURP", "INE", "RFC", "PLD/AML", "API"];

export default function ConsultasOficialesHero() {
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
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="mb-8 text-white/50">
          <Breadcrumbs items={[{ name: "Inicio", href: "/" }, { name: "Consultas oficiales" }]} />
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div data-sr>
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#1ECAD3]/10 border border-[#1ECAD3]/30 rounded-full mb-6">
              <span className="w-2 h-2 bg-[#1ECAD3] rounded-full" />
              <span className="text-[#1ECAD3] text-xs sm:text-sm font-bold tracking-wide">
                CONSULTAS OFICIALES · MÉXICO
              </span>
            </div>

            <h1 id="hero-heading" className="text-4xl md:text-5xl lg:text-6xl font-black text-white mb-6 leading-tight">
              Valida INE, CURP y datos de identidad antes de avanzar
            </h1>

            <p className="text-lg md:text-xl text-white/70 mb-8">
              Confirma información puntual de identidad contra fuentes oficiales antes de aprobar un alta,
              operación, contrato o expediente. Sin ejecutar un proceso KYC completo cuando no lo necesitas.
            </p>

            <div className="flex flex-wrap gap-4 mb-8">
              <Link
                href="/autoservicio"
                onClick={() => track("consultas_hero_probar", "autoservicio")}
                data-cta="probar-consulta"
                data-source="hero"
                className="px-6 py-3.5 min-h-[48px] flex items-center bg-[#1ECAD3] text-[#02132D] font-bold rounded-lg hover:bg-[#17b5bd] transition-all"
              >
                Probar una consulta
              </Link>
              <Link
                href="/docs/consultas-oficiales"
                onClick={() => track("consultas_docs_api", "docs")}
                data-cta="ver-documentacion"
                data-source="hero"
                className="px-6 py-3.5 min-h-[48px] flex items-center bg-white/10 border border-white/20 text-white font-semibold rounded-lg hover:bg-white/20 transition-all"
              >
                Ver documentación API
              </Link>
            </div>

            <ul className="flex flex-wrap gap-x-5 gap-y-2">
              {indicators.map((i) => (
                <li key={i} className="text-white/50 text-sm font-semibold tracking-wide">
                  {i}
                </li>
              ))}
            </ul>
          </div>

          <div data-sr="right" className="flex justify-center">
            <div className="bg-white/5 border border-white/10 rounded-2xl p-8 max-w-sm w-full backdrop-blur-sm">
              <div className="flex items-center justify-between mb-6">
                <span className="text-white/50 text-xs font-bold tracking-wide">CONSULTA CURP</span>
                <span className="text-[10px] font-mono text-white/30">evt_••••••</span>
              </div>

              <div className="space-y-4">
                <div className="flex items-center justify-between p-3 rounded-lg bg-white/5 border border-white/10">
                  <span className="text-white/50 text-xs">CURP</span>
                  <span className="text-white font-mono text-sm">PEGJ••••••••••L09</span>
                </div>
                <div className="flex items-center justify-between p-3 rounded-lg" style={{ background: "rgba(30,202,211,0.1)", border: "1px solid rgba(30,202,211,0.3)" }}>
                  <span className="text-white/50 text-xs">Estado</span>
                  <span className="flex items-center gap-1.5 text-[#1ECAD3] font-bold text-sm">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                    </svg>
                    VALIDADO
                  </span>
                </div>
                <div className="flex items-center justify-between p-3 rounded-lg bg-white/5 border border-white/10">
                  <span className="text-white/50 text-xs">Fuente</span>
                  <span className="text-white/80 text-sm font-semibold">RENAPO</span>
                </div>
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
