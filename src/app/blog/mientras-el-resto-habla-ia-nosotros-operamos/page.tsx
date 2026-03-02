import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Mientras el resto habla de IA, nosotros la operamos | JAAK",
  description:
    "La mayoría de las empresas prometen transformación digital con IA. JAAK la opera en producción, hoy. Descubre por qué esa diferencia lo cambia todo para el fintech mexicano.",
  keywords: [
    "inteligencia artificial fintech",
    "IA en producción",
    "agentes de IA",
    "identidad digital México",
    "operaciones con IA",
    "diferenciador tecnológico",
    "JAAK",
  ],
  openGraph: {
    title: "Mientras el resto habla de IA, nosotros la operamos",
    description:
      "No es un demo. No es una promesa. Es cómo funciona JAAK — con agentes de IA operando en producción, hoy.",
    type: "article",
    publishedTime: "2026-02-26",
    authors: ["JAAK"],
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Mientras el resto habla de IA, nosotros operamos: JAAK en producción",
  description: "JAAK opera biometría e IA en producción con más de 70 millones de usuarios verificados. No es teoría: es infraestructura real funcionando hoy en México.",
  image: "https://jaak.ai/images/blog/jaak-operamos.jpg",
  datePublished: "2026-02-26",
  dateModified: "2026-02-26",
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
    "@id": "https://jaak.ai/blog/mientras-el-resto-habla-ia-nosotros-operamos",
  },
  keywords: "JAAK, IA en producción, biometría producción, KYC real, verificación identidad México, 70 millones usuarios",
  inLanguage: "es-MX",
};

