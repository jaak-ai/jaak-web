import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Chronos - Plataforma de Agentes IA Enterprise | Alternativa a OpenClaw y NemoClaw",
  description: "Orquestación de agentes de IA para empresas. Multi-LLM (Claude, GPT, Gemini), human-in-the-loop, cumplimiento CNBV/UIF. Alternativa segura a OpenClaw y NemoClaw con multi-tenancy real.",
  keywords: [
    // Primary keywords - AI Agent Orchestration
    "agentes de inteligencia artificial",
    "orquestación de agentes IA",
    "AI agent orchestration",
    "plataforma agentes IA enterprise",
    "automatización con IA",
    "workflow automation IA",

    // Competitive keywords - OpenClaw/NemoClaw
    "OpenClaw alternativa",
    "NemoClaw alternativa",
    "OpenClaw vs Chronos",
    "NemoClaw vs Chronos",
    "alternativa OpenClaw enterprise",
    "alternativa NemoClaw México",
    "OpenClaw seguro",
    "NemoClaw compliance",
    "mejor que OpenClaw",
    "OpenClaw para empresas",

    // LLM-related keywords
    "multi-LLM platform",
    "Claude GPT Gemini",
    "Anthropic Claude enterprise",
    "OpenAI GPT enterprise",
    "Google Gemini enterprise",
    "AWS Bedrock agents",
    "Azure OpenAI agents",

    // Enterprise/Compliance keywords
    "agentes IA cumplimiento regulatorio",
    "IA para bancos México",
    "IA para financieras",
    "CNBV compliance IA",
    "UIF compliance IA",
    "LFPIORPI automatización",
    "AML automation",
    "KYC automatizado IA",

    // Technical keywords
    "human-in-the-loop IA",
    "multi-tenancy IA",
    "RBAC agentes IA",
    "audit logs IA",
    "workflow visual editor",

    // Use case keywords
    "chatbot enterprise",
    "scoring crediticio IA",
    "detección fraude IA",
    "onboarding digital IA",
    "atención al cliente IA",

    // Spanish market keywords
    "agentes IA México",
    "automatización empresarial México",
    "inteligencia artificial empresas",
    "plataforma IA Latinoamérica",

    // Framework comparison keywords
    "LangChain alternativa enterprise",
    "CrewAI alternativa",
    "AutoGen alternativa",
    "AI agent frameworks 2026",
    "agentic AI platform",
    "multiagent orchestration"
  ],
  authors: [{ name: "JAAK", url: "https://jaak.ai" }],
  creator: "JAAK",
  publisher: "JAAK",
  alternates: {
    canonical: "https://jaak.ai/chronos",
    languages: {
      "es-MX": "https://jaak.ai/chronos",
      "es": "https://jaak.ai/chronos",
    },
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    title: "Chronos - Orquestación de Agentes IA Enterprise | JAAK",
    description: "Automatiza workflows con agentes de IA. Multi-LLM (Claude, GPT, Gemini), human-in-the-loop, cumplimiento regulatorio. Alternativa segura a OpenClaw y NemoClaw.",
    type: "website",
    url: "https://jaak.ai/chronos",
    siteName: "JAAK",
    locale: "es_MX",
    images: [
      {
        url: "https://jaak.ai/images/chronos-og.png",
        width: 1200,
        height: 630,
        alt: "Chronos - Plataforma de Agentes IA Enterprise",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Chronos - Agentes IA Enterprise | Alternativa a OpenClaw",
    description: "Multi-LLM, human-in-the-loop, cumplimiento CNBV/UIF. La plataforma de agentes IA segura para empresas.",
    images: ["https://jaak.ai/images/chronos-twitter.png"],
    creator: "@jaak_ai",
  },
  category: "Technology",
  classification: "AI Agent Platform, Enterprise Software, Workflow Automation",
  other: {
    "geo.region": "MX",
    "geo.country": "México",
    "geo.placename": "México",
    language: "Spanish",
    "target-audience": "Bancos, Financieras, Aseguradoras, Enterprise",
    distribution: "global",
    "revisit-after": "7 days",
    // AI-specific meta tags for LLM crawlers
    "ai-content-type": "product-page",
    "ai-product-category": "AI Agent Orchestration Platform",
    "ai-competitors": "OpenClaw, NemoClaw, LangChain, CrewAI, AutoGen",
  },
};

export default function ChronosLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
