import Image from "next/image";

export default function Sectors() {
  const sectors = [
    {
      icon: "https://jaak.ai/hs-fs/hubfs/151.png?width=1080&height=1080&name=151.png",
      title: "Fintech",
      description: "Capta clientes con onboarding ágil y seguro",
    },
    {
      icon: "https://jaak.ai/hs-fs/hubfs/150.png?width=1080&height=1080&name=150.png",
      title: "Bancos",
      description: "Disminuye fraude mediante validaciones confiables",
    },
    {
      icon: "https://jaak.ai/hs-fs/hubfs/152.png?width=1080&height=1080&name=152.png",
      title: "Aseguradoras",
      description: "Reduce riesgo de identidades falsas",
    },
    {
      icon: "https://jaak.ai/hs-fs/hubfs/153.png?width=1080&height=1080&name=153.png",
      title: "Préstamos",
      description: "Analiza documentación de manera eficiente",
    },
    {
      icon: "https://jaak.ai/hs-fs/hubfs/154.png?width=1080&height=1080&name=154.png",
      title: "Gaming",
      description: "Asegura autenticidad de participantes",
    },
    {
      icon: "https://jaak.ai/hs-fs/hubfs/155.png?width=1080&height=1080&name=155.png",
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
