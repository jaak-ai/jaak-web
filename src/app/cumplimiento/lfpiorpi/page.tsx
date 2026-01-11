import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Link from "next/link";

export const metadata: Metadata = {
  title: "LFPIORPI y Actividades Vulnerables Art. 17 | JAAK",
  description:
    "Cumple con LFPIORPI y Artículo 17 de Actividades Vulnerables. Verificación de identidad para inmobiliarias, activos virtuales, vehículos y más. Evidencia auditable para UIF.",
  keywords: [
    "LFPIORPI",
    "artículo 17",
    "actividades vulnerables",
    "antilavado",
    "PLD",
    "inmobiliarias",
    "compraventa inmuebles",
    "activos virtuales",
    "UIF",
    "verificación identidad",
    "KYC México",
  ],
  openGraph: {
    title: "LFPIORPI y Actividades Vulnerables | JAAK",
    description:
      "Verificación de identidad para LFPIORPI y actividades vulnerables Art. 17. Evidencia auditable para UIF.",
    type: "website",
  },
};

export default function LFPIORPIPage() {
  const vulnerableActivities = [
    {
      name: "Juegos, sorteos y concursos",
      description: "Casinos, apuestas y juegos con premios en efectivo",
      threshold: "Operaciones desde $25,000 pesos",
    },
    {
      name: "Compraventa de bienes inmuebles",
      description: "Inmobiliarias, desarrolladores y corredores",
      threshold: "Operaciones desde $500,000 pesos",
    },
    {
      name: "Compraventa de vehículos",
      description: "Agencias, distribuidores y compraventa habitual",
      threshold: "Operaciones en efectivo desde $200,000 pesos",
    },
    {
      name: "Servicios de blindaje",
      description: "Blindaje de vehículos y servicios relacionados",
      threshold: "Todas las operaciones",
    },
    {
      name: "Activos virtuales",
      description: "Exchanges, wallets y servicios de criptomonedas",
      threshold: "Operaciones desde 645 UMAs",
    },
    {
      name: "Obras de arte y antigüedades",
      description: "Galerías, subastas y comercio de arte",
      threshold: "Operaciones desde $200,000 pesos",
    },
  ];

  const requirements = [
    {
      title: "Identificación del cliente",
      description:
        "Verificar la identidad del cliente mediante documentos oficiales vigentes y validación biométrica.",
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
        </svg>
      ),
    },
    {
      title: "Conservación de documentos",
      description:
        "Mantener expedientes completos por un mínimo de 5 años después de la última operación.",
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4" />
        </svg>
      ),
    },
    {
      title: "Avisos a la UIF",
      description:
        "Presentar avisos de operaciones que superen los umbrales establecidos en la Ley.",
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
        </svg>
      ),
    },
    {
      title: "Políticas internas",
      description:
        "Implementar políticas de prevención, detección y reporte de operaciones inusuales.",
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
        </svg>
      ),
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
                <span className="text-[#0066ff] text-sm font-medium">LFPIORPI</span>
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-white mb-6">
                Cumplimiento LFPIORPI y Actividades Vulnerables
              </h1>
              <p className="text-xl text-white/60 mb-8">
                Verificación de identidad alineada con la Ley Federal para la Prevención e Identificación de Operaciones con Recursos de Procedencia Ilícita, incluyendo el Artículo 17 de Actividades Vulnerables.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link
                  href="/contacto"
                  className="px-6 py-3 bg-[#0066ff] text-white font-semibold rounded-lg hover:bg-[#0052cc] transition-all"
                >
                  Solicitar evaluación
                </Link>
                <Link
                  href="#actividades"
                  className="px-6 py-3 bg-white/10 text-white font-semibold rounded-lg hover:bg-white/20 transition-all"
                >
                  Ver actividades vulnerables
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Intro Section */}
        <section className="py-16 bg-white border-b border-gray-100">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
                ¿Qué es la LFPIORPI?
              </h2>
              <p className="text-lg text-gray-600 mb-6">
                La <strong>Ley Federal para la Prevención e Identificación de Operaciones con Recursos de Procedencia Ilícita</strong> establece las medidas y procedimientos para prevenir y detectar actos u operaciones que involucren recursos de procedencia ilícita.
              </p>
              <p className="text-gray-600 mb-6">
                Esta ley aplica a entidades financieras y a quienes realicen <strong>Actividades Vulnerables</strong>, estableciendo obligaciones de identificación, conservación de información y presentación de avisos ante la Unidad de Inteligencia Financiera (UIF).
              </p>
              <div className="grid md:grid-cols-3 gap-6 mt-8">
                <div className="p-6 bg-gray-50 rounded-xl">
                  <div className="text-3xl font-black text-[#0066ff] mb-2">5 años</div>
                  <div className="text-gray-600">Conservación mínima de expedientes</div>
                </div>
                <div className="p-6 bg-gray-50 rounded-xl">
                  <div className="text-3xl font-black text-[#0066ff] mb-2">17</div>
                  <div className="text-gray-600">Artículo que define actividades vulnerables</div>
                </div>
                <div className="p-6 bg-gray-50 rounded-xl">
                  <div className="text-3xl font-black text-[#0066ff] mb-2">UIF</div>
                  <div className="text-gray-600">Autoridad receptora de avisos</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Actividades Vulnerables */}
        <section id="actividades" className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#0066ff]/10 rounded-full mb-4">
                <span className="text-[#0066ff] text-sm font-medium">Artículo 17</span>
              </div>
              <h2 className="text-3xl md:text-4xl font-black text-gray-900 mb-4">
                Actividades Vulnerables
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                El Artículo 17 de la LFPIORPI define las actividades que, por su naturaleza, están sujetas a obligaciones reforzadas de identificación y reporte.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {vulnerableActivities.map((activity, index) => (
                <div key={index} className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow">
                  <h3 className="text-lg font-bold text-gray-900 mb-2">{activity.name}</h3>
                  <p className="text-gray-600 mb-4">{activity.description}</p>
                  <div className="flex items-center gap-2 text-sm">
                    <span className="px-2 py-1 bg-[#0066ff]/10 text-[#0066ff] rounded font-medium">
                      {activity.threshold}
                    </span>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-12 p-6 bg-white rounded-xl border border-gray-200">
              <p className="text-gray-700 text-center">
                <strong>En todos los casos, el principio es el mismo:</strong> identificar correctamente, conservar evidencia y poder demostrar cumplimiento ante la autoridad.
              </p>
            </div>
          </div>
        </section>

        {/* Requirements */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-black text-gray-900 mb-4">
                Obligaciones principales
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                La LFPIORPI establece cuatro pilares fundamentales para quienes realizan Actividades Vulnerables.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {requirements.map((req, index) => (
                <div key={index} className="flex gap-6 p-6 bg-gray-50 rounded-xl">
                  <div className="w-14 h-14 bg-[#0066ff]/10 rounded-xl flex items-center justify-center flex-shrink-0 text-[#0066ff]">
                    {req.icon}
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">{req.title}</h3>
                    <p className="text-gray-600">{req.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* JAAK Solution */}
        <section className="py-20 bg-[#0a0a0a]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#00d4aa]/10 border border-[#00d4aa]/20 rounded-full mb-6">
                  <span className="w-2 h-2 bg-[#00d4aa] rounded-full"></span>
                  <span className="text-[#00d4aa] text-sm font-medium">Solución JAAK</span>
                </div>
                <h2 className="text-3xl md:text-4xl font-black text-white mb-6">
                  Cómo JAAK te ayuda a cumplir
                </h2>
                <p className="text-xl text-white/60 mb-8">
                  JAAK permite a las organizaciones que realizan Actividades Vulnerables cumplir con la identificación de clientes y la conservación de evidencia, facilitando el cumplimiento operativo sin depender de procesos manuales.
                </p>
                <ul className="space-y-4">
                  {[
                    "Verificación biométrica con prueba de vida certificada",
                    "Validación de INE/IFE en tiempo real contra bases del INE",
                    "Expedientes digitales con sellado de tiempo",
                    "Almacenamiento seguro por 5+ años",
                    "Reportes listos para presentar ante UIF",
                    "API para integración con sistemas existentes",
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
                <h3 className="text-xl font-bold text-white mb-6">Evidencia que genera JAAK</h3>
                <div className="space-y-4">
                  {[
                    { label: "Imagen del documento", desc: "INE/IFE frente y vuelta" },
                    { label: "Datos extraídos (OCR)", desc: "Nombre, CURP, dirección" },
                    { label: "Validación INE", desc: "Consulta oficial en tiempo real" },
                    { label: "Biometría facial", desc: "Selfie + prueba de vida" },
                    { label: "Comparación facial", desc: "Match documento vs selfie" },
                    { label: "Metadatos", desc: "GPS, IP, dispositivo, timestamp" },
                    { label: "Hash de integridad", desc: "Firma criptográfica del expediente" },
                  ].map((item, index) => (
                    <div key={index} className="flex items-center justify-between py-3 border-b border-white/10 last:border-0">
                      <span className="text-white/80">{item.label}</span>
                      <span className="text-white/50 text-sm">{item.desc}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Disclaimer */}
        <section className="py-12 bg-gray-100">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 bg-gray-300 rounded-lg flex items-center justify-center flex-shrink-0">
                <svg className="w-5 h-5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <div>
                <h4 className="text-gray-900 font-semibold mb-2">Aclaración importante</h4>
                <p className="text-gray-600 text-sm">
                  JAAK es una plataforma tecnológica de apoyo al cumplimiento. No sustituye asesoría legal ni determina obligaciones de reporte. Consulta con tu área legal o de cumplimiento para determinar tus obligaciones específicas bajo la LFPIORPI.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-20 bg-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl md:text-4xl font-black text-gray-900 mb-6">
              ¿Realizas Actividades Vulnerables?
            </h2>
            <p className="text-xl text-gray-600 mb-8">
              Te mostramos cómo JAAK puede ayudarte a cumplir con tus obligaciones de identificación bajo la LFPIORPI.
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
