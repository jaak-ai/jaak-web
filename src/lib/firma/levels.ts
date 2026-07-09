export type RiskLevel = "Bajo" | "Medio" | "Alto" | "Regulado";

export type SignatureLevel = {
  id: string;
  level: number;
  name: string;
  shortName: string;
  risk: RiskLevel;
  color: string;
  icon: string;
  description: string;
  idealFor: string[];
  evidence: string[];
  useWhen: string;
  cta: string;
  href: string;
  /** Fields used by SignatureComparisonTable */
  matrix: {
    identity: string | null;
    timestamp: boolean;
    nom151: boolean;
    biometria: boolean;
    kyc: boolean;
    evidenceLevel: string;
    useCase: string;
  };
};

export const riskColors: Record<RiskLevel, string> = {
  Bajo: "#64748B",
  Medio: "#F59E0B",
  Alto: "#F97316",
  Regulado: "#2DB6C1",
};

export const signatureLevels: SignatureLevel[] = [
  {
    id: "simple",
    level: 1,
    name: "Firma Simple",
    shortName: "Firma Simple",
    risk: "Bajo",
    color: "#64748B",
    icon: "✍️",
    description:
      "Para documentos de bajo riesgo donde necesitas capturar consentimiento de forma rápida.",
    idealFor: [
      "Acuerdos internos",
      "Recibos",
      "Autorizaciones simples",
      "NDAs básicos",
      "Confirmaciones operativas",
    ],
    evidence: [
      "Aceptación del firmante",
      "Fecha y hora",
      "Correo o identificador",
      "Bitácora básica",
      "Documento firmado",
    ],
    useWhen: "el documento es de bajo riesgo y solo necesitas dejar constancia de que alguien aceptó.",
    cta: "Ver firma simple",
    href: "/firma-electronica-simple",
    matrix: {
      identity: null,
      timestamp: false,
      nom151: false,
      biometria: false,
      kyc: false,
      evidenceLevel: "Baja",
      useCase: "Acuerdos internos, NDAs, recibos",
    },
  },
  {
    id: "sello-tiempo",
    level: 2,
    name: "Firma Certificada con Sellos de Tiempo",
    shortName: "Sellos de Tiempo",
    risk: "Medio",
    color: "#F59E0B",
    icon: "⏱",
    description:
      "Para documentos donde necesitas probar cuándo ocurrió la firma y reforzar la evidencia temporal del documento.",
    idealFor: [
      "Aprobaciones sensibles",
      "Consentimientos",
      "Órdenes de servicio",
      "Documentos que requieren fecha cierta operativa",
      "Evidencia de aceptación",
    ],
    evidence: [
      "Hash del documento",
      "Fecha y hora confiable",
      "Sello digital de tiempo",
      "Bitácora de eventos",
      "Expediente descargable",
    ],
    useWhen: "necesitas probar en qué momento exacto ocurrió la firma o el evento.",
    cta: "Ver firma certificada",
    href: "/firma-certificada-sello-tiempo",
    matrix: {
      identity: null,
      timestamp: true,
      nom151: false,
      biometria: false,
      kyc: false,
      evidenceLevel: "Media",
      useCase: "Aprobaciones sensibles, órdenes de servicio",
    },
  },
  {
    id: "nom151",
    level: 3,
    name: "Firma Digital NOM-151",
    shortName: "Firma Digital NOM-151",
    risk: "Alto",
    color: "#2DB6C1",
    icon: "🔐",
    description:
      "Para contratos y documentos donde necesitas conservar evidencia de integridad conforme al marco mexicano.",
    idealFor: [
      "Contratos comerciales",
      "Contratos financieros",
      "Documentos inmobiliarios",
      "Servicios profesionales",
      "Expedientes auditables",
    ],
    evidence: [
      "Hash SHA-256",
      "Constancia de conservación NOM-151",
      "Sello de tiempo",
      "Bitácora",
      "Expediente auditable",
    ],
    useWhen: "el documento puede ser disputado o auditado y necesitas fortalecer su integridad y conservación.",
    cta: "Ver firma NOM-151",
    href: "/firma-electronica-nom-151",
    matrix: {
      identity: null,
      timestamp: true,
      nom151: true,
      biometria: false,
      kyc: false,
      evidenceLevel: "Alta",
      useCase: "Contratos comerciales, financieros e inmobiliarios",
    },
  },
  {
    id: "efirma",
    level: 4,
    name: "e.firma (SAT)",
    shortName: "e.firma (SAT)",
    risk: "Alto",
    color: "#3B82F6",
    icon: "🪪",
    description:
      "Para documentos donde el firmante utiliza su e.firma vigente del SAT como mecanismo avanzado de firma dentro del flujo JAAK.",
    idealFor: [
      "Representantes legales",
      "Contratos B2B",
      "Autorizaciones corporativas",
      "Documentos de alto valor",
      "Operaciones donde se requiere mayor no repudio",
    ],
    evidence: [
      "Firma con certificado digital del firmante",
      "Identificación del certificado",
      "Fecha y hora",
      "Documento firmado",
      "Expediente auditable",
    ],
    useWhen: "quien firma es un representante legal y necesitas mayor certeza de autoría y no repudio.",
    cta: "Ver firma con e.firma",
    href: "/firma-electronica-efirma",
    matrix: {
      identity: "Certificado digital (e.firma)",
      timestamp: true,
      nom151: false,
      biometria: false,
      kyc: false,
      evidenceLevel: "Alta",
      useCase: "Representantes legales, contratos B2B de alto valor",
    },
  },
  {
    id: "biometrica",
    level: 5,
    name: "Firma Digital NOM-151 + Biometría",
    shortName: "NOM-151 + Biometría",
    risk: "Alto",
    color: "#2DB6C1",
    icon: "🧬",
    description:
      "Para operaciones donde no basta con firmar: necesitas comprobar que la persona estuvo presente y corresponde con su identidad.",
    idealFor: [
      "Créditos",
      "Seguros",
      "Onboarding remoto",
      "Consentimientos sensibles",
      "Contratos con riesgo de suplantación",
    ],
    evidence: [
      "Selfie biométrica",
      "Prueba de vida",
      "Comparación facial",
      "Documento firmado",
      "NOM-151 si aplica",
      "Expediente auditable",
    ],
    useWhen: "necesitas comprobar que la persona que firma está presente y corresponde con su identidad.",
    cta: "Ver firma biométrica",
    href: "/firma-electronica-biometrica",
    matrix: {
      identity: "Biometría facial + prueba de vida",
      timestamp: true,
      nom151: true,
      biometria: true,
      kyc: false,
      evidenceLevel: "Muy alta",
      useCase: "Créditos, seguros, onboarding remoto",
    },
  },
  {
    id: "kyc",
    level: 6,
    name: "Firma Digital NOM-151 + KYC",
    shortName: "NOM-151 + KYC",
    risk: "Regulado",
    color: "#2AD796",
    icon: "🛡️",
    description:
      "Para entidades reguladas o procesos de alto riesgo donde necesitas verificar identidad, validar listas y firmar en un solo flujo.",
    idealFor: ["Fintech", "SOFOM", "Inmobiliarias", "Gaming", "Telco", "Entidades con procesos PLD/FT"],
    evidence: [
      "OCR de documento",
      "Validación de identidad",
      "Biometría facial",
      "Listas AML/PEP/OFAC/SAT-69B si aplica",
      "Firma",
      "NOM-151",
      "Expediente completo",
    ],
    useWhen: "tu operación está regulada o requiere procesos de prevención de lavado de dinero (PLD/FT).",
    cta: "Ver firma + KYC",
    href: "/firma-electronica-kyc",
    matrix: {
      identity: "OCR + CURP + biometría + listas",
      timestamp: true,
      nom151: true,
      biometria: true,
      kyc: true,
      evidenceLevel: "Máxima",
      useCase: "Fintech, SOFOM, inmobiliarias, entidades PLD/FT",
    },
  },
];

export type QuizRisk = "low" | "medium" | "high" | "regulated";
export type QuizIdentity = "none" | "basic" | "biometric" | "kyc";
export type QuizIntegrity = "datetime" | "timestamp" | "nom151" | "nom151-full";
export type QuizSigner = "individual" | "legalRepresentative" | "client" | "employee";

export type QuizAnswers = {
  risk?: QuizRisk;
  identity?: QuizIdentity;
  integrity?: QuizIntegrity;
  signer?: QuizSigner;
};

export function getRecommendation(answers: QuizAnswers): string {
  if (answers.risk === "regulated" || answers.identity === "kyc") return "kyc";
  if (answers.identity === "biometric") return "biometrica";
  if (
    answers.risk === "high" &&
    (answers.integrity === "nom151" || answers.integrity === "nom151-full") &&
    answers.signer === "legalRepresentative"
  ) {
    return "efirma";
  }
  if (answers.integrity === "nom151" || answers.integrity === "nom151-full") return "nom151";
  if (answers.integrity === "timestamp") return "sello-tiempo";
  return "simple";
}
