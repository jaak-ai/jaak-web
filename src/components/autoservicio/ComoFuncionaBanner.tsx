"use client";

import { useEffect, useState } from "react";
import AutoservicioFlujoTabs from "@/components/AutoservicioFlujoTabs";

const NAVY = "#212A45";
const TEAL = "#2DB6C1";

const PASOS = [
  { n: "1", label: "Elige tus productos" },
  { n: "2", label: "Crea tu cuenta" },
  { n: "3", label: "Paga seguro" },
  { n: "4", label: "Empieza a operar" },
];

export default function ComoFuncionaBanner() {
  const [open, setOpen] = useState(false);

  // Lock body scroll + close on Escape while the modal is open.
  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    document.addEventListener("keydown", onKey);
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = prevOverflow;
    };
  }, [open]);

  return (
    <>
      {/* ─── Banner teaser (debajo del hero) ─────────────────────────── */}
      <section id="como-funciona" className="border-t" style={{ background: "#FAFBFC", borderColor: "#EEF0F4" }}>
        <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8 lg:py-14">
          <div
            className="relative overflow-hidden rounded-3xl p-7 shadow-xl lg:p-10"
            style={{ background: "linear-gradient(135deg, #0E1133 0%, #1A2142 55%, #212A45 100%)" }}
          >
            <div
              className="pointer-events-none absolute inset-0 opacity-[0.05]"
              style={{
                backgroundImage:
                  "linear-gradient(rgba(255,255,255,1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,1) 1px, transparent 1px)",
                backgroundSize: "34px 34px",
              }}
            />
            <div className="relative z-10 flex flex-col gap-7 lg:flex-row lg:items-center lg:justify-between">
              <div className="flex-1">
                <h2 className="text-2xl font-bold tracking-tight text-white lg:text-[2rem] lg:leading-tight">
                  ¿Cómo funciona la compra?
                </h2>
                <p className="mt-2 text-[15px] font-medium" style={{ color: "#7FE0E8" }}>
                  Del pago al primer uso en minutos
                </p>

                {/* Stepper resumido */}
                <ol className="mt-6 flex flex-wrap items-center gap-x-3 gap-y-3">
                  {PASOS.map((p, i) => (
                    <li key={p.n} className="flex items-center gap-3">
                      <span className="flex items-center gap-2.5">
                        <span
                          className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full text-[14px] font-bold text-white"
                          style={{ background: TEAL }}
                        >
                          {p.n}
                        </span>
                        <span className="text-[15px] font-semibold text-white">{p.label}</span>
                      </span>
                      {i < PASOS.length - 1 && (
                        <svg className="hidden h-4 w-4 sm:block" style={{ color: "rgba(255,255,255,0.35)" }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
                        </svg>
                      )}
                    </li>
                  ))}
                </ol>
              </div>

              <button
                type="button"
                onClick={() => setOpen(true)}
                className="inline-flex flex-shrink-0 items-center justify-center gap-2 rounded-xl px-7 py-4 text-[15px] font-semibold text-white shadow-lg transition-transform hover:scale-[1.02]"
                style={{ background: TEAL }}
              >
                Ver guía completa paso a paso
                <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" /></svg>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* ─── Modal con el detalle completo ───────────────────────────── */}
      {open && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6"
          style={{ background: "rgba(14,17,51,0.55)" }}
          onClick={() => setOpen(false)}
          role="dialog"
          aria-modal="true"
          aria-label="Cómo funciona el proceso de compra"
        >
          <div
            className="relative flex max-h-[88vh] w-full max-w-3xl flex-col overflow-hidden rounded-2xl bg-white shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Header del modal (fijo, fuera del área scrollable) */}
            <div
              className="flex flex-shrink-0 items-center justify-between gap-4 border-b bg-white px-6 py-4"
              style={{ borderColor: "#EEF0F4" }}
            >
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.18em]" style={{ color: "#1E8A95" }}>¿Cómo funciona?</p>
                <h3 className="mt-0.5 text-lg font-bold tracking-tight" style={{ color: NAVY }}>Del pago al primer uso, paso a paso</h3>
              </div>
              <button
                type="button"
                onClick={() => setOpen(false)}
                aria-label="Cerrar"
                className="flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-full transition-colors hover:bg-gray-100"
                style={{ color: NAVY }}
              >
                <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /></svg>
              </button>
            </div>

            {/* Contenido detallado (scrollable) */}
            <div className="overflow-y-auto px-4 py-8 sm:px-6">
              <p className="mx-auto mb-8 max-w-2xl text-center text-[15px] leading-relaxed" style={{ color: "#64748B" }}>
                Sin reuniones de ventas, sin demos. Sigue el flujo paso a paso y empieza a operar hoy mismo.
              </p>
              <AutoservicioFlujoTabs />
            </div>
          </div>
        </div>
      )}
    </>
  );
}
