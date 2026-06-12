import ArticleLayout from "../ArticleLayout";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title:
    "Lo que más me preocupa del sector crediticio en México no es el fraude que entra. Es el que ya está adentro. | JAAK Blog",
  description:
    "Las uniones de crédito verifican quién entra. Pero el contrato, el pagaré, la firma — muchas veces no pueden defenderse en un juicio. Arianna Quezada, CEO de JAAK, analiza la brecha que el nuevo marco jurisprudencial ya no permite ignorar.",
  openGraph: {
    title:
      "Lo que más me preocupa del sector crediticio en México no es el fraude que entra. Es el que ya está adentro.",
    description:
      "Las uniones de crédito verifican quién entra. Pero el contrato, el pagaré, la firma — muchas veces no pueden defenderse en un juicio.",
    type: "article",
    publishedTime: "2026-06-12T00:00:00Z",
    authors: ["Arianna Quezada"],
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "BlogPosting",
  headline:
    "Lo que más me preocupa del sector crediticio en México no es el fraude que entra. Es el que ya está adentro.",
  description:
    "Las uniones de crédito verifican quién entra. Pero el contrato, el pagaré, la firma — muchas veces no pueden defenderse en un juicio.",
  datePublished: "2026-06-12T00:00:00Z",
  author: {
    "@type": "Person",
    name: "Arianna Quezada",
    jobTitle: "CEO",
    worksFor: { "@type": "Organization", name: "JAAK" },
  },
  publisher: {
    "@type": "Organization",
    name: "JAAK",
    url: "https://jaak.ai",
  },
  image: "https://jaak.ai/images/blog/firma-expediente-crediticio.jpg",
  url: "https://jaak.ai/blog/firma-expediente-defendible-sector-crediticio",
  keywords: [
    "sector crediticio México",
    "expediente defendible",
    "firma electrónica NOM-151",
    "uniones de crédito",
    "pagaré digital",
    "compliance financiero",
  ],
};

