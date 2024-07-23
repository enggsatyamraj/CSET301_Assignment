"use client";
import Image from "next/image";
import React, { useState } from "react";
import Popup from "reactjs-popup";
import {
  FacebookShareButton,
  TwitterShareButton,
  WhatsappShareButton,
  LinkedinShareButton,
  RedditShareButton,
  TelegramShareButton,
  FacebookIcon,
  TwitterIcon,
  WhatsappIcon,
  LinkedinIcon,
  RedditIcon,
  TelegramIcon,
} from "react-share";
import rightbutton from "../../public/RightButton.svg";
import { useRouter } from "next/navigation";

const BlogsCard = ({ heading, time, linkurl, imgurl, description }) => {
  const supremeurl = "https://discordarena.com/blogs/";
  const shareUrl = `${supremeurl}${heading.split(" ").join("-").toLowerCase()}`;
  const router = useRouter();
  const [open, setOpen] = useState(false);
  const closeModal = () => setOpen(false);

  const handleShare = () => {
    setOpen(true);
  };

  return (
    <div className="flex flex-col justify-between gap-4 h-full mx-auto max-w-[400px] w-[90%] border-[#A1AEBF] rounded-[20px] border-2 p-4">
      <div
        onClick={() => {
          router.push(linkurl);
        }}
        className="cursor-pointer border-2 border-[#A1AEBF] rounded-xl overflow-hidden"
      >
        <img src={imgurl} alt={heading} />
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
        <div className=" text-white p-4 h-[200px] border-2 border-[#A1AEBF] rounded-lg flex flex-col items-center justify-center aspect-square backdrop-blur-lg shadow-lg">
          <p>Share this post:</p>
          <div className="flex gap-4 mt-4">
            <FacebookShareButton
              url={shareUrl}
              quote={`Check out this blog on Discord Arena: ${heading}. Learn more about Discord accounts and how they can benefit you!`}
              hashtag="#DiscordArena"
            >
              <FacebookIcon size={32} round />
            </FacebookShareButton>
            <TwitterShareButton
              url={shareUrl}
              title={`Check out this blog on Discord Arena: ${heading}`}
              via="DiscordArena"
              hashtags={["DiscordArena", "Discord"]}
            >
              <TwitterIcon size={32} round />
            </TwitterShareButton>
            <WhatsappShareButton
              url={shareUrl}
              title={`Check out this blog on Discord Arena: ${heading}`}
              separator=":: "
            >
              <WhatsappIcon size={32} round />
            </WhatsappShareButton>
            <LinkedinShareButton
              url={shareUrl}
              title={heading}
              summary={`Learn more about Discord accounts and their benefits at Discord Arena: ${description}`}
              source="Discord Arena"
            >
              <LinkedinIcon size={32} round />
            </LinkedinShareButton>
            <RedditShareButton url={shareUrl} title={heading}>
              <RedditIcon size={32} round />
            </RedditShareButton>
            <TelegramShareButton url={shareUrl} title={heading}>
              <TelegramIcon size={32} round />
            </TelegramShareButton>
          </div>
        </div>
      </Popup>
    </div>
  );
};

export default BlogsCard;
