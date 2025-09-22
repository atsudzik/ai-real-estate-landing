import type { MetadataRoute } from "next";

const languages = ["en", "ru", "es", "fr", "it", "de"] as const;

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://www.skylineaivaluator.com";
  const pages = ["/", "/blog", "/privacy", "/terms", "/contact"] as const;

  return pages.map((path, index) => ({
    url: `${baseUrl}${path === "/" ? "" : path}`,
    lastModified: new Date(),
    changeFrequency: "monthly",
    priority: index === 0 ? 1 : 0.7,
    alternates: {
      languages: Object.fromEntries(
        languages.map((lang) => [lang, `${baseUrl}${path === "/" ? "" : path}?lang=${lang}`])
      ) as Record<string, string>,
    },
  }));
}
