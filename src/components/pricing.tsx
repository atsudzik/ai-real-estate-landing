"use client";

import Link from "next/link";
import { useLanguage } from "@/contexts/language-context";

export const Pricing = () => {
  const { translations } = useLanguage();

  return (
    <section id="pricing" className="section-wrapper">
      <div className="max-w-3xl">
        <h2 className="section-title">{translations.pricing.title}</h2>
        <p className="section-subtitle">{translations.pricing.subtitle}</p>
      </div>
      <div className="mt-12 grid gap-6 lg:grid-cols-3">
        {translations.pricing.plans.map((plan) => (
          <div
            key={plan.name}
            className={`card flex h-full flex-col ${
              plan.popular ? "border-accent-200 bg-accent-50/60" : ""
            }`}
          >
            {plan.popular ? (
              <span className="badge w-fit bg-accent-500 text-white">
                {translations.pricing.popularLabel}
              </span>
            ) : null}
            <div className="flex flex-1 flex-col gap-5">
              <div>
                <h3 className="text-2xl font-semibold text-slate-900">{plan.name}</h3>
                <p className="mt-2 text-sm text-slate-600">{plan.description}</p>
              </div>
              <div className="text-3xl font-semibold text-slate-900">
                {plan.price}
                <span className="text-base font-normal text-slate-500"> {plan.period}</span>
              </div>
              <ul className="flex-1 space-y-2 text-sm text-slate-600">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-2">
                    <span className="mt-1 h-2 w-2 rounded-full bg-accent-500" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
            <Link href="/#estimate" className="mt-6">
              <button className={`primary w-full ${plan.popular ? "bg-accent-600 hover:bg-accent-700" : ""}`}>
                {plan.ctaLabel}
              </button>
            </Link>
          </div>
        ))}
      </div>
      <p className="mt-6 text-sm text-slate-500">{translations.pricing.footnote}</p>
    </section>
  );
};
