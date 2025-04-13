import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import NavigationProvider from "@/provider/NavigationProvider";
import "./globals.css";
import Background from "@/components/Background";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Tokiniaina - Portfolio",
  description: "Web developer with 3 years of experience",
  openGraph: {
    images: "/pdp.jpg",
  },
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
        <Background />
        <NavigationProvider>{children}</NavigationProvider>
      </body>
    </html>
  );
}
