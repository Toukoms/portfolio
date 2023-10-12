import Header from "@/components/Header";
import Footer from "@/components/Footer";
import "./globals.css";
import localFont from "next/font/local";

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
  title: "Portfolio",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`${OswaldFont.variable} ${Montserrat.variable} ${BebasNeue.variable} h-full md:h-screen sm:p-2 flex flex-col gap-2 justify-between text-neutral-200 bg-gradient-to-bl from-slate-800 to-gray-800`}
      >
        <Header></Header>
        {children}
        <Footer></Footer>
      </body>
    </html>
  );
}
