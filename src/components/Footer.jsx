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
          <h1 className="font-bold text-xl mb-4">Resources</h1>
          <Link href={"/blogs"} className="opacity-70 text-[14px] my-2">
            Blog
          </Link>
          <br />
          <Link href={"/faq"} className="opacity-70 text-[14px] my-2">
            FAQs
          </Link>
          {/* <h1 className="opacity-70 text-[14px] my-2">Testimonials</h1> */}
        </div>
        <div className="w-fit">
          <h1 className="font-bold text-xl mb-4">Follow us</h1>
          <h1 className="opacity-70 text-[14px] my-2">Discord</h1>
          <h1 className="opacity-70 text-[14px] my-2">Telegram</h1>
          <h1 className="opacity-70 text-[14px] my-2">Instagram</h1>
          <h1 className="opacity-70 text-[14px] my-2">Twitter</h1>
          {/* <h1 className="opacity-70 text-[14px] my-2">Behance</h1> */}
          <h1 className="opacity-70 text-[14px] my-2">Facebook</h1>
        </div>
      </div>
    </div>
  );
};

export default Footer;
