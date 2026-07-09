"use client";

import { useState, useCallback } from "react";
import Link from "next/link";
import { TurnstileWidget, getUtmParams } from "@/components/CloudflareTurnstile";

type LeadFormTheme = "teal" | "purple";

const THEMES: Record<
  LeadFormTheme,
  {
    focusRing: string;
    submitBg: string;
    submitHover: string;
    submitText: string;
    linkText: string;
  }
> = {
  teal: {
    focusRing: "focus:ring-[#2DB6C1]",
    submitBg: "bg-[#2DB6C1]",
    submitHover: "hover:bg-[#17b5bd]",
    submitText: "text-[#212A45]",
    linkText: "text-[#2DB6C1]",
  },
  purple: {
    focusRing: "focus:ring-[#2DB6C1]",
    submitBg: "bg-[#2DB6C1]",
    submitHover: "hover:bg-[#25969f]",
    submitText: "text-[#212A45]",
    linkText: "text-[#2DB6C1]",
  },
};

interface IndustryLeadFormProps {
  source: string;
  theme?: LeadFormTheme;
  heading: string;
  subheading: string;
  empresaLabel: string;
  empresaPlaceholder: string;
  empresaRequired?: boolean;
  emailPlaceholder?: string;
  mensajeLabel: string;
  mensajePlaceholder: string;
  submitLabel: string;
  successMessage: string;
}

type FormStatus = "idle" | "loading" | "success" | "error";

