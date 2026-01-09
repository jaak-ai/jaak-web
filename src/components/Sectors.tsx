import Image from "next/image";

export default function Sectors() {
  const sectors = [
    {
      icon: "/images/sectors/fintech.png",
      title: "Fintech",
      description: "Capta clientes de forma sencilla gracias a un proceso de onboarding ágil y seguro, optimizando la experiencia de usuario y reduciendo el tiempo para verificar nuevas cuentas.",
    },
    {
      icon: "/images/sectors/bancos.png",
      title: "Bancos",
      description: "Disminuye el fraude mediante validaciones confiables de identidad y prevención de suplantaciones, garantizando el cumplimiento de regulaciones y la seguridad de los clientes.",
    },
    {
      icon: "/images/sectors/aseguradoras.png",
      title: "Aseguradoras",
      description: "Reduce significativamente el riesgo de identidades falsas, agilizan la gestión de pólizas y mejoran la confianza y transparencia con los asegurados.",
    },
    {
      icon: "/images/sectors/prestamos.png",
      title: "Préstamos",
      description: "Analiza y valida la documentación de los solicitantes de manera eficiente, minimizando el riesgo de fraude y permitiendo una toma de decisiones más ágil y fundamentada en la originación de créditos.",
    },
    {
      icon: "/images/sectors/gaming.png",
      title: "Gaming",
      description: "Asegura que cada participante realmente sea quien dice ser, evitando cuentas falsas y creando un entorno de juego más confiable.",
    },
    {
      icon: "/images/sectors/pagos.png",
      title: "Procesadores de pagos",
      description: "Valida la autenticidad de las personas, identificaciones y datos críticos, ayudando a los procesadores de pagos a cumplir requisitos normativos y brindar transacciones más seguras y confiables.",
    },
  ];

  return (
    <section className="section-padding">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-[#000000] mb-4">
            Innovación y eficiencia en cada transacción
          </h2>
          <p className="text-xl text-[#53535B] max-w-3xl mx-auto">
            Soluciones avanzadas para Fintech, Banca, Seguros, Préstamos, Gaming y Pagos.
          </p>
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
              <h3 className="text-xl font-bold text-[#000000] mb-3">
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
