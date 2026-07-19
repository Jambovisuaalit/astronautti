import type { Metadata } from "next";
import { DM_Sans, JetBrains_Mono } from "next/font/google";
import "./globals.css";

// Fonts
const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-sans",
});

const jetBrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
});

// Metadata
const title = "Astronautti teknologiapino";
const description =
  "Moderni Next.js-pohjainen verkkopalvelun teknologiavalinta, joka yhdistää sisällönhallinnan, analytiikan ja kasvutyökalut.";

export const metadata: Metadata = {
  metadataBase: process.env.VERCEL_URL
    ? new URL(`https://${process.env.VERCEL_URL}`)
    : new URL(`http://localhost:${process.env.PORT || 3000}`),
  title,
  description,
  openGraph: {
    title,
    description,
    url: "/",
    locale: "fi-FI",
    type: "website",
  },
  twitter: {
    title,
    description,
    card: "summary_large_image",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fi">
      <body className={`${dmSans.variable} ${jetBrainsMono.variable}`}>{children}</body>
    </html>
  );
}
