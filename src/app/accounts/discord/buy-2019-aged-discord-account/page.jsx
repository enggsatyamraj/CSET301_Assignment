import React from "react";
import discordData from "../../../../dataFolder/discord.json";
import { FaDiscord } from "react-icons/fa";
import Link from "next/link";
import { Actor } from "next/font/google";
import Head from "next/head";
import Footer from "@/components/Footer";

const actor = Actor({ weight: "400", subsets: ["latin"] });

export const data = {
  id: 5,
  year: 2019,
  link: "https://yoyohoni.mysellix.io/product/6404d0a8ed902",
  name: "Buy 2019 aged discord account",
  price: 6,
  type: "Discord",
  discountPercentage: 20,
  smallShowFiveFeatures: {
    feature1: "Exclusivity with Premium Servers",
    feature2: "Customized Emojis and GIFs Galore",
    feature3: "Vibrant Community with Regular Events",
    feature4: "State-of-the-Art Moderation Tools",
    feature5: "Seamless Harmony with Popular Music Bots",
  },
  introduction:
    "Step into the pinnacle of Discord sophistication with our 2019 Elite edition! Offering exclusivity, customization, and vibrant community engagement, this account redefines your online presence since 2019.",
  questionAnswerArray: [
    {
      question: "What is the price of Discord Elite 2019?",
      answer:
        "Elevate your Discord experience with Discord Elite 2019, priced at $1500. Enjoy an exclusive 20% discount, making it a premium investment for your online journey.",
    },
    {
      question: "What are the features of Discord Elite 2019?",
      answer:
        "Discord Elite 2019 offers exclusivity with premium servers, a plethora of customized emojis and GIFs, vibrant community engagement with regular events, state-of-the-art moderation tools, and seamless harmony with popular music bots.",
    },
    {
      question: "What are the benefits of Discord Elite 2019?",
      answer:
        "Immerse yourself in the exclusivity of premium servers, express with a myriad of customized emojis and GIFs, engage in a vibrant community with regular events, ensure safety with state-of-the-art moderation tools, and enjoy seamless harmony with popular music bots. Discord Elite 2019 provides a comprehensive and enriched Discord experience.",
    },
    {
      question: "What is the discount percentage for Discord Elite 2019?",
      answer:
        "Avail an exclusive 20% discount on Discord Elite 2019, ensuring a premium account with a range of features and benefits at a reduced and attractive price.",
    },
    {
      question: "What is the introduction of Discord Elite 2019?",
      answer:
        "Introducing Discord Elite 2019, the epitome of Discord sophistication. Since 2019, we've been dedicated to redefining your online presence with exclusivity, customization, and vibrant community engagement.",
    },
    {
      question: "Why purchase Discord Elite 2019?",
      answer:
        "Discord Elite 2019 offers an unparalleled Discord experience, from exclusivity with premium servers to vibrant community engagement and state-of-the-art moderation tools. Elevate your online presence with the pinnacle of Discord sophistication.",
    },
    {
      question: "Are there any Risks Associated with Buying Discord Accounts?",
      answer:
        "While risks exist, our secure transactions prioritize your safety. Discord Elite 2019 from Discord Arena ensures a reliable and positive experience. Trust us for premium social media account services, including Discord.",
    },
  ],
  features: [
    {
      title: "Exclusivity with Premium Servers",
      description:
        "Discord Elite 2019 provides exclusivity with premium servers, offering a unique and engaging experience for users.",
    },
    {
      title: "Customized Emojis and GIFs Galore",
      description:
        "Users will have access to a plethora of customized emojis and GIFs, allowing for more personalized and expressive communication.",
    },
    {
      title: "Vibrant Community with Regular Events",
      description:
        "The account includes a vibrant community with regular events, fostering a sense of belonging and connection among users.",
    },
    {
      title: "State-of-the-Art Moderation Tools",
      description:
        "Discord Elite 2019 provides state-of-the-art moderation tools to ensure a safe and enjoyable environment for all members.",
    },
    {
      title: "Seamless Harmony with Popular Music Bots",
      description:
        "The integration with popular music bots allows users to enjoy seamless harmony with music and entertainment within the Discord community.",
    },
  ],
  faq: [
    {
      question: "How do I purchase Discord Elite 2019?",
      answer:
        "Visit our official website or contact our customer support for secure and reliable transactions. Discord Arena ensures a smooth purchasing experience for Discord Elite 2019.",
    },
    {
      question:
        "What payment methods are accepted for buying Discord Elite 2019?",
      answer:
        "We accept various payment methods, including credit cards, PayPal, and other secure online options. Check our website for the complete list of accepted payment methods.",
    },
    {
      question: "Is it safe to buy Discord Elite 2019?",
      answer:
        "Yes, it is safe to buy Discord Elite 2019 from us. Prioritize security and follow best practices for a positive and secure purchasing experience.",
    },
    {
      question: "Can I customize the features of Discord Elite 2019?",
      answer:
        "While features are predefined, Discord Arena continually enhances offerings. Contact our customer support for specific customization requests, and we'll strive to accommodate your needs.",
    },
    {
      question:
        "What support is available after purchasing Discord Elite 2019?",
      answer:
        "We provide ongoing support after purchase. For questions, issues, or assistance, contact our customer support, and our team will be delighted to help with Discord Elite 2019.",
    },
  ],
};

export const reviews = [
  {
    name: "John Doe",
    rating: 5,
    comment:
      "I purchased a Discord Account and have been extremely satisfied with the features and benefits it offers. The boosted servers and active Nitro subscription have significantly enhanced my Discord experience, and the ownership of popular servers has allowed me to connect with a large and engaged community. Overall, I highly recommend 2016 Discord Accounts to anyone looking to elevate their Discord experience.",
  },
  {
    name: "Jane Smith",
    rating: 4,
    comment:
      "I recently bought a Discord Account and have been impressed with the verified account and boosted servers. The active Nitro subscription has also provided me with exclusive perks and benefits, making it a valuable investment. The integration of useful bots has further improved the functionality and automation of my Discord experience. I would definitely recommend 2016 Discord Accounts to others.",
  },
  {
    name: "Alex Johnson",
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
    title: `Buy ${data.year} Discord Accounts | Old & Aged Discord Accounts`,
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
          <b className="mb-3 mt-5 text-2xl font-semibold">
            Buy {data.year} Discord Account{" "}
          </b>
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

          <b className="mb-3 mt-5 text-2xl font-semibold">
            Features and benefits of used discord accounts - {data.year}
          </b>

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
                  <b className="absolute top-[-18px] w-fit rounded-lg bg-[#00C9A7] px-3 py-1">
                    {item.name}
                  </b>
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
