"use client";

import { FormEvent, useEffect, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { signIn, useSession } from "next-auth/react";
import { useLanguage } from "@/contexts/language-context";

interface SignupErrors {
  email?: string;
  password?: string;
  confirmPassword?: string;
  form?: string;
}

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const SignupPage = () => {
  const { translations } = useLanguage();
  const { data: session, status } = useSession();
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [errors, setErrors] = useState<SignupErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    if (status === "authenticated" && session?.user?.id) {
      router.replace("/dashboard");
    }
  }, [status, session?.user?.id, router]);

  const validate = () => {
    const validationErrors: SignupErrors = {};
    const { validations } = translations.auth.forms;

    if (!email) {
      validationErrors.email = validations.required;
    } else if (!emailPattern.test(email)) {
      validationErrors.email = validations.invalidEmail;
    }

    if (!password) {
      validationErrors.password = validations.required;
    } else if (password.length < 8) {
      validationErrors.password = validations.passwordMin;
    }

    if (!confirmPassword) {
      validationErrors.confirmPassword = validations.required;
    } else if (confirmPassword !== password) {
      validationErrors.confirmPassword = validations.passwordMismatch;
    }

    return validationErrors;
  };

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const validationErrors = validate();

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    setIsSubmitting(true);
    setErrors({});

    try {
      const response = await fetch("/api/auth/signup", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
      });

      const data = (await response.json()) as
        | { success: true }
        | { success: false; error?: string };

      if (!response.ok || !data.success) {
        setErrors({
          form:
            ("error" in data && data.error) ||
            translations.auth.forms.errors.signup,
        });
        setIsSubmitting(false);
        return;
      }

      const result = await signIn("credentials", {
        redirect: false,
        email,
        password,
      });

      if (result?.error) {
        setErrors({ form: translations.auth.forms.errors.default });
        setIsSubmitting(false);
        return;
      }

      setIsSubmitting(false);
      router.replace("/dashboard");
    } catch {
      setErrors({ form: translations.auth.forms.errors.signup });
      setIsSubmitting(false);
    }
  };

  if (status === "authenticated" && session?.user?.id) {
    return null;
  }

  return (
    <main className="min-h-screen bg-slate-50 py-12">
      <div className="mx-auto w-full max-w-md px-6">
        <div className="rounded-2xl bg-white p-8 shadow-lg shadow-slate-200/60">
          <h1 className="text-3xl font-semibold text-slate-900">
            {translations.auth.signUp}
          </h1>
          <p className="mt-2 text-sm text-slate-600">
            {translations.auth.forms.haveAccountPrompt}{" "}
            <Link
              href="/login"
              className="font-semibold text-accent-600 hover:text-accent-500"
            >
              {translations.auth.login}
            </Link>
          </p>

          {errors.form ? (
            <p className="mt-4 rounded-lg border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-700">
              {errors.form}
            </p>
          ) : null}

          <form className="mt-8 space-y-6" onSubmit={handleSubmit} noValidate>
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-semibold text-slate-700"
              >
                {translations.auth.forms.emailLabel}
              </label>
              <input
                id="email"
                type="email"
                autoComplete="email"
                value={email}
                onChange={(event) => setEmail(event.target.value)}
                className="mt-2 w-full rounded-lg border border-slate-200 px-4 py-2.5 text-slate-900 shadow-sm focus:border-accent-400 focus:outline-none focus:ring-2 focus:ring-accent-200"
                required
              />
              {errors.email ? (
                <p className="mt-1 text-sm text-red-600">{errors.email}</p>
              ) : null}
            </div>

            <div>
              <label
                htmlFor="password"
                className="block text-sm font-semibold text-slate-700"
              >
                {translations.auth.forms.passwordLabel}
              </label>
              <input
                id="password"
                type="password"
                autoComplete="new-password"
                value={password}
                onChange={(event) => setPassword(event.target.value)}
                className="mt-2 w-full rounded-lg border border-slate-200 px-4 py-2.5 text-slate-900 shadow-sm focus:border-accent-400 focus:outline-none focus:ring-2 focus:ring-accent-200"
                required
                minLength={8}
              />
              {errors.password ? (
                <p className="mt-1 text-sm text-red-600">{errors.password}</p>
              ) : null}
            </div>

            <div>
              <label
                htmlFor="confirmPassword"
                className="block text-sm font-semibold text-slate-700"
              >
                {translations.auth.forms.confirmPasswordLabel}
              </label>
              <input
                id="confirmPassword"
                type="password"
                autoComplete="new-password"
                value={confirmPassword}
                onChange={(event) => setConfirmPassword(event.target.value)}
                className="mt-2 w-full rounded-lg border border-slate-200 px-4 py-2.5 text-slate-900 shadow-sm focus:border-accent-400 focus:outline-none focus:ring-2 focus:ring-accent-200"
                required
                minLength={8}
              />
              {errors.confirmPassword ? (
                <p className="mt-1 text-sm text-red-600">
                  {errors.confirmPassword}
                </p>
              ) : null}
            </div>

            <button
              type="submit"
              className="w-full rounded-full bg-accent-600 px-4 py-2.5 text-sm font-semibold text-white shadow-sm transition hover:bg-accent-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent-500 disabled:cursor-not-allowed disabled:opacity-70"
              disabled={isSubmitting}
            >
              {isSubmitting
                ? `${translations.auth.forms.signupButton}...`
                : translations.auth.forms.signupButton}
            </button>
          </form>
        </div>
      </div>
    </main>
  );
};

export default SignupPage;
