export type DemoTrackingId = "firma_nom151" | "kyc_inmobiliario";

export interface DemoCard {
  type: "product" | "industry";
  badge: string;
  title: string;
  description: string;
  bullets: string[];
  href: string;
  ctaLabel: string;
  priceNote?: string;
  trackingId: DemoTrackingId;
}

// Fuente única de datos para las tarjetas de "demos por solución y sector".
// Agregar un nuevo sector/producto solo requiere un nuevo objeto aquí.
export const demoCards: DemoCard[] = [
  {
    type: "product",
    badge: "Demo de producto",
    title: "Firma Digital NOM-151",
    description:
      "Conoce el proceso de carga, firma y generación de evidencia con sello de tiempo certificado.",
    bullets: [
      "Firma de documentos",
      "Integridad mediante hash",
      "Sello de tiempo",
      "Expediente para auditoría",
    ],
    href: "/firma-nom151-demo-autoservicio",
    ctaLabel: "Ver demo de Firma NOM-151",
    priceNote: "Plan desde $99 + IVA",
    trackingId: "firma_nom151",
  },
  {
    type: "industry",
    badge: "Demo por sector",
    title: "KYC para inmobiliarias",
    description:
      "Conoce cómo verificar compradores, vendedores, arrendatarios y participantes de una operación inmobiliaria.",
    bullets: [
      "Documento y biometría",
      "Prueba de vida",
      "Consulta de listas",
      "Expediente de cumplimiento",
      "Firma Digital NOM-151",
    ],
    href: "/kyc-inmobiliario-lfpiorpi",
    ctaLabel: "Ver demo KYC inmobiliario",
    trackingId: "kyc_inmobiliario",
  },
];
