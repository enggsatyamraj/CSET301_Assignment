import React from "react";
import { Actor } from "next/font/google";
import instagramData from "../../../dataFolder/telegram.json";
import Link from "next/link";
import { FaInstagram } from "react-icons/fa";
import Head from "next/head";
import Footer from "@/components/Footer";
import discord_server_boost from "../../../../public/discord-arena-creatives/server-boost.svg";
import Image from "next/image";

const actor = Actor({ weight: "400", subsets: ["latin"] });
// //console.log(instagramData);

const jsonLdScript = {
  "@context": "https://schema.org",
  "@type": "Product",
  name: "Premium Telegram Accounts",
  description:
    "Buy premium Telegram accounts with verified profiles, real followers, and high engagement. Perfect for Telegram marketing, business growth, and influencer accounts.",
  image: "https://example.com/images/premium-telegram.svg",
  url: "https://yoyohoni.mysellix.io/product/6404d6d693a98",
  offers: {
    "@type": "Offer",
    priceCurrency: "USD",
    price: "50",
    discount: "15%",
    url: "https://yoyohoni.mysellix.io/product/6404d6d693a98",
    availability: "https://schema.org/InStock",
  },
  brand: {
    "@type": "Brand",
    name: "Telegram Arena",
  },
  sku: "telegram-accounts-2018",
  category: "Social Media",
  keywords: ["Buy Telegram accounts", "cheap Telegram accounts", "Telegram accounts for sale", "aged Telegram accounts", "Telegram group members", "buy Telegram followers", "real Telegram accounts", "verified Telegram accounts", "bulk Telegram accounts", "Telegram marketing services"],
  additionalType: "https://schema.org/Service",
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: "4.8",
    reviewCount: "156",
  },
  review: {
    "@type": "Review",
    reviewRating: {
      "@type": "Rating",
      ratingValue: "5",
    },
    author: {
      "@type": "Person",
      name: "John Doe",
    },
    reviewBody:
      "I purchased Premium Telegram Accounts and saw instant growth in my followers and engagement. Highly recommend for Telegram marketing!",
  },
};

// export const generateMetadata = () => {
//   const title = "Buy telegrams | Cheap Discord Boosts";
//   const description =
//     "Get the best server boost packages for Discord. Verified, aged accounts with custom features, perfect for influencers, brands, and marketers.";
//   const keywords =
//     "aged telegram accounts, buy telegram accounts, premium telegram accounts, verified telegram accounts, custom handle telegram accounts, telegram marketing";
//   const author = "Discord Arena";
//   const ogUrl = "https://www.discordarena.com/instagram";
//   const ogImage = "URL_TO_YOUR_LOGO_IMAGE";

//   const jsonLdScript = {
//     "@context": "https://schema.org",
//     "@type": "Organization",
//     url: ogUrl,
//     name: "Discord Arena",
//     logo: ogImage,
//     description: description,
//     sameAs: [
//       "https://www.facebook.com/your-facebook-url",
//       "https://twitter.com/your-twitter-url",
//       "https://www.instagram.com/your-instagram-url",
//       // Add other social media URLs here
//     ],
//   };

//   return {
//     title: title,
//     description: description,
//     keywords: keywords,
//     authors: [{ name: author }],
//     openGraph: {
//       type: "website",
//       url: ogUrl,
//       title: title,
//       description: description,
//       images: [
//         {
//           url: ogImage,
//           alt: "Discord Arena Logo",
//         },
//       ],
//     },
//     twitter: {
//       card: "summary_large_image",
//       url: ogUrl,
//       title: title,
//       description: description,
//       images: [ogImage],
//     },
//     other: {
//       "application-ld+json": JSON.stringify(jsonLdScript),
//     },
//   };
// };

