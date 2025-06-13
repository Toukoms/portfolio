import type { Metadata } from "next";
import "../globals.css";

export const metadata: Metadata = {
  title: "Tokiniaina - Admin Portfolio",
  description: "Web developer with 3 years of experience",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
