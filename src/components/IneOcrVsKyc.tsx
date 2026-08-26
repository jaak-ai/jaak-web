const tiers = [
  { label: "OCR DOCUMENTAL", desc: "Captura información visible del documento." },
  { label: "VALIDACIÓN INE", desc: "Agrega una consulta de validación relacionada con la credencial presentada." },
  { label: "KYC COMPLETO", desc: "Combina documento, biometría, prueba de vida, comparación facial y otras validaciones." },
];

export default function IneOcrVsKyc() {
  return (
    <section className="py-20 bg-white" aria-labelledby="ocr-heading">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div data-sr className="text-center mb-12">
          <h2 id="ocr-heading" className="text-3xl md:text-4xl font-black text-[#02132D]">
            Una credencial capturada todavía necesita contexto
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto mt-4">
            Leer los datos de una identificación y validar información relacionada con esa credencial son
            pasos distintos.
          </p>
        </div>

        <div data-sr-grid className="grid sm:grid-cols-3 gap-5 mb-8">
          {tiers.map((t) => (
            <div key={t.label} className="p-6 rounded-2xl border border-gray-100 bg-gray-50">
              <h3 className="text-sm font-black tracking-wide text-[#02132D] mb-2">{t.label}</h3>
              <p className="text-sm text-gray-600 leading-relaxed">{t.desc}</p>
            </div>
          ))}
        </div>

        <p data-sr className="text-center text-lg font-semibold text-[#02132D]">
          Elige la capa que tu proceso necesita.
        </p>
      </div>
    </section>
  );
}
