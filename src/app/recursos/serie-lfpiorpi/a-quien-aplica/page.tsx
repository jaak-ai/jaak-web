import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import EpisodeLayout from "../episode-layout";

export const metadata: Metadata = {
  title: "¿A quién le aplica la LFPIORPI? Actividades vulnerables y objeto obligado · JAAK",
  description:
    "¿Tu empresa está en la lista de actividades vulnerables de la LFPIORPI? Este episodio explica a quién aplica la ley, qué es el objeto obligado y qué sectores están incluidos en el artículo 17.",
  keywords: [
    "a quién aplica LFPIORPI",
    "actividades vulnerables artículo 17",
    "objeto obligado LFPIORPI",
    "sectores ley antilavado México",
    "LFPIORPI inmobiliario automotriz fintech",
    "Ley Antilavado México obligaciones",
  ],
  openGraph: {
    title: "¿A quién le aplica la LFPIORPI? Actividades vulnerables · JAAK",
    description: "Episodio 1 de la Serie LFPIORPI: actividades vulnerables, objeto obligado y sectores del artículo 17.",
    url: "https://jaak.ai/recursos/serie-lfpiorpi/a-quien-aplica",
  },
  alternates: { canonical: "https://jaak.ai/recursos/serie-lfpiorpi/a-quien-aplica" },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "VideoObject",
  name: "¿A quién le aplica la LFPIORPI? Actividades vulnerables y objeto obligado",
  description:
    "Episodio 1 de la Serie LFPIORPI: explica qué son las actividades vulnerables, cuáles sectores están incluidos en el artículo 17 y quién es el objeto obligado.",
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
      La LFPIORPI no aplica a todos los negocios en México — aplica a quienes realizan actividades
      específicas que el artículo 17 de la ley define como <strong style={{ color: "rgba(255,255,255,0.85)" }}>actividades
      vulnerables</strong>. Este episodio explica qué son, cuáles sectores están incluidos, y quién dentro
      de la organización es el <strong style={{ color: "rgba(255,255,255,0.85)" }}>objeto obligado</strong>:
      la persona física que responde ante la Secretaría de Hacienda cuando hay un incumplimiento.
    </p>
    <p className="prose-p">
      Si no sabes si tu negocio está en la lista, este es el primer episodio que debes ver. Los sectores
      más expuestos incluyen: sector inmobiliario, sector automotriz, joyería y arte, notarías, contadores
      y abogados en ciertas operaciones, y cualquier empresa que maneje operaciones de crédito o que
      actúe como intermediario financiero.
    </p>
    <p className="prose-p">
      La distinción entre la LFPIORPI y la regulación bancaria es importante: son marcos distintos para
      públicos distintos. La banca opera bajo la CNBV y Banxico. Las actividades vulnerables operan bajo
      la Secretaría de Hacienda a través de la UIF. No estar regulado por la CNBV no significa estar
      exento de la LFPIORPI.
    </p>
  </div>
);

export default function AQuienAplicaPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Header />
      <EpisodeLayout
        epNumber="01"
        totalEps={5}
        title="¿A quién le aplica la LFPIORPI? Actividades vulnerables y objeto obligado"
        subtitle="Sectores incluidos en el artículo 17 y responsabilidad del objeto obligado"
        description={<Description />}
        learnings={[
          "Qué es una actividad vulnerable según la LFPIORPI",
          "Cuáles sectores están incluidos en el artículo 17",
          "Qué es el objeto obligado y quién asume esa responsabilidad dentro de la empresa",
          "La diferencia entre la LFPIORPI y la regulación bancaria — son marcos distintos para públicos distintos",
        ]}
        nextEp={{ title: "¿Desde qué monto aplica la ley?", href: "/recursos/serie-lfpiorpi/umbrales-montos" }}
      />
      <Footer />
    </>
  );
}
