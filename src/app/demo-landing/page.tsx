import ProductLandingTemplate, {
  type ProductLandingConfig,
} from "@/components/ProductLandingTemplate";
import ComparisonChartSUMSUB from "@/components/ComparisonChartSUMSUB";

export const metadata = {
  title: "Demo: Landing Page Template — JAAK",
  description: "Demostración de ProductLandingTemplate configurable (PERSONA pattern).",
};

export default function DemoLandingPage() {
  // Configuración de ejemplo: Signa (Firma Electrónica)
  const signaConfig: ProductLandingConfig = {
    productName: "Signa",
    tagline: "Firma electrónica con validez legal",
    headline: "Firma documentos con validez NOM-151 en segundos.",
    subheadline:
      "Signa by JAAK: firma electrónica de grado bancario con expediente auditable y sellos de tiempo.",
    cta: {
      label: "Comenzar ahora",
      href: "/signa",
    },
    secondaryCta: {
      label: "Ver precios",
      href: "/precios",
    },
    features: [
      {
        label: "Validez legal NOM-151",
        description: "Reconocimiento oficial de autoridades mexicanas",
        icon: "⚖️",
        highlight: true,
      },
      {
        label: "Sello de tiempo",
        description: "Marca temporal criptográfica verificable",
        icon: "⏱️",
      },
      {
        label: "Expediente completo",
        description: "Evidencia auditable para cumplimiento regulatorio",
        icon: "📋",
      },
      {
        label: "Integración API",
        description: "REST + SDKs en múltiples lenguajes",
        icon: "🔧",
      },
      {
        label: "Marca blanca",
        description: "Tu logo, colores y mensajes personalizados",
        icon: "🎨",
      },
      {
        label: "Soporte legal",
        description: "Equipo experto en LFPIORPI y CNBV",
        icon: "👨‍⚖️",
      },
    ],
    comparison: {
      category: "Capacidad",
      columns: ["Signa", "Plataforma genérica", "Servicios locales"],
      items: [
        {
          label: "Validez NOM-151",
          values: [true, false, true],
        },
        {
          label: "Cumplimiento CNBV",
          values: [true, false, true],
        },
        {
          label: "Sello de tiempo",
          values: [true, true, false],
        },
        {
          label: "API integrable",
          values: [true, true, false],
        },
        {
          label: "Marca blanca",
          values: [true, false, false],
        },
        {
          label: "Setup < 2 semanas",
          values: [true, true, false],
        },
      ],
    },
    faqs: [
      {
        question: "¿Es válida la firma en México?",
        answer:
          "Sí. Signa cumple con NOM-151 del IFAI y es reconocida por autoridades como CNBV, UIF y Banco de México.",
      },
      {
        question: "¿Puedo integrarla en mi app?",
        answer:
          "Sí. Ofrecemos API REST, SDKs en Node/Python/Go/Java y componentes React/Vue. Setup < 2 semanas.",
      },
      {
        question: "¿Qué pasa si surge una auditoría?",
        answer:
          "Tu expediente es completo e inmutable. Cada firma genera un registro auditable con timestamp criptográfico y logs de verificación.",
      },
    ],
    color: "teal",
  };

  return (
    <main className="min-h-screen bg-white">
      <ProductLandingTemplate config={signaConfig} />

      {/* Sección de comparación alternativa */}
      <ComparisonChartSUMSUB
        config={{
          title: "¿Por qué elegir Signa?",
          subtitle: "Comparación de capacidades de firma electrónica en México",
          competitorNames: ["Mifiel", "Adobe Sign", "Signa by JAAK"],
          highlightJaak: true,
          rows: [
            {
              feature: "Validez NOM-151",
              description: "Reconocimiento legal en México",
              jaak: true,
              competitors: { Mifiel: true, "Adobe Sign": false },
            },
            {
              feature: "Cumplimiento CNBV",
              description: "Requisito para sector financiero",
              jaak: true,
              competitors: { Mifiel: true, "Adobe Sign": false },
            },
            {
              feature: "Sello de tiempo criptográfico",
              description: "Para auditorías regulatorias",
              jaak: true,
              competitors: { Mifiel: true, "Adobe Sign": true },
            },
            {
              feature: "Marca blanca",
              description: "Personalización completa",
              jaak: true,
              competitors: { Mifiel: false, "Adobe Sign": false },
            },
            {
              feature: "Setup rápido (< 2 semanas)",
              description: "Time-to-market crítico",
              jaak: true,
              competitors: { Mifiel: true, "Adobe Sign": true },
            },
            {
              feature: "Soporte legal en México",
              description: "Expertos en regulación local",
              jaak: true,
              competitors: { Mifiel: true, "Adobe Sign": false },
            },
          ],
        }}
      />

      {/* Nota de demo */}
      <section className="py-12 px-4 sm:px-6 lg:px-8 bg-[#F3F4F8]">
        <div className="max-w-2xl mx-auto text-center">
          <p className="text-sm text-[#64748B] mb-3">
            <strong>Nota:</strong> Esta es una página de demostración del ProductLandingTemplate.
          </p>
          <p className="text-xs text-[#64748B]">
            El template es configurable (PERSONA pattern) y puede adaptarse a Signa,
            Guardian, KYC, verificación de identidad, o cualquier producto JAAK.
          </p>
        </div>
      </section>
    </main>
  );
}
