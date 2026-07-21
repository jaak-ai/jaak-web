#!/usr/bin/env python3
"""Create Stripe Payment Link for Firma Simple Cobre experiment B.

Usage:
  export STRIPE_SECRET_KEY=sk_live_...   # or sk_test_...
  python3 scripts/create_firma_simple_cobre_payment_link.py
  python3 scripts/create_firma_simple_cobre_payment_link.py --live   # refuses sk_test

Creates/reuses product + one-time price 5684 MXN cents ($49 + 16% IVA)
and a Payment Link with redirect to /firma-simple-cobre/gracias.

Does not print full secrets. Writes JSON summary to stdout and optional --out path.
"""
from __future__ import annotations

import argparse
import json
import os
import sys
import urllib.error
import urllib.parse
import urllib.request
from pathlib import Path

PRICE_CENTS = 5684  # 49 * 1.16
SUCCESS_URL = (
    "https://www.jaak.ai/firma-simple-cobre/gracias?session_id={CHECKOUT_SESSION_ID}"
)
PRODUCT_NAME = "Firma Simple Cobre — 10 firmas"


def stripe(sk: str, method: str, path: str, data: dict | None = None) -> dict:
    url = "https://api.stripe.com/v1" + path
    body = (
        urllib.parse.urlencode(data, doseq=True).encode() if data is not None else None
    )
    req = urllib.request.Request(url, data=body, method=method)
    req.add_header("Authorization", f"Bearer {sk}")
    if body is not None:
        req.add_header("Content-Type", "application/x-www-form-urlencoded")
    try:
        with urllib.request.urlopen(req, timeout=60) as r:
            return json.loads(r.read().decode())
    except urllib.error.HTTPError as e:
        err = e.read().decode()
        raise SystemExit(f"Stripe API {e.code} {path}: {err[:500]}") from e


def main() -> int:
    ap = argparse.ArgumentParser()
    ap.add_argument("--live", action="store_true", help="Require sk_live key")
    ap.add_argument("--out", type=Path, help="Write JSON summary path")
    args = ap.parse_args()

    sk = os.environ.get("STRIPE_SECRET_KEY") or os.environ.get("STRIPE_API_KEY") or ""
    if not sk.startswith("sk_"):
        print(
            "Set STRIPE_SECRET_KEY (sk_live_… or sk_test_…).",
            file=sys.stderr,
        )
        return 2
    if args.live and not sk.startswith("sk_live_"):
        print("--live requires sk_live_ key", file=sys.stderr)
        return 2

    mode = "live" if sk.startswith("sk_live_") else "test"

    prods = stripe(sk, "GET", "/products?limit=100&active=true")
    prod = None
    for p in prods.get("data") or []:
        if (
            p.get("name") == PRODUCT_NAME
            or (p.get("metadata") or {}).get("sku") == "firma-simple.cobre"
        ):
            prod = p
            break
    if not prod:
        prod = stripe(
            sk,
            "POST",
            "/products",
            {
                "name": PRODUCT_NAME,
                "description": "10 firmas electrónicas simples JAAK. Activación post-pago.",
                "metadata[sku]": "firma-simple.cobre",
                "metadata[campaign]": "firma_simple_cobre_360_jul2026",
                "metadata[firmas]": "10",
                "metadata[tier]": "cobre",
            },
        )

    prices = stripe(sk, "GET", f"/prices?product={prod['id']}&active=true&limit=20")
    price = None
    for pr in prices.get("data") or []:
        if (
            pr.get("unit_amount") == PRICE_CENTS
            and pr.get("currency") == "mxn"
            and pr.get("type") == "one_time"
        ):
            price = pr
            break
    if not price:
        price = stripe(
            sk,
            "POST",
            "/prices",
            {
                "product": prod["id"],
                "unit_amount": str(PRICE_CENTS),
                "currency": "mxn",
                "metadata[sku]": "firma-simple.cobre",
                "metadata[base_mxn]": "49",
                "metadata[iva]": "0.16",
                "metadata[includes_iva]": "true",
            },
        )

    link = stripe(
        sk,
        "POST",
        "/payment_links",
        {
            "line_items[0][price]": price["id"],
            "line_items[0][quantity]": "1",
            "after_completion[type]": "redirect",
            "after_completion[redirect][url]": SUCCESS_URL,
            "allow_promotion_codes": "false",
            "billing_address_collection": "auto",
            "phone_number_collection[enabled]": "false",
            "customer_creation": "if_required",
            "invoice_creation[enabled]": "true",
            "metadata[sku]": "firma-simple.cobre",
            "metadata[campaign]": "firma_simple_cobre_360_jul2026",
            "metadata[experiment]": "B_express_checkout",
            "payment_intent_data[metadata][sku]": "firma-simple.cobre",
            "payment_intent_data[metadata][campaign]": "firma_simple_cobre_360_jul2026",
            "payment_intent_data[metadata][experiment]": "B_express_checkout",
            "restrictions[completed_sessions][limit]": "500",
        },
    )

    summary = {
        "mode": mode,
        "product_id": prod["id"],
        "price_id": price["id"],
        "payment_link_id": link["id"],
        "url": link["url"],
        "amount_cents": PRICE_CENTS,
        "currency": "mxn",
        "amount_display": "56.84 MXN (49 + IVA 16%)",
        "success_url": SUCCESS_URL,
        "env_var": f"NEXT_PUBLIC_STRIPE_PAYMENT_LINK_FIRMA_SIMPLE_COBRE={link['url']}",
    }
    print(json.dumps(summary, indent=2))
    if args.out:
        args.out.parent.mkdir(parents=True, exist_ok=True)
        args.out.write_text(json.dumps(summary, indent=2) + "\n")
    return 0


if __name__ == "__main__":
    raise SystemExit(main())
