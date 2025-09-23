import { NextResponse } from "next/server";
import { getSupabaseClient } from "@/lib/supabaseClient";

type SignupResponse =
  | { success: true; userId: string | null }
  | { success: false; error: string };

export async function POST(request: Request) {
  const body = (await request.json()) as { email?: string; password?: string };

  if (!body.email || !body.password) {
    return NextResponse.json<SignupResponse>(
      { success: false, error: "Missing email or password" },
      { status: 400 },
    );
  }

  const supabase = getSupabaseClient();
  const { data, error } = await supabase.auth.signUp({
    email: body.email,
    password: body.password,
  });

  if (error) {
    return NextResponse.json<SignupResponse>(
      { success: false, error: error.message },
      { status: 400 },
    );
  }

  return NextResponse.json<SignupResponse>({
    success: true,
    userId: data.user?.id ?? null,
  });
}

export function GET() {
  return NextResponse.json<SignupResponse>(
    { success: false, error: "Method not allowed" },
    { status: 405, headers: { Allow: "POST" } },
  );
}
