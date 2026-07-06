import { describe, it, expect } from "vitest";
import { deriveLabelTier, buildPricingIndex, type PricingRow } from "./pricing";

describe("deriveLabelTier", () => {
  it("extrae etiqueta y tier con separador de tabs (tier + cantidad juntos)", () => {
    expect(deriveLabelTier("Consulta INE\tPlatino 500")).toEqual({
      label: "Consulta INE",
      tier: "platino",
    });
  });

  it("maneja tier y cantidad separados por tabs", () => {
    expect(deriveLabelTier("Consulta CURP\tCobre\t10")).toEqual({
      label: "Consulta CURP",
      tier: "cobre",
    });
  });

  it("conserva el '+' de las firmas combinadas (Bio/KYC)", () => {
    expect(deriveLabelTier("Firma NOM151 + BIO Bronce 50")).toEqual({
      label: "Firma NOM151 + BIO",
      tier: "bronce",
    });
    expect(deriveLabelTier("Firma NOM151 + KYC Oro 250")).toEqual({
      label: "Firma NOM151 + KYC",
      tier: "oro",
    });
  });

  it("resuelve etiqueta aunque no traiga cantidad", () => {
    expect(deriveLabelTier("Listas Negras\tOro")).toEqual({
      label: "Listas Negras",
      tier: "oro",
    });
  });

  it("devuelve null si no hay keyword de tier (junk SKU)", () => {
    expect(deriveLabelTier("Sellos digitales")).toBeNull();
  });

  it("devuelve null con descripción vacía", () => {
    expect(deriveLabelTier("")).toBeNull();
  });
});

describe("buildPricingIndex", () => {
  // Filas que imitan la colisión real de prod: INE/CURP/Listas comparten el
  // mismo productKey `blacklist`; los dos OCR comparten `document`. Solo la
  // etiqueta del `description` los distingue.
  const rows: PricingRow[] = [
    { id: "ine_plata", productKey: "blacklist", productName: "Black List", description: "Consulta INE\tPlata 100", quota: 100, price: 232 },
    { id: "curp_plata", productKey: "blacklist", productName: "Black List", description: "Consulta CURP\tPlata\t100", quota: 100, price: 232 },
    { id: "listas_plata", productKey: "blacklist", productName: "Black List", description: "Listas Negras\tPlata", quota: 100, price: 464 },
    { id: "ocr_int_cobre", productKey: "document", productName: "Document", description: "OCR Inteligente\tCobre\t210 tokens", quota: 210, price: 100 },
    { id: "ocr_id_cobre", productKey: "document", productName: "Document", description: "OCR para Identificación Oficial\tCobre\t210 tokens", quota: 210, price: 100 },
    { id: "simple_cobre", productKey: "signa_simple", productName: "Firma Simple", description: "Firma Simple Cobre 10", quota: 10, price: 57 },
    { id: "bio_oro", productKey: "signa_advanced_biometric", productName: "Firma Avanzada + Biometria", description: "Firma NOM151 + BIO Oro 250", quota: 250, price: 3132 },
    { id: "kyc_firma_oro", productKey: "signa_biometric", productName: "Firma con Biometria", description: "Firma NOM151 + KYC Oro 250", quota: 250, price: 5481 },
    { id: "junk", productKey: "signa_timestamp", productName: "Sello de Tiempo", description: "Sellos digitales", quota: 5, price: 29 },
  ];
  const index = buildPricingIndex(rows);

  it("desambigua la colisión de `blacklist` por etiqueta", () => {
    expect(index.ine?.plata).toBe("ine_plata");
    expect(index.curp?.plata).toBe("curp_plata");
    expect(index["listas-negras"]?.plata).toBe("listas_plata");
  });

  it("desambigua la colisión de `document` (los dos OCR) por etiqueta", () => {
    expect(index["ocr-inteligente"]?.cobre).toBe("ocr_int_cobre");
    expect(index["ocr-id"]?.cobre).toBe("ocr_id_cobre");
  });

  it("mapea correctamente las firmas combinadas (Bio vs KYC, sin cruzar)", () => {
    expect(index["firma-simple"]?.cobre).toBe("simple_cobre");
    expect(index["firma-nom151-bio"]?.oro).toBe("bio_oro");
    expect(index["firma-nom151-kyc"]?.oro).toBe("kyc_firma_oro");
  });

  it("ignora filas sin tier (junk SKUs no entran a ningún producto)", () => {
    const allIds = Object.values(index).flatMap((t) => Object.values(t));
    expect(allIds).not.toContain("junk");
  });

  it("no inventa KYC suelto cuando no hay fila de pricing", () => {
    expect(index.kyc).toBeUndefined();
  });

  it("con lista vacía devuelve índice vacío", () => {
    expect(buildPricingIndex([])).toEqual({});
  });
});
