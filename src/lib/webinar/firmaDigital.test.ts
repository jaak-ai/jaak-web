import { describe, expect, it } from "vitest";
import {
  ALLOWED_SOURCES,
  EVENT_END_MS,
  EVENT_START_MS,
  REGISTRATION_BASE_URL,
  buildRegistrationUrl,
  getCountdownParts,
  getEventPhase,
  outboundDomain,
  parseSource,
  resolveSource,
} from "./firmaDigital";

describe("fecha absoluta del evento", () => {
  it("equivale a 17:00 UTC (11:00 en Ciudad de México, UTC-6)", () => {
    expect(new Date(EVENT_START_MS).toISOString()).toBe("2026-11-25T17:00:00.000Z");
    expect(EVENT_END_MS - EVENT_START_MS).toBe(60 * 60 * 1000);
  });
});

describe("getEventPhase", () => {
  it("cambia exactamente en los límites de inicio y fin", () => {
    expect(getEventPhase(EVENT_START_MS - 1)).toBe("upcoming");
    expect(getEventPhase(EVENT_START_MS)).toBe("live");
    expect(getEventPhase(EVENT_END_MS - 1)).toBe("live");
    expect(getEventPhase(EVENT_END_MS)).toBe("ended");
  });
});

describe("getCountdownParts", () => {
  it("descompone el tiempo restante", () => {
    const now = EVENT_START_MS - ((2 * 86400 + 3 * 3600 + 4 * 60 + 5) * 1000 + 999);
    expect(getCountdownParts(now)).toEqual({ days: 2, hours: 3, minutes: 4, seconds: 5 });
  });
  it("nunca devuelve valores negativos", () => {
    expect(getCountdownParts(EVENT_START_MS + 10_000)).toEqual({ days: 0, hours: 0, minutes: 0, seconds: 0 });
  });
});

describe("parseSource", () => {
  it("acepta las cinco fuentes admitidas, sin importar mayúsculas ni espacios", () => {
    for (const s of ALLOWED_SOURCES) expect(parseSource(` ${s.toUpperCase()} `)).toBe(s);
  });
  it("rechaza valores desconocidos o vacíos", () => {
    expect(parseSource("twitter")).toBeNull();
    expect(parseSource("jaak_linkedin&x=1")).toBeNull();
    expect(parseSource("")).toBeNull();
    expect(parseSource(null)).toBeNull();
  });
});

describe("resolveSource", () => {
  it("usa la fuente de la URL", () => {
    expect(resolveSource("?source=psc_email", null)).toBe("psc_email");
  });
  it("conserva la fuente guardada en accesos posteriores sin parámetro", () => {
    expect(resolveSource("", "jaak_facebook")).toBe("jaak_facebook");
  });
  it("una fuente no reconocida en la URL no borra la guardada", () => {
    expect(resolveSource("?source=foo", "psc_linkedin")).toBe("psc_linkedin");
  });
  it("una fuente válida nueva reemplaza a la guardada", () => {
    expect(resolveSource("?source=psc_personal", "jaak_linkedin")).toBe("psc_personal");
  });
  it("acceso directo: sin fuente", () => {
    expect(resolveSource("", null)).toBeNull();
    expect(resolveSource("?utm_source=google", null)).toBeNull();
  });
});

describe("buildRegistrationUrl", () => {
  it("sin fuente devuelve el enlace base sin parámetros", () => {
    expect(buildRegistrationUrl(null)).toBe(REGISTRATION_BASE_URL);
  });
  it("agrega source como único parámetro", () => {
    expect(buildRegistrationUrl("jaak_linkedin")).toBe(`${REGISTRATION_BASE_URL}?source=jaak_linkedin`);
  });
});

describe("outboundDomain", () => {
  it("devuelve el host sin www", () => {
    expect(outboundDomain("https://www.dof.gob.mx/nota")).toBe("dof.gob.mx");
    expect(outboundDomain("no es url")).toBe("");
  });
});
