const description =
  "Conoce cómo funciona la verificación de identidad digital en México, desde la validación de INE y CURP hasta la biometría facial y el expediente digital.";

export const digitalIdentityArticle = {
  title: "Verificación de identidad digital en México: qué es, cómo funciona y qué debe incluir",
  seoTitle: "Verificación de identidad digital en México | JAAK",
  description,
  excerpt: description,
  category: "KYC",
  readTime: "12 min",
  slug: "verificacion-identidad-digital-mexico",
  authorName: "JAAK",
  reviewerName: "JAAK",
  date: "6 de noviembre, 2026",
  dateISO: "2026-11-06",
  // PENDIENTE: portada final (1920 × 1080). Al recibirla, copiarla a
  // /public/images/blog/verificacion-identidad-digital-mexico.png y descomentar:
  // image: "/images/blog/verificacion-identidad-digital-mexico.png",
  // imageDimensions: { width: 1920, height: 1080 },
  imageAlt:
    "Persona utilizando un teléfono móvil durante un proceso de verificación de identidad digital con biometría facial",
} as {
  title: string;
  seoTitle: string;
  description: string;
  excerpt: string;
  category: string;
  readTime: string;
  slug: string;
  authorName: string;
  reviewerName: string;
  date: string;
  dateISO: string;
  image?: string;
  imageDimensions?: { width: number; height: number };
  imageAlt: string;
};
