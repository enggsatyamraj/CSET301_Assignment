import React from "react";
import discordData from "../../../../dataFolder/discord.json";
import { FaDiscord } from "react-icons/fa";
import Link from "next/link";
import { Actor } from "next/font/google";
import Head from "next/head";
import Footer from "@/components/Footer";

const actor = Actor({ weight: "400", subsets: ["latin"] });

export const data = {
  id: 1,
  year: 2015,
  link: "https://yoyohoni.mysellix.io/product/6404d6d693a97",
  type: "Discord",
  name: "Buy 2015 aged discord account",
  price: 100,
  discountPercentage: 10,
  smallShowFiveFeatures: {
    feature1: "Verified credibility",
    feature2: "Boosted server capabilities",
    feature3: "Active Nitro subscription perks",
    feature4: "Ownership of engaged Discord servers",
    feature5: "Integration of useful automation bots",
  },
  introduction:
    "Welcome to Discord Arena – your gateway to superior digital presence. Explore Elite Discord Accounts, meticulously crafted since 2015 to enhance your online experience. Immerse yourself in verified credibility, boosted server capabilities, and the exclusive perks of an active Nitro subscription.",
  questionAnswerArray: [
    {
      question: "What is the price of Elite Discord Accounts?",
      answer:
        "Secure Elite Discord Accounts for $1200 with a 10% discount. Elevate your Discord experience with verified credibility, boosted server capabilities, and exclusive perks for enhanced functionality and connection.",
    },
    {
      question: "What are the features of Elite Discord Accounts?",
      answer:
        "Experience verified credibility, boosted server capabilities, and exclusive perks with Elite Discord Accounts. Connect with engaged Discord servers and enjoy the automation benefits of integrated useful bots.",
    },
    {
      question: "What are the benefits of Elite Discord Accounts?",
      answer:
        "Elite Discord Accounts provide added credibility, enhanced server capabilities, and exclusive perks. Connect with engaged Discord servers and leverage integrated useful bots for enhanced connection and functionality.",
    },
    {
      question: "What is the discount percentage for Elite Discord Accounts?",
      answer:
        "Avail Elite Discord Accounts at a 10% discount – a valuable opportunity to enhance your Discord experience with verified credibility, boosted server capabilities, and exclusive perks.",
    },
    {
      question: "What is the introduction of Elite Discord Accounts?",
      answer:
        "Introducing Elite Discord Accounts – your premium choice for verified credibility, boosted server capabilities, and exclusive perks. Join our community since 2015 and elevate your digital presence with Discord Arena.",
    },
    {
      question: "Why purchase Elite Discord Accounts?",
      answer:
        "Unlock exclusive features, enhanced server capabilities, and tools for managing and growing a server with Elite Discord Accounts. Join engaged Discord servers for comprehensive community engagement and enhanced functionality.",
    },
    {
      question: "Are there any Risks Associated with Buying Discord Accounts?",
      answer:
        "While risks exist, Discord Arena ensures secure transactions. Consider potential risks, prioritize security, and trust Discord Arena for reliable social media account services, including Discord.",
    },
  ],
  features: [
    {
      title: "Verified Credibility",
      description:
        "Elite Discord Accounts come with verified credibility, instilling trust within the Discord community.",
    },
    {
      title: "Boosted Server Capabilities",
      description:
        "Access boosted servers for enhanced features and capabilities, simplifying server management and growth.",
    },
    {
      title: "Active Nitro Subscription Perks",
      description:
        "Enjoy the perks of an active Nitro subscription, including custom emojis, animated avatars, and server boosts.",
    },
    {
      title: "Ownership of Engaged Servers",
      description:
        "Own popular, engaged Discord servers, connecting you with a large and active community.",
    },
    {
      title: "Integration of Useful Automation Bots",
      description:
        "Benefit from the integration of useful bots, providing improved functionality and automation for an enhanced user experience.",
    },
  ],
  faq: [
    {
      question: "How do I purchase Elite Discord Accounts?",
      answer:
        "Visit our official website or contact our customer support for secure and reliable transactions. Discord Arena ensures a smooth purchasing experience.",
    },
    {
      question:
        "What payment methods are accepted for buying Elite Discord Accounts?",
      answer:
        "We accept various payment methods, including credit cards, PayPal, and other secure online options. Check our website for the complete list of accepted payment methods.",
    },
    {
      question: "Is it safe to buy Elite Discord Accounts?",
      answer:
        "Yes, it is safe to buy Elite Discord Accounts from us. Prioritize security, and follow best practices for a positive and secure purchasing experience.",
    },
    {
      question: "Can I customize the features of Elite Discord Accounts?",
      answer:
        "While features are predefined, Discord Arena continually enhances offerings. Contact our customer support for specific customization requests, and we'll strive to accommodate your needs.",
    },
    {
      question:
        "What support is available after purchasing Elite Discord Accounts?",
      answer:
        "We provide ongoing support after purchase. For questions, issues, or assistance, contact our customer support, and our team will be delighted to help.",
    },
  ],
  reviews: [
    {
      name: "Rajesh Kumar",
      review:
        "The Elite Discord Accounts have significantly improved my server management. The boosted server capabilities and integrated bots are extremely helpful.",
      rating: 5,
    },
    {
      name: "Emily Johnson",
      review:
        "I am thoroughly impressed with the quality and features of these accounts. The verified credibility and active Nitro subscription perks are fantastic.",
      rating: 4,
    },
    {
      name: "Li Wei",
      review:
        "These accounts have established great credibility and enhanced server functions. I'm very satisfied with my purchase.",
      rating: 5,
    },
    {
      name: "Suman Sharma",
      review:
        "The quality of the accounts is exceptional. The server capabilities and integration of useful bots have made my experience outstanding.",
      rating: 5,
    },
  ],
};

// export const reviews = [
//   {
//     name: "Ajay Verma",
//     rating: 5,
//     comment:
//       "great customer service, fast responses, like a few hours and reallllllllly easy like super easy to log in . love it.",
//   },
//   {
//     name: "Sarah Davis",
//     rating: 4,
//     comment: "SUPER FAST DELIVERY man i highly recommend",
//   },
//   {
//     name: "William Moore",
//     rating: 5,
//     comment:
//       "Amazing , Helpful in all ways fast as it gets u won’t regret it don’t be nervous I was helped within minutes and got my product under seconds",
//   },
// ];

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
      ratingValue: calculateAverageRating(data.reviews).toString(),
      reviewCount: data.reviews.length.toString(),
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
            {data.reviews.map((item, index) => {
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
                  <p className="text-[14px] opacity-80">{item.review}</p>
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
      </div>
    </div>
  );
};

export default Page;
