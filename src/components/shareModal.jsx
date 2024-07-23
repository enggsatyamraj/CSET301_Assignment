"use client";
import React, { useState } from "react";
import Popup from "reactjs-popup";
import {
  FacebookShareButton,
  TwitterShareButton,
  WhatsappShareButton,
  LinkedinShareButton,
  RedditShareButton,
  TelegramShareButton,
  EmailShareButton,
  FacebookIcon,
  TwitterIcon,
  WhatsappIcon,
  LinkedinIcon,
  RedditIcon,
  TelegramIcon,
  EmailIcon,
} from "react-share";

const ShareModal = ({ open, onClose, url, title, description }) => {
  const [modalOpen, setModalOpen] = useState(open);

  const handleModalClose = () => {
    setModalOpen(false);
    onClose();
  };

  return (
    <Popup open={modalOpen} closeOnDocumentClick onClose={handleModalClose}>
      <div className="p-4 h-auto flex flex-col items-center justify-center bg-white rounded-lg shadow-lg">
        <h2 className="text-lg font-semibold mb-4">Share this post</h2>
        <div className="flex gap-4 mb-4">
          <FacebookShareButton
            url={url}
            quote={`Check out this blog on Discord Arena: ${title}`}
          >
            <FacebookIcon size={32} round />
          </FacebookShareButton>
          <TwitterShareButton
            url={url}
            quote={`Check out this blog on Discord Arena: ${title}`}
          >
            <TwitterIcon size={32} round />
          </TwitterShareButton>
          <WhatsappShareButton
            url={url}
            quote={`Check out this blog on Discord Arena: ${title}`}
          >
            <WhatsappIcon size={32} round />
          </WhatsappShareButton>
          <LinkedinShareButton
            url={url}
            quote={`Check out this blog on Discord Arena: ${title}`}
            summary={`Learn more about Discord accounts and their benefits at Discord Arena: ${description}`}
            source="Discord Arena"
          >
            <LinkedinIcon size={32} round />
          </LinkedinShareButton>
          <RedditShareButton
            url={url}
            quote={`Check out this blog on Discord Arena: ${title}`}
          >
            <RedditIcon size={32} round />
          </RedditShareButton>
          <TelegramShareButton
            url={url}
            quote={`Check out this blog on Discord Arena: ${title}`}
          >
            <TelegramIcon size={32} round />
          </TelegramShareButton>
          <EmailShareButton url={url} subject={title}>
            <EmailIcon size={32} round />
          </EmailShareButton>
        </div>
        <button
          onClick={handleModalClose}
          className="bg-red-500 text-white px-4 py-2 rounded-lg"
        >
          Close
        </button>
      </div>
    </Popup>
  );
};

export default ShareModal;
