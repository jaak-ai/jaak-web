import Link from "next/link";
import { productos, formatMXN } from "@/data/autoservicio-catalogo";

const PRODUCT_IDS = ["ocr-id", "ocr-inteligente"] as const;

/** Paquete recomendado por producto — precio y tokens se leen en vivo de
 *  autoservicio-catalogo.ts (fuente única). Nada se hardcodea aquí; si el
 *  catálogo cambia, esta sección lo refleja automáticamente. */
export default function OcrPackages() {
  return (
    <section className="py-16 md:py-20 bg-[#FAFAFA]">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-xl mx-auto mb-10">
          <h2 className="text-2xl md:text-3xl font-extrabold" style={{ color: "#212A45" }}>
            Paquete recomendado
          </h2>
          <p className="text-gray-500 mt-3 text-[15px]">
            Precio y tokens obtenidos del catálogo de autoservicio.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 gap-6">
          {PRODUCT_IDS.map((id) => {
            const producto = productos.find((p) => p.id === id);
            if (!producto) return null;
            const paqueteId = producto.recomendado ?? producto.paquetes[0]?.id;
            const paquete = producto.paquetes.find((p) => p.id === paqueteId) ?? producto.paquetes[0];
            if (!paquete) return null;

            return (
              <div key={id} className="bg-white border border-gray-100 rounded-2xl p-6">
                <span
                  className="inline-block text-[10.5px] font-extrabold uppercase tracking-wider rounded-full px-2.5 py-1 mb-3"
                  style={{ background: "#F1FAFB", color: "#25969f" }}
                >
                  {paquete.nombre} · recomendado
                </span>
                <h3 className="text-[15px] font-bold mb-3" style={{ color: "#212A45" }}>
                  {producto.nombre}
                </h3>
                <div className="flex items-baseline gap-2 mb-1">
                  <span className="text-2xl font-extrabold tabular-nums" style={{ color: "#212A45" }}>
                    {formatMXN(paquete.precio)}
                  </span>
                  <span className="text-xs text-gray-400">MXN + IVA</span>
                </div>
                <p className="text-[11px] text-gray-400 italic mb-5">
                  {paquete.cantidad.toLocaleString("es-MX")} {producto.unidad}
                </p>
                <div className="flex flex-wrap items-center gap-x-4 gap-y-2">
                  <Link
                    href="/autoservicio#cat-ocr"
                    data-cta="comprar-paquete-ocr"
                    data-source="ocr-paquetes"
                    className="inline-flex items-center justify-center px-5 py-2.5 rounded-lg font-bold text-[13px] text-white transition-all hover:opacity-90"
                    style={{ background: "#2DB6C1" }}
                  >
                    Comprar
                  </Link>
                  <Link href="/autoservicio#cat-ocr" className="text-[12.5px] font-semibold underline underline-offset-4" style={{ color: "#25969f" }}>
                    Ver todos los paquetes
                  </Link>
                  <Link href="#integrar-api" className="text-[12.5px] font-semibold underline underline-offset-4" style={{ color: "#25969f" }}>
                    Solicitar integración por volumen
                  </Link>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
