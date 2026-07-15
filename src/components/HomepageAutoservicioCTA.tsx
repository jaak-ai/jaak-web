import Link from "next/link";
import { formatMXN } from "@/data/autoservicio-catalogo";
import { getAutoservicioCatalog } from "@/lib/catalog";

const NAVY = "#212A45";
const TEAL = "#2DB6C1";

export default async function HomepageAutoservicioCTA() {
  // "Desde" = precio mínimo del producto, desde el catálogo unificado.
  const { productos } = await getAutoservicioCatalog();
  const destacados = ["kyc", "firma-nom151", "consulta-ine", "ocr-id"]
    .map((id) => productos.find((p) => p.id === id))
    .filter((p): p is NonNullable<typeof p> => Boolean(p))
    .map((p) => ({
      nombre: p.nombre.split(" — ")[0],
      desde: Math.min(...p.paquetes.map((q) => q.precio)),
    }));
  return (
    <section className="bg-white">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
        <div
          className="relative overflow-hidden rounded-3xl px-8 py-10 lg:px-14 lg:py-14"
          style={{ background: "linear-gradient(135deg, #0E1133 0%, #1A2142 55%, #212A45 100%)" }}
        >
          <div
            className="pointer-events-none absolute inset-0 opacity-[0.04]"
            style={{
              backgroundImage:
                "linear-gradient(rgba(255,255,255,1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,1) 1px, transparent 1px)",
              backgroundSize: "32px 32px",
            }}
          />
          <div className="relative z-10 grid grid-cols-1 items-center gap-10 lg:grid-cols-2">
            {/* Texto + CTA */}
            <div>
              <span
                className="inline-flex items-center rounded-full px-3 py-1 text-xs font-semibold tracking-wide"
                style={{ background: "rgba(45,182,193,0.12)", border: "1px solid rgba(45,182,193,0.35)", color: "#7FE0E8" }}
              >
                Autoservicio
              </span>
              <h2 className="mt-5 text-3xl font-bold leading-tight tracking-tight text-white lg:text-4xl">
                Cómpralo tú mismo y actívalo <span style={{ color: TEAL }}>en minutos</span>
              </h2>
              <p className="mt-4 max-w-lg text-[15px] leading-relaxed" style={{ color: "rgba(255,255,255,0.72)" }}>
                Arma tu paquete combinando KYC, firma electrónica, validaciones y OCR. Sin vendedores, sin esperas:
                eliges, pagas en línea y empiezas a operar el mismo día.
              </p>
              <div className="mt-7 flex flex-wrap gap-3">
                <Link
                  href="/autoservicio"
                  className="rounded-xl px-6 py-3.5 text-[15px] font-semibold text-white transition-colors"
                  style={{ background: TEAL }}
                >
                  Ir a Autoservicio
                </Link>
                <Link
                  href="/precios"
                  className="rounded-xl px-6 py-3.5 text-[15px] font-semibold transition-colors"
                  style={{ background: "rgba(255,255,255,0.08)", color: "#fff", border: "1px solid rgba(255,255,255,0.18)" }}
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
                  className="group rounded-2xl border p-5 transition-colors"
                  style={{ background: "rgba(255,255,255,0.04)", borderColor: "rgba(255,255,255,0.10)" }}
                >
                  <div className="text-[14px] font-semibold text-white">{d.nombre}</div>
                  <div className="mt-3 flex items-baseline gap-1.5">
                    <span className="text-[12px]" style={{ color: "rgba(255,255,255,0.5)" }}>desde</span>
                    <span className="text-xl font-bold" style={{ color: "#7FE0E8" }}>{formatMXN(d.desde)}</span>
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
