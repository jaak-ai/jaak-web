import type { Metadata } from "next";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ScrollReveal from "@/components/ScrollReveal";
import FirmaComparisonTable from "@/components/FirmaComparisonTable";
import FirmaHowItWorks from "@/components/FirmaHowItWorks";
import FirmaDifferentiation from "@/components/FirmaDifferentiation";
import FirmaRiskChecklist from "@/components/FirmaRiskChecklist";
import FirmaUseCases from "@/components/FirmaUseCases";
import FirmaFAQ from "@/components/FirmaFAQ";
import FirmaSEMHandler from "@/components/FirmaSEMHandler";
import EvidenceLevelSelector from "@/components/EvidenceLevelSelector";
import SignatureRecommendationQuiz from "@/components/SignatureRecommendationQuiz";
import EvidenceFlow from "@/components/EvidenceFlow";

export const metadata: Metadata = {
  title: "Firma electrónica en México con e.firma, NOM-151 y biometría | JAAK",
  description:
    "Firma documentos digitales con JAAK usando firma simple, e.firma SAT, NOM-151, sello de tiempo, biometría, KYC y expediente auditable. Elige el nivel de evidencia que tu operación necesita.",
  keywords:
    "firma electrónica México, firma digital, firmar documentos online, firma electrónica legal México, NOM 151 firma electrónica, firma biométrica, firma con e.firma SAT, sello de tiempo firma electrónica, firma con verificación de identidad, firma electrónica con KYC",
  openGraph: {
    title: "Firma electrónica en México con e.firma, NOM-151 y biometría | JAAK",
    description:
      "Firma simple, e.firma SAT, NOM-151, sello de tiempo, biometría y KYC en un solo flujo, con expediente auditable. La solución más completa para empresas en México.",
    url: "https://jaak.ai/firma-electronica",
    type: "website",
    locale: "es_MX",
  },
  alternates: {
    canonical: "https://jaak.ai/firma-electronica",
  },
  robots: {
    index: true,
    follow: true,
  },
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "¿Qué diferencia hay entre firma simple, NOM-151, biométrica y e.firma?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "La firma simple permite capturar consentimiento. NOM-151 fortalece la conservación e integridad del documento conforme al marco mexicano. La firma biométrica vincula la firma con una prueba de identidad facial. La e.firma permite que el firmante use su certificado digital vigente del SAT dentro del flujo de firma.",
      },
    },
    {
      "@type": "Question",
      name: "¿JAAK emite e.firma SAT?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "No. JAAK permite integrar la firma con e.firma vigente del firmante dentro de un flujo digital auditable. La emisión, renovación y administración de la e.firma corresponde al firmante ante la autoridad correspondiente.",
      },
    },
    {
      "@type": "Question",
      name: "¿Qué diferencia hay entre sello de tiempo y NOM-151?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "El sello de tiempo registra una fecha y hora confiable asociada a un documento o evento. NOM-151 agrega una capa de conservación e integridad del mensaje de datos conforme al marco mexicano.",
      },
    },
    {
      "@type": "Question",
      name: "¿La e.firma sustituye al KYC?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "No necesariamente. La e.firma puede reforzar la autoría de la firma, pero si necesitas validar identidad documental, biometría, listas o riesgo del cliente, conviene usar KYC.",
      },
    },
    {
      "@type": "Question",
      name: "¿Cumple con los requisitos de la CNBV y la LFPIORPI?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Sí. La solución Firma Digital NOM-151 + KYC de JAAK está diseñada para respaldar los requisitos de identificación de la CNBV, la LFPIORPI y las Disposiciones en materia de PLD/FT, incluyendo validación de INE/pasaporte, CURP, listas de control y generación del expediente de identificación.",
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
    "Plataforma de firma electrónica con firma simple, e.firma SAT, NOM-151, sello de tiempo, biometría facial, KYC completo y expediente digital auditable para empresas en México.",
  offers: {
    "@type": "Offer",
    priceCurrency: "MXN",
    url: "https://jaak.ai/firma-electronica",
  },
  provider: {
    "@type": "Organization",
    name: "JAAK",
    url: "https://jaak.ai",
    sameAs: ["https://www.linkedin.com/company/jaak-ai"],
  },
  featureList: [
    "Firma electrónica simple",
    "Firma certificada con sello de tiempo",
    "Firma con NOM-151 certificado",
    "e.firma (SAT)",
    "Firma biométrica con liveness",
    "Firma Digital NOM-151 + KYC completo",
    "Expediente digital auditable",
    "API REST con webhooks",
  ],
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Inicio", item: "https://jaak.ai" },
    { "@type": "ListItem", position: 2, name: "Firma Electrónica", item: "https://jaak.ai/firma-electronica" },
  ],
};

