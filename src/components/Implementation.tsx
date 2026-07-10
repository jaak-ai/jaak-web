export default function Implementation() {
  const steps = [
    {
      number: "1",
      title: "Demo enfocada en tu caso real",
    },
    {
      number: "2",
      title: "Integración guiada (API o SDK)",
    },
    {
      number: "3",
      title: "Producción en días, no meses",
    },
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto">
          {/* Section header */}
          <h2 className="text-3xl md:text-4xl font-black text-[#0a0f1c] mb-10">
            De demo a producción
          </h2>

          {/* Steps */}
          <div className="space-y-6 mb-10">
            {steps.map((step) => (
              <div
                key={step.number}
                className="flex items-center gap-6 p-5 bg-[#f9fafb] rounded-xl border border-[#e5e7eb]"
              >
                <span className="w-12 h-12 bg-[#0a0f1c] text-white rounded-full flex items-center justify-center font-bold text-xl flex-shrink-0">
                  {step.number}
                </span>
                <span className="text-lg text-[#374151] font-medium">
                  {step.title}
                </span>
              </div>
            ))}
          </div>

          {/* Summary */}
          <p className="text-lg text-[#4b5563] border-l-4 border-[#2DB6C1] pl-4">
            Sin proyectos eternos. Sin dependencias absurdas.
          </p>
        </div>
      </div>
    </section>
  );
}
