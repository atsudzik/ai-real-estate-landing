import type { NextApiRequest, NextApiResponse } from "next";
import { getSupabaseClient } from "@/lib/supabaseClient";

type SignupResponse =
  | { success: true; userId: string | null }
  | { success: false; error: string };

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<SignupResponse>,
) {
  if (req.method !== "POST") {
    res.setHeader("Allow", "POST");
    res.status(405).json({ success: false, error: "Method not allowed" });
    return;
  }

  const { email, password } = req.body as { email?: string; password?: string };

  if (!email || !password) {
    res.status(400).json({ success: false, error: "Missing email or password" });
    return;
  }

  try {
    const supabase = getSupabaseClient();
    const { data, error } = await supabase.auth.signUp({
      email,
      password,
    });

    if (error) {
      res.status(400).json({ success: false, error: error.message });
      return;
    }

    res.status(200).json({
      success: true,
      userId: data.user?.id ?? null,
    });
  } catch (error) {
    const message =
      error instanceof Error ? error.message : "Unexpected error during signup";
    res.status(500).json({ success: false, error: message });
  }
}
