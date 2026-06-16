import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import EpisodeLayout from "../episode-layout";

export const metadata: Metadata = {
  title: "Umbrales y montos LFPIORPI: desde cuándo aplican tus obligaciones · JAAK",
  description:
    "¿Desde qué monto estás obligado a identificar a tu cliente bajo la LFPIORPI? Este episodio explica los umbrales en UMAs por sector, qué es una operación fraccionada y cuándo aplica el deber de avisar a la UIF.",
  keywords: [
    "umbrales LFPIORPI",
    "montos ley antilavado México",
    "UMA LFPIORPI operaciones",
    "operación fraccionada LFPIORPI",
    "aviso UIF México umbral",
    "obligaciones identificación cliente México",
  ],
  openGraph: {
    title: "Umbrales y montos LFPIORPI: desde cuándo aplican tus obligaciones · JAAK",
    description: "Episodio 2: umbrales en UMAs, operaciones fraccionadas y obligaciones de aviso a la UIF.",
    url: "https://jaak.ai/recursos/serie-lfpiorpi/umbrales-montos",
  },
  alternates: { canonical: "https://jaak.ai/recursos/serie-lfpiorpi/umbrales-montos" },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "VideoObject",
  name: "Umbrales y montos: desde cuándo aplican tus obligaciones de identificación y reporte",
  description: "Episodio 2 de la Serie LFPIORPI: umbrales en UMAs, operaciones fraccionadas y deber de aviso a la UIF.",
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
      La LFPIORPI no exige lo mismo en todas las operaciones. Las obligaciones escalan según el monto
      de la transacción: hay umbrales para identificar al cliente, umbrales para solicitar información
      adicional sobre el origen de los recursos, y umbrales para reportar la operación a la UIF como
      aviso.
    </p>
    <p className="prose-p">
      Las UMAs (Unidades de Medida y Actualización) son la unidad de referencia que usa la ley para
      definir los umbrales. Su valor se actualiza anualmente, por lo que los montos en pesos cambian
      cada año, pero las obligaciones se mantienen igual.{" "}
      <strong style={{ color: "rgba(255,255,255,0.85)" }}>Es responsabilidad del objeto obligado
      mantenerse actualizado con el valor vigente de la UMA.</strong>
    </p>
    <p className="prose-p">
      Una de las prácticas más comunes para intentar evadir las obligaciones es la{" "}
      <strong style={{ color: "rgba(255,255,255,0.85)" }}>operación fraccionada</strong>: dividir una
      transacción en partes menores para que cada una quede por debajo del umbral de reporte. La LFPIORPI
      lo prevé explícitamente: si hay indicios de que las operaciones están relacionadas, la autoridad
      las trata como una sola operación completa.
    </p>
  </div>
);

export default function UmbralesMontosPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Header />
      <EpisodeLayout
        epNumber="02"
        totalEps={5}
        title="¿Desde qué monto aplica la ley? Umbrales y montos de identificación y reporte"
        subtitle="UMAs por sector, operaciones fraccionadas y obligaciones de aviso a la UIF"
        description={<Description />}
        learnings={[
          "Qué son las UMAs y cómo se aplican como unidad de medida en la LFPIORPI",
          "Cuáles son los umbrales de identificación, información y aviso por sector",
          "Qué es una operación fraccionada y por qué la ley la trata igual que una operación completa",
          "Cómo calcular si una operación en tu sector activa obligaciones de reporte",
        ]}
        prevEp={{ title: "¿A quién le aplica la LFPIORPI?", href: "/recursos/serie-lfpiorpi/a-quien-aplica" }}
        nextEp={{ title: "¿Qué tienes que hacer para cumplir?", href: "/recursos/serie-lfpiorpi/obligaciones" }}
      />
      <Footer />
    </>
  );
}
