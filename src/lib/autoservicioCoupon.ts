import { IVA } from "@/data/autoservicio-catalogo";

// Cupón previsualizado en el carrito de autoservicio (AUTO-4). El cobro real lo
// hace /register; esto es solo el preview del storefront.
export type CartCoupon = { type: "percent" | "fixed"; value: number };

export interface CartTotals {
  subtotal: number;
  descuento: number;
  iva: number;
  total: number;
}

// computeCartTotals aplica el cupón como cobra el backend (AUTO-30): el descuento
// va sobre el SUBTOTAL (antes de IVA) y el IVA se recalcula sobre la base ya
// descontada — nunca sobre el total con IVA (eso descontaba de más).
//   - percent: porcentaje del subtotal.
//   - fixed: pesos, acotado al subtotal (Math.min) para no dejar base negativa;
//     si el fijo iguala/supera el subtotal, la base es 0 → IVA 0 → total 0.
// `coupon` es null cuando no hay cupón aplicable (total = subtotal + IVA).
export function computeCartTotals(subtotal: number, coupon: CartCoupon | null): CartTotals {
  const descuento = coupon
    ? coupon.type === "percent"
      ? Math.round((subtotal * coupon.value) / 100)
      : Math.min(coupon.value, subtotal)
    : 0;
  const base = subtotal - descuento;
  const iva = Math.round(base * IVA);
  const total = base + iva;
  return { subtotal, descuento, iva, total };
}
