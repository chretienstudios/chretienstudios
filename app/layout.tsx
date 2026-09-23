import type { ReactNode } from "react";
import type { Metadata, Viewport } from "next";
import { Syne, Inter } from "next/font/google";
import "./globals.css";

const display = Syne({
  subsets: ["latin"],
  weight: ["700", "800"],
  variable: "--font-display",
  display: "swap",
});

const body = Inter({
  subsets: ["latin"],
  variable: "--font-body",
  display: "swap",
});

export const metadata: Metadata = {
  title: "chrétienstudios | Brand identity & matchday design for sports clubs",
  description:
    "Graphic design for sports clubs and agencies: brand identity, matchday graphics and campaign creative that owns the season.",
  openGraph: {
    title: "chrétienstudios | Sports brand identity & matchday design",
    description:
      "Brand identity, matchday graphics and campaign creative for sports clubs and agencies.",
    type: "website",
  },
};

export const viewport: Viewport = {
  themeColor: "#17171a",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" className={`${display.variable} ${body.variable}`}>
      <head>
        <noscript>
          <style>{`.reveal{opacity:1!important;transform:none!important}`}</style>
        </noscript>
      </head>
      <body>{children}</body>
    </html>
  );
}
