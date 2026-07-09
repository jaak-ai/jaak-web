"use client";

import { useState, type ReactNode } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Link from "next/link";
import {
  chronosOrganizationSchema,
  chronosSoftwareSchema,
  chronosFAQSchema,
  chronosBreadcrumbSchema,
  chronosHowToSchema,
} from "./schema";

function Svg({ className, children }: { className: string; children: ReactNode }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      {children}
    </svg>
  );
}

function Icon({ name, className = "w-6 h-6" }: { name: string; className?: string }) {
  switch (name) {
    case "chart-bar":
      return (
        <Svg className={className}>
          <line x1="3" y1="21" x2="21" y2="21" />
          <rect x="5" y="11" width="3" height="8" />
          <rect x="10.5" y="7" width="3" height="12" />
          <rect x="16" y="13" width="3" height="6" />
        </Svg>
      );
    case "building":
      return (
        <Svg className={className}>
          <line x1="3" y1="21" x2="21" y2="21" />
          <path d="M4 21V9l8-5 8 5v12" />
          <line x1="9" y1="21" x2="9" y2="12" />
          <line x1="15" y1="21" x2="15" y2="12" />
        </Svg>
      );
    case "id-card":
      return (
        <Svg className={className}>
          <rect x="3" y="5" width="18" height="14" rx="2" />
          <circle cx="8" cy="11" r="2" />
          <line x1="13" y1="10" x2="18" y2="10" />
          <line x1="13" y1="14" x2="18" y2="14" />
          <line x1="6" y1="15.5" x2="10" y2="15.5" />
        </Svg>
      );
    case "banknote":
      return (
        <Svg className={className}>
          <rect x="2" y="6" width="20" height="12" rx="2" />
          <circle cx="12" cy="12" r="2.5" />
          <path d="M6 6v.01M18 18v.01" />
        </Svg>
      );
    case "search":
      return (
        <Svg className={className}>
          <circle cx="11" cy="11" r="7" />
          <line x1="16.5" y1="16.5" x2="21" y2="21" />
        </Svg>
      );
    case "chat":
      return (
        <Svg className={className}>
          <path d="M4 5h16a1 1 0 0 1 1 1v9a1 1 0 0 1-1 1H9l-4 4v-4H4a1 1 0 0 1-1-1V6a1 1 0 0 1 1-1z" />
        </Svg>
      );
    case "users":
      return (
        <Svg className={className}>
          <circle cx="9" cy="8" r="3" />
          <path d="M3 20c0-3.3 2.7-6 6-6s6 2.7 6 6" />
          <path d="M16 5.5a3 3 0 0 1 0 5.5M21 20c0-2.5-1.5-4.7-3.7-5.6" />
        </Svg>
      );
    case "envelope":
      return (
        <Svg className={className}>
          <rect x="3" y="5" width="18" height="14" rx="2" />
          <path d="M3 7l9 6 9-6" />
        </Svg>
      );
    case "link":
      return (
        <Svg className={className}>
          <path d="M10 13a5 5 0 0 0 7 0l2-2a5 5 0 0 0-7-7l-1 1" />
          <path d="M14 11a5 5 0 0 0-7 0l-2 2a5 5 0 0 0 7 7l1-1" />
        </Svg>
      );
    case "globe":
      return (
        <Svg className={className}>
          <circle cx="12" cy="12" r="9" />
          <line x1="3" y1="12" x2="21" y2="12" />
          <path d="M12 3a15 15 0 0 1 0 18a15 15 0 0 1 0-18z" />
        </Svg>
      );
    case "bolt":
      return (
        <Svg className={className}>
          <path d="M13 3L4 14h6l-1 7 9-11h-6l1-7z" />
        </Svg>
      );
    case "headset":
      return (
        <Svg className={className}>
          <path d="M4 13v-1a8 8 0 0 1 16 0v1" />
          <rect x="3" y="13" width="4" height="6" rx="1" />
          <rect x="17" y="13" width="4" height="6" rx="1" />
          <path d="M20 19a4 4 0 0 1-4 4h-2" />
        </Svg>
      );
    case "trending-up":
      return (
        <Svg className={className}>
          <polyline points="3 17 9 11 13 15 21 7" />
          <polyline points="15 7 21 7 21 13" />
        </Svg>
      );
    case "check-badge":
      return (
        <Svg className={className}>
          <circle cx="12" cy="12" r="9" />
          <path d="M8.5 12.5l2.5 2.5 4.5-5" />
        </Svg>
      );
    case "shield":
      return (
        <Svg className={className}>
          <path d="M12 3l7 3v5c0 4.5-3 8-7 10-4-2-7-5.5-7-10V6l7-3z" />
          <path d="M9 12l2 2 4-4" />
        </Svg>
      );
    case "plug":
      return (
        <Svg className={className}>
          <path d="M9 3v4M15 3v4M7 7h10v3a5 5 0 0 1-10 0V7zM12 15v6" />
        </Svg>
      );
    case "code":
      return (
        <Svg className={className}>
          <polyline points="8 8 4 12 8 16" />
          <polyline points="16 8 20 12 16 16" />
          <line x1="13" y1="6" x2="11" y2="18" />
        </Svg>
      );
    case "sparkles":
      return (
        <Svg className={className}>
          <path d="M12 3l1.8 4.7L18.5 9.5 13.8 11.3 12 16l-1.8-4.7L5.5 9.5l4.7-1.8L12 3z" />
          <path d="M5 4v2M4 5h2M19 16v2M18 17h2" />
        </Svg>
      );
    case "scale":
      return (
        <Svg className={className}>
          <line x1="12" y1="4" x2="12" y2="20" />
          <line x1="7" y1="20" x2="17" y2="20" />
          <line x1="5" y1="7" x2="19" y2="7" />
          <path d="M5 7l-2.5 5a3 3 0 0 0 5 0L5 7zM19 7l-2.5 5a3 3 0 0 0 5 0L19 7z" />
        </Svg>
      );
    case "document":
      return (
        <Svg className={className}>
          <path d="M7 3h7l4 4v14a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1z" />
          <polyline points="14 3 14 7 18 7" />
          <line x1="9" y1="12" x2="15" y2="12" />
          <line x1="9" y1="16" x2="15" y2="16" />
        </Svg>
      );
    case "refresh":
      return (
        <Svg className={className}>
          <path d="M4 12a8 8 0 0 1 13.7-5.7L20 8" />
          <polyline points="20 4 20 8 16 8" />
          <path d="M20 12a8 8 0 0 1-13.7 5.7L4 16" />
          <polyline points="4 20 4 16 8 16" />
        </Svg>
      );
    case "device-mobile":
      return (
        <Svg className={className}>
          <rect x="7" y="3" width="10" height="18" rx="2" />
          <line x1="11" y1="18" x2="13" y2="18" />
        </Svg>
      );
    case "pencil":
      return (
        <Svg className={className}>
          <path d="M4 20h4L19 9a2 2 0 0 0-3-3L5 17v3z" />
          <line x1="14" y1="7" x2="17" y2="10" />
        </Svg>
      );
    case "user":
      return (
        <Svg className={className}>
          <circle cx="12" cy="8" r="4" />
          <path d="M5 21c0-3.9 3.1-7 7-7s7 3.1 7 7" />
        </Svg>
      );
    case "cog":
      return (
        <Svg className={className}>
          <circle cx="12" cy="12" r="3.5" />
          <path d="M12 2v3M12 19v3M4.2 4.2l2.1 2.1M17.7 17.7l2.1 2.1M2 12h3M19 12h3M4.2 19.8l2.1-2.1M17.7 6.3l2.1-2.1" />
        </Svg>
      );
    case "lock":
      return (
        <Svg className={className}>
          <rect x="5" y="11" width="14" height="10" rx="2" />
          <path d="M8 11V8a4 4 0 0 1 8 0v3" />
        </Svg>
      );
    case "clipboard":
      return (
        <Svg className={className}>
          <rect x="6" y="4" width="12" height="17" rx="2" />
          <rect x="9" y="2.5" width="6" height="3.5" rx="1" />
          <line x1="9" y1="11" x2="15" y2="11" />
          <line x1="9" y1="15" x2="15" y2="15" />
        </Svg>
      );
    case "hand":
      return (
        <Svg className={className}>
          <path d="M9 11V6.5a1.5 1.5 0 0 1 3 0V10" />
          <path d="M12 10V5.5a1.5 1.5 0 0 1 3 0V10" />
          <path d="M15 10.5V7.5a1.5 1.5 0 0 1 3 0v6.5a6 6 0 0 1-6 6h-1a6 6 0 0 1-4.3-1.8l-3-3a1.6 1.6 0 0 1 2.3-2.2L9 15V7a1.5 1.5 0 0 1 3 0" />
        </Svg>
      );
    default:
      return null;
  }
}

