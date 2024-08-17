import Footer from "@/components/Footer";
import Link from "next/link";
import React from "react";
import discordData from "../../dataFolder/discord.json";
import instagramData from "../../dataFolder/instagram.json";
import { FaDiscord } from "react-icons/fa";
import { Actor } from "next/font/google";
import { FaInstagram } from "react-icons/fa";
import { FaArrowRight } from "react-icons/fa6";
import discordServerData from "../../dataFolder/discordserver.json";
import redditAccountData from "../../dataFolder/reddit.json";
import discordServerBoost from "../../dataFolder/discordServerBoost.json";
import youtubeData from "../../dataFolder/youtube.json";
import accountImage from "../../../public/discord-arena-creatives/accounts.svg";
import Image from "next/image";

const actor = Actor({ weight: "400", subsets: ["latin"] });

export function generateMetadata() {
  return {
    title: "Buy Discord Accounts & Servers at Ease | Discord Arena",
    description:
      "Discover a variety of aged and premium social media accounts, including Discord, Instagram, and Reddit. Enhance your online presence with verified profiles and exclusive features, perfect for marketers, influencers, and community builders. Explore our selection and elevate your digital footprint today!",
    keywords:
      "aged accounts, buy Discord accounts, buy social media accounts, premium accounts, verified Discord accounts, aged Instagram accounts, Reddit accounts",
    author: "Discord Arena",
    viewport: "width=device-width, initial-scale=1.0",
    openGraph: {
      title: "Discover Your Unique Niche | Discord Arena",
      description:
        "Unlock the full potential of your digital presence with Discord Arena. Specializing in cutting-edge solutions tailored to your unique needs.",
      type: "website",
      url: "https://www.discordarena.com/",
      images: [
        {
          url: "URL_TO_YOUR_SOCIAL_SHARE_IMAGE",
          width: 800,
          height: 600,
          alt: "Discover Your Unique Niche | Discord Arena",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      site: "@yourhandle",
      title: "Discover Your Unique Niche | Discord Arena",
      description:
        "Unlock the full potential of your digital presence with Discord Arena. Specializing in cutting-edge solutions tailored to your unique needs.",
      image: "URL_TO_YOUR_SOCIAL_SHARE_IMAGE",
    },
    structuredData: {
      "@context": "https://schema.org",
      "@type": "Organization",
      name: "Discord Arena",
      url: "https://www.discordarena.com/",
      logo: "URL_TO_YOUR_LOGO_IMAGE",
      description:
        "Unlock the full potential of your digital presence with Discord Arena.",
      foundingDate: "YEAR_OF_FOUNDATION",
      founders: [
        {
          "@type": "Person",
          name: "Discord Arena",
          url: "https://www.discordarena.com/",
        },
      ],
      contactPoint: {
        "@type": "ContactPoint",
        email: "YOUR_EMAIL",
        contactType: "customer support",
      },
    },
  };
}

export default function Page() {
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
      <div className="bg-normal w-[100%] pt-[100px]">
        <div className="relative mx-auto min-h-[60vh] w-[100%] max-w-[1280px] px-7 text-white sm:px-12 ">
          <div className="z-4 relative flex min-h-[90vh] flex-col-reverse lg:flex-row justify-center">
            <div className="flex flex-col justify-center flex-3">
              <p className="lg:w-[85%] text-2xl sm:w-[80%] mb-10  sm:text-3xl md:w-[70%] md:text-4xl">
                Get Premium Aged Discord Accounts, Discord Server Boosts & Social Media Accounts
              </p>
              <div className="w-[90%] text-[15px] opacity-60 sm:w-[80%] md:w-[70%] lg:w-[80%]">
                <p>
                  Explore our selection of premium & high-quality{" "}
                  <span className="font-bold">
                    aged Discord accounts,{" "}
                    <Link
                      href="accounts/buy-discord-server-boost"
                      className="anchorText"
                    >
                      Discord server boosts
                    </Link>
                  </span>{" "}
                  and other social media accounts designed to boost your online
                  presence. Whether you need{" "}
                  <Link
                    href="accounts/buy-discord-accounts"
                    className="anchorText"
                  >
                    Discord old accounts
                  </Link>
                  , server boosts to enhance your community, or established{" "}
                  <Link
                    href="accounts/buy-instagram-accounts"
                    className="anchorText"
                  >
                    Instagram accounts
                  </Link>
                  , we offer reliable options to meet your needs.
                </p>
                <br />
                <p>
                  Our accounts come with built-in credibility, making it easy to
                  join exclusive communities and engage with wider audiences.
                  Check out our{" "}
                  <Link
                    href="accounts/buy-reddit-accounts"
                    className="anchorText"
                  >
                    Reddit accounts
                  </Link>{" "}
                  for instant participation in discussions.
                </p>
                <br />
                <p>
                  Choose Discord Arena for secure transactions, competitive
                  prices, and accounts that enhance your social media
                  experience. Start browsing now and find the perfect account to
                  elevate your online presence!
                </p>
              </div>
            </div>
            <div className="lg:w-[90%] mb-[20px] lg:mb-0 flex items-center justify-center ">
              <Image
                className="lg:w-[90%] object-fit w-[60%] max-w-[300px]"
                src={accountImage}
                alt="image showcasing a person highlighting social media accounts"
              />
            </div>

            <div className="radial_one"></div>
            {/* <div className="radial_two"></div> */}
          </div>
        </div>
      </div>

      <div id="accounts_details" className="bg-normal w-[100%]">
        <div className="reative mx-auto min-h-[60vh] w-[100%] max-w-[1280px] px-7 py-5 text-white sm:px-12">
          <h2 className="mb-4 text-2xl font-semibold">Discord Accounts</h2>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 ">
            {discordData.map((item, index) => {
              return (
                <div
                  key={item.id}
                  className={`border-[1px] ${
                    index > 2 && "hidden"
                  }  h-full overflow-hidden mt-3 rounded-md p-4`}
                >
                  {/* <div className="flex h-[150px] w-[100%] items-center justify-center rounded-sm bg-[#BBA8FD] mb-3">
                    <FaDiscord
                      size={50}
                      className="accountDance text-[#8474C4]"
                    />
                  </div> */}
                  <img
                    src={`../discord-accounts/${item.image}`}
                    alt={item.name || "different discord accounts icons"}
                    className="mb-4"
                  />

                  <Link
                    href={`accounts/discord/${item.name
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
                  <ul className="list-disc pl-4 mt-2 text-[13px] opacity-85">
                    <li>{item.smallShowFiveFeatures.feature1}</li>
                    <li>{item.smallShowFiveFeatures.feature2}</li>
                    <li>{item.smallShowFiveFeatures.feature3}</li>
                    <li>{item.smallShowFiveFeatures.feature4}</li>
                    <li>{item.smallShowFiveFeatures.feature5}</li>
                  </ul>
                  <div className="mt-5 flex items-center gap-3">
                    {/* <Link
                      href={`accounts/discord/${item.name
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
          <div className="mt-4 w-fit ml-auto">
            <Link
              href={"/accounts/buy-discord-accounts"}
              // onClick={() => setShowMore(!showMore)}
              className="ml-auto mt-4 w-fit cursor-pointer rounded-md bg-[#00C89D] px-4 py-1 font-semibold"
            >
              Show more discord
              <FaArrowRight size={18} className="ml-2 inline-block" />
            </Link>
          </div>
        </div>
      </div>

      <div className="bg-normal w-[100%]">
        <div className="reative mx-auto min-h-[60vh] w-[100%] max-w-[1280px] px-7 py-5 text-white sm:px-12">
          <h3 className="mb-4 text-2xl font-semibold">Instagram Accounts</h3>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 ">
            {instagramData.map((item, index) => {
              return (
                <div
                  key={item.id}
                  className={`border-[1px] ${
                    index > 2 && "hidden"
                  }  h-full overflow-hidden mt-3 rounded-md p-4`}
                >
                  <img
                    src={`../discord-accounts/${item.image}`}
                    alt={item.name || "different instagram accounts images"}
                    className="mb-4"
                  />

                  <Link
                    href={`accounts/instagram/${item.name
                      .split(" ")
                      .join("-")
                      .toLowerCase()}`}
                    className="my-3 text-[14px] font-semibold tracking-widest sm:text-[15px]"
                  >
                    Buy{" "}
                    <span className="rounded-sm bg-[#F6EBFF] px-3 py-1 text-black">
                      {item.year}
                    </span>{" "}
                    Instagram Account
                  </Link>
                  <ul className="list-disc mt-2 pl-4 text-[13px] opacity-85">
                    <li>
                      {item.smallShowFiveFeatures.feature1
                        ? item.smallShowFiveFeatures.feature1
                        : "Authentic and secure account"}
                    </li>
                    <li>{item.smallShowFiveFeatures.feature2}</li>
                    <li>{item.smallShowFiveFeatures.feature3}</li>
                    <li>{item.smallShowFiveFeatures.feature4}</li>
                    <li>{item.smallShowFiveFeatures.feature5}</li>
                  </ul>
                  <div className="mt-5 flex items-center gap-3">
                    {/* <Link
                      href={`accounts/instagram/${item.name
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
          <div className="mt-4 w-fit ml-auto">
            <Link
              href={"/accounts/buy-instagram-accounts"}
              // onClick={() => setShowMore(!showMore)}
              className="ml-auto mt-4 w-fit cursor-pointer rounded-md bg-[#00C89D] px-4 py-1 font-semibold"
            >
              Show more Instagram
              <FaArrowRight size={18} className="ml-2 inline-block" />
            </Link>
          </div>
        </div>
      </div>

      <div className="bg-normal w-[100%]">
        <div className="reative mx-auto min-h-[60vh] w-[100%] max-w-[1280px] px-7 py-5 text-white sm:px-12">
          <p className="mb-4 text-2xl font-semibold">Discord Server Boost</p>
          <div className="grid grid-cols-1 h-full gap-4 sm:grid-cols-2 mb-4 lg:grid-cols-3 ">
            {discordServerBoost.map((item, index) => {
              return (
                <div
                  key={item.id}
                  className={`border-[1px] ${
                    index > 2 && "hidden"
                  } overflow-hidden mt-3 h-full rounded-md p-4`}
                >
                  <img
                    src={`../discord-accounts/${item.image}`}
                    alt={item.name || "different discord server boost accounts"}
                    className="mb-4"
                  />

                  <Link
                    href={`accounts/discord-server-boost/${item.name
                      .split(" ")
                      .join("-")
                      .toLowerCase()}`}
                    className="my-3 text-[14px] font-semibold tracking-widest sm:text-[15px]"
                  >
                    Buy {item.type}{" "}
                    <span className="rounded-sm bg-[#F6EBFF] px-3 py-1 text-black">
                      {item.year} months
                    </span>{" "}
                  </Link>
                  <ul className="list-disc mt-2 pl-4 text-[13px] opacity-85">
                    <li>
                      {item.smallShowFiveFeatures.feature1
                        ? item.smallShowFiveFeatures.feature1
                        : "Authentic and secure account"}
                    </li>
                    <li>{item.smallShowFiveFeatures.feature2}</li>
                    <li>{item.smallShowFiveFeatures.feature3}</li>
                    <li>{item.smallShowFiveFeatures.feature4}</li>
                    <li>{item.smallShowFiveFeatures.feature5}</li>
                  </ul>
                  <div className="mt-5 flex items-center gap-3">
                    {/* <Link
                      href={`accounts/reddit/${item.name
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
          <div className="mt-4 w-fit ml-auto">
            <Link
              href={"/accounts/buy-discord-server-boost"}
              // onClick={() => setShowMore(!showMore)}
              className="ml-auto mt-4 w-fit cursor-pointer rounded-md bg-[#00C89D] px-4 py-1 font-semibold"
            >
              Show more Discord Server Boost
              <FaArrowRight size={18} className="ml-2 inline-block" />
            </Link>
          </div>
        </div>
      </div>

      <div className="bg-normal w-[100%]">
        <div className="reative mx-auto min-h-[60vh] w-[100%] max-w-[1280px] px-7 py-5 text-white sm:px-12">
          <p className="mb-4 text-2xl font-semibold">Reddit Accounts</p>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 mb-4 lg:grid-cols-3 ">
            {redditAccountData.map((item, index) => {
              return (
                <div
                  key={item.id}
                  className={`border-[1px] ${
                    index > 2 && "hidden"
                  }  h-full overflow-hidden mt-3 rounded-md p-4`}
                >
                  <img
                    src={`../discord-accounts/${item.image}`}
                    alt={item.name || "different reddit accounts images"}
                    className="mb-4"
                  />

                  <Link
                    href={`accounts/reddit/${item.name
                      .split(" ")
                      .join("-")
                      .toLowerCase()}`}
                    className="my-3 text-[14px] font-semibold tracking-widest sm:text-[15px]"
                  >
                    Buy{" "}
                    <span className="rounded-sm bg-[#F6EBFF] px-3 py-1 text-black">
                      {item.months} months
                    </span>{" "}
                    old Reddit accounts
                  </Link>
                  <ul className="list-disc mt-2 pl-4 text-[13px] opacity-85">
                    <li>
                      {item.smallShowFiveFeatures.feature1
                        ? item.smallShowFiveFeatures.feature1
                        : "Authentic and secure account"}
                    </li>
                    <li>{item.smallShowFiveFeatures.feature2}</li>
                    <li>{item.smallShowFiveFeatures.feature3}</li>
                    <li>{item.smallShowFiveFeatures.feature4}</li>
                    <li>{item.smallShowFiveFeatures.feature5}</li>
                  </ul>
                  <div className="mt-5 flex items-center gap-3">
                    {/* <Link
                      href={`accounts/reddit/${item.name
                        .split(" ")
                        .join("-")
                        .toLowerCase()}`}
                      className="rounded-md bg-[#00C89D] px-4 py-1 font-semibold"
                    >
                      Info
                    </Link> */}
                    {item.price !== "Out of Stock" ? (
                      <Link
                        target="_blank"
                        href={item.link}
                        className="rounded-md bg-[#00C89D] px-4 py-1 font-semibold "
                      >
                        Buy for ${item.price}
                      </Link>
                    ) : (
                      <span
                        target="_blank"
                        // href={item.link}
                        className="rounded-md bg-[#F6EAFE] px-4 py-1 font-semibold text-[#000000]"
                      >
                        Out of Stock
                      </span>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
          <div className="mt-4 w-fit ml-auto">
            <Link
              href={"/accounts/buy-reddit-accounts"}
              // onClick={() => setShowMore(!showMore)}
              className="ml-auto mt-4 w-fit cursor-pointer rounded-md bg-[#00C89D] px-4 py-1 font-semibold"
            >
              Show more reddit
              <FaArrowRight size={18} className="ml-2 inline-block" />
            </Link>
          </div>
        </div>
      </div>

      <div className="bg-normal w-[100%]">
        <div className="relative mx-auto min-h-[60vh] w-[100%] max-w-[1280px] px-7 py-5 text-white sm:px-12">
          <p className="mb-4 text-2xl font-semibold">Aged YouTube Accounts</p>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {youtubeData.map((item, index) => {
              return (
                <div
                  key={item.id}
                  className={`border-[1px] ${
                    index > 2 && "hidden"
                  } h-full overflow-hidden mt-3 rounded-md p-4`}
                >
                  <img
                    src={`../discord-accounts/${item.image}`}
                    alt={item.name || "different aged YouTube accounts images"}
                    className="mb-4"
                  />

                  <Link
                    href={`accounts/youtube/${item.name
                      .split(" ")
                      .join("-")
                      .toLowerCase()}`}
                    className="my-3 text-[14px] font-semibold tracking-widest sm:text-[15px]"
                  >
                    Buy{" "}
                    <span className="rounded-sm bg-[#F6EBFF] px-3 py-1 text-black">
                      {item.year}
                    </span>{" "}
                    Aged YouTube Account
                  </Link>
                  <ul className="list-disc mt-2 pl-4 text-[13px] opacity-85">
                    <li>
                      {item.smallShowFiveFeatures.feature1
                        ? item.smallShowFiveFeatures.feature1
                        : "Established and secure account"}
                    </li>
                    <li>{item.smallShowFiveFeatures.feature2}</li>
                    <li>{item.smallShowFiveFeatures.feature3}</li>
                    <li>{item.smallShowFiveFeatures.feature4}</li>
                    <li>{item.smallShowFiveFeatures.feature5}</li>
                  </ul>
                  <div className="mt-5 flex items-center gap-3">
                    {item.price !== "Out of Stock" ? (
                      <Link
                        target="_blank"
                        href={item.link}
                        className="rounded-md bg-[#00C89D] px-4 py-1 font-semibold "
                      >
                        Buy for ${item.price}
                      </Link>
                    ) : (
                      <span
                        target="_blank"
                        // href={item.link}
                        className="rounded-md bg-[#F6EAFE] px-4 py-1 font-semibold text-[#000000]"
                      >
                        Out of Stock
                      </span>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
          <div className="mt-4 w-fit ml-auto">
            <Link
              href={"/accounts/buy-youtube-accounts"}
              className="ml-auto mt-4 w-fit cursor-pointer rounded-md bg-[#00C89D] px-4 py-1 font-semibold"
            >
              Show more accounts
              <FaArrowRight size={18} className="ml-2 inline-block" />
            </Link>
          </div>
        </div>
      </div>

      <div className="bg-normal w-[100%]">
        <div className="reative mx-auto min-h-[60vh] w-[100%] max-w-[1280px] px-7 py-5 text-white sm:px-12">
          <p className="mb-4 text-2xl font-semibold">Discord Server</p>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 ">
            {discordServerData.map((item, index) => {
              return (
                <div
                  key={item.id}
                  className={`border-[1px] ${
                    index > 2 && "hidden"
                  }  h-full overflow-hidden mt-3 rounded-md p-4`}
                >
                  <img
                    src={`../discord-accounts/${item.image}`}
                    alt={
                      item.name || "different discord server accounts images"
                    }
                    className="mb-4"
                  />

                  <Link
                    href={`accounts/discordserver/${item.name
                      .split(" ")
                      .join("-")
                      .toLowerCase()}`}
                    className="my-3 text-[14px] font-semibold tracking-widest sm:text-[15px]"
                  >
                    Buy{" "}
                    <span className="rounded-sm bg-[#F6EBFF] px-3 py-1 text-black">
                      {item.year}
                    </span>{" "}
                    Discord Server
                  </Link>
                  <ul className="list-disc mt-2 pl-4 text-[13px] opacity-85">
                    <li>
                      {item.smallShowFiveFeatures.feature1
                        ? item.smallShowFiveFeatures.feature1
                        : "Authentic and secure account"}
                    </li>
                    <li>{item.smallShowFiveFeatures.feature2}</li>
                    <li>{item.smallShowFiveFeatures.feature3}</li>
                    <li>{item.smallShowFiveFeatures.feature4}</li>
                    <li>{item.smallShowFiveFeatures.feature5}</li>
                  </ul>
                  <div className="mt-5 flex items-center gap-3">
                    {/* <Link
                      href={`accounts/discordserver/${item.name
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
                      className="rounded-md bg-[#00C89D] text-white px-4 py-1 font-semibold "
                    >
                      {item.price}
                    </Link>
                  </div>
                </div>
              );
            })}
          </div>
          <div className="mt-4 w-fit ml-auto">
            <Link
              href={"/accounts/buy-discord-server"}
              // onClick={() => setShowMore(!showMore)}
              className="ml-auto mt-4 w-fit cursor-pointer rounded-md bg-[#00C89D] px-4 py-1 font-semibold"
            >
              Show more servers
              <FaArrowRight size={18} className="ml-2 inline-block" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
