"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

type Promo = {
  featured: boolean;
  code?: string;
  type?: "percent" | "fixed";
  value?: number;
  description?: string;
};

export default function UrgentBanner() {
  // Cupón destacado (AUTO-4). Se pide a /api/promo (que trae el featured
  // server-side). Mientras no hay oferta, el banner muestra el CTA de demo.
  const [promo, setPromo] = useState<Promo | null>(null);

  useEffect(() => {
    let active = true;
    fetch("/api/promo")
      .then((r) => (r.ok ? r.json() : null))
      .then((d: Promo | null) => {
        if (active) setPromo(d);
      })
      .catch(() => {
        /* red caída → se queda el CTA de demo */
      });
    return () => {
      active = false;
    };
  }, []);

  if (promo?.featured && promo.code) {
    const offer = promo.type === "percent" ? `${promo.value}% de descuento` : `$${promo.value} de descuento`;
    return (
      <div className="bg-gradient-to-r from-[#212A45] via-[#0E1133] to-[#212A45] text-white py-2.5 px-4">
        <div className="max-w-7xl mx-auto flex items-center justify-center gap-2 text-sm">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#2AD796] opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-[#2AD796]"></span>
          </span>
          <span className="text-white/90">
            <span className="hidden sm:inline">🎉 Oferta especial:</span>
            <span className="font-semibold text-white"> {offer}</span>
            <span className="hidden md:inline text-white/90"> con el código </span>
            <span className="hidden md:inline font-bold text-[#2AD796]">{promo.code}</span>
          </span>
          <Link
            href={`/autoservicio/prueba?coupon=${encodeURIComponent(promo.code)}`}
            className="ml-2 inline-flex items-center gap-1.5 px-3 py-1 bg-[#2DB6C1] hover:bg-[#25969f] text-white text-xs font-bold rounded-full transition-all hover:scale-105"
          >
            Aprovechar
            <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </Link>
        </div>
      </div>
    );
  }

  // Fallback (sin oferta activa): CTA de demo.
  return (
    <div className="bg-gradient-to-r from-[#212A45] via-[#0E1133] to-[#212A45] text-white py-2.5 px-4">
      <div className="max-w-7xl mx-auto flex items-center justify-center gap-2 text-sm">
        <span className="relative flex h-2 w-2">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#2AD796] opacity-75"></span>
          <span className="relative inline-flex rounded-full h-2 w-2 bg-[#2AD796]"></span>
        </span>
        <span className="text-white/90">
          <span className="hidden sm:inline">¿Tienes dudas?</span>
          <span className="font-semibold text-white"> Agenda una demo con un experto</span>
        </span>
        <Link
          href="https://meetings.hubspot.com/jose-andres-yllescas-lira"
          target="_blank"
          rel="noopener noreferrer"
          className="ml-2 inline-flex items-center gap-1.5 px-3 py-1 bg-[#2DB6C1] hover:bg-[#25969f] text-white text-xs font-bold rounded-full transition-all hover:scale-105"
        >
          Agendar demo
          <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
          </svg>
        </Link>
      </div>
    </div>
  );
}
