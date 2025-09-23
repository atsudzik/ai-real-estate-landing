import type { Metadata } from "next";
import "./globals.css";
import { AnalyticsScripts } from "@/components/analytics-scripts";
import { SeoStructuredData } from "@/components/seo-structured-data";
import { SeoUpdater } from "@/components/seo-updater";
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";
import Providers from "./providers";

export const metadata: Metadata = {
  metadataBase: new URL("https://www.skylineaivaluator.com"),
  title: {
    default: "AI Real Estate Price Estimator | Skyline AI Valuator",
    template: "%s | Skyline AI Valuator",
  },
  description:
    "AI real estate valuation platform delivering instant apartment price estimates, renovation scoring, neighborhood comparables, and predictive forecasts.",
  keywords: [
    "real estate valuation",
    "AI price estimator",
    "property price forecast",
    "apartment price calculator",
    "AI real estate analytics",
  ],
  authors: [{ name: "Skyline AI Valuator" }],
  openGraph: {
    type: "website",
    title: "AI Real Estate Price Estimator",
    description:
      "Upload property photos and receive valuations backed by AI photo analysis, market comparables, and future price forecasts.",
    url: "https://www.skylineaivaluator.com",
    siteName: "Skyline AI Valuator",
    images: [
      {
        url: "/images/og-image.png",
        width: 1200,
        height: 630,
        alt: "Dashboard showing AI real estate valuation insights",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "AI Real Estate Price Estimator",
    description:
      "Generate instant apartment valuations with AI-driven condition scoring, market comps, and forecasted growth.",
    creator: "@SkylineAI",
    images: ["/images/og-image.png"],
  },
  alternates: {
    canonical: "/",
    languages: {
      en: "/?lang=en",
      ru: "/?lang=ru",
      es: "/?lang=es",
      fr: "/?lang=fr",
      it: "/?lang=it",
      de: "/?lang=de",
    },
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const session = await getServerSession(authOptions);
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="bg-slate-50 antialiased">
        <Providers session={session}>
          <SeoUpdater />
          <SeoStructuredData />
          <AnalyticsScripts />
          {children}
        </Providers>
      </body>
    </html>
  );
}

