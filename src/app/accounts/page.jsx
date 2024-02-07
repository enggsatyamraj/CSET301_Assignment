"use client";
import Footer from "@/components/Footer";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import discordData from "../../dataFolder/discord.json";
import instagramData from "../../dataFolder/instagram.json";
import twitterData from "../../dataFolder/twitter.json";
import { FaDiscord } from "react-icons/fa";

export default function Page() {
  const [showMore, setShowMore] = useState(false);
  const [ishowMore, isetShowMore] = useState(false);
  const [tshowMore, tsetShowMore] = useState(false);
  return (
    <>
      <div className="bg-normal w-[100%]">
        <div className="max-w-[1280px] mx-auto px-7 sm:px-12 text-white relative min-h-[60vh] w-[100%] ">
          <div className="min-h-[90vh] relative flex flex-col justify-center z-4">
            <p className="text-3xl sm:text-4xl mb-6 md:text-5xl  sm:w-[80%] md:w-[70%] lh:w-[60%]">
              Find Your niche
            </p>
            <p className="text-[15px] md:w-[70%] sm:w-[80%] w-[90%] lg:w-[50%] opacity-60">
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
        <div className="max-w-[1280px] mx-auto px-7 py-5 sm:px-12 text-white reative min-h-[60vh] w-[100%]">
          <h1 className="text-2xl font-semibold mb-4">Discord Accounts</h1>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 ">
            {discordData.map((item, index) => {
              return (
                <div
                  key={item.id}
                  className={`border-[1px] ${
                    !showMore ? (index > 2 ? "hidden" : "") : ""
                  } p-4 overflow-hidden rounded-md h-fit`}
                >
                  <div className="flex items-center justify-center bg-[#BBA8FD] rounded-sm w-[100%] h-[150px]">
                    <FaDiscord
                      size={50}
                      className="text-[#8474C4] accountDance"
                    />
                  </div>

                  <p className="sm:text-[15px] text-[14px] font-semibold tracking-widest my-3">
                    Buy{" "}
                    <span className="bg-[#F6EBFF] px-3 py-1 rounded-sm text-black">
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
                  <div className="flex gap-3 items-center mt-5">
                    <Link
                      href={{
                        pathname: `accounts/${item.id}`,
                        query: { accountDetails: JSON.stringify(item) },
                      }}
                      className="bg-[#00C89D] px-4 font-semibold rounded-md py-1"
                    >
                      Info
                    </Link>
                    <Link
                      href={"/"}
                      className="bg-[#00C89D] px-4 font-semibold rounded-md py-1 "
                    >
                      Buy
                    </Link>
                    <span className="bg-[#00C89D] px-4 font-semibold rounded-md py-1 ">
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
              className="bg-[#00C89D] mt-4 ml-auto px-4 cursor-pointer w-fit font-semibold rounded-md py-1"
            >
              {showMore ? "Show less accounts" : "Show more accounts"}
            </div>
          </div>
        </div>
      </div>

      <div className="bg-normal w-[100%]">
        <div className="max-w-[1280px] mx-auto px-7 py-5 sm:px-12 text-white reative min-h-[60vh] w-[100%]">
          <h1 className="text-2xl font-semibold mb-4">Instagram Accounts</h1>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 ">
            {instagramData.map((item, index) => {
              return (
                <div
                  key={item.id}
                  className={`border-[1px] ${
                    !ishowMore ? (index > 2 ? "hidden" : "") : ""
                  } p-4 overflow-hidden rounded-md h-fit`}
                >
                  <div className="flex items-center justify-center bg-[#BBA8FD] rounded-sm w-[100%] h-[150px]">
                    <FaDiscord
                      size={50}
                      className="text-[#8474C4] accountDance"
                    />
                  </div>

                  <p className="sm:text-[15px] text-[14px] font-semibold tracking-widest my-3">
                    Buy{" "}
                    <span className="bg-[#F6EBFF] px-3 py-1 rounded-sm text-black">
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
                  <div className="flex gap-3 items-center mt-5">
                    <Link
                      href={{
                        pathname: `accounts/${item.id}`,
                        query: { accountDetails: JSON.stringify(item) },
                      }}
                      className="bg-[#00C89D] px-4 font-semibold rounded-md py-1"
                    >
                      Info
                    </Link>
                    <Link
                      href={"/"}
                      className="bg-[#00C89D] px-4 font-semibold rounded-md py-1 "
                    >
                      Buy
                    </Link>
                    <span className="bg-[#00C89D] px-4 font-semibold rounded-md py-1 ">
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
              className="bg-[#00C89D] mt-4 ml-auto px-4 cursor-pointer w-fit font-semibold rounded-md py-1"
            >
              {showMore ? "Show less accounts" : "Show more accounts"}
            </div>
          </div>
        </div>
      </div>

      <div className="bg-normal w-[100%]">
        <div className="max-w-[1280px] mx-auto px-7 py-5 sm:px-12 text-white reative min-h-[60vh] w-[100%]">
          <h1 className="text-2xl font-semibold mb-4">Twitter Accounts</h1>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 ">
            {twitterData.map((item, index) => {
              return (
                <div
                  key={item.id}
                  className={`border-[1px] ${
                    !tshowMore ? (index > 2 ? "hidden" : "") : ""
                  } p-4 overflow-hidden rounded-md h-fit`}
                >
                  <div className="flex items-center justify-center bg-[#BBA8FD] rounded-sm w-[100%] h-[150px]">
                    <FaDiscord
                      size={50}
                      className="text-[#8474C4] accountDance"
                    />
                  </div>

                  <p className="sm:text-[15px] text-[14px] font-semibold tracking-widest my-3">
                    Buy{" "}
                    <span className="bg-[#F6EBFF] px-3 py-1 rounded-sm text-black">
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
                  <div className="flex gap-3 items-center mt-5">
                    <Link
                      href={{
                        pathname: `accounts/${item.id}`,
                        query: { accountDetails: JSON.stringify(item) },
                      }}
                      className="bg-[#00C89D] px-4 font-semibold rounded-md py-1"
                    >
                      Info
                    </Link>
                    <Link
                      href={"/"}
                      className="bg-[#00C89D] px-4 font-semibold rounded-md py-1 "
                    >
                      Buy
                    </Link>
                    <span className="bg-[#00C89D] px-4 font-semibold rounded-md py-1 ">
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
              className="bg-[#00C89D] mt-4 ml-auto px-4 cursor-pointer w-fit font-semibold rounded-md py-1"
            >
              {showMore ? "Show less accounts" : "Show more accounts"}
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
}
