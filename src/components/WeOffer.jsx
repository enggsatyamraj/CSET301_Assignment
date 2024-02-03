import React from "react";
import FrameImage from '@/components/assets/Frame.png'
import { TbBrandMinecraft } from "react-icons/tb";
import { FaDiscord } from "react-icons/fa";
import { TbBrandValorant } from "react-icons/tb";
import { FaXTwitter } from "react-icons/fa6";
import { FaTelegramPlane } from "react-icons/fa";


const WeOffer = () => {
  return (
    <div className="bg-[#121212]" >
      <div className=" text-white min-h-screen py-[60px] md:py-[100px] max-w-[1280px] mx-auto">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-4xl font-semibold text-center mb-6">We Offer</h2>
          <p className="text-center text-[15px] md:text-[16px] opacity-75 w-[99%] md:w-[65%] mx-auto mb-12">
            Risus commodo id odio turpis pharetra elementum. Pulvinar porta
            porta feugiat scelerisque in elit. Morbi rhoncus, tellus, eros
            consequat magna semper orci a tincidunt.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div
              className="rounded-lg border-[0.5px] text-card-foreground shadow-sm bg-[#1F1F1F]"
              data-v0-t="card"
            >
              <div className="flex flex-col space-y-1.5 p-6">
                <span className="relative flex h-11 w-11 items-center justify-center shrink-0 overflow-hidden rounded-full">
                  {/* <img
                    className="aspect-square h-full w-full"
                    alt="Minecraft Accounts"
                    src={FrameImage}
                  /> */}
                  <TbBrandMinecraft size={30} className=" rounded-full"/>
                </span>
                <h3 className="text-2xl font-semibold whitespace-nowrap leading-none tracking-tight">
                  Minecraft Accounts
                </h3>
              </div>
              <div className="px-6 pb-4 opacity-75">
                <p>
                  Egestas tellus nunc proin amet tellus tincidunt lacus
                  consequat. Ultrices.
                </p>
              </div>
            </div>
            <div
              className="rounded-lg border-[0.5px] text-card-foreground shadow-sm bg-[#1F1F1F]"
              data-v0-t="card"
            >
              <div className="flex flex-col space-y-1.5 p-6">
              <span className="relative flex h-10 w-10 items-center justify-center shrink-0 overflow-hidden rounded-full">
                  {/* <img
                    className="aspect-square h-full w-full"
                    alt="Minecraft Accounts"
                    src={FrameImage}
                  /> */}
                  <FaDiscord size={30}/>
                </span>
                <h3 className="text-2xl font-semibold whitespace-nowrap leading-none tracking-tight">
                  Discord Accounts
                </h3>
              </div>
              <div className="px-6 pb-4 opacity-75">
                <p>
                  Integer ante non nunc, eget est justo vel semper nunc. Lacus.
                </p>
              </div>
            </div>
            <div
              className="rounded-lg border-[0.5px] text-card-foreground shadow-sm bg-[#1F1F1F]"
              data-v0-t="card"
            >
              <div className="flex flex-col space-y-1.5 p-6">
              <span className="relative flex h-10 w-10 items-center justify-center shrink-0 overflow-hidden rounded-full">
                  {/* <img
                    className="aspect-square h-full w-full"
                    alt="Minecraft Accounts"
                    src={FrameImage}
                  /> */}
                  <TbBrandValorant size={30}/>
                </span>
                <h3 className="text-2xl font-semibold whitespace-nowrap leading-none tracking-tight">
                  Valorant Accounts
                </h3>
              </div>
              <div className="px-6 pb-4 opacity-75">
                <p>
                  Sed faucibus faucibus egestas volutpat, accumsan adipiscing
                  egestas est. Auctor et leo urna est.
                </p>
              </div>
            </div>
            <div
              className="rounded-lg border-[0.5px] text-card-foreground shadow-sm bg-[#1F1F1F]"
              data-v0-t="card"
            >
              <div className="flex flex-col space-y-1.5 p-6">
              <span className="relative flex h-10 w-10 items-center justify-center shrink-0 overflow-hidden rounded-full">
                  {/* <img
                    className="aspect-square h-full w-full"
                    alt="Minecraft Accounts"
                    src={FrameImage}
                  /> */}
                  <FaXTwitter size={30}/>
                </span>
                <h3 className="text-2xl font-semibold whitespace-nowrap leading-none tracking-tight">
                  Twitter Accounts
                </h3>
              </div>
              <div className="px-6 pb-4 opacity-75">
                <p>
                  Egestas tellus nunc proin amet tellus tincidunt lacus
                  consequat. Ultrices.
                </p>
              </div>
            </div>
            <div
              className="rounded-lg border-[0.5px] text-card-foreground shadow-sm bg-[#1F1F1F]"
              data-v0-t="card"
            >
              <div className="flex flex-col space-y-1.5 p-6">
              <span className="relative flex h-10 w-10 items-center justify-center shrink-0 overflow-hidden rounded-full">
                  {/* <img
                    className="aspect-square h-full w-full"
                    alt="Minecraft Accounts"
                    src={FrameImage}
                  /> */}
                  <FaTelegramPlane size={30}/>
                </span>
                <h3 className="text-2xl font-semibold whitespace-nowrap leading-none tracking-tight">
                  Telegram Accounts
                </h3>
              </div>
              <div className="px-6 pb-4 opacity-75">
                <p>
                  Integer ante non nunc, eget est justo vel semper nunc. Lacus.
                </p>
              </div>
            </div>
            <div
              className="rounded-lg border-[0.5px] text-card-foreground shadow-sm bg-[#1F1F1F]"
              data-v0-t="card"
            >
              <div className="flex flex-col space-y-1.5 p-6">
              <span className="relative flex h-10 w-10 items-center justify-center shrink-0 overflow-hidden rounded-full">
                  {/* <img
                    className="aspect-square h-full w-full"
                    alt="Minecraft Accounts"
                    src={FrameImage}
                  /> */}
                  <TbBrandMinecraft size={30}/>
                </span>
                <h3 className="text-2xl font-semibold whitespace-nowrap leading-none tracking-tight">
                  Minecraft Accounts
                </h3>
              </div>
              <div className="px-6 pb-4 opacity-75">
                <p>
                  Sed faucibus faucibus egestas volutpat, accumsan adipiscing
                  egestas est. Auctor et leo urna est.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WeOffer;
