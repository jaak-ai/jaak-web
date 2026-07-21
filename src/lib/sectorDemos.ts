// Demo general de KYC, sin especificar sector.
export const KYC_GENERAL_DEMO = {
  title: "KYC",
  description: "Verificación biométrica, prueba de vida y documento oficial para cualquier tipo de operación.",
  href: "/kyc-demo-autoservicio",
  trackingId: "kyc_general",
};

export interface SectorDemo {
  sector: string;
  href: string;
  trackingId: string;
}

// Demos de KYC por sector. Agregar un nuevo sector solo requiere un
// objeto aquí; hoy solo existe la demo del sector inmobiliario.
export const sectorDemos: SectorDemo[] = [
  { sector: "Inmobiliarias", href: "/kyc-inmobiliario-lfpiorpi", trackingId: "kyc_inmobiliario" },
];
