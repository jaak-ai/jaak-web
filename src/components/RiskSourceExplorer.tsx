"use client";

import { useMemo, useState } from "react";
import { riskCategories, tagStyles, TOTAL_SOURCES, type RiskSource } from "@/lib/riskLists";
import { gtmEvent } from "./GoogleTagManager";

const NAVY = "#202945";

function SourceTag({ tag }: { tag: RiskSource["tag"] }) {
  const style = tagStyles[tag];
  return (
    <span
      className="inline-flex items-center px-2 py-0.5 rounded-full text-[11px] font-bold border"
      style={{ background: style.bg, color: style.text, borderColor: style.border }}
    >
      {tag}
    </span>
  );
}

function SourceCard({ source }: { source: RiskSource }) {
  return (
    <div className="p-4 rounded-xl border border-gray-100 bg-white hover:border-[#1ECAD3]/40 hover:shadow-sm transition-all">
      <div className="flex items-start justify-between gap-3 mb-1.5">
        <h4 className="font-bold text-[#202945] text-sm leading-snug">{source.name}</h4>
        <SourceTag tag={source.tag} />
      </div>
      <p className="text-xs text-gray-500 mb-2 leading-relaxed">{source.description}</p>
      <span className="text-[11px] font-semibold text-gray-400 uppercase tracking-wide">
        {source.jurisdiction}
      </span>
    </div>
  );
}

