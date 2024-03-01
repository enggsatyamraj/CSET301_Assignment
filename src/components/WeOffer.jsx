import React from "react";
import FrameImage from "@/components/assets/Frame.png";
import { TbBrandMinecraft } from "react-icons/tb";
import { FaDiscord } from "react-icons/fa";
import { TbBrandValorant } from "react-icons/tb";
import { FaXTwitter } from "react-icons/fa6";
import { FaTelegramPlane } from "react-icons/fa";
import { Actor } from "next/font/google";
import Link from "next/link";

const actor = Actor({ weight: "400", subsets: ["latin"] });

const WeOffer = () => {
  return (
    <div className={actor.className}>
      <div className="bg-[#121212]">
        <div className=" text-white min-h-screen py-[60px] md:py-[100px] max-w-[1280px] mx-auto">
          <div className="max-w-6xl mx-auto px-4">
            <h2 className="sm:text-3xl text-xl md:text-4xl font-semibold text-center mb-6">
              Maximize Your Potential with Our Comprehensive Services
            </h2>
            <p className="text-center text-[15px] md:text-[16px] opacity-75 w-[99%] md:w-[65%] mx-auto mb-12">
              At Discord Arena, we&apos;re committed to empowering your digital
              presence with our wide range of premium services. Explore our
              offerings below:
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <Link
                href={"/accounts/discord"}
                className="rounded-lg border-[0.5px] text-card-foreground shadow-sm bg-[#1F1F1F]"
                data-v0-t="card"
              >
                <div className="flex flex-col space-y-1.5 p-6">
                  <span className="relative flex h-11 w-11 items-center justify-center shrink-0 overflow-hidden rounded-full">
                    <TbBrandMinecraft size={30} className="rounded-full" />
                  </span>
                  <h3 className="text-2xl font-semibold whitespace-nowrap leading-none tracking-tight">
                    Reaction Services
                  </h3>
                </div>
                <div className="px-6 pb-4 opacity-75">
                  <p>
                    Enhance user engagement and interaction with our custom
                    reaction services, adding dynamic elements and fun to your
                    Discord server or social media platforms.
                  </p>
                </div>
              </Link>
              <Link
                href={"/accounts/discord"}
                className="rounded-lg border-[0.5px] text-card-foreground shadow-sm bg-[#1F1F1F]"
                data-v0-t="card"
              >
                <div className="flex flex-col space-y-1.5 p-6">
                  <span className="relative flex h-10 w-10 items-center justify-center shrink-0 overflow-hidden rounded-full">
                    <FaDiscord size={30} />
                  </span>
                  <h3 className="text-2xl font-semibold whitespace-nowrap leading-none tracking-tight">
                    Discord Aged Accounts
                  </h3>
                </div>
                <div className="px-6 pb-4 opacity-75">
                  <p>
                    Gain access to established Discord accounts with a history
                    of engagement and activity, connecting you with thriving
                    communities effortlessly.
                  </p>
                </div>
              </Link>
              <Link
                href={"/accounts/discord"}
                className="rounded-lg border-[0.5px] text-card-foreground shadow-sm bg-[#1F1F1F]"
                data-v0-t="card"
              >
                <div className="flex flex-col space-y-1.5 p-6">
                  <span className="relative flex h-10 w-10 items-center justify-center shrink-0 overflow-hidden rounded-full">
                    <FaDiscord size={30} />
                  </span>
                  <h3 className="text-2xl font-semibold whitespace-nowrap leading-none tracking-tight">
                    Discord Services
                  </h3>
                </div>
                <div className="px-6 pb-4 opacity-75">
                  <p>
                    Our specialized Discord services include server management,
                    community building, moderation tools, and customization
                    options to enhance your Discord server&apos;s functionality
                    and appeal.
                  </p>
                </div>
              </Link>
              <Link
                href={"/accounts/instagram"}
                className="rounded-lg border-[0.5px] text-card-foreground shadow-sm bg-[#1F1F1F]"
                data-v0-t="card"
              >
                <div className="flex flex-col space-y-1.5 p-6">
                  <span className="relative flex h-10 w-10 items-center justify-center shrink-0 overflow-hidden rounded-full">
                    <FaXTwitter size={30} />
                  </span>
                  <h3 className="text-2xl font-semibold whitespace-nowrap leading-none tracking-tight">
                    Instagram Aged Accounts
                  </h3>
                </div>
                <div className="px-6 pb-4 opacity-75">
                  <p>
                    Acquire aged Instagram accounts with established followers,
                    giving you a head start in your Instagram marketing efforts
                    and boosting your visibility on the platform.
                  </p>
                </div>
              </Link>
              <Link
                href={"/accounts/twitter"}
                className="rounded-lg border-[0.5px] text-card-foreground shadow-sm bg-[#1F1F1F]"
                data-v0-t="card"
              >
                <div className="flex flex-col space-y-1.5 p-6">
                  <span className="relative flex h-10 w-10 items-center justify-center shrink-0 overflow-hidden rounded-full">
                    <FaXTwitter size={30} />
                  </span>
                  <h3 className="text-2xl font-semibold whitespace-nowrap leading-none tracking-tight">
                    Twitter Aged Accounts
                  </h3>
                </div>
                <div className="px-6 pb-4 opacity-75">
                  <p>
                    Access aged Twitter accounts with a history of organic
                    growth and engagement, allowing you to leverage established
                    profiles for your marketing campaigns.
                  </p>
                </div>
              </Link>
              <Link
                href={"/accounts/discord"}
                className="rounded-lg border-[0.5px] text-card-foreground shadow-sm bg-[#1F1F1F]"
                data-v0-t="card"
              >
                <div className="flex flex-col space-y-1.5 p-6">
                  <span className="relative flex h-10 w-10 items-center justify-center shrink-0 overflow-hidden rounded-full">
                    <FaDiscord size={30} />
                  </span>
                  <h3 className="text-2xl font-semibold leading-none tracking-tight">
                    Discord Invites and Referrals
                  </h3>
                </div>
                <div className="px-6 pb-4 opacity-75">
                  <p>
                    Utilize our Discord invite and referral services to increase
                    your server&apos;s membership and activity, reaching a
                    broader audience and fostering community growth.
                  </p>
                </div>
              </Link>

              <Link
                href={"/accounts/discord"}
                className="rounded-lg border-[0.5px] text-card-foreground shadow-sm bg-[#1F1F1F]"
                data-v0-t="card"
              >
                <div className="flex flex-col space-y-1.5 p-6">
                  <span className="relative flex h-10 w-10 items-center justify-center shrink-0 overflow-hidden rounded-full">
                    <TbBrandMinecraft size={30} />
                  </span>
                  <h3 className="text-2xl font-semibold whitespace-nowrap leading-none tracking-tight">
                    Zealy Invites and Referrals
                  </h3>
                </div>
                <div className="px-6 pb-4 opacity-75">
                  <p>
                    Explore our Zealy invite and referral services to boost your
                    presence on this platform and drive user engagement and
                    interactions.
                  </p>
                </div>
              </Link>

              <Link
                href={"/accounts/discord"}
                className="rounded-lg border-[0.5px] text-card-foreground shadow-sm bg-[#1F1F1F]"
                data-v0-t="card"
              >
                <div className="flex flex-col space-y-1.5 p-6">
                  <span className="relative flex h-10 w-10 items-center justify-center shrink-0 overflow-hidden rounded-full">
                    <TbBrandMinecraft size={30} />
                  </span>
                  <h3 className="text-2xl font-semibold whitespace-nowrap leading-none tracking-tight">
                    Online/Offline Members
                  </h3>
                </div>
                <div className="px-6 pb-4 opacity-75">
                  <p>
                    Monitor and manage your Discord server&apos;s online and
                    offline members with our advanced tools and features,
                    ensuring efficient communication and coordination within
                    your community.
                  </p>
                </div>
              </Link>

              <Link
                href={"/accounts/discord"}
                className="rounded-lg border-[0.5px] text-card-foreground shadow-sm bg-[#1F1F1F]"
                data-v0-t="card"
              >
                <div className="flex flex-col space-y-1.5 p-6">
                  <span className="relative flex h-10 w-10 items-center justify-center shrink-0 overflow-hidden rounded-full">
                    <FaDiscord size={30} />
                  </span>
                  <h3 className="text-2xl font-semibold whitespace-nowrap leading-none tracking-tight">
                    Discord Nitro Boosters
                  </h3>
                </div>
                <div className="px-6 pb-4 opacity-75">
                  <p>
                  Explore a range of tailored Discord solutions, encompassing adept server administration, fostering vibrant community engagement, deploying cutting-edge moderation utilities, and incorporating personalized features. Elevate the prowess and allure of your Discord server with our diverse suite of services.
                  </p>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WeOffer;
