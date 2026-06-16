import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WebinarLayout from "../webinar-layout";

export const metadata: Metadata = {
  title: "Cumplir ya no es suficiente: evidencia y LFPIORPI 2025 · JAAK",
  description:
    "¿Qué cambió con la reforma LFPIORPI de julio 2025? Aprende la diferencia entre tener documentos y tener evidencia defendible. Sesión ejecutiva con el Dr. David Merino y Arianna Quezada.",
  keywords: [
    "reforma LFPIORPI 2025",
    "evidencia defendible auditoría",
    "UIF México obligaciones",
    "prevención lavado dinero empresas",
    "expediente digital legal México",
    "reforma antilavado julio 2025",
    "artículo 18 LFPIORPI",
  ],
  openGraph: {
    title: "Cumplir ya no es suficiente: evidencia y LFPIORPI 2025 · JAAK",
    description:
      "Qué cambió con la reforma LFPIORPI de julio 2025 y cómo construir evidencia defendible ante la UIF.",
    url: "https://jaak.ai/recursos/cumplir-ya-no-es-suficiente",
  },
  alternates: { canonical: "https://jaak.ai/recursos/cumplir-ya-no-es-suficiente" },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "VideoObject",
  name: "Cumplir ya no es suficiente: cómo demostrar que tu empresa está protegida",
  description:
    "Sesión ejecutiva de 60 minutos sobre la reforma LFPIORPI julio 2025, evidencia defendible y responsabilidad del objeto obligado.",
  thumbnailUrl: "https://jaak.ai/og-image.png",
  uploadDate: "2025-07-01",
  duration: "PT60M",
  publisher: { "@type": "Organization", name: "JAAK", url: "https://jaak.ai" },
  author: [
    { "@type": "Person", name: "Dr. David Merino" },
    { "@type": "Person", name: "Arianna Quezada" },
  ],
  keywords:
    "LFPIORPI reforma 2025, evidencia auditoría, UIF México, prevención lavado dinero, objeto obligado sanciones",
  inLanguage: "es-MX",
};

const TIMESTAMPS = [
  { time: "00:00", topic: "Apertura: la pregunta que va a guiar los 60 minutos" },
  { time: "05:00", topic: "El nuevo estándar legal: qué cambió con la reforma LFPIORPI 2025" },
  { time: "14:00", topic: "A quién le aplica y cuáles son las sanciones reales" },
  { time: "20:00", topic: "De la obligación a la operación: por qué el proceso de la mayoría no genera evidencia" },
  { time: "28:00", topic: "Escenario 1: el cliente firmó y ahora lo niega" },
  { time: "35:00", topic: "Escenario 2: la autoridad pide reconstruir una operación de hace 3 años" },
  { time: "41:00", topic: "Escenario 3: tienes documentos pero no evidencia defendible" },
  { time: "47:00", topic: "Checklist ejecutivo: 7 preguntas para evaluar tu operación ahora mismo" },
  { time: "55:00", topic: "Cierre y preguntas" },
];

const LEARNINGS = [
  "Qué cambió exactamente con la reforma LFPIORPI de julio 2025 y a quién le aplica",
  "La diferencia legal entre tener documentos y tener evidencia — y por qué esa diferencia importa en una auditoría",
  "Quién responde personalmente ante la UIF cuando hay un incumplimiento (no es la empresa como entidad abstracta)",
  "Cuáles son las sanciones reales del artículo 54 y cómo se puede reducir hasta el 50% regularizándose antes de que llegue la autoridad",
  "Qué pasa cuando el cliente firmó y ahora dice que no — y cómo construir el proceso para que ese escenario no prospere",
  "Qué pasa cuando la autoridad pide reconstruir una operación de hace 3 años y el expediente no aguanta",
  "Los 5 elementos que convierten un documento en evidencia: identidad, integridad, temporalidad, conservación y trazabilidad",
];

const Description = () => (
  <div>
    <p className="prose-p">
      La mayoría de las empresas mexicanas cree que cumple. Y probablemente tiene razón en que tiene
      buenas intenciones. El problema es que buenas intenciones no es lo que pide una autoridad cuando
      llega a revisar. Esta sesión parte de esa distinción — y no la suelta hasta el cierre.
    </p>
    <p className="prose-p">
      En julio de 2025, la LFPIORPI tuvo una reforma publicada en el DOF que amplió el artículo 18 de
      6 a 11 fracciones de obligaciones. Ya no basta con identificar al cliente: ahora se exige{" "}
      <strong style={{ color: "rgba(255,255,255,0.85)" }}>evaluación de riesgo documentada con enfoque
      basado en riesgos, manual de políticas internas con identificación de PEPs, monitoreo automatizado
      permanente, auditoría anual y registro obligatorio del beneficiario controlador</strong> para
      personas morales. La reforma no fue gradual — fue un cambio de sistema.
    </p>
    <p className="prose-p">
      Un PDF guardado en una carpeta no tiene valor probatorio sin integridad verificable. Una fotocopia
      de INE no cumple el estándar de conservación de 10 años del artículo 18. Un correo con &quot;acepto
      los términos&quot; no demuestra identidad, fecha cierta ni integridad del documento. La reforma no
      solo pide que se cumpla — pide que se pueda demostrar cómo, cuándo y con quién se cumplió.
    </p>
    <p className="prose-p">
      Esta sesión trabaja con tres escenarios que cualquier empresa puede enfrentar: el cliente que firmó
      y ahora lo niega, la autoridad que pide reconstruir una operación de hace tres años, y el caso más
      frecuente — tener documentos pero no tener evidencia defendible.
    </p>
  </div>
);

export default function CumplirYaNoPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Header />
      <WebinarLayout
        eyebrow="Sesión ejecutiva · Todos los sectores"
        title="Cumplir ya no es suficiente: cómo demostrar que tu empresa está protegida"
        subtitle="Hay una diferencia enorme entre tener buenas intenciones, tener documentos y tener evidencia. La ley ahora exige las tres cosas."
        presenters="Dr. David Merino · Arianna Quezada, CEO de JAAK"
        duration="60 minutos"
        description={<Description />}
        learnings={LEARNINGS}
        timestamps={TIMESTAMPS}
        davidBio="Doctor en Derecho. Fundador de Top Compliance. Consultor de la UIF, el SAT y la FGR. Participó en la quinta ronda de evaluación GAFI de México. Asesor del Congreso Federal en materia de digitalización. Experto técnico del Panel Científico Independiente en IA de la ONU."
        ariannaBio="CEO de JAAK. Empresa 100% mexicana especializada en identidad digital, verificación biométrica, firma electrónica y expedientes auditables."
        ctaQuestion="¿Podrías demostrar hoy lo que hiciste hace tres años?"
        ctaBody="Si hay alguna respuesta de 'no sé' en esa pregunta, el riesgo ya existe. JAAK construye la evidencia desde el proceso, no después del problema."
        related={[
          { title: "Banca, Fintech y Neobancos: la nueva confianza financiera", href: "/recursos/banca-fintech-neobancos" },
          { title: "LFPIORPI en el sector inmobiliario y automotriz", href: "/recursos/lfpiorpi-inmobiliario-automotriz" },
        ]}
      />
      <Footer />
    </>
  );
}
