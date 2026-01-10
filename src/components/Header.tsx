"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";

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

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      scrolled
        ? "bg-white/95 backdrop-blur-xl border-b border-[#e5e7eb] shadow-sm"
        : "bg-white"
    }`}>
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <Image
              src="/images/logos/jaak-logo-azul.png"
              alt="JAAK"
              width={100}
              height={40}
              className="h-8 w-auto"
              priority
            />
          </Link>

          {/* CTA Button */}
          <div className="flex items-center gap-4">
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
              Solicitar evaluación
            </Link>
          </div>
        </div>
      </nav>
    </header>
  );
}
