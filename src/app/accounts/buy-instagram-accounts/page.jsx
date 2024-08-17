import React from "react";
import { Actor } from "next/font/google";
import instagramData from "../../../dataFolder/instagram.json";
import Link from "next/link";
import { FaInstagram } from "react-icons/fa";
import Head from "next/head";
import Footer from "@/components/Footer";
import instagram_image from "../../../../public/discord-arena-creatives/instagram.svg";
import Image from "next/image";

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

export const generateMetadata = () => {
  const title = "Buy Aged Instagram Accounts | Premium Verified Profiles";
  const description =
    "Enhance your Instagram presence with premium aged accounts. Our verified profiles come with custom handles and exclusive features to boost your social media credibility. Perfect for influencers, brands, and marketers. ";
  const keywords =
    "aged Instagram accounts, buy Instagram accounts, premium Instagram accounts, verified Instagram accounts, custom handle Instagram accounts, Instagram marketing";
  const author = "Discord Arena";
  const ogUrl = "https://www.discordarena.com/instagram";
  const ogImage = "URL_TO_YOUR_LOGO_IMAGE";

  const jsonLdScript = {
    "@context": "https://schema.org",
    "@type": "Organization",
    url: ogUrl,
    name: "Discord Arena",
    logo: ogImage,
    description: description,
    sameAs: [
      "https://www.facebook.com/your-facebook-url",
      "https://twitter.com/your-twitter-url",
      "https://www.instagram.com/your-instagram-url",
      // Add other social media URLs here
    ],
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
          alt: "Discord Arena Logo",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      url: ogUrl,
      title: title,
      description: description,
      images: [ogImage],
    },
    other: {
      "application-ld+json": JSON.stringify(jsonLdScript),
    },
  };
};

const page = () => {
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
      <div className="bg-[#121212] text-[#fff] min-h-[100vh] sm:px-12 px-7 pb-6 pt-[150px]">
        <div className="max-w-[1000px] mx-auto">
          <div className="min-h-[400px] flex flex-col-reverse lg:flex-row justify-center ">
            <div className="flex flex-col justify-center">
              <h1 className="text-2xl md:text-3xl lg:text-[2.2rem] font-semibold mb-4">
                Buy Aged Instagram Accounts – Starting from $3 Only
              </h1>
              <p className="lg:text-2xl text-[22px] mb-4 lg:w-[80%] opacity-90 md:w-[60%] sm:w-[80%]">
                High-Quality Aged Instagram Accounts for Sale
              </p>
              <p className="text-[#dcdcdc] lg:w-[90%] md:w-[70%] text-[17px] sm:w-[80%] opacity-80">
                <p>
                  Are you looking to quickly boost your Instagram presence? At
                  Discord Arena, we offer a variety of aged Instagram accounts
                  to help you achieve instant credibility and engagement. Our
                  accounts come with pre-established followers, making it easier
                  to grow your influence.
                </p>

                <p>
                  We have a diverse selection, including{" "}
                  <Link
                    className="anchorText"
                    href={
                      "instagram/buy-2013-instagram-accounts"
                    }
                  >
                    2013 Instagram accounts
                  </Link>{" "}
                  and affordable options starting at just $5. Whether you need
                  an account with a long history or simply an active follower
                  base, we have you covered. Check out our accounts starting at
                  $5 for the best deals.
                </p>

                <p>
                  Instagram accounts today and take your social media game to
                  the next level!
                </p>
              </p>
            </div>
            <div className="lg:w-[90%] mb-[20px] lg:mb-0 flex items-center justify-center ">
              <Image
                className="object-fit w-[60%] lg:w-[300px] max-w-[300px]"
                src={instagram_image}
                alt="image showcasing a person with instagram icon"
              />
            </div>
          </div>
          <div className="min-h-[500px] py-12">
            <p className="text-[1.5rem] md:text-[1.75rem] font-semibold mb-2">
              Shop Instagram Accounts
            </p>
            <div className="grid grid-cols-1 mt-3 gap-4 sm:grid-cols-2 lg:grid-cols-3 ">
              {instagramData.map((item, index) => {
                return (
                  <div
                    key={item.id}
                    className={`border-[1px] overflow-hidden rounded-md p-4`}
                  >
                    <img
                      src={`../discord-accounts/${item.image}`}
                      alt={item.name}
                      className="mb-4"
                    />

                    <Link
                      href={`/accounts/instagram/${item.name
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
                      {/* <Link
                        href={`/accounts/instagram/${item.name
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
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
