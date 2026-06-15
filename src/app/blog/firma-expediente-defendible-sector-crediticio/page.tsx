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
    publishedTime: "2026-06-15T00:00:00Z",
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
  datePublished: "2026-06-15T00:00:00Z",
  author: {
    "@type": "Person",
    name: "Arianna Quezada",
    jobTitle: "CEO y cofundadora",
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
    "CONDUSEF supervisión 2025",
    "CNBV UIF",
  ],
};

export default function ArticleFirmaExpediente() {
  return (
    <ArticleLayout
      title="Lo que más me preocupa del sector crediticio en México no es el fraude que entra. Es el que ya está adentro."
      subtitle="Las uniones de crédito verifican quién entra. Pero el contrato, el pagaré, la firma — muchas veces no pueden defenderse en un juicio. Arianna Quezada, CEO de JAAK, analiza la brecha que el nuevo marco jurisprudencial ya no permite ignorar."
      category="Compliance"
      date="15 de junio, 2026"
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
      <p className="text-sm font-semibold mb-8" style={{ color: "#1ECAD3" }}>
        Por Arianna Quezada, CEO y cofundadora de JAAK
      </p>

      <p className="text-gray-700 text-lg leading-relaxed mb-6">
        Hace unas semanas, la CONDUSEF publicó los resultados de su supervisión 2025 al producto de
        crédito de habilitación o avío en uniones de crédito. El dato fue contundente: 6 de 8
        entidades evaluadas reprobaron en materia de transparencia financiera.
      </p>

      <p className="text-gray-700 leading-relaxed mb-6">
        No me sorprendió el número. Me sorprendió lo que revela sobre cómo muchas instituciones
        financieras entienden el riesgo.
      </p>

      <p className="text-gray-700 leading-relaxed mb-6">
        Porque cuando una entidad falla en transparencia ante el regulador, la conversación suele
        girar hacia sus contratos, sus comisiones, sus procesos de atención. Rara vez se pregunta
        algo más profundo: si esa entidad llegara a un litigio sobre alguno de esos contratos,
        ¿podría demostrar quién los firmó?
      </p>

      <p className="text-gray-700 leading-relaxed mb-6">
        En mi experiencia trabajando con instituciones reguladas en México, esa es la pregunta que
        más se evita. Y la que más cuesta cuando finalmente llega.
      </p>

      <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">
        La fortaleza con la puerta trasera abierta
      </h2>

      <p className="text-gray-700 leading-relaxed mb-6">
        Hay un patrón que he visto repetirse. Una institución invierte en su proceso de onboarding:
        valida el INE, implementa reconocimiento facial, consulta listas negras. Hace todo bien en
        la entrada.
      </p>

      <p className="text-gray-700 leading-relaxed mb-6">
        Pero al final del proceso — el contrato de crédito, el pagaré, el expediente del socio —
        el cierre es una firma simple. Un clic. Una imagen en un PDF.
      </p>

      <div
        className="rounded-xl p-6 mb-8 border"
        style={{
          background: "rgba(0,102,255,0.06)",
          borderColor: "rgba(0,102,255,0.2)",
        }}
      >
        <p className="text-gray-700 leading-relaxed font-medium">
          Construyeron una fortaleza. Y dejaron la puerta trasera abierta.
        </p>
      </div>

      <p className="text-gray-700 leading-relaxed mb-6">
        El problema no aparece el día que se firma. Aparece el día que ese socio niega haber
        firmado, o cuando llega una auditoría de la CNBV, o cuando el expediente tiene que
        sostenerse en un juicio ejecutivo mercantil.
      </p>

      <p className="text-gray-700 leading-relaxed mb-6">
        En ese momento, la pregunta no es si verificaste la identidad al inicio del proceso.
      </p>

      <p className="text-gray-700 leading-relaxed mb-6 font-semibold">
        La pregunta es: ¿puedes demostrar quién firmó al final?
      </p>

      <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">
        Por qué el contexto regulatorio hace esto urgente, no opcional
      </h2>

      <p className="text-gray-700 leading-relaxed mb-6">
        En 2026, las uniones de crédito están bajo una presión regulatoria que no tiene precedente
        reciente. Las cuotas de supervisión de la CNBV aumentaron hasta un 204% para algunas
        entidades, según reportó El Economista en marzo de este año citando al propio presidente de
        ConUnión. La CNBV y la UIF formalizaron en marzo un convenio de colaboración para fortalecer
        la supervisión con enfoque en riesgos. Y el Acuerdo CNBV 2026 impulsa la digitalización
        completa de los expedientes KYC y los reportes PLD.
      </p>

      <p className="text-gray-700 leading-relaxed mb-6">
        El mensaje del regulador es consistente: los expedientes digitales ya no son una opción
        moderna. Son la evidencia que se va a pedir.
      </p>

      <div
        className="rounded-xl p-6 mb-8 border"
        style={{
          background: "rgba(251,191,36,0.07)",
          borderColor: "rgba(251,191,36,0.25)",
        }}
      >
        <p className="text-gray-700 leading-relaxed">
          <strong className="text-amber-800">Lo que no siempre se dice:</strong> un expediente
          digital incompleto puede ser peor que ninguno. Porque crea la ilusión de cumplimiento
          sin la sustancia que lo respalda.
        </p>
      </div>

      <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">
        Lo que los tribunales ya están exigiendo
      </h2>

      <p className="text-gray-700 leading-relaxed mb-6">
        En octubre de 2025 se publicaron dos tesis aisladas que cambian la conversación para
        cualquier institución que use pagarés digitales:
      </p>

      <div className="grid gap-4 mb-8">
        <div
          className="rounded-xl p-6 border"
          style={{
            background: "rgba(30,202,211,0.05)",
            borderColor: "rgba(30,202,211,0.2)",
          }}
        >
          <p className="text-xs font-bold tracking-widest uppercase mb-2" style={{ color: "#1ECAD3" }}>
            Tesis I.2o.C.38 C (11a.)
          </p>
          <p className="text-gray-700 leading-relaxed text-sm">
            Establece que el pagaré digital debe suscribirse con firma electrónica avanzada
            generada por un prestador de servicios de certificación para producir los efectos de
            un título de crédito. No es interpretable. No hay zona gris.
          </p>
        </div>
        <div
          className="rounded-xl p-6 border"
          style={{
            background: "rgba(30,202,211,0.05)",
            borderColor: "rgba(30,202,211,0.2)",
          }}
        >
          <p className="text-xs font-bold tracking-widest uppercase mb-2" style={{ color: "#1ECAD3" }}>
            Tesis I.11o.C.82 C (11a.)
          </p>
          <p className="text-gray-700 leading-relaxed text-sm">
            Establece que el endoso del pagaré digital debe incluirse en el propio mensaje de
            datos, no como documento separado. Ambas publicadas en la Gaceta del Semanario
            Judicial de la Federación. Ambas vigentes.
          </p>
        </div>
      </div>

      <p className="text-gray-700 leading-relaxed mb-6">
        Lo que esto significa en términos prácticos: una firma que no cumpla FEA + NOM-151 ya
        tiene criterio judicial en contra. Y una institución que lleva años acumulando contratos
        con firma simple está acumulando, también, un pasivo de evidencia que no puede defender.
      </p>

      <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">
        La distinción que más importa
      </h2>

      <p className="text-gray-700 leading-relaxed mb-6">
        Hay algo que aprendí al construir JAAK y que hoy es central en cómo pensamos el problema:
        lo que protege una operación no es el PDF. Es el expediente.
      </p>

      <p className="text-gray-700 leading-relaxed mb-4">
        Un expediente auditable no es una carpeta de archivos. Es el conjunto de evidencia que
        permite reconstruir el proceso completo ante quien lo cuestione:
      </p>

      <ul className="space-y-3 mb-6">
        {[
          "El documento firmado",
          "La constancia NOM-151",
          "El registro biométrico",
          "Los metadatos de cada paso con su timestamp",
          "El resultado de cada verificación",
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
          Todo vinculado. Todo con integridad técnica. Todo técnicamente imposible de alterar sin
          que se detecte. La diferencia entre tener razón en un conflicto y poder demostrarla no
          está en el contrato. Está en ese expediente.
        </p>
      </div>

      <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">
        Lo que me parece más importante decir
      </h2>

      <p className="text-gray-700 leading-relaxed mb-6">
        Las instituciones que hoy enfrentan problemas ante una auditoría o un litigio no fallaron
        por usar tecnología. Fallaron porque en algún punto del camino alguien tomó una decisión
        de baja fricción — una firma simple, un PDF sin sello, un proceso de onboarding
        desconectado del cierre — que dejó un hueco en el expediente.
      </p>

      <p className="text-gray-700 leading-relaxed mb-6">
        Ese hueco es evitable. Y dado el ritmo al que se está endureciendo el marco regulatorio y
        jurisprudencial en México, el costo de no resolverlo va a seguir subiendo.
      </p>

      <p className="text-gray-700 leading-relaxed mb-8 font-semibold">
        Verificar quién entró y garantizar quién firmó son dos momentos del mismo proceso. Los dos
        tienen que ser igual de sólidos.
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
            <p className="text-xs mb-3 text-gray-500">CEO y cofundadora · JAAK</p>
            <p className="text-gray-700 text-sm leading-relaxed">
              Arianna Quezada es cofundadora y CEO de JAAK, empresa mexicana de verificación de
              identidad biométrica y firma electrónica. Si quieres conocer cómo construir un
              expediente defendible para tu institución, visita jaak.ai.
            </p>
          </div>
        </div>
      </div>

      <div className="mb-10">
        <p className="text-xs font-bold tracking-widest uppercase mb-4 text-gray-400">
          Fuentes
        </p>
        <ol className="space-y-2 text-sm text-gray-600 list-decimal list-inside">
          <li>
            CONDUSEF, Supervisión 2025 — Crédito de habilitación o avío en uniones de crédito
            (mayo 2026)
          </li>
          <li>
            El Economista / Yahoo Noticias, &ldquo;Cuotas de supervisión de la CNBV pegan a
            uniones de crédito en 2026&rdquo; (marzo 2026)
          </li>
          <li>
            Gaceta del Semanario Judicial de la Federación, Tesis I.2o.C.38 C (11a.) y
            I.11o.C.82 C (11a.), Libro 2, Tomo IV (octubre 2025)
          </li>
          <li>
            CNBV-UIF, Convenio de Colaboración para prevención de lavado de dinero (marzo 2026)
          </li>
          <li>
            Acuerdo CNBV 2026, simplificación PLD/FT y expedientes digitales (DOF)
          </li>
        </ol>
      </div>

      <div className="mt-12 flex flex-wrap gap-4">
        <a
          href="/contacto"
          className="inline-flex items-center gap-2 px-6 py-3 rounded-lg font-semibold text-sm transition-all duration-200"
          style={{ background: "#1ECAD3", color: "#0a0f1e" }}
        >
          Hablar con un especialista
        </a>
        <a
          href="/signa"
          className="inline-flex items-center gap-2 px-6 py-3 rounded-lg font-semibold text-sm transition-all duration-200 border"
          style={{ borderColor: "rgba(0,0,0,0.15)", color: "#374151" }}
        >
          Conocer Signa →
        </a>
      </div>
    </ArticleLayout>
  );
}
