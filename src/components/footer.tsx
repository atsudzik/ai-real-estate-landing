"use client";

import Link from "next/link";
import { FaLinkedin, FaTwitter, FaFacebook, FaInstagram } from "react-icons/fa";
import { useLanguage } from "@/contexts/language-context";

const socialLinks = [
  { icon: FaLinkedin, href: "https://www.linkedin.com/company/skyline-ai-valuator", label: "LinkedIn" },
  { icon: FaTwitter, href: "https://twitter.com/SkylineAI", label: "Twitter" },
  { icon: FaFacebook, href: "https://facebook.com/SkylineAIValuator", label: "Facebook" },
  { icon: FaInstagram, href: "https://instagram.com/SkylineAI", label: "Instagram" },
];

export const Footer = () => {
  const { translations } = useLanguage();
  const year = new Date().getFullYear();
  const rights = translations.footer.rightsTemplate.replace("{{year}}", String(year));

  return (
    <footer className="border-t border-slate-200 bg-white/90">
      <div className="section-wrapper grid gap-12 lg:grid-cols-[2fr_1fr]">
        <div className="space-y-6">
          <Link href="/#home" className="flex items-center gap-3 text-lg font-semibold text-slate-900">
            <span className="flex h-10 w-10 items-center justify-center rounded-full bg-accent-500 text-white">AI</span>
            Skyline AI Valuator
          </Link>
          <p className="max-w-xl text-sm text-slate-600">{translations.footer.seoText}</p>
          <div className="flex flex-wrap items-center gap-3 text-slate-500">
            <span className="text-sm font-semibold text-slate-700">
              {translations.footer.socialLabel}
            </span>
            {socialLinks.map(({ icon: Icon, href, label }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noreferrer"
                className="flex h-9 w-9 items-center justify-center rounded-full border border-slate-200 text-slate-600 transition hover:border-accent-300 hover:text-accent-600"
                aria-label={label}
              >
                <Icon className="h-4 w-4" />
              </a>
            ))}
          </div>
        </div>
        <div className="space-y-4">
          <h3 className="text-sm font-semibold uppercase tracking-wide text-slate-500">
            {translations.footer.quickLinksTitle}
          </h3>
          <ul className="grid gap-3 text-sm text-slate-600">
            {translations.footer.quickLinks.map((link) => (
              <li key={link.label}>
                <Link href={link.href} className="hover:text-accent-600">
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="border-t border-slate-200 bg-white/70">
        <div className="mx-auto flex w-full max-w-6xl flex-col gap-2 px-6 py-6 text-xs text-slate-500 md:flex-row md:items-center md:justify-between md:px-8">
          <span>{rights}</span>
          <span>Skyline AI Valuator · Privacy-first analytics</span>
        </div>
      </div>
    </footer>
  );
};
