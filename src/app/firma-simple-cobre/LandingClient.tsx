"use client";

import { useEffect, useMemo, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { gtmEvent } from "@/components/GoogleTagManager";
import { getUtmParams } from "@/components/CloudflareTurnstile";
import ScrollReveal from "@/components/ScrollReveal";
import { persistAttribution } from "@/lib/attribution";
import {
  checkoutClientReference,
  identityFields,
  useLpFunnel,
} from "@/lib/useLpFunnel";
import "./firma-simple-cobre.css";

/** Base MXN antes de IVA — catálogo firma-simple cobre. */
const PRICE_BASE = 49;
const IVA = 0.16;
const PRICE_TOTAL = Math.round(PRICE_BASE * (1 + IVA) * 100) / 100;
const FIRMAS = 10;

/**
 * Payment Link Stripe (Checkout express).
 * LIVE: NEXT_PUBLIC_STRIPE_PAYMENT_LINK_FIRMA_SIMPLE_COBRE
 * TEST fallback only outside production.
 */
const LIVE_LINK = process.env.NEXT_PUBLIC_STRIPE_PAYMENT_LINK_FIRMA_SIMPLE_COBRE || "";
const TEST_LINK =
  process.env.NEXT_PUBLIC_STRIPE_PAYMENT_LINK_FIRMA_SIMPLE_COBRE_TEST ||
  "https://buy.stripe.com/test_dRm6oHe7y7bn4PZ4Ys83C00";

function resolvePaymentHref(): { href: string; mode: "live" | "test" | "missing" } {
  if (LIVE_LINK.startsWith("https://buy.stripe.com/") && !LIVE_LINK.includes("/test_")) {
    return { href: LIVE_LINK, mode: "live" };
  }
  if (process.env.NODE_ENV !== "production") {
    return { href: TEST_LINK, mode: "test" };
  }
  if (LIVE_LINK) return { href: LIVE_LINK, mode: LIVE_LINK.includes("/test_") ? "test" : "live" };
  return { href: "", mode: "missing" };
}

function appendClientReference(base: string, ref: string): string {
  try {
    const u = new URL(base);
    if (ref) u.searchParams.set("client_reference_id", ref.slice(0, 200));
    return u.toString();
  } catch {
    return base;
  }
}

function formatMXN(n: number): string {
  return new Intl.NumberFormat("es-MX", {
    style: "currency",
    currency: "MXN",
    minimumFractionDigits: n % 1 === 0 ? 0 : 2,
    maximumFractionDigits: 2,
  }).format(n);
}

const INCLUDES = [
  {
    t: "10 firmas incluidas",
    d: "Plan Cobre para NDAs, acuerdos internos y documentos de bajo riesgo.",
  },
  {
    t: "Flujo 100% digital",
    d: "Sin instalar software. Invita firmantes por correo y da seguimiento.",
  },
  {
    t: "Trazabilidad básica",
    d: "Evidencia de cada firma. Activación después del pago.",
  },
];

export default function FirmaSimpleCobreClient() {
  const [scrolled, setScrolled] = useState(false);
  const payment = useMemo(() => resolvePaymentHref(), []);

  // Full traffic ID + funnel (scroll, bot/human, channel, heartbeat → GTM + /api/lp-telemetry)
  useLpFunnel({
    page: "/firma-simple-cobre",
    experiment: "B_express_checkout",
    sku: "firma-simple.cobre",
    payment_mode: payment.mode,
    beacon: true,
  });

  useEffect(() => {
    try {
      persistAttribution(window.location.search, window.localStorage, Date.now());
    } catch {
      /* non-fatal */
    }
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const goCheckout = (location: string) => {
    const utm = getUtmParams();
    const id = identityFields();
    const ref = checkoutClientReference([
      utm.utm_campaign || "firma_simple_cobre_360_jul2026",
      utm.utm_content || "lp_compra",
      utm.utm_medium || "kairos_ai",
      String(id.channel || ""),
    ]);

    const payload = {
      page: "firma-simple-cobre",
      location,
      experiment: "B_express_checkout",
      value: PRICE_TOTAL,
      currency: "MXN",
      items: [
        {
          item_id: "firma-simple.cobre",
          item_name: "Firma Simple Cobre",
          price: PRICE_BASE,
          quantity: 1,
        },
      ],
      utm_campaign: utm.utm_campaign,
      utm_content: utm.utm_content,
      utm_medium: utm.utm_medium,
      utm_source: utm.utm_source,
      payment_mode: payment.mode,
      ...id,
    };

    gtmEvent("begin_checkout", payload);
    gtmEvent("checkout_click", {
      location,
      experiment: "B_express_checkout",
      ...id,
    });

    // first-party leave-for-stripe marker
    try {
      const body = JSON.stringify({
        event: "lp_to_stripe",
        ...payload,
        ts: Date.now(),
      });
      navigator.sendBeacon?.(
        "/api/lp-telemetry",
        new Blob([body], { type: "application/json" })
      );
    } catch {
      /* ignore */
    }

    if (!payment.href) {
      alert("Checkout temporalmente no configurado. Escríbenos a hola@jaak.ai");
      return;
    }
    window.location.href = appendClientReference(payment.href, ref);
  };

  return (
    <div className="fsc-root">
      <ScrollReveal />

      {payment.mode === "test" && (
        <div className="fsc-mode-pill" role="status">
          Checkout TEST Stripe
        </div>
      )}
      {payment.mode === "missing" && (
        <div className="fsc-mode-pill" role="status">
          Falta Payment Link LIVE en env
        </div>
      )}

      <header className={`fsc-nav${scrolled ? " is-scrolled" : ""}`}>
        <div className="fsc-nav-inner">
          <Link href="/" className="fsc-brand" aria-label="JAAK inicio">
            <Image
              src="/images/logos/jaak-logo-azul.png"
              alt="JAAK"
              width={86}
              height={32}
              priority
              style={{ width: "auto", height: 26 }}
            />
            <span>Firma Simple</span>
          </Link>
          <button type="button" className="fsc-nav-cta" data-cta-track data-cta-location="nav" onClick={() => goCheckout("nav")}>
            Pagar ahora
          </button>
        </div>
      </header>

      <main>
        <div className="fsc-hero-wrap">
          <section className="fsc-hero">
            <div className="fsc-hero-copy">
              <div className="fsc-eyebrow">
                <i /> Plan Cobre · Activación post-pago
              </div>
              <h1 className="fsc-h1">
                Firma electrónica simple.
                <br />
                <em>10 firmas listas hoy.</em>
              </h1>
              <p className="fsc-lede">
                Compra el paquete Cobre de JAAK, paga con tarjeta y activa tus firmas sin catálogo
                multi-paso ni registro largo previo.
              </p>
              <div className="fsc-price-block">
                <div className="fsc-price">
                  {formatMXN(PRICE_BASE)}
                  <small>+ IVA</small>
                </div>
              </div>
              <p className="fsc-price-note">
                Total a pagar: <strong>{formatMXN(PRICE_TOTAL)}</strong> · {FIRMAS} firmas · pago
                único
              </p>
              <button
                type="button"
                className="fsc-cta-primary"
                data-cta-track
                data-cta-location="hero"
                onClick={() => goCheckout("hero")}
              >
                Continuar al pago seguro
                <svg viewBox="0 0 24 24" fill="none" aria-hidden>
                  <path
                    d="M5 12h14M13 6l6 6-6 6"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </button>
              <div className="fsc-trust">
                <span>Checkout Stripe</span>
                <span>Sin carrito multi-producto</span>
                <span>Marca JAAK</span>
              </div>
            </div>

            <aside className="fsc-card fsc-hero-card" aria-label="Resumen del plan">
              <div className="fsc-badge">Cobre</div>
              <h2>Firma Simple</h2>
              <p className="sub">
                Paquete de arranque para equipos que necesitan firmar documentos con rapidez y
                control básico.
              </p>
              <div className="fsc-metric">
                <div>
                  <strong>{FIRMAS}</strong>
                  <span>firmas incluidas</span>
                </div>
                <div>
                  <strong>{formatMXN(PRICE_BASE)}</strong>
                  <span>+ IVA · pago único</span>
                </div>
              </div>
              <ul className="fsc-list">
                {INCLUDES.map((item) => (
                  <li key={item.t}>
                    <span className="fsc-check" aria-hidden>
                      <svg viewBox="0 0 24 24" fill="none">
                        <path
                          d="M5 12.5l4.5 4.5L19 7"
                          stroke="currentColor"
                          strokeWidth="2.4"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </span>
                    <span>
                      <b>{item.t}</b>
                      {item.d}
                    </span>
                  </li>
                ))}
              </ul>
            </aside>
          </section>
        </div>

        <section className="fsc-section">
          <h3 data-sr>Tres pasos. Sin fricción de plataforma.</h3>
          <p className="sec-lede" data-sr>
            Diseñado para cerrar la compra en minutos — no para navegar un marketplace.
          </p>
          <div className="fsc-grid" data-sr-grid>
            <article className="fsc-tile">
              <div className="num">01</div>
              <h4>Pagas</h4>
              <p>Tarjeta en Stripe. Precio claro. Un solo producto.</p>
            </article>
            <article className="fsc-tile">
              <div className="num">02</div>
              <h4>Confirmamos</h4>
              <p>Recibes confirmación al correo del pago y activamos el paquete Cobre.</p>
            </article>
            <article className="fsc-tile">
              <div className="num">03</div>
              <h4>Firmas</h4>
              <p>Envías documentos a firmar desde la plataforma JAAK.</p>
            </article>
          </div>

          <div className="fsc-faq" data-sr>
            <details>
              <summary>¿Qué incluye exactamente?</summary>
              <p>
                {FIRMAS} firmas electrónicas simples (sin NOM-151 ni biometría). Flujo digital,
                notificaciones a firmantes y trazabilidad básica. No incluye sello de tiempo
                certificado por PSC.
              </p>
            </details>
            <details>
              <summary>¿Por qué el total es {formatMXN(PRICE_TOTAL)}?</summary>
              <p>
                El precio de lista es {formatMXN(PRICE_BASE)} MXN + IVA 16%. Stripe cobra el total
                con impuesto: {formatMXN(PRICE_TOTAL)} MXN.
              </p>
            </details>
            <details>
              <summary>¿Necesito crear cuenta antes de pagar?</summary>
              <p>
                No. Este checkout es express: pagas primero. Después te guiamos para activar el
                acceso con el correo del pago.
              </p>
            </details>
            <details>
              <summary>¿Es válido en México?</summary>
              <p>
                Firma Simple sirve para documentos de bajo riesgo y consentimiento digital con
                trazabilidad básica. Si necesitas NOM-151 con sello de tiempo PSC, el plan avanzado
                es otro producto.
              </p>
            </details>
          </div>

          <div className="fsc-cta-row" data-sr>
            <button
              type="button"
              className="fsc-cta-primary fsc-cta-navy"
              data-cta-track
              data-cta-location="mid"
              onClick={() => goCheckout("mid")}
            >
              Pagar {formatMXN(PRICE_TOTAL)}
            </button>
          </div>
        </section>
      </main>

      <footer className="fsc-footer">
        <p>
          © {new Date().getFullYear()} JAAK IT S.A.P.I. de C.V. ·{" "}
          <Link href="/aviso-de-privacidad">Privacidad</Link> ·{" "}
          <a href="mailto:hola@jaak.ai">hola@jaak.ai</a>
        </p>
        <p style={{ marginTop: 8 }}>
          ¿Prefieres el catálogo completo?{" "}
          <Link href="/autoservicio?sel=firma-simple.cobre">Abrir autoservicio</Link>
        </p>
      </footer>

      <div className="fsc-sticky">
        <button
          type="button"
          className="fsc-cta-primary"
          data-cta-track
          data-cta-location="sticky"
          onClick={() => goCheckout("sticky")}
        >
          Pagar {formatMXN(PRICE_TOTAL)} · Stripe
        </button>
      </div>
    </div>
  );
}
