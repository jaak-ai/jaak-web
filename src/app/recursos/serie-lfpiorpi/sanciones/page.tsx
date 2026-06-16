import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import EpisodeLayout from "../episode-layout";

export const metadata: Metadata = {
  title: "Sanciones LFPIORPI: qué pasa cuando no cumples y sobre quién recae la responsabilidad · JAAK",
  description:
    "¿Cuáles son las sanciones de la LFPIORPI? Multas, suspensión de actividades y responsabilidad personal del objeto obligado. Este episodio explica el artículo 54 y la ventana de regularización espontánea.",
  keywords: [
    "sanciones LFPIORPI artículo 54",
    "multas ley antilavado México",
    "objeto obligado responsabilidad personal",
    "regularización espontánea LFPIORPI",
    "consecuencias incumplimiento antilavado",
    "UIF sanciones empresas México",
  ],
  openGraph: {
    title: "Sanciones LFPIORPI: artículo 54 y responsabilidad personal · JAAK",
    description: "Episodio 4: multas del artículo 54, responsabilidad del objeto obligado y regularización espontánea.",
    url: "https://jaak.ai/recursos/serie-lfpiorpi/sanciones",
  },
  alternates: { canonical: "https://jaak.ai/recursos/serie-lfpiorpi/sanciones" },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "VideoObject",
  name: "Sanciones LFPIORPI: qué pasa cuando no cumples y sobre quién recae la responsabilidad",
  description:
    "Episodio 4 de la Serie LFPIORPI: sanciones del artículo 54, responsabilidad personal del objeto obligado y ventana de regularización espontánea.",
  thumbnailUrl: "https://jaak.ai/og-image.png",
  publisher: { "@type": "Organization", name: "JAAK", url: "https://jaak.ai" },
  inLanguage: "es-MX",
  isPartOf: {
    "@type": "VideoPlaylist",
    name: "Serie LFPIORPI · JAAK",
    url: "https://jaak.ai/recursos/serie-lfpiorpi",
  },
};

const Description = () => (
  <div>
    <p className="prose-p">
      La LFPIORPI es una ley con consecuencias reales — y lo que muchos no saben es que las sanciones
      no recaen sobre la empresa como entidad abstracta, sino sobre la{" "}
      <strong style={{ color: "rgba(255,255,255,0.85)" }}>persona física que figura como objeto obligado</strong>.
      Esto significa que el director comercial, el responsable de compliance o el socio designado puede
      enfrentar multas personalmente.
    </p>
    <p className="prose-p">
      El artículo 54 de la LFPIORPI establece un esquema escalonado de sanciones que va desde multas
      económicas hasta la suspensión de actividades o la cancelación de habilitación para operar.
      El nivel de la sanción depende del tipo de incumplimiento, su gravedad y si existió intención.
    </p>
    <p className="prose-p">
      Lo que muchos objetos obligados no conocen es la{" "}
      <strong style={{ color: "rgba(255,255,255,0.85)" }}>ventana de regularización espontánea</strong>:
      si el objeto obligado detecta un incumplimiento y lo reporta a la autoridad antes de que esta
      inicie una revisión, puede acceder a una reducción de hasta el 50% en las sanciones económicas.
      Es una herramienta que existe en la ley — pero que requiere actuar antes de que llegue la auditoría,
      no después.
    </p>
  </div>
);

export default function SancionesPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Header />
      <EpisodeLayout
        epNumber="04"
        totalEps={5}
        title="¿Qué pasa si no cumplo? Sanciones LFPIORPI: sobre quién recae la responsabilidad"
        subtitle="Artículo 54, multas, responsabilidad del objeto obligado y regularización espontánea"
        description={<Description />}
        learnings={[
          "Sobre quién recaen las sanciones de la LFPIORPI — y por qué no es solo sobre la empresa",
          "Cuáles son los rangos de multa del artículo 54 según el tipo de incumplimiento",
          "Qué es la regularización espontánea y cómo puede reducir hasta el 50% de una sanción",
          "Qué incumplimientos pueden resultar en revocación de permisos o cancelación de habilitación",
        ]}
        prevEp={{ title: "¿Qué tienes que hacer para cumplir?", href: "/recursos/serie-lfpiorpi/obligaciones" }}
        nextEp={{ title: "El expediente digital", href: "/recursos/serie-lfpiorpi/expediente-digital" }}
      />
      <Footer />
    </>
  );
}
