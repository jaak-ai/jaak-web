import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import GuiaHero from "@/components/guia-captura-kyc/GuiaHero";
import GuiaChecklist from "@/components/guia-captura-kyc/GuiaChecklist";
import GuiaStageSelector from "@/components/guia-captura-kyc/GuiaStageSelector";
import GuiaDocumentSection from "@/components/guia-captura-kyc/GuiaDocumentSection";
import GuiaFaceSection from "@/components/guia-captura-kyc/GuiaFaceSection";
import GuiaLivenessSection from "@/components/guia-captura-kyc/GuiaLivenessSection";
import GuiaErrorDiagnosis from "@/components/guia-captura-kyc/GuiaErrorDiagnosis";
import GuiaTechnicalIssues from "@/components/guia-captura-kyc/GuiaTechnicalIssues";
import GuiaStandardsReference from "@/components/guia-captura-kyc/GuiaStandardsReference";
import GuiaFaq from "@/components/guia-captura-kyc/GuiaFaq";
import GuiaSupportCta from "@/components/guia-captura-kyc/GuiaSupportCta";
import GuiaVideoComingSoon from "@/components/guia-captura-kyc/GuiaVideoComingSoon";
import { guiaBreadcrumbSchema, guiaFaqSchema, guiaHowToSchema } from "./schema";

const CANONICAL_URL = "https://jaak.ai/guia-captura-kyc";
const OG_IMAGE = "https://jaak.ai/images/guia-captura-kyc/hero-guia-captura-kyc.jpg";

export const metadata: Metadata = {
  title: "Cómo realizar una verificación KYC correctamente",
  description:
    "Guía visual para capturar correctamente una identificación y el rostro durante una verificación KYC. Aprende a corregir iluminación, encuadre, reflejos y postura.",
  keywords: [
    "verificación KYC",
    "cómo hacer una verificación de identidad",
    "captura de documento KYC",
    "captura facial KYC",
    "prueba de vida liveness",
    "por qué se rechaza una verificación KYC",
  ],
  alternates: { canonical: CANONICAL_URL },
  openGraph: {
    type: "article",
    locale: "es_MX",
    url: CANONICAL_URL,
    siteName: "JAAK",
    title: "Cómo realizar una verificación KYC correctamente | JAAK",
    description:
      "Guía visual para capturar correctamente una identificación y el rostro durante una verificación KYC. Aprende a corregir iluminación, encuadre, reflejos y postura.",
    images: [{ url: OG_IMAGE, width: 1200, height: 675, alt: "Guía de captura KYC — JAAK" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Cómo realizar una verificación KYC correctamente | JAAK",
    description:
      "Guía visual para capturar correctamente una identificación y el rostro durante una verificación KYC.",
    images: [OG_IMAGE],
  },
};

export default function GuiaCapturaKycPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify([guiaBreadcrumbSchema, guiaFaqSchema, guiaHowToSchema]) }}
      />
      <Header />
      <main>
        <GuiaHero />
        <GuiaChecklist />
        <GuiaStageSelector />
        <GuiaDocumentSection />
        <GuiaFaceSection />
        <GuiaLivenessSection />
        <GuiaErrorDiagnosis />
        <GuiaTechnicalIssues />
        <GuiaStandardsReference />
        <GuiaFaq />
        <GuiaSupportCta />
        <GuiaVideoComingSoon />
      </main>
      <Footer />
    </>
  );
}
