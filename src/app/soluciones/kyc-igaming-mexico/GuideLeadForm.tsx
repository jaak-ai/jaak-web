"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { gtmEvent } from "@/components/GoogleTagManager";
import { getUtmParams } from "@/components/CloudflareTurnstile";

const TEAL = "#1ECAD3";

const TIPOS_OPERACION = ["Casino en línea", "Apuestas deportivas", "Sorteos y concursos", "Operador multimarca", "Otro"];
const VOLUMENES = ["Menos de 1,000", "1,000 – 10,000", "10,000 – 50,000", "Más de 50,000"];

export default function GuideLeadForm() {
  const router = useRouter();
  const [formData, setFormData] = useState({
    nombre: "",
    apellido: "",
    email: "",
    empresa: "",
    cargo: "",
    tipoOperacion: TIPOS_OPERACION[0],
    volumen: VOLUMENES[0],
  });
  const [status, setStatus] = useState<"idle" | "loading" | "error">("idle");
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
        gtmEvent("ebook_download", { source: "guia_section", page_path: window.location.pathname });
        router.push("/gracias/guia-kyc-igaming-mexico");
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

  const inputStyle = { background: "#F8FAFC", border: "1px solid #D9E2EC", color: "#0F172A" };
  const labelClass = "block text-xs font-semibold mb-1.5";
  const labelStyle = { color: "#64748B" };

  return (
    <form onSubmit={handleSubmit} className="rounded-2xl p-6 sm:p-8 space-y-4 bg-white" style={{ border: "1px solid #D9E2EC", boxShadow: "0 10px 30px rgba(2,19,45,0.06)" }}>
      <div className="grid sm:grid-cols-2 gap-4">
        <div>
          <label htmlFor="guia-nombre" className={labelClass} style={labelStyle}>Nombre *</label>
          <input
            id="guia-nombre"
            type="text"
            required
            autoComplete="given-name"
            value={formData.nombre}
            onChange={(e) => setFormData({ ...formData, nombre: e.target.value })}
            className="w-full px-4 py-2.5 rounded-lg text-sm outline-none focus:border-[#1ECAD3]"
            style={inputStyle}
          />
        </div>
        <div>
          <label htmlFor="guia-apellido" className={labelClass} style={labelStyle}>Apellido *</label>
          <input
            id="guia-apellido"
            type="text"
            required
            autoComplete="family-name"
            value={formData.apellido}
            onChange={(e) => setFormData({ ...formData, apellido: e.target.value })}
            className="w-full px-4 py-2.5 rounded-lg text-sm outline-none focus:border-[#1ECAD3]"
            style={inputStyle}
          />
        </div>
      </div>

      <div>
        <label htmlFor="guia-email" className={labelClass} style={labelStyle}>Correo corporativo *</label>
        <input
          id="guia-email"
          type="email"
          required
          autoComplete="email"
          value={formData.email}
          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
          placeholder="tu@empresa.com"
          className="w-full px-4 py-2.5 rounded-lg text-sm outline-none focus:border-[#1ECAD3]"
          style={inputStyle}
        />
      </div>

      <div className="grid sm:grid-cols-2 gap-4">
        <div>
          <label htmlFor="guia-empresa" className={labelClass} style={labelStyle}>Empresa *</label>
          <input
            id="guia-empresa"
            type="text"
            required
            autoComplete="organization"
            value={formData.empresa}
            onChange={(e) => setFormData({ ...formData, empresa: e.target.value })}
            className="w-full px-4 py-2.5 rounded-lg text-sm outline-none focus:border-[#1ECAD3]"
            style={inputStyle}
          />
        </div>
        <div>
          <label htmlFor="guia-cargo" className={labelClass} style={labelStyle}>Cargo *</label>
          <input
            id="guia-cargo"
            type="text"
            required
            autoComplete="organization-title"
            value={formData.cargo}
            onChange={(e) => setFormData({ ...formData, cargo: e.target.value })}
            className="w-full px-4 py-2.5 rounded-lg text-sm outline-none focus:border-[#1ECAD3]"
            style={inputStyle}
          />
        </div>
      </div>

      <div className="grid sm:grid-cols-2 gap-4">
        <div>
          <label htmlFor="guia-tipo" className={labelClass} style={labelStyle}>Tipo de operación</label>
          <select
            id="guia-tipo"
            value={formData.tipoOperacion}
            onChange={(e) => setFormData({ ...formData, tipoOperacion: e.target.value })}
            className="w-full px-4 py-2.5 rounded-lg text-sm outline-none focus:border-[#1ECAD3]"
            style={inputStyle}
          >
            {TIPOS_OPERACION.map((t) => (
              <option key={t} value={t}>{t}</option>
            ))}
          </select>
        </div>
        <div>
          <label htmlFor="guia-volumen" className={labelClass} style={labelStyle}>Volumen mensual de registros</label>
          <select
            id="guia-volumen"
            value={formData.volumen}
            onChange={(e) => setFormData({ ...formData, volumen: e.target.value })}
            className="w-full px-4 py-2.5 rounded-lg text-sm outline-none focus:border-[#1ECAD3]"
            style={inputStyle}
          >
            {VOLUMENES.map((v) => (
              <option key={v} value={v}>{v}</option>
            ))}
          </select>
        </div>
      </div>

      <button
        type="submit"
        disabled={status === "loading"}
        className="w-full px-6 py-3.5 min-h-[48px] rounded-lg font-bold transition-all hover:bg-[#19B8C0] disabled:opacity-50 disabled:cursor-not-allowed"
        style={{ background: TEAL, color: "#02132D" }}
      >
        {status === "loading" ? "Enviando…" : "Descargar la guía"}
      </button>

      {status === "error" && (
        <p role="alert" className="text-red-600 text-sm text-center">{errorMessage}</p>
      )}
    </form>
  );
}
