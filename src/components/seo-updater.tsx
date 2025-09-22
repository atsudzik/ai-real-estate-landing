"use client";

import { useEffect } from "react";
import { useLanguage } from "@/contexts/language-context";

const ensureMeta = (selector: string, attributes: [string, string][]) => {
  if (typeof document === "undefined") return;
  let element = document.querySelector(selector) as HTMLMetaElement | null;
  if (!element) {
    element = document.createElement("meta");
    attributes.forEach(([key, value]) => element?.setAttribute(key, value));
    document.head.appendChild(element);
  }
  return element;
};

export const SeoUpdater = () => {
  const { translations } = useLanguage();

  useEffect(() => {
    if (typeof document === "undefined") return;
    document.title = translations.seo.title;

    const descriptionMeta =
      (document.querySelector("meta[name='description']") as HTMLMetaElement | null) ??
      ensureMeta("meta[name='description']", [["name", "description"]]);
    descriptionMeta?.setAttribute("content", translations.seo.description);

    const keywordsMeta =
      (document.querySelector("meta[name='keywords']") as HTMLMetaElement | null) ??
      ensureMeta("meta[name='keywords']", [["name", "keywords"]]);
    keywordsMeta?.setAttribute("content", translations.keywords.join(", "));

    const ogTitle =
      (document.querySelector("meta[property='og:title']") as HTMLMetaElement | null) ??
      ensureMeta("meta[property='og:title']", [["property", "og:title"]]);
    ogTitle?.setAttribute("content", translations.seo.ogTitle);

    const ogDescription =
      (document.querySelector("meta[property='og:description']") as HTMLMetaElement | null) ??
      ensureMeta("meta[property='og:description']", [["property", "og:description"]]);
    ogDescription?.setAttribute("content", translations.seo.ogDescription);

    const twitterTitle =
      (document.querySelector("meta[name='twitter:title']") as HTMLMetaElement | null) ??
      ensureMeta("meta[name='twitter:title']", [["name", "twitter:title"]]);
    twitterTitle?.setAttribute("content", translations.seo.ogTitle);

    const twitterDescription =
      (document.querySelector("meta[name='twitter:description']") as HTMLMetaElement | null) ??
      ensureMeta("meta[name='twitter:description']", [["name", "twitter:description"]]);
    twitterDescription?.setAttribute("content", translations.seo.ogDescription);
  }, [translations]);

  return null;
};
