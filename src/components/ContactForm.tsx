"use client";

import { useState } from "react";
import { gtmEvent } from "./GoogleTagManager";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    phone: "",
    role: "",
    message: "",
  });
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  const benefits = [
    "Soluciones potenciadas con Inteligencia Artificial",
    "Cumplimiento normativo (CNBV, LFPIORPI, LFPDPPP, CUB)",
    "Reducción del riesgo por suplantación de identidad",
    "Verificación y validación de documentos",
    "Disminuye el tiempo de tu mesa de control",
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
        setFormData({ name: "", email: "", company: "", phone: "", role: "", message: "" });
        // Track successful form submission
        gtmEvent("generate_lead", {
          event_category: "Contact",
          event_label: formData.role,
          value: 1,
        });
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  };

  return (
    <section className="py-24 bg-gray-50" id="contacto">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20">
          {/* Left side - Info */}
          <div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-gray-900 mb-4">
              Contáctanos
            </h2>
            <p className="text-xl text-[#0066ff] font-semibold mb-4">
              Lleva la seguridad de tu empresa al siguiente nivel
            </p>
            <p className="text-gray-600 mb-8">
              Con JAAK, la seguridad no es una opción, es una garantía. Completa el formulario y accede a una demostración personalizada que te mostrará cómo nuestras soluciones integradas pueden transformar tu operación.
            </p>
            <div className="space-y-4">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-center gap-3">
                  <div className="w-6 h-6 bg-gradient-to-br from-[#0066ff] to-[#00d4aa] rounded-full flex items-center justify-center flex-shrink-0">
                    <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span className="text-gray-700">{benefit}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right side - Form */}
          <div className="bg-white border border-gray-200 rounded-xl p-8 shadow-sm">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-900 mb-2">
                    Nombre completo *
                  </label>
                  <input
                    type="text"
                    id="name"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:ring-2 focus:ring-[#0066ff] focus:border-transparent outline-none transition-all text-gray-900 placeholder:text-gray-400"
                    placeholder="Tu nombre"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-900 mb-2">
                    Correo electrónico *
                  </label>
                  <input
                    type="email"
                    id="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:ring-2 focus:ring-[#0066ff] focus:border-transparent outline-none transition-all text-gray-900 placeholder:text-gray-400"
                    placeholder="tu@email.com"
                  />
                </div>
              </div>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="company" className="block text-sm font-medium text-gray-900 mb-2">
                    Empresa
                  </label>
                  <input
                    type="text"
                    id="company"
                    value={formData.company}
                    onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                    className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:ring-2 focus:ring-[#0066ff] focus:border-transparent outline-none transition-all text-gray-900 placeholder:text-gray-400"
                    placeholder="Tu empresa"
                  />
                </div>
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-900 mb-2">
                    Teléfono *
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    required
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:ring-2 focus:ring-[#0066ff] focus:border-transparent outline-none transition-all text-gray-900 placeholder:text-gray-400"
                    placeholder="+52 55 1234 5678"
                  />
                </div>
              </div>
              <div>
                <label htmlFor="role" className="block text-sm font-medium text-gray-900 mb-2">
                  ¿Cuál es tu función en la empresa? *
                </label>
                <select
                  id="role"
                  required
                  value={formData.role}
                  onChange={(e) => setFormData({ ...formData, role: e.target.value })}
                  className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:ring-2 focus:ring-[#0066ff] focus:border-transparent outline-none transition-all text-gray-900"
                >
                  <option value="">Selecciona una opción</option>
                  <option value="Director/CEO">Director/CEO</option>
                  <option value="Gerente">Gerente</option>
                  <option value="Cumplimiento/Compliance">Cumplimiento/Compliance</option>
                  <option value="Tecnología/IT">Tecnología/IT</option>
                  <option value="Operaciones">Operaciones</option>
                  <option value="Legal">Legal</option>
                  <option value="Otro">Otro</option>
                </select>
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-900 mb-2">
                  Mensaje
                </label>
                <textarea
                  id="message"
                  rows={4}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:ring-2 focus:ring-[#0066ff] focus:border-transparent outline-none transition-all resize-none text-gray-900 placeholder:text-gray-400"
                  placeholder="¿Cómo podemos ayudarte?"
                />
              </div>
              <button
                type="submit"
                disabled={status === "loading"}
                className="w-full px-6 py-4 bg-[#0066ff] text-white font-bold rounded-lg hover:bg-[#0052cc] transition-all disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {status === "loading" ? "Enviando..." : "Enviar mensaje"}
              </button>
              {status === "success" && (
                <p className="text-green-600 text-center">¡Mensaje enviado con éxito! Nos pondremos en contacto contigo pronto.</p>
              )}
              {status === "error" && (
                <p className="text-red-600 text-center">Hubo un error al enviar el mensaje. Por favor, intenta de nuevo.</p>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
