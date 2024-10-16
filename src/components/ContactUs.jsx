"use client";
import Head from "next/head";
import Link from "next/link";
import React from "react";

const ContactUs = () => {
  const handleBackToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
  return (
    <div className="bg-[#A5A6F6] p-4">
      
      <div className="max-w-[1280px] rounded-lg bg-[#A5A6F6] mx-auto py-12 min-h-[60vh] flex flex-col justify-center px-4">
        <p className="text-center text-3xl md:text-4xl text-[#0D0E14]">
          Get in Touch with Discord Arena
        </p>
        <p className="text-center md:w-[40%] mx-auto opacity-60 mt-[30px]">
          Whether you have questions, need assistance, or want to explore
          collaboration opportunities, we&apos;re here for you. Fill in your email
          below, and our team will get back to you promptly.
        </p>
        <div className=" max-w-[500px] mx-auto mt-[20px] flex">
          <Link href={"/contactus"} className="bg-[#0D0E14] text-white px-3 py-[5px] mx-4 rounded-[30px]">
            Contact us
          </Link>
        </div>
      </div>

      <div className="max-w-[1280px] mx-auto  mt-4 ">
        <div
          className="text-[#A5A6F6] border-[1px] px-3 py-1 rounded-[20px] border-[#A5A6F6] w-fit ml-auto cursor-pointer"
          onClick={handleBackToTop}
        >
          GO TO TOP
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
