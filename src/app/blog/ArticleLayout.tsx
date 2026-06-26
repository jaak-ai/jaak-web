import Header from "@/components/Header";
import Footer from "@/components/Footer";
import NewsletterForm from "@/components/NewsletterForm";
import Link from "next/link";
import Image from "next/image";
import { blogPosts, categoryColors } from "@/lib/blog";
import ReadingProgress from "./ReadingProgress";
import ArticleTOC from "./ArticleTOC";
import type { ReactNode } from "react";

interface RelatedPost {
  title: string;
  slug: string;
  category: string;
}

interface ArticleLayoutProps {
  title: string;
  subtitle?: string;
  category: string;
  date: string;
  readTime: string;
  slug: string;
  image?: string;
  imageAlt?: string;
  jsonLd?: object;
  relatedPosts?: RelatedPost[];
  children: ReactNode;
}

const FONT = "var(--font-montserrat), Montserrat, sans-serif";

const JAVIER_CATEGORIES = ["IA", "KYC", "Seguridad", "Análisis", "Fraude"];

const AUTHORS = {
  javier: {
    name: "Javier Moya",
    role: "CTO · JAAK",
    initials: "JM",
    gradient: "linear-gradient(135deg, #0066ff 0%, #1ECAD3 100%)",
    bio: "Arquitectura de sistemas de identidad digital, inteligencia artificial aplicada y biometría de alta seguridad para sectores regulados.",
  },
  arianna: {
    name: "Arianna Quezada",
    role: "CEO · JAAK",
    initials: "AQ",
    gradient: "linear-gradient(135deg, #1ECAD3 0%, #0066ff 100%)",
    bio: "Liderazgo en infraestructura de confianza digital, regulación financiera y transformación del sector fintech en Latinoamérica.",
  },
};

