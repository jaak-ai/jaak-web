import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ClientLogos from "@/components/ClientLogos";
import Link from "next/link";
import { signaOrganizationSchema, signaServiceSchema, signaFAQSchema, signaBreadcrumbSchema } from "./schema";

export const metadata: Metadata = {
  title: "Signa by JAAK — Firma electrónica con validez legal NOM-151 en México",
  description:
    "Firma electrónica con validez legal NOM-151 para México. Expediente probatorio completo, sellos de tiempo y precios transparentes por firma. Signa by JAAK.",
  authors: [{ name: "Signa by JAAK", url: "https://jaak.ai/signa" }],
  creator: "JAAK",
  publisher: "Signa by JAAK",
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
    title: "Signa by JAAK — Firma electrónica con validez legal NOM-151",
    description:
      "Firma electrónica con validez legal NOM-151 para México. Expediente probatorio completo y precios transparentes por firma.",
    type: "website",
    url: "https://jaak.ai/signa",
    siteName: "Signa by JAAK",
    locale: "es_MX",
    images: [
      {
        url: "https://jaak.ai/signa-og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Signa by JAAK — Firma electrónica NOM-151",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Signa by JAAK — Firma electrónica con validez legal NOM-151",
    description:
      "Firma electrónica con validez legal NOM-151 para México. Expediente probatorio completo y precios transparentes.",
    images: ["https://jaak.ai/signa-twitter-image.jpg"],
  },
  category: "Technology",
  classification: "Firma Electrónica, Tecnología, Software Empresarial",
  other: {
    "geo.region": "MX",
    "geo.country": "México",
    "geo.placename": "México",
    language: "Spanish",
    "target-audience": "Empresas, PyMEs, Profesionales",
    distribution: "global",
  },
};

export default function SignaHome() {
  return (
    <>
      {/* Structured Data for SEO */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify([
            signaOrganizationSchema,
            signaServiceSchema,
            signaFAQSchema,
            signaBreadcrumbSchema,
          ]),
        }}
      />

      <Header />
      <main>
        {/* Hero */}
        <section className="pt-32 pb-20 bg-gradient-to-br from-[#0E1133] via-[#0E1133] to-[#1a1a1a]" role="banner">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <header>
                <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#2DB6C1]/10 border border-[#2DB6C1]/20 rounded-full mb-6">
                  <span className="w-2 h-2 bg-[#2DB6C1] rounded-full"></span>
                  <span className="text-[#2DB6C1] text-sm font-medium uppercase tracking-[0.18em]">Firma electrónica NOM-151</span>
                </div>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-white mb-6">
                  Firma electrónica con validez legal en México
                </h1>
                <p className="text-xl text-white/70 mb-8">
                  Firma tus documentos con <strong className="text-white">validez legal NOM-151</strong> y{" "}
                  <strong className="text-[#2DB6C1]">expediente probatorio completo</strong>. Precios transparentes por firma,
                  migración acompañada y soporte 24/7 en español.
                </p>

                <div className="flex flex-wrap gap-4">
                  <Link
                    href="/signa/calculadora"
                    className="px-6 py-3 bg-[#2DB6C1] text-black font-bold rounded-lg hover:bg-[#00c499] transition-all"
                  >
                    Calcular mi ahorro
                  </Link>
                  <Link
                    href="/precios"
                    className="px-6 py-3 bg-white/10 text-white font-semibold rounded-lg hover:bg-white/20 transition-all border border-white/20"
                  >
                    Ver precios transparentes
                  </Link>
                </div>

                <div className="mt-8 flex flex-col gap-3 text-sm">
                  <div className="flex items-center gap-2 text-white/80">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#2DB6C1]"></span> Validez legal NOM-151 en cada firma
                  </div>
                  <div className="flex items-center gap-2 text-white/80">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#2DB6C1]"></span> Expediente probatorio con sellos de tiempo
                  </div>
                  <div className="flex items-center gap-2 text-white/80">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#2DB6C1]"></span> Migración acompañada desde tu plataforma actual
                  </div>
                  <div className="flex items-center gap-2 text-white/80">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#2DB6C1]"></span> Precios transparentes, sin costos de setup
                  </div>
                </div>
              </header>

              <div className="relative">
                <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8">
                  <h2 className="text-2xl font-bold text-white mb-4">Calcula tu ahorro</h2>
                  <p className="text-white/70 text-sm mb-6">
                    Estima cuánto puedes ahorrar según tu volumen mensual de firmas, sobre precios publicados y transparentes.
                  </p>
                  <ul className="space-y-3 mb-8">
                    <li className="flex items-start gap-3 text-white/80 text-sm">
                      <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-[#2DB6C1] flex-shrink-0"></span> Tarifa por firma clara, sin mínimos mensuales
                    </li>
                    <li className="flex items-start gap-3 text-white/80 text-sm">
                      <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-[#2DB6C1] flex-shrink-0"></span> Validez legal NOM-151 incluida
                    </li>
                    <li className="flex items-start gap-3 text-white/80 text-sm">
                      <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-[#2DB6C1] flex-shrink-0"></span> Expediente probatorio en cada documento
                    </li>
                  </ul>
                  <Link
                    href="/signa/calculadora"
                    className="block w-full text-center px-6 py-3 bg-[#2DB6C1] text-black font-bold rounded-lg hover:bg-[#00c499] transition-all"
                  >
                    Calcular mi ahorro
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Value proposition */}
        <section className="py-20 bg-white" role="region" aria-labelledby="why-choose-signa">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <p className="text-xs font-semibold uppercase tracking-[0.20em] text-[#2DB6C1] mb-3">Por qué Signa</p>
              <h2 id="why-choose-signa" className="text-3xl md:text-4xl font-black text-gray-900 mb-4">
                Firma con respaldo legal, no solo con un clic
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Signa está construida para el mercado mexicano: validez legal NOM-151, expediente probatorio completo
                y precios transparentes.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              <div className="rounded-xl p-8 border border-gray-200 bg-white">
                <h3 className="text-xl font-bold text-gray-900 mb-3">Validez legal NOM-151</h3>
                <p className="text-gray-600 text-sm">
                  Cada firma cumple la NOM-151-SCFI-2016. Tus contratos y documentos tienen plena validez legal en México.
                </p>
              </div>

              <div className="rounded-xl p-8 border border-[#2DB6C1] bg-[#2DB6C1]/5">
                <h3 className="text-xl font-bold text-gray-900 mb-3">Expediente probatorio completo</h3>
                <p className="text-gray-600 text-sm">
                  Constancia de conservación, sellos de tiempo y evidencia de integridad para respaldar cada documento
                  ante terceros.
                </p>
              </div>

              <div className="rounded-xl p-8 border border-gray-200 bg-white">
                <h3 className="text-xl font-bold text-gray-900 mb-3">Precios transparentes</h3>
                <p className="text-gray-600 text-sm mb-4">
                  Tarifa por firma clara y publicada, sin costos de setup ni mínimos mensuales.
                </p>
                <Link href="/precios" className="text-[#2DB6C1] font-semibold text-sm hover:underline">
                  Ver precios transparentes
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Client logos */}
        <ClientLogos />

        {/* CTA */}
        <section className="py-20 bg-gradient-to-r from-[#2DB6C1] to-[#212A45]">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl md:text-4xl font-black text-white mb-6">
              Firma con validez legal desde hoy
            </h2>
            <p className="text-xl text-white/90 mb-8">
              Validez legal NOM-151, expediente probatorio completo y precios transparentes. Migración acompañada y
              soporte 24/7 en español.
            </p>

            <div className="flex flex-wrap gap-4 justify-center">
              <Link
                href="/signa/calculadora"
                className="px-8 py-4 bg-white text-[#212A45] font-bold rounded-lg hover:bg-gray-50 transition-all shadow-lg"
              >
                Calcular mi ahorro
              </Link>
              <Link
                href="/contacto"
                className="px-8 py-4 bg-transparent border-2 border-white text-white font-bold rounded-lg hover:bg-white hover:text-[#212A45] transition-all"
              >
                Agendar demo
              </Link>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
