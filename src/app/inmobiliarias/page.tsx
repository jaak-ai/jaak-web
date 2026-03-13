"use client";

import { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Link from "next/link";

const painPoints = [
  {
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
      </svg>
    ),
    title: "Compradores que no son quienes dicen ser",
    description:
      "La suplantación de identidad en operaciones inmobiliarias invalida contratos y expone a tu empresa a fraudes millonarios.",
  },
  {
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
      </svg>
    ),
    title: "Contratos que se invalidan",
    description:
      "Sin verificación de identidad robusta, los contratos pueden impugnarse ante notaría o en litigios. JAAK genera evidencia jurídicamente válida.",
  },
  {
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    title: "Proceso lento con copias de INE",
    description:
      "Solicitar copias físicas, validarlas manualmente y almacenarlas consume tiempo y recursos. JAAK lo hace en 30 segundos, 100% digital.",
  },
];

const steps = [
  {
    number: "01",
    title: "El cliente se verifica desde su celular",
    description: "Captura de INE/pasaporte + selfie con prueba de vida. Sin app que descargar.",
  },
  {
    number: "02",
    title: "JAAK valida la identidad en tiempo real",
    description: "IA biométrica compara el documento con el rostro del cliente y detecta fraudes.",
  },
  {
    number: "03",
    title: "Firma el contrato con valor legal",
    description: "Firma Electrónica NOM-151 vinculada a la identidad verificada. Evidencia auditable.",
  },
];

const products = [
  {
    name: "KYC Digital",
    description: "Verificación de identidad con INE, CURP y prueba de vida biométrica.",
    color: "#1ECAD3",
  },
  {
    name: "Firma NOM-151",
    description: "Firma electrónica con plena validez jurídica en México. Sellado de tiempo certificado.",
    color: "#655DC6",
  },
];

