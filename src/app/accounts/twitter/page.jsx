"use client";
import React from "react";
import { Actor } from "next/font/google";
import TwitterData from "../../../dataFolder/twitter.json";
import { FaXTwitter } from "react-icons/fa6";
import Link from "next/link";
import Head from "next/head";
import Footer from "@/components/Footer";

const actor = Actor({ weight: "400", subsets: ["latin"] });

const jsonLdScript = {
  "@context": "https://schema.org/",
  "@type": "ItemList",
  itemListElement: TwitterData.map((item, index) => {
    return {
      "@type": "Product",
      position: index + 1,
      name: item.name,
      description: item.introduction,
      sku: `Twitter-${item.id}`,
      image: "URL_TO_IMAGE", // Replace with the actual URL of your product image
      offers: {
        "@type": "Offer",
        priceCurrency: "USD",
        price: item.price,
        itemCondition: "https://schema.org/NewCondition", // You can adjust this based on your condition
        availability: "https://schema.org/InStock", // Adjust based on availability
        seller: {
          "@type": "Organization",
          name: "Twitter Arena",
        },
      },
      brand: {
        "@type": "Organization",
        name: "Twitter Arena",
      },
      // aggregateRating: {
      //   "@type": "AggregateRating",
      //   ratingValue:
      //     item.reviews.reduce((total, review) => total + review.rating, 0) /
      //     item.reviews.length,
      //   reviewCount: item.reviews.length,
      // },
      // review: item.reviews.map((review) => {
      //   return {
      //     "@type": "Review",
      //     author: review.name,
      //     reviewRating: {
      //       "@type": "Rating",
      //       ratingValue: review.rating,
      //     },
      //     reviewBody: review.comment,
      //   };
      // }),
    };
  }),
};

const page = () => {
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
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta
          name="description"
          content="Elevate your Twitter experience with premium accounts from Twitter Arena. Explore exclusive features, boosted servers, and more."
        />
        <meta
          name="keywords"
          content="Twitter, Twitter accounts, Premium accounts, Boosted servers, Pro subscription"
        />
        <meta name="author" content="Twitter Arena" />

        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.twitterarena.com/" />
        <meta
          property="og:title"
          content="Twitter Arena - Premium Twitter Accounts"
        />
        <meta
          property="og:description"
          content="Elevate your Twitter experience with premium accounts from Twitter Arena. Explore exclusive features, boosted servers, and more."
        />
        <meta property="og:image" content="URL_TO_YOUR_LOGO_IMAGE" />
        <meta property="og:image:alt" content="Twitter Arena Logo" />

        {/* Twitter */}
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://www.twitterarena.com/" />
        <meta
          property="twitter:title"
          content="Twitter Arena - Premium Twitter Accounts"
        />
        <meta
          property="twitter:description"
          content="Elevate your Twitter experience with premium accounts from Twitter Arena. Explore exclusive features, boosted servers, and more."
        />
        <meta property="twitter:image" content="URL_TO_YOUR_LOGO_IMAGE" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdScript) }}
        />
      </Head>
      <div className="bg-[#121212] text-[#fff] min-h-[100vh] sm:px-12 px-7 pb-6 pt-[100px]">
        <div className="max-w-[1000px] mx-auto">
          {/* hero section */}
          {/* <button
            onClick={() => {
              window.history.back();
            }}
            className="border-[1px] px-3 py-1 rounded-lg"
          >
            Go Back
          </button> */}
          <div className="min-h-[400px] flex flex-col justify-center ">
            <h1 className="text-3xl md:text-4xl font-semibold mb-2 lg:w-[60%] md:w-[70%]">
              Elevate Your Tweets with Premium Twitter Accounts
            </h1>
            <b className="lg:text-2xl text-[22px] mb-4 lg:w-[50%] opacity-90 md:w-[60%] sm:w-[80%]">
              Unlock Exclusive Features and Verified Profiles for a Impactful
              Twitter Presence
            </b>
            <p className="text-[#dcdcdc] lg:w-[60%] md:w-[70%] text-[17px] sm:w-[80%] opacity-80">
              Welcome to a collection of premium Twitter accounts designed to
              elevate your social media impact. Boost your profile&apos;s
              credibility with verified accounts, unlock exclusive features, and
              make a mark with custom handles. Your gateway to a seamless,
              enriched, and personalized Twitter adventure is here. Explore the
              possibilities and redefine your online presence in the
              Twitterverse!
            </p>
          </div>
          <div className="min-h-[500px] py-12">
            <b className="text-[1.5rem] md:text-[1.75rem] font-semibold mb-2">
              Shop Twitter Accounts
            </b>
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 ">
              {TwitterData.map((item, index) => {
                return (
                  <div
                    key={item.id}
                    className={`border-[1px] h-fit overflow-hidden rounded-md p-4`}
                  >
                    <div className="flex h-[150px] w-[100%] items-center justify-center rounded-sm bg-[#BBA8FD]">
                      <FaXTwitter
                        size={50}
                        className="accountDance text-[#8474C4]"
                      />
                    </div>

                    <p className="my-3 text-[14px] font-semibold tracking-widest sm:text-[15px]">
                      Buy{" "}
                      <span className="rounded-sm bg-[#F6EBFF] px-3 py-1 text-black">
                        {item.year}
                      </span>{" "}
                      Twitter Accounts for ${item.price}
                    </p>
                    <ul className="list-disc pl-4 text-[13px] opacity-85">
                      <li>{item.smallShowFiveFeatures.feature1}</li>
                      <li>{item.smallShowFiveFeatures.feature2}</li>
                      <li>{item.smallShowFiveFeatures.feature3}</li>
                      <li>{item.smallShowFiveFeatures.feature4}</li>
                      <li>{item.smallShowFiveFeatures.feature5}</li>
                    </ul>
                    <div className="mt-5 flex items-center gap-3">
                      <Link
                        href={`/accounts/twitter/${item.id}`}
                        className="rounded-md bg-[#00C89D] px-4 py-1 font-semibold"
                      >
                        Info
                      </Link>
                      <Link
                        target="_blank"
                        href={item.link}
                        className="rounded-md bg-[#00C89D] px-4 py-1 font-semibold "
                      >
                        Buy
                      </Link>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default page;
