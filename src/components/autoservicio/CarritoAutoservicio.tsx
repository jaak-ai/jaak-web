"use client";

import { useEffect, useState } from "react";
import {
  formatMXN,
  buildCheckoutUrl,
  type Producto,
  type Paquete,
} from "@/data/autoservicio-catalogo";
import { computeCartTotals } from "@/lib/autoservicioCoupon";
import { useCarrito } from "./CarritoContext";
import { getUtmParams } from "@/components/CloudflareTurnstile";

type FeaturedPromo = { code: string; type: "percent" | "fixed"; value: number };

const NAVY = "#212A45";
const TEAL = "#2DB6C1";

function CartIcon({ className }: { className?: string }) {
  return (
    <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.7} d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.12-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z" />
    </svg>
  );
}

// Carrito/resumen compartido por Catálogo y Guía. Lee el store único, así que
// siempre refleja lo agregado, independiente del modo o de los filtros de cada
// vista. Incluye panel desktop (sticky) + barra fija y hoja inferior en móvil.
export default function CarritoAutoservicio() {
  const { productos, cart, tierDe, quitar, pricingIndex, productKeys } = useCarrito();
  const [abiertoMovil, setAbiertoMovil] = useState(false);

  // Cupón (AUTO-4): el banner deep-linkea con ?coupon=CODE. Leemos el código de
  // la URL y traemos el destacado para PREVISUALIZAR el descuento; el cobro real
  // lo hace /register (autoritativo). Se propaga el código por el deep-link.
  const [couponCode, setCouponCode] = useState<string | undefined>(undefined);
  const [featured, setFeatured] = useState<FeaturedPromo | null>(null);
  useEffect(() => {
    const code = new URLSearchParams(window.location.search).get("coupon") ?? undefined;
    setCouponCode(code);
    if (!code) return;
    let active = true;
    fetch("/api/promo")
      .then((r) => (r.ok ? r.json() : null))
      .then((d) => {
        if (active && d?.featured) setFeatured({ code: d.code, type: d.type, value: d.value });
      })
      .catch(() => {});
    return () => {
      active = false;
    };
  }, []);

  const getPaquete = (p: Producto, id: Paquete["id"]) => p.paquetes.find((q) => q.id === id)!;
  const items = cart.map((id) => {
    const producto = productos.find((p) => p.id === id)!;
    return { producto, paquete: getPaquete(producto, tierDe(id)) };
  });
  const subtotal = items.reduce((s, i) => s + i.paquete.precio, 0);

  // El descuento se previsualiza solo cuando el cupón de la URL coincide con el
  // destacado vigente. El cálculo (descuento sobre subtotal + IVA sobre la base
  // descontada, AUTO-30) vive en computeCartTotals para poder testearlo y no
  // duplicarlo entre el panel desktop y la barra móvil.
  const couponApplies = !!(featured && couponCode && featured.code.toUpperCase() === couponCode.toUpperCase());
  const { descuento, iva, total } = computeCartTotals(subtotal, couponApplies ? featured! : null);

  const checkoutHref = items.length
    ? buildCheckoutUrl(items, {
        pricingIndex,
        productKeys,
        utm: getUtmParams(),
        coupon: couponApplies ? featured!.code : undefined,
      })
    : "#";

  return (
    <>
      {/* Desktop: panel sticky */}
      <aside className="hidden lg:block sticky top-[130px]">
        <ResumenPanel items={items} subtotal={subtotal} iva={iva} total={total} descuento={descuento} couponLabel={couponApplies ? featured!.code : undefined} checkoutHref={checkoutHref} onQuitar={quitar} />
      </aside>

      {/* Móvil: barra fija con total */}
      {items.length > 0 && (
        <div className="lg:hidden fixed bottom-0 left-0 right-0 z-40 border-t bg-white px-4 py-3 shadow-[0_-4px_20px_rgba(28,36,64,0.10)]" style={{ borderColor: "#E6E8EF" }}>
          <div className="flex items-center justify-between gap-3">
            <div>
              <div className="text-[12px]" style={{ color: "#64748B" }}>{items.length} producto(s)</div>
              <div className="text-lg font-bold" style={{ color: NAVY }}>{formatMXN(total)} <span className="text-[12px] font-semibold" style={{ color: "#64748B" }}>MXN</span></div>
            </div>
            <button type="button" onClick={() => setAbiertoMovil(true)} className="inline-flex items-center gap-2 rounded-xl px-5 py-3 text-[14px] font-semibold text-white" style={{ background: TEAL }}>
              <CartIcon className="h-[18px] w-[18px]" />
              Ver carrito
            </button>
          </div>
        </div>
      )}

      {/* Móvil: hoja inferior */}
      {abiertoMovil && (
        <div className="lg:hidden fixed inset-0 z-50 flex items-end bg-black/40" onClick={() => setAbiertoMovil(false)}>
          <div className="max-h-[85vh] w-full overflow-y-auto rounded-t-2xl bg-white p-5" onClick={(e) => e.stopPropagation()}>
            <div className="mx-auto mb-3 h-1 w-10 rounded-full" style={{ background: "#E2E5EC" }} />
            <ResumenPanel items={items} subtotal={subtotal} iva={iva} total={total} descuento={descuento} couponLabel={couponApplies ? featured!.code : undefined} checkoutHref={checkoutHref} onQuitar={quitar} />
          </div>
        </div>
      )}
    </>
  );
}

