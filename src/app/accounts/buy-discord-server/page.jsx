import React from "react";
import { Actor } from "next/font/google";
import discordData from "../../../dataFolder/discordserver.json";
import { FaDiscord } from "react-icons/fa";
import Link from "next/link";
import Footer from "@/components/Footer";
import server_image from "../../../../public/discord-arena-creatives/server-boost.svg";
import Image from "next/image";

const actor = Actor({ weight: "400", subsets: ["latin"] });

export const generateMetadata = () => {
  const title =
    "Buy Aged Discord Servers | Old & Premium Servers";
  const description =
    "Enhance your Discord server with premium features and verified accounts. Our servers come with high activity levels, custom emojis, and dedicated support channels, perfect for boosting engagement and community interaction.";
  const keywords =
    "premium Discord servers, buy Discord servers, verified Discord servers, high activity Discord servers, custom emoji Discord servers, dedicated support channels, engaged community Discord servers";
  const author = "Discord Arena";
  const ogUrl = "https://www.discordarena.com/";
  const ogImage = "https://example.com/og-image.jpg";

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
              <h1 className="text-3xl md:text-4xl font-semibold mb-2">
                Buy Premium & Aged Discord Servers now
              </h1>
              <p className="lg:text-2xl text-[22px] mb-4 lg:w-[70%] opacity-90 md:w-[60%] sm:w-[80%]">
                Enhance Your Discord Server with Premium Features
              </p>
              <p className="text-[#dcdcdc] lg:w-[90%] md:w-[70%] text-[17px] sm:w-[80%] opacity-80">
                Step into the ultimate hub for transforming your Discord server
                experience! Delve into a realm of premium & aged Discord accounts,
                expertly designed to elevate every aspect of your server&apos;s
                communication, management, and overall journey. Unlock exclusive
                features, bolster your server&apos;s credibility with verified
                accounts, and distinguish yourself with custom handles. Our
                Discord server page serves as your portal to a seamless,
                enriched, and personalized Discord adventure. Embark on this
                journey, explore the endless possibilities, and redefine your
                online presence within the dynamic Discord Arena!
              </p>
            </div>
            <div className="lg:w-[90%] mb-[20px] lg:mb-0 flex items-center justify-center ">
              <Image
                className="object-fit w-[60%] lg:w-[300px] max-w-[300px]"
                src={server_image}
                alt="image showcasing a person with discord server icon"
              />
            </div>
          </div>
          <div className="min-h-[500px] py-12">
            <p className="text-[1.5rem] md:text-[1.75rem] font-semibold mb-2">
              Buy Old or Aged Discord Servers
            </p>
            <div className="grid grid-cols-1 mt-5 gap-4 sm:grid-cols-2 lg:grid-cols-3 ">
              {discordData.map((item, index) => {
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
                      href={`/accounts/buy-discord-server/${item.name
                        .split(" ")
                        .join("-")
                        .toLowerCase()}`}
                      className="my-3 text-[14px] font-semibold tracking-widest sm:text-[15px]"
                    >
                      Buy{" "}
                      <span className="rounded-sm bg-[#F6EBFF] px-3 py-1 text-black">
                        {item.year}
                      </span>{" "}
                      Premium Old & Aged Discord Servers
                    </Link>
                    <ul className="list-disc mt-2 pl-4 text-[13px] opacity-85">
                      <li>{item.smallShowFiveFeatures.feature1}</li>
                      <li>{item.smallShowFiveFeatures.feature2}</li>
                      <li>{item.smallShowFiveFeatures.feature3}</li>
                      <li>{item.smallShowFiveFeatures.feature4}</li>
                      <li>{item.smallShowFiveFeatures.feature5}</li>
                    </ul>
                    <div className="mt-5 flex items-center gap-3">
                      {/* <Link
                        href={`/accounts/buy-discord-server/${item.name
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
                        className="rounded-md bg-[#00C89D] text-white px-4 py-1 font-semibold "
                      >
                        {item.price}
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
