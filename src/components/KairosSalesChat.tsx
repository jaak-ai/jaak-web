"use client";

import Script from "next/script";
import { useEffect } from "react";

export function KairosSalesChat() {
  useEffect(() => {
    // Configure kairosChat before script loads
    window.kairosChat = {
      apiUrl: "https://chat-api.jaak.ai",
      wsUrl: "wss://chat-api.jaak.ai",
    };
  }, []);

  return (
    <Script
      src="https://chat-widget.jaak.ai/widget.js"
      strategy="lazyOnload"
    />
  );
}

declare global {
  interface Window {
    kairosChat: {
      apiUrl: string;
      wsUrl: string;
    };
  }
}
