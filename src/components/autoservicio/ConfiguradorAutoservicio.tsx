"use client";

import { useState } from "react";
import {
  productos,
  formatMXN,
  tierEstilos,
  type CategoriaId,
  type Producto,
  type Paquete,
} from "@/data/autoservicio-catalogo";
import { useCarrito } from "./CarritoContext";
import CarritoAutoservicio from "./CarritoAutoservicio";

const NAVY = "#212A45";
const TEAL = "#2DB6C1";
const TEAL_DARK = "#25969f";

function NeedIcon({ cat, className }: { cat: CategoriaId; className?: string }) {
  const paths: Record<CategoriaId, React.ReactNode> = {
    identidad: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.6} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />,
    firma: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.6} d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />,
    validaciones: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.6} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />,
    ocr: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.6} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />,
  };
  return (
    <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">{paths[cat]}</svg>
  );
}

type NecesidadId = "identidad" | "firma" | "validar" | "ocr";

// Cada necesidad expone TODOS los productos de su categoría (derivados del
// catálogo, fuente única de verdad). `recomendados` solo define cuáles se
// agregan al carrito por defecto; el resto queda disponible para sumar.
const necesidades: { id: NecesidadId; cat: CategoriaId; titulo: string; desc: string; recomendados: string[] }[] = [
  { id: "identidad", cat: "identidad", titulo: "Verificar la identidad de tus clientes", desc: "KYC biométrico con prueba de vida y consulta de listas.", recomendados: ["kyc"] },
  { id: "firma", cat: "firma", titulo: "Firmar documentos con validez legal", desc: "Desde firma simple hasta NOM-151 con biometría o KYC.", recomendados: ["firma-nom151"] },
  { id: "validar", cat: "validaciones", titulo: "Validar datos contra padrones oficiales", desc: "Consulta de INE y CURP en segundos.", recomendados: ["ine", "curp"] },
  { id: "ocr", cat: "ocr", titulo: "Leer y extraer datos de documentos", desc: "OCR inteligente para identificaciones y documentos.", recomendados: ["ocr-inteligente"] },
];

const productosDe = (cat: CategoriaId) => productos.filter((p) => p.categoria === cat);

const volumenes: { id: Paquete["id"]; label: string; rec?: boolean }[] = [
  { id: "cobre", label: "Hasta 10" },
  { id: "bronce", label: "~50" },
  { id: "plata", label: "~100", rec: true },
  { id: "oro", label: "~250" },
  { id: "platino", label: "500+" },
];

