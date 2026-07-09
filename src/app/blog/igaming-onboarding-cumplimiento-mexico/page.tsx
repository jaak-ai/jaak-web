import ArticleLayout from "../ArticleLayout";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "iGaming en México: el onboarding ya no es solo registro, es cumplimiento | JAAK",
  description:
    "Los operadores de iGaming en México deben conectar lo que la ley exige con infraestructura capaz de demostrar cumplimiento en cada etapa del onboarding. Arianna Quezada, CEO de JAAK, analiza el reto.",
  keywords: [
    "iGaming México",
    "onboarding cumplimiento",
    "KYC iGaming",
    "juegos y apuestas México",
    "LFPIORPI actividades vulnerables",
    "verificación identidad iGaming",
    "PLD juegos apuestas",
    "onboarding regulado",
    "JAAK",
  ],
  openGraph: {
    title: "iGaming en México: el onboarding ya no es solo registro, es cumplimiento",
    description:
      "Los operadores de iGaming en México enfrentan un reto muy particular: conectar lo que la ley exige con infraestructura capaz de demostrar cumplimiento en cada etapa del onboarding.",
    type: "article",
    publishedTime: "2026-06-26",
    authors: ["Arianna Quezada"],
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline:
    "iGaming en México: el onboarding ya no es solo registro, es cumplimiento",
  description:
    "Los operadores de iGaming en México deben conectar lo que la ley exige con infraestructura capaz de demostrar cumplimiento en cada etapa del onboarding.",
  image: "https://jaak.ai/images/blog/igaming-onboarding-cumplimiento.png",
  datePublished: "2026-06-26",
  dateModified: "2026-06-26",
  author: {
    "@type": "Person",
    name: "Arianna Quezada",
    jobTitle: "CEO",
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
    "@id": "https://jaak.ai/blog/igaming-onboarding-cumplimiento-mexico",
  },
  keywords:
    "iGaming México, onboarding cumplimiento, KYC iGaming, juegos y apuestas, LFPIORPI, PLD, verificación identidad",
  inLanguage: "es-MX",
};

