"use client";
import React, { useState } from "react";
import { FaRegUser } from "react-icons/fa";
import { MdKeyboardArrowRight } from "react-icons/md";
import { MdKeyboardArrowLeft } from "react-icons/md";

const CustomerReview = () => {
  const commentArray = [
    {
      name: "Brooklyn Simons",
      company: "manam",
      review:
        "Sit ut diam bibendum dolor. Ullamcorper pharetra nibh eget vitae pulvinar. Placerat sapien, dolor, aenean vivamus in tincidunt et. Mauris dolor vestibulum et lacus a ante orci.",
      icons: <FaRegUser />,
    },
    {
      name: "harry",
      company: "woodland",
      review:
        "Sit ut diam bibendum dolor. Ullamcorper pharetra nibh eget vitae pulvinar. Placerat sapien, dolor, aenean vivamus in tincidunt ",
      icons: <FaRegUser />,
    },
    {
      name: "karmel",
      company: "bgpian",
      review:
        "Sit ut diam bibendum dolor. Ullamcorper pharetra nibh eget vitae pulvinar. Placerat sapien, dolor, aenean vivamus in tincidunt et. Mauris dolor vestibulum et lacus.",
      icons: <FaRegUser />,
    },
    {
      name: "james",
      company: "mkdir",
      review:
        "Sit ut diam bibendum dolor. Ullamcorper pharetra nibh eget vitae pulvinar. Placerat sapien, dolor, aenean vivamus in tincidunt et. Mauris dolor vestibitae pulvinar. Placerat sapien, dolor, aenean vivamus in tincidunt et. Mauris dolor vestibulum et lacus a ante orci. Sit ut diam bibendum dolor. ",
      icons: <FaRegUser />,
    },
    {
      name: "iti",
      company: "lviton",
      review:
        "Sit ut diam bibendum dolor. Ullamcorper pharetra nibh eget vitae pulvinar. Placerat sapien, dolor, aenean vivamus in tincidunt et. Mauris dolor vestibulum et lacus a ante orci. Sit ut diam bibendum dolor. Ullamcorper pharetra nibh eget vitae pulvinar. Placerat sapien, dolor, aenean vivamus in tincidunt et. Mauris dolor vestibulum et lacus a ante orci. Sit ut diam bibendum dolor. ",
      icons: <FaRegUser />,
    },
    {
      name: "jemy",
      company: "myi",
      review:
        "Sit ut diam bibendum dolor. Ullamcorper pharetra nibh eget vitae pulvinar. Placerat sapien, dolor, aenean vivamus in tincidunt et. Mauris dolor vestibulum et lacus a a    ",
      icons: <FaRegUser />,
    },
    {
      name: "Kary",
      company: "hisan",
      review:
        "Sit ut diam bibendum dolor. Ullamcorper pharetra nibh eget vitae pulvinar. Placerat sapien, dolor, aenean vivamus in tincidunt et. Mauris dolor vestibulum et lacus a ante orci. Sit ut diam bibendum dolor. Ullamcorper pharetra nibh eget    ",
      icons: <FaRegUser />,
    },
    {
      name: "Adam",
      company: "king",
      review:
        "Sit ut diam bibendum dolor. Ullamcorper pharetra nibh eget vitae pulvinar. Placerat sapien, dolor, aenean vivamus in tincidunt et. Mauris dolor vestibulum et lacus a ante orci. Sit ut diam bibendum dolor. Ullamcorper pharetra nibh eget    ",
      icons: <FaRegUser />,
    },
  ];

  const [index, setIndex] = useState(0);
  const length = commentArray.length;
  const handlePrevious = () => {
    const newIndex = index - 1;
    setIndex(newIndex < 0 ? length - 1 : newIndex);
  };

  const handleNext = () => {
    const newIndex = index + 1;
    setIndex(newIndex >= length ? 0 : newIndex);
  };
  return (
    <div className="bg-[#121212] text-white">
      <div className="max-w-[1280px] py-12 mx-auto px-4">
        <div className="flex justify-between items-center">
          <h1 className="sm:text-3xl text-2xl">Our Happy Customers</h1>
          <div className="flex gap-3">
            <MdKeyboardArrowLeft
              onClick={handlePrevious}
              className="text-[#A5A6F6] sm:text-5xl text-3xl border-2 rounded-lg border-[#A5A6F6] cursor-pointer"
            />
            <MdKeyboardArrowRight
              onClick={handleNext}
              className="text-[#A5A6F6] sm:text-5xl text-3xl border-2 rounded-lg border-[#A5A6F6] cursor-pointer"
            />
          </div>
        </div>
        <div className="mt-10 md:grid md:grid-cols-2 md:gap-4">
          <div className="bg-[#1F1F1F] mx-auto p-6 rounded-lg border-[1px] mb-4">
            <div className="flex items-center gap-4">
              {commentArray[index].icons}
              <div>
                <h1 className="text-xl font-semibold">
                  {commentArray[index].name}
                </h1>
                <h1 className="opacity-75">{commentArray[index].company}</h1>
              </div>
            </div>
            <p className="mt-4">{commentArray[index].review}</p>
          </div>

          <div className="bg-[#1F1F1F] hidden md:block mx-auto p-6 rounded-lg border-[1px] mb-4">
            <div className="flex items-center gap-4">
              {commentArray[index === commentArray.length-1 ? 0 : index+1].icons}
              <div>
                <h1 className="text-xl font-semibold">
                  {commentArray[index === commentArray.length-1 ? 0 : index+1].name}
                </h1>
                <h1 className="opacity-75">{commentArray[index === commentArray.length-1 ? 0 : index+1].company}</h1>
              </div>
            </div>
            <p className="mt-4">{commentArray[index === commentArray.length-1 ? 0 : index+1].review}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CustomerReview;
