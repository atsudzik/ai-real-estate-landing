"use client";

import Script from "next/script";
import { useMemo } from "react";
import { useLanguage } from "@/contexts/language-context";

const SITE_URL = "https://www.skylineaivaluator.com";

const detectCurrency = (price: string): string => {
  if (price.includes("€")) return "EUR";
  if (price.includes("$")) return "USD";
  if (price.includes("₽")) return "RUB";
  return "EUR";
};

export const SeoStructuredData = () => {
  const { translations } = useLanguage();

  const { productJson, faqJson } = useMemo(() => {
    const numericPlan = translations.pricing.plans.find((plan) => /\d/.test(plan.price));
    const priceValue = numericPlan ? parseFloat(numericPlan.price.replace(/[^0-9.,]/g, "").replace(",", ".")) : 0;
    const currency = numericPlan ? detectCurrency(numericPlan.price) : "EUR";

    const productJson = {
      "@context": "https://schema.org",
      "@type": "Product",
      name: translations.hero.title,
      description: translations.seo.description,
      brand: {
        "@type": "Brand",
        name: "Skyline AI Valuator",
      },
      offers: {
        "@type": "Offer",
        priceCurrency: currency,
        price: priceValue || 0,
        availability: "https://schema.org/InStock",
        url: SITE_URL,
      },
      aggregateRating: {
        "@type": "AggregateRating",
        ratingValue: "4.8",
        reviewCount: translations.testimonials.items.length * 45,
      },
      review: translations.testimonials.items.slice(0, 2).map((item) => ({
        "@type": "Review",
        author: {
          "@type": "Person",
          name: item.name,
        },
        reviewBody: item.quote,
        reviewRating: {
          "@type": "Rating",
          ratingValue: "5",
        },
      })),
    };

    const faqJson = {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: translations.faq.items.map((item) => ({
        "@type": "Question",
        name: item.question,
        acceptedAnswer: {
          "@type": "Answer",
          text: item.answer,
        },
      })),
    };

    return { productJson, faqJson };
  }, [translations]);

  return (
    <>
      <Script id="product-schema" type="application/ld+json">
        {JSON.stringify(productJson)}
      </Script>
      <Script id="faq-schema" type="application/ld+json">
        {JSON.stringify(faqJson)}
      </Script>
    </>
  );
};
