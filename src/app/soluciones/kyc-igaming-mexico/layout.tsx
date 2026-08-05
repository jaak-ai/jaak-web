import type { Metadata } from "next";

const CANONICAL_URL = "https://jaak.ai/soluciones/kyc-igaming-mexico";
const LOGO = "https://jaak.ai/images/logos/jaak-logo-azul.png";
const TITLE = "KYC para Gaming e iGaming en México | JAAK";
const DESCRIPTION =
  "Verifica identidad, mayoría de edad y riesgo de jugadores con biometría, documentos, INE, RENAPO, listas y evidencia desde el onboarding.";

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  keywords:
    "KYC para gaming en México, KYC iGaming México, verificación de identidad para casinos, onboarding de jugadores, KYC para apuestas deportivas, verificación de edad gaming, KYC casinos online, LFPIORPI juegos con apuesta, identificación de jugadores en México",
  alternates: { canonical: CANONICAL_URL },
  openGraph: {
    type: "website",
    locale: "es_MX",
    url: CANONICAL_URL,
    siteName: "JAAK",
    title: TITLE,
    description: DESCRIPTION,
    images: [{ url: LOGO, width: 800, height: 400, alt: "KYC para Gaming e iGaming en México — JAAK" }],
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

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Inicio", item: "https://jaak.ai" },
    { "@type": "ListItem", position: 2, name: "Cumplimiento", item: "https://jaak.ai/cumplimiento" },
    { "@type": "ListItem", position: 3, name: "KYC Gaming e iGaming México", item: CANONICAL_URL },
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

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "¿Qué valida JAAK durante el onboarding de un jugador?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "JAAK puede ejecutar prueba de vida pasiva, comparación facial 1:1, análisis y extracción de información documental, consultas a fuentes oficiales, revisión de listas de riesgo y geolocalización.",
      },
    },
    {
      "@type": "Question",
      name: "¿JAAK ayuda a comprobar la mayoría de edad?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "El flujo permite extraer y validar la fecha de nacimiento contenida en el documento. El operador puede utilizar el resultado para aplicar su regla de mayoría de edad conforme a la jurisdicción y modalidad correspondiente.",
      },
    },
    {
      "@type": "Question",
      name: "¿Qué documentos pueden utilizarse?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "La configuración puede contemplar documentos como INE y pasaporte. La cobertura final debe establecerse durante el diseño del flujo.",
      },
    },
    {
      "@type": "Question",
      name: "¿Qué fuentes mexicanas consulta?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Dependiendo del paquete contratado, el proceso puede incluir Lista Nominal INE, RENAPO y fuentes fiscales como SAT 69-B.",
      },
    },
    {
      "@type": "Question",
      name: "¿Qué listas están incluidas en el KYC?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "El paquete descrito para KYC contempla OFAC, INTERPOL y SAT 69-B. Para un análisis más amplio se puede integrar el paquete AML con más de 40 listas de riesgo.",
      },
    },
    {
      "@type": "Question",
      name: "¿La plataforma puede personalizarse?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Sí. El flujo web puede configurarse en marca blanca con logotipo, colores y mensajes del operador.",
      },
    },
    {
      "@type": "Question",
      name: "¿JAAK monitorea apuestas, depósitos y retiros?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "JAAK se concentra en la verificación de identidad y el onboarding. El monitoreo transaccional, la acumulación de montos y la presentación de Avisos deben resolverse mediante los sistemas y procedimientos del operador.",
      },
    },
    {
      "@type": "Question",
      name: "¿JAAK elimina por sí solo el abuso de bonos o las multicuentas?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "La verificación de identidad reduce la posibilidad de operar con identidades falsas, prestadas o inconsistentes. La detección integral de multicuentas y abuso de bonos requiere señales y controles adicionales del operador.",
      },
    },
    {
      "@type": "Question",
      name: "¿Cómo se integra?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "La solución puede consumirse mediante API, SDK o un flujo web de marca blanca. También existe un entorno sandbox para pruebas de integración.",
      },
    },
  ],
};

export default function KycIgamingMexicoLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify([breadcrumbSchema, organizationSchema, faqSchema]) }}
      />
      {children}
    </>
  );
}
