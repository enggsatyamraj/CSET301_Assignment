"use client";
import BlogsCard from "@/components/BlogsCard";
import React, { useEffect } from "react";
import blogsContent from "../../dataFolder/blogs.json";

const page = () => {
  return (
    <div className="bg-normal text-white">
      <div className="max-w-[1280px] pt-[150px] relative mx-auto py-[50px] md:px-[50px] px-[10px]">
        <div className="grid  grid-cols-1 gap-y-14 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {blogsContent.map((item, index) => {
            return (
              <div key={index}>
                <BlogsCard
                  linkurl={`/blogs/${item?.name
                    .split(" ")
                    .join("-")
                    .toLowerCase()}`}
                  heading={item.name}
                  time={item.minutes_read}
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
