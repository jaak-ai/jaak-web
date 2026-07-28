const checklist = [
  "quién fue consultado",
  "qué información se utilizó",
  "cuándo se realizó la búsqueda",
  "contra qué fuente",
  "qué resultado se obtuvo",
  "cómo se atendió la coincidencia",
];

export default function RiskListsProblem() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div data-sr className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-black text-[#202945] mb-6">
            Revisar un nombre no es suficiente
          </h2>
          <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Durante un onboarding, una empresa necesita saber con quién está iniciando una relación, si
            existen señales que requieren análisis adicional y qué evidencia puede conservar sobre la
            revisión realizada.
          </p>
          <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed mt-4">
            Una consulta aislada puede detectar una coincidencia. Un proceso conectado permite demostrar:
          </p>
        </div>

        <div data-sr-grid className="grid sm:grid-cols-2 md:grid-cols-3 gap-4 mb-14">
          {checklist.map((item) => (
            <div key={item} className="flex items-start gap-3 p-4 bg-gray-50 rounded-xl border border-gray-100">
              <svg className="w-5 h-5 text-[#1ECAD3] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
              </svg>
              <span className="text-gray-700 font-medium capitalize">{item}</span>
            </div>
          ))}
        </div>

        <div data-sr className="bg-[#202945] rounded-2xl p-8 md:p-10 text-center">
          <p className="text-xl md:text-2xl font-bold text-white leading-snug">
            La pregunta no es solamente si revisaste.
            <br />
            <span className="text-[#1ECAD3]">Es si puedes demostrar qué revisaste y con qué resultado.</span>
          </p>
        </div>
      </div>
    </section>
  );
}
