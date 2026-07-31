"use client";

import { useState, useCallback } from "react";
import { gtmEvent } from "@/components/GoogleTagManager";
import { TurnstileWidget, getUtmParams } from "@/components/CloudflareTurnstile";

const TIPO_OCR_OPTIONS = ["Identificación oficial", "PDF OCR Inteligente", "Ambos", "No estoy seguro"];
const MODALIDAD_OPTIONS = ["API", "Autoservicio", "Web", "No estoy seguro"];

interface FormState {
  firstname: string;
  lastname: string;
  email: string;
  company: string;
  phone: string;
  tipoOcr: string;
  volumen: string;
  modalidad: string;
  industria: string;
  mensaje: string;
}

const INITIAL: FormState = {
  firstname: "",
  lastname: "",
  email: "",
  company: "",
  phone: "",
  tipoOcr: TIPO_OCR_OPTIONS[0],
  volumen: "",
  modalidad: MODALIDAD_OPTIONS[0],
  industria: "",
  mensaje: "",
};

/** Construye el mensaje estructurado que viaja en el campo `message` ya
 *  existente de HubSpot — los datos propios de OCR no tienen propiedad
 *  confirmada, así que van aquí como texto en vez de inventar internal
 *  names nuevos. */
function buildStructuredMessage(form: FormState): string {
  const lines = [
    "Producto: OCR documental",
    `Tipo de OCR: ${form.tipoOcr}`,
    `Modalidad: ${form.modalidad}`,
    `Volumen aproximado: ${form.volumen || "No especificado"}`,
    `Industria: ${form.industria || "No especificada"}`,
    "Página de origen: /ocr-documental",
  ];
  if (form.mensaje) lines.push(`Mensaje del usuario: ${form.mensaje}`);
  return lines.join("\n");
}

