"use client";

import { useState } from "react";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    phone: "",
    message: "",
  });
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  const benefits = [
    "Soluciones con IA",
    "Cumplimiento normativo",
    "Reducción de suplantación",
    "Verificación de documentos",
    "Disminución de tiempo en mesa de control",
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
    <section className="section-padding bg-[#f8fafc]" id="contacto">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20">
          {/* Left side - Info */}
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-[#0E1133] mb-4">
              Contáctanos
            </h2>
            <p className="text-xl text-[#2DB6C1] font-semibold mb-8">
              Lleva la seguridad de tu empresa al siguiente nivel
            </p>
            <div className="space-y-4">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-center gap-3">
                  <div className="w-6 h-6 bg-[#2AD796] rounded-full flex items-center justify-center flex-shrink-0">
                    <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span className="text-[#53535B]">{benefit}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right side - Form */}
          <div className="card">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-[#0E1133] mb-2">
                    Nombre completo *
                  </label>
                  <input
                    type="text"
                    id="name"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-4 py-3 border border-[#EEEEEE] rounded-lg focus:ring-2 focus:ring-[#2DB6C1] focus:border-transparent outline-none transition-all"
                    placeholder="Tu nombre"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-[#0E1133] mb-2">
                    Correo electrónico *
                  </label>
                  <input
                    type="email"
                    id="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-4 py-3 border border-[#EEEEEE] rounded-lg focus:ring-2 focus:ring-[#2DB6C1] focus:border-transparent outline-none transition-all"
                    placeholder="tu@email.com"
                  />
                </div>
              </div>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="company" className="block text-sm font-medium text-[#0E1133] mb-2">
                    Empresa
                  </label>
                  <input
                    type="text"
                    id="company"
                    value={formData.company}
                    onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                    className="w-full px-4 py-3 border border-[#EEEEEE] rounded-lg focus:ring-2 focus:ring-[#2DB6C1] focus:border-transparent outline-none transition-all"
                    placeholder="Tu empresa"
                  />
                </div>
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-[#0E1133] mb-2">
                    Teléfono
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full px-4 py-3 border border-[#EEEEEE] rounded-lg focus:ring-2 focus:ring-[#2DB6C1] focus:border-transparent outline-none transition-all"
                    placeholder="+52 55 1234 5678"
                  />
                </div>
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-[#0E1133] mb-2">
                  Mensaje
                </label>
                <textarea
                  id="message"
                  rows={4}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full px-4 py-3 border border-[#EEEEEE] rounded-lg focus:ring-2 focus:ring-[#2DB6C1] focus:border-transparent outline-none transition-all resize-none"
                  placeholder="¿Cómo podemos ayudarte?"
                />
              </div>
              <button
                type="submit"
                disabled={status === "loading"}
                className="w-full btn-green disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {status === "loading" ? "Enviando..." : "Enviar mensaje"}
              </button>
              {status === "success" && (
                <p className="text-[#2AD796] text-center">¡Mensaje enviado con éxito! Nos pondremos en contacto contigo pronto.</p>
              )}
              {status === "error" && (
                <p className="text-red-500 text-center">Hubo un error al enviar el mensaje. Por favor, intenta de nuevo.</p>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
