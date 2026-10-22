import Background from "@/components/Background";
import Providers from "@/provider/Providers";
import { getResumeContent } from "@/lib/portfolio-data";
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Analytics } from "@vercel/analytics/next"
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: "en" | "fr" }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const resume = await getResumeContent();
  return {
    title: `${resume.name} - Portfolio`,
    description: resume.hero.subtitle[locale],
    openGraph: {
      images: "/pdp.jpg",
    },
  };
}

export default async function RootLayout({
  children,
  params,
}: Readonly<{
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}>) {
  const { locale } = await params;

  return (
    <html lang={locale}>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Background />
        <Providers locale={locale}>{children}</Providers>
        <Analytics />
      </body>
    </html>
  );
}
