"use client";
import Head from "next/head";
import React, { useState } from "react";
import { FaRegUser } from "react-icons/fa";
import { MdKeyboardArrowRight } from "react-icons/md";
import { MdKeyboardArrowLeft } from "react-icons/md";

const CustomerReview = () => {
  const commentArray = [
    {
      name: "Emily Johnson",
      company: "Digital Impact",
      review:
        "Discord Arena exceeded my expectations! Their expertise and innovative strategies played a vital role in enhancing my brand's visibility. The transparent pricing and personalized attention showcased their commitment to customer satisfaction. Highly recommended!",
      icons: <FaRegUser />,
    },
    {
      name: "Michael Smith",
      company: "Tech Marvels",
      review:
        "I had a fantastic experience with Discord Arena. Their quality assurance is unmatched, ensuring reliable solutions for my digital projects. The team's constant innovation and adaptation to trends kept my strategies ahead of the curve. Transparent pricing is a cherry on top!",
      icons: <FaRegUser />,
    },
    {
      name: "Sophia Brown",
      company: "Innovate Hub",
      review:
        "Discord Arena truly understands the uniqueness of each business. Their tailored solutions, including keyword optimization and data-driven approaches, gave my business the boost it needed. The team's dedication to customer satisfaction is evident in every interaction.",
      icons: <FaRegUser />,
    },
    {
      name: "Daniel Miller",
      company: "Epic Ventures",
      review:
        "Working with Discord Arena was a game-changer. Their commitment to innovation and staying ahead of the curve made a significant impact on my business. The transparent pricing and top-notch quality assurance add immense value to their services.",
      icons: <FaRegUser />,
    },
    {
      name: "Ava Thompson",
      company: "Social Boosters",
      review:
        "Discord Arena delivered exceptional results! The team's expertise and insights, coupled with a data-driven approach, significantly improved my social media strategy. Their transparent pricing model reflects honesty and integrity in their services.",
      icons: <FaRegUser />,
    },
    {
      name: "Oliver Davis",
      company: "Digital Dynamics",
      review:
        "I highly recommend Discord Arena for their outstanding services. Their tailored solutions and keyword optimization strategies have had a positive impact on my business. The team's dedication to customer satisfaction sets them apart in the digital arena.",
      icons: <FaRegUser />,
    },
    {
      name: "Emma Wilson",
      company: "Creative Minds",
      review:
        "Discord Arena is a reliable partner for any digital endeavor. Their constant innovation and transparent pricing make them stand out. The team's personalized attention and prompt support ensure a positive and satisfying experience.",
      icons: <FaRegUser />,
    },
    {
      name: "Liam Turner",
      company: "Tech Revolution",
      review:
        "Choosing Discord Arena was a strategic decision for my business. Their expertise and commitment to staying ahead of the curve kept my strategies cutting-edge. The transparent pricing and quality assurance instill confidence in their services.",
      icons: <FaRegUser />,
    },
    {
      name: "Zoe Baker",
      company: "Innovative Creations",
      review:
        "Discord Arena offers top-notch solutions tailored to the unique needs of each business. Their keyword optimization strategies and data-driven approaches significantly impacted my online presence. The team's dedication to customer satisfaction is commendable.",
      icons: <FaRegUser />,
    },
    {
      name: "William Martin",
      company: "Digital Mavericks",
      review:
        "I'm impressed with Discord Arena's transparent pricing and quality assurance. Their tailored solutions, including keyword optimization, have proven to be effective in boosting my brand's visibility. The team's expertise is unmatched!",
      icons: <FaRegUser />,
    },
    {
      name: "Grace White",
      company: "Social Sparks",
      review:
        "Discord Arena delivered outstanding results for my social media strategy. Their innovative approaches and commitment to customer satisfaction make them a trusted partner. Transparent pricing and quality assurance set them apart in the digital landscape.",
      icons: <FaRegUser />,
    },
    {
      name: "Ethan Adams",
      company: "Tech Visionaries",
      review:
        "Working with Discord Arena was a fantastic experience. Their constant innovation and tailored solutions, including keyword optimization, significantly impacted my business. The team's dedication to customer satisfaction is truly commendable.",
      icons: <FaRegUser />,
    },
    {
      name: "Chloe Turner",
      company: "Creative Horizons",
      review:
        "Discord Arena is my go-to for digital solutions. Their transparent pricing, quality assurance, and tailored strategies have consistently delivered exceptional results. The team's expertise and commitment to innovation make them a valuable partner.",
      icons: <FaRegUser />,
    },
    {
      name: "Noah Harris",
      company: "Digital Pioneers",
      review:
        "Discord Arena stands out in the digital landscape with their innovative strategies and transparent pricing. Their tailored solutions, including keyword optimization, have positively impacted my business. The team's dedication to excellence is evident.",
      icons: <FaRegUser />,
    },
    {
      name: "Mia Johnson",
      company: "Social Trailblazers",
      review:
        "I'm thrilled with the results Discord Arena delivered for my social media strategy. Their expertise, transparent pricing, and commitment to customer satisfaction make them a trusted partner. I highly recommend their services!",
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
        <div className="mt-10 md:grid md:grid-cols-2 md:gap-4">
          <div className="bg-[#1F1F1F] mx-auto p-6 rounded-lg border-[1px] mb-4">
            <div className="flex items-center gap-4">
              {commentArray[index].icons}
              <div>
                <b className="text-xl font-semibold">
                  {commentArray[index].name}
                </b>
                <br/>
                <b className="opacity-75">{commentArray[index].company}</b>
              </div>
            </div>
            <p className="mt-4">{commentArray[index].review}</p>
          </div>

          <div className="bg-[#1F1F1F] hidden md:block mx-auto p-6 rounded-lg border-[1px] mb-4">
            <div className="flex items-center gap-4">
              {
                commentArray[index === commentArray.length - 1 ? 0 : index + 1]
                  .icons
              }
              <div>
                <b className="text-xl font-semibold">
                  {
                    commentArray[
                      index === commentArray.length - 1 ? 0 : index + 1
                    ].name
                  }
                </b>
                <br/>
                <b className="opacity-75">
                  {
                    commentArray[
                      index === commentArray.length - 1 ? 0 : index + 1
                    ].company
                  }
                </b>
              </div>
            </div>
            <p className="mt-4">
              {
                commentArray[index === commentArray.length - 1 ? 0 : index + 1]
                  .review
              }
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CustomerReview;
