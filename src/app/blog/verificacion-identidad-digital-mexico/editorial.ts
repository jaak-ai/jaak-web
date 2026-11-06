import type { Metadata } from "next";
import { digitalIdentityArticle as article } from "@/lib/blog/digitalIdentityArticle";

export { digitalIdentityArticle as article } from "@/lib/blog/digitalIdentityArticle";

const url = `https://jaak.ai/blog/${article.slug}`;
const images = article.image
  ? [{ url: article.image, ...article.imageDimensions, alt: article.imageAlt }]
  : undefined;

export const articleMetadata: Metadata = {
  title: { absolute: article.seoTitle },
  description: article.description,
  authors: [{ name: article.authorName }],
  keywords: [
    "verificación de identidad digital México",
    "verificación de identidad en línea",
    "validación de identidad en México",
    "verificación biométrica",
    "validación de INE",
    "CURP RENAPO",
    "onboarding digital",
    "proveedor KYC",
  ],
  alternates: { canonical: url },
  robots: { index: true, follow: true },
  openGraph: {
    title: article.seoTitle,
    description: article.description,
    type: "article",
    url,
    locale: "es_MX",
    siteName: "JAAK",
    authors: [article.authorName],
    publishedTime: article.dateISO,
    images,
  },
  twitter: { card: "summary_large_image", title: article.seoTitle, description: article.description, images },
};

export const articleSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Article",
      headline: article.title,
      datePublished: article.dateISO,
      author: { "@type": "Organization", "@id": "https://jaak.ai/#organization", name: article.authorName, url: "https://jaak.ai" },
      description: article.description,
      inLanguage: "es-MX",
      ...(article.image ? { image: `https://jaak.ai${article.image}` } : {}),
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
