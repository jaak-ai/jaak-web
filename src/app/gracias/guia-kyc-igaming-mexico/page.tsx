import type { Metadata } from "next";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ThankYouTracking from "./ThankYouTracking";
import { KYC_IGAMING_EBOOK_DOWNLOAD_URL, KYC_IGAMING_EBOOK_TITLE } from "@/lib/kycIgamingEbook";
import { SCHEDULE_DEMO_URL } from "@/lib/scheduling";

export const metadata: Metadata = {
  title: "Gracias — Descarga tu guía KYC para Gaming | JAAK",
  description: `Descarga la guía "${KYC_IGAMING_EBOOK_TITLE}".`,
  robots: { index: false, follow: true },
};

export default function GraciasGuiaKycIgamingPage() {
  return (
    <>
      <ThankYouTracking />
      <Header />
      <main>
        <section className="pt-40 pb-24 bg-[#02132D] min-h-[70vh] flex items-center">
          <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <div className="w-16 h-16 rounded-full bg-[#1ECAD3]/15 flex items-center justify-center mx-auto mb-6">
              <svg className="w-8 h-8 text-[#1ECAD3]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
            </div>

            <h1 className="text-3xl md:text-4xl font-black text-white mb-4">
              Gracias. Tu guía está lista.
            </h1>
            <p className="text-white/70 mb-10 leading-relaxed">{KYC_IGAMING_EBOOK_TITLE}</p>

            <a
              href={KYC_IGAMING_EBOOK_DOWNLOAD_URL}
              target="_blank"
              rel="noopener noreferrer"
              data-cta="descargar-guia"
              data-source="thank_you"
              className="inline-flex px-6 py-3.5 min-h-[48px] items-center bg-[#1ECAD3] text-[#02132D] font-bold rounded-lg hover:bg-[#17b5bd] transition-all mb-6"
            >
              Descargar guía 2026
            </a>

            <p className="text-white/50 text-sm mb-10">
              Si el archivo no se abre automáticamente, revisa que tu navegador permita ventanas emergentes.
            </p>

            <div className="border-t border-white/10 pt-8">
              <p className="text-white/70 mb-5">¿Quieres ver cómo funciona el KYC para gaming en tu onboarding?</p>
              <a
                href={SCHEDULE_DEMO_URL}
                target="_blank"
                rel="noopener noreferrer"
                data-cta="agendar-demo"
                data-source="thank_you"
                className="inline-flex px-6 py-3 min-h-[44px] items-center bg-white/10 border border-white/20 text-white font-semibold rounded-lg hover:bg-white/20 transition-all mb-8"
              >
                Agendar demo con un especialista
              </a>

              <div className="flex flex-wrap justify-center gap-x-6 gap-y-2 text-sm">
                <Link href="/soluciones/kyc-igaming-mexico" className="text-white/60 hover:text-white underline underline-offset-2">
                  Volver a KYC para Gaming
                </Link>
                <Link href="/listas-de-riesgo-pld-aml" className="text-white/60 hover:text-white underline underline-offset-2">
                  Conocer el paquete AML
                </Link>
                <Link href="/contacto" className="text-white/60 hover:text-white underline underline-offset-2">
                  Hablar con ventas
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