export default function IGamingOnboardingCumplimiento() {
  return (
    <ArticleLayout
      title="iGaming en México: el onboarding ya no es solo registro, es cumplimiento"
      subtitle="En México, los operadores de juegos y apuestas enfrentan un reto muy particular: no basta con tener una buena experiencia de registro. El verdadero reto está en conectar lo que la ley exige con una infraestructura capaz de demostrar cumplimiento en cada etapa del onboarding."
      category="Compliance"
      date="26 de junio, 2026"
      readTime="12 min"
      slug="igaming-onboarding-cumplimiento-mexico"
      image="/images/blog/igaming-onboarding-cumplimiento.png"
      imageAlt="iGaming en México: onboarding y cumplimiento regulatorio"
      jsonLd={jsonLd}
      relatedPosts={[
        {
          title: "¿Qué es KYC y cuándo es obligatorio en México?",
          slug: "que-es-kyc-cuando-es-obligatorio-mexico",
          category: "KYC",
        },
        {
          title: "Onboarding digital: De días a minutos sin sacrificar cumplimiento",
          slug: "onboarding-digital-rapido-cumplimiento",
          category: "Onboarding",
        },
        {
          title: "Mejores prácticas de compliance para empresas reguladas en México",
          slug: "mejores-practicas-compliance-mexico",
          category: "Compliance",
        },
      ]}
    >
      <p className="text-xl text-gray-600 leading-relaxed mb-8">
        Hace unos días participé en Stablecoin Conference LATAM 2026, un espacio donde se habló
        mucho de pagos, infraestructura financiera, nuevos modelos de operación y tecnología.
        Pero más allá del tema específico del evento, hubo una conversación que me parece cada vez
        más importante para cualquier industria digital que mueve dinero: la confianza.
      </p>

      <p className="text-gray-600 leading-relaxed mb-4">
        Cuando una operación crece, cuando los usuarios se multiplican y cuando las transacciones
        suceden en segundos, la pregunta ya no es solamente cómo escalar.
      </p>

      <p className="text-gray-600 leading-relaxed mb-4">
        La pregunta es cómo escalar sin perder control.
      </p>

      <p className="text-gray-600 leading-relaxed mb-8">
        Esa conversación conecta directamente con uno de los sectores en los que hoy estamos
        trabajando con especial atención en JAAK: iGaming. En México, los operadores de juegos y
        apuestas enfrentan un reto muy particular. No basta con tener una buena experiencia de
        registro. No basta con pedir una identificación. No basta con reducir fricción.
      </p>

      <div className="bg-indigo-500/5 border-l-4 border-indigo-500 p-6 my-8">
        <p className="text-gray-700 font-medium mb-2">En este artículo encontrarás:</p>
        <p className="text-gray-600">
          Un análisis sobre por qué el onboarding en iGaming es el primer filtro de riesgo, qué
          exige la regulación mexicana, cómo escalar con control ante picos de tráfico, y por qué
          la evidencia es parte de la infraestructura —no un trámite posterior.
        </p>
      </div>

      <p className="text-gray-600 leading-relaxed mb-4">
        El verdadero reto está en conectar lo que la ley exige con una infraestructura capaz de
        demostrar cumplimiento en cada etapa del onboarding.
      </p>

      <p className="text-gray-600 leading-relaxed mb-4">
        Porque en iGaming, la identidad no es un paso operativo.
      </p>

      <p className="text-gray-600 leading-relaxed mb-4 font-semibold text-gray-800">
        Es el punto de partida del cumplimiento.
      </p>

      <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-6">
        La ley no se cumple con intención. Se cumple con infraestructura.
      </h2>

      <p className="text-gray-600 leading-relaxed mb-4">
        En cualquier industria digital, la confianza suele hablarse como un valor. Pero en
        sectores regulados, la confianza también debe existir como evidencia.
      </p>

      <p className="text-gray-600 leading-relaxed mb-4">
        Esto es especialmente importante en iGaming, donde cada alta de usuario puede convertirse
        en una relación operativa, transaccional y regulatoria. Un jugador no es solamente un
        registro en una base de datos. Es una identidad que puede depositar, retirar, aceptar
        términos, participar en promociones, mover recursos, generar alertas y formar parte de
        procesos sujetos a revisión.
      </p>

      <p className="text-gray-600 leading-relaxed mb-4">
        Por eso, el onboarding no debería verse únicamente como una etapa de conversión.
      </p>

      <ul className="list-none pl-0 mb-6 space-y-3">
        <li className="flex items-start gap-3 text-gray-700">
          <span className="mt-1 w-2 h-2 rounded-full bg-[#0066ff] flex-shrink-0"></span>
          El onboarding es el primer filtro de riesgo.
        </li>
        <li className="flex items-start gap-3 text-gray-700">
          <span className="mt-1 w-2 h-2 rounded-full bg-[#0066ff] flex-shrink-0"></span>
          Es el primer punto de control.
        </li>
        <li className="flex items-start gap-3 text-gray-700">
          <span className="mt-1 w-2 h-2 rounded-full bg-[#0066ff] flex-shrink-0"></span>
          Es el momento en el que una plataforma decide si conoce realmente a la persona que está
          dejando entrar a su operación.
        </li>
      </ul>

      <p className="text-gray-600 leading-relaxed mb-4">
        Y en México, esa decisión no debería tomarse con procesos improvisados, evidencias
        dispersas o validaciones que no puedan sostenerse después.
      </p>

      <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-6">
        El problema no es verificar. Es poder demostrar que verificaste.
      </h2>

      <p className="text-gray-600 leading-relaxed mb-4">
        Muchas empresas creen que cumplir significa solicitar una identificación. Pero pedir una
        identificación no es lo mismo que verificar una identidad. Y verificar una identidad no
        es lo mismo que poder demostrar, meses después, cómo ocurrió ese proceso.
      </p>

      <p className="text-gray-600 leading-relaxed mb-4">
        Para un operador de iGaming, la pregunta crítica no es únicamente: <em>"¿El usuario pasó
        el KYC?"</em>
      </p>

      <div className="bg-gray-50 rounded-xl p-8 my-8">
        <p className="text-gray-700 font-semibold text-lg mb-4">
          La pregunta realmente importante es:
        </p>
        <p className="text-gray-600 italic">
          "¿Podemos demostrar quién era, qué validamos, cuándo ocurrió, qué evidencia conservamos
          y bajo qué proceso fue aprobado?"
        </p>
      </div>

      <p className="text-gray-600 leading-relaxed mb-4">
        Esa diferencia es central. Porque cuando hay una auditoría, una alerta, una revisión
        interna o una solicitud de información, el cumplimiento no se explica con intención.
        Se sostiene con evidencia.
      </p>

      <p className="text-gray-600 leading-relaxed mb-4">
        Una operación madura debería poder responder preguntas como:
      </p>

      <ul className="list-disc pl-6 mb-6 space-y-2 text-gray-600">
        <li>¿Quién abrió esta cuenta?</li>
        <li>¿Qué documento presentó?</li>
        <li>¿Se validó que fuera mayor de edad?</li>
        <li>¿Se verificó que el rostro correspondiera con la identidad presentada?</li>
        <li>¿Se consultaron listas de riesgo?</li>
        <li>¿Se generó un expediente?</li>
        <li>¿Se conservó la evidencia?</li>
        <li>¿El consentimiento quedó respaldado?</li>
        <li>¿El flujo fue consistente para miles de usuarios o solo para algunos casos?</li>
      </ul>

      <p className="text-gray-600 leading-relaxed mb-4">
        Si esas respuestas viven en sistemas distintos, proveedores distintos o archivos difíciles
        de reconstruir, la operación puede funcionar comercialmente, pero debilitarse
        regulatoriamente.
      </p>

      <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-6">
        El crecimiento del iGaming exige controles diseñados para alto volumen
      </h2>

      <p className="text-gray-600 leading-relaxed mb-4">
        En iGaming, el crecimiento no siempre ocurre de forma gradual. Puede venir por campañas
        de adquisición, cambios de proveedor, eventos deportivos, promociones, temporadas de alto
        tráfico o por el propio crecimiento del mercado. Cuando eso sucede, el onboarding se
        vuelve una prueba de infraestructura.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 my-8">
        <div className="bg-red-50 rounded-xl p-6 text-center">
          <p className="text-red-600 font-bold text-lg mb-2">Si el flujo es lento</p>
          <p className="text-gray-600 text-sm">los usuarios abandonan.</p>
        </div>
        <div className="bg-amber-50 rounded-xl p-6 text-center">
          <p className="text-amber-600 font-bold text-lg mb-2">Si el flujo es débil</p>
          <p className="text-gray-600 text-sm">el fraude entra.</p>
        </div>
        <div className="bg-purple-50 rounded-xl p-6 text-center">
          <p className="text-purple-600 font-bold text-lg mb-2">Si no genera evidencia</p>
          <p className="text-gray-600 text-sm">el cumplimiento queda incompleto.</p>
        </div>
      </div>

      <p className="text-gray-600 leading-relaxed mb-4">
        Por eso, las plataformas que buscan crecer en México no deberían preguntarse únicamente
        qué tan rápido pueden registrar usuarios. También deberían preguntarse:
      </p>

      <ul className="list-disc pl-6 mb-6 space-y-2 text-gray-600">
        <li>¿Podemos verificar miles de identidades sin perder control?</li>
        <li>¿Podemos prevenir multicuentas y abuso de bonos sin castigar al usuario legítimo?</li>
        <li>¿Podemos detectar señales de riesgo antes de que lleguen al retiro?</li>
        <li>¿Podemos conservar evidencia de cada decisión?</li>
        <li>¿Podemos responder ante cumplimiento, auditoría o autoridad sin reconstruir procesos manualmente?</li>
      </ul>

      <p className="text-gray-600 leading-relaxed mb-4">
        En operaciones de alto volumen, el riesgo no aparece solo cuando alguien intenta
        defraudar. También aparece cuando la empresa no puede explicar cómo tomó sus decisiones.
      </p>

      <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-6">
        Lo que la regulación mexicana nos obliga a mirar
      </h2>

      <p className="text-gray-600 leading-relaxed mb-4">
        México tiene un marco regulatorio particular para juegos y sorteos. Hay obligaciones
        claras, zonas de interpretación y expectativas operativas que no siempre están traducidas
        en procedimientos tecnológicos específicos. Eso no significa que los operadores puedan
        operar sin controles. Significa que deben construir controles suficientemente robustos
        para cumplir, adaptarse y demostrar.
      </p>

      <p className="text-gray-600 leading-relaxed mb-4">
        Desde la perspectiva del onboarding, hay tres grandes temas que los líderes de iGaming
        no deberían perder de vista.
      </p>

      <div className="space-y-6 my-8">
        <div className="bg-[#0066ff]/5 border border-[#0066ff]/20 rounded-xl p-6">
          <h3 className="text-lg font-bold text-gray-900 mb-3">
            1. Identificación del jugador
          </h3>
          <p className="text-gray-600">
            El{" "}
            <a
              href="https://www.diputados.gob.mx/LeyesBiblio/regley/Reg_LFJyS.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#0066ff] hover:underline"
            >
              Reglamento de la Ley Federal de Juegos y Sorteos
            </a>{" "}
            establece que los sistemas de control interno deben registrar al menos el número de
            cuenta e identidad del apostador, incluso en apuestas captadas vía Internet,
            telefónica o electrónica. La operación debe poder asociar una cuenta con una persona
            identificable. No basta con un correo electrónico o un número de teléfono.
          </p>
        </div>

        <div className="bg-[#0066ff]/5 border border-[#0066ff]/20 rounded-xl p-6">
          <h3 className="text-lg font-bold text-gray-900 mb-3">
            2. Prevención de operaciones con recursos de procedencia ilícita
          </h3>
          <p className="text-gray-600">
            La{" "}
            <a
              href="https://www.diputados.gob.mx/LeyesBiblio/pdf/LFPIORPI.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#0066ff] hover:underline"
            >
              LFPIORPI
            </a>{" "}
            considera las actividades vinculadas a juegos con apuesta, concursos o sorteos como
            actividades vulnerables. Eso obliga a diseñar controles para identificar clientes,
            detectar señales de riesgo, conservar información y responder a obligaciones PLD.
            El iGaming no solo procesa entretenimiento: también mueve recursos.
          </p>
        </div>

        <div className="bg-[#0066ff]/5 border border-[#0066ff]/20 rounded-xl p-6">
          <h3 className="text-lg font-bold text-gray-900 mb-3">
            3. Conservación y trazabilidad
          </h3>
          <p className="text-gray-600">
            El cumplimiento no termina cuando se aprueba el registro. En muchos casos, el
            verdadero valor está en poder recuperar la evidencia cuando sea necesario: quién fue
            verificado, qué información se obtuvo, qué validaciones ocurrieron y qué
            consentimiento quedó respaldado. La{" "}
            <a
              href="https://www.diputados.gob.mx/LeyesBiblio/pdf/LFPIORPI.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#0066ff] hover:underline"
            >
              LFPIORPI
            </a>{" "}
            establece requisitos de conservación de información y la posibilidad de visitas de
            verificación con sanciones ante incumplimiento.
          </p>
        </div>
      </div>

      <div className="bg-[#0E1133] rounded-xl p-8 my-8">
        <p className="text-white text-xl font-medium italic text-center">
          En JAAK, vemos estos tres puntos como parte de una misma conversación: Identidad,
          Riesgo y Evidencia. Separarlos puede generar fricción operativa. Integrarlos puede
          convertirse en una ventaja estratégica.
        </p>
      </div>

      <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-6">
        Para CEOs, CTOs, CISOs y oficiales de cumplimiento, el reto es el mismo
      </h2>

      <p className="text-gray-600 leading-relaxed mb-4">
        Cada rol lo mira desde un ángulo distinto, pero el problema es compartido.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-8">
        <div className="border border-gray-200 rounded-xl p-5">
          <p className="font-bold text-gray-900 mb-2">CEO</p>
          <p className="text-gray-600 text-sm">
            Escalar la operación sin aumentar la exposición regulatoria.
          </p>
        </div>
        <div className="border border-gray-200 rounded-xl p-5">
          <p className="font-bold text-gray-900 mb-2">CTO</p>
          <p className="text-gray-600 text-sm">
            Integrar infraestructura confiable, disponible y preparada para alto volumen.
          </p>
        </div>
        <div className="border border-gray-200 rounded-xl p-5">
          <p className="font-bold text-gray-900 mb-2">CISO</p>
          <p className="text-gray-600 text-sm">
            Proteger información sensible, reducir vectores de abuso y mantener control sobre
            procesos críticos.
          </p>
        </div>
        <div className="border border-gray-200 rounded-xl p-5">
          <p className="font-bold text-gray-900 mb-2">Oficial de Cumplimiento</p>
          <p className="text-gray-600 text-sm">
            Demostrar que la empresa conoce a sus usuarios, monitorea riesgos y conserva evidencia.
          </p>
        </div>
      </div>

      <p className="text-gray-600 leading-relaxed mb-4">
        El error sería pensar que estas son conversaciones separadas. En realidad, todas se
        encuentran en el onboarding. Porque ahí nace la relación con el usuario. Ahí se captura
        la identidad. Ahí se evalúa el riesgo. Ahí se obtiene consentimiento. Ahí se genera
        evidencia. Ahí empieza el expediente.
      </p>

      <p className="text-gray-600 leading-relaxed mb-4">
        Y si ese punto de entrada no está bien diseñado, todo lo que ocurre después se vuelve
        más difícil de defender.
      </p>

      <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-6">
        No todo KYC es igual para México
      </h2>

      <p className="text-gray-600 leading-relaxed mb-4">
        Una de las conversaciones más importantes que estamos teniendo en JAAK es cómo traducir
        la regulación mexicana en flujos concretos de operación. No se trata de prometer "KYC"
        como una funcionalidad genérica. Se trata de entender qué necesita una empresa que opera
        en México para construir una infraestructura defendible.
      </p>

      <p className="text-gray-600 leading-relaxed mb-4">
        Eso implica considerar:
      </p>

      <ul className="list-disc pl-6 mb-6 space-y-2 text-gray-600">
        <li>Validaciones de identidad alineadas al contexto local</li>
        <li>Biometría facial con fuentes mexicanas</li>
        <li>Consulta de listas de riesgo relevantes</li>
        <li>Expediente digital generado desde el primer paso</li>
        <li>Firma digital y consentimiento respaldado</li>
        <li>Conservación de evidencia integrada al flujo</li>
        <li>Procesos que puedan articularse con las áreas de cumplimiento y operación</li>
      </ul>

      <p className="text-gray-600 leading-relaxed mb-4">
        En iGaming, esta diferencia importa mucho. Una plataforma puede tener un registro rápido,
        pero no necesariamente un registro defendible. Puede tener validación documental, pero no
        necesariamente evidencia completa. Para operaciones de alto volumen, esa fragmentación
        se convierte en una debilidad.
      </p>

      <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-6">
        El fraude también escala
      </h2>

      <p className="text-gray-600 leading-relaxed mb-4">
        Cuando una plataforma crece, no solo atrae más jugadores legítimos. También atrae más
        intentos de fraude. En iGaming, los vectores pueden ser distintos: multicuentas, abuso
        de bonos, identidad sintética, uso de terceros, mulas de dinero, intentos de evasión de
        controles o patrones sospechosos asociados a depósitos y retiros.
      </p>

      <p className="text-gray-600 leading-relaxed mb-4">
        Por eso, el KYC no puede limitarse a una foto de documento. Un flujo robusto debe ayudar
        a responder:
      </p>

      <ul className="list-disc pl-6 mb-6 space-y-2 text-gray-600">
        <li>¿Esta persona es real?</li>
        <li>¿El documento corresponde con el rostro?</li>
        <li>¿La identidad tiene señales de riesgo?</li>
        <li>¿Hay coincidencias en listas relevantes?</li>
        <li>¿El comportamiento posterior es consistente con el perfil?</li>
        <li>¿La evidencia quedó disponible para revisión?</li>
      </ul>

      <div className="bg-gray-50 rounded-xl p-8 my-8">
        <p className="text-gray-700 font-semibold text-lg text-center">
          La meta no debería ser simplemente reducir fricción. La meta debería ser reducir
          fricción sin perder cumplimiento.
        </p>
      </div>

      <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-6">
        El Mundial y los picos de tráfico no son solo una oportunidad comercial
      </h2>

      <p className="text-gray-600 leading-relaxed mb-4">
        El contexto deportivo de los próximos años va a poner presión sobre muchas plataformas
        de iGaming. Más usuarios, más campañas, más registros, más depósitos, más retiros, más
        promociones, más intentos de abuso.
      </p>

      <p className="text-gray-600 leading-relaxed mb-4">
        Para el área comercial, esto representa crecimiento. Para el área de cumplimiento,
        representa exposición. Para tecnología, representa capacidad. Para seguridad, representa
        superficie de ataque.
      </p>

      <p className="text-gray-600 leading-relaxed mb-4">
        Por eso, prepararse para alto volumen no significa solamente soportar tráfico. Significa
        soportar decisiones:
      </p>

      <ul className="list-disc pl-6 mb-6 space-y-2 text-gray-600">
        <li>Decisiones de identidad</li>
        <li>Decisiones de riesgo</li>
        <li>Decisiones de aprobación y bloqueo</li>
        <li>Decisiones de conservación</li>
        <li>Decisiones de reporte</li>
      </ul>

      <p className="text-gray-600 leading-relaxed mb-4">
        En una operación madura, cada una de esas decisiones debe poder explicarse.
      </p>

      <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-6">
        La evidencia es parte de la experiencia, no un trámite posterior
      </h2>

      <p className="text-gray-600 leading-relaxed mb-4">
        Muchas empresas tratan la evidencia como algo que se construye después: primero registran
        usuarios, después intentan ordenar documentos, después integran listas, después buscan
        respaldar consentimientos. Ese orden genera deuda operativa.
      </p>

      <p className="text-gray-600 leading-relaxed mb-4">
        En cambio, cuando el onboarding nace como infraestructura de cumplimiento, la evidencia
        se genera desde el inicio. Cada validación, cada aceptación, cada consulta y cada
        decisión puede formar parte de un expediente. Eso permite que la operación no dependa
        de reconstrucciones manuales.
      </p>

      <div className="bg-indigo-500/5 border-l-4 border-indigo-500 p-6 my-8">
        <p className="text-gray-700">
          La evidencia no debería ser un trámite posterior. Debería ser parte natural de la
          experiencia. Y también permite que las áreas comerciales, tecnológicas y de cumplimiento
          trabajen sobre una misma base.
        </p>
      </div>

      <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-6">
        Lo que estamos construyendo desde JAAK
      </h2>

      <p className="text-gray-600 leading-relaxed mb-4">
        En JAAK estamos trabajando en una visión muy clara: ayudar a que las empresas conviertan
        los requerimientos de identidad y cumplimiento en infraestructura operativa.
      </p>

      <p className="text-gray-600 leading-relaxed mb-4">
        Para iGaming, eso significa acompañar el onboarding con tecnología que permita verificar
        identidades reales, reducir riesgos de fraude, consultar listas relevantes, generar
        evidencia, integrar firma digital y conservar expedientes que puedan respaldar a la
        operación.
      </p>

      <p className="text-gray-600 leading-relaxed mb-4">
        No vemos el KYC como un paso aislado. Lo vemos como una capa de confianza que conecta
        producto, tecnología, cumplimiento, seguridad y negocio.
      </p>

      <p className="text-gray-600 leading-relaxed mb-4">
        Porque el crecimiento sostenible no depende solo de adquirir usuarios. Depende de saber
        quiénes son, cómo entraron y qué evidencia respalda esa relación.
      </p>

      <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-6">
        La confianza como infraestructura
      </h2>

      <p className="text-gray-600 leading-relaxed mb-4">
        Después de participar en conversaciones sobre infraestructura financiera, pagos y nuevas
        tecnologías, me queda una convicción todavía más clara: la innovación puede acelerar
        muchas cosas. Pero la confianza sigue siendo la infraestructura más importante.
      </p>

      <p className="text-gray-600 leading-relaxed mb-4">
        Y en iGaming, esa confianza empieza antes del primer depósito. Empieza en el onboarding.
        Empieza cuando una plataforma decide no dejar la identidad al final del proceso, sino
        ponerla al centro de su operación. Empieza cuando cumplimiento no es un obstáculo, sino
        una arquitectura.
      </p>

      <p className="text-gray-600 leading-relaxed mb-4">
        Empieza cuando la empresa puede decir no solo "verificamos", sino "podemos demostrarlo".
      </p>

      <div className="bg-gray-50 rounded-xl p-8 my-8">
        <p className="text-gray-700 font-semibold text-lg text-center">
          Para los líderes que están construyendo el futuro del iGaming en México, la pregunta
          ya no debería ser si necesitan KYC. La pregunta es qué tipo de infraestructura
          necesitan para escalar con control. Porque en una operación digital, cada registro
          cuenta. Pero cada identidad verificada cuenta todavía más.
        </p>
      </div>

      <div className="bg-gray-50 rounded-xl p-8 my-12">
        <h3 className="text-xl font-bold text-gray-900 mb-4">
          Fuentes regulatorias de referencia
        </h3>
        <ul className="space-y-4">
          <li>
            <a
              href="https://www.diputados.gob.mx/LeyesBiblio/regley/Reg_LFJyS.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#0066ff] font-semibold hover:underline flex items-start gap-2"
            >
              <svg className="w-4 h-4 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
              </svg>
              Reglamento de la Ley Federal de Juegos y Sorteos — Cámara de Diputados
            </a>
            <p className="text-gray-500 text-sm mt-1 ml-6">
              Control interno, registro de identidad del apostador y canales electrónicos de captación de apuestas.
            </p>
          </li>
          <li>
            <a
              href="https://www.diputados.gob.mx/LeyesBiblio/pdf/LFPIORPI.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#0066ff] font-semibold hover:underline flex items-start gap-2"
            >
              <svg className="w-4 h-4 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
              </svg>
              Ley Federal para la Prevención e Identificación de Operaciones con Recursos de Procedencia Ilícita (LFPIORPI) — Cámara de Diputados
            </a>
            <p className="text-gray-500 text-sm mt-1 ml-6">
              Actividades vulnerables, obligaciones de identificación, conservación de información y sanciones aplicables al sector de juegos y sorteos.
            </p>
          </li>
        </ul>
      </div>

      <div className="bg-indigo-500/5 rounded-xl p-8 my-12">
        <h3 className="text-xl font-bold text-gray-900 mb-4">
          ¿Tu operación de iGaming necesita escalar su onboarding sin perder control?
        </h3>
        <p className="text-gray-600 mb-6">
          Conoce cómo JAAK ayuda a verificar identidades, prevenir fraude y generar evidencia
          para cumplimiento en México.
        </p>
        <Link
          href="/contacto"
          className="inline-flex items-center px-6 py-3 bg-[#0066ff] text-white font-bold rounded-lg hover:bg-[#0052cc] transition-all"
        >
          Agenda una demo
          <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
          </svg>
        </Link>
      </div>
    </ArticleLayout>
  );
}
