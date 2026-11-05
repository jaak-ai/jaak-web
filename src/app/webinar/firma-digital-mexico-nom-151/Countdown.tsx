"use client";

import { useEffect, useState } from "react";
import { getCountdownParts } from "@/lib/webinar/firmaDigital";
import type { CountdownParts } from "@/lib/webinar/firmaDigital";
import { useWebinar } from "./WebinarProvider";

const pad = (n: number) => String(n).padStart(2, "0");

/**
 * Cuenta regresiva real: cada segundo recalcula contra la fecha absoluta del
 * evento (no decrementa un contador), por lo que no se desfasa aunque la pestaña
 * esté en segundo plano. Antes de hidratar muestra guiones (sin desajuste SSR).
 * Al iniciar/terminar se sustituye por el estado correspondiente.
 */
export default function Countdown() {
  const { phase } = useWebinar();
  const [parts, setParts] = useState<CountdownParts | null>(null);

  useEffect(() => {
    if (phase !== "upcoming") return;
    const update = () => setParts(getCountdownParts(Date.now()));
    update();
    const id = setInterval(update, 1000);
    return () => clearInterval(id);
  }, [phase]);

  if (phase === "live") {
    return (
      <div role="status" className="rounded-md border border-[var(--wb-teal)] px-5 py-4">
        <p className="text-lg font-bold text-white">El evento ya inició</p>
        <p className="mt-1 text-sm text-white/85">
          La transmisión está en curso. Regístrese en GoToWebinar para recibir el acceso.
        </p>
      </div>
    );
  }
  if (phase === "ended") {
    return (
      <div role="status" className="rounded-md border border-white/40 px-5 py-4">
        <p className="text-lg font-bold text-white">El evento ha finalizado</p>
        <p className="mt-1 text-sm text-white/85">Gracias a quienes nos acompañaron.</p>
      </div>
    );
  }

  const cells: [string, number | null][] = [
    ["Días", parts?.days ?? null],
    ["Horas", parts?.hours ?? null],
    ["Minutos", parts?.minutes ?? null],
    ["Segundos", parts?.seconds ?? null],
  ];

  return (
    <div>
      <p className="mb-2 text-xs font-semibold uppercase tracking-widest text-white/80">Comienza en</p>
      {/* aria-live apagado: un lector de pantalla no debe leer cada segundo. */}
      <div role="timer" aria-live="off" aria-label="Tiempo restante para el inicio del webinar" className="grid grid-cols-4 gap-2 sm:gap-3">
        {cells.map(([label, value]) => (
          <div key={label} className="rounded-md bg-white/10 px-2 py-3 text-center ring-1 ring-white/20">
            <span className="block text-3xl font-extrabold tabular-nums text-white sm:text-4xl">
              {value === null ? "--" : pad(value)}
            </span>
            <span className="mt-1 block text-[11px] font-semibold uppercase tracking-wider text-white/80 sm:text-xs">
              {label}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
