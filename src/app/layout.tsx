import { MouseMoveEffect } from "@/components/MouseMoveEffect";
import { Analytics } from "@vercel/analytics/next";
import type { Metadata } from "next";
import { Antonio, Inter, Sofia_Sans_Condensed } from "next/font/google";

import { Lenis } from "@/components/Lenis";
import "./globals.css";

const inter = Inter({
  weight: ["400", "700", "500"],
  subsets: ["latin"],
  variable: "--font-inter",
});

const sofia = Sofia_Sans_Condensed({
  weight: ["100", "200", "300", "400", "700", "500", "800", "900"],
  subsets: ["latin"],
  variable: "--font-sans",
});

const antonio = Antonio({
  weight: ["100", "200", "300", "400", "700", "500"],
  subsets: ["latin"],
  variable: "--font-antonio",
});

export const metadata: Metadata = {
  title: "Carlos Eduardo",
  description: "Learn about us...",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <Lenis>
      <html lang="pt-br">
        <body className={`${inter.variable} ${sofia.variable} ${antonio.variable} antialiased`}>
          <MouseMoveEffect />

          {children}

          <Analytics />
        </body>
      </html>
    </Lenis>
  );
}
