"use client";

import type { Session } from "next-auth";
import { SessionProvider } from "next-auth/react";
import { LanguageProvider } from "@/contexts/language-context";

export const Providers = ({
  children,
  session,
}: {
  children: React.ReactNode;
  session?: Session | null;
}) => {
  return (
    <SessionProvider session={session}>
      <LanguageProvider>{children}</LanguageProvider>
    </SessionProvider>
  );
};

export default Providers;
