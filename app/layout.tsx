import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
});

const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL?.trim() || "http://localhost:3000";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: "Sonieo Production | Professional Video Editing Portfolio",
  description:
    "High-quality video editing portfolio showcasing cinematic edits, reels, and creative visual storytelling by Sonieo Production.",
  icons: {
    icon: "/sonieo production.png",
    shortcut: "/sonieo production.png",
    apple: "/sonieo production.png",
  },
  openGraph: {
    title: "Sonieo Production | Professional Video Editing Portfolio",
    description:
      "High-quality video editing portfolio showcasing cinematic edits, reels, and creative visual storytelling by Sonieo Production.",
    type: "website",
    siteName: "Sonieo Production",
    images: [
      {
        url: "/sonieo production.png",
        alt: "Sonieo Production logo",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Sonieo Production | Professional Video Editing Portfolio",
    description:
      "High-quality video editing portfolio showcasing cinematic edits, reels, and creative visual storytelling by Sonieo Production.",
    images: ["/sonieo production.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
