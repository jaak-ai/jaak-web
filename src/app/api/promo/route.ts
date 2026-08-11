import { NextResponse } from "next/server";
import { getFeaturedCoupon } from "@/lib/coupons";

// GET /api/promo — devuelve el cupón destacado activo para el banner (AUTO-4),
// o { featured: false } cuando no hay oferta. El fetch al backend ocurre
// server-side (revalidate en getFeaturedCoupon), así el cliente no ve la API base.
export async function GET() {
  const coupon = await getFeaturedCoupon();
  if (!coupon) {
    return NextResponse.json({ featured: false });
  }
  return NextResponse.json({ featured: true, ...coupon });
}
