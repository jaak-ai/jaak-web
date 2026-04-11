import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "¿Qué es la NOM-151 y por qué importa en contratos digitales? | JAAK",
  description:
    "Descubre qué es la NOM-151-SCFI-2016, cómo funciona el sello de tiempo certificado y por qué es el estándar legal indispensable para contratos digitales en México.",
  keywords: [
    "NOM-151",
    "NOM-151-SCFI-2016",
    "sello de tiempo",
    "firma electrónica México",
    "contratos digitales",
    "PSC",
    "Prestador de Servicios de Certificación",
  ],
  openGraph: {
    title: "¿Qué es la NOM-151 y por qué importa en contratos digitales?",
    description:
      "Descubre qué es la NOM-151-SCFI-2016, cómo funciona el sello de tiempo certificado y por qué es el estándar legal indispensable para contratos digitales en México.",
    type: "article",
    publishedTime: "2026-04-11",
    authors: ["JAAK"],
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline:
    "¿Qué es la NOM-151 y por qué importa en contratos digitales?",
  description:
    "Descubre qué es la NOM-151-SCFI-2016, cómo funciona el sello de tiempo certificado y por qué es el estándar legal indispensable para contratos digitales en México.",
  image: "https://jaak.ai/images/blog/que-es-nom-151.jpg",
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
    "@id": "https://jaak.ai/blog/que-es-nom-151-contratos-digitales",
  },
  keywords:
    "NOM-151, NOM-151-SCFI-2016, sello de tiempo, firma electrónica México, contratos digitales, PSC, Prestador de Servicios de Certificación",
  inLanguage: "es-MX",
};

