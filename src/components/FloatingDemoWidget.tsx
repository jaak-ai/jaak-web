"use client";

import { useEffect, useRef, useState } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { gtmEvent } from "./GoogleTagManager";
import { getWhatsAppUrl } from "@/lib/whatsapp";
import { SCHEDULE_DEMO_URL } from "@/lib/scheduling";

const TEAL = "#1ECAD3";
const NAVY_DARK = "#071426";

const HIDDEN_PREFIXES = ["/autoservicio", "/contacto"];
const DISMISS_STORAGE_KEY = "jaak_floating_demo_dismissed_until";
const DISMISS_DAYS = 7;
const SCROLL_RATIO_TRIGGER = 0.27;
const TIME_TRIGGER_MS = 8000;

export default function FloatingDemoWidget() {
  const pathname = usePathname();
  const isHiddenRoute = HIDDEN_PREFIXES.some((p) => pathname === p || pathname.startsWith(`${p}/`));

  const [visible, setVisible] = useState(false);
  const [open, setOpen] = useState(false);
  const panelRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (isHiddenRoute) return;

    const dismissedUntil = Number(localStorage.getItem(DISMISS_STORAGE_KEY) || 0);
    if (Date.now() < dismissedUntil) return;

    let shown = false;
    const show = () => {
      if (shown) return;
      shown = true;
      setVisible(true);
      window.removeEventListener("scroll", onScroll);
      clearTimeout(timer);
    };
    const onScroll = () => {
      const scrollable = document.documentElement.scrollHeight - window.innerHeight;
      if (scrollable <= 0) return;
      if (window.scrollY / scrollable >= SCROLL_RATIO_TRIGGER) show();
    };
    const timer = setTimeout(show, TIME_TRIGGER_MS);
    window.addEventListener("scroll", onScroll, { passive: true });

    return () => {
      clearTimeout(timer);
      window.removeEventListener("scroll", onScroll);
    };
  }, [isHiddenRoute, pathname]);

  useEffect(() => {
    if (!open) return;
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    const handleOutsideClick = (e: MouseEvent) => {
      if (panelRef.current && !panelRef.current.contains(e.target as Node)) setOpen(false);
    };
    document.addEventListener("keydown", handleEscape);
    document.addEventListener("mousedown", handleOutsideClick);
    return () => {
      document.removeEventListener("keydown", handleEscape);
      document.removeEventListener("mousedown", handleOutsideClick);
    };
  }, [open]);

  if (isHiddenRoute || !visible) return null;

  const toggle = () => {
    const next = !open;
    setOpen(next);
    gtmEvent(next ? "floating_demo_open" : "floating_demo_close", {
      source: "floating_widget",
      page_path: pathname,
    });
  };

  const dismiss = () => {
    setOpen(false);
    setVisible(false);
    localStorage.setItem(DISMISS_STORAGE_KEY, String(Date.now() + DISMISS_DAYS * 24 * 60 * 60 * 1000));
    gtmEvent("floating_demo_close", { source: "floating_widget", page_path: pathname });
  };

  const track = (eventName: string, destination: string) => {
    gtmEvent(eventName, { source: "floating_widget", destination, page_path: pathname });
    setOpen(false);
  };

  return (
    <div ref={panelRef} className="fixed z-[70] bottom-4 right-4 sm:bottom-6 sm:right-6">
      {open && (
        <div
          role="dialog"
          aria-label="Conoce JAAK"
          className="mb-[76px] sm:mb-3 w-[calc(100vw-2rem)] max-w-[320px] rounded-2xl bg-white shadow-2xl border border-gray-100 overflow-hidden ml-auto"
        >
          <div className="px-4 py-3 flex items-center justify-between" style={{ background: NAVY_DARK }}>
            <span className="text-sm font-bold text-white">Conoce JAAK</span>
            <button
              type="button"
              aria-label="Cerrar"
              onClick={dismiss}
              className="text-white/70 hover:text-white p-1"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>

          <div className="p-3">
            <p className="text-[11px] font-bold uppercase tracking-wide text-gray-400 px-1 mb-1.5">Ver una demo</p>
            <Link
              href="/firma-nom151-demo-autoservicio"
              onClick={() => track("demo_firma_nom151_click", "firma_nom151")}
              className="block px-3 py-2 rounded-lg text-sm font-semibold text-gray-800 hover:bg-gray-50 transition-colors"
            >
              Firma Digital NOM-151
            </Link>
            <Link
              href="/kyc-inmobiliario-lfpiorpi"
              onClick={() => track("demo_kyc_inmobiliario_click", "kyc_inmobiliario")}
              className="block px-3 py-2 rounded-lg text-sm font-semibold text-gray-800 hover:bg-gray-50 transition-colors"
            >
              KYC para inmobiliarias
            </Link>

            <p className="text-[11px] font-bold uppercase tracking-wide text-gray-400 px-1 mt-2 mb-1.5">Hablar con JAAK</p>
            <a
              href={SCHEDULE_DEMO_URL}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => track("schedule_demo_click", "meetings_hubspot")}
              className="block px-3 py-2 rounded-lg text-sm font-semibold text-gray-800 hover:bg-gray-50 transition-colors"
            >
              Agendar demo con un especialista
            </a>
            <Link
              href="/contacto"
              onClick={() => track("contact_click", "contacto")}
              className="block px-3 py-2 rounded-lg text-sm font-semibold text-gray-800 hover:bg-gray-50 transition-colors"
            >
              Formulario de contacto
            </Link>
            <a
              href={getWhatsAppUrl("floating_widget")}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => track("whatsapp_click", "whatsapp")}
              className="block px-3 py-2 rounded-lg text-sm font-semibold text-gray-800 hover:bg-gray-50 transition-colors"
            >
              WhatsApp
            </a>
          </div>
        </div>
      )}

      {/* Bubble — desktop */}
      <button
        type="button"
        onClick={toggle}
        aria-haspopup="dialog"
        aria-expanded={open}
        data-cta="floating-demo"
        data-source="floating_widget"
        className="hidden sm:inline-flex items-center gap-2 rounded-full pl-4 pr-5 py-3 text-sm font-bold text-white shadow-xl transition-transform hover:-translate-y-0.5"
        style={{ background: `linear-gradient(135deg, ${TEAL}, #17a8b0)` }}
      >
        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
        Ver una demo
      </button>

      {/* Bottom bar — mobile */}
      <button
        type="button"
        onClick={toggle}
        aria-haspopup="dialog"
        aria-expanded={open}
        data-cta="floating-demo"
        data-source="floating_widget"
        className="sm:hidden fixed bottom-0 left-0 right-0 flex items-center justify-center gap-2 py-3.5 text-sm font-bold text-white"
        style={{ background: `linear-gradient(135deg, ${TEAL}, #17a8b0)` }}
      >
        Ver una demo
      </button>
    </div>
  );
}
