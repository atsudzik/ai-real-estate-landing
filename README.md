# Skyline AI Valuator – Landing Page

A multilingual, SEO-focused marketing site for an AI-powered real estate valuation platform. The landing page highlights
photo-based renovation analysis, market benchmarking, price history, and predictive forecasting with clear calls to action for
free trials and paid plans.

## ✨ Highlights

- **Hero to conversion flow** covering Hero, How It Works, Features, Pricing, Testimonials, FAQ, and Final CTA.
- **Six-language interface** (English, Russian, Spanish, French, Italian, German) with a persistent language selector.
- **SEO best practices** including structured data (Product + FAQ), Open Graph assets, alternate language routes, and a blog preview.
- **Lead capture** demo form and floating help widget with mailto handoff.
- **Responsive Tailwind CSS design** optimised for fast load times and accessibility.

## 🧱 Tech stack

- [Next.js 15](https://nextjs.org/) with the App Router and TypeScript.
- [Tailwind CSS 4](https://tailwindcss.com/) for styling.
- Lightweight React context for localisation.
- Google Analytics + Hotjar snippets, configurable through environment variables.

- ## 🚀 Getting started

1. **Install dependencies**

  ```bash
   npm install
   ```

2. **Environment variables**

   Copy `.env.example` to `.env.local` and update values if you want to enable analytics scripts.

3. **Run the dev server**

   ```bash
   npm run dev
   ```

   The site is available at [http://localhost:3000](http://localhost:3000).

4. **Build for production**

   ```bash
   npm run build
   npm start
   ```

## 📂 Key folders

```
src/
├── app/              # Routes (landing page, blog, privacy, terms, contact)
├── components/       # Reusable UI + analytics/SEO helpers
├── contexts/         # Language provider
└── lib/              # Translation dictionaries and shared types
public/
└── images/           # Hero illustration and social preview assets
```

## 🔍 SEO & accessibility

- Metadata handled by Next metadata API + runtime updater for translations.
- JSON-LD product and FAQ schema injected per language.
- Alternate language routes defined through `next.config.ts`.
- Accessible accordions, buttons, and aria labels across the UI.

## 📝 Roadmap suggestions

- Connect a headless CMS for dynamic blog posts.
- Replace the mock upload demo with a real file ingestion endpoint.
- Add automated form handling for the contact page.
- Implement localisation for legal pages if required.

## 📄 License
MIT – feel free to adapt and deploy.
