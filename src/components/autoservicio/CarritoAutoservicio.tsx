"use client";

import { useState } from "react";
import {
  productos,
  IVA,
  formatMXN,
  buildCheckoutUrl,
  type Producto,
  type Paquete,
} from "@/data/autoservicio-catalogo";
import { useCarrito } from "./CarritoContext";

const NAVY = "#212A45";
const TEAL = "#2DB6C1";
const TEAL_DARK = "#25969f";

// Carrito/resumen compartido por Catálogo y Guía. Lee el store único, así que
// siempre refleja lo agregado, independiente del modo o de los filtros de cada
// vista. Incluye panel desktop (sticky) + barra fija y hoja inferior en móvil.
export default function CarritoAutoservicio() {
  const { cart, tierDe, quitar } = useCarrito();
  const [abiertoMovil, setAbiertoMovil] = useState(false);

  const getPaquete = (p: Producto, id: Paquete["id"]) => p.paquetes.find((q) => q.id === id)!;
  const items = cart.map((id) => {
    const producto = productos.find((p) => p.id === id)!;
    return { producto, paquete: getPaquete(producto, tierDe(id)) };
  });
  const subtotal = items.reduce((s, i) => s + i.paquete.precio, 0);
  const iva = Math.round(subtotal * IVA);
  const total = subtotal + iva;
  const checkoutHref = items.length ? buildCheckoutUrl(items) : "#";

  return (
    <>
      {/* Desktop: panel sticky */}
      <aside className="hidden lg:block sticky top-[130px]">
        <ResumenPanel items={items} subtotal={subtotal} iva={iva} total={total} checkoutHref={checkoutHref} onQuitar={quitar} />
      </aside>

      {/* Móvil: barra fija con total */}
      {items.length > 0 && (
        <div className="lg:hidden fixed bottom-0 left-0 right-0 z-40 border-t bg-white px-4 py-3 shadow-[0_-4px_20px_rgba(28,36,64,0.10)]" style={{ borderColor: "#E6E8EF" }}>
          <div className="flex items-center justify-between gap-3">
            <div>
              <div className="text-[12px]" style={{ color: "#64748B" }}>{items.length} producto(s)</div>
              <div className="text-lg font-bold" style={{ color: NAVY }}>{formatMXN(total)}</div>
            </div>
            <button onClick={() => setAbiertoMovil(true)} className="rounded-xl px-5 py-3 text-[14px] font-semibold text-white" style={{ background: TEAL }}>
              Ver resumen
            </button>
          </div>
        </div>
      )}

      {/* Móvil: hoja inferior */}
      {abiertoMovil && (
        <div className="lg:hidden fixed inset-0 z-50 flex items-end bg-black/40" onClick={() => setAbiertoMovil(false)}>
          <div className="max-h-[85vh] w-full overflow-y-auto rounded-t-2xl bg-white p-5" onClick={(e) => e.stopPropagation()}>
            <div className="mx-auto mb-3 h-1 w-10 rounded-full" style={{ background: "#E2E5EC" }} />
            <ResumenPanel items={items} subtotal={subtotal} iva={iva} total={total} checkoutHref={checkoutHref} onQuitar={quitar} />
          </div>
        </div>
      )}
    </>
  );
}

function ResumenPanel({
  items, subtotal, iva, total, checkoutHref, onQuitar,
}: {
  items: { producto: Producto; paquete: Paquete }[];
  subtotal: number; iva: number; total: number;
  checkoutHref: string;
  onQuitar: (productoId: string) => void;
}) {
  return (
    <div className="rounded-2xl border bg-white p-5" style={{ borderColor: "#E6E8EF" }}>
      <h3 className="text-[15px] font-bold" style={{ color: NAVY }}>Tu compra</h3>

      {items.length === 0 ? (
        <p className="mt-3 text-[13px] leading-relaxed" style={{ color: "#64748B" }}>
          Aún no agregas productos. Elige un paquete y pulsa <span className="font-semibold" style={{ color: TEAL_DARK }}>Agregar</span>.
        </p>
      ) : (
        <>
          <ul className="mt-3 divide-y" style={{ borderColor: "#EEF0F4" }}>
            {items.map(({ producto, paquete }) => (
              <li key={producto.id} className="flex items-start justify-between gap-2 py-3">
                <div className="min-w-0">
                  <div className="truncate text-[13px] font-semibold" style={{ color: NAVY }}>{producto.nombre.split(" — ")[0]}</div>
                  <div className="text-[12px]" style={{ color: "#64748B" }}>
                    {paquete.nombre} · {paquete.cantidad.toLocaleString("es-MX")} {producto.unidad}
                  </div>
                </div>
                <div className="flex flex-col items-end">
                  <span className="text-[13px] font-semibold" style={{ color: NAVY }}>{formatMXN(paquete.precio)}</span>
                  <button onClick={() => onQuitar(producto.id)} className="text-[11px]" style={{ color: "#64748B" }}>Quitar</button>
                </div>
              </li>
            ))}
          </ul>

          <div className="mt-3 space-y-1.5 border-t pt-3 text-[13px]" style={{ borderColor: "#EEF0F4" }}>
            <Row label="Subtotal" value={formatMXN(subtotal)} />
            <Row label="IVA (16%)" value={formatMXN(iva)} muted />
            <div className="flex items-center justify-between pt-1">
              <span className="text-[14px] font-bold" style={{ color: NAVY }}>Total</span>
              <span className="text-[18px] font-bold" style={{ color: NAVY }}>{formatMXN(total)}</span>
            </div>
          </div>

          <a
            href={checkoutHref}
            className="mt-4 block w-full rounded-xl py-3 text-center text-[14px] font-semibold text-white transition-colors"
            style={{ background: TEAL }}
          >
            Continuar al pago
          </a>
          <p className="mt-2 text-center text-[11px]" style={{ color: "#64748B" }}>Pago seguro con Stripe · Activación inmediata</p>
        </>
      )}
    </div>
  );
}

function Row({ label, value, muted }: { label: string; value: string; muted?: boolean }) {
  return (
    <div className="flex items-center justify-between">
      <span style={{ color: muted ? "#64748B" : "#64748B" }}>{label}</span>
      <span style={{ color: muted ? "#64748B" : NAVY }}>{value}</span>
    </div>
  );
}
