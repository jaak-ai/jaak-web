"use client";

import Link from "next/link";
import { gtmEvent } from "./GoogleTagManager";

const layers = ["INE", "AML", "BIOMETRÍA", "FIRMA", "EVIDENCIA"];

export default function CurpLayers() {
  return (
    <section className="py-20 bg-white" aria-labelledby="curp-layers-heading">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 id="curp-layers-heading" data-sr className="text-3xl md:text-4xl font-black text-[#02132D] mb-4">
          Empieza con CURP. Agrega capas cuando las necesites.
        </h2>

        <div data-sr className="flex flex-wrap items-center justify-center gap-3 my-10">
          <span className="px-4 py-2.5 rounded-lg text-xs font-bold tracking-wide bg-[#1ECAD3] text-[#02132D]">
            CURP ✓
          </span>
          {layers.map((l) => (
            <span key={l} className="flex items-center gap-3">
              <span className="text-gray-300" aria-hidden="true">+</span>
              <span className="px-4 py-2.5 rounded-lg text-xs font-bold tracking-wide bg-gray-50 border border-gray-200 text-[#02132D]">
                {l}
              </span>
            </span>
          ))}
        </div>

        <p data-sr className="text-gray-600 max-w-xl mx-auto mb-8">
          Construye un flujo acorde con el nivel de riesgo de cada operación sin integrar soluciones aisladas
          para cada etapa.
        </p>

        <Link
          href="/consultas-oficiales"
          onClick={() => gtmEvent("curp_consultas_oficiales", { destination: "/consultas-oficiales", page_path: window.location.pathname })}
          data-cta="explorar-consultas-oficiales"
          data-source="curp_layers"
          className="inline-flex px-6 py-3.5 min-h-[48px] items-center bg-[#02132D] text-white font-bold rounded-lg hover:bg-[#0E1133] transition-all"
        >
          EXPLORAR CONSULTAS OFICIALES
        </Link>
      </div>
    </section>
  );
}
