"use client";

import Script from "next/script";

export function KairosSalesChat() {
  return (
    <Script
      src="https://chat-widget.jaak.ai/widget.js"
      strategy="afterInteractive"
      onLoad={() => {
        if (window.JAAKSalesChat) {
          window.JAAKSalesChat.init({
            position: "bottom-right",
            primaryColor: "#0066FF",
            greeting:
              "Hola! Soy el asistente de JAAK. ¿Cómo puedo ayudarte con nuestras soluciones de verificación de identidad?",
            placeholder: "Escribe tu mensaje...",
            companyName: "JAAK",
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
      _initialized?: boolean;
    };
  }
}

interface JAAKSalesChatOptions {
  position?: "bottom-right" | "bottom-left";
  primaryColor?: string;
  greeting?: string;
  placeholder?: string;
  companyName?: string;
}
