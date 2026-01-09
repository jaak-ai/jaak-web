export default function TargetAudience() {
  const industries = [
    "Fintech",
    "Legal",
    "Inmobiliario",
    "Crypto",
    "Banca",
    "Insurtech",
    "Plataformas B2B",
  ];

  const criteria = [
    "Operan bajo LFPIORPI / AML",
    "Manejan identidad, contratos o representación legal",
    "No pueden darse el lujo de fallar en una auditoría",
  ];

  return (
    <section className="py-24 bg-[#f8fafc]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-[#212A45] mb-8">
            Diseñado para organizaciones que:
          </h2>

          <ul className="space-y-4 mb-12 text-left max-w-xl mx-auto">
            {criteria.map((item, index) => (
              <li
                key={index}
                className="flex items-start gap-4 text-lg text-[#53535B]"
              >
                <span className="w-6 h-6 bg-[#2DB6C1] rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-white text-sm">✓</span>
                </span>
                {item}
              </li>
            ))}
          </ul>

          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {industries.map((industry, index) => (
              <span
                key={index}
                className="px-5 py-2 bg-white text-[#212A45] rounded-full border border-[#EEEEEE] font-medium shadow-sm"
              >
                {industry}
              </span>
            ))}
          </div>

          <div className="bg-[#212A45] rounded-2xl p-8 text-white">
            <p className="text-xl md:text-2xl font-semibold">
              Si tu negocio toca identidad y dinero,
              <br />
              <span className="text-[#2DB6C1]">esto es para ti.</span>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
