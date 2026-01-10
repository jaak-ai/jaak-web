import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Verificación Empresarial KYB | JAAK",
  description: "KYB automatizado para verificar personas morales en México. Identifica beneficiarios finales, consulta SAT, RFC y listas PEP. Cumple LFPIORPI y CNBV.",
  keywords: ["KYB", "verificación empresarial", "beneficiarios finales", "personas morales", "due diligence", "SAT", "RFC", "listas PEP", "LFPIORPI"],
  openGraph: {
    title: "Verificación Empresarial KYB | JAAK",
    description: "Verifica personas morales y beneficiarios finales. KYB automatizado para regulación antilavado.",
    type: "website",
  },
};

export default function VerificacionEmpresarial() {
  const features = [
    {
      title: "Consulta de actas constitutivas",
      description: "Extraemos y validamos información de actas constitutivas y poderes notariales automáticamente.",
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
        </svg>
      ),
    },
    {
      title: "Validación en SAT",
      description: "Confirmamos RFC, situación fiscal y constancia de situación fiscal directamente con el SAT.",
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
    },
    {
      title: "Identificación de beneficiarios finales",
      description: "Mapeamos la estructura accionaria para identificar a los beneficiarios finales conforme a LFPIORPI.",
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
        </svg>
      ),
    },
    {
      title: "Listas restrictivas",
      description: "Consultamos listas PEP, sanciones internacionales y listas negras de manera automática.",
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
        </svg>
      ),
    },
  ];

  const validations = [
    "RFC y situación fiscal en SAT",
    "Registro Público de Comercio",
    "Actas constitutivas",
    "Poderes notariales",
    "Estructura accionaria",
    "Beneficiarios finales",
    "Listas PEP nacionales",
    "Sanciones OFAC/ONU",
    "Listas negras locales",
    "Representantes legales",
  ];

  return (
    <>
      <Header />
      <main>
        {/* Hero */}
        <section className="pt-32 pb-20 bg-[#0a0a0a]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl">
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#0066ff]/10 border border-[#0066ff]/20 rounded-full mb-6">
                <span className="w-2 h-2 bg-[#0066ff] rounded-full"></span>
                <span className="text-[#0066ff] text-sm font-medium">Plataforma</span>
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-white mb-6">
                Verificación empresarial (KYB)
              </h1>
              <p className="text-xl text-white/60 mb-8">
                Verifica personas morales, identifica beneficiarios finales y cumple con regulación antilavado. Todo automatizado y con evidencia auditable.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link
                  href="/contacto"
                  className="px-6 py-3 bg-[#0066ff] text-white font-semibold rounded-lg hover:bg-[#0052cc] transition-all"
                >
                  Solicitar demo
                </Link>
                <Link
                  href="/documentacion"
                  className="px-6 py-3 bg-white/10 text-white font-semibold rounded-lg hover:bg-white/20 transition-all"
                >
                  Ver documentación
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Features */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-black text-gray-900 mb-4">
                Due diligence empresarial automatizado
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Reduce el tiempo de verificación de días a minutos sin sacrificar profundidad.
              </p>
            </div>
            <div className="grid md:grid-cols-2 gap-8">
              {features.map((feature, index) => (
                <div key={index} className="bg-gray-50 rounded-xl p-8 hover:shadow-lg transition-shadow">
                  <div className="w-12 h-12 bg-[#0066ff] rounded-xl flex items-center justify-center text-white mb-6">
                    {feature.icon}
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{feature.title}</h3>
                  <p className="text-gray-600">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Validations */}
        <section className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl md:text-4xl font-black text-gray-900 mb-6">
                  Validaciones incluidas
                </h2>
                <p className="text-xl text-gray-600 mb-8">
                  Cubrimos todas las validaciones que exige la regulación mexicana para personas morales.
                </p>
                <div className="grid grid-cols-2 gap-4">
                  {validations.map((validation, index) => (
                    <div key={index} className="flex items-center gap-3">
                      <svg className="w-5 h-5 text-[#00d4aa] flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="text-gray-700">{validation}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div className="bg-white rounded-2xl p-8 shadow-lg">
                <h3 className="text-xl font-bold text-gray-900 mb-6">Cumplimiento regulatorio</h3>
                <div className="space-y-4">
                  <div className="flex items-start gap-4 p-4 bg-gray-50 rounded-lg">
                    <div className="w-10 h-10 bg-[#0066ff]/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <span className="text-[#0066ff] font-bold">1</span>
                    </div>
                    <div>
                      <div className="font-semibold text-gray-900">LFPIORPI</div>
                      <div className="text-sm text-gray-600">Identificación de beneficiarios finales</div>
                    </div>
                  </div>
                  <div className="flex items-start gap-4 p-4 bg-gray-50 rounded-lg">
                    <div className="w-10 h-10 bg-[#0066ff]/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <span className="text-[#0066ff] font-bold">2</span>
                    </div>
                    <div>
                      <div className="font-semibold text-gray-900">CUB CNBV</div>
                      <div className="text-sm text-gray-600">Circular Única de Bancos</div>
                    </div>
                  </div>
                  <div className="flex items-start gap-4 p-4 bg-gray-50 rounded-lg">
                    <div className="w-10 h-10 bg-[#0066ff]/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <span className="text-[#0066ff] font-bold">3</span>
                    </div>
                    <div>
                      <div className="font-semibold text-gray-900">GAFI</div>
                      <div className="text-sm text-gray-600">Recomendaciones internacionales</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-20 bg-[#0a0a0a]">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl md:text-4xl font-black text-white mb-6">
              Automatiza tu due diligence empresarial
            </h2>
            <p className="text-xl text-white/60 mb-8">
              Reduce tiempos de onboarding corporativo de días a minutos.
            </p>
            <Link
              href="/contacto"
              className="inline-flex px-8 py-4 bg-[#0066ff] text-white font-bold rounded-lg hover:bg-[#0052cc] transition-all"
            >
              Solicitar demo gratuita
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
