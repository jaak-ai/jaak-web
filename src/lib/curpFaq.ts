// Datos del FAQ de /validar-curp-renapo. Separado de CurpFAQ.tsx ("use client")
// para que page.tsx pueda construir el JSON-LD FAQPage desde la misma fuente.
export interface FAQItem {
  id: string;
  question: string;
  answer: string;
}

export const curpFaqItems: FAQItem[] = [
  {
    id: "como-validar",
    question: "¿Cómo validar una CURP contra RENAPO?",
    answer:
      "Con una llamada POST al endpoint de validación de CURP de JAAK, enviando la CURP en el cuerpo de la petición. La respuesta indica si el registro existe en RENAPO y devuelve los datos asociados disponibles.",
  },
  {
    id: "que-es-api-curp",
    question: "¿Qué es una API CURP?",
    answer:
      "Es un endpoint que permite consultar de forma programática si una CURP existe en el Registro Nacional de Población (RENAPO) y obtener información estructurada asociada al registro, en lugar de validar únicamente su formato.",
  },
  {
    id: "jaak-valida-curp",
    question: "¿JAAK puede validar una CURP?",
    answer:
      "Sí. JAAK ofrece un endpoint de Consultas Oficiales que valida una CURP contra RENAPO y devuelve un resultado estructurado con estatus y datos de la persona registrada.",
  },
  {
    id: "formato-vs-renapo",
    question: "¿Qué diferencia hay entre validar la estructura de una CURP y consultarla contra RENAPO?",
    answer:
      "Validar el formato solo confirma que la cadena cumple la estructura de 18 caracteres (regex). Consultarla contra RENAPO confirma si el registro existe realmente y devuelve los datos asociados, algo que la validación de formato no puede determinar.",
  },
  {
    id: "que-devuelve",
    question: "¿Qué información devuelve una validación CURP?",
    answer:
      "Un indicador de validez, un identificador de operación (eventId), y —cuando la CURP existe en RENAPO— datos demográficos de la persona (nombre completo, sexo, fecha y entidad de nacimiento, nacionalidad) y, cuando RENAPO lo expone, datos del acta que sustenta el registro.",
  },
  {
    id: "integrar-api",
    question: "¿Puedo integrar la validación CURP vía API?",
    answer:
      "Sí, es un endpoint REST autenticado con API Key (Bearer token) que puedes invocar directamente desde tu backend.",
  },
  {
    id: "kyc-completo",
    question: "¿Necesito hacer un KYC completo para validar una CURP?",
    answer:
      "No. La validación de CURP es una consulta atómica e independiente. El KYC completo es un flujo distinto, útil cuando necesitas verificar integralmente a una persona (documento, biometría, listas).",
  },
  {
    id: "combinar-ine",
    question: "¿Puedo combinar CURP con INE?",
    answer:
      "Sí. Ambas son consultas independientes dentro de las Consultas Oficiales JAAK y pueden invocarse en el mismo proceso para obtener más contexto sobre una persona.",
  },
  {
    id: "combinar-aml",
    question: "¿Puedo agregar listas AML a la validación?",
    answer:
      "Sí. La consulta de listas de riesgo PLD/AML es otro endpoint independiente que puedes combinar con la validación de CURP dentro del mismo flujo.",
  },
  {
    id: "sandbox",
    question: "¿Existe sandbox?",
    answer:
      "Sí, con cuotas independientes del ambiente de producción para probar tu integración.",
  },
];
