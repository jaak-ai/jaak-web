"use client";

import { useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { gtmEvent } from "@/components/GoogleTagManager";

/**
 * Success redirect from Stripe Payment Link.
 * Note: client-side we cannot fully verify payment without session API;
 * treat as thank-you UX + fire purchase intent event. Server webhook = SoT.
 */
export default function FirmaSimpleCobreGraciasPage() {
  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const sessionId = params.get("session_id") || "";
    gtmEvent("purchase", {
      page: "firma-simple-cobre/gracias",
      experiment: "B_express_checkout",
      transaction_id: sessionId || undefined,
      value: 56.84,
      currency: "MXN",
      items: [{ item_id: "firma-simple.cobre", item_name: "Firma Simple Cobre", quantity: 1 }],
    });
    gtmEvent("payment_success_page", {
      experiment: "B_express_checkout",
      has_session: Boolean(sessionId),
    });
  }, []);

  return (
    <div
      style={{
        minHeight: "100dvh",
        background: "#fbfbfd",
        color: "#0a0a0c",
        fontFamily:
          'var(--font-montserrat), Montserrat, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
        display: "grid",
        placeItems: "center",
        padding: "32px 20px",
      }}
    >
      <main
        style={{
          maxWidth: 480,
          width: "100%",
          background: "#fff",
          borderRadius: 28,
          border: "1px solid rgba(0,0,0,0.08)",
          boxShadow: "0 24px 60px rgba(14,17,51,0.08)",
          padding: "36px 28px",
          textAlign: "center",
        }}
      >
        <Image
          src="/images/logos/jaak-logo-azul.png"
          alt="JAAK"
          width={80}
          height={30}
          style={{ height: 24, width: "auto", margin: "0 auto 20px" }}
        />
        <div
          style={{
            width: 56,
            height: 56,
            borderRadius: "50%",
            background: "rgba(42,215,150,0.15)",
            color: "#128a5c",
            display: "grid",
            placeItems: "center",
            margin: "0 auto 18px",
            fontSize: 28,
            fontWeight: 700,
          }}
          aria-hidden
        >
          ✓
        </div>
        <h1
          style={{
            fontSize: "1.75rem",
            letterSpacing: "-0.03em",
            fontWeight: 700,
            margin: "0 0 10px",
          }}
        >
          Pago recibido
        </h1>
        <p style={{ color: "#6e6e73", lineHeight: 1.5, margin: "0 0 22px", fontSize: 15 }}>
          Gracias. Estamos activando tu paquete <strong>Firma Simple Cobre</strong> (10 firmas).
          Te contactamos al correo del pago si hace falta un paso de acceso.
        </p>
        <p style={{ color: "#6e6e73", fontSize: 13, margin: "0 0 28px" }}>
          Soporte:{" "}
          <a href="mailto:hola@jaak.ai" style={{ color: "#0e1133", fontWeight: 600 }}>
            hola@jaak.ai
          </a>
        </p>
        <Link
          href="https://platform.jaak.ai"
          style={{
            display: "inline-flex",
            alignItems: "center",
            justifyContent: "center",
            minHeight: 48,
            padding: "12px 22px",
            borderRadius: 980,
            background: "#0e1133",
            color: "#fff",
            fontWeight: 650,
            textDecoration: "none",
            fontSize: 15,
          }}
        >
          Ir a la plataforma
        </Link>
      </main>
    </div>
  );
}
