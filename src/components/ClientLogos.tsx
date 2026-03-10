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
    <section className="py-16 bg-[#060610] relative overflow-hidden">
      {/* subtle divider glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1/2 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10">
          <p className="text-white/35 text-xs font-semibold uppercase tracking-[0.2em] mb-2">
            Empresas que confían en nosotros
          </p>
          <p className="text-white/55 text-sm">
            +50 empresas reguladas en México y Latinoamérica
          </p>
        </div>

        <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-3">
          {clients.map((client) => (
            <div
              key={client.name}
              className="group flex items-center justify-center p-4 rounded-2xl border border-white/6 transition-all duration-300 hover:border-white/15 cursor-default"
              style={{
                background: "rgba(255,255,255,0.025)",
              }}
            >
              <Image
                src={client.logo}
                alt={client.name}
                width={120}
                height={60}
                className="object-contain grayscale opacity-50 group-hover:opacity-80 group-hover:grayscale-0 transition-all duration-400"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
