// Structured Data (JSON-LD) para SEO de /autoservicio.
// Se genera desde el catálogo (fuente única) para no duplicar precios/nombres.
import type { Categoria, Producto } from "@/data/autoservicio-catalogo";

const BASE = "https://jaak.ai";

// Imagen por categoría (Google recomienda `image` en Product). Fallback al logo.
const LOGO = "/images/logos/jaak-logo-azul.png";
const categoriaImagen: Record<string, string> = {
  identidad: "/images/kyc-face-scan.jpg",
  firma: "/images/firma-electronica-flujo.jpg",
  validaciones: LOGO,
  "listas-negras": LOGO,
  ocr: LOGO,
};
const productoImagen = (cat: string) => `${BASE}${categoriaImagen[cat] ?? LOGO}`;

// Breadcrumb: Inicio › Autoservicio
export const autoservicioBreadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Inicio", item: BASE },
    { "@type": "ListItem", position: 2, name: "Autoservicio", item: `${BASE}/autoservicio` },
  ],
};

// Catálogo de productos como ItemList → Product + AggregateOffer.
// Precio = el que se muestra en la card (sin IVA, "+ IVA" en el sitio) para que
// el dato estructurado COINCIDA con el precio visible (requisito de Google).
export function buildAutoservicioProductsSchema(productos: Producto[], categorias: Categoria[]) {
  const categoriaNombre = (id: string) => categorias.find((c) => c.id === id)?.nombre ?? "";
  return {
  "@context": "https://schema.org",
  "@type": "ItemList",
  name: "Catálogo de Autoservicio JAAK",
  itemListElement: productos.map((p, i) => {
    const precios = p.paquetes.map((q) => q.precio);
    return {
      "@type": "ListItem",
      position: i + 1,
      item: {
        "@type": "Product",
        name: p.nombre,
        description: p.tagline,
        image: productoImagen(p.categoria),
        category: categoriaNombre(p.categoria),
        brand: { "@type": "Brand", name: "JAAK" },
        offers: {
          "@type": "AggregateOffer",
          priceCurrency: "MXN",
          lowPrice: Math.min(...precios).toFixed(2),
          highPrice: Math.max(...precios).toFixed(2),
          offerCount: p.paquetes.length,
          availability: "https://schema.org/InStock",
          url: `${BASE}/autoservicio`,
        },
      },
    };
  }),
  };
}
