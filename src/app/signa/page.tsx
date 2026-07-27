import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Link from "next/link";
import ScrollReveal from "@/components/ScrollReveal";
import SignaSavingsCalculator from "./SignaSavingsCalculator";
import { signaOrganizationSchema, signaServiceSchema, signaFAQSchema, signaBreadcrumbSchema } from "./schema";

const TEAL = "#1ECAD3";
const BLUE = "#0066ff";

export const metadata: Metadata = {
  title: "Signa - Firma Electrónica México | 50% Más Barata que Mifiel | NOM-151",
  description: "Firma electrónica profesional para México. $15 vs $29.90 de Mifiel (50% de ahorro). NOM-151 certificado, soporte 24/7, migración gratis.",
  keywords: [
    "firma electrónica méxico",
    "mifiel alternativa",
    "firma digital barata méxico",
    "signa firma electrónica",
    "NOM-151 firma",
    "firma electrónica más barata que mifiel",
    "alternativa mifiel méxico",
    "firma digital profesional méxico",
    "documento electrónico méxico",
    "signatura digital méxico",
    "firma online méxico",
    "e-signature méxico",
    "firma legal méxico",
    "mifiel vs signa",
    "precio mifiel alternativa",
    "migrar de mifiel",
    "cambiar mifiel por signa",
    "firma electrónica empresas",
    "firma digital pymes",
    "contratos digitales méxico",
    "documentos legales online"
  ],
  authors: [{ name: "JAAK", url: "https://jaak.ai" }],
  creator: "JAAK",
  publisher: "JAAK",
  alternates: {
    canonical: "https://jaak.ai/signa",
    languages: {
      'es-MX': 'https://jaak.ai/signa',
      'es': 'https://jaak.ai/signa'
    }
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    title: "Signa - Firma Electrónica México | 50% Más Barata que Mifiel",
    description: "Firma electrónica profesional para México. $15 vs $29.90 de Mifiel (50% de ahorro). NOM-151 certificado, migración gratis.",
    type: "website",
    url: "https://jaak.ai/signa",
    siteName: "JAAK",
    locale: "es_MX",
    images: [
      {
        url: "https://jaak.ai/signa-og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Signa - Firma Electrónica 50% Más Barata que Mifiel"
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: "Signa - Firma Electrónica México | 50% Más Barata que Mifiel",
    description: "$15 vs $29.90 de Mifiel (50% de ahorro). NOM-151 certificado, migración gratis.",
    images: ["https://jaak.ai/signa-twitter-image.jpg"],
    creator: "@jaak_ai"
  },
  category: "Technology",
  classification: "Firma Electrónica, Tecnología, Software Empresarial",
  other: {
    'geo.region': 'MX',
    'geo.country': 'México',
    'geo.placename': 'México',
    'language': 'Spanish',
    'target-audience': 'Empresas, PyMEs, Profesionales',
    'distribution': 'global',
    'revisit-after': '7 days'
  }
};

function CheckIcon() {
  return (
    <svg className="w-4 h-4 flex-shrink-0" fill="none" stroke={TEAL} viewBox="0 0 24 24" aria-hidden="true">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
    </svg>
  );
}

function DashIcon() {
  return (
    <svg className="w-4 h-4 flex-shrink-0" fill="none" stroke="#94A3B8" viewBox="0 0 24 24" aria-hidden="true">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 12h14" />
    </svg>
  );
}

const COMPETITOR_POINTS = [
  "$29.90 por firma",
  "Setup fee: $2,500 MXN",
  "Cuota mensual mínima",
  "Soporte en horario de oficina",
  "Interfaz desactualizada",
  "API limitada",
];

const SIGNA_POINTS = [
  "$15.00 por firma (50% menos)",
  "Setup gratis",
  "Pago por uso, sin mínimos",
  "Soporte 24/7",
  "Interfaz 2026",
  "API moderna GraphQL + REST",
];

const OTHERS_POINTS = [
  "$25–35 por firma",
  "Contratos anuales",
  "Implementación de 2 a 6 meses",
  "Soporte en inglés",
  "No especializado en México",
  "Compliance complejo",
];

const TESTIMONIALS = [
  {
    initials: "CM",
    color: TEAL,
    name: "Carlos Mendoza",
    role: "Director, Inmobiliaria Premium",
    quote: "Migramos en 24 horas y ahorramos $85,320 anuales. La API es 2.5x más rápida que la anterior. Nuestros clientes notan la diferencia.",
    tags: ["450 docs/mes", "$85K ahorro/año"],
  },
  {
    initials: "AL",
    color: BLUE,
    name: "Ana López",
    role: "Socia, Bufete López & Asociados",
    quote: "El soporte 24/7 es increíble. Antes esperábamos días, ahora obtenemos respuestas en minutos. El ahorro anual es de $44,700.",
    tags: ["250 docs/mes", "$44K ahorro/año"],
  },
  {
    initials: "RS",
    color: "#655DC6",
    name: "Roberto Silva",
    role: "CEO, Consultoría Silva",
    quote: "La interfaz moderna convenció a nuestros clientes inmediatamente. ROI positivo desde el primer mes. Ahorro del 52%.",
    tags: ["180 docs/mes", "$32K ahorro/año"],
  },
];

export default function SignaHome() {
  return (
    <>
      <ScrollReveal />
      {/* Structured Data for SEO */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify([
            signaOrganizationSchema,
            signaServiceSchema,
            signaFAQSchema,
            signaBreadcrumbSchema
          ])
        }}
      />

      <Header />
      <main>
        {/* Hero Section */}
        <section className="pt-32 pb-20 bg-[#202945] relative overflow-hidden" role="banner">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <header data-sr>
                <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#1ECAD3]/10 border border-[#1ECAD3]/20 rounded-full mb-6">
                  <span className="w-2 h-2 bg-[#1ECAD3] rounded-full"></span>
                  <span className="text-[#1ECAD3] text-sm font-medium">Signa · Firma electrónica de JAAK</span>
                </div>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-white mb-6">
                  <span className="text-[#0066ff]">Firma Electrónica México</span>
                </h1>
                <p className="text-xl text-white/70 mb-8" role="text">
                  <strong className="text-white">Firma electrónica profesional para México</strong> con tecnología 2026.
                  Certificado <strong className="text-[#1ECAD3]">NOM-151</strong>, soporte 24/7.
                  <strong className="text-white"> 50% más barata que Mifiel</strong> — solo $15 por documento.
                </p>

                {/* Price Comparison */}
                <div className="flex flex-wrap gap-4 mb-8">
                  <div className="bg-white/5 border border-white/15 rounded-lg p-4 flex-1 min-w-[140px]">
                    <div className="text-white/50 text-sm font-medium">Competencia</div>
                    <div className="text-white/70 text-2xl font-bold">$29.90</div>
                    <div className="text-white/40 text-sm">por firma</div>
                  </div>
                  <div className="flex items-center text-white/50 text-2xl font-bold px-2">VS</div>
                  <div className="bg-[#1ECAD3]/10 border border-[#1ECAD3]/30 rounded-lg p-4 flex-1 min-w-[140px] relative">
                    <div className="absolute -top-2 -right-2 bg-[#1ECAD3] text-[#0E2233] text-xs font-bold px-2 py-1 rounded-full">50% MENOS</div>
                    <div className="text-[#1ECAD3] text-sm font-medium">Signa</div>
                    <div className="text-[#1ECAD3] text-2xl font-bold">$15.00</div>
                    <div className="text-[#1ECAD3]/70 text-sm">por firma</div>
                  </div>
                </div>

                <div className="flex flex-wrap gap-4">
                  <Link
                    href="/signa/calculadora"
                    className="px-6 py-3 bg-[#1ECAD3] text-[#0E2233] font-bold rounded-lg hover:bg-[#19b3bb] transition-all"
                  >
                    Calcular mi ahorro
                  </Link>
                  <Link
                    href="/signa/comparacion"
                    className="px-6 py-3 bg-white/10 text-white font-semibold rounded-lg hover:bg-white/20 transition-all border border-white/20"
                  >
                    Ver comparación
                  </Link>
                </div>

                <div className="mt-8 flex flex-col gap-2.5 text-sm">
                  <div className="flex items-center gap-2.5 text-white/70">
                    <CheckIcon /> Migración gratis desde cualquier plataforma
                  </div>
                  <div className="flex items-center gap-2.5 text-white/70">
                    <CheckIcon /> Deploy en 24 horas, vs. semanas con otros proveedores
                  </div>
                  <div className="flex items-center gap-2.5 text-white/70">
                    <CheckIcon /> NOM-151 certificado, validez legal completa
                  </div>
                  <div className="flex items-center gap-2.5 text-white/70">
                    <CheckIcon /> Garantía de 30 días: si no ahorras, te devolvemos tu dinero
                  </div>
                </div>
              </header>

              <div data-sr="right">
                <SignaSavingsCalculator />
              </div>
            </div>
          </div>
        </section>

        {/* Comparison Grid */}
        <section className="py-20 bg-white" role="region" aria-labelledby="why-choose-signa">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div data-sr className="text-center mb-16">
              <h2 id="why-choose-signa" className="text-3xl md:text-4xl font-black text-gray-900 mb-4">
                ¿Por qué <span className="text-[#1ECAD3]">Signa</span> es la
                <span className="text-[#0066ff]"> mejor firma electrónica en México</span>?
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                <strong>Más de 1,000 empresas ya migraron</strong> de Mifiel a Signa.
                Descubre por qué es la <strong>mejor alternativa a Mifiel</strong> en México:
                50% más barata, tecnología 2026 y validez legal NOM-151.
              </p>
            </div>

            <div data-sr-grid className="grid md:grid-cols-3 gap-8">
              <div className="bg-gray-50 rounded-xl p-8">
                <h3 className="text-xl font-bold text-gray-900 mb-6 text-center">Competencia actual</h3>
                <div className="space-y-3">
                  {COMPETITOR_POINTS.map((point) => (
                    <div key={point} className="flex items-center gap-2.5 text-sm text-gray-600">
                      <DashIcon /> {point}
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-gradient-to-br from-[#1ECAD3]/5 to-[#0066ff]/5 border-2 border-[#1ECAD3] rounded-xl p-8 relative">
                <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-[#1ECAD3] text-[#0E2233] text-xs font-bold px-3 py-1 rounded-full">
                  RECOMENDADO
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-6 text-center">Signa (nosotros)</h3>
                <div className="space-y-3">
                  {SIGNA_POINTS.map((point) => (
                    <div key={point} className="flex items-center gap-2.5 text-sm text-gray-900 font-medium">
                      <CheckIcon /> {point}
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-gray-50 rounded-xl p-8">
                <h3 className="text-xl font-bold text-gray-900 mb-6 text-center">Otros proveedores</h3>
                <div className="space-y-3">
                  {OTHERS_POINTS.map((point) => (
                    <div key={point} className="flex items-center gap-2.5 text-sm text-gray-600">
                      <DashIcon /> {point}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Success Stories */}
        <section className="py-20 bg-[#202945]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div data-sr className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-black text-white mb-4">
                Lo que dicen nuestros clientes
              </h2>
              <p className="text-xl text-white/60">
                Empresas que ya migraron y están ahorrando en su operación mensual.
              </p>
            </div>

            <div data-sr-grid className="grid md:grid-cols-3 gap-8">
              {TESTIMONIALS.map((t) => (
                <div key={t.name} className="bg-white/5 border border-white/10 rounded-xl p-6">
                  <div className="flex items-start mb-4">
                    <div className="flex-shrink-0">
                      <div
                        className="w-12 h-12 rounded-full flex items-center justify-center"
                        style={{ background: t.color }}
                      >
                        <span className="text-[#0E2233] font-bold">{t.initials}</span>
                      </div>
                    </div>
                    <div className="ml-4">
                      <div className="text-white font-semibold">{t.name}</div>
                      <div className="text-white/60 text-sm">{t.role}</div>
                    </div>
                  </div>
                  <p className="text-white/80 text-sm mb-4">&ldquo;{t.quote}&rdquo;</p>
                  <div className="flex gap-3 text-xs flex-wrap">
                    {t.tags.map((tag) => (
                      <span key={tag} className="bg-white/10 text-white/80 px-2 py-1 rounded">{tag}</span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-r from-[#1ECAD3] to-[#0066ff]">
          <div data-sr className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl md:text-4xl font-black text-white mb-6">
              ¿Listo para ahorrar 50% en firma electrónica?
            </h2>
            <p className="text-xl text-white/90 mb-8">
              Migración gratis, setup en 24 horas, soporte 24/7.
              <strong> Garantía de 30 días o te devolvemos tu dinero.</strong>
            </p>

            <div className="flex flex-wrap gap-4 justify-center mb-8">
              <Link
                href="/signa/calculadora"
                className="px-8 py-4 bg-white text-[#0066ff] font-bold rounded-lg hover:bg-gray-50 transition-all shadow-lg"
              >
                Ver mi ahorro exacto
              </Link>
              <Link
                href="/contacto"
                className="px-8 py-4 bg-transparent border-2 border-white text-white font-bold rounded-lg hover:bg-white hover:text-[#0066ff] transition-all"
              >
                Hablar con un experto
              </Link>
            </div>

            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 inline-block">
              <p className="text-white text-sm">
                <strong>Garantía de 30 días:</strong> si no ahorras dinero como prometemos, te devolvemos el 100% sin hacer preguntas.
              </p>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
