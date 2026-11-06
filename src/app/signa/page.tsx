import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Link from "next/link";
import ScrollReveal from "@/components/ScrollReveal";
import SignaTrackedLink from "@/components/signa/SignaTrackedLink";
import SignaSolutionFinder from "@/components/signa/SignaSolutionFinder";
import { signaOrganizationSchema, signaServiceSchema, signaFAQSchema, signaBreadcrumbSchema, signaFaqItems } from "./schema";

const TEAL = "#1ECAD3";

const TITLE = "Firma electrónica para empresas en México | Signa JAAK";
const DESCRIPTION =
  "Conoce las soluciones de firma electrónica de JAAK para empresas: NOM-151, biometría, KYC, evidencia digital y opciones de integración.";

export const metadata: Metadata = {
  title: { absolute: TITLE },
  description: DESCRIPTION,
  keywords: [
    "firma electrónica méxico",
    "firma electrónica para empresas",
    "firma electrónica NOM-151",
    "firma electrónica con biometría",
    "firma electrónica con KYC",
    "plataforma de firma electrónica méxico",
    "alternativas a Mifiel",
    "alternativas a DocuSign",
    "comparación de firma electrónica",
  ],
  authors: [{ name: "JAAK", url: "https://jaak.ai" }],
  creator: "JAAK",
  publisher: "JAAK",
  alternates: {
    canonical: "https://jaak.ai/signa",
    languages: {
      "es-MX": "https://jaak.ai/signa",
      es: "https://jaak.ai/signa",
    },
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    title: TITLE,
    description: DESCRIPTION,
    type: "website",
    url: "https://jaak.ai/signa",
    siteName: "JAAK",
    locale: "es_MX",
    images: [{ url: "/images/logos/jaak-logo-azul.png", width: 800, height: 400, alt: "Firma electrónica para empresas · Signa JAAK" }],
  },
  twitter: {
    card: "summary_large_image",
    title: TITLE,
    description: DESCRIPTION,
    images: ["/images/logos/jaak-logo-azul.png"],
    creator: "@jaak_ai",
  },
  category: "Technology",
  classification: "Firma Electrónica, Tecnología, Software Empresarial",
  other: {
    "geo.region": "MX",
    "geo.country": "México",
    "geo.placename": "México",
    language: "Spanish",
    "target-audience": "Empresas",
  },
};

function CheckIcon() {
  return (
    <svg className="w-4 h-4 flex-shrink-0" fill="none" stroke={TEAL} viewBox="0 0 24 24" aria-hidden="true">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
    </svg>
  );
}

const BTN_PRIMARY =
  "px-7 py-3.5 bg-[#1ECAD3] text-[#0E2233] font-bold rounded-lg hover:bg-[#19b3bb] transition-all text-center focus:outline-none focus-visible:ring-2 focus-visible:ring-white";
const BTN_SECONDARY =
  "px-7 py-3.5 bg-white/10 text-white font-semibold rounded-lg hover:bg-white/20 transition-all border border-white/20 text-center focus:outline-none focus-visible:ring-2 focus-visible:ring-white";

// Modalidades (fuente de contenido: capacidades confirmadas en las páginas de producto de firma).
const MODALITIES = [
  {
    name: "Firma Simple",
    text: "Consentimiento digital ágil para documentos internos y acuerdos de bajo riesgo, sin verificación de identidad.",
    href: "/firma-electronica-simple",
    cta: "Ver Firma Simple",
  },
  {
    name: "Firma Digital NOM-151",
    text: "Modalidad que incorpora sello de tiempo y constancia de conservación NOM-151, con expediente digital y bitácora de la operación. No incluye verificación de identidad.",
    href: "/firma-electronica-nom-151",
    cta: "Ver Firma NOM-151",
  },
  {
    name: "NOM-151 + Biometría",
    text: "Suma biometría facial con prueba de vida a la modalidad NOM-151. No incluye la verificación KYC completa.",
    href: "/firma-electronica-biometrica",
    cta: "Ver NOM-151 + Biometría",
  },
  {
    name: "NOM-151 + KYC",
    text: "Suma la verificación KYC completa (identificación oficial, CURP, biometría y consulta de listas) a la modalidad NOM-151, para procesos con requisitos de verificación ampliados.",
    href: "/firma-electronica-kyc",
    cta: "Ver NOM-151 + KYC",
  },
];

