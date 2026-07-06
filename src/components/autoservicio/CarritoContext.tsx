"use client";

import { createContext, useContext, useState, type ReactNode } from "react";
import { productos, type Paquete } from "@/data/autoservicio-catalogo";

type Tier = Paquete["id"];

// Store único del carrito de autoservicio, compartido entre Catálogo y Guía.
// - tierByProduct: tier elegido por producto (siempre definido; default = recomendado).
// - cart: ids de productos agregados, en orden de inserción.
// Así, lo agregado y el tier elegido persisten al cambiar de modo.
// Índice de pricing (productId → tier → _id) hidratado desde la API en el server.
type PricingIndex = Record<string, Record<string, string>>;

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
  // IDs de pricing reales para el checkout, y si un producto es comprable
  // (tiene renglón de pricing en prod). Si el índice viene vacío (falló el
  // fetch), `comprable` devuelve true para no ocultar el catálogo.
  pricingIndex: PricingIndex;
  comprable: (id: string) => boolean;
}

const Ctx = createContext<CarritoStore | null>(null);

export function CarritoProvider({
  children,
  pricingIndex = {},
}: {
  children: ReactNode;
  pricingIndex?: PricingIndex;
}) {
  const [tierByProduct, setTierByProduct] = useState<Record<string, Tier>>(() =>
    Object.fromEntries(productos.map((p) => [p.id, p.recomendado ?? "plata"]))
  );
  const [cart, setCart] = useState<string[]>([]);
  // Productos cuyo tier eligió el usuario explícitamente (chip). El volumen de la
  // Guía no los reescribe: respeta la elección manual hecha en cualquier modo.
  const [touched, setTouched] = useState<Set<string>>(new Set());

  const enCarrito = (id: string) => cart.includes(id);
  const tierDe = (id: string): Tier => tierByProduct[id] ?? "plata";
  const setTier = (id: string, tier: Tier) => {
    setTierByProduct((prev) => ({ ...prev, [id]: tier }));
    setTouched((prev) => {
      if (prev.has(id)) return prev;
      const next = new Set(prev);
      next.add(id);
      return next;
    });
  };
  const toggle = (id: string) =>
    setCart((prev) => (prev.includes(id) ? prev.filter((x) => x !== id) : [...prev, id]));
  const quitar = (id: string) => setCart((prev) => prev.filter((x) => x !== id));
  // El volumen solo mueve el tier sugerido de productos que el usuario NO ha
  // agregado ni ajustado manualmente; no pisa elecciones explícitas.
  const aplicarVolumen = (tier: Tier) =>
    setTierByProduct((prev) => {
      const next = { ...prev };
      productos.forEach((p) => {
        if (!cart.includes(p.id) && !touched.has(p.id)) next[p.id] = tier;
      });
      return next;
    });

  // Sin índice (fetch vacío) → no ocultamos nada (fallback). Con índice, un
  // producto es comprable solo si TODOS los tiers que ofrece resuelven a un _id;
  // si algún tier faltara, el checkout con ese tier caería en i:"" (el bug),
  // así que se oculta el producto completo en vez de mostrar un tier roto.
  const indiceVacio = Object.keys(pricingIndex).length === 0;
  const comprable = (id: string) => {
    if (indiceVacio) return true;
    const tiers = pricingIndex[id];
    if (!tiers) return false;
    const prod = productos.find((p) => p.id === id);
    return !!prod && prod.paquetes.every((q) => !!tiers[q.id]);
  };

  return (
    <Ctx.Provider
      value={{ cart, enCarrito, tierDe, setTier, toggle, quitar, aplicarVolumen, pricingIndex, comprable }}
    >
      {children}
    </Ctx.Provider>
  );
}

export function useCarrito() {
  const store = useContext(Ctx);
  if (!store) throw new Error("useCarrito debe usarse dentro de <CarritoProvider>");
  return store;
}
