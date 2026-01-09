import Image from "next/image";

export default function Solutions() {
  const solutions = [
    {
      title: "KYC con Inteligencia Artificial",
      description: "Optimiza seguridad con procesos automatizados",
      image: "/images/solutions/kyc-ia.png",
    },
    {
      title: "Cumplimiento de Regulación",
      description: "Garantiza cumplimiento normativo. Reduce sanciones y riesgos reputacionales.",
      image: "/images/solutions/verificacion.png",
    },
    {
      title: "Adquisición de Clientes",
      description: "Incrementa tasa de conversión. Procesos rápidos sin fricción.",
      image: "/images/solutions/adquisicion.jpg",
    },
  ];

  return (
    <section className="section-padding bg-[#FAFAFA]" id="productos">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-[#000000] mb-4">
            Nuestras Soluciones
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {solutions.map((solution, index) => (
            <div
              key={index}
              className="card hover-lift text-center"
            >
              <div className="mb-6 relative h-48 flex items-center justify-center overflow-hidden rounded-lg">
                <Image
                  src={solution.image}
                  alt={solution.title}
                  width={300}
                  height={200}
                  className="object-cover w-full h-full"
                />
              </div>
              <h3 className="text-xl font-bold text-[#000000] mb-3">
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
