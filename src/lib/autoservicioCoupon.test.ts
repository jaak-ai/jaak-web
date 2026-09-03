import { describe, it, expect } from "vitest";
import { computeCartTotals } from "./autoservicioCoupon";

// IVA = 0.16 (src/data/autoservicio-catalogo).
describe("computeCartTotals (AUTO-30: descuento pre-IVA)", () => {
  it("sin cupón: IVA sobre el subtotal completo", () => {
    expect(computeCartTotals(1000, null)).toEqual({
      subtotal: 1000,
      descuento: 0,
      iva: 160,
      total: 1160,
    });
  });

  it("percent: descuenta el % del SUBTOTAL y recalcula IVA sobre la base neta", () => {
    // 20% de 1000 = 200 → base 800 → IVA 128 → total 928
    expect(computeCartTotals(1000, { type: "percent", value: 20 })).toEqual({
      subtotal: 1000,
      descuento: 200,
      iva: 128,
      total: 928,
    });
  });

  it("fixed: descuenta pesos del SUBTOTAL (no del total con IVA)", () => {
    // 500 fijo sobre 1000 → base 500 → IVA 80 → total 580
    // (el bug previo restaba del total con IVA → descontaba de más)
    expect(computeCartTotals(1000, { type: "fixed", value: 500 })).toEqual({
      subtotal: 1000,
      descuento: 500,
      iva: 80,
      total: 580,
    });
  });

  it("fixed con descuento === subtotal: base 0 → IVA 0 → total 0", () => {
    expect(computeCartTotals(1000, { type: "fixed", value: 1000 })).toEqual({
      subtotal: 1000,
      descuento: 1000,
      iva: 0,
      total: 0,
    });
  });

  it("fixed mayor al subtotal: se acota al subtotal (nunca base negativa)", () => {
    expect(computeCartTotals(300, { type: "fixed", value: 999 })).toEqual({
      subtotal: 300,
      descuento: 300,
      iva: 0,
      total: 0,
    });
  });

  it("redondeo a entero del IVA sobre la base descontada", () => {
    // 10% de 233 = 23.3 → round 23 → base 210 → IVA 33.6 → round 34 → total 244
    expect(computeCartTotals(233, { type: "percent", value: 10 })).toEqual({
      subtotal: 233,
      descuento: 23,
      iva: 34,
      total: 244,
    });
  });
});
