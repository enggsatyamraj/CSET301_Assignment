import React from "react";
import discordData from "../../../../dataFolder/discord.json";
import { FaDiscord } from "react-icons/fa";
import Link from "next/link";
import { Actor } from "next/font/google";
import Head from "next/head";
import Footer from "@/components/Footer";

const actor = Actor({ weight: "400", subsets: ["latin"] });

export const data = {
  id: 8,
  year: 2022,
  link: "https://yoyohoni.mysellix.io/product/6404d8ffe7127",
  name: "Buy 2022 aged discord account",
  price: 2.5,
  type: "Discord",
  image: "2022-discord.svg",
  discountPercentage: 15,
  smallShowFiveFeatures: {
    feature1: "Cutting-Edge Features for Premium Discord Exploration",
    feature2: "Interactive Emojis and GIFs for Expressive Communication",
    feature3: "Thriving Community with Live Events and Engaging Activities",
    feature4: "Advanced Moderation Tools Ensuring Secure Environments",
    feature5: "Immersive Music Experience with Top-Tier Integration",
  },
  introduction:
    "Embark on a journey of digital excellence with Discord Apex 2022! Since the dawn of 2022, we've been committed to elevating your online presence through cutting-edge features, interactive communication, a thriving community, advanced security, and an immersive music experience.",
  questionAnswerArray: [
    {
      question: "What is the price of Discord Apex 2022?",
      answer:
        "Seize the opportunity to experience Discord Apex 2022 at the price of $1800, accompanied by an exclusive 15% discount. Immerse yourself in premium Discord exploration at an attractive and affordable rate.",
    },
    {
      question: "What are the features of Discord Apex 2022?",
      answer:
        "Discord Apex 2022 introduces cutting-edge features for premium Discord exploration, interactive emojis and GIFs for expressive communication, a thriving community with live events and engaging activities, advanced moderation tools ensuring secure environments, and an immersive music experience with top-tier integration.",
    },
    {
      question: "What are the benefits of Discord Apex 2022?",
      answer:
        "Experience the benefits of cutting-edge features, interactive communication, a thriving community, advanced security, and an immersive music experience. Discord Apex 2022 offers a comprehensive and enriched Discord exploration for users seeking an elevated digital presence.",
    },
    {
      question: "What is the discount percentage for Discord Apex 2022?",
      answer:
        "Enjoy an exclusive 15% discount on Discord Apex 2022, ensuring a premium account with a myriad of features and benefits at a reduced and highly appealing price.",
    },
    {
      question: "What is the introduction of Discord Apex 2022?",
      answer:
        "Embark on a journey of digital excellence with Discord Apex 2022. Since the dawn of 2022, we've been committed to elevating your online presence through cutting-edge features, interactive communication, a thriving community, advanced security, and an immersive music experience.",
    },
    {
      question: "Why purchase Discord Apex 2022?",
      answer:
        "Discord Apex 2022 offers an immersive Discord exploration, from cutting-edge features to interactive communication, a thriving community, advanced security, and an immersive music experience. Elevate your digital presence with the pinnacle of Discord excellence.",
    },
    {
      question: "Are there any Risks Associated with Buying Discord Accounts?",
      answer:
        "While risks exist, our secure transactions prioritize your safety. Trust Discord Apex 2022 from Discord Arena for a reliable and positive experience. Count on us for premium social media account services, including Discord.",
    },
  ],
  features: [
    {
      title: "Cutting-Edge Features for Premium Discord Exploration",
      description:
        "Discord Apex 2022 introduces cutting-edge features for premium Discord exploration, ensuring a unique and exclusive experience for users.",
    },
    {
      title: "Interactive Emojis and GIFs for Expressive Communication",
      description:
        "Users will have access to a variety of interactive emojis and GIFs, allowing for expressive communication and a personalized user experience.",
    },
    {
      title: "Thriving Community with Live Events and Engaging Activities",
      description:
        "The account includes a thriving community with live events and engaging activities, fostering a sense of belonging and connection among users.",
    },
    {
      title: "Advanced Moderation Tools Ensuring Secure Environments",
      description:
        "Discord Apex 2022 provides advanced moderation tools to ensure secure environments and an enjoyable experience for all members.",
    },
    {
      title: "Immersive Music Experience with Top-Tier Integration",
      description:
        "The integration with top-tier music platforms allows users to enjoy an immersive music experience and entertainment within the Discord community.",
    },
  ],
  faq: [
    {
      question: "How do I purchase Discord Apex 2022?",
      answer:
        "Visit our official website or contact our customer support for secure and reliable transactions. Discord Arena ensures a smooth purchasing experience for Discord Apex 2022.",
    },
    {
      question:
        "What payment methods are accepted for buying Discord Apex 2022?",
      answer:
        "We accept various payment methods, including credit cards, PayPal, and other secure online options. Check our website for the complete list of accepted payment methods.",
    },
    {
      question: "Is it safe to buy Discord Apex 2022?",
      answer:
        "Yes, it is safe to buy Discord Apex 2022 from us. Prioritize security and follow best practices for a positive and secure purchasing experience.",
    },
    {
      question: "Can I customize the features of Discord Apex 2022?",
      answer:
        "While features are predefined, Discord Arena continually enhances offerings. Contact our customer support for specific customization requests, and we'll strive to accommodate your needs.",
    },
    {
      question: "What support is available after purchasing Discord Apex 2022?",
      answer:
        "We provide ongoing support after purchase. For questions, issues, or assistance, contact our customer support, and our team will be delighted to help with Discord Apex 2022.",
    },
  ],
  reviews: [
    {
      name: "Karan Singh",
      rating: 5,
      review:
        "Super nice guy, quick delivery through telegram and the accounts work perfectly.",
    },
    {
      name: "Olivia Anderson",
      rating: 5,
      review:
        "Seller was very kind and responded quickly ❤️ did not have any problems recieving product",
    },
    {
      name: "simon Emma Harris",
      rating: 4,
      review:
        "I had a small issue with the purchased product, but support was very quick to respond and resolve the issue for me! Thanks again!",
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
//     comment:
//       "SUPER FAST DELIVERY man i highly recommend",
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
          <h1 className="mx-auto  text-2xl sm:text-3xl md:text-4xl">
            Buy {data.year} {data.type} Aged Accounts
          </h1>
          <div className="my-7 h-[1px] bg-[#fff]"></div>
          <p className="text-[15px] opacity-80 md:text-[1.15rem] mb-3">
            Buy {data.year} Discord accounts at cheap prices here on Discord
            Arena.
          </p>
          <p className="mb-3 mt-5 text-2xl font-semibold">
            Buy {data.year} Discord Account{" "}
          </p>
          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 mt-3">
            <img
              src={`../../discord-accounts/${data.image}`}
              alt={"Buy 2022 aged discord account"}
              className="mb-4"
            />
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
