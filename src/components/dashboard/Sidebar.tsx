"use client";

import Link from "next/link";

export default function Sidebar() {
  const navItems = [
    { label: "Dashboard", href: "/dashboard", icon: "📊" },
    { label: "Expedientes", href: "/dashboard/cases", icon: "📋" },
    { label: "Listas negras", href: "/dashboard/blacklist", icon: "🚫" },
    { label: "Auditoría", href: "/dashboard/audit", icon: "🔍" },
    { label: "Reportes", href: "/dashboard/reports", icon: "📈" },
  ];

  return (
    <aside className="w-64 border-r border-[#E2E8F0] bg-white p-6 flex flex-col">
      {/* Logo */}
      <div className="mb-8">
        <Link href="/dashboard" className="text-xl font-black text-[#212A45]">
          JAAK
        </Link>
        <p className="text-xs text-[#94A3B8] mt-1">Control Center</p>
      </div>

      {/* Nav */}
      <nav className="space-y-2 flex-1">
        {navItems.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            className="flex items-center gap-3 px-4 py-2.5 rounded-lg text-sm font-500 text-[#64748B] hover:bg-[#F1F5F9] hover:text-[#212A45] transition-colors"
          >
            <span>{item.icon}</span>
            {item.label}
          </Link>
        ))}
      </nav>

      {/* Footer */}
      <div className="pt-6 border-t border-[#E2E8F0]">
        <p className="text-xs text-[#94A3B8]">v1.0 — Beta</p>
      </div>
    </aside>
  );
}
