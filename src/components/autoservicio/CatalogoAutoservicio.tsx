"use client";

import { useEffect, useState } from "react";
import {
  formatMXN,
  tierEstilos,
  buildKycRegisterUrl,
  KYC_PLAN_CODE_BY_TIER,
  type CategoriaId,
  type Producto,
  type Paquete,
} from "@/data/autoservicio-catalogo";
import { useCarrito } from "./CarritoContext";
import CarritoAutoservicio from "./CarritoAutoservicio";

const NAVY = "#212A45";
const TEAL = "#2DB6C1";
const TEAL_DARK = "#25969f";

// ─── Iconografía (sin emojis) ────────────────────────────────────────────────
function CategoryIcon({ categoria, className }: { categoria: CategoriaId; className?: string }) {
  const paths: Record<CategoriaId, React.ReactNode> = {
    identidad: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.6} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />,
    firma: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.6} d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />,
    validaciones: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.6} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />,
    "listas-negras": <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.6} d="M12 3l7.5 3v5.25c0 4.5-3.2 7.9-7.5 9-4.3-1.1-7.5-4.5-7.5-9V6L12 3z M12 8.25v3.5 M12 14.75h.01" />,
    ocr: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.6} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />,
  };
  return (
    <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
      {paths[categoria]}
    </svg>
  );
}

