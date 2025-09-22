"use client";

import Image from "next/image";
import Link from "next/link";
import { useLanguage } from "@/contexts/language-context";

export const Hero = () => {
  const { translations } = useLanguage();

  return (
    <section
      id="home"
      className="relative overflow-hidden bg-hero-gradient pb-16 pt-28 sm:pt-32"
    >
      <div className="section-wrapper grid gap-12 lg:grid-cols-2 lg:items-center">
        <div className="space-y-6">
          <span className="badge w-fit">{translations.hero.tagline}</span>
          <h1 className="section-title text-4xl leading-tight md:text-5xl">
            {translations.hero.title}
          </h1>
          <p className="max-w-2xl text-base text-slate-600 md:text-lg">
            {translations.hero.subtitle}
          </p>
          <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
            <Link href="/#estimate">
              <button className="primary">
                {translations.hero.cta}
              </button>
            </Link>
            <Link
              href="/blog"
              className="text-sm font-semibold text-slate-600 hover:text-accent-600"
            >
              {translations.nav.blog}
            </Link>
          </div>
          <dl className="grid gap-6 sm:grid-cols-3">
            {translations.hero.stats.map((stat) => (
              <div key={stat.label} className="rounded-2xl border border-slate-200 bg-white/80 p-4 shadow-sm">
                <dt className="text-xs uppercase tracking-wide text-slate-500">
                  {stat.label}
                </dt>
                <dd className="mt-1 text-2xl font-semibold text-slate-900">
                  {stat.value}
                </dd>
              </div>
            ))}
          </dl>
        </div>
        <div className="relative">
          <div className="absolute -top-6 -left-8 hidden h-64 w-64 rounded-full bg-accent-200/40 blur-3xl lg:block" />
          <div className="absolute -bottom-8 -right-6 hidden h-56 w-56 rounded-full bg-cyan-200/40 blur-3xl lg:block" />
          <div className="relative overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-xl shadow-slate-200/80">
            <Image
              src="/images/hero-illustration.svg"
              alt="AI-powered apartment valuation interface"
              width={720}
              height={560}
              className="h-full w-full object-cover"
              priority
            />
            <div className="absolute bottom-4 left-4 right-4 rounded-2xl bg-white/90 p-4 shadow-lg">
              <p className="text-sm font-semibold text-slate-800">
                {translations.features.items[0].title}
              </p>
              <p className="mt-1 text-xs text-slate-500">
                {translations.features.items[0].description}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
