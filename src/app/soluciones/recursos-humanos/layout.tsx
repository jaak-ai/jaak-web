import type { ReactNode } from "react";

const CANONICAL_URL = "https://jaak.ai/soluciones/recursos-humanos";
const LOGO = "https://jaak.ai/images/logos/jaak-logo-azul.png";
const VIDEO_ID = "q0Iliu1wK-g";

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Inicio", item: "https://jaak.ai" },
    { "@type": "ListItem", position: 2, name: "Soluciones", item: "https://jaak.ai/soluciones" },
    { "@type": "ListItem", position: 3, name: "Recursos Humanos", item: CANONICAL_URL },
  ],
};

const webPageSchema = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  name: "Firma Digital para Recursos Humanos",
  description:
    "Digitaliza contratos, anexos y documentación laboral con firma digital, evidencia trazable, sellos de tiempo e integración a tus procesos de Recursos Humanos.",
  url: CANONICAL_URL,
  inLanguage: "es-MX",
  isPartOf: { "@type": "WebSite", name: "JAAK", url: "https://jaak.ai" },
};

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "JAAK",
  url: "https://jaak.ai",
  logo: LOGO,
  description:
    "JAAK es una RegTech mexicana de identidad digital, KYC biométrico y firma electrónica NOM-151, con tecnología hecha en México.",
  sameAs: ["https://www.linkedin.com/company/jaak-ai"],
  address: { "@type": "PostalAddress", addressCountry: "MX" },
};

const videoSchema = {
  "@context": "https://schema.org",
  "@type": "VideoObject",
  name: "Del documento al expediente digital",
  description:
    "Flujo general de la plataforma de firma digital de JAAK aplicado a documentación de Recursos Humanos: carga del documento, firma, evidencia y expediente digital.",
  thumbnailUrl: `https://i.ytimg.com/vi/${VIDEO_ID}/maxresdefault.jpg`,
  uploadDate: "2025-01-01T00:00:00-06:00",
  contentUrl: `https://www.youtube.com/watch?v=${VIDEO_ID}`,
  embedUrl: `https://www.youtube.com/embed/${VIDEO_ID}`,
  publisher: {
    "@type": "Organization",
    name: "JAAK",
    logo: { "@type": "ImageObject", url: LOGO },
  },
};

export default function RecursosHumanosLayout({ children }: { children: ReactNode }) {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify([breadcrumbSchema, webPageSchema, organizationSchema, videoSchema]),
        }}
      />
      {children}
    </>
  );
}
