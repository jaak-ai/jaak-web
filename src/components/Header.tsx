"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";

type DropdownKey = "platform" | "solutions" | "resources" | null;

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<DropdownKey>(null);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleMouseEnter = (dropdown: DropdownKey) => {
    setActiveDropdown(dropdown);
  };

  const handleMouseLeave = () => {
    setActiveDropdown(null);
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? "bg-white/95 backdrop-blur-xl border-b border-[#e5e7eb] shadow-sm"
            : "bg-white border-b border-transparent"
        }`}
      >
        <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-[72px]">
            {/* Logo */}
            <Link href="/" className="flex items-center flex-shrink-0">
              <Image
                src="/images/logos/jaak-logo-azul.png"
                alt="JAAK"
                width={120}
                height={48}
                className="h-9 w-auto"
                priority
              />
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center gap-1">
              {/* Platform Dropdown */}
              <div
                className="relative"
                onMouseEnter={() => handleMouseEnter("platform")}
                onMouseLeave={handleMouseLeave}
              >
                <button className={`flex items-center gap-1.5 px-4 py-2 text-[15px] font-medium transition-colors ${
                  activeDropdown === "platform" ? "text-[#0a0f1c]" : "text-[#4b5563] hover:text-[#0a0f1c]"
                }`}>
                  Plataforma
                  <svg
                    className={`w-4 h-4 transition-transform duration-200 ${activeDropdown === "platform" ? "rotate-180" : ""}`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
              </div>

              {/* Solutions Dropdown */}
              <div
                className="relative"
                onMouseEnter={() => handleMouseEnter("solutions")}
                onMouseLeave={handleMouseLeave}
              >
                <button className={`flex items-center gap-1.5 px-4 py-2 text-[15px] font-medium transition-colors ${
                  activeDropdown === "solutions" ? "text-[#0a0f1c]" : "text-[#4b5563] hover:text-[#0a0f1c]"
                }`}>
                  Soluciones
                  <svg
                    className={`w-4 h-4 transition-transform duration-200 ${activeDropdown === "solutions" ? "rotate-180" : ""}`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
              </div>

              {/* Resources Dropdown */}
              <div
                className="relative"
                onMouseEnter={() => handleMouseEnter("resources")}
                onMouseLeave={handleMouseLeave}
              >
                <button className={`flex items-center gap-1.5 px-4 py-2 text-[15px] font-medium transition-colors ${
                  activeDropdown === "resources" ? "text-[#0a0f1c]" : "text-[#4b5563] hover:text-[#0a0f1c]"
                }`}>
                  Recursos
                  <svg
                    className={`w-4 h-4 transition-transform duration-200 ${activeDropdown === "resources" ? "rotate-180" : ""}`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
              </div>

              {/* Cumplimiento - Direct link */}
              <Link
                href="#compliance"
                className="px-4 py-2 text-[15px] font-medium text-[#4b5563] hover:text-[#0a0f1c] transition-colors"
              >
                Cumplimiento
              </Link>
            </div>

            {/* Right side buttons */}
            <div className="flex items-center gap-4">
              <Link
                href="https://platform.jaak.ai"
                className="hidden sm:block text-[#4b5563] hover:text-[#0a0f1c] font-medium text-[15px] transition-colors"
              >
                Iniciar sesión
              </Link>
              <Link
                href="/contact?type=regulatory-review"
                className="px-5 py-2.5 bg-[#0a0f1c] text-white font-semibold text-[15px] rounded-lg hover:bg-[#1a2744] transition-all"
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
        </nav>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden bg-white border-t border-[#e5e7eb] max-h-[calc(100vh-72px)] overflow-y-auto">
            <div className="px-4 py-6 space-y-6">
              {/* Platform Section */}
              <div>
                <h3 className="text-xs font-bold text-[#9ca3af] uppercase tracking-wider mb-3">Plataforma</h3>
                <div className="space-y-3">
                  <Link href="#" className="block text-[#374151] hover:text-[#0a0f1c]" onClick={() => setMobileMenuOpen(false)}>
                    Verificación de identidad
                  </Link>
                  <Link href="#" className="block text-[#374151] hover:text-[#0a0f1c]" onClick={() => setMobileMenuOpen(false)}>
                    Verificación empresarial (KYB)
                  </Link>
                  <Link href="#" className="block text-[#374151] hover:text-[#0a0f1c]" onClick={() => setMobileMenuOpen(false)}>
                    Firma electrónica
                  </Link>
                  <Link href="#" className="block text-[#374151] hover:text-[#0a0f1c]" onClick={() => setMobileMenuOpen(false)}>
                    Gestión de evidencia
                  </Link>
                </div>
              </div>

              {/* Solutions Section */}
              <div>
                <h3 className="text-xs font-bold text-[#9ca3af] uppercase tracking-wider mb-3">Soluciones</h3>
                <div className="space-y-3">
                  <Link href="#" className="block text-[#374151] hover:text-[#0a0f1c]" onClick={() => setMobileMenuOpen(false)}>
                    Instituciones financieras
                  </Link>
                  <Link href="#" className="block text-[#374151] hover:text-[#0a0f1c]" onClick={() => setMobileMenuOpen(false)}>
                    Empresas reguladas
                  </Link>
                  <Link href="#" className="block text-[#374151] hover:text-[#0a0f1c]" onClick={() => setMobileMenuOpen(false)}>
                    Operaciones de alto riesgo
                  </Link>
                </div>
              </div>

              {/* Resources Section */}
              <div>
                <h3 className="text-xs font-bold text-[#9ca3af] uppercase tracking-wider mb-3">Recursos</h3>
                <div className="space-y-3">
                  <Link href="#" className="block text-[#374151] hover:text-[#0a0f1c]" onClick={() => setMobileMenuOpen(false)}>
                    Documentación
                  </Link>
                  <Link href="#" className="block text-[#374151] hover:text-[#0a0f1c]" onClick={() => setMobileMenuOpen(false)}>
                    Blog
                  </Link>
                  <Link href="#contacto" className="block text-[#374151] hover:text-[#0a0f1c]" onClick={() => setMobileMenuOpen(false)}>
                    Contacto
                  </Link>
                </div>
              </div>

              <div className="pt-4 border-t border-[#e5e7eb]">
                <Link
                  href="https://platform.jaak.ai"
                  className="block text-[#374151] hover:text-[#0a0f1c] mb-4"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Iniciar sesión
                </Link>
                <Link
                  href="/contact?type=regulatory-review"
                  className="block w-full text-center px-5 py-3 bg-[#0a0f1c] text-white font-semibold rounded-lg"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Solicitar revisión regulatoria
                </Link>
              </div>
            </div>
          </div>
        )}
      </header>

      {/* Mega Menu Dropdowns - Full Width */}
      <div
        className={`fixed top-[72px] left-0 right-0 z-40 transition-all duration-200 ${
          activeDropdown ? "opacity-100 visible" : "opacity-0 invisible pointer-events-none"
        }`}
        onMouseEnter={() => activeDropdown && setActiveDropdown(activeDropdown)}
        onMouseLeave={handleMouseLeave}
      >
        {/* Platform Mega Menu */}
        <div className={`bg-white border-b border-[#e5e7eb] shadow-[0_8px_24px_rgba(0,0,0,0.12)] ${
          activeDropdown === "platform" ? "block" : "hidden"
        }`}>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
            <div className="grid grid-cols-4 gap-8">
              {/* Products Column */}
              <div>
                <h3 className="text-xs font-bold text-[#9ca3af] uppercase tracking-wider mb-5">Productos</h3>
                <div className="space-y-5">
                  <Link href="#" className="group block">
                    <div className="flex items-start gap-4">
                      <div className="w-10 h-10 bg-[#f3f4f6] rounded-lg flex items-center justify-center flex-shrink-0 group-hover:bg-[#0a0f1c] transition-colors">
                        <svg className="w-5 h-5 text-[#0a0f1c] group-hover:text-white transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                        </svg>
                      </div>
                      <div>
                        <div className="text-[15px] font-semibold text-[#0a0f1c] group-hover:text-[#2563eb] transition-colors">Verificación de identidad</div>
                        <div className="text-sm text-[#6b7280] mt-0.5">KYC biométrico con prueba de vida</div>
                      </div>
                    </div>
                  </Link>
                  <Link href="#" className="group block">
                    <div className="flex items-start gap-4">
                      <div className="w-10 h-10 bg-[#f3f4f6] rounded-lg flex items-center justify-center flex-shrink-0 group-hover:bg-[#0a0f1c] transition-colors">
                        <svg className="w-5 h-5 text-[#0a0f1c] group-hover:text-white transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                        </svg>
                      </div>
                      <div>
                        <div className="text-[15px] font-semibold text-[#0a0f1c] group-hover:text-[#2563eb] transition-colors">Verificación empresarial</div>
                        <div className="text-sm text-[#6b7280] mt-0.5">KYB para personas morales</div>
                      </div>
                    </div>
                  </Link>
                </div>
              </div>

              {/* More Products Column */}
              <div>
                <h3 className="text-xs font-bold text-[#9ca3af] uppercase tracking-wider mb-5">&nbsp;</h3>
                <div className="space-y-5">
                  <Link href="#" className="group block">
                    <div className="flex items-start gap-4">
                      <div className="w-10 h-10 bg-[#f3f4f6] rounded-lg flex items-center justify-center flex-shrink-0 group-hover:bg-[#0a0f1c] transition-colors">
                        <svg className="w-5 h-5 text-[#0a0f1c] group-hover:text-white transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
                        </svg>
                      </div>
                      <div>
                        <div className="text-[15px] font-semibold text-[#0a0f1c] group-hover:text-[#2563eb] transition-colors">Firma electrónica</div>
                        <div className="text-sm text-[#6b7280] mt-0.5">Firma con validez legal completa</div>
                      </div>
                    </div>
                  </Link>
                  <Link href="#" className="group block">
                    <div className="flex items-start gap-4">
                      <div className="w-10 h-10 bg-[#f3f4f6] rounded-lg flex items-center justify-center flex-shrink-0 group-hover:bg-[#0a0f1c] transition-colors">
                        <svg className="w-5 h-5 text-[#0a0f1c] group-hover:text-white transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                        </svg>
                      </div>
                      <div>
                        <div className="text-[15px] font-semibold text-[#0a0f1c] group-hover:text-[#2563eb] transition-colors">Gestión de evidencia</div>
                        <div className="text-sm text-[#6b7280] mt-0.5">Auditoría y trazabilidad completa</div>
                      </div>
                    </div>
                  </Link>
                </div>
              </div>

              {/* Certifications Column */}
              <div>
                <h3 className="text-xs font-bold text-[#9ca3af] uppercase tracking-wider mb-5">Certificaciones</h3>
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 bg-[#f3f4f6] rounded-lg flex items-center justify-center">
                      <svg className="w-4 h-4 text-[#0a0f1c]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                      </svg>
                    </div>
                    <div>
                      <div className="text-sm font-medium text-[#0a0f1c]">ISO 27001</div>
                      <div className="text-xs text-[#6b7280]">Seguridad de información</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 bg-[#f3f4f6] rounded-lg flex items-center justify-center">
                      <svg className="w-4 h-4 text-[#0a0f1c]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                    <div>
                      <div className="text-sm font-medium text-[#0a0f1c]">ISO 9001</div>
                      <div className="text-xs text-[#6b7280]">Gestión de calidad</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 bg-[#f3f4f6] rounded-lg flex items-center justify-center">
                      <svg className="w-4 h-4 text-[#0a0f1c]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                      </svg>
                    </div>
                    <div>
                      <div className="text-sm font-medium text-[#0a0f1c]">iBeta Level 1</div>
                      <div className="text-xs text-[#6b7280]">Prueba de vida certificada</div>
                    </div>
                  </div>
                </div>
              </div>

              {/* CTA Column */}
              <div className="bg-[#f9fafb] rounded-xl p-6">
                <h3 className="text-lg font-bold text-[#0a0f1c] mb-2">¿Necesitas una evaluación?</h3>
                <p className="text-sm text-[#6b7280] mb-4">En 15 minutos te decimos si JAAK cumple lo que tu regulación exige.</p>
                <Link
                  href="/contact?type=regulatory-review"
                  className="inline-flex items-center justify-center w-full px-4 py-2.5 bg-[#0a0f1c] text-white font-semibold text-sm rounded-lg hover:bg-[#1a2744] transition-all"
                >
                  Solicitar revisión regulatoria
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Solutions Mega Menu */}
        <div className={`bg-white border-b border-[#e5e7eb] shadow-[0_8px_24px_rgba(0,0,0,0.12)] ${
          activeDropdown === "solutions" ? "block" : "hidden"
        }`}>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
            <div className="grid grid-cols-4 gap-8">
              {/* Industries Column */}
              <div>
                <h3 className="text-xs font-bold text-[#9ca3af] uppercase tracking-wider mb-5">Por industria</h3>
                <div className="space-y-5">
                  <Link href="#" className="group block">
                    <div className="flex items-start gap-4">
                      <div className="w-10 h-10 bg-[#f3f4f6] rounded-lg flex items-center justify-center flex-shrink-0 group-hover:bg-[#0a0f1c] transition-colors">
                        <svg className="w-5 h-5 text-[#0a0f1c] group-hover:text-white transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                      </div>
                      <div>
                        <div className="text-[15px] font-semibold text-[#0a0f1c] group-hover:text-[#2563eb] transition-colors">Instituciones financieras</div>
                        <div className="text-sm text-[#6b7280] mt-0.5">Onboarding conforme a regulación</div>
                      </div>
                    </div>
                  </Link>
                  <Link href="#" className="group block">
                    <div className="flex items-start gap-4">
                      <div className="w-10 h-10 bg-[#f3f4f6] rounded-lg flex items-center justify-center flex-shrink-0 group-hover:bg-[#0a0f1c] transition-colors">
                        <svg className="w-5 h-5 text-[#0a0f1c] group-hover:text-white transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                        </svg>
                      </div>
                      <div>
                        <div className="text-[15px] font-semibold text-[#0a0f1c] group-hover:text-[#2563eb] transition-colors">Empresas reguladas</div>
                        <div className="text-sm text-[#6b7280] mt-0.5">Control de identidad en procesos críticos</div>
                      </div>
                    </div>
                  </Link>
                  <Link href="#" className="group block">
                    <div className="flex items-start gap-4">
                      <div className="w-10 h-10 bg-[#f3f4f6] rounded-lg flex items-center justify-center flex-shrink-0 group-hover:bg-[#0a0f1c] transition-colors">
                        <svg className="w-5 h-5 text-[#0a0f1c] group-hover:text-white transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                        </svg>
                      </div>
                      <div>
                        <div className="text-[15px] font-semibold text-[#0a0f1c] group-hover:text-[#2563eb] transition-colors">Operaciones de alto riesgo</div>
                        <div className="text-sm text-[#6b7280] mt-0.5">Eliminación de procesos manuales</div>
                      </div>
                    </div>
                  </Link>
                </div>
              </div>

              {/* Use Cases Column */}
              <div>
                <h3 className="text-xs font-bold text-[#9ca3af] uppercase tracking-wider mb-5">Casos de uso</h3>
                <div className="space-y-5">
                  <Link href="#" className="group block">
                    <div className="flex items-start gap-4">
                      <div className="w-10 h-10 bg-[#f3f4f6] rounded-lg flex items-center justify-center flex-shrink-0 group-hover:bg-[#0a0f1c] transition-colors">
                        <svg className="w-5 h-5 text-[#0a0f1c] group-hover:text-white transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M18 9v3m0 0v3m0-3h3m-3 0h-3m-2-5a4 4 0 11-8 0 4 4 0 018 0zM3 20a6 6 0 0112 0v1H3v-1z" />
                        </svg>
                      </div>
                      <div>
                        <div className="text-[15px] font-semibold text-[#0a0f1c] group-hover:text-[#2563eb] transition-colors">Onboarding digital</div>
                        <div className="text-sm text-[#6b7280] mt-0.5">Alta de clientes 100% remoto</div>
                      </div>
                    </div>
                  </Link>
                  <Link href="#" className="group block">
                    <div className="flex items-start gap-4">
                      <div className="w-10 h-10 bg-[#f3f4f6] rounded-lg flex items-center justify-center flex-shrink-0 group-hover:bg-[#0a0f1c] transition-colors">
                        <svg className="w-5 h-5 text-[#0a0f1c] group-hover:text-white transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
                        </svg>
                      </div>
                      <div>
                        <div className="text-[15px] font-semibold text-[#0a0f1c] group-hover:text-[#2563eb] transition-colors">Firma de contratos</div>
                        <div className="text-sm text-[#6b7280] mt-0.5">Contratos con validez legal</div>
                      </div>
                    </div>
                  </Link>
                  <Link href="#" className="group block">
                    <div className="flex items-start gap-4">
                      <div className="w-10 h-10 bg-[#f3f4f6] rounded-lg flex items-center justify-center flex-shrink-0 group-hover:bg-[#0a0f1c] transition-colors">
                        <svg className="w-5 h-5 text-[#0a0f1c] group-hover:text-white transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                        </svg>
                      </div>
                      <div>
                        <div className="text-[15px] font-semibold text-[#0a0f1c] group-hover:text-[#2563eb] transition-colors">Prevención de fraude</div>
                        <div className="text-sm text-[#6b7280] mt-0.5">Detección en tiempo real</div>
                      </div>
                    </div>
                  </Link>
                </div>
              </div>

              {/* Benefits Column */}
              <div>
                <h3 className="text-xs font-bold text-[#9ca3af] uppercase tracking-wider mb-5">Resultados</h3>
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <svg className="w-5 h-5 text-[#0a0f1c]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-sm text-[#374151]">Menor exposición a sanciones</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <svg className="w-5 h-5 text-[#0a0f1c]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-sm text-[#374151]">Menos retrabajo en auditorías</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <svg className="w-5 h-5 text-[#0a0f1c]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-sm text-[#374151]">Procesos repetibles y defendibles</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <svg className="w-5 h-5 text-[#0a0f1c]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-sm text-[#374151]">Escalabilidad sin riesgo</span>
                  </div>
                </div>
              </div>

              {/* CTA Column */}
              <div className="bg-[#f9fafb] rounded-xl p-6">
                <h3 className="text-lg font-bold text-[#0a0f1c] mb-2">¿Tu proceso resistiría una auditoría?</h3>
                <p className="text-sm text-[#6b7280] mb-4">Diseñado para organizaciones sujetas a supervisión regulatoria.</p>
                <Link
                  href="/contact?type=regulatory-review"
                  className="inline-flex items-center justify-center w-full px-4 py-2.5 bg-[#0a0f1c] text-white font-semibold text-sm rounded-lg hover:bg-[#1a2744] transition-all"
                >
                  Solicitar revisión regulatoria
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Resources Mega Menu */}
        <div className={`bg-white border-b border-[#e5e7eb] shadow-[0_8px_24px_rgba(0,0,0,0.12)] ${
          activeDropdown === "resources" ? "block" : "hidden"
        }`}>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
            <div className="grid grid-cols-4 gap-8">
              {/* Learn Column */}
              <div>
                <h3 className="text-xs font-bold text-[#9ca3af] uppercase tracking-wider mb-5">Aprende</h3>
                <div className="space-y-5">
                  <Link href="#" className="group block">
                    <div className="flex items-start gap-4">
                      <div className="w-10 h-10 bg-[#f3f4f6] rounded-lg flex items-center justify-center flex-shrink-0 group-hover:bg-[#0a0f1c] transition-colors">
                        <svg className="w-5 h-5 text-[#0a0f1c] group-hover:text-white transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                        </svg>
                      </div>
                      <div>
                        <div className="text-[15px] font-semibold text-[#0a0f1c] group-hover:text-[#2563eb] transition-colors">Documentación</div>
                        <div className="text-sm text-[#6b7280] mt-0.5">Guías técnicas y referencia API</div>
                      </div>
                    </div>
                  </Link>
                  <Link href="#" className="group block">
                    <div className="flex items-start gap-4">
                      <div className="w-10 h-10 bg-[#f3f4f6] rounded-lg flex items-center justify-center flex-shrink-0 group-hover:bg-[#0a0f1c] transition-colors">
                        <svg className="w-5 h-5 text-[#0a0f1c] group-hover:text-white transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z" />
                        </svg>
                      </div>
                      <div>
                        <div className="text-[15px] font-semibold text-[#0a0f1c] group-hover:text-[#2563eb] transition-colors">Blog</div>
                        <div className="text-sm text-[#6b7280] mt-0.5">Artículos sobre compliance e identidad</div>
                      </div>
                    </div>
                  </Link>
                </div>
              </div>

              {/* Company Column */}
              <div>
                <h3 className="text-xs font-bold text-[#9ca3af] uppercase tracking-wider mb-5">Empresa</h3>
                <div className="space-y-5">
                  <Link href="#" className="group block">
                    <div className="flex items-start gap-4">
                      <div className="w-10 h-10 bg-[#f3f4f6] rounded-lg flex items-center justify-center flex-shrink-0 group-hover:bg-[#0a0f1c] transition-colors">
                        <svg className="w-5 h-5 text-[#0a0f1c] group-hover:text-white transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                        </svg>
                      </div>
                      <div>
                        <div className="text-[15px] font-semibold text-[#0a0f1c] group-hover:text-[#2563eb] transition-colors">Sobre nosotros</div>
                        <div className="text-sm text-[#6b7280] mt-0.5">Nuestra misión y equipo</div>
                      </div>
                    </div>
                  </Link>
                  <Link href="#contacto" className="group block">
                    <div className="flex items-start gap-4">
                      <div className="w-10 h-10 bg-[#f3f4f6] rounded-lg flex items-center justify-center flex-shrink-0 group-hover:bg-[#0a0f1c] transition-colors">
                        <svg className="w-5 h-5 text-[#0a0f1c] group-hover:text-white transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                        </svg>
                      </div>
                      <div>
                        <div className="text-[15px] font-semibold text-[#0a0f1c] group-hover:text-[#2563eb] transition-colors">Contacto</div>
                        <div className="text-sm text-[#6b7280] mt-0.5">Habla con nuestro equipo</div>
                      </div>
                    </div>
                  </Link>
                </div>
              </div>

              {/* Empty Column for spacing */}
              <div></div>

              {/* CTA Column */}
              <div className="bg-[#f9fafb] rounded-xl p-6">
                <h3 className="text-lg font-bold text-[#0a0f1c] mb-2">¿Tienes preguntas?</h3>
                <p className="text-sm text-[#6b7280] mb-4">Nuestro equipo está listo para ayudarte con tu proyecto de identidad.</p>
                <Link
                  href="#contacto"
                  className="inline-flex items-center justify-center w-full px-4 py-2.5 bg-[#0a0f1c] text-white font-semibold text-sm rounded-lg hover:bg-[#1a2744] transition-all"
                >
                  Contactar equipo
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
