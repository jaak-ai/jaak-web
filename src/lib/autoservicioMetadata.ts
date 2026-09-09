import type { Metadata } from "next";

/**
 * Construye el `metadata` de las páginas de la familia Autoservicio
 * (`/autoservicio`, `/autoservicio-enterprise`, …). Centraliza la estructura
 * compartida de OpenGraph/Twitter/alternates para no repetirla por página
 * (solo cambian los textos y la ruta canónica).
 */
const OG_IMAGE = "/images/logos/jaak-logo-azul.png";

export interface AutoservicioMetadataInput {
  /** <title> de la página */
  title: string;
  /** meta description */
  description: string;
  /** ruta canónica y url de OpenGraph (p.ej. "/autoservicio-enterprise") */
  path: string;
  /** título para OpenGraph y Twitter (misma cadena en ambos) */
  socialTitle: string;
  /** descripción para OpenGraph */
  ogDescription: string;
  /** descripción para Twitter (suele ser más corta que la de OG) */
  twitterDescription: string;
  /** texto alternativo de la imagen de OpenGraph */
  imageAlt: string;
}

export function buildAutoservicioMetadata(input: AutoservicioMetadataInput): Metadata {
  return {
    title: input.title,
    description: input.description,
    alternates: { canonical: input.path },
    openGraph: {
      type: "website",
      locale: "es_MX",
      url: input.path,
      siteName: "JAAK",
      title: input.socialTitle,
      description: input.ogDescription,
      images: [{ url: OG_IMAGE, width: 800, height: 400, alt: input.imageAlt }],
    },
    twitter: {
      card: "summary_large_image",
      title: input.socialTitle,
      description: input.twitterDescription,
      images: [OG_IMAGE],
      creator: "@jaak_ai",
      site: "@jaak_ai",
    },
  };
}
