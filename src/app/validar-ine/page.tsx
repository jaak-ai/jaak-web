import type { Metadata } from "next";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ScrollReveal from "@/components/ScrollReveal";
import InePageView from "@/components/InePageView";
import IneHero from "@/components/IneHero";
import IneOcrVsKyc from "@/components/IneOcrVsKyc";
import IneDataGrid from "@/components/IneDataGrid";
import IneVsKyc from "@/components/IneVsKyc";
import IneFlow from "@/components/IneFlow";
import IneUseCases from "@/components/IneUseCases";
import IneCurpCrossSell from "@/components/IneCurpCrossSell";
import IneLayers from "@/components/IneLayers";
import IneApi from "@/components/IneApi";
import InePrivacy from "@/components/InePrivacy";
import IneFAQ from "@/components/IneFAQ";
import { ineFaqItems } from "@/lib/ineFaq";

const CANONICAL_URL = "https://jaak.ai/validar-ine";

export const metadata: Metadata = {
  title: "Validar INE vía API para empresas | JAAK",
  description:
    "Integra validación de credencial INE vía API con JAAK. Agrega la consulta a tus procesos y combínala con CURP, AML o KYC cuando necesites más capas.",
  keywords: [
    "validar INE",
    "API INE",
    "validación INE",
    "verificar INE",
    "API validación INE",
    "validar credencial INE",
    "consulta INE",
    "verificación credencial para votar",
    "validación identidad México",
    "INE KYC",
    "cómo validar una INE por API",
    "validar INE empresas",
    "validación INE para onboarding",
    "validar INE y CURP",
  ],
  openGraph: {
    type: "website",
    locale: "es_MX",
    url: CANONICAL_URL,
    siteName: "JAAK",
    title: "Validar INE vía API para empresas | JAAK",
    description:
      "Integra validación de credencial INE vía API con JAAK. Agrega la consulta a tus procesos y combínala con CURP, AML o KYC cuando necesites más capas.",
    images: [
      {
        url: "/images/logos/jaak-logo-azul.png",
        width: 800,
        height: 400,
        alt: "JAAK — Validación INE",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Validar INE vía API para empresas | JAAK",
    description: "Integra validación de credencial INE vía API con JAAK.",
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
      name: "Validar INE vía API para empresas | JAAK",
      description:
        "Integra validación de credencial INE vía API con JAAK. Agrega la consulta a tus procesos y combínala con CURP, AML o KYC cuando necesites más capas.",
      inLanguage: "es-MX",
      isPartOf: { "@id": "https://jaak.ai/#website" },
      dateModified: "2026-08-07",
    },
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Inicio", item: "https://jaak.ai" },
        { "@type": "ListItem", position: 2, name: "Consultas oficiales", item: "https://jaak.ai/consultas-oficiales" },
        { "@type": "ListItem", position: 3, name: "Validar INE", item: CANONICAL_URL },
      ],
    },
    {
      "@type": "Service",
      name: "Validación de credencial INE",
      description:
        "Consulta que valida la imagen de una credencial INE contra el padrón electoral del Instituto Nacional Electoral y devuelve un resultado estructurado.",
      serviceType: "Validación de identidad / Consulta oficial",
      areaServed: { "@type": "Country", name: "México", identifier: "MX" },
      provider: { "@id": "https://jaak.ai/#organization" },
      url: CANONICAL_URL,
    },
    {
      "@type": "FAQPage",
      mainEntity: ineFaqItems.map((item) => ({
        "@type": "Question",
        name: item.question,
        acceptedAnswer: { "@type": "Answer", text: item.answer },
      })),
    },
  ],
};

export default function ValidarInePage() {
  return (
    <>
      <ScrollReveal />
      <InePageView />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Header />
      <main>
        <IneHero />
        <IneOcrVsKyc />
        <IneDataGrid />
        <IneVsKyc />
        <IneFlow />
        <IneUseCases />
        <IneCurpCrossSell />
        <IneLayers />
        <IneApi />
        <InePrivacy />
        <IneFAQ />

        {/* CTA final */}
        <section className="py-20 text-center" style={{ background: "#02132D" }} aria-labelledby="ine-cta-final-heading">
          <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
            <span className="text-[#1ECAD3] text-xs sm:text-sm font-bold tracking-wide">VALIDACIÓN INE · JAAK</span>
            <h2 id="ine-cta-final-heading" className="text-3xl md:text-4xl font-black text-white mt-4 mb-4">
              Antes de confiar en el dato, valídalo.
            </h2>
            <p className="text-white/70 mb-10">
              Incorpora validación INE como una consulta puntual o combínala con CURP, AML y KYC dentro del
              ecosistema JAAK.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link
                href="/autoservicio"
                data-cta="probar-ine"
                data-source="cta_final"
                className="px-6 py-3.5 min-h-[48px] flex items-center bg-[#1ECAD3] text-[#02132D] font-bold rounded-lg hover:bg-[#17b5bd] transition-all"
              >
                Probar validación INE
              </Link>
              <Link
                href="/contacto"
                data-cta="ine_contacto"
                data-source="cta_final"
                className="px-6 py-3.5 min-h-[48px] flex items-center bg-white/10 border border-white/20 text-white font-semibold rounded-lg hover:bg-white/20 transition-all"
              >
                Hablar con un especialista
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
