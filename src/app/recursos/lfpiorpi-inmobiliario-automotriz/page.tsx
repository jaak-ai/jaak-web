import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WebinarLayout, { type ProductCard } from "../webinar-layout";

const PRODUCTS: ProductCard[] = [
  {
    icon: "🪪",
    label: "KYC Biométrico",
    title: "Identidad verificada, listas cruzadas, expediente sellado",
    desc: "Valida vigencia, autenticidad y cruza PEP, SAT y OFAC en un solo flujo. El resultado queda en un expediente con integridad demostrable — listo para conservar 10 años.",
    href: "/plataforma/verificacion-identidad",
    color: "#1ECAD3",
  },
  {
    icon: "🗂️",
    label: "Expediente Auditable",
    title: "El expediente digital que exige la LFPIORPI",
    desc: "Conservación jurídica bajo NOM-151 con sello de tiempo. Tu expediente puede reconstruirse 10 años después y resiste cualquier auditoría de la UIF o el SAT.",
    href: "/plataforma/gestion-evidencia",
    color: "#F59E0B",
  },
];

export const metadata: Metadata = {
  title: "LFPIORPI en el sector inmobiliario y automotriz: cumplimiento real · JAAK",
  description:
    "¿Qué exige exactamente la LFPIORPI al sector inmobiliario y automotriz? Montos, objeto obligado, expediente digital y conservación a 10 años. Sesión ejecutiva con David Merino y Arianna Quezada.",
  keywords: [
    "LFPIORPI sector inmobiliario",
    "LFPIORPI concesionaria automotriz",
    "obligaciones actividades vulnerables México",
    "KYC sector inmobiliario",
    "expediente digital 10 años LFPIORPI",
    "lavado dinero inmobiliario México",
    "PEP SAT OFAC listas verificación",
  ],
  openGraph: {
    title: "LFPIORPI en el sector inmobiliario y automotriz · JAAK",
    description:
      "Lo que la LFPIORPI exige realmente al sector inmobiliario y automotriz: montos, objeto obligado, expediente y 10 años de conservación.",
    url: "https://jaak.ai/recursos/lfpiorpi-inmobiliario-automotriz",
  },
  alternates: { canonical: "https://jaak.ai/recursos/lfpiorpi-inmobiliario-automotriz" },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "VideoObject",
  name: "LFPIORPI en el sector inmobiliario y automotriz: lo que la ley realmente te exige",
  description:
    "Sesión ejecutiva de 50 minutos sobre obligaciones LFPIORPI para inmobiliarias y concesionarias automotrices: montos, objeto obligado, expediente digital y conservación 10 años.",
  thumbnailUrl: "https://jaak.ai/og-image.png",
  uploadDate: "2025-07-01",
  duration: "PT50M",
  publisher: { "@type": "Organization", name: "JAAK", url: "https://jaak.ai" },
  author: [
    { "@type": "Person", name: "Dr. David Merino" },
    { "@type": "Person", name: "Arianna Quezada" },
  ],
  keywords:
    "LFPIORPI inmobiliario, actividades vulnerables, KYC sector automotriz, expediente digital, objeto obligado",
  inLanguage: "es-MX",
};

const TIMESTAMPS = [
  { time: "00:00", topic: "Apertura: el proceso de venta que todos conocen y el riesgo que nadie ve" },
  { time: "06:00", topic: "La práctica más común: por qué no es suficiente" },
  { time: "12:00", topic: "Por qué inmobiliario y automotriz están en la mira del regulador" },
  { time: "18:00", topic: "LFPIORPI: obligaciones concretas, montos y objeto obligado" },
  { time: "26:00", topic: "Identidad: las tres validaciones que casi nadie hace completas" },
  { time: "33:00", topic: "Las tres listas: PEP, SAT y OFAC — por qué son fuentes distintas" },
  { time: "39:00", topic: "Evidencia defendible: qué hace que un proceso valga ante una autoridad" },
  { time: "44:00", topic: "El expediente digital: qué contiene y por qué 10 años" },
  { time: "48:00", topic: "Autodiagnóstico: 7 preguntas para evaluar tu operación" },
];

