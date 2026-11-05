"use client";

import { useEffect, useState } from "react";
import { RegisterButton } from "./Links";
import { useWebinar } from "./WebinarProvider";

/**
 * Barra de registro fija solo en móvil. Aparece cuando el CTA del hero sale del
 * viewport y se oculta cerca del CTA final, para no duplicar botones ni tapar
 * contenido (el <main> reserva padding inferior). Respeta la altura del banner
 * de consentimiento mediante --wb-consent-h.
 */
export default function StickyRegisterBar() {
  const { phase } = useWebinar();
  const [heroVisible, setHeroVisible] = useState(true);
  const [finalVisible, setFinalVisible] = useState(false);

  useEffect(() => {
    const watch = (id: string, set: (v: boolean) => void) => {
      const el = document.getElementById(id);
      if (!el || typeof IntersectionObserver === "undefined") return () => {};
      const io = new IntersectionObserver(([e]) => set(e.isIntersecting));
      io.observe(el);
      return () => io.disconnect();
    };
    const offHero = watch("registro-hero", setHeroVisible);
    const offFinal = watch("registro-final", setFinalVisible);
    return () => {
      offHero();
      offFinal();
    };
  }, []);

  if (phase === "ended" || heroVisible || finalVisible) return null;

  return (
    <div
      className="fixed inset-x-0 z-40 border-t border-[var(--wb-navy)]/15 bg-white/95 px-4 py-3 shadow-[0_-4px_16px_rgba(2,19,45,0.12)] backdrop-blur md:hidden"
      style={{ bottom: "var(--wb-consent-h, 0px)", paddingBottom: "max(0.75rem, env(safe-area-inset-bottom))" }}
    >
      <RegisterButton location="sticky_mobile" variant="onLight" className="w-full" />
    </div>
  );
}
