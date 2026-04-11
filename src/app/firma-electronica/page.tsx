import type { Metadata } from "next";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FirmaComparisonTable from "@/components/FirmaComparisonTable";
import FirmaProductCards from "@/components/FirmaProductCards";
import FirmaHowItWorks from "@/components/FirmaHowItWorks";
import FirmaDifferentiation from "@/components/FirmaDifferentiation";
import FirmaRiskChecklist from "@/components/FirmaRiskChecklist";
import FirmaUseCases from "@/components/FirmaUseCases";
import FirmaFAQ from "@/components/FirmaFAQ";
import FirmaSEMHandler from "@/components/FirmaSEMHandler";

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
    sameAs: [
      "https://www.linkedin.com/company/jaak-ai",
    ],
  },
  featureList: [
    "Firma electrónica simple",
    "Firma con NOM-151 certificado",
    "Firma biométrica con liveness",
    "Firma + KYC completo",
    "Expediente digital auditable",
    "API REST con webhooks",
  ],
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    {
      "@type": "ListItem",
      position: 1,
      name: "Inicio",
      item: "https://jaak.ai",
    },
    {
      "@type": "ListItem",
      position: 2,
      name: "Firma Electrónica",
      item: "https://jaak.ai/firma-electronica",
    },
  ],
};

