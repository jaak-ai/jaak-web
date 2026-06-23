import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import EpisodeLayout from "../episode-layout";

export const metadata: Metadata = {
  title: "El expediente digital LFPIORPI: qué contiene, cómo se conserva y por qué aguanta una auditoría · JAAK",
  description:
    "¿Qué hace que un expediente digital sea evidencia real ante una autoridad? NOM-151, integridad documental, trazabilidad y 10 años de conservación. El último episodio de la serie LFPIORPI de JAAK.",
  keywords: [
    "expediente digital LFPIORPI NOM-151",
    "conservación evidencia digital México",
    "sello de tiempo NOM-151",
    "integridad documental auditoría",
    "expediente digital 10 años",
    "evidencia jurídica digital México",
    "NOM-151 cumplimiento empresas",
  ],
  openGraph: {
    title: "El expediente digital LFPIORPI: NOM-151, integridad y 10 años · JAAK",
    description: "Episodio 5 (final): qué hace que un expediente digital sea evidencia real — NOM-151, sello de tiempo y conservación.",
    url: "https://jaak.ai/recursos/serie-lfpiorpi/expediente-digital",
  },
  alternates: { canonical: "https://jaak.ai/recursos/serie-lfpiorpi/expediente-digital" },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "VideoObject",
  name: "El expediente digital: qué contiene, cómo se conserva y por qué aguanta una auditoría",
  description:
    "Episodio 5 (final) de la Serie LFPIORPI: NOM-151, integridad documental, sello de tiempo y 10 años de conservación jurídica.",
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
      Guardar un archivo no es lo mismo que construir evidencia. Este último episodio explica qué
      diferencia a un expediente digital que aguanta 10 años de una carpeta de documentos que no
      resiste ninguna auditoría.
    </p>
    <p className="prose-p">
      El estándar de referencia es la{" "}
      <strong style={{ color: "rgba(255,255,255,0.85)" }}>NOM-151</strong> — la norma oficial mexicana
      que establece cómo debe conservarse la evidencia digital para que tenga valor legal. La NOM-151
      no es sobre almacenamiento: es sobre{" "}
      <strong style={{ color: "rgba(255,255,255,0.85)" }}>conservación jurídica</strong>. La diferencia
      es que un archivo almacenado puede ser modificado sin que nadie lo sepa; un archivo conservado
      bajo NOM-151 tiene un sello de tiempo que hace imposible modificarlo retroactivamente sin que
      quede rastro.
    </p>
    <p className="prose-p">
      Un expediente digital que cumple la LFPIORPI tiene cinco elementos esenciales:{" "}
      <strong style={{ color: "rgba(255,255,255,0.85)" }}>identidad verificada del firmante o cliente,
      integridad del documento (que no ha sido alterado), temporalidad (cuándo ocurrió cada paso),
      conservación jurídica (bajo estándar NOM-151) y trazabilidad</strong> (quién hizo qué y cuándo
      en todo el proceso). Si falta uno de los cinco, el expediente puede ser impugnado.
    </p>
    <p className="prose-p">
      Este episodio cierra la serie con el elemento que conecta todos los anteriores: la integridad
      del expediente es lo que convierte el cumplimiento en evidencia — y la evidencia en defensa real
      cuando llega la autoridad.
    </p>
  </div>
);

export default function ExpedienteDigitalPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Header />
      <EpisodeLayout
        epNumber="05"
        totalEps={5}
        title="El expediente digital: qué contiene, cómo se conserva y por qué aguanta una auditoría"
        subtitle="NOM-151, integridad, sello de tiempo y 10 años de conservación jurídica"
        description={<Description />}
        learnings={[
          "Qué es la NOM-151 y por qué es el estándar de conservación de evidencia digital en México",
          "Cuál es la diferencia entre almacenamiento y conservación jurídica — no son lo mismo",
          "Qué elementos tiene que tener un expediente para ser evidencia y no solo un archivo",
          "Cómo funciona el sello de tiempo y por qué es la pieza que nadie puede modificar retroactivamente",
          "Cómo verificar si tu expediente actual aguantaría una solicitud de reconstrucción de una operación de hace tres años",
        ]}
        prevEp={{ title: "¿Qué pasa si no cumplo?", href: "/recursos/serie-lfpiorpi/sanciones" }}
      />
      <Footer />
    </>
  );
}
