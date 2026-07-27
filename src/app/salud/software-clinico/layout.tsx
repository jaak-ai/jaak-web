import type { Metadata } from "next";

const CANONICAL_URL = "https://jaak.ai/salud/software-clinico";
const LOGO = "https://jaak.ai/images/logos/jaak-logo-azul.png";

export const metadata: Metadata = {
  title: "Capa probatoria para sistemas de expediente clínico | JAAK",
  description:
    "Las cinco preguntas que un área jurídica hospitalaria hará a su sistema de expediente clínico, y cómo integrar identidad, firma y constancia de conservación por API sin construirlas.",
  alternates: { canonical: CANONICAL_URL },
  openGraph: {
    type: "website",
    locale: "es_MX",
    url: CANONICAL_URL,
    siteName: "JAAK",
    title: "Declarar cumplimiento no es acreditarlo",
    description:
      "Las cinco preguntas que un área jurídica hospitalaria hará a su sistema de expediente clínico, y cómo integrar identidad, firma y constancia de conservación por API sin construirlas.",
    images: [{ url: LOGO, width: 800, height: 400, alt: "Capa probatoria para software clínico · JAAK" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Declarar cumplimiento no es acreditarlo | JAAK",
    description: "Las cinco preguntas que un área jurídica hospitalaria hará a su sistema de expediente clínico.",
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
    { "@type": "ListItem", position: 3, name: "Software clínico", item: CANONICAL_URL },
  ],
};

const webPageSchema = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  name: "Capa probatoria para sistemas de expediente clínico",
  description:
    "Las cinco preguntas que un área jurídica hospitalaria hará a su sistema de expediente clínico, y cómo integrar identidad, firma y constancia de conservación por API sin construirlas.",
  url: CANONICAL_URL,
  isPartOf: { "@type": "WebSite", name: "JAAK", url: "https://jaak.ai" },
  inLanguage: "es-MX",
};

export default function SoftwareClinicoLayout({ children }: { children: React.ReactNode }) {
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
