import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <div className="bg-[#121212] border-t-[0.5px] text-white py-12">
      <div className="max-w-[1080px] mx-auto px-7 grid  justify-center  gap-5 grid-cols-2 md:grid-cols-4">
        <div className="w-fit">
          <h1 className="font-bold text-xl mb-4">Company</h1>
          <Link href={"/aboutus"} className="opacity-70 text-[14px] my-2">
            About us
          </Link>
          <br />
          <Link href={"/"} className="opacity-70 text-[14px] my-2">
            Home
          </Link>
          <br />
          <Link href={"/accounts"} className="opacity-70 text-[14px] my-2">
            Accounts
          </Link>
        </div>
        <div className="w-fit">
          <h1 className="font-bold text-xl mb-4">Services</h1>
          <Link
            href={"/accounts/discord"}
            className="opacity-70 text-[14px] my-2"
          >
            Discord Accounts
          </Link>
          <br />
          <Link
            href={"/accounts/twitter"}
            className="opacity-70 text-[14px] my-2"
          >
            Twitter Accounts
          </Link>
          <br />
          <Link
            href={"/accounts/instagram"}
            className="opacity-70 text-[14px] my-2"
          >
            Instagram Accounts
          </Link>
        </div>
        <div className="w-fit">
          <h2 className="font-bold text-xl mb-4">Resources</h2>
          <Link href={"/blogs"} className="opacity-70 text-[14px] my-2">
            Blog
          </Link>
          <br />
          <Link href={"/faq"} className="opacity-70 text-[14px] my-2">
            FAQs
          </Link>
        </div>
        <div className="w-fit">
          <h3 className="font-bold text-xl mb-4">Follow us</h3>
          <Link href={"https://discord.com/invite/qngdg7f8Jt"} className="opacity-70 text-[14px] my-2">Discord</Link>
          <h3 className="opacity-70 text-[14px] my-2">Telegram</h3>
          <Link href={"https://www.instagram.com/discord_arena/"} className="opacity-70 text-[14px] my-2">Instagram</Link>
          <h3 className="opacity-70 text-[14px] my-2">Twitter</h3>
          {/* <h1 className="opacity-70 text-[14px] my-2">Behance</h1> */}
          <h3 className="opacity-70 text-[14px] my-2">Facebook</h3>
        </div>
      </div>
    </div>
  );
};

export default Footer;
