import Head from "next/head";
import Link from "next/link";
import React from "react";
import { FaArrowCircleRight, FaDiscord } from "react-icons/fa";
import discordImage from "../../public/accounts-cards/discord-accounts.svg";
import discordServerImage from "../../public/accounts-cards/discord-server-boosts.svg";
import Image from "next/image";

const BestProduct = () => {
  return (
    <div className="bg-[#121212] text-white">
      {/* <Head>
        <script type="application/ld+json">
          {`
          {
            "@context": "https://schema.org",
            "@type": "ItemList",
            "itemListElement": [
              {
                "@type": "Product",
                "name": "Discord",
                "description": "Social Media - Discord",
                "url": "https://www.discordarena.com/accounts/discord"
              },
              {
                "@type": "Product",
                "name": "Telegram",
                "description": "Social Media - Telegram",
                "url": "https://www.discordarena.com/accounts/telegram"
              },
              {
                "@type": "Product",
                "name": "Instagram",
                "description": "Social Media - Instagram",
                "url": "https://www.discordarena.com/accounts/instagram"
              },
              {
                "@type": "Product",
                "name": "Valorent",
                "description": "Gaming - Valorent",
                "url": "https://www.discordarena.com/accounts/valorent"
              },
              {
                "@type": "Product",
                "name": "League of Legends",
                "description": "Gaming - League of Legends",
                "url": "https://www.discordarena.com/accounts/league-of-legends"
              },
              {
                "@type": "Product",
                "name": "Minecraft",
                "description": "Gaming - Minecraft",
                "url": "https://www.discordarena.com/accounts/minecraft"
              }
            ]
          }
          `}
        </script>
      </Head> */}

      <div className="max-w-[1280px] pt-[70px] px-4 min-h-[100vh] grid grid-cols-1 md:grid-cols-3 mx-auto gap-4">
        <div>
          <p className="text-3xl w-[80%] font-semibold mb-4">
            Elevate Your Online Presence with Premium Aged Social Media
            Solutions
          </p>
          <p className="text-[15px] mb-4 opacity-90">
            Our selection of premium aged Social Media Solutions includes{" "}
            <Link href={"accounts/buy-discord-accounts"} className="anchorText">
              aged Discord accounts
            </Link>
            {" and "}
            <Link
              href={"accounts/buy-instagram-accounts"}
              className="anchorText"
            >
              Instagram accounts
            </Link>{" "}
            with real engagement, and{" "}
            <Link href={"accounts/buy-reddit-accounts"} className="anchorText">
              aged Reddit accounts
            </Link>{" "}
            for credible participation. Additionally, we offer{" "}
            <Link
              href={"accounts/buy-discord-server-boost"}
              className="anchorText"
            >
              Discord server boosts
            </Link>{" "}
            to elevate your community interactions. At Discord Arena, we are
            dedicated to providing top-quality solutions that help you stand out
            in the crowded digital space.{" "}
            <p>
              <Link href={"contactus"} className="anchorText">
                Contact us
              </Link>{" "}
              now and take advantage of our premium services to achieve your
              social media goals effortlessly.
            </p>
          </p>
          <Link
            href={"/accounts"}
            anchor="Explore all accounts"
            className="text-[13px] text-[#A5A6F6] border-[#A5A6F6] border-[1px] rounded-[30px] px-3 py-1"
          >
            Shop Now
          </Link>
        </div>

        <div className="h-full">
          <div className="border-2 p-4 rounded-lg">
            {/* <div className="h-[150px] bg-[#A5A6F6] mb-3 rounded-lg flex items-center justify-center">
              <Image
                src={discordImage}
                className="w-auto h-full"
                alt="discord image"
              />
            </div> */}
            <Image src={discordImage} className=" mb-4" alt="image showcasing discord icon for old Discord Accounts" />

            <p className="bg-[#A5A6F6] w-fit px-3 text-[15px] text-[#1A365D] rounded-[4px]">
              Discord Old Accounts
            </p>
            {/* <br /> */}
            <p className="text-[19px] mt-3 font-semibold">
              Discover our selection of aged Discord accounts. Perfect for those
              seeking Discord old accounts with history and credibility.
            </p>
            <Link
              href={"/accounts/buy-discord-accounts"}
              className="flex gap-2 items-center text-[#A5A6F6] cursor-pointer"
            >
              <Link href={"/accounts/buy-discord-accounts"}>
                Discover aged discord accounts
              </Link>
              <FaArrowCircleRight size={15} />
            </Link>
          </div>
          <div className="border-2 p-4 rounded-lg mt-4">
            <p className="bg-[#A5A6F6] w-fit px-3 text-[15px] text-[#1A365D] rounded-[4px]">
              Reddit Accounts
            </p>
            {/* <br /> */}
            <p className="text-[19px] mt-3 font-semibold">
              <p className="text-[19px] mt-3 font-semibold">
                Engage with the Reddit community using our aged Reddit accounts.
                Gain instant credibility and participate in high-value
                discussions.
              </p>
            </p>
            <p className="text-[19px] mt-3 font-semibold"> </p>
            <Link
              href={"/accounts/"}
              className="flex gap-2 items-center text-[#A5A6F6] cursor-pointer"
            >
              <Link href={"/accounts/buy-reddit-accounts"}>
                Explore reddit accounts
              </Link>
              <FaArrowCircleRight size={15} />
            </Link>
          </div>
        </div>

        <div className="h-full">
          <div className="border-2 p-4 rounded-lg">
            <p className="bg-[#A5A6F6] w-fit px-3 text-[15px] text-[#1A365D] rounded-[4px]">
              Aged Instaram Accounts
            </p>
            {/* <br /> */}
            <p className="text-[19px] mt-3 font-semibold">
              Boost your social media presence with our curated aged Instagram
              accounts. Ideal for instant followers and engagement.
            </p>
            <Link
              href={"/accounts/buy-instagram-accounts"}
              className="flex gap-2 items-center text-[#A5A6F6] cursor-pointer"
            >
              <Link href={"/accounts/instagram"}>Buy Instaram Accounts</Link>
              <FaArrowCircleRight size={15} />
            </Link>
          </div>
          <div className="border-2 p-4 rounded-lg mt-4">
            {/* <div className="h-[150px] bg-[#FFA800] flex items-center justify-center mb-3 rounded-lg"> */}
            <Image
              src={discordServerImage}
              className=" mb-4"
              alt="image showcasing discord server boost icon"
            />
            {/* </div> */}
            <p className="bg-[#A5A6F6] w-fit px-3 text-[15px] text-[#1A365D] rounded-[4px]">
              Discord Server Boosts
            </p>
            {/* <br /> */}
            <p className="text-[19px] mt-3 font-semibold">
              Take Discord server to the next level with our Discord server
              boosts. Improve audio quality, increase upload limits, and access
              exclusive perks to keep your community engaged.
            </p>
            <Link
              href={"/accounts/buy-discord-server-boost"}
              className="flex gap-2 items-center text-[#A5A6F6] cursor-pointer"
            >
              <div>Boost your Server</div>
              <FaArrowCircleRight size={15} />
            </Link>
          </div>
          {/* <div className="border-2 p-4 rounded-lg mt-4">
            <p className="bg-[#FFA800] w-fit px-3 text-[15px] text-[#1A365D] rounded-[4px]">
              Referral Account Services
            </p>
            <br />
            <p className="text-[19px] mt-3 font-semibold"> latest accounts</p>
            <Link
              href={"/accounts/"}
              className="flex gap-2 items-center text-[#FFA800] cursor-pointer"
            >
              <Link href={"/accounts/"}>Navigate through accounts</Link>
              <FaArrowCircleRight size={15} />
            </Link>
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default BestProduct;
