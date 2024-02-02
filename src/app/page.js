import Navbar from "@/components/Navbar";
import Link from "next/link";
import React from "react";
import { FaDiscord } from "react-icons/fa";

export default function page() {
  const specialDiscordServiceArray = [
    {
      description:
        "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. ",
      link: "#",
      borderColor: "#A5A6F6",
    },
    {
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
      link: "#",
      borderColor: "#F178B6",
    },
    {
      description:
        "Est velit egestas dui id ornare. At imperdiet dui accumsan sit. Amet mauris commodo quis imperdiet. Non pulvinar neque laoreet suspendisse interdum consectetur libero id faucibus. Fusce id velit ut tortor pretium viverra suspendisse. Non curabitur gravida arcu ac tortor dignissim convallis. Vitae elementum curabitur vitae nunc sed velit dignissim sodales ut. Vivamus arcu felis bibendum ut tristique et. Est velit egestas dui id.",
      link: "#",
      borderColor: "#CE9031",
    },
  ];
  return (
    <>
      <div className="bg-normal w-[100%]">
        <div className="max-w-[1280px] mx-auto px-4 text-white relative min-h-[100vh] w-[100%] ">
          {/* Hero section */}
          <div className="min-h-[90vh] relative flex flex-col pl-[20px] sm:pl-[50px] justify-center z-4">
            <p className="pt-[60px]  text-5xl sm:text-6xl mb-10 md:text-7xl  sm:w-[80%] md:w-[70%] lh:w-[60%]">
              Buy <span className="span_text">Social Media</span> accounts at
              resonable prices.
            </p>
            <p className="text-xl md:w-[70%] sm:w-[80%] w-[90%] lg:w-[50%] opacity-60">
              Buy Discord Accounts, Twitter Accounts, Telegram Accounts and Game
              Accounts at Cheap Price.
            </p>
            <div className="radial_one"></div>
            {/* <div className="radial_two"></div> */}
          </div>

          {/* special discord offers */}
        </div>
      </div>
      <div className="bg-black text-white py-8">
        <div className="min-h-[90vh] px-4 flex flex-col justify-center max-w-[1280px] mx-auto">
          <h1 className="text-3xl md:text-4xl text-center">
            Special Discord Services
          </h1>

          <div className="grid grid-cols-1 md:grid-cols-3 mt-[40px] gap-5">
            {/* {
              specialDiscordServiceArray.map((item,index)=>{
                return(
                  <div key={index} className={`border-2 p-4 rounded-md border-${item.borderColor}`}>
                    {item.description}

                  </div>
                )
              })
            } */}
            <div className="border-2 border-[#A5A6F6] p-5 rounded-lg">
              <div className="h-[200px] flex items-center justify-center ">
                <FaDiscord size={100} className="text-[#A5A6F6] dance" />
              </div>
              <p className="mb-5 opacity-75">
                It is a long established fact that a reader will be distracted
                by the readable content of a page when looking at its layout.
                The point of using Lorem Ipsum is that it has a more-or-less
                normal distribution of letters, as opposed to using 'Content
                here, content here', making it look like readable English.
              </p>
              <Link
                href={"#"}
                className="border-[#A5A6F6] border-2 px-4 py-1 text-[#A5A6F6] rounded-lg"
              >
                Purchase
              </Link>
            </div>
            <div className="border-2 border-[#F178B6] p-5 rounded-lg">
              <div className="h-[200px] flex items-center justify-center">
                <FaDiscord size={100} className="text-[#F178B6] danceTwo" />
              </div>
              <p className="mb-5 opacity-75">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
              </p>
              <Link
                href="#"
                className="border-[#F178B6] border-2 px-4 py-1 text-[#F178B6]  rounded-lg"
              >
                Purchase
              </Link>
            </div>
            <div className="border-2 border-[#CE9031] p-5 rounded-lg">
              <div className="h-[200px] flex items-center justify-center">
                <FaDiscord size={100} className="text-[#CE9031] danceThree" />
              </div>
              <p className="mb-5 opacity-75">
              Est velit egestas dui id ornare. At imperdiet dui accumsan sit. Amet mauris commodo quis imperdiet. Non pulvinar neque laoreet suspendisse interdum consectetur libero id faucibus. Fusce id velit ut tortor pretium viverra suspendisse. Non curabitur gravida arcu ac tortor dignissim convallis. Vitae elementum curabitur vitae nunc sed velit dignissim sodales ut. Vivamus arcu felis bibendum ut tristique et. Est velit egestas dui id.
              </p>
              <Link
                href={"#"}
                className="border-[#CE9031] border-2 px-4 py-1 text-[#CE9031] mt-3 rounded-lg"
              >
                Purchase
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
