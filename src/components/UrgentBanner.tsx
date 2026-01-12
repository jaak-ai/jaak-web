"use client";

import Link from "next/link";

export default function UrgentBanner() {
  return (
    <div className="bg-gradient-to-r from-[#212A45] via-[#0E1133] to-[#212A45] text-white py-2.5 px-4">
      <div className="max-w-7xl mx-auto flex items-center justify-center gap-2 text-sm">
        <span className="relative flex h-2 w-2">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#2AD796] opacity-75"></span>
          <span className="relative inline-flex rounded-full h-2 w-2 bg-[#2AD796]"></span>
        </span>
        <span className="text-white/90">
          <span className="hidden sm:inline">No puedes esperar.</span>
          <span className="font-semibold text-white"> Agenda una demo ahora</span>
        </span>
        <Link
          href="https://meetings.hubspot.com/jaak-demo/reunion-demo?uuid=104e4d38-124f-42c0-8417-e1d728b5b8ce"
          target="_blank"
          rel="noopener noreferrer"
          className="ml-2 inline-flex items-center gap-1.5 px-3 py-1 bg-[#2DB6C1] hover:bg-[#25969f] text-white text-xs font-bold rounded-full transition-all hover:scale-105"
        >
          Agendar
          <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
          </svg>
        </Link>
      </div>
    </div>
  );
}
