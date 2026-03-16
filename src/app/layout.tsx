import type { Metadata, Viewport } from "next";
import { Cormorant_Garamond, Instrument_Sans } from "next/font/google";
import "./globals.css";
import Navigation from "@/components/Navigation";
import { clsx } from "clsx";

const cormorant = Cormorant_Garamond({
  variable: "--font-cormorant",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

const instrument = Instrument_Sans({
  variable: "--font-instrument",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Amit Jaison | Frontend Engineer & Photographer",
  description: "Portfolio of Amit Jaison - showcasing front-end projects, visual stories, and thoughts on design & tech.",
  keywords: ["Front-end Engineer", "Photographer", "Storyteller", "React", "Next.js", "Portfolio"],
};

export const viewport: Viewport = {
  themeColor: "#F5F3EF",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={clsx(cormorant.variable, instrument.variable, "antialiased")}>
        <Navigation />
        {children}
      </body>
    </html>
  );
}
