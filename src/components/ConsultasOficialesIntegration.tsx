"use client";

import Link from "next/link";
import { gtmEvent } from "./GoogleTagManager";

const blocks = [
  {
    title: "PLATAFORMA",
    desc: "Realiza operaciones desde el entorno JAAK cuando no necesitas desarrollar una integración.",
  },
  {
    title: "API",
    desc: "Integra las validaciones directamente dentro de tus productos y procesos.",
  },
  {
    title: "ALTO VOLUMEN",
    desc: "Diseña una configuración acorde con el volumen y necesidades operativas de tu organización.",
  },
];

const codeExample = `POST /api/v1/official-list/mx/curp/validate
Authorization: Bearer <api-key>

{
  "curp": "XXXX000000XXXXXX00"
}

200 OK
{
  "isValid": true,
  "eventId": "evt_xxxxx"
}`;

export default function ConsultasOficialesIntegration() {
  return (
    <section className="py-20 bg-white" aria-labelledby="integration-heading">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div data-sr className="text-center mb-12">
          <h2 id="integration-heading" className="text-3xl md:text-4xl font-black text-[#02132D]">
            Consume JAAK como tú lo necesitas
          </h2>
        </div>

        <div data-sr-grid className="grid sm:grid-cols-3 gap-6 mb-12">
          {blocks.map((b) => (
            <div key={b.title} className="p-6 rounded-2xl border border-gray-100 bg-gray-50">
              <h3 className="text-sm font-black tracking-wide text-[#02132D] mb-2">{b.title}</h3>
              <p className="text-sm text-gray-600 leading-relaxed">{b.desc}</p>
            </div>
          ))}
        </div>

        <div data-sr className="rounded-2xl overflow-hidden mb-10 max-w-2xl mx-auto" style={{ background: "#0a0a0a" }}>
          <div className="px-5 py-3 border-b border-white/10 flex items-center justify-between">
            <span className="text-xs font-mono text-white/40">Validación CURP · RENAPO</span>
          </div>
          <pre className="p-5 overflow-x-auto text-sm font-mono text-green-400 leading-relaxed">{codeExample}</pre>
        </div>

        <div className="flex flex-wrap justify-center gap-4">
          <Link
            href="/docs/consultas-oficiales"
            onClick={() => gtmEvent("consultas_docs_api", { destination: "/docs/consultas-oficiales", source: "integration", page_path: window.location.pathname })}
            data-cta="ver-documentacion"
            data-source="integration"
            className="px-6 py-3.5 min-h-[48px] flex items-center bg-[#02132D] text-white font-bold rounded-lg hover:bg-[#0E1133] transition-all"
          >
            Ver documentación API
          </Link>
          <Link
            href="/contacto"
            onClick={() => gtmEvent("consultas_contactar", { destination: "/contacto", source: "integration", page_path: window.location.pathname })}
            data-cta="hablar-especialista"
            data-source="integration"
            className="px-6 py-3.5 min-h-[48px] flex items-center bg-white border border-gray-200 text-[#02132D] font-semibold rounded-lg hover:bg-gray-50 transition-all"
          >
            Hablar con un especialista
          </Link>
        </div>
      </div>
    </section>
  );
}
