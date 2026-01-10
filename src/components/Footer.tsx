import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  const footerLinks = {
    platform: {
      title: "Plataforma",
      links: [
        { name: "KYC", href: "#kyc" },
        { name: "KYB", href: "#kyb" },
        { name: "Firma Electrónica", href: "#firma" },
        { name: "Onboarding Digital", href: "#onboarding" },
        { name: "API & SDKs", href: "https://docs.jaak.ai" },
      ],
    },
    useCases: {
      title: "Casos de Uso",
      links: [
        { name: "Fintech", href: "#fintech" },
        { name: "Banca", href: "#banca" },
        { name: "Seguros", href: "#seguros" },
        { name: "Inmobiliario", href: "#inmobiliario" },
        { name: "Legal", href: "#legal" },
      ],
    },
    compliance: {
      title: "Cumplimiento",
      links: [
        { name: "LFPIORPI", href: "#lfpiorpi" },
        { name: "AML / CFT", href: "#aml" },
        { name: "CNBV", href: "#cnbv" },
        { name: "NOM-151", href: "#nom151" },
        { name: "GDPR", href: "#gdpr" },
      ],
    },
    resources: {
      title: "Recursos",
      links: [
        { name: "Documentación", href: "https://docs.jaak.ai" },
        { name: "API Reference", href: "https://docs.jaak.ai/api" },
        { name: "Sandbox", href: "https://sandbox.jaak.ai" },
        { name: "Status", href: "https://status.jaak.ai" },
        { name: "Blog", href: "#blog" },
      ],
    },
    company: {
      title: "Empresa",
      links: [
        { name: "Sobre nosotros", href: "#sobre" },
        { name: "Carreras", href: "#carreras" },
        { name: "Contacto", href: "#contacto" },
        { name: "Socios", href: "#socios" },
        { name: "Prensa", href: "#prensa" },
      ],
    },
  };

  const socialLinks = [
    {
      name: "LinkedIn",
      href: "https://linkedin.com/company/jaak-ai",
      icon: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
        </svg>
      ),
    },
    {
      name: "GitHub",
      href: "https://github.com/jaak-ai",
      icon: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
        </svg>
      ),
    },
    {
      name: "Twitter",
      href: "https://twitter.com/jaak_ai",
      icon: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
        </svg>
      ),
    },
    {
      name: "YouTube",
      href: "https://youtube.com/@jaak-ai",
      icon: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
        </svg>
      ),
    },
  ];

  return (
    <footer className="bg-[#0a0a0a]">
      {/* Main footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 border-t border-white/10">
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-7 gap-8 lg:gap-12">
          {/* Logo and social */}
          <div className="col-span-2 sm:col-span-3 lg:col-span-2">
            <Link href="/" className="inline-block mb-6">
              <Image
                src="/images/logos/jaak-logo-azul.png"
                alt="JAAK"
                width={100}
                height={40}
                className="h-8 w-auto brightness-0 invert"
              />
            </Link>
            <p className="text-white/50 text-sm mb-6 leading-relaxed">
              La infraestructura de identidad regulada para empresas que necesitan cumplimiento real.
            </p>
            {/* Social links */}
            <div className="flex gap-2">
              {socialLinks.map((social) => (
                <Link
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 rounded-full flex items-center justify-center text-white/50 hover:text-white hover:bg-white/10 transition-all"
                  aria-label={social.name}
                >
                  {social.icon}
                </Link>
              ))}
            </div>
          </div>

          {/* Link columns */}
          {Object.values(footerLinks).map((section) => (
            <div key={section.title}>
              <h3 className="font-semibold text-white text-sm mb-4">{section.title}</h3>
              <ul className="space-y-3">
                {section.links.map((link) => (
                  <li key={link.name}>
                    <Link
                      href={link.href}
                      className="text-white/50 hover:text-white text-sm transition-colors"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-6">
            {/* Left side - certifications and address */}
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
              <div className="flex items-center gap-3">
                <span className="px-2.5 py-1 bg-white/5 text-white/60 text-xs font-medium rounded border border-white/10">ISO 27001</span>
                <span className="px-2.5 py-1 bg-white/5 text-white/60 text-xs font-medium rounded border border-white/10">SOC 2</span>
                <span className="px-2.5 py-1 bg-white/5 text-white/60 text-xs font-medium rounded border border-white/10">iBeta</span>
              </div>
              <span className="text-white/40 text-sm">Ciudad de México, México</span>
            </div>

            {/* Right side - legal links */}
            <div className="flex flex-wrap items-center gap-6">
              <Link href="/privacidad" className="text-white/50 hover:text-white text-sm transition-colors">
                Privacidad
              </Link>
              <Link href="/terminos" className="text-white/50 hover:text-white text-sm transition-colors">
                Términos
              </Link>
              <Link href="/cookies" className="text-white/50 hover:text-white text-sm transition-colors">
                Cookies
              </Link>
              <Link href="/seguridad" className="text-white/50 hover:text-white text-sm transition-colors">
                Seguridad
              </Link>
              <span className="text-white/40 text-sm">
                © {new Date().getFullYear()} JAAK IT SAPI de CV
              </span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
