// Fuente única de datos verificables de JAAK. No añadir cifras sin respaldo.

export const IBETA = "iBeta Nivel 1" as const;

export const CERTIFICACIONES = [
  "ISO 27001",
  "ISO 9001",
  "iBeta PAD Nivel 1",
  "NIST FRVT",
  "IQNet",
  "Hecho en México",
] as const; // 6 reales

export const NUM_CERTIFICACIONES: number = CERTIFICACIONES.length; // 6

export const STATS = {
  precisionBiometrica: "99%",
  verificacionBiometrica: "< 5 s",
  procesoKyc: "< 30 s",
  disponibilidad: "99.9%",
  verificacionesAcumuladas: "+50M",
  empresasReguladas: "+50",
  clientesEmpresariales: "+200",
  empresasConfian: "+1,000",
} as const;

export const RETENCION = {
  general: "5 años",
  reforzada: "10 años",
} as const; // plazos legales LFPIORPI

export type Certificacion = (typeof CERTIFICACIONES)[number];
export type StatKey = keyof typeof STATS;
export type RetencionKey = keyof typeof RETENCION;
