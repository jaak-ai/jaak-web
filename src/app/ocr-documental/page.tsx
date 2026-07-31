import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import OcrHero from "@/components/ocr/OcrHero";
import OcrSelector from "@/components/ocr/OcrSelector";
import OcrDifferentiation from "@/components/ocr/OcrDifferentiation";
import OcrProductSection from "@/components/ocr/OcrProductSection";
import OcrUseCases from "@/components/ocr/OcrUseCases";
import OcrHowItWorks from "@/components/ocr/OcrHowItWorks";
import OcrPackages from "@/components/ocr/OcrPackages";
import OcrComparator from "@/components/ocr/OcrComparator";
import OcrApiForm from "@/components/ocr/OcrApiForm";
import OcrFaq, { OCR_FAQ } from "@/components/ocr/OcrFaq";
import OcrFinalCta from "@/components/ocr/OcrFinalCta";

const CANONICAL_URL = "https://jaak.ai/ocr-documental";
const LOGO = "https://jaak.ai/images/logos/jaak-logo-azul.png";

export const metadata: Metadata = {
  title: "OCR Documental para Identificaciones y Documentos | JAAK",
  description:
    "Extrae información estructurada de identificaciones oficiales y documentos empresariales con OCR de JAAK. Autoservicio o integración por API.",
  keywords: [
    "OCR documental",
    "OCR para identificaciones",
    "OCR INE",
    "extracción de datos de documentos",
    "OCR para PDF",
    "lectura de documentos por API",
    "extracción de actas constitutivas",
    "OCR constancia de situación fiscal",
    "API OCR México",
  ],
  alternates: { canonical: CANONICAL_URL },
  openGraph: {
    type: "website",
    locale: "es_MX",
    url: CANONICAL_URL,
    siteName: "JAAK",
    title: "OCR Documental para Identificaciones y Documentos | JAAK",
    description:
      "Extrae información estructurada de identificaciones oficiales y documentos empresariales con OCR de JAAK. Autoservicio o integración por API.",
    images: [{ url: LOGO, width: 800, height: 400, alt: "OCR Documental JAAK" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "OCR Documental para Identificaciones y Documentos | JAAK",
    description:
      "Extrae información estructurada de identificaciones oficiales y documentos empresariales con OCR de JAAK.",
    images: [LOGO],
  },
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Inicio", item: "https://jaak.ai" },
    { "@type": "ListItem", position: 2, name: "OCR Documental", item: CANONICAL_URL },
  ],
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: OCR_FAQ.map((item) => ({
    "@type": "Question",
    name: item.q,
    acceptedAnswer: { "@type": "Answer", text: item.a },
  })),
};

export default function OcrDocumentalPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify([breadcrumbSchema, faqSchema]) }}
      />
      <Header />
      <main>
        <OcrHero />
        <OcrSelector />
        <OcrDifferentiation />
        <OcrProductSection
          productId="ocr-id"
          sectionId="producto-ocr-id"
          kicker="Identificación oficial"
          docHref="/docs/productos/document-ocr"
          docLabel="Documentación técnica: Document OCR"
          noIncluye="No incluye por sí solo: consulta contra INE/RENAPO, comparación biométrica ni prueba de vida. Se combina con esos productos cuando el proceso lo requiere."
        />
        <OcrProductSection
          productId="ocr-inteligente"
          sectionId="producto-ocr-inteligente"
          kicker="Documentos y expedientes"
          docHref="/docs/integraciones/extraccion-pdf-ocr"
          docLabel="Documentación técnica: Extracción de PDF con OCR"
          noIncluye="Contratos y documentos notariales están soportados dentro del catálogo de +500 tipos de documento, sin garantía de cobertura del 100% de formatos."
          altBg
        />
        <OcrUseCases />
        <OcrHowItWorks />
        <OcrPackages />
        <OcrComparator />
        <OcrApiForm />
        <OcrFaq />
        <OcrFinalCta />
      </main>
      <Footer />
    </>
  );
}
