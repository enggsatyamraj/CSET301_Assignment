import "./globals.css";
import Navbar from "@/components/Navbar";
import ShopNow from "@/components/ShopNow";
import { Actor } from "next/font/google";
import PageWrapper from "./PageWrapper";
import { GoogleTagManager } from '@next/third-parties/google';
import Script from "next/script";


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
      <GoogleTagManager gtmId="GTM-KM5VZD9Z" /> 
      <Script 
      id="gtm-script"
      strategy="afterInteractive"
      dangerouslySetInnerHTML={{
        __html: `
        (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
        new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
        j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
        'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
        })(window,document,'script','dataLayer','GTM-KM5VZD9Z');
        `
      }}></Script>

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
