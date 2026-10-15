"use client";

import Script from "next/script";

export default function LumaEventButton() {
  return (
    <>
      <a
        href="https://luma.com/event/evt-xUVn8e4tSuN2H21"
        className="luma-checkout--button inline-flex min-h-11 items-center justify-center rounded-xl border border-[#007880] bg-[#1ECAD3] px-6 py-3 text-sm font-semibold text-[#0A1628] transition-colors hover:bg-[#49D7DE] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[var(--hp-ghost-btn-color)]"
        data-luma-action="checkout"
        data-luma-event-id="evt-xUVn8e4tSuN2H21"
      >
        Inscribirse al evento
      </a>
      <Script
        id="luma-checkout"
        src="https://embed.lu.ma/checkout-button.js"
        strategy="afterInteractive"
      />
    </>
  );
}
