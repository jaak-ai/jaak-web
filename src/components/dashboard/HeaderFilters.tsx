"use client";

import { useState } from "react";

export default function HeaderFilters() {
  const [search, setSearch] = useState("");

  return (
    <div>
      <div className="flex items-center justify-between mb-6">
        <div>
          <h1 className="text-2xl font-black text-[#212A45]">Dashboard Cumplimiento</h1>
          <p className="text-sm text-[#94A3B8] mt-1">Auditoría y verificación en tiempo real</p>
        </div>
      </div>

      {/* Filters */}
      <div className="flex flex-col sm:flex-row gap-4">
        {/* Search */}
        <input
          type="text"
          placeholder="Buscar por ID, nombre o email..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="flex-1 px-4 py-2.5 border border-[#E2E8F0] rounded-lg bg-white text-sm text-[#212A45] placeholder-[#94A3B8] focus:outline-none focus:ring-2 focus:ring-[#2DB6C1]"
        />

        {/* Filter buttons */}
        <div className="flex gap-2">
          <select className="px-4 py-2.5 border border-[#E2E8F0] rounded-lg bg-white text-sm font-500 text-[#64748B] focus:outline-none focus:ring-2 focus:ring-[#2DB6C1]">
            <option>Todos los tipos</option>
            <option>KYC</option>
            <option>Firma</option>
            <option>AML</option>
          </select>

          <select className="px-4 py-2.5 border border-[#E2E8F0] rounded-lg bg-white text-sm font-500 text-[#64748B] focus:outline-none focus:ring-2 focus:ring-[#2DB6C1]">
            <option>Último mes</option>
            <option>Última semana</option>
            <option>Hoy</option>
          </select>
        </div>
      </div>
    </div>
  );
}
