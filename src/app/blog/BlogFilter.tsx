"use client";
import { useState, useRef, useEffect } from "react";
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

function normalize(str: string) {
  return str
    .toLowerCase()
    .normalize("NFD")
    .replace(/[̀-ͯ]/g, "");
}

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
    <span className="flex items-center gap-1 text-[#2DB6C1]/70 text-xs font-medium" style={{ fontFamily: FONT }}>
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
          style={{ background: "rgba(255,255,255,0.04)", borderColor: "rgba(255,255,255,0.08)" }}
          onMouseEnter={e => {
            (e.currentTarget as HTMLElement).style.borderColor = "rgba(30,202,211,0.35)";
            (e.currentTarget as HTMLElement).style.background = "rgba(255,255,255,0.06)";
          }}
          onMouseLeave={e => {
            (e.currentTarget as HTMLElement).style.borderColor = "rgba(255,255,255,0.08)";
            (e.currentTarget as HTMLElement).style.background = "rgba(255,255,255,0.04)";
          }}
        >
          {post.image ? (
            <div className="relative h-52 overflow-hidden">
              <Image src={post.image} alt={post.title} fill className="object-cover object-top transition-transform duration-500 group-hover:scale-105" />
              <div className="absolute inset-0" style={{ background: "linear-gradient(to bottom, transparent 40%, rgba(32,41,69,0.95) 100%)" }} />
            </div>
          ) : (
            <div className="relative h-52 overflow-hidden flex items-center justify-center" style={{ background: "linear-gradient(135deg, rgba(30,202,211,0.12) 0%, rgba(32,41,69,0.8) 100%)" }}>
              <div className="w-16 h-16 rounded-2xl flex items-center justify-center border" style={{ background: "rgba(30,202,211,0.1)", borderColor: "rgba(30,202,211,0.2)" }}>
                <svg className="w-8 h-8" style={{ color: "#2DB6C1" }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
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
            <h3 className="font-black leading-snug mb-2 text-white group-hover:text-[#2DB6C1] transition-colors duration-200" style={{ fontFamily: FONT, fontSize: "1.15rem", letterSpacing: "-0.3px" }}>
              {post.title}
            </h3>
            <p className="text-sm leading-relaxed line-clamp-3" style={{ color: "rgba(255,255,255,0.50)", fontFamily: FONT }}>
              {post.excerpt}
            </p>
            <div className="mt-4 flex items-center gap-1.5 text-[#2DB6C1] text-sm font-bold" style={{ fontFamily: FONT }}>
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
        style={{ background: "rgba(255,255,255,0.04)", borderColor: "rgba(255,255,255,0.08)" }}
        onMouseEnter={e => {
          (e.currentTarget as HTMLElement).style.borderColor = "rgba(30,202,211,0.35)";
          (e.currentTarget as HTMLElement).style.background = "rgba(255,255,255,0.06)";
        }}
        onMouseLeave={e => {
          (e.currentTarget as HTMLElement).style.borderColor = "rgba(255,255,255,0.08)";
          (e.currentTarget as HTMLElement).style.background = "rgba(255,255,255,0.04)";
        }}
      >
        {post.image ? (
          <div className="relative h-40 overflow-hidden shrink-0">
            <Image src={post.image} alt={post.title} fill className="object-cover object-top transition-transform duration-500 group-hover:scale-105" />
            <div className="absolute inset-0" style={{ background: "linear-gradient(to bottom, transparent 50%, rgba(32,41,69,0.95) 100%)" }} />
          </div>
        ) : (
          <div className="relative h-40 shrink-0 flex items-center justify-center" style={{ background: "linear-gradient(135deg, rgba(30,202,211,0.08) 0%, rgba(32,41,69,0.8) 100%)" }}>
            <div className="w-12 h-12 rounded-xl flex items-center justify-center border" style={{ background: "rgba(30,202,211,0.1)", borderColor: "rgba(30,202,211,0.2)" }}>
              <svg className="w-6 h-6" style={{ color: "#2DB6C1" }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
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
          <h3 className="font-black leading-snug mb-2 text-white group-hover:text-[#2DB6C1] transition-colors duration-200 flex-grow" style={{ fontFamily: FONT, fontSize: "0.975rem", letterSpacing: "-0.2px" }}>
            {post.title}
          </h3>
          <p className="text-xs leading-relaxed line-clamp-2 mb-4" style={{ color: "rgba(255,255,255,0.45)", fontFamily: FONT }}>
            {post.excerpt}
          </p>
          <div className="pt-3 border-t flex items-center justify-between" style={{ borderColor: "rgba(255,255,255,0.07)" }}>
            <span className="text-xs" style={{ color: "rgba(255,255,255,0.30)", fontFamily: FONT }}>{post.date}</span>
            <span className="flex items-center gap-1 text-[#2DB6C1] text-xs font-bold" style={{ fontFamily: FONT }}>
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

function HighlightMatch({ text, query }: { text: string; query: string }) {
  if (!query.trim()) return <>{text}</>;
  const nq = normalize(query.trim());
  const nt = normalize(text);
  const idx = nt.indexOf(nq);
  if (idx === -1) return <>{text}</>;
  return (
    <>
      {text.slice(0, idx)}
      <mark style={{ background: "rgba(30,202,211,0.25)", color: "#2DB6C1", borderRadius: "2px", padding: "0 2px" }}>
        {text.slice(idx, idx + nq.length)}
      </mark>
      {text.slice(idx + nq.length)}
    </>
  );
}

function SearchResultCard({ post, query }: { post: (typeof blogPosts)[0]; query: string }) {
  const colors = categoryColors[post.category] || { bg: "bg-white/10", text: "text-white/60" };
  return (
    <Link href={`/blog/${post.slug}`} className="group block">
      <div
        className="flex gap-4 p-4 rounded-xl border transition-all duration-200"
        style={{ background: "rgba(255,255,255,0.03)", borderColor: "rgba(255,255,255,0.07)" }}
        onMouseEnter={e => {
          (e.currentTarget as HTMLElement).style.borderColor = "rgba(30,202,211,0.28)";
          (e.currentTarget as HTMLElement).style.background = "rgba(255,255,255,0.055)";
        }}
        onMouseLeave={e => {
          (e.currentTarget as HTMLElement).style.borderColor = "rgba(255,255,255,0.07)";
          (e.currentTarget as HTMLElement).style.background = "rgba(255,255,255,0.03)";
        }}
      >
        {post.image && (
          <div className="relative w-20 h-14 rounded-lg overflow-hidden shrink-0 hidden sm:block">
            <Image src={post.image} alt={post.title} fill className="object-cover object-top" />
          </div>
        )}
        <div className="flex-1 min-w-0">
          <div className="flex items-center gap-2 mb-1.5">
            <span className={`px-2 py-0.5 rounded-full text-[9px] font-bold tracking-wide uppercase ${colors.bg} ${colors.text}`} style={{ fontFamily: FONT }}>
              {post.category}
            </span>
            <span className="text-[10px]" style={{ color: "rgba(255,255,255,0.25)", fontFamily: FONT }}>{post.readTime}</span>
          </div>
          <p className="text-sm font-black text-white leading-snug mb-1 group-hover:text-[#2DB6C1] transition-colors" style={{ fontFamily: FONT, letterSpacing: "-0.3px" }}>
            <HighlightMatch text={post.title} query={query} />
          </p>
          <p className="text-xs line-clamp-1" style={{ color: "rgba(255,255,255,0.38)", fontFamily: FONT }}>
            <HighlightMatch text={post.excerpt} query={query} />
          </p>
        </div>
        <div className="shrink-0 flex items-center self-center">
          <svg className="w-4 h-4 transition-transform duration-150 group-hover:translate-x-0.5" style={{ color: "#2DB6C1" }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
          </svg>
        </div>
      </div>
    </Link>
  );
}

export default function BlogFilter() {
  const [selected, setSelected] = useState("Todos");
  const [query, setQuery] = useState("");
  const [searchFocused, setSearchFocused] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);

  // Keyboard shortcut: Cmd/Ctrl+K focuses search
  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === "k") {
        e.preventDefault();
        inputRef.current?.focus();
        inputRef.current?.scrollIntoView({ behavior: "smooth", block: "center" });
      }
      if (e.key === "Escape") {
        setQuery("");
        inputRef.current?.blur();
      }
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, []);

  const isSearching = query.trim().length > 0;

  const byCategory = selected === "Todos"
    ? blogPosts
    : blogPosts.filter((p) => p.category === selected);

  const filtered = isSearching
    ? blogPosts.filter((p) => {
        const nq = normalize(query.trim());
        return (
          normalize(p.title).includes(nq) ||
          normalize(p.excerpt).includes(nq) ||
          normalize(p.category).includes(nq)
        );
      })
    : byCategory;

  const featured = !isSearching ? filtered.slice(0, 4) : [];
  const latest = !isSearching ? filtered.slice(4) : [];

  return (
    <>
      {/* ── Sticky bar: search + category filters ── */}
      <div
        className="sticky top-0 z-40"
        style={{
          background: "rgba(32,41,69,0.90)",
          backdropFilter: "blur(20px)",
          WebkitBackdropFilter: "blur(20px)",
          borderBottom: "1px solid rgba(255,255,255,0.06)",
        }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row sm:items-center gap-2 py-3">

            {/* Search input */}
            <div className="relative shrink-0 sm:w-64">
              <svg
                className="absolute left-3 top-1/2 -translate-y-1/2 w-3.5 h-3.5 pointer-events-none"
                style={{ color: searchFocused ? "#2DB6C1" : "rgba(255,255,255,0.30)" }}
                fill="none" stroke="currentColor" viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
              <input
                ref={inputRef}
                type="text"
                value={query}
                onChange={e => setQuery(e.target.value)}
                onFocus={() => setSearchFocused(true)}
                onBlur={() => setSearchFocused(false)}
                placeholder="Buscar artículos…"
                className="w-full pl-8 pr-8 py-1.5 rounded-full text-xs font-medium outline-none transition-all duration-200"
                style={{
                  background: searchFocused ? "rgba(30,202,211,0.08)" : "rgba(255,255,255,0.06)",
                  border: `1px solid ${searchFocused ? "rgba(30,202,211,0.40)" : "rgba(255,255,255,0.10)"}`,
                  color: "rgba(255,255,255,0.85)",
                  fontFamily: FONT,
                }}
              />
              {query && (
                <button
                  onClick={() => { setQuery(""); inputRef.current?.focus(); }}
                  className="absolute right-2.5 top-1/2 -translate-y-1/2 w-4 h-4 flex items-center justify-center rounded-full transition-colors"
                  style={{ background: "rgba(255,255,255,0.12)", color: "rgba(255,255,255,0.60)" }}
                >
                  <svg className="w-2.5 h-2.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              )}
              {!query && !searchFocused && (
                <kbd
                  className="absolute right-2.5 top-1/2 -translate-y-1/2 hidden sm:flex items-center gap-0.5 text-[9px] font-bold px-1 py-0.5 rounded"
                  style={{ background: "rgba(255,255,255,0.07)", color: "rgba(255,255,255,0.25)", fontFamily: FONT, border: "1px solid rgba(255,255,255,0.10)" }}
                >
                  ⌘K
                </kbd>
              )}
            </div>

            {/* Divider */}
            <div className="hidden sm:block w-px h-5 shrink-0" style={{ background: "rgba(255,255,255,0.10)" }} />

            {/* Category pills */}
            <div className={`flex items-center gap-1 overflow-x-auto flex-1 transition-opacity duration-200 ${isSearching ? "opacity-40 pointer-events-none" : "opacity-100"}`} style={{ scrollbarWidth: "none" }}>
              {FILTER_CATEGORIES.map((cat) => {
                const count = categoryCounts[cat] || 0;
                const isActive = selected === cat && !isSearching;
                return (
                  <button
                    key={cat}
                    onClick={() => { setSelected(cat); setQuery(""); }}
                    className="shrink-0 flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-bold transition-all duration-200 whitespace-nowrap"
                    style={{
                      fontFamily: FONT,
                      background: isActive ? "#2DB6C1" : "transparent",
                      color: isActive ? "#212A45" : "rgba(255,255,255,0.50)",
                      border: isActive ? "1px solid #2DB6C1" : "1px solid rgba(255,255,255,0.10)",
                    }}
                  >
                    {cat}
                    {count > 0 && (
                      <span
                        className="text-[9px] font-bold px-1.5 py-0.5 rounded-full"
                        style={{
                          background: isActive ? "rgba(32,41,69,0.3)" : "rgba(255,255,255,0.08)",
                          color: isActive ? "#212A45" : "rgba(255,255,255,0.35)",
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
      </div>

      {/* ── SEARCH RESULTS ── */}
      {isSearching && (
        <section className="py-12" style={{ background: "#212A45" }}>
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-between mb-6">
              <div>
                <p className="text-xs font-bold tracking-widest uppercase mb-1" style={{ color: "#2DB6C1", fontFamily: FONT }}>
                  Resultados de búsqueda
                </p>
                <h2 className="text-xl font-black text-white" style={{ fontFamily: FONT, letterSpacing: "-0.5px" }}>
                  {filtered.length > 0
                    ? <>"{query}" — <span style={{ color: "#2DB6C1" }}>{filtered.length}</span> {filtered.length === 1 ? "resultado" : "resultados"}</>
                    : <>Sin resultados para "{query}"</>
                  }
                </h2>
              </div>
              <button
                onClick={() => setQuery("")}
                className="text-xs font-bold transition-colors hover:text-[#2DB6C1]"
                style={{ color: "rgba(255,255,255,0.35)", fontFamily: FONT }}
              >
                Limpiar
              </button>
            </div>

            {filtered.length > 0 ? (
              <div className="flex flex-col gap-3">
                {filtered.map((post) => (
                  <SearchResultCard key={post.slug} post={post} query={query} />
                ))}
              </div>
            ) : (
              <div className="text-center py-16">
                <div
                  className="w-14 h-14 rounded-2xl flex items-center justify-center mx-auto mb-4 border"
                  style={{ background: "rgba(255,255,255,0.04)", borderColor: "rgba(255,255,255,0.08)" }}
                >
                  <svg className="w-6 h-6" style={{ color: "rgba(255,255,255,0.25)" }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                  </svg>
                </div>
                <p className="text-white font-bold mb-1" style={{ fontFamily: FONT }}>Sin resultados</p>
                <p className="text-sm" style={{ color: "rgba(255,255,255,0.38)", fontFamily: FONT }}>
                  Prueba con otro término o explora por categoría.
                </p>
                <div className="flex flex-wrap justify-center gap-2 mt-6">
                  {FILTER_CATEGORIES.filter(c => c !== "Todos").slice(0, 5).map(cat => (
                    <button
                      key={cat}
                      onClick={() => { setQuery(""); setSelected(cat); }}
                      className="px-3 py-1.5 rounded-full text-xs font-bold border transition-colors hover:border-[#2DB6C1] hover:text-[#2DB6C1]"
                      style={{ borderColor: "rgba(255,255,255,0.12)", color: "rgba(255,255,255,0.45)", fontFamily: FONT }}
                    >
                      {cat}
                    </button>
                  ))}
                </div>
              </div>
            )}
          </div>
        </section>
      )}

      {/* ── FEATURED ARTICLES (shown when not searching) ── */}
      {!isSearching && featured.length > 0 && (
        <section className="py-16" style={{ background: "#212A45" }}>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-between mb-8">
              <div>
                <p className="text-xs font-bold tracking-widest uppercase mb-1.5" style={{ color: "#2DB6C1", fontFamily: FONT }}>
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
              <div className="lg:col-span-2">
                <FeaturedCard post={featured[0]} hero />
              </div>
              {featured[1] && <div><FeaturedCard post={featured[1]} /></div>}
              {featured[2] && <div><FeaturedCard post={featured[2]} /></div>}
              {featured[3] && <div><FeaturedCard post={featured[3]} /></div>}
            </div>
          </div>
        </section>
      )}

      {/* ── LATEST ARTICLES (shown when not searching) ── */}
      {!isSearching && latest.length > 0 && (
        <section
          className="py-16"
          style={{ background: "rgba(255,255,255,0.015)", borderTop: "1px solid rgba(255,255,255,0.05)" }}
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="mb-8">
              <p className="text-xs font-bold tracking-widest uppercase mb-1.5" style={{ color: "#2DB6C1", fontFamily: FONT }}>
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

      {/* ── EMPTY STATE (category filter, no results) ── */}
      {!isSearching && filtered.length === 0 && (
        <section className="py-24 text-center" style={{ background: "#212A45" }}>
          <div className="w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-4 border" style={{ background: "rgba(30,202,211,0.08)", borderColor: "rgba(30,202,211,0.15)" }}>
            <svg className="w-8 h-8" style={{ color: "#2DB6C1" }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
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
