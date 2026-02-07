import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "La inteligencia artificial como infraestructura de confianza: liderazgo, gobernanza y tecnología responsable | JAAK",
  description: "La IA en sectores estratégicos exige más que eficiencia: requiere gobernanza, trazabilidad y liderazgo responsable. Analizamos los Principios de Chapultepec y cómo JAAK integra ética y tecnología.",
  keywords: ["inteligencia artificial", "gobernanza IA", "Principios de Chapultepec", "tecnología responsable", "liderazgo tecnológico", "protección de datos", "IA ética", "JAAK"],
  openGraph: {
    title: "La inteligencia artificial como infraestructura de confianza: liderazgo, gobernanza y tecnología responsable",
    description: "La IA en sectores estratégicos exige más que eficiencia: requiere gobernanza, trazabilidad y liderazgo responsable.",
    type: "article",
    publishedTime: "2026-02-07",
    authors: ["JAAK"],
  },
};

export default function IAInfraestructuraConfianza() {
  const relatedPosts = [
    {
      title: "La protección de datos personales: un compromiso que va más allá del cumplimiento",
      slug: "proteccion-datos-personales",
      category: "Seguridad",
    },
    {
      title: "Mejores prácticas de compliance para empresas reguladas en México",
      slug: "mejores-practicas-compliance-mexico",
      category: "Compliance",
    },
    {
      title: "Guía completa de las disposiciones CNBV para verificación de identidad",
      slug: "disposiciones-cnbv-verificacion-identidad",
      category: "Regulación",
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
              <span className="px-3 py-1 bg-indigo-500/10 text-indigo-500 text-sm font-semibold rounded-full">
                Compliance
              </span>
              <span className="text-white/40 text-sm">7 de febrero, 2026</span>
              <span className="text-white/40 text-sm">&bull;</span>
              <span className="text-white/40 text-sm">10 min de lectura</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-black text-white mb-6">
              La inteligencia artificial como infraestructura de confianza: liderazgo, gobernanza y tecnología responsable
            </h1>
            <p className="text-xl text-white/60">
              La conversación sobre IA ya no es solo técnica: es una decisión de liderazgo.
              Analizamos cómo los Principios de Chapultepec redefinen la gobernanza tecnológica
              y por qué la confianza se construye desde el diseño.
            </p>
          </div>
        </section>

        {/* Featured Image */}
        <section className="bg-white pt-12">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="rounded-2xl overflow-hidden shadow-xl">
              <Image
                src="/images/blog/ia-infraestructura-confianza.jpg"
                alt="Inteligencia artificial como infraestructura de confianza: liderazgo, gobernanza y tecnología responsable"
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
                La conversación sobre inteligencia artificial suele centrarse en eficiencia, automatización
                y escalabilidad. Sin embargo, conforme la IA se integra en sectores estratégicos —como el
                financiero, el legal, las telecomunicaciones o la identidad digital— la discusión
                inevitablemente cambia de nivel: ya no se trata solo de lo que la tecnología puede hacer,
                sino de cómo debe gobernarse.
              </p>

              <p className="text-gray-600 leading-relaxed mb-4">
                En este punto, la inteligencia artificial deja de ser un tema técnico para convertirse
                en una decisión de liderazgo.
              </p>

              <p className="text-gray-600 leading-relaxed mb-4">
                Hoy, las organizaciones enfrentan un reto común: integrar inteligencia artificial sin
                comprometer la confianza, la trazabilidad ni el cumplimiento normativo. La respuesta no
                está en adoptar herramientas aisladas, sino en diseñar tecnología como parte de una
                infraestructura sólida de procesos, controles y evidencia.
              </p>

              <div className="bg-indigo-500/5 border-l-4 border-indigo-500 p-6 my-8">
                <p className="text-gray-700 font-medium mb-2">En este artículo encontrarás:</p>
                <p className="text-gray-600">
                  Un análisis sobre cómo los Principios de Chapultepec redefinen la gobernanza de la IA
                  en México, por qué el liderazgo tecnológico va más allá del código, y cómo JAAK
                  construye tecnología explicable, trazable y responsable.
                </p>
              </div>

              <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-6">
                IA y liderazgo: automatizar también es decidir
              </h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                En enero de 2026, México dio un paso relevante en esta conversación con la publicación
                de los <strong>Principios de Chapultepec</strong>, una Declaración de ética y buenas
                prácticas para el uso y desarrollo de la Inteligencia Artificial. Este marco parte de
                una premisa fundamental: la tecnología nunca es socialmente neutra.
              </p>
              <p className="text-gray-600 leading-relaxed mb-4">
                Uno de sus principios centrales establece que toda decisión apoyada por inteligencia
                artificial debe tener responsables humanos. Esta afirmación redefine por completo el
                rol del liderazgo tecnológico.
              </p>
              <p className="text-gray-600 leading-relaxed mb-4">
                Liderar IA no significa delegar decisiones a una máquina. Significa definir los criterios
                bajo los cuales la tecnología opera, establecer quién diseña, quién supervisa y quién
                responde por sus efectos. En otras palabras, la IA no reemplaza el juicio humano: lo
                amplifica, siempre que exista gobernanza clara.
              </p>

              <div className="bg-gray-50 rounded-xl p-8 my-8">
                <p className="text-gray-700 font-semibold text-lg">
                  Liderar IA no es delegar decisiones a una máquina. Es definir los criterios bajo los
                  cuales la tecnología opera y quién responde por sus efectos.
                </p>
              </div>

              <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-6">
                Si una decisión no puede explicarse, no debe automatizarse
              </h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                Otro principio clave señala que si una decisión no puede explicarse, no debe automatizarse.
                Este punto resulta especialmente relevante en entornos regulados, donde las organizaciones
                deben poder reconstruir cómo y por qué se tomó una decisión determinada.
              </p>
              <p className="text-gray-600 leading-relaxed mb-4">
                Aquí se marca una diferencia crítica entre &quot;usar IA&quot; y liderar su implementación.
              </p>
              <p className="text-gray-600 leading-relaxed mb-4">
                En JAAK, la inteligencia artificial no opera como una caja negra. Los modelos tecnológicos
                se integran en flujos diseñados para generar evidencia, permitir auditoría y sostener
                decisiones ante marcos legales y regulatorios. La verificación de identidad, la biometría
                facial, el OCR y la gestión de datos funcionan como parte de sistemas explicables,
                documentados y trazables.
              </p>
              <p className="text-gray-600 leading-relaxed mb-4">
                Esta aproximación no solo responde a una exigencia técnica, sino a una postura de
                liderazgo: la tecnología debe poder entenderse, cuestionarse y validarse.
              </p>

              <div className="bg-indigo-500/5 border-l-4 border-indigo-500 p-6 my-8">
                <p className="text-gray-700">
                  En JAAK, la verificación de identidad, la biometría facial, el OCR y la gestión de datos
                  funcionan como parte de sistemas explicables, documentados y trazables. La tecnología debe
                  poder entenderse, cuestionarse y validarse.
                </p>
              </div>

              <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-6">
                Gobernanza colectiva: tecnología que no se diseña en aislamiento
              </h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                Los Principios de Chapultepec también destacan que la inteligencia artificial se gobierna
                mejor cuando se decide en colectivo. Esto implica reconocer que las decisiones sobre IA
                no son exclusivamente técnicas, sino organizacionales, éticas y estratégicas.
              </p>
              <p className="text-gray-600 leading-relaxed mb-4">
                En la práctica, esto se traduce en:
              </p>
              <ul className="list-disc pl-6 mb-6 space-y-3 text-gray-600">
                <li>Involucrar áreas legales, de cumplimiento y seguridad</li>
                <li>Evaluar riesgos antes de automatizar</li>
                <li>Comprender a quién y cómo afecta cada decisión</li>
                <li>Considerar impactos sociales y operativos</li>
              </ul>
              <p className="text-gray-600 leading-relaxed mb-4">
                Este enfoque coincide con modelos contemporáneos de liderazgo tecnológico descritos en
                <em> Human + Machine</em>, donde Paul R. Daugherty plantea que la verdadera ventaja
                competitiva de la IA surge cuando las organizaciones combinan tecnología con criterio
                humano, procesos bien diseñados y gobernanza clara.
              </p>

              <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-6">
                JAAK: datos, evidencia y confianza como activos estratégicos
              </h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                Otro principio esencial establece que los datos deben gestionarse con responsabilidad,
                garantizando su calidad, representatividad, seguridad y respeto a la privacidad.
              </p>
              <p className="text-gray-600 leading-relaxed mb-4">
                Este punto se alinea directamente con la forma en que JAAK concibe su tecnología.
                La inteligencia artificial aplicada a identidad digital requiere mucho más que precisión
                técnica: exige una gestión responsable de información sensible durante todo su ciclo de vida.
              </p>
              <p className="text-gray-600 leading-relaxed mb-4">
                Por ello, en JAAK, la seguridad de la información, la protección de datos personales y
                la trazabilidad no son capas adicionales, sino elementos estructurales del diseño
                tecnológico. Cuando la IA se construye bajo estos criterios, deja de ser un riesgo y
                se convierte en un habilitador de confianza institucional.
              </p>

              <div className="bg-[#0a0a0a] rounded-xl p-8 my-8">
                <p className="text-white text-xl font-medium italic text-center">
                  &quot;La seguridad de la información, la protección de datos personales y la trazabilidad
                  no son capas adicionales, sino elementos estructurales del diseño tecnológico.&quot;
                </p>
              </div>

              <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-6">
                Liderar tecnología hoy: más allá del código
              </h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                Los Principios de Chapultepec refuerzan una idea fundamental: la inteligencia artificial
                solo es valiosa si genera bienestar, amplía derechos y se orienta al bien común. Esto
                exige líderes capaces de mirar más allá de la automatización inmediata y comprender el
                impacto real de la tecnología en personas, organizaciones y sociedad.
              </p>
              <p className="text-gray-600 leading-relaxed mb-4">
                Cada vez más mujeres líderes están ocupando este espacio. No desde la programación,
                sino desde la toma de decisiones estratégicas, la gobernanza tecnológica y el diseño
                de soluciones responsables. Son ellas quienes están redefiniendo cómo se crea, se adopta
                y se lidera la inteligencia artificial en contextos complejos.
              </p>
              <p className="text-gray-600 leading-relaxed mb-4">
                Entender la IA como infraestructura ética, tecnológica y organizacional no es una
                tendencia: es una necesidad. Y liderarla, hoy más que nunca, va mucho más allá del código.
              </p>

              <div className="bg-gray-50 rounded-xl p-8 my-12">
                <h3 className="text-xl font-bold text-gray-900 mb-4">
                  Referencia para consulta
                </h3>
                <p className="text-gray-600 mb-4">
                  <strong>Principios de Chapultepec</strong> — Declaración de ética y buenas prácticas
                  para el uso y desarrollo de la Inteligencia Artificial (enero 2026).
                </p>
                <p className="text-gray-600 mb-6">
                  Documento oficial disponible para consulta pública en el sitio de la Secretaría de
                  Ciencia, Humanidades, Tecnología e Innovación.
                </p>
                <a
                  href="https://secihti.mx/ciencia-y-humanidades/principios-de-chapultepec-declaracion-de-etica-y-buenas-practicas-para-el-uso-y-desarrollo-de-la-inteligencia-artificial/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-[#0066ff] font-semibold hover:underline"
                >
                  Consultar documento oficial
                  <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                </a>
              </div>

              <div className="bg-indigo-500/5 rounded-xl p-8 my-12">
                <h3 className="text-xl font-bold text-gray-900 mb-4">
                  ¿Tu organización está preparada para liderar la IA de forma responsable?
                </h3>
                <p className="text-gray-600 mb-6">
                  Descubre cómo JAAK integra gobernanza, trazabilidad y cumplimiento normativo en cada
                  proceso de verificación de identidad.
                </p>
                <Link
                  href="/contacto"
                  className="inline-flex items-center px-6 py-3 bg-[#0066ff] text-white font-bold rounded-lg hover:bg-[#0052cc] transition-all"
                >
                  Conoce JAAK
                  <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </Link>
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
              ¿Lista tu organización para una IA gobernada y responsable?
            </h2>
            <p className="text-white/60 text-lg mb-8">
              Descubre cómo JAAK construye tecnología explicable, trazable y alineada con los más altos
              estándares de cumplimiento normativo.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link
                href="/contacto"
                className="px-8 py-4 bg-[#0066ff] text-white font-bold rounded-lg hover:bg-[#0052cc] transition-all"
              >
                Solicitar demo
              </Link>
              <Link
                href="/soluciones/kyc"
                className="px-8 py-4 bg-white/10 text-white font-bold rounded-lg hover:bg-white/20 transition-all"
              >
                Conocer solución KYC
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
