import ArticleLayout from "../ArticleLayout";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Onboarding digital: De días a minutos sin sacrificar cumplimiento | JAAK",
  description: "Descubre cómo las instituciones financieras están logrando verificaciones en menos de 30 segundos sin sacrificar el cumplimiento regulatorio.",
  keywords: ["onboarding digital", "verificación rápida", "cumplimiento regulatorio", "KYC", "alta de clientes", "experiencia de usuario"],
  openGraph: {
    title: "Onboarding digital: De días a minutos sin sacrificar cumplimiento",
    description: "Cómo acelerar el proceso de alta de clientes sin comprometer el cumplimiento regulatorio.",
    type: "article",
    publishedTime: "2025-12-15",
    authors: ["JAAK"],
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Onboarding digital: De días a minutos sin sacrificar cumplimiento",
  description: "Cómo reducir el tiempo de onboarding digital de días a minutos manteniendo cumplimiento CNBV, UIF y LFPIORPI. Casos reales con JAAK.",
  image: "https://jaak.ai/images/blog/onboarding-digital.jpg",
  datePublished: "2025-12-15",
  dateModified: "2025-12-15",
  author: {
    "@type": "Organization",
    name: "JAAK",
    url: "https://jaak.ai",
  },
  publisher: {
    "@type": "Organization",
    name: "JAAK",
    url: "https://jaak.ai",
    logo: {
      "@type": "ImageObject",
      url: "https://jaak.ai/images/logos/jaak-logo-azul.png",
    },
  },
  mainEntityOfPage: {
    "@type": "WebPage",
    "@id": "https://jaak.ai/blog/onboarding-digital-rapido-cumplimiento",
  },
  keywords: "onboarding digital, KYC rápido, verificación identidad rápida, cumplimiento onboarding, fintech México, CNBV onboarding",
  inLanguage: "es-MX",
};