export default function InmobiliariasPage() {
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
        body: JSON.stringify({ ...formData, source: "landing-inmobiliarias" }),
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
            <div className="absolute top-1/3 right-0 w-[500px] h-[500px] bg-[#1ECAD3]/10 rounded-full blur-[120px]" />
            <div className="absolute bottom-0 left-1/4 w-[400px] h-[400px] bg-[#655DC6]/10 rounded-full blur-[100px]" />
          </div>

          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#1ECAD3]/10 border border-[#1ECAD3]/30 rounded-full mb-6">
                  <span className="w-2 h-2 bg-[#1ECAD3] rounded-full"></span>
                  <span className="text-[#1ECAD3] text-sm font-medium">Para inmobiliarias, notarías y firmas legales</span>
                </div>

                <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-white mb-6 leading-tight">
                  Verifica a tus clientes en{" "}
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#1ECAD3] to-[#655DC6]">
                    30 segundos.
                  </span>{" "}
                  Sin papel, sin fraude.
                </h1>

                <p className="text-xl text-white/70 mb-8">
                  KYC biométrico + Firma Electrónica NOM-151 para operaciones inmobiliarias seguras
                  y con plena validez legal en México.
                </p>

                <div className="flex flex-wrap gap-4 mb-10">
                  <a
                    href="#contacto"
                    className="px-6 py-3 bg-[#1ECAD3] text-[#202945] font-bold rounded-lg hover:bg-[#17b5bd] transition-all"
                  >
                    Solicitar demo gratuita
                  </a>
                  <Link
                    href="https://meetings.hubspot.com/jaak-demo/reunion-demo?uuid=104e4d38-124f-42c0-8417-e1d728b5b8ce"
                    target="_blank"
                    className="px-6 py-3 bg-white/10 border border-white/20 text-white font-semibold rounded-lg hover:bg-white/20 transition-all"
                  >
                    Hablar con un experto
                  </Link>
                </div>

                {/* Social proof */}
                <div className="flex items-center gap-3 p-4 bg-white/5 border border-white/10 rounded-xl w-fit">
                  <div className="flex -space-x-2">
                    {[...Array(4)].map((_, i) => (
                      <div
                        key={i}
                        className="w-8 h-8 rounded-full bg-gradient-to-br from-[#1ECAD3] to-[#655DC6] border-2 border-[#202945] flex items-center justify-center text-white text-xs font-bold"
                      >
                        {["E", "F", "N", "B"][i]}
                      </div>
                    ))}
                  </div>
                  <p className="text-white/80 text-sm">
                    <strong className="text-white">+1,000 empresas</strong> en México ya confían en JAAK
                  </p>
                </div>
              </div>

              {/* Right: mini-preview card */}
              <div className="hidden lg:flex justify-center">
                <div className="bg-white/5 border border-white/10 rounded-2xl p-8 max-w-sm w-full backdrop-blur-sm">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-10 h-10 bg-[#1ECAD3]/20 rounded-lg flex items-center justify-center">
                      <svg className="w-6 h-6 text-[#1ECAD3]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                    <span className="text-white font-semibold">Verificación completada</span>
                  </div>
                  <div className="space-y-3">
                    {["Documento INE validado ✓", "Prueba de vida aprobada ✓", "Firma NOM-151 generada ✓", "Evidencia almacenada ✓"].map((item, i) => (
                      <div key={i} className="flex items-center gap-3 p-3 bg-white/5 rounded-lg">
                        <span className="text-[#1ECAD3] text-sm">✓</span>
                        <span className="text-white/80 text-sm">{item.replace(" ✓", "")}</span>
                      </div>
                    ))}
                  </div>
                  <div className="mt-6 p-3 bg-[#1ECAD3]/10 rounded-lg text-center">
                    <span className="text-[#1ECAD3] font-bold text-2xl">28s</span>
                    <p className="text-white/60 text-xs mt-1">Tiempo total del proceso</p>
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
                Los riesgos que tu operación no puede ignorar
              </h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                Sin verificación de identidad digital, tu empresa está expuesta a fraudes que pueden
                costar contratos, reputación y dinero.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {painPoints.map((point, i) => (
                <div
                  key={i}
                  className="bg-gray-50 rounded-2xl p-8 border border-gray-100 hover:border-[#1ECAD3]/30 hover:shadow-lg transition-all"
                >
                  <div className="w-14 h-14 bg-[#202945]/5 rounded-xl flex items-center justify-center text-[#202945] mb-5">
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
                Cómo funciona
              </h2>
              <p className="text-xl text-white/60">
                Proceso 100% digital. Sin papeles. Sin visitas a oficina.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {steps.map((step, i) => (
                <div key={i} className="relative">
                  {i < steps.length - 1 && (
                    <div className="hidden md:block absolute top-8 left-full w-full h-0.5 bg-gradient-to-r from-[#1ECAD3]/50 to-transparent z-0" />
                  )}
                  <div className="relative bg-white/5 border border-white/10 rounded-2xl p-8 hover:border-[#1ECAD3]/40 transition-all">
                    <div className="text-5xl font-black text-[#1ECAD3]/20 mb-4">{step.number}</div>
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
                Solución completa para operaciones inmobiliarias
              </h2>
            </div>
            <div className="grid md:grid-cols-2 gap-8 max-w-3xl mx-auto">
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

            {/* Stats */}
            <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6">
              {[
                { value: "30s", label: "Tiempo de verificación" },
                { value: "99.9%", label: "Precisión biométrica" },
                { value: "+1,000", label: "Empresas en México" },
                { value: "100%", label: "Validez legal" },
              ].map((stat, i) => (
                <div key={i} className="text-center p-6 bg-white rounded-xl shadow-sm">
                  <div className="text-3xl font-black text-[#1ECAD3] mb-1">{stat.value}</div>
                  <div className="text-gray-600 text-sm">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Form */}
        <section id="contacto" className="py-20 bg-[#202945]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-16 items-start">
              {/* Left */}
              <div>
                <h2 className="text-3xl md:text-4xl font-black text-white mb-6">
                  Agenda tu demo gratuita hoy
                </h2>
                <p className="text-xl text-white/70 mb-10">
                  Un especialista de JAAK te mostrará cómo integrar KYC y firma electrónica
                  en tu proceso de ventas en menos de una semana.
                </p>

                <div className="space-y-5">
                  {[
                    "Verificación de identidad en 30 segundos",
                    "Firma electrónica NOM-151 con evidencia legal",
                    "Integración sin fricción con tus sistemas actuales",
                    "Soporte técnico dedicado desde el día uno",
                    "+1,000 empresas en México ya lo usan",
                  ].map((item, i) => (
                    <div key={i} className="flex items-start gap-3">
                      <div className="w-5 h-5 rounded-full bg-[#1ECAD3] flex items-center justify-center flex-shrink-0 mt-0.5">
                        <svg className="w-3 h-3 text-[#202945]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                      <span className="text-white/80">{item}</span>
                    </div>
                  ))}
                </div>

                <div className="mt-10 p-6 bg-[#1ECAD3]/10 border border-[#1ECAD3]/20 rounded-xl">
                  <p className="text-[#1ECAD3] font-bold text-lg mb-1">¿Prefieres hablar ya?</p>
                  <a
                    href="https://meetings.hubspot.com/jaak-demo/reunion-demo?uuid=104e4d38-124f-42c0-8417-e1d728b5b8ce"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white/80 hover:text-white underline"
                  >
                    Agenda directamente en nuestro calendario →
                  </a>
                </div>
              </div>

              {/* Form */}
              <div className="bg-white rounded-2xl p-8 shadow-2xl">
                <h3 className="text-2xl font-bold text-[#202945] mb-2">
                  Solicita información
                </h3>
                <p className="text-gray-500 mb-8">
                  Te respondemos en menos de 24 horas.
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
                        className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:ring-2 focus:ring-[#1ECAD3] focus:border-transparent outline-none text-gray-900 placeholder:text-gray-400"
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
                        className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:ring-2 focus:ring-[#1ECAD3] focus:border-transparent outline-none text-gray-900 placeholder:text-gray-400"
                        placeholder="Inmobiliaria / Notaría"
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
                        className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:ring-2 focus:ring-[#1ECAD3] focus:border-transparent outline-none text-gray-900 placeholder:text-gray-400"
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
                        className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:ring-2 focus:ring-[#1ECAD3] focus:border-transparent outline-none text-gray-900 placeholder:text-gray-400"
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
                      className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:ring-2 focus:ring-[#1ECAD3] focus:border-transparent outline-none resize-none text-gray-900 placeholder:text-gray-400"
                      placeholder="Cuéntanos tu caso..."
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={status === "loading"}
                    className="w-full px-6 py-4 bg-[#1ECAD3] text-[#202945] font-bold rounded-lg hover:bg-[#17b5bd] transition-all disabled:opacity-50 disabled:cursor-not-allowed text-lg"
                  >
                    {status === "loading" ? "Enviando..." : "Quiero una demo gratuita"}
                  </button>

                  {status === "success" && (
                    <div className="p-4 bg-green-50 border border-green-200 rounded-lg text-center">
                      <p className="text-green-700 font-medium">
                        ✓ Solicitud enviada. Te contactamos en menos de 24h.
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
                    <Link href="/privacidad" className="text-[#1ECAD3] hover:underline">
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
