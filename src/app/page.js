"use client";
import BestProduct from "@/components/BestProduct";
import ContactUs from "@/components/ContactUs";
import CustomerReview from "@/components/CustomerReview";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import WeOffer from "@/components/WeOffer";
import WhyChoose from "@/components/WhyChoose";
import Link from "next/link";
import React, { useState, useEffect } from "react";
import { FaDiscord } from "react-icons/fa";
import { Actor } from "next/font/google";
import Head from "next/head";
import { ImCross } from "react-icons/im";
import discordData from "../dataFolder/discord.json";
import Image from "next/image";
import smartPeople from "../../public/smart-people.png";
import Script from "next/script";

const actor = Actor({ weight: "400", subsets: ["latin"] });

export const generateMetaData = () => {
  const jsonLd = {
    "@context": "http://schema.org",
    "@type": "WebPage",
    name: "Discord Arena",
    description:
      "Discover a diverse selection of aged Discord, , and Telegram accounts, including verified and phone-verified options, at unbeatable prices. Buy Discord accounts from 2015 and beyond, with the assurance of authenticity and quality. Our collection includes aged Discord accounts for sale, providing you with established communities and high-engagement profiles. We offer verified Discord accounts for sale, ensuring credibility and trustworthiness. Additionally, explore our range of services to buy server boosts for Discord, enhancing your server's visibility and reach. Elevate your  presence with our solutions to buy  followers, boosting your social proof and influence. Explore our selection of aged social media accounts and tokens, tailored to meet your specific needs. Join the ranks of successful influencers, marketers, and businesses who have leveraged our premium accounts to achieve their goals. Experience growth, credibility, and success like never before. Unlock the power of established social media accounts today.",
    url: "https://www.discordarena.com/",
    about: {
      "@type": "Thing",
      name: "Discord Arena",
      description:
        "Our collection includes aged Discord accounts for sale, providing you with established communities and high-engagement profiles. We offer verified Discord accounts for sale, ensuring credibility and trustworthiness. Additionally, explore our range of services to buy server boosts for Discord, enhancing your server's visibility and reach. Elevate your  presence with our solutions to buy  followers, boosting your social proof and influence. Explore our selection of aged social media accounts and tokens, tailored to meet your specific needs.",
    },
  };

  return {
    title: "Buy Discord Accounts as Ease| Discord Arena",
    description:
      "Discover a diverse selection of aged Discord, , and Telegram accounts, including verified and phone-verified options, at unbeatable prices. Buy Discord accounts from 2015 and beyond, with the assurance of authenticity and quality. Our collection includes aged Discord accounts for sale, providing you with established communities and high-engagement profiles. We offer verified Discord accounts for sale, ensuring credibility and trustworthiness. Additionally, explore our range of services to buy server boosts for Discord, enhancing your servers visibility and reach. Elevate your  presence with our solutions to buy  followers, boosting your social proof and influence. Explore our selection of aged social media accounts and tokens, tailored to meet your specific needs. Join the ranks of successful influencers, marketers, and businesses who have leveraged our premium accounts to achieve their goals. Experience growth, credibility, and success like never before. Unlock the power of established social media accounts today.",
    keywords:
      "Aged Discord accounts, verified Discord accounts, buy Discord accounts, Discord server boosts, social media accounts for sale, Buy Instagram accounts",
    author: "Discord Arena",
    ogTitle: "Buy Discord Accounts as Ease| Discord Arena",
    ogDescription:
      "Discover a diverse selection of aged Discord, , and Telegram accounts, including verified and phone-verified options, at unbeatable prices. Buy Discord accounts from 2015 and beyond, with the assurance of authenticity and quality. Our collection includes aged Discord accounts for sale, providing you with established communities and high-engagement profiles. We offer verified Discord accounts for sale, ensuring credibility and trustworthiness. Additionally, explore our range of services to buy server boosts for Discord, enhancing your servers visibility and reach. Elevate your  presence with our solutions to buy  followers, boosting your social proof and influence. Explore our selection of aged social media accounts and tokens, tailored to meet your specific needs. Join the ranks of successful influencers, marketers, and businesses who have leveraged our premium accounts to achieve their goals. Experience growth, credibility, and success like never before. Unlock the power of established social media accounts today.",
    ogType:
      "Buying and selling of discord accounts || Buying and selling of instagram accounts",
    ogUrl: "https://www.discordarena.com/",
    ogImage: "https://www.discordarena.com/",
    ogImageAlt:
      "Buying and selling of discord accounts || Buying and selling of instagram accounts",
    jsonLd,
  };
};

