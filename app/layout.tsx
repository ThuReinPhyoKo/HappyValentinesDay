import type { Metadata } from "next";
import { Satisfy, Quicksand, Henny_Penny, Orbitron } from "next/font/google";
import "./globals.css";

const quicksand = Quicksand({
  variable: "--font-quicksand",
  subsets: ["latin"],
});

const timeFont = Orbitron({
  variable: "--font-time",
  subsets: ["latin"],
  weight: ["400"]
})

const satisfy = Satisfy({
  variable: "--font-satisfy",
  subsets: ["latin"],
  weight: ["400"]
});

const angryFont = Henny_Penny({
  variable: "--font-angry",
  subsets: ["latin"],
  weight: ["400"]
})

export const metadata: Metadata = {
  title: "Thae, Happy Valentine's Day",
  description: "Created by Thu Rein Phyo Ko",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${quicksand.variable} ${timeFont.variable} ${angryFont.variable} ${satisfy.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
