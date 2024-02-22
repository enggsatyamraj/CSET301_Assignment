import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import ShopNow from "@/components/ShopNow";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Discord arena",
  description: "A place to find discord accounts and join discord servers, communities and events.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar/>
        <ShopNow/>
        {children}
      </body>
    </html>
  );
}
