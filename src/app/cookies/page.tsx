import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Link from "next/link";

export const metadata = {
  title: "Politica de Cookies | JAAK",
  description:
    "Conoce como JAAK utiliza cookies y tecnologias similares para mejorar tu experiencia de navegacion.",
};

export default function CookiesPage() {
  const cookieTypes = [
    {
      name: "Cookies esenciales",
      description:
        "Necesarias para el funcionamiento basico del sitio web. Sin estas cookies, el sitio no funcionaria correctamente.",
      examples: [
        "Mantener su sesion iniciada",
        "Recordar sus preferencias de idioma",
        "Garantizar la seguridad del sitio",
        "Equilibrar la carga del servidor",
      ],
      canDisable: false,
    },
    {
      name: "Cookies de rendimiento",
      description:
        "Nos ayudan a entender como los visitantes interactuan con nuestro sitio web, permitiendonos mejorar su funcionamiento.",
      examples: [
        "Recopilar estadisticas de visitas",
        "Identificar paginas mas visitadas",
        "Detectar errores y problemas tecnicos",
        "Medir tiempos de carga",
      ],
      canDisable: true,
    },
    {
      name: "Cookies de funcionalidad",
      description:
        "Permiten que el sitio recuerde las elecciones que hace para proporcionarle funciones mejoradas y personalizadas.",
      examples: [
        "Recordar preferencias de visualizacion",
        "Personalizar el contenido mostrado",
        "Recordar formularios completados",
        "Mantener configuraciones de accesibilidad",
      ],
      canDisable: true,
    },
    {
      name: "Cookies de marketing",
      description:
        "Se utilizan para rastrear visitantes en los sitios web con la intencion de mostrar anuncios relevantes.",
      examples: [
        "Medir la efectividad de campanas",
        "Limitar la frecuencia de anuncios",
        "Recordar sitios web visitados",
        "Personalizar anuncios mostrados",
      ],
      canDisable: true,
    },
  ];

  const thirdPartyCookies = [
    {
      provider: "Google Analytics",
      purpose: "Analisis de trafico y comportamiento de usuarios",
      privacy: "https://policies.google.com/privacy",
    },
    {
      provider: "HubSpot",
      purpose: "Gestion de formularios y seguimiento de leads",
      privacy: "https://legal.hubspot.com/privacy-policy",
    },
    {
      provider: "LinkedIn",
      purpose: "Seguimiento de conversiones publicitarias",
      privacy: "https://www.linkedin.com/legal/privacy-policy",
    },
    {
      provider: "Intercom",
      purpose: "Chat de soporte y comunicacion con usuarios",
      privacy: "https://www.intercom.com/legal/privacy",
    },
  ];

  return (
    <>
      <Header />
      <main>
        {/* Hero Section */}
        <section className="pt-32 pb-16 bg-[#0a0a0a]">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h1 className="text-4xl md:text-5xl font-black text-white mb-6">
              Politica de Cookies
            </h1>
            <p className="text-xl text-white/60">
              Ultima actualizacion: Enero 2025
            </p>
          </div>
        </section>

        {/* Content Section */}
        <section className="py-16 bg-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="prose prose-lg max-w-none">
              {/* Introduccion */}
              <div className="mb-12">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">
                  1. Que son las cookies
                </h2>
                <p className="text-gray-600 mb-4">
                  Las cookies son pequenos archivos de texto que se almacenan en su dispositivo (ordenador, tablet o telefono movil) cuando visita un sitio web. Las cookies son ampliamente utilizadas para hacer que los sitios web funcionen de manera mas eficiente, asi como para proporcionar informacion a los propietarios del sitio.
                </p>
                <p className="text-gray-600">
                  JAAK IT SAPI de CV (en adelante, &quot;JAAK&quot;) utiliza cookies y tecnologias similares en nuestro sitio web jaak.ai para mejorar su experiencia de navegacion, analizar el uso del sitio y asistir en nuestros esfuerzos de marketing.
                </p>
              </div>

              {/* Base legal */}
              <div className="mb-12">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">
                  2. Base legal para el uso de cookies
                </h2>
                <p className="text-gray-600 mb-4">
                  El uso de cookies en nuestro sitio web se fundamenta en:
                </p>
                <ul className="list-disc pl-6 text-gray-600 space-y-2">
                  <li>
                    <strong>Consentimiento:</strong> Para cookies no esenciales, solicitamos su consentimiento antes de instalarlas en su dispositivo.
                  </li>
                  <li>
                    <strong>Interes legitimo:</strong> Para cookies esenciales necesarias para el funcionamiento del sitio y la seguridad.
                  </li>
                  <li>
                    <strong>LFPDPPP:</strong> Cumplimos con la Ley Federal de Proteccion de Datos Personales en Posesion de los Particulares en el tratamiento de cualquier dato personal recopilado mediante cookies.
                  </li>
                </ul>
              </div>

              {/* Tipos de cookies */}
              <div className="mb-12">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">
                  3. Tipos de cookies que utilizamos
                </h2>
                <p className="text-gray-600 mb-6">
                  A continuacion describimos los tipos de cookies que utilizamos en nuestro sitio web:
                </p>

                <div className="space-y-6">
                  {cookieTypes.map((type, index) => (
                    <div
                      key={index}
                      className="bg-gray-50 rounded-xl p-6 border border-gray-100"
                    >
                      <div className="flex items-start justify-between mb-3">
                        <h3 className="text-lg font-semibold text-gray-900">
                          {type.name}
                        </h3>
                        <span
                          className={`px-3 py-1 rounded-full text-xs font-medium ${
                            type.canDisable
                              ? "bg-[#0066ff]/10 text-[#0066ff]"
                              : "bg-gray-200 text-gray-600"
                          }`}
                        >
                          {type.canDisable ? "Opcional" : "Obligatoria"}
                        </span>
                      </div>
                      <p className="text-gray-600 mb-4">{type.description}</p>
                      <div>
                        <h4 className="text-sm font-medium text-gray-700 mb-2">
                          Ejemplos de uso:
                        </h4>
                        <ul className="grid grid-cols-1 md:grid-cols-2 gap-2">
                          {type.examples.map((example, idx) => (
                            <li
                              key={idx}
                              className="flex items-center gap-2 text-sm text-gray-600"
                            >
                              <svg
                                className="w-4 h-4 text-[#00d4aa] flex-shrink-0"
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
                              {example}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Duracion de cookies */}
              <div className="mb-12">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">
                  4. Duracion de las cookies
                </h2>
                <p className="text-gray-600 mb-4">
                  Las cookies pueden clasificarse segun su duracion:
                </p>
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="bg-[#0066ff]/5 border border-[#0066ff]/20 rounded-xl p-6">
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">
                      Cookies de sesion
                    </h3>
                    <p className="text-gray-600 text-sm">
                      Se eliminan automaticamente cuando cierra su navegador. Son temporales y no permanecen en su dispositivo despues de cerrar la sesion.
                    </p>
                  </div>
                  <div className="bg-[#00d4aa]/5 border border-[#00d4aa]/20 rounded-xl p-6">
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">
                      Cookies persistentes
                    </h3>
                    <p className="text-gray-600 text-sm">
                      Permanecen en su dispositivo por un periodo determinado (dias, meses o anios) o hasta que usted las elimine manualmente.
                    </p>
                  </div>
                </div>
              </div>

              {/* Cookies de terceros */}
              <div className="mb-12">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">
                  5. Cookies de terceros
                </h2>
                <p className="text-gray-600 mb-6">
                  Utilizamos servicios de terceros que pueden instalar sus propias cookies en su dispositivo:
                </p>

                <div className="overflow-x-auto">
                  <table className="w-full border-collapse">
                    <thead>
                      <tr className="bg-gray-100">
                        <th className="text-left p-4 font-semibold text-gray-900 border-b border-gray-200">
                          Proveedor
                        </th>
                        <th className="text-left p-4 font-semibold text-gray-900 border-b border-gray-200">
                          Proposito
                        </th>
                        <th className="text-left p-4 font-semibold text-gray-900 border-b border-gray-200">
                          Politica de privacidad
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      {thirdPartyCookies.map((cookie, index) => (
                        <tr key={index} className="border-b border-gray-100">
                          <td className="p-4 text-gray-900 font-medium">
                            {cookie.provider}
                          </td>
                          <td className="p-4 text-gray-600">{cookie.purpose}</td>
                          <td className="p-4">
                            <a
                              href={cookie.privacy}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="text-[#0066ff] hover:underline text-sm"
                            >
                              Ver politica
                            </a>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>

              {/* Como gestionar cookies */}
              <div className="mb-12">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">
                  6. Como gestionar las cookies
                </h2>
                <p className="text-gray-600 mb-4">
                  Usted puede gestionar sus preferencias de cookies de las siguientes maneras:
                </p>

                <h3 className="text-lg font-semibold text-gray-900 mt-6 mb-3">
                  Mediante nuestro banner de cookies
                </h3>
                <p className="text-gray-600 mb-4">
                  Al visitar nuestro sitio web por primera vez, se le mostrara un banner que le permite aceptar o rechazar cookies no esenciales. Puede modificar sus preferencias en cualquier momento haciendo clic en el enlace &quot;Configuracion de cookies&quot; en el pie de pagina.
                </p>

                <h3 className="text-lg font-semibold text-gray-900 mt-6 mb-3">
                  Mediante la configuracion de su navegador
                </h3>
                <p className="text-gray-600 mb-4">
                  Puede configurar su navegador para rechazar todas las cookies o para que le avise cuando se envia una cookie. A continuacion, los enlaces a las instrucciones de los navegadores mas comunes:
                </p>
                <ul className="list-disc pl-6 text-gray-600 space-y-2 mb-4">
                  <li>
                    <a
                      href="https://support.google.com/chrome/answer/95647"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[#0066ff] hover:underline"
                    >
                      Google Chrome
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://support.mozilla.org/es/kb/cookies-informacion-que-los-sitios-web-guardan-en-"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[#0066ff] hover:underline"
                    >
                      Mozilla Firefox
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://support.apple.com/es-mx/guide/safari/sfri11471/mac"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[#0066ff] hover:underline"
                    >
                      Safari
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://support.microsoft.com/es-es/windows/eliminar-y-administrar-cookies-168dab11-0753-043d-7c16-ede5947fc64d"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[#0066ff] hover:underline"
                    >
                      Microsoft Edge
                    </a>
                  </li>
                </ul>

                <div className="bg-yellow-50 border border-yellow-200 rounded-xl p-6 mt-6">
                  <p className="text-gray-700">
                    <strong className="text-yellow-700">Nota importante:</strong> Si desactiva las cookies, algunas funciones de nuestro sitio web podrian no funcionar correctamente o no estar disponibles.
                  </p>
                </div>
              </div>

              {/* Tecnologias similares */}
              <div className="mb-12">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">
                  7. Otras tecnologias de seguimiento
                </h2>
                <p className="text-gray-600 mb-4">
                  Ademas de las cookies, podemos utilizar otras tecnologias similares:
                </p>
                <ul className="list-disc pl-6 text-gray-600 space-y-2">
                  <li>
                    <strong>Web beacons (pixeles de seguimiento):</strong> Pequenas imagenes que permiten contabilizar visitas y entender el uso del sitio.
                  </li>
                  <li>
                    <strong>Local Storage:</strong> Almacenamiento en el navegador para guardar preferencias y mejorar el rendimiento.
                  </li>
                  <li>
                    <strong>Session Storage:</strong> Similar al Local Storage, pero se elimina al cerrar la sesion.
                  </li>
                  <li>
                    <strong>Fingerprinting del dispositivo:</strong> Identificacion del dispositivo basada en caracteristicas tecnicas (no utilizado para publicidad).
                  </li>
                </ul>
              </div>

              {/* Actualizaciones */}
              <div className="mb-12">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">
                  8. Actualizaciones de esta politica
                </h2>
                <p className="text-gray-600">
                  Podemos actualizar esta Politica de Cookies periodicamente para reflejar cambios en las cookies que utilizamos o por otras razones operativas, legales o regulatorias. Le recomendamos revisar esta pagina periodicamente para estar informado sobre el uso de cookies. La fecha de la ultima actualizacion se indica al inicio de este documento.
                </p>
              </div>

              {/* Relacion con privacidad */}
              <div className="mb-12">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">
                  9. Relacion con el Aviso de Privacidad
                </h2>
                <p className="text-gray-600">
                  Esta Politica de Cookies complementa nuestro{" "}
                  <Link href="/privacidad" className="text-[#0066ff] hover:underline">
                    Aviso de Privacidad
                  </Link>
                  , que proporciona informacion mas detallada sobre como recopilamos, usamos y protegemos sus datos personales. Le recomendamos leer ambos documentos para comprender completamente nuestras practicas de privacidad.
                </p>
              </div>

              {/* Contacto */}
              <div className="bg-[#0a0a0a] rounded-2xl p-8">
                <h2 className="text-2xl font-bold text-white mb-4">
                  Contacto
                </h2>
                <p className="text-white/70 mb-4">
                  Si tiene preguntas sobre esta Politica de Cookies o sobre el uso de cookies en nuestro sitio web, contactenos:
                </p>
                <div className="space-y-2">
                  <p className="text-white">
                    <strong className="text-[#0066ff]">Correo:</strong>{" "}
                    <a href="mailto:privacidad@jaak.ai" className="text-white hover:text-[#0066ff] transition-colors">
                      privacidad@jaak.ai
                    </a>
                  </p>
                  <p className="text-white">
                    <strong className="text-[#0066ff]">Direccion:</strong> Ciudad de Mexico, Mexico
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
