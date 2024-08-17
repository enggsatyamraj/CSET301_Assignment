// import Head from "next/head";
// import React, { useState } from "react";

// import { MdKeyboardArrowRight, MdKeyboardArrowLeft } from "react-icons/md";
// import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
// import { Carousel } from "react-responsive-carousel";

// const CustomerReview = () => {
//   const commentArray = [
//     {
//       name: "Rajesh Verma",
//       company: "Tech Innovators",
//       review:
//         "Working with Discord Arena was a truly rewarding experience. Their innovative strategies and in-depth market analysis transformed our approach. We saw a notable improvement in engagement and overall results. They are a team of true professionals.",
//       icons: <FaRegUser />,
//     },
//     {
//       name: "Anjali Mehta",
//       company: "Creative Sparks",
//       review:
//         "Discord Arena has been a fantastic partner in enhancing our digital presence. Their tailored solutions and keen insights into user behavior have driven impressive results. Their proactive support and expertise are second to none.",
//       icons: <FaRegUser />,
//     },
//     {
//       name: "David Lee",
//       company: "Visionary Ventures",
//       review:
//         "Our collaboration with Discord Arena has been nothing short of exceptional. Their strategic guidance and thorough execution have led to significant improvements in our online performance. Their commitment to our success was evident throughout.",
//       icons: <FaRegUser />,
//     },
//     {
//       name: "Priya Singh",
//       company: "Digital Dreams",
//       review:
//         "Discord Arena’s innovative approach has made a real difference in our digital marketing efforts. Their creative strategies and focus on detail helped us achieve our goals effectively. Their customer service is always prompt and helpful.",
//       icons: <FaRegUser />,
//     },
//     {
//       name: "William Moore",
//       company: "Future Tech",
//       review:
//         "We were thoroughly impressed with Discord Arena’s expertise in digital strategy. They provided us with customized solutions that addressed our specific needs. Their dedication and clear communication made the entire process smooth and successful.",
//       icons: <FaRegUser />,
//     },
//     {
//       name: "Nisha Rao",
//       company: "Brand Builders",
//       review:
//         "Our experience with Discord Arena has been outstanding. Their fresh marketing strategies and dedication to excellence set them apart. They consistently delivered high-quality results and demonstrated a genuine commitment to our success.",
//       icons: <FaRegUser />,
//     },
//     {
//       name: "Mark Thompson",
//       company: "NextGen Solutions",
//       review:
//         "Discord Arena’s expertise in data-driven decision making greatly enhanced our digital strategies. Their innovative approach and analytical skills provided us with valuable insights and led to measurable improvements in our campaigns.",
//       icons: <FaRegUser />,
//     },
//     {
//       name: "Kavita Sharma",
//       company: "Dynamic Designs",
//       review:
//         "Choosing Discord Arena was a game-changer for our digital marketing. Their customized strategies and enthusiastic approach led to impressive results. Their team's creativity and dedication were evident in every project.",
//       icons: <FaRegUser />,
//     },
//     {
//       name: "Lucas Brown",
//       company: "Tech Titans",
//       review:
//         "Discord Arena's thorough understanding of digital marketing helped us significantly boost our online presence. Their proactive approach and dedication to understanding our needs were greatly appreciated. Highly recommended for any digital strategy needs.",
//       icons: <FaRegUser />,
//     },
//     // {
//     //   name: "Meera Kapoor",
//     //   company: "Social Stars",
//     //   review:
//     //     "Discord Arena's innovative strategies elevated our social media game. Their hands-on approach and commitment to continuous improvement were exactly what we needed. Their dedication to client success was evident in every interaction.",
//     //   icons: <FaRegUser />,
//     // },
//   ];

//   const [index, setIndex] = useState(0);
//   const length = commentArray.length;
//   const handlePrevious = () => {
//     const newIndex = index - 1;
//     setIndex(newIndex < 0 ? length - 1 : newIndex);
//   };

//   const handleNext = () => {
//     const newIndex = index + 1;
//     setIndex(newIndex >= length ? 0 : newIndex);
//   };

