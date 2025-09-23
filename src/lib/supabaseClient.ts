import { createClient } from "@supabase/supabase-js";

const supabaseUrl =
  process.env.SUPABASE_URL ?? process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseKey =
  process.env.SUPABASE_KEY ?? process.env.NEXT_PUBLIC_SUPABASE_KEY;

if (!supabaseUrl) {
  throw new Error("Missing SUPABASE_URL environment variable");
}

if (!supabaseKey) {
  throw new Error("Missing SUPABASE_KEY environment variable");
}

export const supabaseClient = createClient(supabaseUrl, supabaseKey);

export type SupabaseClient = typeof supabaseClient;
