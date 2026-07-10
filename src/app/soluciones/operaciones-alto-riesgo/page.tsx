import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Link from "next/link";

export const metadata = {
  title: "Operaciones de Alto Riesgo | JAAK",
  description: "Verificación reforzada para transacciones críticas. Due diligence mejorado para operaciones de alto valor.",
};

export default function OperacionesAltoRiesgo() {
  const operations = [
    {
      title: "Transacciones de alto valor",
      description: "Verificación adicional para operaciones que superan umbrales definidos por regulación.",
      threshold: "> $50,000 MXN",
    },
    {
      title: "Cambios en beneficiarios",
      description: "Confirmación de identidad cuando se modifican beneficiarios de cuentas o pólizas.",
      threshold: "Cambio crítico",
    },
    {
      title: "Operaciones en efectivo",
      description: "Due diligence reforzado para depósitos o retiros en efectivo significativos.",
      threshold: "> $15,000 USD",
    },
    {
      title: "Transferencias internacionales",
      description: "Verificación adicional para movimientos hacia jurisdicciones de riesgo.",
      threshold: "GAFI gris/negro",
    },
  ];

  const verificationLevels = [
    {
      level: "Estándar",
      description: "Verificación básica para operaciones de bajo riesgo",
      features: ["Documento de identidad", "Selfie con prueba de vida", "Validación INE"],
    },
    {
      level: "Reforzado",
      description: "Due diligence mejorado para riesgo medio",
      features: ["Todo lo anterior", "Comprobante de domicilio", "Consulta listas PEP", "Video verificación"],
    },
    {
      level: "Extendido",
      description: "Máximo nivel para operaciones críticas",
      features: ["Todo lo anterior", "Verificación de ingresos", "Entrevista remota", "Validación de origen de fondos"],
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
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#ff6b6b]/10 border border-[#ff6b6b]/20 rounded-full mb-6">
                <span className="w-2 h-2 bg-[#ff6b6b] rounded-full"></span>
                <span className="text-[#ff6b6b] text-sm font-medium">Alto riesgo</span>
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-white mb-6">
                Operaciones de alto riesgo
              </h1>
              <p className="text-xl text-white/60 mb-8">
                Cuando una transacción requiere mayor escrutinio, JAAK proporciona verificación reforzada con evidencia completa para cada nivel de riesgo.
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

        {/* Operations */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-black text-gray-900 mb-4">
                Operaciones que requieren verificación reforzada
              </h2>
            </div>
            <div className="grid md:grid-cols-2 gap-8">
              {operations.map((op, index) => (
                <div key={index} className="bg-gray-50 rounded-xl p-8">
                  <div className="flex justify-between items-start mb-4">
                    <h3 className="text-xl font-bold text-gray-900">{op.title}</h3>
                    <span className="px-3 py-1 bg-[#ff6b6b]/10 text-[#ff6b6b] text-sm font-semibold rounded-full">
                      {op.threshold}
                    </span>
                  </div>
                  <p className="text-gray-600">{op.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Verification Levels */}
        <section className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-black text-gray-900 mb-4">
                Niveles de verificación
              </h2>
              <p className="text-xl text-gray-600">
                Ajusta el nivel de due diligence según el riesgo de cada operación.
              </p>
            </div>
            <div className="grid md:grid-cols-3 gap-8">
              {verificationLevels.map((level, index) => (
                <div key={index} className={`rounded-xl p-8 ${index === 2 ? 'bg-[#0066ff] text-white' : 'bg-white'}`}>
                  <div className={`text-sm font-bold uppercase tracking-wider mb-2 ${index === 2 ? 'text-white/70' : 'text-[#0066ff]'}`}>
                    Nivel {index + 1}
                  </div>
                  <h3 className={`text-2xl font-black mb-3 ${index === 2 ? 'text-white' : 'text-gray-900'}`}>
                    {level.level}
                  </h3>
                  <p className={`mb-6 ${index === 2 ? 'text-white/80' : 'text-gray-600'}`}>
                    {level.description}
                  </p>
                  <ul className="space-y-3">
                    {level.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center gap-3">
                        <svg className={`w-5 h-5 ${index === 2 ? 'text-white' : 'text-[#00d4aa]'}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        <span className={index === 2 ? 'text-white/90' : 'text-gray-700'}>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-20 bg-[#0a0a0a]">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl md:text-4xl font-black text-white mb-6">
              Protege tus operaciones críticas
            </h2>
            <p className="text-xl text-white/60 mb-8">
              Implementa verificación por niveles adaptada a tu matriz de riesgo.
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
