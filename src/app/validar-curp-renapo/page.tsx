import type { Metadata } from "next";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ScrollReveal from "@/components/ScrollReveal";
import CurpPageView from "@/components/CurpPageView";
import CurpHero from "@/components/CurpHero";
import CurpFormatVsRenapo from "@/components/CurpFormatVsRenapo";
import CurpDataGrid from "@/components/CurpDataGrid";
import CurpFlow from "@/components/CurpFlow";
import CurpApiExample from "@/components/CurpApiExample";
import CurpUseCases from "@/components/CurpUseCases";
import CurpVsKyc from "@/components/CurpVsKyc";
import CurpLayers from "@/components/CurpLayers";
import CurpDevelopers from "@/components/CurpDevelopers";
import CurpFAQ from "@/components/CurpFAQ";
import { curpFaqItems } from "@/lib/curpFaq";

const CANONICAL_URL = "https://jaak.ai/validar-curp-renapo";

export const metadata: Metadata = {
  title: "Validar CURP contra RENAPO vía API | JAAK",
  description:
    "Valida CURP contra RENAPO vía API con JAAK. Confirma existencia, estatus y datos asociados e integra el resultado directamente en tus procesos.",
  keywords: [
    "validar CURP",
    "API CURP",
    "validar CURP RENAPO",
    "API RENAPO",
    "consulta CURP",
    "consultar CURP API",
    "validación CURP empresas",
    "verificar CURP",
    "RENAPO API México",
    "cómo validar CURP vía API",
    "validar CURP de clientes",
    "consulta RENAPO para empresas",
    "validación CURP KYC",
    "integrar RENAPO API",
  ],
  openGraph: {
    type: "website",
    locale: "es_MX",
    url: CANONICAL_URL,
    siteName: "JAAK",
    title: "Validar CURP contra RENAPO vía API | JAAK",
    description:
      "Valida CURP contra RENAPO vía API con JAAK. Confirma existencia, estatus y datos asociados e integra el resultado directamente en tus procesos.",
    images: [
      {
        url: "/images/logos/jaak-logo-azul.png",
        width: 800,
        height: 400,
        alt: "JAAK — Validación CURP RENAPO",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Validar CURP contra RENAPO vía API | JAAK",
    description: "Valida CURP contra RENAPO vía API con JAAK. Resultado estructurado listo para integrar.",
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
      name: "Validar CURP contra RENAPO vía API | JAAK",
      description:
        "Valida CURP contra RENAPO vía API con JAAK. Confirma existencia, estatus y datos asociados e integra el resultado directamente en tus procesos.",
      inLanguage: "es-MX",
      isPartOf: { "@id": "https://jaak.ai/#website" },
      dateModified: "2026-08-07",
    },
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Inicio", item: "https://jaak.ai" },
        { "@type": "ListItem", position: 2, name: "Consultas oficiales", item: "https://jaak.ai/consultas-oficiales" },
        { "@type": "ListItem", position: 3, name: "Validar CURP contra RENAPO", item: CANONICAL_URL },
      ],
    },
    {
      "@type": "Service",
      name: "Validación de CURP contra RENAPO",
      description:
        "Consulta que valida la existencia y estatus de una CURP contra el Registro Nacional de Población (RENAPO) y devuelve un resultado estructurado.",
      serviceType: "Validación de identidad / Consulta oficial",
      areaServed: { "@type": "Country", name: "México", identifier: "MX" },
      provider: { "@id": "https://jaak.ai/#organization" },
      url: CANONICAL_URL,
    },
    {
      "@type": "FAQPage",
      mainEntity: curpFaqItems.map((item) => ({
        "@type": "Question",
        name: item.question,
        acceptedAnswer: { "@type": "Answer", text: item.answer },
      })),
    },
  ],
};

export default function ValidarCurpRenapoPage() {
  return (
    <>
      <ScrollReveal />
      <CurpPageView />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Header />
      <main>
        <CurpHero />
        <CurpFormatVsRenapo />
        <CurpDataGrid />
        <CurpFlow />
        <CurpApiExample />
        <CurpUseCases />
        <CurpVsKyc />
        <CurpLayers />
        <CurpDevelopers />
        <CurpFAQ />

        {/* CTA final */}
        <section className="py-20 text-center" style={{ background: "#02132D" }} aria-labelledby="curp-cta-final-heading">
          <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
            <span className="text-[#1ECAD3] text-xs sm:text-sm font-bold tracking-wide">API CURP · JAAK</span>
            <h2 id="curp-cta-final-heading" className="text-3xl md:text-4xl font-black text-white mt-4 mb-4">
              Valida la CURP antes de utilizarla.
            </h2>
            <p className="text-white/70 mb-10">
              Integra una consulta puntual o combínala con otras capas de identidad dentro del ecosistema JAAK.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link
                href="/autoservicio"
                data-cta="probar-curp"
                data-source="cta_final"
                className="px-6 py-3.5 min-h-[48px] flex items-center bg-[#1ECAD3] text-[#02132D] font-bold rounded-lg hover:bg-[#17b5bd] transition-all"
              >
                Probar validación CURP
              </Link>
              <Link
                href="/contacto"
                data-cta="curp_contacto"
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
