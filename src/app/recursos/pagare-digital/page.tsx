import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WebinarLayout, { type ProductCard } from "../webinar-layout";

const PRODUCTS: ProductCard[] = [
  {
    icon: "✍️",
    label: "Firma Electrónica NOM-151",
    title: "Firma avanzada que resiste una controversia",
    desc: "Cada pagaré firmado con JAAK genera cadena de custodia digital: identidad del firmante, consentimiento documentado, integridad del documento y sello de tiempo NOM-151.",
    href: "/plataforma/firma-electronica",
    color: "#1ECAD3",
  },
  {
    icon: "🖊️",
    label: "Signa",
    title: "Firma electrónica para crédito digital",
    desc: "Solución de firma pensada para SOFOM, fintech y crédito digital. Simple, ejecutable y con el nivel de evidencia que un juez va a pedir.",
    href: "/signa",
    color: "#A78BFA",
  },
];

export const metadata: Metadata = {
  title: "Pagaré digital en México: validez jurídica y ejecutabilidad · JAAK",
  description:
    "¿Cuándo es ejecutable un pagaré 100% digital en México? Firma electrónica, NOM-151, cadena de custodia y KYC. Sesión ejecutiva con el Dr. David Merino y Arianna Quezada de JAAK.",
  keywords: [
    "pagaré digital México validez",
    "firma electrónica avanzada LGTOC",
    "NOM-151 títulos de crédito",
    "KYC SOFOM pagaré digital",
    "cadena de custodia evidencia digital México",
    "consentimiento digital ejecutable",
    "título de crédito digital México",
  ],
  openGraph: {
    title: "Pagaré digital en México: validez jurídica y ejecutabilidad · JAAK",
    description:
      "¿Cuándo es ejecutable un pagaré 100% digital en México? Firma electrónica, NOM-151, cadena de custodia y KYC.",
    url: "https://jaak.ai/recursos/pagare-digital",
  },
  alternates: { canonical: "https://jaak.ai/recursos/pagare-digital" },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "VideoObject",
  name: "¿Puede existir un pagaré 100% digital? Validez jurídica, evidencia y ejecutabilidad en México",
  description:
    "Sesión ejecutiva de 60 minutos sobre validez jurídica del pagaré digital, firma electrónica avanzada, NOM-151, cadena de custodia y KYC para crédito digital en México.",
  thumbnailUrl: "https://jaak.ai/og-image.png",
  uploadDate: "2025-09-01",
  duration: "PT60M",
  publisher: { "@type": "Organization", name: "JAAK", url: "https://jaak.ai" },
  author: [
    { "@type": "Person", name: "Dr. David Merino" },
    { "@type": "Person", name: "Arianna Quezada" },
  ],
  keywords:
    "pagaré digital México, firma electrónica avanzada, NOM-151, cadena custodia, KYC SOFOM",
  inLanguage: "es-MX",
};

const TIMESTAMPS = [
  { time: "Bloque 1 (0–10 min)", topic: "Apertura y contexto: ¿qué tan expuestas están las empresas mexicanas sin saberlo?" },
  { time: "Bloque 2 (10–20 min)", topic: "Validez jurídica: qué hace válido un pagaré digital en México" },
  { time: "Bloque 3 (20–30 min)", topic: "Niveles de firma: simple, avanzada, NOM-151 — tres capas distintas" },
  { time: "Bloque 4 (30–40 min)", topic: "Controversia y consentimiento: el cliente que dice que nunca firmó" },
  { time: "Bloque 5 (40–48 min)", topic: "Cadena de custodia digital: qué es y por qué un juez la va a pedir" },
  { time: "Bloque 6 (48–55 min)", topic: "KYC e IA: biometría, riesgos del KYC manual y responsabilidad empresarial" },
  { time: "Bloque 7 (55–60 min)", topic: "Cierre: los 3 errores más comunes y hacia dónde va la regulación" },
];

