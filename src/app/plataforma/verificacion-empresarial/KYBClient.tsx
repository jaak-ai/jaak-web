"use client";

import { useState } from "react";
import Link from "next/link";

/* ─── Constants ─── */
const CONTACTO_URL = "/contacto";
const DOCS_URL = "/documentacion";

/* ─── Data ─── */
const PERSONAS = [
  {
    role: "CEO / Director General",
    pain: "Riesgo reputacional y multas millonarias por vincular la empresa con contrapartes sancionadas.",
    need: "Visibilidad total del estatus regulatorio de cada cliente corporativo antes de firmar.",
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
      </svg>
    ),
  },
  {
    role: "CTO / Dir. Tecnología",
    pain: "Integraciones manuales con múltiples fuentes que generan deuda técnica y puntos de falla.",
    need: "Una API unificada que resuelva toda la verificación empresarial en una sola llamada.",
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
      </svg>
    ),
  },
  {
    role: "Dir. Operaciones",
    pain: "Onboarding corporativo tarda días por revisión manual de actas, poderes y estructuras accionarias.",
    need: "Automatización end-to-end que reduzca el ciclo de alta de días a minutos.",
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
  },
  {
    role: "Oficial de Cumplimiento / PLD",
    pain: "Evidencia dispersa y no trazable ante requerimientos de UIF, CNBV o auditorías.",
    need: "Expediente digital unificado con trazabilidad completa y alertas de listas restrictivas.",
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    ),
  },
];

const PROCESS_STEPS = [
  {
    step: "01",
    title: "Carga de documentos",
    description: "La empresa sube acta constitutiva, poder notarial y constancia de situación fiscal. OCR extrae datos clave automáticamente.",
    tech: "OCR + IA",
  },
  {
    step: "02",
    title: "Validación con fuentes oficiales",
    description: "Consultamos SAT (RFC, 69B), Registro Público de Comercio y estructura accionaria para confirmar existencia legal.",
    tech: "APIs oficiales",
  },
  {
    step: "03",
    title: "Screening en listas restrictivas",
    description: "Cruzamos representantes legales y beneficiarios finales contra OFAC, INTERPOL y Lista 69B del SAT en tiempo real.",
    tech: "Listas globales",
  },
  {
    step: "04",
    title: "Verificación biométrica de firmantes",
    description: "Validamos la identidad del representante legal con biometría facial certificada iBeta Nivel 2.",
    tech: "Biometría IA",
  },
  {
    step: "05",
    title: "Expediente digital auditable",
    description: "Se genera un expediente con toda la evidencia, hash de integridad y línea de tiempo para auditorías y requerimientos regulatorios.",
    tech: "Blockchain hash",
  },
];

const INDUSTRIES = [
  {
    name: "Banca y Fintech",
    icon: "🏦",
    description: "Onboarding de personas morales que requieren cuentas, líneas de crédito o servicios financieros.",
    blacklists: "OFAC para sanciones internacionales, SAT 69B para contribuyentes con operaciones simuladas.",
    regulation: "CUB CNBV, LFPIORPI Art. 17",
  },
  {
    name: "Crédito y Arrendamiento",
    icon: "💳",
    description: "Due diligence de empresas solicitantes de crédito corporativo, leasing y factoraje.",
    blacklists: "OFAC para filtrar contrapartes sancionadas, SAT 69B para detectar factureras que falsifican estados financieros.",
    regulation: "CNBV, Condusef, LFPIORPI",
  },
  {
    name: "Actividades Vulnerables (LFPIORPI)",
    icon: "⚖️",
    description: "Notarías, inmobiliarias, joyerías y blindadoras obligadas a identificar contrapartes por ley.",
    blacklists: "SAT 69B es crítica para validar que la contraparte no es una empresa fantasma. INTERPOL para alertas de crimen organizado.",
    regulation: "LFPIORPI Art. 17, UIF",
  },
  {
    name: "Marketplaces y Plataformas",
    icon: "🛒",
    description: "Verificación de vendedores, proveedores y socios comerciales que operan en tu plataforma.",
    blacklists: "OFAC para evitar transacciones con entidades sancionadas. SAT 69B para filtrar empresas fantasma de tu ecosistema.",
    regulation: "PLD/FT, LFPIORPI si aplica",
  },
  {
    name: "Proptech e Inmobiliarias",
    icon: "🏗️",
    description: "Verificación de personas morales en operaciones de compra-venta y arrendamiento de inmuebles.",
    blacklists: "SAT 69B para identificar operaciones simuladas en bienes raíces. INTERPOL para alertas vinculadas a lavado de activos.",
    regulation: "LFPIORPI Art. 17, fracción XI",
  },
  {
    name: "Seguros",
    icon: "🛡️",
    description: "Due diligence de personas morales contratantes de pólizas corporativas y beneficiarios.",
    blacklists: "OFAC para sanciones internacionales en reaseguros. SAT 69B para validar la legitimidad fiscal del contratante.",
    regulation: "CNSF, LFPIORPI",
  },
];

