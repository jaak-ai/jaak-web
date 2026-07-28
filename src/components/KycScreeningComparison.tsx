"use client";

import Link from "next/link";
import { gtmEvent } from "./GoogleTagManager";

const NAVY = "#202945";

const onlyScreening = [
  "Persona o empresa consultada",
  "Fuentes seleccionadas",
  "Resultado",
  "Score",
  "Fecha",
  "Detalle de coincidencia",
  "Snapshot disponible",
];

const kycPlusScreening = [
  "Identidad verificada",
  "Documento validado",
  "Biometría, cuando aplique",
  "Datos extraídos",
  "Consulta de fuentes",
  "Resultado",
  "Evidencia",
  "Trazabilidad",
  "Expediente auditable",
];

const relatedLinks = [
  { name: "KYC biométrico", href: "/plataforma/verificacion-identidad" },
  { name: "Expediente digital", href: "/plataforma/gestion-evidencia" },
  { name: "Firma electrónica", href: "/plataforma/firma-electronica" },
  { name: "Conservación NOM-151", href: "/cumplimiento/nom-151" },
  { name: "Soluciones para sectores regulados", href: "/soluciones/empresas-reguladas" },
];

export default function KycScreeningComparison() {
  return (
    <section className="py-20 bg-white" aria-labelledby="kyc-comparison-heading">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div data-sr className="text-center mb-6">
          <h2 id="kyc-comparison-heading" className="text-3xl md:text-4xl font-black text-[#202945] mb-4">
            Del nombre consultado al expediente completo
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            La consulta de listas de riesgo obtiene mayor valor cuando forma parte de un proceso de identidad
            y onboarding conectado.
          </p>
        </div>

        <div data-sr-grid className="grid md:grid-cols-2 gap-6 mb-10">
          <div className="p-8 rounded-2xl border border-gray-100 bg-gray-50">
            <h3 className="text-sm font-bold uppercase tracking-wide text-gray-400 mb-5">Consulta de listas</h3>
            <ul className="space-y-3">
              {onlyScreening.map((item) => (
                <li key={item} className="flex items-center gap-3 text-gray-700">
                  <svg className="w-4 h-4 text-gray-400 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <div className="p-8 rounded-2xl text-white relative overflow-hidden" style={{ background: NAVY }}>
            <div className="absolute -top-10 -right-10 w-40 h-40 bg-[#1ECAD3]/15 rounded-full blur-3xl" aria-hidden="true" />
            <h3 className="text-sm font-bold uppercase tracking-wide text-[#1ECAD3] mb-5 relative">
              KYC + listas de riesgo
            </h3>
            <ul className="space-y-3 relative">
              {kycPlusScreening.map((item) => (
                <li key={item} className="flex items-center gap-3 text-white/90">
                  <svg className="w-4 h-4 text-[#1ECAD3] flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                  </svg>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div data-sr className="text-center mb-10">
          <p className="text-xl md:text-2xl font-bold text-[#202945] leading-snug">
            Una consulta identifica señales.
            <br />
            <span className="text-[#1ECAD3]">Un expediente permite reconstruir el proceso.</span>
          </p>
        </div>

        <div className="text-center mb-12">
          <Link
            href="/contacto"
            onClick={() => gtmEvent("kyc_crosslink_click", { destination: "contacto", source: "kyc_comparison", page_path: window.location.pathname })}
            data-cta="integrar-onboarding"
            data-source="kyc-comparison"
            className="inline-flex px-6 py-3.5 min-h-[48px] items-center bg-[#202945] text-white font-bold rounded-lg hover:bg-[#0E1133] transition-all"
          >
            Integrar listas de riesgo a mi onboarding
          </Link>
        </div>

        <div className="flex flex-wrap justify-center gap-x-6 gap-y-2">
          {relatedLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => gtmEvent("kyc_crosslink_click", { destination: link.href, source: "kyc_comparison", page_path: window.location.pathname })}
              className="text-sm text-gray-500 hover:text-[#0F8E96] font-medium underline underline-offset-2"
            >
              {link.name}
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
