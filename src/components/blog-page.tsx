"use client";

import Link from "next/link";
import { useLanguage } from "@/contexts/language-context";

export const BlogPageContent = () => {
  const { translations } = useLanguage();
  const posts = translations.blog.posts;

  return (
    <main className="bg-slate-50">
      <section className="section-wrapper">
        <div className="card bg-accent-500/10">
          <h1 className="text-4xl font-semibold text-slate-900 md:text-5xl">
            {translations.blogPage.heroTitle}
          </h1>
          <p className="mt-4 max-w-2xl text-base text-slate-600 md:text-lg">
            {translations.blogPage.heroSubtitle}
          </p>
          <Link
            href="/newsletter"
            className="mt-6 inline-flex w-fit items-center gap-2 rounded-full bg-accent-500 px-5 py-3 text-sm font-semibold text-white shadow-lg shadow-accent-500/30 transition hover:bg-accent-600"
          >
            {translations.blogPage.subscribeCta}
          </Link>
        </div>
      </section>

      <section className="section-wrapper pt-0">
        <div className="grid gap-6 md:grid-cols-2">
          {posts.map((post) => (
            <article key={post.title} className="card flex h-full flex-col gap-4">
              <span className="badge w-fit">{post.category}</span>
              <h2 className="text-2xl font-semibold text-slate-900">{post.title}</h2>
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
    </main>
  );
};
