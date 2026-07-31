"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { gtmEvent } from "@/components/GoogleTagManager";
import MegaMenu from "./MegaMenu";
import { megaMenus, simpleNavLinks, type MegaMenuId } from "@/config/navigation";

/** Orden de los triggers de escritorio: Productos, Soluciones, Precios,
 *  Recursos, Cumplimiento (Fase 1B). */
const DESKTOP_TRIGGER_ORDER: (MegaMenuId | { simpleLinkId: string })[] = [
  "products",
  "solutions",
  { simpleLinkId: "precios" },
  "resources",
  "compliance",
];

/**
 * Navegación de escritorio (triggers + mega menús), extraída de Header.tsx.
 *
 * Fase 1B: cada trigger y su panel viven en el mismo contenedor (en vez de
 * "todos los triggers" seguidos de "todos los paneles" como en Fase 1A) —
 * necesario para que Tab, al salir del panel abierto, continúe hacia el
 * siguiente trigger en vez de saltar primero por el resto de triggers. Los
 * paneles siguen usando `position:fixed`, así que esto no cambia su
 * posición visual.
 *
 * Los mega menús se abren con click/Enter/Espacio (nativo del <button>),
 * se cierran con Escape o al hacer click fuera, y el hover se conserva
 * como comportamiento adicional (abre al entrar, cierra 150ms después de
 * salir el mouse).
 */
export default function DesktopNavigation() {
  const [activeDropdown, setActiveDropdown] = useState<MegaMenuId | null>(null);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const triggerRefs = useRef<Partial<Record<MegaMenuId, HTMLButtonElement | null>>>({});

  const clearCloseTimeout = () => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
      timeoutRef.current = null;
    }
  };

  const openMenu = (id: MegaMenuId, source: "hover" | "click") => {
    clearCloseTimeout();
    setActiveDropdown((prev) => {
      if (prev !== id) {
        gtmEvent("nav_menu_open", { menu: id, source, page_path: window.location.pathname });
      }
      return id;
    });
  };

  const scheduleClose = () => {
    timeoutRef.current = setTimeout(() => setActiveDropdown(null), 150);
  };

  const handleTriggerClick = (id: MegaMenuId) => {
    if (activeDropdown === id) {
      setActiveDropdown(null);
    } else {
      openMenu(id, "click");
    }
  };

  // Escape cierra el menú activo y devuelve el foco a su trigger.
  useEffect(() => {
    if (!activeDropdown) return;
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        const id = activeDropdown;
        setActiveDropdown(null);
        triggerRefs.current[id]?.focus();
      }
    };
    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [activeDropdown]);

  // Click fuera del contenedor de navegación cierra el menú activo.
  useEffect(() => {
    if (!activeDropdown) return;
    const handleClickOutside = (e: MouseEvent) => {
      if (containerRef.current && !containerRef.current.contains(e.target as Node)) {
        setActiveDropdown(null);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [activeDropdown]);

  return (
    <div ref={containerRef} className="hidden lg:flex items-center gap-1">
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
        const isActive = activeDropdown === menu.id;
        const panelId = `mega-menu-panel-${menu.id}`;

        return (
          <div
            key={menu.id}
            className="relative"
            onMouseEnter={() => openMenu(menu.id, "hover")}
            onMouseLeave={scheduleClose}
          >
            <button
              ref={(el) => {
                triggerRefs.current[menu.id] = el;
              }}
              type="button"
              aria-haspopup="true"
              aria-expanded={isActive}
              aria-controls={panelId}
              onClick={() => handleTriggerClick(menu.id)}
              className={`flex items-center gap-1.5 px-4 py-2 text-[15px] font-medium transition-colors ${
                isActive ? "text-[#0066ff]" : "text-gray-700 hover:text-[#0066ff]"
              }`}
            >
              {menu.triggerLabel}
              <svg
                className={`w-4 h-4 transition-transform duration-200 ${isActive ? "rotate-180" : ""}`}
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>

            <div
              className={`fixed top-[114px] left-0 right-0 z-40 transition-all duration-200 ${
                isActive ? "opacity-100 visible" : "opacity-0 invisible pointer-events-none"
              }`}
              onMouseEnter={clearCloseTimeout}
              onMouseLeave={scheduleClose}
            >
              <MegaMenu menu={menu} active={isActive} id={panelId} />
            </div>
          </div>
        );
      })}
    </div>
  );
}
