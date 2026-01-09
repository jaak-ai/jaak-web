import Image from "next/image";

export default function Certifications() {
  const certifications = [
    { name: "ISO 27001", logo: "https://jaak.ai/images/certifications/iso-27001.png" },
    { name: "ISO 9001", logo: "https://jaak.ai/images/certifications/iso-9001.png" },
    { name: "iBeta Level 1", logo: "https://jaak.ai/images/certifications/ibeta.png" },
    { name: "NIST", logo: "https://jaak.ai/images/certifications/nist.png" },
    { name: "IQNET", logo: "https://jaak.ai/images/certifications/iqnet.png" },
    { name: "Distintivo Oro", logo: "https://jaak.ai/images/certifications/distintivo-oro.png" },
    { name: "Hecho en México", logo: "https://jaak.ai/images/certifications/hecho-en-mexico.png" },
  ];

  return (
    <section className="section-padding gradient-bg text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Certificaciones
          </h2>
          <p className="text-xl text-white/80 max-w-3xl mx-auto">
            Nuestras certificaciones avalan nuestra excelencia en calidad, seguridad y cumplimiento.
          </p>
        </div>

        <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12">
          {certifications.map((cert) => (
            <div
              key={cert.name}
              className="bg-white/10 backdrop-blur-sm rounded-lg p-4 hover:bg-white/20 transition-all"
            >
              <Image
                src={cert.logo}
                alt={cert.name}
                width={100}
                height={80}
                className="h-16 w-auto object-contain filter brightness-0 invert"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
