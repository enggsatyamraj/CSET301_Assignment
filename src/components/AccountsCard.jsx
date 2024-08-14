import Link from "next/link";
import React from "react";

const AccountsCard = ({ id, imgScr, atlMessage, item, index }) => {
  return (
    <div
      key={id}
      className={`border-[1px] ${
        index > 2 && "hidden"
      }  h-full overflow-hidden mt-3 rounded-md p-4`}
    >
      <img src={imgScr} alt={atlMessage} className="mb-4" />

      <Link
        href={`accounts/discordserver/${item.name
          .split(" ")
          .join("-")
          .toLowerCase()}`}
        className="my-3 text-[14px] font-semibold tracking-widest sm:text-[15px]"
      >
        Buy{" "}
        <span className="rounded-sm bg-[#F6EBFF] px-3 py-1 text-black">
          {item.year}
        </span>{" "}
        Discord Server
      </Link>
      <ul className="list-disc mt-2 pl-4 text-[13px] opacity-85">
        <li>
          {item.smallShowFiveFeatures.feature1
            ? item.smallShowFiveFeatures.feature1
            : "Authentic and secure account"}
        </li>
        <li>{item.smallShowFiveFeatures.feature2}</li>
        <li>{item.smallShowFiveFeatures.feature3}</li>
        <li>{item.smallShowFiveFeatures.feature4}</li>
        <li>{item.smallShowFiveFeatures.feature5}</li>
      </ul>
      <div className="mt-5 flex items-center gap-3">
        {/* <Link
                      href={`accounts/discordserver/${item.name
                        .split(" ")
                        .join("-")
                        .toLowerCase()}`}
                      className="rounded-md bg-[#00C89D] px-4 py-1 font-semibold"
                    >
                      Info
                    </Link> */}
        <span
          target="_blank"
          href={item.link}
          className="rounded-md bg-[#F6EAFE] text-black px-4 py-1 font-semibold "
        >
          {item.price}
        </span>
      </div>
    </div>
  );
};

export default AccountsCard;
