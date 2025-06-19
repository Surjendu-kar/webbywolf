import Footer from "@/components/layout/Footer";
import Header from "@/components/layout/Header";
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "WebbyWolf | Premium Motorcycle Marketplace",
  description:
    "India's leading motorcycle marketplace. Buy, sell, and get quotes for motorcycles from top brands like Hero, Honda, Bajaj, TVS, Royal Enfield, and more. Expert guidance and hassle-free bike purchasing experience.",
  keywords:
    "motorcycle marketplace, buy bikes, sell bikes, motorcycle quotes, bike dealers, Royal Enfield, Hero, Honda, Bajaj, TVS, Yamaha, KTM, Ather, motorcycle financing",
  authors: [{ name: "Surjendu" }],
  openGraph: {
    title: "WebbyWolf | Premium Motorcycle Marketplace",
    description:
      "India's leading motorcycle marketplace. Buy, sell, and get quotes for motorcycles from top brands. Expert guidance and hassle-free bike purchasing experience.",
    siteName: "WebbyWolf",
    images: [
      {
        url: "/motorcycles/rider.webp",
        width: 1200,
        height: 630,
        alt: "WebbyWolf Motorcycle Marketplace",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "WebbyWolf | Premium Motorcycle Marketplace",
    description:
      "India's leading motorcycle marketplace. Buy, sell, and get quotes for motorcycles from top brands. Expert guidance and hassle-free bike purchasing experience.",
    images: ["/motorcycles/rider.webp"],
    creator: "@webbywolf",
    site: "@webbywolf",
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

  viewport: {
    width: "device-width",
    initialScale: 1,
    maximumScale: 1,
  },
  category: "Automotive",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
