"use client";

import Link from "next/link";
import Breadcrumbs from "./Breadcrumbs";
import { gtmEvent } from "./GoogleTagManager";

const NAVY = "#02132D";
const badges = ["API REST", "SANDBOX", "RESULTADO ESTRUCTURADO", "INTEGRABLE A KYC"];

export default function CurpHero() {
  const track = (eventName: string, destination: string) => {
    gtmEvent(eventName, { source: "hero", destination, page_path: window.location.pathname });
  };

  return (
    <section
      className="pt-32 pb-20 relative overflow-hidden"
      style={{ background: `linear-gradient(135deg, ${NAVY} 0%, #0E1133 100%)` }}
      aria-labelledby="hero-heading"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="mb-8 text-white/50">
          <Breadcrumbs
            items={[
              { name: "Inicio", href: "/" },
              { name: "Consultas oficiales", href: "/consultas-oficiales" },
              { name: "Validar CURP contra RENAPO" },
            ]}
          />
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div data-sr>
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#1ECAD3]/10 border border-[#1ECAD3]/30 rounded-full mb-6">
              <span className="w-2 h-2 bg-[#1ECAD3] rounded-full" />
              <span className="text-[#1ECAD3] text-xs sm:text-sm font-bold tracking-wide">
                VALIDACIÓN CURP · RENAPO
              </span>
            </div>

            <h1 id="hero-heading" className="text-4xl md:text-5xl font-black text-white mb-6 leading-tight">
              Valida CURP contra RENAPO vía API
            </h1>

            <p className="text-lg text-white/70 mb-8 max-w-xl">
              Confirma la existencia y estatus de una CURP y recibe un resultado estructurado para
              integrarlo directamente en tus procesos de alta, actualización o verificación de identidad.
            </p>

            <div className="flex flex-wrap gap-4 mb-8">
              <Link
                href="/autoservicio"
                onClick={() => track("curp_hero_probar", "autoservicio")}
                data-cta="probar-curp"
                data-source="hero"
                className="px-6 py-3.5 min-h-[48px] flex items-center bg-[#1ECAD3] text-[#02132D] font-bold rounded-lg hover:bg-[#17b5bd] transition-all"
              >
                Probar validación CURP
              </Link>
              <Link
                href="/docs/consultas-oficiales/api/renapo-curp"
                onClick={() => track("curp_docs", "docs")}
                data-cta="ver-documentacion"
                data-source="hero"
                className="px-6 py-3.5 min-h-[48px] flex items-center bg-white/10 border border-white/20 text-white font-semibold rounded-lg hover:bg-white/20 transition-all"
              >
                Ver documentación API
              </Link>
            </div>

            <div className="flex flex-wrap gap-2">
              {badges.map((b) => (
                <span key={b} className="text-[11px] font-bold px-3 py-1.5 rounded-full text-[#1ECAD3]" style={{ background: "rgba(30,202,211,0.08)", border: "1px solid rgba(30,202,211,0.25)" }}>
                  {b}
                </span>
              ))}
            </div>
          </div>

          <div data-sr="right" className="flex justify-center">
            <div className="bg-white/5 border border-white/10 rounded-2xl p-8 max-w-sm w-full backdrop-blur-sm">
              <label htmlFor="curp-demo-input" className="block text-white/50 text-xs font-bold tracking-wide mb-2">
                CURP
              </label>
              <div
                id="curp-demo-input"
                className="w-full mb-4 px-4 py-3 rounded-lg bg-white/5 border border-white/10 text-white/60 font-mono text-sm"
              >
                XXXX000000XXXXXX00
              </div>
              <div className="w-full mb-6 px-4 py-3 rounded-lg text-center font-bold text-sm" style={{ background: "#1ECAD3", color: NAVY }}>
                VALIDAR
              </div>

              <div className="space-y-3 pt-4 border-t border-white/10">
                <div className="flex items-center justify-between">
                  <span className="text-white/50 text-xs">CURP</span>
                  <span className="flex items-center gap-1.5 text-[#1ECAD3] font-bold text-sm">
                    VALIDADA
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                    </svg>
                  </span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-white/50 text-xs">Estatus</span>
                  <span className="text-white/80 text-sm font-semibold">ACTIVA</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-white/50 text-xs">Fuente</span>
                  <span className="text-white/80 text-sm font-semibold">RENAPO</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-white/50 text-xs">Event ID</span>
                  <span className="text-white/50 text-xs font-mono">evt_xxxxxx</span>
                </div>
              </div>

              <p className="mt-6 text-[11px] text-white/35 leading-relaxed">
                Ejemplo ilustrativo de la interfaz. No se muestran datos personales reales.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
