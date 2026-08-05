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
      name: "¿La prueba de vida requiere movimientos?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "No. El flujo utiliza prueba de vida pasiva para confirmar presencia sin pedir al usuario que gire la cabeza o realice gestos.",
      },
    },
    {
      "@type": "Question",
      name: "¿Qué ocurre si una validación no se completa?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "La operación recibe el resultado del control correspondiente para decidir si solicita un nuevo intento, detiene el flujo o envía el caso a revisión.",
      },
    },
    {
      "@type": "Question",
      name: "¿Puede conectarse con una plataforma existente?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Sí. JAAK puede implementarse mediante API, SDK o una experiencia de marca blanca, según el alcance acordado.",
      },
    },
    {
      "@type": "Question",
      name: "¿Incluye fuentes oficiales y listas de riesgo?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "El flujo puede configurarse con las fuentes y consultas contratadas para cada operación.",
      },
    },
    {
      "@type": "Question",
      name: "¿Se conserva evidencia?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "La verificación genera un resultado estructurado y la trazabilidad de los controles ejecutados.",
      },
    },
    {
      "@type": "Question",
      name: "¿JAAK sustituye el análisis legal del operador?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "No. JAAK aporta tecnología de identidad, validaciones y evidencia. Las obligaciones y reglas aplicables deben definirse por cada operador conforme a su permiso, actividad y marco regulatorio.",
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