function ResumenPanel({
  items, subtotal, iva, total, descuento = 0, couponLabel, checkoutHref, onQuitar,
}: {
  items: { producto: Producto; paquete: Paquete }[];
  subtotal: number; iva: number; total: number;
  descuento?: number; couponLabel?: string;
  checkoutHref: string;
  onQuitar: (productoId: string) => void;
}) {
  // `total` ya viene con el descuento aplicado al subtotal y el IVA sobre la base
  // descontada (AUTO-30), así que no se vuelve a restar aquí.
  return (
    <div className="rounded-2xl border bg-white p-5" style={{ borderColor: "#E6E8EF" }}>
      <div className="flex items-center gap-2" style={{ color: NAVY }}>
        <CartIcon className="h-[18px] w-[18px]" />
        <h3 className="text-[15px] font-bold" style={{ color: NAVY }}>Tu carrito</h3>
        {items.length > 0 && (
          <span className="ml-auto inline-flex h-5 min-w-[20px] items-center justify-center rounded-full px-1.5 text-[11px] font-bold text-white" style={{ background: TEAL }}>
            {items.length}
          </span>
        )}
      </div>

      {items.length === 0 ? (
        <p className="mt-3 text-[13px] leading-relaxed" style={{ color: "#64748B" }}>
          Aún no agregas productos. Elige un paquete y pulsa <span className="font-semibold" style={{ color: NAVY }}>“Agregar”</span>.
        </p>
      ) : (
        <>
          <ul className="mt-3 divide-y lg:max-h-[300px] lg:overflow-y-auto" style={{ borderColor: "#EEF0F4" }}>
            {items.map(({ producto, paquete }) => {
              const nombre = producto.nombre.split(" — ")[0];
              return (
                <li key={producto.id} className="flex items-center justify-between gap-2 py-2.5">
                  <div className="min-w-0">
                    <div className="truncate text-[13px] font-semibold" style={{ color: NAVY }}>{nombre}</div>
                    <div className="text-[11.5px]" style={{ color: "#64748B" }}>
                      {paquete.nombre} · {paquete.cantidad.toLocaleString("es-MX")} {producto.unidad}
                    </div>
                  </div>
                  <div className="flex flex-shrink-0 items-center gap-1.5">
                    <span className="text-[13px] font-semibold" style={{ color: NAVY }}>{formatMXN(paquete.precio)}</span>
                    <button type="button"
                      onClick={() => onQuitar(producto.id)}
                      aria-label={`Quitar ${nombre}`}
                      title="Quitar"
                      className="flex h-6 w-6 items-center justify-center rounded-full transition-colors hover:bg-[#F1F2F5]"
                      style={{ color: "#64748B" }}
                    >
                      <svg className="h-3.5 w-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18 18 6M6 6l12 12" /></svg>
                    </button>
                  </div>
                </li>
              );
            })}
          </ul>

          <div className="mt-3 space-y-1.5 border-t pt-3 text-[13px]" style={{ borderColor: "#EEF0F4" }}>
            <Row label="Subtotal" value={formatMXN(subtotal)} />
            {descuento > 0 && (
              <div className="flex items-center justify-between">
                <span style={{ color: "#16a34a" }}>Cupón {couponLabel}</span>
                <span style={{ color: "#16a34a" }}>− {formatMXN(descuento)}</span>
              </div>
            )}
            <Row label="IVA (16%)" value={formatMXN(iva)} muted />
            <div className="flex items-center justify-between pt-1">
              <span className="text-[14px] font-bold" style={{ color: NAVY }}>Total</span>
              <span className="text-[18px] font-bold" style={{ color: NAVY }}>{formatMXN(total)} <span className="text-[12px] font-semibold" style={{ color: "#64748B" }}>MXN</span></span>
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
