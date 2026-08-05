"use client";

import { useState } from "react";
import { gtmEvent } from "@/components/GoogleTagManager";
import { getUtmParams } from "@/components/CloudflareTurnstile";

const TEAL = "#1ECAD3";

const TIPOS_OPERACION = ["Casino en línea", "Apuestas deportivas", "Sorteos y concursos", "Operador multimarca", "Otro"];
const VOLUMENES = ["Menos de 1,000", "1,000 – 10,000", "10,000 – 50,000", "Más de 50,000"];

export default function GuideLeadForm() {
  const [formData, setFormData] = useState({
    nombre: "",
    apellido: "",
    email: "",
    empresa: "",
    cargo: "",
    tipoOperacion: TIPOS_OPERACION[0],
    volumen: VOLUMENES[0],
  });
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");
    setErrorMessage("");
    gtmEvent("guia_kyc_gaming_submit", { source: "guia_section", page_path: window.location.pathname });

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
          mensaje: `Tipo de operación: ${formData.tipoOperacion} | Volumen mensual aproximado de registros: ${formData.volumen}`,
          source: "landing-kyc-igaming-mexico-guia",
          ...getUtmParams(),
          page_url: window.location.href,
        }),
      });

      if (res.ok) {
        gtmEvent("form_success", { form_type: "guia_kyc_gaming", source: "guia_section", page_path: window.location.pathname });
        setStatus("success");
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

  if (status === "success") {
    return (
      <div className="rounded-2xl p-8 text-center" style={{ background: "rgba(42,215,150,0.08)", border: "1px solid rgba(42,215,150,0.3)" }}>
        <p className="text-lg font-bold text-white mb-2">Gracias, {formData.nombre || "recibimos tu solicitud"}.</p>
        <p className="text-sm text-white/70 leading-relaxed">
          Nuestro equipo te enviará la guía KYC para Gaming en México a tu correo en las próximas horas.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="rounded-2xl p-6 sm:p-8 space-y-4" style={{ background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.1)" }}>
      <div className="grid sm:grid-cols-2 gap-4">
        <div>
          <label htmlFor="guia-nombre" className="block text-xs font-semibold text-white/60 mb-1.5">Nombre *</label>
          <input
            id="guia-nombre"
            type="text"
            required
            autoComplete="given-name"
            value={formData.nombre}
            onChange={(e) => setFormData({ ...formData, nombre: e.target.value })}
            className="w-full px-4 py-2.5 rounded-lg text-sm text-white outline-none"
            style={{ background: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.15)" }}
          />
        </div>
        <div>
          <label htmlFor="guia-apellido" className="block text-xs font-semibold text-white/60 mb-1.5">Apellido *</label>
          <input
            id="guia-apellido"
            type="text"
            required
            autoComplete="family-name"
            value={formData.apellido}
            onChange={(e) => setFormData({ ...formData, apellido: e.target.value })}
            className="w-full px-4 py-2.5 rounded-lg text-sm text-white outline-none"
            style={{ background: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.15)" }}
          />
        </div>
      </div>

      <div>
        <label htmlFor="guia-email" className="block text-xs font-semibold text-white/60 mb-1.5">Correo corporativo *</label>
        <input
          id="guia-email"
          type="email"
          required
          autoComplete="email"
          value={formData.email}
          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
          placeholder="tu@empresa.com"
          className="w-full px-4 py-2.5 rounded-lg text-sm text-white outline-none"
          style={{ background: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.15)" }}
        />
      </div>

      <div className="grid sm:grid-cols-2 gap-4">
        <div>
          <label htmlFor="guia-empresa" className="block text-xs font-semibold text-white/60 mb-1.5">Empresa *</label>
          <input
            id="guia-empresa"
            type="text"
            required
            autoComplete="organization"
            value={formData.empresa}
            onChange={(e) => setFormData({ ...formData, empresa: e.target.value })}
            className="w-full px-4 py-2.5 rounded-lg text-sm text-white outline-none"
            style={{ background: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.15)" }}
          />
        </div>
        <div>
          <label htmlFor="guia-cargo" className="block text-xs font-semibold text-white/60 mb-1.5">Cargo *</label>
          <input
            id="guia-cargo"
            type="text"
            required
            autoComplete="organization-title"
            value={formData.cargo}
            onChange={(e) => setFormData({ ...formData, cargo: e.target.value })}
            className="w-full px-4 py-2.5 rounded-lg text-sm text-white outline-none"
            style={{ background: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.15)" }}
          />
        </div>
      </div>

      <div className="grid sm:grid-cols-2 gap-4">
        <div>
          <label htmlFor="guia-tipo" className="block text-xs font-semibold text-white/60 mb-1.5">Tipo de operación</label>
          <select
            id="guia-tipo"
            value={formData.tipoOperacion}
            onChange={(e) => setFormData({ ...formData, tipoOperacion: e.target.value })}
            className="w-full px-4 py-2.5 rounded-lg text-sm text-white outline-none"
            style={{ background: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.15)" }}
          >
            {TIPOS_OPERACION.map((t) => (
              <option key={t} value={t} style={{ color: "#000" }}>{t}</option>
            ))}
          </select>
        </div>
        <div>
          <label htmlFor="guia-volumen" className="block text-xs font-semibold text-white/60 mb-1.5">Volumen mensual de registros</label>
          <select
            id="guia-volumen"
            value={formData.volumen}
            onChange={(e) => setFormData({ ...formData, volumen: e.target.value })}
            className="w-full px-4 py-2.5 rounded-lg text-sm text-white outline-none"
            style={{ background: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.15)" }}
          >
            {VOLUMENES.map((v) => (
              <option key={v} value={v} style={{ color: "#000" }}>{v}</option>
            ))}
          </select>
        </div>
      </div>

      <button
        type="submit"
        disabled={status === "loading"}
        className="w-full px-6 py-3.5 min-h-[48px] rounded-lg font-bold transition-all disabled:opacity-50 disabled:cursor-not-allowed"
        style={{ background: TEAL, color: "#02132D" }}
      >
        {status === "loading" ? "Enviando…" : "Descargar la guía"}
      </button>

      {status === "error" && (
        <p role="alert" className="text-red-400 text-sm text-center">{errorMessage}</p>
      )}
    </form>
  );
}
