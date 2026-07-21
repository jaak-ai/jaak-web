"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { gtmEvent } from "./GoogleTagManager";
import { getWhatsAppUrl } from "@/lib/whatsapp";
import { SCHEDULE_DEMO_URL } from "@/lib/scheduling";
import { demoCards } from "@/lib/demoCards";
import { KYC_GENERAL_DEMO, sectorDemos } from "@/lib/sectorDemos";

const TEAL = "#1ECAD3";
const NAVY = "#202945";

/**
 * Botón "Ver demos" del header desktop: visualmente secundario frente a
 * "Comprar". Abre un panel compacto con las demos por producto/sector,
 * una opción de contacto y WhatsApp. También escucha el evento global
 * "jaak:open-demo-selector" para poder abrirse desde la barra superior.
 */
export default function DemoSelector() {
  const [open, setOpen] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const closeAndTrack = (eventName: string, params?: Record<string, unknown>) => {
    setOpen(false);
    if (eventName) gtmEvent(eventName, params);
  };

  const openPanel = (source: string) => {
    setOpen(true);
    gtmEvent("demo_selector_open", { source, page_path: window.location.pathname });
  };

  useEffect(() => {
    const handleOutsideClick = (e: MouseEvent) => {
      if (containerRef.current && !containerRef.current.contains(e.target as Node)) {
        setOpen(false);
      }
    };
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    const handleExternalOpen = () => openPanel("header");

    document.addEventListener("mousedown", handleOutsideClick);
    document.addEventListener("keydown", handleEscape);
    window.addEventListener("jaak:open-demo-selector", handleExternalOpen);
    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
      document.removeEventListener("keydown", handleEscape);
      window.removeEventListener("jaak:open-demo-selector", handleExternalOpen);
    };
  }, []);

  const firma = demoCards.find((c) => c.trackingId === "firma_nom151")!;

  return (
    <div className="relative hidden lg:block" ref={containerRef}>
      <button
        type="button"
        aria-haspopup="dialog"
        aria-expanded={open}
        onClick={() => (open ? setOpen(false) : openPanel("header"))}
        data-cta="ver-demos"
        data-source="header"
        className={`flex items-center gap-1.5 px-4 py-2 text-[15px] font-medium transition-colors ${
          open ? "text-[#0066ff]" : "text-gray-700 hover:text-[#0066ff]"
        }`}
      >
        Ver demos
        <svg
          className={`w-4 h-4 transition-transform duration-200 ${open ? "rotate-180" : ""}`}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </button>

      {open && (
        <div
          role="dialog"
          aria-label="Selector de demos"
          className="absolute right-0 top-full mt-3 w-[380px] bg-white rounded-2xl border border-gray-100 shadow-2xl overflow-hidden z-50"
        >
          <div className="p-2">
            {/* Firma NOM-151 */}
            <Link
              href={firma.href}
              onClick={() => closeAndTrack("demo_firma_nom151_click", { source: "header", destination: "firma_nom151", page_path: window.location.pathname })}
              data-cta="demo-firma-nom151"
              data-source="header"
              className="group flex items-start gap-3 p-3 rounded-xl hover:bg-gray-50 transition-colors"
            >
              <div className="w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0" style={{ background: "rgba(30,202,211,0.12)" }}>
                <svg className="w-5 h-5" style={{ color: TEAL }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
                </svg>
              </div>
              <div className="flex-1">
                <div className="flex items-center gap-2">
                  <span className="text-[15px] font-semibold text-gray-900 group-hover:text-[#0F8E96] transition-colors">
                    Firma Digital NOM-151
                  </span>
                </div>
                <p className="text-xs text-gray-500 mt-0.5 leading-relaxed">
                  Firma documentos, genera evidencia y conoce el proceso con sello de tiempo NOM-151.
                </p>
                <span className="text-xs font-bold mt-2 inline-block" style={{ color: "#0F8E96" }}>
                  Ver demo de Firma NOM-151 →
                </span>
              </div>
            </Link>

            {/* KYC general + selector por sector */}
            <div className="p-3 rounded-xl hover:bg-gray-50 transition-colors">
              <Link
                href={KYC_GENERAL_DEMO.href}
                onClick={() => closeAndTrack("demo_kyc_click", { source: "header", destination: "kyc_general", page_path: window.location.pathname })}
                data-cta="demo-kyc"
                data-source="header"
                className="group flex items-start gap-3"
              >
                <div className="w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0" style={{ background: `${NAVY}0D` }}>
                  <svg className="w-5 h-5" style={{ color: NAVY }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                  </svg>
                </div>
                <div className="flex-1">
                  <span className="text-[15px] font-semibold text-gray-900 group-hover:text-[#0F8E96] transition-colors">
                    {KYC_GENERAL_DEMO.title}
                  </span>
                  <p className="text-xs text-gray-500 mt-0.5 leading-relaxed">{KYC_GENERAL_DEMO.description}</p>
                  <span className="text-xs font-bold mt-2 inline-block" style={{ color: "#0F8E96" }}>
                    Ver demo KYC →
                  </span>
                </div>
              </Link>

              {/* Elegir por sector */}
              <div className="mt-3 pl-[52px]">
                <span className="text-[11px] font-bold uppercase tracking-wide text-gray-400">Elegir por sector</span>
                <div className="flex flex-wrap gap-2 mt-1.5">
                  {sectorDemos.map((s) => (
                    <Link
                      key={s.trackingId}
                      href={s.href}
                      onClick={() => closeAndTrack(s.trackingId === "kyc_inmobiliario" ? "demo_kyc_inmobiliario_click" : "demo_kyc_sector_click", { source: "header", destination: s.trackingId, page_path: window.location.pathname })}
                      data-cta={`demo-${s.trackingId}`}
                      data-source="header"
                      className="text-xs font-semibold px-2.5 py-1 rounded-full transition-colors hover:opacity-80"
                      style={{ background: `${NAVY}0D`, color: NAVY }}
                    >
                      {s.sector}
                    </Link>
                  ))}
                </div>
              </div>
            </div>

            {/* Ayuda para elegir: agendar demo con especialista o contacto */}
            <div className="flex items-start gap-3 p-3 rounded-xl">
              <div className="w-10 h-10 rounded-lg bg-gray-100 flex items-center justify-center flex-shrink-0">
                <svg className="w-5 h-5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <div className="flex-1">
                <span className="text-[15px] font-semibold text-gray-900">Ayuda para elegir</span>
                <p className="text-xs text-gray-500 mt-0.5 leading-relaxed">
                  Cuéntanos qué proceso necesitas resolver y un especialista te ayudará.
                </p>
                <div className="flex flex-wrap items-center gap-x-4 gap-y-1 mt-2">
                  <a
                    href={SCHEDULE_DEMO_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() => closeAndTrack("schedule_demo_click", { source: "header", destination: "meetings_hubspot", page_path: window.location.pathname })}
                    data-cta="agendar-demo"
                    data-source="header"
                    className="text-xs font-bold hover:underline"
                    style={{ color: "#0F8E96" }}
                  >
                    Agendar demo →
                  </a>
                  <Link
                    href="/contacto"
                    onClick={() => closeAndTrack("contact_click", { source: "header", destination: "contacto", page_path: window.location.pathname })}
                    data-cta="formulario-contacto"
                    data-source="header"
                    className="text-xs font-semibold text-gray-500 hover:underline"
                  >
                    Formulario de contacto →
                  </Link>
                </div>
              </div>
            </div>
          </div>

          <div className="border-t border-gray-100 px-4 py-3 bg-gray-50">
            <a
              href={getWhatsAppUrl("header")}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => closeAndTrack("whatsapp_click", { source: "header", destination: "whatsapp", page_path: window.location.pathname })}
              data-cta="whatsapp"
              data-source="header"
              className="inline-flex items-center gap-1.5 text-xs font-semibold text-gray-500 hover:text-[#0F8E96] transition-colors"
            >
              Escríbenos por WhatsApp
            </a>
          </div>
        </div>
      )}
    </div>
  );
}
