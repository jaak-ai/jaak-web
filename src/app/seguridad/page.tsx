import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Link from "next/link";

export const metadata = {
  title: "Seguridad | JAAK",
  description:
    "Conoce las medidas de seguridad, certificaciones y estandares que JAAK implementa para proteger tu informacion. ISO 27001, ISO 9001, iBeta y NIST.",
};

export default function SeguridadPage() {
  const certifications = [
    {
      name: "ISO 27001",
      subtitle: "Seguridad de la Informacion",
      description:
        "Sistema de gestion de seguridad de la informacion (SGSI) certificado internacionalmente. Este estandar garantiza que implementamos controles adecuados para proteger la confidencialidad, integridad y disponibilidad de la informacion.",
      benefits: [
        "Gestion de riesgos estructurada",
        "Politicas de seguridad documentadas",
        "Auditorias internas y externas regulares",
        "Mejora continua de controles",
      ],
    },
    {
      name: "ISO 9001",
      subtitle: "Gestion de Calidad",
      description:
        "Sistema de gestion de calidad que asegura procesos consistentes, documentados y orientados a la satisfaccion del cliente. Garantiza que nuestros servicios cumplen con los mas altos estandares de calidad.",
      benefits: [
        "Procesos estandarizados y repetibles",
        "Control de documentacion y versiones",
        "Medicion de satisfaccion del cliente",
        "Gestion de no conformidades",
      ],
    },
    {
      name: "iBeta Level 1",
      subtitle: "Prueba de Vida Certificada",
      description:
        "Certificacion de deteccion de ataques de presentacion (PAD) segun el estandar ISO 30107-3. Nuestro sistema de prueba de vida ha sido evaluado por un laboratorio acreditado para resistir intentos de suplantacion.",
      benefits: [
        "Proteccion contra fotos impresas",
        "Deteccion de videos pregrabados",
        "Resistencia a mascaras 2D y 3D",
        "Evaluacion por laboratorio independiente",
      ],
    },
    {
      name: "NIST 800-63-3",
      subtitle: "Estandares de Identidad Digital",
      description:
        "Cumplimiento con los lineamientos del Instituto Nacional de Estandares y Tecnologia de Estados Unidos para verificacion de identidad digital y autenticacion, niveles IAL2 y AAL2.",
      benefits: [
        "Verificacion de identidad robusta",
        "Autenticacion multifactor",
        "Gestion de credenciales segura",
        "Proteccion contra fraude de identidad",
      ],
    },
  ];

  const securityMeasures = [
    {
      category: "Cifrado y proteccion de datos",
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
        </svg>
      ),
      measures: [
        "Cifrado TLS 1.3 para todos los datos en transito",
        "Cifrado AES-256 para datos en reposo",
        "Gestion de claves con HSM (Hardware Security Module)",
        "Rotacion automatica de claves de cifrado",
        "Tokenizacion de datos sensibles",
      ],
    },
    {
      category: "Control de acceso",
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 7a2 2 0 012 2m4 0a6 6 0 01-7.743 5.743L11 17H9v2H7v2H4a1 1 0 01-1-1v-2.586a1 1 0 01.293-.707l5.964-5.964A6 6 0 1121 9z" />
        </svg>
      ),
      measures: [
        "Autenticacion multifactor obligatoria",
        "Control de acceso basado en roles (RBAC)",
        "Principio de minimo privilegio",
        "Single Sign-On (SSO) empresarial",
        "Revision periodica de permisos",
      ],
    },
    {
      category: "Infraestructura segura",
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2m-2-4h.01M17 16h.01" />
        </svg>
      ),
      measures: [
        "Centros de datos Tier III+ certificados",
        "Redundancia geografica de datos",
        "Firewalls de aplicacion web (WAF)",
        "Proteccion DDoS en todas las capas",
        "Segmentacion de red y microservicios",
      ],
    },
    {
      category: "Monitoreo y respuesta",
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
        </svg>
      ),
      measures: [
        "Monitoreo de seguridad 24/7/365",
        "Sistema SIEM para correlacion de eventos",
        "Deteccion de anomalias con machine learning",
        "Equipo de respuesta a incidentes (CSIRT)",
        "Plan de recuperacion ante desastres (DRP)",
      ],
    },
    {
      category: "Desarrollo seguro",
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
        </svg>
      ),
      measures: [
        "Ciclo de desarrollo seguro (SDLC)",
        "Revision de codigo obligatoria",
        "Analisis estatico de seguridad (SAST)",
        "Pruebas de penetracion regulares",
        "Programa de gestion de vulnerabilidades",
      ],
    },
    {
      category: "Cumplimiento y auditoria",
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
        </svg>
      ),
      measures: [
        "Auditorias de seguridad anuales",
        "Pruebas de penetracion por terceros",
        "Registro de auditoria inmutable",
        "Cumplimiento LFPDPPP y LFPIORPI",
        "Reportes de cumplimiento para clientes",
      ],
    },
  ];

  const dataProtection = [
    {
      title: "Proteccion de datos biometricos",
      description:
        "Los datos biometricos son tratados con las maximas medidas de seguridad. Utilizamos plantillas biometricas (templates) en lugar de imagenes originales cuando es posible, y aplicamos tecnicas de anonimizacion para proteger la privacidad.",
    },
    {
      title: "Retencion y eliminacion",
      description:
        "Mantenemos los datos solo durante el tiempo necesario para cumplir con las finalidades establecidas o las obligaciones legales aplicables. Contamos con procesos automatizados de eliminacion segura.",
    },
    {
      title: "Respaldo y recuperacion",
      description:
        "Realizamos respaldos cifrados de manera regular, almacenados en ubicaciones geograficamente separadas. Probamos periodicamente la capacidad de recuperacion para garantizar la continuidad del servicio.",
    },
    {
      title: "Transferencias internacionales",
      description:
        "Cuando es necesario transferir datos fuera de Mexico, utilizamos clausulas contractuales estandar y verificamos que los destinatarios cumplan con niveles de proteccion equivalentes.",
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
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#00d4aa]/10 border border-[#00d4aa]/20 rounded-full mb-6">
                <span className="w-2 h-2 bg-[#00d4aa] rounded-full"></span>
                <span className="text-[#00d4aa] text-sm font-medium">
                  Seguridad Empresarial
                </span>
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-white mb-6">
                Tu seguridad es nuestra prioridad
              </h1>
              <p className="text-xl text-white/60 mb-8">
                Implementamos las mejores practicas de seguridad y cumplimos con los estandares internacionales mas exigentes para proteger la informacion de nuestros clientes y sus usuarios.
              </p>
              <div className="flex flex-wrap gap-3">
                <span className="px-4 py-2 bg-white/10 text-white rounded-lg text-sm font-medium">
                  ISO 27001
                </span>
                <span className="px-4 py-2 bg-white/10 text-white rounded-lg text-sm font-medium">
                  ISO 9001
                </span>
                <span className="px-4 py-2 bg-white/10 text-white rounded-lg text-sm font-medium">
                  iBeta Level 1
                </span>
                <span className="px-4 py-2 bg-white/10 text-white rounded-lg text-sm font-medium">
                  NIST 800-63-3
                </span>
              </div>
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
                Nuestras certificaciones demuestran el compromiso con la seguridad, calidad y cumplimiento de estandares reconocidos internacionalmente.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {certifications.map((cert, index) => (
                <div
                  key={index}
                  className="bg-gray-50 rounded-2xl p-8 border border-gray-100"
                >
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-14 h-14 bg-[#0066ff]/10 rounded-xl flex items-center justify-center">
                      <svg
                        className="w-7 h-7 text-[#0066ff]"
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
                    <div>
                      <h3 className="text-xl font-bold text-gray-900">
                        {cert.name}
                      </h3>
                      <p className="text-[#0066ff] font-medium text-sm">
                        {cert.subtitle}
                      </p>
                    </div>
                  </div>
                  <p className="text-gray-600 mb-6">{cert.description}</p>
                  <div>
                    <h4 className="text-sm font-bold text-gray-500 uppercase tracking-wider mb-3">
                      Beneficios clave
                    </h4>
                    <ul className="space-y-2">
                      {cert.benefits.map((benefit, idx) => (
                        <li
                          key={idx}
                          className="flex items-center gap-2 text-gray-700"
                        >
                          <svg
                            className="w-5 h-5 text-[#00d4aa] flex-shrink-0"
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
                          {benefit}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Security Measures Section */}
        <section className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-black text-gray-900 mb-4">
                Medidas de seguridad
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Implementamos multiples capas de seguridad para proteger la informacion en todo momento.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {securityMeasures.map((category, index) => (
                <div
                  key={index}
                  className="bg-white rounded-xl p-6 shadow-sm"
                >
                  <div className="w-12 h-12 bg-[#0066ff]/10 rounded-xl flex items-center justify-center mb-4 text-[#0066ff]">
                    {category.icon}
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 mb-4">
                    {category.category}
                  </h3>
                  <ul className="space-y-2">
                    {category.measures.map((measure, idx) => (
                      <li
                        key={idx}
                        className="flex items-start gap-2 text-sm text-gray-600"
                      >
                        <svg
                          className="w-4 h-4 text-[#0066ff] flex-shrink-0 mt-0.5"
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
                        {measure}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Data Protection Section */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-black text-gray-900 mb-4">
                Proteccion de datos
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Aplicamos los mas altos estandares para proteger la informacion personal y biometrica.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {dataProtection.map((item, index) => (
                <div
                  key={index}
                  className="border border-gray-200 rounded-xl p-6 hover:border-[#0066ff]/30 transition-colors"
                >
                  <h3 className="text-lg font-bold text-gray-900 mb-3">
                    {item.title}
                  </h3>
                  <p className="text-gray-600">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Incident Response Section */}
        <section className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-black text-gray-900 mb-4">
                Respuesta ante incidentes
              </h2>
              <p className="text-xl text-gray-600">
                Contamos con procesos establecidos para detectar, responder y comunicar cualquier incidente de seguridad de manera rapida y transparente.
              </p>
            </div>

            <div className="grid md:grid-cols-4 gap-6 max-w-5xl mx-auto">
              <div className="text-center">
                <div className="w-16 h-16 bg-[#0066ff] rounded-2xl flex items-center justify-center mx-auto mb-4 text-white text-2xl font-bold">
                  1
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">
                  Deteccion
                </h3>
                <p className="text-gray-600 text-sm">
                  Monitoreo continuo con alertas automaticas ante eventos sospechosos.
                </p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-[#0066ff] rounded-2xl flex items-center justify-center mx-auto mb-4 text-white text-2xl font-bold">
                  2
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">
                  Contencion
                </h3>
                <p className="text-gray-600 text-sm">
                  Aislamiento inmediato para evitar propagacion del incidente.
                </p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-[#0066ff] rounded-2xl flex items-center justify-center mx-auto mb-4 text-white text-2xl font-bold">
                  3
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">
                  Comunicacion
                </h3>
                <p className="text-gray-600 text-sm">
                  Notificacion a partes afectadas dentro de las 72 horas.
                </p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-[#0066ff] rounded-2xl flex items-center justify-center mx-auto mb-4 text-white text-2xl font-bold">
                  4
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">
                  Mejora
                </h3>
                <p className="text-gray-600 text-sm">
                  Analisis post-incidente e implementacion de mejoras.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Vulnerability Disclosure */}
        <section className="py-20 bg-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="bg-[#0a0a0a] rounded-2xl p-8 md:p-12">
              <div className="text-center mb-8">
                <h2 className="text-3xl font-black text-white mb-4">
                  Divulgacion responsable de vulnerabilidades
                </h2>
                <p className="text-white/60">
                  Valoramos la colaboracion de la comunidad de seguridad. Si descubres una vulnerabilidad, te invitamos a reportarla de manera responsable.
                </p>
              </div>

              <div className="bg-white/5 rounded-xl p-6 mb-8">
                <h3 className="text-lg font-bold text-white mb-4">
                  Alcance del programa
                </h3>
                <ul className="space-y-2 text-white/70">
                  <li className="flex items-center gap-2">
                    <svg className="w-5 h-5 text-[#00d4aa]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    Aplicaciones web en *.jaak.ai
                  </li>
                  <li className="flex items-center gap-2">
                    <svg className="w-5 h-5 text-[#00d4aa]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    APIs publicas documentadas
                  </li>
                  <li className="flex items-center gap-2">
                    <svg className="w-5 h-5 text-[#00d4aa]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    SDKs oficiales de JAAK
                  </li>
                </ul>
              </div>

              <div className="text-center">
                <p className="text-white/60 mb-4">
                  Reporta vulnerabilidades de manera confidencial a:
                </p>
                <a
                  href="mailto:security@jaak.ai"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-[#0066ff] text-white font-semibold rounded-lg hover:bg-[#0052cc] transition-all"
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  security@jaak.ai
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Related Links */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-8 text-center">
              Documentos relacionados
            </h2>
            <div className="grid md:grid-cols-3 gap-6">
              <Link
                href="/privacidad"
                className="bg-white rounded-xl p-6 border border-gray-200 hover:border-[#0066ff] transition-colors group"
              >
                <h3 className="text-lg font-bold text-gray-900 group-hover:text-[#0066ff] mb-2">
                  Aviso de Privacidad
                </h3>
                <p className="text-gray-600 text-sm">
                  Conoce como tratamos tus datos personales conforme a la LFPDPPP.
                </p>
              </Link>
              <Link
                href="/terminos"
                className="bg-white rounded-xl p-6 border border-gray-200 hover:border-[#0066ff] transition-colors group"
              >
                <h3 className="text-lg font-bold text-gray-900 group-hover:text-[#0066ff] mb-2">
                  Terminos y Condiciones
                </h3>
                <p className="text-gray-600 text-sm">
                  Condiciones de uso de nuestros servicios de verificacion.
                </p>
              </Link>
              <Link
                href="/cumplimiento"
                className="bg-white rounded-xl p-6 border border-gray-200 hover:border-[#0066ff] transition-colors group"
              >
                <h3 className="text-lg font-bold text-gray-900 group-hover:text-[#0066ff] mb-2">
                  Cumplimiento
                </h3>
                <p className="text-gray-600 text-sm">
                  Informacion sobre cumplimiento regulatorio y normativo.
                </p>
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
