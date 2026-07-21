export interface BlogCta {
  label: string;
  href: string;
  destination: "firma_nom151" | "kyc_inmobiliario" | "contacto";
}

const CTA_BY_DESTINATION: Record<BlogCta["destination"], BlogCta> = {
  firma_nom151: {
    label: "Ver demo de Firma Digital NOM-151",
    href: "/firma-nom151-demo-autoservicio",
    destination: "firma_nom151",
  },
  kyc_inmobiliario: {
    label: "Ver demo KYC para inmobiliarias",
    href: "/kyc-inmobiliario-lfpiorpi",
    destination: "kyc_inmobiliario",
  },
  contacto: {
    label: "Hablar con un especialista",
    href: "/contacto",
    destination: "contacto",
  },
};

// Mapa de categoría/tema -> CTA contextual. Evita condicionales duplicados
// por artículo: cada post nuevo hereda el CTA correcto según su categoría o
// palabras clave del slug (inmobiliario/LFPIORPI, NOM-151/Firma Electrónica).
export function getBlogCta(post: { slug: string; category: string }): BlogCta {
  const haystack = `${post.slug} ${post.category}`.toLowerCase();

  if (haystack.includes("inmobiliari") || haystack.includes("lfpiorpi")) {
    return CTA_BY_DESTINATION.kyc_inmobiliario;
  }
  if (
    post.category === "Firma Electrónica" ||
    haystack.includes("nom-151") ||
    haystack.includes("nom151")
  ) {
    return CTA_BY_DESTINATION.firma_nom151;
  }
  return CTA_BY_DESTINATION.contacto;
}
