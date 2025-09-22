"use client";

import { FormEvent, useState } from "react";

export const ContactForm = () => {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 5000);
  };

  return (
    <form onSubmit={handleSubmit} className="card space-y-4">
      <div className="space-y-2">
        <label htmlFor="contact-name">Full name</label>
        <input id="contact-name" name="name" required placeholder="Ada Lovelace" />
      </div>
      <div className="space-y-2">
        <label htmlFor="contact-email">Business email</label>
        <input id="contact-email" name="email" type="email" required placeholder="you@company.com" />
      </div>
      <div className="space-y-2">
        <label htmlFor="contact-message">How can we help?</label>
        <textarea id="contact-message" name="message" rows={4} required placeholder="Tell us about your project" />
      </div>
      <button type="submit" className="primary w-full">
        Send message
      </button>
      {submitted ? (
        <div className="rounded-xl bg-accent-50 px-4 py-3 text-sm font-medium text-accent-700">
          Thank you! Our team will respond within one business day.
        </div>
      ) : null}
    </form>
  );
};
