"use client";

import { useEffect, useState } from "react";
import CatalogoAutoservicio from "./CatalogoAutoservicio";
import ConfiguradorAutoservicio from "./ConfiguradorAutoservicio";

const NAVY = "#212A45";

type Variante = "catalogo" | "guia";

export default function AutoservicioVariantes() {
  const [variante, setVariante] = useState<Variante>("catalogo");

  // Permite enlazar/refrescar manteniendo la propuesta: /autoservicio#guia
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
        className="flex-1 rounded-xl px-4 py-2.5 text-left transition-colors sm:flex-none"
        style={activo ? { background: NAVY, color: "#fff" } : { background: "transparent", color: "#475569" }}
        aria-pressed={activo}
      >
        <span className="block text-[14px] font-bold leading-tight">{titulo}</span>
        <span className="block text-[11px]" style={{ color: activo ? "rgba(255,255,255,0.6)" : "#94A3B8" }}>{sub}</span>
      </button>
    );
  };

  return (
    <div id="experiencia">
      {/* Toggle fijo: el evaluador cambia entre propuestas sin salir de /autoservicio */}
      <div
        className="sticky top-[114px] z-30 border-b backdrop-blur-xl"
        style={{ background: "rgba(255,255,255,0.95)", borderColor: "#EEF0F4" }}
      >
        <div className="mx-auto flex max-w-7xl flex-col gap-3 px-4 py-3 sm:flex-row sm:items-center sm:px-6 lg:px-8">
          <span className="text-[11px] font-semibold uppercase tracking-[0.14em]" style={{ color: "#94A3B8" }}>
            Estás viendo una de dos propuestas
          </span>
          <div className="inline-flex gap-1 rounded-2xl p-1" style={{ background: "#F3F4F8" }}>
            <Tab v="catalogo" titulo="Catálogo" sub="Propuesta A" />
            <Tab v="guia" titulo="Guía" sub="Propuesta B" />
          </div>
          <span className="text-[12px] sm:ml-auto" style={{ color: "#64748B" }}>
            {variante === "catalogo"
              ? "Navega los productos y arma tu carrito."
              : "Te recomendamos el paquete según tu necesidad."}
          </span>
        </div>
      </div>

      {variante === "catalogo" ? <CatalogoAutoservicio /> : <ConfiguradorAutoservicio />}
    </div>
  );
}
