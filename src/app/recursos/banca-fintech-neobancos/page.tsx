import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WebinarLayout, { type ProductCard } from "../webinar-layout";

const PRODUCTS: ProductCard[] = [
  {
    icon: "🪪",
    label: "KYC Biométrico",
    title: "Verificación de identidad con biometría facial",
    desc: "Valida la identidad de tus clientes en segundos con biometría, liveness detection y cruce contra INE/RENAPO. El expediente queda sellado con NOM-151 desde el primer paso.",
    href: "/plataforma/verificacion-identidad",
    color: "#2DB6C1",
  },
  {
    icon: "✍️",
    label: "Firma Electrónica",
    title: "Firma avanzada con trazabilidad probatoria",
    desc: "Firma electrónica con valor legal NOM-151. Cada documento firmado genera evidencia de identidad, integridad y temporalidad — lista para soportar una auditoría.",
    href: "/plataforma/firma-electronica",
    color: "#2AD796",
  },
];

export const metadata: Metadata = {
  title: "Banca, Fintech y Neobancos: cumplimiento y onboarding digital · JAAK",
  description:
    "¿Qué diferencia realmente a los tres modelos financieros? Sesión ejecutiva sobre KYC, onboarding digital, regulación y evidencia con el Dr. David Merino y Arianna Quezada de JAAK.",
  keywords: [
    "KYC banca digital México",
    "onboarding fintech regulación",
    "neobancos cumplimiento CNBV",
    "identificación digital sector financiero",
    "NOM-151 instituciones financieras",
    "LFPIORPI banca",
    "onboarding digital evidencia",
  ],
  openGraph: {
    title: "Banca, Fintech y Neobancos: cumplimiento y onboarding digital · JAAK",
    description:
      "Sesión ejecutiva de 60 minutos sobre KYC, onboarding digital y evidencia regulatoria en el sector financiero mexicano.",
    url: "https://jaak.ai/recursos/banca-fintech-neobancos",
  },
  alternates: { canonical: "https://jaak.ai/recursos/banca-fintech-neobancos" },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "VideoObject",
  name: "Banca, Fintech y Neobancos: la nueva confianza financiera",
  description:
    "Sesión ejecutiva de 60 minutos con el Dr. David Merino y Arianna Quezada sobre cumplimiento KYC, onboarding digital y evidencia regulatoria para banca, fintech y neobancos en México.",
  thumbnailUrl: "https://jaak.ai/og-image.png",
  uploadDate: "2025-07-01",
  duration: "PT60M",
  publisher: { "@type": "Organization", name: "JAAK", url: "https://jaak.ai" },
  author: [
    { "@type": "Person", name: "Dr. David Merino", jobTitle: "Doctor en Derecho, Fundador de Top Compliance" },
    { "@type": "Person", name: "Arianna Quezada", jobTitle: "CEO de JAAK" },
  ],
  keywords:
    "KYC banca digital, onboarding fintech, neobancos cumplimiento, CNBV, NOM-151, LFPIORPI, identidad digital",
  inLanguage: "es-MX",
};

const TIMESTAMPS = [
  { time: "00:00", topic: "Apertura: ¿banca, fintech y neobancos compiten o convergen?" },
  { time: "04:30", topic: "Mapa inicial: por qué cada modelo existe y qué riesgo resuelve" },
  { time: "10:00", topic: "Banca: función, regulación robusta y el reto de la digitalización" },
  { time: "18:00", topic: "Fintech: especialización, escala y el momento en que el cumplimiento se vuelve urgente" },
  { time: "27:00", topic: "Neobancos: operar sin sucursal bajo el mismo estándar regulatorio" },
  { time: "35:00", topic: "Comparativo: fortalezas y debilidades reales de cada modelo" },
  { time: "43:00", topic: "El onboarding como punto crítico: qué debe tener y por qué" },
  { time: "52:00", topic: "Cierre y preguntas" },
];

const LEARNINGS = [
  "Por qué banca, fintech y neobancos no están jugando el mismo juego regulatorio — y qué implica eso para cada modelo",
  "Qué obligaciones concretas tiene cada tipo de institución ante la CNBV, Banxico y la Ley Fintech",
  "Por qué el onboarding se convirtió en el primer y más crítico momento de confianza con el cliente",
  "Qué diferencia hay entre un KYC manual y un KYC con biometría desde el punto de vista probatorio",
  "Qué es el KYC continuo y por qué una verificación en el alta no es suficiente para toda la vida del cliente",
  "Cómo detectar si tu expediente tiene evidencia real o solo archivos que no aguantarían una auditoría",
  "Qué hace que un onboarding genere alta conversión y alta protección al mismo tiempo — no son objetivos opuestos",
];

