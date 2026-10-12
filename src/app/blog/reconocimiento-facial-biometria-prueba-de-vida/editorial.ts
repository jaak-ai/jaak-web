import type { Metadata } from "next";

export const article = {
  title: "Reconocimiento facial, biometría y prueba de vida: diferencias clave",
  seoTitle: "Reconocimiento facial y prueba de vida: diferencias | JAAK",
  description: "Conoce para qué sirven el reconocimiento facial y la prueba de vida de JAAK, sus diferencias y cómo se complementan en la verificación de identidad.",
  slug: "reconocimiento-facial-biometria-prueba-de-vida",
  authorName: "JAAK",
  reviewerName: "JAAK",
  image: "/images/blog/reconocimiento-facial-biometria-prueba-de-vida.png",
  imageAlt: "Reconocimiento facial, biometría y prueba de vida: diferencias clave — JAAK",
};

const url = `https://jaak.ai/blog/${article.slug}`;

export const articleMetadata: Metadata = {
  title: { absolute: article.seoTitle },
  description: article.description,
  authors: [{ name: article.authorName }],
  keywords: ["biometría facial", "reconocimiento facial", "comparación facial", "prueba de vida", "KYC", "PAD"],
  alternates: { canonical: url },
  robots: { index: false, follow: false },
  openGraph: {
    title: article.seoTitle,
    description: article.description,
    type: "article",
    url,
    locale: "es_MX",
    siteName: "JAAK",
    authors: [article.authorName],
    images: [{ url: article.image, width: 617, height: 324, alt: article.imageAlt }],
  },
  twitter: { card: "summary_large_image", title: article.seoTitle, description: article.description, images: [{ url: article.image, alt: article.imageAlt }] },
};

export const articleSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Article",
      headline: article.title,
      author: { "@type": "Organization", name: article.authorName, url: "https://jaak.ai" },
      description: article.description,
      inLanguage: "es-MX",
      image: `https://jaak.ai${article.image}`,
      mainEntityOfPage: { "@type": "WebPage", "@id": url },
      publisher: { "@id": "https://jaak.ai/#organization" },
    },
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        { name: "Inicio", item: "https://jaak.ai" },
        { name: "Blog", item: "https://jaak.ai/blog" },
        { name: article.title, item: url },
      ].map((item, index) => ({ "@type": "ListItem", position: index + 1, ...item })),
    },
  ],
};
