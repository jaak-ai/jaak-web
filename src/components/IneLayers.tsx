"use client";

import Link from "next/link";
import { gtmEvent } from "./GoogleTagManager";

const steps = [
  "INE",
  "INE + CURP",
  "INE + CURP + AML",
  "KYC BIOMÉTRICO",
  "KYC + FIRMA",
  "EXPEDIENTE",
];

export default function IneLayers() {
  return (
    <section className="py-20 bg-white" aria-labelledby="ine-layers-heading">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 id="ine-layers-heading" data-sr className="text-3xl md:text-4xl font-black text-[#02132D] mb-4">
          Cuando el riesgo aumenta, agrega más capas.
        </h2>

        <div data-sr className="flex flex-col items-center gap-2 my-10">
          {steps.map((s, i) => (
            <div key={s} className="flex flex-col items-center gap-2">
              <span className="px-5 py-2.5 rounded-lg text-xs font-bold tracking-wide bg-gray-50 border border-gray-200 text-[#02132D]">
                {s}
              </span>
              {i < steps.length - 1 && <span className="text-gray-300" aria-hidden="true">↓</span>}
            </div>
          ))}
        </div>

        <p data-sr className="text-gray-600 max-w-xl mx-auto mb-8">
          JAAK permite construir procesos modulares: empieza con una consulta puntual y agrega identidad,
          cumplimiento y evidencia cuando tu operación lo requiere.
        </p>

        <Link
          href="/consultas-oficiales"
          onClick={() => gtmEvent("ine_consultas_oficiales", { destination: "/consultas-oficiales", page_path: window.location.pathname })}
          data-cta="explorar-ecosistema"
          data-source="ine_layers"
          className="inline-flex px-6 py-3.5 min-h-[48px] items-center bg-[#02132D] text-white font-bold rounded-lg hover:bg-[#0E1133] transition-all"
        >
          EXPLORAR ECOSISTEMA JAAK
        </Link>
      </div>
    </section>
  );
}
