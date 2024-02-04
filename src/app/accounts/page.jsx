import Footer from "@/components/Footer";
import Link from "next/link";
import React from "react";

export default function page() {
  return (
    <>
      <div className="bg-normal w-[100%]">
        <div className="max-w-[1280px] mx-auto px-7 sm:px-12 text-white relative min-h-[60vh] w-[100%] ">
          <div className="min-h-[90vh] relative flex flex-col justify-center z-4">
            <p className="text-3xl sm:text-4xl mb-6 md:text-5xl  sm:w-[80%] md:w-[70%] lh:w-[60%]">
              Find Your niche
            </p>
            <p className="text-[15px] md:w-[70%] sm:w-[80%] w-[90%] lg:w-[50%] opacity-60">
              Risus commodo id odio turpis pharetra elementum. Pulvinar porta
              porta feugiat scelerisque in elit. Morbi rhoncus, tellus, eros
              Risus commodo id odio turpis pharetra elementum. Pulvinar porta
              porta feugiat scelerisque in elit. Morbi rhoncus, tellus, eros
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sit, itaque.
            </p>
            <div className="radial_one"></div>
            {/* <div className="radial_two"></div> */}
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
}