export default function ConfiguradorAutoservicio() {
  const { enCarrito, tierDe, setTier, toggle, aplicarVolumen } = useCarrito();
  const [seleccionadas, setSeleccionadas] = useState<Set<NecesidadId>>(new Set());
  const [volumen, setVolumen] = useState<Paquete["id"]>("plata");

  // Mostrar/ocultar una necesidad solo cambia qué productos se listan; lo que ya
  // está en el carrito permanece (se gestiona desde el resumen compartido).
  const toggleNecesidad = (n: (typeof necesidades)[number]) =>
    setSeleccionadas((prev) => {
      const next = new Set(prev);
      if (next.has(n.id)) next.delete(n.id);
      else next.add(n.id);
      return next;
    });

  const seleccionadasList = necesidades.filter((n) => seleccionadas.has(n.id));
  // Productos sugeridos (premarcados) según las necesidades elegidas.
  const recomendadosIds = new Set(seleccionadasList.flatMap((n) => n.recomendados));

  const paqueteDe = (p: Producto) => p.paquetes.find((q) => q.id === tierDe(p.id))!;

  return (
    <section id="configurador" className="bg-white">
      <div className="mx-auto max-w-5xl px-4 pt-8 pb-14 sm:px-6 lg:px-8 lg:pt-10 lg:pb-20">

        {/* Paso 1 */}
        <Paso numero="1" titulo="¿Qué necesitas resolver?" sub="Elige una o varias. Te recomendamos los productos adecuados.">
          <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
            {necesidades.map((n) => {
              const activa = seleccionadas.has(n.id);
              return (
                <button type="button"
                  key={n.id}
                  onClick={() => toggleNecesidad(n)}
                  className="flex items-start gap-3 rounded-2xl border p-5 text-left transition-shadow hover:shadow-[0_8px_30px_rgba(28,36,64,0.08)]"
                  style={{ borderColor: activa ? TEAL : "#E6E8EF", background: activa ? "#F1FAFB" : "#fff" }}
                >
                  <span className="flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-xl" style={{ background: activa ? TEAL : "#F1FAFB", color: activa ? "#fff" : TEAL_DARK }}>
                    <NeedIcon cat={n.cat} className="h-5 w-5" />
                  </span>
                  <span className="min-w-0">
                    <span className="block text-[15px] font-bold leading-snug" style={{ color: NAVY }}>{n.titulo}</span>
                    <span className="mt-1 block text-[13px] leading-relaxed" style={{ color: "#64748B" }}>{n.desc}</span>
                  </span>
                  <span className="ml-auto flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-md border" style={{ borderColor: activa ? TEAL : "#CBD0DB", background: activa ? TEAL : "#fff" }}>
                    {activa && <svg className="h-3 w-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" /></svg>}
                  </span>
                </button>
              );
            })}
          </div>
        </Paso>

        {/* Paso 2 */}
        <Paso numero="2" titulo="¿Qué volumen manejas?" sub="Usamos esto para sugerir el paquete; podrás ajustarlo después.">
          <div className="grid grid-cols-2 gap-3 sm:grid-cols-5">
            {volumenes.map((v) => {
              const activa = volumen === v.id;
              return (
                <button type="button"
                  key={v.id}
                  onClick={() => {
                    // Aplica el volumen a los productos NO agregados (premarcados);
                    // el tier de lo ya agregado al carrito queda congelado.
                    aplicarVolumen(v.id);
                    setVolumen(v.id);
                  }}
                  className="relative rounded-2xl border px-3 py-4 text-center transition-colors"
                  style={{ borderColor: activa ? TEAL : "#E6E8EF", background: activa ? "#F1FAFB" : "#fff" }}
                >
                  {v.rec && <span className="absolute -top-2 left-1/2 -translate-x-1/2 rounded-full px-2 py-0.5 text-[9px] font-bold uppercase tracking-wide text-white" style={{ background: TEAL_DARK }}>Popular</span>}
                  <div className="text-[16px] font-bold" style={{ color: NAVY }}>{v.label}</div>
                  <div className="text-[11px]" style={{ color: "#64748B" }}>al mes</div>
                </button>
              );
            })}
          </div>
        </Paso>

        {/* Paso 3 — recomendación */}
        <Paso numero="3" titulo="Arma tu paquete" sub="Marcamos lo recomendado y el volumen sugerido según tu consumo. Agrega lo que necesites." last>
          <div className="grid grid-cols-1 gap-5 lg:grid-cols-[1fr_320px] lg:items-start">
            <div className="space-y-6">
              {seleccionadasList.length === 0 ? (
                <div className="rounded-2xl border border-dashed p-8 text-center" style={{ borderColor: "#CBD0DB" }}>
                  <p className="text-[14px]" style={{ color: "#64748B" }}>Selecciona al menos una necesidad en el Paso 1 para ver recomendaciones. Lo que agregues aparece en tu compra a la derecha.</p>
                </div>
              ) : (
                seleccionadasList.map((n) => (
                  <div key={n.id}>
                    <p className="mb-2 text-[11px] font-semibold uppercase tracking-[0.14em]" style={{ color: "#64748B" }}>{n.titulo}</p>
                    <div className="space-y-3">
                      {productosDe(n.cat).map((producto) => {
                        const activo = enCarrito(producto.id);
                        const recomendado = recomendadosIds.has(producto.id);
                        const paquete = paqueteDe(producto);
                        return (
                          <div
                            key={producto.id}
                            className="rounded-2xl border bg-white p-5 transition-colors"
                            style={{ borderColor: activo ? TEAL : "#E6E8EF", background: activo ? "#F6FDFD" : "#fff" }}
                          >
                            <div className="flex items-start justify-between gap-3">
                              <div className="flex items-start gap-3">
                                <span className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-xl" style={{ background: "#F1FAFB", color: TEAL_DARK }}>
                                  <NeedIcon cat={producto.categoria} className="h-5 w-5" />
                                </span>
                                <div>
                                  <div className="flex flex-wrap items-center gap-2">
                                    <h3 className="text-[15px] font-bold leading-snug" style={{ color: NAVY }}>{producto.nombre.split(" — ")[0]}</h3>
                                    {activo ? (
                                      <span className="inline-flex items-center gap-1 rounded-full px-2 py-0.5 text-[10px] font-bold uppercase tracking-wide text-white" style={{ background: TEAL }}>
                                        <svg className="h-2.5 w-2.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3.5} d="M5 13l4 4L19 7" /></svg>
                                        En tu paquete
                                      </span>
                                    ) : recomendado ? (
                                      <span className="rounded-full px-2 py-0.5 text-[10px] font-bold uppercase tracking-wide" style={{ color: TEAL_DARK, background: "#F1FAFB", border: `1px solid ${TEAL}` }}>
                                        Recomendado
                                      </span>
                                    ) : null}
                                  </div>
                                  <p className="mt-1">
                                    <span className="inline-flex items-baseline gap-1 rounded-md px-2 py-1 text-[12px]" style={{ background: "#F1FAFB", color: TEAL_DARK }}>
                                      Incluye <span className="text-[14px] font-bold">{paquete.cantidad.toLocaleString("es-MX")}</span> {producto.unidad}
                                    </span>
                                  </p>
                                </div>
                              </div>
                              {activo ? (
                                <button type="button" onClick={() => toggle(producto.id)} className="flex-shrink-0 text-[12px]" style={{ color: "#64748B" }}>Quitar</button>
                              ) : (
                                <button type="button"
                                  onClick={() => toggle(producto.id)}
                                  className="flex-shrink-0 rounded-lg px-3 py-1.5 text-[12px] font-semibold text-white transition-colors"
                                  style={{ background: TEAL }}
                                >
                                  Agregar
                                </button>
                              )}
                            </div>
                            <ul className="mt-4 grid grid-cols-1 gap-x-3 gap-y-1.5 sm:grid-cols-2">
                              {producto.incluye.map((item) => (
                                <li key={item} className="flex items-start gap-1.5 text-[12px]" style={{ color: "#4A5568" }}>
                                  <svg className="mt-[3px] h-3 w-3 flex-shrink-0" style={{ color: TEAL }} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" /></svg>
                                  {item}
                                </li>
                              ))}
                            </ul>
                            <div className="mt-4 flex items-center justify-between">
                              <div className="flex flex-wrap gap-1.5">
                                {producto.paquetes.map((q) => {
                                  const sel = q.id === tierDe(producto.id);
                                  const est = tierEstilos[q.id];
                                  return (
                                    <button type="button"
                                      key={q.id}
                                      onClick={() => setTier(producto.id, q.id)}
                                      className="inline-flex items-center gap-1 rounded-lg px-2.5 py-1.5 text-[12px] font-semibold transition-all"
                                      style={sel ? { background: est.base, color: est.on, boxShadow: `0 0 0 2px ${NAVY}` } : { background: est.soft, color: est.text }}
                                    >
                                      {sel && (
                                        <svg className="h-3 w-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" /></svg>
                                      )}
                                      {q.nombre}
                                    </button>
                                  );
                                })}
                              </div>
                              <div className="flex items-baseline gap-1">
                                <span className="text-lg font-bold" style={{ color: NAVY }}>{formatMXN(paquete.precio)}</span>
                                <span className="text-[11px]" style={{ color: "#64748B" }}>MXN + IVA</span>
                              </div>
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                ))
              )}
            </div>

            {/* Carrito / resumen compartido (mismo que el Catálogo) */}
            <CarritoAutoservicio />
          </div>
        </Paso>
      </div>
    </section>
  );
}

function Paso({ numero, titulo, sub, children, last }: { numero: string; titulo: string; sub: string; children: React.ReactNode; last?: boolean }) {
  return (
    <div className={last ? "" : "mb-12"}>
      <div className="flex items-start gap-4">
        <span className="flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-full text-[15px] font-bold text-white" style={{ background: NAVY }}>{numero}</span>
        <div>
          <h2 className="text-xl font-bold tracking-tight lg:text-2xl" style={{ color: NAVY }}>{titulo}</h2>
          <p className="mt-1 text-[14px]" style={{ color: "#64748B" }}>{sub}</p>
        </div>
      </div>
      <div className="mt-5 pl-0 sm:pl-13">{children}</div>
    </div>
  );
}
