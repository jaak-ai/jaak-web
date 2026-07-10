"use client";
import Link from "next/link";
import { useState } from "react";

const FONT = "var(--font-montserrat), Montserrat, sans-serif";

interface Timestamp {
  time: string;
  topic: string;
}

interface RelatedWebinar {
  title: string;
  href: string;
}

export interface ProductCard {
  icon: string;
  label: string;
  title: string;
  desc: string;
  href: string;
  color: string;
}

interface WebinarLayoutProps {
  eyebrow: string;
  title: string;
  subtitle: string;
  presenters: string;
  duration: string;
  youtubeId?: string;
  youtubeUrl?: string;
  comingSoon?: boolean;
  description: React.ReactNode;
  learnings: string[];
  timestamps: Timestamp[];
  davidBio: string;
  ariannaBio: string;
  ctaQuestion: string;
  ctaBody: string;
  related: RelatedWebinar[];
  products?: ProductCard[];
}

export default function WebinarLayout({
  eyebrow,
  title,
  subtitle,
  presenters,
  duration,
  youtubeId,
  youtubeUrl,
  comingSoon,
  description,
  learnings,
  timestamps,
  davidBio,
  ariannaBio,
  ctaQuestion,
  ctaBody,
  related,
  products = [],
}: WebinarLayoutProps) {
  const [openTs, setOpenTs] = useState<number | null>(null);

  return (
    <main style={{ background: "#202945", fontFamily: FONT, minHeight: "100vh" }}>
      <style>{`
        @keyframes fadeInUp {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .wl-a { animation: fadeInUp 0.5s ease both; }
        .wl-b { animation: fadeInUp 0.5s 0.10s ease both; }
        .wl-c { animation: fadeInUp 0.5s 0.18s ease both; }
        .cta-btn {
          display: inline-flex; align-items: center; gap: 6px;
          background: #1ECAD3; color: #202945; font-weight: 800;
          padding: 14px 28px; border-radius: 10px; font-size: 0.95rem;
          transition: box-shadow 0.2s, transform 0.2s; text-decoration: none;
        }
        .cta-btn:hover { box-shadow: 0 8px 28px rgba(30,202,211,0.30); transform: translateY(-2px); }
        .prose-p { color: rgba(255,255,255,0.65); font-size: 1rem; line-height: 1.85; margin-bottom: 1.25rem; }
        .ts-row {
          display: flex; align-items: flex-start; gap: 16px;
          padding: 14px 12px; border-radius: 10px; cursor: pointer;
          transition: background 0.15s; border: 1px solid transparent;
        }
        .ts-row:hover { background: rgba(30,202,211,0.07); border-color: rgba(30,202,211,0.15); }
        .ts-row.open { background: rgba(30,202,211,0.08); border-color: rgba(30,202,211,0.25); }
        .product-card {
          background: rgba(255,255,255,0.04);
          border: 1px solid rgba(255,255,255,0.10);
          border-radius: 14px;
          padding: 20px;
          transition: border-color 0.2s, transform 0.2s, box-shadow 0.2s;
          text-decoration: none;
          display: flex; flex-direction: column; gap: 10px;
        }
        .product-card:hover {
          border-color: rgba(30,202,211,0.40);
          transform: translateY(-3px);
          box-shadow: 0 10px 32px rgba(30,202,211,0.10);
        }
        .sticky-cta {
          position: sticky;
          top: 100px;
          background: rgba(255,255,255,0.04);
          border: 1px solid rgba(30,202,211,0.25);
          border-radius: 16px;
          padding: 24px;
        }
        @media (max-width: 1023px) {
          .sidebar-col { display: none; }
        }
      `}</style>

      {/* Breadcrumb */}
      <div style={{ borderBottom: "1px solid rgba(255,255,255,0.06)", padding: "14px 0" }}>
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav style={{ color: "rgba(255,255,255,0.38)", fontSize: "0.82rem" }}>
            <Link href="/recursos" style={{ color: "rgba(255,255,255,0.45)", textDecoration: "none" }}>Recursos</Link>
            <span className="mx-2">›</span>
            <span style={{ color: "rgba(255,255,255,0.65)" }}>{eyebrow}</span>
          </nav>
        </div>
      </div>

      {/* Header */}
      <section style={{ padding: "64px 0 48px", background: "radial-gradient(ellipse 70% 50% at 50% 0%, rgba(30,202,211,0.10) 0%, transparent 65%)" }}>
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="wl-a text-xs font-bold tracking-widest uppercase mb-4" style={{ color: "#1ECAD3" }}>
            {eyebrow}
          </p>
          <h1 className="wl-b text-3xl sm:text-4xl font-black text-white mb-5 leading-tight"
            style={{ letterSpacing: "-1px", maxWidth: "700px" }}>
            {title}
          </h1>
          <p className="wl-c text-lg mb-6" style={{ color: "rgba(255,255,255,0.60)", maxWidth: "600px" }}>{subtitle}</p>
          <div className="flex flex-wrap gap-x-6 gap-y-2" style={{ color: "rgba(255,255,255,0.45)", fontSize: "0.87rem" }}>
            <span>🎙 {presenters}</span>
            <span>⏱ {duration}</span>
          </div>
        </div>
      </section>

      {/* Two-column layout: content + sticky sidebar */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pb-0" style={{ display: "flex", gap: "48px", alignItems: "flex-start" }}>

        {/* Main content column */}
        <div style={{ flex: 1, minWidth: 0 }}>

          {/* Video */}
          <section style={{ padding: "0 0 56px", borderBottom: "1px solid rgba(255,255,255,0.06)" }}>
            {comingSoon ? (
              <div className="rounded-2xl flex items-center justify-center"
                style={{ aspectRatio: "16/9", background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.08)" }}>
                <div className="text-center">
                  <p className="text-4xl mb-3">🎬</p>
                  <p className="font-bold text-white text-lg mb-1">Video disponible próximamente</p>
                  <p style={{ color: "rgba(255,255,255,0.45)", fontSize: "0.87rem" }}>Regresa pronto para ver esta sesión ejecutiva.</p>
                </div>
              </div>
            ) : youtubeId ? (
              <div className="rounded-2xl overflow-hidden" style={{ aspectRatio: "16/9" }}>
                <iframe
                  width="100%"
                  height="100%"
                  src={`https://www.youtube-nocookie.com/embed/${youtubeId}`}
                  title={title}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  style={{ border: "none", display: "block" }}
                />
              </div>
            ) : (
              <div className="rounded-2xl flex items-center justify-center"
                style={{ aspectRatio: "16/9", background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.08)" }}>
                <div className="text-center">
                  <p className="text-4xl mb-3">▶️</p>
                  <p className="font-bold text-white text-lg mb-1">Video próximamente</p>
                  <p style={{ color: "rgba(255,255,255,0.45)", fontSize: "0.87rem" }}>Disponible en breve.</p>
                </div>
              </div>
            )}
          </section>

          {/* YouTube link */}
          {youtubeUrl && (
            <div className="flex items-center gap-3 mt-4 mb-0">
              <a
                href={youtubeUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-bold transition-all"
                style={{ background: "rgba(255,0,0,0.12)", color: "#ff4444", border: "1px solid rgba(255,0,0,0.25)" }}
                onMouseEnter={e => { (e.currentTarget as HTMLAnchorElement).style.background = "rgba(255,0,0,0.22)"; }}
                onMouseLeave={e => { (e.currentTarget as HTMLAnchorElement).style.background = "rgba(255,0,0,0.12)"; }}
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M23.498 6.186a3.016 3.016 0 00-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 00.502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 002.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 002.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                </svg>
                Ver en YouTube
              </a>
              <span style={{ color: "rgba(255,255,255,0.25)", fontSize: "0.78rem" }}>Abre en una nueva pestaña</span>
            </div>
          )}

          {/* Description */}
          <section style={{ padding: "48px 0", borderBottom: "1px solid rgba(255,255,255,0.06)" }}>
            {description}
          </section>

          {/* Product cross-sell */}
          {products.length > 0 && (
            <section style={{ padding: "48px 0", borderBottom: "1px solid rgba(255,255,255,0.06)" }}>
              <p className="text-xs font-bold tracking-widest uppercase mb-2" style={{ color: "#1ECAD3" }}>
                Soluciones JAAK para este tema
              </p>
              <h2 className="text-xl font-black text-white mb-6" style={{ letterSpacing: "-0.3px" }}>
                Lo que describes en esta sesión, JAAK ya lo resuelve
              </h2>
              <div className={`grid gap-4 ${products.length === 1 ? "" : products.length === 2 ? "sm:grid-cols-2" : "sm:grid-cols-3"}`}>
                {products.map((p) => (
                  <Link key={p.href} href={p.href} className="product-card">
                    <div className="flex items-center gap-3">
                      <span className="text-2xl">{p.icon}</span>
                      <span className="text-xs font-bold uppercase tracking-wide px-2 py-0.5 rounded-full"
                        style={{ background: `${p.color}18`, color: p.color, border: `1px solid ${p.color}40` }}>
                        {p.label}
                      </span>
                    </div>
                    <h3 className="font-black text-white" style={{ fontSize: "1rem", letterSpacing: "-0.2px" }}>{p.title}</h3>
                    <p style={{ color: "rgba(255,255,255,0.55)", fontSize: "0.85rem", lineHeight: "1.6" }}>{p.desc}</p>
                    <span className="text-sm font-bold mt-1" style={{ color: p.color }}>Ver solución →</span>
                  </Link>
                ))}
              </div>
            </section>
          )}

          {/* Learnings */}
          <section style={{ borderBottom: "1px solid rgba(255,255,255,0.06)", background: "rgba(0,0,0,0.10)", padding: "48px 0" }}>
            <h2 className="text-2xl font-black text-white mb-8" style={{ letterSpacing: "-0.5px" }}>
              Lo que aprenderás en esta sesión
            </h2>
            <ul className="flex flex-col gap-4">
              {learnings.map((item, i) => (
                <li key={i} className="flex items-start gap-4">
                  <span className="shrink-0 w-6 h-6 rounded-full flex items-center justify-center mt-0.5 text-xs font-black"
                    style={{ background: "rgba(30,202,211,0.15)", color: "#1ECAD3" }}>
                    {i + 1}
                  </span>
                  <span style={{ color: "rgba(255,255,255,0.70)", lineHeight: "1.65", fontSize: "0.96rem" }}>{item}</span>
                </li>
              ))}
            </ul>
          </section>

          {/* Timestamps — accordion */}
          <section style={{ padding: "48px 0", borderBottom: "1px solid rgba(255,255,255,0.06)" }}>
            <h2 className="text-2xl font-black text-white mb-2" style={{ letterSpacing: "-0.5px" }}>
              Índice de temas
            </h2>
            <p className="mb-6" style={{ color: "rgba(255,255,255,0.38)", fontSize: "0.83rem" }}>
              Haz clic en un tema para expandirlo
            </p>
            <div className="flex flex-col gap-1">
              {timestamps.map((ts, i) => (
                <button
                  key={i}
                  className={`ts-row${openTs === i ? " open" : ""}`}
                  onClick={() => setOpenTs(openTs === i ? null : i)}
                  style={{ textAlign: "left", background: "transparent", border: openTs === i ? "1px solid rgba(30,202,211,0.25)" : "1px solid transparent", width: "100%", cursor: "pointer" }}
                >
                  <span className="shrink-0 font-mono text-sm font-bold" style={{ color: "#1ECAD3", minWidth: "52px" }}>
                    {ts.time}
                  </span>
                  <span style={{ color: "rgba(255,255,255,0.75)", fontSize: "0.92rem", lineHeight: "1.5", flex: 1 }}>{ts.topic}</span>
                  <span style={{ color: "rgba(255,255,255,0.30)", fontSize: "0.8rem", transition: "transform 0.2s", display: "inline-block", transform: openTs === i ? "rotate(90deg)" : "none" }}>
                    ›
                  </span>
                </button>
              ))}
            </div>
          </section>

          {/* Presenters */}
          <section style={{ padding: "48px 0", borderBottom: "1px solid rgba(255,255,255,0.06)" }}>
            <h2 className="text-2xl font-black text-white mb-8" style={{ letterSpacing: "-0.5px" }}>
              Presentadores
            </h2>
            <div className="grid sm:grid-cols-2 gap-6">
              {[
                { name: "Dr. David Merino", bio: davidBio, initials: "DM" },
                { name: "Arianna Quezada", bio: ariannaBio, initials: "AQ" },
              ].map((p) => (
                <div key={p.name} className="p-6 rounded-xl" style={{ background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.08)" }}>
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-12 h-12 rounded-full flex items-center justify-center text-sm font-black shrink-0"
                      style={{ background: "rgba(30,202,211,0.15)", color: "#1ECAD3" }}>
                      {p.initials}
                    </div>
                    <h3 className="font-bold text-white" style={{ fontSize: "1rem" }}>{p.name}</h3>
                  </div>
                  <p style={{ color: "rgba(255,255,255,0.55)", fontSize: "0.87rem", lineHeight: "1.7" }}>{p.bio}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Mobile CTA */}
          <section className="lg:hidden" style={{ padding: "48px 0", borderBottom: "1px solid rgba(255,255,255,0.06)", background: "radial-gradient(ellipse 70% 80% at 50% 50%, rgba(30,202,211,0.09) 0%, transparent 70%)" }}>
            <div className="text-center">
              <h2 className="text-2xl font-black text-white mb-4" style={{ letterSpacing: "-0.8px" }}>
                {ctaQuestion}
              </h2>
              <p className="mb-8" style={{ color: "rgba(255,255,255,0.60)", lineHeight: "1.75" }}>{ctaBody}</p>
              <Link href="/contacto" className="cta-btn" style={{ fontFamily: FONT }}>
                Agenda una demo →
              </Link>
            </div>
          </section>

          {/* Related */}
          {related.length > 0 && (
            <section style={{ padding: "48px 0 80px" }}>
              <h2 className="text-xl font-black text-white mb-6" style={{ letterSpacing: "-0.3px" }}>
                Webinars relacionados
              </h2>
              <div className="flex flex-col sm:flex-row gap-4">
                {related.map((r) => (
                  <Link key={r.href} href={r.href}
                    className="flex-1 p-5 rounded-xl no-underline transition-all"
                    style={{ background: "rgba(255,255,255,0.04)", border: "1px solid rgba(30,202,211,0.18)", color: "rgba(255,255,255,0.75)" }}>
                    <span style={{ fontSize: "0.90rem", lineHeight: "1.5", display: "block", marginBottom: "8px" }}>{r.title}</span>
                    <span style={{ color: "#1ECAD3", fontSize: "0.85rem", fontWeight: 700 }}>Ver sesión →</span>
                  </Link>
                ))}
              </div>
            </section>
          )}
        </div>

        {/* Sticky sidebar — desktop only */}
        <div className="sidebar-col" style={{ width: "280px", flexShrink: 0, paddingTop: "48px" }}>
          <div className="sticky-cta">
            <p className="text-xs font-bold uppercase tracking-widest mb-3" style={{ color: "#1ECAD3" }}>
              ¿Listo para implementarlo?
            </p>
            <h3 className="font-black text-white mb-3 leading-snug" style={{ fontSize: "1rem", letterSpacing: "-0.2px" }}>
              {ctaQuestion}
            </h3>
            <p className="mb-5" style={{ color: "rgba(255,255,255,0.55)", fontSize: "0.85rem", lineHeight: "1.65" }}>
              {ctaBody}
            </p>
            <Link href="/contacto" className="cta-btn" style={{ fontFamily: FONT, width: "100%", justifyContent: "center" }}>
              Agenda una demo
            </Link>
            <div className="mt-4 pt-4" style={{ borderTop: "1px solid rgba(255,255,255,0.08)" }}>
              <p className="text-xs mb-3" style={{ color: "rgba(255,255,255,0.35)" }}>También puede interesarte</p>
              {related.slice(0, 2).map((r) => (
                <Link key={r.href} href={r.href}
                  className="block mb-2 text-xs no-underline transition-colors"
                  style={{ color: "rgba(255,255,255,0.50)" }}
                  onMouseEnter={e => (e.currentTarget.style.color = "#1ECAD3")}
                  onMouseLeave={e => (e.currentTarget.style.color = "rgba(255,255,255,0.50)")}>
                  → {r.title}
                </Link>
              ))}
              {products.slice(0, 1).map((p) => (
                <Link key={p.href} href={p.href}
                  className="block mt-3 text-xs no-underline"
                  style={{ color: p.color, fontWeight: 700 }}>
                  {p.icon} {p.title}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
