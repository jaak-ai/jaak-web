import { describe, it, expect } from "vitest";
import { mapProducto, mapCatalog, type CatalogProduct, type CatalogResponse } from "./catalog";

// Endpoint devuelve precios CON IVA; verificamos el mapeo al modelo `Producto`.
const consultaIne: CatalogProduct = {
  slug: "consulta-ine",
  displayName: "Consulta INE",
  group: "validaciones",
  tagline: "Valida la vigencia de una credencial.",
  incluye: ["Validación en tiempo real", "Evidencia descargable"],
  recommendedTier: "plata",
  sellable: true,
  tiers: [
    { id: "a1", tier: "plata", tierName: "Plata", tierOrder: 2, price: 232, quota: { value: 100 } },
    { id: "a2", tier: "cobre", tierName: "Cobre", tierOrder: 0, price: 16.24, quota: { value: 10 } },
  ],
};

describe("mapProducto", () => {
  it("mapea al modelo Producto con precios SIN IVA y tiers ordenados", () => {
    const p = mapProducto(consultaIne)!;
    expect(p.id).toBe("consulta-ine");
    expect(p.nombre).toBe("Consulta INE");
    expect(p.categoria).toBe("validaciones");
    expect(p.unidad).toBe("consultas");
    expect(p.recomendado).toBe("plata");
    // orden por tier ladder (cobre antes que plata)
    expect(p.paquetes.map((q) => q.id)).toEqual(["cobre", "plata"]);
    // CON IVA (232 / 16.24) → SIN IVA (200 / 14)
    expect(p.paquetes.find((q) => q.id === "plata")!.precio).toBe(200);
    expect(p.paquetes.find((q) => q.id === "cobre")!.precio).toBe(14);
    expect(p.paquetes.find((q) => q.id === "plata")!.cantidad).toBe(100);
  });

  it("descarta productos sin tiers válidos (tier vacío)", () => {
    const bare: CatalogProduct = {
      ...consultaIne,
      tiers: [{ id: "x", tier: "", tierName: "", tierOrder: 0, price: 0, quota: { value: 0 } }],
    };
    expect(mapProducto(bare)).toBeNull();
  });

  it("acepta un tier nuevo desconocido (sin allowlist): amatista se mapea", () => {
    const nuevo: CatalogProduct = {
      ...consultaIne,
      tiers: [{ id: "z1", tier: "amatista", tierName: "Amatista", tierOrder: 5, price: 116, quota: { value: 50 } }],
    };
    const p = mapProducto(nuevo)!;
    expect(p.paquetes.map((q) => q.id)).toEqual(["amatista"]);
    expect(p.paquetes[0].nombre).toBe("Amatista");
  });

  it("filtra por segmento: enterprise no aparece en autoservicio (default) y viceversa", () => {
    // Mismo producto con un tier autoservicio y uno enterprise (granularidad por SKU).
    const mixto: CatalogProduct = {
      ...consultaIne,
      tiers: [
        { id: "a1", tier: "plata", tierName: "Plata", tierOrder: 2, price: 232, segment: "autoservicio", quota: { value: 100 } },
        { id: "e1", tier: "titanio", tierName: "Titanio", tierOrder: 1, price: 9280, segment: "enterprise", quota: { value: 5000 } },
      ],
    };
    // Default (autoservicio): solo el tier autoservicio.
    const auto = mapProducto(mixto)!;
    expect(auto.paquetes.map((q) => q.id)).toEqual(["plata"]);
    // Enterprise: solo el tier enterprise.
    const ent = mapProducto(mixto, "enterprise")!;
    expect(ent.paquetes.map((q) => q.id)).toEqual(["titanio"]);
  });

  it("un tier SIN segment cuenta como autoservicio (backfill AUTO-7)", () => {
    // consultaIne no trae `segment` → debe salir en autoservicio y NO en enterprise.
    expect(mapProducto(consultaIne, "autoservicio")).not.toBeNull();
    expect(mapProducto(consultaIne, "enterprise")).toBeNull();
  });

  it("producto solo-enterprise no se muestra en autoservicio", () => {
    const soloEnt: CatalogProduct = {
      ...consultaIne,
      tiers: [{ id: "e1", tier: "titanio", tierName: "Titanio", tierOrder: 1, price: 9280, segment: "enterprise", quota: { value: 5000 } }],
    };
    expect(mapProducto(soloEnt, "autoservicio")).toBeNull();
    expect(mapProducto(soloEnt, "enterprise")).not.toBeNull();
  });

  it("prefiere unidad del endpoint cuando viene", () => {
    const p = mapProducto({ ...consultaIne, unidad: "checadas" })!;
    expect(p.unidad).toBe("checadas");
  });

  it("productos one_time no son plan (van por el carrito como producto)", () => {
    const p = mapProducto(consultaIne)!;
    expect(p.plan).toBeFalsy();
  });

  it("recurring (KYC) se marca plan: true (va al carrito, al slot de plan)", () => {
    const p = mapProducto({ ...consultaIne, slug: "kyc", billingType: "recurring" })!;
    expect(p.plan).toBe(true);
  });

  it("unidad cae al mapa por categoría si el endpoint no la trae y el slug no está", () => {
    const p = mapProducto({ ...consultaIne, slug: "nuevo-desconocido", group: "firma", unidad: undefined })!;
    expect(p.unidad).toBe("firmas");
  });
});

describe("mapCatalog", () => {
  it("mapea la lista y filtra los sin tiers", () => {
    const data: CatalogResponse = {
      products: [consultaIne, { ...consultaIne, slug: "roto", tiers: [] }],
      total: 2,
    };
    const out = mapCatalog(data);
    expect(out).toHaveLength(1);
    expect(out[0].id).toBe("consulta-ine");
  });
});
