import Link from "next/link";

const NAVY = "#212A45";
const NAVY_DEEP = "#0E1133";
const TEAL = "#2DB6C1";

export default function OcrHero() {
  return (
    <section
      className="pt-28 pb-14 md:pt-32 md:pb-20 relative overflow-hidden"
      style={{ background: `linear-gradient(135deg, ${NAVY} 0%, ${NAVY_DEEP} 55%, ${NAVY} 100%)` }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-14 items-center">
          <div>
            <p className="text-xs font-bold tracking-wider uppercase mb-3" style={{ color: "#8FD9DE" }}>
              OCR documental para procesos empresariales
            </p>
            <h1 className="text-3xl md:text-5xl font-extrabold text-white leading-tight mb-4">
              Convierte identificaciones y documentos en datos listos para operar
            </h1>
            <p className="text-white/75 text-base md:text-lg max-w-xl mb-8">
              Extrae información estructurada de identificaciones oficiales, constancias fiscales,
              actas, estados de cuenta y otros documentos. Reduce captura manual, errores y tiempo de
              procesamiento.
            </p>
            <div className="flex flex-wrap gap-3 mb-4">
              <Link
                href="/autoservicio#cat-ocr"
                data-cta="comprar-paquete-ocr"
                data-source="ocr-hero"
                className="inline-flex items-center justify-center px-6 py-3.5 rounded-lg font-bold text-sm text-white transition-all hover:opacity-90"
                style={{ background: TEAL }}
              >
                Comprar paquete OCR
              </Link>
              <Link
                href="#integrar-api"
                data-cta="integrar-ocr-api"
                data-source="ocr-hero"
                className="inline-flex items-center justify-center px-6 py-3.5 rounded-lg font-bold text-sm text-white bg-white/10 border border-white/30 hover:bg-white/20 transition-all"
              >
                Integrar OCR por API
              </Link>
            </div>
            <Link
              href="/docs/productos"
              data-cta="ver-documentacion"
              data-source="ocr-hero"
              className="text-sm text-white/60 hover:text-white underline underline-offset-4 transition-colors"
            >
              Ver documentación técnica →
            </Link>
          </div>

          <div className="bg-white/[0.04] border border-white/10 rounded-2xl p-5">
            <div className="flex items-center mb-4">
              <div className="flex-1 text-center text-[11px] font-bold text-white/80 bg-white/[0.06] rounded-lg py-2.5 px-1 mr-1.5">
                Documento
              </div>
              <span className="text-white/30 text-xs px-1">→</span>
              <div
                className="flex-1 text-center text-[11px] font-bold rounded-lg py-2.5 px-1 mx-1.5"
                style={{ background: TEAL, color: NAVY_DEEP }}
              >
                Extracción OCR
              </div>
              <span className="text-white/30 text-xs px-1">→</span>
              <div className="flex-1 text-center text-[11px] font-bold text-white/80 bg-white/[0.06] rounded-lg py-2.5 px-1 ml-1.5">
                Datos estructurados
              </div>
            </div>
            <div className="bg-white rounded-xl p-4 grid grid-cols-[64px_1fr] gap-3.5">
              <div
                className="w-16 h-20 rounded-md border border-dashed flex items-center justify-center text-center text-[9px] font-bold"
                style={{ background: "linear-gradient(135deg,#E7ECFB,#F3F4F8)", borderColor: "#C7CEE0", color: "#9AA5C0" }}
              >
                documento
                <br />
                de muestra
              </div>
              <div className="flex flex-col gap-1.5 justify-center">
                {[
                  ["Tipo", "INE"],
                  ["País", "MEX"],
                  ["Vigencia", "vigente"],
                  ["Nombre", "extraído"],
                ].map(([k, v]) => (
                  <div key={k} className="flex items-center gap-2 text-[11px]">
                    <span className="text-gray-400 min-w-[56px]">{k}</span>
                    <span
                      className="font-mono font-bold rounded px-1.5 py-0.5 text-[10px]"
                      style={{ background: "#F1FAFB", color: "#0F8E96" }}
                    >
                      {v}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
