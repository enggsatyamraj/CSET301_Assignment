import Head from "next/head";
import Link from "next/link";
import React from "react";
import { FaArrowCircleRight } from "react-icons/fa";

const BestProduct = () => {
  return (
    <div className="bg-[#121212] text-white">
      <Head>
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
      </Head>

      <div className="max-w-[1280px] px-4 min-h-[100vh] grid grid-cols-1 md:grid-cols-3 mx-auto gap-4">
        <div>
          <h1 className="text-3xl w-[80%] font-semibold mb-4">
            Elevate Your Online Presence with Premium Social Media Solutions
          </h1>
          <p className="text-[15px] mb-4 opacity-90">
            At Discord Arena, we&apos;re thrilled to welcome you to a realm where
            excellence seamlessly converges with innovation in the dynamic
            landscape of social media solutions. As your dedicated platform, our
            commitment to delivering unparalleled products remains steadfast,
            evolving to encompass an even more extensive array of offerings
            meticulously designed to cater to your distinctive requirements.
          </p>
          <Link
            href={"/accounts"}
            className="text-[13px] text-[#A5A6F6] border-[#A5A6F6] border-[1px] rounded-[30px] px-3 py-1"
          >
            SHOW MORE
          </Link>
        </div>

        <div>
          <div className="border-2 p-4 rounded-lg">
            <div className="h-[150px] bg-[#A5A6F6] mb-3 rounded-lg"></div>
            <h1 className="bg-[#A5A6F6] w-fit px-3 text-[15px] text-[#1A365D] rounded-[4px]">
              social media
            </h1>
            <h1 className="text-[19px] mt-3 font-semibold">Discord</h1>
            <div className="flex gap-2 items-center text-[#A5A6F6] cursor-pointer">
              <Link href={"/accounts"}>Read more</Link>
              <FaArrowCircleRight size={15} />
            </div>
          </div>
          <div className="border-2 p-4 rounded-lg mt-4">
            <h1 className="bg-[#A5A6F6] w-fit px-3 text-[15px] text-[#1A365D] rounded-[4px]">
              social media
            </h1>
            <h1 className="text-[19px] mt-3 font-semibold">Twitter</h1>
            <div className="flex gap-2 items-center text-[#A5A6F6] cursor-pointer">
              <Link href={"/accounts"}>Read more</Link>
              <FaArrowCircleRight size={15} />
            </div>
          </div>
          <div className="border-2 p-4 rounded-lg mt-4">
            <h1 className="bg-[#A5A6F6] w-fit px-3 text-[15px] text-[#1A365D] rounded-[4px]">
              social media
            </h1>
            <h1 className="text-[19px] mt-3 font-semibold">Instagram</h1>
            <div className="flex gap-2 items-center text-[#A5A6F6] cursor-pointer">
              <Link href={"/accounts"}>Read more</Link>
              <FaArrowCircleRight size={15} />
            </div>
          </div>
        </div>

        <div>
          <div className="border-2 p-4 rounded-lg">
            <h1 className="bg-[#FFA800] w-fit px-3 text-[15px] text-[#1A365D] rounded-[4px]">
              Gaming
            </h1>
            <h1 className="text-[19px] mt-3 font-semibold">Valorent</h1>
            <div className="flex gap-2 items-center text-[#FFA800] cursor-pointer">
              <Link href={"/accounts"}>Read more</Link>
              <FaArrowCircleRight size={15} />
            </div>
          </div>
          <div className="border-2 p-4 rounded-lg mt-4">
            <div className="h-[150px] bg-[#FFA800] mb-3 rounded-lg"></div>
            <h1 className="bg-[#FFA800] w-fit px-3 text-[15px] text-[#1A365D] rounded-[4px]">
              Gaming
            </h1>
            <h1 className="text-[19px] mt-3 font-semibold">
              League of Legends
            </h1>
            <div className="flex gap-2 items-center text-[#FFA800] cursor-pointer">
              <Link href={"/accounts"}>Read more</Link>
              <FaArrowCircleRight size={15} />
            </div>
          </div>
          <div className="border-2 p-4 rounded-lg mt-4">
            <h1 className="bg-[#FFA800] w-fit px-3 text-[15px] text-[#1A365D] rounded-[4px]">
              Gaming
            </h1>
            <h1 className="text-[19px] mt-3 font-semibold">Minecraft</h1>
            <div className="flex gap-2 items-center text-[#FFA800] cursor-pointer">
              <Link href={"/accounts"}>Read more</Link>
              <FaArrowCircleRight size={15} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BestProduct;
