"use client";

import Link from "next/link";
import { gtmEvent } from "@/components/GoogleTagManager";
import { getWhatsAppUrl } from "@/lib/whatsapp";
import { SCHEDULE_DEMO_URL } from "@/lib/scheduling";
import { KYC_GENERAL_DEMO, sectorDemos } from "@/lib/sectorDemos";
import { megaMenus, simpleNavLinks, type MegaMenuId, type NavLink } from "@/config/navigation";
import NavigationCTA from "./NavigationCTA";

/** Orden de las secciones del acordeón móvil — coincide con el orden que
 *  ya existía en Header.tsx (distinto del orden de triggers de escritorio,
 *  lo cual ya era así antes de este refactor). */
const MOBILE_SECTION_ORDER: { id: MegaMenuId; heading: string }[] = [
  { id: "platform", heading: "Plataforma" },
  { id: "solutions", heading: "Soluciones" },
  { id: "compliance", heading: "Cumplimiento" },
  { id: "resources", heading: "Recursos" },
];

function flattenMobileLinks(menuId: MegaMenuId): NavLink[] {
  const menu = megaMenus.find((m) => m.id === menuId);
  if (!menu) return [];
  const links: NavLink[] = [];
  for (const column of menu.columns) {
    if (column.type !== "links") continue;
    for (const item of column.items) {
      if (item.visibility.mobile) links.push(item);
    }
  }
  return links;
}

function MobileLink({ item, onClose }: { item: NavLink; onClose: () => void }) {
  if (!item.href) return null;
  const isSub = !item.icon && !item.description;
  return (
    <Link
      href={item.href}
      className={isSub ? "block text-sm text-gray-500 hover:text-[#0066ff]" : "block text-gray-700 hover:text-[#0066ff]"}
      onClick={onClose}
    >
      {item.label}
    </Link>
  );
}

