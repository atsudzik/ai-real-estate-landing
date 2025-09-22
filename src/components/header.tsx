"use client";

import { useState } from "react";
import Link from "next/link";
import { HiOutlineMenu, HiOutlineX } from "react-icons/hi";
import { LanguageSelector } from "@/components/language-selector";
import { useLanguage } from "@/contexts/language-context";

const sectionLinks = [
  { id: "home", href: "#home" },
  { id: "howItWorks", href: "#how-it-works" },
  { id: "features", href: "#features" },
  { id: "pricing", href: "#pricing" },
  { id: "faq", href: "#faq" },
];

export const Header = () => {
  const { translations } = useLanguage();
  const [open, setOpen] = useState(false);

  const toggleMenu = () => setOpen((prev) => !prev);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-slate-200 bg-white/90 backdrop-blur">
      <div className="mx-auto flex w-full max-w-6xl items-center justify-between gap-4 px-6 py-4 md:px-8">
        <Link href="/#home" className="flex items-center gap-2 text-xl font-semibold text-slate-900">
          <span className="flex h-9 w-9 items-center justify-center rounded-full bg-accent-500 text-white shadow-md shadow-accent-500/40">
            AI
          </span>
          <span className="hidden sm:inline">Skyline AI Valuator</span>
        </Link>

        <nav className="hidden items-center gap-8 text-sm font-medium text-slate-600 lg:flex">
          {sectionLinks.map((link) => (
            <a key={link.id} href={link.href} className="hover:text-accent-600">
              {translations.nav[link.id as keyof typeof translations.nav]}
            </a>
          ))}
          <Link href="/blog" className="hover:text-accent-600">
            {translations.nav.blog}
          </Link>
        </nav>

        <div className="hidden items-center gap-3 lg:flex">
          <Link href="/login" className="text-sm font-semibold text-slate-600 hover:text-accent-600">
            {translations.auth.login}
          </Link>
          <Link href="/#estimate">
            <button className="primary">
              {translations.auth.signUp}
            </button>
          </Link>
          <LanguageSelector />
        </div>

        <button
          className="flex h-10 w-10 items-center justify-center rounded-full border border-slate-200 bg-white text-slate-700 lg:hidden"
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          {open ? <HiOutlineX className="h-5 w-5" /> : <HiOutlineMenu className="h-5 w-5" />}
        </button>
      </div>

      {open ? (
        <div className="border-t border-slate-200 bg-white lg:hidden">
          <div className="space-y-4 px-6 py-6">
            <nav className="flex flex-col gap-4 text-base font-semibold text-slate-700">
              {sectionLinks.map((link) => (
                <a key={link.id} href={link.href} onClick={() => setOpen(false)}>
                  {translations.nav[link.id as keyof typeof translations.nav]}
                </a>
              ))}
              <Link href="/blog" onClick={() => setOpen(false)}>
                {translations.nav.blog}
              </Link>
            </nav>
            <div className="flex flex-col gap-3">
              <Link
                href="/login"
                className="text-sm font-semibold text-slate-600 hover:text-accent-600"
                onClick={() => setOpen(false)}
              >
                {translations.auth.login}
              </Link>
              <Link href="/#estimate" onClick={() => setOpen(false)}>
                <button className="primary w-full">
                  {translations.auth.signUp}
                </button>
              </Link>
              <div className="pt-3">
                <LanguageSelector />
              </div>
            </div>
          </div>
        </div>
      ) : null}
    </header>
  );
};
