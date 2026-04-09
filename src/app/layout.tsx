import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Koydo — CLAT UG Prep",
  description: "Law admissions prep — passage-based practice, mock tests, and study tools powered by Koydo.",
  manifest: "/manifest.webmanifest",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
