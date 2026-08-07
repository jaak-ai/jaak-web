"use client";

import Link from "next/link";
import { gtmEvent } from "./GoogleTagManager";

const levels = [
  { n: "1", label: "CONSULTA OFICIAL", items: "INE · CURP · RFC", color: "#1ECAD3" },
  { n: "2", label: "CUMPLIMIENTO", items: "AML · PLD · Listas", color: "#655DC6" },
  { n: "3", label: "IDENTIDAD", items: "Documento · Liveness · Face Match · Geolocalización", color: "#8B5CF6" },
  { n: "4", label: "TRANSACCIÓN", items: "Firma digital · NOM-151", color: "#10B981" },
  { n: "5", label: "EVIDENCIA", items: "Expediente · Trazabilidad · Auditoría", color: "#F59E0B" },
];

export default function ConsultasOficialesModularity() {
  return (
    <section className="py-20" style={{ background: "#02132D" }} aria-labelledby="modularity-heading">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div data-sr className="text-center mb-12">
          <h2 id="modularity-heading" className="text-3xl md:text-4xl font-black text-white mb-4">
            No todo proceso necesita un KYC completo
          </h2>
          <p className="text-lg text-white/60">
            Empieza por una consulta puntual. Agrega nuevas capas conforme aumenta el riesgo de la operación.
          </p>
        </div>

        <div data-sr-grid className="space-y-3">
          {levels.map((lvl, i) => (
            <div key={lvl.n}>
              <div
                className="flex items-center gap-4 p-5 rounded-2xl"
                style={{ background: `${lvl.color}14`, border: `1px solid ${lvl.color}40` }}
              >
                <span
                  className="w-9 h-9 rounded-full flex items-center justify-center font-black text-sm flex-shrink-0"
                  style={{ background: lvl.color, color: "#02132D" }}
                >
                  {lvl.n}
                </span>
                <div>
                  <div className="text-xs font-black tracking-wide text-white mb-1">NIVEL {lvl.n} · {lvl.label}</div>
                  <div className="text-sm text-white/60">{lvl.items}</div>
                </div>
              </div>
              {i < levels.length - 1 && (
                <div className="flex justify-center py-1" aria-hidden="true">
                  <span className="text-white/25">↓</span>
                </div>
              )}
            </div>
          ))}
        </div>

        <p className="text-center text-white/50 text-sm font-semibold tracking-wide mt-10 mb-6">
          USA SOLO LAS CAPAS QUE TU PROCESO NECESITA.
        </p>

        <div className="text-center">
          <Link
            href="/plataforma/verificacion-identidad"
            onClick={() => gtmEvent("consultas_kYC", { destination: "/plataforma/verificacion-identidad", page_path: window.location.pathname })}
            data-cta="conocer-kyc"
            data-source="modularity"
            className="inline-flex px-6 py-3.5 min-h-[48px] items-center bg-[#1ECAD3] text-[#02132D] font-bold rounded-lg hover:bg-[#17b5bd] transition-all"
          >
            Conocer KYC JAAK
          </Link>
        </div>
      </div>
    </section>
  );
}
