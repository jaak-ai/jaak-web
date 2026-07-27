import type { Metadata } from "next";

const CANONICAL_URL = "https://jaak.ai/salud/aseguradoras";
const LOGO = "https://jaak.ai/images/logos/jaak-logo-azul.png";

export const metadata: Metadata = {
  title: "Expediente de siniestro de gastos médicos: identidad, evidencia y retención | JAAK",
  description:
    "Cómo construir un expediente de siniestro defendible: verificación de identidad del asegurado, correlación con el servicio prestado y conservación con integridad demostrable. Base en CUSF, Código de Comercio y LFPDPPP 2025.",
  alternates: { canonical: CANONICAL_URL },
  openGraph: {
    type: "website",
    locale: "es_MX",
    url: CANONICAL_URL,
    siteName: "JAAK",
    title: "El expediente de siniestro es una cadena, no una carpeta",
    description:
      "Cómo construir un expediente de siniestro defendible: verificación de identidad del asegurado, correlación con el servicio prestado y conservación con integridad demostrable. Base en CUSF, Código de Comercio y LFPDPPP 2025.",
    images: [{ url: LOGO, width: 800, height: 400, alt: "Expediente de siniestro de gastos médicos · JAAK" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "El expediente de siniestro es una cadena, no una carpeta | JAAK",
    description:
      "Verificación de identidad del asegurado, correlación con el servicio prestado y conservación con integridad demostrable.",
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
    { "@type": "ListItem", position: 3, name: "Aseguradoras", item: CANONICAL_URL },
  ],
};

const webPageSchema = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  name: "Expediente de siniestro de gastos médicos: identidad, evidencia y retención",
  description:
    "Cómo construir un expediente de siniestro defendible: verificación de identidad del asegurado, correlación con el servicio prestado y conservación con integridad demostrable.",
  url: CANONICAL_URL,
  isPartOf: { "@type": "WebSite", name: "JAAK", url: "https://jaak.ai" },
  inLanguage: "es-MX",
};

export default function AseguradorasLayout({ children }: { children: React.ReactNode }) {
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
