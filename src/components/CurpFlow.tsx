const flow = ["TU SISTEMA", "API JAAK", "VALIDACIÓN CURP", "RENAPO", "RESPUESTA ESTRUCTURADA", "TU REGLA DE NEGOCIO"];
const outcomes = ["CONTINUAR", "REVISAR", "SOLICITAR INFORMACIÓN"];

export default function CurpFlow() {
  return (
    <section className="py-20 bg-white" aria-labelledby="flow-heading">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div data-sr className="text-center mb-12">
          <h2 id="flow-heading" className="text-3xl md:text-4xl font-black text-[#02132D]">
            De una CURP a una decisión en una sola integración
          </h2>
        </div>

        <div data-sr className="flex flex-col items-center gap-2 mb-10">
          {flow.map((step, i) => (
            <div key={step} className="flex flex-col items-center gap-2">
              <span className="px-5 py-2.5 rounded-lg text-xs font-bold tracking-wide bg-gray-50 border border-gray-200 text-[#02132D]">
                {step}
              </span>
              {i < flow.length - 1 && <span className="text-gray-300" aria-hidden="true">↓</span>}
            </div>
          ))}
        </div>

        <p className="text-center text-sm text-gray-500 mb-4">Ejemplos de reglas de negocio que tú defines:</p>
        <div data-sr-grid className="flex flex-wrap justify-center gap-3 mb-6">
          {outcomes.map((o) => (
            <span key={o} className="text-xs font-bold px-4 py-2 rounded-full text-[#1ECAD3]" style={{ background: "rgba(30,202,211,0.08)", border: "1px solid rgba(30,202,211,0.25)" }}>
              {o}
            </span>
          ))}
        </div>
        <p className="text-xs text-gray-400 text-center max-w-xl mx-auto">
          JAAK devuelve el resultado de la consulta; la clasificación en continuar, revisar o solicitar más
          información es una regla de negocio que define tu organización, no una decisión regulatoria de JAAK.
        </p>
      </div>
    </section>
  );
}
