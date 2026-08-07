// Datos del FAQ de /consultas-oficiales. Vive fuera de ConsultasOficialesFAQ.tsx
// (que es "use client") para que page.tsx (server component) pueda construir
// el JSON-LD FAQPage a partir de la misma fuente que el texto visible.
export interface FAQItem {
  id: string;
  question: string;
  answer: string;
}

export const consultasOficialesFaqItems: FAQItem[] = [
  {
    id: "que-son",
    question: "¿Qué son las Consultas Oficiales JAAK?",
    answer:
      "Son llamadas API independientes que validan un dato puntual de identidad o cumplimiento —CURP, credencial INE, RFC o una persona/empresa contra listas de riesgo— contra la fuente correspondiente, sin necesidad de ejecutar una sesión de verificación KYC completa.",
  },
  {
    id: "kyc-completo",
    question: "¿Necesito realizar un KYC completo para validar una CURP?",
    answer:
      "No. La validación de CURP contra RENAPO es una consulta atómica: envías el dato y recibes un resultado estructurado en la misma llamada. El KYC completo (documento, biometría, listas, expediente) es un flujo distinto para cuando necesitas verificar integralmente a una persona.",
  },
  {
    id: "solo-curp",
    question: "¿Puedo validar únicamente una CURP?",
    answer:
      "Sí. Puedes consumir la validación de CURP de forma independiente del resto de las Consultas Oficiales o del KYC biométrico.",
  },
  {
    id: "solo-ine",
    question: "¿Puedo validar una credencial INE?",
    answer:
      "Sí, mediante la imagen frontal de la credencial. JAAK extrae los datos y valida su estatus contra el padrón electoral del Instituto Nacional Electoral.",
  },
  {
    id: "diferencia-kyc",
    question: "¿Qué diferencia hay entre una consulta oficial y un KYC?",
    answer:
      "Una consulta oficial es una llamada HTTP puntual: tú provees el dato (o la imagen de la credencial) y recibes un resultado inmediato. El KYC es un flujo de sesión con varias etapas —captura de documento, biometría, prueba de vida, listas— pensado para verificar integralmente la identidad de una persona.",
  },
  {
    id: "api",
    question: "¿Las consultas se pueden integrar vía API?",
    answer:
      "Sí. Cada consulta es un endpoint REST autenticado con API Key (Bearer token) que puedes invocar directamente desde tu backend o desde la Plataforma JAAK sin desarrollar una integración.",
  },
  {
    id: "combinar",
    question: "¿Puedo combinar CURP, INE y listas AML?",
    answer:
      "Sí. Cada consulta es independiente, por lo que puedes invocar una, varias o todas dentro del mismo proceso, según el nivel de riesgo de la operación.",
  },
  {
    id: "sandbox",
    question: "¿Existe un ambiente sandbox?",
    answer:
      "Sí, con cuotas separadas del ambiente de producción para que puedas probar la integración sin consumir tu cuota productiva.",
  },
];
