"use client"
import Link from "next/link";
import React from "react";

const ContactUs = () => {
    const handleBackToTop = () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    }
  return (
    <div className="bg-[#121212] p-4">
      <div className="max-w-[1280px] rounded-lg bg-[#A5A6F6] mx-auto py-12 min-h-[60vh] flex flex-col justify-center px-4">
        <h1 className="text-center text-3xl md:text-4xl text-[#0D0E14]">
          Contact Us
        </h1>
        <p className="text-center md:w-[40%] mx-auto opacity-60 mt-[30px]">
          Risus commodo id odio turpis pharetra elementum. Pulvinar porta porta
          feugiat scelerisque in elit.{" "}
        </p>
        <div className=" max-w-[500px] mx-auto mt-[20px] flex">
          <input
            type="text"
            placeholder="Your Email"
            className="px-4 py-2 rounded-[30px] w-[90%] md:w-[400px]"
          />
          <button className="bg-[#0D0E14] text-white px-3 py-[5px] mx-4 rounded-[30px]">
            SEND
          </button>
        </div>
      </div>

      <div className="max-w-[1280px] mx-auto  mt-4 ">
        <div className="text-[#A5A6F6] border-[1px] px-3 py-1 rounded-[20px] border-[#A5A6F6] w-fit ml-auto cursor-pointer" onClick={handleBackToTop}>
          GO TO TOP
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
