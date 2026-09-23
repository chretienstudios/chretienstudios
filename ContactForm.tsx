"use client";

import { useState, type FormEvent } from "react";
import { SITE } from "@/lib/content";

/**
 * Opens the visitor's email app with the enquiry pre-filled.
 * Swap for a Formspree / Resend / server action if you want in-page submission.
 */
export default function ContactForm() {
  const [sent, setSent] = useState(false);

  function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const f = new FormData(e.currentTarget);
    const get = (k: string) => String(f.get(k) ?? "").trim();

    const subject = `Enquiry from ${get("org") || get("name")}`;
    const body = [
      `Name: ${get("name")}`,
      `Club / organisation: ${get("org")}`,
      `Email: ${get("email")}`,
      `Looking for: ${get("need")}`,
      "",
      get("message"),
    ].join("\n");

    window.location.href = `mailto:${SITE.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    setSent(true);
  }

  return (
    <form className="form" onSubmit={onSubmit}>
      <label>
        <span>Your name</span>
        <input name="name" required autoComplete="name" placeholder="Alex Morgan" />
      </label>
      <label>
        <span>Club / agency</span>
        <input name="org" required placeholder="Harbour City FC" />
      </label>
      <label>
        <span>Email</span>
        <input name="email" type="email" required autoComplete="email" placeholder="you@club.com" />
      </label>
      <label>
        <span>What do you need?</span>
        <select name="need" defaultValue="Brand identity">
          <option>Brand identity</option>
          <option>Matchday graphics</option>
          <option>Agency / sponsor creative</option>
          <option>Something else</option>
        </select>
      </label>
      <label className="form-wide">
        <span>Tell us about your season</span>
        <textarea name="message" rows={4} placeholder="Where you are now, and where you want to be…" />
      </label>
      <div className="form-wide form-actions">
        <button type="submit" className="btn btn-pink">
          Send enquiry
        </button>
        {sent ? <small role="status">Opening your email app…</small> : null}
      </div>
    </form>
  );
}
