import type { Metadata } from "next";

const CANONICAL_URL = "https://jaak.ai/salud/laboratorios";
const LOGO = "https://jaak.ai/images/logos/jaak-logo-azul.png";

export const metadata: Metadata = {
  title: "Identidad del paciente y registros duplicados en laboratorios | JAAK",
  description:
    "Por qué la identidad maestra del paciente es un tema de seguridad y no de alta de registro, qué exige la NOM-024 sobre identificadores de intercambio y cómo demostrar que el resultado entregado es idéntico al emitido.",
  alternates: { canonical: CANONICAL_URL },
  openGraph: {
    type: "website",
    locale: "es_MX",
    url: CANONICAL_URL,
    siteName: "JAAK",
    title: "Los registros duplicados son un problema clínico, no administrativo",
    description:
      "Por qué la identidad maestra del paciente es un tema de seguridad y no de alta de registro, qué exige la NOM-024 sobre identificadores de intercambio y cómo demostrar que el resultado entregado es idéntico al emitido.",
    images: [{ url: LOGO, width: 800, height: 400, alt: "Identidad del paciente en laboratorios · JAAK" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Los registros duplicados son un problema clínico, no administrativo | JAAK",
    description: "Qué exige la NOM-024 sobre identificadores de intercambio y cómo evitar registros duplicados.",
    images: [LOGO],
    creator: "@jaak_ai",
    site: "@jaak_ai",
  },
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Inicio", item: "https://jaak.ai" },
    { "@type": "ListItem", position: 2, name: "Sector Salud", item: "https://jaak.ai/salud" },
    { "@type": "ListItem", position: 3, name: "Laboratorios", item: CANONICAL_URL },
  ],
};

const webPageSchema = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  name: "Identidad del paciente y registros duplicados en laboratorios",
  description:
    "Por qué la identidad maestra del paciente es un tema de seguridad y no de alta de registro, qué exige la NOM-024 sobre identificadores de intercambio y cómo demostrar que el resultado entregado es idéntico al emitido.",
  url: CANONICAL_URL,
  isPartOf: { "@type": "WebSite", name: "JAAK", url: "https://jaak.ai" },
  inLanguage: "es-MX",
};

export default function LaboratoriosLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify([breadcrumbSchema, webPageSchema]) }}
      />
      {children}
    </>
  );
}
