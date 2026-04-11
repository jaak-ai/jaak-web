import Link from "next/link";
import Image from "next/image";
import { blogPosts, categoryColors } from "@/lib/blog";

const posts = blogPosts.slice(0, 3);

export default function RecentBlogPosts() {
  return (
    <section className="py-24 relative overflow-hidden" style={{ background: "#F8FAFC" }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-12">
          <div>
            <div
              className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-semibold mb-4"
              style={{ color: "#2DB6C1", border: "1px solid rgba(45,182,193,0.22)", background: "rgba(45,182,193,0.08)" }}
            >
              Blog JAAK
            </div>
            <h2 className="text-3xl md:text-4xl font-black leading-tight" style={{ color: "#0E1133" }}>
              Regulación, identidad y cumplimiento
            </h2>
            <p className="mt-3 text-base" style={{ color: "#64748B" }}>
              Guías prácticas para empresas que operan en sectores regulados.
            </p>
          </div>
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 text-sm font-semibold whitespace-nowrap transition-colors"
            style={{ color: "#2DB6C1" }}
          >
            Ver todos los artículos
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </Link>
        </div>

        {/* Cards */}
        <div className="grid md:grid-cols-3 gap-6">
          {posts.map((post) => {
            const colors = categoryColors[post.category] ?? { bg: "bg-gray-100", text: "text-gray-600" };
            return (
              <Link
                key={post.slug}
                href={`/blog/${post.slug}`}
                className="group flex flex-col bg-white rounded-2xl overflow-hidden border border-gray-100 hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
              >
                {/* Cover */}
                {post.image && (
                  <div className="relative h-44 w-full overflow-hidden">
                    <Image
                      src={post.image}
                      alt={post.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                      sizes="(max-width: 768px) 100vw, 33vw"
                    />
                  </div>
                )}

                {/* Content */}
                <div className="flex flex-col flex-1 p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <span className={`text-xs font-bold px-2.5 py-1 rounded-full ${colors.bg} ${colors.text}`}>
                      {post.category}
                    </span>
                    <span className="text-xs" style={{ color: "#94A3B8" }}>{post.readTime}</span>
                  </div>

                  <h3
                    className="text-[15px] font-bold leading-snug mb-3 group-hover:text-[#2DB6C1] transition-colors"
                    style={{ color: "#0E1133" }}
                  >
                    {post.title}
                  </h3>

                  <p className="text-sm leading-relaxed flex-1" style={{ color: "#64748B" }}>
                    {post.excerpt.length > 110 ? post.excerpt.slice(0, 110) + "…" : post.excerpt}
                  </p>

                  <div className="mt-5 flex items-center gap-1 text-xs font-semibold" style={{ color: "#2DB6C1" }}>
                    Leer artículo
                    <svg className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                    </svg>
                  </div>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}
