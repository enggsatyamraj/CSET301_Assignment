import React from "react";
import { Actor } from "next/font/google";
import discordData from "../../../dataFolder/discord.json";
import { FaDiscord } from "react-icons/fa";
import Link from "next/link";
import Footer from "@/components/Footer";

const actor = Actor({ weight: "400", subsets: ["latin"] });

export const generateMetadata = () => {
  const title = "Buy Aged Discord Accounts | Premium Discord Accounts";
  const description =
    "Buy aged and premium Discord accounts to boost your server's credibility. Our accounts come with verified status, custom handles, and exclusive features to enhance your Discord experience. Perfect for server management, community building, and personal use. ";
  const keywords =
    "aged Discord accounts, buy Discord accounts, premium Discord accounts, verified Discord accounts, custom handle Discord accounts, Discord server management";
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
      <div className="bg-[#121212] text-[#fff] min-h-[100vh] sm:px-12 px-7 pb-6 pt-[100px]">
        <div className="max-w-[1000px] mx-auto">
          <div className="min-h-[400px] flex flex-col justify-center ">
            <h1 className="text-3xl md:text-4xl font-semibold mb-2">
              Buy Discord Accounts
            </h1>
            <p className="lg:text-2xl text-[22px] mb-4 lg:w-[50%] opacity-90 md:w-[60%] sm:w-[80%]">
              Elevate Your Discord Experience with Premium Accounts
            </p>
            <p className="text-[#dcdcdc] lg:w-[60%] md:w-[70%] text-[17px] sm:w-[80%] opacity-80">
              Welcome to the ultimate destination for enhancing your Discord
              journey! Dive into a world of premium Discord accounts
              meticulously crafted to elevate your communication, server
              management, and overall Discord experience. Unleash exclusive
              features, boost your server&apos;s credibility with verified
              accounts, and stand out with custom handles. Our Discord accounts
              page is your gateway to a seamless, enriched, and personalized
              Discord adventure. Explore the possibilities and redefine your
              online presence in the Discord Arena!
            </p>
          </div>
          <div className="min-h-[500px] py-12">
            <p className="text-[1.5rem] md:text-[1.75rem] font-semibold mb-2">
              Shop Discord Accounts
            </p>
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 ">
              {discordData.map((item, index) => {
                return (
                  <div
                    key={item.id}
                    className={`border-[1px] overflow-hidden rounded-md p-4`}
                  >
                    <div className="flex h-[150px] mb-3 w-[100%] items-center justify-center rounded-sm bg-[#BBA8FD]">
                      <FaDiscord
                        size={50}
                        className="accountDance text-[#8474C4]"
                      />
                    </div>

                    <Link
                      href={`/accounts/discord/${item.name
                        .split(" ")
                        .join("-")
                        .toLowerCase()}`}
                      className="my-3 text-[14px] font-semibold tracking-widest sm:text-[15px]"
                    >
                      Buy{" "}
                      <span className="rounded-sm bg-[#F6EBFF] px-3 py-1 text-black">
                        {item.year}
                      </span>{" "}
                      Discord Account
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
                        href={`/accounts/discord/${item.name
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
      <Footer />
    </div>
  );
};

export default page;