const BLACKLISTS = [
  {
    name: "OFAC (SDN List)",
    fullName: "Office of Foreign Assets Control – Specially Designated Nationals",
    description: "Lista del Departamento del Tesoro de EE.UU. con personas y entidades sujetas a sanciones económicas y comerciales.",
    relevance: "Obligatoria para cualquier empresa que realice transacciones internacionales o con contrapartes vinculadas al sistema financiero global. Un match positivo implica prohibición total de operación.",
    color: "#0066ff",
  },
  {
    name: "INTERPOL (Red Notices)",
    fullName: "Organización Internacional de Policía Criminal – Notificaciones Rojas",
    description: "Base de datos global de personas buscadas por delitos graves: crimen organizado, fraude, lavado de dinero y terrorismo.",
    relevance: "Crítica para identificar representantes legales o beneficiarios finales con alertas internacionales. Relevante para actividades vulnerables (LFPIORPI) y sector financiero.",
    color: "#ef4444",
  },
  {
    name: "SAT Lista 69B",
    fullName: "Servicio de Administración Tributaria – Art. 69-B del Código Fiscal",
    description: "Listado de contribuyentes que emitieron comprobantes fiscales por operaciones inexistentes (empresas fantasma / factureras).",
    relevance: "La lista más relevante para el mercado mexicano. Permite detectar empresas que simulan operaciones para deducir impuestos ilegalmente. Esencial para due diligence de cualquier contraparte comercial en México.",
    color: "#00d4aa",
  },
];

const TECHNOLOGIES = [
  {
    name: "OCR Inteligente",
    description: "Extracción automática de datos de actas constitutivas, poderes notariales y constancias fiscales con precisión >98%.",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
      </svg>
    ),
  },
  {
    name: "Biometría Facial",
    description: "Verificación del representante legal con prueba de vida pasiva certificada iBeta Nivel 2 y comparación con INE.",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
      </svg>
    ),
  },
  {
    name: "Screening en Listas",
    description: "Consulta simultánea en OFAC, INTERPOL y SAT 69B con fuzzy matching para detectar variaciones de nombres.",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
      </svg>
    ),
  },
  {
    name: "Expediente Digital",
    description: "Repositorio auditable con hash de integridad, línea de tiempo y trazabilidad completa para UIF y CNBV.",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4" />
      </svg>
    ),
  },
  {
    name: "API Unificada",
    description: "Una sola integración REST para todo el flujo KYB: documentos, validaciones, listas y expediente. Webhooks en tiempo real.",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
      </svg>
    ),
  },
  {
    name: "Monitoreo Continuo",
    description: "Re-screening periódico automático contra listas actualizadas. Alertas inmediatas si un cliente aparece en nueva lista.",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
      </svg>
    ),
  },
];

