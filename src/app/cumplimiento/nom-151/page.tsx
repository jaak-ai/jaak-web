import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Link from "next/link";

export const metadata: Metadata = {
  title: "NOM-151 - Firma Electrónica con Validez Legal | JAAK",
  description:
    "Firma electrónica conforme a NOM-151-SCFI-2016. Conservación de mensajes de datos, sellado de tiempo y certificación de documentos con validez legal en México.",
  keywords: [
    "NOM-151",
    "firma electrónica",
    "validez legal",
    "conservación mensajes datos",
    "sellado tiempo",
    "PSC",
    "certificación documentos",
    "e-signature México",
  ],
  openGraph: {
    title: "NOM-151 - Firma Electrónica | JAAK",
    description:
      "Firma electrónica con validez legal conforme a NOM-151. Sellado de tiempo certificado.",
    type: "website",
  },
};

export default function NOM151Page() {
  const requirements = [
    {
      title: "Integridad del documento",
      description: "El contenido del mensaje de datos debe permanecer completo e inalterado desde su creación.",
      solution: "Hash criptográfico SHA-256 que garantiza que el documento no ha sido modificado.",
    },
    {
      title: "Sellado de tiempo",
      description: "Debe existir constancia de la fecha y hora en que el documento fue firmado.",
      solution: "Timestamp certificado por PSC (Prestador de Servicios de Certificación) autorizado.",
    },
    {
      title: "Atribución al firmante",
      description: "Debe poder atribuirse el mensaje de datos a la persona que lo firma.",
      solution: "Verificación biométrica facial + documento oficial que vincula al firmante.",
    },
    {
      title: "Conservación del mensaje",
      description: "El documento y su evidencia deben conservarse de forma accesible para consulta posterior.",
      solution: "Almacenamiento seguro con cifrado AES-256 y replicación geográfica.",
    },
  ];

  const benefits = [
    {
      title: "Validez legal plena",
      description: "Documentos firmados con JAAK tienen el mismo valor probatorio que un documento firmado de puño y letra.",
      icon: "M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z",
    },
    {
      title: "No repudio",
      description: "El firmante no puede negar haber firmado gracias a la evidencia biométrica y documental.",
      icon: "M18.364 18.364A9 9 0 005.636 5.636m12.728 12.728A9 9 0 015.636 5.636m12.728 12.728L5.636 5.636",
    },
    {
      title: "Auditoría completa",
      description: "Cada firma genera un expediente con toda la evidencia del proceso de firmado.",
      icon: "M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2",
    },
    {
      title: "Proceso 100% digital",
      description: "Firma de contratos sin necesidad de imprimir, enviar o almacenar documentos físicos.",
      icon: "M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z",
    },
  ];

  const useCases = [
    "Contratos de servicios financieros",
    "Pagarés y títulos de crédito",
    "Contratos de arrendamiento",
    "Acuerdos de confidencialidad (NDA)",
    "Contratos laborales",
    "Pólizas de seguro",
    "Cartas de instrucciones",
    "Consentimientos informados",
  ];

  return (
    <>
      <Header />
      <main>
        {/* Hero Section */}
        <section className="pt-32 pb-20 bg-[#0a0a0a]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl">
              <Link
                href="/cumplimiento"
                className="inline-flex items-center gap-2 text-white/60 hover:text-white mb-6 transition-colors"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
                Cumplimiento
              </Link>
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#0066ff]/10 border border-[#0066ff]/20 rounded-full mb-6">
                <span className="text-[#0066ff] text-sm font-medium">NOM-151</span>
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-white mb-6">
                Firma Electrónica con Validez Legal
              </h1>
              <p className="text-xl text-white/60 mb-8">
                Cumple con la NOM-151-SCFI-2016 para la conservación de mensajes de datos y firma electrónica avanzada con valor probatorio pleno.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link
                  href="/contacto"
                  className="px-6 py-3 bg-[#0066ff] text-white font-semibold rounded-lg hover:bg-[#0052cc] transition-all"
                >
                  Solicitar demo
                </Link>
                <Link
                  href="#requisitos"
                  className="px-6 py-3 bg-white/10 text-white font-semibold rounded-lg hover:bg-white/20 transition-all"
                >
                  Ver requisitos
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Intro */}
        <section className="py-16 bg-white border-b border-gray-100">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
                ¿Qué es la NOM-151?
              </h2>
              <p className="text-lg text-gray-600 mb-6">
                La <strong>NOM-151-SCFI-2016</strong> es la Norma Oficial Mexicana que establece los requisitos para la conservación de mensajes de datos y digitalización de documentos. Define las condiciones bajo las cuales un documento electrónico tiene validez legal equivalente a un documento físico.
              </p>
              <p className="text-gray-600 mb-6">
                Esta norma es fundamental para empresas que desean implementar firma electrónica con plena validez legal en México, ya que establece los requisitos técnicos y procedimentales necesarios.
              </p>
              <div className="grid md:grid-cols-2 gap-6 mt-8">
                <div className="p-6 bg-gray-50 rounded-xl">
                  <h3 className="font-bold text-gray-900 mb-2">Marco legal aplicable</h3>
                  <ul className="space-y-2 text-gray-600 text-sm">
                    <li>• Código de Comercio (Art. 89-114)</li>
                    <li>• Ley de Firma Electrónica Avanzada</li>
                    <li>• NOM-151-SCFI-2016</li>
                    <li>• Código Civil Federal</li>
                  </ul>
                </div>
                <div className="p-6 bg-gray-50 rounded-xl">
                  <h3 className="font-bold text-gray-900 mb-2">Aplicación</h3>
                  <ul className="space-y-2 text-gray-600 text-sm">
                    <li>• Contratos mercantiles</li>
                    <li>• Documentos financieros</li>
                    <li>• Actos jurídicos digitales</li>
                    <li>• Conservación de evidencia</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Requirements */}
        <section id="requisitos" className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-black text-gray-900 mb-4">
                Requisitos de la NOM-151
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Los cuatro pilares que garantizan la validez legal de un documento electrónico.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {requirements.map((req, index) => (
                <div key={index} className="bg-white rounded-xl p-8 shadow-sm">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-10 h-10 bg-[#0066ff] rounded-lg flex items-center justify-center text-white font-bold">
                      {index + 1}
                    </div>
                    <h3 className="text-xl font-bold text-gray-900">{req.title}</h3>
                  </div>
                  <p className="text-gray-600 mb-4">{req.description}</p>
                  <div className="flex items-start gap-3 p-4 bg-[#00d4aa]/5 rounded-lg border border-[#00d4aa]/20">
                    <svg className="w-5 h-5 text-[#00d4aa] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <p className="text-sm text-gray-700"><strong>JAAK:</strong> {req.solution}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-black text-gray-900 mb-4">
                Beneficios de la firma electrónica
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Documentos con el mismo valor legal que un documento físico firmado de puño y letra.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {benefits.map((benefit, index) => (
                <div key={index} className="p-6 bg-gray-50 rounded-xl">
                  <div className="w-12 h-12 bg-[#0066ff]/10 rounded-xl flex items-center justify-center mb-4">
                    <svg className="w-6 h-6 text-[#0066ff]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d={benefit.icon} />
                    </svg>
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 mb-2">{benefit.title}</h3>
                  <p className="text-gray-600 text-sm">{benefit.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Use Cases */}
        <section className="py-20 bg-[#0a0a0a]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#00d4aa]/10 border border-[#00d4aa]/20 rounded-full mb-6">
                  <span className="w-2 h-2 bg-[#00d4aa] rounded-full"></span>
                  <span className="text-[#00d4aa] text-sm font-medium">Casos de uso</span>
                </div>
                <h2 className="text-3xl md:text-4xl font-black text-white mb-6">
                  Documentos que puedes firmar
                </h2>
                <p className="text-xl text-white/60 mb-8">
                  La firma electrónica de JAAK es válida para una amplia variedad de documentos comerciales y legales.
                </p>
                <div className="grid grid-cols-2 gap-4">
                  {useCases.map((useCase, index) => (
                    <div key={index} className="flex items-center gap-3">
                      <svg className="w-5 h-5 text-[#00d4aa] flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="text-white/80 text-sm">{useCase}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div className="bg-white/5 rounded-2xl p-8 border border-white/10">
                <h3 className="text-xl font-bold text-white mb-6">Proceso de firma</h3>
                <div className="space-y-6">
                  {[
                    { step: "1", title: "Carga del documento", desc: "Sube el PDF a firmar" },
                    { step: "2", title: "Verificación de identidad", desc: "Biometría + documento oficial" },
                    { step: "3", title: "Firma del documento", desc: "Captura de consentimiento" },
                    { step: "4", title: "Sellado de tiempo", desc: "Timestamp certificado" },
                    { step: "5", title: "Generación de evidencia", desc: "Expediente completo" },
                  ].map((item, index) => (
                    <div key={index} className="flex items-start gap-4">
                      <div className="w-8 h-8 bg-[#0066ff] rounded-full flex items-center justify-center text-white text-sm font-bold flex-shrink-0">
                        {item.step}
                      </div>
                      <div>
                        <div className="text-white font-medium">{item.title}</div>
                        <div className="text-white/50 text-sm">{item.desc}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-20 bg-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl md:text-4xl font-black text-gray-900 mb-6">
              ¿Necesitas firma electrónica con validez legal?
            </h2>
            <p className="text-xl text-gray-600 mb-8">
              Te mostramos cómo JAAK puede ayudarte a firmar documentos conforme a NOM-151.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link
                href="/contacto"
                className="px-8 py-4 bg-[#0066ff] text-white font-bold rounded-lg hover:bg-[#0052cc] transition-all"
              >
                Solicitar demo gratuita
              </Link>
              <Link
                href="/plataforma/firma-electronica"
                className="px-8 py-4 bg-gray-100 text-gray-900 font-bold rounded-lg hover:bg-gray-200 transition-all"
              >
                Ver producto de firma
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
