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

  // Documentation pages from contentlayer (excluye páginas unlisted: solo por enlace)
  const docEntries: MetadataRoute.Sitemap = allDocs
    .filter((doc) => !doc.unlisted)
    .map((doc) => ({
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
    // Chronos - AI Agent Platform
    {
      url: `${baseUrl}/chronos`,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 0.95,
    },
    {
      url: `${baseUrl}/chronos/comparacion`,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 0.9,
    },
    // Platform pages
    {
      url: `${baseUrl}/plataforma/verificacion-identidad`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.9,
    },
    {
      url: `${baseUrl}/firma-electronica`, // canónica (/plataforma/firma-electronica declara canonical a esta URL)
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.9,
    },
    {
      url: `${baseUrl}/firma-digital-marca-blanca`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.85,
    },
    {
      url: `${baseUrl}/plataforma/gestion-evidencia`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/ocr-documental`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.85,
    },
    {
      url: `${baseUrl}/guia-captura-kyc`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.7,
    },
    // Signa - Firma Electrónica
    {
      url: `${baseUrl}/signa`,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 0.95,
    },
    {
      url: `${baseUrl}/signa/comparacion`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.85,
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
    {
      url: `${baseUrl}/soluciones/recursos-humanos`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.85,
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
    {
      url: `${baseUrl}/cumplimiento/actividades-vulnerables`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/listas-de-riesgo-pld-aml`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.9,
    },
    // Industry landing pages
    {
      url: `${baseUrl}/bancos`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.85,
    },
    {
      url: `${baseUrl}/financieras`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.85,
    },
    {
      url: `${baseUrl}/inmobiliarias`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/soluciones/kyc-igaming-mexico`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/salud`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.85,
    },
    {
      url: `${baseUrl}/salud/hospitales`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.75,
    },
    {
      url: `${baseUrl}/salud/aseguradoras`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.75,
    },
    {
      url: `${baseUrl}/salud/farmacias`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.75,
    },
    {
      url: `${baseUrl}/salud/telemedicina`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.75,
    },
    {
      url: `${baseUrl}/salud/laboratorios`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.75,
    },
    {
      url: `${baseUrl}/salud/software-clinico`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.75,
    },
    {
      url: `${baseUrl}/kyc-inmobiliario-lfpiorpi`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.85,
    },
    {
      url: `${baseUrl}/webinar/firma-digital-mexico-nom-151`,
      lastModified: new Date("2026-11-05"),
      changeFrequency: "weekly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/lfpiorpi-2027`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.85,
    },
    {
      url: `${baseUrl}/kyc-automotriz-lfpiorpi`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.85,
    },
    {
      url: `${baseUrl}/autoservicio`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/soporte/autoservicio`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.5,
    },
    // AUD-SEO-01.5: páginas indexables autocanónicas que faltaban en el sitemap
    {
      url: `${baseUrl}/firma-electronica-biometrica`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: `${baseUrl}/firma-electronica-efirma`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: `${baseUrl}/firma-electronica-kyc`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: `${baseUrl}/firma-electronica-nom-151`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: `${baseUrl}/firma-electronica-simple`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: `${baseUrl}/firma-certificada-sello-tiempo`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: `${baseUrl}/consultas-oficiales`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: `${baseUrl}/validar-ine`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: `${baseUrl}/validar-curp-renapo`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: `${baseUrl}/recursos`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: `${baseUrl}/recursos/serie-lfpiorpi`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: `${baseUrl}/recursos/serie-lfpiorpi/a-quien-aplica`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: `${baseUrl}/recursos/serie-lfpiorpi/umbrales-montos`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: `${baseUrl}/recursos/serie-lfpiorpi/obligaciones`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: `${baseUrl}/recursos/serie-lfpiorpi/sanciones`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: `${baseUrl}/recursos/serie-lfpiorpi/expediente-digital`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: `${baseUrl}/recursos/banca-fintech-neobancos`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: `${baseUrl}/recursos/cumplir-ya-no-es-suficiente`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: `${baseUrl}/recursos/lfpiorpi-inmobiliario-automotriz`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: `${baseUrl}/recursos/pagare-digital`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.7,
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
