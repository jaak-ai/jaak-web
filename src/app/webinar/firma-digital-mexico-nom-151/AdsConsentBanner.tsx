"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { applyAdsConsent, readStoredConsent } from "@/lib/consent";
import type { AdsConsent } from "@/lib/consent";

/**
 * Aviso de consentimiento para etiquetas publicitarias (Google Ads/Meta).
 * "Aceptar" y "Rechazar" tienen el mismo peso visual. No bloquea la página.
 * Publica su altura en --wb-consent-h para que la barra sticky quede encima.
 */
export default function AdsConsentBanner() {
  const [visible, setVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setVisible(readStoredConsent() === null);
  }, []);

  useEffect(() => {
    const root = document.documentElement;
    const el = ref.current;
    if (!visible || !el) {
      root.style.removeProperty("--wb-consent-h");
      return;
    }
    const set = () => root.style.setProperty("--wb-consent-h", `${el.offsetHeight}px`);
    set();
    window.addEventListener("resize", set);
    return () => {
      window.removeEventListener("resize", set);
      root.style.removeProperty("--wb-consent-h");
    };
  }, [visible]);

  if (!visible) return null;

  const choose = (choice: AdsConsent) => {
    applyAdsConsent(choice);
    setVisible(false);
  };

  const btn =
    "min-h-11 flex-1 rounded-lg border-2 border-[var(--wb-navy)] px-4 py-2 text-sm font-bold text-[var(--wb-navy)] hover:bg-[var(--wb-navy)] hover:text-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--wb-navy)] sm:flex-none sm:px-6";

  return (
    <div
      ref={ref}
      role="region"
      aria-label="Preferencias de privacidad"
      className="fixed inset-x-0 bottom-0 z-50 border-t border-[var(--wb-navy)]/20 bg-white px-4 py-4 shadow-[0_-6px_24px_rgba(2,19,45,0.18)]"
    >
      <div className="mx-auto flex max-w-5xl flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        <p className="text-sm leading-relaxed text-[var(--wb-text)]">
          Usamos etiquetas publicitarias (Google y Meta) para medir y mejorar nuestras campañas solo si usted lo
          autoriza. La medición básica de esta página no depende de su elección. Consulte nuestro{" "}
          <Link href="/privacidad" className="font-semibold underline">
            aviso de privacidad
          </Link>{" "}
          y la{" "}
          <Link href="/cookies" className="font-semibold underline">
            política de cookies
          </Link>
          .
        </p>
        <div className="flex gap-3">
          <button type="button" className={btn} onClick={() => choose("denied")}>
            Rechazar
          </button>
          <button type="button" className={btn} onClick={() => choose("granted")}>
            Aceptar
          </button>
        </div>
      </div>
    </div>
  );
}
