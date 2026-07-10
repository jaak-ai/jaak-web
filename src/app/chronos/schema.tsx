// JSON-LD Structured Data for Chronos - AI Agent Orchestration Platform
// Optimizado para SEO y descubrimiento por robots e IA

export const chronosOrganizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "@id": "https://jaak.ai/chronos#organization",
  name: "Chronos by JAAK",
  url: "https://jaak.ai/chronos",
  logo: "https://jaak.ai/images/logos/chronos-logo.png",
  description: "Plataforma de orquestación de agentes de IA para empresas. Automatiza workflows complejos con múltiples proveedores LLM (Claude, GPT, Gemini), human-in-the-loop y gobernanza enterprise.",
  parentOrganization: {
    "@type": "Organization",
    name: "JAAK",
    url: "https://jaak.ai"
  },
  sameAs: [
    "https://github.com/jaak-ai/chronos",
    "https://www.linkedin.com/company/jaakmx/"
  ]
};

export const chronosSoftwareSchema = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  "@id": "https://jaak.ai/chronos#software",
  name: "Chronos",
  alternateName: [
    "Chronos AI Agent Platform",
    "Chronos Orchestration Platform",
    "JAAK Chronos"
  ],
  applicationCategory: "BusinessApplication",
  applicationSubCategory: "AI Agent Orchestration",
  operatingSystem: "Web, Kubernetes, Cloud",
  description: "Plataforma enterprise de orquestación de agentes de IA. Alternativa segura a OpenClaw y NemoClaw con multi-tenancy, RBAC, audit logs y cumplimiento regulatorio mexicano (CNBV, UIF, LFPIORPI).",
  provider: { "@id": "https://jaak.ai/chronos#organization" },
  offers: {
    "@type": "Offer",
    category: "Enterprise SaaS",
    priceCurrency: "USD",
    availability: "https://schema.org/InStock"
  },
  featureList: [
    "Orquestación de agentes de IA autónomos",
    "Multi-proveedor LLM (Claude, GPT, Gemini, Bedrock, Azure OpenAI)",
    "Human-in-the-loop con aprobaciones multi-nivel",
    "Multi-tenancy con aislamiento completo de datos",
    "RBAC (Role-Based Access Control)",
    "Audit logs y trazabilidad completa",
    "Policy engine con reglas CEL",
    "Integración con JAAK OCR, Signa y verificación biométrica",
    "18+ integraciones pre-construidas (Slack, GitHub, SAT, Buró de Crédito)",
    "Visual workflow editor (drag-and-drop)",
    "Kubernetes-native con autoscaling",
    "Cumplimiento CNBV, UIF, LFPIORPI, AML"
  ],
  screenshot: "https://jaak.ai/images/chronos-screenshot.png",
  softwareVersion: "2026.3",
  releaseNotes: "https://jaak.ai/chronos/changelog"
};

export const chronosComparisonSchema = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  "@id": "https://jaak.ai/chronos/comparacion",
  name: "Chronos vs OpenClaw vs NemoClaw - Comparación de Plataformas de Agentes IA 2026",
  description: "Comparación detallada entre Chronos, OpenClaw y NemoClaw. Seguridad enterprise, multi-tenancy, cumplimiento regulatorio y orquestación de agentes IA.",
  mainEntity: {
    "@type": "ItemList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        item: {
          "@type": "SoftwareApplication",
          name: "Chronos",
          description: "Plataforma enterprise de JAAK con seguridad, multi-tenancy y cumplimiento regulatorio mexicano"
        }
      },
      {
        "@type": "ListItem",
        position: 2,
        item: {
          "@type": "SoftwareApplication",
          name: "OpenClaw",
          description: "Framework open-source de agentes IA, simple pero con limitaciones de seguridad enterprise"
        }
      },
      {
        "@type": "ListItem",
        position: 3,
        item: {
          "@type": "SoftwareApplication",
          name: "NemoClaw",
          description: "Versión enterprise de OpenClaw por NVIDIA con sandbox y políticas de seguridad"
        }
      }
    ]
  }
};

