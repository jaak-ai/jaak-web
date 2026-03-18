"use client";

import { useState } from "react";
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

const llmProviders = [
  { name: "Claude", logo: "🟣", company: "Anthropic" },
  { name: "GPT", logo: "🟢", company: "OpenAI" },
  { name: "Gemini", logo: "🔵", company: "Google" },
  { name: "Bedrock", logo: "🟠", company: "AWS" },
  { name: "Azure OpenAI", logo: "🔷", company: "Microsoft" },
  { name: "OCI GenAI", logo: "🔴", company: "Oracle" },
];

const integrationCategories = [
  {
    name: "Code & Version Control",
    integrations: [
      { name: "GitHub", icon: "🐙" },
      { name: "GitLab", icon: "🦊" },
    ]
  },
  {
    name: "Project Management",
    integrations: [
      { name: "Linear", icon: "📋" },
      { name: "Jira", icon: "📊" },
    ]
  },
  {
    name: "Communication",
    integrations: [
      { name: "Slack", icon: "💬" },
      { name: "Teams", icon: "👥" },
      { name: "Email", icon: "📧" },
    ]
  },
  {
    name: "Financial Services",
    integrations: [
      { name: "Buró de Crédito", icon: "📊" },
      { name: "SAT México", icon: "🏛️" },
      { name: "SPEI", icon: "💸" },
    ]
  },
  {
    name: "Monitoring & Observability",
    integrations: [
      { name: "Datadog", icon: "📈" },
      { name: "Sentry", icon: "🔍" },
    ]
  },
  {
    name: "Custom",
    integrations: [
      { name: "Webhooks", icon: "🔗" },
      { name: "REST API", icon: "🌐" },
    ]
  },
];

const useCases = [
  {
    title: "Atención al Cliente 24/7",
    description: "Agentes IA que resuelven consultas de cuentas, pólizas y movimientos sin intervención humana.",
    icon: "🎧",
    color: "#1ECAD3",
  },
  {
    title: "Scoring Crediticio Asistido",
    description: "Agentes que asisten a analistas en evaluación de solicitudes con acceso a Buró de Crédito y SAT.",
    icon: "📈",
    color: "#655DC6",
  },
  {
    title: "KYC/Onboarding Automatizado",
    description: "Verificación de identidad con JAAK OCR + biometría + firma electrónica en un solo workflow.",
    icon: "✅",
    color: "#1ECAD3",
  },
  {
    title: "Detección de Fraude",
    description: "Análisis de transacciones y detección de anomalías con human-in-the-loop para casos críticos.",
    icon: "🛡️",
    color: "#655DC6",
  },
];

const stats = [
  { value: "6", label: "Proveedores LLM" },
  { value: "18+", label: "Integraciones" },
  { value: "99.99%", label: "SLA Disponibilidad" },
  { value: "<100ms", label: "Latencia API" },
];

const pluginSources = [
  { name: "MCP Servers", icon: "🔌", description: "Model Context Protocol" },
  { name: "Claude Code", icon: "🟣", description: "Skills de Anthropic" },
  { name: "OpenAI Assistants", icon: "🟢", description: "Asistentes GPT" },
  { name: "CrewAI", icon: "👥", description: "Agentes colaborativos" },
  { name: "LangChain", icon: "🦜", description: "Chains y tools" },
];

const agentTemplates = [
  {
    name: "Loan Application Analyzer",
    icon: "📊",
    description: "Analiza solicitudes evaluando perfiles financieros, historial crediticio e ingresos",
    integrations: ["Slack", "Webhook"]
  },
  {
    name: "Credit Risk Assessor",
    icon: "⚖️",
    description: "Genera scores de riesgo, recomendaciones de aprobación y términos de préstamo",
    integrations: ["Slack", "Webhook"]
  },
  {
    name: "Document Collection Agent",
    icon: "📄",
    description: "Guía a solicitantes en documentación, valida con OCR y rastrea completitud",
    integrations: ["Webhook"]
  },
  {
    name: "Loan Processing Pipeline",
    icon: "🔄",
    description: "Workflow end-to-end: Analyzer → Risk Assessor → Decisión. Evaluación automatizada",
    integrations: ["Slack", "Webhook"]
  },
  {
    name: "Preventive Collections Agent",
    icon: "📱",
    description: "Recordatorios pre-vencimiento, genera links de pago. Cumple CONDUSEF",
    integrations: ["Webhook"]
  },
  {
    name: "KYC Onboarding Agent",
    icon: "✅",
    description: "Verificación de identidad con OCR + biometría + validación documental",
    integrations: ["JAAK OCR", "JAAK Recog"]
  },
];