const llmProviders = [
  { name: "Claude", company: "Anthropic" },
  { name: "GPT", company: "OpenAI" },
  { name: "Gemini", company: "Google" },
  { name: "Bedrock", company: "AWS" },
  { name: "Azure OpenAI", company: "Microsoft" },
  { name: "OCI GenAI", company: "Oracle" },
];

const integrationCategories = [
  {
    name: "Servicios Financieros",
    integrations: [
      { name: "Buró de Crédito", icon: "chart-bar" },
      { name: "SAT / RFC", icon: "building" },
      { name: "RENAPO / CURP", icon: "id-card" },
      { name: "SPEI", icon: "banknote" },
      { name: "Listas PLD/AML", icon: "search" },
    ],
  },
  {
    name: "Comunicación",
    integrations: [
      { name: "Slack", icon: "chat" },
      { name: "Teams", icon: "users" },
      { name: "Email / SMS", icon: "envelope" },
    ],
  },
  {
    name: "Conectores",
    integrations: [
      { name: "Webhooks", icon: "link" },
      { name: "REST API", icon: "globe" },
      { name: "gRPC", icon: "bolt" },
    ],
  },
];

const useCases = [
  {
    title: "Atención al Cliente 24/7",
    description: "Agentes IA que resuelven consultas de cuentas, pólizas y movimientos sin intervención humana.",
    icon: "headset",
    color: "#2DB6C1",
  },
  {
    title: "Scoring Crediticio Asistido",
    description: "Agentes que asisten a analistas en evaluación de solicitudes con acceso a Buró de Crédito y SAT.",
    icon: "trending-up",
    color: "#212A45",
  },
  {
    title: "KYC/Onboarding Automatizado",
    description: "Verificación de identidad con JAAK OCR + biometría + firma electrónica en un solo workflow.",
    icon: "check-badge",
    color: "#2DB6C1",
  },
  {
    title: "Detección de Fraude",
    description: "Análisis de transacciones y detección de anomalías con human-in-the-loop para casos críticos.",
    icon: "shield",
    color: "#212A45",
  },
];

