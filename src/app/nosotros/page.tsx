import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Nosotros | JAAK - Plataforma de Verificacion de Identidad",
  description:
    "Conoce a JAAK, la plataforma de verificacion de identidad 100% mexicana. Tecnologia biometrica certificada para empresas reguladas en Mexico y Latinoamerica.",
};

export default function NosotrosPage() {
  const values = [
    {
      title: "Orden",
      description:
        "Poner las cosas en el lugar que les corresponden.",
      icon: (
        <svg
          className="w-8 h-8"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.5}
            d="M4 6h16M4 10h16M4 14h16M4 18h16"
          />
        </svg>
      ),
    },
    {
      title: "Coherencia",
      description:
        "La actitud logica y consecuente con los principios que profesamos. Responsabilidad y colaboracion con nuestro equipo y clientes.",
      icon: (
        <svg
          className="w-8 h-8"
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
      title: "Innovacion",
      description:
        "Facilitar tareas, procedimientos y sistemas productivos. Uso del conocimiento, creatividad, diseno y tecnologia para generar cambios.",
      icon: (
        <svg
          className="w-8 h-8"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.5}
            d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
          />
        </svg>
      ),
    },
    {
      title: "Confianza",
      description:
        "Es lo que hace que el mundo gire. La disposicion positiva respecto de las intenciones o comportamientos de otro.",
      icon: (
        <svg
          className="w-8 h-8"
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
      ),
    },
    {
      title: "Calidad",
      description:
        "Brindar servicios, productos y resultados con valor, superioridad y excelencia. Cuidar relaciones personales.",
      icon: (
        <svg
          className="w-8 h-8"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.5}
            d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"
          />
        </svg>
      ),
    },
  ];

  const fundamentals = [
    {
      letter: "S",
      title: "Simple",
      description: "Ir de lo general a lo particular, enfocado y al punto. Lo que sirve es para no perderse en historias, datos incorrectos o suposiciones.",
    },
    {
      letter: "S",
      title: "Sistematico",
      description: "Lo que hagamos debe tener un proceso, orden y coherencia con el objetivo de replicarlo.",
    },
    {
      letter: "S",
      title: "Sistemico",
      description: "Vision integral de los sistemas y su interrelacion para conocer la totalidad. Integrar todas las partes.",
    },
    {
      letter: "S",
      title: "Sustentado",
      description: "Partir de la realidad e informacion, investigacion, analisis, asesorias; para generar estrategias y accionar desde una base real.",
    },
    {
      letter: "S",
      title: "Sostenible",
      description: "Generar estrategias y accionar desde una base real y conveniente para el largo plazo.",
    },
    {
      letter: "S",
      title: "Seguro",
      description: "Sostener la confianza en la empresa desde productos, servicios, socios, personal y clientes con analisis, prevencion y contencion de riesgos.",
    },
    {
      letter: "S",
      title: "Sincero",
      description: "Fundamentado sobre el respeto y apego a la verdad como valor esencial. Pulcritud, honestidad y sencillez.",
    },
  ];

  const certifications = [
    {
      name: "ISO 27001",
      description: "Seguridad de la informacion",
      logo: "/images/certifications/iso-27001.png",
    },
    {
      name: "ISO 9001",
      description: "Gestion de calidad",
      logo: "/images/certifications/iso-9001.png",
    },
    {
      name: "iBeta",
      description: "Prueba de vida certificada",
      logo: "/images/certifications/ibeta.png",
    },
    {
      name: "NIST",
      description: "Estandares biometricos",
      logo: "/images/certifications/nist.png",
    },
  ];

  return (
    <>
      <Header />
      <main>
        {/* Hero Section */}
        <section className="relative bg-[#0a0a0a] pt-32 pb-20 lg:pt-40 lg:pb-32 overflow-hidden">
          {/* Background gradient */}
          <div className="absolute inset-0 bg-gradient-to-b from-[#0066ff]/10 via-transparent to-transparent" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[#0066ff]/5 rounded-full blur-3xl" />

          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-4xl mx-auto">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/5 border border-white/10 rounded-full text-sm text-white/70 mb-8">
                <span className="w-2 h-2 bg-[#00d4aa] rounded-full" />
                Proposito de JAAK
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
                <span className="text-[#0066ff]">Seguridad</span> confiable
              </h1>
              <p className="text-xl text-white/70 max-w-3xl mx-auto leading-relaxed">
                Tecnologia 100% mexicana disenada para resolver los retos
                unicos de verificacion de identidad que enfrentan las empresas
                en nuestro pais y Latinoamerica.
              </p>
            </div>
          </div>
        </section>

        {/* Vision & Mission Section */}
        <section className="py-20 lg:py-28 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-2 gap-12 lg:gap-20">
              {/* Vision */}
              <div className="bg-gradient-to-br from-[#0066ff]/5 to-[#00d4aa]/5 rounded-3xl p-8 lg:p-12">
                <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-[#0066ff]/10 rounded-full text-sm text-[#0066ff] font-medium mb-6">
                  Vision
                </div>
                <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
                  Ofrecer a nuestros clientes globales una plataforma segura y completa para la gestion y verificacion de identidades.
                </h2>
                <div className="w-16 h-1 bg-[#0066ff] rounded-full"></div>
              </div>

              {/* Mission */}
              <div className="bg-gradient-to-br from-[#00d4aa]/5 to-[#0066ff]/5 rounded-3xl p-8 lg:p-12">
                <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-[#00d4aa]/10 rounded-full text-sm text-[#00d4aa] font-medium mb-6">
                  Mision
                </div>
                <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
                  Brindar facilidad, innovacion y seguridad para nuestros clientes con la tecnologia JAAK.
                </h2>
                <div className="w-16 h-1 bg-[#00d4aa] rounded-full"></div>
              </div>
            </div>
          </div>
        </section>

        {/* Fundamentals Section (7 S's) */}
        <section className="py-20 lg:py-28 bg-[#0a0a0a]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-white/5 border border-white/10 rounded-full text-sm text-white/70 mb-6">
                Nuestros fundamentos
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Las 7 S de JAAK
              </h2>
              <p className="text-lg text-white/70">
                Los principios fundamentales que guian cada accion y decision en nuestra organizacion.
              </p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {fundamentals.map((item, index) => (
                <div
                  key={index}
                  className="bg-white/5 border border-white/10 rounded-2xl p-6 hover:bg-white/10 transition-colors"
                >
                  <div className="w-12 h-12 bg-[#0066ff] rounded-xl flex items-center justify-center text-white font-bold text-xl mb-4">
                    {item.letter}
                  </div>
                  <h3 className="text-lg font-bold text-white mb-2">
                    {item.title}
                  </h3>
                  <p className="text-sm text-white/60 leading-relaxed">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Values Section */}
        <section className="py-20 lg:py-28 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Nuestros valores
              </h2>
              <p className="text-lg text-gray-600">
                Los valores que definen nuestra cultura y la forma en que trabajamos.
              </p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {values.map((value, index) => (
                <div
                  key={index}
                  className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-md transition-shadow"
                >
                  <div className="w-14 h-14 bg-[#0066ff]/10 rounded-xl flex items-center justify-center text-[#0066ff] mb-6">
                    {value.icon}
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">
                    {value.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {value.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Mexican Technology Section */}
        <section className="py-20 lg:py-28 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
              <div>
                <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-[#0066ff]/10 rounded-full text-sm text-[#0066ff] font-medium mb-6">
                  Orgullosamente mexicanos
                </div>
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
                  Tecnologia{" "}
                  <span className="text-[#00d4aa]">100% mexicana</span>
                </h2>
                <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                  JAAK nacio en Mexico con la vision de resolver los retos
                  unicos de verificacion de identidad que enfrentan las empresas
                  en nuestro pais y en Latinoamerica.
                </p>
                <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                  Nuestra tecnologia esta disenada para funcionar con
                  documentos mexicanos (INE, pasaporte, licencias estatales) y
                  cumplir con regulaciones locales como la LFPIORPI, normativas
                  de la CNBV y la Ley Fintech.
                </p>
                <div className="grid sm:grid-cols-2 gap-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-[#0066ff]/10 rounded-xl flex items-center justify-center flex-shrink-0">
                      <svg
                        className="w-6 h-6 text-[#0066ff]"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                        />
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                        />
                      </svg>
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-1">
                        Sede en CDMX
                      </h3>
                      <p className="text-sm text-gray-600">
                        Equipo local con soporte en tu zona horaria
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-[#0066ff]/10 rounded-xl flex items-center justify-center flex-shrink-0">
                      <svg
                        className="w-6 h-6 text-[#0066ff]"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3"
                        />
                      </svg>
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-1">
                        Regulacion mexicana
                      </h3>
                      <p className="text-sm text-gray-600">
                        Cumplimiento con CNBV, LFPIORPI y mas
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="relative">
                <div className="bg-gradient-to-br from-gray-100 to-gray-50 rounded-3xl p-8 lg:p-12">
                  <div className="grid grid-cols-2 gap-6">
                    <div className="bg-white rounded-2xl p-6 shadow-sm">
                      <div className="text-4xl font-bold text-[#0066ff] mb-2">
                        +50M
                      </div>
                      <div className="text-sm text-gray-600">
                        Verificaciones realizadas
                      </div>
                    </div>
                    <div className="bg-white rounded-2xl p-6 shadow-sm">
                      <div className="text-4xl font-bold text-[#0066ff] mb-2">
                        +200
                      </div>
                      <div className="text-sm text-gray-600">
                        Clientes empresariales
                      </div>
                    </div>
                    <div className="bg-white rounded-2xl p-6 shadow-sm">
                      <div className="text-4xl font-bold text-[#00d4aa] mb-2">
                        99.9%
                      </div>
                      <div className="text-sm text-gray-600">
                        Uptime garantizado
                      </div>
                    </div>
                    <div className="bg-white rounded-2xl p-6 shadow-sm">
                      <div className="text-4xl font-bold text-[#00d4aa] mb-2">
                        &lt;3s
                      </div>
                      <div className="text-sm text-gray-600">
                        Tiempo de verificacion
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Certifications Section */}
        <section className="py-20 lg:py-28 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-[#0066ff]/10 rounded-full text-sm text-[#0066ff] font-medium mb-6">
                Certificaciones internacionales
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Respaldados por los estandares mas altos
              </h2>
              <p className="text-lg text-gray-600">
                Nuestras certificaciones avalan nuestro compromiso con la
                seguridad, calidad y precision en cada verificacion.
              </p>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {certifications.map((cert, index) => (
                <div
                  key={index}
                  className="bg-white border border-gray-200 rounded-2xl p-8 text-center hover:shadow-lg transition-shadow"
                >
                  <div className="w-24 h-24 mx-auto mb-6 bg-gray-50 rounded-xl flex items-center justify-center p-4">
                    <Image
                      src={cert.logo}
                      alt={cert.name}
                      width={80}
                      height={80}
                      className="w-full h-full object-contain"
                    />
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 mb-2">
                    {cert.name}
                  </h3>
                  <p className="text-sm text-gray-600">{cert.description}</p>
                </div>
              ))}
            </div>
            <div className="mt-12 text-center">
              <p className="text-gray-500 text-sm">
                Ademas contamos con certificacion IQNET, Distintivo Oro y sello
                Hecho en Mexico
              </p>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 lg:py-28 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="bg-gradient-to-br from-[#0066ff] to-[#0052cc] rounded-3xl p-8 lg:p-16 text-center">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
                Se parte del equipo JAAK
              </h2>
              <p className="text-xl text-white/80 max-w-2xl mx-auto mb-10">
                Estamos buscando talento apasionado por la tecnologia y la
                innovacion. Unete a nosotros y ayuda a construir el futuro de
                la identidad digital.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="/contacto"
                  className="inline-flex items-center justify-center px-8 py-4 bg-white text-[#0066ff] font-semibold rounded-xl hover:bg-gray-100 transition-colors"
                >
                  Contactanos
                  <svg
                    className="w-5 h-5 ml-2"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M17 8l4 4m0 0l-4 4m4-4H3"
                    />
                  </svg>
                </Link>
                <Link
                  href="https://www.linkedin.com/company/jaak-ai/jobs/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center px-8 py-4 bg-white/10 text-white font-semibold rounded-xl border border-white/20 hover:bg-white/20 transition-colors"
                >
                  Ver vacantes
                  <svg
                    className="w-5 h-5 ml-2"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                    />
                  </svg>
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
