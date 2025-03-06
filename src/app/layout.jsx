import { Roboto } from "next/font/google";
import { NavBar } from "@/components/NavBar";
import Footer from "@/components/Footer";
import "./globals.css";

const roboto = Roboto({
  weight: "400",
  subsets: ["latin"],
});
export const metadata = {
  title: "Landing Page - Pizzaria",
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt-br" className={roboto.className}>
      <body className="bg-black text-white scroll-smooth">
        <NavBar />

        {children}

        <Footer />
      </body>
    </html>
  );
}