const LEARNINGS = [
  "En qué momento exacto de una venta entra en juego la identidad del cliente — y por qué ese momento casi nunca está bien documentado",
  "Por qué fotografiar una credencial no cumple con lo que la ley exige — y qué es lo que sí cumple",
  "Qué actividades califican como vulnerables en inmobiliario y automotriz, y desde qué montos aplican las obligaciones",
  "Quién es el objeto obligado dentro de tu empresa y qué responsabilidad personal implica esa figura",
  "Cuáles son las tres listas que debes cruzar antes de cerrar cualquier operación: PEP, SAT y OFAC",
  "Qué diferencia hay entre validar vigencia, autenticidad y listas — son tres validaciones distintas y la mayoría solo hace una",
  "Qué tiene que contener un expediente digital para que sea evidencia defendible y no solo archivos",
  "Por qué la ley exige conservar el expediente 10 años y qué pasa cuando la autoridad pide reconstruir una operación de hace años",
];

const Description = () => (
  <div>
    <p className="prose-p">
      El sector inmobiliario y automotriz son dos de los sectores más señalados en materia de lavado de
      dinero en México — por el valor de las operaciones, la posibilidad de uso de efectivo y la facilidad
      de introducir recursos de origen ilícito a través de una compraventa aparentemente legítima. La
      LFPIORPI existe precisamente como respuesta a eso. Y la mayoría del sector todavía no tiene resuelto
      lo que la ley exige.
    </p>
    <p className="prose-p">
      Fotografiar o fotocopiar una identificación es la práctica más común. Pero fotografiar una credencial
      no es lo mismo que validar una identidad. El regulador no espera que alguien haya pedido una
      credencial — espera que puedas demostrar que{" "}
      <strong style={{ color: "rgba(255,255,255,0.85)" }}>verificaste quién era esa persona, que el
      documento era auténtico y vigente, que la cruzaste contra listas de riesgo, y que eso quedó
      documentado con integridad suficiente para sostenerse ante una auditoría.</strong>
    </p>
    <p className="prose-p">
      El Dr. David Merino, Oficial de Cumplimiento de la Asociación Mexicana de Profesionales
      Inmobiliarios, desarrolla en esta sesión qué actividades califican como vulnerables, desde qué
      umbrales monetarios aplican las obligaciones, quién es el objeto obligado dentro de la organización
      — y por qué esa responsabilidad recae sobre una persona física específica, no sobre la empresa
      como entidad abstracta.
    </p>
    <p className="prose-p">
      La LFPIORPI exige conservar el expediente completo durante{" "}
      <strong style={{ color: "rgba(255,255,255,0.85)" }}>10 años con integridad demostrable.</strong> Los
      ciclos de investigación de lavado de dinero son largos. Una operación cerrada hoy puede ser objeto
      de una solicitud de reconstrucción dentro de cuatro años.
    </p>
  </div>
);

export default function InmobiliarioAutomotrizPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Header />
      <WebinarLayout
        eyebrow="Sesión ejecutiva · Sector inmobiliario · Sector automotriz"
        title="LFPIORPI en el sector inmobiliario y automotriz: lo que la ley realmente te exige — y cómo demostrarlo"
        subtitle="El proceso de venta más común en estos dos sectores es también el más expuesto. Esta sesión explica por qué — y qué hay que cambiar."
        presenters="Dr. David Merino · Arianna Quezada, CEO de JAAK"
        duration="50 minutos"
        description={<Description />}
        learnings={LEARNINGS}
        timestamps={TIMESTAMPS}
        davidBio="Doctor en Derecho. Oficial de Cumplimiento de la Asociación Mexicana de Profesionales Inmobiliarios (AMPI). Fundador de Top Compliance. Entrenado por GAFI, ONU y el FBI. Especialista en prevención de lavado de dinero y regulación digital."
        ariannaBio="CEO de JAAK. Empresa 100% mexicana especializada en identidad digital, verificación biométrica, firma electrónica y expedientes auditables para el sector inmobiliario, automotriz y financiero."
        ctaQuestion="¿Tu expediente de cliente aguanta 10 años de escrutinio?"
        ctaBody="La ley no va a pedir lo que pasó hoy. Va a pedir lo que pasó hace cuatro años. JAAK construye el expediente digital con la integridad que exige la autoridad — desde la primera operación."
        products={PRODUCTS}
        related={[
          { title: "Cumplir ya no es suficiente", href: "/recursos/cumplir-ya-no-es-suficiente" },
          { title: "Banca, Fintech y Neobancos: la nueva confianza financiera", href: "/recursos/banca-fintech-neobancos" },
        ]}
      />
      <Footer />
    </>
  );
}
