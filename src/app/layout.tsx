import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import Script from "next/script";
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
      legalName: "JAAK IT S.A.P.I. de C.V.",
      url: "https://jaak.ai",
      logo: "https://jaak.ai/images/logos/jaak-logo-azul.png",
      description: "Plataforma de verificación de identidad (KYC), validación de empresas (KYB) y firma electrónica avanzada con valor legal. Cumplimiento LFPIORPI, AML y estándares internacionales.",
      foundingDate: "2019",
      areaServed: {
        "@type": "Country",
        name: "México",
        identifier: "MX"
      },
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
      contactPoint: {
        "@type": "ContactPoint",
        contactType: "sales",
        url: "https://jaak.ai/contacto",
        email: "sales@jaak.ai",
        telephone: "+525535091788",
        availableLanguage: ["Spanish", "English"]
      },
      sameAs: [
        "https://www.linkedin.com/company/jaakmx/",
        "https://github.com/jaak-ai",
        "https://x.com/jaak_ai"
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
      applicationSubCategory: "Identity Verification",
      operatingSystem: "Web, API",
      description: "Plataforma integral de KYC (verificación de identidad), KYB (validación de empresas) y firma electrónica avanzada con evidencia auditable y valor legal.",
      provider: { "@id": "https://jaak.ai/#organization" },
      offers: {
        "@type": "AggregateOffer",
        url: "https://jaak.ai/precios",
        priceCurrency: "MXN",
        lowPrice: "14",
        highPrice: "25375",
        offerCount: 45,
        availability: "https://schema.org/InStock"
      },
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
    }
  ]
};

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  display: "swap",
  preload: false,
});

export const metadata: Metadata = {
  metadataBase: new URL("https://jaak.ai"),
  verification: {
    google: "NfAK5ezzduNLAjO45_UXc1F1iVRHCCEMFniyoF9W7X0",
  },
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
        {/* Meta Pixel */}
        <Script id="meta-pixel" strategy="afterInteractive">
          {`
            !function(f,b,e,v,n,t,s)
            {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
            n.callMethod.apply(n,arguments):n.queue.push(arguments)};
            if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
            n.queue=[];t=b.createElement(e);t.async=!0;
            t.src=v;s=b.getElementsByTagName(e)[0];
            s.parentNode.insertBefore(t,s)}(window, document,'script',
            'https://connect.facebook.net/en_US/fbevents.js');
            fbq('init', '863305889229368');
            fbq('track', 'PageView');
          `}
        </Script>
        <noscript>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            height="1"
            width="1"
            style={{ display: "none" }}
            src="https://www.facebook.com/tr?id=863305889229368&ev=PageView&noscript=1"
            alt=""
          />
        </noscript>
        {/* HubSpot Tracking */}
        <Script
          id="hs-script-loader"
          src="//js.hs-scripts.com/19644701.js"
          strategy="afterInteractive"
        />
      </body>
    </html>
  );
}