export default function Page() {
  const specialDiscordServiceArray = [
    {
      heading:
        "Elevate Your Community: Unlock 3 Months of Discord Nitro Boosting!",
      paragraph: "Feature-focused:",
      description:
        "Discord Nitro Booster (3 Months): Exclusive Features & Instant Delivery 3 Months of Discord Nitro Perks: Enhanced Audio, Custom Emojis, & More! Unlock the Power of Nitro: Animated Profile, Larger Uploads, & Server-Wide Benefits",
      descriptionOne:
        "Bring your Discord server to life with a powerful 3-month Nitro boost! Supercharge your community with features like:",
      descriptionTwo:
        "Higher upload limits: Share larger files and stream smoothly without interruptions.Custom emojis and animated stickers: Express yourselves like never before and create a unique server identity.Animated profile picture and banner: Stand out from the crowd with personalized visuals. Server-wide perks: Enjoy increased audio quality, custom roles, and more benefits for everyone!",
      link: "#",
      borderColor: "#F178B6",
    },
    {
      heading:
        "Boost your Discord server with 14x perks for 3 months! VIP experience!",
      description:
        "Blazing-fast voice chat: Crystal-clear communication with no lag.Ultra-high video quality: Stream like a pro with smooth, high-resolution video.Custom roles and permissions: Fine-tune your server's management with granular control.Expanded file upload limits: Share large files and content seamlessly.Premium server features: Unlock exclusive benefits like custom emojis, animated icons, and more!Activate your instant delivery boost now and take your server to the next level! This limited-time offer won't last forever, so don't miss out!",
      link: "#",
      borderColor: "#CE9031",
    },
    {
      heading:
        "Boost Your Discord: 14x for 30 Days, Instant Activation",
      paragraph:
        "Give your Discord server a temporary power-up with a 1-month 14x Server Boost! Enjoy a taste of the premium experience for you and your community, including:",
      description:
        "Crystal-clear voice chat: Communicate seamlessly with lag-free, high-quality audio.Enhanced video streaming: Share smooth, high-resolution video content.Granular server management: Create custom roles and permissions for fine-tuned control.Expanded file upload limits: Share larger files and content without restrictions.A glimpse into premium features: Experience limited access to custom emojis, animated icons, and more! Activate your instant delivery boost now and elevate your server for 30 days! This is a perfect way to try out the benefits before committing to a longer boost.",
      link: "#",
      borderColor: "#A5A6F6",
    },
  ];

  return (
    <div className={actor.className}>
      
      <div className="bg-normal w-[100%]">
        <div className="max-w-[1280px] mx-auto px-4 text-white relative min-h-[100vh] w-[100%] ">
          <div
            id="mainSection"
            className="min-h-[100vh]  relative flex items-center flex-col lg:flex-row pl-[10px] py-[100px] sm:pl-[30px] gap-5 justify-center z-4"
          >
            <div className=" flex-[3]">
              <p className="pt-[60px]  text-4xl sm:text-5xl mb-10 md:text-5xl lg:text-[55px]  ">
                Welcome to Discord Arena: Your Source for{" "}
                <span className="span_text">Aged Discord Accounts</span> and
                More
              </p>
              <p className=" md:text-[16px] text-[15px] w-[99%] opacity-60">
                {/* <span>
                Welcome to Discord Arena, your premier destination for aged Discord accounts and social media accounts. We specialize in providing high-quality aged Discord and Instagram accounts to help you enhance your online presence instantly.

Looking to buy aged Discord? Our selection of Discord accounts includes everything from 2015 Discord accounts to the latest options, all at competitive prices. Whether you need a Discord account aged for immediate use or an instant Discord aged account, we have you covered.

Our aged Discord accounts are perfect for those searching for a Discord old account buy or an old Discord account for sale. With Discord Arena, you get secure transactions, exceptional customer service, and top-quality accounts that help you stand out.

Explore our Instagram accounts, designed to give you a head start with pre-established followers and engagement. Whether you’re looking for discordarena, discord arena, or to buy account Discord, our platform ensures you find exactly what you need.

Choose Discord Arena for all your social media needs and boost your influence effortlessly. Discover why we are the trusted choice for buying aged Discord accounts and more.
                </span> */}
                {/* <br/> */}
                  At Discord Arena, we offer high-quality aged Discord accounts,
                  Instagram accounts, and Reddit accounts. Whether you&lsquo;re
                  a business, influencer, or gamer, our accounts help you
                  quickly establish a strong presence on social media.
                  Our aged Discord accounts let you join exclusive servers and
                  enjoy enhanced security without the hassle of starting from
                  scratch. Check out our selection of{" "}
                  <Link
                    href={"https://discordarena.com/accounts/discord"}
                    className="underline font-bold"
                  >
                    buy Discord accounts
                  </Link>
                  
                  , including{" "}
                  <Link
                    href={"https://discordarena.com/accounts/discord/buy-2015-aged-discord-account"}
                    className="underline font-bold"
                  >
                   2015 Discord accounts.
                  </Link>
                  
                
                  We also provide aged{" "}
                  <Link
                    href={"https://discordarena.com/accounts/instagram"}
                    className="underline font-bold"
                  >
                    Instagram accounts
                  </Link>
                  
                 {" "}
                  with a built-in following, making it easier to engage with a
                  larger audience. Explore our Instagram accounts to find the
                  perfect one for you.
                
                  Enhance your Reddit experience with our aged{" "}
                  <Link
                    href={"https://discordarena.com/accounts/reddit"}
                    className="underline font-bold"
                  >
                   Reddit accounts
                  </Link>
                  
                  , which allow you to participate in discussions and gain
                  credibility instantly. Browse through our Reddit accounts for
                  options that suit your needs.
                
                  In addition to accounts, we offer customized
                  <Link
                    href={"https://discordarena.com/accounts/discordserver"}
                    className="underline font-bold"
                  >
                    Discord servers
                  </Link>
                  
                  {" "}
                  and various Discord services. All our accounts are of the
                  highest quality, ensuring reliability and security.
                  Choose Discord Arena for quality, affordability, and secure
                  transactions. Start exploring our services today and boost
                  your social media presence with ease!
                </p>
            </div>
            <div className="flex-[1.8] lg:block ">
            <Link
                    href={"https://discordarena.com/accounts/discord"}
                    className="underline font-bold"
                  >
                    <Image src={smartPeople} className="" alt="buy aged accounts" />
                  </Link>
            </div>
            <div className="radial_one"></div>
            <div className="radial_two"></div>
          </div>

          {/* special discord offers */}
        </div>
      </div>

      <WeOffer />
      <div className="bg-black text-white pt-8 pb-12">
        <div className="min-h-[90vh] px-4 flex flex-col justify-center max-w-[1280px] mx-auto">
          <h1 className="text-3xl md:text-4xl text-center">
            Buy Premium Aged Discord Accounts & Social Media Profiles
          </h1>

          <div className="grid grid-cols-1 md:grid-cols-3 mt-[40px] gap-5">
            {specialDiscordServiceArray.map((item, index) => {
              return (
                <div
                  key={index}
                  className="border-2 border-[#A5A6F6] p-5 rounded-lg"
                >
                  <div className="h-[200px] flex items-center justify-center ">
                    <FaDiscord size={100} className="text-[#A5A6F6] dance" />
                  </div>
                  <p className="text-[16px] mb-3 font-semibold">
                    {item.heading}
                  </p>
                  <p className="text-[15px] mt-3 mb-2 opacity-90">
                    {item.paragraph}
                  </p>
                  <p className="mb-5 opacity-55 text-[14px] pl-2">
                    {item.description}
                  </p>
                  <p className="mb-5 opacity-55 text-[14px] pl-2">
                    {item.descriptionOne && item.descriptionOne}
                  </p>
                  <p className="mb-5 opacity-55 text-[14px] pl-2">
                    {item.description && item.descriptionTwo}
                  </p>
                  <Link
                    href={"/accounts/discord"}
                    className="border-[#A5A6F6] border-2 px-4 py-1 text-[#A5A6F6] rounded-lg"
                  >
                    Purchase
                  </Link>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      <BestProduct />
      <WhyChoose />

      <CustomerReview />
      <ContactUs />
      <Footer />
    </div>
  );
}
