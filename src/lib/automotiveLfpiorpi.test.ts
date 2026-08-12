import { describe, it, expect } from "vitest";
import { automotiveLfpiorpi2026, formatMxn, formatUma } from "./automotiveLfpiorpi";

describe("automotiveLfpiorpi2026", () => {
  it("los montos en pesos son consistentes con UMA diaria × UMA del umbral", () => {
    const { umaDaily, identificationUma, noticeUma, cashRestrictionUma, identificationMxn, noticeMxn, cashRestrictionMxn } =
      automotiveLfpiorpi2026;
    expect(Math.round(umaDaily * identificationUma * 100) / 100).toBeCloseTo(identificationMxn, 1);
    expect(Math.round(umaDaily * noticeUma * 100) / 100).toBeCloseTo(noticeMxn, 1);
    expect(Math.round(umaDaily * cashRestrictionUma * 100) / 100).toBeCloseTo(cashRestrictionMxn, 1);
  });

  it("identificación y restricción de efectivo comparten el mismo umbral en UMA", () => {
    expect(automotiveLfpiorpi2026.identificationUma).toBe(automotiveLfpiorpi2026.cashRestrictionUma);
  });

  it("aviso equivale al doble del umbral de identificación", () => {
    expect(automotiveLfpiorpi2026.noticeUma).toBe(automotiveLfpiorpi2026.identificationUma * 2);
  });
});

describe("formatMxn", () => {
  it("formatea con símbolo de peso y dos decimales", () => {
    expect(formatMxn(376565.1)).toBe("$376,565.10");
  });
});

describe("formatUma", () => {
  it("formatea con separador de miles y sufijo UMA", () => {
    expect(formatUma(3210)).toBe("3,210 UMA");
  });
});
