"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navigation = [
    {
      name: "Soluciones",
      href: "#soluciones",
      dropdown: [
        { name: "KYC - Personas", href: "#kyc" },
        { name: "KYB - Empresas", href: "#kyb" },
        { name: "Firma Electrónica", href: "#firma" },
      ],
    },
    {
      name: "Cumplimiento",
      href: "#cumplimiento",
      dropdown: [
        { name: "LFPIORPI", href: "#lfpiorpi" },
        { name: "AML/CFT", href: "#aml" },
        { name: "CNBV", href: "#cnbv" },
      ],
    },
    {
      name: "Recursos",
      href: "#recursos",
      dropdown: [
        { name: "Documentación", href: "https://docs.jaak.ai" },
        { name: "API Reference", href: "https://docs.jaak.ai/api" },
        { name: "Sandbox", href: "https://sandbox.jaak.ai" },
      ],
    },
    { name: "Precios", href: "#precios" },
  ];

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      scrolled
        ? "bg-[#0a0f1c]/95 backdrop-blur-xl border-b border-white/10"
        : "bg-transparent"
    }`}>
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <Image
              src="/images/logos/jaak-logo-azul.png"
              alt="JAAK"
              width={140}
              height={56}
              className="h-12 w-auto brightness-0 invert"
              priority
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-8">
            {navigation.map((item) => (
              <div
                key={item.name}
                className="relative"
                onMouseEnter={() => item.dropdown && setActiveDropdown(item.name)}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                <Link
                  href={item.href}
                  className="text-white/70 hover:text-white font-medium transition-colors flex items-center gap-1 text-sm"
                >
                  {item.name}
                  {item.dropdown && (
                    <svg
                      className="w-4 h-4"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M19 9l-7 7-7-7"
                      />
                    </svg>
                  )}
                </Link>
                {item.dropdown && activeDropdown === item.name && (
                  <div className="absolute top-full left-0 mt-2 w-52 bg-[#0d1321] rounded-xl shadow-2xl border border-white/10 py-2">
                    {item.dropdown.map((subItem) => (
                      <Link
                        key={subItem.name}
                        href={subItem.href}
                        className="block px-4 py-2.5 text-white/70 hover:text-white hover:bg-white/5 transition-colors text-sm"
                      >
                        {subItem.name}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* CTA Buttons */}
          <div className="hidden lg:flex items-center gap-4">
            <Link
              href="https://platform.jaak.ai"
              className="text-white/70 hover:text-white font-medium text-sm transition-colors"
            >
              Iniciar sesión
            </Link>
            <Link
              href="#contacto"
              className="px-5 py-2.5 bg-[#2DB6C1] text-white font-semibold text-sm rounded-lg hover:bg-[#25969f] transition-all"
            >
              Solicitar demo
            </Link>
          </div>

          {/* Mobile menu button */}
          <button
            className="lg:hidden p-2"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Menu"
          >
            {mobileMenuOpen ? (
              <svg
                className="w-6 h-6 text-white"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            ) : (
              <svg
                className="w-6 h-6 text-white"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden border-t border-white/10 py-4 bg-[#0a0f1c]/95 backdrop-blur-xl">
            {navigation.map((item) => (
              <div key={item.name} className="py-2">
                <Link
                  href={item.href}
                  className="block text-white/70 hover:text-white font-medium py-2"
                  onClick={() => !item.dropdown && setMobileMenuOpen(false)}
                >
                  {item.name}
                </Link>
                {item.dropdown && (
                  <div className="pl-4 mt-1 space-y-1">
                    {item.dropdown.map((subItem) => (
                      <Link
                        key={subItem.name}
                        href={subItem.href}
                        className="block text-white/50 hover:text-white py-1 text-sm"
                        onClick={() => setMobileMenuOpen(false)}
                      >
                        {subItem.name}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
            <div className="pt-4 mt-4 border-t border-white/10 space-y-3">
              <Link
                href="https://platform.jaak.ai"
                className="block text-center text-white/70 hover:text-white font-medium py-2"
                onClick={() => setMobileMenuOpen(false)}
              >
                Iniciar sesión
              </Link>
              <Link
                href="#contacto"
                className="block text-center px-5 py-3 bg-[#2DB6C1] text-white font-semibold rounded-lg"
                onClick={() => setMobileMenuOpen(false)}
              >
                Solicitar demo
              </Link>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