const CAPABILITIES = [
  { title: "Firma electrónica para documentos empresariales", text: "Contratos, autorizaciones, acuerdos y documentos operativos firmados de forma digital." },
  { title: "Alternativas con NOM-151", text: "Modalidades que incorporan sello de tiempo y constancia de conservación NOM-151; la pertinencia para cada documento debe validarse con tu área legal." },
  { title: "Biometría y verificación KYC", text: "Opciones para verificar la identidad del firmante, desde biometría facial hasta KYC completo." },
  { title: "Evidencia y trazabilidad", text: "Modalidades que registran bitácora de eventos y expediente digital; el alcance varía según la modalidad." },
  { title: "Web, API o SDK", text: "Uso desde la plataforma web o integración por API o SDK, según contratación." },
  { title: "White Label", text: "JAAK dispone de personalización White Label (logotipo, colores, correos y mensajes), incluida en Autoservicio. En proyectos con propuesta comercial, el alcance se define conforme a la propuesta." },
  { title: "Atención en español desde México", text: "Soporte y acompañamiento especializado según el plan y las condiciones acordadas." },
];

const SECTORS = [
  { name: "Recursos humanos", text: "Contratos laborales, cartas y autorizaciones del personal, con registro de la operación de firma.", href: "/soluciones/recursos-humanos" },
  { name: "Servicios financieros", text: "Contratos y documentos de procesos regulados, con opciones de verificación de identidad y evidencia.", href: "/soluciones/instituciones-financieras" },
  { name: "Inmobiliarias", text: "Contratos de compraventa y arrendamiento, con opciones de verificación de las partes.", href: "/inmobiliarias" },
  { name: "Contratos empresariales", text: "Acuerdos con clientes y proveedores, con opciones de sello de tiempo y expediente digital.", href: "/firma-electronica-nom-151" },
  { name: "Procesos de onboarding", text: "Alta de clientes con opciones de verificación de identidad y firma en un mismo flujo.", href: "/soluciones/onboarding-digital" },
];

