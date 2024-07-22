"use client";
import Image from "next/image";
import React, { useState } from "react";
import Popup from "reactjs-popup";
import rightbutton from "../../public/RightButton.svg";
import { useRouter } from "next/navigation";

const BlogsCard = ({ heading, time, linkurl }) => {
  const supremeurl = "https://discordarena.com/blogs/";
  const router = useRouter();
  const [open, setOpen] = useState(false);
  const closeModal = () => setOpen(false);

  const handleShare = () => {
    navigator.clipboard
      .writeText(`${supremeurl}${heading.split(" ").join("-").toLowerCase()}`)
      .then(() => {
        setOpen(true);
        setTimeout(() => {
          closeModal();
        }, 2000); // Auto-close after 2 seconds
      })
      .catch((err) => {
        console.error("Failed to copy text: ", err);
      });
  };

  return (
    <div className="flex flex-col justify-between gap-4 h-full mx-auto max-w-[400px] w-[90%] border-[#A1AEBF] rounded-[20px] border-2 p-4">
      <div>
        <div className={`bg-[#8474C4] p-4 rounded-[20px]`}>
          <div
            onClick={() => {
              router.push(linkurl);
            }}
            className={`border-l-[1.5px] cursor-pointer border-[#A1AEBF] px-3 text-[1.5rem] font-light`}
          >
            {heading}
          </div>
        </div>
      </div>

      <div>
        <p className="px-3 text-[15px] font-[450] opacity-75 mb-2">{time}</p>
        <div className="flex items-center justify-between px-2 pb-3">
          <div>
            <button
              type="button"
              onClick={() => {
                router.push(linkurl);
              }}
              className="flex gap-1 items-center font-semibold text-black bg-[#c3c3c3] rounded-lg px-2 py-1"
            >
              <span className="text-[13px]">Read More</span>
              <Image
                className="w-[15px]"
                src={rightbutton}
                alt="right button"
              />
            </button>
          </div>
          <button
            onClick={handleShare}
            className="underline font-thin text-[13px]"
          >
            Share Now
          </button>
        </div>
      </div>
      <Popup open={open} closeOnDocumentClick onClose={closeModal}>
        <div className=" text-white rounded p-4 h-[200px] flex items-center justify-center aspect-square backdrop-blur-lg shadow-lg">
          <p>Link copied to clipboard!</p>
          {/* <p>{(supremeurl, linkurl)}</p> */}
        </div>
      </Popup>
    </div>
  );
};

export default BlogsCard;
