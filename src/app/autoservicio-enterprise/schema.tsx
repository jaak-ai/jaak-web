// Structured Data (JSON-LD) para SEO de /autoservicio-enterprise (AUTO-8).
// Reusa el builder de productos de /autoservicio (fuente única) apuntando la URL
// al segmento enterprise, y añade Breadcrumb + FAQPage propios.
import { buildAutoservicioProductsSchema } from "../autoservicio/schema";
import type { Categoria, Producto } from "@/data/autoservicio-catalogo";

const BASE = "https://jaak.ai";

// Breadcrumb: Inicio › Autoservicio Enterprise
export const enterpriseBreadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Inicio", item: BASE },
    { "@type": "ListItem", position: 2, name: "Autoservicio Enterprise", item: `${BASE}/autoservicio-enterprise` },
  ],
};

// Preguntas frecuentes de Enterprise (mismas que renderiza la sección FAQ, para
// que el dato estructurado coincida con lo visible — requisito de Google).
export const ENTERPRISE_FAQ: { q: string; a: string }[] = [
  {
    q: "¿En qué se diferencia Enterprise del autoservicio estándar?",
    a: "Es el mismo catálogo de productos (KYC, firma electrónica, validaciones, OCR) con un empaque distinto: mayor volumen incluido, pago anual y una tarifa de activación única por empresa. Ideal para operaciones con consumo alto y previsible.",
  },
  {
    q: "¿Cómo es el pago en Enterprise?",
    a: "Los paquetes Enterprise se contratan con pago anual. El esquema mensual estará disponible más adelante.",
  },
  {
    q: "¿Puedo combinar productos en una sola compra?",
    a: "Sí. Arma tu paquete combinando los productos que necesites y págalo en una sola operación segura con Stripe. La activación es inmediata.",
  },
  {
    q: "¿Qué pasa si necesito un volumen aún mayor o un esquema a la medida?",
    a: "Escríbenos a ventas: diseñamos planes de alianza y volúmenes especiales fuera de los paquetes publicados.",
  },
];

export const enterpriseFaqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: ENTERPRISE_FAQ.map((f) => ({
    "@type": "Question",
    name: f.q,
    acceptedAnswer: { "@type": "Answer", text: f.a },
  })),
};

export function buildEnterpriseProductsSchema(productos: Producto[], categorias: Categoria[]) {
  return buildAutoservicioProductsSchema(productos, categorias, {
    name: "Catálogo Enterprise JAAK",
    path: "/autoservicio-enterprise",
  });
}
