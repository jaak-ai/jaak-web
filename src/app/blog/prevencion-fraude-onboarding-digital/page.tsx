import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Prevención de fraude en el onboarding digital: Mejores prácticas | JAAK",
  description: "El fraude por suplantación de identidad representa pérdidas millonarias. Conoce las estrategias más efectivas para detectar y prevenir intentos de fraude durante la verificación de clientes.",
  keywords: ["prevención de fraude", "onboarding digital", "suplantación de identidad", "fraude financiero", "KYC", "verificación de identidad"],
  openGraph: {
    title: "Prevención de fraude en el onboarding digital: Mejores prácticas",
    description: "Estrategias efectivas para detectar y prevenir el fraude por suplantación de identidad en procesos de onboarding.",
    type: "article",
    publishedTime: "2024-12-20",
    authors: ["JAAK"],
  },
};

export default function PrevencionFraude() {
  const relatedPosts = [
    {
      title: "Seguridad biométrica: Cómo la prueba de vida previene el fraude",
      slug: "seguridad-biometrica-prueba-de-vida",
      category: "Seguridad",
    },
    {
      title: "Onboarding digital: De días a minutos sin sacrificar cumplimiento",
      slug: "onboarding-digital-rapido-cumplimiento",
      category: "Onboarding",
    },
    {
      title: "Tendencias KYC 2025: Lo que toda institución financiera debe saber",
      slug: "tendencias-kyc-2025",
      category: "KYC",
    },
  ];

  return (
    <>
      <Header />
      <main>
        {/* Hero Section */}
        <section className="pt-32 pb-12 bg-[#0a0a0a]">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="mb-6">
              <Link
                href="/blog"
                className="inline-flex items-center text-white/60 hover:text-white transition-colors"
              >
                <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
                Volver al blog
              </Link>
            </div>
            <div className="flex items-center gap-3 mb-6">
              <span className="px-3 py-1 bg-red-500/10 text-red-500 text-sm font-semibold rounded-full">
                Fraude
              </span>
              <span className="text-white/40 text-sm">20 de diciembre, 2024</span>
              <span className="text-white/40 text-sm">•</span>
              <span className="text-white/40 text-sm">11 min de lectura</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-black text-white mb-6">
              Prevención de fraude en el onboarding digital: Mejores prácticas
            </h1>
            <p className="text-xl text-white/60">
              El fraude por suplantación de identidad representa pérdidas millonarias cada año.
              Te compartimos las estrategias más efectivas para detectar y prevenir intentos
              de fraude durante la verificación de clientes.
            </p>
          </div>
        </section>

        {/* Article Content */}
        <article className="py-12 bg-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="prose prose-lg max-w-none">

              <p className="text-xl text-gray-600 leading-relaxed mb-8">
                El onboarding digital ha revolucionado la forma en que las empresas adquieren
                clientes, pero también ha abierto nuevas oportunidades para los defraudadores.
                Entender los vectores de ataque y cómo defenderse es fundamental para proteger
                tu negocio y tus clientes.
              </p>

              <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-6">
                El panorama del fraude en México
              </h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                El fraude de identidad en México ha crecido exponencialmente con la digitalización
                de servicios financieros. Las modalidades más comunes incluyen:
              </p>

              <div className="grid md:grid-cols-2 gap-6 my-8">
                <div className="bg-red-50 rounded-xl p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 bg-red-100 rounded-lg flex items-center justify-center">
                      <svg className="w-5 h-5 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                      </svg>
                    </div>
                    <h3 className="font-bold text-gray-900">Robo de identidad</h3>
                  </div>
                  <p className="text-gray-600">
                    Uso de documentos y datos de personas reales sin su consentimiento para
                    abrir cuentas o solicitar créditos.
                  </p>
                </div>

                <div className="bg-red-50 rounded-xl p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 bg-red-100 rounded-lg flex items-center justify-center">
                      <svg className="w-5 h-5 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                      </svg>
                    </div>
                    <h3 className="font-bold text-gray-900">Documentos falsos</h3>
                  </div>
                  <p className="text-gray-600">
                    Credenciales de elector, pasaportes o licencias alteradas o completamente
                    fabricadas con datos ficticios.
                  </p>
                </div>

                <div className="bg-red-50 rounded-xl p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 bg-red-100 rounded-lg flex items-center justify-center">
                      <svg className="w-5 h-5 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
                      </svg>
                    </div>
                    <h3 className="font-bold text-gray-900">Deepfakes</h3>
                  </div>
                  <p className="text-gray-600">
                    Videos sintéticos generados con IA que suplantan la apariencia de
                    personas reales para engañar verificaciones biométricas.
                  </p>
                </div>

                <div className="bg-red-50 rounded-xl p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 bg-red-100 rounded-lg flex items-center justify-center">
                      <svg className="w-5 h-5 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                    </div>
                    <h3 className="font-bold text-gray-900">Identidad sintética</h3>
                  </div>
                  <p className="text-gray-600">
                    Combinación de datos reales y ficticios para crear identidades que
                    no corresponden a ninguna persona real.
                  </p>
                </div>
              </div>

              <div className="bg-red-500/5 border-l-4 border-red-500 p-6 my-8">
                <p className="text-gray-700 font-medium mb-2">Impacto económico:</p>
                <p className="text-gray-600">
                  Según la Condusef, las quejas por posible robo de identidad en México
                  han aumentado más del 50% en los últimos años. El costo promedio por
                  incidente de fraude puede superar los $50,000 pesos, sin contar el daño
                  reputacional y los costos operativos de investigación.
                </p>
              </div>

              <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-6">
                Capas de defensa: Un enfoque integral
              </h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                La prevención efectiva del fraude requiere múltiples capas de protección
                que trabajen en conjunto:
              </p>

              <div className="space-y-6 my-8">
                <div className="bg-gray-50 rounded-xl p-6">
                  <h3 className="font-bold text-gray-900 mb-3 flex items-center gap-2">
                    <span className="w-8 h-8 bg-[#0066ff] rounded-full flex items-center justify-center text-white text-sm font-bold">1</span>
                    Verificación de documentos
                  </h3>
                  <p className="text-gray-600 mb-4">
                    Primera línea de defensa que analiza la autenticidad del documento de identidad:
                  </p>
                  <ul className="space-y-2 text-gray-600 ml-10">
                    <li>• Detección de alteraciones físicas y digitales</li>
                    <li>• Verificación de elementos de seguridad (hologramas, UV, microimpresión)</li>
                    <li>• Validación de formato y estructura del documento</li>
                    <li>• Extracción automática de datos (OCR) con validación de consistencia</li>
                    <li>• Consulta en tiempo real contra bases de datos oficiales (INE, RENAPO)</li>
                  </ul>
                </div>

                <div className="bg-gray-50 rounded-xl p-6">
                  <h3 className="font-bold text-gray-900 mb-3 flex items-center gap-2">
                    <span className="w-8 h-8 bg-[#0066ff] rounded-full flex items-center justify-center text-white text-sm font-bold">2</span>
                    Verificación biométrica
                  </h3>
                  <p className="text-gray-600 mb-4">
                    Confirma que la persona que presenta el documento es su titular legítimo:
                  </p>
                  <ul className="space-y-2 text-gray-600 ml-10">
                    <li>• Comparación facial entre selfie y foto del documento</li>
                    <li>• Prueba de vida para confirmar presencia física</li>
                    <li>• Detección de deepfakes y manipulaciones digitales</li>
                    <li>• Análisis de consistencia entre múltiples capturas</li>
                  </ul>
                </div>

                <div className="bg-gray-50 rounded-xl p-6">
                  <h3 className="font-bold text-gray-900 mb-3 flex items-center gap-2">
                    <span className="w-8 h-8 bg-[#0066ff] rounded-full flex items-center justify-center text-white text-sm font-bold">3</span>
                    Validación de datos
                  </h3>
                  <p className="text-gray-600 mb-4">
                    Cruza información contra múltiples fuentes para detectar inconsistencias:
                  </p>
                  <ul className="space-y-2 text-gray-600 ml-10">
                    <li>• Verificación de CURP contra RENAPO</li>
                    <li>• Validación de RFC con el SAT</li>
                    <li>• Consulta de listas negras y sanciones</li>
                    <li>• Verificación de comprobante de domicilio</li>
                    <li>• Detección de datos sintéticos o inconsistentes</li>
                  </ul>
                </div>

                <div className="bg-gray-50 rounded-xl p-6">
                  <h3 className="font-bold text-gray-900 mb-3 flex items-center gap-2">
                    <span className="w-8 h-8 bg-[#0066ff] rounded-full flex items-center justify-center text-white text-sm font-bold">4</span>
                    Análisis de comportamiento
                  </h3>
                  <p className="text-gray-600 mb-4">
                    Detecta patrones sospechosos durante el proceso de onboarding:
                  </p>
                  <ul className="space-y-2 text-gray-600 ml-10">
                    <li>• Velocidad anormal de completado del proceso</li>
                    <li>• Múltiples intentos desde el mismo dispositivo</li>
                    <li>• Geolocalización inconsistente con datos declarados</li>
                    <li>• Patrones de navegación típicos de bots o scripts</li>
                    <li>• Horarios inusuales de registro</li>
                  </ul>
                </div>
              </div>

              <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-6">
                Señales de alerta (Red Flags)
              </h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                Tu sistema debe estar configurado para detectar estas señales de advertencia:
              </p>

              <div className="overflow-x-auto my-8">
                <table className="w-full border-collapse">
                  <thead>
                    <tr className="bg-[#0a0a0a] text-white">
                      <th className="px-4 py-3 text-left">Categoría</th>
                      <th className="px-4 py-3 text-left">Señal de alerta</th>
                      <th className="px-4 py-3 text-left">Nivel de riesgo</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200">
                    <tr className="bg-white">
                      <td className="px-4 py-3 font-medium">Documento</td>
                      <td className="px-4 py-3 text-gray-600">Foto del documento borrosa o recortada</td>
                      <td className="px-4 py-3"><span className="px-2 py-1 bg-yellow-100 text-yellow-700 text-sm rounded">Medio</span></td>
                    </tr>
                    <tr className="bg-gray-50">
                      <td className="px-4 py-3 font-medium">Documento</td>
                      <td className="px-4 py-3 text-gray-600">INE reportada como extraviada o robada</td>
                      <td className="px-4 py-3"><span className="px-2 py-1 bg-red-100 text-red-700 text-sm rounded">Alto</span></td>
                    </tr>
                    <tr className="bg-white">
                      <td className="px-4 py-3 font-medium">Biométrico</td>
                      <td className="px-4 py-3 text-gray-600">Baja coincidencia facial con documento</td>
                      <td className="px-4 py-3"><span className="px-2 py-1 bg-red-100 text-red-700 text-sm rounded">Alto</span></td>
                    </tr>
                    <tr className="bg-gray-50">
                      <td className="px-4 py-3 font-medium">Biométrico</td>
                      <td className="px-4 py-3 text-gray-600">Fallo en prueba de vida</td>
                      <td className="px-4 py-3"><span className="px-2 py-1 bg-red-100 text-red-700 text-sm rounded">Alto</span></td>
                    </tr>
                    <tr className="bg-white">
                      <td className="px-4 py-3 font-medium">Datos</td>
                      <td className="px-4 py-3 text-gray-600">CURP no coincide con datos del documento</td>
                      <td className="px-4 py-3"><span className="px-2 py-1 bg-red-100 text-red-700 text-sm rounded">Alto</span></td>
                    </tr>
                    <tr className="bg-gray-50">
                      <td className="px-4 py-3 font-medium">Datos</td>
                      <td className="px-4 py-3 text-gray-600">Correo electrónico desechable</td>
                      <td className="px-4 py-3"><span className="px-2 py-1 bg-yellow-100 text-yellow-700 text-sm rounded">Medio</span></td>
                    </tr>
                    <tr className="bg-white">
                      <td className="px-4 py-3 font-medium">Comportamiento</td>
                      <td className="px-4 py-3 text-gray-600">Múltiples intentos fallidos de verificación</td>
                      <td className="px-4 py-3"><span className="px-2 py-1 bg-yellow-100 text-yellow-700 text-sm rounded">Medio</span></td>
                    </tr>
                    <tr className="bg-gray-50">
                      <td className="px-4 py-3 font-medium">Comportamiento</td>
                      <td className="px-4 py-3 text-gray-600">VPN o proxy detectado</td>
                      <td className="px-4 py-3"><span className="px-2 py-1 bg-yellow-100 text-yellow-700 text-sm rounded">Medio</span></td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-6">
                Estrategias de mitigación
              </h2>

              <div className="space-y-4 my-8">
                <div className="flex items-start gap-4 p-4 bg-green-50 rounded-lg">
                  <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <svg className="w-5 h-5 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900">Verificación en tiempo real</h4>
                    <p className="text-gray-600">Valida documentos e identidades contra bases de datos oficiales en el momento, no después.</p>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-4 bg-green-50 rounded-lg">
                  <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <svg className="w-5 h-5 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900">Autenticación multifactor</h4>
                    <p className="text-gray-600">Combina algo que el usuario tiene (teléfono), sabe (OTP) y es (biometría).</p>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-4 bg-green-50 rounded-lg">
                  <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <svg className="w-5 h-5 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900">Scoring de riesgo dinámico</h4>
                    <p className="text-gray-600">Asigna puntuaciones de riesgo basadas en múltiples señales y ajusta los controles según el nivel.</p>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-4 bg-green-50 rounded-lg">
                  <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <svg className="w-5 h-5 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900">Monitoreo continuo</h4>
                    <p className="text-gray-600">No te detengas en el onboarding. Monitorea transacciones y comportamiento post-registro.</p>
                  </div>
                </div>
              </div>

              <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-6">
                Equilibrio entre seguridad y experiencia
              </h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                El mayor desafío es implementar controles robustos sin crear fricción excesiva
                para usuarios legítimos. Algunas estrategias:
              </p>
              <ul className="list-disc pl-6 mb-6 space-y-2 text-gray-600">
                <li><strong>Fricción adaptativa:</strong> Aumenta los controles solo cuando se detectan señales de riesgo</li>
                <li><strong>Verificación pasiva:</strong> Usa tecnologías que no requieran acciones adicionales del usuario</li>
                <li><strong>Feedback claro:</strong> Cuando algo falla, explica al usuario cómo resolverlo</li>
                <li><strong>Múltiples intentos:</strong> Permite reintentos con guía mejorada antes de rechazar</li>
              </ul>

              <div className="bg-gray-50 rounded-xl p-8 my-8">
                <h3 className="text-xl font-bold text-gray-900 mb-4">
                  Métricas clave a monitorear
                </h3>
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <p className="font-medium text-gray-900">Tasa de aprobación</p>
                    <p className="text-gray-600 text-sm">Porcentaje de usuarios que completan exitosamente el onboarding</p>
                  </div>
                  <div>
                    <p className="font-medium text-gray-900">Tasa de fraude detectado</p>
                    <p className="text-gray-600 text-sm">Intentos de fraude bloqueados vs. total de solicitudes</p>
                  </div>
                  <div>
                    <p className="font-medium text-gray-900">Falsos positivos</p>
                    <p className="text-gray-600 text-sm">Usuarios legítimos rechazados incorrectamente</p>
                  </div>
                  <div>
                    <p className="font-medium text-gray-900">Tiempo de verificación</p>
                    <p className="text-gray-600 text-sm">Duración promedio del proceso de onboarding</p>
                  </div>
                </div>
              </div>

              <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-6">
                Cumplimiento y documentación
              </h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                Más allá de prevenir el fraude, debes poder demostrar tu debida diligencia:
              </p>
              <ul className="list-disc pl-6 mb-6 space-y-2 text-gray-600">
                <li>Conserva evidencia de cada verificación realizada (imágenes, resultados, timestamps)</li>
                <li>Documenta las decisiones de aprobación o rechazo</li>
                <li>Mantén logs auditables de todo el proceso</li>
                <li>Implementa políticas claras de escalamiento para casos sospechosos</li>
                <li>Realiza auditorías periódicas de efectividad de controles</li>
              </ul>

              <div className="bg-[#0a0a0a] rounded-xl p-8 my-12">
                <h3 className="text-xl font-bold text-white mb-4">
                  Conclusión
                </h3>
                <p className="text-white/80">
                  La prevención del fraude en el onboarding digital no es un proyecto de una
                  sola vez, sino un proceso continuo de mejora. Los defraudadores evolucionan
                  constantemente sus técnicas, y tu defensa debe evolucionar con ellos.
                  Invertir en tecnología robusta de verificación de identidad es la mejor
                  protección contra pérdidas financieras y daño reputacional.
                </p>
              </div>

            </div>
          </div>
        </article>

        {/* Author Section */}
        <section className="py-12 bg-gray-50">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center gap-6">
              <div className="w-16 h-16 bg-[#0066ff] rounded-full flex items-center justify-center">
                <span className="text-white font-bold text-xl">J</span>
              </div>
              <div>
                <p className="font-bold text-gray-900">Equipo JAAK</p>
                <p className="text-gray-600">
                  Especialistas en verificación de identidad y cumplimiento regulatorio para el sector financiero mexicano.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Related Posts */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-8">Artículos relacionados</h2>
            <div className="grid md:grid-cols-3 gap-6">
              {relatedPosts.map((post, index) => (
                <Link
                  key={index}
                  href={`/blog/${post.slug}`}
                  className="block bg-gray-50 rounded-xl p-6 hover:shadow-lg transition-shadow"
                >
                  <span className="inline-block px-3 py-1 bg-[#0066ff]/10 text-[#0066ff] text-xs font-semibold rounded-full mb-3">
                    {post.category}
                  </span>
                  <h3 className="font-bold text-gray-900 hover:text-[#0066ff] transition-colors">
                    {post.title}
                  </h3>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-[#0a0a0a]">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-black text-white mb-4">
              Protege tu onboarding contra el fraude
            </h2>
            <p className="text-white/60 text-lg mb-8">
              JAAK detecta y previene el fraude de identidad con tecnología de punta y verificación en tiempo real.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link
                href="/contacto"
                className="px-8 py-4 bg-[#0066ff] text-white font-bold rounded-lg hover:bg-[#0052cc] transition-all"
              >
                Solicitar demo
              </Link>
              <Link
                href="/soluciones/prevencion-fraude"
                className="px-8 py-4 bg-white/10 text-white font-bold rounded-lg hover:bg-white/20 transition-all"
              >
                Ver solución antifraude
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