const Description = () => {
  const FONT = "var(--font-montserrat), Montserrat, sans-serif";
  return (
    <div style={{ fontFamily: FONT }}>
      <p className="prose-p">
        Banca tradicional, fintech y neobancos coexisten en el ecosistema financiero mexicano, pero no
        operan bajo la misma lógica ni enfrentan los mismos riesgos. Esta sesión parte de una pregunta
        que parece simple: ¿están compitiendo o están convergiendo? La respuesta cambia todo.
      </p>
      <p className="prose-p">
        Cada modelo financiero tiene su propio mapa de riesgo, y la regulación lo sigue. La banca opera
        bajo el marco más robusto de la CNBV y Banxico. Las fintech bajo la Ley Fintech de 2018, con
        obligaciones que escalan según su volumen. Los neobancos bajo figuras que van desde licencia
        bancaria propia hasta Banking as a Service. Lo que todos comparten, sin excepción, es la
        obligación de construir <strong style={{ color: "rgba(255,255,255,0.85)" }}>evidencia verificable
        de que su proceso de KYC se ejecutó correctamente.</strong>
      </p>
      <p className="prose-p">
        El Dr. David Merino, con experiencia directa en la quinta ronda de evaluación GAFI de México y en
        auditorías de la CNBV, identifica en esta sesión los tres gaps que se repiten en los tres modelos:
        el expediente de cliente incompleto o desactualizado, la firma electrónica sin trazabilidad
        probatoria, y la falta de evidencia auditable del proceso de onboarding. Ninguno de esos tres
        problemas es exclusivo de un modelo — y los tres se pueden resolver antes de que llegue la auditoría.
      </p>
      <p className="prose-p">
        El onboarding es el punto donde se construye o se destruye la confianza digital. Un alta mal hecha
        no solo es un problema de experiencia — es un problema legal. Si no verificaste correctamente la
        identidad de tu cliente en ese momento, todo lo que firma después puede ser cuestionado.
      </p>
    </div>
  );
};

export default function BancaFintechPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Header />
      <WebinarLayout
        eyebrow="Sesión ejecutiva · Sector financiero"
        title="Banca, Fintech y Neobancos: la nueva confianza financiera"
        subtitle="¿En qué se diferencian realmente los tres modelos — y por qué todos convergen hacia el mismo estándar de evidencia?"
        presenters="Dr. David Merino · Arianna Quezada, CEO de JAAK"
        duration="60 minutos"
        youtubeId="rwBuDaPkdeM"
        youtubeUrl="https://www.youtube.com/watch?v=rwBuDaPkdeM"
        description={<Description />}
        learnings={LEARNINGS}
        timestamps={TIMESTAMPS}
        davidBio="Doctor en Derecho. Fundador de Top Compliance. Vicepresidente de World Compliance Association México. Consultor de la UIF, el SAT y la FGR. Participó en la quinta ronda de evaluación GAFI de México. Asesor del Congreso Federal en materia de digitalización. Entrenado por el FBI y el Departamento de Seguridad Nacional de EE.UU. en evidencia digital."
        ariannaBio="CEO de JAAK. Empresa 100% mexicana especializada en identidad digital, verificación biométrica, firma electrónica y expedientes auditables. Con presencia en fintech, inmobiliario, automotriz, crédito y recursos humanos."
        ctaQuestion="¿Tu proceso de onboarding genera evidencia — o solo completa el alta?"
        ctaBody="La diferencia entre cumplir y poder demostrarlo empieza en el primer paso del proceso. JAAK construye el expediente digital desde el momento del onboarding."
        products={PRODUCTS}
        related={[
          { title: "Cumplir ya no es suficiente", href: "/recursos/cumplir-ya-no-es-suficiente" },
          { title: "LFPIORPI: Sector Inmobiliario y Automotriz", href: "/recursos/lfpiorpi-inmobiliario-automotriz" },
        ]}
      />
      <Footer />
    </>
  );
}
