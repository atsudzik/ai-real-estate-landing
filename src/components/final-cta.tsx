"use client";

import Link from "next/link";
import { useLanguage } from "@/contexts/language-context";

export const FinalCta = () => {
  const { translations } = useLanguage();

  return (
    <section className="section-wrapper">
      <div className="card flex flex-col items-center gap-4 bg-gradient-to-br from-accent-500 to-accent-700 text-center text-white">
        <h2 className="text-3xl font-semibold md:text-4xl">
          {translations.finalCta.title}
        </h2>
        <p className="max-w-2xl text-base text-white/80 md:text-lg">
          {translations.finalCta.subtitle}
        </p>
        <Link href="/#estimate">
          <button className="primary bg-white text-accent-600 hover:bg-slate-100">
            {translations.finalCta.button}
          </button>
        </Link>
      </div>
    </section>
  );
};
