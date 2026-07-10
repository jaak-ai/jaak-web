import { getPricingIndex } from "@/lib/pricing";
import KycDemoAutoservicioLandingClient from "./LandingClient";

// IDs de pricing reales por producto+tier, igual que /autoservicio: así los
// links de compra directa de esta landing usan el mismo precio/cantidad
// vigentes del catálogo en vez de un snapshot que puede quedar desactualizado.
export default async function KycDemoAutoservicioPage() {
  const pricingIndex = await getPricingIndex();
  return <KycDemoAutoservicioLandingClient pricingIndex={pricingIndex} />;
}
