import "./globals.css";
import Navbar from "@/components/Navbar";
import ShopNow from "@/components/ShopNow";
import { Actor } from "next/font/google";
import PageWrapper from "./PageWrapper";
import { GoogleTagManager } from '@next/third-parties/google';


const actor = Actor({ weight: "400", subsets: ["latin"] });

export const metadata = {
  title: "Discord Arena | Aged and Verified Accounts for Sale",
  description:
    "A place to find and buy discord accounts at Ease. We specialize in providing premium Discord, Instagram, and accounts tailored to meet your unique needs. Discover top-quality aged and verified Discord accounts for sale at Discord Arena. Enhance your server's credibility with our secure and reliable accounts. Perfect for businesses, communities, and enthusiasts. Buy now for instant access and boost your online presence!",
  keywords: "Aged Discord accounts for sale, Verified Discord accounts, Buy Discord accounts, Secure Discord accounts, Reliable Discord accounts, Discord accounts marketplace, Purchase Discord accounts, Aged Discord accounts, Verified Discord accounts for sale, Buy aged Discord accounts, Instagram accounts",
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
