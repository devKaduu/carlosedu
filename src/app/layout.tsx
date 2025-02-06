import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";

import "./globals.css";
import { MouseMoveEffect } from "@/components/MouseMoveEffect";

const poppins = Poppins({
  weight: ["400", "700", "500"],
  subsets: ["latin"],
  variable: "--font-poppins",
});

export const metadata: Metadata = {
  title: "Carlos Eduardo",
  description: "Learn about us...",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${poppins.variable}  antialiased`}>
        <MouseMoveEffect />
        {children}
        <Analytics />
      </body>
    </html>
  );
}
