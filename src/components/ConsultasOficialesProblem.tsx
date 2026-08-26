const steps = [
  {
    title: "REGISTRO",
    desc: "El usuario proporciona sus datos.",
  },
  {
    title: "VALIDACIÓN",
    desc: "JAAK consulta la fuente correspondiente.",
  },
  {
    title: "DECISIÓN",
    desc: "Tu sistema recibe un resultado estructurado para continuar el proceso.",
  },
];

export default function ConsultasOficialesProblem() {
  return (
    <section className="py-20 bg-white" aria-labelledby="problem-heading">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div data-sr className="text-center mb-14">
          <h2 id="problem-heading" className="text-3xl md:text-4xl font-black text-[#02132D] mb-4">
            Capturar un dato no significa haberlo validado
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Nombre, CURP, RFC o una credencial pueden ser capturados correctamente y aun así requerir
            confirmación antes de utilizarlos para tomar una decisión. Las Consultas Oficiales JAAK permiten
            agregar una validación puntual exactamente donde tu proceso la necesita.
          </p>
        </div>

        <div data-sr-grid className="grid sm:grid-cols-3 gap-6">
          {steps.map((step, i) => (
            <div key={step.title} className="relative p-6 rounded-2xl border border-gray-100 bg-gray-50">
              <span className="text-xs font-bold text-[#1ECAD3]">0{i + 1}</span>
              <h3 className="text-sm font-black tracking-wide text-[#02132D] mt-2 mb-2">{step.title}</h3>
              <p className="text-sm text-gray-600 leading-relaxed">{step.desc}</p>
              {i < steps.length - 1 && (
                <span className="hidden sm:block absolute top-1/2 -right-4 text-gray-300" aria-hidden="true">
                  →
                </span>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
