import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Serie LFPIORPI: guía completa para empresas mexicanas · JAAK",
  description:
    "5 videos cortos sobre las obligaciones de la LFPIORPI para empresas mexicanas. Descarga la guía en PDF. Actividades vulnerables, montos, objeto obligado, sanciones y expediente digital.",
  keywords: [
    "LFPIORPI guía completa",
    "actividades vulnerables México",
    "objeto obligado LFPIORPI",
    "sanciones ley antilavado México",
    "expediente digital NOM-151",
    "umbrales LFPIORPI UMA",
    "prevención lavado dinero empresas",
    "obligaciones antilavado México 2025",
  ],
  openGraph: {
    title: "Serie LFPIORPI: guía completa para empresas mexicanas · JAAK",
    description:
      "5 videos cortos sobre las obligaciones de la LFPIORPI. Actividades vulnerables, montos, sanciones y expediente digital.",
    url: "https://jaak.ai/recursos/serie-lfpiorpi",
  },
  alternates: { canonical: "https://jaak.ai/recursos/serie-lfpiorpi" },
};

const FONT = "var(--font-montserrat), Montserrat, sans-serif";

const EPISODES = [
  {
    ep: "01",
    slug: "a-quien-aplica",
    title: "¿A quién le aplica la LFPIORPI?",
    subtitle: "Actividades vulnerables y objeto obligado",
    desc: "La LFPIORPI no aplica a todos los negocios en México — aplica a quienes realizan actividades específicas que el artículo 17 define como vulnerables. Qué son, cuáles sectores están incluidos, y quién es el objeto obligado.",
    learnings: [
      "Qué es una actividad vulnerable según el artículo 17",
      "Cuáles sectores están incluidos en la ley",
      "Qué es el objeto obligado y quién asume esa responsabilidad",
      "La diferencia entre la LFPIORPI y la regulación bancaria",
    ],
  },
  {
    ep: "02",
    slug: "umbrales-montos",
    title: "¿Desde qué monto aplica la ley?",
    subtitle: "Umbrales y montos de identificación y reporte",
    desc: "Las obligaciones escalan según el monto de la transacción: hay umbrales para identificar al cliente, para solicitar información del origen de recursos, y para reportar a la UIF. Qué pasa cuando alguien fracciona una operación.",
    learnings: [
      "Qué son las UMAs y cómo se aplican en la LFPIORPI",
      "Umbrales de identificación, información y aviso por sector",
      "Qué es una operación fraccionada y por qué la ley la trata igual",
      "Cómo calcular si una operación activa obligaciones de reporte",
    ],
  },
  {
    ep: "03",
    slug: "obligaciones",
    title: "¿Qué tienes que hacer para cumplir?",
    subtitle: "Obligaciones concretas: identificación, expediente y conservación",
    desc: "Cómo identificar correctamente a un cliente, qué documentos integran el expediente, qué listas debes consultar antes de cerrar una operación, y durante cuánto tiempo debes conservar todo eso con integridad demostrable.",
    learnings: [
      "Qué información debes recabar de cada cliente y cómo verificarse",
      "Las tres listas que debes consultar: PEP, SAT y sanciones internacionales",
      "Qué documentos integran el expediente completo",
      "Cuánto tiempo debes conservar el expediente y qué significa conservar con integridad",
    ],
  },
  {
    ep: "04",
    slug: "sanciones",
    title: "¿Qué pasa si no cumplo?",
    subtitle: "Sanciones LFPIORPI y responsabilidad personal",
    desc: "Las sanciones no recaen sobre la empresa como entidad abstracta, sino sobre la persona física que figura como objeto obligado. Esquema de sanciones del artículo 54 y ventana de regularización espontánea.",
    learnings: [
      "Sobre quién recaen las sanciones — y por qué no es solo sobre la empresa",
      "Rangos de multa del artículo 54 según el tipo de incumplimiento",
      "Qué es la regularización espontánea y cómo reduce hasta el 50% de la sanción",
      "Qué incumplimientos pueden resultar en revocación de permisos",
    ],
  },
  {
    ep: "05",
    slug: "expediente-digital",
    title: "El expediente digital: qué contiene y cómo aguanta una auditoría",
    subtitle: "NOM-151, integridad y 10 años de conservación",
    desc: "Guardar un archivo no es lo mismo que construir evidencia. Qué diferencia a un expediente digital que aguanta 10 años de una carpeta de documentos que no resiste ninguna auditoría. El estándar NOM-151.",
    learnings: [
      "Qué es la NOM-151 y por qué es el estándar de conservación de evidencia digital",
      "La diferencia entre almacenamiento y conservación jurídica",
      "Qué elementos tiene que tener un expediente para ser evidencia",
      "Cómo funciona el sello de tiempo y por qué nadie puede modificarlo retroactivamente",
    ],
  },
];

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  name: "Serie LFPIORPI: guía completa para empresas mexicanas",
  description: "5 episodios de video sobre las obligaciones de la LFPIORPI para empresas mexicanas",
  url: "https://jaak.ai/recursos/serie-lfpiorpi",
  publisher: { "@type": "Organization", name: "JAAK", url: "https://jaak.ai" },
  numberOfItems: 5,
  itemListElement: EPISODES.map((ep, i) => ({
    "@type": "ListItem",
    position: i + 1,
    name: ep.title,
    url: `https://jaak.ai/recursos/serie-lfpiorpi/${ep.slug}`,
  })),
};

