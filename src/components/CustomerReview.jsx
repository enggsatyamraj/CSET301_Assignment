"use client";
import Head from "next/head";
import React, { useState } from "react";
import { FaRegUser } from "react-icons/fa";
import { MdKeyboardArrowRight, MdKeyboardArrowLeft } from "react-icons/md";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";

const CustomerReview = () => {
  const commentArray = [
    {
      name: "Rajesh Verma",
      company: "Tech Innovators",
      review:
        "Working with Discord Arena was a truly rewarding experience. Their innovative strategies and in-depth market analysis transformed our approach. We saw a notable improvement in engagement and overall results. They are a team of true professionals.",
      icons: <FaRegUser />,
    },
    {
      name: "Anjali Mehta",
      company: "Creative Sparks",
      review:
        "Discord Arena has been a fantastic partner in enhancing our digital presence. Their tailored solutions and keen insights into user behavior have driven impressive results. Their proactive support and expertise are second to none.",
      icons: <FaRegUser />,
    },
    {
      name: "David Lee",
      company: "Visionary Ventures",
      review:
        "Our collaboration with Discord Arena has been nothing short of exceptional. Their strategic guidance and thorough execution have led to significant improvements in our online performance. Their commitment to our success was evident throughout.",
      icons: <FaRegUser />,
    },
    {
      name: "Priya Singh",
      company: "Digital Dreams",
      review:
        "Discord Arena’s innovative approach has made a real difference in our digital marketing efforts. Their creative strategies and focus on detail helped us achieve our goals effectively. Their customer service is always prompt and helpful.",
      icons: <FaRegUser />,
    },
    {
      name: "William Moore",
      company: "Future Tech",
      review:
        "We were thoroughly impressed with Discord Arena’s expertise in digital strategy. They provided us with customized solutions that addressed our specific needs. Their dedication and clear communication made the entire process smooth and successful.",
      icons: <FaRegUser />,
    },
    {
      name: "Nisha Rao",
      company: "Brand Builders",
      review:
        "Our experience with Discord Arena has been outstanding. Their fresh marketing strategies and dedication to excellence set them apart. They consistently delivered high-quality results and demonstrated a genuine commitment to our success.",
      icons: <FaRegUser />,
    },
    {
      name: "Mark Thompson",
      company: "NextGen Solutions",
      review:
        "Discord Arena’s expertise in data-driven decision making greatly enhanced our digital strategies. Their innovative approach and analytical skills provided us with valuable insights and led to measurable improvements in our campaigns.",
      icons: <FaRegUser />,
    },
    {
      name: "Kavita Sharma",
      company: "Dynamic Designs",
      review:
        "Choosing Discord Arena was a game-changer for our digital marketing. Their customized strategies and enthusiastic approach led to impressive results. Their team's creativity and dedication were evident in every project.",
      icons: <FaRegUser />,
    },
    {
      name: "Lucas Brown",
      company: "Tech Titans",
      review:
        "Discord Arena's thorough understanding of digital marketing helped us significantly boost our online presence. Their proactive approach and dedication to understanding our needs were greatly appreciated. Highly recommended for any digital strategy needs.",
      icons: <FaRegUser />,
    },
    // {
    //   name: "Meera Kapoor",
    //   company: "Social Stars",
    //   review:
    //     "Discord Arena's innovative strategies elevated our social media game. Their hands-on approach and commitment to continuous improvement were exactly what we needed. Their dedication to client success was evident in every interaction.",
    //   icons: <FaRegUser />,
    // },
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
      {/* <Head>
        <title>Customer Reviews | Discord Arena</title>
        <meta
          name="description"
          content="Read what our customers say about Discord Arena. Discover how our expertise, transparent pricing, and innovative strategies have made a positive impact on businesses."
        />
        <meta name="author" content="Discord Arena" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "Discord Arena",
              url: "https://www.discordarena.com/",
              logo: "URL_TO_YOUR_LOGO",
              contactPoint: {
                "@type": "ContactPoint",
                telephone: "+1-123-456-7890",
                contactType: "Customer service",
              },
            }),
          }}
        />
      </Head> */}
      <div className="max-w-[1280px] py-12 mx-auto px-4">
        <div className="flex justify-between items-center">
          <p className="sm:text-3xl text-2xl">Our Happy Customers</p>
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
        <Carousel
          autoPlay={true}
          emulateTouch={true}
          infiniteLoop={true}
          showArrows={false}
          showThumbs={false}
          showIndicators={false}
          selectedItem={index}
          onChange={(index) => setIndex(index)}
        >
          {commentArray.map((comment, idx) => (
            <div
              key={idx}
              className="bg-[#1F1F1F] mx-auto p-6 mt-5 pb-4 rounded-lg border-[1px] mb-4"
            >
              <div className="flex items-center gap-4">
                {comment.icons}
                <div className="flex flex-col items-start">
                  <p className="text-xl font-semibold">{comment.name}</p>
                  {/* <br /> */}
                  <p className="opacity-75">{comment.company}</p>
                </div>
              </div>
              <p className="mt-4">{comment.review}</p>
            </div>
          ))}
        </Carousel>
      </div>
    </div>
  );
};

export default CustomerReview;
