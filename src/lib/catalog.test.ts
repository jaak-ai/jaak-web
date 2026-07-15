import { describe, it, expect } from "vitest";
import { mapProducto, mapCatalog } from "./catalog";

// Endpoint devuelve precios CON IVA; verificamos el mapeo al modelo `Producto`.
const consultaIne = {
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
    const p = mapProducto(consultaIne as any)!;
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

  it("descarta productos sin tiers válidos", () => {
    const bare = { ...consultaIne, tiers: [{ id: "x", tier: "n/a", tierName: "", tierOrder: 0, price: 0, quota: { value: 0 } }] };
    expect(mapProducto(bare as any)).toBeNull();
  });

  it("prefiere unidad del endpoint cuando viene", () => {
    const p = mapProducto({ ...consultaIne, unidad: "checadas" } as any)!;
    expect(p.unidad).toBe("checadas");
  });

  it("unidad cae al mapa por categoría si el endpoint no la trae y el slug no está", () => {
    const p = mapProducto({ ...consultaIne, slug: "nuevo-desconocido", group: "firma", unidad: undefined } as any)!;
    expect(p.unidad).toBe("firmas");
  });
});

describe("mapCatalog", () => {
  it("mapea la lista y filtra los no vendibles/sin tiers", () => {
    const data = {
      products: [
        consultaIne,
        { ...consultaIne, slug: "roto", tiers: [] },
      ],
      total: 2,
    };
    const out = mapCatalog(data as any);
    expect(out).toHaveLength(1);
    expect(out[0].id).toBe("consulta-ine");
  });
});
