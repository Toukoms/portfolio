import Header from "@/components/Header";
import Footer from "@/components/Footer";
import "./globals.css";
import localFont from "next/font/local";
import { ThemeProvider } from "@/providers/ThemeProvider";
import ScrollViewProvider from "@/providers/ScrollViewProvider";

const OswaldFont = localFont({
  src: "../../public/fonts/Oswald-Regular.ttf",
  display: "swap",
  variable: "--font-oswald",
});

const Montserrat = localFont({
  src: "../../public/fonts/Montserrat-Regular.ttf",
  display: "swap",
  variable: "--font-montserrat",
});

const BebasNeue = localFont({
  src: "../../public/fonts/BebasNeue-Regular.ttf",
  display: "swap",
  variable: "--font-bebas-neue",
});

export const metadata = {
  title: "Toki",
  description:
    "I create websites and applications that are accessible, engaging, and visually appealing.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${OswaldFont.variable} ${Montserrat.variable} ${BebasNeue.variable} h-full bg-background text-foreground overflow-x-hidden overflow-y-auto`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <ScrollViewProvider />
          <Header></Header>
          {children}
          <Footer></Footer>
        </ThemeProvider>
      </body>
    </html>
  );
}
