import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Link from "next/link";

export const metadata = {
  title: "Empresas Reguladas | JAAK",
  description: "Verificación de identidad para empresas sujetas a regulación. Evidencia auditable para supervisores.",
};

export default function EmpresasReguladas() {
  const industries = [
    { name: "Seguros", description: "Aseguradoras y agentes de seguros", icon: "🛡️" },
    { name: "Afores", description: "Administradoras de fondos para el retiro", icon: "💰" },
    { name: "Casas de bolsa", description: "Intermediarios bursátiles", icon: "📈" },
    { name: "Sofomes", description: "Sociedades financieras de objeto múltiple", icon: "🏦" },
    { name: "Afianzadoras", description: "Instituciones de fianzas", icon: "📋" },
    { name: "Arrendadoras", description: "Arrendamiento financiero", icon: "🔑" },
  ];

  const challenges = [
    {
      problem: "Procesos manuales de verificación",
      solution: "Automatización completa con IA que reduce tiempo de minutos a segundos",
    },
    {
      problem: "Documentación fragmentada",
      solution: "Expediente digital unificado con toda la evidencia en un solo lugar",
    },
    {
      problem: "Auditorías costosas y tardadas",
      solution: "Reportes listos para entregar a reguladores en cualquier momento",
    },
    {
      problem: "Alto riesgo de suplantación",
      solution: "Biometría certificada con prueba de vida que elimina el fraude",
    },
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
                <span className="text-[#0066ff] text-sm font-medium">Soluciones por industria</span>
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-white mb-6">
                Empresas reguladas
              </h1>
              <p className="text-xl text-white/60 mb-8">
                Para organizaciones sujetas a supervisión regulatoria que necesitan verificación de identidad con evidencia defendible.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link
                  href="/contacto"
                  className="px-6 py-3 bg-[#0066ff] text-white font-semibold rounded-lg hover:bg-[#0052cc] transition-all"
                >
                  Hablar con ventas
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Industries */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-black text-gray-900 mb-4">
                Industrias que servimos
              </h2>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {industries.map((industry, index) => (
                <div key={index} className="bg-gray-50 rounded-xl p-6 hover:shadow-lg transition-shadow">
                  <div className="text-4xl mb-4">{industry.icon}</div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{industry.name}</h3>
                  <p className="text-gray-600">{industry.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Challenges and Solutions */}
        <section className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-black text-gray-900 mb-4">
                Problemas que resolvemos
              </h2>
            </div>
            <div className="space-y-6">
              {challenges.map((item, index) => (
                <div key={index} className="bg-white rounded-xl p-8 shadow-sm">
                  <div className="grid md:grid-cols-2 gap-8 items-center">
                    <div>
                      <div className="flex items-center gap-3 text-red-500 mb-2">
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                        </svg>
                        <span className="font-semibold">Problema</span>
                      </div>
                      <p className="text-gray-900 text-lg">{item.problem}</p>
                    </div>
                    <div>
                      <div className="flex items-center gap-3 text-[#00d4aa] mb-2">
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        <span className="font-semibold">Solución JAAK</span>
                      </div>
                      <p className="text-gray-900 text-lg">{item.solution}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-20 bg-[#0a0a0a]">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl md:text-4xl font-black text-white mb-6">
              Cumple con tu regulación sin complicaciones
            </h2>
            <p className="text-xl text-white/60 mb-8">
              Agenda una llamada para conocer cómo JAAK se adapta a tu industria.
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
