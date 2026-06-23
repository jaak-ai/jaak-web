import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Recursos educativos en cumplimiento digital · JAAK",
  description:
    "Webinars ejecutivos y guías sobre LFPIORPI, firma electrónica, KYC biométrico y expediente digital. Aprende con expertos y descubre cómo JAAK protege tu operación.",
  keywords: [
    "LFPIORPI",
    "webinars cumplimiento digital México",
    "KYC biométrico",
    "firma electrónica NOM-151",
    "expediente digital auditabl",
    "prevención lavado dinero",
    "onboarding digital regulación",
    "UIF México obligaciones",
    "CNBV cumplimiento",
    "actividades vulnerables México",
  ],
  openGraph: {
    title: "Recursos educativos en cumplimiento digital · JAAK",
    description:
      "Webinars ejecutivos y guías sobre LFPIORPI, firma electrónica, KYC biométrico y expediente digital.",
    url: "https://jaak.ai/recursos",
  },
  alternates: { canonical: "https://jaak.ai/recursos" },
};

const FONT = "var(--font-montserrat), Montserrat, sans-serif";

const WEBINARS = [
  {
    badge: "Sector Financiero",
    badgeColor: "#1ECAD3",
    title: "Banca, Fintech y Neobancos: la nueva confianza financiera",
    desc: "¿Qué diferencia realmente a los tres modelos financieros? ¿Por qué el onboarding se volvió el momento más crítico? David Merino y Arianna Quezada exploran la convergencia regulatoria.",
    duration: "60 min",
    presenters: "Dr. David Merino & Arianna Quezada",
    href: "/recursos/banca-fintech-neobancos",
    available: true,
  },
  {
    badge: "Todos los sectores",
    badgeColor: "#2AD796",
    title: "Cumplir ya no es suficiente: cómo demostrar que tu empresa está protegida",
    desc: "Tener buenas intenciones no es evidencia. Esta sesión explica qué cambió con la reforma LFPIORPI de julio 2025, qué diferencia hay entre tener documentos y tener evidencia.",
    duration: "60 min",
    presenters: "Dr. David Merino & Arianna Quezada",
    href: "/recursos/cumplir-ya-no-es-suficiente",
    available: true,
  },
  {
    badge: "Inmobiliario · Automotriz",
    badgeColor: "#F59E0B",
    title: "LFPIORPI en el sector inmobiliario y automotriz: lo que la ley realmente te exige",
    desc: "¿En qué punto de una venta entra la identidad del cliente? ¿Desde qué montos aplica la ley? ¿Qué tiene que contener tu expediente y por qué se conserva 10 años?",
    duration: "50 min",
    presenters: "Dr. David Merino & Arianna Quezada",
    href: "/recursos/lfpiorpi-inmobiliario-automotriz",
    available: true,
  },
  {
    badge: "Crédito Digital · SOFOM · Fintech",
    badgeColor: "#A78BFA",
    title: "¿Puede existir un pagaré 100% digital? Validez, evidencia y ejecutabilidad",
    desc: "La ley ya lo permite. El reto es que la operación lo sostenga ante un juez o una auditoría. Qué hace válido un pagaré digital, diferencia entre firma simple y avanzada.",
    duration: "60 min",
    presenters: "Dr. David Merino & Arianna Quezada",
    href: "/recursos/pagare-digital",
    available: true,
  },
];

const SERIES = [
  {
    ep: "01",
    title: "¿A quién le aplica la LFPIORPI?",
    desc: "Actividades vulnerables, objeto obligado y sectores incluidos en el artículo 17.",
    href: "/recursos/serie-lfpiorpi/a-quien-aplica",
  },
  {
    ep: "02",
    title: "¿Desde qué monto aplica la ley?",
    desc: "Umbrales en UMAs por sector, operaciones fraccionadas y deber de avisar a la UIF.",
    href: "/recursos/serie-lfpiorpi/umbrales-montos",
  },
  {
    ep: "03",
    title: "¿Qué tienes que hacer para cumplir?",
    desc: "Identificación de clientes, expediente, listas PEP/SAT/OFAC y conservación 10 años.",
    href: "/recursos/serie-lfpiorpi/obligaciones",
  },
  {
    ep: "04",
    title: "¿Qué pasa si no cumplo?",
    desc: "Sanciones del artículo 54, responsabilidad del objeto obligado y regularización espontánea.",
    href: "/recursos/serie-lfpiorpi/sanciones",
  },
  {
    ep: "05",
    title: "El expediente digital: qué contiene y cómo aguanta una auditoría",
    desc: "NOM-151, integridad documental, sello de tiempo y 10 años de conservación jurídica.",
    href: "/recursos/serie-lfpiorpi/expediente-digital",
  },
];

