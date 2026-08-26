import type { Metadata } from "next";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ScrollReveal from "@/components/ScrollReveal";
import ConsultasOficialesPageView from "@/components/ConsultasOficialesPageView";
import ConsultasOficialesHero from "@/components/ConsultasOficialesHero";
import ConsultasOficialesProblem from "@/components/ConsultasOficialesProblem";
import ConsultasOficialesProductGrid from "@/components/ConsultasOficialesProductGrid";
import ConsultasOficialesModularity from "@/components/ConsultasOficialesModularity";
import ConsultasOficialesUseCases from "@/components/ConsultasOficialesUseCases";
import ConsultasOficialesEvidence from "@/components/ConsultasOficialesEvidence";
import ConsultasOficialesIntegration from "@/components/ConsultasOficialesIntegration";
import ConsultasOficialesEcosystem from "@/components/ConsultasOficialesEcosystem";
import ConsultasOficialesFAQ from "@/components/ConsultasOficialesFAQ";
import { consultasOficialesFaqItems } from "@/lib/consultasOficialesFaq";

const CANONICAL_URL = "https://jaak.ai/consultas-oficiales";

export const metadata: Metadata = {
  title: "Consultas Oficiales API: INE, CURP, RFC y AML | JAAK",
  description:
    "Valida CURP, INE, RFC y listas de cumplimiento mediante las Consultas Oficiales JAAK. Integra validaciones puntuales vía API sin ejecutar un KYC completo.",
  keywords: [
    "consultas oficiales API",
    "validar CURP",
    "API CURP",
    "RENAPO API",
    "validar INE",
    "API INE",
    "validación identidad México",
    "consulta RENAPO",
    "consulta INE",
    "listas AML API",
    "KYC API México",
  ],
  openGraph: {
    type: "website",
    locale: "es_MX",
    url: CANONICAL_URL,
    siteName: "JAAK",
    title: "Consultas Oficiales API: INE, CURP, RFC y AML | JAAK",
    description:
      "Valida CURP, INE, RFC y listas de cumplimiento mediante las Consultas Oficiales JAAK. Integra validaciones puntuales vía API sin ejecutar un KYC completo.",
    images: [
      {
        url: "/images/logos/jaak-logo-azul.png",
        width: 800,
        height: 400,
        alt: "JAAK — Consultas Oficiales",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Consultas Oficiales API: INE, CURP, RFC y AML | JAAK",
    description:
      "Valida CURP, INE, RFC y listas de cumplimiento vía API sin ejecutar un KYC completo.",
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
      name: "Consultas Oficiales API: INE, CURP, RFC y AML | JAAK",
      description:
        "Valida CURP, INE, RFC y listas de cumplimiento mediante las Consultas Oficiales JAAK. Integra validaciones puntuales vía API sin ejecutar un KYC completo.",
      inLanguage: "es-MX",
      isPartOf: { "@id": "https://jaak.ai/#website" },
      dateModified: "2026-08-07",
    },
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Inicio", item: "https://jaak.ai" },
        { "@type": "ListItem", position: 2, name: "Consultas oficiales", item: CANONICAL_URL },
      ],
    },
    {
      "@type": "SoftwareApplication",
      name: "Consultas Oficiales JAAK",
      applicationCategory: "BusinessApplication",
      operatingSystem: "Web",
      description:
        "APIs para validar datos puntuales de identidad y cumplimiento contra fuentes oficiales mexicanas — CURP/RENAPO, INE, RFC/SAT y listas PLD/AML — sin ejecutar un flujo KYC completo.",
      provider: { "@id": "https://jaak.ai/#organization" },
      url: CANONICAL_URL,
    },
    {
      "@type": "FAQPage",
      mainEntity: consultasOficialesFaqItems.map((item) => ({
        "@type": "Question",
        name: item.question,
        acceptedAnswer: { "@type": "Answer", text: item.answer },
      })),
    },
  ],
};

export default function ConsultasOficialesPage() {
  return (
    <>
      <ScrollReveal />
      <ConsultasOficialesPageView />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Header />
      <main>
        <ConsultasOficialesHero />
        <ConsultasOficialesProblem />
        <ConsultasOficialesProductGrid />
        <ConsultasOficialesModularity />
        <ConsultasOficialesUseCases />
        <ConsultasOficialesEvidence />
        <ConsultasOficialesIntegration />
        <ConsultasOficialesEcosystem />
        <ConsultasOficialesFAQ />

        {/* CTA final */}
        <section id="cta-final" className="py-20 text-center" style={{ background: "#02132D" }} aria-labelledby="cta-final-heading">
          <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
            <span className="text-[#1ECAD3] text-xs sm:text-sm font-bold tracking-wide">
              CONSULTAS OFICIALES JAAK
            </span>
            <h2 id="cta-final-heading" className="text-3xl md:text-4xl font-black text-white mt-4 mb-4">
              Valida el dato. Después decide.
            </h2>
            <p className="text-white/70 mb-10">
              Empieza con una consulta puntual o construye un proceso completo de verificación de identidad
              con JAAK.
            </p>
            <div className="flex flex-wrap justify-center gap-4 mb-8">
              <Link
                href="/autoservicio"
                data-cta="probar-consulta"
                data-source="cta_final"
                className="px-6 py-3.5 min-h-[48px] flex items-center bg-[#1ECAD3] text-[#02132D] font-bold rounded-lg hover:bg-[#17b5bd] transition-all"
              >
                Probar una consulta
              </Link>
              <Link
                href="/contacto"
                data-cta="hablar-especialista"
                data-source="cta_final"
                className="px-6 py-3.5 min-h-[48px] flex items-center bg-white/10 border border-white/20 text-white font-semibold rounded-lg hover:bg-white/20 transition-all"
              >
                Hablar con un especialista
              </Link>
            </div>
            <Link href="/docs/consultas-oficiales" data-cta="ver-documentacion" data-source="cta_final" className="text-sm text-white/50 hover:text-white/80 underline underline-offset-2">
              Ver documentación API →
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
