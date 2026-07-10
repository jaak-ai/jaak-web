import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Link from "next/link";
import { chronosComparisonSchema } from "../schema";

export const metadata: Metadata = {
  title: "Chronos vs OpenClaw vs NemoClaw | Comparación Completa 2026",
  description: "Comparación detallada entre Chronos, OpenClaw y NemoClaw. Seguridad enterprise, multi-tenancy, cumplimiento regulatorio México (CNBV, UIF). ¿Cuál plataforma de agentes IA elegir?",
  keywords: [
    // Direct comparison keywords
    "Chronos vs OpenClaw",
    "Chronos vs NemoClaw",
    "OpenClaw vs NemoClaw",
    "OpenClaw vs NemoClaw vs Chronos",
    "comparación plataformas agentes IA",
    "mejor plataforma agentes IA 2026",

    // OpenClaw specific
    "OpenClaw problemas seguridad",
    "OpenClaw enterprise",
    "OpenClaw multi-tenancy",
    "OpenClaw alternativa segura",
    "OpenClaw prompt injection",
    "OpenClaw restricciones China",
    "OpenClaw Meta prohibido",

    // NemoClaw specific
    "NemoClaw NVIDIA",
    "NemoClaw GTC 2026",
    "NemoClaw enterprise",
    "NemoClaw sandbox",
    "NemoClaw políticas seguridad",

    // Chronos advantages
    "Chronos JAAK",
    "Chronos cumplimiento CNBV",
    "Chronos multi-tenancy",
    "Chronos RBAC",
    "Chronos audit logs",
    "Chronos México",

    // Framework comparisons
    "LangChain vs OpenClaw",
    "CrewAI vs OpenClaw",
    "AutoGen vs OpenClaw",
    "AI agent frameworks comparison 2026",
    "agentic AI platforms comparison",

    // Decision keywords
    "qué plataforma agentes IA elegir",
    "mejor agentes IA para bancos",
    "agentes IA cumplimiento regulatorio",
    "OpenClaw es seguro",
    "NemoClaw vs alternativas"
  ],
  alternates: {
    canonical: "https://jaak.ai/chronos/comparacion",
  },
  openGraph: {
    title: "Chronos vs OpenClaw vs NemoClaw - Comparación 2026",
    description: "¿Cuál plataforma de agentes IA elegir? Comparación de seguridad, multi-tenancy, cumplimiento regulatorio y características.",
    type: "website",
    url: "https://jaak.ai/chronos/comparacion",
    images: [
      {
        url: "https://jaak.ai/images/chronos-comparison-og.png",
        width: 1200,
        height: 630,
        alt: "Chronos vs OpenClaw vs NemoClaw",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Chronos vs OpenClaw vs NemoClaw - ¿Cuál Elegir?",
    description: "Comparación completa de plataformas de agentes IA. Seguridad, compliance, features.",
    images: ["https://jaak.ai/images/chronos-comparison-twitter.png"],
  },
};

const detailedComparison = [
  {
    category: "Arquitectura",
    features: [
      {
        name: "Persistencia de datos",
        chronos: "MongoDB + Redis + Oracle DB",
        openclaw: "Archivos Markdown en disco",
        nemoclaw: "Configurable (sin default)",
        winner: "chronos",
      },
      {
        name: "Job Queue",
        chronos: "Redis Streams + NATS",
        openclaw: "Sin job queue",
        nemoclaw: "Básico",
        winner: "chronos",
      },
      {
        name: "Escalabilidad",
        chronos: "Kubernetes-native con autoscaling",
        openclaw: "Local / single instance",
        nemoclaw: "Container-based",
        winner: "chronos",
      },
      {
        name: "Vector Database",
        chronos: "RAG semántico integrado",
        openclaw: "Sin vector DB",
        nemoclaw: "Opcional",
        winner: "chronos",
      },
    ],
  },
  {
    category: "Seguridad",
    features: [
      {
        name: "Multi-tenancy",
        chronos: "Aislamiento completo por empresa",
        openclaw: "No soportado",
        nemoclaw: "Básico (contexts)",
        winner: "chronos",
      },
      {
        name: "RBAC",
        chronos: "4 niveles (Owner, Admin, Editor, Viewer)",
        openclaw: "Sin control de acceso",
        nemoclaw: "Políticas básicas",
        winner: "chronos",
      },
      {
        name: "Audit Logs",
        chronos: "Completos e inmutables",
        openclaw: "No disponible",
        nemoclaw: "Básicos",
        winner: "chronos",
      },
      {
        name: "Gestión de Secretos",
        chronos: "OCI Vault integrado",
        openclaw: "Variables de entorno",
        nemoclaw: "Vault opcional",
        winner: "chronos",
      },
      {
        name: "Sandbox Ejecución",
        chronos: "Pods aislados en K8s",
        openclaw: "Ejecución local sin aislamiento",
        nemoclaw: "OpenShell sandbox",
        winner: "tie-cn",
      },
      {
        name: "Prompt Injection Protection",
        chronos: "Guardrails + validación",
        openclaw: "Susceptible a ataques",
        nemoclaw: "Políticas de filtrado",
        winner: "chronos",
      },
    ],
  },
  {
    category: "Cumplimiento Regulatorio",
    features: [
      {
        name: "CNBV México",
        chronos: "Diseñado para cumplimiento",
        openclaw: "No aplica",
        nemoclaw: "No aplica",
        winner: "chronos",
      },
      {
        name: "UIF / AML",
        chronos: "Trazabilidad completa",
        openclaw: "No aplica",
        nemoclaw: "No aplica",
        winner: "chronos",
      },
      {
        name: "LFPIORPI",
        chronos: "Evidencia auditable",
        openclaw: "No aplica",
        nemoclaw: "No aplica",
        winner: "chronos",
      },
      {
        name: "GDPR",
        chronos: "Data isolation + deletion",
        openclaw: "Responsabilidad del usuario",
        nemoclaw: "Parcial",
        winner: "chronos",
      },
    ],
  },
  {
    category: "Integraciones",
    features: [
      {
        name: "Integraciones pre-construidas",
        chronos: "18+ (Slack, GitHub, SAT, Buró)",
        openclaw: "100+ AgentSkills",
        nemoclaw: "NVIDIA ecosystem",
        winner: "tie-oc",
      },
      {
        name: "Integraciones México",
        chronos: "SAT, Buró, RENAPO, Círculo",
        openclaw: "No disponible",
        nemoclaw: "No disponible",
        winner: "chronos",
      },
      {
        name: "JAAK (OCR, Signa, Biometría)",
        chronos: "Nativo",
        openclaw: "No disponible",
        nemoclaw: "No disponible",
        winner: "chronos",
      },
      {
        name: "Protocol MCP",
        chronos: "Gateway MCP propio",
        openclaw: "Soporte completo",
        nemoclaw: "Soporte completo",
        winner: "tie-all",
      },
    ],
  },
  {
    category: "Proveedores LLM",
    features: [
      {
        name: "Anthropic Claude",
        chronos: "SDK nativo (Opus, Sonnet, Haiku)",
        openclaw: "Soportado",
        nemoclaw: "Soportado",
        winner: "tie-all",
      },
      {
        name: "OpenAI GPT",
        chronos: "Soportado",
        openclaw: "Soportado",
        nemoclaw: "Soportado",
        winner: "tie-all",
      },
      {
        name: "Google Gemini",
        chronos: "Soportado",
        openclaw: "Soportado",
        nemoclaw: "Soportado + Grounding",
        winner: "nemoclaw",
      },
      {
        name: "AWS Bedrock",
        chronos: "Soportado",
        openclaw: "Parcial",
        nemoclaw: "Soportado",
        winner: "tie-cn",
      },
      {
        name: "NVIDIA NeMo/NIM",
        chronos: "No nativo",
        openclaw: "No nativo",
        nemoclaw: "Nativo + aceleración",
        winner: "nemoclaw",
      },
    ],
  },
  {
    category: "UX / Developer Experience",
    features: [
      {
        name: "Visual Workflow Editor",
        chronos: "Drag & drop (Foblex Flow)",
        openclaw: "Solo código/CLI",
        nemoclaw: "Solo código/CLI",
        winner: "chronos",
      },
      {
        name: "Dashboard de Monitoreo",
        chronos: "Web UI completo",
        openclaw: "CLI + logs",
        nemoclaw: "CLI + métricas básicas",
        winner: "chronos",
      },
      {
        name: "API Documentation",
        chronos: "OpenAPI + SDK",
        openclaw: "README + ejemplos",
        nemoclaw: "NVIDIA docs",
        winner: "chronos",
      },
      {
        name: "Onboarding Time",
        chronos: "Horas (plug and play)",
        openclaw: "Horas (self-service)",
        nemoclaw: "Días",
        winner: "tie-chronos-openclaw",
      },
    ],
  },
  {
    category: "Human-in-the-Loop",
    features: [
      {
        name: "Aprobaciones Multi-nivel",
        chronos: "Configurable con RBAC",
        openclaw: "Manual (no integrado)",
        nemoclaw: "Políticas básicas",
        winner: "chronos",
      },
      {
        name: "Escalación Automática",
        chronos: "Por tiempo + severidad",
        openclaw: "No disponible",
        nemoclaw: "Básica",
        winner: "chronos",
      },
      {
        name: "Notificaciones",
        chronos: "Slack, Email, Webhook",
        openclaw: "Manual",
        nemoclaw: "Configurable",
        winner: "chronos",
      },
    ],
  },
];

const securityIncidents = [
  {
    platform: "OpenClaw",
    incident: "China prohibió uso en gobierno y empresas estatales",
    date: "Marzo 2026",
    impact: "Restricción de uso en sector público chino por riesgos de seguridad",
  },
  {
    platform: "OpenClaw",
    incident: "Meta bloqueó uso en dispositivos corporativos",
    date: "Marzo 2026",
    impact: "Empleados de Meta no pueden ejecutar OpenClaw en equipos de trabajo",
  },
  {
    platform: "OpenClaw",
    incident: "Vulnerabilidad a prompt injection",
    date: "Documentado",
    impact: "Instrucciones maliciosas pueden ser interpretadas como comandos legítimos",
  },
];

export default function ChronosComparacionPage() {
  return (
    <>
      {/* Structured Data for SEO */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(chronosComparisonSchema),
        }}
      />

      <Header />
      <main>
        {/* Hero */}
        <section className="pt-32 pb-16 bg-gradient-to-br from-[#0f0f23] via-[#1a1a3e] to-[#0f0f23]">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#655DC6]/10 border border-[#655DC6]/20 rounded-full mb-6">
              <span className="w-2 h-2 bg-[#655DC6] rounded-full"></span>
              <span className="text-[#655DC6] text-sm font-medium">Comparación Detallada 2026</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-black text-white mb-6">
              <span className="text-[#1ECAD3]">Chronos</span> vs{" "}
              <span className="text-[#ff6b6b]">OpenClaw</span> vs{" "}
              <span className="text-[#4ecdc4]">NemoClaw</span>
            </h1>
            <p className="text-xl text-white/70 max-w-3xl mx-auto">
              Comparación técnica completa de las principales plataformas de orquestación de agentes IA.
              <strong className="text-white"> Seguridad, compliance, integraciones y casos de uso.</strong>
            </p>
          </div>
        </section>

        {/* Quick Summary */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-3 gap-8 mb-12">
              {/* Chronos */}
              <div className="bg-gradient-to-br from-[#655DC6]/5 to-[#1ECAD3]/5 border-2 border-[#655DC6] rounded-2xl p-6 relative">
                <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-[#655DC6] text-white text-xs font-bold px-3 py-1 rounded-full">
                  RECOMENDADO ENTERPRISE
                </div>
                <div className="text-center mt-2">
                  <h3 className="text-2xl font-black text-[#655DC6] mb-2">Chronos</h3>
                  <p className="text-sm text-gray-500 mb-4">by JAAK</p>
                  <p className="text-gray-600 text-sm">
                    Plataforma enterprise con multi-tenancy real, cumplimiento regulatorio México,
                    y 18+ integraciones incluyendo JAAK OCR/Signa.
                  </p>
                  <div className="mt-4 flex flex-wrap gap-2 justify-center">
                    <span className="px-2 py-1 bg-[#655DC6]/10 text-[#655DC6] text-xs rounded-full">Multi-tenancy</span>
                    <span className="px-2 py-1 bg-[#655DC6]/10 text-[#655DC6] text-xs rounded-full">CNBV/UIF</span>
                    <span className="px-2 py-1 bg-[#655DC6]/10 text-[#655DC6] text-xs rounded-full">Visual Editor</span>
                  </div>
                </div>
              </div>

              {/* OpenClaw */}
              <div className="bg-gray-50 border border-gray-200 rounded-2xl p-6">
                <div className="text-center">
                  <h3 className="text-2xl font-black text-[#ff6b6b] mb-2">OpenClaw</h3>
                  <p className="text-sm text-gray-500 mb-4">Open Source</p>
                  <p className="text-gray-600 text-sm">
                    Framework open-source popular (más estrellas que React), simple pero
                    sin seguridad enterprise ni multi-tenancy.
                  </p>
                  <div className="mt-4 flex flex-wrap gap-2 justify-center">
                    <span className="px-2 py-1 bg-green-100 text-green-700 text-xs rounded-full">Gratis</span>
                    <span className="px-2 py-1 bg-green-100 text-green-700 text-xs rounded-full">100+ Skills</span>
                    <span className="px-2 py-1 bg-red-100 text-red-700 text-xs rounded-full">Sin seguridad</span>
                  </div>
                </div>
              </div>

              {/* NemoClaw */}
              <div className="bg-gray-50 border border-gray-200 rounded-2xl p-6">
                <div className="text-center">
                  <h3 className="text-2xl font-black text-[#4ecdc4] mb-2">NemoClaw</h3>
                  <p className="text-sm text-gray-500 mb-4">by NVIDIA</p>
                  <p className="text-gray-600 text-sm">
                    Versión enterprise de OpenClaw por NVIDIA. Añade sandbox y políticas
                    de seguridad, pero sin cumplimiento regulatorio específico.
                  </p>
                  <div className="mt-4 flex flex-wrap gap-2 justify-center">
                    <span className="px-2 py-1 bg-[#4ecdc4]/10 text-[#4ecdc4] text-xs rounded-full">Sandbox</span>
                    <span className="px-2 py-1 bg-[#4ecdc4]/10 text-[#4ecdc4] text-xs rounded-full">NeMo/NIM</span>
                    <span className="px-2 py-1 bg-yellow-100 text-yellow-700 text-xs rounded-full">Nuevo (GTC 2026)</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Security Incidents */}
        <section className="py-16 bg-red-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-black text-gray-900 mb-4">
                ⚠️ Incidentes de Seguridad en OpenClaw
              </h2>
              <p className="text-xl text-gray-600">
                Por qué empresas reguladas necesitan alternativas más seguras
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              {securityIncidents.map((incident, i) => (
                <div key={i} className="bg-white rounded-xl p-6 border border-red-200">
                  <div className="flex items-center gap-2 mb-3">
                    <span className="text-red-500 text-xl">🚨</span>
                    <span className="text-red-600 font-bold">{incident.platform}</span>
                    <span className="text-gray-400 text-sm ml-auto">{incident.date}</span>
                  </div>
                  <h3 className="font-bold text-gray-900 mb-2">{incident.incident}</h3>
                  <p className="text-gray-600 text-sm">{incident.impact}</p>
                </div>
              ))}
            </div>

            <div className="mt-8 text-center">
              <p className="text-gray-600">
                Fuentes:{" "}
                <a
                  href="https://techcrunch.com/2026/03/16/nvidias-version-of-openclaw-could-solve-its-biggest-problem-security/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#655DC6] hover:underline"
                >
                  TechCrunch
                </a>
                {", "}
                <a
                  href="https://thenextweb.com/news/nvidia-nemoclaw-openclaw-enterprise-security"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#655DC6] hover:underline"
                >
                  The Next Web
                </a>
              </p>
            </div>
          </div>
        </section>

        {/* Detailed Comparison Tables */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-black text-gray-900 mb-4">
                Comparación Detallada por Categoría
              </h2>
              <p className="text-xl text-gray-600">
                Análisis técnico completo de características
              </p>
            </div>

            {detailedComparison.map((category, catIndex) => (
              <div key={catIndex} className="mb-12">
                <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-2">
                  <span className="w-8 h-8 bg-[#655DC6] rounded-lg flex items-center justify-center text-white text-sm">
                    {catIndex + 1}
                  </span>
                  {category.category}
                </h3>

                <div className="overflow-x-auto">
                  <table className="w-full bg-white rounded-xl shadow-sm overflow-hidden">
                    <thead>
                      <tr className="bg-gray-100">
                        <th className="px-6 py-4 text-left font-semibold text-gray-700">Característica</th>
                        <th className="px-6 py-4 text-center text-[#ff6b6b] font-semibold">OpenClaw</th>
                        <th className="px-6 py-4 text-center text-[#4ecdc4] font-semibold">NemoClaw</th>
                        <th className="px-6 py-4 text-center bg-[#655DC6]/10 text-[#655DC6] font-bold">Chronos</th>
                      </tr>
                    </thead>
                    <tbody>
                      {category.features.map((feature, i) => (
                        <tr key={i} className={`border-b border-gray-100 ${i % 2 === 0 ? "bg-gray-50" : "bg-white"}`}>
                          <td className="px-6 py-4 font-medium text-gray-900">{feature.name}</td>
                          <td className="px-6 py-4 text-center text-sm text-gray-600">{feature.openclaw}</td>
                          <td className="px-6 py-4 text-center text-sm text-gray-600">{feature.nemoclaw}</td>
                          <td className={`px-6 py-4 text-center text-sm ${feature.winner === "chronos" ? "bg-[#655DC6]/5 font-semibold text-[#655DC6]" : "text-gray-600"}`}>
                            {feature.chronos}
                            {feature.winner === "chronos" && <span className="ml-1">✓</span>}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* When to use each */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-black text-gray-900 mb-4">
                ¿Cuándo usar cada plataforma?
              </h2>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {/* Chronos */}
              <div className="bg-white rounded-2xl p-8 border-2 border-[#655DC6]">
                <h3 className="text-xl font-bold text-[#655DC6] mb-4">Usa Chronos si:</h3>
                <ul className="space-y-3">
                  {[
                    "Eres un banco, financiera o aseguradora regulada",
                    "Necesitas cumplimiento CNBV, UIF, LFPIORPI",
                    "Requieres multi-tenancy con aislamiento de datos",
                    "Necesitas audit logs para inspecciones",
                    "Quieres integrar con JAAK OCR, Signa, biometría",
                    "Prefieres editor visual sobre código",
                    "Necesitas human-in-the-loop para decisiones críticas",
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-2 text-gray-700">
                      <span className="text-[#655DC6] mt-0.5">✓</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              {/* OpenClaw */}
              <div className="bg-white rounded-2xl p-8 border border-gray-200">
                <h3 className="text-xl font-bold text-[#ff6b6b] mb-4">Usa OpenClaw si:</h3>
                <ul className="space-y-3">
                  {[
                    "Eres developer individual o startup temprana",
                    "No tienes requisitos de compliance",
                    "Quieres experimentar con agentes IA rápido",
                    "No manejas datos sensibles",
                    "Prefieres open-source y control total",
                    "Tu caso de uso es personal o hobby",
                    "No necesitas multi-tenancy",
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-2 text-gray-700">
                      <span className="text-[#ff6b6b] mt-0.5">•</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              {/* NemoClaw */}
              <div className="bg-white rounded-2xl p-8 border border-gray-200">
                <h3 className="text-xl font-bold text-[#4ecdc4] mb-4">Usa NemoClaw si:</h3>
                <ul className="space-y-3">
                  {[
                    "Ya usas infraestructura NVIDIA (GPUs, NeMo)",
                    "Necesitas seguridad básica sobre OpenClaw",
                    "No tienes requisitos regulatorios específicos",
                    "Quieres sandbox pero no multi-tenancy real",
                    "Tu equipo prefiere CLI sobre UI visual",
                    "Estás en USA/Europa (no México/LATAM)",
                    "Toleras un producto nuevo (GTC 2026)",
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-2 text-gray-700">
                      <span className="text-[#4ecdc4] mt-0.5">•</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 bg-gradient-to-r from-[#655DC6] to-[#1ECAD3]">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl md:text-4xl font-black text-white mb-6">
              ¿Listo para probar Chronos?
            </h2>
            <p className="text-xl text-white/90 mb-8">
              La única plataforma de agentes IA diseñada para instituciones financieras reguladas en México.
            </p>

            <div className="flex flex-wrap gap-4 justify-center">
              <Link
                href="/chronos#contacto"
                className="px-8 py-4 bg-white text-[#655DC6] font-bold rounded-lg hover:bg-gray-50 transition-all shadow-lg"
              >
                Solicitar Demo
              </Link>
              <Link
                href="/chronos"
                className="px-8 py-4 bg-transparent border-2 border-white text-white font-bold rounded-lg hover:bg-white hover:text-[#655DC6] transition-all"
              >
                Ver Características
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
