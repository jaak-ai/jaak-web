"use client";

import { useEffect, useState } from "react";
import CatalogoAutoservicio from "./CatalogoAutoservicio";
import ConfiguradorAutoservicio from "./ConfiguradorAutoservicio";
import { CarritoProvider, useCarrito } from "./CarritoContext";
import { type Categoria, type Producto } from "@/data/autoservicio-catalogo";

const NAVY = "#212A45";
const GOLD = "#C9A227";

// Toggle Anual/Mensual (AUTO-14). Solo se muestra si algún SKU del catálogo permite
// pago mensual (`puedeMensual`); si no, no aparece y todo queda anual. Al cambiar la
// cadencia, los precios/cantidades del catálogo y del carrito se recalculan solos
// (la vista de productos del store ya refleja la cadencia).
function CadenciaToggle() {
  const { cadencia, setCadencia, puedeMensual } = useCarrito();
  if (!puedeMensual) return null;
  const opciones: { v: "anual" | "mensual"; label: string }[] = [
    { v: "anual", label: "Anual" },
    { v: "mensual", label: "Mensual" },
  ];
  return (
    <div className="bg-white">
      <div className="mx-auto flex max-w-7xl flex-col items-center gap-1.5 px-4 pt-3 sm:px-6 lg:px-8">
        <span className="text-[10.5px] font-semibold uppercase tracking-[0.16em]" style={{ color: "#64748B" }}>
          Cómo prefieres pagar
        </span>
        <div className="inline-flex items-center gap-1 rounded-xl p-1" style={{ background: "#F3F4F8" }} role="group" aria-label="Cadencia de pago">
          {opciones.map((o) => {
            const activo = cadencia === o.v;
            return (
              <button
                key={o.v}
                type="button"
                onClick={() => setCadencia(o.v)}
                aria-pressed={activo}
                className="rounded-lg px-4 py-2 text-[13px] font-semibold transition-colors"
                style={activo ? { background: NAVY, color: "#fff" } : { background: "transparent", color: "#475569" }}
              >
                {o.label}
              </button>
            );
          })}
        </div>
        {cadencia === "anual" ? (
          <span className="text-[12px] font-semibold" style={{ color: GOLD }}>
            El pago anual incluye el descuento; el mensual se cobra mes a mes.
          </span>
        ) : (
          <span className="text-[12px]" style={{ color: "#64748B" }}>
            Pago recurrente mes a mes, sin descuento. Cancelas cuando quieras.
          </span>
        )}
      </div>
    </div>
  );
}

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

type PricingIndex = Record<string, Record<string, string>>;

export default function AutoservicioVariantes({
  productos,
  categorias,
  pricingIndex = {},
  productKeys = {},
}: {
  productos: Producto[];
  categorias: Categoria[];
  pricingIndex?: PricingIndex;
  productKeys?: Record<string, string>;
}) {
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
    if (typeof window === "undefined") return;
    // Preservar path + query (sel/utm de campañas). Solo `#v` puede dejar
    // el search en estados raros según el historial parcheado de Next.
    const url = new URL(window.location.href);
    url.hash = v;
    if (url.href !== window.location.href) {
      window.history.replaceState(null, "", url);
    }
  };

  const Tab = ({ v, titulo, sub }: { v: Variante; titulo: string; sub: string }) => {
    const activo = variante === v;
    return (
      <button type="button"
        onClick={() => elegir(v)}
        className="flex flex-1 items-center gap-2.5 rounded-xl px-4 py-2.5 text-left transition-colors sm:flex-none"
        style={activo ? { background: NAVY, color: "#fff" } : { background: "transparent", color: "#475569" }}
        aria-pressed={activo}
      >
        <ModoIcon v={v} className="h-[18px] w-[18px] flex-shrink-0" />
        <span>
          <span className="block text-[13.5px] font-bold leading-tight">{titulo}</span>
          <span className="block text-[11px]" style={{ color: activo ? "rgba(255,255,255,0.72)" : "#475569" }}>{sub}</span>
        </span>
      </button>
    );
  };

  return (
    <CarritoProvider productos={productos} categorias={categorias} pricingIndex={pricingIndex} productKeys={productKeys}>
    <div id="experiencia">
      {/* Cadencia de pago (AUTO-14): Anual/Mensual. Solo si algún SKU lo permite. */}
      <CadenciaToggle />
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
            <span className="text-[10.5px] font-semibold uppercase tracking-[0.16em]" style={{ color: "#64748B" }}>
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
    </CarritoProvider>
  );
}
