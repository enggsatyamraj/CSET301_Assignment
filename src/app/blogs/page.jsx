"use client";
import BlogsCard from "@/components/BlogsCard";
import React, { useEffect } from "react";
import blogsContent from "../../dataFolder/blogs.json";

const page = () => {
  return (
    <div className="bg-normal overflow-x-hidden text-white">
      <div className="max-w-[1280px] pt-[150px] relative mx-auto py-[50px] md:px-[50px] px-[10px]">
        <h1 className="lh:w-[60%] mb-6 lg:text-[1.75rem] text-[1.5rem] sm:w-[80%] px-2 md:w-[70%] ">
          Explore Our Latest Blog Posts
          <br /> Stay Updated with the Newest Insights and Trends
        </h1>
        <div className="grid grid-cols-1 gap-y-14 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {blogsContent.map((item, index) => {
            return (
              <div key={index}>
                <BlogsCard
                  imgurl={`../blogs-banner/${item.image}`}
                  linkurl={`/blogs/${item?.name
                    .split(" ")
                    .join("-")
                    .toLowerCase()}`}
                  heading={item.name}
                  time={item.minutes_read}
                  date={item.date}
                  className="h-full"
                />
              </div>
            );
          })}
        </div>
        <div className="radial_one"></div>
      </div>
    </div>
  );
};

export default page;
