import "./globals.css";
import Navbar from "@/components/Navbar";
import ShopNow from "@/components/ShopNow";
import { Actor } from "next/font/google";
import PageWrapper from "./PageWrapper";
import Script from "next/script";
import Footer from "@/components/Footer";

const actor = Actor({ weight: "400", subsets: ["latin"] });

export const metadata = {
  title: "Premium Aged Discord Accounts for Sale | Discord Arena",
  description:
    "Discover a variety of aged and premium social media accounts, including Discord, Instagram, and Reddit. Boost your online presence with our premium services.",
  keywords:
    "Aged Discord accounts, aged discord accounts free, verified Discord accounts, buy Discord accounts, Discord server boosts, social media accounts for sale, Buy Instagram accounts, aged accounts, buy Discord accounts, buy social media accounts, premium accounts, verified Discord accounts, aged Instagram accounts, Reddit accounts",
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
      <script
        type="text/javascript"
        src="//widget.trustpilot.com/bootstrap/v5/tp.widget.bootstrap.min.js"
        async
      ></script>

      <body className={actor.className}>
        {/* <PageWrapper> */}
        <Navbar />
        <ShopNow />
        {children}
        <Footer />
        {/* </PageWrapper> */}
      </body>
    </html>
  );
}
