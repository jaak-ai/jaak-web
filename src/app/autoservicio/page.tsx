import type { Metadata } from "next";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import AutoservicioVariantes from "@/components/autoservicio/AutoservicioVariantes";

export const metadata: Metadata = {
  title: "Autoservicio — Compra y activa servicios JAAK en minutos",
  description:
    "Compra KYC, firma electrónica NOM-151, validaciones INE/CURP y OCR en línea. Arma tu paquete, paga seguro y activa al instante. Sin vendedores, sin esperas.",
};

const NAVY = "#212A45";
const TEAL = "#2DB6C1";

export default function AutoservicioPage() {
  return (
    <>
      <Header />
      <main>
        {/* ─── Hero ─────────────────────────────────────────────────────── */}
        <section
          className="relative overflow-hidden pt-[150px] pb-16 lg:pb-20"
          style={{ background: "linear-gradient(135deg, #0E1133 0%, #1A2142 55%, #212A45 100%)" }}
        >
          <div
            className="pointer-events-none absolute inset-0 opacity-[0.04]"
            style={{
              backgroundImage:
                "linear-gradient(rgba(255,255,255,1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,1) 1px, transparent 1px)",
              backgroundSize: "34px 34px",
            }}
          />
          <div className="relative z-10 mx-auto grid max-w-7xl grid-cols-1 items-center gap-10 px-4 sm:px-6 lg:grid-cols-2 lg:px-8">
            <div>
              <span
                className="inline-flex items-center rounded-full px-3 py-1 text-xs font-semibold tracking-wide"
                style={{ background: "rgba(45,182,193,0.12)", border: "1px solid rgba(45,182,193,0.35)", color: "#7FE0E8" }}
              >
                Autoservicio JAAK
              </span>
              <h1 className="mt-5 text-4xl font-bold leading-[1.08] tracking-tight text-white lg:text-5xl">
                Compra y activa tus servicios <span style={{ color: TEAL }}>en minutos</span>
              </h1>
              <p className="mt-5 max-w-xl text-[16px] leading-relaxed" style={{ color: "rgba(255,255,255,0.72)" }}>
                Arma tu paquete combinando KYC, firma electrónica, validaciones y OCR. Paga en línea con seguridad
                y empieza a operar de inmediato. Sin vendedores, sin esperas.
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <Link
                  href="#experiencia"
                  className="rounded-xl px-6 py-3.5 text-[15px] font-semibold text-white transition-colors"
                  style={{ background: TEAL }}
                >
                  Ver propuestas
                </Link>
                <Link
                  href="#como-funciona"
                  className="rounded-xl px-6 py-3.5 text-[15px] font-semibold transition-colors"
                  style={{ background: "rgba(255,255,255,0.08)", color: "#fff", border: "1px solid rgba(255,255,255,0.18)" }}
                >
                  Cómo funciona
                </Link>
              </div>
              <ul className="mt-8 flex flex-wrap gap-x-6 gap-y-2 text-[13px]" style={{ color: "rgba(255,255,255,0.6)" }}>
                {["Activación inmediata", "Pago seguro con Stripe", "Selección múltiple", "Sin contratos"].map((t) => (
                  <li key={t} className="flex items-center gap-2">
                    <svg className="h-4 w-4" style={{ color: TEAL }} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" /></svg>
                    {t}
                  </li>
                ))}
              </ul>
            </div>

            {/* Mini-resumen visual (sin emojis) */}
            <div className="hidden lg:block">
              <div className="ml-auto w-full max-w-md rounded-2xl border p-6" style={{ background: "rgba(255,255,255,0.04)", borderColor: "rgba(255,255,255,0.10)" }}>
                <p className="text-xs font-semibold uppercase tracking-[0.18em]" style={{ color: "rgba(255,255,255,0.45)" }}>Tu compra</p>
                <div className="mt-4 space-y-3">
                  {[
                    { n: "KYC — Plata", d: "100 verificaciones", p: "$2,800" },
                    { n: "Firma NOM-151 — Bronce", d: "50 firmas", p: "$750" },
                    { n: "Consulta INE — Plata", d: "100 consultas", p: "$200" },
                  ].map((r) => (
                    <div key={r.n} className="flex items-center justify-between rounded-xl px-4 py-3" style={{ background: "rgba(255,255,255,0.05)" }}>
                      <div>
                        <div className="text-[13px] font-semibold text-white">{r.n}</div>
                        <div className="text-[12px]" style={{ color: "rgba(255,255,255,0.5)" }}>{r.d}</div>
                      </div>
                      <div className="text-[13px] font-semibold" style={{ color: "#7FE0E8" }}>{r.p}</div>
                    </div>
                  ))}
                </div>
                <div className="mt-4 flex items-center justify-between border-t pt-4" style={{ borderColor: "rgba(255,255,255,0.1)" }}>
                  <span className="text-[13px]" style={{ color: "rgba(255,255,255,0.6)" }}>Total + IVA</span>
                  <span className="text-lg font-bold text-white">$4,350</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ─── Propuestas A/B con toggle (interactivo) ──────────────────── */}
        <AutoservicioVariantes />

        {/* ─── Cómo funciona ────────────────────────────────────────────── */}
        <section id="como-funciona" className="border-t" style={{ background: "#FAFBFC", borderColor: "#EEF0F4" }}>
          <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
            <div className="max-w-2xl">
              <p className="text-xs font-semibold uppercase tracking-[0.18em]" style={{ color: "#1E8A95" }}>Cómo funciona</p>
              <h2 className="mt-3 text-3xl font-bold tracking-tight" style={{ color: NAVY }}>Del catálogo a producción en cuatro pasos</h2>
            </div>
            <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
              {[
                { n: "01", t: "Elige tus productos", d: "Combina los servicios que necesitas y ajusta el volumen de cada paquete." },
                { n: "02", t: "Crea tu cuenta", d: "Ingresa tus datos; se genera tu empresa y tu usuario administrador." },
                { n: "03", t: "Paga seguro", d: "Pago en línea con Stripe. Tu compra queda activa de inmediato." },
                { n: "04", t: "Empieza a operar", d: "Verifica, firma o consulta desde tu panel o integrando la API." },
              ].map((s) => (
                <div key={s.n} className="rounded-2xl border bg-white p-6" style={{ borderColor: "#E6E8EF" }}>
                  <div className="font-serif text-2xl font-bold" style={{ color: TEAL }}>{s.n}</div>
                  <h3 className="mt-3 text-[16px] font-bold" style={{ color: NAVY }}>{s.t}</h3>
                  <p className="mt-2 text-[13px] leading-relaxed" style={{ color: "#64748B" }}>{s.d}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ─── Cierre ───────────────────────────────────────────────────── */}
        <section className="bg-white">
          <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
            <div
              className="flex flex-col items-start justify-between gap-6 rounded-3xl p-8 lg:flex-row lg:items-center lg:p-12"
              style={{ background: "linear-gradient(135deg, #0E1133 0%, #212A45 100%)" }}
            >
              <div>
                <h2 className="text-2xl font-bold text-white lg:text-3xl">¿Listo para empezar?</h2>
                <p className="mt-2 text-[15px]" style={{ color: "rgba(255,255,255,0.7)" }}>
                  Activa tu primer servicio hoy. ¿Necesitas un volumen mayor o un caso a la medida? Habla con nuestro equipo.
                </p>
              </div>
              <div className="flex flex-wrap gap-3">
                <Link href="#experiencia" className="rounded-xl px-6 py-3.5 text-[15px] font-semibold text-white" style={{ background: TEAL }}>Ver propuestas</Link>
                <Link href="/contacto" className="rounded-xl px-6 py-3.5 text-[15px] font-semibold" style={{ background: "rgba(255,255,255,0.08)", color: "#fff", border: "1px solid rgba(255,255,255,0.18)" }}>Hablar con ventas</Link>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
