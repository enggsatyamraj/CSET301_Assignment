import "./globals.css";
import Navbar from "@/components/Navbar";
import ShopNow from "@/components/ShopNow";
import { Actor } from "next/font/google";
import PageWrapper from "./PageWrapper";
import { GoogleTagManager } from '@next/third-parties/google';


const actor = Actor({ weight: "400", subsets: ["latin"] });

export const metadata = {
  title: "Buy Premium Aged Discord & Social Accounts | Discord Arena",
  description:
    "Discover top-tier aged and verified Discord accounts at Discord Arena. Boost your online presence with our premium services and unbeatable prices.",
  keywords: "Aged Discord accounts, verified Discord accounts, buy Discord accounts, Discord server boosts, social media accounts for sale, Buy Instagram accounts",
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
      <GoogleTagManager gtmId="G-S9PV0VDRVG" />
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
