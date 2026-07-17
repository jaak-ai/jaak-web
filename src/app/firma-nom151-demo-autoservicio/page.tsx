import { getPricingIndex } from "@/lib/pricing";
import FirmaNom151DemoLandingClient from "./LandingClient";

// Mismo patrón que /kyc-demo-autoservicio: el link de compra directa del Plan
// Cobre usa el pricing real del catálogo (vía la API pública) en vez de un
// snapshot que puede quedar desactualizado.
export default async function FirmaNom151DemoPage() {
  const pricingIndex = await getPricingIndex();
  return <FirmaNom151DemoLandingClient pricingIndex={pricingIndex} />;
}
