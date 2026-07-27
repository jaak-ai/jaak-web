import type { Metadata } from "next";

const CANONICAL_URL = "https://jaak.ai/salud/hospitales";
const LOGO = "https://jaak.ai/images/logos/jaak-logo-azul.png";

export const metadata: Metadata = {
  title: "Consentimiento informado y expediente clínico electrónico en hospitales | JAAK",
  description:
    "Qué exige la NOM-004 y el Reglamento de la LGS en firmantes, testigos y versionado del consentimiento, y por qué la carga de probar que se informó recae en el prestador.",
  alternates: { canonical: CANONICAL_URL },
  openGraph: {
    type: "website",
    locale: "es_MX",
    url: CANONICAL_URL,
    siteName: "JAAK",
    title: "El consentimiento informado no empieza en el botón Firmar",
    description:
      "Qué exige la NOM-004 y el Reglamento de la LGS en firmantes, testigos y versionado del consentimiento, y por qué la carga de probar que se informó recae en el prestador.",
    images: [{ url: LOGO, width: 800, height: 400, alt: "Consentimiento informado en hospitales · JAAK" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "El consentimiento informado no empieza en el botón Firmar | JAAK",
    description:
      "Qué exige la NOM-004 y el Reglamento de la LGS en firmantes, testigos y versionado del consentimiento.",
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
    { "@type": "ListItem", position: 3, name: "Hospitales", item: CANONICAL_URL },
  ],
};

const webPageSchema = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  name: "Consentimiento informado y expediente clínico electrónico en hospitales",
  description:
    "Qué exige la NOM-004 y el Reglamento de la LGS en firmantes, testigos y versionado del consentimiento, y por qué la carga de probar que se informó recae en el prestador.",
  url: CANONICAL_URL,
  isPartOf: { "@type": "WebSite", name: "JAAK", url: "https://jaak.ai" },
  inLanguage: "es-MX",
};

export default function HospitalesLayout({ children }: { children: React.ReactNode }) {
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