export default function FirmaElectronicaPage() {
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
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <Header />
      <main>
        {/* ── HERO ──────────────────────────────────────────────── */}
        <section
          id="hero"
          className="relative pt-32 pb-20 overflow-hidden"
          style={{
            background:
              "linear-gradient(135deg, #071020 0%, #0A1628 45%, #0D1F3C 100%)",
          }}
          aria-label="Firma electrónica en México"
        >
          {/* Background grid */}
          <div
            className="absolute inset-0 opacity-[0.03] pointer-events-none"
            aria-hidden="true"
            style={{
              backgroundImage:
                "linear-gradient(#1ECAD3 1px, transparent 1px), linear-gradient(90deg, #1ECAD3 1px, transparent 1px)",
              backgroundSize: "60px 60px",
            }}
          />

          {/* Glow orbs */}
          <div
            className="absolute top-20 right-1/4 w-96 h-96 rounded-full opacity-10 blur-3xl pointer-events-none"
            aria-hidden="true"
            style={{ background: "#1ECAD3" }}
          />
          <div
            className="absolute bottom-10 left-1/4 w-64 h-64 rounded-full opacity-5 blur-3xl pointer-events-none"
            aria-hidden="true"
            style={{ background: "#8B5CF6" }}
          />

          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              {/* Left: Content */}
              <div>
                {/* Badge */}
                <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full mb-6 text-xs font-semibold"
                  style={{
                    background: "rgba(30,202,211,0.1)",
                    border: "1px solid rgba(30,202,211,0.25)",
                    color: "#1ECAD3",
                  }}
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-[#1ECAD3] animate-pulse" aria-hidden="true" />
                  NOM-151 · Biometría · KYC · API
                </div>

                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white leading-[1.1] mb-6">
                  Firma electrónica en{" "}
                  <span
                    style={{
                      background: "linear-gradient(135deg, #1ECAD3, #2AD796)",
                      WebkitBackgroundClip: "text",
                      WebkitTextFillColor: "transparent",
                      backgroundClip: "text",
                    }}
                  >
                    México
                  </span>{" "}
                  con validez legal y biometría
                </h1>

                <p className="text-lg text-gray-400 leading-relaxed mb-8 max-w-lg">
                  No solo firmas. Generas{" "}
                  <strong className="text-gray-200">evidencia legal irrebatible</strong>. Sello de tiempo
                  NOM-151, verificación biométrica y expediente auditable en segundos.
                </p>

                {/* Trust indicators */}
                <div className="flex flex-wrap gap-4 mb-8">
                  {[
                    { icon: "⚡", text: "Firma en menos de 3 min" },
                    { icon: "⚖️", text: "Válida ante CNBV y SAT" },
                    { icon: "🔒", text: "Expediente auditable" },
                  ].map((item) => (
                    <div
                      key={item.text}
                      className="flex items-center gap-2 text-sm text-gray-400"
                    >
                      <span aria-hidden="true">{item.icon}</span>
                      {item.text}
                    </div>
                  ))}
                </div>

                {/* CTAs */}
                <div className="flex flex-col sm:flex-row gap-3">
                  <Link
                    href="/autoservicio"
                    className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-xl font-bold text-white text-base transition-all hover:opacity-90 hover:scale-105"
                    style={{
                      background: "linear-gradient(135deg, #1ECAD3, #17A8B0)",
                      boxShadow: "0 0 30px rgba(30,202,211,0.35)",
                    }}
                  >
                    Probar autoservicio
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </Link>
                  <Link
                    href="/contacto"
                    className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-xl font-bold text-base transition-all hover:bg-white/10"
                    style={{
                      background: "rgba(255,255,255,0.06)",
                      border: "1px solid rgba(255,255,255,0.15)",
                      color: "#E2E8F0",
                    }}
                  >
                    Ver demo
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </Link>
                </div>
              </div>

              {/* Right: UI Mock */}
              <div className="relative flex justify-center lg:justify-end" aria-hidden="true">
                {/* Main document card */}
                <div
                  className="relative w-full max-w-sm rounded-2xl p-6"
                  style={{
                    background: "rgba(255,255,255,0.05)",
                    border: "1px solid rgba(255,255,255,0.12)",
                    backdropFilter: "blur(20px)",
                    boxShadow: "0 20px 60px rgba(0,0,0,0.4), 0 0 0 1px rgba(30,202,211,0.1)",
                  }}
                >
                  {/* Doc header */}
                  <div className="flex items-center gap-3 mb-5">
                    <div
                      className="w-10 h-12 rounded-lg flex items-center justify-center text-xl"
                      style={{ background: "rgba(30,202,211,0.1)", border: "1px solid rgba(30,202,211,0.2)" }}
                    >
                      📄
                    </div>
                    <div>
                      <div className="text-sm font-semibold text-white">Contrato_CreditoAutomotriz.pdf</div>
                      <div className="text-xs text-gray-500">2 firmantes pendientes</div>
                    </div>
                  </div>

                  {/* Doc lines */}
                  <div className="space-y-2 mb-5">
                    {[100, 85, 92, 78, 60].map((w, i) => (
                      <div
                        key={i}
                        className="h-2 rounded-full"
                        style={{
                          width: `${w}%`,
                          background: i < 3 ? "rgba(255,255,255,0.1)" : "rgba(255,255,255,0.06)",
                        }}
                      />
                    ))}
                  </div>

                  {/* Signature area */}
                  <div
                    className="rounded-xl p-4 mb-4"
                    style={{
                      border: "1px dashed rgba(30,202,211,0.4)",
                      background: "rgba(30,202,211,0.04)",
                    }}
                  >
                    <div className="text-xs text-gray-500 mb-2">Firma del representante legal</div>
                    <svg viewBox="0 0 200 40" className="w-40 h-8 opacity-70">
                      <path
                        d="M5,30 Q25,8 55,25 Q85,42 115,18 Q145,0 175,20 Q188,27 195,22"
                        stroke="#1ECAD3"
                        strokeWidth="2"
                        fill="none"
                        strokeLinecap="round"
                      />
                    </svg>
                  </div>

                  {/* Status badges */}
                  <div className="flex gap-2 flex-wrap">
                    <span
                      className="flex items-center gap-1.5 text-xs px-3 py-1.5 rounded-full font-semibold"
                      style={{
                        background: "rgba(16,185,129,0.1)",
                        border: "1px solid rgba(16,185,129,0.25)",
                        color: "#34D399",
                      }}
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                      NOM-151
                    </span>
                    <span
                      className="flex items-center gap-1.5 text-xs px-3 py-1.5 rounded-full font-semibold"
                      style={{
                        background: "rgba(30,202,211,0.1)",
                        border: "1px solid rgba(30,202,211,0.25)",
                        color: "#1ECAD3",
                      }}
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-[#1ECAD3] animate-pulse" />
                      Biometría
                    </span>
                    <span
                      className="flex items-center gap-1.5 text-xs px-3 py-1.5 rounded-full font-semibold"
                      style={{
                        background: "rgba(139,92,246,0.1)",
                        border: "1px solid rgba(139,92,246,0.25)",
                        color: "#A78BFA",
                      }}
                    >
                      KYC
                    </span>
                  </div>
                </div>

                {/* Floating verification card */}
                <div
                  className="absolute -right-4 top-8 rounded-xl p-4 w-44"
                  style={{
                    background: "rgba(10,22,40,0.9)",
                    border: "1px solid rgba(16,185,129,0.3)",
                    backdropFilter: "blur(16px)",
                    boxShadow: "0 8px 32px rgba(0,0,0,0.4)",
                    animation: "float 4s ease-in-out infinite",
                  }}
                >
                  <div className="flex items-center gap-2 mb-2">
                    <div
                      className="w-7 h-7 rounded-full flex items-center justify-center text-sm"
                      style={{ background: "rgba(16,185,129,0.2)" }}
                    >
                      ✓
                    </div>
                    <div>
                      <div className="text-xs font-bold text-white">Verificado</div>
                      <div className="text-xs text-gray-500">Identidad confirmada</div>
                    </div>
                  </div>
                  <div className="text-xs text-gray-600">INE · CURP · Biometría</div>
                </div>

                {/* Glow under the card */}
                <div
                  className="absolute -bottom-8 inset-x-8 h-16 blur-2xl opacity-20 rounded-full pointer-events-none"
                  style={{ background: "#1ECAD3" }}
                />
              </div>
            </div>

            {/* Stats bar */}
            <div
              className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6 pt-8"
              style={{ borderTop: "1px solid rgba(255,255,255,0.06)" }}
            >
              {[
                { value: "99.9%", label: "Uptime garantizado" },
                { value: "<3 min", label: "Tiempo promedio de firma" },
                { value: "NOM-151", label: "Certificación incluida" },
                { value: "API REST", label: "Integración en días" },
              ].map((stat) => (
                <div key={stat.label} className="text-center">
                  <div
                    className="text-2xl font-black mb-1"
                    style={{ color: "#1ECAD3" }}
                  >
                    {stat.value}
                  </div>
                  <div className="text-xs text-gray-500">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── COMPARISON TABLE ─────────────────────────────────── */}
        <section
          id="comparacion"
          className="py-20"
          style={{ background: "#070E1A" }}
          aria-labelledby="comparacion-heading"
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-10">
              <div
                className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-semibold mb-5"
                style={{
                  background: "rgba(30,202,211,0.08)",
                  border: "1px solid rgba(30,202,211,0.2)",
                  color: "#1ECAD3",
                }}
              >
                Comparativa
              </div>
              <h2
                id="comparacion-heading"
                className="text-3xl sm:text-4xl font-black text-white mb-4"
              >
                ¿Cuál es la firma que necesitas?
              </h2>
              <p className="text-gray-400 max-w-2xl mx-auto text-base">
                Haz clic en cualquier fila para ver los detalles, beneficios y el caso de uso exacto de cada tipo.
              </p>
            </div>
            <FirmaComparisonTable />
          </div>
        </section>

        {/* ── PRODUCT CARDS ─────────────────────────────────────── */}
        <section
          id="soluciones"
          className="py-20"
          style={{ background: "#0A1628" }}
          aria-labelledby="soluciones-heading"
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-10">
              <div
                className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-semibold mb-5"
                style={{
                  background: "rgba(30,202,211,0.08)",
                  border: "1px solid rgba(30,202,211,0.2)",
                  color: "#1ECAD3",
                }}
              >
                Soluciones
              </div>
              <h2
                id="soluciones-heading"
                className="text-3xl sm:text-4xl font-black text-white mb-4"
              >
                4 niveles de firma para cada necesidad
              </h2>
              <p className="text-gray-400 max-w-2xl mx-auto text-base">
                Desde la firma más simple hasta el cumplimiento regulatorio más completo. Haz clic para expandir cada solución.
              </p>
            </div>
            <FirmaProductCards />
          </div>
        </section>

        {/* ── HOW IT WORKS ──────────────────────────────────────── */}
        <section
          id="como-funciona"
          className="py-20"
          style={{ background: "#070E1A" }}
          aria-labelledby="flujo-heading"
        >
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <div
                className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-semibold mb-5"
                style={{
                  background: "rgba(30,202,211,0.08)",
                  border: "1px solid rgba(30,202,211,0.2)",
                  color: "#1ECAD3",
                }}
              >
                Flujo de firma
              </div>
              <h2
                id="flujo-heading"
                className="text-3xl sm:text-4xl font-black text-white mb-4"
              >
                Cómo funciona
              </h2>
              <p className="text-gray-400 max-w-2xl mx-auto text-base">
                5 pasos desde que subes el documento hasta tener el expediente digital completo y auditable.
              </p>
            </div>
            <FirmaHowItWorks />
          </div>
        </section>

        {/* ── DIFFERENTIATION ───────────────────────────────────── */}
        <section
          id="diferenciacion"
          className="py-20"
          style={{ background: "#0A1628" }}
          aria-labelledby="diferenciacion-heading"
        >
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-10">
              <div
                className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-semibold mb-5"
                style={{
                  background: "rgba(30,202,211,0.08)",
                  border: "1px solid rgba(30,202,211,0.2)",
                  color: "#1ECAD3",
                }}
              >
                Diferenciación
              </div>
              <h2
                id="diferenciacion-heading"
                className="text-3xl sm:text-4xl font-black text-white mb-4"
              >
                No solo firmas.{" "}
                <span
                  style={{
                    background: "linear-gradient(135deg, #1ECAD3, #2AD796)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    backgroundClip: "text",
                  }}
                >
                  Generas evidencia legal.
                </span>
              </h2>
              <p className="text-gray-400 max-w-2xl mx-auto text-base">
                Haz clic en cada punto para explorar el detalle técnico y legal de cada diferenciador. Pasa el cursor sobre los términos subrayados para ver definiciones.
              </p>
            </div>
            <FirmaDifferentiation />
          </div>
        </section>

        {/* ── RISK / PAIN SECTION ───────────────────────────────── */}
        <section
          id="riesgo"
          className="py-20"
          style={{ background: "#070E1A" }}
          aria-labelledby="riesgo-heading"
        >
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-10">
              <div
                className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-semibold mb-5"
                style={{
                  background: "rgba(239,68,68,0.08)",
                  border: "1px solid rgba(239,68,68,0.2)",
                  color: "#FCA5A5",
                }}
              >
                Evaluación de riesgo
              </div>
              <h2
                id="riesgo-heading"
                className="text-3xl sm:text-4xl font-black text-white mb-4"
              >
                ¿Tu firma es defendible{" "}
                <span style={{ color: "#FCA5A5" }}>en auditoría</span>?
              </h2>
              <p className="text-gray-400 max-w-2xl mx-auto text-base">
                Selecciona las situaciones que aplican a tu empresa para evaluar la solidez legal de tu proceso de firma actual.
              </p>
            </div>
            <FirmaRiskChecklist />
          </div>
        </section>

        {/* ── USE CASES ─────────────────────────────────────────── */}
        <section
          id="casos-uso"
          className="py-20"
          style={{ background: "#0A1628" }}
          aria-labelledby="casos-heading"
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-10">
              <div
                className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-semibold mb-5"
                style={{
                  background: "rgba(30,202,211,0.08)",
                  border: "1px solid rgba(30,202,211,0.2)",
                  color: "#1ECAD3",
                }}
              >
                Casos de uso
              </div>
              <h2
                id="casos-heading"
                className="text-3xl sm:text-4xl font-black text-white mb-4"
              >
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
        <section
          id="faq"
          className="py-20"
          style={{ background: "#070E1A" }}
          aria-labelledby="faq-heading"
        >
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-10">
              <div
                className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-semibold mb-5"
                style={{
                  background: "rgba(30,202,211,0.08)",
                  border: "1px solid rgba(30,202,211,0.2)",
                  color: "#1ECAD3",
                }}
              >
                Preguntas frecuentes
              </div>
              <h2
                id="faq-heading"
                className="text-3xl sm:text-4xl font-black text-white mb-4"
              >
                Todo sobre firma electrónica en México
              </h2>
              <p className="text-gray-400 max-w-2xl mx-auto text-base">
                Resuelve tus dudas sobre validez legal, NOM-151, biometría y cumplimiento regulatorio.
              </p>
            </div>
            <FirmaFAQ />

            {/* Internal linking to subpages */}
            <div className="mt-10 grid grid-cols-2 gap-3">
              {[
                { href: "/firma-electronica-simple", label: "Firma Simple →" },
                { href: "/firma-electronica-nom-151", label: "Firma NOM-151 →" },
                { href: "/firma-electronica-biometrica", label: "Firma Biométrica →" },
                { href: "/firma-electronica-kyc", label: "Firma + KYC →" },
              ].map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-sm font-semibold px-4 py-3 rounded-xl text-center transition-all hover:bg-white/10"
                  style={{
                    background: "rgba(255,255,255,0.04)",
                    border: "1px solid rgba(255,255,255,0.08)",
                    color: "#1ECAD3",
                  }}
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* ── FINAL CTA ─────────────────────────────────────────── */}
        <section
          id="contacto"
          className="py-20"
          style={{ background: "#0A1628" }}
          aria-labelledby="cta-heading"
        >
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <div
              className="rounded-3xl p-8 md:p-12 overflow-hidden relative"
              style={{
                background: "linear-gradient(135deg, #0D1F3C, #071020)",
                border: "1px solid rgba(30,202,211,0.15)",
                boxShadow: "0 0 80px rgba(30,202,211,0.07)",
              }}
            >
              {/* Background glow */}
              <div
                className="absolute top-0 right-0 w-64 h-64 rounded-full opacity-10 blur-3xl pointer-events-none"
                aria-hidden="true"
                style={{ background: "#1ECAD3" }}
              />

              <h2
                id="cta-heading"
                className="text-3xl sm:text-4xl font-black text-white mb-4 text-center"
              >
                Empieza hoy mismo
              </h2>
              <p className="text-gray-400 text-center max-w-xl mx-auto mb-10">
                Elige cómo quieres comenzar con JAAK Firma Electrónica.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Autoservicio */}
                <div
                  className="rounded-2xl p-6 flex flex-col gap-5"
                  style={{
                    background: "rgba(30,202,211,0.06)",
                    border: "1px solid rgba(30,202,211,0.2)",
                  }}
                >
                  <div>
                    <div
                      className="text-xs font-bold uppercase tracking-widest mb-2"
                      style={{ color: "#1ECAD3" }}
                    >
                      Autoservicio
                    </div>
                    <h3 className="text-xl font-black text-white mb-2">
                      Empieza en minutos
                    </h3>
                    <p className="text-sm text-gray-400 leading-relaxed">
                      Crea tu cuenta, sube tu primer documento y obtén una firma con NOM-151 sin hablar con nadie.
                    </p>
                  </div>
                  <ul className="space-y-2">
                    {[
                      "Sin contrato ni permanencia",
                      "Pago por uso",
                      "Soporte por chat",
                    ].map((item) => (
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

                {/* Enterprise */}
                <div
                  className="rounded-2xl p-6 flex flex-col gap-5"
                  style={{
                    background: "rgba(255,255,255,0.03)",
                    border: "1px solid rgba(255,255,255,0.1)",
                  }}
                >
                  <div>
                    <div
                      className="text-xs font-bold uppercase tracking-widest mb-2"
                      style={{ color: "#8B5CF6" }}
                    >
                      Enterprise / Integración
                    </div>
                    <h3 className="text-xl font-black text-white mb-2">
                      Integración completa
                    </h3>
                    <p className="text-sm text-gray-400 leading-relaxed">
                      API REST + SDK + onboarding técnico + soporte dedicado. Para volumen alto y cumplimiento regulatorio total.
                    </p>
                  </div>
                  <ul className="space-y-2">
                    {[
                      "API documentada + webhooks",
                      "Soporte técnico dedicado",
                      "SLA garantizado",
                    ].map((item) => (
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
                    style={{
                      background: "rgba(255,255,255,0.06)",
                      border: "1px solid rgba(255,255,255,0.15)",
                      color: "#E2E8F0",
                    }}
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
