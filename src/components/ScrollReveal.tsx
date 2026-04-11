"use client";
import { useEffect } from "react";

export default function ScrollReveal() {
  useEffect(() => {
    const style = document.createElement("style");
    style.id = "scroll-reveal-styles";
    style.textContent = `
      [data-sr] {
        opacity: 0;
        transform: translateY(32px);
        transition: opacity 0.65s cubic-bezier(0.22,1,0.36,1),
                    transform 0.65s cubic-bezier(0.22,1,0.36,1);
      }
      [data-sr="left"]  { transform: translateX(-36px); }
      [data-sr="right"] { transform: translateX(36px); }
      [data-sr="scale"] { transform: scale(0.93) translateY(16px); }

      [data-sr].sr-in {
        opacity: 1;
        transform: none;
      }

      [data-sr-grid] > * {
        opacity: 0;
        transform: translateY(28px);
        transition: opacity 0.55s cubic-bezier(0.22,1,0.36,1),
                    transform 0.55s cubic-bezier(0.22,1,0.36,1);
      }
      [data-sr-grid].sr-in > *:nth-child(1)  { transition-delay: 0ms; }
      [data-sr-grid].sr-in > *:nth-child(2)  { transition-delay: 80ms; }
      [data-sr-grid].sr-in > *:nth-child(3)  { transition-delay: 160ms; }
      [data-sr-grid].sr-in > *:nth-child(4)  { transition-delay: 240ms; }
      [data-sr-grid].sr-in > *:nth-child(5)  { transition-delay: 320ms; }
      [data-sr-grid].sr-in > *:nth-child(6)  { transition-delay: 400ms; }
      [data-sr-grid].sr-in > * {
        opacity: 1;
        transform: none;
      }

      @media (prefers-reduced-motion: reduce) {
        [data-sr], [data-sr-grid] > * {
          opacity: 1 !important;
          transform: none !important;
          transition: none !important;
        }
      }
    `;
    if (!document.getElementById("scroll-reveal-styles")) {
      document.head.appendChild(style);
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("sr-in");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.08, rootMargin: "0px 0px -48px 0px" }
    );

    document
      .querySelectorAll("[data-sr], [data-sr-grid]")
      .forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return null;
}
