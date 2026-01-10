"use client";

import { useState } from "react";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function ContactoPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    phone: "",
    message: "",
  });
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  const benefits = [
    {
      title: "Cumplimiento normativo garantizado",
      description: "CNBV, LFPIORPI, LFPDPPP, CUB y todas las regulaciones aplicables.",
    },
    {
      title: "Implementacion rapida",
      description: "Integracion en dias, no meses. Con soporte tecnico dedicado.",
    },
    {
      title: "Tecnologia certificada",
      description: "ISO 27001, ISO 9001, iBeta para prueba de vida.",
    },
    {
      title: "Reduccion de fraude comprobada",
      description: "Hasta 99.9% de precision en deteccion de identidades falsas.",
    },
    {
      title: "Soporte especializado",
      description: "Equipo de expertos en compliance y tecnologia a tu disposicion.",
    },
  ];

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setStatus("success");
        setFormData({ name: "", email: "", company: "", phone: "", message: "" });
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  };

  return (
    <>
      <Header />
      <main>
        {/* Hero Section */}
        <section className="pt-32 pb-20 bg-[#0a0a0a] relative overflow-hidden">
          {/* Background gradient effects */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <div className="absolute top-1/4 left-1/4 w-[600px] h-[600px] bg-[#0066ff]/10 rounded-full blur-[120px]" />
            <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-[#00d4aa]/10 rounded-full blur-[100px]" />
          </div>

          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-white mb-6">
                Hablemos de tu{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0066ff] to-[#00d4aa]">
                  proyecto
                </span>
              </h1>
              <p className="text-xl text-white/70">
                Nuestro equipo de expertos esta listo para ayudarte a implementar
                la solucion de identidad digital que tu empresa necesita.
              </p>
            </div>

            {/* Main Content Grid */}
            <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
              {/* Left Side - Benefits */}
              <div className="order-2 lg:order-1">
                <h2 className="text-2xl font-bold text-white mb-8">
                  Por que elegir JAAK
                </h2>
                <div className="space-y-6">
                  {benefits.map((benefit, index) => (
                    <div key={index} className="flex gap-4">
                      <div className="w-10 h-10 bg-gradient-to-br from-[#0066ff] to-[#00d4aa] rounded-lg flex items-center justify-center flex-shrink-0">
                        <svg
                          className="w-5 h-5 text-white"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M5 13l4 4L19 7"
                          />
                        </svg>
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold text-white mb-1">
                          {benefit.title}
                        </h3>
                        <p className="text-white/60">{benefit.description}</p>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Alternative CTA */}
                <div className="mt-12 p-6 bg-white/5 rounded-xl border border-white/10">
                  <p className="text-white/80 mb-4">
                    No quieres esperar? Puedes usar nuestra plataforma desde hoy mismo.
                  </p>
                  <Link
                    href="https://platform.dev.jaak.ai/#/signup"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-6 py-3 bg-[#00d4aa] text-[#0a0a0a] font-bold rounded-lg hover:bg-[#00b894] transition-all"
                  >
                    Comenzar ahora
                    <svg
                      className="w-5 h-5"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M17 8l4 4m0 0l-4 4m4-4H3"
                      />
                    </svg>
                  </Link>
                </div>
              </div>

              {/* Right Side - Contact Form */}
              <div className="order-1 lg:order-2">
                <div className="bg-white rounded-2xl p-8 shadow-2xl">
                  <h2 className="text-2xl font-bold text-gray-900 mb-2">
                    Solicita una demostracion
                  </h2>
                  <p className="text-gray-600 mb-8">
                    Completa el formulario y un especialista te contactara en menos de 24 horas.
                  </p>

                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <label
                          htmlFor="name"
                          className="block text-sm font-medium text-gray-900 mb-2"
                        >
                          Nombre completo *
                        </label>
                        <input
                          type="text"
                          id="name"
                          required
                          value={formData.name}
                          onChange={(e) =>
                            setFormData({ ...formData, name: e.target.value })
                          }
                          className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:ring-2 focus:ring-[#0066ff] focus:border-transparent outline-none transition-all text-gray-900 placeholder:text-gray-400"
                          placeholder="Tu nombre"
                        />
                      </div>
                      <div>
                        <label
                          htmlFor="email"
                          className="block text-sm font-medium text-gray-900 mb-2"
                        >
                          Correo electronico *
                        </label>
                        <input
                          type="email"
                          id="email"
                          required
                          value={formData.email}
                          onChange={(e) =>
                            setFormData({ ...formData, email: e.target.value })
                          }
                          className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:ring-2 focus:ring-[#0066ff] focus:border-transparent outline-none transition-all text-gray-900 placeholder:text-gray-400"
                          placeholder="tu@email.com"
                        />
                      </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <label
                          htmlFor="company"
                          className="block text-sm font-medium text-gray-900 mb-2"
                        >
                          Empresa
                        </label>
                        <input
                          type="text"
                          id="company"
                          value={formData.company}
                          onChange={(e) =>
                            setFormData({ ...formData, company: e.target.value })
                          }
                          className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:ring-2 focus:ring-[#0066ff] focus:border-transparent outline-none transition-all text-gray-900 placeholder:text-gray-400"
                          placeholder="Tu empresa"
                        />
                      </div>
                      <div>
                        <label
                          htmlFor="phone"
                          className="block text-sm font-medium text-gray-900 mb-2"
                        >
                          Telefono
                        </label>
                        <input
                          type="tel"
                          id="phone"
                          value={formData.phone}
                          onChange={(e) =>
                            setFormData({ ...formData, phone: e.target.value })
                          }
                          className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:ring-2 focus:ring-[#0066ff] focus:border-transparent outline-none transition-all text-gray-900 placeholder:text-gray-400"
                          placeholder="+52 55 1234 5678"
                        />
                      </div>
                    </div>

                    <div>
                      <label
                        htmlFor="message"
                        className="block text-sm font-medium text-gray-900 mb-2"
                      >
                        Mensaje
                      </label>
                      <textarea
                        id="message"
                        rows={4}
                        value={formData.message}
                        onChange={(e) =>
                          setFormData({ ...formData, message: e.target.value })
                        }
                        className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:ring-2 focus:ring-[#0066ff] focus:border-transparent outline-none transition-all resize-none text-gray-900 placeholder:text-gray-400"
                        placeholder="Cuentanos sobre tu proyecto o necesidades..."
                      />
                    </div>

                    <button
                      type="submit"
                      disabled={status === "loading"}
                      className="w-full px-6 py-4 bg-[#0066ff] text-white font-bold rounded-lg hover:bg-[#0052cc] transition-all disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                      {status === "loading" ? "Enviando..." : "Enviar solicitud"}
                    </button>

                    {status === "success" && (
                      <div className="p-4 bg-green-50 border border-green-200 rounded-lg">
                        <p className="text-green-700 text-center font-medium">
                          Mensaje enviado con exito! Nos pondremos en contacto contigo pronto.
                        </p>
                      </div>
                    )}

                    {status === "error" && (
                      <div className="p-4 bg-red-50 border border-red-200 rounded-lg">
                        <p className="text-red-700 text-center font-medium">
                          Hubo un error al enviar el mensaje. Por favor, intenta de nuevo.
                        </p>
                      </div>
                    )}
                  </form>

                  <p className="mt-6 text-sm text-gray-500 text-center">
                    Al enviar este formulario, aceptas nuestra{" "}
                    <Link href="/privacidad" className="text-[#0066ff] hover:underline">
                      Politica de Privacidad
                    </Link>
                    .
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Additional Info Section */}
        <section className="py-20 bg-[#0a0a0a] border-t border-white/10">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-3 gap-8">
              {/* Email */}
              <div className="text-center p-8 bg-white/5 rounded-xl border border-white/10">
                <div className="w-14 h-14 bg-[#0066ff]/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg
                    className="w-7 h-7 text-[#0066ff]"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={1.5}
                      d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                    />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">Email</h3>
                <a
                  href="mailto:contacto@jaak.ai"
                  className="text-[#0066ff] hover:underline"
                >
                  contacto@jaak.ai
                </a>
              </div>

              {/* Phone */}
              <div className="text-center p-8 bg-white/5 rounded-xl border border-white/10">
                <div className="w-14 h-14 bg-[#0066ff]/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg
                    className="w-7 h-7 text-[#0066ff]"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={1.5}
                      d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                    />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">Telefono</h3>
                <a
                  href="tel:+525512345678"
                  className="text-[#0066ff] hover:underline"
                >
                  +52 55 1234 5678
                </a>
              </div>

              {/* Location */}
              <div className="text-center p-8 bg-white/5 rounded-xl border border-white/10">
                <div className="w-14 h-14 bg-[#0066ff]/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg
                    className="w-7 h-7 text-[#0066ff]"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={1.5}
                      d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={1.5}
                      d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">Ubicacion</h3>
                <p className="text-white/60">Ciudad de Mexico, Mexico</p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
