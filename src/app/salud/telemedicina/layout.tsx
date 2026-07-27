import type { Metadata } from "next";

const CANONICAL_URL = "https://jaak.ai/salud/telemedicina";
const LOGO = "https://jaak.ai/images/logos/jaak-logo-azul.png";

export const metadata: Metadata = {
  title: "Telemedicina en México: identidad, consentimiento y nota clínica | JAAK",
  description:
    "El proyecto de norma para atención médica a distancia fue cancelado en 2018 y no existe una norma general final. Qué marco aplica realmente y qué cuatro evidencias deben sobrevivir a la videollamada.",
  alternates: { canonical: CANONICAL_URL },
  openGraph: {
    type: "website",
    locale: "es_MX",
    url: CANONICAL_URL,
    siteName: "JAAK",
    title: "La teleconsulta se regula por capas, no por una NOM",
    description:
      "El proyecto de norma para atención médica a distancia fue cancelado en 2018 y no existe una norma general final. Qué marco aplica realmente y qué cuatro evidencias deben sobrevivir a la videollamada.",
    images: [{ url: LOGO, width: 800, height: 400, alt: "Telemedicina en México · JAAK" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "La teleconsulta se regula por capas, no por una NOM | JAAK",
    description: "Qué marco aplica realmente a la telemedicina en México y qué evidencias deben sobrevivir a la videollamada.",
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
    { "@type": "ListItem", position: 3, name: "Telemedicina", item: CANONICAL_URL },
  ],
};

const webPageSchema = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  name: "Telemedicina en México: identidad, consentimiento y nota clínica",
  description:
    "El proyecto de norma para atención médica a distancia fue cancelado en 2018 y no existe una norma general final. Qué marco aplica realmente y qué cuatro evidencias deben sobrevivir a la videollamada.",
  url: CANONICAL_URL,
  isPartOf: { "@type": "WebSite", name: "JAAK", url: "https://jaak.ai" },
  inLanguage: "es-MX",
};

export default function TelemedicinaLayout({ children }: { children: React.ReactNode }) {
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
