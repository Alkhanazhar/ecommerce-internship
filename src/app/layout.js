import { Outfit } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";

const inter = Outfit({ subsets: ["latin"] });

export const metadata = {
  title: "Ecommerce App",
  description: "you can customize your products.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header />
        {children}</body>
    </html>
  );
}
