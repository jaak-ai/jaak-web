"use client";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { blogPosts, categoryColors } from "@/lib/blog";

const FILTER_CATEGORIES = [
  "Todos",
  "Firma Electrónica",
  "KYC",
  "Compliance",
  "Regulación",
  "Fraude",
  "Seguridad",
  "IA",
  "Análisis",
  "Onboarding",
];

const categoryCounts = blogPosts.reduce<Record<string, number>>((acc, post) => {
  acc[post.category] = (acc[post.category] || 0) + 1;
  return acc;
}, {});
categoryCounts["Todos"] = blogPosts.length;

const FONT = "var(--font-montserrat), Montserrat, sans-serif";

function CategoryBadge({ category }: { category: string }) {
  const colors = categoryColors[category] || { bg: "bg-white/10", text: "text-white/60" };
  return (
    <span
      className={`inline-block px-2.5 py-0.5 rounded-full text-[10px] font-bold tracking-wide uppercase ${colors.bg} ${colors.text}`}
      style={{ fontFamily: FONT }}
    >
      {category}
    </span>
  );
}

function ReadTime({ time }: { time: string }) {
  return (
    <span className="flex items-center gap-1 text-[#1ECAD3]/70 text-xs font-medium" style={{ fontFamily: FONT }}>
      <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
      {time}
    </span>
  );
}

