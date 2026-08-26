"use client";

import Link from "next/link";
import Breadcrumbs from "./Breadcrumbs";
import { gtmEvent } from "./GoogleTagManager";

const NAVY = "#02132D";
const badges = ["API", "SANDBOX", "INTEGRABLE A KYC", "RESULTADO ESTRUCTURADO"];

export default function IneHero() {
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
              { name: "Validar INE" },
            ]}
          />
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div data-sr>
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#1ECAD3]/10 border border-[#1ECAD3]/30 rounded-full mb-6">
              <span className="w-2 h-2 bg-[#1ECAD3] rounded-full" />
              <span className="text-[#1ECAD3] text-xs sm:text-sm font-bold tracking-wide">
                VALIDACIÓN INE · MÉXICO
              </span>
            </div>

            <h1 id="hero-heading" className="text-4xl md:text-5xl font-black text-white mb-6 leading-tight">
              Valida una credencial INE dentro de tu proceso
            </h1>

            <p className="text-lg text-white/70 mb-8 max-w-xl">
              Agrega una consulta de validación de credencial dentro de tus flujos de alta, identidad o
              actualización de expediente y recibe un resultado estructurado para continuar tu proceso.
            </p>

            <div className="flex flex-wrap gap-4 mb-8">
              <Link
                href="/autoservicio"
                onClick={() => track("ine_hero_probar", "autoservicio")}
                data-cta="probar-ine"
                data-source="hero"
                className="px-6 py-3.5 min-h-[48px] flex items-center bg-[#1ECAD3] text-[#02132D] font-bold rounded-lg hover:bg-[#17b5bd] transition-all"
              >
                Probar validación INE
              </Link>
              <Link
                href="/docs/consultas-oficiales/api/ine"
                onClick={() => track("ine_docs", "docs")}
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
              <div className="flex items-center justify-between mb-6">
                <span className="text-white/50 text-xs font-bold tracking-wide">CREDENCIAL</span>
                <span className="text-[10px] font-mono text-white/30">evt_xxxxxx</span>
              </div>

              <div
                className="w-full aspect-[1.6/1] rounded-xl mb-6 flex items-center justify-center"
                style={{ background: "rgba(255,255,255,0.04)", border: "1px dashed rgba(255,255,255,0.2)" }}
              >
                <span className="text-white/30 text-xs font-semibold tracking-wide">CREDENCIAL FICTICIA</span>
              </div>

              <div className="flex items-center justify-center gap-2 text-white/40 text-xs mb-6">
                <span>CREDENCIAL</span>
                <span aria-hidden="true">↓</span>
                <span>VALIDACIÓN</span>
                <span aria-hidden="true">↓</span>
                <span>RESULTADO</span>
              </div>

              <div className="flex items-center justify-between p-3 rounded-lg" style={{ background: "rgba(30,202,211,0.1)", border: "1px solid rgba(30,202,211,0.3)" }}>
                <span className="text-white/50 text-xs">Estado</span>
                <span className="flex items-center gap-1.5 text-[#1ECAD3] font-bold text-sm">
                  VALIDADO
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                  </svg>
                </span>
              </div>

              <p className="mt-6 text-[11px] text-white/35 leading-relaxed">
                Credencial ilustrativa y ficticia. No representa un diseño oficial ni datos reales.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
