import React from "react";
import FrameImage from "@/components/assets/Frame.png";
import { TbBrandMinecraft } from "react-icons/tb";
import { FaDiscord } from "react-icons/fa";
import { TbBrandValorant } from "react-icons/tb";
import { FaXTwitter } from "react-icons/fa6";
import { FaTelegramPlane } from "react-icons/fa";
import { Actor } from "next/font/google";
import Link from "next/link";
import { FaInstagram } from "react-icons/fa";

const actor = Actor({ weight: "400", subsets: ["latin"] });

const WeOffer = () => {
  return (
    <div className={actor.className}>
      <div className="bg-[#121212]">
        <div className=" text-white min-h-screen py-[60px] md:py-[100px] max-w-[1280px] mx-auto">
          <div className="max-w-6xl mx-auto px-4">
            <p className="sm:text-3xl text-xl md:text-4xl font-semibold text-center mb-6">
              Maximize Your Potential with Our Comprehensive Services
            </p>
            <p className="text-center text-[15px] md:text-[16px] opacity-75 w-[99%] md:w-[65%] mx-auto mb-12">
              At Discord Arena, we&apos;re committed to empowering your digital
              presence with our wide range of premium services. Explore our
              offerings below:
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <Link
                href={"/accounts/buy-discord-accounts"}
                area-label="see More Discord Accounts"
                className="rounded-lg border-[0.5px] text-card-foreground shadow-sm bg-[#1F1F1F]"
                data-v0-t="card"
              >
                <div className="flex flex-col space-y-1.5 p-6">
                  <span className="relative flex h-10 w-10 items-center justify-center shrink-0 overflow-hidden rounded-full">
                    <FaDiscord size={30} />
                  </span>
                  <p className="text-2xl font-semibold whitespace-wrap leading-none tracking-tight">
                    Buy Aged Discord Accounts
                  </p>
                </div>
                <div className="px-6 pb-4 opacity-75">
                  <p>
                    Purchase aged Discord accounts with a history of engagement
                    and activity. Connect with thriving communities instantly
                    and boost your online presence.y, connecting you with
                    thriving communities effortlessly.
                  </p>
                </div>
              </Link>

              <Link
                href={"/accounts/instagram"}
                area-label="see More about Instagram Accounts"
                className="rounded-lg border-[0.5px] text-card-foreground shadow-sm bg-[#1F1F1F]"
                data-v0-t="card"
              >
                <div className="flex flex-col space-y-1.5 p-6">
                  <span className="relative flex h-10 w-10 items-center justify-center shrink-0 overflow-hidden rounded-full">
                    <FaInstagram size={30} />
                  </span>
                  <p className="text-2xl font-semibold whitespace-wrap leading-none tracking-tight">
                    Buy Aged Instagram Accounts
                  </p>
                </div>
                <div className="px-6 pb-4 opacity-75">
                  <p>
                    Get aged Instagram accounts with established followers.
                    Enhance your Instagram marketing and visibility with our
                    premium aged accounts.
                  </p>
                </div>
              </Link>

              <Link
                href={"/accounts/discord-server-boost"}
                area-label="see More Discord Servers"
                className="rounded-lg border-[0.5px] text-card-foreground shadow-sm bg-[#1F1F1F]"
                data-v0-t="card"
              >
                <div className="flex flex-col space-y-1.5 p-6">
                  <span className="relative flex h-10 w-10 items-center justify-center shrink-0 overflow-hidden rounded-full">
                    <FaDiscord size={30} />
                  </span>
                  <p className="text-2xl font-semibold whitespace-wrap leading-none tracking-tight">
                    Boost Your Discord Server
                  </p>
                </div>
                <div className="px-6 pb-4 opacity-75">
                  <p>
                    Discover our Discord server boosters, offering expert server
                    management, community engagement, and advanced moderation
                    tools to elevate your server&lsquo;s performance.
                  </p>
                </div>
              </Link>

              <Link
                href={"/accounts/buy-discord-accounts"}
                area-label="Pricing Discord Accounts"
                className="rounded-lg border-[0.5px] text-card-foreground shadow-sm bg-[#1F1F1F]"
                data-v0-t="card"
              >
                <div className="flex flex-col space-y-1.5 p-6">
                  <span className="relative flex h-11 w-11 items-center justify-center shrink-0 overflow-hidden rounded-full">
                    <TbBrandMinecraft size={30} className="rounded-full" />
                  </span>
                  <p className="text-2xl font-semibold whitespace-wrap leading-none tracking-tight">
                  Custom Reaction Services for Discord
                  </p>
                </div>
                <div className="px-6 pb-4 opacity-75">
                  <p>
                    Increase user engagement on your Discord server with our
                    custom reaction services. Add dynamic and fun elements to
                    enhance interaction.
                  </p>
                </div>
              </Link>

              <Link
                href={"/accounts/discordserver"}
                area-label="see Pricing Discord Accounts"
                className="rounded-lg border-[0.5px] text-card-foreground shadow-sm bg-[#1F1F1F]"
                data-v0-t="card"
              >
                <div className="flex flex-col space-y-1.5 p-6">
                  <span className="relative flex h-10 w-10 items-center justify-center shrink-0 overflow-hidden rounded-full">
                    <FaDiscord size={30} />
                  </span>
                  <p className="text-2xl font-semibold whitespace-wrap leading-none tracking-tight">
                    Unlock Your Perfect
                    <br />
                    Discord Server
                  </p>
                </div>
                <div className="px-6 pb-4 opacity-75">
                  <p>
                    Discover and purchase top-tier Discord servers that fit your
                    needs. Whether you&apos;re looking to boost community
                    engagement or enhance server features, we have a range of
                    high-quality options tailored for your success. Buy now and
                    start building your ideal Discord community effortlessly!
                  </p>
                </div>
              </Link>

              <Link
                href={"/accounts/buy-discord-accounts"}
                area-label="see more Pricing Discord Accounts"
                className="rounded-lg border-[0.5px] text-card-foreground shadow-sm bg-[#1F1F1F]"
                data-v0-t="card"
              >
                <div className="flex flex-col space-y-1.5 p-6">
                  <span className="relative flex h-10 w-10 items-center justify-center shrink-0 overflow-hidden rounded-full">
                    <FaDiscord size={30} />
                  </span>
                  <p className="text-2xl font-semibold leading-none tracking-tight">
                    Discord Invites and Referral Services
                  </p>
                </div>
                <div className="px-6 pb-4 opacity-75">
                  <p>
                    Expand your Discord server’s community with our invite and
                    referral services. Boost membership and activity for greater
                    community growth.
                  </p>
                </div>
              </Link>

              <Link
                href={"/accounts/buy-discord-accounts"}
                area-label="see More pricing of Discord Accounts"
                className="rounded-lg border-[0.5px] text-card-foreground shadow-sm bg-[#1F1F1F]"
                data-v0-t="card"
              >
                <div className="flex flex-col space-y-1.5 p-6">
                  <span className="relative flex h-10 w-10 items-center justify-center shrink-0 overflow-hidden rounded-full">
                    <TbBrandMinecraft size={30} />
                  </span>
                  <p className="text-2xl font-semibold whitespace-wrap leading-none tracking-tight">
                    Zealy Invite and Referral Services
                  </p>
                </div>
                <div className="px-6 pb-4 opacity-75">
                  <p>
                    Utilize our Zealy invite and referral services to enhance
                    your platform presence and drive higher user engagement and
                    interaction.
                  </p>
                </div>
              </Link>

              <Link
                href={"/accounts/buy-discord-accounts"}
                area-label="go to Discord Accounts page"
                className="rounded-lg border-[0.5px] text-card-foreground shadow-sm bg-[#1F1F1F]"
                data-v0-t="card"
              >
                <div className="flex flex-col space-y-1.5 p-6">
                  <span className="relative flex h-10 w-10 items-center justify-center shrink-0 overflow-hidden rounded-full">
                    <TbBrandMinecraft size={30} />
                  </span>
                  <p className="text-2xl font-semibold whitespace-wrap leading-none tracking-tight">
                    Manage Online and
                    <br />
                    Offline Members
                  </p>
                </div>
                <div className="px-6 pb-4 opacity-75">
                  <p>
                    Efficiently manage your Discord server’s online and offline
                    members with our advanced tools. Ensure smooth communication
                    and coordination within your community.
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
