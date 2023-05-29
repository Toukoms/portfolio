import Header from "@/components/Header";
import Footer from "@/components/Footer";
import "./globals.css";

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
      <body className="h-screen p-4 flex flex-col gap-2 justify-between text-neutral-200 bg-gradient-to-bl from-slate-800 to-gray-800 ">
        <Header></Header>
        {children}
        <Footer></Footer>
      </body>
    </html>
  );
}
