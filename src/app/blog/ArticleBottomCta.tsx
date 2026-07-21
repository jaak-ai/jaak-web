"use client";

import Link from "next/link";
import { gtmEvent } from "@/components/GoogleTagManager";
import { getBlogCta } from "@/lib/blogCta";
import { getWhatsAppUrl } from "@/lib/whatsapp";

const FONT = "var(--font-montserrat), Montserrat, sans-serif";

export default function ArticleBottomCta({ slug, category }: { slug: string; category: string }) {
  const cta = getBlogCta({ slug, category });

  return (
    <div className="flex flex-col items-center gap-4">
      <Link
        href={cta.href}
        onClick={() =>
          gtmEvent(cta.destination === "contacto" ? "contact_click" : "blog_demo_click", {
            source: "blog",
            destination: cta.destination,
            page_path: window.location.pathname,
          })
        }
        data-cta="article-bottom-cta"
        data-source="blog"
        className="px-6 py-3 rounded-xl font-black text-sm transition-all hover:-translate-y-0.5"
        style={{ background: "#1ECAD3", color: "#202945", fontFamily: FONT }}
      >
        {cta.label}
      </Link>
      <a
        href={getWhatsAppUrl("blog")}
        target="_blank"
        rel="noopener noreferrer"
        onClick={() =>
          gtmEvent("whatsapp_click", { source: "blog", destination: "whatsapp", page_path: window.location.pathname })
        }
        data-cta="whatsapp"
        data-source="blog"
        className="text-sm font-semibold underline underline-offset-2 transition-colors"
        style={{ color: "rgba(255,255,255,0.6)", fontFamily: FONT }}
      >
        Escríbenos por WhatsApp
      </a>
    </div>
  );
}
