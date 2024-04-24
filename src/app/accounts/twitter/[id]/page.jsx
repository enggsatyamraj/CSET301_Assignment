"use client";
import React from "react";
import discordData from "../../../../dataFolder/twitter.json";
import { usePathname } from "next/navigation";
import { FaXTwitter } from "react-icons/fa6";
import Link from "next/link";
import { Actor } from "next/font/google";
import Head from "next/head";
import Footer from "@/components/Footer";

const actor = Actor({ weight: "400", subsets: ["latin"] });

const Page = () => {
  const pathname = usePathname();
  const id = pathname.split("/")[3];
  const data = discordData[id - 1];
  const reviews = [
    {
      name: "John Doe",
      rating: 5,
      comment:
        "I purchased a twitter Account and have been extremely satisfied with the features and benefits it offers. The boosted servers and active Nitro subscription have significantly enhanced my twitter experience, and the ownership of popular servers has allowed me to connect with a large and engaged community. Overall, I highly recommend 2016 twitter Accounts to anyone looking to elevate their twitter experience.",
    },
    {
      name: "Jane Smith",
      rating: 4,
      comment:
        "I recently bought a twitter Account and have been impressed with the verified account and boosted servers. The active Nitro subscription has also provided me with exclusive perks and benefits, making it a valuable investment. The integration of useful bots has further improved the functionality and automation of my twitter experience. I would definitely recommend 2016 twitter Accounts to others.",
    },
    {
      name: "Alex Johnson",
      rating: 5,
      comment:
        "I've been using a twitter Account for a while now, and it has exceeded my expectations. The verified account and boosted servers have been essential for managing and growing my server, and the active Nitro subscription has provided me with custom emojis and animated avatars. The ownership of popular servers has allowed me to connect with a large and active community, and the integration of useful bots has enhanced the overall user experience. I highly recommend 2016 twitter Accounts to anyone looking for a premium twitter experience.",
    },
  ];
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
          style={{ display: 'none', visibility: 'hidden' }}
        ></iframe>
      </noscript>

      <Head>
        <title>
          Buy {data.year} {data.type} Accounts - {data.discountPercentage}%
          Discount | Twitter Accounts | Discord Arena
        </title>
        <meta
          name="description"
          content={`Buy your Twitter accounts here on Twitter Accounts. Simply buy Twitter account from here with a decent price. Interested members will contact me on Twitter or Telegram.`}
        />
        <meta
          name="keywords"
          content="Twitter, accounts, purchase, discount, buy, sale"
        />
        <meta
          property="og:title"
          content={`Buy ${data.year} ${data.type} Accounts - ${data.discountPercentage}% Discount | Twitter Accounts`}
        />
        <meta
          property="og:description"
          content={`Buy your Twitter accounts here on Twitter Accounts. Simply buy Twitter account from here with a decent price. Interested members will contact me on Twitter or Telegram.`}
        />
        <meta property="og:type" content="website" />
        <meta
          property="og:url"
          content={`https://yourwebsite.com/twitter-accounts/${id}`}
        />
        <meta
          property="og:image"
          content="https://yourwebsite.com/twitter-thumbnail.jpg"
        />
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content={`Buy ${data.year} ${data.type} Accounts - ${data.discountPercentage}% Discount | Twitter Accounts`}
        />
        <meta
          name="twitter:description"
          content={`Buy your Twitter accounts here on Twitter Accounts. Simply buy Twitter account from here with a decent price. Interested members will contact me on Twitter or Telegram.`}
        />
        <meta
          name="twitter:image"
          content="https://yourwebsite.com/twitter-thumbnail.jpg"
        />
        <script type="application/ld+json">
          {`
      {
        "@context": "http://schema.org",
        "@type": "Product",
        "name": "${data.year} ${data.type} Accounts",
        "description": "Buy your Twitter accounts here on Twitter Accounts. Simply buy Twitter account from here with a decent price. Interested members will contact me on Twitter or Telegram.",
        "brand": {
          "@type": "Organization",
          "name": "Twitter Accounts"
        },
        "offers": {
          "@type": "Offer",
          "priceCurrency": "USD",
          "price": "${data.price}",
          "availability": "http://schema.org/InStock",
          "url": "https://yourwebsite.com/twitter-accounts/${id}",
          "seller": {
            "@type": "Organization",
            "name": "YoYoHoni"
          }
        },
        "aggregateRating": {
          "@type": "AggregateRating",
          "ratingValue": "${calculateAverageRating(reviews)}",
          "reviewCount": "${reviews.length}"
        }
      }
    `}
        </script>
      </Head>
      <div className="min-h-[100vh] w-[100%] bg-[#121212] text-white">
        <div className="mx-auto max-w-[800px] px-7 pb-12 pt-[100px]">
          <p className="mx-auto  text-2xl sm:text-3xl md:text-4xl">
            Buy {data.year} {data.type} Accounts for sale-
            {data.discountPercentage}% Discount Buy Now
          </p>
          <div className="my-7 h-[1px] bg-[#fff]"></div>
          <p className="text-[15px] opacity-80 md:text-[1.15rem] mb-3">
            Buy {data.year} Twitter accounts at cheap prices here on Discord
            Arena.
          </p>
          <b className="mb-3 mt-5 text-2xl font-semibold">
            Buy {data.year} Twitter Account{" "}
          </b>
          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 mt-3">
            <div className="flex h-[200px] w-[100%] items-center justify-center rounded-[10px] border-[1px] border-[#fff] text-3xl">
              <FaXTwitter size={100} className="dance text-[#A5A6F6]" />
            </div>
            <div>
              <p className="mb-3 text-2xl">
                Buy cheap {data.year} Twitter Account{" "}
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
          <div className="mt-4 flex gap-5 mb-4">
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
          <p className="text-[16px] opacity-85">{data.introduction}</p> */}

          <br />

          <b className="mb-3 mt-5 text-2xl font-semibold">
            Features and benefits of used twitter accounts - {data.year}
          </b>

          <div className="grid grid-cols-1 gap-4 md:grid-cols-3 mt-3">
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

          <br />

          {/* <div>
            {data.questionAnswerArray.map((item, index) => {
              return (
                <div key={index}>
                  <b className="mb-3 mt-5 text-2xl ">{item.question}</b>
                  <p className="opacity-80">{item.answer}</p>
                </div>
              );
            })}
          </div> */}

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
                  <b className="absolute top-[-18px] w-fit rounded-lg bg-[#00C9A7] px-3 py-1">
                    {item.name}
                  </b>
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

          <h2 className=" mt-5 mb-3 text-2xl font-semibold">
            FAQs related to Twitter Accounts - {data.year}
          </h2>
          <div className="mt-3">
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
        <Footer />
      </div>
    </div>
  );
};

export default Page;
