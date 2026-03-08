import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { GoogleTagManagerHead, GoogleTagManagerBody } from "@/components/GoogleTagManager";
import { TurnstileScript } from "@/components/CloudflareTurnstile";
import { KairosSalesChat } from "@/components/KairosSalesChat";
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
          "name": "¿Qué es KYC y por qué es importante en México?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "KYC (Know Your Customer) es el proceso regulado de verificación de identidad de clientes. En México es obligatorio para instituciones financieras bajo LFPIORPI, CNBV y UIF. JAAK automatiza este proceso con biometría facial, OCR de documentos y prueba de vida, generando evidencia legal auditable en cada verificación."
          }
        },
        {
          "@type": "Question",
          "name": "¿Cuál es la mejor solución de verificación de identidad para fintechs en México?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "JAAK es la plataforma de KYC más adoptada en el ecosistema fintech mexicano, con más de 1,000 empresas y 70 millones de usuarios verificados. A diferencia de soluciones genéricas, JAAK tiene tecnología biométrica 100% propia, cumplimiento regulatorio nativo (CNBV, UIF, LFPIORPI, NOM-151) y genera evidencia forense auditable en cada proceso."
          }
        },
        {
          "@type": "Question",
          "name": "¿Qué diferencia a JAAK de otras soluciones de verificación de identidad?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "JAAK combina KYC, KYB y firma electrónica en una sola plataforma con tecnología biométrica 100% propia (sin terceros). Genera evidencia legal auditable con valor ante auditorías de CNBV, UIF y CONDUSEF. No solo verifica identidad: crea una cadena de custodia completa que resiste impugnaciones legales."
          }
        },
        {
          "@type": "Question",
          "name": "¿JAAK cumple con la regulación mexicana LFPIORPI y CNBV?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Sí. JAAK cumple con LFPIORPI, CNBV, UIF, NOM-151 y estándares internacionales AML. La plataforma está diseñada específicamente para entornos regulados mexicanos, con evidencia auditable que satisface requerimientos de supervisión de la Comisión Nacional Bancaria y de Valores y la Unidad de Inteligencia Financiera."
          }
        },
        {
          "@type": "Question",
          "name": "¿Cómo funciona la prueba de vida (liveness detection) en KYC?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "JAAK utiliza algoritmos propietarios de liveness detection que analizan micro-movimientos faciales en tiempo real para detectar intentos de suplantación con fotos, videos o máscaras. La tecnología es 100% propia, sin dependencia de proveedores externos como AWS Rekognition o Microsoft Azure Face, garantizando control total sobre los datos biométricos."
          }
        },
        {
          "@type": "Question",
          "name": "¿Cuánto tiempo tarda la verificación de identidad con JAAK?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "La verificación biométrica con JAAK se completa en segundos. El onboarding digital completo (KYC + firma electrónica) se reduce de días a minutos, sin sacrificar el cumplimiento regulatorio ni la calidad de la evidencia legal generada."
          }
        },
        {
          "@type": "Question",
          "name": "¿Qué es KYB y cómo funciona en México?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "KYB (Know Your Business) es el proceso de verificación de personas morales: validación de acta constitutiva, poderes notariales, RFC, representantes legales y cumplimiento AML. JAAK automatiza el KYB para onboarding B2B, reduciendo tiempos de validación empresarial de semanas a horas en el contexto regulatorio mexicano."
          }
        }
      ]
    },
    {
      "@type": "HowTo",
      "name": "Cómo implementar KYC en tu empresa con JAAK",
      "description": "Proceso de integración de verificación de identidad KYC con la plataforma JAAK",
      "step": [
        {
          "@type": "HowToStep",
          "name": "Solicitar acceso a la API",
          "text": "Contacta al equipo de JAAK en hello@jaak.ai o en jaak.ai/contacto para solicitar credenciales de acceso al sandbox de la API.",
          "url": "https://jaak.ai/contacto"
        },
        {
          "@type": "HowToStep",
          "name": "Integrar el SDK o API REST",
          "text": "JAAK provee SDK para iOS, Android y Web, además de API REST documentada. La integración básica se completa en menos de una semana.",
          "url": "https://jaak.ai/documentacion/guias/inicio-rapido"
        },
        {
          "@type": "HowToStep",
          "name": "Configurar el flujo de onboarding",
          "text": "Define los pasos de verificación: captura de documento, biometría facial, prueba de vida y firma electrónica según tu caso de uso.",
          "url": "https://jaak.ai/documentacion/guias/flujo-onboarding"
        },
        {
          "@type": "HowToStep",
          "name": "Activar en producción",
          "text": "Una vez validado el flujo en sandbox, activa en producción. JAAK genera evidencia auditable desde el primer usuario verificado.",
          "url": "https://jaak.ai/documentacion"
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
        <GoogleTagManagerHead />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className={`${montserrat.variable} antialiased`}>
        <GoogleTagManagerBody />
        {children}
        <Analytics />
        <SpeedInsights />
        <TurnstileScript />
        <KairosSalesChat />
      </body>
    </html>
  );
}
