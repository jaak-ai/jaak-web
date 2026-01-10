import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Link from "next/link";
import Image from "next/image";

export const metadata: Metadata = {
  title: "KYC para Instituciones Financieras | JAAK",
  description: "Verificación de identidad para bancos, fintechs y entidades financieras. Cumple CNBV, UIF, LFPIORPI y regulación antilavado en México.",
  keywords: ["KYC bancos", "verificación identidad fintech", "CNBV", "UIF", "LFPIORPI", "antilavado", "onboarding bancario", "compliance financiero"],
  openGraph: {
    title: "KYC para Instituciones Financieras | JAAK",
    description: "Verificación de identidad para bancos y fintechs. Cumple CNBV, UIF y regulación antilavado.",
    type: "website",
  },
};

export default function InstitucionesFinancieras() {
  const regulations = [
    { name: "CNBV", description: "Circular Única de Bancos - Disposiciones de carácter general" },
    { name: "LFPIORPI", description: "Ley Federal para la Prevención e Identificación de Operaciones con Recursos de Procedencia Ilícita" },
    { name: "UIF", description: "Unidad de Inteligencia Financiera - Reportes de operaciones" },
    { name: "CONDUSEF", description: "Protección al usuario de servicios financieros" },
  ];

  const useCases = [
    {
      title: "Apertura de cuentas digitales",
      description: "Onboarding 100% remoto con verificación biométrica y documental que cumple regulación.",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M18 9v3m0 0v3m0-3h3m-3 0h-3m-2-5a4 4 0 11-8 0 4 4 0 018 0zM3 20a6 6 0 0112 0v1H3v-1z" />
        </svg>
      ),
    },
    {
      title: "Actualización de expedientes",
      description: "Renovación de KYC sin fricciones para clientes existentes.",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
        </svg>
      ),
    },
    {
      title: "Operaciones de alto valor",
      description: "Verificación reforzada para transacciones que requieren due diligence adicional.",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
    },
    {
      title: "Créditos y préstamos",
      description: "Originación digital de crédito con firma electrónica vinculada a identidad.",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
        </svg>
      ),
    },
  ];

  const benefits = [
    "Reducción de tiempo de onboarding de días a minutos",
    "Disminución de fraude por suplantación de identidad",
    "Evidencia auditable para inspecciones de CNBV",
    "Cumplimiento automático de reportes UIF",
    "Menor carga operativa en mesa de control",
    "Experiencia de usuario sin fricciones",
  ];

  return (
    <>
      <Header />
      <main>
        {/* Hero */}
        <section className="pt-32 pb-20 bg-[#0a0a0a]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#0066ff]/10 border border-[#0066ff]/20 rounded-full mb-6">
                  <span className="w-2 h-2 bg-[#0066ff] rounded-full"></span>
                  <span className="text-[#0066ff] text-sm font-medium">Soluciones por industria</span>
                </div>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-white mb-6">
                  Instituciones financieras
                </h1>
                <p className="text-xl text-white/60 mb-8">
                  Verificación de identidad diseñada para el sector financiero mexicano. Cumple con CNBV, UIF y toda la regulación aplicable desde el día uno.
                </p>
                <div className="flex flex-wrap gap-4">
                  <Link
                    href="/contacto"
                    className="px-6 py-3 bg-[#0066ff] text-white font-semibold rounded-lg hover:bg-[#0052cc] transition-all"
                  >
                    Hablar con ventas
                  </Link>
                  <Link
                    href="https://platform.dev.jaak.ai/#/signup"
                    target="_blank"
                    className="px-6 py-3 bg-white/10 text-white font-semibold rounded-lg hover:bg-white/20 transition-all"
                  >
                    Probar gratis
                  </Link>
                </div>
              </div>
              <div className="relative">
                <Image
                  src="/images/sectors/bancos.png"
                  alt="Instituciones financieras"
                  width={500}
                  height={400}
                  className="rounded-2xl"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Regulations */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-black text-gray-900 mb-4">
                Cumplimiento regulatorio integral
              </h2>
              <p className="text-xl text-gray-600">
                Diseñado para satisfacer las exigencias del marco regulatorio mexicano.
              </p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {regulations.map((reg, index) => (
                <div key={index} className="bg-gray-50 rounded-xl p-6 text-center">
                  <div className="text-2xl font-black text-[#0066ff] mb-3">{reg.name}</div>
                  <p className="text-gray-600 text-sm">{reg.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Use Cases */}
        <section className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-black text-gray-900 mb-4">
                Casos de uso
              </h2>
            </div>
            <div className="grid md:grid-cols-2 gap-8">
              {useCases.map((useCase, index) => (
                <div key={index} className="bg-white rounded-xl p-8 shadow-sm hover:shadow-lg transition-shadow">
                  <div className="w-16 h-16 bg-[#0066ff]/10 rounded-xl flex items-center justify-center text-[#0066ff] mb-6">
                    {useCase.icon}
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{useCase.title}</h3>
                  <p className="text-gray-600">{useCase.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits */}
        <section className="py-20 bg-[#0a0a0a]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl md:text-4xl font-black text-white mb-8">
                  Resultados que importan
                </h2>
                <div className="space-y-4">
                  {benefits.map((benefit, index) => (
                    <div key={index} className="flex items-center gap-4">
                      <div className="w-6 h-6 bg-[#00d4aa] rounded-full flex items-center justify-center flex-shrink-0">
                        <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                      <span className="text-white/80">{benefit}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div className="bg-white/5 border border-white/10 rounded-2xl p-8">
                <div className="text-center">
                  <div className="text-6xl font-black text-white mb-2">95%</div>
                  <div className="text-white/60">de verificaciones automáticas</div>
                </div>
                <div className="grid grid-cols-2 gap-6 mt-8">
                  <div className="text-center">
                    <div className="text-3xl font-bold text-[#00d4aa]">&lt;30s</div>
                    <div className="text-white/50 text-sm">tiempo promedio</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-[#00d4aa]">99.9%</div>
                    <div className="text-white/50 text-sm">disponibilidad</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-20 bg-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl md:text-4xl font-black text-gray-900 mb-6">
              ¿Listo para transformar tu onboarding?
            </h2>
            <p className="text-xl text-gray-600 mb-8">
              Agenda una demo personalizada para tu institución.
            </p>
            <Link
              href="/contacto"
              className="inline-flex px-8 py-4 bg-[#0066ff] text-white font-bold rounded-lg hover:bg-[#0052cc] transition-all"
            >
              Solicitar demo
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
