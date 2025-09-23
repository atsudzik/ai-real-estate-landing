import { createClient, type SupabaseClient as SupabaseClientType } from "@supabase/supabase-js";

const supabaseUrl =
  process.env.SUPABASE_URL ?? process.env.NEXT_PUBLIC_SUPABASE_URL ?? "";
const supabaseKey =
  process.env.SUPABASE_KEY ?? process.env.NEXT_PUBLIC_SUPABASE_KEY ?? "";

let cachedClient: SupabaseClientType | null = null;

export const getSupabaseClient = (): SupabaseClientType => {
  if (!cachedClient) {
    if (!supabaseUrl) {
      throw new Error("Missing SUPABASE_URL environment variable");
    }

    if (!supabaseKey) {
      throw new Error("Missing SUPABASE_KEY environment variable");
    }

    cachedClient = createClient(supabaseUrl, supabaseKey);
  }

  return cachedClient;
};

export type SupabaseClient = SupabaseClientType;