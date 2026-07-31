"use client";

import { useState } from "react";
import Link from "next/link";
import { gtmEvent } from "@/components/GoogleTagManager";
import {
  megaMenus,
  simpleNavLinks,
  globalCTAs,
  isPublished,
  type MegaMenuConfig,
  type MegaMenuId,
  type NavLink,
} from "@/config/navigation";

/** Orden de las filas del acordeón móvil (Fase 1B): 4 categorías + Precios
 *  + Iniciar sesión, todas colapsadas al abrir el menú. "Comprar" no se
 *  repite aquí — ya está visible en la barra superior móvil. */
const MOBILE_SECTION_ORDER: MegaMenuId[] = ["products", "solutions", "compliance", "resources"];

function flattenColumnLinks(menu: MegaMenuConfig): { heading?: string; items: NavLink[] }[] {
  return menu.columns
    .filter((c) => c.type === "links" && isPublished(c))
    .map((c) => ({
      heading: c.type === "links" ? c.heading : undefined,
      items: c.type === "links" ? c.items.filter((i) => i.visibility.mobile && isPublished(i)) : [],
    }))
    .filter((group) => group.items.length > 0);
}

function trackLinkClick(menu: MegaMenuConfig, item: NavLink) {
  gtmEvent("nav_link_click", {
    menu: menu.id,
    item: item.id,
    label: item.label,
    page_path: window.location.pathname,
  });
}

function AccordionSection({
  menu,
  open,
  onToggle,
  onNavigate,
}: {
  menu: MegaMenuConfig;
  open: boolean;
  onToggle: () => void;
  onNavigate: () => void;
}) {
  const groups = flattenColumnLinks(menu);
  const panelId = `mobile-menu-panel-${menu.id}`;

  return (
    <div className="border-b border-gray-100">
      <button
        type="button"
        aria-expanded={open}
        aria-controls={panelId}
        onClick={onToggle}
        className="w-full flex items-center justify-between py-3.5 text-left text-[15px] font-semibold text-gray-900"
      >
        {menu.triggerLabel}
        <svg
          className={`w-4 h-4 text-gray-400 transition-transform duration-200 ${open ? "rotate-180" : ""}`}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </button>
      {open ? (
        <div id={panelId} className="pb-4 space-y-4">
          {groups.map((group, i) => (
            <div key={group.heading ?? i}>
              {group.heading ? (
                <p className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-2">{group.heading}</p>
              ) : null}
              <div className="space-y-2.5">
                {group.items.map((item) =>
                  item.href ? (
                    <Link
                      key={item.id}
                      href={item.href}
                      onClick={() => {
                        trackLinkClick(menu, item);
                        onNavigate();
                      }}
                      className="block text-sm text-gray-700 hover:text-[#0066ff]"
                    >
                      {item.label}
                    </Link>
                  ) : null
                )}
              </div>
            </div>
          ))}
        </div>
      ) : null}
    </div>
  );
}

export default function MobileNavigation({ open, onClose }: { open: boolean; onClose: () => void }) {
  const [openSection, setOpenSection] = useState<MegaMenuId | null>(null);

  if (!open) return null;

  const iniciarSesion = globalCTAs.find((cta) => cta.id === "iniciar-sesion");

  return (
    <div className="lg:hidden bg-white border-t border-gray-200 max-h-[calc(100vh-114px)] overflow-y-auto">
      <div className="px-4 py-2">
        {MOBILE_SECTION_ORDER.map((id) => {
          const menu = megaMenus.find((m) => m.id === id);
          if (!menu) return null;
          return (
            <AccordionSection
              key={menu.id}
              menu={menu}
              open={openSection === menu.id}
              onToggle={() => setOpenSection((prev) => (prev === menu.id ? null : menu.id))}
              onNavigate={onClose}
            />
          );
        })}

        {simpleNavLinks
          .filter((link) => link.visibility.mobile)
          .map((link) => (
            <div key={link.id} className="border-b border-gray-100">
              <Link
                href={link.href}
                className="block py-3.5 text-[15px] font-semibold text-gray-900"
                onClick={onClose}
              >
                {link.label}
              </Link>
            </div>
          ))}

        {iniciarSesion && iniciarSesion.visibility.mobile ? (
          <div>
            <Link
              href={iniciarSesion.href}
              className="block py-3.5 text-[15px] font-semibold text-gray-900"
              onClick={() => {
                gtmEvent("login_click", { source: "mobile_nav", page_path: window.location.pathname });
                onClose();
              }}
            >
              {iniciarSesion.label}
            </Link>
          </div>
        ) : null}
      </div>
    </div>
  );
}
