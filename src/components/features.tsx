"use client";

import { IconType } from "react-icons";
import {
  FiCamera,
  FiMapPin,
  FiBarChart2,
  FiTrendingUp,
} from "react-icons/fi";
import { useLanguage } from "@/contexts/language-context";
import { FeatureIconKey } from "@/lib/translations";

const iconMap: Record<FeatureIconKey, IconType> = {
  camera: FiCamera,
  map: FiMapPin,
  history: FiBarChart2,
  forecast: FiTrendingUp,
};

export const Features = () => {
  const { translations } = useLanguage();

  return (
    <section id="features" className="section-wrapper">
      <div className="max-w-3xl">
        <h2 className="section-title">{translations.features.title}</h2>
        <p className="section-subtitle">{translations.features.subtitle}</p>
      </div>
      <div className="mt-12 grid gap-6 md:grid-cols-2">
        {translations.features.items.map((feature) => {
          const Icon = iconMap[feature.icon];
          return (
            <div key={feature.title} className="card flex flex-col gap-4">
              <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-accent-100 text-accent-600">
                <Icon className="h-6 w-6" />
              </span>
              <h3 className="text-xl font-semibold text-slate-900">{feature.title}</h3>
              <p className="text-sm leading-relaxed text-slate-600">{feature.description}</p>
            </div>
          );
        })}
      </div>
    </section>
  );
};
