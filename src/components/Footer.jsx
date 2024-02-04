import React from "react";

const Footer = () => {
  return (
    <div className="bg-[#121212] border-t-[0.5px] text-white py-12">
      <div className="max-w-[1080px] mx-auto px-4 grid  justify-center  gap-5 grid-cols-2 md:grid-cols-4">
        <div className="w-fit">
          <h1 className="font-bold text-xl mb-4">Company</h1>
          <h1 className="opacity-70 text-[14px] my-2">About us</h1>
          <h1 className="opacity-70 text-[14px] my-2">Team</h1>
          <h1 className="opacity-70 text-[14px] my-2">Careers</h1>
        </div>
        <div className="w-fit">
          <h1 className="font-bold text-xl mb-4">Services</h1>
          <h1 className="opacity-70 text-[14px] my-2">Branding</h1>
          <h1 className="opacity-70 text-[14px] my-2">Web development</h1>
          <h1 className="opacity-70 text-[14px] my-2">Digital marketing</h1>
          <h1 className="opacity-70 text-[14px] my-2">Mobile app</h1>
          <h1 className="opacity-70 text-[14px] my-2">SEO</h1>
          <h1 className="opacity-70 text-[14px] my-2">User testing</h1>
        </div>
        <div className="w-fit">
          <h1 className="font-bold text-xl mb-4">Resources</h1>
          <h1 className="opacity-70 text-[14px] my-2">Blog</h1>
          <h1 className="opacity-70 text-[14px] my-2">Case Study</h1>
          <h1 className="opacity-70 text-[14px] my-2">Testimonials</h1>
        </div>
        <div className="w-fit">
          <h1 className="font-bold text-xl mb-4">Follow us</h1>
          <h1 className="opacity-70 text-[14px] my-2">Instagram</h1>
          <h1 className="opacity-70 text-[14px] my-2">Figma</h1>
          <h1 className="opacity-70 text-[14px] my-2">Dribble</h1>
          <h1 className="opacity-70 text-[14px] my-2">Behance</h1>
          <h1 className="opacity-70 text-[14px] my-2">Facebook</h1>
        </div>
      </div>
    </div>
  );
};

export default Footer;
