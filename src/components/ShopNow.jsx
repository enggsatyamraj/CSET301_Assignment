import Link from "next/link";
import React from "react";
import { FaShoppingCart } from "react-icons/fa";

const ShopNow = () => {
  return (
    <Link
      href={"/accounts"}
      className="fixed h-[50px] w-[50px] shadow-md shadow-white bg-black cursor-pointer text-white right-10 z-10 bottom-10 border-2 rounded-full flex items-center justify-center"
    >
      <FaShoppingCart size={25} />
    </Link>
  );
};

export default ShopNow;
