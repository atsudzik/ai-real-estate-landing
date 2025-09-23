"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { useSession } from "next-auth/react";
import { useLanguage } from "@/contexts/language-context";

const DashboardPage = () => {
  const { translations } = useLanguage();
  const { status } = useSession();
  const router = useRouter();

  useEffect(() => {
    if (status === "unauthenticated") {
      router.replace("/login");
    }
  }, [status, router]);

  if (status === "unauthenticated") {
    return null;
  }

  return (
    <main className="min-h-screen bg-slate-50 py-12">
      <div className="mx-auto w-full max-w-4xl px-6">
        <div className="rounded-3xl bg-white p-10 shadow-xl shadow-slate-200/60">
          <h1 className="text-3xl font-semibold text-slate-900">
            {translations.auth.dashboard}
          </h1>
          <p className="mt-4 text-lg text-slate-600">
            {translations.auth.dashboardIntro}
          </p>
        </div>
      </div>
    </main>
  );
};

export default DashboardPage;
