import Image from "next/image";
import React from "react";
// import ExploreButton from "./ExploreButton";
import rightbutton from "../../public/RightButton.svg";
import Link from "next/link";

const BlogsCard = ({ heading, time, linkurl }) => {
  return (
    <div className="flex flex-col gap-4 max-w-[400px] w-[90%]  border-[#A1AEBF] rounded-[20px] border-2 p-4">
      <div className={`bg-[#8474C4] p-4 rounded-[20px]`}>
        <div
          className={`border-l-[1.5px] border-[#A1AEBF]  px-3 text-[1.5rem] font-light`}
        >
          {heading}
        </div>
      </div>
      <p className="px-3 text-[15px] font-[450] opacity-75">{time}</p>
      <div className="flex items-center justify-between px-2 pb-3">
        <div>
          <Link
            href={linkurl}
            className="flex gap-1 items-center font-semibold border-[1.5px] border-[#000] rounded-lg px-2 py-1"
          >
            <span className="text-[13px]">Explore</span>
            <Image className="w-[15px]" src={rightbutton} alt="right button" />
          </Link>
        </div>
        <button className="underline font-thin text-[13px]">Share Now</button>
      </div>
    </div>
  );
};

export default BlogsCard;
