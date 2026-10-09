import type { BlogPost } from "../blog";

// Approved editorial data shared by the page and the public blog inventory.
export const identityAiArticle = {
  title: "Inteligencia artificial en la verificación de identidad: aplicaciones, riesgos y límites",
  excerpt: "Conoce cómo se aplica la IA a la verificación de identidad, sus límites ante la suplantación y qué evaluar al elegir una solución para tu empresa.",
  date: "9 de octubre, 2025",
  dateISO: "2025-10-09",
  category: "IA",
  slug: "inteligencia-artificial-verificacion-identidad",
  readTime: "9 min",
  image: "/images/blog/inteligencia-artificial-verificacion-identidad.png",
} satisfies BlogPost;

export const identityAiAuthor = {
  "@type": "Organization",
  "@id": "https://jaak.ai/#organization",
  name: "JAAK",
  url: "https://jaak.ai",
} as const;
