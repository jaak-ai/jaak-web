const flow = ["USUARIO / OPERACIÓN", "CREDENCIAL", "JAAK", "VALIDACIÓN", "RESULTADO", "REGLA DE NEGOCIO"];
const outcomes = ["CONTINUAR", "REVISAR", "ESCALAR A KYC"];

export default function IneFlow() {
  return (
    <section className="py-20" style={{ background: "#F3F4F8" }} aria-labelledby="ine-flow-heading">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div data-sr className="text-center mb-12">
          <h2 id="ine-flow-heading" className="text-3xl md:text-4xl font-black text-[#02132D]">
            Incorpórala justo donde la necesitas
          </h2>
        </div>

        <div data-sr className="flex flex-col items-center gap-2 mb-10">
          {flow.map((step, i) => (
            <div key={step} className="flex flex-col items-center gap-2">
              <span className="px-5 py-2.5 rounded-lg text-xs font-bold tracking-wide bg-white border border-gray-200 text-[#02132D]">
                {step}
              </span>
              {i < flow.length - 1 && <span className="text-gray-300" aria-hidden="true">↓</span>}
            </div>
          ))}
        </div>

        <p className="text-center text-sm text-gray-500 mb-4">Posibles reglas de negocio que tú defines:</p>
        <div data-sr-grid className="flex flex-wrap justify-center gap-3 mb-6">
          {outcomes.map((o) => (
            <span key={o} className="text-xs font-bold px-4 py-2 rounded-full text-[#1ECAD3]" style={{ background: "rgba(30,202,211,0.08)", border: "1px solid rgba(30,202,211,0.25)" }}>
              {o}
            </span>
          ))}
        </div>
        <p className="text-xs text-gray-400 text-center max-w-xl mx-auto">
          Estas no son respuestas oficiales de la fuente consultada; son reglas de negocio que defines tú
          sobre el resultado que devuelve JAAK.
        </p>
      </div>
    </section>
  );
}
