import type { Metadata } from "next";

const CANONICAL_URL = "https://jaak.ai/kyc-demo-autoservicio";
const LOGO = "https://jaak.ai/images/logos/jaak-logo-azul.png";

export const metadata: Metadata = {
  title: "Demo KYC JAAK | Prueba verificación de identidad por $99 MXN",
  description:
    "Mira la demo de KYC biométrico de JAAK y prueba un producto de autoservicio por $99 MXN. Verificación de identidad, firma, validaciones y OCR en minutos.",
  keywords:
    "demo KYC JAAK, KYC biométrico México, verificación de identidad digital, autoservicio KYC, firma digital con KYC, validación INE CURP, OCR documentos México, paquete KYC $99, prueba JAAK autoservicio",
  alternates: { canonical: CANONICAL_URL },
  openGraph: {
    type: "website",
    locale: "es_MX",
    url: CANONICAL_URL,
    siteName: "JAAK",
    title: "Demo KYC JAAK | Prueba verificación de identidad por $99 MXN",
    description:
      "Mira la demo de KYC biométrico de JAAK y prueba un producto de autoservicio por $99 MXN. Verificación de identidad, firma, validaciones y OCR en minutos.",
    images: [{ url: LOGO, width: 800, height: 400, alt: "Demo KYC JAAK" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Demo KYC JAAK | Prueba verificación de identidad por $99 MXN",
    description:
      "Mira la demo de KYC biométrico de JAAK y prueba un producto de autoservicio por $99 MXN.",
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
    { "@type": "ListItem", position: 2, name: "Autoservicio", item: "https://jaak.ai/autoservicio" },
    { "@type": "ListItem", position: 3, name: "Demo KYC + Autoservicio", item: CANONICAL_URL },
  ],
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "¿Qué incluye el paquete de $99?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "El paquete inicial de KYC biométrico incluye verificaciones de identidad con biometría facial, prueba de vida, OCR de identificación oficial y consulta en listas de riesgo, con expediente digital descargable. Otros productos de autoservicio tienen su propio precio y alcance.",
      },
    },
    {
      "@type": "Question",
      name: "¿Puedo elegir cualquier producto JAAK?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "La prueba está pensada para que elijas un producto disponible en autoservicio y valides si se adapta a tu operación antes de escalar: KYC biométrico, firma electrónica, validaciones INE/CURP, OCR de documentos o listas de riesgo.",
      },
    },
    {
      "@type": "Question",
      name: "¿Qué pasa después de comprar?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Creas tu cuenta, realizas el pago en línea de forma segura y activas tu paquete de inmediato para comenzar a operar desde la plataforma de autoservicio.",
      },
    },
    {
      "@type": "Question",
      name: "¿Necesito integración API para probar?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "No. Autoservicio está diseñado para comenzar desde la plataforma sin desarrollo inicial. La integración vía API está disponible cuando decidas escalar.",
      },
    },
    {
      "@type": "Question",
      name: "¿Cuánto tarda en activarse?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "La activación es automática: al completar el pago, tu empresa y acceso quedan disponibles en minutos, sin esperar validación manual de un vendedor.",
      },
    },
    {
      "@type": "Question",
      name: "¿Puedo escalar después a más volumen?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Sí. Puedes adquirir más créditos, subir de paquete o migrar a un esquema Enterprise en cualquier momento desde el portal, sin contratos ni permanencia forzosa.",
      },
    },
    {
      "@type": "Question",
      name: "¿Qué diferencia hay entre autoservicio y enterprise?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Autoservicio permite comprar y activar paquetes de forma inmediata para volúmenes bajos o pruebas. Enterprise está pensado para volúmenes altos, integración a medida y acompañamiento dedicado.",
      },
    },
    {
      "@type": "Question",
      name: "¿Puedo ver la demo completa después de registrarme?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Sí. Al registrarte, el video se desbloquea por completo y puedes ver el flujo íntegro de la sesión KYC, desde la captura del documento hasta la consulta del expediente.",
      },
    },
  ],
};

export default function KycDemoAutoservicioLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify([breadcrumbSchema, faqSchema]) }}
      />
      {children}
    </>
  );
}
