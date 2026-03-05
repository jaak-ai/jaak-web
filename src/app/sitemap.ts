import { MetadataRoute } from "next";
import { blogPosts } from "@/lib/blog";
import { allDocs } from "contentlayer2/generated";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://jaak.ai";
  const now = new Date();

  const blogEntries: MetadataRoute.Sitemap = blogPosts.map((post) => ({
    url: `${baseUrl}/blog/${post.slug}`,
    lastModified: new Date(post.dateISO),
    changeFrequency: "monthly",
    priority: 0.7,
  }));

  // Documentation pages from contentlayer
  const docEntries: MetadataRoute.Sitemap = allDocs.map((doc) => ({
    url: `${baseUrl}${doc.url}`,
    lastModified: now,
    changeFrequency: "weekly",
    priority: 0.7,
  }));

  return [
    // Homepage
    {
      url: baseUrl,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 1,
    },
    // Platform pages
    {
      url: `${baseUrl}/plataforma/verificacion-identidad`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.9,
    },
    {
      url: `${baseUrl}/plataforma/verificacion-empresarial`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.9,
    },
    {
      url: `${baseUrl}/plataforma/firma-electronica`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.9,
    },
    {
      url: `${baseUrl}/plataforma/gestion-evidencia`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    // Pricing
    {
      url: `${baseUrl}/precios`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.9,
    },
    // Solutions by industry
    {
      url: `${baseUrl}/soluciones/instituciones-financieras`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/soluciones/empresas-reguladas`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/soluciones/operaciones-alto-riesgo`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.7,
    },
    // Solutions by use case
    {
      url: `${baseUrl}/soluciones/onboarding-digital`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/soluciones/firma-contratos`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/soluciones/prevencion-fraude`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    // Compliance
    {
      url: `${baseUrl}/cumplimiento`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/cumplimiento/lfpiorpi`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/cumplimiento/cnbv`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/cumplimiento/uif`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/cumplimiento/nom-151`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    // Documentation pages (dynamic from contentlayer)
    ...docEntries,
    {
      url: `${baseUrl}/blog`,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 0.7,
    },
    ...blogEntries,
    // Company
    {
      url: `${baseUrl}/nosotros`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.6,
    },
    {
      url: `${baseUrl}/contacto`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    // Legal
    {
      url: `${baseUrl}/privacidad`,
      lastModified: now,
      changeFrequency: "yearly",
      priority: 0.3,
    },
    {
      url: `${baseUrl}/terminos`,
      lastModified: now,
      changeFrequency: "yearly",
      priority: 0.3,
    },
    {
      url: `${baseUrl}/cookies`,
      lastModified: now,
      changeFrequency: "yearly",
      priority: 0.3,
    },
    {
      url: `${baseUrl}/seguridad`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.5,
    },
  ];
}
