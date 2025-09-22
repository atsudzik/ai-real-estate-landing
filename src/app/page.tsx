import { Header } from "@/components/header";
import { Hero } from "@/components/hero";
import { HowItWorks } from "@/components/how-it-works";
import { Features } from "@/components/features";
import { UploadForm } from "@/components/upload-form";
import { Pricing } from "@/components/pricing";
import { BlogPreview } from "@/components/blog-preview";
import { Testimonials } from "@/components/testimonials";
import { FaqSection } from "@/components/faq-section";
import { FinalCta } from "@/components/final-cta";
import { Footer } from "@/components/footer";
import { HelpWidget } from "@/components/help-widget";

export default function Home() {
  return (
    <div className="min-h-screen bg-slate-50">
      <Header />
      <main>
        <Hero />
        <HowItWorks />
        <Features />
        <UploadForm />
        <Pricing />
        <BlogPreview />
        <Testimonials />
        <FaqSection />
        <FinalCta />
      </main>
      <Footer />
      <HelpWidget />
    </div>
  );
}
