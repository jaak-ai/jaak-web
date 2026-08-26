"use client";

import Link from "next/link";
import { gtmEvent } from "./GoogleTagManager";

const flow = ["SOLICITUD", "FUENTE CONSULTADA", "RESULTADO", "FECHA Y HORA", "ID DE OPERACIÓN", "EXPEDIENTE"];

export default function ConsultasOficialesEvidence() {
  return (
    <section className="py-20" style={{ background: "#02132D" }} aria-labelledby="evidence-heading">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div data-sr className="text-center mb-12">
          <h2 id="evidence-heading" className="text-3xl md:text-4xl font-black text-white mb-4">
            No solo obtengas una respuesta. Conserva el contexto de la operación.
          </h2>
          <p className="text-white/60 max-w-2xl mx-auto">
            En procesos sensibles, conocer el resultado es solo una parte. También importa poder reconstruir
            qué validación se realizó y cuándo ocurrió.
          </p>
        </div>

        <div data-sr className="flex flex-wrap items-center justify-center gap-3 mb-12">
          {flow.map((step, i) => (
            <div key={step} className="flex items-center gap-3">
              <span
                className="px-4 py-2.5 rounded-lg text-xs font-bold tracking-wide text-white/85"
                style={{ background: "rgba(255,255,255,0.06)", border: "1px solid rgba(255,255,255,0.12)" }}
              >
                {step}
              </span>
              {i < flow.length - 1 && (
                <span className="text-[#1ECAD3]" aria-hidden="true">→</span>
              )}
            </div>
          ))}
        </div>

        <div className="text-center">
          <Link
            href="/plataforma/gestion-evidencia"
            onClick={() => gtmEvent("consultas_ecosistema_click", { destination: "/plataforma/gestion-evidencia", source: "evidence", page_path: window.location.pathname })}
            data-cta="conocer-ecosistema"
            data-source="evidence"
            className="inline-flex px-6 py-3.5 min-h-[48px] items-center bg-[#1ECAD3] text-[#02132D] font-bold rounded-lg hover:bg-[#17b5bd] transition-all"
          >
            Conocer el ecosistema JAAK
          </Link>
        </div>
      </div>
    </section>
  );
}
