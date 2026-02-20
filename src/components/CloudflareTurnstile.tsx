"use client";

import Script from "next/script";
import { useEffect, useRef, useState } from "react";

const TURNSTILE_SITE_KEY = process.env.NEXT_PUBLIC_TURNSTILE_SITE_KEY || "";

export function TurnstileScript() {
  return (
    <Script
      src="https://challenges.cloudflare.com/turnstile/v0/api.js"
      strategy="afterInteractive"
    />
  );
}

interface TurnstileWidgetProps {
  onVerify: (token: string) => void;
  onError?: () => void;
  onExpire?: () => void;
}

export function TurnstileWidget({ onVerify, onError, onExpire }: TurnstileWidgetProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const widgetIdRef = useRef<string | null>(null);
  const [isReady, setIsReady] = useState(false);

  // Store callbacks in refs to avoid re-renders
  const onVerifyRef = useRef(onVerify);
  const onErrorRef = useRef(onError);
  const onExpireRef = useRef(onExpire);

  useEffect(() => {
    onVerifyRef.current = onVerify;
    onErrorRef.current = onError;
    onExpireRef.current = onExpire;
  }, [onVerify, onError, onExpire]);

  useEffect(() => {
    if (!TURNSTILE_SITE_KEY) {
      console.error("Turnstile: Site key not configured");
      return;
    }

    const renderWidget = () => {
      if (!containerRef.current || !window.turnstile) return;

      // Clear existing widget if any
      if (widgetIdRef.current) {
        try {
          window.turnstile.remove(widgetIdRef.current);
        } catch (e) {
          console.warn("Turnstile: Error removing widget", e);
        }
      }

      try {
        widgetIdRef.current = window.turnstile.render(containerRef.current, {
          sitekey: TURNSTILE_SITE_KEY,
          callback: (token: string) => {
            onVerifyRef.current(token);
          },
          "error-callback": () => {
            onErrorRef.current?.();
          },
          "expired-callback": () => {
            onExpireRef.current?.();
          },
          theme: "light",
        });
        setIsReady(true);
      } catch (e) {
        console.error("Turnstile: Error rendering widget", e);
      }
    };

    // If turnstile is already loaded, render immediately
    if (window.turnstile) {
      renderWidget();
      return;
    }

    // Otherwise, wait for the script to load
    const checkTurnstile = setInterval(() => {
      if (window.turnstile) {
        clearInterval(checkTurnstile);
        renderWidget();
      }
    }, 100);

    // Timeout after 10 seconds
    const timeout = setTimeout(() => {
      clearInterval(checkTurnstile);
      if (!window.turnstile) {
        console.error("Turnstile: Script failed to load");
      }
    }, 10000);

    return () => {
      clearInterval(checkTurnstile);
      clearTimeout(timeout);
      if (widgetIdRef.current && window.turnstile) {
        try {
          window.turnstile.remove(widgetIdRef.current);
        } catch (e) {
          // Ignore cleanup errors
        }
      }
    };
  }, []);

  if (!TURNSTILE_SITE_KEY) {
    return (
      <div className="text-red-500 text-sm">
        Error: Verificación de seguridad no disponible
      </div>
    );
  }

  return (
    <div>
      <div ref={containerRef} className="cf-turnstile" />
      {!isReady && (
        <div className="text-gray-500 text-sm animate-pulse">
          Cargando verificación...
        </div>
      )}
    </div>
  );
}

// Utility to get UTM parameters from URL
export function getUtmParams() {
  if (typeof window === "undefined") {
    return { utm_source: "", utm_medium: "", utm_campaign: "" };
  }

  const params = new URLSearchParams(window.location.search);
  return {
    utm_source: params.get("utm_source") || "",
    utm_medium: params.get("utm_medium") || "",
    utm_campaign: params.get("utm_campaign") || "",
  };
}

// Declare turnstile on window
declare global {
  interface Window {
    turnstile: {
      render: (container: HTMLElement, options: TurnstileOptions) => string;
      reset: (widgetId: string) => void;
      remove: (widgetId: string) => void;
    };
  }
}

interface TurnstileOptions {
  sitekey: string;
  callback: (token: string) => void;
  "error-callback"?: () => void;
  "expired-callback"?: () => void;
  theme?: "light" | "dark" | "auto";
}
