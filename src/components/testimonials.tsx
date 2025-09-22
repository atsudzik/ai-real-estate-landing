"use client";

import { useLanguage } from "@/contexts/language-context";

export const Testimonials = () => {
  const { translations } = useLanguage();

  return (
    <section className="section-wrapper">
      <div className="max-w-3xl">
        <h2 className="section-title">{translations.testimonials.title}</h2>
        <p className="section-subtitle">{translations.testimonials.subtitle}</p>
      </div>
      <div className="mt-12 grid gap-6 md:grid-cols-3">
        {translations.testimonials.items.map((item) => (
          <figure key={item.name} className="card flex h-full flex-col gap-4">
            <blockquote className="text-sm leading-relaxed text-slate-600">
              “{item.quote}”
            </blockquote>
            <figcaption className="mt-auto text-sm font-semibold text-slate-800">
              {item.name}
              <span className="block text-xs font-normal text-slate-500">{item.role}</span>
            </figcaption>
          </figure>
        ))}
      </div>
    </section>
  );
};
