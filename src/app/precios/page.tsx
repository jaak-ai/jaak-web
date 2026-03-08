import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PreciosClient from "./PreciosClient";

export const metadata: Metadata = {
  title: "Precios – KYC Biométrico y Firma NOM-151 | JAAK",
  description:
    "KYC biométrico desde $99 MXN/año. Firma NOM-151 desde $49 MXN/año. Sin setup fee. Para empresas reguladas en México. ISO 27001 · iBeta Nivel 2.",
  keywords: [
    "precios KYC México",
    "KYC biométrico precio",
    "verificación de identidad México precios",
    "firma electrónica NOM-151 precio",
    "firma electrónica México",
    "biometría facial precio",
    "JAAK precios",
    "Enterprise KYC",
    "autoservicio verificación identidad",
    "cumplimiento CNBV LFPIORPI UIF",
  ],
  openGraph: {
    title: "Precios – KYC Biométrico y Firma NOM-151 | JAAK",
    description:
      "KYC biométrico desde $99 MXN/año. Firma NOM-151 desde $49 MXN/año. Sin setup fee. Autoservicio, Enterprise y Alianzas para empresas reguladas en México.",
    url: "https://jaak.ai/precios",
  },
  alternates: {
    canonical: "https://jaak.ai/precios",
  },
};

// --- JSON-LD Schemas ---
const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "¿Cuánto cuesta el KYC biométrico en México?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Autoservicio desde $99 MXN/año (5 verif, plan Cobre), sin setup fee. Precio unitario de $19.80 (Cobre) a $25.00 (Platino). Para más de 1,000 verif/mes: Enterprise con cotización personalizada.",
      },
    },
    {
      "@type": "Question",
      name: "¿Cuánto cuesta la Firma Electrónica NOM-151?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Firma Simple desde $49 MXN/año (10 firmas). Firma NOM-151 desde $99 MXN/año (5 firmas, $19.80/firma) hasta $6,000 MXN (500 firmas, $12.00/firma). Firma NOM-151+Bio desde $99 MXN (5 firmas) hasta $12,500 MXN (500 firmas). Sin setup fee en Autoservicio.",
      },
    },
    {
      "@type": "Question",
      name: "¿Qué pasa si supero mi volumen en Autoservicio?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Bronce a Platino pueden comprar paquetes adicionales al 120% del precio unitario. Cobre se bloquea al superar el límite. Si superas 1,000 verif/mes consistentemente, la migración a Enterprise es obligatoria.",
      },
    },
    {
      "@type": "Question",
      name: "¿Los paquetes caducan o son reembolsables?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Vencen a 12 meses desde la compra. No son reembolsables. Setup Fees tampoco son reembolsables.",
      },
    },
    {
      "@type": "Question",
      name: "¿JAAK cumple con LFPIORPI, CNBV y UIF?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Sí. LFPIORPI Art. 17, identificación remota CNBV, evidencia para UIF, NOM-151 con PSC certificado. ISO 27001, ISO 9001, iBeta Liveness Nivel 2.",
      },
    },
    {
      "@type": "Question",
      name: "¿Diferencia entre KYC Tradicional y KYC Simplificado?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Tradicional (42 tokens) tiene validez legal para regulados (CNBV, UIF, LFPIORPI). Simplificado (30 tokens) sin validez legal, no disponible en Alianzas.",
      },
    },
    {
      "@type": "Question",
      name: "¿Cómo funciona la facturación Enterprise 80/20?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Mensual: 80% del estimado del mes actual + 20% real del mes anterior. Neto 30 días. Descuento 15% si se paga días 1–10. Cobro mínimo = tier inicial contratado aunque el consumo sea menor.",
      },
    },
  ],
};

