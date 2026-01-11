import Image from "next/image";

export default function ClientLogos() {
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
    <section className="py-20 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <p className="text-[#0099A8] text-sm font-semibold uppercase tracking-widest mb-3">
            Empresas que confían en nosotros
          </p>
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900">
            Pensado para empresas como la tuya
          </h2>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6">
          {clients.map((client) => (
            <div
              key={client.name}
              className="group flex items-center justify-center p-4 bg-white rounded-xl border border-gray-100 shadow-sm hover:shadow-md hover:border-[#0099A8]/20 transition-all duration-300"
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
        <p className="text-center text-gray-500 text-sm mt-8">
          Y más de 50 empresas reguladas en México y Latinoamérica
        </p>
      </div>
    </section>
  );
}
