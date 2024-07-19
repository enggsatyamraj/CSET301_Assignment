import React from "react";
import landscape from "../../../../public/landscape_image.jpeg";
import Image from "next/image";
import Link from "next/link";
import BlogsCard from "@/components/BlogsCard";
import rightbutton from "../../../../public/RightButton.svg";
import Footer from "@/components/Footer";
import blogsData from "../../../dataFolder/blogs.json";

export const fetchData = (paramsData) => {
  console.log(
    "this is the params data inside fetchData function .............",
    paramsData
  );
  const title = decodeURIComponent(paramsData);
  console.log("this is the title inside fetchData function............", title);
  let id;
  for (let i = 0; i < blogsData.length; i++) {
    if (blogsData[i].name.toLowerCase() == title.split("-").join(" ")) {
      id = i;
      console.log(
        "this is the title everyone.......",
        title.split("-").join(" ")
      );
      break;
    }
  }

  const data = blogsData[id];
  console.log("this is the data...............................", data);
  return data;
};

export const generateMetadata = ({ params }) => {
  console.log(
    "this is the params data in generateMetaData.........",
    decodeURIComponent(params.id)
  );
  const data = fetchData(decodeURIComponent(params.id));
  console.log("this is the data in generateMetaData.........", data);
  const jsonLdScript = {
    "@context": "https://schema.org/",
    "@type": "Product",
    name: "Discord Aged Accounts",
    image: "https://example.com/photos/1x1/photo.jpg",
    description: data.content,
    sku: data.sku,
    mpn: data.mpn,
    brand: {
      "@type": "Brand",
      name: "Discord",
    },
    review: {
      "@type": "Review",
      reviewRating: {
        "@type": "Rating",
        ratingValue: "4",
        bestRating: "5",
      },
    },
  };

  return {
    title: `${data.name} | Blogs`,
    description: data.content,
    openGraph: {
      title: data.name,
      description: data.content,
      images: [
        {
          url: "https://example.com/photos/1x1/photo.jpg",
          alt: data.name,
        },
      ],
      url: data.link,
      type: "website",
      siteName: "Your Website Name",
    },
    twitter: {
      title: data.name,
      description: data.content,
      images: ["https://example.com/photos/1x1/photo.jpg"],
      card: "summary_large_image",
    },
    other: {
      "application-ld+json": JSON.stringify(jsonLdScript),
    },
  };
};

const page = ({ params }) => {
  const data = fetchData(params.id);
  console.log(data);
  const sampleArray = [
    {
      heading:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo, similique?",
      time: "4 mins Read | 1 month Ago",
    },
    {
      heading:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo, similique?",
      time: "4 mins Read | 1 month Ago",
    },
    {
      heading:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo, similique?",
      time: "4 mins Read | 1 month Ago",
    },
  ];
  return (
    <div className="bg-normal text-white pt-[100px]">
      <div className="max-w-[1000px] relative min-h-[80vh] rounded-[5px] mx-auto  border-2 border-[#A1AEBF]  mb-[40px] md:p-5 p-3">
        <Image
          src={landscape}
          className="rounded-[30px] h-[300px] object-cover  "
          alt="Discord Image"
        />
        <h1 className="md:text-4xl sm:text-3xl text-2xl my-5 uppercase tracking-wider">
          {data.name}
        </h1>
        <div className="flex items-center flex-wrap mt-[20px] gap-3 justify-between">
          <div className="text-[15px]">{data.minutes_read}</div>
          <div className="flex gap-3 items-center">
            <Link
              className="border-[1.5px] bg-[#F36969] text-white border-black  rounded-lg px-2 py-1"
              href={"#"}
            >
              Buy Now
            </Link>
            <div>
              <Link
                href={"/blogs/3213"}
                className="flex gap-1 items-center font-semibold border-[1.5px] border-[#A1AEBF] rounded-lg px-2 py-1"
              >
                <span className="text-[13px]">Explore</span>
              </Link>
            </div>
          </div>
        </div>
        {data.content.map((item, index) => {
          return (
            <p
              key={index}
              className="text-[15px] md:text-[17px] mt-[20px] leading-[25px] opacity-70 text-center mx-auto md:w-[90%]"
            >
              {item}
            </p>
          );
        })}
        <Link
          href={"#"}
          className="text-[15px] opacity-70 md:text-[17px] underline underline-offset-[5px] mx-auto mt-[50px] mb-[30px] block text-center"
        >
          Share Now
        </Link>
        <div className="radial_one"></div>
      </div>
      <div className="max-w-[1000px] mx-auto">
        <h5 className="text-[25px] md:text-[35px] mt-[50px] mb-[20px]">
          You May Also Read..
        </h5>
        <div className="grid grid-cols-1 gap-y-14 mb-[40px] sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {sampleArray.map((item, index) => {
            return (
              <div
                key={index}
                className="flex justify-center items-center h-full"
              >
                <BlogsCard
                  headingBackgroundColor={"bg-[#FFC700]"}
                  heading={item.heading}
                  time={item.time}
                  className="h-full"
                />
              </div>
            );
          })}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default page;
