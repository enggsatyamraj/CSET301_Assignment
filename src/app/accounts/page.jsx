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
import Head from "next/head";

const actor = Actor({ weight: "400", subsets: ["latin"] });

export function generateMetadata() {
  return {
    title: "Aged Discord Accounts for Sale | Old Discord Accounts & More - Discord Arena",
    description:
      "Shop for aged Discord accounts, verified social media profiles, and more. Enhance your digital strategy with our trusted and high-quality accounts.",
    keywords:
      "Buy aged Discord accounts, verified social media accounts, premium Discord services, social media engagement",
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
      <div className="bg-normal w-[100%] pt-[80px]">
        <div className="relative mx-auto min-h-[60vh] w-[100%] max-w-[1280px] px-7 text-white sm:px-12 ">
          <div className="z-4 relative flex min-h-[90vh] flex-col justify-center">
            <h1 className="text-4xl sm:text-5xl md:text-6xl mb-8">
              Aged Discord & Social Media Accounts for Sale
            </h1>
            <p className="lh:w-[60%] mb-6 text-3xl sm:w-[80%]  sm:text-4xl md:w-[70%] md:text-5xl">
              Discover Premium Aged Discord & Social Media Accounts for Sale
            </p>
            <div className="w-[90%] text-[15px] opacity-60 sm:w-[80%] md:w-[70%] lg:w-[50%]">
  <p>
    Explore our selection of high-quality <span className="font-bold">aged Discord accounts</span> and other social media accounts designed to boost your online presence. Whether you need <Link href="https://discordarena.com/accounts/discord" className="underline">Discord old accounts</Link> or established <Link href="https://discordarena.com/accounts/instagram" className="underline">Instagram accounts</Link>, we offer reliable options to meet your needs.
  </p><br/>
  <p>
    Our accounts come with built-in credibility, making it easy to join exclusive communities and engage with wider audiences. Check out our <Link href="https://discordarena.com/accounts/reddit" className="underline">Reddit accounts</Link> for instant participation in discussions.
  </p><br/>
  <p>
    Choose Discord Arena for secure transactions, competitive prices, and accounts that enhance your social media experience. Start browsing now and find the perfect account to elevate your online presence!
  </p>
</div>


            <div className="radial_one"></div>
            {/* <div className="radial_two"></div> */}
          </div>
        </div>
      </div>

      <div id="accounts_details" className="bg-normal w-[100%]">
        <div className="reative mx-auto min-h-[60vh] w-[100%] max-w-[1280px] px-7 py-5 text-white sm:px-12">
          <b className="mb-4 text-2xl font-semibold">Discord Accounts</b>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 ">
            {discordData.map((item, index) => {
              return (
                <div
                  key={item.id}
                  className={`border-[1px] ${
                    index > 2 && "hidden"
                  }  h-fit overflow-hidden mt-3 rounded-md p-4`}
                >
                  <div className="flex h-[150px] w-[100%] items-center justify-center rounded-sm bg-[#BBA8FD] mb-3">
                    <FaDiscord
                      size={50}
                      className="accountDance text-[#8474C4]"
                    />
                  </div>

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
              href={"/accounts/discord"}
              // onClick={() => setShowMore(!showMore)}
              className="ml-auto mt-4 w-fit cursor-pointer rounded-md bg-[#00C89D] px-4 py-1 font-semibold"
            >
              Show more
              <FaArrowRight size={18} className="ml-2 inline-block" />
            </Link>
          </div>
        </div>
      </div>

      <div className="bg-normal w-[100%]">
        <div className="reative mx-auto min-h-[60vh] w-[100%] max-w-[1280px] px-7 py-5 text-white sm:px-12">
          <b className="mb-4 text-2xl font-semibold">Instagram Accounts</b>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 ">
            {instagramData.map((item, index) => {
              return (
                <div
                  key={item.id}
                  className={`border-[1px] ${
                    index > 2 && "hidden"
                  }  h-fit overflow-hidden mt-3 rounded-md p-4`}
                >
                  <div className="flex h-[150px] w-[100%] items-center justify-center rounded-sm bg-[#BBA8FD] mb-3">
                    <FaInstagram
                      size={50}
                      className="accountDance text-[#8474C4]"
                    />
                  </div>

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
              href={"/accounts/instagram"}
              // onClick={() => setShowMore(!showMore)}
              className="ml-auto mt-4 w-fit cursor-pointer rounded-md bg-[#00C89D] px-4 py-1 font-semibold"
            >
              Show more
              <FaArrowRight size={18} className="ml-2 inline-block" />
            </Link>
          </div>
        </div>
      </div>

      <div className="bg-normal w-[100%]">
        <div className="reative mx-auto min-h-[60vh] w-[100%] max-w-[1280px] px-7 py-5 text-white sm:px-12">
          <b className="mb-4 text-2xl font-semibold">Discord Server</b>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 ">
            {discordServerData.map((item, index) => {
              return (
                <div
                  key={item.id}
                  className={`border-[1px] ${
                    index > 2 && "hidden"
                  }  h-fit overflow-hidden mt-3 rounded-md p-4`}
                >
                  <div className="flex h-[150px] w-[100%] items-center justify-center rounded-sm bg-[#BBA8FD] mb-3">
                    <FaDiscord
                      size={50}
                      className="accountDance text-[#8474C4]"
                    />
                  </div>

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
              href={"/accounts/discordserver"}
              // onClick={() => setShowMore(!showMore)}
              className="ml-auto mt-4 w-fit cursor-pointer rounded-md bg-[#00C89D] px-4 py-1 font-semibold"
            >
              Show more
              <FaArrowRight size={18} className="ml-2 inline-block" />
            </Link>
          </div>
        </div>
      </div>

      {/* <div className="bg-normal w-[100%]">
        <div className="reative mx-auto min-h-[60vh] w-[100%] max-w-[1280px] px-7 py-5 text-white sm:px-12">
          <b className="mb-4 text-2xl font-semibold"> Accounts</b>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 ">
            {Data.map((item, index) => {
              return (
                <div
                  key={item.id}
                  className={`border-[1px] ${
                    index > 2 && "hidden"
                  }  h-fit overflow-hidden mt-3 rounded-md p-4`}
                >
                  <div className="flex h-[150px] w-[100%] items-center justify-center rounded-sm bg-[#BBA8FD]">
                    <FaX
                      size={50}
                      className="accountDance text-[#8474C4]"
                    />
                  </div>

                  <p className="my-3 text-[14px] font-semibold tracking-widest sm:text-[15px]">
                    Buy{" "}
                    <span className="rounded-sm bg-[#F6EBFF] px-3 py-1 text-black">
                      {item.year}
                    </span>{" "}
                     Account for ${item.price}
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
                      href={`accounts//${item.name
                        .split(" ")
                        .join("-")
                        .toLowerCase()}`}
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
          <div className="mt-4 w-fit ml-auto">
            <Link
              href={"/accounts/"}
              // onClick={() => setShowMore(!showMore)}
              className="ml-auto mt-4 w-fit cursor-pointer rounded-md bg-[#00C89D] px-4 py-1 font-semibold"
            >
              Show more
              <FaArrowRight size={18} className="ml-2 inline-block" />
            </Link>
          </div>
        </div>
      </div> */}

      <div className="bg-normal w-[100%]">
        <div className="reative mx-auto min-h-[60vh] w-[100%] max-w-[1280px] px-7 py-5 text-white sm:px-12">
          <b className="mb-4 text-2xl font-semibold">Reddit Accounts</b>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 ">
            {redditAccountData.map((item, index) => {
              return (
                <div
                  key={item.id}
                  className={`border-[1px] ${
                    index > 2 && "hidden"
                  }  h-fit overflow-hidden mt-3 rounded-md p-4`}
                >
                  <div className="flex h-[150px] w-[100%] items-center justify-center rounded-sm bg-[#BBA8FD] mb-3">
                    <FaDiscord
                      size={50}
                      className="accountDance text-[#8474C4]"
                    />
                  </div>

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
              href={"/accounts/reddit"}
              // onClick={() => setShowMore(!showMore)}
              className="ml-auto mt-4 w-fit cursor-pointer rounded-md bg-[#00C89D] px-4 py-1 font-semibold"
            >
              Show more
              <FaArrowRight size={18} className="ml-2 inline-block" />
            </Link>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
