import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";
import "./globals.css";

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": "https://jaak.ai/#organization",
      name: "JAAK",
      url: "https://jaak.ai",
      logo: "https://jaak.ai/images/logos/jaak-logo-azul.png",
      description: "Plataforma de verificación de identidad (KYC), validación de empresas (KYB) y firma electrónica avanzada con valor legal. Cumplimiento LFPIORPI, AML y estándares internacionales.",
      address: {
        "@type": "PostalAddress",
        streetAddress: "Av. Insurgentes Sur 1602, Piso 4",
        addressLocality: "Ciudad de México",
        addressRegion: "CDMX",
        postalCode: "03940",
        addressCountry: "MX"
      },
      telephone: "+525535091788",
      email: "hello@jaak.ai",
      sameAs: [
        "https://www.linkedin.com/company/jaakmx/",
        "https://github.com/jaak-ai",
        "https://twitter.com/jaak_ai"
      ]
    },
    {
      "@type": "WebSite",
      "@id": "https://jaak.ai/#website",
      url: "https://jaak.ai",
      name: "JAAK - KYC, KYB y Firma Electrónica",
      publisher: { "@id": "https://jaak.ai/#organization" }
    },
    {
      "@type": "SoftwareApplication",
      "@id": "https://jaak.ai/#product",
      name: "JAAK Platform",
      applicationCategory: "BusinessApplication",
      operatingSystem: "Web",
      description: "Plataforma integral de KYC (verificación de identidad), KYB (validación de empresas) y firma electrónica avanzada con evidencia auditable y valor legal.",
      provider: { "@id": "https://jaak.ai/#organization" },
      featureList: [
        "Verificación biométrica con prueba de vida",
        "OCR de documentos oficiales",
        "Anti-spoofing avanzado",
        "Validación de personas morales (KYB)",
        "Firma electrónica con no repudio",
        "Evidencia forense de identidad",
        "Auditoría y trazabilidad completa",
        "Cumplimiento LFPIORPI y AML",
        "API y SDK para integración"
      ]
    },
    {
      "@type": "FAQPage",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "¿Qué es KYC y por qué es importante?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "KYC (Know Your Customer) es el proceso de verificación de identidad de clientes. Es crucial para cumplir con regulaciones como LFPIORPI y AML, prevenir fraude y lavado de dinero."
          }
        },
        {
          "@type": "Question",
          "name": "¿Qué diferencia a JAAK de otras soluciones de verificación?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "JAAK no solo verifica identidad, sino que genera evidencia auditable con valor legal. Incluye KYC, KYB y firma electrónica en una sola plataforma, diseñada para pasar auditorías y conflictos legales."
          }
        },
        {
          "@type": "Question",
          "name": "¿JAAK cumple con la regulación mexicana?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Sí, JAAK cumple con LFPIORPI (Ley Federal para la Prevención e Identificación de Operaciones con Recursos de Procedencia Ilícita), AML, CNBV y estándares internacionales."
          }
        }
      ]
    }
  ]
};

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://jaak.ai"),
  title: {
    default: "JAAK - Reduce fraude y cumple regulación sin perder clientes",
    template: "%s | JAAK",
  },
  description: "Verificación de identidad, KYC/KYB y firma electrónica con evidencia legal auditable. Reduce fraude, aumenta conversión y pasa auditorías CNBV, UIF y GDPR sin fricción.",
  keywords: [
    "KYC",
    "KYC México",
    "verificación de identidad",
    "Know Your Customer",
    "KYB",
    "Know Your Business",
    "validación de empresas",
    "firma electrónica",
    "firma electrónica avanzada",
    "e-signature",
    "biometría facial",
    "prueba de vida",
    "liveness detection",
    "anti-spoofing",
    "OCR documentos",
    "LFPIORPI",
    "AML",
    "prevención lavado de dinero",
    "compliance",
    "cumplimiento regulatorio",
    "onboarding digital",
    "verificación biométrica",
    "identidad digital",
    "CNBV",
    "fintech México",
    "RegTech",
    "evidencia legal",
    "no repudio",
    "auditoría identidad"
  ],
  authors: [{ name: "JAAK" }],
  creator: "JAAK",
  publisher: "JAAK",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "es_MX",
    url: "https://jaak.ai",
    siteName: "JAAK",
    title: "JAAK - KYC, KYB y Firma Electrónica con Biometría e IA",
    description: "Verifica identidades en segundos con IA y biometría avanzada. Evidencia auditable y valor legal real. Cumple LFPIORPI y AML.",
    images: [
      {
        url: "/images/logos/jaak-logo-azul.png",
        width: 800,
        height: 400,
        alt: "JAAK - Plataforma de KYC, KYB y Firma Electrónica",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "JAAK - KYC, KYB y Firma Electrónica con Biometría e IA",
    description: "Verifica identidades en segundos con IA y biometría avanzada. Evidencia auditable y valor legal real.",
    images: ["/images/logos/jaak-logo-azul.png"],
    creator: "@jaak_ai",
    site: "@jaak_ai",
  },
  alternates: {
    canonical: "https://jaak.ai",
    types: {
      "application/rss+xml": "https://jaak.ai/rss.xml",
    },
  },
  icons: {
    icon: [
      { url: "/favicon.svg", type: "image/svg+xml" },
    ],
    apple: "/favicon.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className={`${montserrat.variable} antialiased`}>
        {children}
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
