"use client";
import Footer from "@/components/Footer";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import discordData from "../../dataFolder/discord.json";
import instagramData from "../../dataFolder/instagram.json";
import twitterData from "../../dataFolder/twitter.json";
import { FaDiscord } from "react-icons/fa";
import { Actor } from "next/font/google";

const actor = Actor({ weight: "400", subsets: ["latin"] });


export default function Page() {
  const [showMore, setShowMore] = useState(false);
  const [ishowMore, isetShowMore] = useState(false);
  const [tshowMore, tsetShowMore] = useState(false);
  return (
    <div className={actor.className}>
      <div className="bg-normal w-[100%]">
        <div className="relative mx-auto min-h-[60vh] w-[100%] max-w-[1280px] px-7 text-white sm:px-12 ">
          <div className="z-4 relative flex min-h-[90vh] flex-col justify-center">
            <p className="lh:w-[60%] mb-6 text-3xl sm:w-[80%]  sm:text-4xl md:w-[70%] md:text-5xl">
              Find Your niche
            </p>
            <p className="w-[90%] text-[15px] opacity-60 sm:w-[80%] md:w-[70%] lg:w-[50%]">
              Risus commodo id odio turpis pharetra elementum. Pulvinar porta
              porta feugiat scelerisque in elit. Morbi rhoncus, tellus, eros
              Risus commodo id odio turpis pharetra elementum. Pulvinar porta
              porta feugiat scelerisque in elit. Morbi rhoncus, tellus, eros
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sit,
              itaque.
            </p>
            <div className="radial_one"></div>
            {/* <div className="radial_two"></div> */}
          </div>
        </div>
      </div>

      <div className="bg-normal w-[100%]">
        <div className="reative mx-auto min-h-[60vh] w-[100%] max-w-[1280px] px-7 py-5 text-white sm:px-12">
          <h1 className="mb-4 text-2xl font-semibold">Discord Accounts</h1>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 ">
            {discordData.map((item, index) => {
              return (
                <div
                  key={item.id}
                  className={`border-[1px] ${
                    !showMore ? (index > 2 ? "hidden" : "") : ""
                  } h-fit overflow-hidden rounded-md p-4`}
                >
                  <div className="flex h-[150px] w-[100%] items-center justify-center rounded-sm bg-[#BBA8FD]">
                    <FaDiscord
                      size={50}
                      className="accountDance text-[#8474C4]"
                    />
                  </div>

                  <p className="my-3 text-[14px] font-semibold tracking-widest sm:text-[15px]">
                    Buy{" "}
                    <span className="rounded-sm bg-[#F6EBFF] px-3 py-1 text-black">
                      {item.year}
                    </span>{" "}
                    Discord Account
                  </p>
                  <ul className="list-disc pl-4 text-[13px] opacity-85">
                    <li>{item.smallShowFiveFeatures.feature1}</li>
                    <li>{item.smallShowFiveFeatures.feature2}</li>
                    <li>{item.smallShowFiveFeatures.feature3}</li>
                    <li>{item.smallShowFiveFeatures.feature4}</li>
                    <li>{item.smallShowFiveFeatures.feature5}</li>
                  </ul>
                  <div className="mt-5 flex items-center gap-3">
                    <Link
                      href={`accounts/discord/${item.id}`}
                      className="rounded-md bg-[#00C89D] px-4 py-1 font-semibold"
                    >
                      Info
                    </Link>
                    <Link
                      href={"/"}
                      className="rounded-md bg-[#00C89D] px-4 py-1 font-semibold "
                    >
                      Buy
                    </Link>
                    <span className="rounded-md bg-[#00C89D] px-4 py-1 font-semibold ">
                      $ {item.price}
                    </span>
                  </div>
                </div>
              );
            })}
          </div>
          <div className="">
            <div
              onClick={() => setShowMore(!showMore)}
              className="ml-auto mt-4 w-fit cursor-pointer rounded-md bg-[#00C89D] px-4 py-1 font-semibold"
            >
              {showMore ? "Show less accounts" : "Show more accounts"}
            </div>
          </div>
        </div>
      </div>

      <div className="bg-normal w-[100%]">
        <div className="reative mx-auto min-h-[60vh] w-[100%] max-w-[1280px] px-7 py-5 text-white sm:px-12">
          <h1 className="mb-4 text-2xl font-semibold">Instagram Accounts</h1>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 ">
            {instagramData.map((item, index) => {
              return (
                <div
                  key={item.id}
                  className={`border-[1px] ${
                    !ishowMore ? (index > 2 ? "hidden" : "") : ""
                  } h-fit overflow-hidden rounded-md p-4`}
                >
                  <div className="flex h-[150px] w-[100%] items-center justify-center rounded-sm bg-[#BBA8FD]">
                    <FaDiscord
                      size={50}
                      className="accountDance text-[#8474C4]"
                    />
                  </div>

                  <p className="my-3 text-[14px] font-semibold tracking-widest sm:text-[15px]">
                    Buy{" "}
                    <span className="rounded-sm bg-[#F6EBFF] px-3 py-1 text-black">
                      {item.year}
                    </span>{" "}
                    Instagram Account
                  </p>
                  <ul className="list-disc pl-4 text-[13px] opacity-85">
                    <li>{item.smallShowFiveFeatures.feature1}</li>
                    <li>{item.smallShowFiveFeatures.feature2}</li>
                    <li>{item.smallShowFiveFeatures.feature3}</li>
                    <li>{item.smallShowFiveFeatures.feature4}</li>
                    <li>{item.smallShowFiveFeatures.feature5}</li>
                  </ul>
                  <div className="mt-5 flex items-center gap-3">
                    <Link
                      href={`accounts/instagram/${item.id}`}
                      className="rounded-md bg-[#00C89D] px-4 py-1 font-semibold"
                    >
                      Info
                    </Link>
                    <Link
                      href={"/"}
                      className="rounded-md bg-[#00C89D] px-4 py-1 font-semibold "
                    >
                      Buy
                    </Link>
                    <span className="rounded-md bg-[#00C89D] px-4 py-1 font-semibold ">
                      $ {item.price}
                    </span>
                  </div>
                </div>
              );
            })}
          </div>
          <div className="">
            <div
              onClick={() => isetShowMore(!ishowMore)}
              className="ml-auto mt-4 w-fit cursor-pointer rounded-md bg-[#00C89D] px-4 py-1 font-semibold"
            >
              {ishowMore ? "Show less accounts" : "Show more accounts"}
            </div>
          </div>
        </div>
      </div>

      <div className="bg-normal w-[100%]">
        <div className="reative mx-auto min-h-[60vh] w-[100%] max-w-[1280px] px-7 py-5 text-white sm:px-12">
          <h1 className="mb-4 text-2xl font-semibold">Twitter Accounts</h1>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 ">
            {twitterData.map((item, index) => {
              return (
                <div
                  key={item.id}
                  className={`border-[1px] ${
                    !tshowMore ? (index > 2 ? "hidden" : "") : ""
                  } h-fit overflow-hidden rounded-md p-4`}
                >
                  <div className="flex h-[150px] w-[100%] items-center justify-center rounded-sm bg-[#BBA8FD]">
                    <FaDiscord
                      size={50}
                      className="accountDance text-[#8474C4]"
                    />
                  </div>

                  <p className="my-3 text-[14px] font-semibold tracking-widest sm:text-[15px]">
                    Buy{" "}
                    <span className="rounded-sm bg-[#F6EBFF] px-3 py-1 text-black">
                      {item.year}
                    </span>{" "}
                    Twitter Account
                  </p>
                  <ul className="list-disc pl-4 text-[13px] opacity-85">
                    <li>{item.smallShowFiveFeatures.feature1}</li>
                    <li>{item.smallShowFiveFeatures.feature2}</li>
                    <li>{item.smallShowFiveFeatures.feature3}</li>
                    <li>{item.smallShowFiveFeatures.feature4}</li>
                    <li>{item.smallShowFiveFeatures.feature5}</li>
                  </ul>
                  <div className="mt-5 flex items-center gap-3">
                    <Link
                      href={`accounts/twitter/${item.id}`}
                      className="rounded-md bg-[#00C89D] px-4 py-1 font-semibold"
                    >
                      Info
                    </Link>
                    <Link
                      href={"/"}
                      className="rounded-md bg-[#00C89D] px-4 py-1 font-semibold "
                    >
                      Buy
                    </Link>
                    <span className="rounded-md bg-[#00C89D] px-4 py-1 font-semibold ">
                      $ {item.price}
                    </span>
                  </div>
                </div>
              );
            })}
          </div>
          <div className="">
            <div
              onClick={() => tsetShowMore(!tshowMore)}
              className="ml-auto mt-4 w-fit cursor-pointer rounded-md bg-[#00C89D] px-4 py-1 font-semibold"
            >
              {tshowMore ? "Show less accounts" : "Show more accounts"}
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
