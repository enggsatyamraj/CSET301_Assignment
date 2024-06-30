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
        "The collaboration with Discord Arena was exceptional! Their unique approach to problem-solving and dedication to results made a real difference. I appreciate their focus on innovation and client satisfaction. A fantastic team to work with!",
      icons: <FaRegUser />,
    },
    {
      name: "Anjali Mehta",
      company: "Creative Sparks",
      review:
        "Discord Arena transformed our online presence. Their insights into market trends and user engagement strategies were invaluable. The team's commitment to excellence and client success is truly commendable. Highly recommended!",
      icons: <FaRegUser />,
    },
    {
      name: "David Lee",
      company: "Visionary Ventures",
      review:
        "Working with Discord Arena was a game-changer for our business. Their strategic planning and thorough execution led to remarkable results. I was impressed by their professionalism and dedication to achieving our goals.",
      icons: <FaRegUser />,
    },
    {
      name: "Priya Singh",
      company: "Digital Dreams",
      review:
        "I was amazed by Discord Arena's innovative approach to digital marketing. Their creative solutions and attention to detail helped us reach new heights. Their customer support is responsive and always ready to assist.",
      icons: <FaRegUser />,
    },
    {
      name: "Alex Johnson",
      company: "Future Tech",
      review:
        "Discord Arena's expertise in SEO and digital strategy is unmatched. They provided customized solutions that fit our specific needs. Their proactive communication and dedication to success set them apart.",
      icons: <FaRegUser />,
    },
    {
      name: "Nisha Rao",
      company: "Brand Builders",
      review:
        "Collaborating with Discord Arena was a pleasure. Their innovative marketing strategies and dedication to client satisfaction were impressive. They consistently delivered high-quality results, making them a trusted partner.",
      icons: <FaRegUser />,
    },
    {
      name: "Mark Thompson",
      company: "NextGen Solutions",
      review:
        "Discord Arena helped us streamline our digital strategies effectively. Their expertise in analytics and data-driven decisions made a significant impact. They are always ahead of the curve with their innovative approaches.",
      icons: <FaRegUser />,
    },
    {
      name: "Kavita Sharma",
      company: "Dynamic Designs",
      review:
        "Choosing Discord Arena was the best decision for our digital campaigns. Their tailored strategies and customer-centric approach yielded impressive results. Their team's creativity and enthusiasm were infectious!",
      icons: <FaRegUser />,
    },
    {
      name: "Lucas Brown",
      company: "Tech Titans",
      review:
        "Discord Arena's comprehensive understanding of digital landscapes made a noticeable difference in our growth. Their commitment to delivering value and understanding our business needs was commendable.",
      icons: <FaRegUser />,
    },
    {
      name: "Meera Kapoor",
      company: "Social Stars",
      review:
        "Discord Arena elevated our social media presence to new levels. Their unique strategies and hands-on approach were exactly what we needed. I appreciate their dedication to continuous improvement and client success.",
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
      <Head>
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
      </Head>
      <div className="max-w-[1280px] py-12 mx-auto px-4">
        <div className="flex justify-between items-center">
          <b className="sm:text-3xl text-2xl">Our Happy Customers</b>
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
                <div>
                  <b className="text-xl font-semibold">{comment.name}</b>
                  <br />
                  <b className="opacity-75">{comment.company}</b>
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
