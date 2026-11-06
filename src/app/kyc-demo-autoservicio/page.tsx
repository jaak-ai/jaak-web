import { getPricingIndex } from "@/lib/pricing";
import { getAutoservicioCatalog } from "@/lib/catalog";
import { buildKycTrialFaq, buildKycTrialOffer } from "@/lib/kycTrialOffer";
import KycDemoAutoservicioLandingClient from "./LandingClient";

const CANONICAL_URL = "https://jaak.ai/kyc-demo-autoservicio";

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Inicio", item: "https://jaak.ai" },
    { "@type": "ListItem", position: 2, name: "Autoservicio", item: "https://jaak.ai/autoservicio" },
    { "@type": "ListItem", position: 3, name: "Prueba KYC biométrico", item: CANONICAL_URL },
  ],
};

// IDs de pricing reales por producto+tier, igual que /autoservicio: así los
// links de compra directa de esta landing usan el mismo precio/cantidad
// vigentes del catálogo en vez de un snapshot que puede quedar desactualizado.
//
// AUD-03: la oferta (cantidad, precio, IVA) y la FAQ salen del mismo catálogo que
// /autoservicio (catálogo en vivo con respaldo estático). Si el paquete Cobre de KYC
// no existe en el catálogo, la landing no presenta una compra como disponible.
export default async function KycDemoAutoservicioPage() {
  const [pricingIndex, catalog] = await Promise.all([getPricingIndex(), getAutoservicioCatalog()]);
  const offer = buildKycTrialOffer(catalog.productos);
  const faq = buildKycTrialFaq(offer);

  // JSON-LD de FAQ construido con las mismas respuestas que se ven en pantalla.
  // Sin Offer/Product: no se publican datos estructurados de precio hasta que AUD-06.13 apruebe la ficha.
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faq.map((item) => ({
      "@type": "Question",
      name: item.q,
      acceptedAnswer: { "@type": "Answer", text: item.a },
    })),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify([breadcrumbSchema, faqSchema]) }}
      />
      <KycDemoAutoservicioLandingClient pricingIndex={pricingIndex} offer={offer} faqItems={faq} />
    </>
  );
}
