"use client";

import { useState } from "react";
import { useLanguage } from "@/contexts/language-context";

export const FaqSection = () => {
  const { translations } = useLanguage();
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="faq" className="section-wrapper">
      <div className="max-w-3xl">
        <h2 className="section-title">{translations.faq.title}</h2>
        <p className="section-subtitle">{translations.faq.subtitle}</p>
      </div>
      <div className="mt-12 space-y-4">
        {translations.faq.items.map((item, index) => {
          const isOpen = openIndex === index;
          return (
            <div key={item.question} className="card">
              <button
                className="flex w-full items-center justify-between gap-4 text-left"
                onClick={() => setOpenIndex(isOpen ? null : index)}
                aria-expanded={isOpen}
              >
                <span className="text-base font-semibold text-slate-800">{item.question}</span>
                <span className="text-xl text-accent-500">{isOpen ? "−" : "+"}</span>
              </button>
              {isOpen ? (
                <p className="mt-4 text-sm leading-relaxed text-slate-600">{item.answer}</p>
              ) : null}
            </div>
          );
        })}
      </div>
      <p className="mt-6 text-sm text-slate-500">{translations.faq.contact}</p>
    </section>
  );
};