const TAGS = [
  "LFPIORPI", "NOM-151", "Firma electrónica", "KYC biométrico", "Pagaré digital",
  "Expediente auditable", "Prevención de lavado de dinero", "Onboarding digital",
  "Identidad verificable", "Actividades vulnerables", "Objeto obligado",
  "Sanciones LFPIORPI", "Banca", "Fintech", "Neobancos", "Sector inmobiliario",
  "Sector automotriz", "Crédito digital",
];

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "CollectionPage",
  name: "Recursos educativos en cumplimiento digital · JAAK",
  description:
    "Webinars ejecutivos y guías sobre LFPIORPI, firma electrónica, KYC biométrico y expediente digital.",
  url: "https://jaak.ai/recursos",
  publisher: {
    "@type": "Organization",
    name: "JAAK",
    url: "https://jaak.ai",
    logo: { "@type": "ImageObject", url: "https://jaak.ai/jaak-logo.svg" },
  },
  hasPart: [
    {
      "@type": "WebPage",
      name: "Banca, Fintech y Neobancos: la nueva confianza financiera",
      url: "https://jaak.ai/recursos/banca-fintech-neobancos",
    },
    {
      "@type": "WebPage",
      name: "Cumplir ya no es suficiente: cómo demostrar que tu empresa está protegida",
      url: "https://jaak.ai/recursos/cumplir-ya-no-es-suficiente",
    },
    {
      "@type": "WebPage",
      name: "LFPIORPI en el sector inmobiliario y automotriz",
      url: "https://jaak.ai/recursos/lfpiorpi-inmobiliario-automotriz",
    },
    {
      "@type": "WebPage",
      name: "Serie LFPIORPI: guía completa para empresas mexicanas",
      url: "https://jaak.ai/recursos/serie-lfpiorpi",
    },
  ],
};

