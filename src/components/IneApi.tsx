"use client";

import Link from "next/link";
import { gtmEvent } from "./GoogleTagManager";

const requestExample = `POST /api/v1/government/mx/ine/verify
Authorization: Bearer <api-key>
Content-Type: application/json

{
  "image": "<credencial en base64>"
}`;

const responseExample = `200 OK

{
  "eventId": "evt_xxxxxx",
  "status": "success",
  "data": {
    "estado": "...",
    "curp": "...",
    "vigencia": "2028-01-15"
  }
}`;

export default function IneApi() {
  return (
    <section className="py-20" style={{ background: "#02132D" }} aria-labelledby="ine-api-heading">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 id="ine-api-heading" data-sr className="text-3xl md:text-4xl font-black text-white mb-10">
          Integra la validación dentro de tu propio flujo
        </h2>

        <div data-sr className="rounded-2xl overflow-hidden mb-3 text-left" style={{ background: "#0a0a0a" }}>
          <div className="px-5 py-3 border-b border-white/10">
            <span className="text-xs font-mono text-white/40">Request</span>
          </div>
          <pre className="p-5 overflow-x-auto text-sm font-mono text-green-400 leading-relaxed">{requestExample}</pre>
        </div>
        <div data-sr className="rounded-2xl overflow-hidden mb-10 text-left" style={{ background: "#0a0a0a" }}>
          <div className="px-5 py-3 border-b border-white/10">
            <span className="text-xs font-mono text-white/40">Response</span>
          </div>
          <pre className="p-5 overflow-x-auto text-sm font-mono text-green-400 leading-relaxed">{responseExample}</pre>
        </div>

        <div className="flex flex-wrap justify-center gap-4">
          <Link
            href="/docs/consultas-oficiales/api/ine"
            onClick={() => gtmEvent("ine_docs", { destination: "/docs/consultas-oficiales/api/ine", source: "api", page_path: window.location.pathname })}
            data-cta="ver-documentacion"
            data-source="ine_api"
            className="px-6 py-3.5 min-h-[48px] flex items-center bg-[#1ECAD3] text-[#02132D] font-bold rounded-lg hover:bg-[#17b5bd] transition-all"
          >
            VER DOCUMENTACIÓN
          </Link>
          <Link
            href="/autoservicio"
            onClick={() => gtmEvent("ine_autoservicio", { destination: "/autoservicio", source: "api", page_path: window.location.pathname })}
            data-cta="probar-en-jaak"
            data-source="ine_api"
            className="px-6 py-3.5 min-h-[48px] flex items-center bg-white/10 border border-white/20 text-white font-semibold rounded-lg hover:bg-white/20 transition-all"
          >
            ¿No quieres integrar todavía? PROBAR EN JAAK →
          </Link>
        </div>
      </div>
    </section>
  );
}
