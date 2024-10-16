import React from "react";
import { Actor } from "next/font/google";
import discordData from "../../../dataFolder/discord.json";
import { FaDiscord } from "react-icons/fa";
import Link from "next/link";
import Footer from "@/components/Footer";
import discord_image from "../../../../public/discord-arena-creatives/discord.svg";
import Image from "next/image";

const actor = Actor({ weight: "400", subsets: ["latin"] });

export const generateMetadata = () => {
  const title = "Buy Aged Discord Accounts | Premium & Old Accounts";
  const description =
    "Buy aged and premium Discord accounts to boost your server's credibility. Our accounts come with verified status, custom handles, and exclusive features to enhance your Discord experience. Perfect for server management, community building, and personal use. ";
  const keywords =
  ["Aged Discord accounts", "buy Discord accounts", "premium Discord accounts", "verified Discord accounts", "custom handle Discord accounts", "Discord server management", "Discord community building", "buy social media accounts", "Discord account sale", "secure Discord accounts"];
  const author = "Discord Arena";
  const ogUrl = "https://www.discordarena.com/";
  const ogImage = "https://example.com/og-image.jpg";

  const jsonLdScript = {
    "@context": "https://schema.org",
    "@type": "Organization",
    url: ogUrl,
    name: "Discord Arena",
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
          alt: "Discord Arena Logo",
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
                Buy Aged Discord Accounts – Starting from $2 Only
              </h1>
              <p className="lg:text-2xl text-[22px] mb-4 lg:w-[80%] opacity-90 md:w-[60%] sm:w-[80%]">
                Discover the Best Aged Discord Accounts for Sale
              </p>
              <p className="text-[#dcdcdc] lg:w-[100%] md:w-[70%] text-[17px] sm:w-[80%] opacity-80">
                Looking for reliable aged Discord accounts? At Discord Arena, we
                offer a wide range of Discord old accounts to meet your needs.
                Our accounts provide instant access to exclusive communities and
                enhanced security.
                <p>
                  Our collection includes{" "}
                  <Link
                    className="anchorText"
                    href={
                      "https://discordarena.com/accounts/buy-discord-accounts/buy-2015-aged-discord-account"
                    }
                  >
                    2015 Discord accounts
                  </Link>{" "}
                  and options starting at just $2. With{" "}
                  <Link
                    className="anchorText"
                    href={
                      "https://discordarena.com/accounts/buy-discord-accounts/buy-2023-aged-discord-account"
                    }
                  >
                    accounts starting at $2
                  </Link>
                  , finding the right account is easy and affordable.
                </p>
                <p>
                  Choose Discord Arena for quality accounts, secure
                  transactions, and the best prices. Browse our selection of
                  Discord accounts today!
                </p>
              </p>
            </div>
            <div className="lg:w-[90%] mb-[20px] lg:mb-0 flex items-center justify-center ">
              <Image
                className="object-fit w-[60%] lg:w-[300px] max-w-[300px]"
                src={discord_image}
                alt="image showcasing a person with discord icon"
              />
            </div>
          </div>
          <div className="min-h-[500px] py-12">
            <p className="text-[1.5rem] md:text-[1.75rem] font-semibold mb-2">
              Shop Discord Accounts
            </p>
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 ">
              {discordData.map((item, index) => {
                return (
                  <div
                    key={item.id}
                    className={`border-[1px] overflow-hidden rounded-md p-4`}
                  >
                    {/* <div className="flex h-[150px] mb-3 w-[100%] items-center justify-center rounded-sm bg-[#BBA8FD]">
                      <FaDiscord
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
                      href={`/accounts/buy-discord-accounts/${item.name
                        .split(" ")
                        .join("-")
                        .toLowerCase()}`}
                      className="my-3 text-[14px] font-semibold tracking-widest sm:text-[15px]"
                    >
                      Buy{" "}
                      <span className="rounded-sm bg-[#F6EBFF] px-3 py-1 text-black">
                        {item.year}
                      </span>{" "}
                      Discord Account
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
                        href={`/accounts/buy-discord-accounts/${item.name
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
