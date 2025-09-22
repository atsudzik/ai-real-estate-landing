"use client";

import { useState } from "react";
import { FiMessageCircle } from "react-icons/fi";
import { useLanguage } from "@/contexts/language-context";

export const HelpWidget = () => {
  const { translations } = useLanguage();
  const [hovered, setHovered] = useState(false);

  return (
    <div className="fixed bottom-6 left-6 z-40">
      <a
        href="mailto:hello@skylineaivaluator.com"
        className="flex items-center gap-3 rounded-full bg-accent-500 px-5 py-3 text-sm font-semibold text-white shadow-xl shadow-accent-500/30 transition hover:bg-accent-600"
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
      >
        <FiMessageCircle className="h-5 w-5" />
        <span>{translations.helpWidget.label}</span>
      </a>
      {hovered ? (
        <span className="mt-2 inline-block rounded-full bg-white px-4 py-2 text-xs font-medium text-slate-600 shadow-lg">
          hello@skylineaivaluator.com
        </span>
      ) : null}
    </div>
  );
};
