import type { Metadata } from "next";

const CANONICAL_URL = "https://jaak.ai/salud";
const LOGO = "https://jaak.ai/images/logos/jaak-logo-azul.png";
const VIDEO_ID = "q0Iliu1wK-g";

export const metadata: Metadata = {
  title: "Firma Digital para el Sector Salud | Consentimiento Informado y Expediente Clínico NOM-151",
  description:
    "Firma digital, validación de identidad y conservación de evidencia NOM-151 para clínicas, hospitales, consultorios y laboratorios. Digitaliza consentimientos informados, expedientes clínicos y recetas con trazabilidad auditable.",
  keywords:
    "firma digital sector salud, consentimiento informado electrónico, expediente clínico electrónico México, firma electrónica NOM-151 hospitales, evidencia digital consentimiento médico, firma digital clínicas y hospitales, conservación NOM-151 documentos médicos, validación de identidad pacientes",
  alternates: { canonical: CANONICAL_URL },
  openGraph: {
    type: "website",
    locale: "es_MX",
    url: CANONICAL_URL,
    siteName: "JAAK",
    title: "Firma Digital para el Sector Salud | Consentimiento Informado y Expediente Clínico NOM-151",
    description:
      "Firma documentos, valida la identidad de los participantes y conserva evidencia del proceso en un expediente digital auditable para instituciones de salud.",
    images: [{ url: LOGO, width: 800, height: 400, alt: "Firma Digital para el Sector Salud · JAAK" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Firma Digital para el Sector Salud | JAAK",
    description:
      "Firma documentos, valida la identidad de los participantes y conserva evidencia del proceso en un expediente digital auditable para instituciones de salud.",
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
    { "@type": "ListItem", position: 2, name: "Sector Salud", item: CANONICAL_URL },
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

const videoSchema = {
  "@context": "https://schema.org",
  "@type": "VideoObject",
  name: "Demo de firma digital JAAK",
  description:
    "Flujo general de la plataforma de firma digital de JAAK: creación o carga del documento, configuración de firmantes, envío, autenticación, firma y generación del expediente de evidencia.",
  thumbnailUrl: `https://i.ytimg.com/vi/${VIDEO_ID}/maxresdefault.jpg`,
  uploadDate: "2025-01-01T00:00:00-06:00",
  contentUrl: `https://www.youtube.com/watch?v=${VIDEO_ID}`,
  embedUrl: `https://www.youtube.com/embed/${VIDEO_ID}`,
  publisher: {
    "@type": "Organization",
    name: "JAAK",
    logo: { "@type": "ImageObject", url: LOGO },
  },
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "¿JAAK sustituye la explicación médica al paciente?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "No. La plataforma documenta el proceso de revisión, autenticación y firma. La información clínica y la explicación del procedimiento siguen siendo responsabilidad del profesional y de la institución.",
      },
    },
    {
      "@type": "Question",
      name: "¿La NOM-151 es un tipo de firma?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "No exactamente. La NOM-151 establece requisitos para la conservación de mensajes de datos y la digitalización de documentos. Puede complementar una firma electrónica mediante evidencia de integridad y una constancia de conservación.",
      },
    },
    {
      "@type": "Question",
      name: "¿Es obligatorio utilizar biometría?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "No. Ofrecemos Firma Digital NOM-151 sola, o Firma NOM-151 + Biometría cuando además necesita identificar al firmante, como en un consentimiento informado. Usted elige según el caso.",
      },
    },
    {
      "@type": "Question",
      name: "¿Se puede integrar con nuestro expediente clínico?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "JAAK cuenta con alternativas de integración. La viabilidad y alcance deben revisarse de acuerdo con el sistema utilizado y la configuración contratada.",
      },
    },
    {
      "@type": "Question",
      name: "¿Podemos utilizar e.firma del SAT?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "JAAK puede contemplar flujos con e.firma cuando el producto, la integración y el caso de uso lo permitan. Debe revisarse técnicamente antes de ofrecerlo como una funcionalidad estándar.",
      },
    },
  ],
};

export default function SaludLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify([breadcrumbSchema, organizationSchema, videoSchema, faqSchema]),
        }}
      />
      {children}
    </>
  );
}
