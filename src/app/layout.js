import "./globals.css";
import Navbar from "@/components/Navbar";
import ShopNow from "@/components/ShopNow";
import { Actor } from "next/font/google";
import PageWrapper from "./PageWrapper";
import Script from "next/script";


const actor = Actor({ weight: "400", subsets: ["latin"] });

export const metadata = {
  title: "Buy Aged and Old Discord Accounts | Premium Social Media Solutions - Discord Arena",
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
      <script
          async
          src={`https://www.googletagmanager.com/gtag/js?id=G-S9PV0VDRVG`}
        />
        <script
          dangerouslySetInnerHTML={{
            __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-S9PV0VDRVG', {
              page_path: window.location.pathname,
            });
          `,
          }}
        />
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
