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
import { GoogleTagManager } from "@next/third-parties/google";

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
          style={{ display: "none", visibility: "hidden" }}
        ></iframe>
      </noscript>

      <Head>
        <GoogleTagManager gtmId="G-47WWXHZ0GV" />
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta
          name="description"
          content="Discover top-tier aged and verified Discord accounts at Discord Arena. Boost your online presence with our premium services and unbeatable prices."
        />
        <meta
          name="keywords"
          content="Aged Discord accounts, verified Discord accounts, buy Discord accounts, Discord server boosts, social media accounts for sale, Buy Instagram accounts"
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
                Welcome to Discord Arena: Your Source for{" "}
                <span className="span_text">Aged Discord Accounts</span>{" "}
                and More
              </p>
              <p className=" md:text-[16px] text-[15px] w-[99%] opacity-60">
               <span>At Discord Arena, we offer high-quality aged Discord accounts, Instagram accounts, and Reddit accounts. Whether you're a business, influencer, or gamer, our accounts help you quickly establish a strong presence on social media.<br/><br/></span>

<span>Our aged Discord accounts let you join exclusive servers and enjoy enhanced security without the hassle of starting from scratch. Check out our selection of <u><a href="https://discordarena.com/accounts/discord">buy Discord accounts</a></u>, including <u><a href="https://discordarena.com/accounts/discord/buy-2015-aged-discord-account">2015 Discord accounts.</a></u><br/><br/></span>

<span>We also provide aged <u><a href="https://discordarena.com/accounts/instagram">Instagram accounts</a></u> with a built-in following, making it easier to engage with a larger audience. Explore our Instagram accounts to find the perfect one for you.<br/><br/></span>

<span>Enhance your Reddit experience with our aged <u><a href="https://discordarena.com/accounts/reddit">Reddit accounts</a></u>, which allow you to participate in discussions and gain credibility instantly. Browse through our Reddit accounts for options that suit your needs.<br/><br/></span>

<span>In addition to accounts, we offer customized <u><a href="https://discordarena.com/accounts/discordserver">Discord servers</a></u> and various Discord services. All our accounts are of the highest quality, ensuring reliability and security.<br/><br/></span>

<span>Choose Discord Arena for quality, affordability, and secure transactions. Start exploring our services today and boost your social media presence with ease!<br/><br/></span>
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
          <h1 className="text-3xl md:text-4xl text-center">
            Buy Premium Aged Discord & Social Media Accounts
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
