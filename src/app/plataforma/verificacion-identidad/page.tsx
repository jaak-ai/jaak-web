import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Link from "next/link";
import Image from "next/image";

export const metadata = {
  title: "Verificación de Identidad | JAAK",
  description: "KYC biométrico con prueba de vida certificada. Verifica la identidad de tus usuarios en segundos con tecnología de IA.",
};

export default function VerificacionIdentidad() {
  const features = [
    {
      title: "Prueba de vida pasiva",
      description: "Detectamos automáticamente si el usuario es una persona real sin fricciones adicionales.",
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
        </svg>
      ),
    },
    {
      title: "Verificación de documentos",
      description: "Validamos INE, pasaporte y otros documentos oficiales con OCR avanzado y detección de alteraciones.",
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
        </svg>
      ),
    },
    {
      title: "Comparación facial",
      description: "Comparamos el rostro del usuario con la foto del documento usando algoritmos certificados por NIST.",
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
        </svg>
      ),
    },
    {
      title: "Validación con fuentes oficiales",
      description: "Consultamos bases de datos oficiales como INE, SAT y RENAPO para confirmar la identidad.",
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
        </svg>
      ),
    },
  ];

  const steps = [
    { step: "01", title: "Captura de documento", description: "El usuario toma foto de su identificación oficial" },
    { step: "02", title: "Selfie con prueba de vida", description: "Captura facial con detección de vida pasiva" },
    { step: "03", title: "Verificación automática", description: "IA valida documento, rostro y consulta fuentes oficiales" },
    { step: "04", title: "Resultado en segundos", description: "Respuesta inmediata con score de confianza y evidencia" },
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
                  <span className="text-[#0066ff] text-sm font-medium">Plataforma</span>
                </div>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-white mb-6">
                  Verificación de identidad
                </h1>
                <p className="text-xl text-white/60 mb-8">
                  KYC biométrico con prueba de vida certificada por iBeta. Verifica la identidad de tus usuarios en segundos con tecnología de IA que cumple con regulación mexicana.
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
              <div className="relative">
                <div className="bg-gradient-to-br from-[#0066ff]/20 to-[#00d4aa]/20 rounded-2xl p-8 border border-white/10">
                  <Image
                    src="/images/jaak-face-recognition.png"
                    alt="Verificación facial JAAK"
                    width={500}
                    height={400}
                    className="rounded-xl"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Features */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-black text-gray-900 mb-4">
                Verificación completa en un solo flujo
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Combina múltiples capas de verificación para garantizar que cada usuario es quien dice ser.
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

        {/* Process */}
        <section className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-black text-gray-900 mb-4">
                Cómo funciona
              </h2>
              <p className="text-xl text-gray-600">
                Un proceso simple para el usuario, robusto para tu compliance.
              </p>
            </div>
            <div className="grid md:grid-cols-4 gap-8">
              {steps.map((item, index) => (
                <div key={index} className="text-center">
                  <div className="text-5xl font-black text-[#0066ff]/20 mb-4">{item.step}</div>
                  <h3 className="text-lg font-bold text-gray-900 mb-2">{item.title}</h3>
                  <p className="text-gray-600 text-sm">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Certifications */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-black text-gray-900 mb-4">
                Certificaciones que respaldan
              </h2>
            </div>
            <div className="flex flex-wrap justify-center gap-8">
              <div className="flex items-center gap-4 px-6 py-4 bg-gray-50 rounded-xl">
                <Image src="/images/certifications/ibeta.png" alt="iBeta" width={60} height={60} />
                <div>
                  <div className="font-bold text-gray-900">iBeta</div>
                  <div className="text-sm text-gray-600">Prueba de vida certificada</div>
                </div>
              </div>
              <div className="flex items-center gap-4 px-6 py-4 bg-gray-50 rounded-xl">
                <Image src="/images/certifications/nist.png" alt="NIST" width={60} height={60} />
                <div>
                  <div className="font-bold text-gray-900">NIST FRVT</div>
                  <div className="text-sm text-gray-600">Reconocimiento facial evaluado</div>
                </div>
              </div>
              <div className="flex items-center gap-4 px-6 py-4 bg-gray-50 rounded-xl">
                <Image src="/images/certifications/iso-27001.png" alt="ISO 27001" width={60} height={60} />
                <div>
                  <div className="font-bold text-gray-900">ISO 27001</div>
                  <div className="text-sm text-gray-600">Seguridad de información</div>
                </div>
              </div>
              <div className="flex items-center gap-4 px-6 py-4 bg-gray-50 rounded-xl">
                <Image src="/images/certifications/iso-9001.png" alt="ISO 9001" width={60} height={60} />
                <div>
                  <div className="font-bold text-gray-900">ISO 9001</div>
                  <div className="text-sm text-gray-600">Gestión de calidad</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-20 bg-[#0a0a0a]">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl md:text-4xl font-black text-white mb-6">
              ¿Listo para verificar identidades con confianza?
            </h2>
            <p className="text-xl text-white/60 mb-8">
              Agenda una demo y descubre cómo JAAK puede proteger tu onboarding.
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
