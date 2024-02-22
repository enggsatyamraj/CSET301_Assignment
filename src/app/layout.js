import "./globals.css";
import Navbar from "@/components/Navbar";
import ShopNow from "@/components/ShopNow";
import { Actor } from "next/font/google";

const actor = Actor({ weight: "400", subsets: ["latin"] });

export const metadata = {
  title: "Discord arena",
  description: "A place to find discord accounts and join discord servers, communities and events.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={actor.className}>
        <Navbar/>
        <ShopNow/>
        {children}
      </body>
    </html>
  );
}
