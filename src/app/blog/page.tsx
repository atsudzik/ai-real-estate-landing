import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { HelpWidget } from "@/components/help-widget";
import { BlogPageContent } from "@/components/blog-page";

export default function BlogPage() {
  return (
    <div className="min-h-screen bg-slate-50">
      <Header />
      <BlogPageContent />
      <Footer />
      <HelpWidget />
    </div>
  );
}
