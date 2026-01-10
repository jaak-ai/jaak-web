import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://jaak.ai";
  const now = new Date();

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
    // Resources
    {
      url: `${baseUrl}/cumplimiento`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/documentacion`,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 0.7,
    },
    // Documentation guides
    {
      url: `${baseUrl}/documentacion/guias/inicio-rapido`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.6,
    },
    {
      url: `${baseUrl}/documentacion/guias/flujo-onboarding`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.6,
    },
    {
      url: `${baseUrl}/documentacion/guias/firma-electronica`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.6,
    },
    {
      url: `${baseUrl}/documentacion/guias/verificacion-empresarial`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.6,
    },
    {
      url: `${baseUrl}/documentacion/guias/consultas-pld-aml`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.6,
    },
    {
      url: `${baseUrl}/documentacion/guias/gestion-evidencia`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.6,
    },
    {
      url: `${baseUrl}/blog`,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 0.7,
    },
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
