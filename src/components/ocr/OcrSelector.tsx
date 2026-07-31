"use client";

import { useState } from "react";
import Link from "next/link";
import { gtmEvent } from "@/components/GoogleTagManager";

const TEAL = "#2DB6C1";

interface TabDef {
  id: "identificaciones" | "documentos";
  label: string;
  desc: string;
  items: string[];
  ctaLabel: string;
  ctaHref: string;
}

const TABS: TabDef[] = [
  {
    id: "identificaciones",
    label: "Identificaciones oficiales",
    desc: "Extrae datos personales y documentales de identificaciones para agilizar registros, formularios y expedientes.",
    items: [
      "Datos personales",
      "Datos del documento",
      "Fotografía",
      "País y tipo de identificación",
      "Vigencia y edad, cuando estén disponibles",
      "Salida estructurada",
    ],
    ctaLabel: "Ver OCR de identificaciones",
    ctaHref: "#producto-ocr-id",
  },
  {
    id: "documentos",
    label: "Documentos y expedientes",
    desc: "Procesa documentos empresariales y convierte su contenido en información estructurada.",
    items: [
      "Actas constitutivas",
      "Constancias fiscales",
      "Comprobantes",
      "Estados de cuenta",
      "Contratos o notariales cuando estén soportados",
      "PDF de varias páginas · campos estructurados",
    ],
    ctaLabel: "Ver PDF OCR Inteligente",
    ctaHref: "#producto-ocr-inteligente",
  },
];

export default function OcrSelector() {
  const [active, setActive] = useState<TabDef["id"]>("identificaciones");

  const selectTab = (id: TabDef["id"]) => {
    setActive(id);
    gtmEvent("nav_link_click", { menu: "ocr-selector", item: id, page_path: window.location.pathname });
  };

  const handleKeyDown = (e: React.KeyboardEvent, index: number) => {
    if (e.key === "ArrowRight" || e.key === "ArrowLeft") {
      e.preventDefault();
      const nextIndex = e.key === "ArrowRight" ? (index + 1) % TABS.length : (index - 1 + TABS.length) % TABS.length;
      selectTab(TABS[nextIndex].id);
      (document.getElementById(`ocr-tab-${TABS[nextIndex].id}`) as HTMLButtonElement | null)?.focus();
    }
  };

  return (
    <section className="py-16 md:py-20">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-xl mx-auto mb-9">
          <h2 className="text-2xl md:text-3xl font-extrabold" style={{ color: "#212A45" }}>
            ¿Qué necesitas procesar?
          </h2>
          <p className="text-gray-500 mt-3 text-[15px]">
            Elige el tipo de documento — cada opción usa un producto distinto.
          </p>
        </div>

        <div role="tablist" aria-label="Tipo de documento" className="flex justify-center gap-2 mb-6 flex-wrap">
          {TABS.map((tab, i) => (
            <button
              key={tab.id}
              id={`ocr-tab-${tab.id}`}
              role="tab"
              type="button"
              aria-selected={active === tab.id}
              aria-controls={`ocr-panel-${tab.id}`}
              tabIndex={active === tab.id ? 0 : -1}
              onClick={() => selectTab(tab.id)}
              onKeyDown={(e) => handleKeyDown(e, i)}
              className={`font-bold text-sm px-5 py-2.5 rounded-xl border-[1.5px] transition-colors ${
                active === tab.id ? "text-[#212A45]" : "text-gray-500 border-gray-200 bg-white hover:border-gray-300"
              }`}
              style={active === tab.id ? { borderColor: TEAL, background: "#F1FAFB" } : undefined}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {TABS.map((tab) => (
          <div
            key={tab.id}
            role="tabpanel"
            id={`ocr-panel-${tab.id}`}
            aria-labelledby={`ocr-tab-${tab.id}`}
            hidden={active !== tab.id}
            className="bg-white border border-gray-100 rounded-2xl p-7 md:p-9"
          >
            <p className="text-[13.5px] text-gray-600 mb-5 max-w-md">{tab.desc}</p>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
              {tab.items.map((item) => (
                <li key={item} className="flex items-start gap-2 text-[13px] text-gray-600">
                  <svg
                    className="w-3.5 h-3.5 mt-0.5 flex-shrink-0"
                    style={{ color: TEAL }}
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={3}
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                  {item}
                </li>
              ))}
            </ul>
            <Link
              href={tab.ctaHref}
              className="inline-flex mt-5 text-[13px] font-bold hover:underline underline-offset-4"
              style={{ color: "#25969f" }}
            >
              {tab.ctaLabel} ↓
            </Link>
          </div>
        ))}
      </div>
    </section>
  );
}
