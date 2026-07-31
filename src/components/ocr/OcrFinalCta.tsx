import Link from "next/link";

export default function OcrFinalCta() {
  return (
    <section className="py-16 md:py-20" style={{ background: "#212A45" }}>
      <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-2xl md:text-3xl font-extrabold text-white mb-3">
          Empieza a estructurar tus documentos
        </h2>
        <p className="text-white/70 text-[14.5px] mb-8">
          Compra un paquete y actívalo hoy, o cuéntanos cómo quieres integrarlo por API.
        </p>
        <div className="flex flex-wrap gap-3 justify-center">
          <Link
            href="/autoservicio#cat-ocr"
            data-cta="comprar-paquete-ocr"
            data-source="ocr-final-cta"
            className="inline-flex items-center justify-center px-6 py-3.5 rounded-lg font-bold text-sm text-white transition-all hover:opacity-90"
            style={{ background: "#2DB6C1" }}
          >
            Comprar paquete OCR
          </Link>
          <Link
            href="#integrar-api"
            data-cta="integrar-ocr-api"
            data-source="ocr-final-cta"
            className="inline-flex items-center justify-center px-6 py-3.5 rounded-lg font-bold text-sm text-white bg-white/10 border border-white/30 hover:bg-white/20 transition-all"
          >
            Integrar OCR por API
          </Link>
        </div>
      </div>
    </section>
  );
}