const COMPARISON = [
  {
    aspect: "Tiempo de onboarding corporativo",
    without: "3–10 días hábiles",
    with: "< 15 minutos",
  },
  {
    aspect: "Revisión de actas constitutivas",
    without: "Manual por abogado",
    with: "OCR automático con IA",
  },
  {
    aspect: "Consulta de listas restrictivas",
    without: "Excel o consultas individuales",
    with: "OFAC + INTERPOL + SAT 69B simultáneo",
  },
  {
    aspect: "Identificación de beneficiarios finales",
    without: "Declaración jurada sin verificar",
    with: "Mapeo accionario + biometría",
  },
  {
    aspect: "Evidencia para auditorías",
    without: "PDFs sueltos en carpetas",
    with: "Expediente digital con hash",
  },
  {
    aspect: "Monitoreo post-onboarding",
    without: "Revisión anual manual",
    with: "Re-screening continuo automático",
  },
];

const METRICS = [
  { value: "< 15 min", label: "Tiempo promedio de verificación empresarial" },
  { value: "98%+", label: "Precisión en extracción OCR de documentos" },
  { value: "3", label: "Listas restrictivas consultadas en tiempo real" },
  { value: "100%", label: "Trazabilidad de evidencia para auditorías" },
];

/* ─── Component ─── */
export default function KYBClient() {
  const [activeIndustry, setActiveIndustry] = useState(0);

  return (
    <>
      {/* ═══ HERO ═══ */}
      <section className="relative pt-32 pb-24 overflow-hidden" style={{ background: "linear-gradient(135deg, #0E1133 0%, #212A45 50%, #0E1133 100%)" }}>
        <div className="absolute inset-0 opacity-30">
          <div className="absolute top-20 left-10 w-72 h-72 bg-[#0066ff]/20 rounded-full blur-[100px]" />
          <div className="absolute bottom-10 right-10 w-96 h-96 bg-[#00d4aa]/15 rounded-full blur-[120px]" />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-[#00d4aa]/10 border border-[#00d4aa]/30 rounded-full mb-8">
              <span className="w-2 h-2 bg-[#00d4aa] rounded-full animate-pulse" />
              <span className="text-[#00d4aa] text-sm font-semibold tracking-wide">KYB — Know Your Business</span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-white mb-6 leading-tight">
              Verifica empresas en minutos,{" "}
              <span className="bg-gradient-to-r from-[#0066ff] to-[#00d4aa] bg-clip-text text-transparent">
                no en semanas
              </span>
            </h1>
            <p className="text-lg md:text-xl text-white/60 mb-10 max-w-3xl mx-auto">
              Due diligence automatizado para personas morales. Valida actas constitutivas, consulta SAT, identifica beneficiarios finales y cruza listas restrictivas — todo desde una sola API.
            </p>
            <div className="flex flex-wrap justify-center gap-4 mb-12">
              <Link
                href={CONTACTO_URL}
                className="px-8 py-4 bg-[#0066ff] text-white font-bold rounded-xl hover:bg-[#0052cc] transition-all shadow-lg shadow-[#0066ff]/25"
              >
                Solicitar demo
              </Link>
              <Link
                href={DOCS_URL}
                className="px-8 py-4 bg-white/10 backdrop-blur-sm text-white font-bold rounded-xl hover:bg-white/20 transition-all border border-white/10"
              >
                Ver documentación API
              </Link>
            </div>
            {/* Trust bar */}
            <div className="flex flex-wrap justify-center gap-x-8 gap-y-3 text-sm text-white/40">
              <span className="flex items-center gap-2">
                <svg className="w-4 h-4 text-[#00d4aa]" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" /></svg>
                ISO 27001
              </span>
              <span className="flex items-center gap-2">
                <svg className="w-4 h-4 text-[#00d4aa]" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" /></svg>
                iBeta Nivel 2
              </span>
              <span className="flex items-center gap-2">
                <svg className="w-4 h-4 text-[#00d4aa]" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" /></svg>
                LFPIORPI
              </span>
              <span className="flex items-center gap-2">
                <svg className="w-4 h-4 text-[#00d4aa]" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" /></svg>
                CNBV · UIF
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* ═══ METRICS ═══ */}
      <section className="py-12 bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {METRICS.map((m, i) => (
              <div key={i} className="text-center">
                <div className="text-3xl md:text-4xl font-black text-[#0066ff] mb-2">{m.value}</div>
                <div className="text-sm text-gray-500">{m.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ BUYER PERSONAS ═══ */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-black text-gray-900 mb-4">
              ¿Para quién es esto?
            </h2>
            <p className="text-xl text-gray-500 max-w-2xl mx-auto">
              Diseñado para los roles que enfrentan el dolor del onboarding corporativo todos los días.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {PERSONAS.map((p, i) => (
              <div key={i} className="bg-gray-50 rounded-2xl p-6 hover:shadow-lg transition-all group border border-gray-100">
                <div className="w-12 h-12 bg-[#0066ff] rounded-xl flex items-center justify-center text-white mb-5 group-hover:scale-110 transition-transform">
                  {p.icon}
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-3">{p.role}</h3>
                <p className="text-sm text-gray-500 mb-3"><span className="font-semibold text-gray-700">Dolor:</span> {p.pain}</p>
                <p className="text-sm text-[#0066ff]"><span className="font-semibold">Necesita:</span> {p.need}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ PROCESS STEPS ═══ */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-black text-gray-900 mb-4">
              Cómo funciona
            </h2>
            <p className="text-xl text-gray-500 max-w-2xl mx-auto">
              De la carga de documentos al expediente verificado en 5 pasos automatizados.
            </p>
          </div>
          <div className="space-y-6 max-w-4xl mx-auto">
            {PROCESS_STEPS.map((s, i) => (
              <div key={i} className="flex gap-6 items-start bg-white rounded-2xl p-6 shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
                <div className="flex-shrink-0 w-14 h-14 rounded-xl bg-gradient-to-br from-[#0066ff] to-[#0052cc] flex items-center justify-center">
                  <span className="text-white font-black text-lg">{s.step}</span>
                </div>
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-2">
                    <h3 className="text-lg font-bold text-gray-900">{s.title}</h3>
                    <span className="px-2 py-0.5 text-xs font-semibold bg-[#00d4aa]/10 text-[#00d4aa] rounded-full">{s.tech}</span>
                  </div>
                  <p className="text-gray-600">{s.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ BLACKLISTS ═══ */}
      <section className="py-20" style={{ background: "linear-gradient(135deg, #0E1133 0%, #212A45 100%)" }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-black text-white mb-4">
              Listas restrictivas que consultamos
            </h2>
            <p className="text-lg text-white/50 max-w-3xl mx-auto">
              Cruzamos a representantes legales, accionistas y beneficiarios finales contra las 3 listas más relevantes para el mercado mexicano.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {BLACKLISTS.map((bl, i) => (
              <div key={i} className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 hover:bg-white/10 transition-all">
                <div className="w-12 h-12 rounded-xl flex items-center justify-center mb-5" style={{ backgroundColor: `${bl.color}20` }}>
                  <svg className="w-6 h-6" style={{ color: bl.color }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-white mb-1">{bl.name}</h3>
                <p className="text-xs text-white/40 mb-4">{bl.fullName}</p>
                <p className="text-sm text-white/60 mb-4">{bl.description}</p>
                <div className="pt-4 border-t border-white/10">
                  <p className="text-xs font-semibold text-white/40 uppercase tracking-wider mb-2">Relevancia para tu negocio</p>
                  <p className="text-sm text-white/70">{bl.relevance}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ INDUSTRIES ═══ */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-black text-gray-900 mb-4">
              Casos de uso por industria
            </h2>
            <p className="text-xl text-gray-500 max-w-2xl mx-auto">
              Cada sector tiene necesidades regulatorias específicas. Así es como JAAK KYB las resuelve.
            </p>
          </div>

          {/* Industry tabs - desktop */}
          <div className="hidden md:flex justify-center gap-2 mb-10">
            {INDUSTRIES.map((ind, i) => (
              <button
                key={i}
                onClick={() => setActiveIndustry(i)}
                className={`px-5 py-2.5 rounded-full text-sm font-semibold transition-all ${
                  activeIndustry === i
                    ? "bg-[#0066ff] text-white shadow-lg shadow-[#0066ff]/25"
                    : "bg-gray-100 text-gray-600 hover:bg-gray-200"
                }`}
              >
                <span className="mr-1.5">{ind.icon}</span>
                {ind.name}
              </button>
            ))}
          </div>

          {/* Industry tabs - mobile */}
          <div className="md:hidden flex overflow-x-auto gap-2 mb-8 pb-2 -mx-4 px-4">
            {INDUSTRIES.map((ind, i) => (
              <button
                key={i}
                onClick={() => setActiveIndustry(i)}
                className={`flex-shrink-0 px-4 py-2 rounded-full text-sm font-semibold transition-all ${
                  activeIndustry === i
                    ? "bg-[#0066ff] text-white"
                    : "bg-gray-100 text-gray-600"
                }`}
              >
                <span className="mr-1">{ind.icon}</span>
                {ind.name}
              </button>
            ))}
          </div>

          {/* Active industry detail */}
          <div className="max-w-3xl mx-auto bg-gray-50 rounded-2xl p-8 border border-gray-100">
            <div className="flex items-center gap-3 mb-4">
              <span className="text-3xl">{INDUSTRIES[activeIndustry].icon}</span>
              <h3 className="text-2xl font-bold text-gray-900">{INDUSTRIES[activeIndustry].name}</h3>
            </div>
            <p className="text-gray-600 mb-6">{INDUSTRIES[activeIndustry].description}</p>
            <div className="grid sm:grid-cols-2 gap-4">
              <div className="bg-white rounded-xl p-5 border border-gray-100">
                <p className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-2">Listas relevantes</p>
                <p className="text-sm text-gray-700">{INDUSTRIES[activeIndustry].blacklists}</p>
              </div>
              <div className="bg-white rounded-xl p-5 border border-gray-100">
                <p className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-2">Marco regulatorio</p>
                <p className="text-sm text-gray-700">{INDUSTRIES[activeIndustry].regulation}</p>
              </div>
            </div>
          </div>

          {/* SSR: all industry data for SEO */}
          <div className="sr-only" aria-hidden="true">
            {INDUSTRIES.map((ind, i) => (
              <div key={i}>
                <h4>{ind.name}</h4>
                <p>{ind.description}</p>
                <p>Listas: {ind.blacklists}</p>
                <p>Regulación: {ind.regulation}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ TECHNOLOGIES ═══ */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-black text-gray-900 mb-4">
              Tecnología detrás del KYB
            </h2>
            <p className="text-xl text-gray-500 max-w-2xl mx-auto">
              Combinamos múltiples tecnologías para entregar la verificación empresarial más completa del mercado.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {TECHNOLOGIES.map((tech, i) => (
              <div key={i} className="bg-white rounded-2xl p-6 border border-gray-100 hover:shadow-lg transition-all">
                <div className="w-12 h-12 bg-gradient-to-br from-[#0066ff] to-[#00d4aa] rounded-xl flex items-center justify-center text-white mb-5">
                  {tech.icon}
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">{tech.name}</h3>
                <p className="text-sm text-gray-600">{tech.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ COMPARISON: Sin JAAK vs Con JAAK ═══ */}
      <section className="py-20 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-black text-gray-900 mb-4">
              Sin JAAK vs Con JAAK
            </h2>
            <p className="text-xl text-gray-500 max-w-2xl mx-auto">
              La diferencia entre due diligence manual y automatizado.
            </p>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b-2 border-gray-200">
                  <th className="text-left py-4 pr-4 text-sm font-semibold text-gray-500 uppercase tracking-wider">Aspecto</th>
                  <th className="text-left py-4 px-4 text-sm font-semibold text-red-400 uppercase tracking-wider">Sin JAAK</th>
                  <th className="text-left py-4 pl-4 text-sm font-semibold text-[#00d4aa] uppercase tracking-wider">Con JAAK</th>
                </tr>
              </thead>
              <tbody>
                {COMPARISON.map((row, i) => (
                  <tr key={i} className="border-b border-gray-100">
                    <td className="py-4 pr-4 font-medium text-gray-900">{row.aspect}</td>
                    <td className="py-4 px-4 text-gray-500">
                      <span className="flex items-center gap-2">
                        <svg className="w-4 h-4 text-red-400 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                        </svg>
                        {row.without}
                      </span>
                    </td>
                    <td className="py-4 pl-4 text-gray-700">
                      <span className="flex items-center gap-2">
                        <svg className="w-4 h-4 text-[#00d4aa] flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        {row.with}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* ═══ COMPLIANCE ═══ */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-black text-gray-900 mb-4">
              Cumplimiento regulatorio
            </h2>
            <p className="text-xl text-gray-500 max-w-2xl mx-auto">
              JAAK KYB está diseñado para cumplir con la regulación mexicana desde el día uno.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { title: "LFPIORPI", sub: "Art. 17 – Identificación de clientes y beneficiarios finales" },
              { title: "CUB CNBV", sub: "Circular Única de Bancos – Due diligence de personas morales" },
              { title: "UIF", sub: "Unidad de Inteligencia Financiera – Evidencia auditable y reportes" },
              { title: "GAFI / FATF", sub: "Recomendaciones internacionales AML/CFT – Enfoque basado en riesgo" },
            ].map((reg, i) => (
              <div key={i} className="bg-white rounded-2xl p-6 text-center border border-gray-100">
                <div className="w-14 h-14 mx-auto bg-[#0066ff]/10 rounded-xl flex items-center justify-center mb-4">
                  <span className="text-[#0066ff] font-black text-lg">{i + 1}</span>
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">{reg.title}</h3>
                <p className="text-sm text-gray-500">{reg.sub}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ FINAL CTA ═══ */}
      <section className="py-24 relative overflow-hidden" style={{ background: "linear-gradient(135deg, #0E1133 0%, #212A45 50%, #0E1133 100%)" }}>
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-10 right-20 w-80 h-80 bg-[#0066ff]/30 rounded-full blur-[100px]" />
          <div className="absolute bottom-10 left-20 w-60 h-60 bg-[#00d4aa]/20 rounded-full blur-[80px]" />
        </div>
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-white mb-6">
            Automatiza tu due diligence empresarial hoy
          </h2>
          <p className="text-lg text-white/50 mb-10 max-w-2xl mx-auto">
            Reduce el tiempo de onboarding corporativo de días a minutos. Agenda una demo con nuestro equipo y conoce cómo JAAK KYB puede proteger tu negocio.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              href={CONTACTO_URL}
              className="px-10 py-4 bg-[#0066ff] text-white font-bold rounded-xl hover:bg-[#0052cc] transition-all shadow-lg shadow-[#0066ff]/25 text-lg"
            >
              Solicitar demo gratuita
            </Link>
            <Link
              href="/precios"
              className="px-10 py-4 bg-white/10 backdrop-blur-sm text-white font-bold rounded-xl hover:bg-white/20 transition-all border border-white/10 text-lg"
            >
              Ver precios
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
