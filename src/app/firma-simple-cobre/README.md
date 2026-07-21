# Experimento B — Firma Simple Cobre (LP + Stripe Payment Link)

Fecha: 2026-07-21  
Ruta LP: `/firma-simple-cobre`  
Gracias: `/firma-simple-cobre/gracias`

## Qué es
Landing 1-SKU (Apple-like) con CTA directo a **Stripe Payment Link**.  
No usa `platform.jaak.ai/#/register` multi-paso.

## Precio
- Lista: **$49 MXN** + IVA 16%
- Cargo Stripe: **$56.84 MXN** (5684 centavos)

## Env
```bash
# LIVE (producción Vercel)
NEXT_PUBLIC_STRIPE_PAYMENT_LINK_FIRMA_SIMPLE_COBRE=https://buy.stripe.com/....

# Dev puede usar test automáticamente si no hay LIVE
```

## Crear Payment Link

```bash
export STRIPE_SECRET_KEY=sk_live_...   # no está en 1Password notes hoy (solo pk_live + sk_test)
python3 scripts/create_firma_simple_cobre_payment_link.py --live --out /tmp/plink-live.json
# pegar env_var en Vercel
```

Test ya creado (dev):
- ver `~/.hermes/state/firma_simple_cobre_payment_link.json`

## Fulfillment (manual SLA hasta webhook)
1. Stripe notifica pago (email + Dashboard)
2. Activar 10 firmas Cobre al email del pagador en platform
3. Registrar deal/conversion en Kairos si el email matchea engager
4. Owner: ops/comercial (documentar quién)

## Eventos GTM
- `lp_view`
- `begin_checkout` / `checkout_click`
- `purchase` en página gracias (client; SoT = Stripe)

## Kill / éxito
Ver CONSENSO B 2026-07-21: ≥1 compra atribuida en ≤7d; kill si 0 con tráfico cualificado.
