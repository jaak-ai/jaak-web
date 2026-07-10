import { describe, it, expect, vi, beforeEach, afterEach } from "vitest";
import { buildKairosLeadPayload, forwardLeadToKairos } from "./kairosLead";

describe("buildKairosLeadPayload", () => {
  it("includes email plus non-empty optional fields only", () => {
    const payload = buildKairosLeadPayload({
      email: "ana@empresa.mx",
      contact_name: "Ana",
      phone: "",
      utm_source: "email",
      utm_medium: "kairos_ai",
      utm_campaign: "firma_simple_cobre_360_jul2026",
      utm_content: "cta_compra",
      utm_term: "  ",
      page_url: "https://www.jaak.ai/autoservicio?sel=firma-simple.cobre",
    });
    expect(payload).toEqual({
      email: "ana@empresa.mx",
      contact_name: "Ana",
      utm_source: "email",
      utm_medium: "kairos_ai",
      utm_campaign: "firma_simple_cobre_360_jul2026",
      utm_content: "cta_compra",
      page_url: "https://www.jaak.ai/autoservicio?sel=firma-simple.cobre",
    });
  });
});

describe("forwardLeadToKairos", () => {
  const fetchMock = vi.fn();

  beforeEach(() => {
    vi.stubGlobal("fetch", fetchMock);
    fetchMock.mockReset();
  });

  afterEach(() => {
    vi.unstubAllGlobals();
    vi.unstubAllEnvs();
  });

  it("is a no-op returning false when KAIROS_API_URL is unset", async () => {
    vi.stubEnv("KAIROS_API_URL", "");
    const ok = await forwardLeadToKairos({ email: "a@b.mx" });
    expect(ok).toBe(false);
    expect(fetchMock).not.toHaveBeenCalled();
  });

  it("POSTs to /api/v1/public/leads with Origin and optional API key", async () => {
    vi.stubEnv("KAIROS_API_URL", "https://kairos.api.jaak.ai/");
    vi.stubEnv("KAIROS_LEAD_API_KEY", "test-key");
    fetchMock.mockResolvedValue({ ok: true });

    const ok = await forwardLeadToKairos({
      email: "a@b.mx",
      utm_campaign: "firma_simple_cobre_360_jul2026",
    });

    expect(ok).toBe(true);
    const [url, init] = fetchMock.mock.calls[0];
    expect(url).toBe("https://kairos.api.jaak.ai/api/v1/public/leads");
    expect(init.headers["Origin"]).toBe("https://www.jaak.ai");
    expect(init.headers["X-LEAD-API-KEY"]).toBe("test-key");
    expect(JSON.parse(init.body)).toEqual({
      email: "a@b.mx",
      utm_campaign: "firma_simple_cobre_360_jul2026",
    });
  });

  it("returns false and never throws on HTTP error or network failure", async () => {
    vi.stubEnv("KAIROS_API_URL", "https://kairos.api.jaak.ai");
    fetchMock.mockResolvedValue({ ok: false, status: 500, text: async () => "boom" });
    expect(await forwardLeadToKairos({ email: "a@b.mx" })).toBe(false);

    fetchMock.mockRejectedValue(new Error("network down"));
    expect(await forwardLeadToKairos({ email: "a@b.mx" })).toBe(false);
  });
});
