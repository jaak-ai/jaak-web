"use client";

import { useRef, useState } from "react";
import type { ReactNode } from "react";
import Link from "next/link";
import MegaMenu from "./MegaMenu";
import { megaMenus, simpleNavLinks, type MegaMenuId } from "@/config/navigation";

/** Orden de los triggers de escritorio: Plataforma, Soluciones, Recursos,
 *  Precios, Cumplimiento — igual que en el Header.tsx original (distinto
 *  del orden de secciones del acordeón móvil, ver MobileNavigation.tsx). */
const DESKTOP_TRIGGER_ORDER: (MegaMenuId | { simpleLinkId: string })[] = [
  "platform",
  "solutions",
  "resources",
  { simpleLinkId: "precios" },
  "compliance",
];

/**
 * Navegación de escritorio (triggers + mega menús), extraída de Header.tsx.
 * Reproduce el mismo comportamiento de hover con cierre diferido (150ms)
 * que ya existía. Los paneles usan `position:fixed`, así que colocarlos
 * anidados aquí (en vez de como hermanos de <header>, como en el original)
 * no cambia su posición visual — ningún ancestro define un containing
 * block (no hay transform/filter/contain en el árbol).
 */
export default function DesktopNavigation({ children }: { children?: ReactNode }) {
  const [activeDropdown, setActiveDropdown] = useState<MegaMenuId | null>(null);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  const handleMouseEnter = (id: MegaMenuId) => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
      timeoutRef.current = null;
    }
    setActiveDropdown(id);
  };

  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => {
      setActiveDropdown(null);
    }, 150);
  };

  return (
    <>
      <div className="hidden lg:flex items-center gap-1">
        {DESKTOP_TRIGGER_ORDER.map((slot) => {
          if (typeof slot === "object") {
            const link = simpleNavLinks.find((l) => l.id === slot.simpleLinkId);
            if (!link || !link.visibility.desktop) return null;
            return (
              <Link
                key={link.id}
                href={link.href}
                className="px-4 py-2 text-[15px] font-medium text-gray-700 hover:text-[#0066ff] transition-colors"
              >
                {link.label}
              </Link>
            );
          }

          const menu = megaMenus.find((m) => m.id === slot);
          if (!menu) return null;
          return (
            <div
              key={menu.id}
              className="relative"
              onMouseEnter={() => handleMouseEnter(menu.id)}
              onMouseLeave={handleMouseLeave}
            >
              <button
                className={`flex items-center gap-1.5 px-4 py-2 text-[15px] font-medium transition-colors ${
                  activeDropdown === menu.id ? "text-[#0066ff]" : "text-gray-700 hover:text-[#0066ff]"
                }`}
              >
                {menu.triggerLabel}
                <svg
                  className={`w-4 h-4 transition-transform duration-200 ${
                    activeDropdown === menu.id ? "rotate-180" : ""
                  }`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
            </div>
          );
        })}

        {children}
      </div>

      <div
        className={`fixed top-[114px] left-0 right-0 z-40 transition-all duration-200 ${
          activeDropdown ? "opacity-100 visible" : "opacity-0 invisible pointer-events-none"
        }`}
        onMouseEnter={() => {
          if (timeoutRef.current) {
            clearTimeout(timeoutRef.current);
            timeoutRef.current = null;
          }
        }}
        onMouseLeave={handleMouseLeave}
      >
        {megaMenus.map((menu) => (
          <MegaMenu key={menu.id} menu={menu} active={activeDropdown === menu.id} />
        ))}
      </div>
    </>
  );
}
