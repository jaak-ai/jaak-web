import type { Metadata } from "next";
import RecursosHumanosLandingClient from "./LandingClient";

const CANONICAL_URL = "https://jaak.ai/soluciones/recursos-humanos";
const LOGO = "https://jaak.ai/images/logos/jaak-logo-azul.png";

export const metadata: Metadata = {
  title: "Firma Digital para Recursos Humanos",
  description:
    "Digitaliza contratos, anexos y documentación laboral con firma digital, evidencia trazable, sellos de tiempo e integración a tus procesos de Recursos Humanos.",
  keywords:
    "firma digital recursos humanos, firma electrónica contratos laborales, contratos digitales, firma contratos RH, firma electrónica México, expediente laboral digital, firma digital empleados, NOM-151 documentos laborales",
  alternates: { canonical: CANONICAL_URL },
  openGraph: {
    type: "website",
    locale: "es_MX",
    url: CANONICAL_URL,
    siteName: "JAAK",
    title: "Firma Digital para Recursos Humanos | JAAK",
    description:
      "Contratos, anexos, políticas y documentación laboral en un flujo digital que permite saber quién firmó, qué firmó, cuándo lo hizo y qué evidencia quedó del proceso.",
    images: [{ url: LOGO, width: 800, height: 400, alt: "Firma Digital para Recursos Humanos · JAAK" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Firma Digital para Recursos Humanos | JAAK",
    description:
      "Contratos, anexos, políticas y documentación laboral en un flujo digital con evidencia, trazabilidad e integración a los procesos de RH.",
    images: [LOGO],
    creator: "@jaak_ai",
    site: "@jaak_ai",
  },
  robots: { index: true, follow: true },
};

export default function RecursosHumanosPage() {
  return <RecursosHumanosLandingClient />;
}