export default function OnboardingDigital() {
  return (
    <ArticleLayout
      title="Onboarding digital: De días a minutos sin sacrificar cumplimiento"
      subtitle="Transformar tu proceso de alta de clientes no significa comprometer la regulación. Descubre cómo las instituciones financieras están logrando verificaciones en menos de 30 segundos sin sacrificar el cumplimiento regulatorio."
      category="Onboarding"
      date="15 de diciembre, 2025"
      readTime="5 min"
      slug="onboarding-digital-rapido-cumplimiento"
      image="/images/blog/onboarding-digital-rapido-cumplimiento.png"
      imageAlt="Onboarding digital rápido con cumplimiento regulatorio"
      jsonLd={jsonLd}
      relatedPosts={[
        { title: "Tendencias KYC 2026", slug: "tendencias-kyc-2026", category: "KYC" },
        { title: "Guía completa de las disposiciones CNBV para verificación de identidad", slug: "disposiciones-cnbv-verificacion-identidad", category: "Regulación" },
        { title: "Prevención de fraude en el onboarding digital", slug: "prevencion-fraude-onboarding-digital", category: "Fraude" },
      ]}
    >
              <p className="text-xl text-gray-600 leading-relaxed mb-8">
                La transformación digital del sector financiero ha cambiado las expectativas
                de los usuarios. Hoy, nadie quiere esperar días para abrir una cuenta bancaria
                o solicitar un crédito. Las instituciones que no se adapten perderán clientes
                ante competidores más ágiles.
              </p>

              <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-6">
                El costo del onboarding lento
              </h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                Un proceso de onboarding prolongado tiene consecuencias directas en tu negocio:
              </p>

              <div className="grid md:grid-cols-2 gap-6 my-8">
                <div className="bg-orange-50 rounded-xl p-6 text-center">
                  <p className="text-2xl font-black text-orange-500 mb-2">Abandono</p>
                  <p className="text-gray-600">Los registros largos hacen que muchos usuarios desistan antes de terminar</p>
                </div>
                <div className="bg-orange-50 rounded-xl p-6 text-center">
                  <p className="text-2xl font-black text-orange-500 mb-2">Costo hundido</p>
                  <p className="text-gray-600">Cada cliente que abandona desperdicia la inversión hecha para adquirirlo</p>
                </div>
                <div className="bg-orange-50 rounded-xl p-6 text-center">
                  <p className="text-2xl font-black text-orange-500 mb-2">Días de espera</p>
                  <p className="text-gray-600">El onboarding tradicional con revisión manual puede tomar varios días</p>
                </div>
                <div className="bg-orange-50 rounded-xl p-6 text-center">
                  <p className="text-2xl font-black text-orange-500 mb-2">Fuga en el embudo</p>
                  <p className="text-gray-600">Una parte de las solicitudes se pierde entre el inicio y la aprobación final</p>
                </div>
              </div>

              <div className="bg-[#F3F4F8] border border-[#212A45]/10 rounded-xl p-6 my-8">
                <p className="text-[11px] font-semibold tracking-wide uppercase text-[#2DB6C1] mb-2">Realidad competitiva</p>
                <p className="text-gray-600">
                  Los neobancos y fintechs han establecido un nuevo estándar. Si tu proceso
                  tarda días mientras la competencia lo hace en minutos, los clientes
                  simplemente elegirán la opción más conveniente.
                </p>
              </div>

              <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-6">
                Los pilares de un onboarding moderno
              </h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                Un proceso de onboarding efectivo debe equilibrar tres factores críticos:
              </p>

              <div className="grid md:grid-cols-3 gap-6 my-8">
                <div className="bg-gray-50 rounded-xl p-6 text-center">
                  <div className="w-12 h-12 bg-[#0066ff]/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <svg className="w-6 h-6 text-[#0066ff]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                  </div>
                  <h3 className="font-bold text-gray-900 mb-2">Velocidad</h3>
                  <p className="text-gray-600 text-sm">Completar la verificación en segundos, no horas o días</p>
                </div>
                <div className="bg-gray-50 rounded-xl p-6 text-center">
                  <div className="w-12 h-12 bg-[#0066ff]/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <svg className="w-6 h-6 text-[#0066ff]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                    </svg>
                  </div>
                  <h3 className="font-bold text-gray-900 mb-2">Seguridad</h3>
                  <p className="text-gray-600 text-sm">Prevenir fraude sin crear fricción innecesaria</p>
                </div>
                <div className="bg-gray-50 rounded-xl p-6 text-center">
                  <div className="w-12 h-12 bg-[#0066ff]/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <svg className="w-6 h-6 text-[#0066ff]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
                    </svg>
                  </div>
                  <h3 className="font-bold text-gray-900 mb-2">Cumplimiento</h3>
                  <p className="text-gray-600 text-sm">Satisfacer todos los requisitos regulatorios (CNBV, UIF, LFPIORPI)</p>
                </div>
              </div>

              <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-6">
                El flujo de onboarding en 30 segundos
              </h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                Así se ve un proceso de onboarding moderno optimizado:
              </p>

              <div className="space-y-4 my-8">
                <div className="flex items-start gap-4 p-4 bg-gray-50 rounded-lg">
                  <div className="w-10 h-10 bg-[#0066ff] rounded-full flex items-center justify-center flex-shrink-0 text-white font-bold">
                    1
                  </div>
                  <div>
                    <div className="flex items-center gap-2 mb-1">
                      <h4 className="font-bold text-gray-900">Captura de documento</h4>
                      <span className="text-xs text-gray-500 bg-gray-200 px-2 py-0.5 rounded">~5 segundos</span>
                    </div>
                    <p className="text-gray-600">El usuario fotografía su INE. La IA detecta automáticamente el documento, ajusta el encuadre y captura.</p>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-4 bg-gray-50 rounded-lg">
                  <div className="w-10 h-10 bg-[#0066ff] rounded-full flex items-center justify-center flex-shrink-0 text-white font-bold">
                    2
                  </div>
                  <div>
                    <div className="flex items-center gap-2 mb-1">
                      <h4 className="font-bold text-gray-900">Verificación del documento</h4>
                      <span className="text-xs text-gray-500 bg-gray-200 px-2 py-0.5 rounded">~3 segundos</span>
                    </div>
                    <p className="text-gray-600">Se valida autenticidad, se extraen datos con OCR y se consultan bases de datos oficiales (INE, RENAPO).</p>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-4 bg-gray-50 rounded-lg">
                  <div className="w-10 h-10 bg-[#0066ff] rounded-full flex items-center justify-center flex-shrink-0 text-white font-bold">
                    3
                  </div>
                  <div>
                    <div className="flex items-center gap-2 mb-1">
                      <h4 className="font-bold text-gray-900">Selfie con prueba de vida</h4>
                      <span className="text-xs text-gray-500 bg-gray-200 px-2 py-0.5 rounded">~8 segundos</span>
                    </div>
                    <p className="text-gray-600">El usuario se toma una selfie. La tecnología de liveness confirma presencia real y compara con la foto del documento.</p>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-4 bg-gray-50 rounded-lg">
                  <div className="w-10 h-10 bg-[#0066ff] rounded-full flex items-center justify-center flex-shrink-0 text-white font-bold">
                    4
                  </div>
                  <div>
                    <div className="flex items-center gap-2 mb-1">
                      <h4 className="font-bold text-gray-900">Validaciones adicionales</h4>
                      <span className="text-xs text-gray-500 bg-gray-200 px-2 py-0.5 rounded">~5 segundos</span>
                    </div>
                    <p className="text-gray-600">Verificación de CURP, RFC, listas de sanciones, PEPs y otros controles según el nivel de cuenta.</p>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-4 bg-green-50 rounded-lg">
                  <div className="w-10 h-10 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0 text-white">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <div>
                    <div className="flex items-center gap-2 mb-1">
                      <h4 className="font-bold text-gray-900">Cuenta activa</h4>
                      <span className="text-xs text-green-600 bg-green-100 px-2 py-0.5 rounded">Total: ~25 segundos</span>
                    </div>
                    <p className="text-gray-600">El usuario está verificado y puede comenzar a usar los servicios inmediatamente.</p>
                  </div>
                </div>
              </div>

              <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-6">
                Tecnologías que hacen posible la velocidad
              </h2>

              <div className="grid gap-6 my-8">
                <div className="border border-gray-200 rounded-xl p-6">
                  <h3 className="font-bold text-gray-900 mb-3 flex items-center gap-2">
                    <span className="w-8 h-8 bg-[#0066ff]/10 rounded-lg flex items-center justify-center">
                      <svg className="w-4 h-4 text-[#0066ff]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                      </svg>
                    </span>
                    OCR inteligente
                  </h3>
                  <p className="text-gray-600">
                    Extracción automática de datos del documento con alta precisión.
                    No más captura manual que genera errores y retrasos.
                  </p>
                </div>

                <div className="border border-gray-200 rounded-xl p-6">
                  <h3 className="font-bold text-gray-900 mb-3 flex items-center gap-2">
                    <span className="w-8 h-8 bg-[#0066ff]/10 rounded-lg flex items-center justify-center">
                      <svg className="w-4 h-4 text-[#0066ff]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                      </svg>
                    </span>
                    Verificación biométrica pasiva
                  </h3>
                  <p className="text-gray-600">
                    Prueba de vida sin que el usuario tenga que hacer gestos o movimientos
                    específicos. Menos fricción, misma seguridad.
                  </p>
                </div>

                <div className="border border-gray-200 rounded-xl p-6">
                  <h3 className="font-bold text-gray-900 mb-3 flex items-center gap-2">
                    <span className="w-8 h-8 bg-[#0066ff]/10 rounded-lg flex items-center justify-center">
                      <svg className="w-4 h-4 text-[#0066ff]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4" />
                      </svg>
                    </span>
                    APIs en tiempo real
                  </h3>
                  <p className="text-gray-600">
                    Conexiones directas con INE, RENAPO, SAT y otras bases de datos para
                    validación instantánea de información.
                  </p>
                </div>

                <div className="border border-gray-200 rounded-xl p-6">
                  <h3 className="font-bold text-gray-900 mb-3 flex items-center gap-2">
                    <span className="w-8 h-8 bg-[#0066ff]/10 rounded-lg flex items-center justify-center">
                      <svg className="w-4 h-4 text-[#0066ff]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                    </span>
                    Decisiones automatizadas
                  </h3>
                  <p className="text-gray-600">
                    Modelos de riesgo que aprueban automáticamente casos de bajo riesgo,
                    enviando solo los casos complejos a revisión manual.
                  </p>
                </div>
              </div>

              <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-6">
                Cumplimiento regulatorio
              </h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                La velocidad no significa saltarse pasos regulatorios. Un sistema bien diseñado
                cumple con todos los requisitos mientras optimiza el proceso:
              </p>

              <div className="bg-gray-50 rounded-xl p-6 my-8">
                <h3 className="font-bold text-gray-900 mb-4">Requisitos CNBV cubiertos automáticamente:</h3>
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="flex items-start gap-2">
                    <svg className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-gray-600">Identificación oficial vigente</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <svg className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-gray-600">Datos personales completos</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <svg className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-gray-600">CURP validado contra RENAPO</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <svg className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-gray-600">Verificación biométrica</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <svg className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-gray-600">Prueba de vida (liveness)</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <svg className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-gray-600">Consulta de listas negras y PEPs</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <svg className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-gray-600">Geolocalización del dispositivo</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <svg className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-gray-600">Conservación de evidencia auditable</span>
                  </div>
                </div>
              </div>

              <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-6">
                Optimización de la experiencia de usuario
              </h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                Pequeños detalles marcan la diferencia en las tasas de conversión:
              </p>

              <ul className="list-disc pl-6 mb-6 space-y-2 text-gray-600">
                <li><strong>Guía visual en tiempo real:</strong> Muestra al usuario exactamente cómo posicionar el documento o su rostro</li>
                <li><strong>Captura automática:</strong> No requiere que el usuario presione un botón, el sistema detecta cuándo la imagen es óptima</li>
                <li><strong>Feedback inmediato:</strong> Si algo sale mal, explica claramente cómo corregirlo</li>
                <li><strong>Progreso visible:</strong> Muestra en qué paso está el usuario y cuántos faltan</li>
                <li><strong>Tolerancia a errores:</strong> Permite reintentos sin empezar desde cero</li>
                <li><strong>Soporte multicanal:</strong> Ofrece ayuda por chat si el usuario tiene problemas</li>
              </ul>

              <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-6">
                Métricas de éxito
              </h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                Un onboarding optimizado debe mejorar estos indicadores:
              </p>

              <div className="overflow-x-auto my-8">
                <table className="w-full border-collapse">
                  <thead>
                    <tr className="bg-[#0E1133] text-white">
                      <th className="px-4 py-3 text-left">Métrica</th>
                      <th className="px-4 py-3 text-left">Tradicional</th>
                      <th className="px-4 py-3 text-left">Optimizado</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200">
                    <tr className="bg-white">
                      <td className="px-4 py-3 font-medium">Tiempo de verificación</td>
                      <td className="px-4 py-3 text-gray-600">Horas o días</td>
                      <td className="px-4 py-3 text-green-600 font-medium">&lt; 30 segundos</td>
                    </tr>
                    <tr className="bg-gray-50">
                      <td className="px-4 py-3 font-medium">Tasa de conversión</td>
                      <td className="px-4 py-3 text-gray-600">Más baja</td>
                      <td className="px-4 py-3 text-green-600 font-medium">Más alta</td>
                    </tr>
                    <tr className="bg-white">
                      <td className="px-4 py-3 font-medium">Costo por verificación</td>
                      <td className="px-4 py-3 text-gray-600">Mayor</td>
                      <td className="px-4 py-3 text-green-600 font-medium">Menor</td>
                    </tr>
                    <tr className="bg-gray-50">
                      <td className="px-4 py-3 font-medium">Fraude detectado</td>
                      <td className="px-4 py-3 text-gray-600">Detección limitada</td>
                      <td className="px-4 py-3 text-green-600 font-medium">Detección reforzada</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-6">
                Implementación paso a paso
              </h2>
              <ol className="list-decimal pl-6 mb-6 space-y-4 text-gray-600">
                <li>
                  <strong>Audita tu proceso actual:</strong> Identifica los cuellos de botella
                  y pasos que generan mayor abandono.
                </li>
                <li>
                  <strong>Define los niveles de cuenta:</strong> No todos los clientes necesitan
                  el mismo nivel de verificación. Implementa onboarding escalonado.
                </li>
                <li>
                  <strong>Selecciona un proveedor de verificación:</strong> Busca uno que ofrezca
                  verificación de documentos, biometría y validación de datos en una sola plataforma.
                </li>
                <li>
                  <strong>Integra las APIs:</strong> Conecta tu sistema con las fuentes de
                  verificación (INE, RENAPO, SAT, listas de sanciones).
                </li>
                <li>
                  <strong>Diseña el flujo de usuario:</strong> Optimiza cada pantalla para
                  minimizar fricción y maximizar claridad.
                </li>
                <li>
                  <strong>Prueba exhaustivamente:</strong> Incluye pruebas con usuarios reales
                  para identificar puntos de confusión.
                </li>
                <li>
                  <strong>Monitorea y optimiza:</strong> Implementa analíticas para identificar
                  oportunidades de mejora continua.
                </li>
              </ol>

              <div className="bg-[#0E1133] rounded-xl p-8 my-12">
                <h3 className="text-xl font-bold text-white mb-4">
                  Conclusión
                </h3>
                <p className="text-white/80">
                  El onboarding rápido y seguro no es un lujo, es una necesidad competitiva.
                  Las instituciones financieras que logran verificar clientes en segundos
                  mientras cumplen con todas las regulaciones tienen una ventaja decisiva
                  en el mercado. La tecnología existe, solo falta implementarla.
                </p>
              </div>

            <div className="mt-12 flex flex-wrap gap-4">
              <a
                href="/contacto"
                className="px-8 py-4 bg-[#0066ff] text-white font-bold rounded-lg hover:bg-[#0052cc] transition-all"
              >
                Solicitar demo
              </a>
              <a
                href="/soluciones/onboarding"
                className="px-8 py-4 bg-white/10 text-white font-bold rounded-lg hover:bg-white/20 transition-all"
              >
                Ver solución de onboarding
              </a>
            </div>
    </ArticleLayout>
  );
}
