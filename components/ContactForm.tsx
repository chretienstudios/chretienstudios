"use client";

import { useState, type FormEvent } from "react";
import { SITE } from "@/lib/content";

/**
 * Sends the enquiry straight to the studio inbox via Web3Forms.
 * Needs NEXT_PUBLIC_WEB3FORMS_KEY (set in Vercel). Without it, falls back to
 * opening the visitor's email app so the form never breaks.
 */
const ACCESS_KEY = process.env.NEXT_PUBLIC_WEB3FORMS_KEY;

type Status = "idle" | "sending" | "sent" | "error";

export default function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const f = new FormData(form);
    const get = (k: string) => String(f.get(k) ?? "").trim();

    // honeypot: real people never fill this in
    if (get("botcheck")) return;

    const subject = `Enquiry from ${get("org") || get("name")}`;

    if (!ACCESS_KEY) {
      const body = [
        `Name: ${get("name")}`,
        `Club / organisation: ${get("org")}`,
        `Email: ${get("email")}`,
        `Looking for: ${get("need")}`,
        "",
        get("message"),
      ].join("\n");
      window.location.href = `mailto:${SITE.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
      setStatus("sent");
      return;
    }

    setStatus("sending");
    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({
          access_key: ACCESS_KEY,
          subject,
          from_name: "chrétienstudios website",
          name: get("name"),
          club_or_agency: get("org"),
          email: get("email"),
          replyto: get("email"),
          looking_for: get("need"),
          message: get("message"),
        }),
      });
      const data = await res.json().catch(() => ({}));
      if (res.ok && data.success) {
        form.reset();
        setStatus("sent");
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  }

  return (
    <form className="form" onSubmit={onSubmit}>
      <input type="text" name="botcheck" tabIndex={-1} autoComplete="off" aria-hidden="true" style={{ display: "none" }} />
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
        <button type="submit" className="btn btn-pink" disabled={status === "sending"}>
          {status === "sending" ? "Sending…" : "Send enquiry"}
        </button>
        {status === "sent" ? (
          <small role="status">{ACCESS_KEY ? "Thanks, your enquiry is in. I'll reply within a day or two." : "Opening your email app…"}</small>
        ) : null}
        {status === "error" ? (
          <small role="alert">
            Something went wrong. Please email <a href={`mailto:${SITE.email}`}>{SITE.email}</a> instead.
          </small>
        ) : null}
      </div>
    </form>
  );
}
