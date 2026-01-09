import Link from "next/link";

export default function Clients() {
  const clients = [
    { name: "Duppla Doctor", url: "https://www.duppla.doctor/es-mx/home" },
    { name: "Impulsemos", url: "https://impulsemos.com/" },
    { name: "Casandra Soft", url: "https://www.casandrasoft.com/" },
    { name: "Mural Med", url: "https://muralmed.com/" },
  ];

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-center text-xl text-[#666666] mb-10">
          Clientes que confían en nosotros
        </h2>
        <div className="flex flex-wrap justify-center items-center gap-12 md:gap-16">
          {clients.map((client) => (
            <Link
              key={client.name}
              href={client.url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#53535B] hover:text-[#2DB6C1] font-semibold text-lg transition-colors"
            >
              {client.name}
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
