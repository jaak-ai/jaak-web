"use client";

import { useState } from "react";
import Link from "next/link";
import { gtmEvent } from "@/components/GoogleTagManager";

const NAVY_DARK = "#071426";
const TEAL = "#1ECAD3";

/**
 * Pestaña lateral fija que dirige a /guia-captura-kyc como referencia antes
 * de iniciar la demo. Solo en escritorio: en móvil el espacio inferior ya
 * lo ocupa el CTA sticky de esta landing.
 */
export default function GuiaCapturaTab() {
  const [open, setOpen] = useState(false);

  return (
    <div className="hidden lg:block fixed left-0 top-1/2 -translate-y-1/2 z-30">
      {open ? (
        <div
          className="relative w-72 rounded-r-2xl p-5 shadow-2xl"
          style={{ background: NAVY_DARK, border: "1px solid rgba(30,202,211,0.3)", borderLeft: "none" }}
        >
          <button
            type="button"
            onClick={() => setOpen(false)}
            aria-label="Cerrar"
            className="absolute top-3 right-3 text-white/40 hover:text-white transition-colors"
          >
            ✕
          </button>
          <p className="text-xs font-bold uppercase tracking-wide mb-2" style={{ color: TEAL }}>
            Antes de comenzar
          </p>
          <h3 className="text-white font-bold text-base mb-2 pr-4">¿Primera vez verificando tu identidad?</h3>
          <p className="text-white/60 text-sm mb-4 leading-relaxed">
            Revisa la guía de captura: cómo fotografiar tu documento y tu rostro correctamente, para completar la
            demo a la primera.
          </p>
          <Link
            href="/guia-captura-kyc"
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => gtmEvent("kyc_demo_guide_tab_click")}
            className="inline-flex items-center gap-1.5 text-sm font-bold px-4 py-2.5 rounded-lg transition-opacity hover:opacity-90"
            style={{ background: TEAL, color: NAVY_DARK }}
          >
            Ver guía de captura →
          </Link>
        </div>
      ) : (
        <button
          type="button"
          onClick={() => {
            setOpen(true);
            gtmEvent("kyc_demo_guide_tab_open");
          }}
          aria-expanded={open}
          aria-label="Abrir guía de captura de referencia"
          className="flex items-center gap-2 rounded-r-xl px-2.5 py-4 shadow-lg hover:pl-3.5 transition-all"
          style={{ background: NAVY_DARK, border: "1px solid rgba(30,202,211,0.3)", borderLeft: "none" }}
        >
          <span className="text-base" aria-hidden="true">📄</span>
          <span
            className="text-white text-xs font-bold whitespace-nowrap"
            style={{ writingMode: "vertical-rl", transform: "rotate(180deg)" }}
          >
            Guía de captura
          </span>
        </button>
      )}
    </div>
  );
}