export default function MientrasElRestoHablaIA() {
  const relatedPosts = [
    {
      title: "La inteligencia artificial como infraestructura de confianza",
      slug: "ia-infraestructura-confianza",
      category: "Compliance",
    },
    {
      title: "Tendencias KYC 2026: Lo que toda institución financiera debe saber",
      slug: "tendencias-kyc-2026",
      category: "KYC",
    },
    {
      title: "Onboarding digital: De días a minutos sin sacrificar cumplimiento",
      slug: "onboarding-digital-rapido-cumplimiento",
      category: "Onboarding",
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
                <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
                Volver al blog
              </Link>
            </div>
            <div className="flex items-center gap-3 mb-6">
              <span className="px-3 py-1 bg-emerald-500/10 text-emerald-400 text-sm font-semibold rounded-full">
                IA
              </span>
              <span className="text-white/40 text-sm">26 de febrero, 2026</span>
              <span className="text-white/40 text-sm">•</span>
              <span className="text-white/40 text-sm">6 min de lectura</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-black text-white mb-6">
              Mientras el resto habla de IA, nosotros la operamos
            </h1>
            <p className="text-xl text-white/60">
              No es un demo. No es una hoja de ruta. Es cómo funciona JAAK hoy — con agentes de
              inteligencia artificial operando en producción mientras el equipo trabaja en el campo.
            </p>
          </div>
        </section>

        {/* Featured Image */}
        <section className="bg-white pt-12">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="rounded-2xl overflow-hidden shadow-xl">
              <Image
                src="/images/blog/ia-operativa-diferenciador.jpg"
                alt="Equipo de tecnología operando con agentes de IA en producción"
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
                Hoy estuvimos en uno de los eventos más importantes del ecosistema fintech en México.
                Conversaciones, presentaciones, demos. Y en algún momento de la tarde, mientras nuestro
                equipo hablaba con prospectos en el piso del evento, un agente de inteligencia
                artificial estaba leyendo el código de nuestra plataforma de ventas, identificando un
                bug, corrigiéndolo, y abriendo un pull request.
              </p>
              <p className="text-gray-600 leading-relaxed mb-8">
                Sin que nadie se lo pidiera. Sin un equipo de desarrollo en standby. Solo.
              </p>
              <p className="text-gray-600 leading-relaxed mb-8">
                Eso no es un demo. Es cómo funciona JAAK.
              </p>

              <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-6">
                El problema con &ldquo;usar IA&rdquo;
              </h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                En 2026, casi toda empresa de tecnología financiera dice que &ldquo;usa IA&rdquo;. Es el nuevo
                &ldquo;cloud-first&rdquo; — una declaración que ya no dice nada porque todos la dicen.
              </p>
              <p className="text-gray-600 leading-relaxed mb-4">
                La pregunta relevante ya no es <em>si</em> una empresa usa IA. Es <em>cómo</em> la usa,
                <em>dónde</em> la usa, y <em>qué tan profundo corre en el negocio</em>.
              </p>
              <p className="text-gray-600 leading-relaxed mb-4">
                Hay una diferencia enorme entre:
              </p>
              <ul className="list-disc pl-6 mb-6 space-y-2 text-gray-600">
                <li>Tener un chatbot en el sitio web</li>
                <li>Usar modelos de lenguaje para redactar correos</li>
                <li><strong>Operar tu empresa con agentes de IA en producción, hoy</strong></li>
              </ul>
              <p className="text-gray-600 leading-relaxed mb-4">
                JAAK está en la tercera categoría. Y muy pocas empresas en México pueden decir lo mismo.
              </p>

              <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-6">
                Lo que ocurrió hoy (en tiempo real)
              </h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                En paralelo a las actividades del día, esto sucedió de forma autónoma:
              </p>

              <div className="bg-gray-50 rounded-xl p-6 mb-6 border-l-4 border-emerald-500">
                <p className="font-semibold text-gray-900 mb-2">🤖 Agente de ingeniería</p>
                <p className="text-gray-600">
                  Analizó el repositorio de nuestra plataforma de ventas, identificó inconsistencias
                  en el pipeline de CI/CD, trazó la causa raíz hasta un refactor a medio terminar, y
                  propuso el fix exacto en el código con un pull request documentado.
                </p>
              </div>

              <div className="bg-gray-50 rounded-xl p-6 mb-6 border-l-4 border-[#0066ff]">
                <p className="font-semibold text-gray-900 mb-2">🎯 Agente de ventas</p>
                <p className="text-gray-600">
                  Procesó los leads del evento: escaneó badges con código QR, identificó personas,
                  buscó información pública relevante, y los cargó en el CRM con prioridad, rol,
                  empresa y notas estratégicas. Todo mientras el equipo estaba en conversaciones cara
                  a cara.
                </p>
              </div>

              <div className="bg-gray-50 rounded-xl p-6 mb-8 border-l-4 border-purple-500">
                <p className="font-semibold text-gray-900 mb-2">📸 Agente de identidad</p>
                <p className="text-gray-600">
                  Capturó y procesó imágenes faciales de contactos clave para enrollment biométrico,
                  usando la misma tecnología que JAAK vende a sus clientes del sector financiero.
                </p>
              </div>

              <p className="text-gray-600 leading-relaxed mb-4">
                Eso es multiplicación real de capacidad. No eficiencia marginal — multiplicación.
              </p>

              <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-6">
                Por qué esto es el diferenciador real
              </h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                El mercado de identidad digital y KYC en México está lleno de buenos productos. APIs
                sólidas, cumplimiento regulatorio, integraciones con el SAT y el INE. La tecnología
                base se está commoditizando.
              </p>
              <p className="text-gray-600 leading-relaxed mb-6">
                Lo que no se commoditiza es la capacidad de <strong>construir, iterar y operar a la
                velocidad de la IA</strong>.
              </p>

              {/* Comparison Table */}
              <div className="overflow-hidden rounded-xl border border-gray-200 mb-8">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="bg-[#0a0a0a]">
                      <th className="px-6 py-4 text-left text-white/60 font-semibold">El mercado actual</th>
                      <th className="px-6 py-4 text-left text-[#0066ff] font-semibold">JAAK</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-100">
                    <tr className="bg-white hover:bg-gray-50 transition-colors">
                      <td className="px-6 py-4 text-gray-600">Vende software</td>
                      <td className="px-6 py-4 text-gray-900 font-medium">Opera con IA internamente</td>
                    </tr>
                    <tr className="bg-white hover:bg-gray-50 transition-colors">
                      <td className="px-6 py-4 text-gray-600">Promete velocidad de integración</td>
                      <td className="px-6 py-4 text-gray-900 font-medium">La demuestra con su propio stack</td>
                    </tr>
                    <tr className="bg-white hover:bg-gray-50 transition-colors">
                      <td className="px-6 py-4 text-gray-600">Documenta APIs</td>
                      <td className="px-6 py-4 text-gray-900 font-medium">Integra en días, no semanas</td>
                    </tr>
                    <tr className="bg-white hover:bg-gray-50 transition-colors">
                      <td className="px-6 py-4 text-gray-600">Habla de innovación</td>
                      <td className="px-6 py-4 text-gray-900 font-medium">Es el caso de uso</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <p className="text-gray-600 leading-relaxed mb-4">
                Cuando un cliente de JAAK pregunta &ldquo;¿cuánto tardaría en integrar X?&rdquo;, la respuesta
                no viene de una estimación de proyecto. Viene de un equipo que ya sabe cómo se ve esa
                integración porque lo ha hecho — con sus propios agentes, en su propio producto.
              </p>

              <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-6">
                Lo que esto significa para el fintech mexicano
              </h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                En México hay aproximadamente 1,000 empresas fintech activas, con más de 70 millones
                de usuarios finales en sus plataformas. La mayoría enfrenta el mismo reto: crecer sin
                escalar proporcionalmente el costo operativo.
              </p>
              <p className="text-gray-600 leading-relaxed mb-4">
                La promesa de la IA siempre ha sido esa — hacer más con menos. Pero entre la promesa
                y la ejecución hay una brecha enorme de conocimiento, infraestructura y cultura
                organizacional.
              </p>
              <p className="text-gray-600 leading-relaxed mb-4">
                JAAK no solo vende la tecnología de identidad que las fintechs necesitan para cumplir
                regulación. Está desarrollando — en producción, con sus propios procesos — el modelo
                operativo de la empresa financiera del futuro.
              </p>

              <div className="bg-[#0066ff]/5 border-l-4 border-[#0066ff] p-6 my-8">
                <p className="text-gray-700 font-medium mb-2">El punto clave:</p>
                <p className="text-gray-600">
                  Esa experiencia no se compra en un webinar. No se aprende en un workshop de
                  &ldquo;adopción de IA&rdquo;. Se adquiere haciéndolo — y JAAK ya lo está haciendo.
                </p>
              </div>

              <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-6">
                La pregunta para 2026
              </h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                Los reguladores van a exigir más. Los usuarios van a tolerar menos fricción. Los
                márgenes van a seguir comprimiéndose.
              </p>
              <p className="text-gray-600 leading-relaxed mb-4">
                La pregunta no es si tu fintech va a adoptar inteligencia artificial en sus
                operaciones. Ya no es opcional.
              </p>
              <p className="text-gray-600 leading-relaxed mb-4">
                La pregunta es: <strong>¿vas a hacerlo solo, o con alguien que ya sabe cómo se hace?</strong>
              </p>

              <div className="bg-[#0a0a0a] rounded-xl p-8 my-12">
                <h3 className="text-xl font-bold text-white mb-4">
                  Conclusión
                </h3>
                <p className="text-white/80">
                  Hoy, en un solo día, JAAK capturó leads con biometría facial, corrigió bugs en
                  producción con un agente de ingeniería, e investigó y cargó contactos en el CRM
                  de forma autónoma. Todo mientras el equipo estaba en el campo. Eso no es el
                  futuro de la tecnología financiera en México. Es el presente. Y es la ventaja
                  competitiva que JAAK pone al servicio de sus clientes.
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
                  Especialistas en verificación de identidad y cumplimiento regulatorio para el
                  sector financiero mexicano.
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
              ¿Listo para operar con IA, no solo hablar de ella?
            </h2>
            <p className="text-white/60 text-lg mb-8">
              Descubre cómo JAAK puede ayudarte a integrar identidad digital e inteligencia
              artificial en tus procesos financieros.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link
                href="/contacto"
                className="px-8 py-4 bg-[#0066ff] text-white font-bold rounded-lg hover:bg-[#0052cc] transition-all"
              >
                Solicitar demo
              </Link>
              <Link
                href="/plataforma"
                className="px-8 py-4 bg-white/10 text-white font-bold rounded-lg hover:bg-white/20 transition-all"
              >
                Ver la plataforma
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
