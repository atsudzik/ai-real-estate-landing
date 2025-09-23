"use client";

import { useState } from "react";
import Link from "next/link";
import { HiOutlineMenu, HiOutlineX } from "react-icons/hi";
import { LanguageSelector } from "@/components/language-selector";
import { useLanguage } from "@/contexts/language-context";
import { signOut, useSession } from "next-auth/react";

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
  const { data: session } = useSession();

  const isAuthenticated = Boolean(session?.user?.id);

  const toggleMenu = () => setOpen((prev) => !prev);
  const closeMenu = () => setOpen(false);

  const handleLogout = async () => {
    closeMenu();
    await signOut({ callbackUrl: "/" });
  };

  return (
    <header className="sticky top-0 z-50 w-full border-b border-slate-200 bg-white/90 backdrop-blur">
      <div className="mx-auto w-full max-w-6xl px-6 py-4 md:px-8">
        <div className="flex w-full items-center gap-4">
          <Link
            href="/#home"
            className="flex shrink-0 items-center gap-2 text-xl font-semibold text-slate-900"
          >
            <span className="flex h-9 w-9 items-center justify-center rounded-full bg-accent-500 text-white shadow-md shadow-accent-500/40">
              AI
            </span>
            <span className="hidden sm:inline">Skyline AI Valuator</span>
          </Link>

          <nav className="hidden flex-1 items-center justify-center gap-2 text-sm font-medium text-slate-600 lg:flex">
            {sectionLinks.map((link) => (
              <a
                key={link.id}
                href={link.href}
                className="whitespace-nowrap rounded-full px-3 py-2 text-slate-600 transition hover:bg-accent-50 hover:text-accent-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent-500"
              >
                {translations.nav[link.id as keyof typeof translations.nav]}
              </a>
            ))}
            <Link
              href="/blog"
              className="whitespace-nowrap rounded-full px-3 py-2 text-slate-600 transition hover:bg-accent-50 hover:text-accent-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent-500"
            >
              {translations.nav.blog}
            </Link>
          </nav>

          <div className="hidden shrink-0 items-center gap-4 lg:flex">
            {isAuthenticated ? (
              <>
                <Link
                  href="/dashboard"
                  className="rounded-full px-3 py-2 text-sm font-semibold text-slate-600 transition hover:bg-accent-50 hover:text-accent-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent-500"
                >
                  {translations.auth.dashboard}
                </Link>
                <button
                  type="button"
                  onClick={handleLogout}
                  className="rounded-full px-3 py-2 text-sm font-semibold text-slate-600 transition hover:bg-accent-50 hover:text-accent-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent-500"
                >
                  {translations.auth.logout}
                </button>
              </>
            ) : (
              <>
                <Link
                  href="/login"
                  className="rounded-full px-3 py-2 text-sm font-semibold text-slate-600 transition hover:bg-accent-50 hover:text-accent-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent-500"
                >
                  {translations.auth.login}
                </Link>
                <Link href="/signup" className="shrink-0">
                  <button className="primary">
                    {translations.auth.signUp}
                  </button>
                </Link>
              </>
            )}
            <div className="shrink-0">
              <LanguageSelector />
            </div>
          </div>

          <button
            type="button"
            className="ml-auto flex h-10 w-10 items-center justify-center rounded-full border border-slate-200 bg-white text-slate-700 shadow-sm transition hover:border-accent-400 hover:text-accent-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent-500 lg:hidden"
            onClick={toggleMenu}
            aria-label="Toggle menu"
            aria-expanded={open}
          >
            {open ? <HiOutlineX className="h-5 w-5" /> : <HiOutlineMenu className="h-5 w-5" />}
          </button>
        </div>
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
              <Link href="/blog" onClick={closeMenu}>
                {translations.nav.blog}
              </Link>
            </nav>
            <div className="flex flex-col gap-3">
              {isAuthenticated ? (
                <>
                  <Link
                    href="/dashboard"
                    className="text-sm font-semibold text-slate-600 hover:text-accent-600"
                    onClick={closeMenu}
                  >
                    {translations.auth.dashboard}
                  </Link>
                  <button
                    type="button"
                    onClick={handleLogout}
                    className="rounded-full border border-slate-200 px-3 py-2 text-sm font-semibold text-slate-600 transition hover:border-accent-400 hover:text-accent-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent-500"
                  >
                    {translations.auth.logout}
                  </button>
                </>
              ) : (
                <>
                  <Link
                    href="/login"
                    className="text-sm font-semibold text-slate-600 hover:text-accent-600"
                    onClick={closeMenu}
                  >
                    {translations.auth.login}
                  </Link>
                  <Link href="/signup" onClick={closeMenu}>
                    <button className="primary w-full">
                      {translations.auth.signUp}
                    </button>
                  </Link>
                </>
              )}
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
