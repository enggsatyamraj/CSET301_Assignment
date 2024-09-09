import React from "react";
import discordData from "../../../../dataFolder/instagram.json";
import { FaInstagram } from "react-icons/fa";
import Link from "next/link";
import { Actor } from "next/font/google";
import Head from "next/head";
import Footer from "@/components/Footer";

const actor = Actor({ weight: "400", subsets: ["latin"] });

export const reviews = [
  {
    id: 1,
    name: "Ajay Verma",
    rating: 5,
    review:
      "I purchased a instagram Account and have been extremely satisfied with the features and benefits it offers. The boosted servers and active Nitro subscription have enhanced my server management and communication capabilities, and the integration of useful bots has improved the overall user experience. Additionally, the ownership of popular, engaged instagram servers has allowed me to connect with a large and active community. Overall, I highly recommend 2017 instagram Accounts for anyone looking to elevate their instagram experience.",
  },
  {
    id: 2,
    name: "Sarah Davis",
    rating: 4,
    review:
      "I recently purchased a instagram Account and have been impressed with the range of features and benefits it offers. The verified account and boosted servers have provided added credibility and enhanced capabilities for managing and growing my server. The active Nitro subscription has also offered exclusive perks and benefits, and the integration of useful bots has improved functionality and automation. Overall, I am satisfied with my purchase and would recommend 2017 instagram Accounts to others looking to enhance their instagram experience.",
  },
  {
    id: 3,
    name: "William Moore",
    rating: 5,
    review:
      "I have been using a instagram Account for some time now and have found it to be a valuable investment. The verified account and boosted servers have provided added credibility and enhanced capabilities for managing and growing my server. The active Nitro subscription has also offered exclusive perks and benefits, and the integration of useful bots has improved functionality and automation. Additionally, the ownership of popular, engaged instagram servers has allowed me to connect with a large and active community. Overall, I highly recommend 2017 instagram Accounts for anyone looking to elevate their instagram experience.",
  },
];

export function calculateAverageRating(reviews) {
  if (reviews.length === 0) return 0; // Return 0 if there are no reviews
  const totalRating = reviews.reduce((acc, curr) => acc + curr.rating, 0);
  return (totalRating / reviews.length).toFixed(1); // Return the average rating rounded to 1 decimal place
}

