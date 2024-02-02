import Navbar from "@/components/Navbar";
import React from "react";

export default function page() {
  return (
    <div className="bg-normal w-[100%]">
      <div className="max-w-[1280px] mx-auto px-4 text-white relative min-h-[100vh] w-[100%] ">
        {/* Hero section */}
        <div className="min-h-[90vh] relative flex flex-col pl-[20px] sm:pl-[50px] justify-center z-4">
          <p className="pt-[60px]  text-5xl sm:text-6xl mb-10 md:text-7xl  sm:w-[80%] md:w-[70%] lh:w-[60%]">
            Buy <span className="span_text">Social Media</span> accounts at resonable prices.
          </p>
          <p className="text-xl md:w-[70%] sm:w-[80%] w-[90%] lg:w-[50%] opacity-60">
            Buy Discord Accounts, Twitter Accounts, Telegram Accounts and Game
            Accounts at Cheap Price.
          </p>
          <div className="radial_one"></div>
          <div className="radial_two"></div>
        </div>

        <div className="h-[100vh]"></div>
      </div>
    </div>
  );
}
