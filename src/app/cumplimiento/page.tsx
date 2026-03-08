import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Link from "next/link";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Cumplimiento Regulatorio | JAAK",
  description:
    "Verificación de identidad que cumple con CNBV, LFPIORPI, UIF, NOM-151 y otras regulaciones mexicanas. Evidencia auditable para instituciones financieras y empresas reguladas.",
  keywords: [
    "cumplimiento regulatorio",
    "LFPIORPI",
    "CNBV",
    "UIF",
    "NOM-151",
    "KYC México",
    "verificación identidad",
    "compliance",
    "evidencia auditable",
  ],
  openGraph: {
    title: "Cumplimiento Regulatorio | JAAK",
    description:
      "Verificación de identidad conforme a regulaciones mexicanas. CNBV, LFPIORPI, UIF, NOM-151.",
    type: "website",
  },
};

export default function CumplimientoPage() {
  const regulations = [
    {
      acronym: "LFPIORPI",
      name: "Ley Federal para la Prevención e Identificación de Operaciones con Recursos de Procedencia Ilícita",
      description: "Incluye Artículo 17 de Actividades Vulnerables. Obligaciones de identificación para inmobiliarias, vehículos, activos virtuales y más.",
      href: "/cumplimiento/lfpiorpi",
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
        </svg>
      ),
    },
    {
      acronym: "CNBV",
      name: "Comisión Nacional Bancaria y de Valores",
      description: "Lineamientos de identificación remota no presencial para instituciones financieras y fintechs.",
      href: "/cumplimiento/cnbv",
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
        </svg>
      ),
    },
    {
      acronym: "UIF",
      name: "Unidad de Inteligencia Financiera",
      description: "Expedientes digitales y evidencia auditable lista para responder a requerimientos de la autoridad.",
      href: "/cumplimiento/uif",
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 17v-2m3 2v-4m3 4v-6m2 10H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
        </svg>
      ),
    },
    {
      acronym: "NOM-151",
      name: "Norma Oficial Mexicana de Conservación de Mensajes de Datos",
      description: "Firma electrónica con validez legal plena. Sellado de tiempo certificado y conservación de documentos.",
      href: "/cumplimiento/nom-151",
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
        </svg>
      ),
    },
    {
      acronym: "PLD / AML",
      name: "Actividades Vulnerables y Umbrales 2026",
      description: "Tabla completa de umbrales, simulador PLD y clasificador comercial. Actualizado con reforma DOF 16/07/2025 y UMA 2026.",
      href: "/cumplimiento/actividades-vulnerables",
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
        </svg>
      ),
    },
  ];

  const certifications = [
    {
      name: "ISO 27001",
      description: "Seguridad de la Información",
      image: "/images/certifications/iso-27001.png",
    },
    {
      name: "ISO 9001",
      description: "Gestión de Calidad",
      image: "/images/certifications/iso-9001.png",
    },
    {
      name: "iBeta",
      description: "Prueba de Vida Certificada",
      image: "/images/certifications/ibeta.png",
    },
    {
      name: "NIST",
      description: "Estándares de Identidad Digital",
      image: "/images/certifications/nist.png",
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
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#0066ff]/10 border border-[#0066ff]/20 rounded-full mb-6">
                <span className="w-2 h-2 bg-[#0066ff] rounded-full"></span>
                <span className="text-[#0066ff] text-sm font-medium">Cumplimiento Regulatorio</span>
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-white mb-6">
                Verificación de identidad que cumple con la regulación mexicana
              </h1>
              <p className="text-xl text-white/60 mb-8">
                Diseñado para instituciones financieras y empresas reguladas que necesitan evidencia auditable ante CNBV, UIF y otras autoridades supervisoras.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link
                  href="/contacto"
                  className="px-6 py-3 bg-[#0066ff] text-white font-semibold rounded-lg hover:bg-[#0052cc] transition-all"
                >
                  Solicitar revisión regulatoria
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Quick Stats */}
        <section className="py-12 bg-white border-b border-gray-100">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-black text-gray-900 mb-2">4+</div>
                <div className="text-gray-600">Regulaciones cubiertas</div>
              </div>
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-black text-gray-900 mb-2">4</div>
                <div className="text-gray-600">Certificaciones activas</div>
              </div>
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-black text-gray-900 mb-2">100%</div>
                <div className="text-gray-600">Evidencia auditable</div>
              </div>
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-black text-gray-900 mb-2">5 años</div>
                <div className="text-gray-600">Retención de expedientes</div>
              </div>
            </div>
          </div>
        </section>

        {/* Regulations Grid */}
        <section className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-black text-gray-900 mb-4">
                Regulaciones que cubrimos
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                JAAK está diseñado para ayudarte a cumplir con los principales marcos regulatorios del sector financiero mexicano.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              {regulations.map((reg, index) => (
                <Link
                  key={index}
                  href={reg.href}
                  className="group bg-white rounded-2xl p-8 shadow-sm hover:shadow-lg transition-all border border-gray-100 hover:border-[#0066ff]/20"
                >
                  <div className="flex items-start gap-6">
                    <div className="w-14 h-14 bg-[#0066ff]/10 rounded-xl flex items-center justify-center flex-shrink-0 text-[#0066ff] group-hover:bg-[#0066ff] group-hover:text-white transition-colors">
                      {reg.icon}
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-2">
                        <span className="text-2xl font-black text-gray-900 group-hover:text-[#0066ff] transition-colors">
                          {reg.acronym}
                        </span>
                        <svg className="w-5 h-5 text-gray-400 group-hover:text-[#0066ff] group-hover:translate-x-1 transition-all" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                      </div>
                      <h3 className="text-sm font-medium text-gray-500 mb-3">{reg.name}</h3>
                      <p className="text-gray-600">{reg.description}</p>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* Certifications */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-black text-gray-900 mb-4">
                Certificaciones y estándares
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Nuestras certificaciones respaldan el compromiso con la seguridad, calidad y cumplimiento de estándares internacionales.
              </p>
            </div>

            <div className="grid md:grid-cols-4 gap-6">
              {certifications.map((cert, index) => (
                <div key={index} className="text-center p-6 bg-gray-50 rounded-xl">
                  <div className="w-20 h-20 mx-auto mb-4 relative">
                    <Image
                      src={cert.image}
                      alt={cert.name}
                      fill
                      className="object-contain"
                    />
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 mb-1">{cert.name}</h3>
                  <p className="text-gray-600 text-sm">{cert.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Evidence Capabilities */}
        <section className="py-20 bg-[#0a0a0a]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#00d4aa]/10 border border-[#00d4aa]/20 rounded-full mb-6">
                <span className="w-2 h-2 bg-[#00d4aa] rounded-full"></span>
                <span className="text-[#00d4aa] text-sm font-medium">Evidencia Auditable</span>
              </div>
              <h2 className="text-3xl md:text-4xl font-black text-white mb-4">
                Cada verificación genera evidencia
              </h2>
              <p className="text-xl text-white/60 max-w-3xl mx-auto">
                Expedientes digitales completos y listos para presentar ante reguladores, auditores o en procedimientos legales.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              {[
                {
                  title: "Expediente Digital",
                  description: "Todos los elementos probatorios: imágenes, videos, documentos y resultados.",
                  icon: "M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z",
                },
                {
                  title: "Sellado de Tiempo",
                  description: "Timestamp criptográfico que garantiza la fecha y hora exacta de cada acción.",
                  icon: "M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z",
                },
                {
                  title: "Cadena de Custodia",
                  description: "Registro inmutable de todos los accesos y modificaciones a la evidencia.",
                  icon: "M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1",
                },
                {
                  title: "Reportes de Auditoría",
                  description: "Generación automática de reportes listos para entregar a reguladores.",
                  icon: "M9 17v-2m3 2v-4m3 4v-6m2 10H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z",
                },
                {
                  title: "Almacenamiento Seguro",
                  description: "Cifrado AES-256, replicación geográfica y retención configurable.",
                  icon: "M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z",
                },
                {
                  title: "API de Consulta",
                  description: "Acceso programático a expedientes para integración con sistemas internos.",
                  icon: "M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4",
                },
              ].map((cap, index) => (
                <div key={index} className="bg-white/5 rounded-xl p-6 border border-white/10">
                  <div className="w-12 h-12 bg-[#0066ff]/20 rounded-xl flex items-center justify-center mb-4">
                    <svg className="w-6 h-6 text-[#0066ff]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d={cap.icon} />
                    </svg>
                  </div>
                  <h3 className="text-lg font-bold text-white mb-2">{cap.title}</h3>
                  <p className="text-white/60">{cap.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl md:text-4xl font-black text-gray-900 mb-6">
              ¿Necesitas cumplir con regulación?
            </h2>
            <p className="text-xl text-gray-600 mb-8">
              En 15 minutos te explicamos cómo JAAK cumple con los requisitos específicos de tu regulación y te mostramos la evidencia que genera.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link
                href="/contacto"
                className="px-8 py-4 bg-[#0066ff] text-white font-bold rounded-lg hover:bg-[#0052cc] transition-all"
              >
                Solicitar revisión regulatoria
              </Link>
              <Link
                href="/seguridad"
                className="px-8 py-4 bg-gray-100 text-gray-900 font-bold rounded-lg hover:bg-gray-200 transition-all"
              >
                Ver seguridad
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
