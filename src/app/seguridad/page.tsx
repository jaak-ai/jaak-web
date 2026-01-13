import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Link from "next/link";

export const metadata = {
  title: "Seguridad | JAAK",
  description:
    "Conoce las medidas de seguridad, certificaciones y estándares que JAAK implementa para proteger tu información. ISO 27001, ISO 9001, iBeta y NIST.",
};

export default function SeguridadPage() {
  const certifications = [
    {
      name: "ISO 27001",
      subtitle: "Seguridad de la Información",
      description:
        "Sistema de gestión de seguridad de la información (SGSI) certificado internacionalmente. Este estándar garantiza que implementamos controles adecuados para proteger la confidencialidad, integridad y disponibilidad de la información.",
      benefits: [
        "Gestión de riesgos estructurada",
        "Políticas de seguridad documentadas",
        "Auditorías internas y externas regulares",
        "Mejora continua de controles",
      ],
    },
    {
      name: "ISO 9001",
      subtitle: "Gestión de Calidad",
      description:
        "Sistema de gestión de calidad que asegura procesos consistentes, documentados y orientados a la satisfacción del cliente. Garantiza que nuestros servicios cumplen con los más altos estándares de calidad.",
      benefits: [
        "Procesos estandarizados y repetibles",
        "Control de documentación y versiones",
        "Medición de satisfacción del cliente",
        "Gestión de no conformidades",
      ],
    },
    {
      name: "iBeta",
      subtitle: "Prueba de Vida Certificada",
      description:
        "Certificación de detección de ataques de presentación (PAD) según el estándar ISO 30107-3. Nuestro sistema de prueba de vida ha sido evaluado por un laboratorio acreditado para resistir intentos de suplantación.",
      benefits: [
        "Protección contra fotos impresas",
        "Detección de videos pregrabados",
        "Resistencia a máscaras 2D y 3D",
        "Evaluación por laboratorio independiente",
      ],
    },
    {
      name: "NIST 800-63-3",
      subtitle: "Estándares de Identidad Digital",
      description:
        "Cumplimiento con los lineamientos del Instituto Nacional de Estándares y Tecnología de Estados Unidos para verificación de identidad digital y autenticación, niveles IAL2 y AAL2.",
      benefits: [
        "Verificación de identidad robusta",
        "Autenticación multifactor",
        "Gestión de credenciales segura",
        "Protección contra fraude de identidad",
      ],
    },
  ];

  const securityMeasures = [
    {
      category: "Cifrado y protección de datos",
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
        </svg>
      ),
      measures: [
        "Cifrado TLS 1.3 para todos los datos en tránsito",
        "Cifrado AES-256 para datos en reposo",
        "Gestión de claves con HSM (Hardware Security Module)",
        "Rotación automática de claves de cifrado",
        "Tokenización de datos sensibles",
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
        "Autenticación multifactor obligatoria",
        "Control de acceso basado en roles (RBAC)",
        "Principio de mínimo privilegio",
        "Single Sign-On (SSO) empresarial",
        "Revisión periódica de permisos",
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
        "Redundancia geográfica de datos",
        "Firewalls de aplicación web (WAF)",
        "Protección DDoS en todas las capas",
        "Segmentación de red y microservicios",
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
        "Sistema SIEM para correlación de eventos",
        "Detección de anomalías con machine learning",
        "Equipo de respuesta a incidentes (CSIRT)",
        "Plan de recuperación ante desastres (DRP)",
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
        "Revisión de código obligatoria",
        "Análisis estático de seguridad (SAST)",
        "Pruebas de penetración regulares",
        "Programa de gestión de vulnerabilidades",
      ],
    },
    {
      category: "Cumplimiento y auditoría",
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
        </svg>
      ),
      measures: [
        "Auditorías de seguridad anuales",
        "Pruebas de penetración por terceros",
        "Registro de auditoría inmutable",
        "Cumplimiento LFPDPPP y LFPIORPI",
        "Reportes de cumplimiento para clientes",
      ],
    },
  ];

  const dataProtection = [
    {
      title: "Protección de datos biométricos",
      description:
        "Los datos biométricos son tratados con las máximas medidas de seguridad. Utilizamos plantillas biométricas (templates) en lugar de imágenes originales cuando es posible, y aplicamos técnicas de anonimización para proteger la privacidad.",
    },
    {
      title: "Retención y eliminación",
      description:
        "Mantenemos los datos solo durante el tiempo necesario para cumplir con las finalidades establecidas o las obligaciones legales aplicables. Contamos con procesos automatizados de eliminación segura.",
    },
    {
      title: "Respaldo y recuperación",
      description:
        "Realizamos respaldos cifrados de manera regular, almacenados en ubicaciones geográficamente separadas. Probamos periódicamente la capacidad de recuperación para garantizar la continuidad del servicio.",
    },
    {
      title: "Transferencias internacionales",
      description:
        "Cuando es necesario transferir datos fuera de México, utilizamos cláusulas contractuales estándar y verificamos que los destinatarios cumplan con niveles de protección equivalentes.",
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
                Implementamos las mejores prácticas de seguridad y cumplimos con los estándares internacionales más exigentes para proteger la información de nuestros clientes y sus usuarios.
              </p>
              <div className="flex flex-wrap gap-3">
                <span className="px-4 py-2 bg-white/10 text-white rounded-lg text-sm font-medium">
                  ISO 27001
                </span>
                <span className="px-4 py-2 bg-white/10 text-white rounded-lg text-sm font-medium">
                  ISO 9001
                </span>
                <span className="px-4 py-2 bg-white/10 text-white rounded-lg text-sm font-medium">
                  iBeta
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
                Certificaciones y estándares
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Nuestras certificaciones demuestran el compromiso con la seguridad, calidad y cumplimiento de estándares reconocidos internacionalmente.
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
                Implementamos múltiples capas de seguridad para proteger la información en todo momento.
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
                Protección de datos
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Aplicamos los más altos estándares para proteger la información personal y biométrica.
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
                Contamos con procesos establecidos para detectar, responder y comunicar cualquier incidente de seguridad de manera rápida y transparente.
              </p>
            </div>

            <div className="grid md:grid-cols-4 gap-6 max-w-5xl mx-auto">
              <div className="text-center">
                <div className="w-16 h-16 bg-[#0066ff] rounded-2xl flex items-center justify-center mx-auto mb-4 text-white text-2xl font-bold">
                  1
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">
                  Detección
                </h3>
                <p className="text-gray-600 text-sm">
                  Monitoreo continuo con alertas automáticas ante eventos sospechosos.
                </p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-[#0066ff] rounded-2xl flex items-center justify-center mx-auto mb-4 text-white text-2xl font-bold">
                  2
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">
                  Contención
                </h3>
                <p className="text-gray-600 text-sm">
                  Aislamiento inmediato para evitar propagación del incidente.
                </p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-[#0066ff] rounded-2xl flex items-center justify-center mx-auto mb-4 text-white text-2xl font-bold">
                  3
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">
                  Comunicación
                </h3>
                <p className="text-gray-600 text-sm">
                  Notificación a partes afectadas dentro de las 72 horas.
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
                  Análisis post-incidente e implementación de mejoras.
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
                  Divulgación responsable de vulnerabilidades
                </h2>
                <p className="text-white/60">
                  Valoramos la colaboración de la comunidad de seguridad. Si descubres una vulnerabilidad, te invitamos a reportarla de manera responsable.
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
                    APIs públicas documentadas
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
                  Conoce cómo tratamos tus datos personales conforme a la LFPDPPP.
                </p>
              </Link>
              <Link
                href="/terminos"
                className="bg-white rounded-xl p-6 border border-gray-200 hover:border-[#0066ff] transition-colors group"
              >
                <h3 className="text-lg font-bold text-gray-900 group-hover:text-[#0066ff] mb-2">
                  Términos y Condiciones
                </h3>
                <p className="text-gray-600 text-sm">
                  Condiciones de uso de nuestros servicios de verificación.
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
                  Información sobre cumplimiento regulatorio y normativo.
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
