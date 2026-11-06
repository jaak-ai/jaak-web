"use client";

import { useEffect, useState } from "react";
import { WHITE_LABEL_COPY } from "@/config/commercial-copy";

const NAVY = "#212A45";
const TEAL = "#2DB6C1";

/**
 * Ventana flotante con el detalle de White Label (AUD-05). Mantiene las páginas limpias: en la
 * página solo va un aviso corto y el detalle se abre bajo demanda, con el mismo estilo que el modal
 * de «¿Cómo funciona?» de Autoservicio. El contenido sale de `WHITE_LABEL_COPY` (fuente única).
 *
 * - variant="banner": franja compacta para /autoservicio.
 * - variant="link": enlace de texto corto para tablas y tarjetas (`tone` ajusta el color al fondo).
 */
export default function WhiteLabelInfo({
  variant = "link",
  tone = "light",
  label = "Ver qué incluye",
}: {
  variant?: "banner" | "link";
  tone?: "light" | "dark";
  label?: string;
}) {
  const [open, setOpen] = useState(false);

  // Bloquea el scroll y cierra con Escape mientras la ventana está abierta.
  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    document.addEventListener("keydown", onKey);
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = prev;
    };
  }, [open]);

  const trigger =
    variant === "banner" ? (
      <section aria-label="White Label incluido" style={{ background: "#F5F7FA" }}>
        <div className="mx-auto max-w-7xl px-4 py-5 sm:px-6 lg:px-8">
          <div
            className="flex flex-col items-start justify-between gap-3 rounded-2xl border bg-white px-5 py-4 sm:flex-row sm:items-center"
            style={{ borderColor: "#E6E8EF" }}
          >
            <div className="flex items-center gap-3">
              <span
                className="flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-xl text-white"
                style={{ background: `linear-gradient(135deg, ${TEAL}, #2AD796)` }}
                aria-hidden="true"
              >
                <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 7V5a1 1 0 011-1h14a1 1 0 011 1v2M9 20h6M12 4v16" />
                </svg>
              </span>
              <p className="text-[14.5px] leading-snug" style={{ color: NAVY }}>
                <span className="font-bold">{WHITE_LABEL_COPY.bloqueBeneficio}</span>{" "}
                <span style={{ color: "#64748B" }}>{WHITE_LABEL_COPY.bloqueTitulo}</span>
              </p>
            </div>
            <button
              type="button"
              onClick={() => setOpen(true)}
              className="inline-flex flex-shrink-0 items-center gap-1.5 rounded-xl px-4 py-2 text-[13.5px] font-semibold text-white transition-opacity hover:opacity-90"
              style={{ background: TEAL }}
            >
              {label}
              <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        </div>
      </section>
    ) : (
      <button
        type="button"
        onClick={() => setOpen(true)}
        className="text-[0.85em] font-semibold underline underline-offset-2 hover:no-underline"
        style={{ color: tone === "dark" ? "#7FE0E8" : "#1F8F99" }}
      >
        {label}
      </button>
    );

  return (
    <>
      {trigger}
      {open && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6"
          style={{ background: "rgba(14,17,51,0.55)" }}
          onClick={() => setOpen(false)}
          role="dialog"
          aria-modal="true"
          aria-labelledby="white-label-modal-title"
        >
          <div
            className="relative flex max-h-[88vh] w-full max-w-xl flex-col overflow-hidden rounded-2xl bg-white shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex flex-shrink-0 items-start justify-between gap-4 border-b px-6 py-4" style={{ borderColor: "#EEF0F4" }}>
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.18em]" style={{ color: "#1E8A95" }}>
                  {WHITE_LABEL_COPY.bloqueBeneficio}
                </p>
                <h3 id="white-label-modal-title" className="mt-0.5 text-lg font-bold tracking-tight" style={{ color: NAVY }}>
                  {WHITE_LABEL_COPY.bloqueTitulo}
                </h3>
              </div>
              <button
                type="button"
                onClick={() => setOpen(false)}
                aria-label="Cerrar"
                className="flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-full transition-colors hover:bg-gray-100"
                style={{ color: NAVY }}
              >
                <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>

            <div className="overflow-y-auto px-6 py-5">
              <p className="text-[14.5px] leading-relaxed" style={{ color: "#64748B" }}>
                {WHITE_LABEL_COPY.bloqueDescripcion}
              </p>
              <ul className="mt-4 grid gap-2 sm:grid-cols-2">
                {WHITE_LABEL_COPY.capacidades.map((c) => (
                  <li
                    key={c}
                    className="flex items-start gap-2 rounded-xl border px-3 py-2.5 text-[13px] font-medium leading-snug"
                    style={{ borderColor: "#E6E8EF", color: NAVY }}
                  >
                    <svg className="mt-0.5 h-4 w-4 flex-shrink-0" style={{ color: TEAL }} fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                    </svg>
                    {c}
                  </li>
                ))}
              </ul>
              <p className="mt-4 text-[12.5px] leading-relaxed" style={{ color: "#8A94A6" }}>
                {WHITE_LABEL_COPY.noEsIntegracion}
              </p>
            </div>

            <div className="flex flex-shrink-0 justify-end border-t px-6 py-3" style={{ borderColor: "#EEF0F4" }}>
              <button
                type="button"
                onClick={() => setOpen(false)}
                className="rounded-xl px-5 py-2 text-[13.5px] font-semibold text-white transition-opacity hover:opacity-90"
                style={{ background: NAVY }}
              >
                Entendido
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
