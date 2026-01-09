import Image from "next/image";

export default function Solutions() {
  const solutions = [
    {
      title: "KYC con Inteligencia Artificial",
      description: "Optimiza seguridad con procesos automatizados",
      image: "https://jaak.ai/images/JAAK-Solucion-KYC-01.png",
    },
    {
      title: "Cumplimiento de Regulación",
      description: "Garantiza cumplimiento normativo. Reduce sanciones y riesgos reputacionales.",
      image: "https://jaak.ai/images/JAAK-Solucion-KYC-02.png",
    },
    {
      title: "Adquisición de Clientes",
      description: "Incrementa tasa de conversión. Procesos rápidos sin fricción.",
      image: "https://jaak.ai/images/JAAK-Solucion-KYC-03.png",
    },
  ];

  return (
    <section className="section-padding bg-[#f8fafc]" id="productos">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-[#0E1133] mb-4">
            Nuestras Soluciones
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {solutions.map((solution, index) => (
            <div
              key={index}
              className="card hover-lift text-center"
            >
              <div className="mb-6 relative h-48 flex items-center justify-center">
                <Image
                  src={solution.image}
                  alt={solution.title}
                  width={200}
                  height={180}
                  className="object-contain"
                />
              </div>
              <h3 className="text-xl font-bold text-[#0E1133] mb-3">
                {solution.title}
              </h3>
              <p className="text-[#53535B]">
                {solution.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
