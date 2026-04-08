import type { Metadata } from "next";
import { Cormorant_Garamond, Questrial } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import SmoothScroll from "@/components/layout/SmoothScroll";

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["300", "500"],
  variable: "--font-cormorant",
  display: "swap",
});

const questrial = Questrial({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-questrial",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "FRANCESCA. | Fine Jewelry — Carlsbad, CA",
    template: "%s | FRANCESCA.",
  },
  description:
    "Fine jewelry designed around you. Custom engagement rings, wedding bands, necklaces, and more. By appointment only in Carlsbad, California.",
  openGraph: {
    type: "website",
    locale: "en_US",
    siteName: "FRANCESCA.",
    title: "FRANCESCA. | Fine Jewelry — Carlsbad, CA",
    description:
      "Fine jewelry designed around you. Custom engagement rings, wedding bands, necklaces, and more. By appointment only in Carlsbad, California.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${cormorant.variable} ${questrial.variable}`}>
      <body className="font-questrial bg-background text-foreground antialiased">
        <SmoothScroll />
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
