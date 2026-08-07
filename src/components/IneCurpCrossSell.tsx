"use client";

import Link from "next/link";
import { gtmEvent } from "./GoogleTagManager";

export default function IneCurpCrossSell() {
  return (
    <section className="py-20" style={{ background: "#F3F4F8" }} aria-labelledby="ine-curp-heading">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 id="ine-curp-heading" data-sr className="text-3xl md:text-4xl font-black text-[#02132D] mb-4">
          INE + CURP: una validación más completa de los datos
        </h2>

        <div data-sr className="flex flex-wrap items-center justify-center gap-3 my-10">
          <span className="px-4 py-2.5 rounded-lg text-xs font-bold tracking-wide bg-[#1ECAD3] text-[#02132D]">
            CREDENCIAL INE ✓
          </span>
          <span className="text-gray-300" aria-hidden="true">+</span>
          <span className="px-4 py-2.5 rounded-lg text-xs font-bold tracking-wide bg-[#1ECAD3] text-[#02132D]">
            CURP / RENAPO ✓
          </span>
          <span className="text-gray-300" aria-hidden="true">=</span>
          <span className="px-4 py-2.5 rounded-lg text-xs font-bold tracking-wide bg-white border border-gray-200 text-[#02132D]">
            MÁS CONTEXTO ANTES DE CONTINUAR
          </span>
        </div>

        <p data-sr className="text-gray-600 max-w-xl mx-auto mb-8">
          Combina validaciones puntuales dentro de una misma estrategia sin ejecutar necesariamente todo el
          flujo KYC.
        </p>

        <Link
          href="/validar-curp-renapo"
          onClick={() => gtmEvent("ine_curp_crosssell", { destination: "/validar-curp-renapo", page_path: window.location.pathname })}
          data-cta="conocer-curp"
          data-source="ine_curp_crosssell"
          className="inline-flex px-6 py-3.5 min-h-[48px] items-center bg-[#02132D] text-white font-bold rounded-lg hover:bg-[#0E1133] transition-all"
        >
          CONOCER CONSULTA CURP →
        </Link>
      </div>
    </section>
  );
}
