import { NavBar } from "@/components/NavBar";
import "./globals.css";

export const metadata = {
  title: "Landing Page",
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt-br">
      <body className="bg-primary-1">
        <NavBar />

        {children}
      </body>
    </html>
  );
}