export const generateMetadata = () => {
  return {
    title:
      "Buy Premium Telegram Accounts - Verified & Real Followers | Telegram Arena",
    description:
      "Looking to buy Telegram accounts? Get aged, verified Telegram accounts with real followers, perfect for boosting your Telegram engagement and marketing growth.",
    keywords: [
      "buy Telegram accounts",
      "cheap Telegram accounts",
      "Telegram accounts for sale",
      "aged Telegram accounts",
      "Telegram group members",
      "buy Telegram followers",
      "real Telegram accounts",
      "verified Telegram accounts",
      "bulk Telegram accounts",
      "Telegram marketing services",
      "Telegram engagement boost",
      "buy active Telegram users",
      "Telegram bot accounts",
      "Telegram account growth",
      "Telegram social media services",
      "instant Telegram followers",
      "Telegram business accounts",
      "promote on Telegram",
      "Telegram influencer accounts",
      "Telegram account sellers",
    ],
    openGraph: {
      title:
        "Buy Premium Telegram Accounts - Verified & Real Followers | Telegram Arena",
      description:
        "Premium Telegram accounts for sale! Buy verified, aged Telegram accounts with real followers to boost your marketing and social media engagement.",
      url: "https://yoyohoni.mysellix.io/product/6404d6d693a98",
      images: [
        {
          url: "https://example.com/images/premium-telegram.svg",
          width: 1200,
          height: 630,
          alt: "Premium Telegram Accounts",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title:
        "Buy Premium Telegram Accounts - Verified & Real Followers | Telegram Arena",
      description:
        "Shop verified, aged Telegram accounts with real followers for your business or influencer marketing. Instant Telegram followers and engagement boost!",
      images: ["https://example.com/images/premium-telegram.svg"],
    },
  };
};

const page = () => {
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
      <div className="bg-[#121212] text-[#fff] min-h-[100vh] sm:px-12 px-7 pb-6 pt-[150px]">
        <div className="max-w-[1000px] mx-auto">
          <div className="min-h-[400px] flex flex-col-reverse lg:flex-row justify-center ">
            <div className="flex flex-col justify-center">
              <h1 className="text-3xl md:text-4xl lg:max-w-[80%] font-semibold mb-5">
                Buy cheap telegram Accounts – Starting from $10 Only
              </h1>
              <p className="lg:text-2xl text-[22px] mb-4 lg:w-[80%] opacity-90 md:w-[60%] sm:w-[80%]">
                High-Quality telegram Accounts for Sale
              </p>
              <p className="text-[#dcdcdc] lg:w-[90%] md:w-[70%] text-[17px] sm:w-[80%] opacity-80">
                <p>
                  Are you looking to quickly boost your telegram
                  presence? At Discord Arena, we offer a variety of cheap
                  telegram accounts to help you achieve instant
                  credibility and engagement. Our accounts come with
                  pre-established followers, making it easier to grow your
                  influence.
                </p>

                <p>
                  We have a diverse selection, including{" "}
                  <Link
                    className="anchorText"
                    href={
                      "buy-telegram-accounts/buy-premium-telegram-accounts"
                    }
                  >
                    telegram accounts
                  </Link>{" "}
                  and affordable options starting at just $10. Whether you need
                  an account with a long history or simply an active follower
                  base, we have you covered. Check out our accounts starting at
                  $10 for the best deals.
                </p>

                <p>
                  telegram accounts today and take your social media
                  game to the next level!
                </p>
              </p>
            </div>
            <div className="lg:w-[90%] mb-[20px] lg:mb-0 flex items-center justify-center ">
              <Image
                className="object-fit w-[60%] lg:w-[300px] max-w-[300px]"
                src={discord_server_boost}
                alt="image showcasing a person with telegram icon"
              />
            </div>
          </div>
          <div className="min-h-[500px] py-12">
            <p className="text-[1.5rem] md:text-[1.75rem] font-semibold mb-2">
              Shop telegram Accounts
            </p>
            <div className="grid grid-cols-1 mt-3 gap-4 sm:grid-cols-2 lg:grid-cols-3 ">
              {instagramData.map((item, index) => {
                return (
                  <div
                    key={item.id}
                    className={`border-[1px] overflow-hidden rounded-md p-4`}
                  >
                    <img
                      src={`../telegram-accounts/${item.image}`}
                      alt={item.name}
                      className="mb-4"
                    />

                    <Link
                      href={`/accounts/buy-telegram-accounts/${item.name
                        .split(" ")
                        .join("-")
                        .toLowerCase()}`}
                      className="my-3 text-[14px] font-semibold tracking-widest sm:text-[15px]"
                    >
                      Buy{" "}
                      <span className="rounded-sm bg-[#F6EBFF] px-3 py-1 text-black">
                        {item.year}
                      </span>{" "}
                      telegram Account
                    </Link>
                    <ul className="list-disc mt-2 pl-4 text-[13px] opacity-85">
                      <li>
                        {item.smallShowFiveFeatures &&
                          item.smallShowFiveFeatures.feature1}
                      </li>
                      <li>
                        {item.smallShowFiveFeatures &&
                          item.smallShowFiveFeatures.feature2}
                      </li>
                      <li>
                        {item.smallShowFiveFeatures &&
                          item.smallShowFiveFeatures.feature3}
                      </li>
                      <li>
                        {item.smallShowFiveFeatures &&
                          item.smallShowFiveFeatures.feature4}
                      </li>
                      <li>
                        {item.smallShowFiveFeatures &&
                          item.smallShowFiveFeatures.feature5}
                      </li>
                    </ul>
                    <div className="mt-5 flex items-center gap-3">
                      {/* <Link
                        href={`/accounts/buy-instagram-accounts/${item.name
                          .split(" ")
                          .join("-")
                          .toLowerCase()}`}
                        className="rounded-md bg-[#00C89D] px-4 py-1 font-semibold"
                      >
                        Info
                      </Link> */}
                      <Link
                        target="_blank"
                        href={item.link}
                        className="rounded-md bg-[#00C89D] px-4 py-1 font-semibold "
                      >
                        Buy for ${item.price}
                      </Link>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
