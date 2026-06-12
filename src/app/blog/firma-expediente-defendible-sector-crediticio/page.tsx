import ArticleLayout from "../ArticleLayout";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Lo que más me preocupa del sector crediticio en México no es el fraude que entra | JAAK",
  description:
    "Las uniones de crédito verifican quién entra. Pero el contrato, el pagaré, la firma — muchas veces no pueden defenderse en un juicio. Arianna Quezada, CEO de JAAK, analiza la brecha que el nuevo marco jurisprudencial ya no permite ignorar.",
  keywords: [
    "firma electrónica avanzada",
    "uniones de crédito",
    "CNBV",
    "NOM-151",
    "expediente digital",
    "pagaré digital",
    "FEA",
    "cumplimiento regulatorio",
    "CONDUSEF",
    "sector crediticio México",
  ],
  openGraph: {
    title: "Lo que más me preocupa del sector crediticio en México no es el fraude que entra. Es el que ya está adentro.",
    description:
      "Las uniones de crédito verifican quién entra. Pero el contrato, el pagaré, la firma — muchas veces no pueden defenderse en un juicio. Análisis de Arianna Quezada, CEO de JAAK.",
    type: "article",
    publishedTime: "2026-06-12",
    authors: ["Arianna Quezada"],
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline:
    "Lo que más me preocupa del sector crediticio en México no es el fraude que entra. Es el que ya está adentro.",
  description:
    "Las uniones de crédito verifican quién entra. Pero el contrato, el pagaré, la firma — muchas veces no pueden defenderse en un juicio. Arianna Quezada, CEO de JAAK, analiza la brecha que el nuevo marco jurisprudencial ya no permite ignorar.",
  image: "https://jaak.ai/images/blog/firma-expediente-crediticio.jpg",
  datePublished: "2026-06-12",
  dateModified: "2026-06-12",
  author: {
    "@type": "Person",
    name: "Arianna Quezada",
    jobTitle: "CEO y cofundadora",
    worksFor: {
      "@type": "Organization",
      name: "JAAK",
      url: "https://jaak.ai",
    },
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
    "@id": "https://jaak.ai/blog/firma-expediente-defendible-sector-crediticio",
  },
  keywords:
    "firma electrónica avanzada, uniones de crédito, CNBV, NOM-151, expediente digital, pagaré digital, FEA, cumplimiento regulatorio, CONDUSEF",
  inLanguage: "es-MX",
};

