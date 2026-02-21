"use client";

import Script from "next/script";

export function KairosSalesChat() {
  return (
    <Script
      src="https://chat.jaak.ai/widget.js"
      strategy="lazyOnload"
      onLoad={() => {
        if (window.JAAKSalesChat) {
          window.JAAKSalesChat.init({
            position: "bottom-right",
            primaryColor: "#0066FF",
            greeting:
              "Hola! Soy el asistente de JAAK. ¿Cómo puedo ayudarte con nuestras soluciones de verificación de identidad?",
            placeholder: "Escribe tu mensaje...",
            companyName: "JAAK",
            onLeadCaptured: (lead) => {
              if (window.gtag) {
                window.gtag("event", "lead_captured", {
                  event_category: "sales_chat",
                  event_label: lead.intent,
                });
              }
            },
          });
        }
      }}
    />
  );
}

declare global {
  interface Window {
    JAAKSalesChat: {
      init: (options: JAAKSalesChatOptions) => void;
      open: () => void;
      close: () => void;
      toggle: () => void;
    };
    gtag?: (...args: unknown[]) => void;
  }
}

interface JAAKSalesChatOptions {
  position?: "bottom-right" | "bottom-left";
  primaryColor?: string;
  greeting?: string;
  placeholder?: string;
  companyName?: string;
  onLeadCaptured?: (lead: { intent: string }) => void;
}
