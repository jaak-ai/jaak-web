import ArticleLayout from "../ArticleLayout";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "El registro obligatorio de celulares: cuando la identidad se diseña mal, el sistema colapsa | JAAK",
  description: "Análisis del fallo crítico en el padrón de telefonía móvil en México: suplantación de identidad, deepfakes y por qué la verificación sin prueba de vida real no funciona.",
  keywords: ["padrón celulares México", "registro telefonía móvil", "suplantación identidad", "deepfakes", "prueba de vida", "verificación identidad", "CURP", "INE"],
  openGraph: {
    title: "El registro obligatorio de celulares: cuando la identidad se diseña mal",
    description: "Lo que está ocurriendo con el padrón obligatorio de telefonía en México es la consecuencia de confundir cumplimiento con seguridad.",
    type: "article",
    publishedTime: "2026-01-13",
    authors: ["JAAK"],
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Padrón de celulares: Por qué falló y qué nos enseña sobre verificación de identidad",
  description: "Análisis del fracaso del padrón de celulares en México y sus lecciones para la verificación de identidad digital confiable.",
  image: "https://jaak.ai/images/blog/padron-celulares.jpg",
  datePublished: "2026-01-13",
  dateModified: "2026-01-13",
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
    "@id": "https://jaak.ai/blog/padron-celulares-fallo-verificacion-identidad",
  },
  keywords: "padrón celulares México, PANAUT, verificación identidad México, fallo regulatorio, identidad digital México",
  inLanguage: "es-MX",
};

