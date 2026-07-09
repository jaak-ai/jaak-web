import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Link from "next/link";
import { chronosComparisonSchema } from "../schema";

export const metadata: Metadata = {
  title: "Chronos | Orquestación de agentes IA para banca regulada en México",
  description:
    "Chronos, la plataforma de JAAK para orquestar agentes de IA en instituciones financieras: multi-tenancy, RBAC, audit logs y cumplimiento CNBV, UIF y LFPIORPI.",
  keywords: [
    "Chronos JAAK",
    "orquestación de agentes IA",
    "plataforma de agentes IA México",
    "agentes IA para bancos",
    "Chronos cumplimiento CNBV",
    "Chronos multi-tenancy",
    "Chronos RBAC",
    "Chronos audit logs",
    "agentes IA cumplimiento regulatorio",
    "human-in-the-loop banca",
  ],
  alternates: {
    canonical: "https://jaak.ai/chronos/comparacion",
  },
  openGraph: {
    title: "Chronos | Orquestación de agentes IA para banca regulada",
    description:
      "Multi-tenancy, RBAC, audit logs y cumplimiento CNBV/UIF/LFPIORPI para automatizar workflows con agentes de IA.",
    type: "website",
    url: "https://jaak.ai/chronos/comparacion",
    images: [
      {
        url: "https://jaak.ai/images/chronos-comparison-og.png",
        width: 1200,
        height: 630,
        alt: "Chronos por JAAK",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Chronos | Orquestación de agentes IA para banca regulada",
    description:
      "Multi-tenancy, RBAC, audit logs y cumplimiento regulatorio para agentes de IA.",
    images: ["https://jaak.ai/images/chronos-comparison-twitter.png"],
  },
};

const highlights = [
  {
    title: "Multi-tenancy real",
    desc: "Aislamiento completo de datos por empresa, con RBAC en cuatro niveles y audit logs inmutables.",
  },
  {
    title: "Cumplimiento mexicano",
    desc: "Diseñado para CNBV, UIF y LFPIORPI, con evidencia auditable para inspecciones.",
  },
  {
    title: "Integración nativa con JAAK",
    desc: "OCR, Signa y biometría en un solo flujo, más 11 integraciones pre-construidas.",
  },
];

const capabilities = [
  {
    category: "Arquitectura",
    items: [
      { name: "Persistencia de datos", value: "MongoDB + Redis + Oracle DB" },
      { name: "Job queue", value: "Redis Streams + NATS" },
      { name: "Escalabilidad", value: "Kubernetes-native con autoscaling" },
      { name: "Vector database", value: "RAG semántico integrado" },
    ],
  },
  {
    category: "Seguridad",
    items: [
      { name: "Multi-tenancy", value: "Aislamiento completo por empresa" },
      { name: "RBAC", value: "4 niveles (Owner, Admin, Editor, Viewer)" },
      { name: "Audit logs", value: "Completos e inmutables" },
      { name: "Gestión de secretos", value: "OCI Vault integrado" },
      { name: "Sandbox de ejecución", value: "Pods aislados en Kubernetes" },
      { name: "Protección ante prompt injection", value: "Guardrails + validación" },
    ],
  },
  {
    category: "Cumplimiento regulatorio",
    items: [
      { name: "CNBV México", value: "Diseñado para cumplimiento" },
      { name: "UIF / AML", value: "Trazabilidad completa" },
      { name: "LFPIORPI", value: "Evidencia auditable" },
      { name: "GDPR", value: "Aislamiento y borrado de datos" },
    ],
  },
  {
    category: "Integraciones",
    items: [
      { name: "Integraciones pre-construidas", value: "11 (Slack, Teams, SAT, Buró, RENAPO)" },
      { name: "Integraciones México", value: "SAT, Buró, RENAPO, Círculo de Crédito" },
      { name: "JAAK (OCR, Signa, biometría)", value: "Nativo" },
      { name: "Protocolo MCP", value: "Gateway MCP propio" },
    ],
  },
  {
    category: "Proveedores LLM",
    items: [
      { name: "Anthropic Claude", value: "SDK nativo (Opus, Sonnet, Haiku)" },
      { name: "OpenAI GPT", value: "Soportado" },
      { name: "Google Gemini", value: "Soportado" },
      { name: "AWS Bedrock", value: "Soportado" },
      { name: "Azure OpenAI · OCI GenAI", value: "Soportado" },
    ],
  },
  {
    category: "Experiencia de desarrollo",
    items: [
      { name: "Visual workflow editor", value: "Drag & drop (Foblex Flow)" },
      { name: "Dashboard de monitoreo", value: "Web UI completo" },
      { name: "Documentación de API", value: "OpenAPI + SDK" },
      { name: "Tiempo de onboarding", value: "Horas (plug and play)" },
    ],
  },
  {
    category: "Human-in-the-loop",
    items: [
      { name: "Aprobaciones multi-nivel", value: "Configurable con RBAC" },
      { name: "Escalación automática", value: "Por tiempo y severidad" },
      { name: "Notificaciones", value: "Slack, Email, Webhook" },
    ],
  },
];

const chronosFit = [
  "Eres un banco, financiera o aseguradora regulada",
  "Necesitas cumplimiento CNBV, UIF, LFPIORPI",
  "Requieres multi-tenancy con aislamiento de datos",
  "Necesitas audit logs para inspecciones",
  "Quieres integrar con JAAK OCR, Signa y biometría",
  "Prefieres un editor visual sobre solo código",
  "Necesitas human-in-the-loop para decisiones críticas",
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
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#2DB6C1]/10 border border-[#2DB6C1]/20 rounded-full mb-6">
              <span className="w-2 h-2 bg-[#2DB6C1] rounded-full"></span>
              <span className="text-[#2DB6C1] text-sm font-medium">Plataforma enterprise</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-black text-white mb-6">
              <span className="text-[#2DB6C1]">Chronos</span> para banca regulada
            </h1>
            <p className="text-xl text-white/70 max-w-3xl mx-auto">
              Orquestación de agentes de IA con seguridad enterprise.
              <strong className="text-white"> Multi-tenancy, cumplimiento regulatorio, integraciones y human-in-the-loop.</strong>
            </p>
          </div>
        </section>

        {/* Highlights */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-3 gap-8">
              {highlights.map((h) => (
                <div
                  key={h.title}
                  className="bg-gradient-to-br from-[#212A45]/5 to-[#2DB6C1]/5 border border-[#212A45]/20 rounded-2xl p-6"
                >
                  <h3 className="text-xl font-bold text-[#212A45] mb-2">{h.title}</h3>
                  <p className="text-gray-600 text-sm">{h.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Capabilities by category */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-black text-gray-900 mb-4">
                Capacidades por categoría
              </h2>
              <p className="text-xl text-gray-600">
                Todo lo que Chronos incluye para operar agentes en entornos regulados
              </p>
            </div>

            {capabilities.map((cat, catIndex) => (
              <div key={cat.category} className="mb-12">
                <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-2">
                  <span className="w-8 h-8 bg-[#212A45] rounded-lg flex items-center justify-center text-white text-sm">
                    {catIndex + 1}
                  </span>
                  {cat.category}
                </h3>

                <div className="overflow-x-auto">
                  <table className="w-full bg-white rounded-xl shadow-sm overflow-hidden">
                    <thead>
                      <tr className="bg-gray-100">
                        <th className="px-6 py-4 text-left font-semibold text-gray-700">Característica</th>
                        <th className="px-6 py-4 text-left bg-[#212A45]/10 text-[#212A45] font-bold">Chronos</th>
                      </tr>
                    </thead>
                    <tbody>
                      {cat.items.map((item, i) => (
                        <tr key={item.name} className={`border-b border-gray-100 ${i % 2 === 0 ? "bg-gray-50" : "bg-white"}`}>
                          <td className="px-6 py-4 font-medium text-gray-900">{item.name}</td>
                          <td className="px-6 py-4 text-sm text-[#212A45] font-semibold bg-[#212A45]/5">
                            {item.value}
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

        {/* Chronos fit */}
        <section className="py-16 bg-white">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-black text-gray-900 mb-4">Chronos es para ti si:</h2>
            </div>

            <div className="bg-gray-50 rounded-2xl p-8 border-2 border-[#212A45]">
              <ul className="space-y-3">
                {chronosFit.map((item) => (
                  <li key={item} className="flex items-start gap-2 text-gray-700">
                    <span className="text-[#212A45] mt-0.5">✓</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 bg-gradient-to-r from-[#212A45] to-[#2DB6C1]">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl md:text-4xl font-black text-white mb-6">
              ¿Listo para probar Chronos?
            </h2>
            <p className="text-xl text-white/90 mb-8">
              La plataforma de agentes IA diseñada para instituciones financieras reguladas en México.
            </p>

            <div className="flex flex-wrap gap-4 justify-center">
              <Link
                href="/chronos#contacto"
                className="px-8 py-4 bg-white text-[#212A45] font-bold rounded-lg hover:bg-gray-50 transition-colors shadow-lg"
              >
                Solicitar Demo
              </Link>
              <Link
                href="/chronos"
                className="px-8 py-4 bg-transparent border-2 border-white text-white font-bold rounded-lg hover:bg-white hover:text-[#212A45] transition-colors"
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
