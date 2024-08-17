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
import { formatDistanceToNow, parseISO } from "date-fns"; // Importing parseISOn;
const BlogsCard = ({ heading, time, date, linkurl, imgurl, description }) => {
  const supremeurl = "https://discordarena.com/blogs/";
  const shareUrl = `${supremeurl}${heading.split(" ").join("-").toLowerCase()}`;
  const router = useRouter();
  const [open, setOpen] = useState(false);
  const [copyStatus, setCopyStatus] = useState("Copy Link");
  const closeModal = () => setOpen(false);

  const handleShare = () => {
    setOpen(true);
  };

  const copyToClipboard = () => {
    navigator.clipboard.writeText(shareUrl).then(
      () => {
        setCopyStatus("Link Copied!");
        setTimeout(() => setCopyStatus("Copy Link"), 2000);
      },
      (err) => {
        console.error("Failed to copy: ", err);
      }
    );
  };

  const truncateHeading = (text, maxLength) => {
    return text.length > maxLength
      ? text.substring(0, maxLength) + "..."
      : text;
  };

  const truncatedHeading = truncateHeading(heading, 100); // Adjust the max length as needed

  // Convert the date to a relative time format
  // Convert the date to a relative time format
  let formattedDate = "";
  if (date) {
    try {
      const parsedDate = parseISO(date);
      console.log(parsedDate); // Log the parsed date to ensure it's correct
      formattedDate = formatDistanceToNow(parsedDate, { addSuffix: true });
    } catch (error) {
      console.error("Error parsing date: ", error);
    }
  }

  return (
    <div className="flex flex-col justify-between gap-4 h-full mx-auto max-w-[400px] w-[90%] border-[#A1AEBF] rounded-[20px] border-2 p-4">
      <div>
        <div
          onClick={() => {
            router.push(linkurl);
          }}
          className="cursor-pointer border-2 group border-[#A1AEBF] rounded-xl overflow-hidden"
        >
          <img
            src={imgurl}
            alt={heading}
            className="group-hover:scale-110 duration-300"
          />
        </div>
        <p
          onClick={() => {
            router.push(linkurl);
          }}
          className="mt-3 opacity-80 underline-offset-4 hover:underline duration-300 cursor-pointer text-[18px]"
        >
          {truncatedHeading}
        </p>
      </div>

      <div>
        <p className="text-[15px] font-[450] mt-3 opacity-75 mb-2">
          {time} | {formattedDate}
        </p>
        <div className="flex items-center justify-between pb-3">
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
                alt="image showing explore more icon"
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
      <Popup
        open={open}
        closeOnDocumentClick
        onClose={closeModal}
        className="flex items-center justify-center"
      >
        <div className="text-white p-4 h-[200px] max-w-[500px] w-full border-2 border-[#A1AEBF] rounded-lg flex flex-col items-center justify-center backdrop-blur-lg shadow-lg">
          <p className="text-lg font-semibold mb-2">Share this post:</p>
          <div className="flex items-center gap-4 mt-4 w-full max-w-4xl">
            <span
              className="text-sm text-gray-500 max-w-[200px] overflow-hidden text-ellipsis whitespace-nowrap"
              title={shareUrl}
            >
              {shareUrl}
            </span>
            <button
              onClick={copyToClipboard}
              className="px-4 py-2 bg-blue-500 text-white text-sm rounded-lg hover:bg-blue-600 transition"
            >
              {copyStatus}
            </button>
          </div>
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
