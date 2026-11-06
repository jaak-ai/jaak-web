import type { Metadata } from "next";

const CANONICAL_URL = "https://jaak.ai/kyc-demo-autoservicio";
const LOGO = "https://jaak.ai/images/logos/jaak-logo-azul.png";

// AUD-03: sin precios ni ofertas en metadatos hasta que la ficha del SKU Cobre KYC
// (AUD-06.13) esté aprobada. Se conservan URL y canonical.
const TITLE = "Prueba KYC Biométrico para Empresas | JAAK Autoservicio";
const DESCRIPTION =
  "Conoce la verificación de identidad KYC de JAAK con biometría facial, prueba de vida y evidencia digital desde una plataforma Web.";

export const metadata: Metadata = {
  title: { absolute: TITLE },
  description: DESCRIPTION,
  keywords:
    "prueba KYC, KYC biométrico México, verificación de identidad para empresas, prueba de vida biométrica, plataforma KYC autoservicio, demo KYC JAAK, firma digital con KYC",
  alternates: { canonical: CANONICAL_URL },
  openGraph: {
    type: "website",
    locale: "es_MX",
    url: CANONICAL_URL,
    siteName: "JAAK",
    title: TITLE,
    description: DESCRIPTION,
    images: [{ url: LOGO, width: 800, height: 400, alt: "Prueba KYC biométrico JAAK" }],
  },
  twitter: {
    card: "summary_large_image",
    title: TITLE,
    description: DESCRIPTION,
    images: [LOGO],
    creator: "@jaak_ai",
    site: "@jaak_ai",
  },
};

export default function KycDemoAutoservicioLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
