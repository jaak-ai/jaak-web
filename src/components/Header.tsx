"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  const navigation = [
    {
      name: "Productos",
      href: "#productos",
      dropdown: [{ name: "KYC", href: "#kyc" }],
    },
    {
      name: "Sobre JAAK",
      href: "#sobre-jaak",
      dropdown: [
        { name: "Quiénes Somos", href: "#quienes-somos" },
        { name: "Únete al equipo", href: "#unete" },
        { name: "Políticas", href: "#politicas" },
      ],
    },
    { name: "Novedades", href: "#novedades" },
    { name: "Contacto", href: "#contacto" },
    {
      name: "Recursos",
      href: "#recursos",
      dropdown: [
        { name: "Soporte", href: "https://soporte.jaak.ai" },
        { name: "Documentación", href: "https://docs.jaak.ai" },
        { name: "Sandbox", href: "https://sandbox.jaak.ai" },
        { name: "Producción", href: "https://app.jaak.ai" },
        { name: "GitHub", href: "https://github.com/jaak-ai" },
      ],
    },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b border-[#EEEEEE]">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <Image
              src="/images/logos/jaak-logo-azul.png"
              alt="JAAK"
              width={140}
              height={72}
              className="h-12 w-auto"
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
                  className="text-[#53535B] hover:text-[#212A45] font-medium transition-colors flex items-center gap-1"
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
                  <div className="absolute top-full left-0 mt-2 w-48 bg-white rounded-lg shadow-lg border border-[#EEEEEE] py-2">
                    {item.dropdown.map((subItem) => (
                      <Link
                        key={subItem.name}
                        href={subItem.href}
                        className="block px-4 py-2 text-[#53535B] hover:text-[#212A45] hover:bg-gray-50 transition-colors"
                      >
                        {subItem.name}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* CTA Button */}
          <div className="hidden lg:block">
            <Link href="#contacto" className="btn-cyan">
              Agendar demo
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
                className="w-6 h-6 text-[#212A45]"
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
                className="w-6 h-6 text-[#212A45]"
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
          <div className="lg:hidden border-t border-[#EEEEEE] py-4">
            {navigation.map((item) => (
              <div key={item.name} className="py-2">
                <Link
                  href={item.href}
                  className="block text-[#53535B] hover:text-[#212A45] font-medium py-2"
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
                        className="block text-[#666666] hover:text-[#212A45] py-1 text-sm"
                        onClick={() => setMobileMenuOpen(false)}
                      >
                        {subItem.name}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
            <div className="pt-4 mt-4 border-t border-[#EEEEEE]">
              <Link
                href="#contacto"
                className="btn-cyan block text-center"
                onClick={() => setMobileMenuOpen(false)}
              >
                Agendar demo
              </Link>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
