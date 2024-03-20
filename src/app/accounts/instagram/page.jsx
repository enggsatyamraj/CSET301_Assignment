"use client";
import React from "react";
import { Actor } from "next/font/google";
import instagramData from "../../../dataFolder/instagram.json";
import Link from "next/link";
import { FaInstagram } from "react-icons/fa";
import Head from "next/head";
import Footer from "@/components/Footer";

const actor = Actor({ weight: "400", subsets: ["latin"] });
// console.log(instagramData);

const jsonLdScript = {
  "@context": "https://schema.org/",
  "@type": "ItemList",
  itemListElement: instagramData.map((item, index) => {
    return {
      "@type": "Product",
      position: index + 1,
      name: item.name,
      description: item.introduction,
      sku: `Instagram-${item.id}`,
      image: "URL_TO_IMAGE", // Replace with the actual URL of your product image
      offers: {
        "@type": "Offer",
        priceCurrency: "USD",
        price: item.price,
        itemCondition: "https://schema.org/NewCondition", // You can adjust this based on your condition
        availability: "https://schema.org/InStock", // Adjust based on availability
        seller: {
          "@type": "Organization",
          name: "Discord Arena",
        },
      },
      brand: {
        "@type": "Organization",
        name: "Discord Arena",
      },
    };
  }),
};

const page = () => {
  return (
    <div className={actor.className}>
      <Head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta
          name="description"
          content="Enhance your Instagram experience with premium accounts from Discord Arena. Explore exclusive features, boosted profiles, and more."
        />
        <meta
          name="keywords"
          content="Instagram, Instagram accounts, Premium accounts, Boosted profiles, Social media"
        />
        <meta name="author" content="Discord Arena" />

        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta
          property="og:url"
          content="https://www.discordarena.com/instagram"
        />
        <meta
          property="og:title"
          content="Instagram Accounts - Discord Arena"
        />
        <meta
          property="og:description"
          content="Enhance your Instagram experience with premium accounts from Discord Arena. Explore exclusive features, boosted profiles, and more."
        />
        <meta property="og:image" content="URL_TO_YOUR_LOGO_IMAGE" />
        <meta property="og:image:alt" content="Discord Arena Logo" />

        {/* Twitter */}
        <meta property="twitter:card" content="summary_large_image" />
        <meta
          property="twitter:url"
          content="https://www.discordarena.com/instagram"
        />
        <meta
          property="twitter:title"
          content="Instagram Accounts - Discord Arena"
        />
        <meta
          property="twitter:description"
          content="Enhance your Instagram experience with premium accounts from Discord Arena. Explore exclusive features, boosted profiles, and more."
        />
        <meta property="twitter:image" content="URL_TO_YOUR_LOGO_IMAGE" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdScript) }}
        />
      </Head>
      <div className="bg-[#121212] text-[#fff] min-h-[100vh] sm:px-12 px-7 pb-6 pt-[100px]">
        <div className="max-w-[1000px] mx-auto">
          {/* hero section */}
          {/* <button
            onClick={() => {
              window.history.back();
            }}
            className="border-[1px] px-3 py-1 rounded-lg"
          >
            Go Back
          </button> */}
          <div className="min-h-[400px] flex flex-col justify-center ">
            <h1 className="text-3xl md:text-4xl font-semibold mb-2">
              Instagram Accounts
            </h1>
            <b className="lg:text-2xl text-[22px] mb-4 lg:w-[50%] opacity-90 md:w-[60%] sm:w-[80%]">
              Elevate Your Instagram Presence with Exclusive Features and
              Verified Profiles
            </b>
            <p className="text-[#dcdcdc] lg:w-[60%] md:w-[70%] text-[17px] sm:w-[80%] opacity-80">
              Immerse yourself in a world of premium Instagram accounts crafted
              to enhance your social media journey. Boost your profile&apos;s
              credibility with verified accounts, unlock exclusive features, and
              make a statement with custom handles. Your doorway to a seamless,
              enriched, and tailored Instagram adventure awaits. Explore the
              possibilities and redefine your online presence in the Instagram
              Universe!
            </p>
          </div>
          <div className="min-h-[500px] py-12">
            <h2 className="text-[1.5rem] md:text-[1.75rem] font-semibold mb-2">
              Shop Instagram Accounts
            </h2>
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 ">
              {instagramData.map((item, index) => {
                return (
                  <div
                    key={item.id}
                    className={`border-[1px] h-fit overflow-hidden rounded-md p-4`}
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
                      Instagram Account for ${item.price}
                    </p>
                    <ul className="list-disc pl-4 text-[13px] opacity-85">
                      <li>
                        {item.smallShowFiveFeatures &&
                          item.smallShowFiveFeatures.feature1}
                      </li>
                      <li>
                        {item.smallShowFiveFeatures &&
                          item.smallShowFiveFeatures.feature2}
                      </li>
                      <li>
                        {item.smallShowFiveFeatures &&
                          item.smallShowFiveFeatures.feature3}
                      </li>
                      <li>
                        {item.smallShowFiveFeatures &&
                          item.smallShowFiveFeatures.feature4}
                      </li>
                      <li>
                        {item.smallShowFiveFeatures &&
                          item.smallShowFiveFeatures.feature5}
                      </li>
                    </ul>
                    <div className="mt-5 flex items-center gap-3">
                      <Link
                        href={`/accounts/instagram/${item.id}`}
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
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default page;
