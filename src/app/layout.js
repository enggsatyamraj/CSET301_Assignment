import "./globals.css";
import Navbar from "@/components/Navbar";
import ShopNow from "@/components/ShopNow";
import { Actor } from "next/font/google";
import PageWrapper from "./PageWrapper";
import { GoogleTagManager } from '@next/third-parties/google';


const actor = Actor({ weight: "400", subsets: ["latin"] });

export const metadata = {
  title: "Welcome to Discord Arena: Explore Aged and Verified Accounts",
  description:
    "A place to find and buy discord accounts at Ease. We specialize in providing premium Discord, Instagram, and accounts tailored to meet your unique needs.",
  keywords: "discord, accounts, instagram, aged accounts, verified accounts, Discord Arena, Aged Discord accounts for sale, Verified Discord accounts,Buy phone-verified Discord accounts,Thriving communities, Discord services, Reaction services, Instagram accounts, Instagram accounts",
  icons: {
    icon: ["/favicon.ico?v=4"],
    apple: ["/apple-touch-icon.png?v=4"],
    shortcut: ["/favicon.ico?v=4"],
  },
  manifest: "/site.webmanifest",
};

 

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <GoogleTagManager gtmId="G-47WWXHZ0GV" />
      <body className={actor.className}>
        {/* <PageWrapper> */}
          <Navbar />
          <ShopNow />
          {children}
        {/* </PageWrapper> */}
      </body>
    </html>
  );
}
