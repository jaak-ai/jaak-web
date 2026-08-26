"use client";

import Link from "next/link";
import { gtmEvent } from "./GoogleTagManager";

const onlyCurp = ["Tienes el dato", "Necesitas confirmar el registro", "Una consulta puntual puede ser suficiente"];
const kycCompleto = ["Necesitas capturar documento", "Verificar rostro", "Prueba de vida", "Comparación biométrica", "Listas", "Geolocalización", "Expediente"];

export default function CurpVsKyc() {
  return (
    <section className="py-20" style={{ background: "#F3F4F8" }} aria-labelledby="curp-vs-kyc-heading">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div data-sr className="text-center mb-12">
          <h2 id="curp-vs-kyc-heading" className="text-3xl md:text-4xl font-black text-[#02132D]">
            No necesitas ejecutar un KYC completo
          </h2>
        </div>

        <div data-sr-grid className="grid sm:grid-cols-2 gap-6 mb-10">
          <div className="p-8 rounded-2xl border border-gray-100 bg-white">
            <h3 className="text-sm font-bold uppercase tracking-wide text-[#1ECAD3] mb-5">Solo CURP</h3>
            <ul className="space-y-3">
              {onlyCurp.map((c) => (
                <li key={c} className="flex items-center gap-3 text-gray-700 text-sm">
                  <svg className="w-4 h-4 text-[#1ECAD3] flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                  </svg>
                  {c}
                </li>
              ))}
            </ul>
          </div>

          <div className="p-8 rounded-2xl border border-gray-100 bg-white">
            <h3 className="text-sm font-bold uppercase tracking-wide text-gray-400 mb-5">KYC completo</h3>
            <ul className="space-y-3">
              {kycCompleto.map((c) => (
                <li key={c} className="flex items-center gap-3 text-gray-600 text-sm">
                  <svg className="w-4 h-4 text-gray-400 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                  {c}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="text-center">
          <p className="text-sm text-gray-500 mb-4">¿Necesitas más capas?</p>
          <Link
            href="/plataforma/verificacion-identidad"
            onClick={() => gtmEvent("curp_kYC_upsell", { destination: "/plataforma/verificacion-identidad", page_path: window.location.pathname })}
            data-cta="conocer-kyc"
            data-source="curp_vs_kyc"
            className="inline-flex px-6 py-3.5 min-h-[48px] items-center bg-[#02132D] text-white font-bold rounded-lg hover:bg-[#0E1133] transition-all"
          >
            CONOCER KYC JAAK →
          </Link>
        </div>
      </div>
    </section>
  );
}
