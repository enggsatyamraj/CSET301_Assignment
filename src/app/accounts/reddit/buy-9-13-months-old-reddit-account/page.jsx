import React from "react";
import discordData from "../../../../dataFolder/discordserver.json";
import { FaDiscord } from "react-icons/fa";
import Link from "next/link";
import { Actor } from "next/font/google";
import Head from "next/head";
import Footer from "@/components/Footer";

const actor = Actor({ weight: "400", subsets: ["latin"] });

export const data = {
  id: 4,
  months: "9 - 13",
  link: "https://yoyohoni.mysellix.io/product/6404d6d693e01",
  type: "Reddit",
  name: "Buy 9-13 months Old Reddit Account",
  image: "9-13-reddit-acounts.svg",
  price: 75,
  discountPercentage: 12,
  smallShowFiveFeatures: {
    feature1: "Established Presence",
    feature2: "Reputable Account",
    feature3: "Consistent Activity",
    feature4: "Membership in Exclusive Subreddits",
    feature5: "Enhanced Content Visibility",
  },
  introduction:
    "Welcome to Reddit Prestige – your premier destination for top-tier Reddit accounts. Our 9-13 months old Reddit accounts offer an established presence, reputable standing, and consistent activity, perfect for elevating your Reddit engagement.",
  questionAnswerArray: [
    {
      question: "What is the price of 9-13 months Old Reddit Accounts?",
      answer:
        "Acquire 9-13 months Old Reddit Accounts for $75 with a 12% discount. Enhance your Reddit presence with an established account, reputable standing, and consistent activity.",
    },
    {
      question: "What are the features of 9-13 months Old Reddit Accounts?",
      answer:
        "9-13 months Old Reddit Accounts feature an established presence, reputable standing, and consistent activity. Enjoy membership in exclusive subreddits and enhanced content visibility.",
    },
    {
      question: "What are the benefits of 9-13 months Old Reddit Accounts?",
      answer:
        "Benefit from an established presence, reputable standing, and consistent activity with 9-13 months Old Reddit Accounts. Gain membership in exclusive subreddits and enjoy enhanced content visibility.",
    },
    {
      question:
        "What is the discount percentage for 9-13 months Old Reddit Accounts?",
      answer:
        "Get 9-13 months Old Reddit Accounts at a 12% discount – a valuable opportunity to boost your Reddit experience with an established presence and reputable standing.",
    },
    {
      question: "What is the introduction of 9-13 months Old Reddit Accounts?",
      answer:
        "Introducing 9-13 months Old Reddit Accounts – your premium choice for an established presence, reputable standing, and consistent activity. Join Reddit Prestige and elevate your digital presence.",
    },
    {
      question: "Why purchase 9-13 months Old Reddit Accounts?",
      answer:
        "Unlock advanced features, reputable standing, and consistent activity with 9-13 months Old Reddit Accounts. Gain membership in exclusive subreddits for comprehensive community engagement.",
    },
    {
      question: "Are there any Risks Associated with Buying Reddit Accounts?",
      answer:
        "While potential risks exist, Reddit Prestige ensures secure transactions. Consider possible risks, prioritize security, and trust Reddit Prestige for reliable account services.",
    },
  ],
  features: [
    {
      title: "Established Presence",
      description:
        "Our Reddit accounts have an established presence, enhancing your credibility and visibility on the platform.",
    },
    {
      title: "Reputable Account",
      description:
        "Enjoy a reputable account that commands respect and trust within the Reddit community.",
    },
    {
      title: "Consistent Activity",
      description:
        "Benefit from consistent activity, ensuring your posts and comments are regularly seen and engaged with.",
    },
    {
      title: "Membership in Exclusive Subreddits",
      description:
        "Gain membership in exclusive subreddits, allowing you to participate in high-quality discussions and influential communities.",
    },
    {
      title: "Enhanced Content Visibility",
      description:
        "Experience enhanced content visibility, ensuring your contributions receive the attention they deserve.",
    },
  ],
  faq: [
    {
      question: "How do I purchase 9-13 months Old Reddit Accounts?",
      answer:
        "Visit our official website or contact our customer support for secure transactions. Reddit Prestige ensures a smooth purchasing experience.",
    },
    {
      question:
        "What payment methods are accepted for buying 9-13 months Old Reddit Accounts?",
      answer:
        "We accept various payment methods, including credit cards, PayPal, and other secure online options. Check our website for the complete list of accepted payment methods.",
    },
    {
      question: "Is it safe to buy 9-13 months Old Reddit Accounts?",
      answer:
        "Yes, it is safe to buy 9-13 months Old Reddit Accounts from us. Prioritize security, and follow best practices for a secure and positive purchasing experience.",
    },
    {
      question:
        "Can I customize the features of 9-13 months Old Reddit Accounts?",
      answer:
        "While features are predefined, Reddit Prestige continually enhances offerings. Contact our customer support for specific customization requests, and we'll strive to accommodate your needs.",
    },
    {
      question:
        "What support is available after purchasing 9-13 months Old Reddit Accounts?",
      answer:
        "We provide ongoing support after purchase. For questions, issues, or assistance, contact our customer support, and our team will be delighted to help.",
    },
  ],
};

export const reviews = [
  {
    name: "Kyle",
    rating: 5,
    comment: "Very good. Replied very fast.",
  },
  {
    name: "斯蒂芬妮 ",
    rating: 4,
    comment: "very quick , professional :) i recommend",
  },
  {
    name: "Ryan",
    rating: 5,
    comment: "Best seller and best products ❤️",
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
    title: `Buy ${data.months} months old Reddit Accounts | Discord Arena`,
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
            Buy {data.months} old {data.type} Accounts for sale-
            {data.discountPercentage}% Discount Buy Now
          </p>
          <div className="my-7 h-[1px] bg-[#fff]"></div>
          <h1 className="text-[15px] opacity-80 md:text-[1.15rem] mb-3">
            Buy {data.months} months old Reddit Accounts at cheap prices here on
            Discord Arena.
          </h1>
          <p className="mb-3 mt-5 text-2xl font-semibold">
            Buy {data.months} Reddit Accounts{" "}
          </p>
          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 mt-3">
            <img
              src={`../../discord-accounts/${data.image}`}
              alt={data.name}
              className="mb-4"
            />
            <div>
              <p className="mb-5 text-2xl">
                Buy cheap {data.months} months old Reddit Accounts{" "}
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
            Cheap {data.months} {data.type} accounts
          </p>
          <p className="text-[16px] opacity-85 mb-4">{data.introduction}</p> */}

          <p className="mb-3 mt-5 text-2xl font-semibold">
            Features and benefits of Reddit Accountss - {data.months} months old
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
            FAQs related to aged Reddit Accounts - {data.months}
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
      </div>
    </div>
  );
};

export default Page;
