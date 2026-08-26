"use client";

import Link from "next/link";
import { gtmEvent } from "./GoogleTagManager";

const requestExample = `POST /api/v1/official-list/mx/curp/validate
Authorization: Bearer <api-key>
Content-Type: application/json

{
  "curp": "XXXX000000XXXXXX00"
}`;

const responseExample = `200 OK

{
  "isValid": true,
  "eventId": "evt_xxxxxx",
  "details": {
    "person": { "...": "..." }
  }
}`;

export default function CurpApiExample() {
  return (
    <section className="py-20" style={{ background: "#F3F4F8" }} aria-labelledby="api-heading">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div data-sr className="text-center mb-10">
          <h2 id="api-heading" className="text-3xl md:text-4xl font-black text-[#02132D]">
            Una llamada. Un resultado.
          </h2>
        </div>

        <div data-sr className="rounded-2xl overflow-hidden mb-3" style={{ background: "#0a0a0a" }}>
          <div className="px-5 py-3 border-b border-white/10">
            <span className="text-xs font-mono text-white/40">Request</span>
          </div>
          <pre className="p-5 overflow-x-auto text-sm font-mono text-green-400 leading-relaxed">{requestExample}</pre>
        </div>
        <div data-sr className="rounded-2xl overflow-hidden mb-8" style={{ background: "#0a0a0a" }}>
          <div className="px-5 py-3 border-b border-white/10">
            <span className="text-xs font-mono text-white/40">Response</span>
          </div>
          <pre className="p-5 overflow-x-auto text-sm font-mono text-green-400 leading-relaxed">{responseExample}</pre>
        </div>

        <div className="text-center">
          <Link
            href="/docs/consultas-oficiales/api/renapo-curp"
            onClick={() => gtmEvent("curp_docs", { destination: "/docs/consultas-oficiales/api/renapo-curp", source: "api_example", page_path: window.location.pathname })}
            data-cta="ver-documentacion"
            data-source="api_example"
            className="text-sm font-bold text-[#02132D] hover:text-[#1ECAD3] transition-colors"
          >
            VER DOCUMENTACIÓN COMPLETA →
          </Link>
        </div>
      </div>
    </section>
  );
}