export default function SignaHome() {
  return (
    <>
      <ScrollReveal />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify([signaOrganizationSchema, signaServiceSchema, signaFAQSchema, signaBreadcrumbSchema]),
        }}
      />

      <Header />
      <main>
        {/* Hero */}
        <section className="pt-32 pb-20 bg-[#202945] relative overflow-hidden">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <header data-sr="left">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-white/80 text-sm mb-6">
                  <span className="w-2 h-2 rounded-full" style={{ background: TEAL }} />
                  Signa · Firma electrónica de JAAK
                </div>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-white leading-tight mb-6">
                  Firma electrónica para empresas en México
                </h1>
                <p className="text-xl text-white/70 mb-8">
                  Digitaliza la firma de documentos y fortalece tus procesos con soluciones de firma electrónica,
                  verificación de identidad y evidencia digital, según las necesidades de tu operación.
                </p>
                <div className="flex flex-col sm:flex-row gap-3">
                  <SignaTrackedLink href="/contacto" source="signa_hero_demo" className={BTN_PRIMARY}>
                    Solicitar una demo
                  </SignaTrackedLink>
                  <SignaTrackedLink href="/signa/comparacion" source="signa_hero_comparar" className={BTN_SECONDARY}>
                    Comparar modalidades
                  </SignaTrackedLink>
                </div>
                <ul className="mt-8 flex flex-col gap-2.5 text-sm text-white/70">
                  <li className="flex items-center gap-2.5"><CheckIcon /> Modalidades con NOM-151, biometría y KYC</li>
                  <li className="flex items-center gap-2.5"><CheckIcon /> Uso Web o integración API/SDK según contratación</li>
                  <li className="flex items-center gap-2.5"><CheckIcon /> Atención en español desde México, según contrato</li>
                </ul>
              </header>

              <div data-sr="right" className="rounded-2xl border border-white/10 bg-white/5 p-6">
                <h2 className="text-lg font-bold text-white mb-1">Modalidades de firma</h2>
                <p className="text-sm text-white/60 mb-4">Elige el nivel de evidencia y verificación que requiere tu operación.</p>
                <ul className="divide-y divide-white/10">
                  {MODALITIES.map((m) => (
                    <li key={m.name}>
                      <Link
                        href={m.href}
                        className="flex items-center justify-between gap-3 py-3 text-white hover:text-[#1ECAD3] transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-[#1ECAD3] rounded"
                      >
                        <span className="font-semibold">{m.name}</span>
                        <span aria-hidden="true">→</span>
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Modalidades */}
        <section className="py-20 bg-white" aria-labelledby="modalidades-title">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div data-sr className="text-center mb-14 max-w-3xl mx-auto">
              <h2 id="modalidades-title" className="text-3xl md:text-4xl font-black text-gray-900 mb-4">
                Modalidades de firma electrónica para empresas
              </h2>
              <p className="text-lg text-gray-600">
                Cada modalidad incorpora capacidades distintas. Elige la que corresponde al tipo de documento y a los
                requisitos de tu proceso; no todas las capacidades están incluidas en todas las modalidades.
              </p>
            </div>
            <div data-sr-grid className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {MODALITIES.map((m) => (
                <div key={m.name} className="flex flex-col rounded-xl border border-gray-200 p-6">
                  <h3 className="text-lg font-bold text-gray-900 mb-2">{m.name}</h3>
                  <p className="text-sm text-gray-600 flex-1">{m.text}</p>
                  <Link href={m.href} className="mt-4 text-sm font-semibold text-[#0066ff] hover:underline">
                    {m.cta} →
                  </Link>
                </div>
              ))}
            </div>
            <p className="mt-8 text-center text-sm text-gray-600">
              ¿Necesitas contrastar modalidades?{" "}
              <Link href="/signa/comparacion" className="font-semibold text-[#0066ff] hover:underline">
                Revisa la comparación de firma electrónica para empresas
              </Link>
              .
            </p>
          </div>
        </section>

        {/* Capacidades */}
        <section className="py-20 bg-gray-50" aria-labelledby="capacidades-title">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div data-sr className="text-center mb-14 max-w-3xl mx-auto">
              <h2 id="capacidades-title" className="text-3xl md:text-4xl font-black text-gray-900 mb-4">
                Capacidades de la plataforma de firma electrónica de JAAK
              </h2>
              <p className="text-lg text-gray-600">
                Una plataforma mexicana de firma electrónica con opciones de verificación, evidencia e integración.
              </p>
            </div>
            <div data-sr-grid className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {CAPABILITIES.map((c) => (
                <div key={c.title} className="rounded-xl bg-white p-6 border border-gray-100">
                  <h3 className="text-base font-bold text-gray-900 mb-2">{c.title}</h3>
                  <p className="text-sm text-gray-600">{c.text}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Selector de orientación */}
        <section id="orientacion" className="py-20 bg-[#202945] scroll-mt-24" aria-labelledby="orientacion-title">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div data-sr className="text-center mb-10">
              <h2 id="orientacion-title" className="text-3xl md:text-4xl font-black text-white mb-4">
                Encuentra la solución de firma electrónica para tu empresa
              </h2>
              <p className="text-lg text-white/60">
                Responde cinco preguntas y conoce qué modalidades conviene evaluar con nuestro equipo.
              </p>
            </div>
            <SignaSolutionFinder />
          </div>
        </section>

        {/* Sectores */}
        <section className="py-20 bg-white" aria-labelledby="sectores-title">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div data-sr className="text-center mb-14 max-w-3xl mx-auto">
              <h2 id="sectores-title" className="text-3xl md:text-4xl font-black text-gray-900 mb-4">
                Firma electrónica para las necesidades de tu sector
              </h2>
            </div>
            <div data-sr-grid className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {SECTORS.map((s) => (
                <Link key={s.name} href={s.href} className="block rounded-xl border border-gray-200 p-6 hover:border-[#1ECAD3] transition-colors">
                  <h3 className="text-lg font-bold text-gray-900 mb-2">{s.name}</h3>
                  <p className="text-sm text-gray-600">{s.text}</p>
                  <span className="mt-3 inline-block text-sm font-semibold text-[#0066ff]">Conocer más →</span>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="py-20 bg-gray-50" aria-labelledby="faq-title">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 id="faq-title" className="text-3xl md:text-4xl font-black text-gray-900 mb-10 text-center">
              Preguntas frecuentes sobre firma electrónica para empresas
            </h2>
            <div className="space-y-4">
              {signaFaqItems.map((f) => (
                <details key={f.q} className="group rounded-xl bg-white border border-gray-200 p-5">
                  <summary className="cursor-pointer font-semibold text-gray-900 list-none flex justify-between gap-4">
                    <h3 className="text-base font-semibold">{f.q}</h3>
                    <span aria-hidden="true" className="text-[#1ECAD3] group-open:rotate-45 transition-transform">+</span>
                  </summary>
                  <p className="mt-3 text-sm text-gray-600 leading-relaxed">{f.a}</p>
                </details>
              ))}
            </div>
          </div>
        </section>

        {/* CTA final */}
        <section className="py-20 bg-gradient-to-r from-[#1ECAD3] to-[#0066ff]">
          <div data-sr className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl md:text-4xl font-black text-white mb-4">
              Conversemos sobre la firma electrónica de tu operación
            </h2>
            <p className="text-xl text-white/90 mb-8">
              Nuestro equipo comercial se pondrá en contacto contigo para conocer las necesidades de tu empresa.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <SignaTrackedLink
                href="/contacto"
                source="signa_cierre_propuesta"
                className="px-8 py-4 bg-white text-[#0066ff] font-bold rounded-lg hover:bg-gray-50 transition-all shadow-lg focus:outline-none focus-visible:ring-2 focus-visible:ring-white"
              >
                Solicitar una propuesta para mi operación
              </SignaTrackedLink>
              <SignaTrackedLink
                href="/signa/comparacion"
                source="signa_cierre_comparar"
                className="px-8 py-4 bg-transparent border-2 border-white text-white font-bold rounded-lg hover:bg-white hover:text-[#0066ff] transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-white"
              >
                Comparar modalidades
              </SignaTrackedLink>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
