import React from "react";
import discordData from "../../../../dataFolder/discord.json";
import { FaDiscord } from "react-icons/fa";
import Link from "next/link";
import { Actor } from "next/font/google";
import Head from "next/head";
import Footer from "@/components/Footer";

const actor = Actor({ weight: "400", subsets: ["latin"] });

export const data = {
  id: 9,
  year: 2023,
  link: "https://yoyohoni.mysellix.io/product/6404d8ffe7127",
  name: "Buy 2023 aged discord account",
  price: 2,
  type: "Discord",
  discountPercentage: 15,
  smallShowFiveFeatures: {
    feature1: "Immersive Access to Advanced Discord Realms",
    feature2: "Dynamic Emojis and GIFs for Expressive Conversations",
    feature3: "Engaging Events in a Thriving Community",
    feature4: "Next-Gen Moderation Tools for Ultimate Safety",
    feature5: "Seamless Integration with Trending Music Platforms",
  },
  introduction:
    "Embark on a journey of digital excellence with Discord Nexus 2023! Since the dawn of 2023, our mission has been to redefine your online presence through immersive access, dynamic expression, engaging community events, cutting-edge security, and seamless integration with trending music platforms.",
  questionAnswerArray: [
    {
      question: "What is the price of Discord Nexus 2023?",
      answer:
        "Indulge in the pinnacle of Discord experiences with Discord Nexus 2023, priced at $1800. Avail a 15% discount, making it a compelling and affordable investment for a heightened digital presence.",
    },
    {
      question: "What are the features of Discord Nexus 2023?",
      answer:
        "Discord Nexus 2023 offers immersive access to advanced Discord realms, dynamic emojis and GIFs for expressive conversations, engaging events in a thriving community, next-gen moderation tools for ultimate safety, and seamless integration with trending music platforms.",
    },
    {
      question: "What are the benefits of Discord Nexus 2023?",
      answer:
        "Experience the benefits of immersive access to advanced Discord realms, dynamic expression with emojis and GIFs, engaging community events, cutting-edge security with next-gen moderation tools, and seamless integration with trending music platforms. Discord Nexus 2023 is your gateway to a redefined online presence.",
    },
    {
      question: "What is the discount percentage for Discord Nexus 2023?",
      answer:
        "Unlock an exclusive 15% discount on Discord Nexus 2023, ensuring an immersive account with a myriad of features and benefits at a highly attractive and budget-friendly price.",
    },
    {
      question: "What is the introduction of Discord Nexus 2023?",
      answer:
        "Embark on a digital journey with Discord Nexus 2023, redefining your online presence since the inception of 2023. Our mission is to provide immersive access, dynamic expression, engaging community events, cutting-edge security, and seamless integration with trending music platforms.",
    },
    {
      question: "Why purchase Discord Nexus 2023?",
      answer:
        "Discord Nexus 2023 is the epitome of Discord experiences, offering immersive access to advanced realms, dynamic expression with emojis and GIFs, engaging community events, cutting-edge security with next-gen moderation tools, and seamless integration with trending music platforms. Elevate your online presence with the future of digital interaction.",
    },
    {
      question: "Are there any Risks Associated with Buying Discord Accounts?",
      answer:
        "While risks exist, our secure transactions prioritize your safety. Trust Discord Nexus 2023 from Discord Arena for a reliable and positive experience. Count on us for premium social media account services, including Discord.",
    },
  ],
  features: [
    {
      title: "Immersive Access to Advanced Discord Realms",
      description:
        "Discord Nexus 2023 provides immersive access to advanced Discord realms, offering a unique and exclusive experience for users.",
    },
    {
      title: "Dynamic Emojis and GIFs for Expressive Conversations",
      description:
        "Users will have access to dynamic emojis and GIFs, allowing for expressive conversations and a personalized user experience.",
    },
    {
      title: "Engaging Events in a Thriving Community",
      description:
        "The account includes engaging events in a thriving community, fostering a sense of belonging and connection among users.",
    },
    {
      title: "Next-Gen Moderation Tools for Ultimate Safety",
      description:
        "Discord Nexus 2023 provides next-gen moderation tools to ensure the ultimate safety and enjoyment of the environment for all members.",
    },
    {
      title: "Seamless Integration with Trending Music Platforms",
      description:
        "The integration with trending music platforms allows users to enjoy seamless harmony with music and entertainment within the Discord community.",
    },
  ],
  faq: [
    {
      question: "How do I purchase Discord Nexus 2023?",
      answer:
        "Visit our official website or contact our customer support for secure and reliable transactions. Discord Arena ensures a smooth purchasing experience for Discord Nexus 2023.",
    },
    {
      question:
        "What payment methods are accepted for buying Discord Nexus 2023?",
      answer:
        "We accept various payment methods, including credit cards, PayPal, and other secure online options. Check our website for the complete list of accepted payment methods.",
    },
    {
      question: "Is it safe to buy Discord Nexus 2023?",
      answer:
        "Yes, it is safe to buy Discord Nexus 2023 from us. Prioritize security and follow best practices for a positive and secure purchasing experience.",
    },
    {
      question: "Can I customize the features of Discord Nexus 2023?",
      answer:
        "While features are predefined, Discord Arena continually enhances offerings. Contact our customer support for specific customization requests, and we'll strive to accommodate your needs.",
    },
    {
      question:
        "What support is available after purchasing Discord Nexus 2023?",
      answer:
        "We provide ongoing support after purchase. For questions, issues, or assistance, contact our customer support, and our team will be delighted to help with Discord Nexus 2023.",
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
