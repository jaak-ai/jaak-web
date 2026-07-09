"use client";

import MetricsGrid from "@/components/dashboard/MetricsGrid";
import CasesTable from "@/components/dashboard/CasesTable";
import HeaderFilters from "@/components/dashboard/HeaderFilters";

export default function DashboardPage() {
  return (
    <div className="p-8">
      {/* Header + Filters */}
      <HeaderFilters />

      {/* Metrics */}
      <section className="mt-8 mb-12">
        <h2 className="text-lg font-600 text-[#212A45] mb-4">Resumen</h2>
        <MetricsGrid />
      </section>

      {/* Cases Table */}
      <section>
        <h2 className="text-lg font-600 text-[#212A45] mb-4">Expedientes en revisión</h2>
        <CasesTable />
      </section>
    </div>
  );
}
