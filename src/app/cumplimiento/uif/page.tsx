import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Cumplimiento UIF - Unidad de Inteligencia Financiera | JAAK",
  description:
    "Evidencia auditable para requerimientos de la UIF. Expedientes digitales, reportes de operaciones y documentación lista para presentar ante la autoridad.",
  keywords: [
    "UIF",
    "Unidad de Inteligencia Financiera",
    "reportes operaciones",
    "antilavado",
    "PLD",
    "evidencia auditable",
    "expedientes digitales",
    "debida diligencia",
  ],
  openGraph: {
    title: "Cumplimiento UIF | JAAK",
    description:
      "Evidencia auditable para la UIF. Expedientes y reportes listos para la autoridad.",
    type: "website",
  },
};

export default function UIFPage() {
  const evidenceTypes = [
    {
      title: "Datos de identificación",
      items: [
        "Nombre completo del cliente",
        "CURP y RFC",
        "Fecha de nacimiento",
        "Nacionalidad",
        "Domicilio completo",
      ],
    },
    {
      title: "Documentos validados",
      items: [
        "INE/IFE (frente y vuelta)",
        "Resultado de validación INE",
        "Comprobante de domicilio",
        "Constancia de situación fiscal",
      ],
    },
    {
      title: "Evidencia biométrica",
      items: [
        "Fotografía facial del cliente",
        "Video de prueba de vida",
        "Score de comparación facial",
        "Resultado anti-spoofing",
      ],
    },
    {
      title: "Metadatos del proceso",
      items: [
        "Fecha y hora exacta",
        "Dirección IP",
        "Geolocalización",
        "Dispositivo utilizado",
        "Hash de integridad",
      ],
    },
  ];

  const reportTypes = [
    {
      name: "Operaciones relevantes",
      description: "Reportes automáticos de operaciones que superan umbrales establecidos.",
      frequency: "Mensual",
    },
    {
      name: "Operaciones inusuales",
      description: "Detección y documentación de patrones fuera de lo normal.",
      frequency: "Inmediato",
    },
    {
      name: "Operaciones internas preocupantes",
      description: "Alertas sobre comportamientos sospechosos de empleados o procesos.",
      frequency: "Según detección",
    },
    {
      name: "Expedientes de clientes",
      description: "Documentación completa de identificación y debida diligencia.",
      frequency: "Bajo demanda",
    },
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
                <span className="text-[#0066ff] text-sm font-medium">UIF</span>
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-white mb-6">
                Evidencia lista para la UIF
              </h1>
              <p className="text-xl text-white/60 mb-8">
                Expedientes digitales completos y reportes preparados para responder a cualquier requerimiento de la Unidad de Inteligencia Financiera.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link
                  href="/contacto"
                  className="px-6 py-3 bg-[#0066ff] text-white font-semibold rounded-lg hover:bg-[#0052cc] transition-all"
                >
                  Solicitar evaluación
                </Link>
                <Link
                  href="#evidencia"
                  className="px-6 py-3 bg-white/10 text-white font-semibold rounded-lg hover:bg-white/20 transition-all"
                >
                  Ver tipos de evidencia
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
                ¿Qué es la UIF?
              </h2>
              <p className="text-lg text-gray-600 mb-6">
                La <strong>Unidad de Inteligencia Financiera</strong> es el órgano de inteligencia del Estado mexicano encargado de prevenir y combatir los delitos de operaciones con recursos de procedencia ilícita, financiamiento al terrorismo y otros delitos relacionados.
              </p>
              <p className="text-gray-600 mb-6">
                Las entidades obligadas deben proporcionar a la UIF información sobre sus clientes, operaciones y cualquier actividad sospechosa, manteniendo expedientes completos y auditables.
              </p>
              <div className="p-6 bg-[#0066ff]/5 rounded-xl border border-[#0066ff]/20">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-[#0066ff]/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <svg className="w-5 h-5 text-[#0066ff]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <p className="text-gray-700">
                    <strong>Importante:</strong> Los requerimientos de la UIF pueden llegar en cualquier momento. Tener expedientes organizados y accesibles reduce significativamente el tiempo y estrés de respuesta.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Evidence Types */}
        <section id="evidencia" className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-black text-gray-900 mb-4">
                Evidencia que genera JAAK
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Cada verificación genera un expediente completo con toda la información necesaria para responder a requerimientos de la UIF.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {evidenceTypes.map((type, index) => (
                <div key={index} className="bg-white rounded-xl p-6 shadow-sm">
                  <h3 className="text-lg font-bold text-gray-900 mb-4">{type.title}</h3>
                  <ul className="space-y-2">
                    {type.items.map((item, idx) => (
                      <li key={idx} className="flex items-center gap-2 text-sm text-gray-600">
                        <div className="w-1.5 h-1.5 bg-[#0066ff] rounded-full flex-shrink-0"></div>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Report Types */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-black text-gray-900 mb-4">
                Tipos de reportes
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                JAAK facilita la generación de documentación para los diferentes tipos de reportes que requiere la UIF.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              {reportTypes.map((report, index) => (
                <div key={index} className="flex gap-6 p-6 bg-gray-50 rounded-xl">
                  <div className="w-14 h-14 bg-[#0066ff]/10 rounded-xl flex items-center justify-center flex-shrink-0">
                    <svg className="w-6 h-6 text-[#0066ff]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                    </svg>
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center justify-between mb-2">
                      <h3 className="text-lg font-bold text-gray-900">{report.name}</h3>
                      <span className="px-2 py-1 bg-[#0066ff]/10 text-[#0066ff] text-xs font-medium rounded">
                        {report.frequency}
                      </span>
                    </div>
                    <p className="text-gray-600">{report.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits */}
        <section className="py-20 bg-[#0a0a0a]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#00d4aa]/10 border border-[#00d4aa]/20 rounded-full mb-6">
                  <span className="w-2 h-2 bg-[#00d4aa] rounded-full"></span>
                  <span className="text-[#00d4aa] text-sm font-medium">Beneficios</span>
                </div>
                <h2 className="text-3xl md:text-4xl font-black text-white mb-6">
                  Responde más rápido a la UIF
                </h2>
                <p className="text-xl text-white/60 mb-8">
                  Con JAAK, los expedientes están organizados y listos para presentar. Reduce el tiempo de respuesta de días a minutos.
                </p>
                <ul className="space-y-4">
                  {[
                    "Expedientes digitales accesibles en segundos",
                    "Búsqueda por nombre, CURP, fecha o cualquier campo",
                    "Exportación en formatos estándar (PDF, JSON)",
                    "Cadena de custodia digital verificable",
                    "Histórico completo de cada cliente",
                    "API para integración con sistemas de cumplimiento",
                  ].map((item, index) => (
                    <li key={index} className="flex items-center gap-3">
                      <svg className="w-5 h-5 text-[#00d4aa] flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="text-white/80">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="bg-white/5 rounded-2xl p-8 border border-white/10">
                <h3 className="text-xl font-bold text-white mb-6">Tiempo de respuesta</h3>
                <div className="space-y-6">
                  <div>
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-white/60">Proceso manual tradicional</span>
                      <span className="text-white font-bold">3-5 días</span>
                    </div>
                    <div className="w-full bg-white/10 rounded-full h-3">
                      <div className="bg-red-500/60 h-3 rounded-full" style={{ width: "100%" }}></div>
                    </div>
                  </div>
                  <div>
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-white/60">Con expedientes digitales básicos</span>
                      <span className="text-white font-bold">4-8 horas</span>
                    </div>
                    <div className="w-full bg-white/10 rounded-full h-3">
                      <div className="bg-yellow-500/60 h-3 rounded-full" style={{ width: "40%" }}></div>
                    </div>
                  </div>
                  <div>
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-white/60">Con JAAK</span>
                      <span className="text-[#00d4aa] font-bold">Minutos</span>
                    </div>
                    <div className="w-full bg-white/10 rounded-full h-3">
                      <div className="bg-[#00d4aa] h-3 rounded-full" style={{ width: "5%" }}></div>
                    </div>
                  </div>
                </div>
                <p className="text-white/50 text-sm mt-6">
                  *Tiempos estimados para localizar y preparar expedientes de un cliente
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-20 bg-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl md:text-4xl font-black text-gray-900 mb-6">
              ¿Necesitas prepararte para requerimientos de la UIF?
            </h2>
            <p className="text-xl text-gray-600 mb-8">
              Te mostramos cómo JAAK puede ayudarte a tener expedientes completos y organizados.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link
                href="/contacto"
                className="px-8 py-4 bg-[#0066ff] text-white font-bold rounded-lg hover:bg-[#0052cc] transition-all"
              >
                Solicitar evaluación gratuita
              </Link>
              <Link
                href="/cumplimiento"
                className="px-8 py-4 bg-gray-100 text-gray-900 font-bold rounded-lg hover:bg-gray-200 transition-all"
              >
                Ver todas las regulaciones
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
