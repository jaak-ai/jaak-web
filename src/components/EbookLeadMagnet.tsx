"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { gtmEvent } from "./GoogleTagManager";
import { getUtmParams } from "./CloudflareTurnstile";
import { EBOOK_TITLE } from "@/lib/ebook";

const contents = [
  "Sanciones internacionales",
  "Personas bloqueadas",
  "Personas Políticamente Expuestas",
  "Riesgo fiscal",
  "Personas buscadas",
  "Alertas regulatorias",
  "Registros preventivos",
  "Marco legal aplicable",
  "Fuentes oficiales de consulta",
  "Recomendaciones para documentar una coincidencia",
];

export default function EbookLeadMagnet() {
  const router = useRouter();
  const [formData, setFormData] = useState({
    nombre: "",
    apellido: "",
    email: "",
    empresa: "",
    cargo: "",
    telefono: "",
  });
  const [accepted, setAccepted] = useState(false);
  const [started, setStarted] = useState(false);
  const [status, setStatus] = useState<"idle" | "loading" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");

  const trackStart = () => {
    if (!started) {
      setStarted(true);
      gtmEvent("ebook_form_start", { source: "ebook_section", page_path: window.location.pathname });
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!accepted) {
      setStatus("error");
      setErrorMessage("Debes aceptar el Aviso de Privacidad para continuar.");
      return;
    }

    setStatus("loading");
    setErrorMessage("");
    gtmEvent("ebook_form_submit", { source: "ebook_section", page_path: window.location.pathname });

    try {
      const res = await fetch("/api/landing", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: formData.nombre,
          apellido: formData.apellido,
          email: formData.email,
          empresa: formData.empresa,
          cargo: formData.cargo,
          telefono: formData.telefono,
          source: "landing-listas-riesgo-ebook",
          ...getUtmParams(),
          page_url: window.location.href,
        }),
      });

      if (res.ok) {
        gtmEvent("form_success", { form_type: "ebook", source: "ebook_section", page_path: window.location.pathname });
        gtmEvent("ebook_download", { source: "ebook_section", page_path: window.location.pathname });
        router.push("/gracias/guia-listas-de-riesgo");
      } else {
        const data = await res.json().catch(() => ({}));
        setStatus("error");
        setErrorMessage(data.error || "Error al enviar. Intenta de nuevo.");
        gtmEvent("form_error", { source: "ebook_section", page_path: window.location.pathname });
      }
    } catch {
      setStatus("error");
      setErrorMessage("Error de conexión. Intenta de nuevo.");
      gtmEvent("form_error", { source: "ebook_section", page_path: window.location.pathname });
    }
  };

  return (
    <section id="ebook" className="py-20 bg-[#202945] relative overflow-hidden" aria-labelledby="ebook-heading">
      <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-[#1ECAD3]/10 rounded-full blur-[120px] pointer-events-none" aria-hidden="true" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left: pitch + cover */}
          <div data-sr>
            <span className="text-xs font-bold uppercase tracking-wider text-[#1ECAD3]">
              Guía para Oficiales de Cumplimiento · Edición 2026
            </span>
            <h2 id="ebook-heading" className="text-3xl md:text-4xl font-black text-white mt-3 mb-5">
              43 fuentes de riesgo, una sola guía
            </h2>
            <p className="text-white/70 mb-6 leading-relaxed">
              Conoce qué revisa cada fuente, para qué sirve, qué autoridad la publica y cómo interpretar sus
              resultados antes de iniciar o continuar una relación comercial.
            </p>

            <ul className="grid sm:grid-cols-2 gap-2 mb-8">
              {contents.map((item) => (
                <li key={item} className="flex items-center gap-2 text-sm text-white/70">
                  <svg className="w-3.5 h-3.5 text-[#1ECAD3] flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                  </svg>
                  {item}
                </li>
              ))}
            </ul>

            {/* Cover mockup, ligera perspectiva */}
            <div
              className="hidden lg:block w-48 rounded-lg shadow-2xl border border-white/10 overflow-hidden bg-white/5"
              style={{ transform: "perspective(800px) rotateY(8deg) rotateX(2deg)" }}
              aria-hidden="true"
            >
              <div className="aspect-[3/4] flex flex-col justify-between p-5" style={{ background: "linear-gradient(160deg,#0E1133,#202945)" }}>
                <span className="text-[#1ECAD3] text-[10px] font-bold uppercase tracking-wide">JAAK · 2026</span>
                <div>
                  <p className="text-white font-black text-lg leading-tight">43 fuentes de riesgo, una sola consulta</p>
                  <p className="text-white/50 text-[10px] mt-2">Guía para Oficiales de Cumplimiento</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right: form */}
          <div data-sr="right" className="bg-white rounded-2xl p-8 shadow-2xl">
            <h3 className="text-xl font-bold text-[#202945] mb-1">Descargar guía 2026</h3>
            <p className="text-gray-500 text-sm mb-6">{EBOOK_TITLE}</p>

            <form onSubmit={handleSubmit} className="space-y-4" onFocus={trackStart}>
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="ebook-nombre" className="block text-sm font-medium text-gray-800 mb-1.5">
                    Nombre *
                  </label>
                  <input
                    id="ebook-nombre"
                    type="text"
                    required
                    autoComplete="given-name"
                    value={formData.nombre}
                    onChange={(e) => setFormData({ ...formData, nombre: e.target.value })}
                    className="w-full px-4 py-2.5 bg-gray-50 border border-gray-200 rounded-lg focus:ring-2 focus:ring-[#1ECAD3] focus:border-transparent outline-none text-gray-900 placeholder:text-gray-400"
                  />
                </div>
                <div>
                  <label htmlFor="ebook-apellido" className="block text-sm font-medium text-gray-800 mb-1.5">
                    Apellido *
                  </label>
                  <input
                    id="ebook-apellido"
                    type="text"
                    required
                    autoComplete="family-name"
                    value={formData.apellido}
                    onChange={(e) => setFormData({ ...formData, apellido: e.target.value })}
                    className="w-full px-4 py-2.5 bg-gray-50 border border-gray-200 rounded-lg focus:ring-2 focus:ring-[#1ECAD3] focus:border-transparent outline-none text-gray-900 placeholder:text-gray-400"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="ebook-email" className="block text-sm font-medium text-gray-800 mb-1.5">
                  Correo corporativo *
                </label>
                <input
                  id="ebook-email"
                  type="email"
                  required
                  autoComplete="email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full px-4 py-2.5 bg-gray-50 border border-gray-200 rounded-lg focus:ring-2 focus:ring-[#1ECAD3] focus:border-transparent outline-none text-gray-900 placeholder:text-gray-400"
                  placeholder="tu@empresa.com"
                />
              </div>

              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="ebook-empresa" className="block text-sm font-medium text-gray-800 mb-1.5">
                    Empresa *
                  </label>
                  <input
                    id="ebook-empresa"
                    type="text"
                    required
                    autoComplete="organization"
                    value={formData.empresa}
                    onChange={(e) => setFormData({ ...formData, empresa: e.target.value })}
                    className="w-full px-4 py-2.5 bg-gray-50 border border-gray-200 rounded-lg focus:ring-2 focus:ring-[#1ECAD3] focus:border-transparent outline-none text-gray-900 placeholder:text-gray-400"
                  />
                </div>
                <div>
                  <label htmlFor="ebook-cargo" className="block text-sm font-medium text-gray-800 mb-1.5">
                    Cargo o área *
                  </label>
                  <input
                    id="ebook-cargo"
                    type="text"
                    required
                    autoComplete="organization-title"
                    value={formData.cargo}
                    onChange={(e) => setFormData({ ...formData, cargo: e.target.value })}
                    className="w-full px-4 py-2.5 bg-gray-50 border border-gray-200 rounded-lg focus:ring-2 focus:ring-[#1ECAD3] focus:border-transparent outline-none text-gray-900 placeholder:text-gray-400"
                    placeholder="Oficial de cumplimiento"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="ebook-telefono" className="block text-sm font-medium text-gray-800 mb-1.5">
                  Teléfono (opcional)
                </label>
                <input
                  id="ebook-telefono"
                  type="tel"
                  autoComplete="tel"
                  value={formData.telefono}
                  onChange={(e) => setFormData({ ...formData, telefono: e.target.value })}
                  className="w-full px-4 py-2.5 bg-gray-50 border border-gray-200 rounded-lg focus:ring-2 focus:ring-[#1ECAD3] focus:border-transparent outline-none text-gray-900 placeholder:text-gray-400"
                />
              </div>

              <label className="flex items-start gap-2.5 text-sm text-gray-600">
                <input
                  type="checkbox"
                  required
                  checked={accepted}
                  onChange={(e) => setAccepted(e.target.checked)}
                  className="mt-0.5 w-4 h-4 flex-shrink-0 accent-[#1ECAD3]"
                />
                <span>
                  Al enviar tus datos aceptas el{" "}
                  <a href="/privacidad" className="text-[#0F8E96] underline hover:text-[#202945]">
                    Aviso de Privacidad
                  </a>{" "}
                  de JAAK.
                </span>
              </label>

              <button
                type="submit"
                disabled={status === "loading"}
                data-cta="descargar-guia"
                data-source="ebook_section"
                className="w-full px-6 py-3.5 min-h-[48px] bg-[#1ECAD3] text-[#202945] font-bold rounded-lg hover:bg-[#17b5bd] transition-all disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {status === "loading" ? "Enviando…" : "Descargar guía 2026"}
              </button>

              {status === "error" && (
                <p role="alert" className="text-red-600 text-sm text-center">
                  {errorMessage}
                </p>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
