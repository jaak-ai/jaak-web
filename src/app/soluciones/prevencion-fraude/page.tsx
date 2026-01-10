import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Link from "next/link";

export const metadata = {
  title: "Prevención de Fraude | JAAK",
  description: "Detección de fraude por suplantación de identidad en tiempo real. Biometría y validación documental.",
};

export default function PrevencionFraude() {
  const fraudTypes = [
    {
      type: "Suplantación de identidad",
      description: "Uso de documentos de terceros para hacerse pasar por otra persona.",
      prevention: "Comparación facial con prueba de vida",
    },
    {
      type: "Documentos falsificados",
      description: "INEs, pasaportes o licencias alterados o completamente falsos.",
      prevention: "Detección de alteraciones con IA",
    },
    {
      type: "Deepfakes",
      description: "Videos o imágenes generados artificialmente para engañar sistemas.",
      prevention: "Prueba de vida certificada iBeta",
    },
    {
      type: "Robo de identidad",
      description: "Uso de datos personales robados para abrir cuentas fraudulentas.",
      prevention: "Validación con fuentes oficiales",
    },
  ];

  const stats = [
    { value: "99.9%", label: "Detección de deepfakes" },
    { value: "< 1%", label: "Falsos positivos" },
    { value: "< 30s", label: "Tiempo de verificación" },
    { value: "24/7", label: "Monitoreo continuo" },
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
                <span className="text-[#ff6b6b] text-sm font-medium">Seguridad</span>
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-white mb-6">
                Prevención de fraude
              </h1>
              <p className="text-xl text-white/60 mb-8">
                Detecta intentos de fraude por suplantación de identidad en tiempo real. Biometría certificada que bloquea deepfakes y documentos falsos.
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

        {/* Stats */}
        <section className="py-16 bg-[#0066ff]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-4 gap-8">
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="text-4xl md:text-5xl font-black text-white mb-2">{stat.value}</div>
                  <div className="text-white/80">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Fraud Types */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-black text-gray-900 mb-4">
                Tipos de fraude que detectamos
              </h2>
            </div>
            <div className="grid md:grid-cols-2 gap-8">
              {fraudTypes.map((fraud, index) => (
                <div key={index} className="bg-gray-50 rounded-xl p-8">
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{fraud.type}</h3>
                  <p className="text-gray-600 mb-4">{fraud.description}</p>
                  <div className="flex items-center gap-2 text-[#00d4aa]">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                    </svg>
                    <span className="font-semibold">{fraud.prevention}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Technology */}
        <section className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl md:text-4xl font-black text-gray-900 mb-6">
                  Tecnología que respalda
                </h2>
                <div className="space-y-4">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-[#0066ff] rounded-lg flex items-center justify-center flex-shrink-0">
                      <span className="text-white font-bold">1</span>
                    </div>
                    <div>
                      <div className="font-bold text-gray-900">iBeta Level 1</div>
                      <div className="text-gray-600 text-sm">Certificación de prueba de vida contra ataques de presentación</div>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-[#0066ff] rounded-lg flex items-center justify-center flex-shrink-0">
                      <span className="text-white font-bold">2</span>
                    </div>
                    <div>
                      <div className="font-bold text-gray-900">NIST FRVT</div>
                      <div className="text-gray-600 text-sm">Algoritmos de reconocimiento facial evaluados por NIST</div>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-[#0066ff] rounded-lg flex items-center justify-center flex-shrink-0">
                      <span className="text-white font-bold">3</span>
                    </div>
                    <div>
                      <div className="font-bold text-gray-900">IA propietaria</div>
                      <div className="text-gray-600 text-sm">Modelos entrenados con datos mexicanos para máxima precisión</div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="bg-white rounded-2xl p-8 shadow-lg">
                <h3 className="text-xl font-bold text-gray-900 mb-6">Capas de protección</h3>
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <div className="w-3 h-3 bg-[#00d4aa] rounded-full"></div>
                    <span className="text-gray-700">Prueba de vida pasiva</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-3 h-3 bg-[#00d4aa] rounded-full"></div>
                    <span className="text-gray-700">Detección de deepfakes</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-3 h-3 bg-[#00d4aa] rounded-full"></div>
                    <span className="text-gray-700">Análisis de autenticidad documental</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-3 h-3 bg-[#00d4aa] rounded-full"></div>
                    <span className="text-gray-700">Comparación facial 1:1</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-3 h-3 bg-[#00d4aa] rounded-full"></div>
                    <span className="text-gray-700">Validación con fuentes oficiales</span>
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
              Protege tu negocio del fraude
            </h2>
            <p className="text-xl text-white/60 mb-8">
              Implementa verificación biométrica que bloquea suplantación de identidad.
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
