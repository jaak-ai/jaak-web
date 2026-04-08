"use client";
import { useState } from "react";

interface FormData {
  nombre: string;
  empresa: string;
  correo: string;
  whatsapp: string;
  numeroPedido: string;
  temas: string[];
  horario: string;
  comentarios: string;
}

const TEMAS = [
  "Acceso a plataforma",
  "Configuración inicial",
  "Carga de documentos",
  "Validaciones / KYC",
  "Firma electrónica",
  "Dudas generales",
];

const HORARIOS = [
  { id: "martes", label: "Martes", sub: "10:00 – 11:00 AM", note: "Disponible semanalmente · 60 min" },
  { id: "jueves", label: "Jueves", sub: "4:00 – 5:00 PM", note: "Disponible semanalmente · 60 min" },
];

// ─── 3 Pasos ─────────────────────────────────────────────────────────────────
function ProximosPasos() {
  const steps = [
    {
      num: "01",
      title: "Compra confirmada",
      desc: "Tu pago fue procesado y tu acceso está activo inmediatamente.",
      badge: { text: "Completado", color: "#1ecad3" },
      color: "#1ecad3",
    },
    {
      num: "02",
      title: "Accede a tu espacio",
      desc: "Ingresa a JAAK Autoservicio con tus credenciales de registro.",
      color: "#1ecad3",
    },
    {
      num: "03",
      title: "Crea tu primer flujo",
      desc: "Configura tus procesos de firma o verificación en minutos.",
      color: "#655dc6",
    },
  ];

  return (
    <div className="max-w-5xl mx-auto px-6 pt-20 pb-16">
      <div className="text-center mb-12">
        <span
          className="inline-block text-xs font-bold uppercase tracking-widest mb-3 px-3 py-1 rounded-full"
          style={{ background: "#f0fffe", color: "#0e7490", border: "1px solid #a7f3f0" }}
        >
          Próximos pasos
        </span>
        <h2 className="text-4xl font-extrabold text-gray-900 mb-3">¿Qué sigue ahora?</h2>
        <p className="text-gray-500 text-lg">Tres pasos simples para comenzar a operar</p>
      </div>

      <div className="flex flex-col md:flex-row gap-4 items-stretch">
        {steps.map((step, i) => (
          <div key={i} className="flex items-center gap-4 flex-1">
            <div
              className="flex-1 rounded-2xl p-6 shadow-sm text-center transition-all duration-200 hover:-translate-y-1"
              style={{ background: "#fff", border: "1.5px solid #f3f4f6" }}
            >
              <div
                className="w-12 h-12 rounded-xl flex items-center justify-center font-bold text-white text-lg mx-auto mb-4"
                style={{ background: `linear-gradient(135deg, ${step.color}cc, ${step.color})` }}
              >
                {step.num}
              </div>
              <h3 className="font-bold text-gray-900 mb-2">{step.title}</h3>
              <p className="text-gray-500 text-sm leading-relaxed">{step.desc}</p>
              {step.badge && (
                <span
                  className="inline-flex items-center gap-1.5 mt-3 text-xs font-semibold px-2.5 py-1 rounded-full"
                  style={{ background: `${step.badge.color}15`, color: step.badge.color }}
                >
                  ✓ {step.badge.text}
                </span>
              )}
            </div>
            {i < steps.length - 1 && (
              <span className="hidden md:block text-gray-300 text-xl flex-shrink-0">→</span>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

// ─── Formulario de capacitación ───────────────────────────────────────────────
function CapacitacionForm() {
  const [form, setForm] = useState<FormData>({
    nombre: "", empresa: "", correo: "", whatsapp: "",
    numeroPedido: "", temas: [], horario: "", comentarios: "",
  });
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState("");

  function toggleTema(tema: string) {
    setForm((f) => ({
      ...f,
      temas: f.temas.includes(tema) ? f.temas.filter((t) => t !== tema) : [...f.temas, tema],
    }));
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!form.nombre || !form.correo || !form.whatsapp) return;
    setLoading(true);
    setError("");
    try {
      const res = await fetch("/api/onboarding", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          nombre: form.nombre,
          empresa: form.empresa || "No especificada",
          correo: form.correo,
          telefono: form.whatsapp,
          cargo: "Autoservicio",
          paquete: `Sesión de onboarding | Horario: ${form.horario || "Sin preferencia"} | Temas: ${form.temas.join(", ") || "Generales"} | Pedido: ${form.numeroPedido || "N/A"} | Notas: ${form.comentarios || "—"}`,
        }),
      });
      if (!res.ok) throw new Error("error");
      setSuccess(true);
    } catch {
      setError("Hubo un problema al enviar. Intenta de nuevo o escríbenos a hola@jaak.ai");
    } finally {
      setLoading(false);
    }
  }

  if (success) {
    return (
      <div className="text-center py-16 px-6">
        <div
          className="w-16 h-16 rounded-full flex items-center justify-center text-3xl mx-auto mb-4"
          style={{ background: "rgba(30,202,211,0.12)" }}
        >
          ✅
        </div>
        <h3 className="text-2xl font-bold text-gray-900 mb-2">¡Solicitud enviada!</h3>
        <p className="text-gray-500 max-w-sm mx-auto">
          Nuestro equipo confirmará tu sesión por correo dentro de las próximas 24 horas hábiles.
        </p>
      </div>
    );
  }

  return (
    <div className="grid md:grid-cols-2 gap-10 max-w-5xl mx-auto px-6 pb-20">
      {/* Info left */}
      <div className="flex flex-col justify-center">
        <span
          className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-widest mb-4 px-3 py-1 rounded-full w-fit"
          style={{ background: "rgba(30,202,211,0.1)", color: "#0e7490", border: "1px solid rgba(30,202,211,0.3)" }}
        >
          🎁 Sesión de bienvenida incluida
        </span>
        <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-4 leading-tight">
          ¿Quieres una sesión{" "}
          <span
            style={{
              backgroundImage: "linear-gradient(90deg, #1ecad3, #655dc6)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}
          >
            de capacitación?
          </span>
        </h2>
        <p className="text-gray-500 mb-6 text-sm leading-relaxed">
          Si deseas acompañamiento para comenzar, déjanos tus datos y elige el horario disponible que mejor te funcione.
          Nuestro equipo te guiará en tus primeros pasos.
        </p>
        <ul className="space-y-3 text-sm text-gray-600">
          {[
            "Sesión personalizada de 60 minutos",
            "Guía paso a paso de la plataforma",
            "Resolución de dudas en tiempo real",
            "Sin costo adicional para tu empresa",
          ].map((item, i) => (
            <li key={i} className="flex items-center gap-2">
              <span style={{ color: "#1ecad3" }}>✓</span>
              {item}
            </li>
          ))}
        </ul>
        <div
          className="mt-6 rounded-xl p-4 text-sm"
          style={{ background: "rgba(30,202,211,0.06)", border: "1px solid rgba(30,202,211,0.15)", color: "#374151" }}
        >
          💬 Nuestro equipo confirmará tu sesión por correo dentro de las próximas <strong>24 horas hábiles</strong>.
        </div>
      </div>

      {/* Form right */}
      <form
        onSubmit={handleSubmit}
        className="rounded-2xl p-6 shadow-sm flex flex-col gap-4"
        style={{ background: "#fff", border: "1.5px solid #f3f4f6" }}
      >
        <div className="grid grid-cols-2 gap-4">
          <div className="col-span-2 md:col-span-1 flex flex-col gap-1">
            <label className="text-xs font-semibold text-gray-500 uppercase tracking-wide">Nombre completo *</label>
            <input
              required
              value={form.nombre}
              onChange={(e) => setForm({ ...form, nombre: e.target.value })}
              placeholder="Tu nombre completo"
              className="rounded-lg px-3 py-2.5 text-sm text-gray-900 outline-none focus:ring-2 transition-all"
              style={{ border: "1.5px solid #e5e7eb", background: "#f9fafb" }}
            />
          </div>
          <div className="col-span-2 md:col-span-1 flex flex-col gap-1">
            <label className="text-xs font-semibold text-gray-500 uppercase tracking-wide">Empresa</label>
            <input
              value={form.empresa}
              onChange={(e) => setForm({ ...form, empresa: e.target.value })}
              placeholder="Tu empresa"
              className="rounded-lg px-3 py-2.5 text-sm text-gray-900 outline-none transition-all"
              style={{ border: "1.5px solid #e5e7eb", background: "#f9fafb" }}
            />
          </div>
          <div className="flex flex-col gap-1">
            <label className="text-xs font-semibold text-gray-500 uppercase tracking-wide">Correo *</label>
            <input
              required
              type="email"
              value={form.correo}
              onChange={(e) => setForm({ ...form, correo: e.target.value })}
              placeholder="correo@empresa.com"
              className="rounded-lg px-3 py-2.5 text-sm text-gray-900 outline-none transition-all"
              style={{ border: "1.5px solid #e5e7eb", background: "#f9fafb" }}
            />
          </div>
          <div className="flex flex-col gap-1">
            <label className="text-xs font-semibold text-gray-500 uppercase tracking-wide">WhatsApp *</label>
            <input
              required
              value={form.whatsapp}
              onChange={(e) => setForm({ ...form, whatsapp: e.target.value })}
              placeholder="+52 55 0000 0000"
              className="rounded-lg px-3 py-2.5 text-sm text-gray-900 outline-none transition-all"
              style={{ border: "1.5px solid #e5e7eb", background: "#f9fafb" }}
            />
          </div>
          <div className="col-span-2 flex flex-col gap-1">
            <label className="text-xs font-semibold text-gray-500 uppercase tracking-wide">Número de compra <span className="font-normal normal-case text-gray-400">(opcional)</span></label>
            <input
              value={form.numeroPedido}
              onChange={(e) => setForm({ ...form, numeroPedido: e.target.value })}
              placeholder="Ej. ORD-12345"
              className="rounded-lg px-3 py-2.5 text-sm text-gray-900 outline-none transition-all"
              style={{ border: "1.5px solid #e5e7eb", background: "#f9fafb" }}
            />
          </div>
        </div>

        {/* Temas */}
        <div className="flex flex-col gap-2">
          <label className="text-xs font-semibold text-gray-500 uppercase tracking-wide">¿Qué le gustaría revisar?</label>
          <div className="flex flex-wrap gap-2">
            {TEMAS.map((tema) => {
              const active = form.temas.includes(tema);
              return (
                <button
                  key={tema}
                  type="button"
                  onClick={() => toggleTema(tema)}
                  className="text-xs px-3 py-1.5 rounded-full font-medium transition-all duration-150 cursor-pointer"
                  style={{
                    background: active ? "linear-gradient(135deg, #1ecad3, #655dc6)" : "#f3f4f6",
                    color: active ? "#fff" : "#374151",
                    border: active ? "none" : "1.5px solid #e5e7eb",
                  }}
                >
                  {tema}
                </button>
              );
            })}
          </div>
        </div>

        {/* Horario */}
        <div className="flex flex-col gap-2">
          <label className="text-xs font-semibold text-gray-500 uppercase tracking-wide">Elige tu horario disponible</label>
          <div className="grid grid-cols-2 gap-3">
            {HORARIOS.map((h) => {
              const active = form.horario === h.id;
              return (
                <button
                  key={h.id}
                  type="button"
                  onClick={() => setForm({ ...form, horario: h.id })}
                  className="rounded-xl p-3 text-left transition-all duration-150 cursor-pointer"
                  style={{
                    border: active ? "2px solid #1ecad3" : "1.5px solid #e5e7eb",
                    background: active ? "rgba(30,202,211,0.06)" : "#f9fafb",
                  }}
                >
                  <div className="text-xs font-bold text-gray-700 mb-0.5">📅 {h.label}</div>
                  <div className="text-xs font-semibold" style={{ color: "#1ecad3" }}>{h.sub}</div>
                  <div className="text-xs text-gray-400 mt-1">{h.note}</div>
                </button>
              );
            })}
          </div>
        </div>

        {/* Comentarios */}
        <div className="flex flex-col gap-1">
          <label className="text-xs font-semibold text-gray-500 uppercase tracking-wide">Comentarios adicionales <span className="font-normal normal-case text-gray-400">(opcional)</span></label>
          <textarea
            rows={2}
            value={form.comentarios}
            onChange={(e) => setForm({ ...form, comentarios: e.target.value })}
            placeholder="¿Hay algo específico que quieras revisar?"
            className="rounded-lg px-3 py-2.5 text-sm text-gray-900 outline-none resize-none transition-all"
            style={{ border: "1.5px solid #e5e7eb", background: "#f9fafb" }}
          />
        </div>

        {error && <p className="text-red-500 text-xs">{error}</p>}

        <button
          type="submit"
          disabled={loading}
          className="w-full py-3 rounded-xl font-bold text-white text-sm transition-all duration-200 hover:opacity-90 disabled:opacity-60"
          style={{ background: "linear-gradient(135deg, #1ecad3, #655dc6)" }}
        >
          {loading ? "Enviando..." : "📅 Solicitar capacitación"}
        </button>
      </form>
    </div>
  );
}

// ─── Exported section ─────────────────────────────────────────────────────────
export default function AutoservicioPostCompra() {
  return (
    <section style={{ background: "#f8fafc" }}>
      <ProximosPasos />
      <div style={{ borderTop: "1px solid #f3f4f6" }} />
      <CapacitacionForm />
    </section>
  );
}
