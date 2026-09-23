"use client";

import { useEffect, useRef, useState } from "react";

/**
 * Shows a client's logo (turned white with CSS). If the logo file hasn't been
 * uploaded yet, it falls back to the club's name as text.
 */
export default function ClientLogo({ name, src }: { name: string; src: string }) {
  const [failed, setFailed] = useState(false);
  const ref = useRef<HTMLImageElement>(null);

  // Catches images that already failed before React attached the error handler
  useEffect(() => {
    const img = ref.current;
    if (img && img.complete && img.naturalWidth === 0) setFailed(true);
  }, []);

  if (failed) return <span className="clients-name">{name}</span>;

  return (
    // eslint-disable-next-line @next/next/no-img-element
    <img
      ref={ref}
      className="clients-logo"
      src={src}
      alt={name}
      onError={() => setFailed(true)}
    />
  );
}
