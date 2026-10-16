import type { Metadata } from "next";

interface InstitutionalArticle {
  slug: string;
  title: string;
  seoTitle: string;
  description: string;
  authorName: string;
  dateISO: string;
  image: string;
  imageAlt: string;
  imageDimensions: { width: number; height: number };
}

/** Shared SEO for published articles with a confirmed institutional author and cover. */
export function createInstitutionalArticleSeo(article: InstitutionalArticle, keywords: string[]) {
  const site = "https://jaak.ai";
  const url = `${site}/blog/${article.slug}`;
  const socialText = { title: article.seoTitle, description: article.description };
  const organization = { "@id": `${site}/#organization` };
  const breadcrumbs = [
    { name: "Inicio", item: site },
    { name: "Blog", item: `${site}/blog` },
    { name: article.title, item: url },
  ];

  const metadata: Metadata = {
    title: { absolute: article.seoTitle },
    description: article.description,
    authors: [{ name: article.authorName }],
    keywords,
    alternates: { canonical: url },
    robots: { index: true, follow: true },
    openGraph: { ...socialText, type: "article", url, locale: "es_MX", siteName: "JAAK", authors: [article.authorName], publishedTime: article.dateISO, images: [{ url: article.image, ...article.imageDimensions, alt: article.imageAlt }] },
    twitter: { card: "summary_large_image", ...socialText, images: [article.image] },
  };

  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Article",
        mainEntityOfPage: { "@type": "WebPage", "@id": url },
        headline: article.title,
        image: `${site}${article.image}`,
        datePublished: article.dateISO,
        description: article.description,
        inLanguage: "es-MX",
        author: { ...organization, "@type": "Organization", name: article.authorName, url: site },
        publisher: organization,
      },
      {
        "@type": "BreadcrumbList",
        itemListElement: breadcrumbs.map((crumb, index) => ({
          "@type": "ListItem", position: index + 1, ...crumb,
        })),
      },
    ],
  };
  return { metadata, schema };
}