export default function IndustryLeadForm({
  source,
  theme = "teal",
  heading,
  subheading,
  empresaLabel,
  empresaPlaceholder,
  empresaRequired = false,
  emailPlaceholder = "tu@empresa.com",
  mensajeLabel,
  mensajePlaceholder,
  submitLabel,
  successMessage,
}: IndustryLeadFormProps) {
  const t = THEMES[theme];

  const [formData, setFormData] = useState({
    name: "",
    empresa: "",
    email: "",
    telefono: "",
    mensaje: "",
  });
  const [status, setStatus] = useState<FormStatus>("idle");
  const [errorMessage, setErrorMessage] = useState("");
  const [turnstileToken, setTurnstileToken] = useState("");
  const [turnstileKey, setTurnstileKey] = useState(0);

  const handleTurnstileVerify = useCallback((token: string) => {
    setTurnstileToken(token);
  }, []);

  const handleTurnstileExpire = useCallback(() => {
    setTurnstileToken("");
  }, []);

  const handleTurnstileError = useCallback(() => {
    setStatus("error");
    setErrorMessage("Error de verificación de seguridad. Por favor, recarga la página.");
    setTurnstileToken("");
    setTurnstileKey((k) => k + 1);
  }, []);

  const resetTurnstile = () => {
    setTurnstileToken("");
    setTurnstileKey((k) => k + 1);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!turnstileToken) {
      setStatus("error");
      setErrorMessage("Por favor, completa la verificación de seguridad.");
      return;
    }

    setStatus("loading");
    setErrorMessage("");

    const utmParams = getUtmParams();

    try {
      const res = await fetch("/api/landing", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...formData,
          source,
          turnstile_token: turnstileToken,
          ...utmParams,
        }),
      });

      if (res.ok) {
        setStatus("success");
        setFormData({ name: "", empresa: "", email: "", telefono: "", mensaje: "" });
        resetTurnstile();
      } else {
        const data = await res.json().catch(() => ({}));
        setStatus("error");
        setErrorMessage(
          (data as { error?: string }).error || "Error al enviar. Intenta de nuevo."
        );
        resetTurnstile();
      }
    } catch {
      setStatus("error");
      setErrorMessage("Error de conexión. Intenta de nuevo.");
      resetTurnstile();
    }
  };

  return (
    <div className="bg-white rounded-2xl p-8 shadow-2xl">
      <h3 className="text-2xl font-bold text-[#212A45] mb-2">{heading}</h3>
      <p className="text-gray-500 mb-8">{subheading}</p>

      <form onSubmit={handleSubmit} className="space-y-5">
        <div className="grid md:grid-cols-2 gap-5">
          <div>
            <label htmlFor="lead-name" className="block text-sm font-medium text-gray-800 mb-1.5">
              Nombre completo *
            </label>
            <input
              id="lead-name"
              type="text"
              required
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              className={`w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:ring-2 ${t.focusRing} focus:border-transparent outline-none text-gray-900 placeholder:text-gray-400`}
              placeholder="Tu nombre"
            />
          </div>
          <div>
            <label htmlFor="lead-empresa" className="block text-sm font-medium text-gray-800 mb-1.5">
              {empresaLabel}
            </label>
            <input
              id="lead-empresa"
              type="text"
              required={empresaRequired}
              value={formData.empresa}
              onChange={(e) => setFormData({ ...formData, empresa: e.target.value })}
              className={`w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:ring-2 ${t.focusRing} focus:border-transparent outline-none text-gray-900 placeholder:text-gray-400`}
              placeholder={empresaPlaceholder}
            />
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-5">
          <div>
            <label htmlFor="lead-email" className="block text-sm font-medium text-gray-800 mb-1.5">
              Correo electrónico *
            </label>
            <input
              id="lead-email"
              type="email"
              required
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              className={`w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:ring-2 ${t.focusRing} focus:border-transparent outline-none text-gray-900 placeholder:text-gray-400`}
              placeholder={emailPlaceholder}
            />
          </div>
          <div>
            <label htmlFor="lead-telefono" className="block text-sm font-medium text-gray-800 mb-1.5">
              Teléfono *
            </label>
            <input
              id="lead-telefono"
              type="tel"
              required
              value={formData.telefono}
              onChange={(e) => setFormData({ ...formData, telefono: e.target.value })}
              className={`w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:ring-2 ${t.focusRing} focus:border-transparent outline-none text-gray-900 placeholder:text-gray-400`}
              placeholder="+52 55 1234 5678"
            />
          </div>
        </div>

        <div>
          <label htmlFor="lead-mensaje" className="block text-sm font-medium text-gray-800 mb-1.5">
            {mensajeLabel}
          </label>
          <textarea
            id="lead-mensaje"
            rows={3}
            value={formData.mensaje}
            onChange={(e) => setFormData({ ...formData, mensaje: e.target.value })}
            className={`w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:ring-2 ${t.focusRing} focus:border-transparent outline-none resize-none text-gray-900 placeholder:text-gray-400`}
            placeholder={mensajePlaceholder}
          />
        </div>

        <TurnstileWidget
          key={turnstileKey}
          onVerify={handleTurnstileVerify}
          onExpire={handleTurnstileExpire}
          onError={handleTurnstileError}
        />

        <button
          type="submit"
          disabled={status === "loading" || !turnstileToken}
          className={`w-full px-6 py-4 ${t.submitBg} ${t.submitText} font-bold rounded-lg ${t.submitHover} transition-all disabled:opacity-50 disabled:cursor-not-allowed text-lg`}
        >
          {status === "loading" ? "Enviando..." : submitLabel}
        </button>

        {status === "success" && (
          <div className="p-4 bg-green-50 border border-green-200 rounded-lg text-center">
            <p className="text-green-700 font-medium">{successMessage}</p>
          </div>
        )}

        {status === "error" && (
          <div className="p-4 bg-red-50 border border-red-200 rounded-lg text-center">
            <p className="text-red-700 font-medium">{errorMessage}</p>
          </div>
        )}

        <p className="text-xs text-gray-400 text-center">
          Al enviar aceptas nuestra{" "}
          <Link href="/privacidad" className={`${t.linkText} hover:underline`}>
            Política de Privacidad
          </Link>
          .
        </p>
      </form>
    </div>
  );
}
