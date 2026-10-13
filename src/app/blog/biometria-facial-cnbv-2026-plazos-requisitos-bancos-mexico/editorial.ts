import type { Metadata } from "next";
import { cnbvFacialArticle as article } from "@/lib/blog/cnbvFacialArticle";

export { cnbvFacialArticle as article } from "@/lib/blog/cnbvFacialArticle";
const url = `https://jaak.ai/blog/${article.slug}`;

export const articleMetadata: Metadata = {
  title: { absolute: article.seoTitle },
  description: article.description,
  authors: [{ name: article.authorName }],
  keywords: ["biometría facial", "CNBV 2026", "Anexo 71", "Circular Única de Bancos", "prueba de vida", "OCR", "KYC"],
  alternates: { canonical: url },
  robots: { index: true, follow: true },
  openGraph: { title: article.seoTitle, description: article.description, type: "article", url, locale: "es_MX", siteName: "JAAK", authors: [article.authorName], publishedTime: article.dateISO, images: [{ url: article.image, ...article.imageDimensions, alt: article.imageAlt }] },
  twitter: { card: "summary_large_image", title: article.seoTitle, description: article.description, images: [article.image] },
};

export const articleSchema = {
  "@context": "https://schema.org",
  "@graph": [
    { "@type": "Article", headline: article.title, description: article.description, inLanguage: "es-MX", datePublished: article.dateISO, image: `https://jaak.ai${article.image}`, author: { "@type": "Organization", "@id": "https://jaak.ai/#organization", name: article.authorName, url: "https://jaak.ai" }, mainEntityOfPage: { "@type": "WebPage", "@id": url }, publisher: { "@id": "https://jaak.ai/#organization" } },
    { "@type": "BreadcrumbList", itemListElement: [
      { name: "Inicio", item: "https://jaak.ai" },
      { name: "Blog", item: "https://jaak.ai/blog" },
      { name: article.title, item: url },
    ].map((item, index) => ({ "@type": "ListItem", position: index + 1, ...item })) },
  ],
};
