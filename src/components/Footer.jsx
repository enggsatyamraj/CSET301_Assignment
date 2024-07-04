import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <div className="bg-[#121212] border-t-[0.5px] text-white py-12">
      <div className="max-w-[1080px] mx-auto px-7 grid  justify-center  gap-5 grid-cols-2 md:grid-cols-4">
        <div className="w-fit">
          <b className="font-bold text-xl mb-4">Company</b>
          <br />
          <Link href={"/aboutus"} className="opacity-70 text-[14px] my-2">
            About us
          </Link>
          <br />
          <Link href={"/"} area-label='go Homepage' className="opacity-70 text-[14px] my-2">
            Home
          </Link>
          <br />
          <Link href={"/accounts"} 
          area-label="See Accounts Tab"
          className="opacity-70 text-[14px] my-2">
            Accounts
          </Link>
          <br />
          <Link href={"/contactus"} className="opacity-70 text-[14px] my-2">
            Contact us
          </Link>
          <br />
        </div>
        <div className="w-fit">
          <b className="font-bold text-xl mb-4">Services</b>
          <br />
          <Link
            href={"/accounts/discord"}
            area-label="See Discord Accounts"
            className="opacity-70 text-[14px] my-2"
          >
            Discord Accounts
          </Link>
          <br />
          <Link
            href={"/accounts/instagram"}
            // area-label="See more Accounts"

            className="opacity-70 text-[14px] my-2"
          >
             Instagram Accounts
          </Link>
          <br />
          <Link
            href={"/accounts/discordserver"}

            // area-label="See Instagram Accounts"

            className="opacity-70 text-[14px] my-2"
          >
            Discord Servers
          </Link>
          <br />
          <Link
            href={"/accounts/reddit"}
            className="opacity-70 text-[14px] my-2"
          >
            Reddit Acounts
          </Link>
        </div>
        <div className="w-fit">
          <b className="font-bold text-xl mb-4">Resources</b>
          <br />
          <Link href={"/blogs"} className="opacity-70 text-[14px] my-2">
            Blog
          </Link>
          <br />
          <Link href={"/faq"} className="opacity-70 text-[14px] my-2">
            FAQs
          </Link>
        </div>
        <div className="w-fit">
          <b className="font-bold text-xl mb-4">Follow us</b>
          <br />
          <Link
            href={"https://discord.gg/Z2eXvbkufU"}
            area-label="Discord"
            target="_blank"
            className="opacity-70 text-[14px] my-2"
          >
            Discord
          </Link>
          <br />
          <Link
            href={"https://t.me/halfmoonisgod"}
            area-label="Telegram"
            target="_blank"
            className="opacity-70 text-[14px] my-2"
          >
            Telegram
          </Link>
          <br />
          <Link
            href={"https://www.facebook.com/profile.php?id=61561779807507&mibextid=LQQJ4d"}
            target="_blank"
            className="opacity-70 text-[14px] my-2"
          >
            Facebook
          </Link>
          <br />
          <Link
            href={"https://www.instagram.com/discord_arena/"}
            target="_blank"
            className="opacity-70 text-[14px] my-2"
          >
            Instagram
          </Link>
          <br />
          {/* <Link href={"https://t.me/halfmoonisgod"} target="_blank" className="opacity-70 text-[14px] my-2"></Link> */}
          {/* <b className="opacity-70 text-[14px] my-2">Behance</b> */}
          {/* <b className="opacity-70 text-[14px] my-2">Facebook</b> */}
        </div>
      </div>
    </div>
  );
};

export default Footer;