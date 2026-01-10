import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Link from "next/link";

export const metadata = {
  title: "Onboarding Digital | JAAK",
  description: "Alta de clientes 100% remoto con verificación de identidad. Reduce fricción y aumenta conversión.",
};

export default function OnboardingDigital() {
  const steps = [
    { step: "1", title: "Captura de documento", description: "El usuario toma foto de su INE, pasaporte o documento oficial", time: "5 seg" },
    { step: "2", title: "Selfie con vida", description: "Captura facial con prueba de vida pasiva integrada", time: "3 seg" },
    { step: "3", title: "Verificación IA", description: "Validamos documento, comparamos rostro y consultamos fuentes", time: "10 seg" },
    { step: "4", title: "Resultado", description: "Aprobación automática o escalamiento a revisión manual", time: "2 seg" },
  ];

  const metrics = [
    { value: "< 30s", label: "Tiempo promedio de verificación" },
    { value: "95%", label: "Tasa de aprobación automática" },
    { value: "3x", label: "Aumento en conversión vs presencial" },
    { value: "99.9%", label: "Disponibilidad del servicio" },
  ];

  const channels = [
    { name: "Web responsive", description: "Funciona en cualquier navegador moderno" },
    { name: "SDK móvil", description: "Integración nativa para iOS y Android" },
    { name: "WhatsApp", description: "Onboarding conversacional por mensajería" },
    { name: "API directa", description: "Integración backend a backend" },
  ];

  return (
    <>
      <Header />
      <main>
        {/* Hero */}
        <section className="pt-32 pb-20 bg-[#0a0a0a]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl">
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#00d4aa]/10 border border-[#00d4aa]/20 rounded-full mb-6">
                <span className="w-2 h-2 bg-[#00d4aa] rounded-full"></span>
                <span className="text-[#00d4aa] text-sm font-medium">Caso de uso</span>
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-white mb-6">
                Onboarding digital
              </h1>
              <p className="text-xl text-white/60 mb-8">
                Alta de clientes 100% remoto en menos de 30 segundos. Sin fricciones para el usuario, con toda la evidencia que necesita tu compliance.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link
                  href="https://platform.dev.jaak.ai/#/signup"
                  target="_blank"
                  className="px-6 py-3 bg-[#0066ff] text-white font-semibold rounded-lg hover:bg-[#0052cc] transition-all"
                >
                  Probar ahora
                </Link>
                <Link
                  href="/contacto"
                  className="px-6 py-3 bg-white/10 text-white font-semibold rounded-lg hover:bg-white/20 transition-all"
                >
                  Hablar con ventas
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Process */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-black text-gray-900 mb-4">
                Un proceso simple, resultados robustos
              </h2>
            </div>
            <div className="grid md:grid-cols-4 gap-8">
              {steps.map((item, index) => (
                <div key={index} className="text-center">
                  <div className="w-16 h-16 bg-[#0066ff] rounded-full flex items-center justify-center text-white text-2xl font-black mx-auto mb-4">
                    {item.step}
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 mb-2">{item.title}</h3>
                  <p className="text-gray-600 text-sm mb-3">{item.description}</p>
                  <span className="inline-block px-3 py-1 bg-gray-100 text-gray-600 text-xs font-medium rounded-full">
                    ~{item.time}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Metrics */}
        <section className="py-20 bg-[#0a0a0a]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-4 gap-8">
              {metrics.map((metric, index) => (
                <div key={index} className="text-center">
                  <div className="text-4xl md:text-5xl font-black text-white mb-2">{metric.value}</div>
                  <div className="text-white/60">{metric.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Channels */}
        <section className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-black text-gray-900 mb-4">
                Múltiples canales de integración
              </h2>
              <p className="text-xl text-gray-600">
                Implementa onboarding donde tus usuarios ya están.
              </p>
            </div>
            <div className="grid md:grid-cols-4 gap-6">
              {channels.map((channel, index) => (
                <div key={index} className="bg-white rounded-xl p-6 text-center shadow-sm">
                  <h3 className="text-lg font-bold text-gray-900 mb-2">{channel.name}</h3>
                  <p className="text-gray-600 text-sm">{channel.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-20 bg-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl md:text-4xl font-black text-gray-900 mb-6">
              Transforma tu proceso de alta
            </h2>
            <p className="text-xl text-gray-600 mb-8">
              Empieza a verificar usuarios hoy mismo.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="https://platform.dev.jaak.ai/#/signup"
                target="_blank"
                className="inline-flex px-8 py-4 bg-[#0066ff] text-white font-bold rounded-lg hover:bg-[#0052cc] transition-all"
              >
                Crear cuenta gratis
              </Link>
              <Link
                href="/contacto"
                className="inline-flex px-8 py-4 bg-gray-100 text-gray-900 font-bold rounded-lg hover:bg-gray-200 transition-all"
              >
                Solicitar demo
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
