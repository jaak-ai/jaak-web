"use client";
import Link from "next/link";

const FONT = "var(--font-montserrat), Montserrat, sans-serif";

interface Timestamp {
  time: string;
  topic: string;
}

interface RelatedWebinar {
  title: string;
  href: string;
}

interface WebinarLayoutProps {
  eyebrow: string;
  title: string;
  subtitle: string;
  presenters: string;
  duration: string;
  youtubeId?: string;
  comingSoon?: boolean;
  description: React.ReactNode;
  learnings: string[];
  timestamps: Timestamp[];
  davidBio: string;
  ariannaBio: string;
  ctaQuestion: string;
  ctaBody: string;
  related: RelatedWebinar[];
}

export default function WebinarLayout({
  eyebrow,
  title,
  subtitle,
  presenters,
  duration,
  youtubeId,
  comingSoon,
  description,
  learnings,
  timestamps,
  davidBio,
  ariannaBio,
  ctaQuestion,
  ctaBody,
  related,
}: WebinarLayoutProps) {
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
        .ts-row:hover { background: rgba(30,202,211,0.05); border-radius: 8px; }
      `}</style>

      {/* Breadcrumb */}
      <div style={{ borderBottom: "1px solid rgba(255,255,255,0.06)", padding: "14px 0" }}>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav style={{ color: "rgba(255,255,255,0.38)", fontSize: "0.82rem" }}>
            <Link href="/recursos" style={{ color: "rgba(255,255,255,0.45)", textDecoration: "none" }}>Recursos</Link>
            <span className="mx-2">›</span>
            <span style={{ color: "rgba(255,255,255,0.65)" }}>{eyebrow}</span>
          </nav>
        </div>
      </div>

      {/* Header */}
      <section style={{ padding: "64px 0 48px", background: "radial-gradient(ellipse 70% 50% at 50% 0%, rgba(30,202,211,0.10) 0%, transparent 65%)" }}>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="wl-a text-xs font-bold tracking-widest uppercase mb-4" style={{ color: "#1ECAD3" }}>
            {eyebrow}
          </p>
          <h1 className="wl-b text-3xl sm:text-4xl font-black text-white mb-5 leading-tight"
            style={{ letterSpacing: "-1px" }}>
            {title}
          </h1>
          <p className="wl-c text-lg mb-6" style={{ color: "rgba(255,255,255,0.60)" }}>{subtitle}</p>
          <div className="flex flex-wrap gap-x-6 gap-y-2" style={{ color: "rgba(255,255,255,0.45)", fontSize: "0.87rem" }}>
            <span>🎙 {presenters}</span>
            <span>⏱ {duration}</span>
          </div>
        </div>
      </section>

      {/* Video / Coming Soon */}
      <section style={{ padding: "0 0 56px", borderBottom: "1px solid rgba(255,255,255,0.06)" }}>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {comingSoon ? (
            <div
              className="rounded-2xl flex items-center justify-center"
              style={{ aspectRatio: "16/9", background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.08)" }}
            >
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
            <div
              className="rounded-2xl flex items-center justify-center"
              style={{ aspectRatio: "16/9", background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.08)" }}
            >
              <div className="text-center">
                <p className="text-4xl mb-3">▶️</p>
                <p className="font-bold text-white text-lg mb-1">Ver en YouTube</p>
                <p style={{ color: "rgba(255,255,255,0.45)", fontSize: "0.87rem" }}>El video estará disponible en breve.</p>
              </div>
            </div>
          )}
        </div>
      </section>

      {/* Description */}
      <section style={{ padding: "56px 0", borderBottom: "1px solid rgba(255,255,255,0.06)" }}>
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          {description}
        </div>
      </section>

      {/* Learnings */}
      <section style={{ padding: "56px 0", borderBottom: "1px solid rgba(255,255,255,0.06)", background: "rgba(0,0,0,0.10)" }}>
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
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
        </div>
      </section>

      {/* Timestamps */}
      <section style={{ padding: "56px 0", borderBottom: "1px solid rgba(255,255,255,0.06)" }}>
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-black text-white mb-8" style={{ letterSpacing: "-0.5px" }}>
            Índice de temas
          </h2>
          <div className="flex flex-col gap-1">
            {timestamps.map((ts, i) => (
              <div key={i} className="ts-row flex items-start gap-5 px-3 py-3">
                <span className="shrink-0 font-mono text-sm font-bold" style={{ color: "#1ECAD3", minWidth: "48px" }}>
                  {ts.time}
                </span>
                <span style={{ color: "rgba(255,255,255,0.65)", fontSize: "0.92rem", lineHeight: "1.5" }}>{ts.topic}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Presenters */}
      <section style={{ padding: "56px 0", borderBottom: "1px solid rgba(255,255,255,0.06)", background: "rgba(0,0,0,0.10)" }}>
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
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
        </div>
      </section>

      {/* CTA */}
      <section style={{ padding: "72px 0", background: "radial-gradient(ellipse 70% 80% at 50% 50%, rgba(30,202,211,0.09) 0%, transparent 70%)", borderBottom: "1px solid rgba(255,255,255,0.06)" }}>
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl sm:text-3xl font-black text-white mb-4" style={{ letterSpacing: "-0.8px" }}>
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
        <section style={{ padding: "56px 0" }}>
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-xl font-black text-white mb-6" style={{ letterSpacing: "-0.3px" }}>
              Webinars relacionados
            </h2>
            <div className="flex flex-col sm:flex-row gap-4">
              {related.map((r) => (
                <Link
                  key={r.href}
                  href={r.href}
                  className="flex-1 p-5 rounded-xl no-underline transition-all"
                  style={{ background: "rgba(255,255,255,0.04)", border: "1px solid rgba(30,202,211,0.18)", color: "rgba(255,255,255,0.75)" }}
                >
                  <span style={{ fontSize: "0.90rem", lineHeight: "1.5", display: "block", marginBottom: "8px" }}>{r.title}</span>
                  <span style={{ color: "#1ECAD3", fontSize: "0.85rem", fontWeight: 700 }}>Ver sesión →</span>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}
    </main>
  );
}
