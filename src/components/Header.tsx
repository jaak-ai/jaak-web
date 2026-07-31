"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import UrgentBanner from "./UrgentBanner";
import DesktopNavigation from "./navigation/DesktopNavigation";
import MobileNavigation from "./navigation/MobileNavigation";
import NavigationCTA from "./navigation/NavigationCTA";

/** Nombre del evento custom que avisa a widgets flotantes independientes
 *  (FloatingDemoWidget, MobileStickyCTA) que el menú móvil está abierto,
 *  para que se oculten temporalmente y no se superpongan con el panel. */
export const MOBILE_NAV_STATE_EVENT = "jaak:mobile-nav-open-change";

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    window.dispatchEvent(new CustomEvent(MOBILE_NAV_STATE_EVENT, { detail: { open: mobileMenuOpen } }));
  }, [mobileMenuOpen]);

  return (
    <>
      {/* Urgent Banner */}
      <div className="fixed top-0 left-0 right-0 z-50">
        <UrgentBanner />
      </div>

      <header
        className={`fixed top-[42px] left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? "bg-white/95 backdrop-blur-xl border-b border-gray-200 shadow-sm"
            : "bg-white border-b border-gray-100"
        }`}
      >
        <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-[72px]">
            {/* Logo */}
            <Link href="/" className="flex items-center flex-shrink-0 min-w-0">
              <Image
                src="/images/logos/jaak-logo-azul.png"
                alt="JAAK"
                width={120}
                height={48}
                className="h-7 sm:h-10 w-auto"
                priority
              />
            </Link>

            {/* Desktop Navigation: Productos, Soluciones, Precios, Recursos, Cumplimiento */}
            <DesktopNavigation />

            {/* Right side buttons: Iniciar sesión, Comprar */}
            <div className="flex items-center gap-1.5 sm:gap-4 flex-shrink-0">
              <NavigationCTA />

              {/* Mobile menu button */}
              <button
                type="button"
                aria-label={mobileMenuOpen ? "Cerrar menú" : "Abrir menú"}
                aria-expanded={mobileMenuOpen}
                className="lg:hidden min-w-[44px] min-h-[44px] flex items-center justify-center text-gray-700 hover:text-[#0066ff] flex-shrink-0"
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

        <MobileNavigation open={mobileMenuOpen} onClose={() => setMobileMenuOpen(false)} />
      </header>
    </>
  );
}
