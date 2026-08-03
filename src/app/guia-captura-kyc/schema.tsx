import { GUIA_FAQ } from "@/components/guia-captura-kyc/data";

const CANONICAL_URL = "https://jaak.ai/guia-captura-kyc";

export const guiaBreadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Inicio", item: "https://jaak.ai" },
    { "@type": "ListItem", position: 2, name: "Verificación de identidad (KYC)", item: "https://jaak.ai/docs/verificar-identidad" },
    { "@type": "ListItem", position: 3, name: "Guía de captura", item: CANONICAL_URL },
  ],
};

export const guiaFaqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: GUIA_FAQ.map((item) => ({
    "@type": "Question",
    name: item.q,
    acceptedAnswer: { "@type": "Answer", text: item.a },
  })),
};

export const guiaHowToSchema = {
  "@context": "https://schema.org",
  "@type": "HowTo",
  name: "Cómo realizar una verificación KYC correctamente",
  description: "Guía visual para capturar correctamente una identificación y el rostro durante una verificación KYC.",
  step: [
    {
      "@type": "HowToStep",
      name: "Prepare su entorno",
      text: "Ubíquese en un lugar con buena luz, fondo simple y conexión estable; tenga a la mano su documento original.",
      url: `${CANONICAL_URL}#checklist`,
    },
    {
      "@type": "HowToStep",
      name: "Capture su documento",
      text: "Fotografíe el documento plano y completo, sin reflejos, obstrucciones ni inclinación.",
      url: `${CANONICAL_URL}#documento`,
    },
    {
      "@type": "HowToStep",
      name: "Capture su rostro",
      text: "Colóquese de frente a la cámara con iluminación uniforme y sin accesorios que oculten su rostro.",
      url: `${CANONICAL_URL}#rostro`,
    },
    {
      "@type": "HowToStep",
      name: "Complete la prueba de vida",
      text: "Siga las instrucciones en pantalla manteniéndose frente a la cámara con buena iluminación.",
      url: `${CANONICAL_URL}#prueba-de-vida`,
    },
  ],
};
