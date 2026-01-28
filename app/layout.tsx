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
  title: "Elite Model Agency | High-Fashion Representation",
  description:
    "Representing elite fashion and commercial models worldwide. Bold presence, powerful portfolios, and professional representation for brands and talent.",
  keywords: [
    "model agency",
    "fashion models",
    "commercial models",
    "talent representation",
    "model booking",
  ],
  authors: [{ name: "Elite Model Agency" }],
  openGraph: {
    title: "Elite Model Agency | High-Fashion Representation",
    description: "Representing elite fashion and commercial models worldwide.",
    type: "website",
    locale: "en_US",
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
