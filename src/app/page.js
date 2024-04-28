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

const actor = Actor({ weight: "400", subsets: ["latin"] });

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
        "Transform your Discord server into a VIP experience with a massive 14x Server Boost for 3 months! Enjoy an unparalleled level of perks for you and your community, including:",
      // paragraph:
      // "Transform your Discord server into a VIP experience with a massive 14x Server Boost for 3 months! Enjoy an unparalleled level of perks for you and your community, including:",
      description:
        "Blazing-fast voice chat: Crystal-clear communication with no lag.Ultra-high video quality: Stream like a pro with smooth, high-resolution video.Custom roles and permissions: Fine-tune your server's management with granular control.Expanded file upload limits: Share large files and content seamlessly.Premium server features: Unlock exclusive benefits like custom emojis, animated icons, and more!Activate your instant delivery boost now and take your server to the next level! This limited-time offer won't last forever, so don't miss out!",
      link: "#",
      borderColor: "#CE9031",
    },
    {
      heading:
        "Supercharge Your Discord Server for 30 Days: 14x Boost with Instant Activation",
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
      <noscript>
        <iframe
          src="https://www.googletagmanager.com/ns.html?id=GTM-KM5VZD9Z"
          height="0"
          width="0"
          style={{ display: 'none', visibility: 'hidden' }}
        ></iframe>
      </noscript>

      <Head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta
          name="description"
          content="Discover a diverse selection of aged Discord,  and Telegram accounts, including verified and phone-verified options, at unbeatable prices. Buy Discord accounts from 2015 and beyond, with the assurance of authenticity and quality. Our collection includes aged Discord accounts for sale, providing you with established communities and high-engagement profiles. We offer verified Discord accounts for sale, ensuring credibility and trustworthiness. Additionally, explore our range of services to buy server boosts for Discord, enhancing your server's visibility and reach. Elevate your  presence with our solutions to buy  followers, boosting your social proof and influence. Explore our selection of aged social media accounts and tokens, tailored to meet your specific needs. Join the ranks of successful influencers, marketers, and businesses who have leveraged our premium accounts to achieve their goals. Experience growth, credibility, and success like never before. Unlock the power of established social media accounts today."
        />
        <meta
          name="keywords"
          content="dis cord, discord software, discord login
                                  discord log in,
                                  discord login in,
                                  discord bots,
                                  discord website,
                                  bots in discord,
                                  bot on discord,
                                  discord bot discord,
                                  instagram account buy and sell,
                                    instagram account for,
                                    sale instagram page,
                                    used instagram account,
                                    link accounts instagram,
                                    get on instagram,
                                    find other instagram account,
                                    buy page instagram,
                                    instagram buy sell,
                                    instagram account for sale free,

"
        />
        <meta name="author" content="Discord Arena" />

        {/* Open Graph meta tags */}
        <meta
          property="og:title"
          content="Buy Discord Accounts as Ease| Discord Arena"
        />
        <meta
          property="og:description"
          content="Discover a diverse selection of aged Discord, , and Telegram accounts, including verified and phone-verified options, at unbeatable prices. Buy Discord accounts from 2015 and beyond, with the assurance of authenticity and quality. Our collection includes aged Discord accounts for sale, providing you with established communities and high-engagement profiles. We offer verified Discord accounts for sale, ensuring credibility and trustworthiness. Additionally, explore our range of services to buy server boosts for Discord, enhancing your server's visibility and reach. Elevate your  presence with our solutions to buy  followers, boosting your social proof and influence. Explore our selection of aged social media accounts and tokens, tailored to meet your specific needs. Join the ranks of successful influencers, marketers, and businesses who have leveraged our premium accounts to achieve their goals. Experience growth, credibility, and success like never before. Unlock the power of established social media accounts today."
        />
        <meta
          property="og:type"
          content="Buying and selling of discord accounts || Buying and selling of instagram accounts"
        />
        <meta property="og:url" content="https://www.discordarena.com/" />
        <meta property="og:image" content="https://www.discordarena.com/" />
        <meta
          property="og:image:alt"
          content="Buying and selling of discord accounts || Buying and selling of instagram accounts"
        />

        {/*  meta tags */}
        <meta
          name=":description"
          content="Discover a diverse selection of aged Discord, , and Telegram accounts, including verified and phone-verified options, at unbeatable prices. Buy Discord accounts from 2015 and beyond, with the assurance of authenticity and quality. Our collection includes aged Discord accounts for sale, providing you with established communities and high-engagement profiles. We offer verified Discord accounts for sale, ensuring credibility and trustworthiness. Additionally, explore our range of services to buy server boosts for Discord, enhancing your server's visibility and reach. Elevate your  presence with our solutions to buy  followers, boosting your social proof and influence. Explore our selection of aged social media accounts and tokens, tailored to meet your specific needs. Join the ranks of successful influencers, marketers, and businesses who have leveraged our premium accounts to achieve their goals. Experience growth, credibility, and success like never before. Unlock the power of established social media accounts today."
        />
        <meta name=":image" content="URL to your image" />

        {/* JSON-LD Schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
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
            }),
          }}
        />
        {/* <script>(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start';
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-KM5VZD9Z');</script> */}
      </Head>
      <div className="bg-normal w-[100%]">
        <div className="max-w-[1280px] mx-auto px-4 text-white relative min-h-[100vh] w-[100%] ">
          <div
            id="mainSection"
            className="min-h-[100vh]  relative flex items-center flex-col lg:flex-row pl-[10px] py-[100px] sm:pl-[30px] gap-5 justify-center z-4"
          >
            <div className=" flex-[3]">
              <p className="pt-[60px]  text-4xl sm:text-5xl mb-10 md:text-5xl lg:text-[55px]  ">
              Welcome to Discord Arena {" "}
                <span className="span_text">Premier Source for Verified</span> accounts
              </p>
              <p className=" md:text-[16px] text-[15px] w-[99%] opacity-60">
              Welcome to Discord Arena, your premier destination for top-tier aged Discord and Telegram accounts. Discover a diverse selection of verified and phone-verified options at unbeatable prices. Whether you&lsquo;re in search of Discord accounts from 2015 and beyond or seeking to enhance your server&lsquo;s visibility with server boosts, we&lsquo;ve got you covered.
              Our collection features aged Discord accounts for sale, offering established communities and high-engagement profiles for your needs. Dive into our verified Discord accounts for sale, ensuring credibility and trustworthiness with every purchase. Plus, explore our range of services to buy server boosts for Discord, elevating your server&lsquo;s presence and reach in no time.
              Explore our solutions to buy followers, propelling your credibility and success to new heights. Additionally, browse our selection of aged social media accounts and tokens, meticulously tailored to meet your specific requirements.
              </p>
            </div>
            <div className="flex-[1.5] lg:block ">
              <Image src={smartPeople} className="" alt="smart people images" />
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
          <h1 className="text-3xl md:text-4xl text-center">DISCORD SERVICES</h1>

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
                  <b className="text-[16px] mb-3 font-semibold">
                    {item.heading}
                  </b>
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
