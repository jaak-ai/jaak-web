"use client";

import Link from "next/link";
import { gtmEvent } from "./GoogleTagManager";

const products = [
  {
    id: "curp",
    eyebrow: "CURP · RENAPO",
    title: "Confirma una CURP contra RENAPO",
    desc: "Valida existencia y estatus de la CURP y obtén los datos disponibles asociados al registro.",
    bullets: ["Existencia del registro", "Estatus", "Datos asociados", "Resultado estructurado", "ID de operación"],
    cta: "VALIDAR CURP →",
    href: "/validar-curp-renapo",
    event: "consultas_curp",
  },
  {
    id: "ine",
    eyebrow: "INE",
    title: "Valida una Credencial para Votar",
    desc: "Incorpora una validación adicional de la credencial INE dentro de tus procesos de identidad.",
    bullets: ["Validación de credencial", "Información de respuesta", "Resultado estructurado", "Integración vía API", "Evidencia de operación"],
    cta: "VALIDAR INE →",
    href: "/validar-ine",
    event: "consultas_ine",
  },
  {
    id: "rfc",
    eyebrow: "RFC · SAT",
    title: "Valida información fiscal",
    desc: "Incorpora validaciones relacionadas con RFC dentro de tus procesos de alta, cumplimiento o actualización de información.",
    bullets: [],
    cta: "CONOCER VALIDACIÓN RFC →",
    href: "/docs/consultas-oficiales/api/sat-rfc",
    event: "consultas_rfc",
  },
  {
    id: "aml",
    eyebrow: "PLD · AML",
    title: "Investiga personas y empresas en listas de riesgo",
    desc: "Consulta listas de cumplimiento y agrega una capa de screening cuando tu operación lo requiera.",
    bullets: [],
    cta: "CONSULTAR LISTAS →",
    href: "/listas-de-riesgo-pld-aml",
    event: "consultas_aml",
  },
];

export default function ConsultasOficialesProductGrid() {
  const track = (eventName: string, href: string) => {
    gtmEvent(eventName, { destination: href, page_path: window.location.pathname });
  };

  return (
    <section className="py-20" style={{ background: "#F3F4F8" }} aria-labelledby="products-heading">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div data-sr className="text-center mb-12">
          <h2 id="products-heading" className="text-3xl md:text-4xl font-black text-[#02132D]">
            Valida solo lo que necesitas
          </h2>
        </div>

        <div data-sr-grid className="grid sm:grid-cols-2 gap-6">
          {products.map((p) => (
            <div key={p.id} className="bg-white rounded-2xl p-8 border border-gray-100 flex flex-col">
              <span className="text-xs font-bold text-[#1ECAD3] tracking-wide mb-2">{p.eyebrow}</span>
              <h3 className="text-xl font-black text-[#02132D] mb-3">{p.title}</h3>
              <p className="text-sm text-gray-600 leading-relaxed mb-5">{p.desc}</p>
              {p.bullets.length > 0 && (
                <ul className="space-y-2 mb-6">
                  {p.bullets.map((b) => (
                    <li key={b} className="flex items-center gap-2 text-sm text-gray-500">
                      <svg className="w-3.5 h-3.5 text-[#1ECAD3] flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                      </svg>
                      {b}
                    </li>
                  ))}
                </ul>
              )}
              <Link
                href={p.href}
                onClick={() => track(p.event, p.href)}
                data-cta={p.event}
                data-source="products_grid"
                className="mt-auto text-sm font-bold text-[#02132D] hover:text-[#1ECAD3] transition-colors"
              >
                {p.cta}
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