export default function PadronCelularesFalloVerificacion() {
  return (
    <ArticleLayout
      title="El registro obligatorio de celulares: cuando la identidad se diseña mal, el sistema colapsa"
      subtitle="Lo que está ocurriendo con el padrón obligatorio de telefonía en México no es una sorpresa. Es la consecuencia lógica de haber confundido &quot;cumplimiento&quot; con &quot;seguridad&quot;."
      category="Análisis"
      date="13 de enero, 2026"
      readTime="8 min"
      slug="padron-celulares-fallo-verificacion-identidad"
      image="/images/blog/padron-celulares-fallo.png"
      imageAlt="Ilustración del caos en el padrón obligatorio de celulares en México: mercado negro de CURPs e INEs, deepfakes y suplantación de identidad"
      jsonLd={jsonLd}
      relatedPosts={[
        { title: "Seguridad biométrica: Cómo la prueba de vida previene el fraude", slug: "seguridad-biometrica-prueba-de-vida", category: "Seguridad" },
        { title: "Prevención de fraude en onboarding digital", slug: "prevencion-fraude-onboarding-digital", category: "Fraude" },
        { title: "Tendencias KYC 2026", slug: "tendencias-kyc-2026", category: "KYC" },
      ]}
    >
              <div className="bg-[#F3F4F8] border border-[#212A45]/10 rounded-xl p-6 my-8">
                <p className="text-[11px] font-semibold tracking-wide uppercase text-[#b91c1c] mb-2">Alerta crítica</p>
                <p className="text-gray-600">
                  A solo días de iniciar el registro obligatorio de líneas telefónicas, comenzaron a circular
                  pruebas contundentes de una falla crítica: cualquiera puede registrar una línea usando
                  los datos de otra persona.
                </p>
              </div>

              <p className="text-xl text-gray-600 leading-relaxed mb-8">
                No hablamos de un exploit sofisticado. Hablamos de suplantación básica de identidad,
                al alcance de cualquiera con acceso a internet.
              </p>

              <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-6">
                Qué está pasando realmente
              </h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                Usuarios en canales de WhatsApp y Telegram han demostrado que es posible:
              </p>
              <ul className="list-disc pl-6 mb-6 space-y-2 text-gray-600">
                <li>Usar CURP e INE obtenidos de fuentes públicas</li>
                <li>Presentar videos generados con inteligencia artificial</li>
                <li>&quot;Brincar&quot; la verificación facial del sistema</li>
                <li>Registrar líneas sin el consentimiento del titular real</li>
              </ul>
              <p className="text-gray-600 leading-relaxed mb-4">
                El caso más visible fue el del senador Gerardo Fernández Noroña, pero no es único.
                También se reportó el uso de datos de figuras públicas como AMLO y Claudia Sheinbaum.
              </p>

              <div className="relative bg-[#F3F4F8] border border-[#212A45]/10 rounded-xl p-6 my-8 before:absolute before:left-6 before:top-0 before:h-px before:w-12 before:bg-[#2DB6C1]">
                <p className="text-gray-700 font-bold text-lg">
                  El mensaje es devastador: si pueden hacerlo con ellos, pueden hacerlo contigo.
                </p>
              </div>

              <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-6">
                El fallo técnico de fondo
              </h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                El problema no es &quot;la IA&quot;. El problema no es &quot;la gente&quot;.
                <strong> El problema es el diseño del sistema.</strong>
              </p>
              <p className="text-gray-600 leading-relaxed mb-6">
                El padrón se apoya en tres errores clásicos:
              </p>

              <h3 className="text-xl font-bold text-gray-900 mt-8 mb-4">
                1. Verificación facial sin prueba de vida real
              </h3>
              <p className="text-gray-600 leading-relaxed mb-4">
                Si el sistema acepta:
              </p>
              <ul className="list-disc pl-6 mb-6 space-y-2 text-gray-600">
                <li>Videos pregrabados</li>
                <li>Deepfakes</li>
                <li>Capturas de pantalla</li>
              </ul>
              <p className="text-gray-600 leading-relaxed mb-4">
                Entonces <strong>no es prueba de vida</strong>, es solo reconocimiento facial decorativo.
              </p>

              <h3 className="text-xl font-bold text-gray-900 mt-8 mb-4">
                2. Identidad sin control de contexto
              </h3>
              <p className="text-gray-600 leading-relaxed mb-4">
                El sistema no valida:
              </p>
              <ul className="list-disc pl-6 mb-6 space-y-2 text-gray-600">
                <li>Dispositivo</li>
                <li>Sesión</li>
                <li>Riesgo</li>
                <li>Reintentos</li>
                <li>Señales de fraude</li>
              </ul>
              <p className="text-gray-600 leading-relaxed mb-4">
                Eso convierte el registro en un <strong>trámite ciego</strong>, no en un proceso de identidad.
              </p>

              <h3 className="text-xl font-bold text-gray-900 mt-8 mb-4">
                3. Confundir resguardo de datos con verificación de identidad
              </h3>
              <p className="text-gray-600 leading-relaxed mb-4">
                El gobierno insiste en que los datos están protegidos por la Ley de Protección de Datos Personales.
              </p>
              <p className="text-gray-600 leading-relaxed mb-4">
                Eso no sirve de nada si:
              </p>
              <ul className="list-disc pl-6 mb-6 space-y-2 text-gray-600">
                <li>No sabes quién se está registrando</li>
                <li>No puedes demostrar consentimiento</li>
                <li>No puedes evitar la suplantación</li>
              </ul>

              <div className="bg-gray-900 rounded-xl p-6 my-8">
                <p className="text-white font-bold">
                  La protección legal no reemplaza la validación técnica.
                </p>
              </div>

              <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-6">
                El resultado: un padrón que amplifica el fraude
              </h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                La ironía es brutal.
              </p>
              <p className="text-gray-600 leading-relaxed mb-4">
                Una ley creada para combatir:
              </p>
              <ul className="list-disc pl-6 mb-4 space-y-2 text-gray-600">
                <li>Extorsión</li>
                <li>Delitos telefónicos</li>
                <li>Uso anónimo de líneas</li>
              </ul>
              <p className="text-gray-600 leading-relaxed mb-4">
                Está creando:
              </p>
              <ul className="list-disc pl-6 mb-6 space-y-2 text-gray-600">
                <li>Identidades falsas</li>
                <li>Líneas registradas a terceros</li>
                <li>Riesgo legal para ciudadanos inocentes</li>
              </ul>

              <div className="bg-[#F3F4F8] border border-[#212A45]/10 rounded-xl p-6 my-8">
                <p className="text-[11px] font-semibold tracking-wide uppercase text-[#b91c1c] mb-2">Riesgo real</p>
                <p className="text-gray-700 font-bold">
                  No reduce el crimen. Redistribuye el riesgo hacia la población.
                </p>
              </div>

              <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-6">
                Cómo se evita este desastre
              </h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                La suplantación que estamos viendo no es inevitable.
                Es evitable si el sistema se diseña correctamente desde el inicio.
              </p>
              <p className="text-gray-600 leading-relaxed mb-6">
                En JAAK abordamos el problema desde otro ángulo:
              </p>

              <div className="bg-[#2DB6C1]/10 rounded-xl p-8 my-8">
                <h3 className="text-xl font-bold text-gray-900 mb-4">
                  1. Prueba de vida activa y en tiempo real
                </h3>
                <p className="text-gray-600 mb-4">
                  No aceptamos videos, imágenes ni reproducciones.
                </p>
                <p className="text-gray-600 mb-2">
                  La prueba de vida:
                </p>
                <ul className="list-disc pl-6 space-y-1 text-gray-600">
                  <li>Es dinámica</li>
                  <li>Responde a estímulos en tiempo real</li>
                  <li>Detecta deepfakes y replay attacks</li>
                </ul>
                <p className="text-[#2DB6C1] font-bold mt-4">
                  Sin vida real, no hay identidad.
                </p>
              </div>

              <div className="bg-[#0066ff]/10 rounded-xl p-8 my-8">
                <h3 className="text-xl font-bold text-gray-900 mb-4">
                  2. Identidad como proceso, no como trámite
                </h3>
                <p className="text-gray-600 mb-4">
                  La verificación no es un &quot;check&quot;.
                </p>
                <p className="text-gray-600 mb-2">
                  Se evalúan:
                </p>
                <ul className="list-disc pl-6 space-y-1 text-gray-600">
                  <li>Señales de riesgo</li>
                  <li>Comportamiento</li>
                  <li>Dispositivo</li>
                  <li>Historial</li>
                  <li>Coherencia biométrica</li>
                </ul>
                <p className="text-[#0066ff] font-bold mt-4">
                  La identidad se construye, no se asume.
                </p>
              </div>

              <div className="bg-gray-100 rounded-xl p-8 my-8">
                <h3 className="text-xl font-bold text-gray-900 mb-4">
                  3. Evidencia, trazabilidad y no repudio
                </h3>
                <p className="text-gray-600 mb-4">
                  Cada validación genera:
                </p>
                <ul className="list-disc pl-6 mb-4 space-y-1 text-gray-600">
                  <li>Evidencia técnica</li>
                  <li>Sellado temporal</li>
                  <li>Trazabilidad legal</li>
                </ul>
                <p className="text-gray-600 mb-2">
                  Si alguien intenta suplantar:
                </p>
                <ul className="list-disc pl-6 space-y-1 text-gray-600">
                  <li>Se detecta</li>
                  <li>Se bloquea</li>
                  <li>Se documenta</li>
                </ul>
                <p className="text-gray-900 font-bold mt-4">
                  Eso protege tanto al ciudadano como a la institución.
                </p>
              </div>

              <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-6">
                La lección que México no puede ignorar
              </h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                Los sistemas de identidad no se improvisan. Menos aún cuando son obligatorios.
              </p>
              <p className="text-gray-600 leading-relaxed mb-4">
                Si el registro:
              </p>
              <ul className="list-disc pl-6 mb-6 space-y-2 text-gray-600">
                <li>No valida vida real</li>
                <li>No detecta fraude</li>
                <li>No protege al usuario</li>
              </ul>
              <p className="text-gray-600 leading-relaxed mb-4">
                Entonces <strong>no es un padrón, es una fábrica de problemas legales y reputacionales</strong>.
              </p>

              <div className="bg-[#0E1133] rounded-xl p-8 my-12">
                <h3 className="text-xl font-bold text-white mb-4">
                  Conclusión
                </h3>
                <p className="text-white/80 mb-4">
                  La identidad digital no se resuelve con decretos. Se resuelve con arquitectura,
                  criterio y responsabilidad técnica.
                </p>
                <p className="text-white font-bold">
                  Y lo que estamos viendo hoy es exactamente lo que pasa cuando eso falta.
                </p>
              </div>

            <div className="flex flex-wrap justify-center gap-4">
              <a
                href="/contacto"
                className="px-8 py-4 bg-[#0066ff] text-white font-bold rounded-lg hover:bg-[#0052cc] transition-all"
              >
                Solicitar demo
              </a>
              <a
                href="/plataforma/verificacion-identidad"
                className="px-8 py-4 bg-white/10 text-white font-bold rounded-lg hover:bg-white/20 transition-all"
              >
                Conocer la plataforma
              </a>
            </div>
    </ArticleLayout>
  );
}
