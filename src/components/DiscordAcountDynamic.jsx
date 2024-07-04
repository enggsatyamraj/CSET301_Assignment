"use client";
import { usePathname } from "next/navigation";
import discordData from "@/dataFolder/discord.json";
import React from "react";
import { FaDiscord } from "react-icons/fa";
import Link from "next/link";

const DiscordAcountDynamic = () => {
  const pathname = usePathname();
  const title = pathname.split("/").pop();
  let id;
  for (let i = 0; i < discordData.length; i++) {
    if (discordData[i].name.toLowerCase() == title.split("-").join(" ")) {
      id = i;
      break;
    }
  }

  const data = discordData[id];

  function calculateAverageRating(reviews) {
    if (reviews.length === 0) return 0; // Return 0 if there are no reviews
    const totalRating = reviews.reduce((acc, curr) => acc + curr.rating, 0);
    return (totalRating / reviews.length).toFixed(1); // Return the average rating rounded to 1 decimal place
  }
  return (
    <div>
      <div className="mx-auto max-w-[800px] px-7 pb-12 pt-[100px]">
        <p className="mx-auto  text-2xl sm:text-3xl md:text-4xl">
          Buy {data.year} {data.type} Accounts for sale-
          {data.discountPercentage}% Discount Buy Now
        </p>
        <div className="my-7 h-[1px] bg-[#fff]"></div>
        <p className="text-[15px] opacity-80 md:text-[1.15rem] mb-3">
          Buy {data.year} Discord accounts at cheap prices here on Discord
          Arena.
        </p>
        <p className="mb-3 mt-5 text-2xl font-semibold">
          Buy {data.year} Discord Account{" "}
        </p>
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 mt-3">
          <div className="flex h-[200px] w-[100%] items-center justify-center rounded-[10px] border-[1px] border-[#fff] text-3xl">
            <FaDiscord size={100} className="dance text-[#A5A6F6]" />
          </div>
          <div>
            <p className="mb-5 text-2xl">
              Buy cheap {data.year} Discord Account{" "}
            </p>
            <ul className="list-disc pl-4 text-[15px] opacity-85">
              <li>{data.smallShowFiveFeatures.feature1}</li>
              <li>{data.smallShowFiveFeatures.feature2}</li>
              <li>{data.smallShowFiveFeatures.feature3}</li>
              <li>{data.smallShowFiveFeatures.feature4}</li>
              <li>{data.smallShowFiveFeatures.feature5}</li>
            </ul>
          </div>
        </div>
        <div className="mt-4 flex gap-5 mb-7">
          <span className="flex flex-1 items-center justify-center rounded-md bg-[#00C89D] px-3 py-[10px]  text-xl font-bold  text-black ">
            ${data.price}
          </span>
          <Link
            href={data.link}
            target="_blank"
            className="flex-[3] text-center justify-center items-center rounded-md bg-[#F6EBFF] px-3  py-[10px] text-xl  font-bold text-black"
          >
            Purchase
          </Link>
        </div>

        <p className="mb-3 mt-5 text-2xl font-semibold">
          Features and benefits of used discord accounts - {data.year}
        </p>

        <div className="grid grid-cols-1 gap-4 md:grid-cols-3 mt-3 mb-4">
          {data.features.map((item, index) => {
            return (
              <div
                key={index}
                className="flex flex-col gap-3 rounded-md border-[1px] border-white p-4"
              >
                <span className=" rounded-lg bg-[#a5a6f6] px-3 py-[2px] text-[15px] font-bold text-black">
                  {item.title}
                </span>
                <p className="text-[14px] opacity-80">{item.description}</p>
              </div>
            );
          })}
        </div>

        <h2 className="mb-3 mt-5 text-2xl font-semibold">
          Customer Testimonials
        </h2>
        <div className="mt-7 grid grid-cols-1 gap-8 md:grid-cols-2 mb-4">
          {reviews.map((item, index) => {
            return (
              <div key={index} className="relative rounded-md border-[1px] p-4">
                <p className="absolute top-[-18px] w-fit rounded-lg bg-[#00C9A7] px-3 py-1">
                  {item.name}
                </p>
                <p className="mb-3 mt-4">
                  <span className="rounded-sm bg-[#4D8076] px-3 py-1 font-semibold">
                    Rating
                  </span>{" "}
                  : <span>{item.rating}</span>
                </p>
                <p className="text-[14px] opacity-80">{item.comment}</p>
              </div>
            );
          })}
        </div>

        <h2 className="mb-3 mt-5 text-2xl font-semibold">
          FAQs related to aged Discord Accounts - {data.year}
        </h2>
        <div>
          {data.faq.map((item, index) => {
            return (
              <details key={index} className="mb-5 opacity-80">
                <summary className="px-3 text-[16px]  md:text-xl">
                  {item.question}
                </summary>
                <p className="pl-7 opacity-80">{item.answer}</p>
              </details>
            );
          })}
        </div>

        <Link
          className="mt-4 rounded-md bg-[#845EC2] px-3 py-[7px] font-semibold"
          href={"/faq"}
        >
          See more FAQs
        </Link>
      </div>
    </div>
  );
};

export default DiscordAcountDynamic;
