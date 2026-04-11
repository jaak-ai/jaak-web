"use client";

import { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Link from "next/link";

const painPoints = [
  {
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
      </svg>
    ),
    title: "Regulación CNBV/CONSAR cada vez más exigente",
    description:
      "Las disposiciones de la CNBV y CONSAR requieren verificación robusta de identidad en el onboarding. Cumplir sin fricción es el reto.",
  },
  {
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
      </svg>
    ),
    title: "Fraude en onboarding de clientes nuevos",
    description:
      "Los clientes fraudulentos entran en la cartera desde el primer contacto. Sin KYC biométrico, tu riesgo crece con cada alta.",
  },
  {
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
    title: "Integración de KYC que tarda semanas",
    description:
      "Proveedores tradicionales requieren meses de integración. JAAK tiene SDK y API REST listos para conectar en horas, no semanas.",
  },
];

const steps = [
  {
    number: "01",
    title: "Integra el SDK en un día",
    description: "API REST o SDK móvil. Documentación clara. Tu equipo técnico lo conecta en pocas horas.",
  },
  {
    number: "02",
    title: "KYC + Liveness en el onboarding",
    description: "El cliente verifica su identidad con INE + prueba de vida. 30 segundos. Sin fricciones.",
  },
  {
    number: "03",
    title: "Reportes AML automáticos",
    description: "Genera evidencia de due diligence lista para auditorías de CNBV y reportes UIF.",
  },
];

const products = [
  {
    name: "KYC Digital",
    description: "Verificación de identidad con INE, CURP y validación biométrica. Cumplimiento AML/LAFT.",
    color: "#1ECAD3",
  },
  {
    name: "Liveness Detection",
    description: "Prueba de vida certificada iBeta Level 1. Detecta ataques de presentación con IA.",
    color: "#655DC6",
  },
  {
    name: "Firma NOM-151",
    description: "Firma electrónica con sellado de tiempo certificado. Válida para contratos financieros.",
    color: "#1ECAD3",
  },
];

const regulations = [
  { name: "CNBV", desc: "Disposiciones CUB" },
  { name: "UIF", desc: "Reportes AML" },
  { name: "LFPIORPI", desc: "Antilavado" },
  { name: "CONSAR", desc: "Afores y pensiones" },
];

