import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Link from "next/link";

export const metadata = {
  title: "Gestión de Evidencia | JAAK",
  description: "Auditoría y trazabilidad completa de cada verificación. Evidencia legal defendible para reguladores.",
};

export default function GestionEvidencia() {
  const features = [
    {
      title: "Expediente digital unificado",
      description: "Toda la información de cada verificación en un solo lugar: documentos, biometría, validaciones y consentimientos.",
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4" />
        </svg>
      ),
    },
    {
      title: "Trazabilidad completa",
      description: "Registro inmutable de cada acción: quién hizo qué, cuándo y desde dónde. Ideal para auditorías.",
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
        </svg>
      ),
    },
    {
      title: "Retención conforme a normativa",
      description: "Almacenamiento seguro por el tiempo que exige la regulación, con políticas de retención configurables.",
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
    },
    {
      title: "Exportación para reguladores",
      description: "Genera reportes en formatos estándar listos para entregar a autoridades supervisoras.",
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
        </svg>
      ),
    },
  ];

  const evidenceTypes = [
    { type: "Biometría", items: ["Selfie con prueba de vida", "Comparación facial", "Score de coincidencia"] },
    { type: "Documentos", items: ["Imagen del documento", "Datos extraídos (OCR)", "Validaciones de autenticidad"] },
    { type: "Validaciones", items: ["Consultas a fuentes oficiales", "Respuestas de INE/SAT/RENAPO", "Timestamps de cada consulta"] },
    { type: "Consentimiento", items: ["Aceptación de términos", "Aviso de privacidad firmado", "IP y geolocalización"] },
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
                Gestión de evidencia
              </h1>
              <p className="text-xl text-white/60 mb-8">
                Cada verificación genera evidencia legal defendible. No solo registros técnicos, sino pruebas que resisten ante reguladores y tribunales.
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
                Evidencia que defiende tu operación
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Cuando llegue una auditoría o requerimiento, tendrás todo documentado.
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

        {/* Evidence Types */}
        <section className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-black text-gray-900 mb-4">
                Qué incluye cada expediente
              </h2>
              <p className="text-xl text-gray-600">
                Evidencia completa de cada paso del proceso de verificación.
              </p>
            </div>
            <div className="grid md:grid-cols-4 gap-6">
              {evidenceTypes.map((evidence, index) => (
                <div key={index} className="bg-white rounded-xl p-6 shadow-sm">
                  <h3 className="text-lg font-bold text-gray-900 mb-4 pb-4 border-b border-gray-100">{evidence.type}</h3>
                  <ul className="space-y-3">
                    {evidence.items.map((item, itemIndex) => (
                      <li key={itemIndex} className="flex items-start gap-2 text-sm text-gray-600">
                        <svg className="w-4 h-4 text-[#00d4aa] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Compliance */}
        <section className="py-20 bg-[#0a0a0a]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl md:text-4xl font-black text-white mb-6">
                  Listo para auditorías
                </h2>
                <p className="text-xl text-white/60 mb-8">
                  Nuestra gestión de evidencia está diseñada para satisfacer los requerimientos de:
                </p>
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-white/5 border border-white/10 rounded-lg p-4">
                    <div className="text-white font-semibold">CNBV</div>
                    <div className="text-white/50 text-sm">Comisión Nacional Bancaria</div>
                  </div>
                  <div className="bg-white/5 border border-white/10 rounded-lg p-4">
                    <div className="text-white font-semibold">UIF</div>
                    <div className="text-white/50 text-sm">Unidad de Inteligencia Financiera</div>
                  </div>
                  <div className="bg-white/5 border border-white/10 rounded-lg p-4">
                    <div className="text-white font-semibold">CONDUSEF</div>
                    <div className="text-white/50 text-sm">Protección al usuario</div>
                  </div>
                  <div className="bg-white/5 border border-white/10 rounded-lg p-4">
                    <div className="text-white font-semibold">Auditorías internas</div>
                    <div className="text-white/50 text-sm">Control interno y compliance</div>
                  </div>
                </div>
              </div>
              <div className="bg-white/5 border border-white/10 rounded-2xl p-8">
                <h3 className="text-xl font-bold text-white mb-6">Tiempos de retención</h3>
                <div className="space-y-4">
                  <div className="flex justify-between items-center py-3 border-b border-white/10">
                    <span className="text-white/80">Expedientes KYC</span>
                    <span className="text-[#00d4aa] font-semibold">10 años</span>
                  </div>
                  <div className="flex justify-between items-center py-3 border-b border-white/10">
                    <span className="text-white/80">Contratos firmados</span>
                    <span className="text-[#00d4aa] font-semibold">10 años</span>
                  </div>
                  <div className="flex justify-between items-center py-3 border-b border-white/10">
                    <span className="text-white/80">Logs de transacciones</span>
                    <span className="text-[#00d4aa] font-semibold">5 años</span>
                  </div>
                  <div className="flex justify-between items-center py-3">
                    <span className="text-white/80">Consentimientos</span>
                    <span className="text-[#00d4aa] font-semibold">Vigencia + 5 años</span>
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
              Prepárate para cualquier auditoría
            </h2>
            <p className="text-xl text-gray-600 mb-8">
              Con JAAK, cada verificación deja un rastro auditable y defendible.
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
