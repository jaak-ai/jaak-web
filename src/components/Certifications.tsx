import Image from "next/image";

export default function Certifications() {
  const certifications = [
    {
      name: "ISO 27001",
      logo: "https://jaak.ai/hs-fs/hubfs/JAAK-OrganizacionCertificada-ISO-27001.png?width=962&height=962"
    },
    {
      name: "ISO 9001",
      logo: "https://jaak.ai/hs-fs/hubfs/JAAK-OrganizacionCertificada-ISO-9001.png?width=962&height=962"
    },
    {
      name: "iBeta Level 1",
      logo: "https://jaak.ai/hs-fs/hubfs/JAAK-OrganizacionCertificada-iBeta-Level-1.png?width=962&height=962"
    },
    {
      name: "NIST",
      logo: "https://jaak.ai/hs-fs/hubfs/JAAK-OrganizacionCertificada-NIST.png?width=962&height=962"
    },
    {
      name: "IQNET",
      logo: "https://jaak.ai/hs-fs/hubfs/JAAK-OrganizacionCertificada-IQNET.png?width=962&height=962"
    },
    {
      name: "Distintivo Oro",
      logo: "https://jaak.ai/hs-fs/hubfs/JAAK-OrganizacionCertificada-Distintivo-Oro.png?width=962&height=962"
    },
    {
      name: "Hecho en México",
      logo: "https://jaak.ai/hs-fs/hubfs/JAAK-OrganizacionCertificada-Hecho-En-Mexico-1.png?width=962&height=962"
    },
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
                height={100}
                className="h-20 w-20 object-contain"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
