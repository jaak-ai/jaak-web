import Image from "next/image";

export default function Solutions() {
  const solutions = [
    {
      label: "Disminuye el fraude",
      title: "KYC con Inteligencia Artificial",
      description: "Optimiza la seguridad de tu empresa con procesos de verificación de identidad automatizados, asegurando que cada usuario sea quien dice ser.",
      image: "/images/solutions/kyc-ia.png",
    },
    {
      label: "Evita multas y repercusiones",
      title: "Cumplimiento de regulación",
      description: "Garantiza el cumplimiento normativo mientras adquieres clientes de manera segura con un flujo eficiente, protegiendo tu empresa de posibles sanciones y riesgos reputacionales.",
      image: "/images/solutions/verificacion.png",
    },
    {
      label: "Capta usuarios fácilmente",
      title: "Adquisición de Clientes",
      description: "Incrementa la tasa de conversión de tu onboarding con usuarios genuinos a través de procesos de verificación rápidos y sin fricciones.",
      image: "/images/solutions/adquisicion.jpg",
    },
  ];

  return (
    <section className="section-padding bg-[#FAFAFA]" id="productos">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-[#000000] mb-4">
            Superando los desafíos con precisión
          </h2>
          <p className="text-xl text-[#53535B] max-w-3xl mx-auto">
            La autenticación de identidad precisa es nuestra misión: Confianza y seguridad en cada paso del camino.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {solutions.map((solution, index) => (
            <div
              key={index}
              className="card hover-lift text-center"
            >
              <div className="mb-4">
                <span className="inline-block px-4 py-1 bg-[#2DB6C1]/10 text-[#2DB6C1] rounded-full text-sm font-medium">
                  {solution.label}
                </span>
              </div>
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
