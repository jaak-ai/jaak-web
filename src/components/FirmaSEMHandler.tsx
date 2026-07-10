"use client";

import { useEffect } from "react";

/**
 * Handles SEM campaign deep-linking via URL anchors.
 * Maps hash fragments to sections for campaign traffic:
 * #nom151, #biometria, #kyc, #riesgo
 */
export default function FirmaSEMHandler() {
  useEffect(() => {
    const hash = window.location.hash.replace("#", "");
    if (!hash) return;

    const timer = setTimeout(() => {
      const element = document.getElementById(hash);
      if (!element) return;

      element.scrollIntoView({ behavior: "smooth", block: "start" });

      // Brief highlight pulse for the targeted section
      const originalOutline = element.style.outline;
      const originalTransition = element.style.transition;
      element.style.transition = "outline 0.3s ease, box-shadow 0.3s ease";
      element.style.outline = "2px solid rgba(30,202,211,0.5)";
      element.style.boxShadow = "0 0 40px rgba(30,202,211,0.1)";

      setTimeout(() => {
        element.style.outline = originalOutline;
        element.style.boxShadow = "";
        element.style.transition = originalTransition;
      }, 2500);
    }, 600);

    return () => clearTimeout(timer);
  }, []);

  return null;
}
