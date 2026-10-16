"use client";

import Script from "next/script";

function initializeLumaCheckout() {
  const lumaWindow = window as Window & { luma?: { initCheckout?: () => void } };
  lumaWindow.luma?.initCheckout?.();
}

export default function LumaEventButton() {
  return (
    <>
      <a
        href="https://luma.com/event/evt-xUVn8e4tSuN2H21"
        className="luma-checkout--button inline-flex min-h-11 items-center justify-center transition-all hover:brightness-110 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[var(--hp-ghost-btn-color)]"
        style={{
          backgroundColor: "#1ECAD3",
          color: "#0A1628",
          border: "1px solid #007880",
          borderRadius: "0.75rem",
          padding: "0.75rem 1.5rem",
          fontSize: "0.875rem",
          fontWeight: 600,
        }}
        data-luma-action="checkout"
        data-luma-event-id="evt-xUVn8e4tSuN2H21"
      >
        Inscribirse al evento
      </a>
      <Script
        id="luma-checkout"
        src="https://embed.lu.ma/checkout-button.js"
        strategy="afterInteractive"
        onReady={initializeLumaCheckout}
      />
    </>
  );
}
