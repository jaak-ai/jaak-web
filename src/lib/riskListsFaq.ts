// Datos del FAQ de /listas-de-riesgo-pld-aml. Vive fuera de RiskListsFAQ.tsx
// (que es "use client") para que page.tsx (server component) pueda importar
// el arreglo plano sin cruzar el boundary de cliente y así construir el
// JSON-LD FAQPage a partir de la misma fuente que el texto visible.
export interface FAQItem {
  id: string;
  question: string;
  answer: string;
}

export const riskListsFaqItems: FAQItem[] = [
  {
    id: "que-es",
    question: "¿Qué es una consulta de listas de riesgo?",
    answer:
      "Es un proceso de comparación de una persona o empresa contra fuentes de sanciones, PEP, riesgo fiscal, alertas regulatorias, personas buscadas y registros preventivos. Su objetivo es detectar señales que requieran validación o análisis adicional.",
  },
  {
    id: "cuantas-fuentes",
    question: "¿Cuántas fuentes consulta JAAK?",
    answer:
      "La guía 2026 de JAAK documenta 43 fuentes nacionales e internacionales. La disponibilidad puede variar conforme a las actualizaciones, condiciones de acceso y disponibilidad de cada autoridad.",
  },
  {
    id: "personas-empresas",
    question: "¿JAAK consulta personas y empresas?",
    answer:
      "Sí. La consulta puede configurarse para personas físicas y morales utilizando los datos disponibles para cada tipo de sujeto.",
  },
  {
    id: "coincidencia-rechazo",
    question: "¿Una coincidencia significa que debo rechazar al cliente?",
    answer:
      "No necesariamente. La respuesta depende de la fuente, el nivel de coincidencia, los datos adicionales y las políticas de la organización. Una PEP, una sanción restrictiva y un registro de validación no tienen el mismo efecto.",
  },
  {
    id: "que-es-pep",
    question: "¿Qué es una PEP?",
    answer:
      "Es una persona que ocupa o ha ocupado una función pública relevante. Identificarla no implica delito ni corrupción; puede requerir medidas de debida diligencia reforzada.",
  },
  {
    id: "kyc-vs-listas",
    question: "¿Qué diferencia existe entre KYC y listas de riesgo?",
    answer:
      "KYC busca verificar la identidad y conocer al cliente. La consulta de listas busca detectar señales asociadas con sanciones, PEP, alertas y otros riesgos. Juntos permiten construir un proceso de onboarding más completo.",
  },
  {
    id: "expediente",
    question: "¿La consulta puede formar parte de un expediente?",
    answer:
      "Sí. Cuando se contrata junto con KYC, el resultado puede incorporarse al expediente digital junto con la información de identidad y la trazabilidad del proceso.",
  },
  {
    id: "onboarding",
    question: "¿Puedo integrar la consulta a mi onboarding?",
    answer:
      "Sí, la solución está diseñada para integrarse a los procesos digitales de alta. Solicita una demo para revisar las modalidades disponibles (API, plataforma, o ambas) según tu operación.",
  },
  {
    id: "monitoreo",
    question: "¿Se puede monitorear a una persona después del alta?",
    answer:
      "La disponibilidad y forma del monitoreo dependen de la configuración y contratación del servicio. Solicita una demo para revisar el flujo adecuado.",
  },
  {
    id: "resultado-info",
    question: "¿Qué información contiene un resultado?",
    answer:
      "Puede incluir estado de la búsqueda, score, fuente, campo coincidente, programa, fecha y evidencia o snapshot del resultado, según la fuente y configuración aplicable.",
  },
  {
    id: "sustituye-analisis",
    question: "¿La consulta sustituye el análisis de cumplimiento?",
    answer:
      "No. La herramienta ayuda a detectar y documentar señales. La clasificación y decisión final deben realizarse conforme a las políticas de la organización y al marco aplicable.",
  },
  {
    id: "fuentes-actualizan",
    question: "¿Las fuentes se actualizan?",
    answer:
      "Las fuentes dependen de las publicaciones y disponibilidad de las autoridades u organismos emisores. La frecuencia exacta de actualización varía según cada fuente y no se ofrece como un compromiso general.",
  },
];
