import Link from "next/link";
import { productos, formatMXN } from "@/data/autoservicio-catalogo";

// "Desde" = precio mínimo del producto, desde la fuente única de catálogo.
const destacados = ["kyc", "firma-nom151", "ine", "ocr-id"]
  .map((id) => productos.find((p) => p.id === id))
  .filter((p): p is NonNullable<typeof p> => Boolean(p))
  .map((p) => ({
    nombre: p.nombre.split(" — ")[0],
    desde: Math.min(...p.paquetes.map((q) => q.precio)),
  }));

export default function HomepageAutoservicioCTA() {
  return (
    <section className="hp-section hp-bg-2 py-16 lg:py-20 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="hp-glass-teal relative overflow-hidden rounded-3xl px-8 py-10 lg:px-14 lg:py-14">
          <div
            className="pointer-events-none absolute inset-0 opacity-[0.04]"
            style={{
              backgroundImage:
                "linear-gradient(currentColor 1px, transparent 1px), linear-gradient(90deg, currentColor 1px, transparent 1px)",
              backgroundSize: "32px 32px",
              color: "var(--hp-text-hi)",
            }}
          />
          <div className="relative z-10 grid grid-cols-1 items-center gap-10 lg:grid-cols-2">
            {/* Texto + CTA */}
            <div>
              <span
                className="inline-flex items-center rounded-full px-3 py-1 text-xs font-semibold tracking-wide"
                style={{ background: "rgba(30,202,211,0.12)", border: "1px solid rgba(30,202,211,0.35)", color: "#1ECAD3" }}
              >
                Autoservicio
              </span>
              <h2 className="mt-5 text-3xl font-bold leading-tight tracking-tight text-white lg:text-4xl">
                Cómpralo tú mismo y actívalo{" "}
                <span
                  style={{
                    background: "linear-gradient(90deg, #1ECAD3, #2AD796)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    backgroundClip: "text",
                  }}
                >
                  en minutos
                </span>
              </h2>
              <p className="mt-4 max-w-lg text-[15px] leading-relaxed" style={{ color: "var(--hp-text-md)" }}>
                Arma tu paquete combinando KYC, firma electrónica, validaciones y OCR. Sin vendedores, sin esperas:
                eliges, pagas en línea y empiezas a operar el mismo día.
              </p>
              <div className="mt-7 flex flex-wrap gap-3">
                <Link
                  href="/autoservicio"
                  className="rounded-xl px-6 py-3.5 text-[15px] font-semibold text-white transition-all"
                  style={{ background: "linear-gradient(135deg, #1ECAD3, #17a8b0)", boxShadow: "0 8px 28px rgba(30,202,211,0.28)" }}
                >
                  Ir a Autoservicio
                </Link>
                <Link
                  href="/precios"
                  className="rounded-xl px-6 py-3.5 text-[15px] font-semibold transition-all"
                  style={{
                    color: "var(--hp-ghost-btn-color)",
                    background: "var(--hp-ghost-btn-bg)",
                    border: "1px solid var(--hp-ghost-btn-border)",
                  }}
                >
                  Ver precios
                </Link>
              </div>
            </div>

            {/* Precios "desde" (fuente única de catálogo) */}
            <div className="grid grid-cols-2 gap-3">
              {destacados.map((d) => (
                <Link
                  key={d.nombre}
                  href="/autoservicio"
                  className="group rounded-2xl p-5 transition-colors"
                  style={{ background: "var(--hp-pill-bg)", border: "1px solid var(--hp-pill-border)" }}
                >
                  <div className="text-[14px] font-semibold text-white">{d.nombre}</div>
                  <div className="mt-3 flex items-baseline gap-1.5">
                    <span className="text-[12px]" style={{ color: "var(--hp-text-lo)" }}>desde</span>
                    <span className="text-xl font-bold" style={{ color: "#1ECAD3" }}>{formatMXN(d.desde)}</span>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
