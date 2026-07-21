// Número de WhatsApp oficial de JAAK, reutilizado en todo el sitio.
// Mismo número que ya usan las landings de Firma NOM-151 y KYC inmobiliario.
export const WHATSAPP_NUMBER = "5215535091788";

export type WhatsAppSource =
  | "header"
  | "hero"
  | "demo_section"
  | "floating_widget"
  | "blog"
  | "footer";

const MESSAGES: Record<WhatsAppSource, string> = {
  header: "Hola, quiero conocer qué solución de JAAK se adapta mejor a mi empresa.",
  hero: "Hola, quiero conocer qué solución de JAAK se adapta mejor a mi empresa.",
  demo_section: "Hola, quiero conocer qué solución de JAAK se adapta mejor a mi empresa.",
  floating_widget: "Hola, quiero conocer qué solución de JAAK se adapta mejor a mi empresa.",
  blog: "Hola, leí un artículo de JAAK y quiero conocer la solución relacionada.",
  footer: "Hola, quiero conocer qué solución de JAAK se adapta mejor a mi empresa.",
};

const PRODUCT_MESSAGES = {
  firma_nom151: "Hola, quiero conocer la demo de Firma Digital NOM-151 de JAAK.",
  kyc_inmobiliario: "Hola, quiero conocer la solución KYC de JAAK para el sector inmobiliario.",
} as const;

export function getWhatsAppUrl(source: WhatsAppSource): string {
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(MESSAGES[source])}`;
}

export function getWhatsAppUrlForProduct(product: keyof typeof PRODUCT_MESSAGES): string {
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(PRODUCT_MESSAGES[product])}`;
}
