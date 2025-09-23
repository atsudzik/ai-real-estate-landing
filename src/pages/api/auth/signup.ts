import type { NextApiRequest, NextApiResponse } from "next";
import { supabaseClient } from "@/lib/supabaseClient";

type SignupResponse =
  | { success: true; userId: string | null }
  | { success: false; error: string };

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<SignupResponse>,
) {
  if (req.method !== "POST") {
    res.setHeader("Allow", "POST");
    return res.status(405).json({ success: false, error: "Method not allowed" });
  }

  const { email, password } = req.body as {
    email?: string;
    password?: string;
  };

  if (!email || !password) {
    return res
      .status(400)
      .json({ success: false, error: "Missing email or password" });
  }

  const { data, error } = await supabaseClient.auth.signUp({
    email,
    password,
  });

  if (error) {
    return res.status(400).json({ success: false, error: error.message });
  }

  return res.status(200).json({ success: true, userId: data.user?.id ?? null });
}
