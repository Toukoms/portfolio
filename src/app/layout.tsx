import Header from "@/components/Header";
import Footer from "@/components/Footer";
import "./globals.css";
import localFont from "next/font/local";
import { ThemeProvider } from "@/providers/ThemeProvider";
import ScrollViewProvider from "@/providers/ScrollViewProvider";
import { BackgroundBeamsWithCollision } from "@/components/ui/background-beams-with-collision";
import { cn } from "@/lib/utils";

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
        className={cn(
          `${OswaldFont.variable} ${Montserrat.variable} ${BebasNeue.variable} h-full bg-background text-foreground overflow-x-hidden overflow-y-auto`,
          `bg-none dark:bg-[url(/bg-dotted.svg)] bg-[auto_56px] bg-repeat-space`
        )}
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
        {/* <Image
          src={bgDotted}
          alt="bg-dotted"
          width={1920}
          height={1080}
          className="fixed top-0 left-0 h-screen w-screen -z-50 "
        /> */}
        <BackgroundBeamsWithCollision />
      </body>
    </html>
  );
}
