import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { HelpWidget } from "@/components/help-widget";

export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-slate-50">
      <Header />
      <main className="section-wrapper space-y-6">
        <h1 className="text-4xl font-semibold text-slate-900">Privacy Policy</h1>
        <p className="text-sm text-slate-600">
          Skyline AI Valuator respects your privacy. This policy explains what information we collect,
          why we collect it, and how we handle uploaded media, personal details, and analytics data.
        </p>
        <section className="space-y-3">
          <h2 className="text-2xl font-semibold text-slate-800">Data collection</h2>
          <ul className="list-disc space-y-2 pl-5 text-sm text-slate-600">
            <li>Email addresses are used to deliver valuation reports and product updates.</li>
            <li>Uploaded property photos are encrypted in transit and deleted within 24 hours of report delivery.</li>
            <li>Usage analytics are anonymised and help us improve pricing accuracy and user experience.</li>
          </ul>
        </section>
        <section className="space-y-3">
          <h2 className="text-2xl font-semibold text-slate-800">Your rights</h2>
          <p className="text-sm text-slate-600">
            You can request access, correction, or deletion of your personal data at any time by contacting
            hello@skylineaivaluator.com. We comply with GDPR and store all customer information in EU-based data centres.
          </p>
        </section>
      </main>
      <Footer />
      <HelpWidget />
    </div>
  );
}
