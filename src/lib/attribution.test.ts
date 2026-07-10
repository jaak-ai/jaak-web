import { describe, it, expect } from "vitest";
import { readUtmFromSearch, mergeAttribution } from "./attribution";

const CAMPAIGN_SEARCH =
  "?sel=firma-simple.cobre&utm_source=email&utm_medium=kairos_ai" +
  "&utm_campaign=firma_simple_cobre_360_jul2026&utm_content=cta_compra";

describe("readUtmFromSearch", () => {
  it("parses full campaign params including sel", () => {
    expect(readUtmFromSearch(CAMPAIGN_SEARCH)).toEqual({
      utm_source: "email",
      utm_medium: "kairos_ai",
      utm_campaign: "firma_simple_cobre_360_jul2026",
      utm_content: "cta_compra",
      utm_term: "",
      sel: "firma-simple.cobre",
    });
  });

  it("returns null when no attribution params present", () => {
    expect(readUtmFromSearch("?foo=bar")).toBeNull();
    expect(readUtmFromSearch("")).toBeNull();
  });

  it("parses partial params", () => {
    const result = readUtmFromSearch("?utm_campaign=x");
    expect(result?.utm_campaign).toBe("x");
    expect(result?.utm_source).toBe("");
  });
});

describe("mergeAttribution", () => {
  const stored = {
    utm_source: "email",
    utm_medium: "kairos_ai",
    utm_campaign: "firma_simple_cobre_360_jul2026",
    utm_content: "cta_compra",
  };

  it("URL wins per field over stored", () => {
    const merged = mergeAttribution({ utm_content: "cta_info" }, stored);
    expect(merged.utm_content).toBe("cta_info");
    expect(merged.utm_campaign).toBe("firma_simple_cobre_360_jul2026");
    expect(merged.utm_source).toBe("email");
  });

  it("absent URL fields never erase stored values", () => {
    const merged = mergeAttribution({ utm_source: "google" }, stored);
    expect(merged.utm_source).toBe("google");
    expect(merged.utm_medium).toBe("kairos_ai");
  });

  it("handles null inputs (pages without UTM)", () => {
    const merged = mergeAttribution(null, null);
    expect(merged).toEqual({
      utm_source: "",
      utm_medium: "",
      utm_campaign: "",
      utm_content: "",
      utm_term: "",
      sel: "",
    });
  });

  it("ignores non-string junk in stored data", () => {
    const merged = mergeAttribution(null, {
      utm_source: 42 as unknown as string,
      utm_campaign: "ok",
    });
    expect(merged.utm_source).toBe("");
    expect(merged.utm_campaign).toBe("ok");
  });
});
