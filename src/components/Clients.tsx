import Image from "next/image";

export default function Clients() {
  const clients = [
    { name: "Círculo de Beneficios", logo: "/images/clients/circulo-de-beneficios.jpg" },
    { name: "Colectivo Moda", logo: "/images/clients/colectivo-moda.jpg" },
    { name: "Creamigas", logo: "/images/clients/creamigas.jpg" },
    { name: "Fital", logo: "/images/clients/fital.jpg" },
    { name: "Grupo Bafar", logo: "/images/clients/grupo-bafar.jpg" },
    { name: "Grupo La Campana", logo: "/images/clients/grupo-la-campana.jpg" },
    { name: "IESISA", logo: "/images/clients/iesisa.jpg" },
    { name: "Lerco", logo: "/images/clients/lerco.jpg" },
    { name: "OLR Leasing", logo: "/images/clients/olr-leasing.jpg" },
    { name: "Préstamos con Suerte", logo: "/images/clients/prestamos-con-suerte.jpg" },
    { name: "SharedFi", logo: "/images/clients/sharedfi.jpg" },
    { name: "Vextor", logo: "/images/clients/vextor.jpg" },
  ];

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10">
          <p className="text-[#0099A8] text-sm font-semibold uppercase tracking-widest mb-2">
            Casos de éxito
          </p>
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900">
            Clientes que confían en nosotros
          </h2>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6">
          {clients.map((client) => (
            <div
              key={client.name}
              className="group flex items-center justify-center p-4 bg-gray-50 rounded-xl border border-gray-100 hover:border-[#0099A8]/30 hover:shadow-md transition-all duration-300"
            >
              <Image
                src={client.logo}
                alt={client.name}
                width={150}
                height={80}
                className="object-contain grayscale group-hover:grayscale-0 transition-all duration-300"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
