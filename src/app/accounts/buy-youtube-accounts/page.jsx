import React from "react";
import { Actor } from "next/font/google";
import youtubeData from "../../../dataFolder/youtube.json";
import { FaDiscord } from "react-icons/fa";
import Link from "next/link";
import Footer from "@/components/Footer";
import youtube_image from "../../../../public/discord-arena-creatives/youtube.svg";
import Image from "next/image";

const actor = Actor({ weight: "400", subsets: ["latin"] });

export const generateMetadata = () => {
  const title = "Buy Aged YouTube Accounts | Old Monetized Accounts";
  const description =
    "Buy aged and monetized YouTube accounts for enhanced channel credibility. Perfect for content creators and community builders looking to grow their audience.";
  const keywords =
  ["Aged YouTube accounts", "buy YouTube accounts", "premium YouTube accounts", "verified YouTube accounts", "custom handle YouTube accounts", "YouTube channel management", "monetized YouTube accounts", "YouTube account growth", "YouTube marketing", "verified social media accounts"];
  const author = "YouTube Arena";
  const ogUrl = "https://www.youtubearena.com/";
  const ogImage = "https://example.com/og-image.jpg";

  const jsonLdScript = {
    "@context": "https://schema.org",
    "@type": "Organization",
    url: ogUrl,
    name: "YouTube Arena",
    logo: ogImage,
    description: description,
    sameAs: [
      "https://www.facebook.com/your-facebook-url",
      "https://twitter.com/your-twitter-url",
      "https://www.instagram.com/your-instagram-url",
      // Add other social media URLs here
    ],
  };

  return {
    title: title,
    description: description,
    keywords: keywords,
    authors: [{ name: author }],
    openGraph: {
      type: "website",
      url: ogUrl,
      title: title,
      description: description,
      images: [
        {
          url: ogImage,
          alt: "YouTube Arena Logo",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      url: ogUrl,
      title: title,
      description: description,
      images: [ogImage],
    },
    other: {
      "application-ld+json": JSON.stringify(jsonLdScript),
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
              <h1 className="text-3xl md:text-[2.1rem] font-semibold mb-2">
                Buy Aged YouTube Accounts – Starting from $10 Only
              </h1>
              <p className="lg:text-2xl text-[22px] mb-4 lg:w-[80%] opacity-90 md:w-[60%] sm:w-[80%]">
                Discover the Best Monetized & Aged YouTube Accounts for Sale
              </p>
              <p className="text-[#dcdcdc] mt-3 lg:w-[100%] md:w-[70%] text-[17px] sm:w-[80%] opacity-90">
                Looking for reliable aged YouTube accounts? At YouTube Arena, we
                offer a wide range of Monetized YouTube old accounts to meet
                your needs. Our accounts provide instant access to exclusive
                communities and enhanced security.
                <p className={"mt-3"}>
                  Our collection includes{" "}
                  <Link
                    className="anchorText"
                    href={
                      "/accounts/buy-youtube-accounts/buy-youtube-aged-account"
                    }
                  >
                    YouTube accounts
                  </Link>{" "}
                  and options starting at just $2. With{" "}
                  <Link
                    className="anchorText"
                    href={
                      "/accounts/buy-youtube-accounts/buy-youtube-aged-account"
                    }
                  >
                    accounts starting at $10
                  </Link>
                  , finding the right account is easy and affordable.
                </p>
                <p className={"mt-3"}>
                  Choose YouTube Arena for quality accounts, secure
                  transactions, and the best prices. Browse our selection of
                  YouTube accounts today!
                </p>
                <p className="text-[#dcdcdc] mt-3 lg:w-[100%] md:w-[70%] text-[17px] sm:w-[80%] opacity-90">
                  <span>
                    Don&apos;t waste time building from scratch when you can
                    start with an account that already has a strong foundation.
                  </span>
                  By purchasing an aged, monetized YouTube account from YouTube
                  Arena, you&apos;re not just buying an account—you&apos;re
                  investing in a ready-made platform to share your content, grow
                  your audience, and start earning revenue faster.
                  <span>
                    With our wide range of options, you can find the perfect
                    account that fits your budget and goals.
                  </span>
                </p>
              </p>
            </div>
            <div className="lg:w-[90%] mb-[20px] lg:mb-0 flex items-center justify-center ">
              <Image
                className="object-fit w-[60%] lg:w-[300px] max-w-[300px]"
                src={youtube_image}
                alt="image showcasing a person with youtube icon"
              />
            </div>
          </div>
          <div className="min-h-[500px] py-12">
            <p className="text-[1.5rem] md:text-[1.75rem] font-semibold mb-2">
              Shop YouTube Accounts
            </p>
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 ">
              {youtubeData.map((item, index) => {
                return (
                  <div
                    key={item.id}
                    className={`border-[1px] overflow-hidden rounded-md p-4`}
                  >
                    {/* <div className="flex h-[150px] mb-3 w-[100%] items-center justify-center rounded-sm bg-[#BBA8FD]">
                        <FaYoutube
                          size={50}
                          className="accountDance text-[#8474C4]"
                        />
                      </div> */}
                    <img
                      src={`../discord-accounts/${item.image}`}
                      alt={item.name}
                      className="mb-4"
                    />

                    <Link
                      href={`/accounts/buy-youtube-accounts/${item.name
                        .split(" ")
                        .join("-")
                        .toLowerCase()}`}
                      className="my-3 text-[14px] font-semibold tracking-widest sm:text-[15px]"
                    >
                      Buy{" "}
                      <span className="rounded-sm bg-[#F6EBFF] px-3 py-1 text-black">
                        {item.type}
                      </span>{" "}
                      Account
                    </Link>
                    <ul className="list-disc mt-2 pl-4 text-[13px] opacity-85">
                      <li>{item.smallShowFiveFeatures.feature1}</li>
                      <li>{item.smallShowFiveFeatures.feature2}</li>
                      <li>{item.smallShowFiveFeatures.feature3}</li>
                      <li>{item.smallShowFiveFeatures.feature4}</li>
                      <li>{item.smallShowFiveFeatures.feature5}</li>
                    </ul>
                    <div className="mt-5 flex items-center gap-3">
                      {/* <Link
                          href={`/accounts/buy-youtube-accounts/${item.name
                            .split(" ")
                            .join("-")
                            .toLowerCase()}`}
                          className="rounded-md bg-[#00C89D] px-4 py-1 font-semibold"
                        >
                          Info
                        </Link> */}
                      {item.price === "Out of Stock" ? (
                        <div className="rounded-md bg-[#F6EAFE] text-black px-4 py-1 font-semibold">
                          Out of Stock
                        </div>
                      ) : (
                        <Link target="_blank" href={item.link}>
                          <div className="rounded-md bg-[#00C89D] px-4 py-1 font-semibold">
                            Buy for ${item.price}
                          </div>
                        </Link>
                      )}
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
