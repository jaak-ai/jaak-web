import type { Metadata } from "next";

const CANONICAL_URL = "https://jaak.ai/salud/farmacias";
const LOGO = "https://jaak.ai/images/logos/jaak-logo-azul.png";

export const metadata: Metadata = {
  title: "Receta digital y validación en el punto de dispensación | JAAK",
  description:
    "Qué exige la Ley General de Salud según la fracción del medicamento, cómo impedir el reuso de una receta digital y por qué validar la cédula del prescriptor no equivale a verificar su identidad.",
  alternates: { canonical: CANONICAL_URL },
  openGraph: {
    type: "website",
    locale: "es_MX",
    url: CANONICAL_URL,
    siteName: "JAAK",
    title: "No todas las recetas tienen el mismo riesgo",
    description:
      "Qué exige la Ley General de Salud según la fracción del medicamento, cómo impedir el reuso de una receta digital y por qué validar la cédula del prescriptor no equivale a verificar su identidad.",
    images: [{ url: LOGO, width: 800, height: 400, alt: "Receta digital y validación en farmacias · JAAK" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "No todas las recetas tienen el mismo riesgo | JAAK",
    description:
      "Qué exige la Ley General de Salud según la fracción del medicamento y por qué validar la cédula no equivale a verificar identidad.",
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
    { "@type": "ListItem", position: 3, name: "Farmacias", item: CANONICAL_URL },
  ],
};

const webPageSchema = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  name: "Receta digital y validación en el punto de dispensación",
  description:
    "Qué exige la Ley General de Salud según la fracción del medicamento, cómo impedir el reuso de una receta digital y por qué validar la cédula del prescriptor no equivale a verificar su identidad.",
  url: CANONICAL_URL,
  isPartOf: { "@type": "WebSite", name: "JAAK", url: "https://jaak.ai" },
  inLanguage: "es-MX",
};

export default function FarmaciasLayout({ children }: { children: React.ReactNode }) {
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
