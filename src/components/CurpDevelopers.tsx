"use client";

import Link from "next/link";
import { gtmEvent } from "./GoogleTagManager";

const features = ["API REST", "Autenticación Bearer", "Sandbox", "Respuestas estructuradas", "Event ID / trazabilidad", "Integración con otras Consultas Oficiales"];

export default function CurpDevelopers() {
  return (
    <section className="py-20" style={{ background: "#02132D" }} aria-labelledby="curp-dev-heading">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 id="curp-dev-heading" data-sr className="text-3xl md:text-4xl font-black text-white mb-10">
          Diseñada para integrarse a tu operación
        </h2>

        <div data-sr-grid className="grid sm:grid-cols-2 gap-3 mb-10 text-left">
          {features.map((f) => (
            <div key={f} className="flex items-center gap-3 p-4 rounded-xl" style={{ background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.08)" }}>
              <svg className="w-4 h-4 text-[#1ECAD3] flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
              </svg>
              <span className="text-sm text-white/80">{f}</span>
            </div>
          ))}
        </div>

        <div className="flex flex-wrap justify-center gap-4">
          <Link
            href="/docs/consultas-oficiales/api/renapo-curp"
            onClick={() => gtmEvent("curp_docs", { destination: "/docs/consultas-oficiales/api/renapo-curp", source: "developers", page_path: window.location.pathname })}
            data-cta="ver-documentacion"
            data-source="curp_developers"
            className="px-6 py-3.5 min-h-[48px] flex items-center bg-[#1ECAD3] text-[#02132D] font-bold rounded-lg hover:bg-[#17b5bd] transition-all"
          >
            VER DOCUMENTACIÓN
          </Link>
          <Link
            href="/autoservicio"
            onClick={() => gtmEvent("curp_autoservicio", { destination: "/autoservicio", source: "developers", page_path: window.location.pathname })}
            data-cta="solicitar-acceso"
            data-source="curp_developers"
            className="px-6 py-3.5 min-h-[48px] flex items-center bg-white/10 border border-white/20 text-white font-semibold rounded-lg hover:bg-white/20 transition-all"
          >
            SOLICITAR ACCESO
          </Link>
        </div>
      </div>
    </section>
  );
}
