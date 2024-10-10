import Footer from "@/components/Footer";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { IoStarSharp } from "react-icons/io5";
import about_us from "../../../public/discord-arena-creatives/about-us.svg";
import trustpilot_icon from "../../../public/icons/trustpilot-icon.png";

export const generateMetadata = () => {
  const title = "About Discord Arena | Buy Discord Accounts & Server Boosts";
  const description =
    "Discover Discord Arena, your trusted source for aged Discord accounts, verified profiles, and high-quality social media accounts.";
  const keywords =
  ["Discord Arena", "aged Discord accounts", "trusted account provider", "verified profiles", "premium social media accounts", "Discord supplier", "customer satisfaction", "reliable Discord services", "social media account sales", "expert Discord management"];
  const author = "Discord Arena";
  const ogUrl = "https://www.discordarena.com/aboutus";
  const ogImage = "URL_TO_YOUR_SOCIAL_SHARE_IMAGE";
  const twitterHandle = "@discordarena";

  const jsonLdScript = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Discord Arena",
    url: "https://www.discordarena.com/",
    logo: "URL_TO_YOUR_LOGO_IMAGE",
    description:
      "Empowering your digital presence with premium Discord, Instagram, and accounts. Join Discord Arena to buy exclusive and high-quality accounts tailored to your needs.",
    foundingDate: "2022",
    founders: [
      {
        "@type": "Person",
        name: "Your Name",
        url: "YOUR_PERSONAL_URL",
      },
    ],
    contactPoint: {
      "@type": "ContactPoint",
      email: "YOUR_EMAIL",
      contactType: "customer support",
    },
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
          alt: "Discord Arena About Us",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      site: twitterHandle,
      title: title,
      description: description,
      images: [ogImage],
    },
    other: {
      "application-ld+json": JSON.stringify(jsonLdScript),
    },
  };
};

