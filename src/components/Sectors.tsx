import Image from "next/image";

export default function Sectors() {
  const sectors = [
    {
      icon: "/images/sectors/fintech.png",
      title: "Fintech",
      description: "Capta clientes con onboarding ágil y seguro",
    },
    {
      icon: "/images/sectors/bancos.png",
      title: "Bancos",
      description: "Disminuye fraude mediante validaciones confiables",
    },
    {
      icon: "/images/sectors/aseguradoras.png",
      title: "Aseguradoras",
      description: "Reduce riesgo de identidades falsas",
    },
    {
      icon: "/images/sectors/prestamos.png",
      title: "Préstamos",
      description: "Analiza documentación de manera eficiente",
    },
    {
      icon: "/images/sectors/gaming.png",
      title: "Gaming",
      description: "Asegura autenticidad de participantes",
    },
    {
      icon: "/images/sectors/pagos.png",
      title: "Procesadores de Pagos",
      description: "Valida autenticidad de personas e identificaciones",
    },
  ];

  return (
    <section className="section-padding">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-[#000000] mb-4">
            Sectores que atendemos
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {sectors.map((sector, index) => (
            <div
              key={index}
              className="card hover-lift group text-center"
            >
              <div className="mb-6 flex justify-center">
                <Image
                  src={sector.icon}
                  alt={sector.title}
                  width={80}
                  height={80}
                  className="w-20 h-20 object-contain group-hover:scale-110 transition-transform"
                />
              </div>
              <h3 className="text-xl font-bold text-[#000000] mb-2">
                {sector.title}
              </h3>
              <p className="text-[#53535B]">
                {sector.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
