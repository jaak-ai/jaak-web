"use client";

import Script from "next/script";
import { useEffect, useState } from "react";

const KAIROS_WIDGET_URL = process.env.NEXT_PUBLIC_KAIROS_WIDGET_URL || "https://chat.kairos.jaak.ai/widget.js";
const KAIROS_TENANT_ID = process.env.NEXT_PUBLIC_KAIROS_TENANT_ID || "jaak";

export function KairosSalesChat() {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    if (isLoaded && window.KairosChat) {
      window.KairosChat.init({
        tenantId: KAIROS_TENANT_ID,
        position: "bottom-right",
      });
    }
  }, [isLoaded]);

  return (
    <Script
      src={KAIROS_WIDGET_URL}
      strategy="afterInteractive"
      onLoad={() => setIsLoaded(true)}
    />
  );
}

// Declare KairosChat on window
declare global {
  interface Window {
    KairosChat: {
      init: (options: KairosChatOptions) => void;
      open?: () => void;
      close?: () => void;
      destroy?: () => void;
    };
  }
}

interface KairosChatOptions {
  tenantId: string;
  position?: "bottom-right" | "bottom-left";
}
