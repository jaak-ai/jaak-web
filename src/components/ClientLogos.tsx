export default function ClientLogos() {
  const clients = [
    { name: "Duppla", url: "https://www.duppla.doctor/es-mx/home" },
    { name: "Impulsemos", url: "https://impulsemos.com/" },
    { name: "Casandra Soft", url: "https://www.casandrasoft.com/" },
    { name: "Mural Med", url: "https://muralmed.com/" },
  ];

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <p className="text-center text-gray-500 text-sm uppercase tracking-widest mb-10">
          Pensado para empresas como la tuya
        </p>
        <div className="flex flex-wrap justify-center items-center gap-x-12 md:gap-x-16 gap-y-6">
          {clients.map((client) => (
            <a
              key={client.name}
              href={client.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group px-6 py-3 rounded-lg hover:bg-gray-50 transition-all"
            >
              <span className="text-xl md:text-2xl font-black tracking-tight text-gray-300 group-hover:text-gray-500 transition-colors">
                {client.name}
              </span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
