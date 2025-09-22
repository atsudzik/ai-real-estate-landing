"use client";

import { useLanguage } from "@/contexts/language-context";

export const HowItWorks = () => {
  const { translations } = useLanguage();
  const steps = translations.howItWorks.steps;

  return (
    <section id="how-it-works" className="section-wrapper">
      <div className="max-w-3xl">
        <h2 className="section-title">{translations.howItWorks.title}</h2>
        <p className="section-subtitle">{translations.howItWorks.subtitle}</p>
      </div>
      <div className="mt-12 grid gap-6 md:grid-cols-3">
        {steps.map((step, index) => (
          <div key={step.title} className="card flex flex-col gap-4">
            <span className="badge w-fit">{String(index + 1).padStart(2, "0")}</span>
            <h3 className="text-xl font-semibold text-slate-900">{step.title}</h3>
            <p className="text-sm leading-relaxed text-slate-600">{step.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};
