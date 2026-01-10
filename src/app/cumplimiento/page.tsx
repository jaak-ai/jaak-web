import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Link from "next/link";

export const metadata = {
  title: "Cumplimiento Regulatorio | JAAK",
  description:
    "Cumple con CNBV, LFPIORPI, UIF, CONDUSEF y LFPDPPP. Verificacion de identidad certificada ISO 27001, ISO 9001, iBeta y NIST para instituciones financieras en Mexico.",
};

export default function CumplimientoPage() {
  const regulations = [
    {
      acronym: "CNBV",
      name: "Comision Nacional Bancaria y de Valores",
      description:
        "Regulador principal del sistema financiero mexicano que establece los requisitos de identificacion y conocimiento del cliente para instituciones financieras.",
      requirements: [
        "Identificacion remota no presencial",
        "Verificacion biometrica con prueba de vida",
        "Validacion de documentos oficiales",
        "Expediente electronico del cliente",
        "Trazabilidad completa de operaciones",
      ],
      jaakSolution:
        "JAAK proporciona verificacion de identidad biometrica certificada con prueba de vida iBeta Level 1, validacion de INE/IFE en tiempo real, y expedientes digitales que cumplen con los lineamientos de identificacion remota de la CNBV.",
    },
    {
      acronym: "LFPIORPI",
      name: "Ley Federal para la Prevencion e Identificacion de Operaciones con Recursos de Procedencia Ilicita",
      description:
        "Marco legal que establece obligaciones de identificacion y reporte para actividades vulnerables y prevencion de lavado de dinero.",
      requirements: [
        "Identificacion plena de clientes y usuarios",
        "Conservacion de documentacion por 5 anios",
        "Avisos a la UIF para operaciones relevantes",
        "Politicas de conocimiento del cliente (KYC)",
        "Monitoreo de operaciones inusuales",
      ],
      jaakSolution:
        "La plataforma JAAK genera evidencia auditable con sellado de tiempo, almacenamiento seguro por el periodo legal requerido, y expedientes completos listos para presentar ante la autoridad.",
    },
    {
      acronym: "UIF",
      name: "Unidad de Inteligencia Financiera",
      description:
        "Organo de inteligencia financiera que recibe y analiza reportes de operaciones sospechosas y vulnerables.",
      requirements: [
        "Reportes de operaciones inusuales",
        "Identificacion de beneficiarios finales",
        "Debida diligencia reforzada",
        "Conservacion de evidencia probatoria",
        "Cooperacion en investigaciones",
      ],
      jaakSolution:
        "JAAK proporciona expedientes digitales con toda la evidencia de verificacion: capturas biometricas, documentos validados, coordenadas GPS, sellado de tiempo y cadena de custodia digital para responder a cualquier requerimiento.",
    },
    {
      acronym: "CONDUSEF",
      name: "Comision Nacional para la Proteccion y Defensa de los Usuarios de Servicios Financieros",
      description:
        "Organismo encargado de proteger los derechos de los usuarios de servicios financieros y promover la inclusion financiera responsable.",
      requirements: [
        "Contratos claros y transparentes",
        "Consentimiento informado del usuario",
        "Proteccion de datos personales",
        "Atencion a quejas y reclamaciones",
        "Evidencia de aceptacion de terminos",
      ],
      jaakSolution:
        "La firma electronica de JAAK captura consentimientos con validez legal, genera constancias de aceptacion con biometria facial, y mantiene un registro inmutable de todas las interacciones con el usuario.",
    },
    {
      acronym: "LFPDPPP",
      name: "Ley Federal de Proteccion de Datos Personales en Posesion de los Particulares",
      description:
        "Legislacion que regula el tratamiento de datos personales por parte de empresas privadas, estableciendo principios de licitud, consentimiento y finalidad.",
      requirements: [
        "Aviso de privacidad completo",
        "Consentimiento expreso para datos sensibles",
        "Medidas de seguridad tecnicas y administrativas",
        "Derechos ARCO (Acceso, Rectificacion, Cancelacion, Oposicion)",
        "Transferencias internacionales controladas",
      ],
      jaakSolution:
        "JAAK implementa cifrado de datos en transito y reposo, control de acceso basado en roles, anonimizacion de datos biometricos, y herramientas para gestionar solicitudes de derechos ARCO de manera eficiente.",
    },
  ];

  const certifications = [
    {
      name: "ISO 27001",
      description: "Seguridad de la Informacion",
      detail:
        "Sistema de gestion de seguridad de la informacion certificado internacionalmente. Garantiza la confidencialidad, integridad y disponibilidad de los datos.",
    },
    {
      name: "ISO 9001",
      description: "Gestion de Calidad",
      detail:
        "Sistema de gestion de calidad que asegura procesos consistentes, mejora continua y satisfaccion del cliente en todos los servicios.",
    },
    {
      name: "iBeta Level 1",
      description: "Prueba de Vida Certificada",
      detail:
        "Certificacion de deteccion de ataques de presentacion (PAD) segun ISO 30107-3. Protege contra fotos, videos y mascaras.",
    },
    {
      name: "NIST",
      description: "Estandares de Identidad Digital",
      detail:
        "Cumplimiento con los lineamientos NIST 800-63-3 para verificacion de identidad digital y autenticacion.",
    },
  ];

  const evidenceCapabilities = [
    {
      title: "Expediente Digital Completo",
      description:
        "Cada verificacion genera un expediente con todos los elementos probatorios: imagenes, videos, documentos, metadatos y resultados de validacion.",
      icon: (
        <svg
          className="w-6 h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.5}
            d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
          />
        </svg>
      ),
    },
    {
      title: "Sellado de Tiempo",
      description:
        "Todos los eventos criticos tienen sellado de tiempo criptografico que garantiza la integridad y el momento exacto de cada accion.",
      icon: (
        <svg
          className="w-6 h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.5}
            d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </svg>
      ),
    },
    {
      title: "Cadena de Custodia",
      description:
        "Registro inmutable de todos los accesos y modificaciones a la evidencia, cumpliendo con requisitos de trazabilidad.",
      icon: (
        <svg
          className="w-6 h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.5}
            d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1"
          />
        </svg>
      ),
    },
    {
      title: "Reportes de Auditoria",
      description:
        "Generacion automatica de reportes listos para entregar a reguladores, auditores externos o areas de cumplimiento.",
      icon: (
        <svg
          className="w-6 h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.5}
            d="M9 17v-2m3 2v-4m3 4v-6m2 10H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
          />
        </svg>
      ),
    },
    {
      title: "Almacenamiento Seguro",
      description:
        "Evidencia almacenada con cifrado AES-256, replicacion geografica y retencion configurable segun requisitos legales.",
      icon: (
        <svg
          className="w-6 h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.5}
            d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
          />
        </svg>
      ),
    },
    {
      title: "API de Consulta",
      description:
        "Acceso programatico a expedientes y evidencia para integracion con sistemas internos de cumplimiento y auditoria.",
      icon: (
        <svg
          className="w-6 h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.5}
            d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"
          />
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
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#0066ff]/10 border border-[#0066ff]/20 rounded-full mb-6">
                <span className="w-2 h-2 bg-[#0066ff] rounded-full"></span>
                <span className="text-[#0066ff] text-sm font-medium">
                  Cumplimiento Regulatorio
                </span>
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-white mb-6">
                Verificacion de identidad que cumple con la regulacion mexicana
              </h1>
              <p className="text-xl text-white/60 mb-8">
                Disenado para instituciones financieras y empresas reguladas que
                necesitan evidencia auditable ante CNBV, UIF y otras autoridades
                supervisoras.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link
                  href="/contacto?type=regulatory-review"
                  className="px-6 py-3 bg-[#0066ff] text-white font-semibold rounded-lg hover:bg-[#0052cc] transition-all"
                >
                  Solicitar revision regulatoria
                </Link>
                <Link
                  href="#regulaciones"
                  className="px-6 py-3 bg-white/10 text-white font-semibold rounded-lg hover:bg-white/20 transition-all"
                >
                  Ver regulaciones
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
                <div className="text-3xl md:text-4xl font-black text-gray-900 mb-2">
                  5+
                </div>
                <div className="text-gray-600">Regulaciones cubiertas</div>
              </div>
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-black text-gray-900 mb-2">
                  4
                </div>
                <div className="text-gray-600">Certificaciones activas</div>
              </div>
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-black text-gray-900 mb-2">
                  100%
                </div>
                <div className="text-gray-600">Evidencia auditable</div>
              </div>
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-black text-gray-900 mb-2">
                  5 anios
                </div>
                <div className="text-gray-600">Retencion de expedientes</div>
              </div>
            </div>
          </div>
        </section>

        {/* Regulations Section */}
        <section id="regulaciones" className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-black text-gray-900 mb-4">
                Cumplimiento con regulaciones mexicanas
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                JAAK esta disenado para ayudarte a cumplir con los principales
                marcos regulatorios del sector financiero mexicano.
              </p>
            </div>

            <div className="space-y-8">
              {regulations.map((reg, index) => (
                <div
                  key={index}
                  className="bg-white rounded-2xl shadow-sm overflow-hidden"
                >
                  <div className="p-8">
                    <div className="flex flex-col lg:flex-row lg:items-start gap-8">
                      {/* Regulation Info */}
                      <div className="lg:w-1/3">
                        <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#0066ff]/10 rounded-lg mb-4">
                          <span className="text-[#0066ff] font-bold text-lg">
                            {reg.acronym}
                          </span>
                        </div>
                        <h3 className="text-xl font-bold text-gray-900 mb-3">
                          {reg.name}
                        </h3>
                        <p className="text-gray-600">{reg.description}</p>
                      </div>

                      {/* Requirements */}
                      <div className="lg:w-1/3">
                        <h4 className="text-sm font-bold text-gray-500 uppercase tracking-wider mb-4">
                          Requisitos clave
                        </h4>
                        <ul className="space-y-3">
                          {reg.requirements.map((req, idx) => (
                            <li key={idx} className="flex items-start gap-3">
                              <svg
                                className="w-5 h-5 text-gray-400 flex-shrink-0 mt-0.5"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                              >
                                <path
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  strokeWidth={2}
                                  d="M9 5l7 7-7 7"
                                />
                              </svg>
                              <span className="text-gray-700">{req}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* JAAK Solution */}
                      <div className="lg:w-1/3 bg-[#00d4aa]/5 rounded-xl p-6 border border-[#00d4aa]/20">
                        <div className="flex items-center gap-2 mb-4">
                          <svg
                            className="w-5 h-5 text-[#00d4aa]"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M5 13l4 4L19 7"
                            />
                          </svg>
                          <h4 className="text-sm font-bold text-[#00d4aa] uppercase tracking-wider">
                            Como ayuda JAAK
                          </h4>
                        </div>
                        <p className="text-gray-700">{reg.jaakSolution}</p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Certifications Section */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-black text-gray-900 mb-4">
                Certificaciones y estandares
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Nuestras certificaciones respaldan el compromiso con la
                seguridad, calidad y cumplimiento de estandares internacionales.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {certifications.map((cert, index) => (
                <div
                  key={index}
                  className="bg-gray-50 rounded-xl p-6 hover:shadow-lg transition-shadow border border-gray-100"
                >
                  <div className="w-12 h-12 bg-[#0066ff]/10 rounded-xl flex items-center justify-center mb-4">
                    <svg
                      className="w-6 h-6 text-[#0066ff]"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={1.5}
                        d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                      />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-1">
                    {cert.name}
                  </h3>
                  <p className="text-[#0066ff] font-medium text-sm mb-3">
                    {cert.description}
                  </p>
                  <p className="text-gray-600 text-sm">{cert.detail}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Evidence & Audit Section */}
        <section className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-black text-gray-900 mb-4">
                Evidencia y capacidades de auditoria
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Cada verificacion genera evidencia probatoria lista para
                presentar ante reguladores, auditores o en procedimientos
                legales.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {evidenceCapabilities.map((cap, index) => (
                <div key={index} className="bg-white rounded-xl p-6 shadow-sm">
                  <div className="w-12 h-12 bg-[#0066ff]/10 rounded-xl flex items-center justify-center mb-4 text-[#0066ff]">
                    {cap.icon}
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 mb-2">
                    {cap.title}
                  </h3>
                  <p className="text-gray-600">{cap.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* How It Works */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-black text-gray-900 mb-4">
                Proceso de verificacion conforme
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Un flujo disenado para cumplir con los requisitos de
                identificacion remota no presencial.
              </p>
            </div>

            <div className="grid md:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-[#0066ff] rounded-2xl flex items-center justify-center mx-auto mb-4 text-white text-2xl font-bold">
                  1
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">
                  Captura de documento
                </h3>
                <p className="text-gray-600 text-sm">
                  INE/IFE, pasaporte o documento oficial con extraccion
                  automatica de datos.
                </p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-[#0066ff] rounded-2xl flex items-center justify-center mx-auto mb-4 text-white text-2xl font-bold">
                  2
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">
                  Validacion de autenticidad
                </h3>
                <p className="text-gray-600 text-sm">
                  Verificacion de elementos de seguridad y consulta a bases
                  oficiales del INE.
                </p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-[#0066ff] rounded-2xl flex items-center justify-center mx-auto mb-4 text-white text-2xl font-bold">
                  3
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">
                  Biometria facial
                </h3>
                <p className="text-gray-600 text-sm">
                  Prueba de vida certificada iBeta y comparacion facial con
                  documento.
                </p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-[#0066ff] rounded-2xl flex items-center justify-center mx-auto mb-4 text-white text-2xl font-bold">
                  4
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">
                  Generacion de expediente
                </h3>
                <p className="text-gray-600 text-sm">
                  Expediente digital con toda la evidencia, sellado de tiempo y
                  hash de integridad.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-[#0a0a0a]">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#00d4aa]/10 border border-[#00d4aa]/20 rounded-full mb-6">
              <span className="w-2 h-2 bg-[#00d4aa] rounded-full"></span>
              <span className="text-[#00d4aa] text-sm font-medium">
                Revision gratuita
              </span>
            </div>
            <h2 className="text-3xl md:text-4xl font-black text-white mb-6">
              Solicita una revision regulatoria
            </h2>
            <p className="text-xl text-white/60 mb-8 max-w-2xl mx-auto">
              En 15 minutos te explicamos como JAAK cumple con los requisitos
              especificos de tu regulacion y te mostramos la evidencia que
              genera.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link
                href="/contacto?type=regulatory-review"
                className="inline-flex px-8 py-4 bg-[#0066ff] text-white font-bold rounded-lg hover:bg-[#0052cc] transition-all"
              >
                Agendar revision regulatoria
              </Link>
              <Link
                href="/contacto"
                className="inline-flex px-8 py-4 bg-white/10 text-white font-bold rounded-lg hover:bg-white/20 transition-all"
              >
                Contactar ventas
              </Link>
            </div>
            <p className="text-white/40 text-sm mt-8">
              Sin compromiso. Hablamos tu idioma regulatorio.
            </p>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
