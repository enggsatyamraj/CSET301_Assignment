import React from "react";
import discordData from "../../../../dataFolder/discord.json";
import { FaDiscord } from "react-icons/fa";
import Link from "next/link";
import { Actor } from "next/font/google";
import Head from "next/head";
import Footer from "@/components/Footer";

const actor = Actor({ weight: "400", subsets: ["latin"] });

export const data = {
  id: 4,
  year: 2018,
  link: "https://yoyohoni.mysellix.io/product/6404d34dc3489",
  name: "Buy 2018 aged discord account",
  price: 8,
  type: "Discord",
  discountPercentage: 15,
  smallShowFiveFeatures: {
    feature1: "Strategic Access to Premium Servers",
    feature2: "Tailored Server Emojis and GIFs",
    feature3: "Dynamic Community with Regular Engagements",
    feature4: "Cutting-edge Moderation Tools",
    feature5: "Seamless Integration with Trending Music Bots",
  },
  introduction:
    "Step into the next level of Discord excellence with our 2018 Mastermind account! Unleash strategic access, personalized communication, and dynamic community engagement, revolutionizing your online presence since 2018.",
  questionAnswerArray: [
    {
      question: "What is the price of Discord 2018 Mastermind?",
      answer:
        "Acquire Discord 2018 Mastermind for just $1400 with an exclusive 15% discount. Elevate your Discord journey with strategic access, tailored emojis, dynamic community interactions, and cutting-edge moderation tools.",
    },
    {
      question: "What are the features of Discord 2018 Mastermind?",
      answer:
        "Discord 2018 Mastermind offers strategic access, tailored server emojis, dynamic community engagements, and cutting-edge moderation tools. Experience seamless integration with trending music bots for an immersive Discord experience.",
    },
    {
      question: "What are the benefits of Discord 2018 Mastermind?",
      answer:
        "Enjoy strategic access to premium servers and customize your communication with tailored server emojis and GIFs. Immerse yourself in a dynamic community with regular engagements and leverage cutting-edge moderation tools. Achieve a seamless experience with trending music bot integration for an all-encompassing Discord adventure.",
    },
    {
      question: "What is the discount percentage for Discord 2018 Mastermind?",
      answer:
        "Avail an exclusive 15% discount on Discord 2018 Mastermind. This limited-time offer enables you to experience premium features and benefits at an unbeatable price.",
    },
    {
      question: "What is the introduction of Discord 2018 Mastermind?",
      answer:
        "Introducing Discord 2018 Mastermind – the epitome of premium Discord experiences. Since 2018, we've been dedicated to redefining your online presence with strategic access, personalized communication, and dynamic community engagement.",
    },
    {
      question: "Why purchase Discord 2018 Mastermind?",
      answer:
        "Unlock a new era of Discord excellence with Discord 2018 Mastermind. From strategic access to personalized communication and dynamic community engagement, this account is your gateway to an immersive online community.",
    },
    {
      question: "Are there any Risks Associated with Buying Discord Accounts?",
      answer:
        "While risks exist, our secure transactions prioritize your safety. Discord 2018 Mastermind from Discord Arena ensures a reliable and positive experience. Trust us for premium social media account services, including Discord.",
    },
  ],
  features: [
    {
      title: "Strategic Access to Premium Servers",
      description:
        "Discord 2018 Mastermind provides strategic access to premium servers, offering a unique and engaging experience for users.",
    },
    {
      title: "Tailored Server Emojis and GIFs",
      description:
        "Users will have access to tailored server emojis and GIFs, allowing for more personalized and expressive communication.",
    },
    {
      title: "Dynamic Community with Regular Engagements",
      description:
        "The account includes a dynamic community with regular engagements, fostering a sense of belonging and connection among users.",
    },
    {
      title: "Cutting-edge Moderation Tools",
      description:
        "Discord 2018 Mastermind provides cutting-edge moderation tools to ensure a safe and enjoyable environment for all members.",
    },
    {
      title: "Seamless Integration with Trending Music Bots",
      description:
        "The integration with trending music bots allows users to enjoy music and entertainment within the Discord community.",
    },
  ],
  faq: [
    {
      question: "How do I purchase Discord 2018 Mastermind?",
      answer:
        "Visit our official website or contact our customer support for secure and reliable transactions. Discord Arena ensures a smooth purchasing experience for Discord 2018 Mastermind.",
    },
    {
      question:
        "What payment methods are accepted for buying Discord 2018 Mastermind?",
      answer:
        "We accept various payment methods, including credit cards, PayPal, and other secure online options. Check our website for the complete list of accepted payment methods.",
    },
    {
      question: "Is it safe to buy Discord 2018 Mastermind?",
      answer:
        "Yes, it is safe to buy Discord 2018 Mastermind from us. Prioritize security, and follow best practices for a positive and secure purchasing experience.",
    },
    {
      question: "Can I customize the features of Discord 2018 Mastermind?",
      answer:
        "While features are predefined, Discord Arena continually enhances offerings. Contact our customer support for specific customization requests, and we'll strive to accommodate your needs.",
    },
    {
      question:
        "What support is available after purchasing Discord 2018 Mastermind?",
      answer:
        "We provide ongoing support after purchase. For questions, issues, or assistance, contact our customer support, and our team will be delighted to help with Discord 2018 Mastermind.",
    },
  ],
};

