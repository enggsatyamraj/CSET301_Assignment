import React from "react";

const Footer = () => {
  return (
    <div className="bg-[#121212] border-t-[1px] text-white py-12">
      <div className="max-w-[1080px] mx-auto px-4 grid items-center justify-center  gap-5 grid-cols-2 md:grid-cols-4">
        <div className="w-fit">
          <h1 className="font-bold text-xl mb-4">Company</h1>
          <h1 className="opacity-70 text-[14px]">About us</h1>
          <h1 className="opacity-70 text-[14px]">Team</h1>
        </div>
        <div className="w-fit">
          <h1 className="font-bold text-xl mb-4">Services</h1>
          <h1 className="opacity-70 text-[14px]">Branding</h1>
          <h1 className="opacity-70 text-[14px]">Web development</h1>
        </div>
        <div className="w-fit">
          <h1 className="font-bold text-xl mb-4">Resources</h1>
          <h1 className="opacity-70 text-[14px]">Blog</h1>
          <h1 className="opacity-70 text-[14px]">Case Study</h1>
        </div>
        <div className="w-fit">
          <h1 className="font-bold text-xl mb-4">Follow us</h1>
          <h1 className="opacity-70 text-[14px]">Instagram</h1>
          <h1 className="opacity-70 text-[14px]">Figma</h1>
        </div>
      </div>
    </div>
  );
};

export default Footer;
