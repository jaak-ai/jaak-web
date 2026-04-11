import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "¿Qué es KYC y cuándo es obligatorio en México? | JAAK",
  description:
    "Entiende qué es el proceso KYC (Know Your Customer), qué dice la regulación mexicana (LFPIORPI, CNBV, UIF) y en qué sectores es obligatorio implementarlo.",
  keywords: [
    "KYC",
    "Know Your Customer",
    "KYC México",
    "LFPIORPI",
    "CNBV",
    "verificación de identidad",
    "PLD",
    "AML México",
    "Actividades Vulnerables",
  ],
  openGraph: {
    title: "¿Qué es KYC y cuándo es obligatorio en México?",
    description:
      "Entiende qué es el proceso KYC (Know Your Customer), qué dice la regulación mexicana (LFPIORPI, CNBV, UIF) y en qué sectores es obligatorio implementarlo.",
    type: "article",
    publishedTime: "2026-04-11",
    authors: ["JAAK"],
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "¿Qué es KYC y cuándo es obligatorio en México?",
  description:
    "Entiende qué es el proceso KYC (Know Your Customer), qué dice la regulación mexicana (LFPIORPI, CNBV, UIF) y en qué sectores es obligatorio implementarlo.",
  image: "https://jaak.ai/images/blog/que-es-kyc-mexico.jpg",
  datePublished: "2026-04-11",
  dateModified: "2026-04-11",
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
    "@id": "https://jaak.ai/blog/que-es-kyc-cuando-es-obligatorio-mexico",
  },
  keywords:
    "KYC, Know Your Customer, KYC México, LFPIORPI, CNBV, verificación de identidad, PLD, AML México, Actividades Vulnerables",
  inLanguage: "es-MX",
};

