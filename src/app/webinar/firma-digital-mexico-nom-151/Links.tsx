"use client";

import type { ReactNode } from "react";
import { useWebinar } from "./WebinarProvider";

const FOCUS =
  "focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--wb-navy)] [.wb-dark_&]:focus-visible:outline-white";

/** Enlace externo con medición `outbound_link_click`. Se abre en pestaña nueva. */
export function ExternalLink({
  href,
  location,
  className = "",
  children,
  label,
}: {
  href: string;
  location: string;
  className?: string;
  children: ReactNode;
  /** Texto para analítica si `children` no es un string. */
  label?: string;
}) {
  const { trackOutbound } = useWebinar();
  const text = label ?? (typeof children === "string" ? children : href);
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      onClick={() => trackOutbound(href, text, location)}
      className={`${FOCUS} ${className}`}
    >
      {children}
      <span className="sr-only"> (se abre en una pestaña nueva)</span>
    </a>
  );
}

/** CTA de registro: enlace real a GoToWebinar con la procedencia de la sesión. */
export function RegisterButton({
  location,
  id,
  variant = "primary",
  className = "",
}: {
  location: string;
  id?: string;
  variant?: "primary" | "onLight";
  className?: string;
}) {
  const { registrationUrl, phase, trackRegistrationClick } = useWebinar();

  if (phase === "ended") {
    return (
      <a
        href="/recursos"
        className={`${FOCUS} inline-flex min-h-12 items-center justify-center rounded-md border-2 border-current px-6 py-3 text-base font-bold ${className}`}
      >
        El webinar ya finalizó · Ver más recursos
      </a>
    );
  }

  const palette =
    variant === "primary"
      ? "bg-[var(--wb-teal)] text-[var(--wb-navy-dark)] hover:bg-white"
      : "bg-[var(--wb-navy)] text-white hover:bg-[var(--wb-navy-dark)]";

  return (
    <a
      id={id}
      href={registrationUrl}
      target="_blank"
      rel="noopener noreferrer"
      onClick={() => trackRegistrationClick(location)}
      className={`${FOCUS} ${palette} inline-flex min-h-12 items-center justify-center rounded-md px-7 py-3 text-base font-bold shadow-sm transition-colors ${className}`}
    >
      {phase === "live" ? "Registrarme ahora" : "Reservar mi lugar"}
      <span className="sr-only"> (se abre en GoToWebinar, en una pestaña nueva)</span>
    </a>
  );
}
