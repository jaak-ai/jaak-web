// ─────────────────────────────────────────────────────────────────────────────
// Cupón destacado para el banner promocional del sitio (AUTO-4).
//
// El backend expone `GET /public/v1/coupons/featured` con la oferta activa
// redimible (o `{featured:false}`). Lo consultamos server-side (revalidate) para
// que el banner anuncie el descuento vigente sin exponer la API base al cliente.
// ─────────────────────────────────────────────────────────────────────────────

const API_BASE = process.env.JAAK_API_BASE_URL || "https://services.api.jaak.ai";

export type FeaturedCoupon = {
  code: string;
  type: "percent" | "fixed";
  value: number;
  description?: string;
  validTo?: string;
};

type FeaturedResponse =
  | ({ featured: true } & FeaturedCoupon)
  | { featured: false };

// Devuelve el cupón destacado activo, o null cuando no hay oferta (o ante
// cualquier fallo de red/parseo — el banner cae a su CTA por defecto).
export async function getFeaturedCoupon(): Promise<FeaturedCoupon | null> {
  try {
    const res = await fetch(`${API_BASE}/public/v1/coupons/featured`, {
      next: { revalidate: 60 },
    });
    if (!res.ok) return null;
    const data: FeaturedResponse = await res.json();
    if (!data || !data.featured) return null;
    return {
      code: data.code,
      type: data.type,
      value: data.value,
      description: data.description,
      validTo: data.validTo,
    };
  } catch {
    return null;
  }
}

// Etiqueta legible del descuento para la copy del banner: "20%" o "$500".
export function formatCouponOffer(coupon: FeaturedCoupon): string {
  return coupon.type === "percent" ? `${coupon.value}%` : `$${coupon.value}`;
}
