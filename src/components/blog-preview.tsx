"use client";

import Link from "next/link";
import { useLanguage } from "@/contexts/language-context";

export const BlogPreview = () => {
  const { translations } = useLanguage();

  return (
    <section className="section-wrapper">
      <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
        <div className="max-w-3xl">
          <h2 className="section-title">{translations.blog.title}</h2>
          <p className="section-subtitle">{translations.blog.subtitle}</p>
        </div>
        <Link
          href="/blog"
          className="text-sm font-semibold text-accent-600 hover:text-accent-500"
        >
          {translations.blog.viewAll}
        </Link>
      </div>
      <div className="mt-12 grid gap-6 md:grid-cols-3">
        {translations.blog.posts.map((post) => (
          <article key={post.title} className="card flex h-full flex-col gap-4">
            <span className="badge w-fit">{post.category}</span>
            <h3 className="text-xl font-semibold text-slate-900">{post.title}</h3>
            <p className="text-sm text-slate-600">{post.excerpt}</p>
            <Link
              href={post.href}
              className="mt-auto inline-flex items-center gap-2 text-sm font-semibold text-accent-600 hover:text-accent-500"
            >
              {translations.blog.readMore}
              <span aria-hidden>→</span>
            </Link>
          </article>
        ))}
      </div>
    </section>
  );
};
