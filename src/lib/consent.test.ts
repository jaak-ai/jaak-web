import { describe, expect, it } from "vitest";
import { buildConsentBootstrapScript, isConsentGatedPath, parseStoredConsent } from "./consent";

describe("consent", () => {
  it("solo condiciona la landing del webinar", () => {
    expect(isConsentGatedPath("/webinar/firma-digital-mexico-nom-151")).toBe(true);
    expect(isConsentGatedPath("/webinar")).toBe(false);
    expect(isConsentGatedPath("/")).toBe(false);
  });
  it("parsea solo valores válidos", () => {
    expect(parseStoredConsent("granted")).toBe("granted");
    expect(parseStoredConsent("denied")).toBe("denied");
    expect(parseStoredConsent("yes")).toBeNull();
    expect(parseStoredConsent(null)).toBeNull();
  });
  it("el bootstrap es JS válido y deniega señales publicitarias por defecto", () => {
    const js = buildConsentBootstrapScript();
    expect(() => new Function(js)).not.toThrow();
    expect(js).toContain("ad_storage");
    expect(js).toContain("'denied'");
  });
});