export default function ArticleFirmaExpediente() {
  return (
    <ArticleLayout
      title="Lo que más me preocupa del sector crediticio en México no es el fraude que entra. Es el que ya está adentro."
      subtitle="Las uniones de crédito verifican quién entra. Pero el contrato, el pagaré, la firma — muchas veces no pueden defenderse en un juicio."
      category="Compliance"
      date="12 de junio, 2026"
      readTime="7 min"
      slug="firma-expediente-defendible-sector-crediticio"
      image="/images/blog/firma-expediente-crediticio.jpg"
      imageAlt="Expediente crediticio defendible en México"
      jsonLd={jsonLd}
      relatedPosts={[
        {
          title: "Firma Simple vs Firma Digital con Validez NOM-151: ¿Cuál necesita tu empresa?",
          slug: "firma-electronica-simple-vs-avanzada",
          category: "Firma Electrónica",
        },
        {
          title: "¿Qué es la NOM-151 y por qué importa en contratos digitales?",
          slug: "que-es-nom-151-contratos-digitales",
          category: "Firma Electrónica",
        },
        {
          title: "Por qué la CNBV aplicó +696 sanciones en 2025: el problema no es el fraude, son los expedientes",
          slug: "cnbv-sanciones-2025-expedientes",
          category: "Regulación",
        },
      ]}
    >
      <p className="text-gray-700 text-lg leading-relaxed mb-6">
        Llevo años trabajando con instituciones del sector crediticio en México — uniones de crédito, SOFOMES, financieras especializadas. Y hay una conversación que se repite, casi siempre después de un incidente.
      </p>

      <p className="text-gray-700 leading-relaxed mb-6">
        Alguien descubre que tienen un problema. No con la identidad del cliente — eso lo verificaron. El problema es con el contrato que ese cliente firmó. O con el pagaré. O con el proceso que siguieron para capturar ese consentimiento. Y cuando llega el momento de defender ese documento ante un juez, no pueden.
      </p>

      <p className="text-gray-700 leading-relaxed mb-6">
        Eso es lo que más me preocupa. No el fraude que intenta entrar al sistema — para eso hay controles cada vez más sofisticados. Me preocupa el fraude que ya está adentro: la debilidad estructural de los expedientes que ya existen, firmados, archivados, y que en este momento no podrían sostenerse en un litigio.
      </p>

      <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">
        La fortaleza con la puerta trasera abierta
      </h2>

      <p className="text-gray-700 leading-relaxed mb-6">
        Las instituciones crediticias en México han invertido mucho en el frente de la incorporación. El proceso de KYC (Know Your Customer) mejoró. La verificación biométrica se volvió más común. Los listas de control (OFAC, listas negras de la UIF) se consultan con mayor sistematicidad. En muchos casos, el onboarding es genuinamente robusto.
      </p>

      <p className="text-gray-700 leading-relaxed mb-6">
        Pero una vez que el cliente está adentro, el rigor baja.
      </p>

      <p className="text-gray-700 leading-relaxed mb-6">
        El contrato se genera en un sistema que no registra metadatos verificables. El pagaré se firma con una firma electrónica simple — un clic, un checkbox, o a lo mucho un OTP enviado por SMS — sin constancia de tiempo certificada, sin evidencia de biometría facial, sin sellado NOM-151. El expediente queda en un PDF en algún servidor, sin cadena de custodia auditable.
      </p>

      <p className="text-gray-700 leading-relaxed mb-6">
        Y ese expediente, en caso de impugnación, no tiene defensa técnica.
      </p>

      <div
        className="rounded-xl p-6 mb-8 border"
        style={{
          background: "rgba(0,102,255,0.06)",
          borderColor: "rgba(0,102,255,0.2)",
        }}
      >
        <p className="text-gray-700 leading-relaxed font-medium">
          <strong>El problema no es que alguien haya actuado de mala fe.</strong> Es que el proceso nunca fue diseñado para ser defendible. Y en el entorno regulatorio y jurisprudencial actual, esa distinción ya no alcanza para proteger a la institución.
        </p>
      </div>

      <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">
        Por qué el contexto regulatorio hace esto urgente, no opcional
      </h2>

      <p className="text-gray-700 leading-relaxed mb-6">
        Durante años, el marco legal en México fue suficientemente ambiguo como para que una firma electrónica simple pudiera "pasar". Los jueces tenían poca experiencia con documentos digitales. Los litigantes tampoco sabían muy bien qué exigir.
      </p>

      <p className="text-gray-700 leading-relaxed mb-6">
        Eso está cambiando.
      </p>

      <p className="text-gray-700 leading-relaxed mb-6">
        El Código de Comercio y la Ley de Firma Electrónica Avanzada ya establecen jerarquías claras entre tipos de firma. La NOM-151-SCFI-2016 define el estándar para preservación de mensajes de datos y tiene efectos directos sobre la admisibilidad de documentos digitales como prueba. Y más recientemente, el Poder Judicial ha comenzado a emitir criterios que elevan el estándar de lo que se considera evidencia válida en contratos digitales.
      </p>

      <div
        className="rounded-xl p-6 mb-8 border"
        style={{
          background: "rgba(251,191,36,0.07)",
          borderColor: "rgba(251,191,36,0.25)",
        }}
      >
        <p className="text-gray-700 leading-relaxed">
          <strong className="text-amber-800">Nota regulatoria:</strong> Las reformas recientes a la LFPIORPI y las circulares de la CNBV sobre expedientes digitales aumentan la exposición de instituciones que no puedan demostrar trazabilidad en sus procesos de firma. No es solo un riesgo legal — es un riesgo de sanción regulatoria directa.
        </p>
      </div>

      <p className="text-gray-700 leading-relaxed mb-6">
        Para las instituciones crediticias, esto se traduce en una exposición concreta: si un acreditado impugna su firma o niega haber aceptado los términos de un contrato, la carga de la prueba recae sobre la institución. Y si el expediente no puede acreditar cuándo se firmó, quién lo firmó, y con qué nivel de autenticación, la institución puede perder — aunque tenga razón en el fondo.
      </p>

      <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">
        Lo que los tribunales ya están exigiendo
      </h2>

      <p className="text-gray-700 leading-relaxed mb-6">
        Dos tesis recientes del Poder Judicial Federal marcan la dirección con claridad:
      </p>

      <div className="grid gap-4 mb-8">
        <div
          className="rounded-xl p-6 border"
          style={{
            background: "rgba(255,255,255,0.04)",
            borderColor: "rgba(255,255,255,0.1)",
          }}
        >
          <p className="text-xs font-bold tracking-widest uppercase mb-2" style={{ color: "#1ECAD3" }}>
            Tesis I.2o.C.38 C
          </p>
          <p className="text-gray-700 leading-relaxed text-sm">
            Establece que para que un documento digital tenga plena validez probatoria, debe poder acreditarse la integridad del mensaje de datos desde su creación. Esto implica metadatos verificables, sellado de tiempo, y mecanismos que permitan detectar cualquier alteración posterior.
          </p>
        </div>
        <div
          className="rounded-xl p-6 border"
          style={{
            background: "rgba(255,255,255,0.04)",
            borderColor: "rgba(255,255,255,0.1)",
          }}
        >
          <p className="text-xs font-bold tracking-widest uppercase mb-2" style={{ color: "#1ECAD3" }}>
            Tesis I.11o.C.82 C
          </p>
          <p className="text-gray-700 leading-relaxed text-sm">
            Señala que la firma electrónica simple no es equivalente a la firma autógrafa en términos de atribución. Para que un tribunal pueda atribuir una firma digital a una persona específica, debe existir evidencia de autenticación que vaya más allá del acceso a un dispositivo o número telefónico.
          </p>
        </div>
      </div>

      <p className="text-gray-700 leading-relaxed mb-6">
        Ninguna de estas tesis es sorpresiva. Son la consecuencia lógica de aplicar principios de derecho probatorio a la realidad de los documentos digitales. Pero para muchas instituciones, representan una brecha enorme entre lo que tienen hoy y lo que necesitarían para defenderse mañana.
      </p>

      <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">
        La distinción que más importa
      </h2>

      <p className="text-gray-700 leading-relaxed mb-6">
        Cuando hablo con equipos de operaciones o legales en instituciones crediticias, la confusión más frecuente es entre <strong>tener un documento firmado</strong> y <strong>tener un expediente defendible</strong>.
      </p>

      <p className="text-gray-700 leading-relaxed mb-4">
        Un expediente defendible no es solo el PDF. Es el conjunto de evidencias que permiten demostrar:
      </p>

      <ul className="space-y-3 mb-8">
        {[
          "Quién firmó (verificación de identidad con biometría facial y documento oficial)",
          "Cuándo firmó (sello de tiempo certificado bajo NOM-151, no el timestamp del servidor)",
          "Qué firmó (hash del documento en el momento exacto de la firma, no una versión posterior)",
          "Que lo hizo de forma libre e informada (evidencia del flujo de consentimiento, no solo el resultado)",
          "Que el documento no fue alterado después (cadena de custodia verificable, auditoría de accesos)",
        ].map((item, i) => (
          <li key={i} className="flex items-start gap-3 text-gray-700">
            <span
              className="mt-0.5 w-5 h-5 rounded-full flex items-center justify-center shrink-0 text-xs font-bold"
              style={{ background: "rgba(30,202,211,0.15)", color: "#1ECAD3" }}
            >
              {i + 1}
            </span>
            <span>{item}</span>
          </li>
        ))}
      </ul>

      <div
        className="rounded-xl p-6 mb-8 border"
        style={{
          background: "rgba(0,102,255,0.06)",
          borderColor: "rgba(0,102,255,0.2)",
        }}
      >
        <p className="text-gray-700 leading-relaxed">
          La mayoría de las instituciones tienen el punto 1 parcialmente cubierto. Muy pocas tienen los puntos 2 al 5 documentados de forma que pueda presentarse como evidencia ante un tribunal.
        </p>
      </div>

      <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">
        Lo que me parece más importante decir
      </h2>

      <p className="text-gray-700 leading-relaxed mb-6">
        No escribo esto para alarmar. Lo escribo porque creo que hay una ventana de tiempo — que se está cerrando — en la que las instituciones pueden hacer esta corrección de forma proactiva, sin esperar a que un litigio les muestre la vulnerabilidad.
      </p>

      <p className="text-gray-700 leading-relaxed mb-6">
        El problema no es técnico en su origen. Es de diseño institucional. Se asumió que el proceso de firma era un trámite administrativo, no un acto jurídico que tendría que sostenerse bajo escrutinio. Y mientras ese supuesto no se corrija — mientras el estándar del expediente no se eleve — la exposición crece con cada contrato que se firma.
      </p>

      <p className="text-gray-700 leading-relaxed mb-6">
        La buena noticia es que la solución existe. No requiere reemplazar todos los sistemas. Requiere incorporar, en el flujo de firma, los componentes que hacen que el expediente sea defendible: verificación biométrica, sellado NOM-151, constancia de integridad del documento. Y hacerlo de forma que no añada fricción al cliente — porque eso también es posible.
      </p>

      <p className="text-gray-700 leading-relaxed mb-8">
        Lo que no es posible es seguir asumiendo que el proceso actual es suficiente. Los tribunales ya están diciendo que no lo es. Y el regulador, con el incremento sostenido de sanciones, también.
      </p>

      <div
        className="rounded-xl p-6 mb-10 border"
        style={{
          background: "rgba(30,202,211,0.06)",
          borderColor: "rgba(30,202,211,0.2)",
        }}
      >
        <div className="flex items-start gap-4">
          <div
            className="w-12 h-12 rounded-full shrink-0 flex items-center justify-center text-sm font-bold text-white"
            style={{ background: "linear-gradient(135deg, #1ECAD3 0%, #0066ff 100%)" }}
          >
            AQ
          </div>
          <div>
            <p className="font-bold text-gray-900 text-sm">Arianna Quezada</p>
            <p className="text-xs mb-3" style={{ color: "rgba(255,255,255,0.5)" }}>
              CEO · JAAK
            </p>
            <p className="text-gray-700 text-sm leading-relaxed">
              Lleva más de una década trabajando en la intersección entre tecnología, regulación financiera e identidad digital en Latinoamérica. En JAAK lidera el desarrollo de infraestructura de confianza para instituciones del sector regulado.
            </p>
          </div>
        </div>
      </div>

      <div className="mb-10">
        <p
          className="text-xs font-bold tracking-widest uppercase mb-4"
          style={{ color: "rgba(255,255,255,0.3)" }}
        >
          Fuentes
        </p>
        <ol className="space-y-2 text-sm text-gray-700 list-decimal list-inside">
          <li>
            Tesis I.2o.C.38 C — Segundo Tribunal Colegiado en Materia Civil del Primer Circuito. Semanario Judicial de la Federación.
          </li>
          <li>
            Tesis I.11o.C.82 C — Décimo Primer Tribunal Colegiado en Materia Civil del Primer Circuito. Semanario Judicial de la Federación.
          </li>
          <li>
            NOM-151-SCFI-2016 — Requisitos que deben observarse para la conservación de mensajes de datos y digitalización de documentos. Diario Oficial de la Federación.
          </li>
          <li>
            Ley de Firma Electrónica Avanzada — Cámara de Diputados del H. Congreso de la Unión, México.
          </li>
          <li>
            CNBV — Informe de sanciones PLD 2025. Comisión Nacional Bancaria y de Valores.
          </li>
        </ol>
      </div>

      <div className="mt-12 flex flex-wrap gap-4">
        <a
          href="/contacto"
          className="inline-flex items-center gap-2 px-6 py-3 rounded-lg font-semibold text-sm text-white transition-all duration-200"
          style={{ background: "#1ECAD3", color: "#0a0f1e" }}
        >
          Hablar con un especialista
        </a>
        <a
          href="/signa"
          className="inline-flex items-center gap-2 px-6 py-3 rounded-lg font-semibold text-sm transition-all duration-200 border"
          style={{ borderColor: "rgba(255,255,255,0.2)", color: "rgba(255,255,255,0.85)" }}
        >
          Conocer Signa →
        </a>
      </div>
    </ArticleLayout>
  );
}
