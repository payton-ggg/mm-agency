import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
  weight: ["300", "400", "500", "600", "700", "800"],
});

const playfair = Playfair_Display({
  variable: "--font-serif",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Linea12 Models | Premium Model management",
  description:
    "Linea12 Models is a boutique model management agency representing elite fashion and commercial talent worldwide. Excellence in representation, editorial, and runway.",
  keywords: [
    "Linea12 Models",
    "Linea12",
    "model agency",
    "fashion models",
    "commercial models",
    "talent representation",
    "Milan models",
    "Paris models",
    "London models",
  ],
  authors: [{ name: "Linea12 Models" }],
  openGraph: {
    title: "Linea12 Models | Premium Model Management",
    description: "Representing elite fashion and commercial models worldwide.",
    url: "https://linea12.com",
    siteName: "Linea12 Models",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Linea12 Models | Premium Model Management",
    description: "Representing elite fashion and commercial models worldwide.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${playfair.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
