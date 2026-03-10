import Image from "next/image";

export default function ClientLogos() {
  const clients = [
    { name: "Círculo de Beneficios", logo: "/images/clients/circulo-de-beneficios.jpg" },
    { name: "Colectivo Moda",        logo: "/images/clients/colectivo-moda.jpg" },
    { name: "Creamigas",             logo: "/images/clients/creamigas.jpg" },
    { name: "Fital",                 logo: "/images/clients/fital.jpg" },
    { name: "Grupo Bafar",           logo: "/images/clients/grupo-bafar.jpg" },
    { name: "Grupo La Campana",      logo: "/images/clients/grupo-la-campana.jpg" },
    { name: "IESISA",                logo: "/images/clients/iesisa.jpg" },
    { name: "Lerco",                 logo: "/images/clients/lerco.jpg" },
    { name: "OLR Leasing",           logo: "/images/clients/olr-leasing.jpg" },
    { name: "Préstamos con Suerte",  logo: "/images/clients/prestamos-con-suerte.jpg" },
    { name: "SharedFi",              logo: "/images/clients/sharedfi.jpg" },
    { name: "Vextor",                logo: "/images/clients/vextor.jpg" },
  ];

  return (
    <section className="py-14 relative" style={{ background: "#F4FBFC" }}>
      {/* top & bottom hair lines */}
      <div className="absolute top-0 inset-x-0 h-px" style={{ background: "linear-gradient(to right, transparent, rgba(45,182,193,0.18), transparent)" }} />
      <div className="absolute bottom-0 inset-x-0 h-px" style={{ background: "linear-gradient(to right, transparent, rgba(45,182,193,0.18), transparent)" }} />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <p className="text-center text-xs font-semibold uppercase tracking-[0.20em] mb-8" style={{ color: "#94A3B8" }}>
          Empresas que confían en JAAK
        </p>
        <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-3">
          {clients.map((client) => (
            <div
              key={client.name}
              className="group flex items-center justify-center p-4 rounded-2xl transition-all duration-300 hover:-translate-y-0.5"
              style={{
                background: "rgba(255,255,255,0.80)",
                border: "1px solid rgba(45,182,193,0.10)",
                boxShadow: "0 2px 8px rgba(33,42,69,0.04)",
                backdropFilter: "blur(8px)",
              }}
            >
              <Image
                src={client.logo}
                alt={client.name}
                width={110}
                height={55}
                className="object-contain grayscale opacity-50 group-hover:opacity-90 group-hover:grayscale-0 transition-all duration-300"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
