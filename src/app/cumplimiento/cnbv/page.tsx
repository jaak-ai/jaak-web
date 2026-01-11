import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Cumplimiento CNBV - Identificación Remota No Presencial | JAAK",
  description:
    "Verificación de identidad conforme a lineamientos CNBV para instituciones financieras. Identificación remota no presencial, biometría certificada y expedientes auditables.",
  keywords: [
    "CNBV",
    "identificación remota",
    "verificación no presencial",
    "instituciones financieras",
    "fintech México",
    "biometría",
    "KYC bancario",
    "expediente digital",
  ],
  openGraph: {
    title: "Cumplimiento CNBV | JAAK",
    description:
      "Verificación de identidad conforme a CNBV. Identificación remota para instituciones financieras.",
    type: "website",
  },
};

export default function CNBVPage() {
  const requirements = [
    {
      title: "Identificación remota no presencial",
      description:
        "Los lineamientos de la CNBV permiten la identificación de clientes de manera remota, siempre que se cumplan requisitos específicos de verificación.",
      items: [
        "Captura de documento oficial vigente",
        "Verificación biométrica facial",
        "Prueba de vida activa o pasiva",
        "Validación contra bases oficiales",
      ],
    },
    {
      title: "Expediente electrónico del cliente",
      description:
        "Las instituciones deben mantener un expediente completo que permita demostrar la debida diligencia en la identificación.",
      items: [
        "Datos personales del cliente",
        "Copia de documentos de identificación",
        "Evidencia del proceso de verificación",
        "Historial de actualizaciones",
      ],
    },
    {
      title: "Validación de documentos",
      description:
        "Los documentos de identificación deben ser validados para confirmar su autenticidad y vigencia.",
      items: [
        "INE/IFE con verificación en bases del INE",
        "Pasaporte mexicano",
        "Cédula profesional",
        "FM2/FM3 para extranjeros",
      ],
    },
    {
      title: "Trazabilidad y auditoría",
      description:
        "Cada paso del proceso de identificación debe quedar registrado para efectos de auditoría.",
      items: [
        "Registro de fecha y hora",
        "Metadatos del dispositivo",
        "Resultados de validaciones",
        "Cadena de custodia digital",
      ],
    },
  ];

  const entityTypes = [
    {
      name: "Bancos",
      description: "Instituciones de banca múltiple y de desarrollo",
      regulations: ["CUB", "Disposiciones PLD"],
    },
    {
      name: "Fintechs (ITF)",
      description: "Instituciones de Tecnología Financiera",
      regulations: ["Ley Fintech", "Disposiciones CNBV"],
    },
    {
      name: "Sofomes",
      description: "Sociedades Financieras de Objeto Múltiple",
      regulations: ["Disposiciones PLD", "Circular Única"],
    },
    {
      name: "Casas de Bolsa",
      description: "Intermediarios del mercado de valores",
      regulations: ["CUB", "Ley del Mercado de Valores"],
    },
    {
      name: "Fondos de Inversión",
      description: "Operadoras y distribuidoras de fondos",
      regulations: ["Disposiciones fondos", "PLD"],
    },
    {
      name: "Aseguradoras",
      description: "Instituciones de seguros y fianzas",
      regulations: ["CNSF", "Disposiciones PLD"],
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
                <span className="text-[#0066ff] text-sm font-medium">CNBV</span>
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-white mb-6">
                Cumplimiento CNBV para Instituciones Financieras
              </h1>
              <p className="text-xl text-white/60 mb-8">
                Verificación de identidad conforme a los lineamientos de identificación remota no presencial de la Comisión Nacional Bancaria y de Valores.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link
                  href="/contacto"
                  className="px-6 py-3 bg-[#0066ff] text-white font-semibold rounded-lg hover:bg-[#0052cc] transition-all"
                >
                  Solicitar evaluación
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
                ¿Qué es la CNBV?
              </h2>
              <p className="text-lg text-gray-600 mb-6">
                La <strong>Comisión Nacional Bancaria y de Valores</strong> es el regulador principal del sistema financiero mexicano. Establece los requisitos de identificación y conocimiento del cliente para todas las entidades supervisadas.
              </p>
              <p className="text-gray-600">
                Los lineamientos de identificación remota no presencial permiten a las instituciones financieras realizar el alta de clientes de manera digital, siempre que cumplan con controles específicos de verificación biométrica y documental.
              </p>
            </div>
          </div>
        </section>

        {/* Entity Types */}
        <section className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-black text-gray-900 mb-4">
                Entidades supervisadas
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                JAAK atiende a diferentes tipos de instituciones reguladas por la CNBV.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {entityTypes.map((entity, index) => (
                <div key={index} className="bg-white rounded-xl p-6 shadow-sm">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{entity.name}</h3>
                  <p className="text-gray-600 mb-4">{entity.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {entity.regulations.map((reg, idx) => (
                      <span key={idx} className="px-2 py-1 bg-gray-100 text-gray-600 text-sm rounded">
                        {reg}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Requirements */}
        <section id="requisitos" className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-black text-gray-900 mb-4">
                Requisitos de identificación remota
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Los principales requisitos establecidos por la CNBV para la identificación no presencial de clientes.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {requirements.map((req, index) => (
                <div key={index} className="bg-gray-50 rounded-xl p-8">
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{req.title}</h3>
                  <p className="text-gray-600 mb-6">{req.description}</p>
                  <ul className="space-y-3">
                    {req.items.map((item, idx) => (
                      <li key={idx} className="flex items-center gap-3">
                        <svg className="w-5 h-5 text-[#0066ff] flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        <span className="text-gray-700">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* JAAK Solution */}
        <section className="py-20 bg-[#0a0a0a]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#00d4aa]/10 border border-[#00d4aa]/20 rounded-full mb-6">
                <span className="w-2 h-2 bg-[#00d4aa] rounded-full"></span>
                <span className="text-[#00d4aa] text-sm font-medium">Solución JAAK</span>
              </div>
              <h2 className="text-3xl md:text-4xl font-black text-white mb-4">
                Cómo JAAK cumple con la CNBV
              </h2>
              <p className="text-xl text-white/60 max-w-3xl mx-auto">
                Nuestra plataforma está diseñada específicamente para cumplir con los lineamientos de identificación remota de la CNBV.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              {[
                {
                  title: "Biometría certificada",
                  description: "Prueba de vida con certificación iBeta Level 2, conforme a ISO 30107-3.",
                  icon: "M15 12a3 3 0 11-6 0 3 3 0 016 0z M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z",
                },
                {
                  title: "Validación INE",
                  description: "Consulta en tiempo real a las bases oficiales del Instituto Nacional Electoral.",
                  icon: "M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z",
                },
                {
                  title: "Expediente completo",
                  description: "Generación automática del expediente digital con toda la evidencia requerida.",
                  icon: "M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z",
                },
                {
                  title: "Sellado de tiempo",
                  description: "Timestamp criptográfico que garantiza la integridad de la evidencia.",
                  icon: "M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z",
                },
                {
                  title: "API robusta",
                  description: "Integración sencilla con core bancario y sistemas de onboarding existentes.",
                  icon: "M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4",
                },
                {
                  title: "Auditoría lista",
                  description: "Reportes y expedientes preparados para revisiones de la autoridad.",
                  icon: "M9 17v-2m3 2v-4m3 4v-6m2 10H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z",
                },
              ].map((item, index) => (
                <div key={index} className="bg-white/5 rounded-xl p-6 border border-white/10">
                  <div className="w-12 h-12 bg-[#0066ff]/20 rounded-xl flex items-center justify-center mb-4">
                    <svg className="w-6 h-6 text-[#0066ff]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d={item.icon} />
                    </svg>
                  </div>
                  <h3 className="text-lg font-bold text-white mb-2">{item.title}</h3>
                  <p className="text-white/60">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-20 bg-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl md:text-4xl font-black text-gray-900 mb-6">
              ¿Eres una institución financiera regulada?
            </h2>
            <p className="text-xl text-gray-600 mb-8">
              Te mostramos cómo JAAK puede ayudarte a cumplir con los lineamientos de identificación remota de la CNBV.
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
