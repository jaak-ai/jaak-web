"use client";

import Link from "next/link";
import { gtmEvent } from "./GoogleTagManager";

export default function IneVsKyc() {
  return (
    <section className="py-20 bg-white" aria-labelledby="ine-vs-kyc-heading">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div data-sr className="text-center mb-12">
          <h2 id="ine-vs-kyc-heading" className="text-3xl md:text-4xl font-black text-[#02132D]">
            Validación INE no es sinónimo de KYC
          </h2>
        </div>

        <div data-sr-grid className="grid sm:grid-cols-2 gap-6 mb-10">
          <div className="p-8 rounded-2xl border border-gray-100 bg-gray-50">
            <h3 className="text-sm font-bold uppercase tracking-wide text-[#1ECAD3] mb-4">Validación INE</h3>
            <dl className="space-y-4 text-sm">
              <div>
                <dt className="font-semibold text-[#02132D]">Objetivo</dt>
                <dd className="text-gray-600">Validar información relacionada con una credencial.</dd>
              </div>
              <div>
                <dt className="font-semibold text-[#02132D]">Ideal cuando</dt>
                <dd className="text-gray-600">Ya tienes el documento o información necesaria y requieres una consulta puntual.</dd>
              </div>
              <div>
                <dt className="font-semibold text-[#02132D]">Complejidad</dt>
                <dd className="text-gray-600">Baja / puntual.</dd>
              </div>
            </dl>
          </div>

          <div className="p-8 rounded-2xl text-white relative overflow-hidden" style={{ background: "#02132D" }}>
            <div className="absolute -top-10 -right-10 w-40 h-40 bg-[#1ECAD3]/15 rounded-full blur-3xl" aria-hidden="true" />
            <h3 className="text-sm font-bold uppercase tracking-wide text-[#1ECAD3] mb-4 relative">KYC biométrico</h3>
            <dl className="space-y-4 text-sm relative">
              <div>
                <dt className="font-semibold text-white">Objetivo</dt>
                <dd className="text-white/70">Verificar integralmente la identidad del usuario.</dd>
              </div>
              <div>
                <dt className="font-semibold text-white">Incluye</dt>
                <dd className="text-white/70">Documento, OCR, biometría, prueba de vida, face match, CURP, listas, geolocalización cuando corresponda.</dd>
              </div>
              <div>
                <dt className="font-semibold text-white">Ideal cuando</dt>
                <dd className="text-white/70">Necesitas verificar a la persona y generar un proceso de identidad más robusto.</dd>
              </div>
            </dl>
          </div>
        </div>

        <div className="text-center">
          <Link
            href="/plataforma/verificacion-identidad"
            onClick={() => gtmEvent("ine_kYC_upsell", { destination: "/plataforma/verificacion-identidad", page_path: window.location.pathname })}
            data-cta="conocer-kyc"
            data-source="ine_vs_kyc"
            className="inline-flex px-6 py-3.5 min-h-[48px] items-center bg-[#02132D] text-white font-bold rounded-lg hover:bg-[#0E1133] transition-all"
          >
            CONOCER KYC JAAK →
          </Link>
        </div>
      </div>
    </section>
  );
}
