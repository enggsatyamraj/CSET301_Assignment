import React from "react";
import landscape from "../../../../public/landscape_image.jpeg";
import Image from "next/image";
import Link from "next/link";
import BlogsCard from "@/components/BlogsCard";
import rightbutton from "../../../../public/RightButton.svg";
import Footer from "@/components/Footer";
import blogsData from "../../../dataFolder/blogs.json";

export const fetchData = (paramsData) => {
  const title = decodeURIComponent(paramsData);
  let id;
  for (let i = 0; i < blogsData.length; i++) {
    if (blogsData[i].name.toLowerCase() == title.split("-").join(" ")) {
      id = i;
      break;
    }
  }

  const data = blogsData[id];
  return data;
};

export const generateMetadata = ({ params }) => {
  const data = fetchData(decodeURIComponent(params.id));
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
  const blogNumber = data.no; 
  const iconUrl = `/blogs-banner/blog-${blogNumber}.ico?v=4`;
  return {
    title: `${data.name} | Blogs`,
    description: data.content,
    icons: {
      icon: [iconUrl],
      apple: ["/apple-touch-icon.png?v=4"],
      shortcut: [iconUrl],
    },
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

  // Exclude the current blog from the blogsData array
  const otherBlogs = blogsData.filter((blog) => blog.name !== data.name);

  // Select a subset of blogs to display
  const sampleArray = otherBlogs.slice(0, 3); // Adjust the number as needed

  return (
    <div className="bg-normal text-white pt-[100px]">
      <div className="max-w-[1000px] relative min-h-[80vh] rounded-[5px] mx-auto border-2 border-[#A1AEBF] mb-[40px] md:p-5 p-3">
        <img
          src={`../blogs-banner/${data.image}`}
          className="rounded-[30px] h-auto w-[100%] object-cover"
          alt={data.name}
        />
        <h1 className="md:text-4xl sm:text-3xl text-2xl my-5 uppercase tracking-wider">
          {data.name}
        </h1>
        <div className="flex items-center flex-wrap mt-[20px] gap-3 justify-between">
          <div className="text-[15px]">{data.minutes_read}</div>
          <div className="flex gap-3 items-center">
            <Link
              className="border-[1.5px] bg-[#F36969] text-white border-black rounded-lg px-2 py-1"
              href={"/accounts/discord"}
            >
              Buy Now
            </Link>
          </div>
        </div>
        <p className="text-[17px] md:text-[20px] mt-[20px] leading-[25px] opacity-80">
          {data.content}
        </p>
        <div>
          {data.subheadings.map((item, index) => {
            return (
              <div key={index} className="opacity-70 mb-7">
                <h3 className="text-[20px] mt-[20px] font-bold underline-offset-5 underline tracking-wider">
                  {item.subheading}
                </h3>
                <p className="text-[15px] mt-[5px]">
                  {item.subcontent.map((subitem, subindex) => {
                    return (
                      <p key={subindex} className="mt-[3px]">
                        {subitem}
                      </p>
                    );
                  })}
                </p>
              </div>
            );
          })}
        </div>
        <h3 className="text-[20px] mt-[20px] font-bold underline-offset-5 underline tracking-wider opacity-80">
          Conclusion
        </h3>
        <p className="text-[15px] mt-[5px] opacity-70">{data.conclusion}</p>

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
                className="flex justify-center items-start h-full"
              >
                <BlogsCard
                  headingBackgroundColor={"bg-[#FFC700]"}
                  heading={item.name}
                  time={item.minutes_read}
                  linkurl={`/blogs/${item.name
                    .split(" ")
                    .join("-")
                    .toLowerCase()}`}
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
