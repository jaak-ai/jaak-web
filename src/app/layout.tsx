import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";
import "./globals.css";

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": "https://jaak.ai/#organization",
      name: "JAAK-IT",
      url: "https://jaak.ai",
      logo: "https://jaak.ai/logo.png",
      description: "Soluciones de seguridad con biometría. Valida identidades reales en segundos con Inteligencia Artificial.",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Ciudad de México",
        addressCountry: "MX"
      },
      sameAs: []
    },
    {
      "@type": "WebSite",
      "@id": "https://jaak.ai/#website",
      url: "https://jaak.ai",
      name: "JAAK",
      publisher: { "@id": "https://jaak.ai/#organization" }
    },
    {
      "@type": "SoftwareApplication",
      "@id": "https://jaak.ai/#product",
      name: "JAAK KYC",
      applicationCategory: "BusinessApplication",
      operatingSystem: "Web",
      description: "Verificación de identidad con IA, precisa y segura para tu onboarding KYC.",
      provider: { "@id": "https://jaak.ai/#organization" },
      featureList: [
        "Verificación en menos de 1 minuto",
        "Precisión mayor al 99%",
        "Disponible SaaS y On Premise",
        "Tecnología potenciada con IA",
        "Más de 1.2 millones de verificaciones diarias",
        "Cumplimiento de certificaciones internacionales"
      ]
    }
  ]
};

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://jaak.ai"),
  title: {
    default: "JAAK - Soluciones de seguridad con biometría",
    template: "%s | JAAK",
  },
  description: "Valida identidades reales en segundos con Inteligencia Artificial. Verificación de identidad con IA, precisa y segura para tu onboarding KYC.",
  keywords: [
    "verificación de identidad",
    "KYC",
    "biometría",
    "reconocimiento facial",
    "prevención de fraude",
    "verificación de documentos",
    "onboarding digital",
    "inteligencia artificial",
    "fintech",
    "CNBV",
    "LFPIORPI"
  ],
  authors: [{ name: "JAAK-IT" }],
  creator: "JAAK-IT",
  publisher: "JAAK-IT",
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
    title: "JAAK - Soluciones de seguridad con biometría",
    description: "Valida identidades reales en segundos con Inteligencia Artificial. Verificación de identidad con IA para tu onboarding KYC.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "JAAK - Verificación de identidad con IA",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "JAAK - Soluciones de seguridad con biometría",
    description: "Valida identidades reales en segundos con Inteligencia Artificial.",
    images: ["/og-image.png"],
  },
  alternates: {
    canonical: "https://jaak.ai",
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
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        {children}
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
