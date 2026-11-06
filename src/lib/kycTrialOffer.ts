// Oferta de la landing /kyc-demo-autoservicio (AUD-03).
//
// Fuente única: el catálogo de Autoservicio (el mismo que usa /autoservicio, con el
// catálogo estático como respaldo). La landing NO tiene precios ni cantidades propias:
// si el paquete Cobre de KYC no está en el catálogo, no se presenta una oferta de compra.
// `Paquete.precio` del catálogo es MXN SIN IVA; el IVA se calcula con la constante del
// catálogo. Los importes finales del cobro se validan en AUD-06.13 / AUD-04.

import { IVA, type Producto } from "@/data/autoservicio-catalogo";
import { FAQ_ACCESO_API_SDK } from "@/config/commercial-copy";

export interface KycTrialOffer {
  nombre: string;
  cantidad: number;
  unidad: string;
  subtotal: number;
  iva: number;
  total: number;
}

const round2 = (n: number) => Math.round(n * 100) / 100;

/** Formato MXN estable en servidor y cliente (sin Intl, para evitar diferencias de hidratación). */
export function formatMxn(n: number): string {
  const [entero, decimales] = n.toFixed(2).split(".");
  const conMiles = entero.replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  return `$${conMiles}.${decimales} MXN`;
}

export function buildKycTrialOffer(productos: Producto[]): KycTrialOffer | null {
  const kyc = productos.find((p) => p.id === "kyc");
  const cobre = kyc?.paquetes.find((q) => q.id === "cobre");
  if (!kyc || !cobre || !(cobre.cantidad > 0) || !(cobre.precio > 0)) return null;
  const subtotal = round2(cobre.precio);
  const iva = round2(subtotal * IVA);
  return {
    nombre: "Cobre KYC · Paquete de prueba",
    cantidad: cobre.cantidad,
    unidad: kyc.unidad,
    subtotal,
    iva,
    total: round2(subtotal + iva),
  };
}

export interface FaqItem {
  q: string;
  a: string;
}

/** FAQ visible y JSON-LD de la landing: una sola fuente para que no diverjan. */
export function buildKycTrialFaq(offer: KycTrialOffer | null): FaqItem[] {
  const cantidad = offer ? `${offer.cantidad} verificaciones` : "las verificaciones indicadas en el catálogo vigente";
  return [
    {
      q: "¿Qué incluye el paquete Cobre KYC?",
      a: `Incluye ${cantidad} de identidad con captura de documento, biometría facial, prueba de vida y expediente digital consultable, para usar desde la plataforma Web de JAAK. No incluye API, SDK, White Label estándar ni acceso automático a sandbox.`,
    },
    {
      q: "¿Cuántas verificaciones incluye?",
      a: offer
        ? `El paquete Cobre KYC incluye ${offer.cantidad} verificaciones, según el catálogo vigente de JAAK Autoservicio.`
        : "La cantidad de verificaciones del paquete se indica en el catálogo vigente de JAAK Autoservicio.",
    },
    {
      q: "¿El precio publicado incluye IVA?",
      a: offer
        ? `No. ${formatMxn(offer.subtotal)} es el precio antes de IVA. Con el IVA del 16% (${formatMxn(offer.iva)}), el total es ${formatMxn(offer.total)}. El importe final se confirma en el proceso de compra.`
        : "Los precios de Autoservicio se muestran en MXN antes de IVA. El importe final se confirma en el proceso de compra.",
    },
    {
      q: "¿Durante cuánto tiempo puedo utilizarlo?",
      a: "Los paquetes de Autoservicio tienen vigencia de un año, conforme a las condiciones del paquete.",
    },
    {
      q: "¿Cómo se utiliza desde JAAK Autoservicio?",
      a: "Se utiliza desde la plataforma Web de JAAK: creas una sesión de verificación, la persona captura su documento y realiza la biometría facial con prueba de vida, y consultas el resultado y el expediente en la plataforma.",
    },
    {
      q: "¿Incluye API o SDK?",
      a: `No. ${FAQ_ACCESO_API_SDK.answer} El acceso a un ambiente de pruebas (sandbox) no es automático: su disponibilidad se evalúa con un especialista comercial.`,
    },
    {
      q: "¿Qué sucede después de registrarme o comprar?",
      a: "Al enviar el formulario, tus datos llegan al equipo de JAAK y te llevamos a la página de compra del paquete en la plataforma de JAAK, donde creas tu cuenta y completas el pago. El acceso y el saldo se confirman en la plataforma al terminar el proceso.",
    },
    {
      q: "¿Cómo puedo solicitar ayuda?",
      a: "Antes de comprar, escríbenos a ventas@jaak.ai o por WhatsApp. Si ya compraste un paquete, el soporte básico de Autoservicio atiende de lunes a viernes de 9:00 a 18:00 h (horario CDMX) desde jaak.ai/soporte/autoservicio.",
    },
    {
      q: "¿Puedo ver la demo completa después de registrarme?",
      a: "Sí. Al enviar el formulario, el video se desbloquea por completo en este navegador y puedes ver el flujo íntegro de la sesión KYC.",
    },
  ];
}
