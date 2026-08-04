"use client";

import { useState } from "react";

type Palette = {
  id: string;
  label: string;
  primary: string;
  secondary: string;
};

const palettes: Palette[] = [
  { id: "teal", label: "Teal JAAK", primary: "#1ECAD3", secondary: "#2AD796" },
  { id: "navy", label: "Azul corporativo", primary: "#3B82F6", secondary: "#202945" },
  { id: "purple", label: "Púrpura", primary: "#8B5CF6", secondary: "#6D28D9" },
  { id: "amber", label: "Ámbar", primary: "#F59E0B", secondary: "#B45309" },
];

export default function BrandingPreview() {
  const [activeId, setActiveId] = useState(palettes[0].id);
  const [brandName, setBrandName] = useState("");
  const active = palettes.find((p) => p.id === activeId) ?? palettes[0];
  const displayName = brandName.trim() || "Tu Empresa";

  return (
    <div>
      <div
        className="flex flex-wrap items-center justify-center gap-2.5 mb-8"
        role="tablist"
        aria-label="Elegir paleta de color"
      >
        {palettes.map((p) => {
          const isActive = p.id === activeId;
          return (
            <button
              key={p.id}
              type="button"
              onClick={() => setActiveId(p.id)}
              role="tab"
              aria-selected={isActive}
              className="flex items-center gap-2 px-4 py-2 rounded-full text-xs font-semibold transition-all duration-300"
              style={{
                background: isActive ? "rgba(255,255,255,0.08)" : "rgba(255,255,255,0.03)",
                border: `1px solid ${isActive ? p.primary : "rgba(255,255,255,0.1)"}`,
                color: isActive ? "#fff" : "#94A3B8",
                boxShadow: isActive ? `0 0 20px ${p.primary}33` : "none",
              }}
            >
              <span
                className="w-3 h-3 rounded-full flex-shrink-0"
                style={{ background: `linear-gradient(135deg, ${p.primary}, ${p.secondary})` }}
                aria-hidden="true"
              />
              {p.label}
            </button>
          );
        })}
      </div>

      <div className="max-w-xs mx-auto mb-10">
        <label htmlFor="branding-preview-name" className="block text-xs text-gray-500 mb-2 text-center">
          Escribe el nombre de tu empresa
        </label>
        <input
          id="branding-preview-name"
          type="text"
          value={brandName}
          onChange={(e) => setBrandName(e.target.value.slice(0, 28))}
          placeholder="Tu Empresa"
          maxLength={28}
          className="w-full text-center px-4 py-2.5 rounded-xl text-sm text-white outline-none transition-colors duration-300"
          style={{ background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.12)" }}
        />
      </div>

      <div
        className="max-w-xl mx-auto rounded-2xl overflow-hidden transition-all duration-500"
        style={{ border: `1px solid ${active.primary}44`, boxShadow: `0 0 50px ${active.primary}22` }}
      >
        <div
          className="px-6 py-4 flex items-center gap-3 transition-all duration-500"
          style={{ background: `linear-gradient(135deg, ${active.primary}, ${active.secondary})` }}
        >
          <div
            className="w-9 h-9 rounded-lg flex items-center justify-center text-sm font-black flex-shrink-0"
            style={{ background: "rgba(255,255,255,0.25)", color: "#fff" }}
            aria-hidden="true"
          >
            {displayName.charAt(0).toUpperCase()}
          </div>
          <span className="text-sm font-bold text-white truncate">{displayName}</span>
        </div>
        <div className="p-6" style={{ background: "rgba(255,255,255,0.02)" }}>
          <p className="text-sm text-gray-300 font-semibold mb-2">Hola Ana,</p>
          <p className="text-sm text-gray-400 leading-relaxed mb-5">
            {displayName} te envía un documento para firma. Revísalo y confirma tu firma antes de la fecha límite.
          </p>
          <div
            className="inline-flex items-center px-5 py-2.5 rounded-lg text-sm font-bold text-white transition-all duration-500"
            style={{ background: active.primary, boxShadow: `0 0 20px ${active.primary}44` }}
          >
            Firmar documento
          </div>
        </div>
      </div>

      <p className="text-center text-xs text-gray-600 mt-6 max-w-sm mx-auto">
        Vista previa ilustrativa. Así de fácil se actualizan tus correos y tu portal de firma desde Branding.
      </p>
    </div>
  );
}
