import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ScrollReveal from "@/components/ScrollReveal";
import RiskListsHero from "@/components/RiskListsHero";
import RiskListsProblem from "@/components/RiskListsProblem";
import RiskSourceExplorer from "@/components/RiskSourceExplorer";
import MatchTypeExplanation from "@/components/MatchTypeExplanation";
import ScreeningWorkflow from "@/components/ScreeningWorkflow";
import KycScreeningComparison from "@/components/KycScreeningComparison";
import ScreeningResultMockup from "@/components/ScreeningResultMockup";
import RiskUseCasesGrid from "@/components/RiskUseCasesGrid";
import RiskListsBenefits from "@/components/RiskListsBenefits";
import EbookLeadMagnet from "@/components/EbookLeadMagnet";
import RiskListsFAQ from "@/components/RiskListsFAQ";
import MobileStickyCTA from "@/components/MobileStickyCTA";
import RiskListsPageView from "@/components/RiskListsPageView";
import { riskListsFaqItems } from "@/lib/riskListsFaq";
import { SCHEDULE_DEMO_URL } from "@/lib/scheduling";

const CANONICAL_URL = "https://jaak.ai/listas-de-riesgo-pld-aml";

export const metadata: Metadata = {
  title: "Listas de riesgo PLD/AML: más de 40 fuentes | JAAK",
  description:
    "Consulta personas y empresas contra más de 40 fuentes de sanciones, PEP, riesgo fiscal y alertas. Integra listas de riesgo con KYC y expediente digital.",
  keywords: [
    "listas de riesgo PLD",
    "listas de riesgo AML",
    "consulta de listas de riesgo",
    "screening AML",
    "consulta OFAC",
    "consulta PEP",
    "personas políticamente expuestas",
    "riesgo fiscal SAT",
    "prevención de lavado de dinero",
    "screening de clientes",
    "onboarding con listas de riesgo",
    "KYC y listas de riesgo",
  ],
  openGraph: {
    type: "website",
    locale: "es_MX",
    url: CANONICAL_URL,
    siteName: "JAAK",
    title: "Listas de riesgo PLD/AML: más de 40 fuentes | JAAK",
    description:
      "Consulta personas y empresas contra más de 40 fuentes de sanciones, PEP, riesgo fiscal y alertas regulatorias. Integra con KYC y expediente digital.",
    images: [
      {
        url: "/images/logos/jaak-logo-azul.png",
        width: 800,
        height: 400,
        alt: "JAAK — Listas de riesgo PLD/AML",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Listas de riesgo PLD/AML: más de 40 fuentes | JAAK",
    description: "Consulta personas y empresas contra más de 40 fuentes de sanciones, PEP, riesgo fiscal y alertas.",
    images: ["/images/logos/jaak-logo-azul.png"],
  },
  alternates: {
    canonical: CANONICAL_URL,
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebPage",
      "@id": `${CANONICAL_URL}#webpage`,
      url: CANONICAL_URL,
      name: "Listas de riesgo PLD/AML: más de 40 fuentes | JAAK",
      description:
        "Consulta personas y empresas contra más de 40 fuentes de sanciones, PEP, riesgo fiscal y alertas. Integra listas de riesgo con KYC y expediente digital.",
      inLanguage: "es-MX",
      isPartOf: { "@id": "https://jaak.ai/#website" },
      dateModified: "2026-07-28",
    },
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Inicio", item: "https://jaak.ai" },
        { "@type": "ListItem", position: 2, name: "Cumplimiento", item: "https://jaak.ai/cumplimiento" },
        { "@type": "ListItem", position: 3, name: "Listas de riesgo PLD/AML", item: CANONICAL_URL },
      ],
    },
    {
      "@type": "Service",
      name: "Consulta de listas de riesgo PLD/AML/FT",
      alternateName: "Screening AML",
      description:
        "Consulta de personas y empresas contra fuentes nacionales e internacionales de sanciones, PEP, riesgo fiscal, alertas regulatorias, personas buscadas y registros preventivos.",
      serviceType: "Consulta de listas de riesgo / Screening AML",
      areaServed: { "@type": "Country", name: "México", identifier: "MX" },
      provider: { "@id": "https://jaak.ai/#organization" },
      url: CANONICAL_URL,
    },
    {
      "@type": "FAQPage",
      mainEntity: riskListsFaqItems.map((item) => ({
        "@type": "Question",
        name: item.question,
        acceptedAnswer: { "@type": "Answer", text: item.answer },
      })),
    },
  ],
};

export default function ListasDeRiesgoPldAmlPage() {
  return (
    <>
      <ScrollReveal />
      <RiskListsPageView />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Header />
      <main>
        <RiskListsHero />
        <RiskListsProblem />
        <RiskSourceExplorer />
        <MatchTypeExplanation />
        <ScreeningWorkflow />
        <KycScreeningComparison />
        <ScreeningResultMockup />
        <RiskUseCasesGrid />
        <RiskListsBenefits />
        <EbookLeadMagnet />
        <RiskListsFAQ />

        {/* Aclaraciones legales obligatorias — ver brief de la landing.
            TODO: VALIDACIÓN LEGAL — revisar este bloque con el equipo jurídico antes de campañas pagadas. */}
        <section className="py-10 bg-gray-50 border-t border-gray-100">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <p className="text-xs text-gray-500 leading-relaxed">
              Una coincidencia no representa automáticamente una identidad confirmada. Una coincidencia PEP no
              implica delito. Las fuentes tienen naturalezas jurídicas distintas y el resultado requiere
              análisis según las políticas de cada organización. La disponibilidad de las fuentes puede variar
              conforme a la actualización y disponibilidad de cada autoridad emisora. Este contenido tiene
              fines informativos y no constituye asesoría legal, fiscal o de cumplimiento.
            </p>
          </div>
        </section>

        {/* CTA final */}
        <section id="cta-final" className="py-20 bg-[#202945] text-center" aria-labelledby="cta-final-heading">
          <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 id="cta-final-heading" className="text-3xl md:text-4xl font-black text-white mb-4">
              Antes de iniciar una relación comercial, conoce las señales
            </h2>
            <p className="text-white/70 mb-10">
              Integra identidad, consulta de listas de riesgo y trazabilidad en un mismo proceso de onboarding.
            </p>
            <div className="flex flex-wrap justify-center gap-4 mb-10">
              <a
                href={SCHEDULE_DEMO_URL}
                target="_blank"
                rel="noopener noreferrer"
                data-cta="agendar-demo"
                data-source="final_cta"
                className="px-6 py-3.5 min-h-[48px] flex items-center bg-[#1ECAD3] text-[#202945] font-bold rounded-lg hover:bg-[#17b5bd] transition-all"
              >
                Agendar demo
              </a>
              <a
                href="#ebook"
                data-cta="descargar-guia"
                data-source="final_cta"
                className="px-6 py-3.5 min-h-[48px] flex items-center bg-white/10 border border-white/20 text-white font-semibold rounded-lg hover:bg-white/20 transition-all"
              >
                Descargar guía 2026
              </a>
            </div>
            <p className="text-lg font-bold text-white/90">
              Una consulta detecta. <span className="text-[#1ECAD3]">Un expediente demuestra.</span>
            </p>
          </div>
        </section>
      </main>
      <Footer />
      <MobileStickyCTA />
    </>
  );
}