//   return (
//     <div className="bg-[#121212] text-white">
//       {/* <Head>
//         <title>Customer Reviews | Discord Arena</title>
//         <meta
//           name="description"
//           content="Read what our customers say about Discord Arena. Discover how our expertise, transparent pricing, and innovative strategies have made a positive impact on businesses."
//         />
//         <meta name="author" content="Discord Arena" />
//         <script
//           type="application/ld+json"
//           dangerouslySetInnerHTML={{
//             __html: JSON.stringify({
//               "@context": "https://schema.org",
//               "@type": "Organization",
//               name: "Discord Arena",
//               url: "https://www.discordarena.com/",
//               logo: "URL_TO_YOUR_LOGO",
//               contactPoint: {
//                 "@type": "ContactPoint",
//                 telephone: "+1-123-456-7890",
//                 contactType: "Customer service",
//               },
//             }),
//           }}
//         />
//       </Head> */}
//       <div className="max-w-[1280px] py-12 mx-auto px-4">
//         <div className="flex justify-between items-center">
//           <p className="sm:text-3xl text-2xl">Our Happy Customers</p>
//           <div className="flex gap-3">
//             <MdKeyboardArrowLeft
//               onClick={handlePrevious}
//               className="text-[#A5A6F6] sm:text-5xl text-3xl border-2 rounded-lg border-[#A5A6F6] cursor-pointer"
//             />
//             <MdKeyboardArrowRight
//               onClick={handleNext}
//               className="text-[#A5A6F6] sm:text-5xl text-3xl border-2 rounded-lg border-[#A5A6F6] cursor-pointer"
//             />
//           </div>
//         </div>
//         <Carousel
//           autoPlay={true}
//           emulateTouch={true}
//           infiniteLoop={true}
//           showArrows={false}
//           showThumbs={false}
//           showIndicators={false}
//           selectedItem={index}
//           onChange={(index) => setIndex(index)}
//         >
//           {commentArray.map((comment, idx) => (
//             <div
//               key={idx}
//               className="bg-[#1F1F1F] mx-auto p-6 mt-5 pb-4 rounded-lg border-[1px] mb-4"
//             >
//               <div className="flex items-center gap-4">
//                 {comment.icons}
//                 <div className="flex flex-col items-start">
//                   <p className="text-xl font-semibold">{comment.name}</p>
//                   {/* <br /> */}
//                   <p className="opacity-75">{comment.company}</p>
//                 </div>
//               </div>
//               <p className="mt-4">{comment.review}</p>
//             </div>
//           ))}
//         </Carousel>
//       </div>
//     </div>
//   );
// };

// export default CustomerReview;

"use client";
import Image from "next/image";
import React from "react";
import Link from "next/link";
import downImage from "../../public/down-arrow.svg";
import { FaStar } from "react-icons/fa";
import { FaStarHalf } from "react-icons/fa";
import { FaRegUser } from "react-icons/fa";

