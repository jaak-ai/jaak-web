import Header from "@/components/Header";
import Footer from "@/components/Footer";
import NewsletterForm from "@/components/NewsletterForm";
import Link from "next/link";
import Image from "next/image";
import { blogPosts } from "@/lib/blog";
import BlogFilter from "./BlogFilter";

export const metadata = {
  title: "Blog | JAAK — Infraestructura de Confianza Digital",
  description:
    "Perspectivas, tendencias y análisis sobre identidad digital, firma digital, cumplimiento regulatorio, prevención de fraude e inteligencia artificial.",
};

const FONT = "var(--font-montserrat), Montserrat, sans-serif";

const POPULAR_TOPICS = [
  {
    name: "Firma Digital",
    desc: "NOM-151, validez legal y contratos electrónicos en México.",
    count: blogPosts.filter((p) => p.category === "Firma Electrónica").length,
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
      </svg>
    ),
    href: "/signa",
  },
  {
    name: "Identidad Digital",
    desc: "KYC, biometría y verificación de identidad en tiempo real.",
    count: blogPosts.filter((p) => p.category === "KYC").length,
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
      </svg>
    ),
    href: "/blog?categoria=kyc",
  },
  {
    name: "Compliance",
    desc: "LFPIORPI, UIF, CNBV y programas PLD/AML.",
    count: blogPosts.filter((p) => ["Compliance", "Regulación"].includes(p.category)).length,
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    ),
    href: "/cumplimiento",
  },
  {
    name: "Inteligencia Artificial",
    desc: "Agentes de IA, infraestructura y ética en sectores regulados.",
    count: blogPosts.filter((p) => p.category === "IA").length,
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
      </svg>
    ),
    href: "/blog?categoria=ia",
  },
  {
    name: "Prevención de Fraude",
    desc: "Detección de suplantación, deepfakes y ataques de presentación.",
    count: blogPosts.filter((p) => ["Fraude", "Seguridad"].includes(p.category)).length,
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
      </svg>
    ),
    href: "/blog?categoria=fraude",
  },
  {
    name: "NOM-151",
    desc: "Sellos de tiempo certificados y contratos digitales irrebatibles.",
    count: blogPosts.filter((p) => p.category === "Firma Electrónica").length,
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    href: "/signa",
  },
];

const AUTHORS = [
  {
    name: "Arianna Quezada",
    role: "CEO · JAAK",
    initials: "AQ",
    gradient: "linear-gradient(135deg, #2DB6C1 0%, #0066ff 100%)",
    bio: "Liderazgo en infraestructura de confianza digital, regulación financiera y transformación del sector fintech en Latinoamérica.",
    topics: ["Compliance", "Regulación", "Firma Digital", "Transformación Digital", "Fintech"],
    count: blogPosts.filter((p) =>
      ["Compliance", "Regulación", "Firma Electrónica", "Onboarding"].includes(p.category)
    ).length,
  },
  {
    name: "Javier Moya",
    role: "CTO · JAAK",
    initials: "JM",
    gradient: "linear-gradient(135deg, #0066ff 0%, #2DB6C1 100%)",
    bio: "Arquitectura de sistemas de identidad digital, inteligencia artificial aplicada y biometría de alta seguridad.",
    topics: ["Inteligencia Artificial", "Arquitectura", "Identidad Digital", "Biometría", "Infraestructura"],
    count: blogPosts.filter((p) =>
      ["IA", "KYC", "Seguridad", "Análisis", "Fraude"].includes(p.category)
    ).length,
  },
];