export default function RecursosPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Header />
      <main style={{ background: "#202945", fontFamily: FONT, minHeight: "100vh" }}>
        <style>{`
          @keyframes fadeInUp {
            from { opacity: 0; transform: translateY(24px); }
            to { opacity: 1; transform: translateY(0); }
          }
          .recursos-hero-a { animation: fadeInUp 0.55s ease both; }
          .recursos-hero-b { animation: fadeInUp 0.55s 0.12s ease both; }
          .recursos-hero-c { animation: fadeInUp 0.55s 0.22s ease both; }
          .recursos-hero-d { animation: fadeInUp 0.55s 0.32s ease both; }
          .webinar-card {
            background: rgba(255,255,255,0.04);
            border: 1px solid rgba(30,202,211,0.18);
            border-radius: 16px;
            transition: border-color 0.2s, box-shadow 0.2s, transform 0.2s;
          }
          .webinar-card:hover {
            border-color: rgba(30,202,211,0.42);
            box-shadow: 0 8px 32px rgba(30,202,211,0.10);
            transform: translateY(-3px);
          }
          .ep-card {
            background: rgba(255,255,255,0.03);
            border: 1px solid rgba(255,255,255,0.08);
            border-radius: 12px;
            transition: border-color 0.2s, background 0.2s;
          }
          .ep-card:hover {
            background: rgba(30,202,211,0.06);
            border-color: rgba(30,202,211,0.30);
          }
          .tag-chip {
            background: rgba(30,202,211,0.08);
            border: 1px solid rgba(30,202,211,0.20);
            border-radius: 999px;
            color: rgba(255,255,255,0.72);
            font-size: 0.75rem;
            padding: 4px 14px;
            transition: background 0.15s;
          }
          .tag-chip:hover { background: rgba(30,202,211,0.18); }
          .cta-btn {
            display: inline-flex;
            align-items: center;
            gap: 6px;
            background: #1ECAD3;
            color: #202945;
            font-weight: 800;
            padding: 14px 28px;
            border-radius: 10px;
            font-size: 0.95rem;
            transition: box-shadow 0.2s, transform 0.2s;
            text-decoration: none;
          }
          .cta-btn:hover {
            box-shadow: 0 8px 28px rgba(30,202,211,0.30);
            transform: translateY(-2px);
          }
          .cta-btn-ghost {
            display: inline-flex;
            align-items: center;
            gap: 6px;
            background: transparent;
            color: #1ECAD3;
            font-weight: 700;
            padding: 14px 28px;
            border-radius: 10px;
            border: 1.5px solid rgba(30,202,211,0.40);
            font-size: 0.95rem;
            transition: border-color 0.2s, background 0.2s;
            text-decoration: none;
          }
          .cta-btn-ghost:hover {
            border-color: #1ECAD3;
            background: rgba(30,202,211,0.06);
          }
        `}</style>

        {/* HERO */}
        <section
          style={{
            background: "radial-gradient(ellipse 80% 60% at 50% 0%, rgba(30,202,211,0.13) 0%, transparent 70%), #202945",
            padding: "120px 0 80px",
          }}
        >
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <p
              className="recursos-hero-a text-xs font-bold tracking-widest uppercase mb-4"
              style={{ color: "#1ECAD3", fontFamily: FONT }}
            >
              JAAK · Centro educativo
            </p>
            <h1
              className="recursos-hero-b text-4xl sm:text-5xl font-black text-white mb-6 leading-tight"
              style={{ fontFamily: FONT, letterSpacing: "-1.5px" }}
            >
              Lo que tu empresa necesita entender sobre{" "}
              <span style={{ color: "#1ECAD3" }}>cumplimiento digital</span> en México.
            </h1>
            <p
              className="recursos-hero-c text-lg mb-10"
              style={{ color: "rgba(255,255,255,0.65)", maxWidth: "600px", margin: "0 auto 2.5rem" }}
            >
              Sesiones ejecutivas con expertos en regulación, identidad digital y evidencia jurídica.
              Gratis, en video, con recursos descargables.
            </p>
            <div className="recursos-hero-d flex flex-wrap gap-4 justify-center">
              <a href="#webinars" className="cta-btn" style={{ fontFamily: FONT }}>
                Ver webinars →
              </a>
              <Link href="/recursos/serie-lfpiorpi" className="cta-btn-ghost" style={{ fontFamily: FONT }}>
                Descargar guía LFPIORPI →
              </Link>
            </div>
          </div>
        </section>

        {/* INTRO TEXT */}
        <section style={{ padding: "48px 0", borderTop: "1px solid rgba(255,255,255,0.05)" }}>
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <p style={{ color: "rgba(255,255,255,0.60)", fontSize: "1rem", lineHeight: "1.8" }}>
              En JAAK creemos que el cumplimiento empieza por entender. Esta sección reúne sesiones
              ejecutivas, guías prácticas y recursos sobre los temas regulatorios que más afectan a
              empresas mexicanas hoy: <strong style={{ color: "rgba(255,255,255,0.85)" }}>LFPIORPI,
              firma electrónica, KYC biométrico, NOM-151 y expediente digital.</strong>
            </p>
            <p className="mt-4" style={{ color: "rgba(255,255,255,0.50)", fontSize: "0.92rem", lineHeight: "1.8" }}>
              El contenido está diseñado para directivos, responsables de cumplimiento y operadores que
              necesitan tomar decisiones informadas, no para leer la ley completa.
            </p>
          </div>
        </section>

        {/* WEBINARS */}
        <section id="webinars" style={{ padding: "72px 0", borderTop: "1px solid rgba(255,255,255,0.05)" }}>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="mb-12">
              <p className="text-xs font-bold tracking-widest uppercase mb-3" style={{ color: "#1ECAD3", fontFamily: FONT }}>
                Sesiones ejecutivas con expertos
              </p>
              <h2 className="text-3xl font-black text-white mb-3" style={{ fontFamily: FONT, letterSpacing: "-0.8px" }}>
                Conversaciones reales sobre cumplimiento regulatorio
              </h2>
              <p style={{ color: "rgba(255,255,255,0.55)", maxWidth: "540px" }}>
                El Dr. David Merino y Arianna Quezada sobre los temas que más afectan a la operación
                de empresas mexicanas.
              </p>
            </div>
            <div className="grid sm:grid-cols-2 gap-6">
              {WEBINARS.map((w) => (
                <article key={w.href} className="webinar-card p-7 flex flex-col gap-4">
                  <div className="flex items-center gap-3">
                    <span
                      className="text-xs font-bold tracking-wide uppercase px-3 py-1 rounded-full"
                      style={{ background: `${w.badgeColor}18`, color: w.badgeColor, border: `1px solid ${w.badgeColor}40` }}
                    >
                      {w.badge}
                    </span>
                    {!w.available && (
                      <span className="text-xs font-semibold px-3 py-1 rounded-full"
                        style={{ background: "rgba(255,255,255,0.06)", color: "rgba(255,255,255,0.40)" }}>
                        Próximamente
                      </span>
                    )}
                  </div>
                  <h3 className="text-xl font-bold text-white leading-snug" style={{ fontFamily: FONT, letterSpacing: "-0.3px" }}>
                    {w.title}
                  </h3>
                  <p style={{ color: "rgba(255,255,255,0.58)", fontSize: "0.92rem", lineHeight: "1.7", flex: 1 }}>
                    {w.desc}
                  </p>
                  <div className="flex items-center justify-between pt-2 border-t" style={{ borderColor: "rgba(255,255,255,0.07)" }}>
                    <span style={{ color: "rgba(255,255,255,0.40)", fontSize: "0.80rem" }}>
                      {w.duration} · {w.presenters}
                    </span>
                    {w.available ? (
                      <Link
                        href={w.href}
                        className="text-sm font-bold transition-colors"
                        style={{ color: "#1ECAD3" }}
                      >
                        Ver sesión →
                      </Link>
                    ) : (
                      <span style={{ color: "rgba(255,255,255,0.28)", fontSize: "0.85rem" }}>Disponible pronto</span>
                    )}
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* SERIE LFPIORPI */}
        <section style={{ padding: "72px 0", borderTop: "1px solid rgba(255,255,255,0.05)", background: "rgba(0,0,0,0.12)" }}>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="mb-12 flex flex-col sm:flex-row sm:items-end sm:justify-between gap-6">
              <div>
                <span className="inline-block text-xs font-bold tracking-widest uppercase px-3 py-1 rounded-full mb-4"
                  style={{ background: "rgba(30,202,211,0.10)", color: "#1ECAD3", border: "1px solid rgba(30,202,211,0.25)" }}>
                  5 episodios · Serie completa · PDF descargable
                </span>
                <h2 className="text-3xl font-black text-white mb-3" style={{ fontFamily: FONT, letterSpacing: "-0.8px" }}>
                  Serie LFPIORPI: lo que la ley exige, explicado sin rodeos
                </h2>
                <p style={{ color: "rgba(255,255,255,0.55)", maxWidth: "520px" }}>
                  Cinco episodios cortos sobre las obligaciones más relevantes de la Ley Antilavado.
                  Incluye guía descargable en PDF.
                </p>
              </div>
              <Link href="/recursos/serie-lfpiorpi" className="cta-btn-ghost whitespace-nowrap" style={{ fontFamily: FONT }}>
                Ver la serie completa →
              </Link>
            </div>

            <div className="flex flex-col gap-3">
              {SERIES.map((ep) => (
                <Link key={ep.href} href={ep.href} className="ep-card p-5 flex items-center gap-5 no-underline">
                  <span className="text-3xl font-black shrink-0" style={{ color: "rgba(30,202,211,0.30)", fontFamily: FONT, lineHeight: 1 }}>
                    {ep.ep}
                  </span>
                  <div className="flex-1 min-w-0">
                    <h3 className="font-bold text-white mb-1" style={{ fontFamily: FONT, fontSize: "0.97rem" }}>
                      {ep.title}
                    </h3>
                    <p style={{ color: "rgba(255,255,255,0.48)", fontSize: "0.83rem" }}>{ep.desc}</p>
                  </div>
                  <span style={{ color: "#1ECAD3", fontSize: "1.1rem", flexShrink: 0 }}>→</span>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* TAGS SEO */}
        <section style={{ padding: "60px 0", borderTop: "1px solid rgba(255,255,255,0.05)" }}>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <p className="text-xs font-bold tracking-widest uppercase mb-6" style={{ color: "#1ECAD3", fontFamily: FONT }}>
              Temas que cubrimos
            </p>
            <div className="flex flex-wrap gap-3">
              {TAGS.map((tag) => (
                <span key={tag} className="tag-chip" style={{ fontFamily: FONT }}>
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </section>

        {/* CTA BANNER */}
        <section style={{ padding: "80px 0", background: "radial-gradient(ellipse 70% 80% at 50% 50%, rgba(30,202,211,0.10) 0%, transparent 70%)", borderTop: "1px solid rgba(30,202,211,0.12)" }}>
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl sm:text-4xl font-black text-white mb-4" style={{ fontFamily: FONT, letterSpacing: "-1px" }}>
              ¿Tu operación genera evidencia —{" "}
              <span style={{ color: "#1ECAD3" }}>o solo archivos?</span>
            </h2>
            <p className="mb-10" style={{ color: "rgba(255,255,255,0.60)", fontSize: "1.05rem", lineHeight: "1.75" }}>
              Hay una diferencia entre guardar documentos y construir evidencia que resista una auditoría.
              JAAK lo resuelve desde el primer paso del proceso.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Link href="/contacto" className="cta-btn" style={{ fontFamily: FONT }}>
                Agenda una demo →
              </Link>
              <Link href="/" className="cta-btn-ghost" style={{ fontFamily: FONT }}>
                Conoce JAAK →
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
