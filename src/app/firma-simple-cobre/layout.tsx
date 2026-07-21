import type { Metadata } from "next";

const CANONICAL = "https://www.jaak.ai/firma-simple-cobre";
const LOGO = "https://www.jaak.ai/images/logos/jaak-logo-azul.png";
const TITLE = "Firma Simple Cobre — 10 firmas por $49 + IVA | JAAK";
const DESCRIPTION =
  "Firma electrónica simple en minutos. 10 firmas por $49 MXN + IVA. Pago seguro con tarjeta. Sin instalación. Marca JAAK.";

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  keywords:
    "firma electrónica simple, firma digital México, plan cobre, 10 firmas, JAAK firma, autoservicio firma",
  alternates: { canonical: CANONICAL },
  openGraph: {
    type: "website",
    locale: "es_MX",
    url: CANONICAL,
    siteName: "JAAK",
    title: TITLE,
    description: DESCRIPTION,
    images: [{ url: LOGO, width: 800, height: 400, alt: "JAAK Firma Simple" }],
  },
  twitter: {
    card: "summary_large_image",
    title: TITLE,
    description: DESCRIPTION,
    images: [LOGO],
    creator: "@jaak_ai",
    site: "@jaak_ai",
  },
  robots: { index: true, follow: true },
};

const productSchema = {
  "@context": "https://schema.org",
  "@type": "Product",
  name: "Firma Simple — Plan Cobre",
  description:
    "10 firmas electrónicas simples. Flujo 100% digital, notificaciones a firmantes y trazabilidad básica.",
  brand: { "@type": "Brand", name: "JAAK" },
  image: LOGO,
  offers: {
    "@type": "Offer",
    priceCurrency: "MXN",
    price: "49.00",
    priceValidUntil: "2026-12-31",
    availability: "https://schema.org/InStock",
    url: CANONICAL,
    description: "Precio base $49 MXN + IVA (16%). Total a pagar $56.84 MXN.",
  },
};

export default function FirmaSimpleCobreLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(productSchema) }}
      />
      {children}
    </>
  );
}
