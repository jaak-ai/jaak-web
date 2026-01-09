import Image from "next/image";

export default function Clients() {
  const clients = [
    { name: "Duppla Doctor", logo: "https://jaak.ai/images/clients/duppla-doctor.png" },
    { name: "Impulsemos", logo: "https://jaak.ai/images/clients/impulsemos.png" },
    { name: "Casandra Soft", logo: "https://jaak.ai/images/clients/casandra-soft.png" },
    { name: "Mural Med", logo: "https://jaak.ai/images/clients/mural-med.png" },
  ];

  return (
    <section className="py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-center text-xl text-[#666666] mb-10">
          Clientes que confían en nosotros
        </h2>
        <div className="flex flex-wrap justify-center items-center gap-12 md:gap-16">
          {clients.map((client) => (
            <div key={client.name} className="grayscale hover:grayscale-0 transition-all opacity-60 hover:opacity-100">
              <Image
                src={client.logo}
                alt={client.name}
                width={150}
                height={60}
                className="h-12 w-auto object-contain"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