const AboutPage = () => {
  // useEffect(() => {
  //   // Disable right-click
  //   document.addEventListener("contextmenu", (event) => {
  //     event.preventDefault();
  //   });

  //   // Disable keyboard shortcuts
  //   document.addEventListener("keydown", (event) => {
  //     // Disable F12
  //     if (event.keyCode === 123) {
  //       event.preventDefault();
  //     }

  //     // Disable Ctrl+Shift+I, Ctrl+Shift+C, Ctrl+Shift+J, and Ctrl+U
  //     if (
  //       event.ctrlKey &&
  //       event.shiftKey &&
  //       (event.keyCode === 73 || event.keyCode === 74 || event.keyCode === 67)
  //     ) {
  //       event.preventDefault();
  //     }

  //     if (event.ctrlKey && event.keyCode === 85) {
  //       event.preventDefault();
  //     }
  //   });
  // }, []);
  return (
    <>
      <noscript>
        <iframe
          src="https://www.googletagmanager.com/ns.html?id=GTM-KM5VZD9Z"
          height="0"
          width="0"
          style={{ display: "none", visibility: "hidden" }}
        ></iframe>
      </noscript>

      <div className="bg-normal w-[100%] pt-[100px]">
        <div className="max-w-[1280px] mx-auto px-7 sm:px-12 text-white relative min-h-[60vh] w-[100%]">
          <div className="min-h-[90vh] py-10 relative flex flex-col-reverse lg:flex-row justify-center z-4">
            <div className="flex flex-col justify-center">
              <p className="text-[#A5A6F6] font-bold md:text-2xl text-2xl my-3 tracking-widest">
                About Discord Arena: Trusted Provider to Buy Premium Accounts, Discord | Instagram | Server Boosts | Telegram 
              </p>
              <h1 className="text-3xl sm:text-3xl mb-6 md:text-4xl sm:w-[80%] md:w-[70%] lh:w-[60%]">
                Enhance Your Online Presence with Premium, Featurefull & Aged Accounts
              </h1>
              <p className="text-[15px] md:w-[70%] sm:w-[80%] w-[90%] lg:w-[80%] opacity-60">
                Welcome to{" "}
                <Link href={"/"} className="anchorText">
                  Discord Arena
                </Link>
                ! We offer premium{" "}
                <Link
                  href={"accounts/buy-discord-accounts"}
                  className="anchorText"
                >
                  aged Discord accounts
                </Link>{" "}
                and{" "}
                <Link
                  href={"accounts/buy-discord-server-boost"}
                  className="anchorText"
                >
                  Discord server boosts
                </Link>
                <Link
                  href={"accounts/buy-telegram-accounts"}
                  className="anchorText"
                >
                  Telegram accounts
                </Link>
                , and high-quality{" "}
                <Link
                  href={"accounts/buy-instagram-accounts"}
                  className="anchorText"
                >
                  Instagram
                </Link>{" "}
                and{" "}
                <Link
                  href={"accounts/buy-reddit-accounts"}
                  className="anchorText"
                >
                  Reddit accounts
                </Link>{" "}
                to elevate your digital presence. Since 2022, our mission has
                been to provide exclusive, reliable accounts that help you stand
                out online.
              </p>
              <p className="text-[15px] mt-4 md:w-[70%] sm:w-[80%] w-[90%] lg:w-[80%] opacity-60">
              At Discord Arena, we understand the importance of a strong online presence. Our selection includes:
                <ul className="list-disc pl-4 mt-2 text-[13px] opacity-85">
                  <li>
                    Premium Discord Accounts: Aged and verified for credibility.
                  </li>
                  <li>
                    Discord Server Boosts: Boost server performance and
                    engagement.
                  </li>
                  <li>
                    Telegram Accounts: Active, aged accounts for instant participation in groups and channels.
                  </li>
                  <li>
                    Viral & Aged Instagram Accounts: Established profiles with real
                    followers.
                  </li>
                  <li>
                    Reddit Accounts: Aged, active accounts for engagement in the Reddit community.
                  </li>
                </ul>
                {/* At Discord Arena, we understand that a vibrant online presence
                is crucial in today&apos;s digital landscape. Our carefully
                curated selection of accounts reflects our commitment to
                delivering excellence. Whether you&apos;re seeking a Discord
                community that aligns with your interests, an Instagram account
                with a unique aesthetic, or a handle that stands out, Discord
                Arena is dedicated to providing accounts that go beyond
                expectations. We believe in the power of exclusivity, quality,
                and a seamless user experience, and we&apos;re here to help you
                achieve your online aspirations. */}
                <br />
                Choose Discord Arena for secure transactions, competitive
                prices, and accounts that enhance your social media experience.
                Start browsing now to buy the perfect account for your needs!
              </p>
              <Link
                href="/contactus"
                className="bg-[#A5A6F6] w-fit text-black text-[14px] px-3 mt-5 font-semibold py-2 rounded-[15px]"
              >
                CONTACT US
              </Link>
            </div>
            <div className="lg:w-[90%] mb-[20px] lg:mb-0 flex items-center justify-center ">
              <Image
                className="object-fit w-[60%] lg:w-[300px] max-w-[300px]"
                src={about_us}
                alt="image showcasing a person with social media accounts"
              />
            </div>
            <div className="radial_one"></div>
          </div>
        </div>
      </div>

      <div className="bg-[#121212] py-12">
        <div className="max-w-[1280px] mx-auto px-7 sm:px-12 text-white relative min-h-[60vh] w-[100%]">
          <h2 className="text-3xl font-bold">Our Services</h2>
          <p className="opacity-80 mt-5 text-[15px] w-[98%] md:w-[80%]">
            At Discord Arena, we take pride in offering a curated selection of
            premium accounts in three major categories: Discord, Instagram, and
            other social media platforms. Each account is meticulously chosen to
            ensure exclusivity, quality, and a seamless experience for our
            users. Whether you&apos;re a gamer looking for the perfect Discord
            community or a social media enthusiast seeking a premium Instagram
            account, Discord Arena is your ultimate destination.
          </p>

          <h3 className="text-3xl font-bold mt-[50px]">
            Why Choose Discord Arena?
          </h3>
          <p className="opacity-80 mt-5 text-[15px] w-[98%] md:w-[80%] mb-10">
            - Exclusive Accounts: Access a handpicked selection of exclusive
            Discord, Instagram, and social media accounts.
            <br /> - Quality Assurance: Each account undergoes rigorous quality
            checks to ensure authenticity and premium features.
            <br /> - Tailored Experience: Find accounts that suit your
            interests, preferences, and online aspirations.
            <br /> - Customer Support: Our dedicated customer support team is
            ready to assist you at every step.
            <br /> - Secure Transactions: Experience secure and transparent
            transactions for a worry-free purchase.
          </p>

          {/* <div
            className="flex-start items-center mt-6 mb-7"
            className="trustpilot-widget"
            data-locale="en-US"
            data-template-id="56278e9abfbbba0bdcd568bc"
            data-businessunit-id="667868fbdf3459dd4652dd4e"
            data-style-height="52px"
            data-style-width="100%"
          > */}
          <Link
            className="flex items-center gap-2 mb-5"
            href="https://www.trustpilot.com/review/discordarena.com"
            target="_blank"
            rel="noopener"
          >
            Check us at
            <Image
              className="w-[100px]"
              src={trustpilot_icon}
              alt="image showcasing trustpilot icon"
            />
          </Link>
          {/* </div> */}
          <Link
            href="/"
            className="border-[#A5A6F6] border-[1px] text-[#A5A6F6] px-5 py-2 rounded-[20px] hover:bg-[#A5A6F6] hover:text-black hover:cursor-pointer transition-all duration-300 font-semibold w-fit"
          >
            GO TO HOME
          </Link>
        </div>
      </div>
    </>
  );
};

export default AboutPage;
