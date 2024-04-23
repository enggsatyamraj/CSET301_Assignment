"use client";
import React from "react";
import { Actor } from "next/font/google";
import discordData from "../../../dataFolder/discord.json";
import { FaDiscord } from "react-icons/fa";
import Link from "next/link";
import Head from "next/head";
import Footer from "@/components/Footer";

const actor = Actor({ weight: "400", subsets: ["latin"] });

const jsonLdScript = {
  "@context": "https://schema.org/",
  "@type": "ItemList",
  itemListElement: discordData.map((item, index) => {
    // Check if item.reviews is an array with length greater than 0
    const hasReviews = Array.isArray(item.reviews) && item.reviews.length > 0;

    return {
      "@type": "Product",
      position: index + 1,
      name: item.name,
      description: item.introduction,
      sku: `Discord-${item.id}`,
      image: "URL_TO_IMAGE", // Replace with the actual URL of your product image
      offers: {
        "@type": "Offer",
        priceCurrency: "USD",
        price: item.price,
        itemCondition: "https://schema.org/NewCondition", // You can adjust this based on your condition
        availability: "https://schema.org/InStock", // Adjust based on availability
        seller: {
          "@type": "Organization",
          name: "Discord Arena",
        },
      },
      brand: {
        "@type": "Organization",
        name: "Discord Arena",
      },
      aggregateRating: hasReviews
        ? {
            "@type": "AggregateRating",
            ratingValue:
              item.reviews.reduce((total, review) => total + review.rating, 0) /
              item.reviews.length,
            reviewCount: item.reviews.length,
          }
        : undefined,
      review: hasReviews
        ? item.reviews.map((review) => {
            return {
              "@type": "Review",
              author: review.name,
              reviewRating: {
                "@type": "Rating",
                ratingValue: review.rating,
              },
              reviewBody: review.comment,
            };
          })
        : undefined,
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
          style="display:none;visibility:hidden"
        ></iframe>
      </noscript>

      <Head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta
          name="description"
          content="Elevate your Discord experience with premium accounts from Discord Arena. Explore exclusive features, boosted servers, and more."
        />
        <meta
          name="keywords"
          content="Discord, Discord accounts, Premium accounts, Boosted servers, Nitro subscription"
        />
        <meta name="author" content="Discord Arena" />

        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.discordarena.com/" />
        <meta
          property="og:title"
          content="Discord Arena - Premium Discord Accounts"
        />
        <meta
          property="og:description"
          content="Elevate your Discord experience with premium accounts from Discord Arena. Explore exclusive features, boosted servers, and more."
        />
        <meta property="og:image" content="URL_TO_YOUR_LOGO_IMAGE" />
        <meta property="og:image:alt" content="Discord Arena Logo" />

        {/* Twitter */}
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://www.discordarena.com/" />
        <meta
          property="twitter:title"
          content="Discord Arena - Premium Discord Accounts"
        />
        <meta
          property="twitter:description"
          content="Elevate your Discord experience with premium accounts from Discord Arena. Explore exclusive features, boosted servers, and more."
        />
        <meta property="twitter:image" content="URL_TO_YOUR_LOGO_IMAGE" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdScript) }}
        />
      </Head>
      <div className="bg-[#121212] text-[#fff] min-h-[100vh] sm:px-12 px-7 pb-6 pt-[100px]">
        <div className="max-w-[1000px] mx-auto">
          <div className="min-h-[400px] flex flex-col justify-center ">
            <h1 className="text-3xl md:text-4xl font-semibold mb-2">
              Buy Discord Accounts
            </h1>
            <b className="lg:text-2xl text-[22px] mb-4 lg:w-[50%] opacity-90 md:w-[60%] sm:w-[80%]">
              Elevate Your Discord Experience with Premium Accounts
            </b>
            <p className="text-[#dcdcdc] lg:w-[60%] md:w-[70%] text-[17px] sm:w-[80%] opacity-80">
              Welcome to the ultimate destination for enhancing your Discord
              journey! Dive into a world of premium Discord accounts
              meticulously crafted to elevate your communication, server
              management, and overall Discord experience. Unleash exclusive
              features, boost your server&apos;s credibility with verified
              accounts, and stand out with custom handles. Our Discord accounts
              page is your gateway to a seamless, enriched, and personalized
              Discord adventure. Explore the possibilities and redefine your
              online presence in the Discord Arena!
            </p>
          </div>
          <div className="min-h-[500px] py-12">
            <b className="text-[1.5rem] md:text-[1.75rem] font-semibold mb-2">
              Shop Discord Accounts
            </b>
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 ">
              {discordData.map((item, index) => {
                return (
                  <div
                    key={item.id}
                    className={`border-[1px] h-fit overflow-hidden rounded-md p-4`}
                  >
                    <div className="flex h-[150px] w-[100%] items-center justify-center rounded-sm bg-[#BBA8FD]">
                      <FaDiscord
                        size={50}
                        className="accountDance text-[#8474C4]"
                      />
                    </div>

                    <p className="my-3 text-[14px] font-semibold tracking-widest sm:text-[15px]">
                      Buy{" "}
                      <span className="rounded-sm bg-[#F6EBFF] px-3 py-1 text-black">
                        {item.year}
                      </span>{" "}
                      Discord Account for ${item.price}
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
                        href={`/accounts/discord/${item.id}`}
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
