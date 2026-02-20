import React from "react"
import type { Metadata, Viewport } from "next";
import { DM_Sans, DM_Serif_Display } from "next/font/google";

import "./globals.css";

const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-dm-sans",
  weight: ["300", "400", "500", "600", "700"],
});

const dmSerif = DM_Serif_Display({
  subsets: ["latin"],
  variable: "--font-dm-serif",
  weight: "400",
});

export const metadata: Metadata = {
  title: "HerDigitalEdge - Operations, AI Support & Project Management for Service-Based Businesses",
  description:
    "Strategic marketing, Operations support & project management for small service-based business owners. Stop juggling everything and start growing with confidence.",
};

export const viewport: Viewport = {
  themeColor: "#f2ebe6",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${dmSans.variable} ${dmSerif.variable}`}>
      <body className="font-sans antialiased">{children}</body>
    </html>
  );
}
