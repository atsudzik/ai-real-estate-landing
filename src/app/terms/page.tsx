import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { HelpWidget } from "@/components/help-widget";

export default function TermsPage() {
  return (
    <div className="min-h-screen bg-slate-50">
      <Header />
      <main className="section-wrapper space-y-6">
        <h1 className="text-4xl font-semibold text-slate-900">Terms of Service</h1>
        <p className="text-sm text-slate-600">
          These terms govern access to Skyline AI Valuator, our AI-powered pricing insights, and associated
          demo reports. By creating an account you agree to the clauses below.
        </p>
        <section className="space-y-3">
          <h2 className="text-2xl font-semibold text-slate-800">Acceptable use</h2>
          <ul className="list-disc space-y-2 pl-5 text-sm text-slate-600">
            <li>Do not upload content that infringes privacy, copyright, or the rights of third parties.</li>
            <li>Generated valuations are advisory only and should be validated before investment decisions.</li>
            <li>Automated scraping of our platform or API requires a commercial agreement.</li>
          </ul>
        </section>
        <section className="space-y-3">
          <h2 className="text-2xl font-semibold text-slate-800">Service updates</h2>
          <p className="text-sm text-slate-600">
            We may update these terms with new functionality or regulatory requirements. Users will receive
            notice via email at least 14 days prior to changes that materially impact data usage or pricing.
          </p>
        </section>
      </main>
      <Footer />
      <HelpWidget />
    </div>
  );
}
