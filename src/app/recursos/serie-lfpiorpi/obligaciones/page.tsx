import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import EpisodeLayout from "../episode-layout";

export const metadata: Metadata = {
  title: "Obligaciones LFPIORPI: identificación de clientes, expediente y conservación · JAAK",
  description:
    "¿Qué debes hacer exactamente para cumplir con la LFPIORPI? Identificación del cliente, integración del expediente, cruce de listas y conservación a 10 años. Explicado sin rodeos.",
  keywords: [
    "obligaciones LFPIORPI empresas",
    "identificación cliente ley antilavado",
    "expediente LFPIORPI documentos",
    "lista PEP SAT OFAC México",
    "conservación expediente 10 años",
    "cumplimiento antilavado México paso a paso",
  ],
  openGraph: {
    title: "Obligaciones LFPIORPI: identificación, expediente y conservación · JAAK",
    description: "Episodio 3: qué debes hacer en la práctica para cumplir con la LFPIORPI — identificación, listas y expediente.",
    url: "https://jaak.ai/recursos/serie-lfpiorpi/obligaciones",
  },
  alternates: { canonical: "https://jaak.ai/recursos/serie-lfpiorpi/obligaciones" },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "VideoObject",
  name: "Las obligaciones concretas: identificación de clientes, expediente y conservación",
  description:
    "Episodio 3 de la Serie LFPIORPI: obligaciones operativas concretas — identificar al cliente, integrar el expediente, consultar listas PEP/SAT/OFAC y conservar 10 años.",
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
      Una vez que sabes que la LFPIORPI te aplica y desde qué monto, la siguiente pregunta es: ¿qué
      debes hacer en la práctica? Este episodio recorre las obligaciones operativas concretas.
    </p>
    <p className="prose-p">
      Identificar a un cliente no significa pedirle una identificación. Significa verificar que esa
      identificación es auténtica y vigente, que la persona física corresponde al documento, y que el
      resultado de esa verificación queda documentado de forma que pueda ser demostrado ante una
      autoridad. Son pasos distintos que la mayoría de las empresas trata como uno solo.
    </p>
    <p className="prose-p">
      Las <strong style={{ color: "rgba(255,255,255,0.85)" }}>tres listas que debes consultar</strong>{" "}
      antes de cerrar una operación son fuentes distintas y sirven propósitos distintos:{" "}
      la lista de <strong style={{ color: "rgba(255,255,255,0.85)" }}>PEP (Personas Expuestas Políticamente)</strong>
      {" "}identifica a quienes tienen o han tenido cargos públicos relevantes;{" "}
      la lista del <strong style={{ color: "rgba(255,255,255,0.85)" }}>SAT</strong> identifica a
      contribuyentes con operaciones inexistentes; y las listas de{" "}
      <strong style={{ color: "rgba(255,255,255,0.85)" }}>sanciones internacionales (OFAC, ONU)</strong>{" "}
      identifican a personas o entidades con restricciones por lavado, terrorismo o corrupción.
      Cruzar una sola de las tres no es suficiente.
    </p>
    <p className="prose-p">
      La obligación de conservar el expediente durante{" "}
      <strong style={{ color: "rgba(255,255,255,0.85)" }}>10 años con integridad demostrable</strong>{" "}
      no es opcional — es parte central de lo que la autoridad revisa en una auditoría.
    </p>
  </div>
);

export default function ObligacionesPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Header />
      <EpisodeLayout
        epNumber="03"
        totalEps={5}
        title="¿Qué tienes que hacer para cumplir? Las obligaciones concretas: identificación de clientes, expediente y conservación"
        subtitle="Identificación, listas PEP/SAT/OFAC, expediente y conservación jurídica a 10 años"
        description={<Description />}
        learnings={[
          "Qué información debes recabar de cada cliente y cómo debe verificarse",
          "Cuáles son las tres listas que debes consultar: PEP, SAT y listas de sanciones internacionales",
          "Qué documentos integran el expediente completo bajo la LFPIORPI",
          "Cuánto tiempo debes conservar el expediente y qué significa conservar con integridad",
        ]}
        prevEp={{ title: "¿Desde qué monto aplica la ley?", href: "/recursos/serie-lfpiorpi/umbrales-montos" }}
        nextEp={{ title: "¿Qué pasa si no cumplo?", href: "/recursos/serie-lfpiorpi/sanciones" }}
      />
      <Footer />
    </>
  );
}