export default function FirmaExpedienteDefendibleSectorCrediticio() {
  return (
    <ArticleLayout
      title="Lo que más me preocupa del sector crediticio en México no es el fraude que entra. Es el que ya está adentro."
      subtitle="Las uniones de crédito verifican quién entra. Pero el contrato, el pagaré, la firma — muchas veces no pueden defenderse en un juicio. Análisis de una brecha que el nuevo marco jurisprudencial ya no permite ignorar."
      category="Compliance"
      date="12 de junio, 2026"
      readTime="7 min"
      slug="firma-expediente-defendible-sector-crediticio"
      image="/images/blog/firma-expediente-crediticio.jpg"
      imageAlt="Ejecutiva revisando expedientes digitales de contratos de crédito en México"
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
      <p className="text-xl text-gray-600 leading-relaxed mb-8">
        Hace unas semanas, la CONDUSEF publicó los resultados de su supervisión 2025 al producto de
        crédito de habilitación o avío en uniones de crédito. El dato fue contundente: 6 de 8
        entidades evaluadas reprobaron en materia de transparencia financiera.
      </p>

      <p className="text-gray-600 leading-relaxed mb-4">
        No me sorprendió el número. Me sorprendió lo que revela sobre cómo muchas instituciones
        financieras entienden el riesgo.
      </p>

      <p className="text-gray-600 leading-relaxed mb-4">
        Porque cuando una entidad falla en transparencia ante el regulador, la conversación suele
        girar hacia sus contratos, sus comisiones, sus procesos de atención. Rara vez se pregunta
        algo más profundo: si esa entidad llegara a un litigio sobre alguno de esos contratos,
        ¿podría demostrar quién los firmó?
      </p>

      <p className="text-gray-600 leading-relaxed mb-4">
        En mi experiencia trabajando con instituciones reguladas en México, esa es la pregunta que
        más se evita. Y la que más cuesta cuando finalmente llega.
      </p>

      <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-6">
        La fortaleza con la puerta trasera abierta
      </h2>

      <p className="text-gray-600 leading-relaxed mb-4">
        Hay un patrón que he visto repetirse. Una institución invierte en su proceso de onboarding:
        valida el INE, implementa reconocimiento facial, consulta listas negras. Hace todo bien en
        la entrada.
      </p>

      <p className="text-gray-600 leading-relaxed mb-4">
        Pero al final del proceso — el contrato de crédito, el pagaré, el expediente del socio — el
        cierre es una firma simple. Un clic. Una imagen en un PDF.
      </p>

      <div className="bg-[#0066ff]/5 border-l-4 border-[#0066ff] p-6 my-8">
        <p className="text-gray-700 font-medium mb-1">El patrón más costoso del sector:</p>
        <p className="text-gray-600">
          Construyeron una fortaleza. Y dejaron la puerta trasera abierta.
        </p>
      </div>

      <p className="text-gray-600 leading-relaxed mb-4">
        El problema no aparece el día que se firma. Aparece el día que ese socio niega haber
        firmado, o cuando llega una auditoría de la CNBV, o cuando el expediente tiene que
        sostenerse en un juicio ejecutivo mercantil.
      </p>

      <p className="text-gray-600 leading-relaxed mb-4">
        En ese momento, la pregunta no es si verificaste la identidad al inicio del proceso.
      </p>

      <p className="text-gray-600 leading-relaxed mb-8">
        La pregunta es: <strong>¿puedes demostrar quién firmó al final?</strong>
      </p>

      <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-6">
        Por qué el contexto regulatorio hace esto urgente, no opcional
      </h2>

      <p className="text-gray-600 leading-relaxed mb-4">
        En 2026, las uniones de crédito están bajo una presión regulatoria que no tiene precedente
        reciente. Las cuotas de supervisión de la CNBV aumentaron hasta un{" "}
        <strong>204% para algunas entidades</strong>, según reportó El Economista en marzo de este
        año citando al propio presidente de ConUnión. La CNBV y la UIF formalizaron en marzo un
        convenio de colaboración para fortalecer la supervisión con enfoque en riesgos. Y el Acuerdo
        CNBV 2026 impulsa la digitalización completa de los expedientes KYC y los reportes PLD.
      </p>

      <p className="text-gray-600 leading-relaxed mb-4">
        El mensaje del regulador es consistente: los expedientes digitales ya no son una opción
        moderna. Son la evidencia que se va a pedir.
      </p>

      <div className="bg-amber-50 border-l-4 border-amber-400 p-6 my-8">
        <p className="text-amber-800 font-medium mb-2">Punto crítico:</p>
        <p className="text-amber-700">
          Un expediente digital incompleto puede ser peor que ninguno. Porque crea la ilusión de
          cumplimiento sin la sustancia que lo respalda.
        </p>
      </div>

      <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-6">
        Lo que los tribunales ya están exigiendo
      </h2>

      <p className="text-gray-600 leading-relaxed mb-4">
        En octubre de 2025 se publicaron dos tesis aisladas que cambian la conversación para
        cualquier institución que use pagarés digitales:
      </p>

      <div className="space-y-4 my-8">
        <div className="bg-gray-50 rounded-xl p-6">
          <p className="font-bold text-gray-900 mb-2">
            Tesis I.2o.C.38 C (11a.)
          </p>
          <p className="text-gray-600 leading-relaxed">
            El pagaré digital debe suscribirse con <strong>firma electrónica avanzada generada
            por un prestador de servicios de certificación</strong> para producir los efectos de
            un título de crédito. No es interpretable. No hay zona gris.
          </p>
        </div>
        <div className="bg-gray-50 rounded-xl p-6">
          <p className="font-bold text-gray-900 mb-2">
            Tesis I.11o.C.82 C (11a.)
          </p>
          <p className="text-gray-600 leading-relaxed">
            El endoso del pagaré digital debe incluirse en el{" "}
            <strong>propio mensaje de datos</strong>, no como documento separado.
          </p>
        </div>
      </div>

      <p className="text-gray-600 leading-relaxed mb-4">
        Ambas publicadas en la Gaceta del Semanario Judicial de la Federación. Ambas vigentes.
      </p>

      <p className="text-gray-600 leading-relaxed mb-4">
        Lo que esto significa en términos prácticos: una firma que no cumpla{" "}
        <strong>FEA + NOM-151</strong> ya tiene criterio judicial en contra. Y una institución que
        lleva años acumulando contratos con firma simple está acumulando, también, un pasivo de
        evidencia que no puede defender.
      </p>

      <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-6">
        La distinción que más importa
      </h2>

      <p className="text-gray-600 leading-relaxed mb-4">
        Hay algo que aprendí al construir JAAK y que hoy es central en cómo pensamos el problema:{" "}
        <strong>lo que protege una operación no es el PDF. Es el expediente.</strong>
      </p>

      <p className="text-gray-600 leading-relaxed mb-4">
        Un expediente auditable no es una carpeta de archivos. Es el conjunto de evidencia que
        permite reconstruir el proceso completo ante quien lo cuestione:
      </p>

      <ul className="list-disc pl-6 mb-6 space-y-2 text-gray-600">
        <li>El documento firmado con FEA</li>
        <li>La constancia NOM-151 con sello de tiempo certificado</li>
        <li>El registro biométrico vinculado al firmante</li>
        <li>Los metadatos de cada paso con su timestamp</li>
        <li>El resultado de cada verificación de identidad</li>
      </ul>

      <p className="text-gray-600 leading-relaxed mb-4">
        Todo vinculado. Todo con integridad técnica. Todo técnicamente imposible de alterar sin que
        se detecte.
      </p>

      <div className="bg-[#0066ff]/5 border-l-4 border-[#0066ff] p-6 my-8">
        <p className="text-gray-700 font-medium mb-2">La distinción clave:</p>
        <p className="text-gray-600">
          La diferencia entre tener razón en un conflicto y poder demostrarla no está en el
          contrato. Está en ese expediente.
        </p>
      </div>

      <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-6">
        Lo que me parece más importante decir
      </h2>

      <p className="text-gray-600 leading-relaxed mb-4">
        Las instituciones que hoy enfrentan problemas ante una auditoría o un litigio no fallaron
        por usar tecnología. Fallaron porque en algún punto del camino alguien tomó una decisión de
        baja fricción — una firma simple, un PDF sin sello, un proceso de onboarding desconectado
        del cierre — que dejó un hueco en el expediente.
      </p>

      <p className="text-gray-600 leading-relaxed mb-4">
        Ese hueco es evitable. Y dado el ritmo al que se está endureciendo el marco regulatorio y
        jurisprudencial en México, el costo de no resolverlo va a seguir subiendo.
      </p>

      <p className="text-gray-600 leading-relaxed mb-8">
        Verificar quién entró y garantizar quién firmó son dos momentos del mismo proceso. Los dos
        tienen que ser igual de sólidos.
      </p>

      <div className="bg-gray-50 rounded-xl p-6 my-8">
        <p className="font-bold text-gray-900 mb-2">Arianna Quezada</p>
        <p className="text-gray-600 text-sm leading-relaxed">
          Cofundadora y CEO de JAAK, empresa mexicana de verificación de identidad biométrica y
          firma electrónica. Si quieres conocer cómo construir un expediente defendible para tu
          institución,{" "}
          <a href="/contacto" className="text-[#0066ff] font-medium hover:underline">
            contáctanos en jaak.ai
          </a>
          .
        </p>
      </div>

      <h3 className="text-lg font-bold text-gray-900 mt-10 mb-4">Fuentes</h3>
      <ul className="list-disc pl-6 space-y-2 text-gray-600 text-sm">
        <li>
          CONDUSEF, <em>Supervisión 2025 — Crédito de habilitación o avío en uniones de crédito</em>{" "}
          (mayo 2026)
        </li>
        <li>
          El Economista / Yahoo Noticias,{" "}
          <em>"Cuotas de supervisión de la CNBV pegan a uniones de crédito en 2026"</em> (marzo
          2026)
        </li>
        <li>
          Gaceta del Semanario Judicial de la Federación, Tesis I.2o.C.38 C (11a.) y I.11o.C.82 C
          (11a.), Libro 2, Tomo IV (octubre 2025)
        </li>
        <li>
          CNBV-UIF, <em>Convenio de Colaboración para prevención de lavado de dinero</em> (marzo
          2026)
        </li>
        <li>
          Acuerdo CNBV 2026, <em>simplificación PLD/FT y expedientes digitales</em> (DOF)
        </li>
      </ul>

      <div className="mt-12 flex flex-wrap gap-4">
        <a
          href="/contacto"
          className="px-6 py-3 bg-[#0066ff] text-white font-bold rounded-lg hover:bg-[#0052cc] transition-all"
        >
          Hablar con un experto
        </a>
        <a
          href="/signa"
          className="px-6 py-3 bg-gray-100 text-gray-900 font-bold rounded-lg hover:bg-gray-200 transition-all"
        >
          Conocer Signa
        </a>
      </div>
    </ArticleLayout>
  );
}