export const data = {
  id: 1,
  year: 2013,
  type: "instagram",
  name: "get 2015 instagram accounts",
  price: 6.98,
  link: "https://yoyohoni.mysellix.io/product/664298f4248a9",
  discountPercentage: 15,
  smallShowFiveFeatures: {
    feature1: "Verified account for enhanced credibility",
    feature2: "Boosted servers with advanced capabilities",
    feature3: "Active Nitro subscription for exclusive perks",
    feature4: "Ownership of popular and engaged Instagram servers",
    feature5: "Integration of useful bots for improved functionality",
  },
  introduction:
    "Instagram Account One is a premium account designed to provide users with an exceptional Instagram experience. With a verified account, users enjoy enhanced credibility within the Instagram community. The boosted servers offer advanced capabilities, making server management and growth easier. An active Nitro subscription ensures exclusive perks, including custom emojis and animated avatars. Users also gain ownership of popular, engaged Instagram servers, fostering connections within a vibrant community. The integration of useful bots further enhances functionality, creating a seamless user experience.",
  questionAnswerArray: [
    {
      question: "What is the price of 2015 Instagram Accounts?",
      answer:
        "The price of 2015 Instagram Accounts is $1000. This premium account comes with a variety of features and benefits, making it a valuable investment for users seeking to elevate their Instagram experience. With a verified account, boosted servers, an active Nitro subscription, ownership of popular servers, and integration of useful bots, users gain access to a comprehensive and valuable package.",
    },
    {
      question: "What are the features of 2015 Instagram Accounts?",
      answer:
        "2015 Instagram Accounts offer a range of features, including a verified account, boosted servers, an active Nitro subscription, ownership of popular servers, and integration of useful bots. These features enhance credibility, server capabilities, and functionality, providing users with a comprehensive and valuable Instagram experience.",
    },
    {
      question: "What are the benefits of 2015 Instagram Accounts?",
      answer:
        "2015 Instagram Accounts provide users with benefits such as enhanced credibility, advanced server capabilities, exclusive perks through an active Nitro subscription, ownership of popular servers, and improved functionality with integrated bots. These benefits make 2015 Instagram Accounts a valuable investment for users looking to enhance their Instagram experience.",
    },
    {
      question: "What is the discount percentage for 2015 Instagram Accounts?",
      answer:
        "The discount percentage for 2015 Instagram Accounts is 15%. This discount allows users to enjoy the premium features and benefits of the account at a reduced price. With a verified account, boosted servers, an active Nitro subscription, ownership of popular servers, and integration of useful bots, the discount offers an attractive opportunity to elevate the Instagram experience at a more affordable rate.",
    },
    {
      question: "What is the introduction of 2015 Instagram Accounts?",
      answer:
        "Instagram Account One is a premium account designed to provide users with an exceptional Instagram experience. With a verified account, boosted servers, an active Nitro subscription, ownership of popular servers, and integration of useful bots, users can enjoy enhanced credibility, advanced capabilities, exclusive perks, community engagement, and improved functionality.",
    },
    {
      question: "Why does someone purchase Instagram Accounts?",
      answer:
        "Someone might purchase Instagram Accounts to gain access to premium features and benefits that are not available with a standard account. Premium accounts often offer exclusive perks, enhanced server capabilities, and additional tools for managing and growing a server. Additionally, premium accounts may provide access to popular and engaged Instagram servers, fostering connections and community engagement.",
    },
    {
      question:
        "Are there any risks associated with buying Instagram Accounts?",
      answer:
        "There are potential risks associated with buying Instagram accounts, such as violating Instagram's terms of service and facing account suspension or termination. Additionally, purchased accounts may have unknown or undisclosed histories, leading to security and privacy concerns. It is important to carefully consider the potential risks and consequences before purchasing an Instagram account and to ensure that the transaction is conducted through reputable and secure channels.",
    },
  ],
  features: [
    {
      title: "Immediate Follower Base",
      description:
        "Buy Instagram accounts with an existing audience to engage with followers immediately, crucial for rapid growth.",
    },
    {
      title: "Enhanced Credibility",
      description:
        "Sale of Instagram accounts with a significant follower count enhances your brand's credibility, attracting more followers and engagement.",
    },
    {
      title: "Business Promotion",
      description:
        "Pre-established Instagram accounts help promote products or services faster, boosting sales and brand awareness.",
    },
    {
      title: "Time Efficiency",
      description:
        "Save months or years of effort with buying established Instagram accounts instead of building a following from scratch.",
    },
    {
      title: "Growth Acceleration",
      description:
        "Purchase Instagram accounts to jump-start your growth with an existing follower base.",
    },
  ],
  faq: [
    {
      question: "How do I purchase an Instagram Account?",
      answer:
        "To purchase an Instagram Account, you can visit our official website or contact our customer support. We provide secure and reliable transactions to ensure a smooth purchasing experience.",
    },
    {
      question:
        "What payment methods are accepted for buying an Instagram Account?",
      answer:
        "You can pay using credit cards, PayPal, or other secure online payment methods. Visit our website to see all the payment options available.",
    },
    {
      question: "Is it safe to buy an Instagram Account?",
      answer:
        "Yes, it is safe to buy an Instagram Account from us. We prioritize the security and privacy of our customers, and our transactions are conducted through reputable and secure channels. However, it's essential to be cautious and follow best practices to ensure a positive experience.",
    },
    {
      question: "Can I customize the features of my Instagram Account?",
      answer:
        "While the features of 2015 Instagram Accounts are predefined, we are constantly working to enhance our offerings. If you have specific customization requests, feel free to reach out to our customer support, and we'll do our best to accommodate your needs.",
    },
    {
      question:
        "What support is available after purchasing an Instagram Account?",
      answer:
        "We provide ongoing support to our customers after they purchase an Instagram Account. If you have any questions, issues, or need assistance, you can contact our customer support, and our team will be happy to help you.",
    },
  ],
};

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
    title: `Buy ${data.year} Aged Instagram Accounts | Discord Arena`,
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
  const title = "get-2013-instagram-account";
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
            Buy {data.year} Aged {data.type} Accounts
          </h1>
          <div className="my-7 h-[1px] bg-[#fff]"></div>
          <p className="text-[15px] opacity-80 md:text-[1.15rem] mb-3">
            Buy {data.year} Instagram accounts at cheap prices here on Discord
            Arena.
          </p>
          <p className="mb-3 mt-5 text-2xl font-semibold">
            Buy {data.year} Instagram Account{" "}
          </p>
          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 mt-3">
            <div className="flex h-[200px] w-[100%] items-center justify-center rounded-[10px] border-[1px] border-[#fff] text-3xl">
              <FaInstagram size={100} className="dance text-[#A5A6F6]" />
            </div>
            <div>
              <p className="mb-5 text-2xl">
                Buy cheap {data.year} Instagram Account{" "}
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
            {/* <Link href={data.link} target="_blank"> */}
            <Link
              href={data.link}
              target="_blank"
              className="flex-[3] text-center justify-center items-center rounded-md bg-[#F6EBFF] px-3  py-[10px] text-xl  font-bold text-black"
            >
              Purchase
            </Link>
            {/* </Link> */}
          </div>
          {/* <p className="mb-3 mt-7 text-2xl">
            Cheap {data.year} {data.type} accounts
          </p>
          <p className="text-[16px] opacity-85 mb-4">{data.introduction}</p> */}

          <p className="mb-3 mt-5 text-2xl font-semibold">
            Features and benefits of used instagram accounts - {data.year}
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

          {/* <div>
            {data.questionAnswerArray &&
              data.questionAnswerArray.map((item, index) => {
                return (
                  <div key={index}>
                    <p className="mb-3 mt-5 text-2xl ">{item.question}</p>
                    <p className="opacity-80">{item.answer}</p>
                  </div>
                );
              })}
          </div> */}

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
                  <p className="text-[14px] opacity-80">{item.review}</p>
                </div>
              );
            })}
          </div>

          <h2 className="mb-4 mt-5 text-2xl font-semibold">
            FAQs related to Instagram Accounts - {data.year}
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
