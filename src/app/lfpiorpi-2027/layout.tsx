import type { Metadata } from "next";

const CANONICAL_URL = "https://jaak.ai/lfpiorpi-2027";
const LOGO = "https://jaak.ai/images/logos/jaak-logo-azul.png";

export const metadata: Metadata = {
  title: "Nuevas Reglas LFPIORPI 2026–2027 | Identidad, Riesgo y Automatización",
  description:
    "Conoce los principales cambios de las nuevas Reglas LFPIORPI: enfoque basado en riesgo, Beneficiario Controlador, mecanismos automatizados y fechas clave para 2027.",
  keywords:
    "LFPIORPI 2027, Reglas LFPIORPI 2026, Actividades Vulnerables, KYC México, Prevención de Lavado de Dinero, Beneficiario Controlador, PEP, AML Screening, Mecanismos automatizados, Enfoque basado en riesgo, Compliance México",
  alternates: { canonical: CANONICAL_URL },
  openGraph: {
    type: "website",
    locale: "es_MX",
    url: CANONICAL_URL,
    siteName: "JAAK",
    title: "Nuevas Reglas LFPIORPI 2026–2027 | Identidad, Riesgo y Automatización",
    description:
      "Enfoque basado en riesgo, Beneficiario Controlador, mecanismos automatizados y fechas clave para 2027. Fuentes oficiales y autoevaluación de tu operación.",
    images: [{ url: LOGO, width: 800, height: 400, alt: "Nuevas Reglas LFPIORPI 2026–2027 · JAAK" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Nuevas Reglas LFPIORPI 2026–2027 | JAAK",
    description:
      "Enfoque basado en riesgo, Beneficiario Controlador, mecanismos automatizados y fechas clave para 2027.",
    images: [LOGO],
    creator: "@jaak_ai",
    site: "@jaak_ai",
  },
};

// Solo Organization + BreadcrumbList: esta página resume disposiciones oficiales,
// nunca debe leerse como si JAAK fuera la autoridad regulatoria o una fuente legal.
const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Inicio", item: "https://jaak.ai" },
    { "@type": "ListItem", position: 2, name: "Nuevas Reglas LFPIORPI 2026–2027", item: CANONICAL_URL },
  ],
};

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "JAAK",
  url: "https://jaak.ai",
  logo: LOGO,
  description:
    "JAAK es una RegTech mexicana de identidad digital, KYC biométrico y firma electrónica NOM-151, con tecnología hecha en México.",
  sameAs: ["https://www.linkedin.com/company/jaak-ai"],
  address: { "@type": "PostalAddress", addressCountry: "MX" },
};

const webPageSchema = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  name: "Nuevas Reglas LFPIORPI 2026–2027",
  url: CANONICAL_URL,
  description:
    "Resumen ejecutivo orientativo de las nuevas Reglas de Carácter General relacionadas con la LFPIORPI, publicadas en el DOF el 7 de agosto de 2026. Consulta siempre las fuentes oficiales.",
  inLanguage: "es-MX",
  isPartOf: { "@type": "WebSite", name: "JAAK", url: "https://jaak.ai" },
};

export default function Lfpiorpi2027Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify([breadcrumbSchema, organizationSchema, webPageSchema]),
        }}
      />
      {children}
    </>
  );
}
