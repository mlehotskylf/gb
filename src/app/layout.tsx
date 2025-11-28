import type { Metadata } from "next";
import { Raleway } from "next/font/google";
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

const raleway = Raleway({
  subsets: ["latin"],
  weight: ["400", "600", "700", "900"],
  variable: "--font-raleway",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Global Bunkers US | Premium Security Solutions Since 1988",
  description:
    "Premier provider of bunkers, panic rooms, safes, bulletproof glass, and bank liquidation services. Custom security solutions with 24/7 emergency availability.",
  keywords: [
    "bunkers",
    "panic rooms",
    "safe rooms",
    "bulletproof glass",
    "safes",
    "security solutions",
    "bank liquidation",
  ],
  authors: [{ name: "Global Bunkers US" }],
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://www.globalbunkers.us",
    siteName: "Global Bunkers US",
    title: "Global Bunkers US | Premium Security Solutions Since 1988",
    description:
      "Premier provider of bunkers, panic rooms, safes, bulletproof glass, and bank liquidation services.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={raleway.variable}>
      <body className="font-sans">
        <Header />
        <main className="min-h-screen">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