export default function QueEsNOM151ContratosDigitales() {
  const relatedPosts = [
    {
      title:
        "Firma electrónica simple vs avanzada: diferencias legales en México",
      slug: "firma-electronica-simple-vs-avanzada",
      category: "Firma Electrónica",
    },
    {
      title: "¿Qué es KYC y cuándo es obligatorio en México?",
      slug: "que-es-kyc-cuando-es-obligatorio-mexico",
      category: "KYC",
    },
    {
      title:
        "Guía completa de las disposiciones CNBV para verificación de identidad",
      slug: "disposiciones-cnbv-verificacion-identidad",
      category: "Regulación",
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
              <span className="px-3 py-1 bg-[#1ECAD3]/10 text-[#1ECAD3] text-sm font-semibold rounded-full">
                Firma Electrónica
              </span>
              <span className="text-white/40 text-sm">11 de abril, 2026</span>
              <span className="text-white/40 text-sm">•</span>
              <span className="text-white/40 text-sm">8 min de lectura</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-black text-white mb-6">
              ¿Qué es la NOM-151 y por qué importa en contratos digitales?
            </h1>
            <p className="text-xl text-white/60">
              La firma electrónica sin NOM-151 es como una promesa sin testigos:
              legalmente existe, pero difícilmente sobrevive una impugnación. Descubre
              qué es la norma, cómo funciona el sello de tiempo certificado y por qué
              ningún contrato digital serio en México puede prescindir de ella.
            </p>
          </div>
        </section>

        {/* Featured Image */}
        <section className="bg-white pt-12">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="rounded-2xl overflow-hidden shadow-xl">
              <Image
                src="/images/blog/que-es-nom-151.jpg"
                alt="NOM-151-SCFI-2016: sello de tiempo certificado para contratos digitales en México"
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
                Imagine que su empresa firma un contrato de crédito con un cliente,
                todo en formato digital y sin papel. La firma electrónica está ahí,
                el documento existe y las partes lo aceptaron. Sin embargo, meses
                después el cliente impugna el acuerdo ante un juez argumentando que
                no firmó esa versión, o que la fecha es incorrecta. ¿Cómo demuestra
                usted que el documento es auténtico, que no fue modificado y que se
                firmó exactamente cuando dice que se firmó? Ahí es donde la
                NOM-151-SCFI-2016 deja de ser burocracia y se convierte en su mejor
                argumento legal.
              </p>

              <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-6">
                ¿Qué es la NOM-151-SCFI-2016?
              </h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                La NOM-151-SCFI-2016, cuyo título oficial es{" "}
                <em>
                  Requisitos que deben observarse para la conservación de mensajes de
                  datos y digitalización de documentos
                </em>
                , es una Norma Oficial Mexicana publicada por la Secretaría de
                Economía (SE). Entró en vigor en 2017 y establece las especificaciones
                técnicas y jurídicas que debe cumplir cualquier organización que desee
                dar valor probatorio a sus documentos y firmas electrónicas en México.
              </p>
              <p className="text-gray-600 leading-relaxed mb-4">
                El corazón de la norma es simple pero poderoso: todo documento o
                mensaje de datos que pretenda tener validez legal debe contar con un{" "}
                <strong>sello de tiempo certificado</strong> emitido por un{" "}
                <strong>Prestador de Servicios de Certificación (PSC)</strong>{" "}
                autorizado por la propia Secretaría de Economía. Sin ese sello, la
                fecha y la integridad del documento son, desde el punto de vista
                legal, meras afirmaciones sin respaldo técnico verificable.
              </p>
              <p className="text-gray-600 leading-relaxed mb-4">
                La norma aplica tanto a documentos generados originalmente en formato
                digital como a documentos físicos digitalizados, lo que la convierte
                en el marco de referencia para prácticamente cualquier proceso
                documental sin papel en el país.
              </p>

              <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-6">
                ¿Cómo funciona el sello de tiempo certificado?
              </h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                El proceso técnico detrás del sello NOM-151 es riguroso y está
                diseñado para ser matemáticamente irrefutable. Se desarrolla en
                cuatro pasos:
              </p>
              <ol className="list-decimal pl-6 mb-6 space-y-3 text-gray-600">
                <li>
                  <strong>Generación del hash SHA-256.</strong> Una vez que el
                  documento está listo para ser sellado, el sistema genera una huella
                  digital única mediante el algoritmo criptográfico SHA-256. Esta
                  huella es una cadena de caracteres que representa el contenido del
                  documento de forma unívoca: cualquier cambio, por mínimo que sea,
                  produce una huella completamente diferente.
                </li>
                <li>
                  <strong>El PSC estampa el sello de tiempo.</strong> El hash se
                  envía al Prestador de Servicios de Certificación autorizado por la
                  SE. El PSC registra la hora exacta en un servidor de tiempo
                  sincronizado con fuentes oficiales y vincula ese dato temporal al
                  hash del documento de forma criptográficamente segura.
                </li>
                <li>
                  <strong>El sello queda vinculado al documento.</strong> El token de
                  sellado de tiempo se incorpora al expediente del documento, de modo
                  que cualquier auditor o autoridad puede verificar de manera
                  independiente tanto la integridad del contenido como el momento
                  exacto en que fue sellado.
                </li>
                <li>
                  <strong>Cualquier modificación posterior es detectable.</strong>{" "}
                  Si alguien altera el documento después del sellado, aunque sea un
                  espacio en blanco, el hash resultante no coincidirá con el que el
                  PSC registró. La alteración queda expuesta automáticamente, sin
                  necesidad de peritos ni análisis forense adicional.
                </li>
              </ol>

              <div className="bg-[#0066ff]/5 border-l-4 border-[#0066ff] p-6 my-8">
                <p className="text-gray-700 font-medium mb-2">Cómo funciona en la práctica:</p>
                <p className="text-gray-600">
                  El sello NOM-151 registra exactamente cuándo se firmó un documento.
                  Si alguien intenta modificarlo después, el cambio es matemáticamente
                  detectable: el hash SHA-256 del documento modificado nunca coincidirá
                  con el que el PSC certificó. No se necesitan peritos ni conjeturas;
                  la prueba es objetiva y reproducible por cualquier parte.
                </p>
              </div>

              <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-6">
                ¿Por qué importa en contratos digitales?
              </h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                Contar con la certificación NOM-151 en sus contratos digitales no es
                una formalidad adicional; es la diferencia entre un documento que
                resiste el escrutinio legal y uno que puede ser fácilmente cuestionado.
                Estas son las cuatro razones principales:
              </p>
              <ul className="list-disc pl-6 mb-6 space-y-2 text-gray-600">
                <li>
                  <strong>Validez legal probatoria.</strong> El Código de Comercio
                  (artículos 89 al 114) y el Código Civil Federal reconocen los
                  mensajes de datos como prueba admisible en juicio, siempre que
                  cumplan con los requisitos de conservación que establece precisamente
                  la NOM-151. Un contrato sin sello puede ser admitido como indicio,
                  pero raramente como prueba plena.
                </li>
                <li>
                  <strong>Resistencia a impugnaciones.</strong> La mayoría de las
                  impugnaciones de contratos digitales se basan en dos argumentos: "yo
                  no firmé eso" o "ese documento fue modificado". El sello NOM-151
                  desvirtúa ambos en el mismo acto: prueba quién firmó y en qué
                  momento, y garantiza que el contenido no ha cambiado desde entonces.
                </li>
                <li>
                  <strong>Cumplimiento regulatorio ante CNBV, SAT y otras autoridades.</strong>{" "}
                  Múltiples reguladores mexicanos exigen o recomiendan expresamente la
                  certificación NOM-151 como estándar de conservación de expedientes
                  digitales. Ignorarla puede significar observaciones en auditorías,
                  sanciones administrativas o la nulidad de actos jurídicos.
                </li>
                <li>
                  <strong>Archivo permanente y auditable.</strong> La norma define
                  también los requisitos de custodia a largo plazo. Un expediente
                  sellado NOM-151 puede ser verificado cinco, diez o veinte años
                  después con la misma certeza que el día de su creación, lo que es
                  indispensable para carteras de crédito, contratos de arrendamiento,
                  pólizas de seguro y cualquier documento con vigencia prolongada.
                </li>
              </ul>

              <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-6">
                ¿Qué sectores necesitan NOM-151 obligatoriamente?
              </h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                Si bien la norma es de aplicación general para cualquier entidad que
                conserve mensajes de datos, existen sectores donde su cumplimiento
                es especialmente crítico o viene acompañado de obligaciones
                regulatorias específicas:
              </p>
              <ul className="list-disc pl-6 mb-6 space-y-2 text-gray-600">
                <li>
                  <strong>Instituciones financieras supervisadas por la CNBV.</strong>{" "}
                  Bancos, casas de bolsa, arrendadoras y factorajes deben conservar
                  contratos, estados de cuenta y expedientes de clientes con estándares
                  que la CNBV alinea directamente a la NOM-151. El incumplimiento puede
                  traducirse en sanciones cuantiosas y hasta en la revocación de
                  autorizaciones.
                </li>
                <li>
                  <strong>Fintech e instituciones de tecnología financiera (ITF).</strong>{" "}
                  La Ley Fintech y sus disposiciones complementarias obligan a las
                  plataformas de financiamiento colectivo e instituciones de fondos de
                  pago electrónico a mantener expedientes digitales con los requisitos
                  de la NOM-151, dado que la mayoría de sus operaciones son 100 %
                  digitales y sin presencia física.
                </li>
                <li>
                  <strong>Arrendamiento de bienes inmuebles y vehículos.</strong>{" "}
                  Los contratos de arrendamiento de largo plazo involucran montos
                  relevantes y plazos extendidos. El sello NOM-151 es la única
                  garantía técnica de que el contrato que se exhibe ante un juez es
                  idéntico al que las partes suscribieron.
                </li>
                <li>
                  <strong>Contratos de crédito y financiamiento.</strong>{" "}
                  Desde créditos personales hasta financiamiento empresarial, cualquier
                  instrumento de deuda en formato digital debe poder demostrar
                  autenticidad de fecha y contenido. Sin NOM-151, el acreedor asume un
                  riesgo legal considerable.
                </li>
                <li>
                  <strong>Compraventas de bienes de alto valor.</strong>{" "}
                  Automóviles, maquinaria, equipos de cómputo y otros bienes de capital
                  se venden cada vez más con contratos completamente digitales. La
                  NOM-151 garantiza que la evidencia de la transacción sea
                  jurídicamente sólida.
                </li>
                <li>
                  <strong>Sector asegurador.</strong>{" "}
                  Las pólizas electrónicas y las addendas de seguros deben conservarse
                  bajo los estándares de la norma para que tengan plena validez ante
                  la CNSF y en caso de reclamación o litigio.
                </li>
              </ul>

              <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-6">
                Firma con NOM-151 vs firma sin NOM-151
              </h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                La diferencia entre ambas opciones no es de forma sino de fondo
                jurídico. A continuación se comparan los aspectos más relevantes:
              </p>

              {/* Comparison section */}
              <div className="my-8 space-y-4">
                {/* Header row */}
                <div className="grid grid-cols-3 gap-4">
                  <div className="font-bold text-gray-900 text-sm uppercase tracking-wide">
                    Criterio
                  </div>
                  <div className="font-bold text-[#1ECAD3] text-sm uppercase tracking-wide text-center">
                    Con NOM-151
                  </div>
                  <div className="font-bold text-gray-400 text-sm uppercase tracking-wide text-center">
                    Sin NOM-151
                  </div>
                </div>

                {/* Divider */}
                <div className="h-px bg-gray-200" />

                {/* Row 1 */}
                <div className="grid grid-cols-3 gap-4 py-3 border-b border-gray-100">
                  <div className="text-gray-700 font-medium text-sm">
                    Evidencia de fecha
                  </div>
                  <div className="text-center">
                    <span className="inline-block px-3 py-1 bg-green-100 text-green-700 text-xs font-semibold rounded-full">
                      Certificada por PSC autorizado
                    </span>
                  </div>
                  <div className="text-center">
                    <span className="inline-block px-3 py-1 bg-red-100 text-red-600 text-xs font-semibold rounded-full">
                      Solo metadato del archivo
                    </span>
                  </div>
                </div>

                {/* Row 2 */}
                <div className="grid grid-cols-3 gap-4 py-3 border-b border-gray-100">
                  <div className="text-gray-700 font-medium text-sm">
                    Integridad del documento
                  </div>
                  <div className="text-center">
                    <span className="inline-block px-3 py-1 bg-green-100 text-green-700 text-xs font-semibold rounded-full">
                      Verificable con hash SHA-256
                    </span>
                  </div>
                  <div className="text-center">
                    <span className="inline-block px-3 py-1 bg-red-100 text-red-600 text-xs font-semibold rounded-full">
                      No verificable técnicamente
                    </span>
                  </div>
                </div>

                {/* Row 3 */}
                <div className="grid grid-cols-3 gap-4 py-3 border-b border-gray-100">
                  <div className="text-gray-700 font-medium text-sm">
                    Valor probatorio
                  </div>
                  <div className="text-center">
                    <span className="inline-block px-3 py-1 bg-green-100 text-green-700 text-xs font-semibold rounded-full">
                      Prueba plena en juicio
                    </span>
                  </div>
                  <div className="text-center">
                    <span className="inline-block px-3 py-1 bg-yellow-100 text-yellow-700 text-xs font-semibold rounded-full">
                      Indicio, sujeto a peritaje
                    </span>
                  </div>
                </div>

                {/* Row 4 */}
                <div className="grid grid-cols-3 gap-4 py-3">
                  <div className="text-gray-700 font-medium text-sm">
                    Resistencia a impugnación
                  </div>
                  <div className="text-center">
                    <span className="inline-block px-3 py-1 bg-green-100 text-green-700 text-xs font-semibold rounded-full">
                      Alta — matemáticamente respaldada
                    </span>
                  </div>
                  <div className="text-center">
                    <span className="inline-block px-3 py-1 bg-red-100 text-red-600 text-xs font-semibold rounded-full">
                      Baja — fácilmente cuestionable
                    </span>
                  </div>
                </div>
              </div>

              <p className="text-gray-600 leading-relaxed mb-4">
                Como muestra la comparación, la firma sin NOM-151 puede ser válida
                en transacciones de bajo riesgo, pero en contratos de crédito,
                arrendamiento, servicios financieros o cualquier acto jurídico
                relevante, la ausencia del sello certificado es un riesgo que las
                organizaciones serias simplemente no pueden aceptar.
              </p>

              <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-6">
                ¿Cómo obtener una firma con certificación NOM-151?
              </h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                La buena noticia es que, con la plataforma adecuada, el proceso es
                completamente transparente para los firmantes. Con JAAK, el flujo
                completo ocurre en minutos y sin fricción:
              </p>
              <ol className="list-decimal pl-6 mb-6 space-y-3 text-gray-600">
                <li>
                  <strong>Carga del documento.</strong> El responsable sube el
                  contrato o documento a la plataforma de JAAK. El sistema acepta
                  PDF y otros formatos estándar, y los convierte automáticamente al
                  formato requerido para el proceso de certificación.
                </li>
                <li>
                  <strong>Los firmantes reciben una liga segura.</strong> Cada
                  persona que debe firmar recibe un vínculo único e intransferible
                  por correo electrónico o SMS. No necesita instalar ninguna
                  aplicación ni contar con un certificado digital previo.
                </li>
                <li>
                  <strong>Firma con verificación biométrica.</strong> El firmante
                  realiza el proceso de autenticación mediante reconocimiento facial
                  y validación de documento de identidad oficial (INE/IFE, pasaporte,
                  etc.), lo que garantiza que quien firma es quien dice ser.
                </li>
                <li>
                  <strong>El PSC genera el sello de tiempo NOM-151.</strong>{" "}
                  En el momento exacto en que se completa la última firma, el
                  Prestador de Servicios de Certificación integrado en la plataforma
                  estampa automáticamente el sello de tiempo sobre el hash del
                  documento. Este paso ocurre en segundos y es completamente invisible
                  para el usuario final.
                </li>
                <li>
                  <strong>Generación del expediente auditable.</strong> JAAK produce
                  un expediente completo que incluye el documento firmado, el sello
                  NOM-151, los registros biométricos de autenticación, la evidencia
                  de aceptación de cada parte y la cadena de custodia digital. Este
                  expediente puede ser descargado, almacenado y presentado como
                  prueba en cualquier momento.
                </li>
              </ol>

              <p className="text-gray-600 leading-relaxed mb-4">
                El resultado es un documento que cumple simultáneamente con la
                NOM-151-SCFI-2016, con los requisitos de la CNBV para expedientes
                digitales y con las mejores prácticas internacionales de firma
                electrónica avanzada. Todo ello sin que el firmante perciba mayor
                complejidad que enviar un correo electrónico.
              </p>

              <div className="bg-gray-50 rounded-xl p-8 my-8">
                <h3 className="text-xl font-bold text-gray-900 mb-4">
                  Conclusión: la NOM-151 no es opcional, es el piso mínimo
                </h3>
                <p className="text-gray-600">
                  En un entorno donde los contratos digitales son ya la norma y no
                  la excepción, la NOM-151-SCFI-2016 representa el estándar mínimo
                  de validez jurídica en México. Adoptar la firma electrónica sin
                  el respaldo del sello de tiempo certificado es construir sobre una
                  base frágil: basta una impugnación para que la falta de evidencia
                  técnica se convierta en un problema de negocio. Las organizaciones
                  que hoy incorporan la NOM-151 en sus flujos documentales no solo
                  cumplen con la ley; también reducen costos legales, aceleran sus
                  procesos y generan confianza con clientes, socios y reguladores.
                </p>
              </div>

            </div>
          </div>
        </article>

        {/* Author Section */}
        <section className="py-12 bg-gray-50">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center gap-6">
              <div className="w-16 h-16 bg-[#1ECAD3] rounded-full flex items-center justify-center">
                <span className="text-white font-bold text-xl">J</span>
              </div>
              <div>
                <p className="font-bold text-gray-900">Equipo JAAK</p>
                <p className="text-gray-600">
                  Especialistas en firma electrónica, verificación de identidad y
                  cumplimiento regulatorio para el sector financiero mexicano.
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
                  <span className="inline-block px-3 py-1 bg-[#1ECAD3]/10 text-[#1ECAD3] text-xs font-semibold rounded-full mb-3">
                    {post.category}
                  </span>
                  <h3 className="font-bold text-gray-900 hover:text-[#1ECAD3] transition-colors">
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
              ¿Listo para firmar contratos con plena validez legal?
            </h2>
            <p className="text-white/60 text-lg mb-8">
              Descubre cómo JAAK incorpora la certificación NOM-151 en cada firma
              electrónica para que sus contratos digitales sean irrefutables.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link
                href="/contacto"
                className="px-8 py-4 bg-[#1ECAD3] text-white font-bold rounded-lg hover:bg-[#17adb5] transition-all"
              >
                Solicitar demo
              </Link>
              <Link
                href="/plataforma/firma-electronica"
                className="px-8 py-4 bg-white/10 text-white font-bold rounded-lg hover:bg-white/20 transition-all"
              >
                Conocer firma electrónica
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
