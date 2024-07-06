import React from "react";
import discordData from "../../../../dataFolder/discord.json";
import { FaDiscord } from "react-icons/fa";
import Link from "next/link";
import { Actor } from "next/font/google";
import Head from "next/head";
import Footer from "@/components/Footer";

const actor = Actor({ weight: "400", subsets: ["latin"] });

export const data = {
  id: 7,
  year: 2021,
  link: "https://yoyohoni.mysellix.io/product/6404dead5497e",
  name: "Buy 2021 aged discord account",
  price: 3,
  type: "Discord",
  discountPercentage: 20,
  smallShowFiveFeatures: {
    feature1: "Elite Access to Premium Discord Realms",
    feature2: "Express Yourself with Exquisite Custom Emojis",
    feature3: "Vibrant Community with Dynamic Interactive Events",
    feature4: "Cutting-Edge Moderation for Ultimate Security",
    feature5: "Elevated Harmony with Top-Tier Music Integration",
  },
  introduction:
    "Step into the pinnacle of Discord excellence with Discord Elysium 2021! Since the inception of 2021, we've been dedicated to shaping your online presence through elite access, expressive communication, vibrant community engagement, state-of-the-art security, and elevated harmony with top-tier music integration.",
  questionAnswerArray: [
    {
      question: "What is the price of Discord Elysium 2021?",
      answer:
        "Embark on a journey with Discord Elysium 2021 at the price of $1700. Revel in a 20% discount, making it an exclusive and affordable investment for an enriched Discord experience.",
    },
    {
      question: "What are the features of Discord Elysium 2021?",
      answer:
        "Discord Elysium 2021 provides elite access to premium Discord realms, allowing you to express yourself with exquisite custom emojis, engage in a vibrant community with dynamic interactive events, ensure state-of-the-art security with cutting-edge moderation, and elevate harmony with top-tier music integration.",
    },
    {
      question: "What are the benefits of Discord Elysium 2021?",
      answer:
        "Experience the benefits of elite access to premium Discord realms, expressive communication with exquisite custom emojis, vibrant community engagement with dynamic interactive events, state-of-the-art security with cutting-edge moderation, and elevated harmony with top-tier music integration. Discord Elysium 2021 offers an all-encompassing and enriched Discord experience.",
    },
    {
      question: "What is the discount percentage for Discord Elysium 2021?",
      answer:
        "Unlock an exclusive 20% discount on Discord Elysium 2021, ensuring an elite account with a plethora of features and benefits at a highly attractive and affordable price.",
    },
    {
      question: "What is the introduction of Discord Elysium 2021?",
      answer:
        "Step into the world of Discord excellence with Discord Elysium 2021. Since 2021, we've been committed to shaping your online presence with elite access, expressive communication, vibrant community engagement, state-of-the-art security, and elevated harmony with top-tier music integration.",
    },
    {
      question: "Why purchase Discord Elysium 2021?",
      answer:
        "Discord Elysium 2021 offers an unparalleled Discord experience, from elite access to premium Discord realms to expressive communication with exquisite custom emojis, vibrant community engagement, state-of-the-art security with cutting-edge moderation, and elevated harmony with top-tier music integration. Elevate your online presence with the pinnacle of Discord excellence.",
    },
    {
      question: "Are there any Risks Associated with Buying Discord Accounts?",
      answer:
        "While risks exist, our secure transactions prioritize your safety. Trust Discord Elysium 2021 from Discord Arena for a reliable and positive experience. Count on us for premium social media account services, including Discord.",
    },
  ],
  features: [
    {
      title: "Elite Access to Premium Discord Realms",
      description:
        "Discord Elysium 2021 provides elite access to premium Discord realms, offering a unique and exclusive experience for users.",
    },
    {
      title: "Express Yourself with Exquisite Custom Emojis",
      description:
        "Users will have access to a variety of exquisite custom emojis, allowing for expressive communication and a personalized user experience.",
    },
    {
      title: "Vibrant Community with Dynamic Interactive Events",
      description:
        "The account includes a vibrant community with dynamic interactive events, fostering a sense of belonging and connection among users.",
    },
    {
      title: "Cutting-Edge Moderation for Ultimate Security",
      description:
        "Discord Elysium 2021 provides cutting-edge moderation tools to ensure the ultimate security and enjoyment of the environment for all members.",
    },
    {
      title: "Elevated Harmony with Top-Tier Music Integration",
      description:
        "The integration with top-tier music platforms allows users to enjoy elevated harmony with music and entertainment within the Discord community.",
    },
  ],
  faq: [
    {
      question: "How do I purchase Discord Elysium 2021?",
      answer:
        "Visit our official website or contact our customer support for secure and reliable transactions. Discord Arena ensures a smooth purchasing experience for Discord Elysium 2021.",
    },
    {
      question:
        "What payment methods are accepted for buying Discord Elysium 2021?",
      answer:
        "We accept various payment methods, including credit cards, PayPal, and other secure online options. Check our website for the complete list of accepted payment methods.",
    },
    {
      question: "Is it safe to buy Discord Elysium 2021?",
      answer:
        "Yes, it is safe to buy Discord Elysium 2021 from us. Prioritize security and follow best practices for a positive and secure purchasing experience.",
    },
    {
      question: "Can I customize the features of Discord Elysium 2021?",
      answer:
        "While features are predefined, Discord Arena continually enhances offerings. Contact our customer support for specific customization requests, and we'll strive to accommodate your needs.",
    },
    {
      question:
        "What support is available after purchasing Discord Elysium 2021?",
      answer:
        "We provide ongoing support after purchase. For questions, issues, or assistance, contact our customer support, and our team will be delighted to help with Discord Elysium 2021.",
    },
  ],
  reviews: [
    {
      name: "Anshul Rajput",
      rating: 4.5,
      review: "Bought 2 alts for him both work like a charm",
    },
    {
      name: "Rahul Singh",
      rating: 5,
      review: "Great service, got my account instantly",
    },
    {
      name: "Charlos simon",
      rating: 4,
      review:
        "great customer service, fast responses, like a few hours and reallllllllly easy like super easy to log in . love it.",
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
        <Footer />
      </div>
    </div>
  );
};

export default Page;
