import type { Metadata } from "next";
import { DM_Sans, Cormorant_Garamond, DM_Mono } from "next/font/google";
import { ThemeProvider } from "@/context/ThemeContext";
import "./globals.css";
import Image from "next/image";

// ─── FONT INITIALIZATIONS ───
const sans = DM_Sans({
  subsets: ["latin"],
  weight: ["300", "400", "500"],
  variable: "--font-sans",
});

const serif = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["300", "400", "600"],
  variable: "--font-serif",
});

const mono = DM_Mono({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-mono",
});

export const metadata: Metadata = {
  title: "Glenn — Portfolio",
  description: "Portfolio",
};

export default function Hero() {
  return (
    <Image
      src="/profile.jpg"
      alt="Glenn profile picture"
      width={300}
      height={300}
      className="rounded-full"
    />
  );
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${sans.variable} ${serif.variable} ${mono.variable} antialiased relative min-h-screen overflow-x-hidden`}
      >
        <ThemeProvider>
          {/* Subtle noise texture overlay */}
          <div className="bg-[url('/profile.jpg')] bg-cover bg-center" />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}