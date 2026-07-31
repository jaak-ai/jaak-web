import Link from "next/link";
import { productos } from "@/data/autoservicio-catalogo";

const TEAL = "#2DB6C1";
const GREEN = "#2AD796";

interface Props {
  productId: "ocr-id" | "ocr-inteligente";
  sectionId: string;
  kicker: string;
  docHref: string;
  docLabel: string;
  noIncluye: string;
  altBg?: boolean;
}

/** Sección "explicador" de un producto OCR — el nombre, tagline y la lista
 *  "incluye" se leen directamente de autoservicio-catalogo.ts (fuente
 *  única) en vez de repetirse como copy fijo en este componente. */
export default function OcrProductSection({ productId, sectionId, kicker, docHref, docLabel, noIncluye, altBg }: Props) {
  const producto = productos.find((p) => p.id === productId);
  if (!producto) return null;

  return (
    <section id={sectionId} className={`py-14 md:py-16 ${altBg ? "bg-[#FAFAFA]" : ""}`}>
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white border border-gray-100 rounded-2xl p-7 md:p-9">
          <span className="text-[11px] font-extrabold tracking-wider uppercase" style={{ color: "#25969f" }}>
            {kicker}
          </span>
          <h3 className="text-xl md:text-2xl font-extrabold mt-1.5 mb-2" style={{ color: "#212A45" }}>
            {producto.nombre}
          </h3>
          <p className="text-[14px] text-gray-500 mb-6">{producto.tagline}</p>

          <ul className="grid sm:grid-cols-2 gap-x-6 gap-y-3 mb-6">
            {producto.incluye.map((item) => (
              <li key={item} className="flex items-start gap-2.5 text-[13px] text-gray-600">
                <svg className="w-3.5 h-3.5 mt-0.5 flex-shrink-0" style={{ color: GREEN }} fill="none" stroke="currentColor" strokeWidth={3} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                {item}
              </li>
            ))}
          </ul>

          <div className="text-[12.5px] rounded-xl px-4 py-3 mb-6" style={{ background: "#FBF0DD", color: "#8A5A17" }}>
            {noIncluye}
          </div>

          <div className="flex flex-wrap gap-3">
            <Link
              href="/autoservicio#cat-ocr"
              data-cta="comprar-paquete-ocr"
              data-source={`ocr-producto-${productId}`}
              className="inline-flex items-center justify-center px-5 py-2.5 rounded-lg font-bold text-[13.5px] text-white transition-all hover:opacity-90"
              style={{ background: TEAL }}
            >
              Comprar
            </Link>
            <Link
              href="#integrar-api"
              data-cta="integrar-ocr-api"
              data-source={`ocr-producto-${productId}`}
              className="inline-flex items-center justify-center px-5 py-2.5 rounded-lg font-bold text-[13.5px] border border-gray-300 text-[#212A45] hover:border-[#212A45] transition-all"
            >
              Integrar por API
            </Link>
          </div>
          <Link
            href={docHref}
            className="inline-flex mt-4 text-[12px] text-gray-400 hover:text-gray-600 underline underline-offset-4"
          >
            {docLabel} →
          </Link>
        </div>
      </div>
    </section>
  );
}
