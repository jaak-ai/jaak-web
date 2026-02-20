"use client";

import Script from "next/script";
import { useEffect, useRef, useState, useCallback } from "react";

const TURNSTILE_SITE_KEY = process.env.NEXT_PUBLIC_TURNSTILE || "";

export function TurnstileScript() {
  return (
    <>
      <Script
        src="https://challenges.cloudflare.com/turnstile/v0/api.js?render=explicit"
        strategy="afterInteractive"
      />
      <UtmCapture />
    </>
  );
}

function UtmCapture() {
  useEffect(() => {
    captureUtmParams();
  }, []);
  return null;
}

interface TurnstileWidgetProps {
  onVerify: (token: string) => void;
  onError?: () => void;
  onExpire?: () => void;
}

export function TurnstileWidget({ onVerify, onError, onExpire }: TurnstileWidgetProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const widgetIdRef = useRef<string | null>(null);
  const [status, setStatus] = useState<"loading" | "ready" | "error">("loading");
  const mountedRef = useRef(true);

  const renderWidget = useCallback(() => {
    if (!containerRef.current || !window.turnstile || widgetIdRef.current) return;

    if (!TURNSTILE_SITE_KEY) {
      setStatus("error");
      return;
    }

    try {
      widgetIdRef.current = window.turnstile.render(containerRef.current, {
        sitekey: TURNSTILE_SITE_KEY,
        callback: (token: string) => {
          console.log("Turnstile: Token received");
          if (mountedRef.current) {
            onVerify(token);
          }
        },
        "error-callback": () => {
          console.error("Turnstile error-callback triggered");
          if (mountedRef.current) {
            setStatus("error");
            onError?.();
          }
        },
        "expired-callback": () => {
          console.log("Turnstile: Token expired");
          if (mountedRef.current) {
            onExpire?.();
          }
        },
        theme: "light",
      });

      if (mountedRef.current) {
        setStatus("ready");
      }
    } catch (e) {
      console.error("Turnstile render error:", e);
      if (mountedRef.current) {
        setStatus("error");
      }
    }
  }, [onVerify, onError, onExpire]);

  useEffect(() => {
    mountedRef.current = true;

    const tryRender = () => {
      if (window.turnstile && containerRef.current && !widgetIdRef.current) {
        renderWidget();
        return true;
      }
      return false;
    };

    // Try immediately
    if (tryRender()) return;

    // Poll for turnstile to be available
    const interval = setInterval(() => {
      if (tryRender()) {
        clearInterval(interval);
      }
    }, 200);

    // Timeout after 15 seconds
    const timeout = setTimeout(() => {
      clearInterval(interval);
      if (mountedRef.current && status === "loading") {
        console.error("Turnstile: Timeout waiting for script");
        setStatus("error");
      }
    }, 15000);

    return () => {
      mountedRef.current = false;
      clearInterval(interval);
      clearTimeout(timeout);

      if (widgetIdRef.current && window.turnstile) {
        try {
          window.turnstile.remove(widgetIdRef.current);
        } catch {
          // Ignore cleanup errors
        }
        widgetIdRef.current = null;
      }
    };
  }, [renderWidget, status]);

  if (!TURNSTILE_SITE_KEY) {
    return (
      <div className="p-3 bg-yellow-50 border border-yellow-200 rounded-lg text-yellow-700 text-sm">
        Verificación no configurada
      </div>
    );
  }

  return (
    <div className="min-h-[65px]">
      <div ref={containerRef} />
      {status === "loading" && (
        <div className="flex items-center gap-2 text-gray-500 text-sm">
          <svg className="animate-spin h-4 w-4" viewBox="0 0 24 24">
            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
          </svg>
          Cargando verificación...
        </div>
      )}
      {status === "error" && (
        <div className="p-3 bg-red-50 border border-red-200 rounded-lg text-red-600 text-sm">
          Error al cargar verificación. <button onClick={() => window.location.reload()} className="underline">Recargar página</button>
        </div>
      )}
    </div>
  );
}

// Utility to capture and persist UTM parameters
const UTM_STORAGE_KEY = "jaak_utm_params";

export function captureUtmParams() {
  if (typeof window === "undefined") return;

  const params = new URLSearchParams(window.location.search);
  const utm_source = params.get("utm_source");
  const utm_medium = params.get("utm_medium");
  const utm_campaign = params.get("utm_campaign");

  // Only save if at least one UTM param exists in URL
  if (utm_source || utm_medium || utm_campaign) {
    const utmData = {
      utm_source: utm_source || "",
      utm_medium: utm_medium || "",
      utm_campaign: utm_campaign || "",
      captured_at: Date.now(),
    };
    sessionStorage.setItem(UTM_STORAGE_KEY, JSON.stringify(utmData));
  }
}

export function getUtmParams() {
  if (typeof window === "undefined") {
    return { utm_source: "", utm_medium: "", utm_campaign: "" };
  }

  // First check URL for fresh UTM params
  const params = new URLSearchParams(window.location.search);
  const urlSource = params.get("utm_source");
  const urlMedium = params.get("utm_medium");
  const urlCampaign = params.get("utm_campaign");

  if (urlSource || urlMedium || urlCampaign) {
    return {
      utm_source: urlSource || "",
      utm_medium: urlMedium || "",
      utm_campaign: urlCampaign || "",
    };
  }

  // Fallback to stored UTM params
  try {
    const stored = sessionStorage.getItem(UTM_STORAGE_KEY);
    if (stored) {
      const data = JSON.parse(stored);
      return {
        utm_source: data.utm_source || "",
        utm_medium: data.utm_medium || "",
        utm_campaign: data.utm_campaign || "",
      };
    }
  } catch {
    // Ignore parse errors
  }

  return { utm_source: "", utm_medium: "", utm_campaign: "" };
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
  size?: "normal" | "compact";
}
