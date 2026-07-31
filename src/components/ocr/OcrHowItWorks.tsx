const STEPS = [
  "Carga o captura del documento",
  "Clasificación del tipo de documento",
  "Extracción de información (OCR)",
  "Organización en campos estructurados",
  "Entrega vía web, autoservicio o API",
  "Integración con tu sistema",
];

export default function OcrHowItWorks() {
  return (
    <section className="py-16 md:py-20">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-xl mx-auto mb-10">
          <h2 className="text-2xl md:text-3xl font-extrabold" style={{ color: "#212A45" }}>
            Cómo funciona
          </h2>
          <p className="text-gray-500 mt-3 text-[15px]">De documento a dato estructurado, en un flujo.</p>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3">
          {STEPS.map((step, i) => (
            <div key={step} className="bg-white border border-gray-100 rounded-xl p-4 text-center">
              <div
                className="w-6 h-6 rounded-full text-white text-xs font-extrabold flex items-center justify-center mx-auto mb-2"
                style={{ background: "#2DB6C1" }}
              >
                {i + 1}
              </div>
              <p className="text-[11.5px] text-gray-600 leading-snug">{step}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
