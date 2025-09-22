"use client";

import { ChangeEvent } from "react";
import { useLanguage } from "@/contexts/language-context";

export const LanguageSelector = () => {
  const { language, setLanguage, translations, options } = useLanguage();

  const handleChange = (event: ChangeEvent<HTMLSelectElement>) => {
    setLanguage(event.target.value as typeof language);
  };

  return (
    <label className="flex items-center gap-2 text-sm font-medium text-slate-500">
      <span className="sr-only md:not-sr-only">
        {translations.languageSelectorLabel}
      </span>
      <select
        className="rounded-md border border-slate-300 bg-white/90 px-2 py-1 text-sm shadow-sm transition focus:border-accent-500 focus:outline-none focus:ring-2 focus:ring-accent-500/40"
        value={language}
        onChange={handleChange}
        aria-label={translations.languageSelectorLabel}
      >
        {options.map((option) => (
          <option key={option.code} value={option.code}>
            {option.label}
          </option>
        ))}
      </select>
    </label>
  );
};