export default function CatalogoAutoservicio() {
  const { productos, categorias, enCarrito, tierDe, setTier, toggle, comprable } = useCarrito();
  // Solo categorías con al menos un producto comprable (con renglón de pricing).
  const categoriasVisibles = categorias.filter((c) =>
    productos.some((p) => p.categoria === c.id && comprable(p.id))
  );
  const [comparar, setComparar] = useState<Record<string, boolean>>({});
  const [activeCat, setActiveCat] = useState<CategoriaId>(
    categoriasVisibles[0]?.id ?? categorias[0].id
  );

  // Scrollspy: resalta el chip de la categoría cuya sección está visible.
  useEffect(() => {
    const obs = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top)[0];
        const cat = visible?.target.getAttribute("data-cat");
        if (cat) setActiveCat(cat as CategoriaId);
      },
      { rootMargin: "-180px 0px -65% 0px" }
    );
    categorias.forEach((c) => {
      const el = document.getElementById(`cat-${c.id}`);
      if (el) obs.observe(el);
    });
    return () => obs.disconnect();
  }, [categorias]);

  const irA = (id: CategoriaId) => {
    setActiveCat(id);
    document.getElementById(`cat-${id}`)?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  const getPaquete = (p: Producto, id: Paquete["id"]) => p.paquetes.find((q) => q.id === id)!;

  // Card de producto. `compacto` (carruseles de "Todos") muestra solo 1 línea de
  // "incluye" para reducir altura; el detalle completo vive en la vista por categoría.
  const renderCard = (producto: Producto, compacto = false) => {
    const paqueteSel = getPaquete(producto, tierDe(producto.id));
    const agregado = enCarrito(producto.id);
    const expandido = !!comparar[producto.id];
    return (
      <article
        key={producto.id}
        className="flex h-full flex-col rounded-2xl border bg-white p-6 transition-shadow hover:shadow-[0_8px_30px_rgba(28,36,64,0.08)]"
        style={{ borderColor: agregado ? TEAL : "#E6E8EF" }}
      >
        <div className="flex items-start gap-3">
          <span className="flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-xl" style={{ background: "#F1FAFB", color: TEAL_DARK }}>
            <CategoryIcon categoria={producto.categoria} className="h-5 w-5" />
          </span>
          <div className="min-w-0">
            <h3 className="text-[16px] font-bold leading-snug" style={{ color: NAVY }}>{producto.nombre}</h3>
            <p className="mt-1 text-[13px] leading-relaxed" style={{ color: "#64748B" }}>{producto.tagline}</p>
          </div>
        </div>

        {compacto ? (
          <p className="mt-3 flex items-start gap-1.5 text-[12.5px] leading-snug" style={{ color: "#4A5568" }}>
            <svg className="mt-[3px] h-3 w-3 flex-shrink-0" style={{ color: TEAL }} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" /></svg>
            {producto.incluye[0]}
          </p>
        ) : (
          <ul className="mt-4 grid grow content-start grid-cols-2 gap-x-3 gap-y-1.5">
            {producto.incluye.map((item) => (
              <li key={item} className="flex items-start gap-1.5 text-[12px]" style={{ color: "#4A5568" }}>
                <svg className="mt-[3px] h-3 w-3 flex-shrink-0" style={{ color: TEAL }} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" /></svg>
                {item}
              </li>
            ))}
          </ul>
        )}

        {/* Selector de paquete */}
        <div className="mt-5">
          <div className="flex items-center justify-between">
            <span className="text-[11px] font-semibold uppercase tracking-wider" style={{ color: "#64748B" }}>Paquete</span>
            <button type="button"
              onClick={() => setComparar((p) => ({ ...p, [producto.id]: !p[producto.id] }))}
              className="text-[12px] font-semibold"
              style={{ color: TEAL_DARK }}
            >
              {expandido ? "Ocultar comparación" : "Comparar paquetes"}
            </button>
          </div>
          <div className="mt-2 flex flex-wrap gap-1.5 pb-1">
            {producto.paquetes.map((q) => {
              const sel = q.id === tierDe(producto.id);
              const est = tierEstilos[q.id];
              return (
                <button type="button"
                  key={q.id}
                  onClick={() => setTier(producto.id, q.id)}
                  className="inline-flex items-center gap-1 rounded-lg px-2.5 py-1.5 text-[12px] font-semibold transition-all"
                  style={
                    sel
                      ? { background: est.base, color: est.on, boxShadow: `0 0 0 2px ${NAVY}` }
                      : { background: est.soft, color: est.text }
                  }
                >
                  {sel && (
                    <svg className="h-3 w-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" /></svg>
                  )}
                  {q.nombre}
                </button>
              );
            })}
          </div>
        </div>

        {/* Comparación expandible */}
        {expandido && (
          <div className="mt-3 overflow-x-auto rounded-xl border" style={{ borderColor: "#E6E8EF" }}>
            <table className="w-full text-[12px]">
              <thead>
                <tr style={{ background: "#FAFBFC", color: "#64748B" }}>
                  <th className="px-2.5 py-1.5 text-left font-semibold">Paquete</th>
                  <th className="px-2.5 py-1.5 text-right font-semibold">Cantidad</th>
                  <th className="px-2.5 py-1.5 text-right font-semibold">Precio (MXN)</th>
                </tr>
              </thead>
              <tbody>
                {producto.paquetes.map((q) => (
                  <tr key={q.id} style={{ background: q.id === tierDe(producto.id) ? "#F1FAFB" : "#fff" }}>
                    <td className="px-2.5 py-1.5 font-medium" style={{ color: NAVY }}>
                      <span className="mr-1.5 inline-block h-2 w-2 flex-shrink-0 rounded-full align-middle ring-1 ring-black/10" style={{ background: tierEstilos[q.id].base }} />
                      {q.nombre}{producto.recomendado === q.id && <span className="ml-1 text-[10px] font-bold" style={{ color: TEAL_DARK }}>· Recomendado</span>}
                    </td>
                    <td className="px-2.5 py-1.5 text-right whitespace-nowrap" style={{ color: "#4A5568" }}>{q.cantidad.toLocaleString("es-MX")}</td>
                    <td className="px-2.5 py-1.5 text-right font-semibold whitespace-nowrap" style={{ color: NAVY }}>{formatMXN(q.precio)}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}

        {/* Precio + agregar */}
        <div className="mt-5 flex items-end justify-between border-t pt-4" style={{ borderColor: "#EEF0F4" }}>
          <div>
            <div className="flex items-baseline gap-1">
              <span className="text-2xl font-bold" style={{ color: NAVY }}>{formatMXN(paqueteSel.precio)}</span>
              <span className="text-[12px]" style={{ color: "#64748B" }}>MXN + IVA</span>
            </div>
            <div className="mt-1.5">
              <span className="inline-flex items-baseline gap-1 rounded-md px-2 py-1 text-[12px]" style={{ background: "#F1FAFB", color: TEAL_DARK }}>
                Incluye <span className="text-[14px] font-bold">{paqueteSel.cantidad.toLocaleString("es-MX")}</span> {producto.unidad}
              </span>
            </div>
          </div>
          {producto.checkoutUrl ? (
            // KYC/suscripción: se compra por el flujo de planes, no por el carrito.
            // El deep-link lleva el tier seleccionado en la card (no el fijo del
            // catálogo) para que /register preseleccione el plan correcto.
            <a
              href={buildKycRegisterUrl(KYC_PLAN_CODE_BY_TIER[tierDe(producto.id)] ?? "plata")}
              className="rounded-xl px-4 py-2.5 text-[13px] font-semibold transition-colors"
              style={{ background: TEAL, color: "#fff" }}
            >
              Comprar
            </a>
          ) : (
            <button type="button"
              onClick={() => toggle(producto.id)}
              className="rounded-xl px-4 py-2.5 text-[13px] font-semibold transition-colors"
              style={agregado ? { background: "#F1FAFB", color: TEAL_DARK, border: `1px solid ${TEAL}` } : { background: TEAL, color: "#fff" }}
            >
              {agregado ? "Quitar" : "Agregar"}
            </button>
          )}
        </div>
      </article>
    );
  };

  return (
    <section id="catalogo" className="bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 pb-14 lg:pt-10 lg:pb-20">
        <div className="max-w-3xl">
          <p className="text-xs font-semibold uppercase tracking-[0.18em]" style={{ color: TEAL_DARK }}>Catálogo</p>
          <h2 className="mt-3 text-3xl lg:text-4xl font-bold tracking-tight" style={{ color: NAVY }}>
            Elige tus productos y arma tu paquete
          </h2>
          <p className="mt-3 text-[15px] leading-relaxed" style={{ color: "#4A5568" }}>
            Selecciona uno o varios productos, ajusta el volumen y agrégalos a tu compra.
          </p>
        </div>

        <div className="mt-8 grid grid-cols-1 lg:grid-cols-[1fr_340px] gap-8 items-start">
          {/* Columna de productos: nav sticky por categoría + secciones */}
          <div className="min-w-0">
            {/* Navegación por categoría: salta a la sección y resalta la visible (scrollspy) */}
            <div className="sticky top-[114px] z-30 border-b bg-white py-3" style={{ borderColor: "#EEF0F4" }}>
              <div className="flex gap-2 overflow-x-auto">
                {categoriasVisibles.map((c) => {
                  const activo = activeCat === c.id;
                  return (
                    <button type="button"
                      key={c.id}
                      onClick={() => irA(c.id)}
                      className="whitespace-nowrap rounded-full px-4 py-2 text-[13px] font-semibold transition-colors"
                      style={activo ? { background: NAVY, color: "#fff" } : { background: "#F3F4F8", color: "#475569" }}
                    >
                      {c.nombre}
                    </button>
                  );
                })}
              </div>
            </div>

            <div className="mt-6 space-y-12">
              {categoriasVisibles.map((cat) => {
                const prods = productos.filter((p) => p.categoria === cat.id && comprable(p.id));
                if (!prods.length) return null;
                return (
                  <section key={cat.id} id={`cat-${cat.id}`} data-cat={cat.id} className="scroll-mt-[180px]">
                    <div className="mb-4">
                      <h3 className="text-xl font-bold tracking-tight" style={{ color: NAVY }}>{cat.nombre}</h3>
                      <p className="mt-1 text-[13px]" style={{ color: "#64748B" }}>{cat.descripcion}</p>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                      {prods.map((p) => renderCard(p))}
                    </div>
                  </section>
                );
              })}
            </div>
          </div>

          {/* Carrito / resumen compartido (desktop sticky + barra/hoja en móvil) */}
          <CarritoAutoservicio />
        </div>
      </div>
    </section>
  );
}

