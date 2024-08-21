import BlogsCard from "@/components/BlogsCard";
import React from "react";
import blogsContent from "../../dataFolder/blogs.json";

export function generateMetadata() {
  return {
    title:
      "Expert Insights on Discord Accounts & Social Media | Discord Arena Blogs",
    description:
      "Stay informed with our latest blog posts on buying, managing, and maximizing the value of Discord and other social media accounts. Explore expert advice, tips, and trends tailored for influencers, marketers, and community builders.",
    keywords:
      "Discord blogs, buy Discord accounts, social media management, aged Discord accounts, account purchasing tips, social media trends",
    author: "Discord Arena",
    viewport: "width=device-width, initial-scale=1.0",
    openGraph: {
      title: "Expert Insights on Discord & Social Media | Discord Arena Blogs",
      description:
        "Dive into the latest trends and expert advice on Discord and social media account management. Discover valuable insights that can elevate your online presence.",
      type: "article",
      url: "https://www.discordarena.com/blogs",
      images: [
        {
          url: "URL_TO_YOUR_BLOGS_SOCIAL_SHARE_IMAGE",
          width: 800,
          height: 600,
          alt: "Expert Insights on Discord & Social Media | Discord Arena Blogs",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      site: "@yourhandle",
      title: "Expert Insights on Discord & Social Media | Discord Arena Blogs",
      description:
        "Read our latest blog posts to stay ahead in the world of social media and Discord account management.",
      image: "URL_TO_YOUR_BLOGS_SOCIAL_SHARE_IMAGE",
    },
    structuredData: {
      "@context": "https://schema.org",
      "@type": "Blog",
      name: "Discord Arena Blogs",
      url: "https://www.discordarena.com/blogs",
      description:
        "Explore our collection of blog posts offering insights and tips on buying and managing social media accounts, with a focus on Discord.",
      publisher: {
        "@type": "Organization",
        name: "Discord Arena",
        logo: {
          "@type": "ImageObject",
          url: "URL_TO_YOUR_LOGO_IMAGE",
        },
      },
    },
  };
}

const Page = () => {
  return (
    <div className="bg-normal overflow-x-hidden text-white">
      <div className="max-w-[1280px] pt-[150px] relative mx-auto py-[50px] md:px-[50px] px-[10px]">
        <h1 className="lh:w-[60%] mb-6 lg:text-[1.75rem] text-[1.5rem] sm:w-[80%] px-2 md:w-[70%] ">
          Explore Our Latest Blog Posts
          <br /> Stay Updated with the Newest Insights and Trends
        </h1>
        <div className="grid grid-cols-1 gap-y-14 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {blogsContent.map((item, index) => (
            <div key={index}>
              <BlogsCard
                imgurl={`../blogs-banner/${item.image}`}
                linkurl={`/blogs/${item?.name
                  .split(" ")
                  .join("-")
                  .toLowerCase()}`}
                heading={item.name}
                time={item.minutes_read}
                date={item.date}
                className="h-full"
              />
            </div>
          ))}
        </div>
        <div className="radial_one"></div>
      </div>
    </div>
  );
};

export default Page;
