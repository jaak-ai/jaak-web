"use client";

import Link from "next/link";
import type { ReactNode } from "react";
import { gtmEvent } from "@/components/GoogleTagManager";

interface Props {
  href: string;
  /** Ubicación del CTA en la página (hero, selector, cierre…), para medir conversiones. */
  source: string;
  className?: string;
  children: ReactNode;
}

/** Link interno que registra el clic como evento `cta_click` (mismo patrón que el resto del sitio). */
export default function SignaTrackedLink({ href, source, className, children }: Props) {
  return (
    <Link
      href={href}
      className={className}
      onClick={() =>
        gtmEvent("cta_click", { source, destination: href, page_path: window.location.pathname })
      }
    >
      {children}
    </Link>
  );
}
