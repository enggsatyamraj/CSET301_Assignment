import React from "react";
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
      name: "james",
      company: "manam",
      review:
        "Sit ut diam bibendum dolor. Ullamcorper pharetra nibh eget vitae pulvinar. Placerat sapien, dolor, aenean vivamus in tincidunt et. Mauris dolor vestibulum et lacus.",
      icons: <FaRegUser />,
    },
    {
      name: "james",
      company: "manam",
      review:
        "Sit ut diam bibendum dolor. Ullamcorper pharetra nibh eget vitae pulvinar. Placerat sapien, dolor, aenean vivamus in tincidunt et. Mauris dolor vestibulum et lacus a ante orci. Sit ut diam bibendum dolor. Ullamcorper pharetra nibh eget vitae pulvinar. Placerat sapien, dolor, aenean vivamus in tincidunt et. Mauris dolor vestibulum et lacus a ante orci. Sit ut diam bibendum dolor. ",
      icons: <FaRegUser />,
    },
  ];
  return (
    <div className="bg-[#121212] text-white">
      <div className="max-w-[1280px] py-12 mx-auto">
        <div className="flex justify-between items-center">
          <h1 className="text-3xl ">Our Happy Customers</h1>
          <div className="flex gap-3">
            <MdKeyboardArrowLeft className="text-[#A5A6F6] text-5xl border-2 rounded-lg border-[#A5A6F6]" />
            <MdKeyboardArrowRight className="text-[#A5A6F6] text-5xl border-2 rounded-lg border-[#A5A6F6]" />
          </div>
        </div>
        <div className="mt-10">
            {
                commentArray.map((comment, index) => (
                    <div key={index} className="bg-[#1F1F1F] p-6 rounded-lg border-[1px] mb-4">
                        <div className="flex items-center gap-4">
                            {comment.icons}
                            <div>
                                <h1 className="text-xl font-semibold">{comment.name}</h1>
                                <h1 className="opacity-75">{comment.company}</h1>
                            </div>
                        </div>
                        <p className="mt-4">{comment.review}</p>
                    </div>
                ))
            }
        </div>
      </div>
    </div>
  );
};

export default CustomerReview;