export default function QueEsKYCMexico() {
  const relatedPosts = [
    {
      title:
        "¿Qué es la NOM-151 y por qué importa en contratos digitales?",
      slug: "que-es-nom-151-contratos-digitales",
      category: "Firma Electrónica",
    },
    {
      title:
        "Firma electrónica simple vs avanzada: diferencias legales en México",
      slug: "firma-electronica-simple-vs-avanzada",
      category: "Firma Electrónica",
    },
    {
      title:
        "Tendencias KYC 2026: Lo que toda institución financiera debe saber",
      slug: "tendencias-kyc-2026",
      category: "KYC",
    },
  ];

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
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
                <svg
                  className="w-4 h-4 mr-2"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M15 19l-7-7 7-7"
                  />
                </svg>
                Volver al blog
              </Link>
            </div>
            <div className="flex items-center gap-3 mb-6">
              <span className="px-3 py-1 bg-[#0066ff]/10 text-[#0066ff] text-sm font-semibold rounded-full">
                KYC
              </span>
              <span className="text-white/40 text-sm">11 de abril, 2026</span>
              <span className="text-white/40 text-sm">•</span>
              <span className="text-white/40 text-sm">10 min de lectura</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-black text-white mb-6">
              ¿Qué es KYC y cuándo es obligatorio en México?
            </h1>
            <p className="text-xl text-white/60">
              Cada año, miles de millones de pesos circulan a través de cuentas
              fraudulentas en México. El KYC es la primera línea de defensa.
              Pero muchas empresas no saben con exactitud qué implica, quiénes
              están obligados ni cómo implementarlo sin perder clientes.
            </p>
          </div>
        </section>

        {/* Featured Image */}
        <section className="bg-white pt-12">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="rounded-2xl overflow-hidden shadow-xl">
              <Image
                src="/images/blog/que-es-kyc-mexico.jpg"
                alt="¿Qué es KYC y cuándo es obligatorio en México? Guía sobre LFPIORPI, CNBV y UIF"
                width={1200}
                height={675}
                className="w-full h-auto"
                priority
              />
            </div>
          </div>
        </section>

        {/* Article Content */}
        <article className="py-12 bg-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="prose prose-lg max-w-none">

              <p className="text-xl text-gray-600 leading-relaxed mb-8">
                Cada año, miles de millones de pesos transitan por cuentas y
                estructuras financieras fraudulentas en México. Las consecuencias
                van más allá de las pérdidas económicas: financian actividades
                ilícitas, erosionan la confianza en el sistema financiero y
                exponen a empresas y directivos a responsabilidades penales. El
                proceso de KYC —Know Your Customer— es la primera barrera que
                toda organización puede levantar. Sin embargo, muchas empresas
                aún no tienen claridad sobre qué implica realmente, quiénes
                están legalmente obligados a implementarlo ni cómo hacerlo sin
                generar fricción con sus clientes.
              </p>

              <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-6">
                ¿Qué es KYC? — Know Your Customer
              </h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                KYC, del inglés <em>Know Your Customer</em> (Conozca a su
                Cliente), es el conjunto de procesos mediante los cuales una
                empresa verifica la identidad de sus clientes antes de
                establecer una relación comercial o de servicio. No se trata
                de un simple trámite burocrático: es un proceso estructurado
                que incluye la verificación de documentos de identidad, la
                validación de datos contra fuentes gubernamentales oficiales,
                la consulta en listas de control de personas sancionadas o
                políticamente expuestas y la evaluación del perfil de riesgo
                del cliente.
              </p>
              <p className="text-gray-600 leading-relaxed mb-4">
                A diferencia de una validación superficial de nombre y correo
                electrónico, el KYC busca garantizar que la persona o empresa
                con la que se opera es exactamente quien dice ser, que no
                aparece en listas de sanciones internacionales o nacionales, y
                que su perfil de riesgo es consistente con la operación que
                desea realizar.
              </p>

              <div className="bg-[#0066ff]/5 border-l-4 border-[#0066ff] p-6 my-8">
                <p className="text-gray-700 font-medium mb-2">Concepto clave:</p>
                <p className="text-gray-600">
                  KYC no es un trámite administrativo. Es la primera barrera
                  contra el lavado de dinero, el financiamiento al terrorismo
                  y el fraude de identidad.
                </p>
              </div>

              <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-6">
                El marco legal en México
              </h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                En México, la obligación de implementar procesos KYC se
                desprende de tres pilares normativos principales que toda
                empresa con obligaciones de prevención de lavado de dinero
                debe conocer:
              </p>

              <h3 className="text-xl font-bold text-gray-900 mt-8 mb-4">
                1. LFPIORPI — Ley Federal para la Prevención e Identificación
                de Operaciones con Recursos de Procedencia Ilícita
              </h3>
              <p className="text-gray-600 leading-relaxed mb-4">
                Conocida coloquialmente como "Ley Anti-Lavado", la LFPIORPI
                regula las denominadas Actividades Vulnerables —sectores
                económicos con alto riesgo de ser utilizados para el lavado
                de dinero. La ley obliga a quienes realizan estas actividades
                a identificar plenamente a sus clientes antes de iniciar
                cualquier operación, a llevar registros auditables de dichas
                identificaciones, y a abstenerse de recibir pagos en efectivo
                que superen los umbrales establecidos. Su cumplimiento es
                supervisado por el Servicio de Administración Tributaria (SAT)
                a través de la Unidad de Evaluación y Control.
              </p>

              <h3 className="text-xl font-bold text-gray-900 mt-8 mb-4">
                2. Disposiciones de la CNBV — Comisión Nacional Bancaria y
                de Valores
              </h3>
              <p className="text-gray-600 leading-relaxed mb-4">
                Para las entidades del sistema financiero reguladas —bancos,
                Sofomes, Sofipes, uniones de crédito, casas de bolsa, entre
                otras—, la CNBV emite disposiciones de carácter general en
                materia de PLD (Prevención de Lavado de Dinero) y FT
                (Financiamiento al Terrorismo). Estas disposiciones establecen
                requerimientos detallados de identificación del cliente según
                su perfil de riesgo, con obligaciones diferenciadas para
                clientes de riesgo bajo, medio y alto, incluyendo la
                periodicidad con la que deben actualizarse los expedientes y
                los documentos mínimos exigidos.
              </p>

              <h3 className="text-xl font-bold text-gray-900 mt-8 mb-4">
                3. UIF — Unidad de Inteligencia Financiera
              </h3>
              <p className="text-gray-600 leading-relaxed mb-4">
                La UIF, dependiente de la Secretaría de Hacienda y Crédito
                Público (SHCP), es la autoridad receptora de los reportes de
                operaciones inusuales y relevantes que generan tanto las
                entidades financieras reguladas como los sujetos obligados
                por la LFPIORPI. La UIF establece los criterios y formatos
                para dichos reportes, administra listas de personas bloqueadas
                y coordina con organismos internacionales como el GAFI (Grupo
                de Acción Financiera Internacional) la actualización de listas
                de sanciones.
              </p>

              <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-6">
                ¿Quiénes están obligados a hacer KYC?
              </h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                La obligación de implementar procesos KYC en México recae
                sobre dos grandes categorías de sujetos:
              </p>

              <h3 className="text-xl font-bold text-gray-900 mt-8 mb-4">
                A. Instituciones financieras reguladas por la CNBV
              </h3>
              <p className="text-gray-600 leading-relaxed mb-4">
                Estas entidades tienen la obligación más estricta y detallada
                de implementar KYC, con supervisión directa y continua de la
                autoridad:
              </p>
              <ul className="list-disc pl-6 mb-6 space-y-2 text-gray-600">
                <li>Instituciones de crédito (bancos comerciales y de desarrollo)</li>
                <li>Sociedades Financieras de Objeto Múltiple (Sofomes ENR y ER)</li>
                <li>Sociedades Financieras Populares (Sofipes) y Cajas de Ahorro</li>
                <li>Uniones de crédito</li>
                <li>Compañías de seguros y afianzadoras</li>
                <li>Casas de bolsa y operadoras de fondos de inversión</li>
                <li>Centros cambiarios y transmisores de dinero</li>
                <li>Instituciones de tecnología financiera (Fintechs reguladas)</li>
              </ul>

              <h3 className="text-xl font-bold text-gray-900 mt-8 mb-4">
                B. Sujetos obligados por Actividades Vulnerables (LFPIORPI)
              </h3>
              <p className="text-gray-600 leading-relaxed mb-4">
                Estos sectores no están regulados por la CNBV, pero sí por
                la LFPIORPI y tienen obligaciones concretas de identificar
                a sus clientes cuando superan los umbrales establecidos en
                la ley:
              </p>
              <ul className="list-disc pl-6 mb-6 space-y-2 text-gray-600">
                <li>Agentes inmobiliarios y desarrolladoras (operaciones que superen el umbral establecido)</li>
                <li>Distribuidoras de vehículos nuevos y usados (ventas en efectivo)</li>
                <li>Contadores públicos, notarios y fedatarios públicos</li>
                <li>Casinos, salas de juego y loterías</li>
                <li>Comerciantes de joyería, metales preciosos y obras de arte</li>
                <li>Prestadores de servicios de blindaje y resguardo de valores</li>
                <li>Empresas de factoraje, arrendamiento financiero y préstamos</li>
                <li>Comercializadoras de tarjetas de servicios o prepagadas</li>
              </ul>

              <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-6">
                ¿Qué incluye un proceso KYC completo?
              </h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                Un proceso KYC robusto y que cumpla con la regulación mexicana
                debe contemplar cuatro componentes esenciales:
              </p>

              <div className="space-y-6 my-8">
                <div>
                  <p className="font-bold text-gray-900 mb-2">
                    1. Verificación de identidad documental
                  </p>
                  <p className="text-gray-600 leading-relaxed">
                    Captura y análisis automatizado del documento de identidad
                    oficial (INE/IFE o pasaporte para personas físicas; acta
                    constitutiva y poderes notariales para personas morales).
                    Mediante tecnología OCR se extraen y validan los datos del
                    documento, verificando la coherencia de la información y
                    detectando posibles alteraciones o falsificaciones.
                  </p>
                </div>
                <div>
                  <p className="font-bold text-gray-900 mb-2">
                    2. Verificación biométrica con prueba de vida
                  </p>
                  <p className="text-gray-600 leading-relaxed">
                    El reconocimiento facial con liveness detection confirma
                    que la persona que se está registrando es quien dice ser
                    y está presente en tiempo real. Esta tecnología detecta
                    intentos de suplantación mediante fotografías, videos
                    pregrabados o máscaras tridimensionales —conocidos como
                    ataques de presentación o deepfakes—, garantizando que
                    el proceso no pueda ser burlado de manera remota.
                  </p>
                </div>
                <div>
                  <p className="font-bold text-gray-900 mb-2">
                    3. Validación en fuentes gubernamentales oficiales
                  </p>
                  <p className="text-gray-600 leading-relaxed">
                    Los datos capturados se contrastan en tiempo real contra
                    las bases de datos de las autoridades: la CURP se valida
                    ante el Registro Nacional de Población (Renapo), la
                    credencial de elector se verifica contra el padrón del
                    Instituto Nacional Electoral (INE), y el RFC se valida
                    ante el Servicio de Administración Tributaria (SAT). Esta
                    validación cruzada es fundamental para detectar documentos
                    clonados o datos que no corresponden a ningún registro
                    oficial.
                  </p>
                </div>
                <div>
                  <p className="font-bold text-gray-900 mb-2">
                    4. Consulta en listas de control
                  </p>
                  <p className="text-gray-600 leading-relaxed">
                    Una vez verificada la identidad, el perfil del cliente se
                    consulta en listas de control nacionales e internacionales:
                    la lista de personas bloqueadas de la UIF, el artículo
                    69-B del Código Fiscal de la Federación (lista negra del
                    SAT), las listas de la Oficina de Control de Activos
                    Extranjeros (OFAC) del Departamento del Tesoro de Estados
                    Unidos, y las listas consolidadas de sanciones de la ONU.
                    Esta consulta es obligatoria para cualquier institución
                    con obligaciones PLD/AML.
                  </p>
                </div>
              </div>

              <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-6">
                ¿Qué pasa si no implementas KYC?
              </h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                El incumplimiento de las obligaciones KYC no es un riesgo
                teórico: las autoridades mexicanas han intensificado
                significativamente su actividad supervisora y sancionadora
                en los últimos años. Las consecuencias para las empresas y
                sus directivos pueden ser graves y en muchos casos
                irreversibles:
              </p>
              <ul className="list-disc pl-6 mb-6 space-y-2 text-gray-600">
                <li>
                  <strong>Sanciones económicas de la CNBV o el SAT:</strong>{" "}
                  Las multas pueden alcanzar cifras muy significativas en
                  función de la gravedad de la infracción y el tamaño de
                  la entidad sancionada.
                </li>
                <li>
                  <strong>Cancelación de la autorización para operar:</strong>{" "}
                  En casos de incumplimiento reiterado o de especial gravedad,
                  la autoridad puede revocar la licencia o autorización de
                  operación de la entidad.
                </li>
                <li>
                  <strong>Responsabilidad penal:</strong> Los directivos y
                  funcionarios responsables del área de cumplimiento pueden
                  enfrentar cargos penales en casos donde el incumplimiento
                  facilite activamente operaciones de lavado de dinero o
                  financiamiento al terrorismo.
                </li>
                <li>
                  <strong>Daño reputacional irreversible:</strong> Una sanción
                  pública de la CNBV o la UIF puede destruir la reputación
                  de una institución en el mercado financiero, afectando
                  relaciones con corresponsales bancarios y clientes
                  institucionales.
                </li>
                <li>
                  <strong>Convertirse en vehículo de lavado de dinero:</strong>{" "}
                  Sin procesos adecuados de KYC, la empresa puede ser
                  utilizada —conscientemente o no— para lavar recursos de
                  procedencia ilícita, lo que agrava exponencialmente su
                  exposición legal.
                </li>
              </ul>

              <div className="bg-amber-50 border-l-4 border-amber-400 p-6 my-8">
                <p className="text-amber-800 font-medium mb-2">Advertencia regulatoria:</p>
                <p className="text-amber-700">
                  Las multas por incumplimiento de la LFPIORPI pueden llegar
                  hasta 65,000 veces el salario mínimo diario. Para las
                  entidades financieras reguladas por la CNBV, las sanciones
                  pueden ser aún mayores dependiendo de la gravedad y
                  reincidencia de la infracción.
                </p>
              </div>

              <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-6">
                KYC y experiencia del cliente: ¿son compatibles?
              </h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                Existe un mito arraigado en muchos equipos comerciales y de
                producto: que el KYC es enemigo de la conversión. Que pedir
                documentos, hacer verificaciones y aplicar controles inevitablemente
                genera abandono en el proceso de onboarding. Esta creencia fue
                válida hace una década, cuando los procesos KYC requerían
                presencia física, formularios en papel y revisiones manuales
                que podían tomar días o semanas.
              </p>
              <p className="text-gray-600 leading-relaxed mb-4">
                La realidad en 2026 es completamente diferente. Con la
                tecnología disponible hoy, un proceso KYC completo —verificación
                de documento, prueba de vida biométrica y validación en fuentes
                gubernamentales— puede completarse en menos de tres minutos
                desde un teléfono inteligente, sin papel, sin desplazamiento
                físico y sin intervención humana. La clave está en automatizar
                la verificación sin sacrificar la experiencia del usuario.
              </p>
              <p className="text-gray-600 leading-relaxed mb-4">
                Las instituciones que han adoptado plataformas de KYC digital
                modernas reportan tasas de conversión superiores al 85% en
                procesos de onboarding, comparadas con las tasas del 40-60%
                que logran quienes mantienen procesos manuales o híbridos.
                La fricción no viene del KYC en sí: viene de los procesos
                mal diseñados que lo implementan.
              </p>

              <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-6">
                Preguntas frecuentes sobre KYC en México
              </h2>

              <h3 className="text-lg font-bold text-gray-900 mt-6 mb-2">
                ¿El KYC es solo para bancos?
              </h3>
              <p className="text-gray-600 leading-relaxed mb-4">
                No. Si bien los bancos tienen las obligaciones más estrictas
                y detalladas, la obligación de implementar KYC aplica también
                a Sofomes, Sofipes, uniones de crédito, casas de bolsa y, a
                través de la LFPIORPI, a todos los sujetos que realicen
                Actividades Vulnerables como agentes inmobiliarios,
                distribuidoras de automóviles, notarios, casinos y comerciantes
                de metales preciosos, entre otros.
              </p>

              <h3 className="text-lg font-bold text-gray-900 mt-6 mb-2">
                ¿Cada cuánto hay que renovar el KYC de un cliente?
              </h3>
              <p className="text-gray-600 leading-relaxed mb-4">
                Depende del perfil de riesgo asignado al cliente. En general,
                las disposiciones de la CNBV establecen que los clientes
                clasificados como de riesgo alto deben tener su expediente
                actualizado al menos una vez por año; los de riesgo medio,
                cada dos años; y los de riesgo bajo, cada tres a cinco años.
                Las instituciones pueden establecer criterios más estrictos
                en función de su política interna de gestión de riesgos.
              </p>

              <h3 className="text-lg font-bold text-gray-900 mt-6 mb-2">
                ¿Qué documentos se requieren para el KYC?
              </h3>
              <p className="text-gray-600 leading-relaxed mb-4">
                Para personas físicas, los documentos mínimos son la
                credencial para votar (INE/IFE) o pasaporte vigente, y la
                Clave Única de Registro de Población (CURP). Dependiendo del
                nivel de riesgo, también puede requerirse comprobante de
                domicilio reciente. Para personas morales, se requiere acta
                constitutiva y sus modificaciones, cédula de identificación
                fiscal (RFC), comprobante de domicilio fiscal, y la
                identificación oficial del representante legal con sus poderes
                notariales correspondientes.
              </p>

              <h3 className="text-lg font-bold text-gray-900 mt-6 mb-2">
                ¿El KYC digital tiene la misma validez legal que el presencial?
              </h3>
              <p className="text-gray-600 leading-relaxed mb-4">
                Sí, siempre que incluya los mecanismos de verificación
                adecuados y genere un expediente de identidad auditable. Las
                disposiciones de la CNBV reconocen expresamente los procesos
                de integración de expedientes de manera no presencial,
                incluyendo la verificación biométrica facial con prueba de
                vida y la validación contra fuentes gubernamentales. Lo
                fundamental es que el proceso genere evidencia suficiente
                que pueda ser presentada ante una autoridad en caso de
                auditoría o investigación.
              </p>

              <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-6">
                Cómo implementar KYC en tu empresa
              </h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                La implementación de un proceso KYC eficiente no tiene que
                ser un proyecto largo ni costoso. Con JAAK, existen tres
                rutas de implementación según las necesidades y madurez
                tecnológica de cada organización:
              </p>

              <div className="space-y-6 my-8">
                <div className="bg-gray-50 rounded-xl p-6">
                  <p className="font-bold text-gray-900 mb-2">
                    Autoservicio — Empieza hoy, sin integración técnica
                  </p>
                  <p className="text-gray-600 leading-relaxed">
                    Accede a la plataforma JAAK desde el navegador y comienza
                    a verificar identidades de manera inmediata. Ideal para
                    equipos que necesitan una solución operativa mientras
                    preparan una integración más profunda, o para casos de uso
                    de volumen medio que no justifican una implementación de
                    API dedicada.
                  </p>
                </div>
                <div className="bg-gray-50 rounded-xl p-6">
                  <p className="font-bold text-gray-900 mb-2">
                    Integración via API — KYC embebido en tu plataforma
                  </p>
                  <p className="text-gray-600 leading-relaxed">
                    Conecta los servicios de verificación de identidad de JAAK
                    directamente en tu aplicación o sistema de onboarding
                    mediante API REST. Con documentación completa y soporte
                    técnico dedicado, la integración puede estar lista en días.
                    Ideal para plataformas digitales, apps móviles y sistemas
                    de originación de crédito.
                  </p>
                </div>
                <div className="bg-gray-50 rounded-xl p-6">
                  <p className="font-bold text-gray-900 mb-2">
                    Consultoría — Diseño a medida de tu flujo de cumplimiento
                  </p>
                  <p className="text-gray-600 leading-relaxed">
                    El equipo de JAAK trabaja directamente con tu área de
                    cumplimiento, legal y tecnología para diseñar el flujo KYC
                    específico que necesitas según tu regulación aplicable,
                    perfil de clientes y tolerancia al riesgo. Incluye revisión
                    de políticas, definición de criterios de riesgo y
                    acompañamiento en el proceso de validación ante auditorías.
                  </p>
                </div>
              </div>

              <div className="bg-gray-50 rounded-xl p-8 my-8">
                <p className="text-gray-700 font-medium mb-2">
                  El KYC que necesitas
                </p>
                <p className="text-gray-600">
                  El mejor KYC es el que cumple la regulación sin friccionar
                  al cliente. Con tecnología moderna, ya no tienes que elegir
                  entre los dos.
                </p>
              </div>

              <p className="text-gray-600 leading-relaxed mb-4">
                En un entorno regulatorio que se endurece continuamente y en
                un mercado donde el fraude de identidad crece año con año,
                implementar un proceso KYC robusto no es una opción: es una
                condición para operar con seguridad jurídica y reputacional.
                La buena noticia es que la tecnología disponible hoy permite
                cumplir con todos los requerimientos regulatorios y, al mismo
                tiempo, ofrecer una experiencia de registro ágil y completamente
                digital a los clientes.
              </p>

            </div>

            {/* CTA inline */}
            <div className="mt-12 flex flex-wrap gap-4">
              <Link
                href="/contacto"
                className="px-6 py-3 bg-[#0066ff] text-white font-bold rounded-lg hover:bg-[#0052cc] transition-all"
              >
                Hablar con un experto
              </Link>
              <Link
                href="/autoservicio"
                className="px-6 py-3 bg-gray-100 text-gray-900 font-bold rounded-lg hover:bg-gray-200 transition-all"
              >
                Probar autoservicio
              </Link>
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
                  Especialistas en verificación de identidad y cumplimiento
                  regulatorio para el sector financiero mexicano.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Related Posts */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-8">
              Artículos relacionados
            </h2>
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
              ¿Listo para implementar KYC en su empresa?
            </h2>
            <p className="text-white/60 text-lg mb-8">
              Descubra cómo JAAK le ayuda a cumplir con la regulación mexicana
              y verificar identidades en menos de tres minutos, sin papel y
              sin complicaciones.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link
                href="/contacto"
                className="px-8 py-4 bg-[#0066ff] text-white font-bold rounded-lg hover:bg-[#0052cc] transition-all"
              >
                Solicitar demo
              </Link>
              <Link
                href="/autoservicio"
                className="px-8 py-4 bg-white/10 text-white font-bold rounded-lg hover:bg-white/20 transition-all"
              >
                Empezar en autoservicio
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
