import "./globals.css";
import Navbar from "@/components/Navbar";
import ShopNow from "@/components/ShopNow";
import { Actor } from "next/font/google";
import Script from "next/script";
import Footer from "@/components/Footer";

const actor = Actor({ weight: "400", subsets: ["latin"] });

export const metadata = {
  title: "Premium Aged Discord Accounts for Sale | Discord Arena",
  description:
    "Buy aged Discord accounts, verified profiles, and get Discord server boosts. Your trusted marketplace for premium social media accounts.",
  keywords:
    ["Aged Discord accounts", "verified Discord accounts", "buy Discord accounts", "Discord server boosts", "social media accounts for sale", "Discord Nitro sale", "premium Discord services", "custom Discord servers", "Discord community building", "Discord marketing services"],
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

            // Disable right-click
            document.addEventListener('contextmenu', function(e) {
              e.preventDefault();
            });

            // Disable F12, Ctrl+Shift+I, Ctrl+Shift+C, Ctrl+U
            document.onkeydown = function(e) {
              if (e.keyCode == 123) {
                return false;
              }
              if (e.ctrlKey && e.shiftKey && e.keyCode == 'I'.charCodeAt(0)) {
                return false;
              }
              if (e.ctrlKey && e.shiftKey && e.keyCode == 'C'.charCodeAt(0)) {
                return false;
              }
              if (e.ctrlKey && e.keyCode == 'U'.charCodeAt(0)) {
                return false;
              }
            };
          `,
        }}
      />
      <script
        type="text/javascript"
        src="//widget.trustpilot.com/bootstrap/v5/tp.widget.bootstrap.min.js"
        async
      ></script>

      <body className={actor.className}>
        <Navbar />
        <ShopNow />
        {children}
        <Footer />
      </body>
    </html>
  );
}
