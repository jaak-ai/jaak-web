import type { Metadata } from "next";

const CANONICAL_URL = "https://jaak.ai/kyc-inmobiliario-lfpiorpi";
const LOGO = "https://jaak.ai/images/logos/jaak-logo-azul.png";

export const metadata: Metadata = {
  title: "KYC Automatizado Inmobiliario | Cumple la Fracción V y V Bis LFPIORPI",
  description:
    "Automatiza la identificación PLD que exige la reforma a la LFPIORPI (Fr. V y V Bis). KYC biométrico + firma NOM-151 para inmobiliarias. Pruébalo desde $99.",
  keywords:
    "fracción V bis LFPIORPI qué es, obligaciones ley antilavado inmobiliarias 2026, cómo identificar al beneficiario controlador inmobiliaria, KYC biométrico inmobiliario México, sujeto obligado sector inmobiliario LFPIORPI, aviso UIF inmobiliaria 8025 UMA, expediente digital PLD inmobiliario, firma electrónica NOM-151 contrato compraventa",
  alternates: { canonical: CANONICAL_URL },
  openGraph: {
    type: "website",
    locale: "es_MX",
    url: CANONICAL_URL,
    siteName: "JAAK",
    title: "KYC Automatizado Inmobiliario | Cumple la Fracción V y V Bis LFPIORPI",
    description:
      "Automatiza la identificación PLD que exige la reforma a la LFPIORPI (Fr. V y V Bis). KYC biométrico + firma NOM-151 para inmobiliarias. Pruébalo desde $99.",
    images: [{ url: LOGO, width: 800, height: 400, alt: "KYC Automatizado Inmobiliario JAAK" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "KYC Automatizado Inmobiliario | Cumple la Fracción V y V Bis LFPIORPI",
    description:
      "Automatiza la identificación PLD que exige la reforma a la LFPIORPI (Fr. V y V Bis). KYC biométrico + firma NOM-151 para inmobiliarias.",
    images: [LOGO],
    creator: "@jaak_ai",
    site: "@jaak_ai",
  },
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Inicio", item: "https://jaak.ai" },
    { "@type": "ListItem", position: 2, name: "Inmobiliarias", item: "https://jaak.ai/inmobiliarias" },
    { "@type": "ListItem", position: 3, name: "KYC Inmobiliario LFPIORPI", item: CANONICAL_URL },
  ],
};

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "JAAK",
  url: "https://jaak.ai",
  logo: LOGO,
  description:
    "JAAK es una RegTech mexicana de identidad digital, KYC biométrico y firma electrónica NOM-151, con tecnología hecha en México.",
  sameAs: ["https://www.linkedin.com/company/jaak-ai"],
  address: { "@type": "PostalAddress", addressCountry: "MX" },
};

const videoSchema = {
  "@context": "https://schema.org",
  "@type": "VideoObject",
  name: "Demo de KYC biométrico JAAK",
  description:
    "Demostración del flujo de verificación de identidad KYC de JAAK: captura de documento, biometría facial, prueba de vida y expediente digital.",
  thumbnailUrl: "https://i.ytimg.com/vi/q6Xug6_kms0/maxresdefault.jpg",
  uploadDate: "2025-01-01T00:00:00-06:00",
  contentUrl: "https://www.youtube.com/watch?v=q6Xug6_kms0",
  embedUrl: "https://www.youtube.com/embed/q6Xug6_kms0",
  publisher: {
    "@type": "Organization",
    name: "JAAK",
    logo: { "@type": "ImageObject", url: LOGO },
  },
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "¿Qué es la Fracción V Bis de la LFPIORPI?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Es la fracción incorporada al Artículo 17 de la LFPIORPI mediante la reforma publicada en el DOF el 16 de julio de 2025. Considera Actividad Vulnerable la recepción de recursos destinados a llevar a cabo un Desarrollo Inmobiliario cuya finalidad sea su venta o renta, incluyendo anticipos de preventa y aportaciones canalizadas mediante fideicomisos.",
      },
    },
    {
      "@type": "Question",
      name: "¿Una desarrolladora puede caer en ambas fracciones a la vez?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Sí: en la V Bis cuando recibe recursos para financiar el proyecto, y en la V cuando construye, comercializa o vende. Requiere controles dobles.",
      },
    },
    {
      "@type": "Question",
      name: "¿Desde qué monto debo identificar a mi cliente?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "No existe un umbral mínimo para iniciar la identificación en las fracciones V y V Bis: el expediente del cliente debe integrarse desde el inicio de la relación u operación. El umbral de 8,025 UMA (aproximadamente $941,412.75 MXN) aplica únicamente para la obligación de presentar el Aviso ante la autoridad.",
      },
    },
    {
      "@type": "Question",
      name: "¿Qué pasa si no cumplo?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Las sanciones van de 200 a 2,000 UMA por incumplir obligaciones de identificación o presentar avisos fuera de tiempo, y de 10,000 a 65,000 UMA (o hasta el 100% del valor del acto) por omitir avisos o aceptar pagos en efectivo prohibidos, conforme al Artículo 54 de la LFPIORPI. El expediente debe conservarse 10 años y puede ser auditado por la UIF.",
      },
    },
    {
      "@type": "Question",
      name: "¿JAAK reemplaza el alta en el Padrón de Actividades Vulnerables del SAT?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "No. JAAK automatiza identificación, evidencia y conservación del expediente; el alta, el Manual de Políticas y la capacitación anual del sujeto obligado siguen siendo obligación propia.",
      },
    },
  ],
};

export default function KycInmobiliarioLfpiorpiLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify([breadcrumbSchema, organizationSchema, videoSchema, faqSchema]),
        }}
      />
      {children}
    </>
  );
}
