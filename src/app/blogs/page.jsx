import BlogsCard from "@/components/BlogsCard";
import React from "react";
import blogsContent from "../../dataFolder/blogs.json";

export function generateMetadata() {
  return {
    title:
      "Discord Blogs | Guide to buy Discord Accounts & Server Boosts",
    description:
      "Read Discord blogs for tips on buying Discord accounts, managing social media, and the latest trends in aged accounts and Nitro sales",
    keywords:
    ["Discord blogs", "aged Discord accounts","discord server boost", "buy Discord accounts", "social media management", "account purchasing tips", "Discord Nitro sales", "Discord marketing tips", "verified Discord accounts", "Discord account security", "Discord community growth"],
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
          <br/> Stay Updated with the Newest Insights and Trends
        </h1>

        <p className="text-[17px] md:w-[70%] sm:w-[80%] w-[90%] lg:w-[80%] opacity-60 mb-[20px] ml-[10px]">
          Welcome to Discord Arena Blogs, where we invite you to explore our latest blog posts. Stay updated with the
          newest insights and trends across various topics. Whether you&apos;re seeking fresh perspectives or the latest
          industry updates, our blog is your go-to source for valuable information.
        </p>

        <p className="text-[17px] mt-2 md:w-[70%] sm:w-[80%] w-[90%] lg:w-[80%] opacity-60 mb-[20px] ml-[10px]">
          <span>Discover a wealth of knowledge and expertise as you dive into our carefully curated content, designed
            to inspire and educate.</span>
          From in-depth articles and expert opinions to practical tips and trending topics, our blog covers it all,
          helping you make informed decisions and stay engaged with the latest developments.
          <span>Join our community of readers who rely on Discord Arena Blogs for timely and relevant updates, and
            never miss out on the crucial information that can shape your success.</span>
        </p>

        <p className="text-[17px] mt-2 md:w-[70%] sm:w-[80%] w-[90%] lg:w-[80%] opacity-60 mb-[20px] ml-[10px]">
          <span>Embrace the opportunity to enhance your knowledge and stay connected with the dynamic world of Discord
            and beyond.</span>
          Explore our blog today and experience the value of being well-informed, with content that is crafted to keep
          you engaged and ahead of the curve.
          <span>Your next great read awaits—immerse yourself in the world of Discord Arena Blogs and unlock a new level of
            insight and understanding.</span>
        </p>

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
