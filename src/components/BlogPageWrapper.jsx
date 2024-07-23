// components/BlogPageWrapper.js
"use client"; // Add this line

import React, { useState } from "react";
import ShareModal from "@/components/shareModal"; // Adjust path if necessary

const BlogPageWrapper = ({ children, params }) => {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <div>
      {React.cloneElement(children, {
        modalOpen,
        setModalOpen,
      })}
      <ShareModal
        open={modalOpen}
        onClose={() => setModalOpen(false)}
        url="URL" // Replace with actual URL or pass as prop
        title="TITLE" // Replace with actual title or pass as prop
        description="DESCRIPTION" // Replace with actual description or pass as prop
      />
    </div>
  );
};

export default BlogPageWrapper;
