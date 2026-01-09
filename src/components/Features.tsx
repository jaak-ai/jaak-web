import Image from "next/image";

export default function Features() {
  const features = [
    {
      icon: "/images/icons/comprobado.png",
      title: "Verificación en menos de 1 minuto",
    },
    {
      icon: "/images/icons/aprobar.png",
      title: "Precisión mayor al 99%",
    },
    {
      icon: "/images/icons/saas.png",
      title: "Disponible SaaS y On Premise",
    },
    {
      icon: "/images/icons/chip-de-ia.png",
      title: "Tecnología potenciada con IA",
    },
    {
      icon: "/images/icons/buscar-palabra-clave.png",
      title: "Más de 1.2 millones de verificaciones diarias",
    },
    {
      icon: "/images/icons/ley-internacional.png",
      title: "Cumplimiento de certificaciones internacionales",
    },
  ];

  const regulations = ["CNBV", "LFPIORPI", "LFPDPPP", "CUB"];

  return (
    <section className="section-padding bg-[#FAFAFA]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-[#000000] mb-4">
            Lo que ofrecemos
          </h2>
          <p className="text-xl text-[#53535B] max-w-3xl mx-auto">
            Con JAAK, la seguridad no es una opción, es una garantía
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {features.map((feature, index) => (
            <div
              key={index}
              className="card hover-lift flex items-center gap-4"
            >
              <div className="flex-shrink-0">
                <Image
                  src={feature.icon}
                  alt=""
                  width={48}
                  height={48}
                  className="w-12 h-12 object-contain"
                />
              </div>
              <h3 className="text-lg font-semibold text-[#000000]">
                {feature.title}
              </h3>
            </div>
          ))}
        </div>

        {/* Regulations */}
        <div className="text-center">
          <p className="text-[#666666] mb-6">Cumplimos con las regulaciones:</p>
          <div className="flex flex-wrap justify-center gap-4">
            {regulations.map((reg) => (
              <span
                key={reg}
                className="px-6 py-2 bg-white border border-[#EEEEEE] rounded-full text-[#212A45] font-medium"
              >
                {reg}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
