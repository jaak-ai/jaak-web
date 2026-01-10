"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";

type DropdownKey = "platform" | "useCases" | "compliance" | "resources" | null;

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<DropdownKey>(null);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleMouseEnter = (dropdown: DropdownKey) => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
    setActiveDropdown(dropdown);
  };

  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => {
      setActiveDropdown(null);
    }, 150);
  };

  const navigation = {
    platform: {
      label: "Plataforma",
      items: [
        { name: "Verificación de identidad", description: "KYC biométrico con prueba de vida", href: "#" },
        { name: "Verificación empresarial", description: "KYB para personas morales", href: "#" },
        { name: "Firma electrónica", description: "Firma con validez legal", href: "#" },
        { name: "Gestión de evidencia", description: "Auditoría y trazabilidad completa", href: "#" },
      ],
    },
    useCases: {
      label: "Casos de uso",
      items: [
        { name: "Instituciones financieras", description: "Onboarding conforme a regulación", href: "#" },
        { name: "Empresas reguladas", description: "Control de identidad en procesos críticos", href: "#" },
        { name: "Operaciones de alto riesgo", description: "Eliminación de procesos manuales", href: "#" },
      ],
    },
    compliance: {
      label: "Cumplimiento",
      items: [
        { name: "ISO 27001", description: "Seguridad de la información", href: "#" },
        { name: "ISO 9001", description: "Gestión de calidad", href: "#" },
        { name: "iBeta Level 1", description: "Prueba de vida certificada", href: "#" },
      ],
    },
    resources: {
      label: "Recursos",
      items: [
        { name: "Documentación", description: "Guías técnicas y API", href: "#" },
        { name: "Blog", description: "Artículos y novedades", href: "#" },
        { name: "Contacto", description: "Habla con nuestro equipo", href: "#contacto" },
      ],
    },
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/95 backdrop-blur-xl border-b border-[#e5e7eb] shadow-sm"
          : "bg-white"
      }`}
    >
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center flex-shrink-0">
            <Image
              src="/images/logos/jaak-logo-azul.png"
              alt="JAAK"
              width={100}
              height={40}
              className="h-8 w-auto"
              priority
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-1">
            {(Object.keys(navigation) as DropdownKey[]).filter(Boolean).map((key) => {
              const item = navigation[key as keyof typeof navigation];
              return (
                <div
                  key={key}
                  className="relative"
                  onMouseEnter={() => handleMouseEnter(key)}
                  onMouseLeave={handleMouseLeave}
                >
                  <button className="flex items-center gap-1 px-4 py-2 text-sm font-medium text-[#374151] hover:text-[#0a0f1c] transition-colors">
                    {item.label}
                    <svg
                      className={`w-4 h-4 transition-transform ${activeDropdown === key ? "rotate-180" : ""}`}
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </button>

                  {/* Dropdown */}
                  {activeDropdown === key && (
                    <div className="absolute top-full left-0 mt-1 w-72 bg-white rounded-xl shadow-lg border border-[#e5e7eb] py-2 z-50">
                      {item.items.map((subItem) => (
                        <Link
                          key={subItem.name}
                          href={subItem.href}
                          className="block px-4 py-3 hover:bg-[#f9fafb] transition-colors"
                        >
                          <div className="text-sm font-medium text-[#0a0f1c]">{subItem.name}</div>
                          <div className="text-xs text-[#6b7280] mt-0.5">{subItem.description}</div>
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          {/* Right side buttons */}
          <div className="flex items-center gap-3">
            <Link
              href="https://platform.jaak.ai"
              className="hidden sm:block text-[#4b5563] hover:text-[#0a0f1c] font-medium text-sm transition-colors"
            >
              Iniciar sesión
            </Link>
            <Link
              href="/contact?type=regulatory-review"
              className="px-4 py-2 bg-[#0a0f1c] text-white font-semibold text-sm rounded-lg hover:bg-[#1a2744] transition-all"
            >
              Solicitar revisión
            </Link>

            {/* Mobile menu button */}
            <button
              className="lg:hidden p-2 text-[#374151] hover:text-[#0a0f1c]"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                {mobileMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden border-t border-[#e5e7eb] py-4">
            {(Object.keys(navigation) as DropdownKey[]).filter(Boolean).map((key) => {
              const item = navigation[key as keyof typeof navigation];
              return (
                <div key={key} className="py-2">
                  <div className="px-4 py-2 text-sm font-semibold text-[#0a0f1c]">{item.label}</div>
                  {item.items.map((subItem) => (
                    <Link
                      key={subItem.name}
                      href={subItem.href}
                      className="block px-6 py-2 text-sm text-[#4b5563] hover:text-[#0a0f1c] hover:bg-[#f9fafb]"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      {subItem.name}
                    </Link>
                  ))}
                </div>
              );
            })}
            <div className="px-4 pt-4 border-t border-[#e5e7eb] mt-2">
              <Link
                href="https://platform.jaak.ai"
                className="block py-2 text-sm text-[#4b5563] hover:text-[#0a0f1c]"
              >
                Iniciar sesión
              </Link>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