function FeaturedCard({ post, hero = false }: { post: (typeof blogPosts)[0]; hero?: boolean }) {
  if (hero) {
    return (
      <Link href={`/blog/${post.slug}`} className="group block col-span-2">
        <article
          className="relative overflow-hidden rounded-2xl border transition-all duration-300 h-full"
          style={{
            background: "rgba(255,255,255,0.04)",
            borderColor: "rgba(255,255,255,0.08)",
          }}
          onMouseEnter={e => {
            (e.currentTarget as HTMLElement).style.borderColor = "rgba(30,202,211,0.35)";
            (e.currentTarget as HTMLElement).style.background = "rgba(255,255,255,0.06)";
          }}
          onMouseLeave={e => {
            (e.currentTarget as HTMLElement).style.borderColor = "rgba(255,255,255,0.08)";
            (e.currentTarget as HTMLElement).style.background = "rgba(255,255,255,0.04)";
          }}
        >
          {post.image && (
            <div className="relative h-52 overflow-hidden">
              <Image
                src={post.image}
                alt={post.title}
                fill
                className="object-cover object-top transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0" style={{ background: "linear-gradient(to bottom, transparent 40%, rgba(32,41,69,0.95) 100%)" }} />
            </div>
          )}
          {!post.image && (
            <div className="relative h-52 overflow-hidden flex items-center justify-center" style={{ background: "linear-gradient(135deg, rgba(30,202,211,0.12) 0%, rgba(32,41,69,0.8) 100%)" }}>
              <div className="w-16 h-16 rounded-2xl flex items-center justify-center border" style={{ background: "rgba(30,202,211,0.1)", borderColor: "rgba(30,202,211,0.2)" }}>
                <svg className="w-8 h-8" style={{ color: "#1ECAD3" }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
              </div>
            </div>
          )}
          <div className="p-6">
            <div className="flex items-center gap-3 mb-3">
              <CategoryBadge category={post.category} />
              <ReadTime time={post.readTime} />
              <span className="text-white/30 text-xs" style={{ fontFamily: FONT }}>{post.date}</span>
            </div>
            <h3
              className="font-black leading-snug mb-2 text-white group-hover:text-[#1ECAD3] transition-colors duration-200"
              style={{ fontFamily: FONT, fontSize: "1.15rem", letterSpacing: "-0.3px" }}
            >
              {post.title}
            </h3>
            <p className="text-sm leading-relaxed line-clamp-3" style={{ color: "rgba(255,255,255,0.50)", fontFamily: FONT }}>
              {post.excerpt}
            </p>
            <div className="mt-4 flex items-center gap-1.5 text-[#1ECAD3] text-sm font-bold" style={{ fontFamily: FONT }}>
              Leer artículo
              <svg className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </div>
          </div>
        </article>
      </Link>
    );
  }

  return (
    <Link href={`/blog/${post.slug}`} className="group block">
      <article
        className="relative overflow-hidden rounded-2xl border transition-all duration-300 h-full flex flex-col"
        style={{
          background: "rgba(255,255,255,0.04)",
          borderColor: "rgba(255,255,255,0.08)",
        }}
        onMouseEnter={e => {
          (e.currentTarget as HTMLElement).style.borderColor = "rgba(30,202,211,0.35)";
          (e.currentTarget as HTMLElement).style.background = "rgba(255,255,255,0.06)";
        }}
        onMouseLeave={e => {
          (e.currentTarget as HTMLElement).style.borderColor = "rgba(255,255,255,0.08)";
          (e.currentTarget as HTMLElement).style.background = "rgba(255,255,255,0.04)";
        }}
      >
        {post.image && (
          <div className="relative h-40 overflow-hidden shrink-0">
            <Image
              src={post.image}
              alt={post.title}
              fill
              className="object-cover object-top transition-transform duration-500 group-hover:scale-105"
            />
            <div className="absolute inset-0" style={{ background: "linear-gradient(to bottom, transparent 50%, rgba(32,41,69,0.95) 100%)" }} />
          </div>
        )}
        {!post.image && (
          <div className="relative h-40 shrink-0 flex items-center justify-center" style={{ background: "linear-gradient(135deg, rgba(30,202,211,0.08) 0%, rgba(32,41,69,0.8) 100%)" }}>
            <div className="w-12 h-12 rounded-xl flex items-center justify-center border" style={{ background: "rgba(30,202,211,0.1)", borderColor: "rgba(30,202,211,0.2)" }}>
              <svg className="w-6 h-6" style={{ color: "#1ECAD3" }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
            </div>
          </div>
        )}
        <div className="p-5 flex flex-col flex-grow">
          <div className="flex items-center gap-2 mb-3 flex-wrap">
            <CategoryBadge category={post.category} />
            <ReadTime time={post.readTime} />
          </div>
          <h3
            className="font-black leading-snug mb-2 text-white group-hover:text-[#1ECAD3] transition-colors duration-200 flex-grow"
            style={{ fontFamily: FONT, fontSize: "0.975rem", letterSpacing: "-0.2px" }}
          >
            {post.title}
          </h3>
          <p className="text-xs leading-relaxed line-clamp-2 mb-4" style={{ color: "rgba(255,255,255,0.45)", fontFamily: FONT }}>
            {post.excerpt}
          </p>
          <div className="pt-3 border-t flex items-center justify-between" style={{ borderColor: "rgba(255,255,255,0.07)" }}>
            <span className="text-xs" style={{ color: "rgba(255,255,255,0.30)", fontFamily: FONT }}>{post.date}</span>
            <span className="flex items-center gap-1 text-[#1ECAD3] text-xs font-bold" style={{ fontFamily: FONT }}>
              Leer
              <svg className="w-3 h-3 transition-transform duration-200 group-hover:translate-x-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </span>
          </div>
        </div>
      </article>
    </Link>
  );
}

export default function BlogFilter() {
  const [selected, setSelected] = useState("Todos");

  const filtered =
    selected === "Todos" ? blogPosts : blogPosts.filter((p) => p.category === selected);

  const featured = filtered.slice(0, 4);
  const latest = filtered.slice(4);

  return (
    <>
      {/* Sticky Filter Nav */}
      <div
        className="sticky top-0 z-40"
        style={{
          background: "rgba(32,41,69,0.85)",
          backdropFilter: "blur(20px)",
          WebkitBackdropFilter: "blur(20px)",
          borderBottom: "1px solid rgba(255,255,255,0.06)",
        }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-1 overflow-x-auto py-3 scrollbar-none" style={{ scrollbarWidth: "none" }}>
            {FILTER_CATEGORIES.map((cat) => {
              const count = categoryCounts[cat] || 0;
              const isActive = selected === cat;
              return (
                <button
                  key={cat}
                  onClick={() => setSelected(cat)}
                  className="shrink-0 flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs font-bold transition-all duration-200 whitespace-nowrap"
                  style={{
                    fontFamily: FONT,
                    background: isActive ? "#1ECAD3" : "transparent",
                    color: isActive ? "#202945" : "rgba(255,255,255,0.55)",
                    border: isActive ? "1px solid #1ECAD3" : "1px solid rgba(255,255,255,0.10)",
                  }}
                  onMouseEnter={e => {
                    if (!isActive) {
                      (e.currentTarget as HTMLElement).style.borderColor = "rgba(30,202,211,0.35)";
                      (e.currentTarget as HTMLElement).style.color = "rgba(255,255,255,0.85)";
                    }
                  }}
                  onMouseLeave={e => {
                    if (!isActive) {
                      (e.currentTarget as HTMLElement).style.borderColor = "rgba(255,255,255,0.10)";
                      (e.currentTarget as HTMLElement).style.color = "rgba(255,255,255,0.55)";
                    }
                  }}
                >
                  {cat}
                  {count > 0 && (
                    <span
                      className="text-[9px] font-bold px-1.5 py-0.5 rounded-full"
                      style={{
                        background: isActive ? "rgba(32,41,69,0.3)" : "rgba(255,255,255,0.08)",
                        color: isActive ? "#202945" : "rgba(255,255,255,0.40)",
                      }}
                    >
                      {count}
                    </span>
                  )}
                </button>
              );
            })}
          </div>
        </div>
      </div>

      {/* Featured Articles */}
      {featured.length > 0 && (
        <section className="py-16" style={{ background: "#202945" }}>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-between mb-8">
              <div>
                <p className="text-xs font-bold tracking-widest uppercase mb-1.5" style={{ color: "#1ECAD3", fontFamily: FONT }}>
                  Artículos destacados
                </p>
                <h2 className="text-2xl font-black text-white" style={{ fontFamily: FONT, letterSpacing: "-0.5px" }}>
                  {selected === "Todos" ? "Lecturas esenciales" : selected}
                </h2>
              </div>
              <span className="text-sm" style={{ color: "rgba(255,255,255,0.35)", fontFamily: FONT }}>
                {filtered.length} {filtered.length === 1 ? "artículo" : "artículos"}
              </span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
              {/* Large featured post */}
              <div className="lg:col-span-2">
                <FeaturedCard post={featured[0]} hero />
              </div>

              {/* Second post - stacked right */}
              {featured[1] && (
                <div>
                  <FeaturedCard post={featured[1]} />
                </div>
              )}

              {/* Posts 3 & 4 in bottom row */}
              {featured[2] && (
                <div>
                  <FeaturedCard post={featured[2]} />
                </div>
              )}
              {featured[3] && (
                <div>
                  <FeaturedCard post={featured[3]} />
                </div>
              )}
            </div>
          </div>
        </section>
      )}

      {/* Latest Articles */}
      {latest.length > 0 && (
        <section
          className="py-16"
          style={{ background: "rgba(255,255,255,0.015)", borderTop: "1px solid rgba(255,255,255,0.05)" }}
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="mb-8">
              <p className="text-xs font-bold tracking-widest uppercase mb-1.5" style={{ color: "#1ECAD3", fontFamily: FONT }}>
                Más artículos
              </p>
              <h2 className="text-2xl font-black text-white" style={{ fontFamily: FONT, letterSpacing: "-0.5px" }}>
                Continúa leyendo
              </h2>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {latest.map((post) => (
                <FeaturedCard key={post.slug} post={post} />
              ))}
            </div>
          </div>
        </section>
      )}

      {filtered.length === 0 && (
        <section className="py-24 text-center" style={{ background: "#202945" }}>
          <div className="w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-4 border" style={{ background: "rgba(30,202,211,0.08)", borderColor: "rgba(30,202,211,0.15)" }}>
            <svg className="w-8 h-8" style={{ color: "#1ECAD3" }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
            </svg>
          </div>
          <p className="text-white font-bold text-lg mb-2" style={{ fontFamily: FONT }}>Sin artículos en esta categoría</p>
          <p className="text-sm" style={{ color: "rgba(255,255,255,0.40)", fontFamily: FONT }}>Próximamente publicaremos contenido aquí.</p>
        </section>
      )}
    </>
  );
}