const stats = [
  { value: "Minutos", label: "Onboarding KYC" },
  { value: "100%", label: "Trazabilidad auditable" },
  { value: "<1 día", label: "Primer workflow en prod" },
];

const pluginSources = [
  { name: "MCP Servers", icon: "plug", description: "Model Context Protocol" },
  { name: "Claude Code", icon: "code", description: "Skills de Anthropic" },
  { name: "OpenAI Assistants", icon: "sparkles", description: "Asistentes GPT" },
  { name: "CrewAI", icon: "users", description: "Agentes colaborativos" },
  { name: "LangChain", icon: "link", description: "Chains y tools" },
];

const agentTemplates = [
  {
    name: "Loan Application Analyzer",
    icon: "chart-bar",
    description: "Analiza solicitudes evaluando perfiles financieros, historial crediticio e ingresos",
    integrations: ["Slack", "Webhook"],
  },
  {
    name: "Credit Risk Assessor",
    icon: "scale",
    description: "Genera scores de riesgo, recomendaciones de aprobación y términos de préstamo",
    integrations: ["Slack", "Webhook"],
  },
  {
    name: "Document Collection Agent",
    icon: "document",
    description: "Guía a solicitantes en documentación, valida con OCR y rastrea completitud",
    integrations: ["Webhook"],
  },
  {
    name: "Loan Processing Pipeline",
    icon: "refresh",
    description: "Workflow end-to-end: Analyzer → Risk Assessor → Decisión. Evaluación automatizada",
    integrations: ["Slack", "Webhook"],
  },
  {
    name: "Preventive Collections Agent",
    icon: "device-mobile",
    description: "Recordatorios pre-vencimiento, genera links de pago. Cumple CONDUSEF",
    integrations: ["Webhook"],
  },
  {
    name: "KYC Onboarding Agent",
    icon: "check-badge",
    description: "Verificación de identidad con OCR + biometría + validación documental",
    integrations: ["JAAK OCR", "JAAK Recog"],
  },
];