const badges = ["Firma simple", "e.firma SAT", "NOM-151", "Sello de tiempo", "Biometría", "KYC", "API"];

export default function FirmaElectronicaPage() {
  return (
    <>
      <ScrollReveal />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <Header />
      <main>
        {/* ── HERO ──────────────────────────────────────────────── */}
        <section
          id="hero"
          className="relative pt-32 pb-20 overflow-hidden"
          style={{ background: "linear-gradient(135deg, #071426 0%, #0A1628 45%, #202945 100%)" }}
          aria-label="Firma electrónica en México con identidad, e.firma y evidencia certificada"
        >
          <div
            className="absolute inset-0 opacity-[0.03] pointer-events-none"
            aria-hidden="true"
            style={{
              backgroundImage: "linear-gradient(#1ECAD3 1px, transparent 1px), linear-gradient(90deg, #1ECAD3 1px, transparent 1px)",
              backgroundSize: "60px 60px",
            }}
          />
          <div className="absolute top-20 right-1/4 w-96 h-96 rounded-full opacity-10 blur-3xl pointer-events-none" aria-hidden="true" style={{ background: "#1ECAD3" }} />

          <div data-sr className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative text-center">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white leading-[1.1] mb-6">
              Firma electrónica en México con{" "}
              <span
                style={{
                  background: "linear-gradient(135deg, #1ECAD3, #2AD796)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
              >
                identidad, e.firma y evidencia certificada
              </span>
            </h1>

            <p className="text-lg text-gray-400 leading-relaxed mb-8 max-w-2xl mx-auto">
              Firma documentos con el nivel de evidencia que tu operación necesita: firma simple, e.firma SAT,
              NOM-151, biometría, KYC y sellos de tiempo en un expediente auditable.
            </p>

            <div className="flex flex-wrap justify-center gap-2.5 mb-9">
              {badges.map((badge) => (
                <span
                  key={badge}
                  className="px-3.5 py-1.5 rounded-full text-xs font-semibold"
                  style={{ background: "rgba(30,202,211,0.1)", border: "1px solid rgba(30,202,211,0.25)", color: "#1ECAD3" }}
                >
                  {badge}
                </span>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <Link
                href="/autoservicio"
                className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-xl font-bold text-white text-base transition-all hover:opacity-90 hover:scale-105"
                style={{ background: "linear-gradient(135deg, #1ECAD3, #17A8B0)", boxShadow: "0 0 30px rgba(30,202,211,0.35)" }}
              >
                Probar autoservicio
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
              <Link
                href="/contacto"
                className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-xl font-bold text-base transition-all hover:bg-white/10"
                style={{ background: "rgba(255,255,255,0.06)", border: "1px solid rgba(255,255,255,0.15)", color: "#E2E8F0" }}
              >
                Hablar con un experto
              </Link>
            </div>

            <p className="text-sm text-gray-500 mt-5">
              Desde documentos simples hasta contratos que requieren identidad, trazabilidad y evidencia defendible.
            </p>
          </div>
        </section>

        {/* ── NIVEL DE EVIDENCIA (interactivo) ─────────────────── */}
        <section id="niveles-evidencia" className="py-20" style={{ background: "#0A1628" }} aria-labelledby="niveles-heading">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <div data-sr className="text-center mb-10">
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-semibold mb-5" style={{ background: "rgba(30,202,211,0.08)", border: "1px solid rgba(30,202,211,0.2)", color: "#1ECAD3" }}>
                Niveles de evidencia
              </div>
              <h2 id="niveles-heading" className="text-3xl sm:text-4xl font-black text-white mb-4">
                Elige el nivel de evidencia correcto para cada documento
              </h2>
              <p className="text-gray-400 max-w-2xl mx-auto text-base">
                No todos los documentos necesitan la misma firma. Compara qué capa de evidencia necesitas según el
                riesgo, la identidad del firmante y el valor del contrato.
              </p>
            </div>
            <EvidenceLevelSelector />
          </div>
        </section>

        {/* ── QUIZ: ¿QUÉ FIRMA NECESITO? ────────────────────────── */}
        <section id="que-firma-necesito" className="py-20" style={{ background: "#070E1A" }} aria-labelledby="quiz-heading">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
            <div data-sr className="text-center mb-10">
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-semibold mb-5" style={{ background: "rgba(30,202,211,0.08)", border: "1px solid rgba(30,202,211,0.2)", color: "#1ECAD3" }}>
                Recomendador
              </div>
              <h2 id="quiz-heading" className="text-3xl sm:text-4xl font-black text-white mb-4">
                ¿Qué tipo de firma necesita tu documento?
              </h2>
              <p className="text-gray-400 max-w-2xl mx-auto text-base">
                Responde algunas preguntas y te mostramos una recomendación.
              </p>
            </div>
            <SignatureRecommendationQuiz />
          </div>
        </section>

        {/* ── FIRMA NO ES LO MISMO QUE EVIDENCIA ────────────────── */}
        <section id="evidencia" className="py-20" style={{ background: "#0A1628" }} aria-labelledby="diferenciacion-heading">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div data-sr className="text-center mb-10">
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-semibold mb-5" style={{ background: "rgba(30,202,211,0.08)", border: "1px solid rgba(30,202,211,0.2)", color: "#1ECAD3" }}>
                Diferenciación
              </div>
              <h2 id="diferenciacion-heading" className="text-3xl sm:text-4xl font-black text-white mb-4">
                Firma no es lo mismo que{" "}
                <span
                  style={{
                    background: "linear-gradient(135deg, #1ECAD3, #2AD796)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    backgroundClip: "text",
                  }}
                >
                  evidencia
                </span>
              </h2>
              <p className="text-gray-400 max-w-2xl mx-auto text-base">
                Una firma puede capturar consentimiento. Pero cuando el documento importa, también necesitas probar
                identidad, integridad y trazabilidad. Con JAAK puedes combinar estas capas en un solo flujo.
              </p>
            </div>
            <FirmaDifferentiation />
          </div>
        </section>

        {/* ── E.FIRMA SAT ────────────────────────────────────────── */}
        <section id="efirma" className="py-20" style={{ background: "#070E1A" }} aria-labelledby="efirma-heading">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <div data-sr className="text-center mb-10">
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-semibold mb-5" style={{ background: "rgba(59,130,246,0.1)", border: "1px solid rgba(59,130,246,0.25)", color: "#60A5FA" }}>
                Nueva capacidad
              </div>
              <h2 id="efirma-heading" className="text-3xl sm:text-4xl font-black text-white mb-4">
                e.firma (SAT) dentro de un flujo auditable
              </h2>
              <p className="text-gray-400 max-w-2xl mx-auto text-base">
                Permite que representantes legales, empresas o firmantes autorizados usen su e.firma vigente para
                firmar documentos electrónicos con mayor certeza de autoría y no repudio.
              </p>
            </div>
            <div data-sr-grid className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="rounded-2xl p-6" style={{ background: "rgba(59,130,246,0.06)", border: "1px solid rgba(59,130,246,0.2)" }}>
                <p className="text-xs font-bold uppercase tracking-wider mb-4" style={{ color: "#60A5FA" }}>Qué aporta</p>
                <ul className="space-y-3">
                  {[
                    "Uso del certificado digital vigente del firmante.",
                    "Mayor certeza sobre la autoría de la firma.",
                    "Ideal para contratos de alto valor.",
                    "Compatible con expedientes auditables.",
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-2.5 text-sm text-gray-300">
                      <svg className="w-4 h-4 mt-0.5 flex-shrink-0" viewBox="0 0 20 20" fill="currentColor" style={{ color: "#60A5FA" }} aria-hidden="true">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="rounded-2xl p-6" style={{ background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.08)" }}>
                <p className="text-xs font-bold uppercase tracking-wider mb-4 text-gray-500">Qué no sustituye</p>
                <ul className="space-y-3">
                  {[
                    "No sustituye automáticamente un proceso KYC cuando necesitas verificar identidad documental o biométrica.",
                    "No sustituye por sí sola la conservación NOM-151 si necesitas reforzar integridad probatoria en el tiempo.",
                    "No implica que JAAK emita la e.firma del SAT.",
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-2.5 text-sm text-gray-400">
                      <span className="mt-1.5 w-1 h-1 rounded-full flex-shrink-0 bg-gray-500" aria-hidden="true" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div className="text-center mt-8">
              <Link
                href="/firma-electronica-efirma"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl text-sm font-bold text-white transition-all hover:opacity-90 hover:scale-105"
                style={{ background: "#3B82F6" }}
              >
                Conocer firma con e.firma
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
            </div>
          </div>
        </section>

        {/* ── SELLO DE TIEMPO Y NOM-151 ──────────────────────────── */}
        <section id="sello-tiempo-nom151" className="py-20" style={{ background: "#0A1628" }} aria-labelledby="sello-heading">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div data-sr className="text-center mb-12">
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-semibold mb-5" style={{ background: "rgba(245,158,11,0.1)", border: "1px solid rgba(245,158,11,0.25)", color: "#F59E0B" }}>
                Evidencia certificada
              </div>
              <h2 id="sello-heading" className="text-3xl sm:text-4xl font-black text-white mb-4">
                Sello de tiempo y NOM-151: evidencia para defender el documento
              </h2>
              <p className="text-gray-400 max-w-2xl mx-auto text-base">
                Registra cuándo ocurrió la firma, conserva la integridad del documento y genera un expediente
                auditable.
              </p>
            </div>
            <EvidenceFlow />
            <div className="mt-10 text-center">
              <p className="text-sm text-gray-500 max-w-2xl mx-auto mb-6">
                El expediente puede incluir, cuando aplique: documento firmado, hash del documento, fecha y hora de
                eventos, sello digital de tiempo, constancia NOM-151, datos del firmante, evidencia biométrica,
                validación KYC, IP, dispositivo, metadatos y bitácora de eventos.
              </p>
              <Link
                href="/firma-certificada-sello-tiempo"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl text-sm font-bold text-white transition-all hover:opacity-90 hover:scale-105"
                style={{ background: "#F59E0B" }}
              >
                Conocer firma certificada
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
            </div>
          </div>
        </section>

        {/* ── COMPARISON TABLE ─────────────────────────────────── */}
        <section id="comparacion" className="py-20" style={{ background: "#070E1A" }} aria-labelledby="comparacion-heading">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div data-sr className="text-center mb-10">
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-semibold mb-5" style={{ background: "rgba(30,202,211,0.08)", border: "1px solid rgba(30,202,211,0.2)", color: "#1ECAD3" }}>
                Comparativa
              </div>
              <h2 id="comparacion-heading" className="text-3xl sm:text-4xl font-black text-white mb-4">
                Compara los 6 tipos de firma electrónica
              </h2>
              <p className="text-gray-400 max-w-2xl mx-auto text-base">
                Activa un filtro para resaltar los tipos de firma recomendados, o haz clic en cualquier fila para ver
                el detalle.
              </p>
            </div>
            <FirmaComparisonTable />
          </div>
        </section>

        {/* ── HOW IT WORKS ──────────────────────────────────────── */}
        <section id="como-funciona" className="py-20" style={{ background: "#0A1628" }} aria-labelledby="flujo-heading">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <div data-sr className="text-center mb-12">
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-semibold mb-5" style={{ background: "rgba(30,202,211,0.08)", border: "1px solid rgba(30,202,211,0.2)", color: "#1ECAD3" }}>
                Flujo de firma
              </div>
              <h2 id="flujo-heading" className="text-3xl sm:text-4xl font-black text-white mb-4">
                Cómo funciona
              </h2>
              <p className="text-gray-400 max-w-2xl mx-auto text-base">
                5 pasos desde que subes el documento hasta tener el expediente digital completo y auditable.
              </p>
            </div>
            <FirmaHowItWorks />
          </div>
        </section>

        {/* ── RISK / PAIN SECTION ───────────────────────────────── */}
        <section id="riesgo" className="py-20" style={{ background: "#070E1A" }} aria-labelledby="riesgo-heading">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-10">
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-semibold mb-5" style={{ background: "rgba(239,68,68,0.08)", border: "1px solid rgba(239,68,68,0.2)", color: "#FCA5A5" }}>
                Evaluación de riesgo
              </div>
              <h2 id="riesgo-heading" className="text-3xl sm:text-4xl font-black text-white mb-4">
                ¿Tu firma es defendible{" "}
                <span style={{ color: "#FCA5A5" }}>en auditoría</span>?
              </h2>
              <p className="text-gray-400 max-w-2xl mx-auto text-base">
                Selecciona las situaciones que aplican a tu empresa para evaluar la solidez legal de tu proceso de
                firma actual.
              </p>
            </div>
            <FirmaRiskChecklist />
          </div>
        </section>

        {/* ── USE CASES ─────────────────────────────────────────── */}
        <section id="casos-uso" className="py-20" style={{ background: "#0A1628" }} aria-labelledby="casos-heading">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div data-sr className="text-center mb-10">
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-semibold mb-5" style={{ background: "rgba(30,202,211,0.08)", border: "1px solid rgba(30,202,211,0.2)", color: "#1ECAD3" }}>
                Casos de uso
              </div>
              <h2 id="casos-heading" className="text-3xl sm:text-4xl font-black text-white mb-4">
                Firma en cada industria
              </h2>
              <p className="text-gray-400 max-w-2xl mx-auto text-base">
                Selecciona tu industria para ver los casos de uso más relevantes y el tipo de firma recomendado.
              </p>
            </div>
            <FirmaUseCases />
          </div>
        </section>

        {/* ── FAQ ───────────────────────────────────────────────── */}
        <section id="faq" className="py-20" style={{ background: "#070E1A" }} aria-labelledby="faq-heading">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-10">
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-semibold mb-5" style={{ background: "rgba(30,202,211,0.08)", border: "1px solid rgba(30,202,211,0.2)", color: "#1ECAD3" }}>
                Preguntas frecuentes
              </div>
              <h2 id="faq-heading" className="text-3xl sm:text-4xl font-black text-white mb-4">
                Todo sobre firma electrónica en México
              </h2>
              <p className="text-gray-400 max-w-2xl mx-auto text-base">
                Resuelve tus dudas sobre validez legal, e.firma, NOM-151, sello de tiempo, biometría y cumplimiento
                regulatorio.
              </p>
            </div>
            <FirmaFAQ />

            {/* Internal linking to subpages */}
            <div className="mt-10 grid grid-cols-2 sm:grid-cols-3 gap-3">
              {[
                { href: "/firma-electronica-simple", label: "Firma Simple →" },
                { href: "/firma-certificada-sello-tiempo", label: "Sello de Tiempo →" },
                { href: "/firma-electronica-nom-151", label: "Firma Digital NOM-151 →" },
                { href: "/firma-electronica-efirma", label: "e.firma SAT →" },
                { href: "/firma-electronica-biometrica", label: "Firma Digital NOM-151 + Biometría →" },
                { href: "/firma-electronica-kyc", label: "Firma Digital NOM-151 + KYC →" },
              ].map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-sm font-semibold px-4 py-3 rounded-xl text-center transition-all hover:bg-white/10"
                  style={{ background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.08)", color: "#1ECAD3" }}
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* ── FINAL CTA ─────────────────────────────────────────── */}
        <section id="contacto" className="py-20" style={{ background: "#0A1628" }} aria-labelledby="cta-heading">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <div
              data-sr
              className="rounded-3xl p-8 md:p-12 overflow-hidden relative"
              style={{ background: "linear-gradient(135deg, #202945, #071426)", border: "1px solid rgba(30,202,211,0.15)", boxShadow: "0 0 80px rgba(30,202,211,0.07)" }}
            >
              <div className="absolute top-0 right-0 w-64 h-64 rounded-full opacity-10 blur-3xl pointer-events-none" aria-hidden="true" style={{ background: "#1ECAD3" }} />

              <h2 id="cta-heading" className="text-3xl sm:text-4xl font-black text-white mb-4 text-center">
                Elige la firma correcta para cada documento
              </h2>
              <p className="text-gray-400 text-center max-w-xl mx-auto mb-10">
                Desde consentimiento simple hasta expedientes con identidad, e.firma, NOM-151 y evidencia certificada.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="rounded-2xl p-6 flex flex-col gap-5" style={{ background: "rgba(30,202,211,0.06)", border: "1px solid rgba(30,202,211,0.2)" }}>
                  <div>
                    <div className="text-xs font-bold uppercase tracking-widest mb-2" style={{ color: "#1ECAD3" }}>Autoservicio</div>
                    <h3 className="text-xl font-black text-white mb-2">Empieza en minutos</h3>
                    <p className="text-sm text-gray-400 leading-relaxed">
                      Crea tu cuenta, sube tu primer documento y configura el flujo de firma que necesitas sin hablar
                      con nadie.
                    </p>
                  </div>
                  <ul className="space-y-2">
                    {["Sin contrato ni permanencia", "Pago por uso", "Soporte por chat"].map((item) => (
                      <li key={item} className="flex items-center gap-2 text-sm text-gray-300">
                        <svg className="w-4 h-4 flex-shrink-0" viewBox="0 0 20 20" fill="currentColor" style={{ color: "#1ECAD3" }} aria-hidden="true">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                        {item}
                      </li>
                    ))}
                  </ul>
                  <Link
                    href="/autoservicio"
                    className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl text-sm font-bold text-white transition-all hover:opacity-90 hover:scale-105"
                    style={{ background: "#1ECAD3" }}
                  >
                    Probar gratis
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </Link>
                </div>

                <div className="rounded-2xl p-6 flex flex-col gap-5" style={{ background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.1)" }}>
                  <div>
                    <div className="text-xs font-bold uppercase tracking-widest mb-2" style={{ color: "#8B5CF6" }}>Enterprise / Integración</div>
                    <h3 className="text-xl font-black text-white mb-2">Integración completa</h3>
                    <p className="text-sm text-gray-400 leading-relaxed">
                      API REST + SDK + onboarding técnico + soporte dedicado. Configura flujos de firma según
                      documento, riesgo, industria o regulación.
                    </p>
                  </div>
                  <ul className="space-y-2">
                    {["API documentada + webhooks", "Soporte técnico dedicado", "SLA garantizado"].map((item) => (
                      <li key={item} className="flex items-center gap-2 text-sm text-gray-300">
                        <svg className="w-4 h-4 flex-shrink-0" viewBox="0 0 20 20" fill="currentColor" style={{ color: "#8B5CF6" }} aria-hidden="true">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                        {item}
                      </li>
                    ))}
                  </ul>
                  <Link
                    href="/contacto"
                    className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl text-sm font-bold transition-all hover:bg-white/10"
                    style={{ background: "rgba(255,255,255,0.06)", border: "1px solid rgba(255,255,255,0.15)", color: "#E2E8F0" }}
                  >
                    Hablar con ventas
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
      <FirmaSEMHandler />
    </>
  );
}