export const chronosFAQSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "¿Qué es Chronos y cómo se diferencia de OpenClaw?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Chronos es una plataforma enterprise de orquestación de agentes de IA desarrollada por JAAK. A diferencia de OpenClaw que es un framework open-source simple sin seguridad enterprise, Chronos ofrece multi-tenancy con aislamiento completo de datos, RBAC, audit logs, cumplimiento regulatorio mexicano (CNBV, UIF, LFPIORPI) y human-in-the-loop obligatorio para decisiones críticas. Mientras OpenClaw usa archivos Markdown en disco y no tiene vector databases, Chronos usa MongoDB, Redis Streams y arquitectura de microservicios en Kubernetes."
      }
    },
    {
      "@type": "Question",
      name: "¿Cuál es la diferencia entre Chronos y NemoClaw de NVIDIA?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "NemoClaw es la versión enterprise de OpenClaw desarrollada por NVIDIA que añade sandbox y políticas de seguridad. Chronos va más allá: ofrece multi-tenancy real con aislamiento de datos por empresa, 18+ integraciones pre-construidas (incluyendo sistemas mexicanos como SAT y Buró de Crédito), visual workflow editor, integración nativa con JAAK OCR/Signa/biometría, y cumplimiento regulatorio específico para México (CNBV, UIF, LFPIORPI, AML). Chronos está diseñado para instituciones financieras reguladas en Latinoamérica."
      }
    },
    {
      "@type": "Question",
      name: "¿Qué proveedores de LLM soporta Chronos?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Chronos soporta múltiples proveedores LLM sin vendor lock-in: Anthropic Claude (Opus, Sonnet, Haiku), OpenAI GPT, Google Gemini, AWS Bedrock, Azure OpenAI y OCI GenAI. Los agentes pueden cambiar dinámicamente entre proveedores según el caso de uso, costo o disponibilidad."
      }
    },
    {
      "@type": "Question",
      name: "¿Chronos cumple con la regulación mexicana CNBV, UIF y LFPIORPI?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Sí. Chronos está diseñado específicamente para entornos regulados mexicanos. Incluye audit logs completos, trazabilidad de aprobaciones con firmas digitales, human-in-the-loop obligatorio para decisiones de crédito y fraude, y genera evidencia auditable para inspecciones de CNBV, UIF y CONDUSEF. Integra con JAAK para KYC/KYB y firma electrónica con valor legal NOM-151."
      }
    },
    {
      "@type": "Question",
      name: "¿Cómo funciona la integración de Chronos con JAAK?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Chronos se integra nativamente con el ecosistema JAAK: JAAK OCR para extracción de datos de documentos (INE, comprobantes, actas constitutivas), JAAK Signa para firma electrónica con valor legal NOM-151, y JAAK Recog para verificación biométrica y prueba de vida. Los agentes de Chronos pueden invocar estos servicios automáticamente en workflows de onboarding, KYC y aprobación de créditos."
      }
    },
    {
      "@type": "Question",
      name: "¿Qué casos de uso resuelve Chronos para bancos y financieras?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Chronos automatiza workflows críticos para instituciones financieras: atención al cliente 24/7 con IA, scoring crediticio asistido por agentes, KYC/onboarding digital automatizado, detección de fraude con análisis de transacciones, consultas en lenguaje natural a bases de datos, y procesamiento de documentos con OCR. Todo con human-in-the-loop para decisiones que requieren aprobación humana."
      }
    },
    {
      "@type": "Question",
      name: "¿Chronos es más seguro que OpenClaw para empresas?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Sí, significativamente. OpenClaw ha tenido restricciones de seguridad (China prohibió su uso en gobierno, Meta lo bloqueó en dispositivos corporativos) y es susceptible a prompt injection. Chronos ofrece: multi-tenancy con aislamiento de datos por empresa, RBAC en cuatro niveles, audit logs inmutables, credenciales en vault seguro (OCI Vault), sandbox para ejecución de agentes, y políticas configurables para controlar comportamiento de agentes."
      }
    },
    {
      "@type": "Question",
      name: "¿Cuánto cuesta Chronos comparado con otras plataformas de agentes IA?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Chronos tiene modelo de licencia enterprise por tenant más consumo variable (tokens LLM, integraciones). A diferencia de plataformas como ServiceNow o Microsoft Azure AI Foundry que cobran por seat, Chronos permite escalar agentes sin costo adicional por usuario. El pricing incluye: multi-tenancy, todas las integraciones pre-construidas, y soporte 24/7 en español. Contacta a ventas para cotización personalizada."
      }
    }
  ]
};

export const chronosBreadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    {
      "@type": "ListItem",
      position: 1,
      name: "JAAK",
      item: "https://jaak.ai"
    },
    {
      "@type": "ListItem",
      position: 2,
      name: "Chronos",
      item: "https://jaak.ai/chronos"
    }
  ]
};

export const chronosHowToSchema = {
  "@context": "https://schema.org",
  "@type": "HowTo",
  name: "Cómo implementar agentes de IA con Chronos",
  description: "Guía para automatizar workflows con agentes de IA usando la plataforma Chronos de JAAK",
  step: [
    {
      "@type": "HowToStep",
      name: "Definir el workflow",
      text: "Usa el visual workflow editor de Chronos para diseñar el flujo de trabajo. Arrastra y conecta pasos, define triggers (cron, webhook, Slack) y configura políticas de aprobación.",
      url: "https://jaak.ai/chronos"
    },
    {
      "@type": "HowToStep",
      name: "Configurar el agente",
      text: "Selecciona el proveedor LLM (Claude, GPT, Gemini), asigna herramientas MCP al agente, y define la persona/rol del agente (Customer Support, Risk Analysis, Onboarding).",
      url: "https://jaak.ai/chronos"
    },
    {
      "@type": "HowToStep",
      name: "Integrar servicios externos",
      text: "Conecta el agente con sistemas externos: JAAK OCR para documentos, Slack para notificaciones, Buró de Crédito para scoring, SAT para datos fiscales.",
      url: "https://jaak.ai/chronos"
    },
    {
      "@type": "HowToStep",
      name: "Configurar human-in-the-loop",
      text: "Define qué decisiones requieren aprobación humana. Configura niveles de aprobación, notificaciones y escalación automática.",
      url: "https://jaak.ai/chronos"
    },
    {
      "@type": "HowToStep",
      name: "Desplegar en producción",
      text: "Chronos despliega automáticamente en Kubernetes con autoscaling. Monitorea métricas, audit logs y costos desde el dashboard.",
      url: "https://jaak.ai/chronos"
    }
  ]
};
