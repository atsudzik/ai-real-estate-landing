"use client";

import {
  FormEvent,
  useEffect,
  useId,
  useRef,
  useState,
} from "react";
import { FiMessageCircle } from "react-icons/fi";
import { useLanguage } from "@/contexts/language-context";
import type { HelpCategory } from "@/lib/translations";

export const HelpWidget = () => {
  const { translations } = useLanguage();
  const { label, form } = translations.helpWidget;
  const initialCategory =
    (form.categories[0]?.value as HelpCategory | undefined) ?? "help";
  const [open, setOpen] = useState(false);
  const [category, setCategory] = useState<HelpCategory>(initialCategory);
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const emailFieldRef = useRef<HTMLInputElement>(null);
  const panelId = useId();
  const categoryId = useId();
  const emailId = useId();
  const messageId = useId();

  useEffect(() => {
    const availableValues = form.categories.map(
      (option) => option.value as HelpCategory,
    );
    setCategory((current) => {
      if (availableValues.includes(current)) {
        return current;
      }
      return availableValues[0] ?? ("help" as HelpCategory);
    });
  }, [form.categories]);

  useEffect(() => {
    if (!open) {
      setSubmitted(false);
      setEmail("");
      setMessage("");
      return;
    }

    emailFieldRef.current?.focus();
  }, [open]);

  useEffect(() => {
    if (!open) {
      return;
    }

    const handleClickOutside = (event: MouseEvent) => {
      if (
        containerRef.current &&
        !containerRef.current.contains(event.target as Node)
      ) {
        setOpen(false);
      }
    };

    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    document.addEventListener("keydown", handleEscape);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("keydown", handleEscape);
    };
  }, [open]);

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setSubmitted(true);
    setEmail("");
    setMessage("");
  };

  return (
    <div className="fixed bottom-6 right-6 z-40">
      <div ref={containerRef} className="flex flex-col items-end gap-3">
        {open ? (
          <form
            id={panelId}
            onSubmit={handleSubmit}
            className="card w-[calc(100vw-3rem)] max-w-sm space-y-4 sm:w-80"
          >
            <div>
              <h2 className="text-lg font-semibold text-slate-900">{form.title}</h2>
              <p className="mt-1 text-sm text-slate-600">{form.description}</p>
            </div>
            <div>
              <label htmlFor={categoryId} className="block">
                {form.categoryLabel}
              </label>
              <select
                id={categoryId}
                className="mt-1 w-full"
                value={category}
                onChange={(event) =>
                  setCategory(event.target.value as HelpCategory)
                }
                required
              >
                {form.categories.map((option) => (
                  <option key={option.value} value={option.value}>
                    {option.label}
                  </option>
                ))}
              </select>
            </div>
            <div>
              <label htmlFor={emailId} className="block">
                {form.emailLabel}
              </label>
              <input
                id={emailId}
                type="email"
                className="mt-1 w-full"
                ref={emailFieldRef}
                value={email}
                onChange={(event) => setEmail(event.target.value)}
                placeholder={form.emailPlaceholder}
                autoComplete="email"
                required
              />
            </div>
            <div>
              <label htmlFor={messageId} className="block">
                {form.messageLabel}
              </label>
              <textarea
                id={messageId}
                className="mt-1 w-full"
                rows={4}
                value={message}
                onChange={(event) => setMessage(event.target.value)}
                placeholder={form.messagePlaceholder}
                required
              />
            </div>
            <button type="submit" className="primary w-full">
              {form.submitLabel}
            </button>
            {submitted ? (
              <p className="text-sm text-accent-600" role="status" aria-live="polite">
                {form.successMessage}
              </p>
            ) : null}
          </form>
        ) : null}

        <button
          type="button"
          className="flex items-center gap-2 rounded-full bg-accent-500 px-5 py-3 text-sm font-semibold text-white shadow-xl shadow-accent-500/30 transition hover:bg-accent-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent-500"
          onClick={() => setOpen((prev) => !prev)}
          aria-expanded={open}
          aria-controls={panelId}
        >
          <FiMessageCircle className="h-5 w-5" />
          <span>{label}</span>
        </button>
      </div>
    </div>
  );
};
