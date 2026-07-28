"use client";

import { useState } from "react";
import { riskListsFaqItems } from "@/lib/riskListsFaq";

export default function RiskListsFAQ() {
  const [openItems, setOpenItems] = useState<Set<string>>(new Set());

  const toggle = (id: string) => {
    setOpenItems((prev) => {
      const next = new Set(prev);
      if (next.has(id)) {
        next.delete(id);
      } else {
        next.add(id);
      }
      return next;
    });
  };

  return (
    <section className="py-20 bg-white" aria-labelledby="faq-heading">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div data-sr className="text-center mb-12">
          <h2 id="faq-heading" className="text-3xl md:text-4xl font-black text-[#202945] mb-4">
            Preguntas frecuentes
          </h2>
        </div>

        <div className="rounded-2xl overflow-hidden border border-gray-100">
          {riskListsFaqItems.map((item, index) => {
            const isOpen = openItems.has(item.id);
            const isLast = index === riskListsFaqItems.length - 1;
            return (
              <div key={item.id} className={isLast ? "" : "border-b border-gray-100"}>
                <button
                  type="button"
                  className="w-full text-left px-6 py-5 flex items-start gap-4 transition-colors hover:bg-gray-50"
                  onClick={() => toggle(item.id)}
                  aria-expanded={isOpen}
                  aria-controls={`risk-faq-answer-${item.id}`}
                  id={`risk-faq-question-${item.id}`}
                >
                  <span
                    className="flex-shrink-0 w-6 h-6 rounded-full flex items-center justify-center mt-0.5 text-sm font-bold transition-all"
                    style={{
                      background: isOpen ? "#1ECAD3" : "#EEF2F5",
                      color: isOpen ? "#fff" : "#64748B",
                      transform: isOpen ? "rotate(45deg)" : "rotate(0deg)",
                    }}
                    aria-hidden="true"
                  >
                    +
                  </span>
                  <span className="flex-1 font-semibold text-[#202945] leading-snug">{item.question}</span>
                </button>
                <div
                  id={`risk-faq-answer-${item.id}`}
                  role="region"
                  aria-labelledby={`risk-faq-question-${item.id}`}
                  className="overflow-hidden transition-all duration-300"
                  style={{ maxHeight: isOpen ? "500px" : "0" }}
                >
                  <p className="text-gray-600 text-sm leading-relaxed px-6 pb-6 pt-2 pl-16">{item.answer}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
