import Link from "next/link";
import React from "react";
import { FaDiscord } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
import { FaTelegram } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";

// this is the comment i added and also the code is working fine

const Footer = () => {
  return (
    <div className="bg-[#121212] border-t-[0.5px] text-white py-[70px]">
      <div className="max-w-[1080px] mx-auto">
        <div className="px-7 grid mb-[80px] justify-center  gap-5 grid-cols-2 md:grid-cols-4">
          <div className="w-fit">
            <p className="font-bold text-xl mb-4">Company</p>
            <br />
            <Link href={"/aboutus"} className="opacity-70 text-[15px] my-2">
              About us
            </Link>
            <br />
            <Link
              href={"/"}
              area-label="go Homepage"
              className="opacity-70 text-[15px] my-2"
            >
              Home
            </Link>
            <br />
            <Link
              href={"/accounts"}
              area-label="See Accounts Tab"
              className="opacity-70 text-[15px] my-2"
            >
              Accounts
            </Link>
            <br />
            <Link href={"/contactus"} className="opacity-70 text-[15px] my-2">
              Contact us
            </Link>
            <br />
          </div>
          <div className="w-fit">
            <p className="font-bold text-xl mb-4">Services</p>
            <br />
            <Link
              href={"/accounts/buy-discord-accounts"}
              area-label="See Discord Accounts"
              className="opacity-70 text-[15px] my-2"
            >
              Discord Accounts
            </Link>
            <br />
            <Link
              href={"/accounts/buy-discord-server-boost"}
              area-label="See Discord server Boosts"
              className="opacity-70 text-[15px] my-2"
            >
              Discord Server Boosts
            </Link>
            <br />
            <Link
              href={"/accounts/instagram"}
              // area-label="See more Accounts"

              className="opacity-70 text-[15px] my-2"
            >
              Instagram Accounts
            </Link>
            <br />
            <Link
              href={"/accounts/discordserver"}
              // area-label="See Instagram Accounts"

              className="opacity-70 text-[15px] my-2"
            >
              Discord Servers
            </Link>
            <br />
            <Link
              href={"/accounts/reddit"}
              className="opacity-70 text-[15px] my-2"
            >
              Reddit Acounts
            </Link>
          </div>
          <div className="w-fit">
            <p className="font-bold text-xl mb-4">Resources</p>
            <br />
            <Link href={"/blogs"} className="opacity-70 text-[15px] my-2">
              Blogs
            </Link>
            <br />
            <Link href={"/faq"} className="opacity-70 text-[15px] my-2">
              FAQs
            </Link>
          </div>
          <div className="w-fit">
            <p className="font-bold text-xl mb-4">Extra</p>
            <br />
            <Link
              href={"/termsandconditions"}
              area-label="terms and conditions"
              // target="_blank"
              className="opacity-70 text-[15px] my-2"
            >
              Terms & Conditions
            </Link>
            <br />
            <Link
              href={"/privacypolicy"}
              area-label="privacy policy"
              className="opacity-70 text-[15px] my-2"
            >
              Privacy Policy
            </Link>
            <br />
            <Link href={"/disclaimer"} className="opacity-70 text-[15px] my-2">
              Disclaimer
            </Link>
            <br />
            {/* <Link
              href={"https://www.instagram.com/discord_arena/"}
              target="_blank"
              className="opacity-70 text-[15px] my-2"
            >
              Instagram
            </Link> */}
            <br />
            {/* <Link href={"https://t.me/halfmoonisgod"} target="_blank" className="opacity-70 text-[15px] my-2"></Link> */}
            {/* <p className="opacity-70 text-[15px] my-2">Behance</p> */}
            {/* <p className="opacity-70 text-[15px] my-2">Facebook</p> */}
          </div>
        </div>
        <div className="flex items-center flex-col md:flex-row md:justify-between px-7">
          <Link
            href={"https://techfusionstudio.vercel.app"}
            target="_blank"
            className="opacity-60 hover:opacity-80"
          >
            © Copyright 2024 Discord Arena · All rights reserved to Tech Fusion
            Studio.
          </Link>
          <div className="flex gap-4">
            <Link
              href={"https://discord.gg/Z2eXvbkufU"}
              area-label="Discord"
              target="_blank"
              className="opacity-70 text-[15px] my-2"
            >
              <FaDiscord size={30} />
            </Link>

            <Link
              href={"https://www.instagram.com/discord_arena/"}
              target="_blank"
              className="opacity-70 text-[15px] my-2"
            >
              <FaTelegram size={30} />
            </Link>

            <Link
              href={
                "https://www.facebook.com/profile.php?id=61561779807507&mibextid=LQQJ4d"
              }
              target="_blank"
              className="opacity-70 text-[15px] my-2"
            >
              <FaFacebook size={30} />
            </Link>

            <Link
              href={"https://www.instagram.com/discord_arena/"}
              target="_blank"
              className="opacity-70 text-[15px] my-2"
            >
              <FaInstagramSquare size={30} />
            </Link>
          </div>
        </div>
        <p className="opacity-70 px-4 text-[16px] text-center mt-10">
          <span className="font-extrabold text-[17px]">Disclaimer : </span>This
          website is in no way affiliated with , authorized, maintained,
          sponsored or endorsed by Discord, Inc or any of its affiliates or
          subsidiaries.
        </p>
      </div>
    </div>
  );
};

export default Footer;
