"use client";
import React, { useState } from "react";
import {
  FacebookShareButton,
  TwitterShareButton,
  LinkedinShareButton,
  WhatsappShareButton,
  RedditShareButton,
  TelegramShareButton,
  FacebookIcon,
  TwitterIcon,
  LinkedinIcon,
  WhatsappIcon,
  RedditIcon,
  TelegramIcon,
} from "react-share";

const ShareComponent = ({ shareUrl, shareTitle, content }) => {
  const [copyStatus, setCopyStatus] = useState("Copy Link");

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

  return (
    <div className="flex flex-col items-center gap-4 mt-8 mb-4">
      <div className="flex items-center gap-4">
        <span
          className="text-sm text-gray-500 max-w-[200px] overflow-hidden text-ellipsis whitespace-nowrap"
          title={shareUrl}
        >
          {shareUrl}
        </span>
        <button
          onClick={copyToClipboard}
          className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition"
        >
          {copyStatus}
        </button>
      </div>
      <div className="flex gap-4 justify-center mt-4">
        <FacebookShareButton url={shareUrl} quote={shareTitle}>
          <FacebookIcon size={32} round />
        </FacebookShareButton>
        <TwitterShareButton url={shareUrl} title={shareTitle}>
          <TwitterIcon size={32} round />
        </TwitterShareButton>
        <LinkedinShareButton
          url={shareUrl}
          title={shareTitle}
          summary={content}
        >
          <LinkedinIcon size={32} round />
        </LinkedinShareButton>
        <WhatsappShareButton url={shareUrl} title={shareTitle}>
          <WhatsappIcon size={32} round />
        </WhatsappShareButton>
        <RedditShareButton url={shareUrl} title={shareTitle}>
          <RedditIcon size={32} round />
        </RedditShareButton>
        <TelegramShareButton url={shareUrl} title={shareTitle}>
          <TelegramIcon size={32} round />
        </TelegramShareButton>
      </div>
    </div>
  );
};

export default ShareComponent;
