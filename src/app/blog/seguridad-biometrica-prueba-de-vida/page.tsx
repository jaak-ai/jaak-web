import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Seguridad biométrica: Cómo la prueba de vida previene el fraude | JAAK",
  description: "La tecnología de liveness detection es fundamental para prevenir ataques de presentación. Conoce cómo funciona la certificación iBeta y por qué es esencial para tu proceso de onboarding.",
  keywords: ["prueba de vida", "liveness detection", "biometría", "iBeta", "seguridad biométrica", "anti-spoofing", "verificación facial"],
  openGraph: {
    title: "Seguridad biométrica: Cómo la prueba de vida previene el fraude",
    description: "Todo sobre la tecnología de liveness detection y su importancia en la prevención de fraude por suplantación de identidad.",
    type: "article",
    publishedTime: "2024-12-27",
    authors: ["JAAK"],
  },
};

export default function SeguridadBiometrica() {
  const relatedPosts = [
    {
      title: "Tendencias KYC 2025: Lo que toda institución financiera debe saber",
      slug: "tendencias-kyc-2025",
      category: "KYC",
    },
    {
      title: "Prevención de fraude en el onboarding digital: Mejores prácticas",
      slug: "prevencion-fraude-onboarding-digital",
      category: "Fraude",
    },
    {
      title: "Onboarding digital: De días a minutos sin sacrificar cumplimiento",
      slug: "onboarding-digital-rapido-cumplimiento",
      category: "Onboarding",
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
              <span className="px-3 py-1 bg-[#00d4aa]/10 text-[#00d4aa] text-sm font-semibold rounded-full">
                Seguridad
              </span>
              <span className="text-white/40 text-sm">27 de diciembre, 2024</span>
              <span className="text-white/40 text-sm">•</span>
              <span className="text-white/40 text-sm">10 min de lectura</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-black text-white mb-6">
              Seguridad biométrica: Cómo la prueba de vida previene el fraude
            </h1>
            <p className="text-xl text-white/60">
              La tecnología de liveness detection es fundamental para prevenir ataques de presentación.
              Exploramos cómo funciona la certificación iBeta y por qué es esencial para tu proceso de onboarding.
            </p>
          </div>
        </section>

        {/* Article Content */}
        <article className="py-12 bg-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="prose prose-lg max-w-none">

              <p className="text-xl text-gray-600 leading-relaxed mb-8">
                En la era digital, verificar que una persona es quien dice ser ya no es suficiente.
                También necesitamos confirmar que esa persona está físicamente presente durante
                la verificación. Aquí es donde entra la prueba de vida o liveness detection,
                una tecnología crítica en la lucha contra el fraude de identidad.
              </p>

              <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-6">
                ¿Qué es la prueba de vida?
              </h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                La prueba de vida (liveness detection) es una tecnología biométrica diseñada para
                determinar si la muestra biométrica capturada proviene de un ser humano vivo y
                presente, en lugar de una representación falsa como:
              </p>
              <ul className="list-disc pl-6 mb-6 space-y-2 text-gray-600">
                <li>Fotografías impresas o en pantalla</li>
                <li>Videos pregrabados</li>
                <li>Máscaras 2D o 3D</li>
                <li>Deepfakes y manipulaciones digitales</li>
                <li>Modelos de silicona o látex</li>
              </ul>

              <div className="bg-[#00d4aa]/5 border-l-4 border-[#00d4aa] p-6 my-8">
                <p className="text-gray-700 font-medium mb-2">Dato importante:</p>
                <p className="text-gray-600">
                  Sin prueba de vida, un sistema de reconocimiento facial puede ser engañado
                  simplemente mostrando una foto del titular legítimo. Esto hace que la tecnología
                  de liveness sea indispensable para cualquier proceso de verificación remota.
                </p>
              </div>

              <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-6">
                Tipos de ataques de presentación
              </h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                Los intentos de fraude biométrico se clasifican según el método utilizado:
              </p>

              <div className="grid md:grid-cols-2 gap-6 my-8">
                <div className="bg-red-50 rounded-xl p-6">
                  <h3 className="font-bold text-gray-900 mb-3">Ataques 2D</h3>
                  <ul className="space-y-2 text-gray-600">
                    <li>• Fotos impresas en papel</li>
                    <li>• Imágenes en pantallas de dispositivos</li>
                    <li>• Videos reproducidos en pantalla</li>
                    <li>• Recortes de fotos con ojos movibles</li>
                  </ul>
                </div>
                <div className="bg-red-50 rounded-xl p-6">
                  <h3 className="font-bold text-gray-900 mb-3">Ataques 3D</h3>
                  <ul className="space-y-2 text-gray-600">
                    <li>• Máscaras de silicona o látex</li>
                    <li>• Modelos impresos en 3D</li>
                    <li>• Maniquíes con características realistas</li>
                    <li>• Prótesis faciales sofisticadas</li>
                  </ul>
                </div>
              </div>

              <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-6">
                Prueba de vida activa vs. pasiva
              </h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                Existen dos enfoques principales para detectar la presencia de una persona viva:
              </p>

              <div className="space-y-6 my-8">
                <div className="bg-gray-50 rounded-xl p-6">
                  <h3 className="font-bold text-gray-900 mb-3 flex items-center gap-2">
                    <span className="w-8 h-8 bg-[#0066ff] rounded-full flex items-center justify-center text-white text-sm">1</span>
                    Prueba de vida activa
                  </h3>
                  <p className="text-gray-600 mb-3">
                    Requiere que el usuario realice acciones específicas frente a la cámara:
                  </p>
                  <ul className="space-y-2 text-gray-600 ml-10">
                    <li>• Parpadear los ojos</li>
                    <li>• Girar la cabeza hacia diferentes direcciones</li>
                    <li>• Sonreír o hacer expresiones faciales</li>
                    <li>• Seguir un objeto en pantalla con la mirada</li>
                    <li>• Leer números o palabras en voz alta</li>
                  </ul>
                  <div className="mt-4 flex gap-4">
                    <span className="px-3 py-1 bg-green-100 text-green-700 text-sm rounded-full">Alta seguridad</span>
                    <span className="px-3 py-1 bg-yellow-100 text-yellow-700 text-sm rounded-full">Mayor fricción</span>
                  </div>
                </div>

                <div className="bg-gray-50 rounded-xl p-6">
                  <h3 className="font-bold text-gray-900 mb-3 flex items-center gap-2">
                    <span className="w-8 h-8 bg-[#0066ff] rounded-full flex items-center justify-center text-white text-sm">2</span>
                    Prueba de vida pasiva
                  </h3>
                  <p className="text-gray-600 mb-3">
                    Analiza características sin requerir acciones del usuario:
                  </p>
                  <ul className="space-y-2 text-gray-600 ml-10">
                    <li>• Microexpresiones naturales</li>
                    <li>• Patrones de parpadeo involuntarios</li>
                    <li>• Textura de la piel y reflejos</li>
                    <li>• Profundidad y tridimensionalidad facial</li>
                    <li>• Pulso sanguíneo visible (remote PPG)</li>
                  </ul>
                  <div className="mt-4 flex gap-4">
                    <span className="px-3 py-1 bg-green-100 text-green-700 text-sm rounded-full">Experiencia fluida</span>
                    <span className="px-3 py-1 bg-blue-100 text-blue-700 text-sm rounded-full">Tecnología avanzada</span>
                  </div>
                </div>
              </div>

              <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-6">
                La certificación iBeta: El estándar de oro
              </h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                iBeta Quality Assurance es el laboratorio líder mundial en pruebas de tecnología
                biométrica. Su certificación de Presentation Attack Detection (PAD) es reconocida
                como el estándar de la industria.
              </p>

              <div className="bg-[#0066ff]/5 rounded-xl p-8 my-8">
                <h3 className="text-xl font-bold text-gray-900 mb-4">
                  ¿Qué significa la certificación iBeta Level 1 y Level 2?
                </h3>
                <div className="space-y-4">
                  <div className="flex items-start gap-4">
                    <span className="px-3 py-1 bg-[#0066ff] text-white text-sm font-bold rounded">Level 1</span>
                    <div>
                      <p className="text-gray-700 font-medium">Pruebas con ataques 2D</p>
                      <p className="text-gray-600">Fotografías impresas y digitales, videos en pantalla</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <span className="px-3 py-1 bg-[#0066ff] text-white text-sm font-bold rounded">Level 2</span>
                    <div>
                      <p className="text-gray-700 font-medium">Pruebas con ataques 3D</p>
                      <p className="text-gray-600">Máscaras de látex, silicona, modelos 3D impresos</p>
                    </div>
                  </div>
                </div>
                <p className="text-gray-600 mt-4">
                  La certificación requiere una tasa de detección de ataques del 100% sin falsos
                  positivos significativos que afecten a usuarios legítimos.
                </p>
              </div>

              <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-6">
                ISO 30107-3: El marco normativo
              </h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                Las pruebas de iBeta siguen el estándar ISO/IEC 30107-3, que establece:
              </p>
              <ul className="list-disc pl-6 mb-6 space-y-2 text-gray-600">
                <li><strong>APCER</strong> (Attack Presentation Classification Error Rate): Porcentaje de ataques que no son detectados</li>
                <li><strong>BPCER</strong> (Bona Fide Presentation Classification Error Rate): Porcentaje de usuarios legítimos rechazados</li>
                <li><strong>PAI</strong> (Presentation Attack Instrument): Tipos específicos de instrumentos de ataque probados</li>
              </ul>

              <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-6">
                Tecnologías detrás de la prueba de vida
              </h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                Los sistemas modernos de liveness utilizan múltiples técnicas:
              </p>

              <div className="grid gap-4 my-8">
                <div className="flex items-start gap-4 p-4 bg-gray-50 rounded-lg">
                  <div className="w-10 h-10 bg-[#00d4aa]/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <svg className="w-5 h-5 text-[#00d4aa]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900">Análisis de textura</h4>
                    <p className="text-gray-600">Detecta diferencias entre piel real y superficies planas como papel o pantallas</p>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-4 bg-gray-50 rounded-lg">
                  <div className="w-10 h-10 bg-[#00d4aa]/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <svg className="w-5 h-5 text-[#00d4aa]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900">Mapeo 3D</h4>
                    <p className="text-gray-600">Construye un modelo tridimensional del rostro para detectar objetos planos</p>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-4 bg-gray-50 rounded-lg">
                  <div className="w-10 h-10 bg-[#00d4aa]/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <svg className="w-5 h-5 text-[#00d4aa]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900">Análisis de reflejos</h4>
                    <p className="text-gray-600">Examina cómo la luz se refleja en los ojos y la piel</p>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-4 bg-gray-50 rounded-lg">
                  <div className="w-10 h-10 bg-[#00d4aa]/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <svg className="w-5 h-5 text-[#00d4aa]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900">Detección de deepfakes</h4>
                    <p className="text-gray-600">Algoritmos de IA que identifican manipulaciones digitales y videos sintéticos</p>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-4 bg-gray-50 rounded-lg">
                  <div className="w-10 h-10 bg-[#00d4aa]/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <svg className="w-5 h-5 text-[#00d4aa]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900">Remote PPG</h4>
                    <p className="text-gray-600">Detecta el pulso sanguíneo a través de cambios sutiles en el color de la piel</p>
                  </div>
                </div>
              </div>

              <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-6">
                Por qué la prueba de vida es crítica para tu negocio
              </h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                Implementar liveness detection no es solo una medida de seguridad, sino una
                decisión de negocio estratégica:
              </p>
              <ul className="list-disc pl-6 mb-6 space-y-2 text-gray-600">
                <li><strong>Prevención de pérdidas:</strong> El fraude por suplantación puede costar millones en pérdidas directas y daño reputacional</li>
                <li><strong>Cumplimiento regulatorio:</strong> Las autoridades financieras cada vez exigen más controles biométricos robustos</li>
                <li><strong>Confianza del cliente:</strong> Los usuarios valoran saber que sus cuentas están protegidas</li>
                <li><strong>Reducción de costos:</strong> Automatizar la detección de fraude reduce la necesidad de revisión manual</li>
              </ul>

              <div className="bg-gray-50 rounded-xl p-8 my-8">
                <h3 className="text-xl font-bold text-gray-900 mb-4">
                  Caso de uso: Apertura de cuentas remotas
                </h3>
                <p className="text-gray-600 mb-4">
                  Cuando un usuario abre una cuenta desde su celular, la prueba de vida:
                </p>
                <ol className="list-decimal pl-6 space-y-2 text-gray-600">
                  <li>Verifica que la persona frente a la cámara es real, no una foto</li>
                  <li>Confirma que coincide con la foto del documento de identidad</li>
                  <li>Asegura que no se está usando un video pregrabado o deepfake</li>
                  <li>Todo esto en segundos, sin fricción para el usuario legítimo</li>
                </ol>
              </div>

              <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-6">
                Eligiendo una solución de prueba de vida
              </h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                Al evaluar proveedores, considera estos factores:
              </p>
              <ol className="list-decimal pl-6 mb-6 space-y-3 text-gray-600">
                <li>
                  <strong>Certificaciones:</strong> Busca certificación iBeta Level 1 y Level 2,
                  cumplimiento con ISO 30107-3
                </li>
                <li>
                  <strong>Tipo de detección:</strong> Preferiblemente pasiva o híbrida para
                  mejor experiencia de usuario
                </li>
                <li>
                  <strong>Velocidad:</strong> La verificación debe completarse en segundos,
                  no minutos
                </li>
                <li>
                  <strong>Compatibilidad:</strong> Debe funcionar en diferentes dispositivos
                  y condiciones de iluminación
                </li>
                <li>
                  <strong>Actualización continua:</strong> El proveedor debe actualizar
                  constantemente contra nuevas amenazas
                </li>
              </ol>

              <div className="bg-[#0a0a0a] rounded-xl p-8 my-12">
                <h3 className="text-xl font-bold text-white mb-4">
                  Conclusión
                </h3>
                <p className="text-white/80">
                  La prueba de vida ya no es opcional en la verificación de identidad digital.
                  Con el aumento de deepfakes y técnicas de fraude cada vez más sofisticadas,
                  contar con liveness detection certificado es la única forma de asegurar que
                  estás verificando a personas reales. La inversión en esta tecnología se paga
                  sola con la primera prevención de fraude significativa.
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
              Protege tu negocio con prueba de vida certificada
            </h2>
            <p className="text-white/60 text-lg mb-8">
              JAAK ofrece liveness detection con certificación iBeta Level 1 y Level 2 para máxima seguridad.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link
                href="/contacto"
                className="px-8 py-4 bg-[#0066ff] text-white font-bold rounded-lg hover:bg-[#0052cc] transition-all"
              >
                Solicitar demo
              </Link>
              <Link
                href="/soluciones/biometria"
                className="px-8 py-4 bg-white/10 text-white font-bold rounded-lg hover:bg-white/20 transition-all"
              >
                Conocer solución biométrica
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