const productSchemas = [
  {
    "@context": "https://schema.org",
    "@type": "Product",
    name: "JAAK KYC Biométrico – Autoservicio",
    description: "Verificación de identidad KYC biométrico con prueba de vida certificada iBeta Nivel 2. Para empresas reguladas en México.",
    brand: { "@type": "Brand", name: "JAAK" },
    offers: [
      {
        "@type": "Offer",
        name: "Plan Cobre",
        price: "99",
        priceCurrency: "MXN",
        priceValidUntil: "2026-12-31",
        availability: "https://schema.org/InStock",
        url: "https://platform.jaak.ai/#/onboarding/user-info",
        description: "5 verificaciones de identidad por año",
      },
      {
        "@type": "Offer",
        name: "Plan Bronce",
        price: "1500",
        priceCurrency: "MXN",
        priceValidUntil: "2026-12-31",
        availability: "https://schema.org/InStock",
        url: "https://platform.jaak.ai/#/onboarding/plans",
        description: "50 verificaciones de identidad por año",
      },
      {
        "@type": "Offer",
        name: "Plan Plata",
        price: "2800",
        priceCurrency: "MXN",
        priceValidUntil: "2026-12-31",
        availability: "https://schema.org/InStock",
        url: "https://platform.jaak.ai/#/onboarding/plans",
        description: "100 verificaciones de identidad por año",
      },
      {
        "@type": "Offer",
        name: "Plan Oro",
        price: "6625",
        priceCurrency: "MXN",
        priceValidUntil: "2026-12-31",
        availability: "https://schema.org/InStock",
        url: "https://platform.jaak.ai/#/onboarding/plans",
        description: "250 verificaciones de identidad por año",
      },
      {
        "@type": "Offer",
        name: "Plan Platino",
        price: "12500",
        priceCurrency: "MXN",
        priceValidUntil: "2026-12-31",
        availability: "https://schema.org/InStock",
        url: "https://platform.jaak.ai/#/onboarding/plans",
        description: "500 verificaciones de identidad por año",
      },
    ],
  },
  {
    "@context": "https://schema.org",
    "@type": "Product",
    name: "JAAK Firma Electrónica Simple – Autoservicio",
    description: "Firma electrónica simple para documentos sin certificación avanzada.",
    brand: { "@type": "Brand", name: "JAAK" },
    offers: [
      {
        "@type": "Offer",
        name: "Plan Cobre",
        price: "49",
        priceCurrency: "MXN",
        priceValidUntil: "2026-12-31",
        availability: "https://schema.org/InStock",
        url: "https://platform.jaak.ai/#/onboarding/plans",
        description: "10 firmas por año",
      },
      {
        "@type": "Offer",
        name: "Plan Platino",
        price: "2500",
        priceCurrency: "MXN",
        priceValidUntil: "2026-12-31",
        availability: "https://schema.org/InStock",
        url: "https://platform.jaak.ai/#/onboarding/plans",
        description: "500 firmas por año",
      },
    ],
  },
  {
    "@context": "https://schema.org",
    "@type": "Product",
    name: "JAAK Firma Electrónica NOM-151 + PSC – Autoservicio",
    description: "Firma electrónica avanzada con cumplimiento NOM-151 y PSC certificado para México.",
    brand: { "@type": "Brand", name: "JAAK" },
    offers: [
      {
        "@type": "Offer",
        name: "Plan Cobre",
        price: "99",
        priceCurrency: "MXN",
        priceValidUntil: "2026-12-31",
        availability: "https://schema.org/InStock",
        url: "https://platform.jaak.ai/#/onboarding/plans",
        description: "5 firmas NOM-151 por año",
      },
      {
        "@type": "Offer",
        name: "Plan Platino",
        price: "6000",
        priceCurrency: "MXN",
        priceValidUntil: "2026-12-31",
        availability: "https://schema.org/InStock",
        url: "https://platform.jaak.ai/#/onboarding/plans",
        description: "500 firmas NOM-151 por año",
      },
    ],
  },
  {
    "@context": "https://schema.org",
    "@type": "Product",
    name: "JAAK Firma NOM-151 + Biometría – Autoservicio",
    description: "Firma electrónica avanzada NOM-151 con verificación biométrica integrada.",
    brand: { "@type": "Brand", name: "JAAK" },
    offers: [
      {
        "@type": "Offer",
        name: "Plan Cobre",
        price: "99",
        priceCurrency: "MXN",
        priceValidUntil: "2026-12-31",
        availability: "https://schema.org/InStock",
        url: "https://platform.jaak.ai/#/onboarding/plans",
        description: "5 firmas NOM-151 + Bio por año",
      },
      {
        "@type": "Offer",
        name: "Plan Platino",
        price: "12500",
        priceCurrency: "MXN",
        priceValidUntil: "2026-12-31",
        availability: "https://schema.org/InStock",
        url: "https://platform.jaak.ai/#/onboarding/plans",
        description: "500 firmas NOM-151 + Bio por año",
      },
    ],
  },
];

export default function PreciosPage() {
  return (
    <>
      <Header />
      <main>
        {/* JSON-LD Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
        />
        {productSchemas.map((schema, idx) => (
          <script
            key={idx}
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
          />
        ))}
        <PreciosClient />
      </main>
      <Footer />
    </>
  );
}
