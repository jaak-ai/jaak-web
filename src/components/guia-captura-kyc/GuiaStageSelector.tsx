"use client";

import { useRef } from "react";
import { STAGE_TABS } from "./data";

export default function GuiaStageSelector() {
  const linksRef = useRef<(HTMLAnchorElement | null)[]>([]);

  const focusTab = (index: number) => {
    const el = linksRef.current[index];
    if (el) {
      el.focus();
      linksRef.current.forEach((link, i) => link?.setAttribute("tabindex", i === index ? "0" : "-1"));
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLAnchorElement>, index: number) => {
    const last = STAGE_TABS.length - 1;
    if (e.key === "ArrowRight") { e.preventDefault(); focusTab(index === last ? 0 : index + 1); }
    else if (e.key === "ArrowLeft") { e.preventDefault(); focusTab(index === 0 ? last : index - 1); }
    else if (e.key === "Home") { e.preventDefault(); focusTab(0); }
    else if (e.key === "End") { e.preventDefault(); focusTab(last); }
  };

  return (
    <section className="py-14" aria-labelledby="selector-h2">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 id="selector-h2" className="text-2xl md:text-3xl font-black mb-5" style={{ color: "var(--primary)" }}>
          Vaya directo a lo que necesita
        </h2>
        <div
          role="tablist"
          aria-label="Ir a una sección de la guía"
          className="flex flex-wrap gap-1.5 border-b"
          style={{ borderColor: "var(--border-light)" }}
        >
          {STAGE_TABS.map((tab, i) => (
            <a
              key={tab.href}
              href={tab.href}
              role="tab"
              aria-selected={i === 0}
              tabIndex={i === 0 ? 0 : -1}
              ref={(el) => { linksRef.current[i] = el; }}
              onKeyDown={(e) => handleKeyDown(e, i)}
              className="px-3.5 py-2.5 text-sm font-bold -mb-px border-b-[2.5px] transition-colors"
              style={{
                color: i === 0 ? "var(--accent-hover)" : "var(--text-muted)",
                borderColor: i === 0 ? "var(--accent)" : "transparent",
              }}
            >
              {tab.label}
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
