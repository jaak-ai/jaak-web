"use client";

import Link from "next/link";
import { gtmEvent } from "./GoogleTagManager";

const nodes = ["CURP", "INE", "AML", "KYC BIOMÉTRICO", "FIRMA DIGITAL"];

export default function ConsultasOficialesEcosystem() {
  return (
    <section className="py-20" style={{ background: "#F3F4F8" }} aria-labelledby="ecosystem-heading">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div data-sr className="text-center mb-12">
          <h2 id="ecosystem-heading" className="text-3xl md:text-4xl font-black text-[#02132D]">
            Una consulta puede ser solo el principio
          </h2>
        </div>

        <div data-sr className="flex flex-wrap items-center justify-center gap-3 mb-6">
          {nodes.map((n, i) => (
            <div key={n} className="flex items-center gap-3">
              <span className="px-4 py-2.5 rounded-lg text-xs font-bold tracking-wide bg-white border border-gray-200 text-[#02132D]">
                {n}
              </span>
              {i < nodes.length - 1 && <span className="text-[#1ECAD3] font-bold" aria-hidden="true">+</span>}
            </div>
          ))}
        </div>
        <p className="text-center text-sm font-black tracking-wide text-[#1ECAD3] mb-10">
          = PROCESO CON MAYOR EVIDENCIA
        </p>

        <p data-sr className="text-center text-gray-600 max-w-2xl mx-auto mb-10">
          Construye el nivel de confianza adecuado para cada operación sin duplicar proveedores, integraciones
          o flujos.
        </p>

        <div className="text-center">
          <Link
            href="/cumplimiento"
            onClick={() => gtmEvent("consultas_cta_final", { destination: "/cumplimiento", source: "ecosystem", page_path: window.location.pathname })}
            data-cta="explorar-soluciones"
            data-source="ecosystem"
            className="inline-flex px-6 py-3.5 min-h-[48px] items-center bg-[#02132D] text-white font-bold rounded-lg hover:bg-[#0E1133] transition-all"
          >
            Explorar soluciones JAAK
          </Link>
        </div>
      </div>
    </section>
  );
}
