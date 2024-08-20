"use client";
import React from "react";
import discordData from "../../../../dataFolder/discord.json";
import { usePathname } from "next/navigation";
import { FaDiscord } from "react-icons/fa";
import Link from "next/link";
import { Actor } from "next/font/google";
import Head from "next/head";
import Footer from "@/components/Footer";

const actor = Actor({ weight: "400", subsets: ["latin"] });

export const reviews = [
  {
    name: "Ajay Verma",
    rating: 5,
    comment:
      "The customer service is top-notch, with impressively quick response times—often within a few hours. Logging in is incredibly straightforward and hassle-free. I'm really impressed!",
  },
  {
    name: "Sarah Davis",
    rating: 4,
    comment: "SUPER FAST DELIVERY man i highly recommend",
  },
  {
    name: "William Moore",
    rating: 5,
    comment:
      "Incredible service! They were extremely helpful and fast. No need to worry—I received assistance in minutes and had my product in seconds.",
  },
];

// export const generateMetadata = ({ data, reviews }) => {
//   const calculateAverageRating = (reviews) => {
//     if (reviews.length === 0) return 0;
//     const totalRatings = reviews.reduce(
//       (sum, review) => sum + review.rating,
//       0
//     );
//     return totalRatings / reviews.length;
//   };

//   const jsonLdScript = {
//     "@context": "https://schema.org",
//     "@type": "Product",
//     name: "Discord aged Account",
//     image: "https://example.com/photos/1x1/photo.jpg",
//     description: data.introduction,
//     brand: {
//       "@type": "Thing",
//       name: "Discord",
//     },
//     aggregateRating: {
//       "@type": "AggregateRating",
//       ratingValue: calculateAverageRating(reviews).toString(),
//       reviewCount: reviews.length.toString(),
//     },
//     offers: {
//       "@type": "Offer",
//       url: data.link,
//       priceCurrency: "USD",
//       price: data.price,
//       priceValidUntil: "2025-12-31",
//       availability: "https://schema.org/InStock",
//       seller: {
//         "@type": "Organization",
//         name: "Your Website Name",
//       },
//     },
//   };

//   return {
//     title: `Buy ${data.year} Discord Accounts (Aged) | Discord Arena`,
//     description: data.introduction,
//     openGraph: {
//       title: data.name,
//       description: data.introduction,
//       images: [
//         {
//           url: "https://example.com/photos/1x1/photo.jpg",
//           alt: data.name,
//         },
//       ],
//       url: data.link,
//       type: "website",
//       siteName: "Your Website Name",
//     },
//     twitter: {
//       title: data.name,
//       description: data.introduction,
//       images: ["https://example.com/photos/1x1/photo.jpg"],
//       card: "summary_large_image",
//     },
//     other: {
//       "application-ld+json": JSON.stringify(jsonLdScript),
//     },
//   };
// };

const Page = () => {
  const pathname = usePathname();
  const title = pathname.split("/").pop();
  let id;
  for (let i = 0; i < discordData.length; i++) {
    if (discordData[i].name.toLowerCase() == title.split("-").join(" ")) {
      id = i;
      break;
    }
  }

  const data = discordData[id];

  function calculateAverageRating(reviews) {
    if (reviews.length === 0) return 0; // Return 0 if there are no reviews
    const totalRating = reviews.reduce((acc, curr) => acc + curr.rating, 0);
    return (totalRating / reviews.length).toFixed(1); // Return the average rating rounded to 1 decimal place
  }

  return (
    <div className={actor.className}>
      <noscript>
        <iframe
          src="https://www.googletagmanager.com/ns.html?id=GTM-KM5VZD9Z"
          height="0"
          width="0"
          style={{ display: "none", visibility: "hidden" }}
        ></iframe>
      </noscript>
      <div className="min-h-[100vh] w-[100%] bg-[#121212] text-white">
        <div className="mx-auto max-w-[800px] px-7 pb-12 pt-[100px]">
          <p className="mx-auto  text-2xl sm:text-3xl md:text-4xl">
            Buy {data.year} {data.type} Aged Discord Accounts
          </p>
          <div className="my-7 h-[1px] bg-[#fff]"></div>
          <p className="text-[15px] opacity-80 md:text-[1.15rem] mb-3">
            Buy {data.year} Discord accounts at cheap prices here on Discord
            Arena.
          </p>
          <p className="mb-3 mt-5 text-2xl font-semibold">
            Buy {data.year} Discord Account{" "}
          </p>
          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 mt-3">
            <div className="flex h-[200px] w-[100%] items-center justify-center rounded-[10px] border-[1px] border-[#fff] text-3xl">
              <FaDiscord size={100} className="dance text-[#A5A6F6]" />
            </div>
            <div>
              <p className="mb-5 text-2xl">
                Buy cheap {data.year} Discord Account{" "}
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
          <div className="mt-4 flex gap-5 mb-7">
            <span className="flex flex-1 items-center justify-center rounded-md bg-[#00C89D] px-3 py-[10px]  text-xl font-bold  text-black ">
              ${data.price}
            </span>
            <Link
              href={data.link}
              target="_blank"
              className="flex-[3] text-center justify-center items-center rounded-md bg-[#F6EBFF] px-3  py-[10px] text-xl  font-bold text-black"
            >
              Purchase
            </Link>
          </div>
          {/* <p className="mb-3 mt-7 text-2xl">
            Cheap {data.year} {data.type} accounts
          </p>
          <p className="text-[16px] opacity-85 mb-4">{data.introduction}</p> */}

          <p className="mb-3 mt-5 text-2xl font-semibold">
            Features and benefits of used discord accounts - {data.year}
          </p>

          <div className="grid grid-cols-1 gap-4 md:grid-cols-3 mt-3 mb-4">
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

          <h2 className="mb-3 mt-5 text-2xl font-semibold">
            Customer Testimonials
          </h2>
          <div className="mt-7 grid grid-cols-1 gap-8 md:grid-cols-2 mb-4">
            {reviews.map((item, index) => {
              return (
                <div
                  key={index}
                  className="relative rounded-md border-[1px] p-4"
                >
                  <p className="absolute top-[-18px] w-fit rounded-lg bg-[#00C9A7] px-3 py-1">
                    {item.name}
                  </p>
                  <p className="mb-3 mt-4">
                    <span className="rounded-sm bg-[#4D8076] px-3 py-1 font-semibold">
                      Rating
                    </span>{" "}
                    : <span>{item.rating}</span>
                  </p>
                  <p className="text-[14px] opacity-80">{item.comment}</p>
                </div>
              );
            })}
          </div>

          <h2 className="mb-3 mt-5 text-2xl font-semibold">
            FAQs related to aged Discord Accounts - {data.year}
          </h2>
          <div>
            {data.faq.map((item, index) => {
              return (
                <details key={index} className="mb-5 opacity-80">
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