const comparisonPoints = [
  {
    feature: "Multi-tenancy",
    chronos: "✅ Aislamiento completo",
    openclaw: "❌ No soportado",
    nemoclaw: "⚠️ Básico",
  },
  {
    feature: "Seguridad Enterprise",
    chronos: "✅ RBAC + Vault + Audit",
    openclaw: "❌ Sin seguridad",
    nemoclaw: "✅ Sandbox + Políticas",
  },
  {
    feature: "Cumplimiento Regulatorio MX",
    chronos: "✅ CNBV, UIF, LFPIORPI",
    openclaw: "❌ No aplica",
    nemoclaw: "❌ No aplica",
  },
  {
    feature: "Visual Workflow Editor",
    chronos: "✅ Drag & drop",
    openclaw: "❌ Solo código",
    nemoclaw: "❌ Solo código",
  },
  {
    feature: "Integraciones México",
    chronos: "✅ SAT, Buró, RENAPO",
    openclaw: "❌ No disponible",
    nemoclaw: "❌ No disponible",
  },
  {
    feature: "Human-in-the-Loop",
    chronos: "✅ Multi-nivel",
    openclaw: "⚠️ Manual",
    nemoclaw: "⚠️ Básico",
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
        <section className="pt-32 pb-20 bg-gradient-to-br from-[#0f0f23] via-[#1a1a3e] to-[#0f0f23] relative overflow-hidden">
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <div className="absolute top-0 right-1/4 w-[600px] h-[600px] bg-[#655DC6]/10 rounded-full blur-[140px]" />
            <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-[#1ECAD3]/10 rounded-full blur-[100px]" />
          </div>

          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#655DC6]/10 border border-[#655DC6]/30 rounded-full mb-6">
                  <span className="w-2 h-2 bg-[#655DC6] rounded-full animate-pulse"></span>
                  <span className="text-[#655DC6] text-sm font-medium">AI Agent Orchestration Platform</span>
                </div>

                <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-white mb-6 leading-tight">
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#1ECAD3] to-[#655DC6]">
                    Chronos
                  </span>
                  <br />
                  Orquestación de Agentes IA para Enterprise
                </h1>

                <p className="text-xl text-white/70 mb-8">
                  Automatiza workflows complejos con agentes de IA. Multi-proveedor LLM (Claude, GPT, Gemini),
                  human-in-the-loop, y cumplimiento regulatorio mexicano.
                  <strong className="text-white"> La alternativa segura a OpenClaw y NemoClaw.</strong>
                </p>

                <div className="flex flex-wrap gap-4 mb-10">
                  <a
                    href="#contacto"
                    className="px-6 py-3 bg-gradient-to-r from-[#1ECAD3] to-[#655DC6] text-white font-bold rounded-lg hover:opacity-90 transition-all"
                  >
                    Solicitar Demo
                  </a>
                  <Link
                    href="/chronos/comparacion"
                    className="px-6 py-3 bg-white/10 border border-white/20 text-white font-semibold rounded-lg hover:bg-white/20 transition-all"
                  >
                    Ver Comparación vs OpenClaw
                  </Link>
                </div>

                {/* Stats */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  {stats.map((stat, i) => (
                    <div key={i} className="p-4 bg-white/5 border border-white/10 rounded-xl text-center">
                      <div className="text-2xl font-black text-[#1ECAD3]">{stat.value}</div>
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
                        className="flex items-center gap-3 p-3 bg-white/5 rounded-lg border border-white/10 hover:border-[#1ECAD3]/30 transition-all"
                      >
                        <span className="text-2xl">{provider.logo}</span>
                        <div>
                          <div className="text-white font-medium text-sm">{provider.name}</div>
                          <div className="text-white/40 text-xs">{provider.company}</div>
                        </div>
                      </div>
                    ))}
                  </div>
                  <div className="mt-6 p-3 bg-[#655DC6]/10 rounded-lg">
                    <p className="text-[#655DC6] text-xs text-center font-medium">
                      Sin vendor lock-in. Cambia entre proveedores dinámicamente.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Por qué Chronos vs OpenClaw/NemoClaw */}
        <section className="py-20 bg-white" id="comparacion-rapida">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-14">
              <h2 className="text-3xl md:text-4xl font-black text-gray-900 mb-4">
                ¿Por qué <span className="text-[#655DC6]">Chronos</span> y no OpenClaw o NemoClaw?
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                OpenClaw es popular pero no tiene seguridad enterprise. NemoClaw añade sandbox pero no cumplimiento regulatorio.
                <strong className="text-gray-900"> Chronos está diseñado para instituciones financieras reguladas.</strong>
              </p>
            </div>

            {/* Comparison Table */}
            <div className="overflow-x-auto">
              <table className="w-full bg-white rounded-2xl shadow-lg overflow-hidden">
                <thead>
                  <tr className="bg-gradient-to-r from-[#0f0f23] to-[#1a1a3e] text-white">
                    <th className="px-6 py-4 text-left font-bold">Característica</th>
                    <th className="px-6 py-4 text-center">
                      <div className="text-[#ff6b6b]">OpenClaw</div>
                      <div className="text-xs opacity-60">Open Source</div>
                    </th>
                    <th className="px-6 py-4 text-center">
                      <div className="text-[#4ecdc4]">NemoClaw</div>
                      <div className="text-xs opacity-60">NVIDIA</div>
                    </th>
                    <th className="px-6 py-4 text-center bg-[#655DC6]/20">
                      <div className="text-[#655DC6] font-bold">Chronos</div>
                      <div className="text-xs text-[#655DC6]/80">JAAK</div>
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {comparisonPoints.map((point, i) => (
                    <tr key={i} className={`border-b border-gray-100 ${i % 2 === 0 ? 'bg-gray-50' : 'bg-white'}`}>
                      <td className="px-6 py-4 font-semibold text-gray-900">{point.feature}</td>
                      <td className="px-6 py-4 text-center text-sm">{point.openclaw}</td>
                      <td className="px-6 py-4 text-center text-sm">{point.nemoclaw}</td>
                      <td className="px-6 py-4 text-center text-sm bg-[#655DC6]/5 font-semibold text-[#655DC6]">
                        {point.chronos}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <div className="text-center mt-8">
              <Link
                href="/chronos/comparacion"
                className="inline-flex items-center gap-2 px-6 py-3 bg-[#655DC6] text-white font-bold rounded-lg hover:bg-[#5248a8] transition-all"
              >
                Ver Comparación Detallada →
              </Link>
            </div>
          </div>
        </section>

        {/* Integraciones con JAAK */}
        <section className="py-20 bg-gradient-to-br from-[#0f0f23] to-[#1a1a3e]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-14">
              <h2 className="text-3xl md:text-4xl font-black text-white mb-4">
                Integración Nativa con <span className="text-[#1ECAD3]">JAAK</span>
              </h2>
              <p className="text-xl text-white/60 max-w-3xl mx-auto">
                Chronos se integra profundamente con el ecosistema JAAK para KYC, firma electrónica y biometría.
                <strong className="text-white"> Un solo flujo de onboarding con evidencia legal.</strong>
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8 mb-12">
              <div className="bg-white/5 border border-white/10 rounded-2xl p-8 hover:border-[#1ECAD3]/40 transition-all">
                <div className="w-16 h-16 bg-[#1ECAD3]/20 rounded-xl flex items-center justify-center text-3xl mb-6">
                  📄
                </div>
                <h3 className="text-xl font-bold text-white mb-3">JAAK OCR</h3>
                <p className="text-white/60">
                  Extracción automática de datos de INE, comprobantes de domicilio, actas constitutivas.
                  Los agentes procesan documentos en segundos.
                </p>
              </div>

              <div className="bg-white/5 border border-white/10 rounded-2xl p-8 hover:border-[#655DC6]/40 transition-all">
                <div className="w-16 h-16 bg-[#655DC6]/20 rounded-xl flex items-center justify-center text-3xl mb-6">
                  ✍️
                </div>
                <h3 className="text-xl font-bold text-white mb-3">JAAK Signa</h3>
                <p className="text-white/60">
                  Firma electrónica con valor legal NOM-151. Los workflows de Chronos pueden solicitar
                  firmas automáticamente al aprobar documentos.
                </p>
              </div>

              <div className="bg-white/5 border border-white/10 rounded-2xl p-8 hover:border-[#1ECAD3]/40 transition-all">
                <div className="w-16 h-16 bg-[#1ECAD3]/20 rounded-xl flex items-center justify-center text-3xl mb-6">
                  👤
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
                14+ Integraciones por Categoría
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
                          <span className="text-lg">{integration.icon}</span>
                          <span className="text-white font-medium text-sm">{integration.name}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Plugins y Extensiones */}
            <div className="mt-12 bg-gradient-to-br from-[#655DC6]/10 to-[#1ECAD3]/10 border border-white/20 rounded-2xl p-8">
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
                    className="flex flex-col items-center gap-2 p-4 bg-white/5 rounded-xl border border-white/10 hover:border-[#1ECAD3]/40 transition-all"
                  >
                    <span className="text-3xl">{plugin.icon}</span>
                    <div className="text-white font-medium text-sm text-center">{plugin.name}</div>
                    <div className="text-white/40 text-xs text-center">{plugin.description}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Rules Engine */}
            <div className="mt-8 bg-white/5 border border-white/10 rounded-2xl p-8">
              <div className="flex flex-col md:flex-row items-center gap-6">
                <div className="w-16 h-16 bg-[#655DC6]/20 rounded-xl flex items-center justify-center text-3xl flex-shrink-0">
                  ⚙️
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
        <section className="py-20 bg-[#0B1121]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-14">
              <span className="inline-block px-4 py-2 bg-[#1ECAD3]/10 border border-[#1ECAD3]/20 rounded-full text-[#1ECAD3] text-sm font-medium mb-6">
                Finance & Lending Templates
              </span>
              <h2 className="text-3xl md:text-4xl font-black text-white mb-4">
                Agentes <span className="text-[#1ECAD3]">Pre-configurados</span>
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
                  className="bg-white/5 border border-white/10 rounded-2xl p-6 hover:border-[#1ECAD3]/40 transition-all group"
                >
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-[#1ECAD3]/20 rounded-xl flex items-center justify-center text-2xl flex-shrink-0 group-hover:bg-[#1ECAD3]/30 transition-colors">
                      {template.icon}
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
                Casos de Uso para <span className="text-[#655DC6]">Bancos y Financieras</span>
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
                      className="w-14 h-14 rounded-xl flex items-center justify-center text-2xl flex-shrink-0"
                      style={{ backgroundColor: `${useCase.color}20` }}
                    >
                      {useCase.icon}
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
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-14">
              <h2 className="text-3xl md:text-4xl font-black text-gray-900 mb-4">
                Seguridad y Cumplimiento <span className="text-[#1ECAD3]">Enterprise</span>
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                A diferencia de OpenClaw que fue prohibido en gobierno chino y bloqueado por Meta,
                <strong className="text-gray-900"> Chronos está diseñado para entornos regulados.</strong>
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-[#1ECAD3]/10 rounded-full flex items-center justify-center mx-auto mb-6">
                  <span className="text-3xl">🔐</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Multi-Tenancy Real</h3>
                <p className="text-gray-600">
                  Aislamiento completo de datos por empresa. Cada tenant tiene su propia base de datos,
                  credenciales y agentes. Sin fugas de información entre clientes.
                </p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-[#655DC6]/10 rounded-full flex items-center justify-center mx-auto mb-6">
                  <span className="text-3xl">📋</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Audit Logs Completos</h3>
                <p className="text-gray-600">
                  Cada acción de cada agente se registra. Trazabilidad completa para auditorías de CNBV,
                  UIF y CONDUSEF. Evidencia inmutable.
                </p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-[#1ECAD3]/10 rounded-full flex items-center justify-center mx-auto mb-6">
                  <span className="text-3xl">✋</span>
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
        <section id="contacto" className="py-20 bg-gradient-to-br from-[#0f0f23] to-[#1a1a3e]">
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
                      <div className="w-5 h-5 rounded-full bg-[#1ECAD3] flex items-center justify-center flex-shrink-0 mt-0.5">
                        <svg className="w-3 h-3 text-[#0f0f23]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
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
                        className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:ring-2 focus:ring-[#655DC6] focus:border-transparent outline-none text-gray-900 placeholder:text-gray-400"
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
                        className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:ring-2 focus:ring-[#655DC6] focus:border-transparent outline-none text-gray-900 placeholder:text-gray-400"
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
                        className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:ring-2 focus:ring-[#655DC6] focus:border-transparent outline-none text-gray-900 placeholder:text-gray-400"
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
                        className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:ring-2 focus:ring-[#655DC6] focus:border-transparent outline-none text-gray-900 placeholder:text-gray-400"
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
                      className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:ring-2 focus:ring-[#655DC6] focus:border-transparent outline-none resize-none text-gray-900 placeholder:text-gray-400"
                      placeholder="Ej: Queremos automatizar KYC y scoring crediticio con IA..."
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={status === "loading"}
                    className="w-full px-6 py-4 bg-gradient-to-r from-[#1ECAD3] to-[#655DC6] text-white font-bold rounded-lg hover:opacity-90 transition-all disabled:opacity-50 disabled:cursor-not-allowed text-lg"
                  >
                    {status === "loading" ? "Enviando..." : "Solicitar Demo"}
                  </button>

                  {status === "success" && (
                    <div className="p-4 bg-green-50 border border-green-200 rounded-lg text-center">
                      <p className="text-green-700 font-medium">
                        ✓ Solicitud enviada. Te contactamos pronto.
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
                    <Link href="/privacidad" className="text-[#655DC6] hover:underline">
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
