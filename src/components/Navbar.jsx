"use client";
import Link from "next/link";
import React, { useState, useEffect } from "react";
import { RxHamburgerMenu } from "react-icons/rx";
import { RxCross2 } from "react-icons/rx";
import { Actor } from "next/font/google";

const actor = Actor({ weight: "400", subsets: ["latin"] });

const navbarLinks = [
  { name: "Home", url: "/" },
  { name: "Accounts", url: "/accounts" },
  { name: "About Us", url: "/aboutus" },
  { name: "Blogs", url: "/blogs" },
  { name: "FAQs", url: "/faq" },
  { name: "Contact Us", url: "/contactus" },
];

const Navbar = () => {
  const [isOpen, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(!isOpen);
  };

  useEffect(() => {
    const preventScroll = (e) => {
      e.preventDefault();
    };

    if (isOpen) {
      document.body.style.overflow = "hidden";
      document.documentElement.style.overflow = "hidden";

      document.addEventListener("touchmove", preventScroll, { passive: false });
      document.addEventListener("wheel", preventScroll, { passive: false });
    } else {
      document.body.style.overflow = "auto";
      document.documentElement.style.overflow = "auto";

      document.removeEventListener("touchmove", preventScroll);
      document.removeEventListener("wheel", preventScroll);
    }

    return () => {
      document.body.style.overflow = "auto";
      document.documentElement.style.overflow = "auto";

      document.removeEventListener("touchmove", preventScroll);
      document.removeEventListener("wheel", preventScroll);
    };
  }, [isOpen]);

  return (
    <div className={actor.className}>
      <div className="overflow-x-hidden z-10">
        <div className="fixed left-0 right-0 z-10 text-white backdrop-blur-lg">
          <div
            className={
              "max-w-[1280px] h-[90px] flex justify-between sm:px-12 px-7 items-center bg-transparent mx-auto"
            }
          >
            <Link
              href={"/"}
              aria-label="Go Homepage"
              className="md:text-3xl text-2xl font-semibold tracking-widest"
            >
              Discord Arena
            </Link>
            <div className="md:flex hidden md:gap-6 lg:gap-10">
              {navbarLinks.map((item, index) => (
                <Link
                  className="hover:cursor-pointer"
                  key={index}
                  href={item.url}
                >
                  {item.name}
                </Link>
              ))}
            </div>
            <div className="md:hidden flex items-center">
              <Link
                href="/accounts"
                className="hover:cursor-pointer text-[15px] border-[1px] px-2 py-1 rounded-lg mr-4"
              >
                Accounts
              </Link>
              <RxHamburgerMenu size={25} color="#fff" onClick={handleOpen} />
            </div>
          </div>
        </div>
        <div
          className={`${
            isOpen ? "translate-y-0" : "-translate-y-full"
          } flex flex-col gap-4 text-xl items-center justify-center fixed inset-0 z-[100] text-white transition-transform duration-500 backdrop-blur-lg`}
        >
          <div className="absolute right-6 top-8 flex justify-between items-center left-6">
            <Link
              onClick={handleOpen}
              href={"/"}
              aria-label="Go Indexpage"
              className="md:text-3xl text-2xl font-semibold tracking-widest"
            >
              Discord Arena
            </Link>
            <RxCross2 size={27} color="#fff" onClick={handleOpen} />
          </div>
          {navbarLinks.map((item, index) => (
            <Link
              className={`hover:cursor-pointer transition-opacity delay-${
                index + 1
              }00ms`}
              key={index}
              href={item.url}
              onClick={handleOpen}
            >
              {item.name}
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