export default function OcrApiForm() {
  const [form, setForm] = useState<FormState>(INITIAL);
  const [turnstileToken, setTurnstileToken] = useState("");
  const [turnstileKey, setTurnstileKey] = useState(0);
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");

  const handleTurnstileVerify = useCallback((token: string) => setTurnstileToken(token), []);
  const handleTurnstileError = useCallback(() => setErrorMessage("Error de verificación. Por favor, recarga la página."), []);
  const handleTurnstileExpire = useCallback(() => setTurnstileToken(""), []);

  const field = (name: keyof FormState) => ({
    value: form[name],
    onChange: (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) =>
      setForm((prev) => ({ ...prev, [name]: e.target.value })),
  });

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();

    if (!turnstileToken) {
      setStatus("error");
      setErrorMessage("Por favor, completa la verificación de seguridad.");
      return;
    }

    setStatus("loading");
    setErrorMessage("");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          firstname: form.firstname,
          lastname: form.lastname,
          email: form.email,
          company: form.company,
          phone: form.phone,
          role: "Contacto Web",
          message: buildStructuredMessage(form),
          turnstile_token: turnstileToken,
          formContext: "ocr-documental",
          ...getUtmParams(),
        }),
      });

      if (response.ok) {
        setStatus("success");
        setForm(INITIAL);
        setTurnstileToken("");
        setTurnstileKey((k) => k + 1);
        gtmEvent("generate_lead", { event_category: "OCR", event_label: form.tipoOcr, value: 1 });
      } else {
        const data = await response.json().catch(() => ({}));
        setStatus("error");
        setErrorMessage(data.error || "Hubo un error al enviar el formulario. Por favor, intenta de nuevo.");
        setTurnstileToken("");
        setTurnstileKey((k) => k + 1);
      }
    } catch {
      setStatus("error");
      setErrorMessage("Error de conexión. Por favor, intenta de nuevo.");
      setTurnstileToken("");
      setTurnstileKey((k) => k + 1);
    }
  }

  const inputClass =
    "w-full bg-white/[0.06] border border-white/[0.18] rounded-lg px-3.5 py-2.5 text-white placeholder-white/35 text-[13px] focus:outline-none focus:border-[#2DB6C1] focus:ring-1 focus:ring-[#2DB6C1] transition-all";
  const labelClass = "block text-white/60 text-[11px] font-bold uppercase tracking-wide mb-1.5";

  return (
    <section id="integrar-api" className="py-16 md:py-20 bg-[#FAFAFA]">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="rounded-2xl p-7 md:p-9 grid md:grid-cols-[0.9fr_1.1fr] gap-8" style={{ background: "#212A45" }}>
          <div>
            <p className="text-xs font-bold tracking-wider uppercase mb-2" style={{ color: "#8FD9DE" }}>
              Integración por API
            </p>
            <h2 className="text-xl md:text-2xl font-extrabold text-white mb-2.5">Cuéntanos cómo quieres integrar OCR</h2>
            <p className="text-white/65 text-[13.5px]">
              Un especialista técnico revisa tu caso y te contacta.
            </p>
          </div>

          {status === "success" ? (
            <div className="bg-white/[0.06] border border-white/10 rounded-2xl p-6 flex flex-col items-center justify-center text-center">
              <div className="w-12 h-12 rounded-full flex items-center justify-center mb-4" style={{ background: "rgba(45,182,193,0.2)" }}>
                <svg className="w-6 h-6" style={{ color: "#2DB6C1" }} fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <h3 className="text-white font-bold text-lg mb-2">¡Listo! Recibimos tu solicitud</h3>
              <p className="text-white/60 text-[13.5px]">Un especialista de JAAK te contactará pronto.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label className={labelClass} htmlFor="ocr-firstname">Nombre *</label>
                  <input id="ocr-firstname" required placeholder="María" className={inputClass} {...field("firstname")} />
                </div>
                <div>
                  <label className={labelClass} htmlFor="ocr-lastname">Apellido *</label>
                  <input id="ocr-lastname" required placeholder="García" className={inputClass} {...field("lastname")} />
                </div>
              </div>

              <div>
                <label className={labelClass} htmlFor="ocr-email">Correo empresarial *</label>
                <input id="ocr-email" type="email" required placeholder="maria@empresa.com" className={inputClass} {...field("email")} />
              </div>

              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label className={labelClass} htmlFor="ocr-company">Empresa *</label>
                  <input id="ocr-company" required placeholder="Nombre de la empresa" className={inputClass} {...field("company")} />
                </div>
                <div>
                  <label className={labelClass} htmlFor="ocr-phone">Teléfono (opcional)</label>
                  <input id="ocr-phone" type="tel" placeholder="+52 55 0000 0000" className={inputClass} {...field("phone")} />
                </div>
              </div>

              <div>
                <label className={labelClass} htmlFor="ocr-tipo">Tipo de OCR *</label>
                <select id="ocr-tipo" required className={`${inputClass} appearance-none`} {...field("tipoOcr")}>
                  {TIPO_OCR_OPTIONS.map((opt) => (
                    <option key={opt} value={opt} className="bg-[#212A45] text-white">
                      {opt}
                    </option>
                  ))}
                </select>
              </div>

              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label className={labelClass} htmlFor="ocr-volumen">Volumen aproximado</label>
                  <input id="ocr-volumen" placeholder="Ej. 500 documentos/mes" className={inputClass} {...field("volumen")} />
                </div>
                <div>
                  <label className={labelClass} htmlFor="ocr-modalidad">Modalidad</label>
                  <select id="ocr-modalidad" className={`${inputClass} appearance-none`} {...field("modalidad")}>
                    {MODALIDAD_OPTIONS.map((opt) => (
                      <option key={opt} value={opt} className="bg-[#212A45] text-white">
                        {opt}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              <div>
                <label className={labelClass} htmlFor="ocr-industria">Industria</label>
                <input id="ocr-industria" placeholder="Ej. Financiera, inmobiliaria, salud" className={inputClass} {...field("industria")} />
              </div>

              <div>
                <label className={labelClass} htmlFor="ocr-mensaje">Mensaje (opcional)</label>
                <textarea id="ocr-mensaje" rows={3} placeholder="Cuéntanos tu caso de uso" className={inputClass} {...field("mensaje")} />
              </div>

              <div className="flex justify-center">
                <TurnstileWidget key={turnstileKey} onVerify={handleTurnstileVerify} onError={handleTurnstileError} onExpire={handleTurnstileExpire} />
              </div>

              {status === "error" && (
                <p className="text-red-300 text-[13px] bg-red-400/10 border border-red-400/20 rounded-lg px-4 py-3">{errorMessage}</p>
              )}

              <button
                type="submit"
                disabled={status === "loading" || !turnstileToken}
                className="w-full py-3.5 rounded-lg font-bold text-[13.5px] text-white transition-all disabled:opacity-50 disabled:cursor-not-allowed"
                style={{ background: "#2DB6C1" }}
              >
                {status === "loading" ? "Enviando..." : "Enviar a HubSpot"}
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
