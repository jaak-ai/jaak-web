"use client";

import { useEffect, useState } from "react";
import CatalogoAutoservicio from "./CatalogoAutoservicio";
import ConfiguradorAutoservicio from "./ConfiguradorAutoservicio";

const NAVY = "#212A45";

type Variante = "catalogo" | "guia";

// Iconos por modo: cuadrícula (catálogo) y brújula/asistente (guía).
function ModoIcon({ v, className }: { v: Variante; className?: string }) {
  if (v === "catalogo") {
    return (
      <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
        <rect x="4" y="4" width="7" height="7" rx="1.5" strokeWidth={1.7} />
        <rect x="13" y="4" width="7" height="7" rx="1.5" strokeWidth={1.7} />
        <rect x="4" y="13" width="7" height="7" rx="1.5" strokeWidth={1.7} />
        <rect x="13" y="13" width="7" height="7" rx="1.5" strokeWidth={1.7} />
      </svg>
    );
  }
  return (
    <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
      <circle cx="12" cy="12" r="9" strokeWidth={1.7} />
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.7} d="M15.5 8.5l-2 5-5 2 2-5 5-2z" />
    </svg>
  );
}

export default function AutoservicioVariantes() {
  // Default: catálogo (perfil autónomo). El switch fijo permite cambiar de modo
  // en cualquier momento sin salir de /autoservicio.
  const [variante, setVariante] = useState<Variante>("catalogo");

  // Permite enlazar/refrescar manteniendo el modo: /autoservicio#guia
  useEffect(() => {
    const h = window.location.hash.replace("#", "");
    if (h === "guia" || h === "catalogo") setVariante(h);
  }, []);

  const elegir = (v: Variante) => {
    setVariante(v);
    if (typeof window !== "undefined") window.history.replaceState(null, "", `#${v}`);
  };

  const Tab = ({ v, titulo, sub }: { v: Variante; titulo: string; sub: string }) => {
    const activo = variante === v;
    return (
      <button
        onClick={() => elegir(v)}
        className="flex flex-1 items-center gap-2.5 rounded-xl px-4 py-2.5 text-left transition-colors sm:flex-none"
        style={activo ? { background: NAVY, color: "#fff" } : { background: "transparent", color: "#475569" }}
        aria-pressed={activo}
      >
        <ModoIcon v={v} className="h-[18px] w-[18px] flex-shrink-0" />
        <span>
          <span className="block text-[13.5px] font-bold leading-tight">{titulo}</span>
          <span className="block text-[11px]" style={{ color: activo ? "rgba(255,255,255,0.62)" : "#94A3B8" }}>{sub}</span>
        </span>
      </button>
    );
  };

  return (
    <div id="experiencia">
      {/* Selector de modo según el perfil del comprador. No es fijo: vive al
          inicio de la experiencia y se va con el scroll para no estorbar. */}
      <div className="bg-white">
        <div className="mx-auto flex max-w-7xl justify-center px-4 pt-4 pb-1 sm:px-6 lg:px-8">
          <div
            className="flex flex-col items-center gap-2 rounded-2xl border bg-white px-2.5 py-2.5 shadow-[0_14px_34px_-16px_rgba(28,36,64,0.28)]"
            style={{ borderColor: "#E9ECF2" }}
            role="group"
            aria-label="¿Cómo prefieres avanzar?"
          >
            <span className="text-[10.5px] font-semibold uppercase tracking-[0.16em]" style={{ color: "#94A3B8" }}>
              ¿Cómo prefieres avanzar?
            </span>
            <div className="flex w-full gap-1 rounded-xl p-1 sm:w-auto" style={{ background: "#F3F4F8" }}>
              <Tab v="catalogo" titulo="Sé lo que necesito" sub="Explorar el catálogo" />
              <Tab v="guia" titulo="Ayúdame a elegir" sub="Te guiamos paso a paso" />
            </div>
          </div>
        </div>
      </div>

      {variante === "catalogo" ? <CatalogoAutoservicio /> : <ConfiguradorAutoservicio />}
    </div>
  );
}
