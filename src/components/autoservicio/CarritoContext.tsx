"use client";

import { createContext, useCallback, useContext, useEffect, useState, type ReactNode } from "react";
import { type Categoria, type Paquete, type Producto } from "@/data/autoservicio-catalogo";
import { escribirParamsUrl, leerParamUrl } from "./urlEstado";

type Tier = Paquete["id"];

// Store único del carrito de autoservicio, compartido entre Catálogo y Guía.
// - tierByProduct: tier elegido por producto (siempre definido; default = recomendado).
// - cart: ids de productos agregados, en orden de inserción.
// Así, lo agregado y el tier elegido persisten al cambiar de modo.
// Índice de pricing (productId → tier → _id) hidratado desde la API en el server.
type PricingIndex = Record<string, Record<string, string>>;

interface CarritoStore {
  productos: Producto[];
  categorias: Categoria[];
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
  productKeys: Record<string, string>;
  comprable: (id: string) => boolean;
}

const Ctx = createContext<CarritoStore | null>(null);

// Tier por defecto de un producto, data-driven: el recomendado si de verdad es
// uno de sus paquetes, si no el primer paquete. NUNCA un tier hardcodeado —
// enterprise usa Titanio/Iridio/… y no tiene "plata" (rompía con `.precio` de
// undefined al asumir un default fijo).
const defaultTier = (p: Producto): Tier =>
  (p.recomendado && p.paquetes.some((q) => q.id === p.recomendado)
    ? p.recomendado
    : p.paquetes[0]?.id) as Tier;

export function CarritoProvider({
  children,
  productos,
  categorias,
  pricingIndex = {},
  productKeys = {},
}: {
  children: ReactNode;
  productos: Producto[];
  categorias: Categoria[];
  pricingIndex?: PricingIndex;
  productKeys?: Record<string, string>;
}) {
  const [tierByProduct, setTierByProduct] = useState<Record<string, Tier>>(() =>
    Object.fromEntries(productos.map((p) => [p.id, defaultTier(p)]))
  );
  // Default por id para los fallbacks (tierDe / URL): evita asumir un tier fijo.
  const defaultTierDe = useCallback(
    (id: string): Tier => {
      const p = productos.find((q) => q.id === id);
      return p ? defaultTier(p) : ("" as Tier);
    },
    [productos]
  );
  const [cart, setCart] = useState<string[]>([]);
  // Productos cuyo tier eligió el usuario explícitamente (chip). El volumen de la
  // Guía no los reescribe: respeta la elección manual hecha en cualquier modo.
  const [touched, setTouched] = useState<Set<string>>(new Set());
  // true cuando ya se leyó `sel` de la URL; hasta entonces no se escribe la URL
  // (evita borrar la selección compartida antes de hidratarla).
  const [hidratado, setHidratado] = useState(false);

  // Hidrata carrito y tiers desde `?sel=producto.tier,...` al montar. Entradas
  // inválidas (producto o tier inexistente) se descartan en silencio.
  useEffect(() => {
    const sel = leerParamUrl("sel");
    if (sel) {
      const ids: string[] = [];
      const tiers: Record<string, Tier> = {};
      sel.split(",").forEach((token) => {
        const [id, tier] = token.split(".");
        const prod = productos.find((p) => p.id === id);
        if (!prod || ids.includes(id)) return;
        ids.push(id);
        if (prod.paquetes.some((q) => q.id === tier)) tiers[id] = tier as Tier;
      });
      if (ids.length) {
        setCart(ids);
        setTierByProduct((prev) => ({ ...prev, ...tiers }));
        // Un tier venido de la URL cuenta como elección explícita: el volumen
        // de la Guía no debe pisarlo.
        setTouched((prev) => new Set([...prev, ...Object.keys(tiers)]));
      }
    }
    setHidratado(true);
  }, [productos]);

  // Refleja el carrito en la URL en cada cambio (producto agregado/quitado o
  // tier ajustado), para que un refresh conserve la selección.
  useEffect(() => {
    if (!hidratado) return;
    const sel = cart.map((id) => `${id}.${tierByProduct[id] ?? defaultTierDe(id)}`).join(",");
    escribirParamsUrl({ sel: sel || null });
  }, [hidratado, cart, tierByProduct, defaultTierDe]);

  const enCarrito = (id: string) => cart.includes(id);
  const tierDe = (id: string): Tier => tierByProduct[id] ?? defaultTierDe(id);
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
      value={{ productos, categorias, cart, enCarrito, tierDe, setTier, toggle, quitar, aplicarVolumen, pricingIndex, productKeys, comprable }}
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