export default function FinancierasPage() {
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
        body: JSON.stringify({ ...formData, source: "landing-financieras" }),
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
      <Header />
      <main>
        {/* Hero */}
        <section className="pt-32 pb-20 bg-[#202945] relative overflow-hidden">
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <div className="absolute top-1/3 right-0 w-[500px] h-[500px] bg-[#655DC6]/15 rounded-full blur-[120px]" />
            <div className="absolute bottom-0 left-1/4 w-[400px] h-[400px] bg-[#1ECAD3]/10 rounded-full blur-[100px]" />
          </div>

          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#655DC6]/10 border border-[#655DC6]/30 rounded-full mb-6">
                  <span className="w-2 h-2 bg-[#655DC6] rounded-full"></span>
                  <span className="text-[#a99df0] text-sm font-medium">Para SOFOMES, fintechs y fondos de inversión</span>
                </div>

                <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-white mb-6 leading-tight">
                  Cumplimiento{" "}
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#655DC6] to-[#1ECAD3]">
                    AML/LAFT
                  </span>{" "}
                  sin fricción. KYC que se integra en horas.
                </h1>

                <p className="text-xl text-white/70 mb-8">
                  Verificación de identidad biométrica + Liveness + Firma NOM-151 diseñada para
                  SOFOMES, fintechs y entidades financieras reguladas en México.
                </p>

                <div className="flex flex-wrap gap-4 mb-10">
                  <a
                    href="#contacto"
                    className="px-6 py-3 bg-[#655DC6] text-white font-bold rounded-lg hover:bg-[#5249b0] transition-all"
                  >
                    Habla con un experto hoy
                  </a>
                  <Link
                    href="https://platform.dev.jaak.ai/#/signup"
                    target="_blank"
                    className="px-6 py-3 bg-white/10 border border-white/20 text-white font-semibold rounded-lg hover:bg-white/20 transition-all"
                  >
                    Probar gratis
                  </Link>
                </div>

                {/* Compliance badges */}
                <div className="flex flex-wrap gap-3">
                  {regulations.map((reg, i) => (
                    <div key={i} className="px-4 py-2 bg-white/5 border border-white/10 rounded-lg">
                      <span className="text-[#655DC6] font-bold text-sm">{reg.name}</span>
                      <span className="text-white/50 text-xs ml-2">{reg.desc}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Right: compliance card */}
              <div className="hidden lg:flex justify-center">
                <div className="bg-white/5 border border-white/10 rounded-2xl p-8 max-w-sm w-full backdrop-blur-sm">
                  <h3 className="text-white font-bold text-lg mb-6">Panel de cumplimiento</h3>
                  <div className="space-y-4">
                    {[
                      { label: "Verificaciones hoy", value: "1,234", color: "#1ECAD3" },
                      { label: "Tasa de aprobación", value: "97.2%", color: "#655DC6" },
                      { label: "Fraudes detectados", value: "18", color: "#f59e0b" },
                      { label: "Tiempo promedio", value: "28s", color: "#1ECAD3" },
                    ].map((item, i) => (
                      <div key={i} className="flex justify-between items-center p-3 bg-white/5 rounded-lg">
                        <span className="text-white/60 text-sm">{item.label}</span>
                        <span className="font-bold text-lg" style={{ color: item.color }}>{item.value}</span>
                      </div>
                    ))}
                  </div>
                  <div className="mt-6 p-3 bg-[#655DC6]/20 rounded-lg">
                    <p className="text-[#a99df0] text-xs text-center">✓ Evidencia lista para CNBV</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Pain Points */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-14">
              <h2 className="text-3xl md:text-4xl font-black text-[#202945] mb-4">
                Los problemas que cuestan más de lo que crees
              </h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                Una mala implementación de KYC no solo genera multas regulatorias.
                Abre la puerta al fraude y destruye la confianza del cliente.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {painPoints.map((point, i) => (
                <div
                  key={i}
                  className="bg-gray-50 rounded-2xl p-8 border border-gray-100 hover:border-[#655DC6]/30 hover:shadow-lg transition-all"
                >
                  <div className="w-14 h-14 bg-[#655DC6]/10 rounded-xl flex items-center justify-center text-[#655DC6] mb-5">
                    {point.icon}
                  </div>
                  <h3 className="text-xl font-bold text-[#202945] mb-3">{point.title}</h3>
                  <p className="text-gray-600">{point.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* How it works */}
        <section className="py-20 bg-[#202945]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-14">
              <h2 className="text-3xl md:text-4xl font-black text-white mb-4">
                De semanas a horas
              </h2>
              <p className="text-xl text-white/60">
                Integración diseñada para equipos técnicos que no tienen tiempo que perder.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {steps.map((step, i) => (
                <div key={i} className="relative">
                  <div className="bg-white/5 border border-white/10 rounded-2xl p-8 hover:border-[#655DC6]/40 transition-all">
                    <div className="text-5xl font-black text-[#655DC6]/25 mb-4">{step.number}</div>
                    <h3 className="text-xl font-bold text-white mb-3">{step.title}</h3>
                    <p className="text-white/60">{step.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Products */}
        <section className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-14">
              <h2 className="text-3xl md:text-4xl font-black text-[#202945] mb-4">
                Stack completo de cumplimiento
              </h2>
              <p className="text-xl text-gray-600">
                Todo lo que tu SOFOM o fintech necesita para cumplir la regulación desde el día uno.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {products.map((product, i) => (
                <div
                  key={i}
                  className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-xl transition-all border border-gray-100"
                >
                  <div
                    className="w-3 h-3 rounded-full mb-5"
                    style={{ backgroundColor: product.color }}
                  />
                  <h3 className="text-2xl font-black text-[#202945] mb-3">{product.name}</h3>
                  <p className="text-gray-600">{product.description}</p>
                </div>
              ))}
            </div>

            <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6">
              {[
                { value: "Horas", label: "Tiempo de integración" },
                { value: "99.9%", label: "Uptime garantizado" },
                { value: "AML/KYC", label: "Evidencia regulatoria" },
                { value: "iBeta L1", label: "Certificación Liveness" },
              ].map((stat, i) => (
                <div key={i} className="text-center p-6 bg-white rounded-xl shadow-sm">
                  <div className="text-3xl font-black text-[#655DC6] mb-1">{stat.value}</div>
                  <div className="text-gray-600 text-sm">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA + Form */}
        <section id="contacto" className="py-20 bg-[#202945]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-16 items-start">
              {/* Left */}
              <div>
                <h2 className="text-3xl md:text-4xl font-black text-white mb-6">
                  Habla con un experto hoy
                </h2>
                <p className="text-xl text-white/70 mb-10">
                  Nuestros especialistas en compliance financiero y tecnología te asesoran sin costo.
                  Descubre cómo JAAK se integra con tu stack actual.
                </p>

                <div className="space-y-5">
                  {[
                    "KYC que cumple CNBV, UIF y LFPIORPI desde el día uno",
                    "Liveness certificado iBeta Level 1 — el estándar más alto",
                    "Integración en horas con API REST y SDK móvil",
                    "Evidencia auditable lista para inspecciones",
                    "Soporte de expertos en compliance financiero",
                  ].map((item, i) => (
                    <div key={i} className="flex items-start gap-3">
                      <div className="w-5 h-5 rounded-full bg-[#655DC6] flex items-center justify-center flex-shrink-0 mt-0.5">
                        <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                      <span className="text-white/80">{item}</span>
                    </div>
                  ))}
                </div>

                <div className="mt-10 p-6 bg-[#655DC6]/10 border border-[#655DC6]/20 rounded-xl">
                  <p className="text-[#a99df0] font-bold text-lg mb-1">¿Urgente?</p>
                  <a
                    href="https://meetings.hubspot.com/jaak-demo/reunion-demo?uuid=104e4d38-124f-42c0-8417-e1d728b5b8ce"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white/80 hover:text-white underline"
                  >
                    Agenda una demo técnica ahora →
                  </a>
                </div>
              </div>

              {/* Form */}
              <div className="bg-white rounded-2xl p-8 shadow-2xl">
                <h3 className="text-2xl font-bold text-[#202945] mb-2">
                  Habla con un especialista
                </h3>
                <p className="text-gray-500 mb-8">
                  Respuesta garantizada en menos de 24 horas.
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
                        Empresa
                      </label>
                      <input
                        type="text"
                        value={formData.empresa}
                        onChange={(e) => setFormData({ ...formData, empresa: e.target.value })}
                        className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:ring-2 focus:ring-[#655DC6] focus:border-transparent outline-none text-gray-900 placeholder:text-gray-400"
                        placeholder="SOFOM / Fintech / Fondo"
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
                      ¿Qué necesitas resolver?
                    </label>
                    <textarea
                      rows={3}
                      value={formData.mensaje}
                      onChange={(e) => setFormData({ ...formData, mensaje: e.target.value })}
                      className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:ring-2 focus:ring-[#655DC6] focus:border-transparent outline-none resize-none text-gray-900 placeholder:text-gray-400"
                      placeholder="Ej: Necesito KYC para onboarding de créditos, cumplir CNBV..."
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={status === "loading"}
                    className="w-full px-6 py-4 bg-[#655DC6] text-white font-bold rounded-lg hover:bg-[#5249b0] transition-all disabled:opacity-50 disabled:cursor-not-allowed text-lg"
                  >
                    {status === "loading" ? "Enviando..." : "Habla con un experto hoy"}
                  </button>

                  {status === "success" && (
                    <div className="p-4 bg-green-50 border border-green-200 rounded-lg text-center">
                      <p className="text-green-700 font-medium">
                        ✓ Solicitud enviada. Un especialista te contacta en menos de 24h.
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
