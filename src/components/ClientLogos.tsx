import Image from "next/image";

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

export default function ClientLogos() {
  return (
    <section className="hp-bg-logos py-12 overflow-hidden">
      <p
        className="text-center text-xs font-semibold uppercase tracking-[0.20em] mb-8"
        style={{ color: "var(--hp-text-lo)" }}
      >
        Empresas que confían en JAAK
      </p>

      {/* Marquee container */}
      <div className="relative">
        {/* Fade edges */}
        <div
          className="absolute left-0 top-0 bottom-0 w-24 z-10 pointer-events-none"
          style={{ background: "linear-gradient(to right, var(--hp-logos-fade, #141a3a), transparent)" }}
        />
        <div
          className="absolute right-0 top-0 bottom-0 w-24 z-10 pointer-events-none"
          style={{ background: "linear-gradient(to left, var(--hp-logos-fade, #141a3a), transparent)" }}
        />

        {/* Scrolling track — duplicated for seamless loop */}
        <div className="hp-marquee-track">
          {[...clients, ...clients].map((client, i) => (
            <div
              key={i}
              className="group flex items-center justify-center mx-3 px-5 py-3 rounded-2xl flex-shrink-0 transition-all duration-300"
              style={{
                background: "var(--hp-pill-bg)",
                border: "1px solid var(--hp-pill-border)",
                width: "140px",
                height: "72px",
              }}
            >
              <Image
                src={client.logo}
                alt={client.name}
                width={110}
                height={48}
                className="object-contain grayscale opacity-40 group-hover:opacity-80 group-hover:grayscale-0 transition-all duration-300"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
