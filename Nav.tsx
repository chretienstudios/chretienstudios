"use client";

import { useEffect, useState } from "react";
import { SITE } from "@/lib/content";

const LINKS = [
  { href: "#services", label: "Services" },
  { href: "#work", label: "Work" },
  { href: "#why", label: "Why us" },
  { href: "#studio", label: "Studio" },
  { href: "#process", label: "Process" },
];

export function Wordmark() {
  return (
    <span className="wordmark">
      <b>chrétien</b>
      <span>studios</span>
    </span>
  );
}

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className={`nav ${scrolled || open ? "nav-solid" : ""}`}>
      <a href="#top" className="nav-logo" aria-label="chrétienstudios home" onClick={() => setOpen(false)}>
        <Wordmark />
      </a>

      <nav className={`nav-links ${open ? "open" : ""}`} aria-label="Primary">
        {LINKS.map((l) => (
          <a key={l.href} href={l.href} onClick={() => setOpen(false)}>
            {l.label}
          </a>
        ))}
        <a
          href={SITE.instagram}
          target="_blank"
          rel="noopener noreferrer"
          className="nav-ig"
          aria-label="Instagram"
        >
          <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
            <rect x="3" y="3" width="18" height="18" rx="5" />
            <circle cx="12" cy="12" r="4" />
            <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
          </svg>
        </a>
        <a href="#contact" className="btn btn-light nav-cta" onClick={() => setOpen(false)}>
          Contact us
        </a>
      </nav>

      <button
        className="nav-burger"
        aria-label="Toggle menu"
        aria-expanded={open}
        onClick={() => setOpen((v) => !v)}
      >
        <span />
        <span />
      </button>
    </header>
  );
}
