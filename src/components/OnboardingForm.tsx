"use client";

import { useState } from "react";

interface FormState {
  nombre: string;
  cargo: string;
  empresa: string;
  correo: string;
  telefono: string;
  paquete: string;
  confirmado: boolean;
}

const INITIAL: FormState = {
  nombre: "",
  cargo: "",
  empresa: "",
  correo: "",
  telefono: "",
  paquete: "",
  confirmado: false,
};

export default function OnboardingForm() {
  const [form, setForm] = useState<FormState>(INITIAL);
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  function handleChange(
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) {
    const target = e.target as HTMLInputElement;
    setForm((prev) => ({
      ...prev,
      [target.name]:
        target.type === "checkbox" ? target.checked : target.value,
    }));
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setLoading(true);
    setError(null);

    try {
      const res = await fetch("/api/onboarding", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      if (!res.ok) {
        const data = await res.json().catch(() => ({}));
        throw new Error(data.error || "Error al enviar el formulario");
      }

      setSubmitted(true);
    } catch (err) {
      setError(
        err instanceof Error ? err.message : "Ocurrió un error. Intenta de nuevo."
      );
    } finally {
      setLoading(false);
    }
  }

  const inputBase =
    "w-full bg-white/5 border border-white/15 rounded-xl px-4 py-3 text-white placeholder-white/35 text-sm focus:outline-none focus:border-[#2DB6C1] focus:ring-1 focus:ring-[#2DB6C1] transition-all";

  const labelBase =
    "block text-white/70 text-xs font-semibold uppercase tracking-wide mb-1.5";

  return (
    <section className="py-20 px-4 bg-[#0D1B3E]">
      <div className="max-w-2xl mx-auto">
        {!submitted ? (
          /* ── FORMULARIO ─────────────────────────────────────────── */
          <div className="bg-white/5 border border-white/10 rounded-3xl p-8 md:p-10 backdrop-blur-sm">
            {/* Header */}
            <div className="mb-8">
              <div className="inline-flex items-center gap-2 bg-[#2DB6C1]/15 border border-[#2DB6C1]/30 rounded-full px-3 py-1 text-[#2DB6C1] text-xs font-semibold mb-4">
                <span className="w-1.5 h-1.5 rounded-full bg-[#2DB6C1] inline-block"></span>
                Onboarding autoservicio
              </div>
              <h2 className="text-2xl md:text-3xl font-bold text-white mb-3">
                ¿Ya realizaste tu compra?
              </h2>
              <p className="text-white/60 text-sm leading-relaxed">
                Si ya activaste tu paquete, completa tu registro para acceder a
                tu sesión de onboarding y comenzar a utilizar la plataforma
                correctamente.
              </p>
            </div>

            {/* Form */}
            <form onSubmit={handleSubmit} className="space-y-5">
              {/* Fila 1 */}
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label className={labelBase} htmlFor="ob-nombre">
                    Nombre completo *
                  </label>
                  <input
                    id="ob-nombre"
                    name="nombre"
                    type="text"
                    required
                    autoComplete="name"
                    placeholder="María García"
                    value={form.nombre}
                    onChange={handleChange}
                    className={inputBase}
                  />
                </div>
                <div>
                  <label className={labelBase} htmlFor="ob-cargo">
                    Cargo *
                  </label>
                  <input
                    id="ob-cargo"
                    name="cargo"
                    type="text"
                    required
                    placeholder="Director de Tecnología"
                    value={form.cargo}
                    onChange={handleChange}
                    className={inputBase}
                  />
                </div>
              </div>

              {/* Fila 2 */}
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label className={labelBase} htmlFor="ob-empresa">
                    Empresa *
                  </label>
                  <input
                    id="ob-empresa"
                    name="empresa"
                    type="text"
                    required
                    placeholder="Nombre de la empresa"
                    value={form.empresa}
                    onChange={handleChange}
                    className={inputBase}
                  />
                </div>
                <div>
                  <label className={labelBase} htmlFor="ob-telefono">
                    Teléfono *
                  </label>
                  <input
                    id="ob-telefono"
                    name="telefono"
                    type="tel"
                    required
                    placeholder="+52 55 0000 0000"
                    value={form.telefono}
                    onChange={handleChange}
                    className={inputBase}
                  />
                </div>
              </div>

              {/* Correo */}
              <div>
                <label className={labelBase} htmlFor="ob-correo">
                  Correo corporativo *
                </label>
                <input
                  id="ob-correo"
                  name="correo"
                  type="email"
                  required
                  placeholder="maria@empresa.com"
                  value={form.correo}
                  onChange={handleChange}
                  className={inputBase}
                />
              </div>

              {/* Paquete */}
              <div>
                <label className={labelBase} htmlFor="ob-paquete">
                  Paquete adquirido *
                </label>
                <select
                  id="ob-paquete"
                  name="paquete"
                  required
                  value={form.paquete}
                  onChange={handleChange}
                  className={`${inputBase} appearance-none`}
                >
                  <option value="" disabled className="bg-[#0D1B3E] text-white/50">
                    Selecciona tu paquete
                  </option>
                  <option value="Paquete de prueba" className="bg-[#0D1B3E] text-white">
                    Paquete de prueba
                  </option>
                  <option value="Paquete intermedio" className="bg-[#0D1B3E] text-white">
                    Paquete intermedio
                  </option>
                  <option value="Paquete mayor" className="bg-[#0D1B3E] text-white">
                    Paquete mayor
                  </option>
                </select>
              </div>

              {/* Checkbox */}
              <div className="flex items-start gap-3 bg-white/5 rounded-xl p-4 border border-white/10">
                <input
                  id="ob-confirmado"
                  name="confirmado"
                  type="checkbox"
                  required
                  checked={form.confirmado}
                  onChange={handleChange}
                  className="mt-0.5 w-4 h-4 accent-[#2DB6C1] flex-shrink-0 cursor-pointer"
                />
                <label
                  htmlFor="ob-confirmado"
                  className="text-white/70 text-sm cursor-pointer leading-relaxed"
                >
                  Confirmo que ya realicé mi compra y cuento con un paquete
                  activo en la plataforma JAAK.
                </label>
              </div>

              {/* Error */}
              {error && (
                <p className="text-red-400 text-sm bg-red-400/10 border border-red-400/20 rounded-xl px-4 py-3">
                  {error}
                </p>
              )}

              {/* Submit */}
              <button
                type="submit"
                disabled={loading}
                className="w-full bg-[#2DB6C1] hover:bg-[#25969f] disabled:opacity-60 disabled:cursor-not-allowed text-white font-bold py-3.5 rounded-xl transition-all text-sm tracking-wide flex items-center justify-center gap-2"
              >
                {loading ? (
                  <>
                    <span className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin inline-block"></span>
                    Enviando...
                  </>
                ) : (
                  "Registrarme para el onboarding →"
                )}
              </button>

              {/* Microcopy */}
              <p className="text-center text-white/35 text-xs">
                Las sesiones de onboarding son exclusivas para clientes con
                paquete activo.
              </p>
            </form>
          </div>
        ) : (
          /* ── CONFIRMACIÓN ───────────────────────────────────────── */
          <div className="bg-white/5 border border-white/10 rounded-3xl p-8 md:p-10 text-center backdrop-blur-sm">
            {/* Check icon */}
            <div className="w-16 h-16 rounded-full bg-[#2DB6C1]/20 border-2 border-[#2DB6C1]/40 flex items-center justify-center mx-auto mb-6">
              <svg
                className="w-8 h-8 text-[#2DB6C1]"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2.5}
                  d="M5 13l4 4L19 7"
                />
              </svg>
            </div>

            <h2 className="text-2xl md:text-3xl font-bold text-white mb-3">
              ¡Registro completado!
            </h2>
            <p className="text-white/60 text-sm leading-relaxed max-w-md mx-auto mb-6">
              Gracias por registrarte, {form.nombre.split(" ")[0]}. Nuestro
              equipo revisará tu información y se pondrá en contacto contigo en
              breve para coordinar tu sesión de onboarding.
            </p>

            <div className="bg-white/5 border border-white/10 rounded-2xl p-5 text-left max-w-sm mx-auto">
              <p className="text-white/50 text-xs font-semibold uppercase tracking-wide mb-3">
                ¿Qué sigue?
              </p>
              <ul className="space-y-2.5">
                {[
                  "Recibirás un correo de confirmación",
                  "Un asesor revisará tu registro",
                  "Te invitaremos a la sesión de onboarding grupal",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-2.5 text-sm text-white/70">
                    <span className="text-[#2DB6C1] mt-0.5 flex-shrink-0">✓</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
