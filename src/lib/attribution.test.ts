import { describe, it, expect } from "vitest";
import {
  readUtmFromSearch,
  mergeAttribution,
  persistAttribution,
  UTM_STORAGE_KEY,
} from "./attribution";

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

describe("persistAttribution", () => {
  const memoryStorage = () => {
    const data = new Map<string, string>();
    return {
      getItem: (k: string) => data.get(k) ?? null,
      setItem: (k: string, v: string) => void data.set(k, v),
      data,
    };
  };

  it("persists merged campaign params under the storage key", () => {
    const storage = memoryStorage();
    expect(persistAttribution(CAMPAIGN_SEARCH, storage, 1234)).toBe(true);
    const saved = JSON.parse(storage.data.get(UTM_STORAGE_KEY)!);
    expect(saved.utm_campaign).toBe("firma_simple_cobre_360_jul2026");
    expect(saved.sel).toBe("firma-simple.cobre");
    expect(saved.captured_at).toBe(1234);
  });

  it("does not write when the URL has no attribution params", () => {
    const storage = memoryStorage();
    expect(persistAttribution("?foo=bar", storage, 1)).toBe(false);
    expect(storage.data.size).toBe(0);
  });

  it("never throws when storage is blocked (webviews / cookies disabled)", () => {
    const blocked = {
      getItem: () => {
        throw new DOMException("denied", "SecurityError");
      },
      setItem: () => {
        throw new DOMException("denied", "SecurityError");
      },
    };
    expect(() => persistAttribution(CAMPAIGN_SEARCH, blocked, 1)).not.toThrow();
    expect(persistAttribution(CAMPAIGN_SEARCH, blocked, 1)).toBe(false);
  });

  it("survives corrupt stored JSON and overwrites it", () => {
    const storage = memoryStorage();
    storage.data.set(UTM_STORAGE_KEY, "{not json");
    expect(persistAttribution(CAMPAIGN_SEARCH, storage, 9)).toBe(true);
    expect(() => JSON.parse(storage.data.get(UTM_STORAGE_KEY)!)).not.toThrow();
  });
});
