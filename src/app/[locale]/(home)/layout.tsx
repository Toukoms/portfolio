import Background from "@/components/Background";
import Providers from "@/provider/Providers";
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "../globals.css";

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

export default async function RootLayout({
  children,
  params,
}: Readonly<{
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}>) {
  const { locale } = await params;

  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
        style={{
          backgroundImage: `radial-gradient(circle at 20% 30%, rgba(10, 70, 90, 0.1) 0%, transparent 30%),
          radial-gradient(circle at 80% 70%, rgba(120, 20, 100, 0.05) 0%, transparent 40%)`,
          backgroundRepeat: "repeat-y",
        }}
      >
        <Background />
        <Providers locale={locale}>{children}</Providers>
      </body>
    </html>
  );
}
