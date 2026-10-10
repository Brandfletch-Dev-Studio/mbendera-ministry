import type { Metadata } from "next";
import { Fraunces, Inter } from "next/font/google";
import "./globals.css";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import { CartProvider } from "@/components/CartProvider";

const fraunces = Fraunces({
  subsets: ["latin"],
  variable: "--font-fraunces",
  display: "swap",
});
const inter = Inter({ subsets: ["latin"], variable: "--font-inter", display: "swap" });

export const metadata: Metadata = {
  title: {
    default: "Mbendera Music & Ministry — Bishop George Enock Mbendera",
    template: "%s — Mbendera Music & Ministry",
  },
  description:
    "A shepherd’s heart, a servant’s calling. From Blantyre, Malawi, Bishop George Enock Mbendera has devoted his life to preaching the gospel and raising worshippers. Through sermons, songs, books, and digital discipleship, his ministry reaches nations.",
  openGraph: {
    title: "Mbendera Music & Ministry",
    description: "Music and Word Transforming Lives in Christ.",
    images: ["/assets/bishop-hero.png"],
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${fraunces.variable} ${inter.variable}`}>
      <body>
        <CartProvider>
          <SiteHeader />
          {children}
          <SiteFooter />
        </CartProvider>
      </body>
    </html>
  );
}