export default function ArticleLayout({
  title,
  subtitle,
  category,
  date,
  readTime,
  slug,
  image,
  imageAlt,
  jsonLd,
  relatedPosts,
  children,
}: ArticleLayoutProps) {
  const colors = categoryColors[category] || {
    bg: "bg-white/10",
    text: "text-white/60",
  };

  const author = JAVIER_CATEGORIES.includes(category)
    ? AUTHORS.javier
    : AUTHORS.arianna;

  const related =
    relatedPosts ??
    blogPosts
      .filter((p) => p.slug !== slug)
      .sort((a, b) => (a.category === category ? -1 : b.category === category ? 1 : 0))
      .slice(0, 3);

  return (
    <>
      {jsonLd && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      )}

      <ReadingProgress />
      <Header />

      <main style={{ background: "#202945", fontFamily: FONT }}>
        {/* Article CSS overrides for dark theme */}
        <style>{`
          .jaak-article-body .text-gray-600 { color: rgba(255,255,255,0.62) !important; }
          .jaak-article-body .text-gray-500 { color: rgba(255,255,255,0.52) !important; }
          .jaak-article-body .text-gray-700 { color: rgba(255,255,255,0.74) !important; }
          .jaak-article-body .text-gray-900 { color: rgba(255,255,255,0.92) !important; }
          .jaak-article-body strong, .jaak-article-body b { color: rgba(255,255,255,0.92) !important; }
          .jaak-article-body em, .jaak-article-body i { color: rgba(255,255,255,0.75) !important; }
          .jaak-article-body li { color: rgba(255,255,255,0.62) !important; }
          .jaak-article-body li strong { color: rgba(255,255,255,0.88) !important; }
          .jaak-article-body h2 { color: rgba(255,255,255,0.95) !important; letter-spacing: -0.5px; }
          .jaak-article-body h3 { color: rgba(255,255,255,0.90) !important; letter-spacing: -0.3px; }
          .jaak-article-body h4 { color: rgba(255,255,255,0.88) !important; }
          .jaak-article-body .text-xl { color: rgba(255,255,255,0.68) !important; }
          /* Callout boxes: gray */
          .jaak-article-body .bg-gray-50 { background: rgba(255,255,255,0.05) !important; }
          /* Callout boxes: blue → teal */
          .jaak-article-body [class*="bg-[#0066ff]"] { background: rgba(30,202,211,0.08) !important; }
          .jaak-article-body [class*="border-[#0066ff]"] { border-color: #1ECAD3 !important; }
          .jaak-article-body [class*="text-[#0066ff]"] { color: #1ECAD3 !important; }
          /* Callout boxes: amber */
          .jaak-article-body .bg-amber-50 { background: rgba(251,191,36,0.07) !important; }
          .jaak-article-body .text-amber-800 { color: rgba(251,191,36,0.92) !important; }
          .jaak-article-body .text-amber-700 { color: rgba(251,191,36,0.80) !important; }
          .jaak-article-body .border-amber-400 { border-color: rgba(251,191,36,0.70) !important; }
          /* CTA buttons inside article body */
          .jaak-article-body [class*="bg-[#0066ff]"]:not([class*="bg-[#0066ff]/"]) {
            background: #1ECAD3 !important;
            color: #202945 !important;
          }
          .jaak-article-body .bg-gray-100 { background: rgba(255,255,255,0.08) !important; color: rgba(255,255,255,0.85) !important; }
          .jaak-article-body .text-gray-900.font-bold { color: rgba(255,255,255,0.88) !important; }
          /* prose base */
          .jaak-article-body .prose p,
          .jaak-article-body p { line-height: 1.85; }
          /* Dividers */
          .jaak-article-body .border-gray-100,
          .jaak-article-body .border-gray-200 { border-color: rgba(255,255,255,0.07) !important; }
          /* Tables */
          .jaak-article-body table th { background: rgba(30,202,211,0.08) !important; color: rgba(255,255,255,0.90) !important; border-color: rgba(255,255,255,0.10) !important; }
          .jaak-article-body table td { color: rgba(255,255,255,0.65) !important; border-color: rgba(255,255,255,0.07) !important; }
          .jaak-article-body table tr:nth-child(even) { background: rgba(255,255,255,0.02) !important; }
          /* fade in */
          @keyframes articleFadeIn {
            from { opacity: 0; transform: translateY(16px); }
            to { opacity: 1; transform: translateY(0); }
          }
          .article-fade { animation: articleFadeIn 0.5s ease both; }
          .article-fade-1 { animation: articleFadeIn 0.5s 0.10s ease both; }
          .article-fade-2 { animation: articleFadeIn 0.5s 0.20s ease both; }
          .article-fade-3 { animation: articleFadeIn 0.5s 0.30s ease both; }
        `}</style>

        {/* ── HERO ────────────────────────────────────────── */}
        <section
          className="relative pt-28 pb-12 overflow-hidden"
          style={{
            background:
              "radial-gradient(ellipse 70% 60% at 50% 0%, rgba(30,202,211,0.08) 0%, transparent 65%), #202945",
          }}
        >
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
            {/* Back link */}
            <div className="article-fade mb-7">
              <Link
                href="/blog"
                className="inline-flex items-center gap-1.5 text-xs font-bold transition-colors duration-150 hover:text-[#1ECAD3]"
                style={{ color: "rgba(255,255,255,0.40)", fontFamily: FONT }}
              >
                <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M15 19l-7-7 7-7" />
                </svg>
                Blog JAAK
              </Link>
            </div>

            {/* Meta row */}
            <div className="article-fade-1 flex flex-wrap items-center gap-3 mb-6">
              <span
                className={`inline-block px-2.5 py-0.5 rounded-full text-[10px] font-bold tracking-wide uppercase ${colors.bg} ${colors.text}`}
                style={{ fontFamily: FONT }}
              >
                {category}
              </span>
              <span
                className="flex items-center gap-1 text-xs font-medium"
                style={{ color: "#1ECAD3", fontFamily: FONT }}
              >
                <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                {readTime}
              </span>
              <span className="text-xs" style={{ color: "rgba(255,255,255,0.28)", fontFamily: FONT }}>
                {date}
              </span>
            </div>

            {/* Title */}
            <h1
              className="article-fade-2 font-black text-white leading-tight mb-5"
              style={{
                fontFamily: FONT,
                fontSize: "clamp(26px,3.5vw,44px)",
                letterSpacing: "-1.2px",
                lineHeight: 1.15,
              }}
            >
              {title}
            </h1>

            {/* Subtitle */}
            {subtitle && (
              <p
                className="article-fade-3 text-base leading-relaxed"
                style={{ color: "rgba(255,255,255,0.55)", fontFamily: FONT, lineHeight: 1.8 }}
              >
                {subtitle}
              </p>
            )}
          </div>

          {/* Bottom fade */}
          <div
            className="absolute bottom-0 left-0 right-0 h-8 pointer-events-none"
            style={{ background: "linear-gradient(to bottom, transparent, #202945)" }}
          />
        </section>

        {/* ── FEATURED IMAGE ─────────────────────────────── */}
        {image && (
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 -mt-2 mb-0">
            <div
              className="rounded-2xl overflow-hidden"
              style={{
                boxShadow: "0 24px 48px rgba(0,0,0,0.35)",
                border: "1px solid rgba(255,255,255,0.06)",
              }}
            >
              <Image
                src={image}
                alt={imageAlt ?? title}
                width={1200}
                height={630}
                className="w-full h-auto"
                priority
              />
            </div>
          </div>
        )}

        {/* ── ARTICLE BODY ───────────────────────────────── */}
        <section className="py-12" style={{ background: "#202945" }}>
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col lg:flex-row gap-14">
              {/* Main content */}
              <article className="min-w-0 flex-1">
                <div
                  className="jaak-article-body prose prose-lg max-w-none"
                  style={{ fontFamily: FONT }}
                >
                  {children}
                </div>
              </article>

              {/* TOC sidebar — hidden on mobile */}
              <div className="hidden lg:block w-52 shrink-0">
                <ArticleTOC />
              </div>
            </div>
          </div>
        </section>

        {/* ── AUTHOR ─────────────────────────────────────── */}
        <section
          className="py-12"
          style={{ borderTop: "1px solid rgba(255,255,255,0.06)", background: "#202945" }}
        >
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
            <div
              className="flex items-start gap-5 p-6 rounded-2xl border"
              style={{
                background: "rgba(255,255,255,0.04)",
                borderColor: "rgba(255,255,255,0.08)",
              }}
            >
              <div
                className="w-14 h-14 rounded-2xl flex items-center justify-center text-white font-black text-lg shrink-0"
                style={{ background: author.gradient, fontFamily: FONT }}
              >
                {author.initials}
              </div>
              <div>
                <p
                  className="font-black text-white text-base leading-tight mb-0.5"
                  style={{ fontFamily: FONT, letterSpacing: "-0.4px" }}
                >
                  {author.name}
                </p>
                <p
                  className="text-xs font-bold mb-3"
                  style={{ color: "#1ECAD3", fontFamily: FONT }}
                >
                  {author.role}
                </p>
                <p
                  className="text-sm leading-relaxed"
                  style={{ color: "rgba(255,255,255,0.52)", fontFamily: FONT }}
                >
                  {author.bio}
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ── RELATED POSTS ──────────────────────────────── */}
        {related.length > 0 && (
          <section
            className="py-14"
            style={{
              borderTop: "1px solid rgba(255,255,255,0.05)",
              background: "rgba(255,255,255,0.015)",
            }}
          >
            <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
              <p
                className="text-[10px] font-bold tracking-widest uppercase mb-2"
                style={{ color: "#1ECAD3", fontFamily: FONT }}
              >
                Seguir leyendo
              </p>
              <h2
                className="text-xl font-black text-white mb-8"
                style={{ fontFamily: FONT, letterSpacing: "-0.5px" }}
              >
                Artículos relacionados
              </h2>
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {related.map((post) => {
                  const rc = categoryColors[post.category] || {
                    bg: "bg-white/10",
                    text: "text-white/60",
                  };
                  return (
                    <Link
                      key={post.slug}
                      href={`/blog/${post.slug}`}
                      className="group block p-5 rounded-xl border transition-all duration-200 related-post-card"
                    >
                      <span
                        className={`inline-block px-2 py-0.5 rounded-full text-[9px] font-bold tracking-wide uppercase mb-3 ${rc.bg} ${rc.text}`}
                        style={{ fontFamily: FONT }}
                      >
                        {post.category}
                      </span>
                      <p
                        className="text-sm font-black text-white leading-snug group-hover:text-[#1ECAD3] transition-colors duration-150"
                        style={{ fontFamily: FONT, letterSpacing: "-0.3px" }}
                      >
                        {post.title}
                      </p>
                    </Link>
                  );
                })}
              </div>
            </div>
          </section>
        )}

        {/* ── NEWSLETTER ─────────────────────────────────── */}
        <section
          className="py-20"
          style={{ background: "#202945", borderTop: "1px solid rgba(255,255,255,0.05)" }}
        >
          <div className="max-w-xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <div
              className="w-12 h-12 rounded-xl flex items-center justify-center mx-auto mb-5 border"
              style={{
                background: "rgba(30,202,211,0.10)",
                borderColor: "rgba(30,202,211,0.20)",
              }}
            >
              <svg
                className="w-5 h-5"
                style={{ color: "#1ECAD3" }}
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={1.5}
                  d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                />
              </svg>
            </div>
            <h2
              className="font-black text-white mb-3"
              style={{
                fontFamily: FONT,
                fontSize: "clamp(20px,2.5vw,28px)",
                letterSpacing: "-0.8px",
              }}
            >
              Recibe perspectivas sobre{" "}
              <span style={{ color: "#1ECAD3" }}>confianza digital.</span>
            </h2>
            <p
              className="text-sm mb-7"
              style={{ color: "rgba(255,255,255,0.45)", fontFamily: FONT, lineHeight: 1.8 }}
            >
              Análisis regulatorio, tendencias de IA e identidad digital. Sin spam.
            </p>
            <NewsletterForm />
          </div>
        </section>

        {/* ── BOTTOM CTA ──────────────────────────────────── */}
        <section
          className="py-14"
          style={{
            borderTop: "1px solid rgba(30,202,211,0.10)",
            background:
              "linear-gradient(135deg, rgba(30,202,211,0.06) 0%, rgba(0,102,255,0.05) 100%)",
          }}
        >
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2
              className="font-black text-white mb-6"
              style={{
                fontFamily: FONT,
                fontSize: "clamp(18px,2.5vw,28px)",
                letterSpacing: "-0.6px",
              }}
            >
              ¿Listo para operar con confianza digital?
            </h2>
            <div className="flex flex-wrap justify-center gap-3">
              <Link
                href="/contacto"
                className="px-6 py-3 rounded-xl font-black text-sm transition-all hover:-translate-y-0.5"
                style={{
                  background: "#1ECAD3",
                  color: "#202945",
                  fontFamily: FONT,
                  boxShadow: "0 0 0 0 transparent",
                }}
              >
                Solicitar demo
              </Link>
              <Link
                href="/autoservicio"
                className="px-6 py-3 rounded-xl font-black text-sm transition-all hover:-translate-y-0.5 border"
                style={{
                  background: "transparent",
                  color: "rgba(255,255,255,0.75)",
                  borderColor: "rgba(255,255,255,0.14)",
                  fontFamily: FONT,
                }}
              >
                Probar autoservicio
              </Link>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
