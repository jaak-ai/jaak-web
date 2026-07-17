import type { Metadata } from "next";

const CANONICAL_URL = "https://jaak.ai/firma-nom151-demo-autoservicio";
const LOGO = "https://jaak.ai/images/logos/jaak-logo-azul.png";
const TITLE = "Firma Digital NOM-151 con Validez Legal | Demo + Plan $99 MXN | JAAK";
const DESCRIPTION =
  "Firma digital NOM-151 con validez legal en México: sello de tiempo certificado por PSC y hash SHA-256. Mira la demo y actívala desde $99 MXN.";

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  keywords:
    "firma electrónica NOM-151, firma digital con validez legal México, sello de tiempo certificado, firma NOM-151 precio, PSC firma electrónica, firma digital validez legal, NOM-151-SCFI-2016",
  alternates: { canonical: CANONICAL_URL },
  openGraph: {
    type: "website",
    locale: "es_MX",
    url: CANONICAL_URL,
    siteName: "JAAK",
    title: TITLE,
    description: DESCRIPTION,
    images: [{ url: LOGO, width: 800, height: 400, alt: "Firma Digital NOM-151 JAAK" }],
  },
  twitter: {
    card: "summary_large_image",
    title: TITLE,
    description: DESCRIPTION,
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
    { "@type": "ListItem", position: 2, name: "Firma Electrónica", item: "https://jaak.ai/plataforma/firma-electronica" },
    { "@type": "ListItem", position: 3, name: "Demo Firma NOM-151", item: CANONICAL_URL },
  ],
};

const productSchema = {
  "@context": "https://schema.org",
  "@type": "Product",
  name: "Firma Digital NOM-151 — Plan Cobre",
  description:
    "Firma electrónica avanzada con sello de tiempo certificado por PSC, hash SHA-256 y expediente digital, 5 firmas incluidas.",
  image: LOGO,
  brand: { "@type": "Brand", name: "JAAK" },
  offers: {
    "@type": "Offer",
    priceCurrency: "MXN",
    price: "99.00",
    availability: "https://schema.org/InStock",
    url: CANONICAL_URL,
  },
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "¿Qué incluye el Plan Cobre de Firma NOM-151?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "El Plan Cobre incluye 5 firmas con sello de tiempo oficial certificado por un PSC, hash SHA-256 que detecta cualquier alteración posterior a la firma, constancia de conservación legal por 10 años y expediente digital descargable con evidencia del proceso.",
      },
    },
    {
      "@type": "Question",
      name: "¿Cuál es la diferencia entre Firma NOM-151 y Firma NOM-151 + Biometría?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Firma NOM-151 blinda la integridad y fecha del documento mediante hash y sello de tiempo, con atribución basada en el proceso de firma (correo, OTP, IP, dispositivo). Firma NOM-151 + Biometría añade verificación facial y prueba de vida del firmante, útil cuando necesitas probar quién firmó y no solo qué se firmó.",
      },
    },
    {
      "@type": "Question",
      name: "¿Necesito integración por API para usar el Plan Cobre?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "No. El Plan Cobre está diseñado para operar directamente desde la plataforma de autoservicio, sin desarrollo inicial. La integración vía API está disponible cuando decidas escalar.",
      },
    },
    {
      "@type": "Question",
      name: "¿Cuánto tarda en activarse el Plan Cobre?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "La activación es automática: al completar el pago, tu cuenta y tus firmas quedan disponibles en minutos, sin esperar validación manual.",
      },
    },
    {
      "@type": "Question",
      name: "¿La Firma NOM-151 aplica para recibos de nómina digital?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Sí. El sello de tiempo certificado deja evidencia de la fecha de entrega y aceptación del recibo, útil ante una revisión del IMSS o la STPS.",
      },
    },
    {
      "@type": "Question",
      name: "¿Puedo escalar después a más firmas o volumen?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Sí. Puedes adquirir más créditos, subir de paquete o migrar a un esquema Enterprise en cualquier momento desde el portal, sin contratos ni permanencia forzosa.",
      },
    },
    {
      "@type": "Question",
      name: "¿JAAK sustituye la asesoría legal de mi empresa?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "No. JAAK ayuda a documentar el proceso de firma con evidencia técnica conforme a la NOM-151, pero no sustituye la asesoría legal de tu empresa para casos específicos.",
      },
    },
  ],
};

export default function FirmaNom151DemoLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify([breadcrumbSchema, productSchema, faqSchema]) }}
      />
      {children}
    </>
  );
}
