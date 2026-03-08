import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import KYBClient from "./KYBClient";

export const metadata: Metadata = {
  title: "Verificación Empresarial KYB – Due Diligence Automatizado | JAAK",
  description:
    "KYB automatizado para personas morales en México. Valida actas constitutivas, consulta SAT y RFC, identifica beneficiarios finales y cruza listas OFAC, INTERPOL y SAT 69B. Cumple LFPIORPI y CNBV.",
  keywords: [
    "KYB",
    "verificación empresarial",
    "due diligence",
    "beneficiarios finales",
    "personas morales",
    "SAT 69B",
    "OFAC",
    "INTERPOL",
    "listas restrictivas",
    "LFPIORPI",
    "CNBV",
    "onboarding corporativo",
    "actas constitutivas",
    "RFC validación",
    "compliance México",
  ],
  openGraph: {
    title: "Verificación Empresarial KYB – Due Diligence Automatizado | JAAK",
    description:
      "Verifica personas morales en minutos. Actas constitutivas, SAT, beneficiarios finales y listas restrictivas. Cumple LFPIORPI y CNBV.",
    url: "https://jaak.ai/plataforma/verificacion-empresarial",
    type: "website",
  },
  alternates: {
    canonical: "https://jaak.ai/plataforma/verificacion-empresarial",
  },
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "¿Qué es KYB y por qué lo necesito?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "KYB (Know Your Business) es el proceso de verificación de personas morales. Es obligatorio para entidades reguladas por LFPIORPI, CNBV y UIF en México. JAAK automatiza todo el proceso: actas constitutivas, SAT, beneficiarios finales y listas restrictivas.",
      },
    },
    {
      "@type": "Question",
      name: "¿Qué listas restrictivas consulta JAAK KYB?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "JAAK consulta 3 listas en tiempo real: OFAC (SDN List) para sanciones internacionales, INTERPOL (Red Notices) para personas buscadas por delitos graves, y SAT Lista 69B para empresas con operaciones fiscales simuladas en México.",
      },
    },
    {
      "@type": "Question",
      name: "¿Cuánto tarda la verificación empresarial con JAAK?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "El proceso completo de verificación empresarial toma menos de 15 minutos, comparado con los 3 a 10 días hábiles que toma el due diligence manual tradicional.",
      },
    },
    {
      "@type": "Question",
      name: "¿JAAK KYB cumple con LFPIORPI y CNBV?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Sí. JAAK KYB está diseñado para cumplir con LFPIORPI Art. 17 (identificación de beneficiarios finales), CUB CNBV (due diligence de personas morales), UIF (evidencia auditable) y recomendaciones GAFI/FATF.",
      },
    },
    {
      "@type": "Question",
      name: "¿Qué tecnologías usa JAAK para la verificación empresarial?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "JAAK combina OCR inteligente para extracción de documentos, biometría facial certificada iBeta Nivel 2, screening simultáneo en OFAC/INTERPOL/SAT 69B, expediente digital con hash de integridad, API unificada REST y monitoreo continuo post-onboarding.",
      },
    },
  ],
};

const productSchema = {
  "@context": "https://schema.org",
  "@type": "Product",
  name: "JAAK KYB – Verificación Empresarial Automatizada",
  description:
    "Solución de due diligence automatizado para personas morales. Verifica actas constitutivas, consulta SAT, identifica beneficiarios finales y cruza listas OFAC, INTERPOL y SAT 69B.",
  brand: { "@type": "Brand", name: "JAAK" },
  category: "RegTech / Compliance",
  audience: {
    "@type": "Audience",
    audienceType:
      "Instituciones financieras, fintechs, actividades vulnerables LFPIORPI, marketplaces, proptech, aseguradoras",
  },
};

export default function VerificacionEmpresarial() {
  return (
    <>
      <Header />
      <main>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(productSchema) }}
        />
        <KYBClient />
      </main>
      <Footer />
    </>
  );
}
