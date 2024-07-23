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
      section: "Section 1: 2015 Discord Accounts",
      title: "Elevate Your Community with 2015 Discord Accounts",
      heading: "Unlock the Potential with 2015 Discord Accounts",
      description:
        "Gain access to premium 2015 Discord accounts that offer a rich history of engagement and activity. Elevate your community with accounts that have established reputations and connect effortlessly with thriving Discord communities.",
      features: [
        "Established Accounts: Benefit from the credibility and history of 2015 accounts.",
        "Enhanced Security: Enjoy added security features with older accounts.",
        "Increased Engagement: Boost your server’s activity with active and experienced members.",
        "Customizable: Tailor the accounts to fit your server’s unique identity.",
      ],
      advantages: [
        "Trust and Reliability: Users trust accounts with a long history.",
        "Community Integration: Seamless integration into existing communities.",
        "Higher Engagement Rates: Increased interaction from seasoned users.",
      ],
      price: "Starting from $20 per account",
      callToAction:
        "Purchase your 2015 Discord Account now and give your server the boost it needs!",
      link: "accounts/discord/buy-2015-aged-discord-account",
    },
    {
      section: "Section 2: 2016 Discord Accounts",
      title: "Boost Your Server with 2016 Discord Accounts",
      heading: "Experience Growth with 2016 Discord Accounts",
      description:
        "Invest in 2016 Discord accounts to take advantage of established profiles with a proven track record. These accounts offer the perfect blend of history and activity, ensuring your server thrives with active participation.",
      features: [
        "Established Profiles: Accounts with a solid history from 2016.",
        "Enhanced Engagement: Boost interactions with active and experienced users.",
        "Custom Emojis and Roles: Personalize your server with custom features.",
        "Seamless Integration: Easy integration into existing communities.",
      ],
      advantages: [
        "Proven Track Record: Benefit from accounts with a history of engagement.",
        "Active Users: Engage with users who are familiar with Discord.",
        "Customization Options: Enhance your server with unique features.",
      ],
      price: "Starting from $15 per account",
      callToAction:
        "Purchase your 2016 Discord Account today and watch your community grow!",
      link: "accounts/discord/buy-2016-aged-discord-account",
    },
    {
      section: "Section 3: 2017 Discord Accounts",
      title: "Enhance Your Discord Server with 2017 Discord Accounts",
      heading: "Unlock New Opportunities with 2017 Discord Accounts",
      description:
        "Acquire 2017 Discord accounts to enhance your server with established users. These accounts bring a blend of activity and credibility, perfect for boosting your community’s engagement and interaction.",
      features: [
        "Well-Established Accounts: 2017 accounts with a history of activity.",
        "Engaged Users: Increase server activity with experienced members.",
        "Advanced Security: Benefit from added security features in older accounts.",
        "Customizable Options: Tailor accounts to fit your server’s needs.",
      ],
      advantages: [
        "Credibility and Trust: Users trust accounts with a history of activity.",
        "Higher Engagement: Increased interaction from established users.",
        "Security Features: Enhanced security with older, more established accounts.",
      ],
      price: "Starting from $10 per account",
      callToAction:
        "Purchase your 2017 Discord Account now and elevate your server’s engagement!",
      link: "accounts/discord/buy-2017-aged-discord-account",
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
                {
                  <span>
                    Welcome to <span className="font-bold">Discord Arena</span>,
                    your premier destination for{" "}
                    <span className="font-bold">aged Discord accounts</span> and
                    social media accounts. We specialize in providing
                    high-quality <span className="font-bold">aged Discord</span>{" "}
                    and <span className="font-bold">Instagram accounts</span> to
                    help you enhance your online presence instantly.
                    <br />
                    Looking to{" "}
                    <span className="font-bold">buy aged Discord?</span> Our
                    selection of{" "}
                    <Link
                      href={"accounts/discord"}
                      className="underline font-bold"
                    >
                      Discord accounts
                    </Link>{" "}
                    includes everything from{" "}
                    <Link
                      href={"accounts/discord/buy-2015-aged-discord-account"}
                      className="underline font-bold"
                    >
                      2015 Discord accounts
                    </Link>{" "}
                    to the latest options, all at competitive prices. Whether
                    you need a{" "}
                    <span className="font-bold">Discord account aged</span> for
                    immediate use or an{" "}
                    <span className="font-bold">
                      instant Discord aged account
                    </span>
                    , we have you covered.
                    <br />
                    Our{" "}
                    <Link
                      href={"accounts/discord/buy-2023-aged-discord-account"}
                      className="underline font-bold"
                    >
                      aged Discord accounts
                    </Link>{" "}
                    are perfect for those searching for a{" "}
                    <span className="font-bold">Discord old account buy</span>{" "}
                    or an <span className="font-bold">old Discord account</span>{" "}
                    for sale. With{" "}
                    <span className="font-bold">Discord Arena</span>, you get
                    secure transactions, exceptional customer service, and
                    top-quality accounts that help you stand out.
                    <br />
                    Explore our{" "}
                    <Link
                      href={"accounts/instagram"}
                      className="underline font-bold"
                    >
                      Instagram accounts
                    </Link>
                    , designed to give you a head start with pre-established
                    followers and engagement. Whether you’re looking for{" "}
                    <span className="font-bold">discordarena</span>,{" "}
                    <span className="font-bold">discord arena</span>, or to{" "}
                    <span className="font-bold">buy account Discord</span>, our
                    platform ensures you find exactly what you need.
                    <br />
                    Choose <span className="font-bold">Discord Arena</span> for
                    all your social media needs and boost your influence
                    effortlessly. Discover why we are the trusted choice for{" "}
                    <span className="font-bold">
                      buying aged Discord accounts
                    </span>{" "}
                    and more.
                  </span>
                }
                {/* <br/> */}
                {/* At Discord Arena, we offer high-quality aged Discord accounts,
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
                  your social media presence with ease! */}
              </p>
            </div>
            <div className="flex-[1.8] lg:block ">
              <Link href={"accounts/discord"} className="underline font-bold">
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
            Buy Premium Aged Discord Accounts and Servers
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
                  <p className="text-[23px] mb-3 font-bold">{item.section}</p>
                  <p className="text-[19px] mt-3 mb-2 opacity-90">
                    {item.title}
                  </p>
                  <p className="text-[17px] mt-3 mb-2 opacity-80">
                    {item.heading}
                  </p>
                  <p className="mb-5 opacity-55 text-[15px]">
                    {item.description}
                  </p>
                  <p className="text-[17px] mt-3 mb-2 opacity-80">Features</p>
                  <p className="mb-5 opacity-55 text-[14px]">
                    {item.features.map((item, index) => {
                      return <li key={index}>{item}</li>;
                    })}
                  </p>
                  <p className="text-[17px] mt-3 mb-2 opacity-80">Advantages</p>
                  <p className="mb-5 opacity-55 text-[14px]">
                    {item.advantages.map((item, index) => {
                      return <li key={index}>{item}</li>;
                    })}
                  </p>
                  <p className="mb-5 font-bold opacity-80 text-[20px] ">
                    {item.price}
                  </p>
                  <p className="mb-5 opacity-55 text-[14px] ">
                    {item.callToAction}
                  </p>
                  <Link
                    href={item.link}
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