const commentArray = [
  {
    name: "Rajesh Verma",
    company: "Tech Innovators",
    rating: 5,
    review:
      "Working with Discord Arena was a truly rewarding experience. Their innovative strategies and in-depth market analysis transformed our approach. We saw a notable improvement in engagement and overall results. They are a team of true professionals.",
    icons: <FaRegUser size={30} />,
  },
  {
    name: "Anjali Mehta",
    company: "Creative Sparks",
    rating: 4,
    review:
      "Discord Arena has been a fantastic partner in enhancing our digital presence. Their tailored solutions and keen insights into user behavior have driven impressive results. Their proactive support and expertise are second to none.",
    icons: <FaRegUser size={30} />,
  },
  {
    name: "David Lee",
    company: "Visionary Ventures",
    rating: 4.5,
    review:
      "Our collaboration with Discord Arena has been nothing short of exceptional. Their strategic guidance and thorough execution have led to significant improvements in our online performance. Their commitment to our success was evident throughout.",
    icons: <FaRegUser size={30} />,
  },
  {
    name: "Priya Singh",
    company: "Digital Dreams",
    rating: 5,
    review:
      "Discord Arena’s innovative approach has made a real difference in our digital marketing efforts. Their creative strategies and focus on detail helped us achieve our goals effectively. Their customer service is always prompt and helpful.",
    icons: <FaRegUser size={30} />,
  },
  {
    name: "William Moore",
    company: "Future Tech",
    rating: 5,
    review:
      "We were thoroughly impressed with Discord Arena’s expertise in digital strategy. They provided us with customized solutions that addressed our specific needs. Their dedication and clear communication made the entire process smooth and successful.",
    icons: <FaRegUser size={30} />,
  },
  {
    name: "Nisha Rao",
    company: "Brand Builders",
    rating: 4,
    review:
      "Our experience with Discord Arena has been outstanding. Their fresh marketing strategies and dedication to excellence set them apart. They consistently delivered high-quality results and demonstrated a genuine commitment to our success.",
    icons: <FaRegUser size={30} />,
  },
  {
    name: "Mark Thompson",
    company: "NextGen Solutions",
    rating: 4.5,
    review:
      "Discord Arena’s expertise in data-driven decision making greatly enhanced our digital strategies. Their innovative approach and analytical skills provided us with valuable insights and led to measurable improvements in our campaigns.",
    icons: <FaRegUser size={30} />,
  },
  {
    name: "Kavita Sharma",
    company: "Dynamic Designs",
    rating: 5,
    review:
      "Choosing Discord Arena was a game-changer for our digital marketing. Their customized strategies and enthusiastic approach led to impressive results. Their team's creativity and dedication were evident in every project.",
    icons: <FaRegUser size={30} />,
  },
  {
    name: "Lucas Brown",
    company: "Tech Titans",
    rating: 5,
    review:
      "Discord Arena's thorough understanding of digital marketing helped us significantly boost our online presence. Their proactive approach and dedication to understanding our needs were greatly appreciated. Highly recommended for any digital strategy needs.",
    icons: <FaRegUser size={30} />,
  },
];

const CustomerReview = () => {
  return (
    <div className=" bg-[#121212]">
      <div className="max-w-[1280px] mx-auto flex flex-col items-center justify-center text-white">
        <span className="font-bold text-3xl text-center">
          Real users, Real success.
        </span>
        <p className="text-[18px] mt-4 text-center w-[95%] md:w-[80%] lg:w-[70%] opacity-70 mb-12">
          When you choose{" "}
          <Link href={"/"} className="underline underline-offset-4">
            Discord Arena
          </Link>
          , you&lsquo;re joining thousands of satisfied customers
          worldwide—people just like you, boosting their presence with{" "}
          <span className="bg-[#A5A6F6] text-black p-1 rounded">
            {" "}
            premium Discord, Instagram, and YouTube accounts.{" "}
          </span>
        </p>
        <Image src={downImage} alt="image showing down arrow" />

        <div className="grid grid-cols-1 md:grid-cols-2 mt-12 w-full mb-[150px] gap-5 lg:grid-cols-3">
          {commentArray.map((comment, index) => {
            // Get the integer and fractional parts of the rating
            const fullStars = Math.floor(comment.rating);
            const hasHalfStar = comment.rating - fullStars >= 0.5;

            return (
              <div
                key={index}
                className=" flex flex-col border-[1px] border-[#fff] mx-3 py-12 rounded-lg items-center px-3 justify-centerw-full"
              >
                {/* Uncomment this if you want to display icons */}
                {/* <div>{comment.icons}</div> */}

                <span className="text-xl text-center mb-3 font-semibold">
                  {comment.name}
                </span>

                {/* Star rating display */}
                <div className="flex mb-4">
                  {/* Full stars */}
                  {Array(fullStars)
                    .fill(0)
                    .map((_, i) => (
                      <FaStar key={i} size={20} />
                    ))}
                  {/* Half star */}
                  {hasHalfStar && <FaStarHalf size={20} />}
                </div>

                {/* Add other details like review and company here */}
                <span className="text-center text-[18px]">
                  {comment.review}
                </span>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default CustomerReview;
