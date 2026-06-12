"use client";
import { useState, useEffect } from "react";

interface TocItem {
  id: string;
  label: string;
  level: number;
}

const FONT = "var(--font-montserrat), Montserrat, sans-serif";

export default function ArticleTOC() {
  const [items, setItems] = useState<TocItem[]>([]);
  const [active, setActive] = useState("");

  useEffect(() => {
    const container = document.querySelector(".jaak-article-body");
    if (!container) return;

    const headings = Array.from(container.querySelectorAll("h2, h3"));
    const extracted: TocItem[] = headings
      .filter((el) => el.textContent && el.textContent.trim().length > 0)
      .map((el, i) => {
        const id = el.id || `h-${i}`;
        el.id = id;
        return {
          id,
          label: el.textContent?.trim() ?? "",
          level: parseInt(el.tagName[1], 10),
        };
      });
    setItems(extracted);

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            setActive(entry.target.id);
            break;
          }
        }
      },
      { rootMargin: "-80px 0px -65% 0px", threshold: 0 }
    );

    headings.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  if (items.length < 2) return null;

  return (
    <aside className="hidden lg:block">
      <div
        className="sticky top-24 max-h-[calc(100vh-8rem)] overflow-y-auto"
        style={{ scrollbarWidth: "none" }}
      >
        <p
          className="text-[10px] font-bold tracking-widest uppercase mb-4"
          style={{ color: "#1ECAD3", fontFamily: FONT }}
        >
          Contenido
        </p>
        <nav className="flex flex-col gap-0.5">
          {items.map((item) => {
            const isActive = active === item.id;
            return (
              <a
                key={item.id}
                href={`#${item.id}`}
                className="block text-xs leading-relaxed py-1 transition-colors duration-150 rounded-sm"
                style={{
                  paddingLeft: item.level === 3 ? "0.875rem" : "0",
                  color: isActive ? "#1ECAD3" : "rgba(255,255,255,0.38)",
                  fontFamily: FONT,
                  fontWeight: isActive ? 700 : 500,
                  borderLeft: isActive
                    ? "2px solid #1ECAD3"
                    : "2px solid transparent",
                  paddingLeft:
                    item.level === 3
                      ? isActive
                        ? "calc(0.875rem + 6px)"
                        : "calc(0.875rem + 8px)"
                      : isActive
                      ? "6px"
                      : "8px",
                  transition: "color 0.15s, border-color 0.15s",
                }}
              >
                {item.label.length > 55
                  ? item.label.slice(0, 52) + "…"
                  : item.label}
              </a>
            );
          })}
        </nav>
      </div>
    </aside>
  );
}
