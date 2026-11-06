import { describe, expect, it } from "vitest";
import { productos } from "@/data/autoservicio-catalogo";
import { buildKycTrialFaq, buildKycTrialOffer, formatMxn } from "./kycTrialOffer";

describe("kycTrialOffer (AUD-03)", () => {
  it("toma el paquete Cobre de KYC del catálogo: 5 verificaciones, $99 antes de IVA", () => {
    const offer = buildKycTrialOffer(productos);
    expect(offer).not.toBeNull();
    expect(offer!.cantidad).toBe(5);
    expect(offer!.subtotal).toBe(99);
  });

  it("desglosa IVA del 16% y total sin errores de redondeo", () => {
    const offer = buildKycTrialOffer(productos)!;
    expect(offer.iva).toBe(15.84);
    expect(offer.total).toBe(114.84);
  });

  it("no inventa una oferta si el catálogo no trae KYC Cobre", () => {
    const sinKyc = productos.filter((p) => p.id !== "kyc");
    expect(buildKycTrialOffer(sinKyc)).toBeNull();
    const sinCobre = productos.map((p) =>
      p.id === "kyc" ? { ...p, paquetes: p.paquetes.filter((q) => q.id !== "cobre") } : p
    );
    expect(buildKycTrialOffer(sinCobre)).toBeNull();
  });

  it("usa los datos del catálogo recibido, no valores propios", () => {
    const modificado = productos.map((p) =>
      p.id === "kyc"
        ? { ...p, paquetes: p.paquetes.map((q) => (q.id === "cobre" ? { ...q, cantidad: 7, precio: 200 } : q)) }
        : p
    );
    const offer = buildKycTrialOffer(modificado)!;
    expect(offer.cantidad).toBe(7);
    expect(offer.total).toBe(232);
  });

  it("formatea importes en MXN", () => {
    expect(formatMxn(99)).toBe("$99.00 MXN");
    expect(formatMxn(1234.5)).toBe("$1,234.50 MXN");
  });

  it("la FAQ no repite preguntas ni promete activación inmediata", () => {
    const faq = buildKycTrialFaq(buildKycTrialOffer(productos));
    expect(new Set(faq.map((f) => f.q)).size).toBe(faq.length);
    const texto = faq.map((f) => `${f.q} ${f.a}`).join(" ").toLowerCase();
    expect(texto).not.toMatch(/inmediat|en minutos|40%|sin vendedor/);
    expect(faq.find((f) => f.q.includes("IVA"))!.a).toContain("$114.84 MXN");
    expect(faq.find((f) => f.q.includes("más de una vez"))!.a).toContain("un solo uso por usuario");
  });
});
