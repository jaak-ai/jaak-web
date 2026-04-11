import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FirmaThemeShell from "@/components/FirmaThemeShell";

export const metadata: Metadata = {
  title: "Firma Electrónica en México | Legal, Biométrica y NOM-151 | JAAK",
  description:
    "Firma electrónica con validez legal en México. NOM-151, biometría facial, KYC completo y expediente digital auditable. La solución más robusta para bancos, financieras e inmobiliarias.",
  keywords:
    "firma electrónica México, firma digital, firmar documentos online, firma electrónica legal México, NOM 151 firma electrónica, firma biométrica, firma con verificación de identidad, cómo firmar contratos digitales legalmente, validez firma electrónica México, firma electrónica con KYC",
  openGraph: {
    title: "Firma Electrónica en México | JAAK",
    description:
      "Firma electrónica con validez legal, biometría y NOM-151. La solución más completa para empresas reguladas en México.",
    url: "https://jaak.ai/plataforma/firma-electronica",
    type: "website",
    locale: "es_MX",
  },
  alternates: {
    canonical: "https://jaak.ai/firma-electronica",
  },
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "¿La firma electrónica es legal en México?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Sí. La firma electrónica tiene plena validez legal en México conforme al Código de Comercio (artículos 89 al 114) y la Ley Federal de Firma Electrónica Avanzada (LFEA). La firma con certificación NOM-151 agrega un sello de tiempo certificado que fortalece su valor probatorio.",
      },
    },
    {
      "@type": "Question",
      name: "¿Qué es la NOM-151?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "La NOM-151 (Norma Oficial Mexicana NOM-151-SCFI-2016) establece los requisitos para la conservación de mensajes de datos y digitalización de documentos. Un sello de tiempo NOM-151 garantiza la integridad del documento y la fecha exacta de firma.",
      },
    },
    {
      "@type": "Question",
      name: "¿Qué diferencia hay entre firma simple y firma avanzada?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "La firma simple es básica, sin verificación de identidad. La firma avanzada (con NOM-151, biometría o KYC) incluye verificación de identidad, sello de tiempo certificado y generación de evidencia que permite defender la firma en auditorías o procesos legales.",
      },
    },
    {
      "@type": "Question",
      name: "¿Tiene validez ante el SAT?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Para contratos comerciales y financieros, la firma con NOM-151 tiene plena validez ante autoridades fiscales como respaldo de operaciones. Para trámites fiscales directos se requiere la e.firma (FIEL) del SAT.",
      },
    },
    {
      "@type": "Question",
      name: "¿Cumple con los requisitos de la CNBV y la LFPIORPI?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Sí. La solución Firma + KYC de JAAK cumple con requisitos de identificación de la CNBV, la LFPIORPI y las Disposiciones en materia de PLD/FT, incluyendo validación de INE/pasaporte, CURP, listas de control y generación del expediente de identificación.",
      },
    },
  ],
};

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  name: "JAAK Firma Electrónica",
  applicationCategory: "BusinessApplication",
  operatingSystem: "Web, iOS, Android",
  description:
    "Plataforma de firma electrónica con NOM-151, biometría facial, KYC completo y expediente digital auditable para empresas en México.",
  offers: {
    "@type": "Offer",
    priceCurrency: "MXN",
    url: "https://jaak.ai/firma-electronica",
  },
  provider: {
    "@type": "Organization",
    name: "JAAK",
    url: "https://jaak.ai",
  },
  featureList: [
    "Firma electrónica simple",
    "Firma con NOM-151 certificado",
    "Firma biométrica con liveness",
    "Firma + KYC completo",
    "Expediente digital auditable",
    "Personalizable con marca propia",
  ],
};

export default function FirmaElectronica() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
      <Header />
      <FirmaThemeShell />
      <Footer />
    </>
  );
}
