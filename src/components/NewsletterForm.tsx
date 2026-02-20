"use client";

import { useState } from "react";
import { gtmEvent } from "./GoogleTagManager";

const HUBSPOT_PORTAL_ID = "19644701";
const HUBSPOT_FORM_ID = "db2a19a3-8be3-4f92-a0f8-7b6525ebd7d8";

export default function NewsletterForm() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [message, setMessage] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!email) {
      setStatus("error");
      setMessage("Por favor ingresa tu correo electrónico");
      return;
    }

    setStatus("loading");

    try {
      const response = await fetch(
        `https://api.hsforms.com/submissions/v3/integration/submit/${HUBSPOT_PORTAL_ID}/${HUBSPOT_FORM_ID}`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            fields: [
              {
                name: "email",
                value: email,
              },
            ],
            context: {
              pageUri: typeof window !== "undefined" ? window.location.href : "",
              pageName: "Blog - Newsletter Subscription",
            },
          }),
        }
      );

      if (response.ok) {
        setStatus("success");
        setMessage("¡Gracias por suscribirte! Pronto recibirás nuestras actualizaciones.");
        setEmail("");
        // Track newsletter signup
        gtmEvent("sign_up", {
          event_category: "Newsletter",
          method: "email",
        });
      } else {
        const errorData = await response.json();
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
          disabled={status === "loading" || status === "success"}
          className="px-6 py-3 bg-[#0066ff] text-white font-semibold rounded-lg hover:bg-[#0052cc] transition-all whitespace-nowrap disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {status === "loading" ? "Enviando..." : status === "success" ? "¡Suscrito!" : "Suscribirse"}
        </button>
      </div>
      {message && (
        <p className={`text-sm ${status === "success" ? "text-green-400" : "text-red-400"}`}>
          {message}
        </p>
      )}
    </form>
  );
}
