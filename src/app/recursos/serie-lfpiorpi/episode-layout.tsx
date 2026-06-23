"use client";
import Link from "next/link";

const FONT = "var(--font-montserrat), Montserrat, sans-serif";

interface EpisodeLayoutProps {
  epNumber: string;
  totalEps: number;
  title: string;
  subtitle: string;
  youtubeId?: string;
  description: React.ReactNode;
  learnings: string[];
  nextEp?: { title: string; href: string };
  prevEp?: { title: string; href: string };
}

export default function EpisodeLayout({
  epNumber,
  totalEps,
  title,
  description,
  learnings,
  nextEp,
  prevEp,
}: EpisodeLayoutProps) {
  const epNum = parseInt(epNumber, 10);

  return (
    <main style={{ background: "#202945", fontFamily: FONT, minHeight: "100vh" }}>
      <style>{`
        @keyframes fadeInUp {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .el-a { animation: fadeInUp 0.5s ease both; }
        .el-b { animation: fadeInUp 0.5s 0.1s ease both; }
        .cta-btn {
          display: inline-flex; align-items: center; gap: 6px;
          background: #1ECAD3; color: #202945; font-weight: 800;
          padding: 14px 28px; border-radius: 10px; font-size: 0.95rem;
          transition: box-shadow 0.2s, transform 0.2s; text-decoration: none;
        }
        .cta-btn:hover { box-shadow: 0 8px 28px rgba(30,202,211,0.30); transform: translateY(-2px); }
        .prose-p { color: rgba(255,255,255,0.65); font-size: 1rem; line-height: 1.85; margin-bottom: 1.25rem; }
        .nav-ep {
          background: rgba(255,255,255,0.04);
          border: 1px solid rgba(255,255,255,0.08);
          border-radius: 12px;
          padding: 16px 20px;
          text-decoration: none;
          transition: border-color 0.2s, background 0.2s;
          flex: 1;
        }
        .nav-ep:hover { border-color: rgba(30,202,211,0.35); background: rgba(30,202,211,0.05); }
      `}</style>

      {/* Breadcrumb */}
      <div style={{ borderBottom: "1px solid rgba(255,255,255,0.06)", padding: "14px 0" }}>
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav style={{ color: "rgba(255,255,255,0.38)", fontSize: "0.82rem" }}>
            <Link href="/recursos" style={{ color: "rgba(255,255,255,0.45)", textDecoration: "none" }}>Recursos</Link>
            <span className="mx-2">›</span>
            <Link href="/recursos/serie-lfpiorpi" style={{ color: "rgba(255,255,255,0.45)", textDecoration: "none" }}>Serie LFPIORPI</Link>
            <span className="mx-2">›</span>
            <span style={{ color: "rgba(255,255,255,0.65)" }}>Episodio {epNumber}</span>
          </nav>
        </div>
      </div>

      {/* Header */}
      <section style={{ padding: "56px 0 40px", background: "radial-gradient(ellipse 70% 40% at 50% 0%, rgba(30,202,211,0.09) 0%, transparent 65%)" }}>
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Progress */}
          <div className="flex items-center gap-3 mb-6">
            <span className="text-xs font-bold tracking-widest uppercase" style={{ color: "#1ECAD3" }}>
              Episodio {epNumber} de {totalEps} · LFPIORPI
            </span>
            <div className="flex-1 h-1 rounded-full overflow-hidden" style={{ background: "rgba(255,255,255,0.08)", maxWidth: "120px" }}>
              <div
                className="h-full rounded-full"
                style={{ background: "#1ECAD3", width: `${(epNum / totalEps) * 100}%`, transition: "width 0.5s" }}
              />
            </div>
          </div>
          <h1 className="el-a text-3xl sm:text-4xl font-black text-white mb-4 leading-tight" style={{ letterSpacing: "-1px" }}>
            {title}
          </h1>
        </div>
      </section>

      {/* Video placeholder */}
      <section style={{ padding: "0 0 48px", borderBottom: "1px solid rgba(255,255,255,0.06)" }}>
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div
            className="rounded-2xl flex items-center justify-center"
            style={{ aspectRatio: "16/9", background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.08)" }}
          >
            <div className="text-center">
              <p className="text-4xl mb-3">▶️</p>
              <p className="font-bold text-white text-lg mb-1">Video disponible próximamente</p>
              <p style={{ color: "rgba(255,255,255,0.45)", fontSize: "0.87rem" }}>Episodio {epNumber} · Serie LFPIORPI</p>
            </div>
          </div>
        </div>
      </section>

      {/* Description */}
      <section style={{ padding: "48px 0", borderBottom: "1px solid rgba(255,255,255,0.06)" }}>
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          {description}
        </div>
      </section>

      {/* Learnings */}
      <section style={{ padding: "48px 0", borderBottom: "1px solid rgba(255,255,255,0.06)", background: "rgba(0,0,0,0.10)" }}>
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-xl font-black text-white mb-6" style={{ letterSpacing: "-0.3px" }}>
            Lo que aprenderás en este episodio
          </h2>
          <ul className="flex flex-col gap-4">
            {learnings.map((item, i) => (
              <li key={i} className="flex items-start gap-4">
                <span className="shrink-0 w-6 h-6 rounded-full flex items-center justify-center mt-0.5 text-xs font-black"
                  style={{ background: "rgba(30,202,211,0.15)", color: "#1ECAD3" }}>
                  {i + 1}
                </span>
                <span style={{ color: "rgba(255,255,255,0.70)", lineHeight: "1.65", fontSize: "0.95rem" }}>{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* PDF Card */}
      <section style={{ padding: "48px 0", borderBottom: "1px solid rgba(255,255,255,0.06)" }}>
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="p-6 rounded-xl flex flex-col sm:flex-row items-center gap-5"
            style={{ background: "rgba(30,202,211,0.06)", border: "1px solid rgba(30,202,211,0.22)" }}>
            <div className="text-3xl shrink-0">📄</div>
            <div className="flex-1">
              <h3 className="font-bold text-white mb-1" style={{ fontSize: "1rem" }}>Descarga la guía completa de la serie</h3>
              <p style={{ color: "rgba(255,255,255,0.55)", fontSize: "0.87rem" }}>
                Todo lo que explican los 5 episodios en un PDF de referencia rápida. Llévalo a tu equipo,
                úsalo en una reunión de cumplimiento, tenlo a la mano cuando lo necesites.
              </p>
            </div>
            <a
              href="#"
              className="cta-btn whitespace-nowrap"
              style={{ fontFamily: FONT, opacity: 0.6, pointerEvents: "none" }}
              aria-disabled="true"
            >
              Descargar PDF →
            </a>
          </div>
        </div>
      </section>

      {/* Episode Navigation */}
      <section style={{ padding: "48px 0", borderBottom: "1px solid rgba(255,255,255,0.06)" }}>
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex gap-4">
            {prevEp && (
              <Link href={prevEp.href} className="nav-ep">
                <p className="text-xs font-bold uppercase mb-1" style={{ color: "rgba(255,255,255,0.35)" }}>← Episodio anterior</p>
                <p className="font-bold text-white" style={{ fontSize: "0.90rem" }}>{prevEp.title}</p>
              </Link>
            )}
            {nextEp && (
              <Link href={nextEp.href} className="nav-ep" style={{ textAlign: "right" }}>
                <p className="text-xs font-bold uppercase mb-1" style={{ color: "#1ECAD3" }}>Siguiente episodio →</p>
                <p className="font-bold text-white" style={{ fontSize: "0.90rem" }}>{nextEp.title}</p>
              </Link>
            )}
          </div>
          <div className="mt-6 text-center">
            <Link href="/recursos/serie-lfpiorpi" style={{ color: "rgba(255,255,255,0.40)", fontSize: "0.85rem", textDecoration: "none" }}>
              ← Ver todos los episodios
            </Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section style={{ padding: "72px 0", background: "radial-gradient(ellipse 60% 80% at 50% 50%, rgba(30,202,211,0.09) 0%, transparent 70%)" }}>
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl sm:text-3xl font-black text-white mb-4" style={{ letterSpacing: "-0.8px" }}>
            ¿Quieres ver cómo JAAK implementa esto en tu operación?
          </h2>
          <p className="mb-8" style={{ color: "rgba(255,255,255,0.60)", lineHeight: "1.75" }}>
            Agenda una demo y descubre cómo JAAK construye el expediente digital que exige la LFPIORPI —
            desde la primera operación.
          </p>
          <Link href="/contacto" className="cta-btn" style={{ fontFamily: FONT }}>
            Agenda una demo →
          </Link>
        </div>
      </section>
    </main>
  );
}
