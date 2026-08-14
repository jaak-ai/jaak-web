import { describe, it, expect } from "vitest";
import { buildCheckoutUrl, productos, KYC_PLAN_CODE_BY_TIER } from "./autoservicio-catalogo";

const firma = productos.find((p) => p.id === "firma-simple")!;
const cobre = firma.paquetes.find((q) => q.id === "cobre")!;
const items = [{ producto: firma, paquete: cobre }];

const kyc = productos.find((p) => p.id === "kyc")!;
const kycPlata = kyc.paquetes.find((q) => q.id === "plata")!;

function decodePayload(url: string) {
  const d = url.match(/[?&]d=([^&]+)/)![1];
  return JSON.parse(decodeURIComponent(atob(d)));
}

describe("buildCheckoutUrl UTM passthrough", () => {
  it("keeps the deep-link untouched without utm", () => {
    const url = buildCheckoutUrl(items);
    expect(url).toMatch(/^https:\/\/platform\.jaak\.ai\/#\/register\/user-info\?d=/);
    expect(url).not.toContain("utm_");
  });

  it("inserts utm_* as query before the hash", () => {
    const url = buildCheckoutUrl(items, {
      utm: {
        utm_source: "email",
        utm_medium: "kairos_ai",
        utm_campaign: "firma_simple_cobre_360_jul2026",
        utm_content: "cta_compra",
        utm_term: "",
        sel: "firma-simple.cobre",
      },
    });
    const [preHash, postHash] = url.split("#");
    expect(preHash).toContain("utm_campaign=firma_simple_cobre_360_jul2026");
    expect(preHash).toContain("utm_source=email");
    // empty values and non-utm keys (sel) stay out
    expect(preHash).not.toContain("utm_term");
    expect(preHash).not.toContain("sel=");
    // cart payload intact after the hash
    expect(postHash).toMatch(/^\/register\/user-info\?d=.+/);
  });
});

describe("buildCheckoutUrl coupon (AUTO-4)", () => {
  it("carries the coupon inside the hash next to d", () => {
    const url = buildCheckoutUrl(items, { coupon: "promo20" });
    const postHash = url.split("#")[1];
    expect(postHash).toContain("&coupon=promo20");
    // stays inside the hash route (readable by /register), not before the hash
    expect(url.split("#")[0]).not.toContain("coupon=");
  });

  it("omits the coupon when empty/whitespace", () => {
    expect(buildCheckoutUrl(items, { coupon: "" })).not.toContain("coupon=");
    expect(buildCheckoutUrl(items, { coupon: "   " })).not.toContain("coupon=");
  });
});

describe("buildCheckoutUrl KYC/plan routing", () => {
  it("routes a KYC (plan) item to the `k` slot, not to products", () => {
    const p = decodePayload(buildCheckoutUrl([{ producto: kyc, paquete: kycPlata }]));
    expect(p.products).toHaveLength(0);
    expect(p.k).toBeDefined();
    expect(p.k.pc).toBe(KYC_PLAN_CODE_BY_TIER["plata"]);
    expect(p.k.m).toBe("once");
    expect(p.k.q).toBe(kycPlata.cantidad);
  });

  it("mixed cart: product goes to products, KYC to k", () => {
    const p = decodePayload(
      buildCheckoutUrl([
        { producto: firma, paquete: cobre },
        { producto: kyc, paquete: kycPlata },
      ])
    );
    expect(p.products).toHaveLength(1);
    expect(p.products[0].n).toContain("Firma");
    expect(p.k.pc).toBe(KYC_PLAN_CODE_BY_TIER["plata"]);
  });

  it("KYC uses the selected tier's plan code (oro)", () => {
    const kycOro = kyc.paquetes.find((q) => q.id === "oro")!;
    const p = decodePayload(buildCheckoutUrl([{ producto: kyc, paquete: kycOro }]));
    expect(p.k.pc).toBe(KYC_PLAN_CODE_BY_TIER["oro"]);
  });
});
