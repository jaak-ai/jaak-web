import Image from "next/image";
import Link from "next/link";

export default function Footer() {
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

  const legalLinks = [
    { name: "Política Integral de Calidad y Seguridad", href: "/politica-calidad" },
    { name: "Aviso de privacidad Colaboradores", href: "/privacidad-colaboradores" },
    { name: "Aviso de privacidad Candidatos", href: "/privacidad-candidatos" },
    { name: "Política de Calidad", href: "/politica-calidad" },
  ];

  return (
    <footer className="gradient-bg text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Logo and Certifications */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-8 mb-12">
          <Link href="/">
            <Image
              src="https://jaak.ai/hs-fs/hubfs/JAAK-Logo-Azul@2x.png?width=492&height=255&name=JAAK-Logo-Azul@2x.png"
              alt="JAAK"
              width={120}
              height={62}
              className="h-10 w-auto brightness-0 invert"
            />
          </Link>
          <div className="flex flex-wrap gap-4">
            {certifications.map((cert) => (
              <div key={cert.name} className="bg-white/10 rounded-lg p-2">
                <Image
                  src={cert.logo}
                  alt={cert.name}
                  width={40}
                  height={40}
                  className="h-8 w-8 object-contain"
                />
              </div>
            ))}
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-white/20 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
            {/* Copyright */}
            <p className="text-white/60 text-sm">
              Copyright © {new Date().getFullYear()} JAAK-IT, Ciudad de México
            </p>

            {/* Legal Links */}
            <div className="flex flex-wrap gap-6">
              {legalLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className="text-white/60 hover:text-white text-sm transition-colors"
                >
                  {link.name}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
