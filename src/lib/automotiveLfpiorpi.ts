// Fuente única de los montos LFPIORPI para el sector automotriz (Art. 17
// Fr. VIII). Todo componente de /kyc-automotriz-lfpiorpi debe leer de aquí
// en lugar de repetir cifras — así una actualización de UMA solo se hace
// en un lugar.
export const automotiveLfpiorpi2026 = {
  umaDaily: 117.31,
  identificationUma: 3210,
  noticeUma: 6420,
  cashRestrictionUma: 3210,
  identificationMxn: 376565.1,
  noticeMxn: 753130.2,
  cashRestrictionMxn: 376565.1,
  effectiveUmaFrom: "2026-02-01",
  legalReviewDate: "2026-08-12",
} as const;

export function formatMxn(value: number): string {
  return value.toLocaleString("es-MX", {
    style: "currency",
    currency: "MXN",
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  });
}

export function formatUma(value: number): string {
  return `${value.toLocaleString("es-MX")} UMA`;
}
