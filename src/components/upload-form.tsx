"use client";

import { FormEvent, useState } from "react";
import { useLanguage } from "@/contexts/language-context";

export const UploadForm = () => {
  const { translations } = useLanguage();
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 6000);
  };

  return (
    <section id="estimate" className="section-wrapper">
      <div className="grid gap-8 lg:grid-cols-[1.2fr_1fr] lg:items-center">
        <div>
          <h2 className="section-title">{translations.uploadForm.title}</h2>
          <p className="section-subtitle">{translations.uploadForm.description}</p>
        </div>
        <form onSubmit={handleSubmit} className="card space-y-5">
          <div className="space-y-2">
            <label htmlFor="email">{translations.uploadForm.emailLabel}</label>
            <input id="email" type="email" name="email" required placeholder="name@company.com" />
          </div>
          <div className="space-y-2">
            <label htmlFor="property-type">{translations.uploadForm.propertyTypeLabel}</label>
            <select id="property-type" name="property" required defaultValue="">
              <option value="" disabled>
                {translations.uploadForm.propertyPlaceholder}
              </option>
              {translations.uploadForm.propertyOptions.map((option) => (
                <option key={option} value={option}>
                  {option}
                </option>
              ))}
            </select>
          </div>
          <div className="space-y-2">
            <label htmlFor="photo">{translations.uploadForm.fileLabel}</label>
            <input id="photo" type="file" accept="image/png,image/jpeg" required />
            <p className="text-xs text-slate-500">{translations.uploadForm.fileHint}</p>
          </div>
          <p className="text-xs text-slate-500">{translations.uploadForm.privacy}</p>
          <button type="submit" className="primary w-full">
            {translations.uploadForm.submitLabel}
          </button>
          {submitted ? (
            <div className="rounded-xl bg-accent-50 px-4 py-3 text-sm font-medium text-accent-700">
              {translations.uploadForm.successMessage}
            </div>
          ) : null}
        </form>
      </div>
    </section>
  );
};
