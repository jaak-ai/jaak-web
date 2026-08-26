import type { Metadata } from "next";

const CANONICAL_URL = "https://jaak.ai/kyc-automotriz-lfpiorpi";
const LOGO = "https://jaak.ai/images/logos/jaak-logo-azul.png";

export const metadata: Metadata = {
  title: "LFPIORPI para agencias automotrices | KYC y expediente | JAAK",
  description:
    "Conoce los umbrales de identificación y aviso para comercialización de vehículos y digitaliza la identificación de clientes con KYC, biometría y expediente integrado.",
  keywords:
    "LFPIORPI automotriz, LFPIORPI agencias automotrices, identificación de clientes automotriz, actividad vulnerable venta de vehículos, KYC automotriz México, expediente LFPIORPI, umbral LFPIORPI vehículos 2026, prevención lavado dinero agencias automotrices, identificación comprador automóvil, KYC agencias automotrices, fracción VIII LFPIORPI",
  alternates: { canonical: CANONICAL_URL },
  openGraph: {
    type: "website",
    locale: "es_MX",
    url: CANONICAL_URL,
    siteName: "JAAK",
    title: "LFPIORPI para agencias automotrices | KYC y expediente | JAAK",
    description:
      "Umbrales de identificación y aviso 2026 para comercialización de vehículos (Art. 17 Fr. VIII). KYC biométrico, consultas de identidad, screening y expediente integrado.",
    images: [{ url: LOGO, width: 800, height: 400, alt: "LFPIORPI para agencias automotrices · JAAK" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "LFPIORPI para agencias automotrices | JAAK",
    description:
      "Umbrales de identificación y aviso 2026 para comercialización de vehículos. KYC biométrico y expediente integrado.",
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
    { "@type": "ListItem", position: 2, name: "LFPIORPI Automotriz", item: CANONICAL_URL },
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
  name: "LFPIORPI para agencias automotrices",
  url: CANONICAL_URL,
  description:
    "Guía orientativa sobre la LFPIORPI para agencias, grupos, distribuidores y comercializadores de vehículos: umbrales de identificación y aviso, acumulación de operaciones, verificación de identidad y expediente digital.",
  inLanguage: "es-MX",
  isPartOf: { "@type": "WebSite", name: "JAAK", url: "https://jaak.ai" },
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "¿La venta de vehículos es una Actividad Vulnerable?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Sí. El Artículo 17, fracción VIII de la LFPIORPI considera Actividad Vulnerable la comercialización o distribución habitual o profesional de vehículos nuevos o usados, ya sean aéreos, marítimos o terrestres.",
      },
    },
    {
      "@type": "Question",
      name: "¿Cuál es el umbral de identificación en 2026?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "3,210 UMA, equivalentes a $376,565.10 MXN con la UMA 2026 de $117.31. A partir de este supuesto surge la obligación de identificar al cliente conforme a la LFPIORPI.",
      },
    },
    {
      "@type": "Question",
      name: "¿Cuál es el umbral de aviso en 2026?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "6,420 UMA, equivalentes a $753,130.20 MXN con la UMA 2026. El Aviso corresponde presentarlo al sujeto obligado que realiza la Actividad Vulnerable.",
      },
    },
    {
      "@type": "Question",
      name: "¿Quién presenta el Aviso ante la autoridad?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "El sujeto obligado que realiza la Actividad Vulnerable, es decir, la agencia, grupo o comercializador de vehículos. JAAK no presenta el Aviso; ayuda a estructurar y conservar la información y evidencia del cliente para incorporarla al proceso interno de cumplimiento.",
      },
    },
    {
      "@type": "Question",
      name: "¿JAAK presenta el Aviso por mi empresa?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "No. Presentar el Aviso es responsabilidad del sujeto obligado. JAAK ayuda a obtener, estructurar y conservar información y evidencia que puede alimentar los procesos internos de cumplimiento.",
      },
    },
    {
      "@type": "Question",
      name: "¿La LFPIORPI obliga a utilizar biometría?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "No existe una obligación textual de usar biometría en la LFPIORPI. La biometría, la comparación facial y la prueba de vida son herramientas tecnológicas que pueden fortalecer la verificación de identidad dentro del proceso de identificación del cliente.",
      },
    },
    {
      "@type": "Question",
      name: "¿INE y RENAPO son listas de riesgo?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "No. INE y RENAPO son fuentes de validación de identidad y datos personales. Las listas de riesgo (PEP, sanciones, listas oficiales e internacionales) pertenecen a un frente distinto: el análisis de riesgo del cliente.",
      },
    },
    {
      "@type": "Question",
      name: "¿Qué pasa si un cliente realiza varias operaciones?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "El Reglamento contempla la acumulación de actos u operaciones realizados con un mismo cliente durante un periodo de hasta seis meses para determinar el supuesto de presentación de Avisos, conforme a las reglas aplicables.",
      },
    },
    {
      "@type": "Question",
      name: "¿Cuánto tiempo debe conservarse la información del cliente?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "La LFPIORPI contempla la conservación de la información y documentación soporte por 10 años para las operaciones realizadas bajo el régimen correspondiente.",
      },
    },
    {
      "@type": "Question",
      name: "¿Puedo integrar firma digital al mismo proceso?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Sí, como componente adicional de evidencia y contratación dentro del mismo flujo de identificación. La firma digital no sustituye las obligaciones de identificación, aviso o restricción de efectivo de la LFPIORPI.",
      },
    },
  ],
};

export default function KycAutomotrizLfpiorpiLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify([breadcrumbSchema, organizationSchema, webPageSchema, faqSchema]),
        }}
      />
      {children}
    </>
  );
}