export const reviews = [
  {
    name: "Ajay Verma",
    rating: 5,
    comment:
      "I purchased a Discord Account and have been extremely satisfied with the features and benefits it offers. The boosted servers and active Nitro subscription have significantly enhanced my Discord experience, and the ownership of popular servers has allowed me to connect with a large and engaged community. Overall, I highly recommend 2016 Discord Accounts to anyone looking to elevate their Discord experience.",
  },
  {
    name: "Sarah Davis",
    rating: 4,
    comment:
      "I recently bought a Discord Account and have been impressed with the verified account and boosted servers. The active Nitro subscription has also provided me with exclusive perks and benefits, making it a valuable investment. The integration of useful bots has further improved the functionality and automation of my Discord experience. I would definitely recommend 2016 Discord Accounts to others.",
  },
  {
    name: "William Moore",
    rating: 5,
    comment:
      "I've been using a Discord Account for a while now, and it has exceeded my expectations. The verified account and boosted servers have been essential for managing and growing my server, and the active Nitro subscription has provided me with custom emojis and animated avatars. The ownership of popular servers has allowed me to connect with a large and active community, and the integration of useful bots has enhanced the overall user experience. I highly recommend 2016 Discord Accounts to anyone looking for a premium Discord experience.",
  },
];

export const generateMetadata = () => {
  const calculateAverageRating = (reviews) => {
    if (reviews.length === 0) return 0;
    const totalRatings = reviews.reduce(
      (sum, review) => sum + review.rating,
      0
    );
    return totalRatings / reviews.length;
  };

  const jsonLdScript = {
    "@context": "https://schema.org",
    "@type": "Product",
    name: "Discord aged Account",
    image: "https://example.com/photos/1x1/photo.jpg",
    description: data.introduction,
    brand: {
      "@type": "Thing",
      name: "Discord",
    },
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: calculateAverageRating(reviews).toString(),
      reviewCount: reviews.length.toString(),
    },
    offers: {
      "@type": "Offer",
      url: data.link,
      priceCurrency: "USD",
      price: data.price,
      priceValidUntil: "2025-12-31",
      availability: "https://schema.org/InStock",
      seller: {
        "@type": "Organization",
        name: "Your Website Name",
      },
    },
  };

  return {
    title: `Buy ${data.year} Discord | Old & Aged Discord Accounts`,
    description: data.introduction,
    openGraph: {
      title: data.name,
      description: data.introduction,
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
      description: data.introduction,
      images: ["https://example.com/photos/1x1/photo.jpg"],
      card: "summary_large_image",
    },
    other: {
      "application-ld+json": JSON.stringify(jsonLdScript),
    },
  };
};

