import Header from "@/components/Header";
import Footer from "@/components/Footer";
import NewsletterForm from "@/components/NewsletterForm";
import Link from "next/link";
import Image from "next/image";
import { blogPosts, categoryColors } from "@/lib/blog";

export const metadata = {
  title: "Blog | JAAK",
  description: "Artículos sobre verificación de identidad, cumplimiento regulatorio, seguridad biométrica y las últimas tendencias en KYC para el sector financiero mexicano.",
};

export default function Blog() {
  return (
    <>
      <Header />
      <main>
        {/* Hero Section */}
        <section className="pt-32 pb-20 bg-[#0a0a0a]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto text-center">
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#0066ff]/10 border border-[#0066ff]/20 rounded-full mb-6">
                <span className="w-2 h-2 bg-[#0066ff] rounded-full"></span>
                <span className="text-[#0066ff] text-sm font-medium">Recursos</span>
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-white mb-6">
                Blog
              </h1>
              <p className="text-xl text-white/60">
                Explora nuestros artículos sobre verificación de identidad, cumplimiento regulatorio y seguridad.
                Mantente al día con las últimas tendencias en KYC, normativas de la CNBV y mejores prácticas
                para proteger tu organización.
              </p>
            </div>
          </div>
        </section>

        {/* Blog Posts Grid */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {blogPosts.map((post, index) => {
                const colors = categoryColors[post.category] || { bg: "bg-gray-100", text: "text-gray-600" };
                return (
                  <article
                    key={index}
                    className="bg-white border border-gray-200 rounded-2xl overflow-hidden hover:shadow-xl transition-shadow duration-300 flex flex-col"
                  >
                    {/* Card Header with image or gradient fallback */}
                    {post.image ? (
                      <div className="h-48 relative overflow-hidden">
                        <Image
                          src={post.image}
                          alt={post.title}
                          fill
                          className="object-cover object-top"
                        />
                      </div>
                    ) : (
                      <div className="h-48 bg-gradient-to-br from-[#0a0a0a] to-[#1a1a2e] flex items-center justify-center p-6">
                        <div className="w-16 h-16 bg-white/10 rounded-2xl flex items-center justify-center">
                          <svg className="w-8 h-8 text-[#0066ff]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z" />
                          </svg>
                        </div>
                      </div>
                    )}

                    {/* Card Content */}
                    <div className="p-6 flex flex-col flex-grow">
                      <div className="flex items-center gap-3 mb-4">
                        <span className={`px-3 py-1 ${colors.bg} ${colors.text} text-xs font-semibold rounded-full`}>
                          {post.category}
                        </span>
                        <span className="text-gray-400 text-sm">{post.date}</span>
                      </div>

                      <h2 className="text-xl font-bold text-gray-900 mb-3 line-clamp-2 hover:text-[#0066ff] transition-colors">
                        <Link href={`/blog/${post.slug}`}>
                          {post.title}
                        </Link>
                      </h2>

                      <p className="text-gray-600 text-sm leading-relaxed line-clamp-3 flex-grow">
                        {post.excerpt}
                      </p>

                      <div className="mt-6 pt-4 border-t border-gray-100">
                        <Link
                          href={`/blog/${post.slug}`}
                          className="inline-flex items-center text-[#0066ff] font-semibold text-sm hover:gap-3 gap-2 transition-all"
                        >
                          Leer más
                          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                          </svg>
                        </Link>
                      </div>
                    </div>
                  </article>
                );
              })}
            </div>
          </div>
        </section>

        {/* Newsletter CTA */}
        <section className="py-20 bg-gray-50">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <div className="bg-[#0a0a0a] rounded-3xl p-12">
              <div className="w-16 h-16 bg-[#0066ff]/20 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-[#0066ff]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <h2 className="text-3xl md:text-4xl font-black text-white mb-4">
                Mantente informado
              </h2>
              <p className="text-white/60 text-lg mb-8 max-w-2xl mx-auto">
                Recibe las últimas actualizaciones sobre regulación, seguridad y verificación de identidad
                directamente en tu correo.
              </p>
              <NewsletterForm />
            </div>
          </div>
        </section>

        {/* Categories Section */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-black text-gray-900 mb-4">
                Explora por categoría
              </h2>
              <p className="text-xl text-gray-600">
                Encuentra contenido especializado según tus intereses
              </p>
            </div>
            <div className="flex flex-wrap justify-center gap-4">
              {Object.entries(categoryColors).map(([category, colors]) => (
                <Link
                  key={category}
                  href={`/blog?categoria=${category.toLowerCase()}`}
                  className={`px-6 py-3 ${colors.bg} ${colors.text} font-semibold rounded-full hover:opacity-80 transition-opacity`}
                >
                  {category}
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gray-50">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl md:text-4xl font-black text-gray-900 mb-6">
              ¿Listo para transformar tu verificación de identidad?
            </h2>
            <p className="text-xl text-gray-600 mb-8">
              Agenda una demo personalizada y descubre cómo JAAK puede ayudar a tu organización.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link
                href="/contacto"
                className="px-8 py-4 bg-[#0066ff] text-white font-bold rounded-lg hover:bg-[#0052cc] transition-all"
              >
                Solicitar demo
              </Link>
              <Link
                href="https://docs.jaak.ai"
                target="_blank"
                className="px-8 py-4 bg-gray-100 text-gray-900 font-bold rounded-lg hover:bg-gray-200 transition-all"
              >
                Ver documentación
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