export default function RiskSourceExplorer() {
  const [activeCategory, setActiveCategory] = useState(riskCategories[0].id);
  const [query, setQuery] = useState("");
  const [openMobile, setOpenMobile] = useState<Set<string>>(new Set([riskCategories[0].id]));

  const normalizedQuery = query.trim().toLowerCase();

  const filteredCategories = useMemo(() => {
    if (!normalizedQuery) return riskCategories;
    return riskCategories
      .map((cat) => ({
        ...cat,
        sources: cat.sources.filter(
          (s) =>
            s.name.toLowerCase().includes(normalizedQuery) ||
            s.description.toLowerCase().includes(normalizedQuery) ||
            s.jurisdiction.toLowerCase().includes(normalizedQuery)
        ),
      }))
      .filter((cat) => cat.sources.length > 0);
  }, [normalizedQuery]);

  const activeCategoryData = filteredCategories.find((c) => c.id === activeCategory) || filteredCategories[0];

  const trackSearch = (value: string) => {
    if (value.trim().length >= 3) {
      gtmEvent("risk_source_search", { query: value.trim(), page_path: window.location.pathname });
    }
  };

  const toggleMobile = (id: string) => {
    setOpenMobile((prev) => {
      const next = new Set(prev);
      if (next.has(id)) {
        next.delete(id);
      } else {
        next.add(id);
        gtmEvent("risk_category_open", { category: id, page_path: window.location.pathname });
      }
      return next;
    });
  };

  return (
    <section className="py-20 bg-gray-50" id="fuentes" aria-labelledby="fuentes-heading">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div data-sr className="text-center mb-10">
          <h2 id="fuentes-heading" className="text-3xl md:text-4xl font-black text-[#202945] mb-4">
            Más de {TOTAL_SOURCES} fuentes nacionales e internacionales en una sola consulta
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            La edición 2026 de la guía de JAAK documenta {TOTAL_SOURCES} fuentes agrupadas según el riesgo o
            estatus que ayudan a identificar.
          </p>
        </div>

        {/* Search */}
        <div className="max-w-md mx-auto mb-10">
          <label htmlFor="risk-source-search" className="sr-only">
            Buscar fuente por nombre, país o categoría
          </label>
          <div className="relative">
            <svg className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-4.35-4.35M17 10a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
            <input
              id="risk-source-search"
              type="search"
              value={query}
              onChange={(e) => {
                setQuery(e.target.value);
                trackSearch(e.target.value);
              }}
              placeholder="Buscar fuente, país o autoridad…"
              className="w-full pl-11 pr-4 py-3 bg-white border border-gray-200 rounded-full focus:ring-2 focus:ring-[#1ECAD3] focus:border-transparent outline-none text-gray-900 placeholder:text-gray-400 text-sm"
            />
          </div>
          {normalizedQuery && (
            <p className="text-xs text-gray-500 mt-2 text-center" role="status">
              {filteredCategories.reduce((n, c) => n + c.sources.length, 0)} fuente(s) encontrada(s)
            </p>
          )}
        </div>

        {/* Desktop: tabs + panel */}
        <div className="hidden md:block">
          <div className="flex flex-wrap gap-2 justify-center mb-8" role="tablist" aria-label="Categorías de fuentes de riesgo">
            {filteredCategories.map((cat) => {
              const isActive = cat.id === activeCategoryData?.id;
              return (
                <button
                  key={cat.id}
                  type="button"
                  role="tab"
                  aria-selected={isActive}
                  aria-controls={`panel-${cat.id}`}
                  id={`tab-${cat.id}`}
                  onClick={() => {
                    setActiveCategory(cat.id);
                    gtmEvent("risk_category_open", { category: cat.id, page_path: window.location.pathname });
                  }}
                  className="px-4 py-2.5 rounded-full text-sm font-semibold transition-all border"
                  style={{
                    background: isActive ? NAVY : "white",
                    color: isActive ? "white" : "#4A5568",
                    borderColor: isActive ? NAVY : "#E5E7EB",
                  }}
                >
                  {cat.title}
                  <span className="ml-1.5 opacity-60">({cat.sources.length})</span>
                </button>
              );
            })}
          </div>

          {activeCategoryData && (
            <div
              role="tabpanel"
              id={`panel-${activeCategoryData.id}`}
              aria-labelledby={`tab-${activeCategoryData.id}`}
              className="bg-white rounded-2xl border border-gray-100 p-6 md:p-8"
            >
              <p className="text-gray-600 mb-6 max-w-3xl">{activeCategoryData.description}</p>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                {activeCategoryData.sources.map((s) => (
                  <SourceCard key={s.id} source={s} />
                ))}
              </div>
            </div>
          )}

          {filteredCategories.length === 0 && (
            <p className="text-center text-gray-500 py-10">
              No encontramos fuentes que coincidan con &ldquo;{query}&rdquo;.
            </p>
          )}
        </div>

        {/* Mobile: accordions */}
        <div className="md:hidden space-y-3">
          {filteredCategories.map((cat) => {
            const isOpen = openMobile.has(cat.id) || Boolean(normalizedQuery);
            return (
              <div key={cat.id} className="bg-white rounded-xl border border-gray-100 overflow-hidden">
                <button
                  type="button"
                  onClick={() => toggleMobile(cat.id)}
                  aria-expanded={isOpen}
                  aria-controls={`mobile-panel-${cat.id}`}
                  className="w-full flex items-center justify-between gap-3 px-4 py-4 text-left"
                >
                  <span className="font-bold text-[#202945] text-sm">
                    {cat.title} <span className="text-gray-400 font-normal">({cat.sources.length})</span>
                  </span>
                  <svg
                    className={`w-5 h-5 text-gray-400 flex-shrink-0 transition-transform ${isOpen ? "rotate-180" : ""}`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                {isOpen && (
                  <div id={`mobile-panel-${cat.id}`} className="px-4 pb-4 space-y-3">
                    <p className="text-sm text-gray-600">{cat.description}</p>
                    {cat.sources.map((s) => (
                      <SourceCard key={s.id} source={s} />
                    ))}
                  </div>
                )}
              </div>
            );
          })}
          {filteredCategories.length === 0 && (
            <p className="text-center text-gray-500 py-10">
              No encontramos fuentes que coincidan con &ldquo;{query}&rdquo;.
            </p>
          )}
        </div>
      </div>
    </section>
  );
}
