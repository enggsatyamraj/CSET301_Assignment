"use client";
import Link from "next/link";
import { FaShoppingCart } from "react-icons/fa";
import { FaTelegramPlane } from "react-icons/fa";
import { FaDiscord } from "react-icons/fa";

const ShopNow = () => {
  return (
    <div className="fixed z-10 right-5 bottom-10 flex flex-col gap-4">
      <Link
        target="_blank"
        href={"https://t.me/halfmoonisgod"}
        className=" md:h-[50px] md:w-[50px] h-[38px] w-[38px] shadow-md shadow-white bg-black cursor-pointer text-white border-2 rounded-full flex items-center justify-center"
      >
        <FaTelegramPlane size={25} />
      </Link>
      <Link
        target="_blank"
        href={"https://discord.gg/Z2eXvbkufU"}
        className=" md:h-[50px] md:w-[50px] h-[38px] w-[38px] shadow-md shadow-white bg-black cursor-pointer text-white border-2 rounded-full flex items-center justify-center"
      >
        <FaDiscord size={25} />
      </Link>
      <Link
        href={"/accounts#accounts_details"}
        className=" md:h-[50px] md:w-[50px] h-[38px] w-[38px] shadow-md shadow-white bg-black cursor-pointer text-white border-2 rounded-full flex items-center justify-center"
      >
        <FaShoppingCart size={25} />
      </Link>
    </div>
  );
};

export default ShopNow;
