"use client";
import Footer from "@/components/Footer";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import discordData from "../../dataFolder/discord.json";
import instagramData from "../../dataFolder/instagram.json";
import twitterData from "../../dataFolder/twitter.json";
import { FaDiscord } from "react-icons/fa";
import { Actor } from "next/font/google";
import { FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaArrowRight } from "react-icons/fa6";
import Head from "next/head";

const actor = Actor({ weight: "400", subsets: ["latin"] });

export default function Page() {
  return (
    <div className={actor.className}>
      <script type="application/ld+json">
        {`
          {
            "@context": "https://schema.org",
            "@type": "Organization",
            "name": "Discord Arena",
            "url": "https://www.discordarena.com/",
            "logo": "URL_TO_YOUR_LOGO_IMAGE",
            "description": "Unlock the full potential of your digital presence with Discord Arena.",
            "foundingDate": "YEAR_OF_FOUNDATION",
            "founders": [
              {
                "@type": "Person",
                "name": "Discord Arena",
                "url": "https://www.discordarena.com/"
              }
            ],
            "contactPoint": {
              "@type": "ContactPoint",
              "email": "YOUR_EMAIL",
              "contactType": "customer support"
            }
          }
        `}
      </script>
      <Head>
        <title>Discover Your Unique Niche | Discord Arena</title>
        <meta
          name="description"
          content="Unlock the full potential of your digital presence with Discord Arena. Specializing in cutting-edge solutions tailored to your unique needs."
        />
        <meta
          name="keywords"
          content="Discord Arena, digital presence, cutting-edge solutions, innovation, transparent pricing, tailored solutions"
        />
        <meta name="author" content="Discord Arena" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta
          property="og:title"
          content="Discover Your Unique Niche | Discord Arena"
        />
        <meta
          property="og:description"
          content="Unlock the full potential of your digital presence with Discord Arena. Specializing in cutting-edge solutions tailored to your unique needs."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.discordarena.com/" />
        <meta property="og:image" content="URL_TO_YOUR_SOCIAL_SHARE_IMAGE" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@yourtwitterhandle" />
        <meta
          name="twitter:title"
          content="Discover Your Unique Niche | Discord Arena"
        />
        <meta
          name="twitter:description"
          content="Unlock the full potential of your digital presence with Discord Arena. Specializing in cutting-edge solutions tailored to your unique needs."
        />
        <meta name="twitter:image" content="URL_TO_YOUR_SOCIAL_SHARE_IMAGE" />
      </Head>
      <div className="bg-normal w-[100%] pt-[80px]">
        <div className="relative mx-auto min-h-[60vh] w-[100%] max-w-[1280px] px-7 text-white sm:px-12 ">
          <div className="z-4 relative flex min-h-[90vh] flex-col justify-center">
            <p className="lh:w-[60%] mb-6 text-3xl sm:w-[80%]  sm:text-4xl md:w-[70%] md:text-5xl">
              Discover Your Unique Niche with Discord Arena
            </p>
            <p className="w-[90%] text-[15px] opacity-60 sm:w-[80%] md:w-[70%] lg:w-[50%]">
              Explore a world of possibilities with Discord Arena, where we
              specialize in providing top-notch services tailored to your unique
              needs. Our expert team ensures a seamless experience, offering
              services such as aged social media accounts, Discord services,
              reaction services, and more. With a focus on innovation and
              transparent pricing, we guarantee satisfaction and results for
              your digital endeavors. Join us on a journey of excellence, where
              your goals meet unparalleled expertise. Lorem ipsum dolor sit amet
              consectetur adipisicing elit. Sit, itaque.
            </p>

            <div className="radial_one"></div>
            {/* <div className="radial_two"></div> */}
          </div>
        </div>
      </div>

      <div id="accounts_details" className="bg-normal w-[100%]">
        <div className="reative mx-auto min-h-[60vh] w-[100%] max-w-[1280px] px-7 py-5 text-white sm:px-12">
          <h1 className="mb-4 text-2xl font-semibold">Discord Accounts</h1>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 ">
            {discordData.map((item, index) => {
              return (
                <div
                  key={item.id}
                  className={`border-[1px] ${
                    index > 2 && "hidden"
                  }  h-fit overflow-hidden rounded-md p-4`}
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
                    Discord Account
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
                      href={`accounts/discord/${item.id}`}
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
                    <span className="rounded-md bg-[#00C89D] px-4 py-1 font-semibold ">
                      $ {item.price}
                    </span>
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
          <h1 className="mb-4 text-2xl font-semibold">Instagram Accounts</h1>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 ">
            {instagramData.map((item, index) => {
              return (
                <div
                  key={item.id}
                  className={`border-[1px] ${
                    index > 2 && "hidden"
                  }  h-fit overflow-hidden rounded-md p-4`}
                >
                  <div className="flex h-[150px] w-[100%] items-center justify-center rounded-sm bg-[#BBA8FD]">
                    <FaInstagram
                      size={50}
                      className="accountDance text-[#8474C4]"
                    />
                  </div>

                  <p className="my-3 text-[14px] font-semibold tracking-widest sm:text-[15px]">
                    Buy{" "}
                    <span className="rounded-sm bg-[#F6EBFF] px-3 py-1 text-black">
                      {item.year}
                    </span>{" "}
                    Instagram Account
                  </p>
                  <ul className="list-disc pl-4 text-[13px] opacity-85">
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
                    <Link
                      href={`accounts/instagram/${item.id}`}
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
                    <span className="rounded-md bg-[#00C89D] px-4 py-1 font-semibold ">
                      $ {item.price}
                    </span>
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
          <h1 className="mb-4 text-2xl font-semibold">Twitter Accounts</h1>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 ">
            {twitterData.map((item, index) => {
              return (
                <div
                  key={item.id}
                  className={`border-[1px] ${
                    index > 2 && "hidden"
                  }  h-fit overflow-hidden rounded-md p-4`}
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
                    Twitter Account
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
                      href={`accounts/twitter/${item.id}`}
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
                    <span className="rounded-md bg-[#00C89D] px-4 py-1 font-semibold ">
                      $ {item.price}
                    </span>
                  </div>
                </div>
              );
            })}
          </div>
          <div className="mt-4 w-fit ml-auto">
            <Link
              href={"/accounts/twitter"}
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
