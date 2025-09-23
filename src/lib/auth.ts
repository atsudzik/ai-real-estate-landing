import CredentialsProvider from "next-auth/providers/credentials";
import type { NextAuthOptions } from "next-auth";
import { getSupabaseClient } from "@/lib/supabaseClient";

type SupabaseUser = {
  id: string;
  email: string | undefined;
  accessToken: string;
  refreshToken: string;
  expiresAt: number | null;
};

export const authOptions: NextAuthOptions = {
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: { label: "Email", type: "email" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials) {
        if (!credentials?.email || !credentials?.password) {
          throw new Error("Missing credentials");
        }

        const supabase = getSupabaseClient();
        const { data, error } = await supabase.auth.signInWithPassword({
          email: credentials.email,
          password: credentials.password,
        });

        if (error || !data.session || !data.user) {
          throw new Error(error?.message ?? "Invalid credentials");
        }

        return {
          id: data.user.id,
          email: data.user.email ?? undefined,
          accessToken: data.session.access_token,
          refreshToken: data.session.refresh_token,
          expiresAt: data.session.expires_at ?? null,
        } satisfies SupabaseUser;
      },
    }),
  ],
  pages: {
    signIn: "/login",
  },
  session: {
    strategy: "jwt",
  },
  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        const supabaseUser = user as SupabaseUser;
        token.sub = supabaseUser.id;
        token.email = supabaseUser.email;
        token.accessToken = supabaseUser.accessToken;
        token.refreshToken = supabaseUser.refreshToken;
        token.expiresAt = supabaseUser.expiresAt;
      }

      return token;
    },
    async session({ session, token }) {
      if (!session.user) {
        session.user = {};
      }

      session.user.id = token.sub as string | undefined;
      session.user.email = token.email as string | undefined;
      session.accessToken = token.accessToken as string | undefined;
      session.refreshToken = token.refreshToken as string | undefined;
      session.expiresAt = token.expiresAt as number | null | undefined;

      return session;
    },
  },
  secret: process.env.NEXTAUTH_SECRET,
};
