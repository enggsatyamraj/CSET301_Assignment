"use client";
import React from "react";
import discordData from "../../../../dataFolder/discord.json";
import { usePathname } from "next/navigation";
import { FaDiscord } from "react-icons/fa";
import Link from "next/link";

const Page = () => {
  const pathname = usePathname();
  const id = pathname.split("/")[3];
  console.log(discordData[id - 1]);
  const data = discordData[id - 1];
  return (
    <div className="min-h-[100vh] w-[100%] bg-[#121212] text-white">
      <div className="mx-auto max-w-[800px] px-7 pb-12 pt-[100px]">
        <p className="mx-auto  text-2xl sm:text-3xl md:text-4xl">
          Buy {data.year} {data.type} Accounts for sale-
          {data.discountPercentage}% Discount Buy Now
        </p>
        <div className="my-7 h-[1px] bg-[#fff]"></div>
        <p className="text-[15px] opacity-80 md:text-[1.15rem]">
          Buy your Discord accounts here on Discord Accounts. Simply Buy Discord
          account from here with decent price. Interested members will contact
          me in Discord or Telegram.
        </p>
        <h1 className="mb-3 mt-5 text-2xl font-semibold">Account Details</h1>
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
          <div className="flex h-[200px] w-[100%] items-center justify-center rounded-[10px] border-[1px] border-[#fff] text-3xl">
            <FaDiscord size={100} className="dance text-[#A5A6F6]" />
          </div>
          <div>
            <p className="mb-5 text-2xl">Buy {data.year} Discord Account </p>
            <ul className="list-disc pl-4 text-[15px] opacity-85">
              <li>{data.smallShowFiveFeatures.feature1}</li>
              <li>{data.smallShowFiveFeatures.feature2}</li>
              <li>{data.smallShowFiveFeatures.feature3}</li>
              <li>{data.smallShowFiveFeatures.feature4}</li>
              <li>{data.smallShowFiveFeatures.feature5}</li>
            </ul>
          </div>
        </div>
        <div className="mt-4 flex gap-5">
          <span className="flex flex-1 items-center justify-center rounded-md bg-[#00C89D] px-3 py-[10px]  text-xl font-bold  text-black ">
            ${data.price}
          </span>
          <button className="flex-[3] items-center rounded-md bg-[#F6EBFF] px-3  py-[10px] text-xl  font-bold text-black">
            Purchase
          </button>
        </div>
        <p className="mb-3 mt-7 text-2xl">
          Cheap {data.year} {data.type} accounts
        </p>
        <p className="text-[16px] opacity-85">{data.introduction}</p>

        <h1 className="mb-3 mt-5 text-2xl font-semibold">Features</h1>

        <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
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

        <div>
          {data.questionAnswerArray.map((item, index) => {
            return (
              <div key={index}>
                <h1 className="mb-3 mt-5 text-2xl ">{item.question}</h1>
                <p className="opacity-80">{item.answer}</p>
              </div>
            );
          })}
        </div>

        <h1 className="mb-3 mt-5 text-2xl font-semibold">Reviews</h1>
        <div className="mt-7 grid grid-cols-1 gap-8 md:grid-cols-2">
          {data.reviews.map((item, index) => {
            return (
              <div key={index} className="relative rounded-md border-[1px] p-4">
                <h1 className="absolute top-[-18px] w-fit rounded-lg bg-[#00C9A7] px-3 py-1">
                  {item.name}
                </h1>
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

        <h1 className="mb-6 mt-5 text-2xl font-semibold">FAQs</h1>
        <div>
          {data.faq.map((item, index) => {
            return (
              <details key={index} className="mb-5">
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

export default Page;
