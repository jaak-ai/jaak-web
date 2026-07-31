const CHIPS = [
  "No consulta INE",
  "No consulta RENAPO",
  "No valida CURP",
  "No compara biometría facial",
  "No ejecuta prueba de vida",
  "No es un KYC completo",
];

export default function OcrDifferentiation() {
  return (
    <section className="py-4 md:py-6">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div
          className="rounded-2xl p-8 md:p-10 grid md:grid-cols-[0.9fr_1.1fr] gap-8 items-center"
          style={{ background: "#212A45" }}
        >
          <div>
            <p className="text-xs font-bold tracking-wider uppercase mb-3" style={{ color: "#8FD9DE" }}>
              Antes de elegir
            </p>
            <h3 className="text-xl md:text-2xl font-extrabold text-white mb-3">
              Extraer no es lo mismo que validar
            </h3>
            <p className="text-white/75 text-[13.5px] leading-relaxed">
              El OCR convierte la información de un documento en datos estructurados. Cuando tu
              proceso requiere confirmar información ante una fuente oficial, comparar el rostro de
              una persona o realizar un flujo KYC, puedes complementar el OCR con otros productos de
              JAAK.
            </p>
          </div>
          <div className="flex flex-wrap gap-2">
            {CHIPS.map((chip) => (
              <span
                key={chip}
                className="text-[11.5px] font-bold px-3 py-1.5 rounded-full bg-white/[0.08] border border-white/[0.18] text-white/85"
              >
                ✕ {chip}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