export default function BlogPage() {
  const featuredPost = blogPosts[0];

  return (
    <>
      <Header />
      <main style={{ background: "#212A45", fontFamily: FONT, minHeight: "100vh" }}>

        {/* ── Animations & hover CSS ─────────────────────────── */}
        <style>{`
          @keyframes nodeFloat {
            0%, 100% { transform: translateY(0px) scale(1); opacity: 0.7; }
            50% { transform: translateY(-8px) scale(1.1); opacity: 1; }
          }
          @keyframes lineDash {
            0% { stroke-dashoffset: 200; opacity: 0.08; }
            50% { opacity: 0.30; }
            100% { stroke-dashoffset: 0; opacity: 0.08; }
          }
          @keyframes glowPulse {
            0%, 100% { opacity: 0.12; transform: scale(1); }
            50% { opacity: 0.28; transform: scale(1.3); }
          }
          @keyframes fadeInUp {
            from { opacity: 0; transform: translateY(20px); }
            to { opacity: 1; transform: translateY(0); }
          }
          .blog-line { animation: lineDash 4s linear infinite; stroke-dasharray: 200; }
          .blog-node { animation: nodeFloat 6s ease-in-out infinite; }
          .blog-glow { animation: glowPulse 4s ease-in-out infinite; }
          .hero-a { animation: fadeInUp 0.55s ease both; }
          .hero-b { animation: fadeInUp 0.55s 0.14s ease both; }
          .hero-c { animation: fadeInUp 0.55s 0.28s ease both; }
          .hero-d { animation: fadeInUp 0.55s 0.40s ease both; }

          .blog-card-hover {
            transition: border-color 0.25s, background 0.25s;
            border: 1px solid rgba(255,255,255,0.08);
            background: rgba(255,255,255,0.04);
          }
          .blog-card-hover:hover {
            border-color: rgba(30,202,211,0.30);
            background: rgba(255,255,255,0.065);
          }
          .topic-card {
            transition: border-color 0.25s, background 0.25s;
            border: 1px solid rgba(255,255,255,0.07);
            background: rgba(255,255,255,0.03);
          }
          .topic-card:hover {
            border-color: rgba(30,202,211,0.25);
            background: rgba(30,202,211,0.04);
          }
          .topic-card:hover .topic-name { color: #2DB6C1; }
          .cta-btn-primary {
            transition: box-shadow 0.25s, transform 0.15s;
          }
          .cta-btn-primary:hover {
            box-shadow: 0 8px 28px rgba(30,202,211,0.28);
            transform: translateY(-2px);
          }
          .cta-btn-secondary {
            transition: border-color 0.25s, color 0.25s, transform 0.15s;
            border: 1px solid rgba(255,255,255,0.15);
            color: rgba(255,255,255,0.78);
          }
          .cta-btn-secondary:hover {
            border-color: rgba(30,202,211,0.40);
            color: #2DB6C1;
            transform: translateY(-2px);
          }
          .featured-hero-card {
            transition: box-shadow 0.3s;
          }
          .featured-hero-card:hover {
            box-shadow: 0 0 48px rgba(30,202,211,0.10), 0 28px 56px rgba(0,0,0,0.35);
          }
          .author-link-hover {
            transition: gap 0.2s;
            display: inline-flex;
            align-items: center;
            gap: 0.5rem;
          }
          .author-link-hover:hover { gap: 0.75rem; }
        `}</style>

        {/* ── HERO ──────────────────────────────────────────── */}
        <section className="relative overflow-hidden pt-28 pb-0">
          {/* Radial glow background */}
          <div
            className="absolute inset-0 pointer-events-none"
            style={{
              background:
                "radial-gradient(ellipse 80% 55% at 50% 0%, rgba(30,202,211,0.10) 0%, transparent 65%), radial-gradient(ellipse 40% 40% at 80% 30%, rgba(0,102,255,0.08) 0%, transparent 60%), #212A45",
            }}
          />

          {/* Trust network SVG */}
          <div className="absolute inset-0 pointer-events-none overflow-hidden" style={{ opacity: 0.7 }}>
            <svg
              viewBox="0 0 1400 580"
              xmlns="http://www.w3.org/2000/svg"
              className="w-full h-full"
              preserveAspectRatio="xMidYMid slice"
            >
              {/* Lines */}
              {[
                ["120", "80", "280", "160", "#2DB6C1", "0s"],
                ["280", "160", "480", "90", "#2DB6C1", "0.5s"],
                ["480", "90", "640", "200", "#2DB6C1", "1.0s"],
                ["640", "200", "820", "120", "#2DB6C1", "1.5s"],
                ["820", "120", "1000", "190", "#2DB6C1", "0.8s"],
                ["1000", "190", "1180", "80", "#2DB6C1", "2.0s"],
                ["1180", "80", "1320", "170", "#2DB6C1", "0.3s"],
                ["280", "160", "380", "310", "#0066ff", "1.2s"],
                ["640", "200", "560", "350", "#0066ff", "0.7s"],
                ["820", "120", "900", "280", "#0066ff", "1.8s"],
                ["1000", "190", "1080", "330", "#0066ff", "0.4s"],
                ["60", "300", "280", "160", "#2DB6C1", "2.5s"],
                ["1320", "170", "1380", "310", "#2DB6C1", "1.1s"],
                ["480", "90", "380", "310", "#2DB6C1", "3.0s"],
                ["560", "350", "900", "280", "#2DB6C1", "1.6s"],
              ].map(([x1, y1, x2, y2, color, delay], i) => (
                <line
                  key={i}
                  x1={x1} y1={y1} x2={x2} y2={y2}
                  stroke={color}
                  strokeWidth="0.8"
                  className="blog-line"
                  style={{ animationDelay: delay }}
                />
              ))}

              {/* Glow halos */}
              {[[120, 80, 0], [280, 160, 0.8], [640, 200, 1.6], [820, 120, 0.4], [1000, 190, 1.2]].map(
                ([cx, cy, d]) => (
                  <circle
                    key={`glow-${cx}`}
                    cx={cx} cy={cy} r="16"
                    fill="#2DB6C1"
                    className="blog-glow"
                    style={{ animationDelay: `${d}s`, transformOrigin: `${cx}px ${cy}px` }}
                  />
                )
              )}

              {/* Primary nodes */}
              {[
                [120, 80, 0], [280, 160, 0.4], [480, 90, 0.8], [640, 200, 1.2],
                [820, 120, 0.6], [1000, 190, 1.0], [1180, 80, 0.2], [1320, 170, 1.4],
              ].map(([cx, cy, d]) => (
                <g key={`n-${cx}`} className="blog-node" style={{ animationDelay: `${d}s`, transformOrigin: `${cx}px ${cy}px` }}>
                  <circle cx={cx} cy={cy} r="5" fill="#2DB6C1" opacity="0.85" />
                  <circle cx={cx} cy={cy} r="9" fill="none" stroke="#2DB6C1" strokeWidth="1" opacity="0.28" />
                </g>
              ))}

              {/* Secondary nodes */}
              {[
                [60, 300, 1.5], [380, 310, 0.9], [560, 350, 1.1],
                [900, 280, 0.5], [1080, 330, 1.3], [1380, 310, 0.7],
              ].map(([cx, cy, d]) => (
                <g key={`n2-${cx}`} className="blog-node" style={{ animationDelay: `${d}s`, transformOrigin: `${cx}px ${cy}px` }}>
                  <circle cx={cx} cy={cy} r="3.5" fill="#0066ff" opacity="0.65" />
                  <circle cx={cx} cy={cy} r="7" fill="none" stroke="#0066ff" strokeWidth="0.8" opacity="0.22" />
                </g>
              ))}
            </svg>
          </div>

          {/* Hero text + featured card */}
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12 items-start">

              {/* Left column */}
              <div className="pt-4">
                <div
                  className="hero-a inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-bold tracking-wide uppercase mb-6 border"
                  style={{
                    background: "rgba(30,202,211,0.10)",
                    borderColor: "rgba(30,202,211,0.25)",
                    color: "#2DB6C1",
                    fontFamily: FONT,
                  }}
                >
                  <span className="w-1.5 h-1.5 rounded-full animate-pulse" style={{ background: "#2DB6C1" }} />
                  Infraestructura de Confianza Digital
                </div>

                <h1
                  className="hero-b font-black text-white leading-none tracking-tight mb-6"
                  style={{ fontFamily: FONT, fontSize: "clamp(42px,5vw,72px)", letterSpacing: "-2.5px" }}
                >
                  Blog{" "}
                  <span style={{ color: "#2DB6C1" }}>JAAK</span>
                </h1>

                <p
                  className="hero-c text-base leading-relaxed max-w-lg"
                  style={{ color: "rgba(255,255,255,0.55)", fontFamily: FONT, lineHeight: 1.8 }}
                >
                  Perspectivas, tendencias y análisis sobre identidad digital, firma digital,
                  cumplimiento regulatorio, prevención de fraude e inteligencia artificial.
                </p>

                <div
                  className="hero-d flex items-center gap-8 mt-8 pt-8 border-t"
                  style={{ borderColor: "rgba(255,255,255,0.07)" }}
                >
                  {[
                    { label: "Artículos", value: blogPosts.length },
                    { label: "Categorías", value: 9 },
                    { label: "Autores", value: 2 },
                  ].map((stat) => (
                    <div key={stat.label}>
                      <div
                        className="text-3xl font-black text-white"
                        style={{ fontFamily: FONT, letterSpacing: "-1.5px" }}
                      >
                        {stat.value}
                      </div>
                      <div
                        className="text-xs font-medium mt-0.5"
                        style={{ color: "rgba(255,255,255,0.38)", fontFamily: FONT }}
                      >
                        {stat.label}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Right column – featured article card */}
              <div className="hero-d relative" style={{ paddingTop: "0.5rem" }}>
                <div
                  className="absolute -inset-6 rounded-3xl pointer-events-none"
                  style={{
                    background:
                      "radial-gradient(ellipse 70% 70% at 50% 50%, rgba(30,202,211,0.07) 0%, transparent 70%)",
                  }}
                />
                <Link href={`/blog/${featuredPost.slug}`} className="group block relative featured-hero-card rounded-2xl overflow-hidden border"
                  style={{
                    borderColor: "rgba(30,202,211,0.22)",
                    background: "rgba(255,255,255,0.05)",
                    boxShadow: "0 0 40px rgba(30,202,211,0.06), 0 24px 48px rgba(0,0,0,0.28)",
                  }}
                >
                  {featuredPost.image && (
                    <div className="relative h-44 overflow-hidden">
                      <Image
                        src={featuredPost.image}
                        alt={featuredPost.title}
                        fill
                        sizes="(max-width:1024px) 100vw, 50vw"
                        className="object-cover object-top transition-transform duration-500 group-hover:scale-105"
                      />
                      <div
                        className="absolute inset-0"
                        style={{
                          background: "linear-gradient(to bottom, transparent 25%, rgba(32,41,69,0.97) 100%)",
                        }}
                      />
                      <div
                        className="absolute top-3 left-3 px-2.5 py-1 rounded-full text-[10px] font-bold tracking-wide uppercase border"
                        style={{
                          background: "rgba(30,202,211,0.18)",
                          borderColor: "rgba(30,202,211,0.35)",
                          color: "#2DB6C1",
                          fontFamily: FONT,
                        }}
                      >
                        Nuevo
                      </div>
                    </div>
                  )}
                  <div className="p-6">
                    <div className="flex items-center gap-2 mb-3">
                      <span
                        className="px-2.5 py-0.5 rounded-full text-[10px] font-bold tracking-wide uppercase border"
                        style={{
                          background: "rgba(168,85,247,0.10)",
                          borderColor: "rgba(168,85,247,0.20)",
                          color: "rgb(168,85,247)",
                          fontFamily: FONT,
                        }}
                      >
                        {featuredPost.category}
                      </span>
                      <span
                        className="flex items-center gap-1 text-xs font-semibold"
                        style={{ color: "#2DB6C1", fontFamily: FONT }}
                      >
                        <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                        {featuredPost.readTime}
                      </span>
                    </div>

                    <h2
                      className="font-black text-white leading-snug mb-2 group-hover:text-[#2DB6C1] transition-colors duration-200"
                      style={{ fontFamily: FONT, fontSize: "1.05rem", letterSpacing: "-0.3px" }}
                    >
                      {featuredPost.title}
                    </h2>

                    <p
                      className="text-sm leading-relaxed line-clamp-2 mb-4"
                      style={{ color: "rgba(255,255,255,0.48)", fontFamily: FONT }}
                    >
                      {featuredPost.excerpt}
                    </p>

                    <div
                      className="flex items-center justify-between pt-4 border-t"
                      style={{ borderColor: "rgba(255,255,255,0.07)" }}
                    >
                      <span className="text-xs" style={{ color: "rgba(255,255,255,0.28)", fontFamily: FONT }}>
                        {featuredPost.date}
                      </span>
                      <span
                        className="flex items-center gap-1.5 text-xs font-bold"
                        style={{ color: "#2DB6C1", fontFamily: FONT }}
                      >
                        Leer ahora
                        <svg
                          className="w-3.5 h-3.5 transition-transform duration-200 group-hover:translate-x-1"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                        </svg>
                      </span>
                    </div>
                  </div>
                </Link>
              </div>
            </div>
          </div>

          {/* Bottom fade */}
          <div
            className="relative h-12 mt-10"
            style={{ background: "linear-gradient(to bottom, transparent, rgba(32,41,69,0.96))" }}
          />
        </section>

        {/* ── FILTER + ARTICLES (client component) ─────────── */}
        <BlogFilter />

        {/* ── AUTHOR SPOTLIGHT ──────────────────────────────── */}
        <section
          className="py-20"
          style={{ background: "#212A45", borderTop: "1px solid rgba(255,255,255,0.05)" }}
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="mb-12">
              <p
                className="text-xs font-bold tracking-widest uppercase mb-2"
                style={{ color: "#2DB6C1", fontFamily: FONT }}
              >
                Equipo editorial
              </p>
              <h2
                className="text-3xl font-black text-white"
                style={{ fontFamily: FONT, letterSpacing: "-1px" }}
              >
                Autores destacados
              </h2>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              {AUTHORS.map((author) => (
                <article
                  key={author.name}
                  className="blog-card-hover rounded-2xl p-7 flex flex-col gap-5"
                >
                  <div className="flex items-start gap-4">
                    <div
                      className="w-14 h-14 rounded-2xl flex items-center justify-center text-white font-black text-lg shrink-0"
                      style={{ background: author.gradient, fontFamily: FONT }}
                    >
                      {author.initials}
                    </div>
                    <div className="flex-1 min-w-0">
                      <div
                        className="font-black text-white text-lg leading-tight"
                        style={{ fontFamily: FONT, letterSpacing: "-0.5px" }}
                      >
                        {author.name}
                      </div>
                      <div
                        className="text-xs font-bold tracking-wide mt-0.5"
                        style={{ color: "#2DB6C1", fontFamily: FONT }}
                      >
                        {author.role}
                      </div>
                    </div>
                    <span
                      className="shrink-0 px-2.5 py-1 rounded-full text-xs font-bold"
                      style={{
                        background: "rgba(30,202,211,0.10)",
                        color: "#2DB6C1",
                        border: "1px solid rgba(30,202,211,0.20)",
                        fontFamily: FONT,
                      }}
                    >
                      {author.count} artículos
                    </span>
                  </div>

                  <p
                    className="text-sm leading-relaxed"
                    style={{ color: "rgba(255,255,255,0.52)", fontFamily: FONT }}
                  >
                    {author.bio}
                  </p>

                  <div className="flex flex-wrap gap-1.5">
                    {author.topics.map((t) => (
                      <span
                        key={t}
                        className="px-2.5 py-0.5 rounded-full text-[10px] font-bold tracking-wide"
                        style={{
                          background: "rgba(255,255,255,0.05)",
                          color: "rgba(255,255,255,0.45)",
                          border: "1px solid rgba(255,255,255,0.08)",
                          fontFamily: FONT,
                        }}
                      >
                        {t}
                      </span>
                    ))}
                  </div>

                  <div
                    className="pt-4 border-t"
                    style={{ borderColor: "rgba(255,255,255,0.06)" }}
                  >
                    <Link
                      href="/blog"
                      className="author-link-hover text-xs font-bold"
                      style={{ color: "#2DB6C1", fontFamily: FONT }}
                    >
                      Ver todos los artículos
                      <svg className="w-3.5 h-3.5 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                      </svg>
                    </Link>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* ── POPULAR TOPICS ────────────────────────────────── */}
        <section
          className="py-20"
          style={{
            background: "rgba(255,255,255,0.015)",
            borderTop: "1px solid rgba(255,255,255,0.05)",
          }}
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="mb-12">
              <p
                className="text-xs font-bold tracking-widest uppercase mb-2"
                style={{ color: "#2DB6C1", fontFamily: FONT }}
              >
                Explorar por tema
              </p>
              <h2
                className="text-3xl font-black text-white"
                style={{ fontFamily: FONT, letterSpacing: "-1px" }}
              >
                Temas populares
              </h2>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {POPULAR_TOPICS.map((topic) => (
                <Link key={topic.name} href={topic.href} className="group">
                  <div className="topic-card rounded-2xl p-5 h-full flex gap-4 items-start">
                    <div
                      className="w-9 h-9 rounded-xl flex items-center justify-center shrink-0 border"
                      style={{
                        background: "rgba(30,202,211,0.10)",
                        borderColor: "rgba(30,202,211,0.15)",
                        color: "#2DB6C1",
                      }}
                    >
                      {topic.icon}
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center justify-between mb-1">
                        <span
                          className="topic-name font-black text-white text-sm transition-colors duration-200"
                          style={{ fontFamily: FONT, letterSpacing: "-0.3px" }}
                        >
                          {topic.name}
                        </span>
                        {topic.count > 0 && (
                          <span
                            className="text-[10px] font-bold px-1.5 py-0.5 rounded-full"
                            style={{
                              background: "rgba(30,202,211,0.10)",
                              color: "#2DB6C1",
                              fontFamily: FONT,
                            }}
                          >
                            {topic.count}
                          </span>
                        )}
                      </div>
                      <p
                        className="text-xs leading-relaxed line-clamp-2"
                        style={{ color: "rgba(255,255,255,0.38)", fontFamily: FONT }}
                      >
                        {topic.desc}
                      </p>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* ── NEWSLETTER ────────────────────────────────────── */}
        <section
          className="py-24"
          style={{ background: "#212A45", borderTop: "1px solid rgba(255,255,255,0.05)" }}
        >
          <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <div
              className="w-14 h-14 rounded-2xl flex items-center justify-center mx-auto mb-6 border"
              style={{
                background: "rgba(30,202,211,0.10)",
                borderColor: "rgba(30,202,211,0.20)",
              }}
            >
              <svg
                className="w-7 h-7"
                style={{ color: "#2DB6C1" }}
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
              className="font-black text-white leading-tight mb-4"
              style={{
                fontFamily: FONT,
                fontSize: "clamp(26px,3.5vw,40px)",
                letterSpacing: "-1.2px",
              }}
            >
              Recibe nuevas perspectivas sobre{" "}
              <span style={{ color: "#2DB6C1" }}>confianza digital.</span>
            </h2>

            <p
              className="text-base mb-8"
              style={{ color: "rgba(255,255,255,0.48)", fontFamily: FONT, lineHeight: 1.8 }}
            >
              Análisis regulatorio, tendencias de IA y mejores prácticas en identidad digital
              directo a tu correo. Sin spam.
            </p>

            <NewsletterForm />

            <p
              className="mt-5 text-xs"
              style={{ color: "rgba(255,255,255,0.22)", fontFamily: FONT }}
            >
              Al suscribirte aceptas nuestra{" "}
              <Link
                href="/privacidad"
                className="underline hover:text-[#2DB6C1] transition-colors"
              >
                política de privacidad
              </Link>
              . Cancela cuando quieras.
            </p>
          </div>
        </section>

        {/* ── BOTTOM CTA ────────────────────────────────────── */}
        <section
          className="py-16"
          style={{
            background:
              "linear-gradient(135deg, rgba(30,202,211,0.07) 0%, rgba(0,102,255,0.05) 100%)",
            borderTop: "1px solid rgba(30,202,211,0.10)",
          }}
        >
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <p
              className="text-xs font-bold tracking-widest uppercase mb-3"
              style={{ color: "#2DB6C1", fontFamily: FONT }}
            >
              ¿Listo para operar con confianza?
            </p>
            <h2
              className="font-black text-white mb-8"
              style={{
                fontFamily: FONT,
                fontSize: "clamp(22px,3vw,34px)",
                letterSpacing: "-0.8px",
              }}
            >
              De la teoría a la infraestructura en producción.
            </h2>
            <div className="flex flex-wrap justify-center gap-3">
              <Link
                href="/contacto"
                className="cta-btn-primary px-7 py-3.5 rounded-xl font-black text-sm"
                style={{
                  background: "#2DB6C1",
                  color: "#212A45",
                  fontFamily: FONT,
                }}
              >
                Solicitar demo
              </Link>
              <Link
                href="/plataforma"
                className="cta-btn-secondary px-7 py-3.5 rounded-xl font-black text-sm"
                style={{
                  background: "transparent",
                  fontFamily: FONT,
                }}
              >
                Ver plataforma
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
