"use client";

import { createContext, useContext, useState, type ReactNode } from "react";
import { productos, type Paquete } from "@/data/autoservicio-catalogo";

type Tier = Paquete["id"];

// Store único del carrito de autoservicio, compartido entre Catálogo y Guía.
// - tierByProduct: tier elegido por producto (siempre definido; default = recomendado).
// - cart: ids de productos agregados, en orden de inserción.
// Así, lo agregado y el tier elegido persisten al cambiar de modo.
interface CarritoStore {
  cart: string[];
  enCarrito: (id: string) => boolean;
  tierDe: (id: string) => Tier;
  setTier: (id: string, tier: Tier) => void;
  toggle: (id: string) => void;
  quitar: (id: string) => void;
  // Para la Guía: aplica el volumen a los productos NO agregados (premarcados),
  // congelando el tier de los que ya están en el carrito.
  aplicarVolumen: (tier: Tier) => void;
}

const Ctx = createContext<CarritoStore | null>(null);

export function CarritoProvider({ children }: { children: ReactNode }) {
  const [tierByProduct, setTierByProduct] = useState<Record<string, Tier>>(() =>
    Object.fromEntries(productos.map((p) => [p.id, p.recomendado ?? "plata"]))
  );
  const [cart, setCart] = useState<string[]>([]);

  const enCarrito = (id: string) => cart.includes(id);
  const tierDe = (id: string): Tier => tierByProduct[id] ?? "plata";
  const setTier = (id: string, tier: Tier) => setTierByProduct((prev) => ({ ...prev, [id]: tier }));
  const toggle = (id: string) =>
    setCart((prev) => (prev.includes(id) ? prev.filter((x) => x !== id) : [...prev, id]));
  const quitar = (id: string) => setCart((prev) => prev.filter((x) => x !== id));
  const aplicarVolumen = (tier: Tier) =>
    setTierByProduct((prev) => {
      const next = { ...prev };
      productos.forEach((p) => {
        if (!cart.includes(p.id)) next[p.id] = tier;
      });
      return next;
    });

  return (
    <Ctx.Provider value={{ cart, enCarrito, tierDe, setTier, toggle, quitar, aplicarVolumen }}>
      {children}
    </Ctx.Provider>
  );
}

export function useCarrito() {
  const store = useContext(Ctx);
  if (!store) throw new Error("useCarrito debe usarse dentro de <CarritoProvider>");
  return store;
}
