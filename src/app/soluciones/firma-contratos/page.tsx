import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Link from "next/link";

export const metadata = {
  title: "Firma de Contratos | JAAK",
  description: "Firma electrónica con identidad verificada. Contratos con validez legal y evidencia de quién firmó.",
};

export default function FirmaContratos() {
  const contractTypes = [
    { type: "Contratos de crédito", description: "Pagarés, líneas de crédito, préstamos personales" },
    { type: "Contratos de adhesión", description: "Términos de servicio, apertura de cuentas" },
    { type: "Contratos laborales", description: "Ofertas de empleo, NDAs, finiquitos" },
    { type: "Pólizas de seguro", description: "Emisión, renovación y modificación de pólizas" },
    { type: "Arrendamiento", description: "Contratos de renta residencial y comercial" },
    { type: "Compraventa", description: "Vehículos, bienes inmuebles, activos" },
  ];

  const features = [
    {
      title: "Identidad verificada",
      description: "Cada firmante pasa por verificación biométrica antes de firmar.",
    },
    {
      title: "Sello de tiempo",
      description: "Timestamp certificado que prueba cuándo se firmó el documento.",
    },
    {
      title: "Geolocalización",
      description: "Registro de ubicación del firmante al momento de la firma.",
    },
    {
      title: "Constancia NOM-151",
      description: "Garantía de integridad del documento a lo largo del tiempo.",
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
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#00d4aa]/10 border border-[#00d4aa]/20 rounded-full mb-6">
                <span className="w-2 h-2 bg-[#00d4aa] rounded-full"></span>
                <span className="text-[#00d4aa] text-sm font-medium">Caso de uso</span>
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-white mb-6">
                Firma de contratos
              </h1>
              <p className="text-xl text-white/60 mb-8">
                Cierra contratos con certeza de quién firmó. Cada firma está vinculada a una verificación biométrica del firmante.
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

        {/* Contract Types */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-black text-gray-900 mb-4">
                Tipos de contratos
              </h2>
              <p className="text-xl text-gray-600">
                Firma cualquier documento con validez legal.
              </p>
            </div>
            <div className="grid md:grid-cols-3 gap-6">
              {contractTypes.map((contract, index) => (
                <div key={index} className="bg-gray-50 rounded-xl p-6">
                  <h3 className="text-lg font-bold text-gray-900 mb-2">{contract.type}</h3>
                  <p className="text-gray-600 text-sm">{contract.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Features */}
        <section className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-black text-gray-900 mb-4">
                Elementos de cada firma
              </h2>
            </div>
            <div className="grid md:grid-cols-4 gap-8">
              {features.map((feature, index) => (
                <div key={index} className="text-center">
                  <div className="w-12 h-12 bg-[#0066ff] rounded-xl flex items-center justify-center text-white mx-auto mb-4">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 mb-2">{feature.title}</h3>
                  <p className="text-gray-600 text-sm">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-20 bg-[#0a0a0a]">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl md:text-4xl font-black text-white mb-6">
              Firma contratos sin riesgo de repudio
            </h2>
            <p className="text-xl text-white/60 mb-8">
              Cada firma incluye verificación biométrica del firmante.
            </p>
            <Link
              href="https://platform.dev.jaak.ai/#/signup"
              target="_blank"
              className="inline-flex px-8 py-4 bg-[#0066ff] text-white font-bold rounded-lg hover:bg-[#0052cc] transition-all"
            >
              Empezar gratis
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
