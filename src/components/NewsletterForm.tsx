"use client";

import { useState, useCallback } from "react";
import { gtmEvent } from "./GoogleTagManager";
import { TurnstileWidget, getUtmParams } from "./CloudflareTurnstile";

const API_ENDPOINT = "https://api-kairos.jaak.ai/api/v1/public/leads";

export default function NewsletterForm() {
  const [email, setEmail] = useState("");
  const [turnstileToken, setTurnstileToken] = useState<string>("");
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [message, setMessage] = useState("");

  const handleTurnstileVerify = useCallback((token: string) => {
    setTurnstileToken(token);
  }, []);

  const handleTurnstileError = useCallback(() => {
    setMessage("Error de verificación. Por favor, recarga la página.");
    setStatus("error");
  }, []);

  const handleTurnstileExpire = useCallback(() => {
    setTurnstileToken("");
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!email) {
      setStatus("error");
      setMessage("Por favor ingresa tu correo electrónico");
      return;
    }

    if (!turnstileToken) {
      setStatus("error");
      setMessage("Por favor, completa la verificación de seguridad.");
      return;
    }

    setStatus("loading");

    const utmParams = getUtmParams();

    try {
      const response = await fetch(API_ENDPOINT, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          email,
          message: "Suscripción a newsletter del blog",
          country: "México",
          turnstile_token: turnstileToken,
          ...utmParams,
        }),
      });

      if (response.ok) {
        setStatus("success");
        setMessage("¡Gracias por suscribirte! Pronto recibirás nuestras actualizaciones.");
        setEmail("");
        setTurnstileToken("");
        gtmEvent("sign_up", {
          event_category: "Newsletter",
          method: "email",
        });
      } else {
        const errorData = await response.json().catch(() => ({}));
        setStatus("error");
        setMessage(errorData.message || "Hubo un error. Por favor intenta de nuevo.");
      }
    } catch {
      setStatus("error");
      setMessage("Error de conexión. Por favor intenta de nuevo.");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-4 max-w-md mx-auto">
      <div className="flex flex-col sm:flex-row gap-4">
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="tu@email.com"
          disabled={status === "loading" || status === "success"}
          className="flex-grow px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-white/40 focus:outline-none focus:border-[#0066ff] transition-colors disabled:opacity-50"
        />
        <button
          type="submit"
          disabled={status === "loading" || status === "success" || !turnstileToken}
          className="px-6 py-3 bg-[#0066ff] text-white font-semibold rounded-lg hover:bg-[#0052cc] transition-all whitespace-nowrap disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {status === "loading" ? "Enviando..." : status === "success" ? "¡Suscrito!" : "Suscribirse"}
        </button>
      </div>

      {/* Cloudflare Turnstile Widget */}
      <div className="flex justify-center">
        <TurnstileWidget
          onVerify={handleTurnstileVerify}
          onError={handleTurnstileError}
          onExpire={handleTurnstileExpire}
        />
      </div>

      {message && (
        <p className={`text-sm ${status === "success" ? "text-green-400" : "text-red-400"}`}>
          {message}
        </p>
      )}
    </form>
  );
}
