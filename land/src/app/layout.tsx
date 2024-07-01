import type { Metadata } from "next";
import Head from "next/head";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL("https://work.tom.so/land"),
  title: {
    default: "Land",
    template: "%s | Land",
  },
  description: "A map for work.",
  openGraph: {
    title: "Land",
    description: "A map for work.",
    url: "https://work.tom.so/land",
    siteName: "Land",
    locale: "en_NZ",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  twitter: {
    title: "Land",
    card: "summary_large_image",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <meta property="og:image" content="/land/og.png" />
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:image" content="/land/og.png" />
        <meta name="description" content="A map for work." />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/land/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/land/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/land/favicon-16x16.png"
        />
        <link rel="manifest" href="/land/site.webmanifest" />
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
