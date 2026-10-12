import type { Metadata } from "next";
import { facialRecognitionArticle as article } from "@/lib/blog/facialRecognitionArticle";

export { article };

const url = `https://jaak.ai/blog/${article.slug}`;

export const articleMetadata: Metadata = {
  title: { absolute: article.seoTitle },
  description: article.description,
  authors: [{ name: article.authorName }],
  keywords: ["biometría facial", "reconocimiento facial", "comparación facial", "prueba de vida", "KYC", "PAD"],
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
      datePublished: article.dateISO,
      author: { "@type": "Organization", "@id": "https://jaak.ai/#organization", name: article.authorName, url: "https://jaak.ai" },
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
