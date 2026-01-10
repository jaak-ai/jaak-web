import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Firma Electrónica con Identidad Verificada | JAAK",
  description: "Firma electrónica avanzada con validez legal en México. Vincula biometría facial del firmante con el documento. Cumple NOM-151 y Código de Comercio.",
  keywords: ["firma electrónica", "firma digital", "NOM-151", "e-signature México", "firma biométrica", "validez legal", "no repudio", "constancia conservación"],
  openGraph: {
    title: "Firma Electrónica con Identidad Verificada | JAAK",
    description: "Firma electrónica avanzada vinculada a identidad biométrica. Validez legal completa.",
    type: "website",
  },
};

export default function FirmaElectronica() {
  const features = [
    {
      title: "Firma con identidad verificada",
      description: "Cada firma está vinculada a una verificación biométrica previa, garantizando que quien firma es quien dice ser.",
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
        </svg>
      ),
    },
    {
      title: "Validez legal completa",
      description: "Cumple con el Código de Comercio, NOM-151 y estándares internacionales para firma electrónica avanzada.",
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
        </svg>
      ),
    },
    {
      title: "Constancia de conservación",
      description: "Generamos constancia NOM-151 que garantiza la integridad del documento a lo largo del tiempo.",
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
        </svg>
      ),
    },
    {
      title: "Flujos personalizables",
      description: "Configura el orden de firmantes, recordatorios automáticos y acciones post-firma según tu proceso.",
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z" />
        </svg>
      ),
    },
  ];

  const useCases = [
    { title: "Contratos de crédito", description: "Firma de pagarés y contratos de préstamo con validez ejecutiva" },
    { title: "Apertura de cuentas", description: "Contratos de adhesión y términos de servicio" },
    { title: "Contratos laborales", description: "Alta de empleados 100% digital" },
    { title: "Pólizas de seguro", description: "Emisión y renovación de pólizas" },
    { title: "Arrendamiento", description: "Contratos de renta con garantía de identidad" },
    { title: "Poderes notariales", description: "Firma de representantes legales verificados" },
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
                Firma electrónica
              </h1>
              <p className="text-xl text-white/60 mb-8">
                Firma con validez legal vinculada a la identidad verificada del firmante. No más dudas sobre quién firmó tus documentos.
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
                Más que una firma, una garantía de identidad
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                La única plataforma que vincula cada firma con una verificación biométrica del firmante.
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

        {/* Legal Framework */}
        <section className="py-20 bg-[#0a0a0a]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl md:text-4xl font-black text-white mb-6">
                  Marco legal que respalda
                </h2>
                <p className="text-xl text-white/60 mb-8">
                  Nuestra firma electrónica cumple con todos los requisitos legales para tener validez probatoria plena.
                </p>
                <div className="space-y-4">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-[#0066ff] rounded-lg flex items-center justify-center flex-shrink-0">
                      <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <div>
                      <div className="text-white font-semibold">Código de Comercio</div>
                      <div className="text-white/60 text-sm">Artículos 89-114 sobre mensajes de datos</div>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-[#0066ff] rounded-lg flex items-center justify-center flex-shrink-0">
                      <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <div>
                      <div className="text-white font-semibold">NOM-151-SCFI-2016</div>
                      <div className="text-white/60 text-sm">Conservación de mensajes de datos</div>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-[#0066ff] rounded-lg flex items-center justify-center flex-shrink-0">
                      <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <div>
                      <div className="text-white font-semibold">LFPDPPP</div>
                      <div className="text-white/60 text-sm">Protección de datos personales</div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="bg-white/5 border border-white/10 rounded-2xl p-8">
                <h3 className="text-xl font-bold text-white mb-6">Elementos de la firma</h3>
                <div className="space-y-4">
                  <div className="flex items-center gap-3 text-white/80">
                    <span className="w-6 h-6 bg-[#00d4aa] rounded-full flex items-center justify-center text-white text-xs font-bold">1</span>
                    Identificación biométrica del firmante
                  </div>
                  <div className="flex items-center gap-3 text-white/80">
                    <span className="w-6 h-6 bg-[#00d4aa] rounded-full flex items-center justify-center text-white text-xs font-bold">2</span>
                    Sello de tiempo certificado
                  </div>
                  <div className="flex items-center gap-3 text-white/80">
                    <span className="w-6 h-6 bg-[#00d4aa] rounded-full flex items-center justify-center text-white text-xs font-bold">3</span>
                    Hash criptográfico del documento
                  </div>
                  <div className="flex items-center gap-3 text-white/80">
                    <span className="w-6 h-6 bg-[#00d4aa] rounded-full flex items-center justify-center text-white text-xs font-bold">4</span>
                    Geolocalización del firmante
                  </div>
                  <div className="flex items-center gap-3 text-white/80">
                    <span className="w-6 h-6 bg-[#00d4aa] rounded-full flex items-center justify-center text-white text-xs font-bold">5</span>
                    Constancia NOM-151
                  </div>
                </div>
              </div>
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
              <p className="text-xl text-gray-600">
                Documentos que puedes firmar con JAAK
              </p>
            </div>
            <div className="grid md:grid-cols-3 gap-6">
              {useCases.map((useCase, index) => (
                <div key={index} className="bg-white rounded-xl p-6 shadow-sm hover:shadow-lg transition-shadow">
                  <h3 className="text-lg font-bold text-gray-900 mb-2">{useCase.title}</h3>
                  <p className="text-gray-600 text-sm">{useCase.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-20 bg-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl md:text-4xl font-black text-gray-900 mb-6">
              Firma documentos con certeza legal
            </h2>
            <p className="text-xl text-gray-600 mb-8">
              Elimina el riesgo de repudio con firmas vinculadas a identidad verificada.
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