const LEARNINGS = [
  "Qué hace legalmente válido a un pagaré en México — digital o en papel — y por qué el soporte no es lo que importa",
  "La diferencia entre firma electrónica simple, avanzada y lo que exige la NOM-151 — y por qué muchas empresas confunden las tres",
  "Qué pasa cuando el firmante dice que nunca aceptó — y cómo construir el proceso de consentimiento para que ese escenario no prospere",
  "Qué es la cadena de custodia digital y por qué un juez la va a pedir antes de cualquier otra cosa",
  "Cómo el crimen organizado ataca los procesos de onboarding digital — y qué hace que un proceso sea resistente",
  "Los 3 errores más comunes que hacen que un pagaré digital no sea ejecutable ante una controversia",
  "En qué dirección va la regulación mexicana para los títulos de crédito digitales — y cómo prepararse antes de que llegue",
];

const Description = () => (
  <div>
    <p className="prose-p">
      La pregunta parece sencilla: ¿puede existir un pagaré cien por ciento digital en México? La respuesta
      corta es sí. Pero la pregunta que realmente importa es otra:{" "}
      <strong style={{ color: "rgba(255,255,255,0.85)" }}>¿el tuyo aguanta una controversia? ¿Puedes
      demostrar quién firmó, cuándo, desde dónde, y con qué nivel de certeza?</strong>
    </p>
    <p className="prose-p">
      El Código de Comercio en su artículo 89 reconoce que los mensajes de datos tienen plena validez
      jurídica cuando cumplen condiciones de autenticidad, integridad y conservación. La NOM-151 establece
      el estándar de sellado de tiempo y conservación. El problema nunca es la validez en abstracto —
      el problema es siempre la misma cosa: ¿puedes probarla?
    </p>
    <p className="prose-p">
      El escenario que todo el mundo imagina es el cliente de mala fe que firmó y ahora dice que no firmó
      para no pagar. Ese escenario existe. Pero hay otro mucho más peligroso: el cliente que genuinamente
      no firmó, porque alguien utilizó su identidad sin que él lo supiera. El Dr. David Merino, con
      experiencia directa en contrainteligencia empresarial y casos de la FGR, explica cómo el crimen
      organizado analiza los procesos de onboarding de instituciones financieras e identifica el eslabón
      más frágil del consentimiento digital.
    </p>
    <p className="prose-p">
      Las empresas ponen mucho énfasis en la firma — que es el paso más visible — y muy poco en documentar
      qué fue lo que se aceptó, en qué contexto, con qué información disponible para el usuario en ese
      momento. Ese hueco es el que más aparece en las controversias.
    </p>
  </div>
);

export default function PagareDigitalPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Header />
      <WebinarLayout
        eyebrow="Sesión ejecutiva · Crédito digital · SOFOM · Fintech"
        title="¿Puede existir un pagaré 100% digital? Validez jurídica, evidencia y ejecutabilidad en México"
        subtitle="La ley ya lo permite. El reto es que tu operación pueda sostenerse ante un juez, un auditor o el crimen organizado que analiza cada eslabón de tu proceso."
        presenters="Dr. David Merino · Arianna Quezada, CEO de JAAK"
        duration="60 minutos"
        comingSoon={true}
        description={<Description />}
        learnings={LEARNINGS}
        timestamps={TIMESTAMPS}
        davidBio="Doctor en Derecho. Consultor de la UIF, el SAT y la FGR. Asesor del Congreso Federal en digitalización. Entrenado por el FBI y el Departamento de Seguridad Nacional de EE.UU. en evidencia digital. Experto técnico del Panel Científico Independiente en IA de la ONU."
        ariannaBio="CEO de JAAK. Empresa 100% mexicana especializada en identidad digital, verificación biométrica, firma electrónica y expedientes auditables para el sector de crédito digital."
        ctaQuestion="¿Tus pagarés digitales resisten una controversia?"
        ctaBody="Una operación ejecutable es la que puede demostrar quién firmó, cuándo, cómo se verificó su identidad, y que el documento es exactamente el mismo desde entonces. JAAK construye esa cadena de evidencia."
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