export default function ChronosPage() {
  const [formData, setFormData] = useState({
    name: "",
    empresa: "",
    email: "",
    telefono: "",
    mensaje: "",
  });
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");
    setErrorMessage("");

    try {
      const res = await fetch("/api/landing", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...formData, source: "landing-chronos" }),
      });

      if (res.ok) {
        setStatus("success");
        setFormData({ name: "", empresa: "", email: "", telefono: "", mensaje: "" });
      } else {
        const data = await res.json().catch(() => ({}));
        setStatus("error");
        setErrorMessage(data.error || "Error al enviar. Intenta de nuevo.");
      }
    } catch {
      setStatus("error");
      setErrorMessage("Error de conexión. Intenta de nuevo.");
    }
  };

  return (
    <>
      {/* Structured Data for SEO - robots e IA pueden leer esto fácilmente */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify([
            chronosOrganizationSchema,
            chronosSoftwareSchema,
            chronosFAQSchema,
            chronosBreadcrumbSchema,
            chronosHowToSchema,
          ]),
        }}
      />

      <Header />
      <main>
        {/* Hero Section */}
        <section className="pt-32 pb-20 bg-gradient-to-br from-[#0E1133] via-[#212A45] to-[#0E1133] relative overflow-hidden">
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <div className="absolute top-0 right-1/4 w-[600px] h-[600px] bg-[#2DB6C1]/10 rounded-full blur-[140px]" />
            <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-[#2DB6C1]/10 rounded-full blur-[100px]" />
          </div>

          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#2DB6C1]/10 border border-[#2DB6C1]/30 rounded-full mb-6">
                  <span className="w-2 h-2 bg-[#2DB6C1] rounded-full animate-pulse"></span>
                  <span className="text-[#2DB6C1] text-sm font-medium">Agentes IA para Instituciones Financieras</span>
                </div>

                <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-white mb-6 leading-tight">
                  KYC de días a minutos.
                  <br />
                  <span className="text-[#2DB6C1]">
                    Crédito en minutos.
                  </span>
                  <br />
                  Cero sustos con CNBV.
                </h1>

                <p className="text-xl text-white/70 mb-8">
                  Automatiza onboarding, scoring y cobranza con agentes IA que cumplen
                  <strong className="text-white"> CNBV, UIF y LFPIORPI </strong>
                  desde el primer día. Human-in-the-loop para decisiones críticas.
                </p>

                <div className="flex flex-wrap gap-4 mb-10">
                  <a
                    href="#contacto"
                    className="px-6 py-3 bg-gradient-to-r from-[#2DB6C1] to-[#25969f] text-white font-bold rounded-lg hover:opacity-90 transition-all"
                  >
                    Ver demo →
                  </a>
                  <a
                    href="#seguridad"
                    className="px-6 py-3 bg-white/10 border border-white/20 text-white font-semibold rounded-lg hover:bg-white/20 transition-all"
                  >
                    Ver seguridad y cumplimiento
                  </a>
                </div>

                {/* Stats */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  {stats.map((stat, i) => (
                    <div key={i} className="p-4 bg-white/5 border border-white/10 rounded-xl text-center">
                      <div className="text-2xl font-black text-[#2DB6C1]">{stat.value}</div>
                      <div className="text-white/50 text-sm mt-1">{stat.label}</div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Right: LLM Providers */}
              <div className="hidden lg:block">
                <div className="bg-white/5 border border-white/10 rounded-2xl p-8 backdrop-blur-sm">
                  <h3 className="text-white/60 text-xs font-medium uppercase tracking-wider mb-6">
                    Proveedores LLM Soportados
                  </h3>
                  <div className="grid grid-cols-2 gap-4">
                    {llmProviders.map((provider, i) => (
                      <div
                        key={i}
                        className="flex items-center gap-3 p-3 bg-white/5 rounded-lg border border-white/10 hover:border-[#2DB6C1]/30 transition-all"
                      >
                        <span className="w-9 h-9 rounded-lg bg-white/10 border border-white/10 flex items-center justify-center text-white/80 font-semibold text-sm flex-shrink-0">
                          {provider.name.charAt(0)}
                        </span>
                        <div>
                          <div className="text-white font-medium text-sm">{provider.name}</div>
                          <div className="text-white/40 text-xs">{provider.company}</div>
                        </div>
                      </div>
                    ))}
                  </div>
                  <div className="mt-6 p-3 bg-[#2DB6C1]/10 rounded-lg">
                    <p className="text-[#2DB6C1] text-xs text-center font-medium">
                      Sin vendor lock-in. Cambia entre proveedores dinámicamente.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Integraciones con JAAK */}
        <section className="py-20 bg-gradient-to-br from-[#0E1133] to-[#212A45]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-14">
              <h2 className="text-3xl md:text-4xl font-black text-white mb-4">
                Integración Nativa con <span className="text-[#2DB6C1]">JAAK</span>
              </h2>
              <p className="text-xl text-white/60 max-w-3xl mx-auto">
                Chronos se integra profundamente con el ecosistema JAAK para KYC, firma electrónica y biometría.
                <strong className="text-white"> Un solo flujo de onboarding con evidencia legal.</strong>
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8 mb-12">
              <div className="bg-white/5 border border-white/10 rounded-2xl p-8 hover:border-[#2DB6C1]/40 transition-all">
                <div className="w-16 h-16 bg-[#2DB6C1]/20 rounded-xl flex items-center justify-center text-[#2DB6C1] mb-6">
                  <Icon name="document" className="w-7 h-7" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">JAAK OCR</h3>
                <p className="text-white/60">
                  Extracción automática de datos de INE, comprobantes de domicilio, actas constitutivas.
                  Los agentes procesan documentos en segundos.
                </p>
              </div>

              <div className="bg-white/5 border border-white/10 rounded-2xl p-8 hover:border-[#2DB6C1]/40 transition-all">
                <div className="w-16 h-16 bg-[#2DB6C1]/20 rounded-xl flex items-center justify-center text-[#2DB6C1] mb-6">
                  <Icon name="pencil" className="w-7 h-7" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">JAAK Signa</h3>
                <p className="text-white/60">
                  Firma electrónica con valor legal NOM-151. Los workflows de Chronos pueden solicitar
                  firmas automáticamente al aprobar documentos.
                </p>
              </div>

              <div className="bg-white/5 border border-white/10 rounded-2xl p-8 hover:border-[#2DB6C1]/40 transition-all">
                <div className="w-16 h-16 bg-[#2DB6C1]/20 rounded-xl flex items-center justify-center text-[#2DB6C1] mb-6">
                  <Icon name="user" className="w-7 h-7" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">JAAK Recog</h3>
                <p className="text-white/60">
                  Verificación biométrica con prueba de vida. Los agentes de KYC validan identidad
                  cruzando selfies con OCR de INE automáticamente.
                </p>
              </div>
            </div>

            {/* Integration Categories */}
            <div className="bg-white/5 border border-white/10 rounded-2xl p-8">
              <h3 className="text-white/60 text-xs font-medium uppercase tracking-wider mb-6 text-center">
                11 Integraciones por Categoría
              </h3>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {integrationCategories.map((category, i) => (
                  <div key={i} className="space-y-3">
                    <h4 className="text-white/80 text-sm font-medium">{category.name}</h4>
                    <div className="space-y-2">
                      {category.integrations.map((integration, j) => (
                        <div
                          key={j}
                          className="flex items-center gap-3 p-2 bg-white/5 rounded-lg border border-white/10"
                        >
                          <Icon name={integration.icon} className="w-5 h-5 text-[#2DB6C1] flex-shrink-0" />
                          <span className="text-white font-medium text-sm">{integration.name}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Plugins y Extensiones */}
            <div className="mt-12 bg-gradient-to-br from-[#2DB6C1]/10 to-[#25969f]/10 border border-white/20 rounded-2xl p-8">
              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold text-white mb-2">
                  Extiende tus Agentes con Plugins
                </h3>
                <p className="text-white/60">
                  Importa agentes desde Claude Code, OpenAI Assistants, CrewAI, LangChain o conecta MCP Servers.
                </p>
              </div>
              <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
                {pluginSources.map((plugin, i) => (
                  <div
                    key={i}
                    className="flex flex-col items-center gap-2 p-4 bg-white/5 rounded-xl border border-white/10 hover:border-[#2DB6C1]/40 transition-all"
                  >
                    <Icon name={plugin.icon} className="w-7 h-7 text-[#2DB6C1]" />
                    <div className="text-white font-medium text-sm text-center">{plugin.name}</div>
                    <div className="text-white/40 text-xs text-center">{plugin.description}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Rules Engine */}
            <div className="mt-8 bg-white/5 border border-white/10 rounded-2xl p-8">
              <div className="flex flex-col md:flex-row items-center gap-6">
                <div className="w-16 h-16 bg-[#2DB6C1]/20 rounded-xl flex items-center justify-center text-[#2DB6C1] flex-shrink-0">
                  <Icon name="cog" className="w-7 h-7" />
                </div>
                <div className="flex-1 text-center md:text-left">
                  <h3 className="text-xl font-bold text-white mb-2">Rules Engine con CEL</h3>
                  <p className="text-white/60">
                    Motor de reglas con Common Expression Language (CEL) para políticas de seguridad,
                    validaciones de negocio y control de flujo. Define reglas declarativas que los agentes
                    deben cumplir antes de ejecutar acciones críticas.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Templates de Agentes */}
        <section className="py-20 bg-[#0E1133]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-14">
              <span className="inline-block px-4 py-2 bg-[#2DB6C1]/10 border border-[#2DB6C1]/20 rounded-full text-[#2DB6C1] text-sm font-medium mb-6">
                Finance & Lending Templates
              </span>
              <h2 className="text-3xl md:text-4xl font-black text-white mb-4">
                Agentes <span className="text-[#2DB6C1]">Pre-configurados</span>
              </h2>
              <p className="text-xl text-white/60 max-w-3xl mx-auto">
                Templates listos para producción. Configura en horas, no en semanas.
                Workflows probados para instituciones financieras.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {agentTemplates.map((template, i) => (
                <div
                  key={i}
                  className="bg-white/5 border border-white/10 rounded-2xl p-6 hover:border-[#2DB6C1]/40 transition-all group"
                >
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-[#2DB6C1]/20 rounded-xl flex items-center justify-center text-[#2DB6C1] flex-shrink-0 group-hover:bg-[#2DB6C1]/30 transition-colors">
                      <Icon name={template.icon} className="w-6 h-6" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-lg font-bold text-white mb-2">{template.name}</h3>
                      <p className="text-white/60 text-sm mb-3">{template.description}</p>
                      <div className="flex flex-wrap gap-2">
                        {template.integrations.map((integration, j) => (
                          <span
                            key={j}
                            className="px-2 py-1 bg-white/10 rounded text-white/70 text-xs"
                          >
                            {integration}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Casos de Uso */}
        <section className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-14">
              <h2 className="text-3xl md:text-4xl font-black text-gray-900 mb-4">
                Casos de Uso para <span className="text-[#2DB6C1]">Bancos y Financieras</span>
              </h2>
              <p className="text-xl text-gray-600">
                Chronos automatiza los workflows más críticos del sector financiero con IA y human-in-the-loop.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {useCases.map((useCase, i) => (
                <div
                  key={i}
                  className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-xl transition-all border border-gray-100"
                >
                  <div className="flex items-start gap-4">
                    <div
                      className="w-14 h-14 rounded-xl flex items-center justify-center flex-shrink-0"
                      style={{ backgroundColor: `${useCase.color}20`, color: useCase.color }}
                    >
                      <Icon name={useCase.icon} className="w-7 h-7" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-gray-900 mb-2">{useCase.title}</h3>
                      <p className="text-gray-600">{useCase.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Seguridad y Compliance */}
        <section id="seguridad" className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-14">
              <h2 className="text-3xl md:text-4xl font-black text-gray-900 mb-4">
                Seguridad y Cumplimiento <span className="text-[#2DB6C1]">Enterprise</span>
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Chronos está diseñado desde cero para entornos regulados: aislamiento real por empresa,
                trazabilidad auditable y aprobación humana en las decisiones críticas.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-[#2DB6C1]/10 rounded-full flex items-center justify-center mx-auto mb-6 text-[#2DB6C1]">
                  <Icon name="lock" className="w-7 h-7" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Multi-Tenancy Real</h3>
                <p className="text-gray-600">
                  Aislamiento completo de datos por empresa. Cada tenant tiene su propia base de datos,
                  credenciales y agentes. Sin fugas de información entre clientes.
                </p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-[#2DB6C1]/10 rounded-full flex items-center justify-center mx-auto mb-6 text-[#2DB6C1]">
                  <Icon name="clipboard" className="w-7 h-7" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Audit Logs Completos</h3>
                <p className="text-gray-600">
                  Cada acción de cada agente se registra. Trazabilidad completa para auditorías de CNBV,
                  UIF y CONDUSEF. Evidencia inmutable.
                </p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-[#2DB6C1]/10 rounded-full flex items-center justify-center mx-auto mb-6 text-[#2DB6C1]">
                  <Icon name="hand" className="w-7 h-7" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Human-in-the-Loop</h3>
                <p className="text-gray-600">
                  Decisiones críticas (crédito, fraude) requieren aprobación humana. Configuración de
                  niveles de aprobación y escalación automática.
                </p>
              </div>
            </div>

            {/* Compliance badges */}
            <div className="mt-12 flex flex-wrap justify-center gap-4">
              {["CNBV", "UIF", "LFPIORPI", "NOM-151", "AML/PLD", "GDPR"].map((badge, i) => (
                <span
                  key={i}
                  className="px-4 py-2 bg-gray-100 text-gray-700 font-semibold rounded-full text-sm"
                >
                  {badge}
                </span>
              ))}
            </div>
          </div>
        </section>

        {/* CTA + Form */}
        <section id="contacto" className="py-20 bg-gradient-to-br from-[#0E1133] to-[#212A45]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-16 items-start">
              {/* Left */}
              <div>
                <h2 className="text-3xl md:text-4xl font-black text-white mb-6">
                  Solicita una Demo de Chronos
                </h2>
                <p className="text-xl text-white/70 mb-10">
                  Te mostramos cómo Chronos puede automatizar tus workflows con agentes de IA,
                  integrando JAAK OCR, Signa y biometría en un solo flujo.
                </p>

                <div className="space-y-5">
                  {[
                    "Demo personalizada con tu caso de uso",
                    "Arquitectura de integración con tus sistemas",
                    "Comparación de costos vs. proveedores actuales",
                    "Plan de implementación y migración",
                    "Cumplimiento regulatorio específico para tu industria",
                  ].map((item, i) => (
                    <div key={i} className="flex items-start gap-3">
                      <div className="w-5 h-5 rounded-full bg-[#2DB6C1] flex items-center justify-center flex-shrink-0 mt-0.5">
                        <svg className="w-3 h-3 text-[#0E1133]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                      <span className="text-white/80">{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Form */}
              <div className="bg-white rounded-2xl p-8 shadow-2xl">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">
                  Agenda tu demo
                </h3>
                <p className="text-gray-500 mb-8">
                  Un especialista en IA te contacta en menos de 24 horas.
                </p>

                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid md:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-sm font-medium text-gray-800 mb-1.5">
                        Nombre completo *
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:ring-2 focus:ring-[#2DB6C1] focus:border-transparent outline-none text-gray-900 placeholder:text-gray-400"
                        placeholder="Tu nombre"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-800 mb-1.5">
                        Empresa *
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.empresa}
                        onChange={(e) => setFormData({ ...formData, empresa: e.target.value })}
                        className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:ring-2 focus:ring-[#2DB6C1] focus:border-transparent outline-none text-gray-900 placeholder:text-gray-400"
                        placeholder="Tu empresa"
                      />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-sm font-medium text-gray-800 mb-1.5">
                        Correo electrónico *
                      </label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:ring-2 focus:ring-[#2DB6C1] focus:border-transparent outline-none text-gray-900 placeholder:text-gray-400"
                        placeholder="tu@empresa.com"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-800 mb-1.5">
                        Teléfono *
                      </label>
                      <input
                        type="tel"
                        required
                        value={formData.telefono}
                        onChange={(e) => setFormData({ ...formData, telefono: e.target.value })}
                        className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:ring-2 focus:ring-[#2DB6C1] focus:border-transparent outline-none text-gray-900 placeholder:text-gray-400"
                        placeholder="+52 55 1234 5678"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-800 mb-1.5">
                      ¿Qué caso de uso te interesa?
                    </label>
                    <textarea
                      rows={3}
                      value={formData.mensaje}
                      onChange={(e) => setFormData({ ...formData, mensaje: e.target.value })}
                      className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:ring-2 focus:ring-[#2DB6C1] focus:border-transparent outline-none resize-none text-gray-900 placeholder:text-gray-400"
                      placeholder="Ej: Queremos automatizar KYC y scoring crediticio con IA..."
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={status === "loading"}
                    className="w-full px-6 py-4 bg-gradient-to-r from-[#2DB6C1] to-[#25969f] text-white font-bold rounded-lg hover:opacity-90 transition-all disabled:opacity-50 disabled:cursor-not-allowed text-lg"
                  >
                    {status === "loading" ? "Enviando..." : "Solicitar Demo"}
                  </button>

                  {status === "success" && (
                    <div className="p-4 bg-green-50 border border-green-200 rounded-lg text-center">
                      <p className="text-green-700 font-medium">
                        Solicitud enviada. Te contactamos pronto.
                      </p>
                    </div>
                  )}

                  {status === "error" && (
                    <div className="p-4 bg-red-50 border border-red-200 rounded-lg text-center">
                      <p className="text-red-700 font-medium">{errorMessage}</p>
                    </div>
                  )}

                  <p className="text-xs text-gray-400 text-center">
                    Al enviar aceptas nuestra{" "}
                    <Link href="/privacidad" className="text-[#2DB6C1] hover:underline">
                      Política de Privacidad
                    </Link>
                    .
                  </p>
                </form>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