const Page = () => {
  const title = "buy-2015-aged-discord-account";

  function calculateAverageRating(reviews) {
    if (reviews.length === 0) return 0; // Return 0 if there are no reviews
    const totalRating = reviews.reduce((acc, curr) => acc + curr.rating, 0);
    return (totalRating / reviews.length).toFixed(1); // Return the average rating rounded to 1 decimal place
  }

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
      <div className="min-h-[100vh] w-[100%] bg-[#121212] text-white">
        <div className="mx-auto max-w-[800px] px-7 pb-12 pt-[100px]">
          <p className="mx-auto  text-2xl sm:text-3xl md:text-4xl">
            Buy {data.year} {data.type} Accounts for sale-
            {data.discountPercentage}% Discount Buy Now
          </p>
          <div className="my-7 h-[1px] bg-[#fff]"></div>
          <p className="text-[15px] opacity-80 md:text-[1.15rem] mb-3">
            Buy {data.year} Discord accounts at cheap prices here on Discord
            Arena.
          </p>
          <p className="mb-3 mt-5 text-2xl font-semibold">
            Buy {data.year} Discord Account{" "}
          </p>
          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 mt-3">
            <div className="flex h-[200px] w-[100%] items-center justify-center rounded-[10px] border-[1px] border-[#fff] text-3xl">
              <FaDiscord size={100} className="dance text-[#A5A6F6]" />
            </div>
            <div>
              <p className="mb-5 text-2xl">
                Buy cheap {data.year} Discord Account{" "}
              </p>
              <ul className="list-disc pl-4 text-[15px] opacity-85">
                <li>{data.smallShowFiveFeatures.feature1}</li>
                <li>{data.smallShowFiveFeatures.feature2}</li>
                <li>{data.smallShowFiveFeatures.feature3}</li>
                <li>{data.smallShowFiveFeatures.feature4}</li>
                <li>{data.smallShowFiveFeatures.feature5}</li>
              </ul>
            </div>
          </div>
          <div className="mt-4 flex gap-5 mb-7">
            <span className="flex flex-1 items-center justify-center rounded-md bg-[#00C89D] px-3 py-[10px]  text-xl font-bold  text-black ">
              ${data.price}
            </span>
            <Link
              href={data.link}
              target="_blank"
              className="flex-[3] text-center justify-center items-center rounded-md bg-[#F6EBFF] px-3  py-[10px] text-xl  font-bold text-black"
            >
              Purchase
            </Link>
          </div>
          {/* <p className="mb-3 mt-7 text-2xl">
            Cheap {data.year} {data.type} accounts
          </p>
          <p className="text-[16px] opacity-85 mb-4">{data.introduction}</p> */}

          <p className="mb-3 mt-5 text-2xl font-semibold">
            Features and benefits of used discord accounts - {data.year}
          </p>

          <div className="grid grid-cols-1 gap-4 md:grid-cols-3 mt-3 mb-4">
            {data.features.map((item, index) => {
              return (
                <div
                  key={index}
                  className="flex flex-col gap-3 rounded-md border-[1px] border-white p-4"
                >
                  <span className=" rounded-lg bg-[#a5a6f6] px-3 py-[2px] text-[15px] font-bold text-black">
                    {item.title}
                  </span>
                  <p className="text-[14px] opacity-80">{item.description}</p>
                </div>
              );
            })}
          </div>

          <h2 className="mb-3 mt-5 text-2xl font-semibold">
            Customer Testimonials
          </h2>
          <div className="mt-7 grid grid-cols-1 gap-8 md:grid-cols-2 mb-4">
            {reviews.map((item, index) => {
              return (
                <div
                  key={index}
                  className="relative rounded-md border-[1px] p-4"
                >
                  <p className="absolute top-[-18px] w-fit rounded-lg bg-[#00C9A7] px-3 py-1">
                    {item.name}
                  </p>
                  <p className="mb-3 mt-4">
                    <span className="rounded-sm bg-[#4D8076] px-3 py-1 font-semibold">
                      Rating
                    </span>{" "}
                    : <span>{item.rating}</span>
                  </p>
                  <p className="text-[14px] opacity-80">{item.comment}</p>
                </div>
              );
            })}
          </div>

          <h2 className="mb-3 mt-5 text-2xl font-semibold">
            FAQs related to aged Discord Accounts - {data.year}
          </h2>
          <div>
            {data.faq.map((item, index) => {
              return (
                <details key={index} className="mb-5 opacity-80">
                  <summary className="px-3 text-[16px]  md:text-xl">
                    {item.question}
                  </summary>
                  <p className="pl-7 opacity-80">{item.answer}</p>
                </details>
              );
            })}
          </div>

          <Link
            className="mt-4 rounded-md bg-[#845EC2] px-3 py-[7px] font-semibold"
            href={"/faq"}
          >
            See more FAQs
          </Link>
        </div>
        <Footer />
      </div>
    </div>
  );
};

export default Page;
