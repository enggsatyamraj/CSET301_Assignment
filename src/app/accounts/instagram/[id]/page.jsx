"use client";
import React from "react";
import discordData from "../../../../dataFolder/instagram.json";
import { usePathname } from "next/navigation";
import { FaInstagram } from "react-icons/fa";
import Link from "next/link";
import { Actor } from "next/font/google";

const actor = Actor({ weight: "400", subsets: ["latin"] });

const Page = () => {
  const pathname = usePathname();
  const id = pathname.split("/")[3];
  const data = discordData[id - 1];
  const reviews = [
    {
      id: 1,
      name: "John Doe",
      rating: 5,
      review:
        "I purchased a instagram Account and have been extremely satisfied with the features and benefits it offers. The boosted servers and active Nitro subscription have enhanced my server management and communication capabilities, and the integration of useful bots has improved the overall user experience. Additionally, the ownership of popular, engaged instagram servers has allowed me to connect with a large and active community. Overall, I highly recommend 2017 instagram Accounts for anyone looking to elevate their instagram experience.",
    },
    {
      id: 2,
      name: "Jane Smith",
      rating: 4,
      review:
        "I recently purchased a instagram Account and have been impressed with the range of features and benefits it offers. The verified account and boosted servers have provided added credibility and enhanced capabilities for managing and growing my server. The active Nitro subscription has also offered exclusive perks and benefits, and the integration of useful bots has improved functionality and automation. Overall, I am satisfied with my purchase and would recommend 2017 instagram Accounts to others looking to enhance their instagram experience.",
    },
    {
      id: 3,
      name: "Alex Johnson",
      rating: 5,
      review:
        "I have been using a instagram Account for some time now and have found it to be a valuable investment. The verified account and boosted servers have provided added credibility and enhanced capabilities for managing and growing my server. The active Nitro subscription has also offered exclusive perks and benefits, and the integration of useful bots has improved functionality and automation. Additionally, the ownership of popular, engaged instagram servers has allowed me to connect with a large and active community. Overall, I highly recommend 2017 instagram Accounts for anyone looking to elevate their instagram experience.",
    },
  ];

  return (
    <div className={actor.className}>
      <div className="min-h-[100vh] w-[100%] bg-[#121212] text-white">
        <div className="mx-auto max-w-[800px] px-7 pb-12 pt-[100px]">
          <p className="mx-auto  text-2xl sm:text-3xl md:text-4xl">
            Buy {data.year} {data.type} Accounts for sale-
            {data.discountPercentage}% Discount Buy Now
          </p>
          <div className="my-7 h-[1px] bg-[#fff]"></div>
          <p className="text-[15px] opacity-80 md:text-[1.15rem]">
            Buy your Instagram accounts here on instagram Accounts. Simply Buy
            Instagram account from here with decent price. Interested members
            will contact me in Instagram or Telegram.
          </p>
          <h2 className="mb-3 mt-5 text-2xl font-semibold">Account Details</h2>
          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
            <div className="flex h-[200px] w-[100%] items-center justify-center rounded-[10px] border-[1px] border-[#fff] text-3xl">
              <FaInstagram size={100} className="dance text-[#A5A6F6]" />
            </div>
            <div>
              <p className="mb-5 text-2xl">
                Buy {data.year} Instagram Account{" "}
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
          <div className="mt-4 flex gap-5">
            <span className="flex flex-1 items-center justify-center rounded-md bg-[#00C89D] px-3 py-[10px]  text-xl font-bold  text-black ">
              ${data.price}
            </span>
            {/* <Link href={data.link} target="_blank"> */}
              <Link href={data.link} target="_blank" className="flex-[3] text-center justify-center items-center rounded-md bg-[#F6EBFF] px-3  py-[10px] text-xl  font-bold text-black">
                Purchase
              </Link>
            {/* </Link> */}
          </div>
          <p className="mb-3 mt-7 text-2xl">
            Cheap {data.year} {data.type} accounts
          </p>
          <p className="text-[16px] opacity-85">{data.introduction}</p>

          <h2 className="mb-3 mt-5 text-2xl font-semibold">Features</h2>

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
            {data.questionAnswerArray &&
              data.questionAnswerArray.map((item, index) => {
                return (
                  <div key={index}>
                    <h2 className="mb-3 mt-5 text-2xl ">{item.question}</h2>
                    <p className="opacity-80">{item.answer}</p>
                  </div>
                );
              })}
          </div>

          <h2 className="mb-3 mt-5 text-2xl font-semibold">Reviews</h2>
          <div className="mt-7 grid grid-cols-1 gap-8 md:grid-cols-2">
            {reviews.map((item, index) => {
              return (
                <div
                  key={index}
                  className="relative rounded-md border-[1px] p-4"
                >
                  <h2 className="absolute top-[-18px] w-fit rounded-lg bg-[#00C9A7] px-3 py-1">
                    {item.name}
                  </h2>
                  <p className="mb-3 mt-4">
                    <span className="rounded-sm bg-[#4D8076] px-3 py-1 font-semibold">
                      Rating
                    </span>{" "}
                    : <span>{item.rating}</span>
                  </p>
                  <p className="text-[14px] opacity-80">{item.review}</p>
                </div>
              );
            })}
          </div>

          <h2 className="mb-6 mt-5 text-2xl font-semibold">FAQs</h2>
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
    </div>
  );
};

export default Page;
