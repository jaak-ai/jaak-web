// Datos del FAQ de /validar-ine. Separado de IneFAQ.tsx ("use client") para
// que page.tsx pueda construir el JSON-LD FAQPage desde la misma fuente.
export interface FAQItem {
  id: string;
  question: string;
  answer: string;
}

export const ineFaqItems: FAQItem[] = [
  {
    id: "como-validar",
    question: "¿Cómo validar una credencial INE?",
    answer:
      "Enviando la imagen frontal de la credencial a la API de validación INE de JAAK. El servicio extrae los datos del documento y valida su estatus contra el padrón electoral del Instituto Nacional Electoral.",
  },
  {
    id: "existe-api",
    question: "¿Existe una API para validar INE?",
    answer:
      "Sí. JAAK ofrece un endpoint de Consultas Oficiales que recibe la imagen de una credencial INE y devuelve los datos extraídos junto con su estatus de vigencia.",
  },
  {
    id: "ocr-vs-ine",
    question: "¿Qué diferencia hay entre OCR y validación INE?",
    answer:
      "El OCR documental lee y estructura la información visible en el documento. La validación INE, además de extraer los datos, confirma su estatus contra el padrón electoral —una capa de verificación que el OCR por sí solo no ofrece.",
  },
  {
    id: "es-kyc",
    question: "¿Validar una INE es lo mismo que hacer KYC?",
    answer:
      "No. La validación INE es una consulta puntual sobre la credencial. El KYC biométrico integra, además, prueba de vida y comparación facial del usuario contra el documento, dentro de un flujo de verificación de identidad más amplio.",
  },
  {
    id: "combinar-curp",
    question: "¿Puedo combinar validación INE y CURP?",
    answer:
      "Sí. Son consultas independientes dentro de las Consultas Oficiales JAAK y pueden invocarse juntas para obtener más contexto sobre una persona.",
  },
  {
    id: "agregar-biometria",
    question: "¿Puedo agregar biometría facial?",
    answer:
      "Sí, agregándola como una capa adicional a través del KYC biométrico de JAAK, que incluye prueba de vida y comparación facial.",
  },
  {
    id: "agregar-aml",
    question: "¿Puedo agregar listas AML?",
    answer:
      "Sí. La consulta de listas de riesgo PLD/AML es un endpoint independiente que puedes combinar con la validación INE dentro del mismo proceso.",
  },
  {
    id: "integra-api",
    question: "¿La validación se integra vía API?",
    answer:
      "Sí, es un endpoint REST autenticado con API Key (Bearer token) que puedes invocar directamente desde tu backend.",
  },
  {
    id: "sandbox",
    question: "¿Existe sandbox?",
    answer:
      "Sí, con cuotas independientes del ambiente de producción para probar tu integración.",
  },
  {
    id: "volumen",
    question: "¿Puedo utilizarla para grandes volúmenes?",
    answer:
      "La configuración para alto volumen depende de tu operación. Solicita una demo con un especialista para revisar la implementación adecuada.",
  },
];
