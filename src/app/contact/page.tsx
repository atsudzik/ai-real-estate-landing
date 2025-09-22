import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { HelpWidget } from "@/components/help-widget";
import { ContactForm } from "@/components/contact-form";

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-slate-50">
      <Header />
      <main className="section-wrapper grid gap-12 lg:grid-cols-[1fr_1fr]">
        <div className="space-y-6">
          <h1 className="text-4xl font-semibold text-slate-900">Contact our team</h1>
          <p className="text-sm text-slate-600">
            We are happy to discuss enterprise integrations, partnership opportunities, or answer any question
            about Skyline AI Valuator. Fill out the form or email us at hello@skylineaivaluator.com.
          </p>
          <div className="space-y-3 text-sm text-slate-600">
            <p><strong>Support hours:</strong> Monday–Friday, 9:00–18:00 CET</p>
            <p><strong>HQ:</strong> Remote-first across Berlin, Madrid, and Milan</p>
          </div>
        </div>
        <ContactForm />
      </main>
      <Footer />
      <HelpWidget />
    </div>
  );
}