export default function SerieLFPIORPIPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Header />
      <main style={{ background: "#212A45", fontFamily: FONT, minHeight: "100vh" }}>
        <style>{`
          @keyframes fadeInUp {
            from { opacity: 0; transform: translateY(20px); }
            to { opacity: 1; transform: translateY(0); }
          }
          .sl-a { animation: fadeInUp 0.5s ease both; }
          .sl-b { animation: fadeInUp 0.5s 0.10s ease both; }
          .sl-c { animation: fadeInUp 0.5s 0.18s ease both; }
          .ep-card {
            background: rgba(255,255,255,0.04);
            border: 1px solid rgba(255,255,255,0.08);
            border-radius: 16px;
            transition: border-color 0.2s, box-shadow 0.2s, transform 0.2s;
          }
          .ep-card:hover {
            border-color: rgba(30,202,211,0.35);
            box-shadow: 0 8px 28px rgba(30,202,211,0.08);
            transform: translateY(-2px);
          }
          .cta-btn {
            display: inline-flex; align-items: center; gap: 6px;
            background: #2DB6C1; color: #212A45; font-weight: 800;
            padding: 14px 28px; border-radius: 10px; font-size: 0.95rem;
            transition: box-shadow 0.2s, transform 0.2s; text-decoration: none;
          }
          .cta-btn:hover { box-shadow: 0 8px 28px rgba(30,202,211,0.30); transform: translateY(-2px); }
          .cta-btn-ghost {
            display: inline-flex; align-items: center; gap: 6px;
            background: transparent; color: #2DB6C1; font-weight: 700;
            padding: 14px 28px; border-radius: 10px;
            border: 1.5px solid rgba(30,202,211,0.40); font-size: 0.95rem;
            transition: border-color 0.2s, background 0.2s; text-decoration: none;
          }
          .cta-btn-ghost:hover { border-color: #2DB6C1; background: rgba(30,202,211,0.06); }
        `}</style>

        {/* Breadcrumb */}
        <div style={{ borderBottom: "1px solid rgba(255,255,255,0.06)", padding: "14px 0" }}>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <nav style={{ color: "rgba(255,255,255,0.38)", fontSize: "0.82rem" }}>
              <Link href="/recursos" style={{ color: "rgba(255,255,255,0.45)", textDecoration: "none" }}>Recursos</Link>
              <span className="mx-2">›</span>
              <span style={{ color: "rgba(255,255,255,0.65)" }}>Serie LFPIORPI</span>
            </nav>
          </div>
        </div>

        {/* Hero */}
        <section style={{ padding: "72px 0 56px", background: "radial-gradient(ellipse 70% 50% at 50% 0%, rgba(30,202,211,0.11) 0%, transparent 65%)" }}>
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <span className="sl-a inline-block text-xs font-bold tracking-widest uppercase px-3 py-1 rounded-full mb-5"
              style={{ background: "rgba(30,202,211,0.10)", color: "#2DB6C1", border: "1px solid rgba(30,202,211,0.25)" }}>
              Serie educativa · 5 episodios
            </span>
            <h1 className="sl-b text-3xl sm:text-4xl lg:text-5xl font-black text-white mb-5 leading-tight"
              style={{ letterSpacing: "-1.5px" }}>
              LFPIORPI: lo que toda empresa mexicana en actividades vulnerables necesita saber.
            </h1>
            <p className="sl-c text-lg mb-8" style={{ color: "rgba(255,255,255,0.60)" }}>
              Cinco videos cortos. Un PDF descargable. Sin rodeos.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link href="/recursos/serie-lfpiorpi/a-quien-aplica" className="cta-btn" style={{ fontFamily: FONT }}>
                Ver el episodio 1 →
              </Link>
              <a href="#pdf" className="cta-btn-ghost" style={{ fontFamily: FONT }}>
                Descargar guía PDF →
              </a>
            </div>
          </div>
        </section>

        {/* Intro */}
        <section style={{ padding: "48px 0 0", borderTop: "1px solid rgba(255,255,255,0.05)" }}>
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
            <p style={{ color: "rgba(255,255,255,0.62)", lineHeight: "1.85", fontSize: "1rem" }}>
              La Ley Federal para la Prevención e Identificación de Operaciones con Recursos de
              Procedencia Ilícita — conocida como <strong style={{ color: "rgba(255,255,255,0.85)" }}>LFPIORPI
              o Ley Antilavado</strong> — aplica a negocios y profesionistas que realizan actividades
              específicas en México. Si tu empresa está en la lista, tienes obligaciones concretas:
              identificar a tus clientes, conservar expedientes, reportar operaciones y responder ante la
              Secretaría de Hacienda.
            </p>
            <p className="mt-4" style={{ color: "rgba(255,255,255,0.50)", lineHeight: "1.75", fontSize: "0.92rem" }}>
              Esta serie responde las preguntas más frecuentes sobre la ley en cinco episodios. Puedes
              verlos en orden o ir directo al tema que necesitas.
            </p>
            <div className="mt-6 mb-8 inline-block px-4 py-2 rounded-full text-sm"
              style={{ background: "rgba(30,202,211,0.08)", color: "rgba(255,255,255,0.55)", border: "1px solid rgba(30,202,211,0.18)" }}>
              Producido por JAAK · Cada episodio: 3–6 minutos · Serie completa: ~25 minutos · Incluye PDF descargable
            </div>
          </div>
        </section>

        {/* Episodes */}
        <section style={{ padding: "48px 0 72px" }}>
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col gap-5">
              {EPISODES.map((ep) => (
                <Link
                  key={ep.slug}
                  href={`/recursos/serie-lfpiorpi/${ep.slug}`}
                  className="ep-card p-6 sm:p-8 flex gap-6 no-underline"
                >
                  <div className="shrink-0">
                    <span className="text-4xl font-black" style={{ color: "rgba(30,202,211,0.35)", fontFamily: FONT, lineHeight: 1 }}>
                      {ep.ep}
                    </span>
                  </div>
                  <div className="flex-1 min-w-0">
                    <h2 className="font-black text-white mb-1 leading-snug" style={{ fontFamily: FONT, fontSize: "1.15rem", letterSpacing: "-0.3px" }}>
                      {ep.title}
                    </h2>
                    <p className="text-sm mb-3 font-semibold" style={{ color: "#2DB6C1" }}>{ep.subtitle}</p>
                    <p className="mb-4" style={{ color: "rgba(255,255,255,0.55)", fontSize: "0.88rem", lineHeight: "1.65" }}>
                      {ep.desc}
                    </p>
                    <ul className="flex flex-col gap-1.5">
                      {ep.learnings.map((l, i) => (
                        <li key={i} className="flex items-start gap-2.5">
                          <span className="shrink-0 mt-1" style={{ color: "#2DB6C1", fontSize: "0.7rem" }}>▸</span>
                          <span style={{ color: "rgba(255,255,255,0.50)", fontSize: "0.83rem" }}>{l}</span>
                        </li>
                      ))}
                    </ul>
                    <div className="mt-5">
                      <span className="text-sm font-bold" style={{ color: "#2DB6C1" }}>Ver episodio →</span>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* PDF Block */}
        <section id="pdf" style={{ padding: "72px 0", background: "rgba(0,0,0,0.12)", borderTop: "1px solid rgba(255,255,255,0.06)" }}>
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="p-8 rounded-2xl text-center" style={{ background: "rgba(30,202,211,0.06)", border: "1px solid rgba(30,202,211,0.22)" }}>
              <p className="text-3xl mb-4">📄</p>
              <h2 className="text-2xl font-black text-white mb-3" style={{ letterSpacing: "-0.5px" }}>
                Guía LFPIORPI para empresas mexicanas — PDF descargable
              </h2>
              <p className="mb-3" style={{ color: "rgba(255,255,255,0.60)", lineHeight: "1.75" }}>
                El complemento de la serie. Una guía de referencia rápida con los puntos clave de los 5
                episodios: actividades vulnerables, umbrales, obligaciones, sanciones y expediente digital.
                Útil para compartir con tu equipo, llevar a una junta de cumplimiento o tener disponible
                cuando llegue una auditoría.
              </p>
              <p className="text-sm mb-6" style={{ color: "rgba(255,255,255,0.38)" }}>
                Gratuito · Sin registro requerido · Actualizado 2025
              </p>
              <a
                href="#"
                className="cta-btn"
                style={{ fontFamily: FONT, pointerEvents: "none", opacity: 0.6 }}
                aria-disabled="true"
              >
                Descargar guía → (próximamente)
              </a>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section style={{ padding: "80px 0", background: "radial-gradient(ellipse 70% 80% at 50% 50%, rgba(30,202,211,0.09) 0%, transparent 70%)" }}>
          <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-2xl sm:text-3xl font-black text-white mb-4" style={{ letterSpacing: "-0.8px" }}>
              ¿Quieres ver cómo JAAK implementa esto en tu operación?
            </h2>
            <p className="mb-8" style={{ color: "rgba(255,255,255,0.60)", lineHeight: "1.75" }}>
              Después de entender la ley, el siguiente paso es tener la tecnología que la cumple — y que
              construye la evidencia que la autoridad va a pedir.
            </p>
            <Link href="/contacto" className="cta-btn" style={{ fontFamily: FONT }}>
              Agenda una demo →
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