export default function MobileNavigation({ open, onClose }: { open: boolean; onClose: () => void }) {
  if (!open) return null;

  const platformMenu = megaMenus.find((m) => m.id === "platform")!;
  const identidadColumn = platformMenu.columns.find((c) => c.id === "platform-identidad");
  const firmaColumn = platformMenu.columns.find((c) => c.id === "platform-firma");

  const identidadItems: NavLink[] =
    identidadColumn?.type === "links" ? identidadColumn.items.filter((i) => i.visibility.mobile) : [];
  const firmaItems: NavLink[] = firmaColumn?.type === "links" ? firmaColumn.items.filter((i) => i.visibility.mobile) : [];
  // El primer y último ítem de la columna "Firma" son los bloques con icono
  // ("Firma electrónica" y "Gestión de evidencia"); todo lo intermedio son
  // las variantes de firma que van en la sub-lista con indent.
  const firmaLead = firmaItems[0];
  const firmaTail = firmaItems[firmaItems.length - 1];
  const firmaSub = firmaItems.slice(1, -1);

  return (
    <div className="lg:hidden bg-white border-t border-gray-200 max-h-[calc(100vh-114px)] overflow-y-auto">
      <div className="px-4 py-6 space-y-6">
        {/* Demos Section — sigue leyendo de src/lib/sectorDemos.ts / demoCards.ts,
            sin cambios respecto al Header.tsx original (solo se relocalizó el JSX). */}
        <div>
          <h3 className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-3">Demos</h3>
          <div className="space-y-3">
            <Link
              href="/firma-nom151-demo-autoservicio"
              onClick={() => {
                gtmEvent("demo_firma_nom151_click", {
                  source: "header",
                  destination: "firma_nom151",
                  page_path: window.location.pathname,
                });
                onClose();
              }}
              data-cta="demo-firma-nom151"
              data-source="header"
              className="block text-gray-700 hover:text-[#0066ff]"
            >
              Firma Digital NOM-151
            </Link>
            <Link
              href={KYC_GENERAL_DEMO.href}
              onClick={() => {
                gtmEvent("demo_kyc_click", {
                  source: "header",
                  destination: "kyc_general",
                  page_path: window.location.pathname,
                });
                onClose();
              }}
              data-cta="demo-kyc"
              data-source="header"
              className="block text-gray-700 hover:text-[#0066ff]"
            >
              KYC
            </Link>
            <div className="pl-4">
              <span className="text-xs font-bold uppercase tracking-wide text-gray-400">Elegir por sector</span>
              <div className="flex flex-wrap gap-2 mt-2">
                {sectorDemos.map((s) => (
                  <Link
                    key={s.trackingId}
                    href={s.href}
                    onClick={() => {
                      gtmEvent(
                        s.trackingId === "kyc_inmobiliario" ? "demo_kyc_inmobiliario_click" : "demo_kyc_sector_click",
                        { source: "header", destination: s.trackingId, page_path: window.location.pathname }
                      );
                      onClose();
                    }}
                    data-cta={`demo-${s.trackingId}`}
                    data-source="header"
                    className="text-xs font-semibold px-2.5 py-1 rounded-full bg-gray-100 text-gray-700"
                  >
                    {s.sector}
                  </Link>
                ))}
              </div>
            </div>
            <a
              href={SCHEDULE_DEMO_URL}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => {
                gtmEvent("schedule_demo_click", {
                  source: "header",
                  destination: "meetings_hubspot",
                  page_path: window.location.pathname,
                });
                onClose();
              }}
              data-cta="agendar-demo"
              data-source="header"
              className="block text-gray-700 hover:text-[#0066ff]"
            >
              Agendar demo con un especialista
            </a>
            <Link
              href="/contacto"
              onClick={() => {
                gtmEvent("contact_click", { source: "header", destination: "contacto", page_path: window.location.pathname });
                onClose();
              }}
              data-cta="ayuda-elegir"
              data-source="header"
              className="block text-gray-700 hover:text-[#0066ff]"
            >
              Formulario de contacto
            </Link>
            <a
              href={getWhatsAppUrl("header")}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => {
                gtmEvent("whatsapp_click", { source: "header", destination: "whatsapp", page_path: window.location.pathname });
                onClose();
              }}
              data-cta="whatsapp"
              data-source="header"
              className="block text-gray-700 hover:text-[#0066ff]"
            >
              WhatsApp
            </a>
          </div>
        </div>

        {/* Plataforma: caso especial — reproduce el agrupamiento visual
            original (líder "Firma electrónica" + sub-lista con indent +
            "Gestión de evidencia" y las 2 herramientas de Signa al final). */}
        <div>
          <h3 className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-3">Plataforma</h3>
          <div className="space-y-3">
            {identidadItems.map((item) => (
              <MobileLink key={item.id} item={item} onClose={onClose} />
            ))}
            {firmaLead ? <MobileLink item={firmaLead} onClose={onClose} /> : null}
            <div className="ml-4 space-y-2 border-l-2 border-gray-100 pl-3">
              {firmaSub.map((item) => (
                <MobileLink key={item.id} item={item} onClose={onClose} />
              ))}
            </div>
            {firmaTail ? <MobileLink item={firmaTail} onClose={onClose} /> : null}
          </div>
        </div>

        {/* Soluciones / Cumplimiento / Recursos — genéricas, impulsadas por config. */}
        {MOBILE_SECTION_ORDER.filter((s) => s.id !== "platform").map((section) => (
          <div key={section.id}>
            <h3 className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-3">{section.heading}</h3>
            <div className="space-y-3">
              {flattenMobileLinks(section.id).map((item) => (
                <MobileLink key={item.id} item={item} onClose={onClose} />
              ))}
            </div>
          </div>
        ))}

        {/* Autoservicio (Comprar) */}
        <div>
          <NavigationCTA context="mobile" only="comprar" onNavigate={onClose} />
        </div>

        {/* Precios */}
        <div>
          {simpleNavLinks
            .filter((link) => link.visibility.mobile)
            .map((link) => (
              <Link key={link.id} href={link.href} className="block text-[#0066ff] font-semibold" onClick={onClose}>
                {link.label}
              </Link>
            ))}
        </div>

        <div className="pt-4 border-t border-gray-200">
          <NavigationCTA context="mobile" only="iniciar-sesion" onNavigate={onClose} />
          {/* "Solicitar revisión regulatoria" tal como en el original — no
              forma parte del set de CTA globales (ver navigation.ts). */}
          <Link
            href="/contacto"
            className="block w-full text-center px-5 py-3 bg-[#0066ff] text-white font-semibold rounded-lg"
            onClick={onClose}
          >
            Solicitar revisión regulatoria
          </Link>
        </div>
      </div>
    </div>
  );
}
