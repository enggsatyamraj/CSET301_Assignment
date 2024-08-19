"use client";
import BlogsCard from "@/components/BlogsCard";
import React, { useEffect } from "react";
import blogsContent from "../../dataFolder/blogs.json";

const Page = () => {
  // SEO metadata
  const seoTitle = "Disocrd Blogs | Buy Aged Discord Accounts";
  const seoDescription = "Discover expert insights on buying Discord accounts, including old and aged accounts. Stay informed with our latest blogs on account purchasing, management, and tips.";
  const seoKeywords = "buy Discord account, old Discord account, aged Discord account, Discord blogs, purchase Discord account, Discord account management";

  useEffect(() => {
    // Set the document title
    document.title = seoTitle;

    // Set the meta description
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute("content", seoDescription);
    } else {
      const meta = document.createElement('meta');
      meta.name = "description";
      meta.content = seoDescription;
      document.head.appendChild(meta);
    }

    // Set the meta keywords
    const metaKeywords = document.querySelector('meta[name="keywords"]');
    if (metaKeywords) {
      metaKeywords.setAttribute("content", seoKeywords);
    } else {
      const meta = document.createElement('meta');
      meta.name = "keywords";
      meta.content = seoKeywords;
      document.head.appendChild(meta);
    }
  }, []); // Empty dependency array means this runs once after initial render

  return (
    <div className="bg-normal overflow-x-hidden text-white">
      <div className="max-w-[1280px] pt-[150px] relative mx-auto py-[50px] md:px-[50px] px-[10px]">
        <h1 className="lh:w-[60%] mb-6 lg:text-[1.75rem] text-[1.5rem] sm:w-[80%] px-2 md:w-[70%] ">
          Explore Our Latest Blog Posts
          <br /> Stay Updated with the Newest Insights and Trends
        </h1>
        <div className="grid grid-cols-1 gap-y-14 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {blogsContent.map((item, index) => (
            <div key={index}>
              <BlogsCard
                imgurl={`../blogs-banner/${item.image}`}
                linkurl={`/blogs/${item?.name.split(" ").join("-").toLowerCase()}`}
                heading={item.name}
                time={item.minutes_read}
                date={item.date}
                className="h-full"
              />
            </div>
          ))}
        </div>
        <div className="radial_one"></div>
      </div>
    </div>
  );
};

export default Page;
