import React from "react";
import discordData from "../../../../dataFolder/discordserver.json";
import { FaDiscord } from "react-icons/fa";
import Link from "next/link";
import { Actor } from "next/font/google";
import Head from "next/head";
import Footer from "@/components/Footer";

const actor = Actor({ weight: "400", subsets: ["latin"] });

export const data = {
  id: 2,
  months: 12,
  link: "https://yoyohoni.mysellix.io/product/6404d6d693c99",
  type: "Reddit",
  name: "Buy 12-Month Old Reddit Account",
  image: "12-months-reddit-acounts.svg",
  price: 90,
  discountPercentage: 20,
  smallShowFiveFeatures: {
    feature1: "Established Account",
    feature2: "High Engagement Rate",
    feature3: "Community Trust",
    feature4: "Access to Exclusive Subreddits",
    feature5: "Optimized Posting",
  },
  introduction:
    "Welcome to Reddit Success – your trusted source for premium Reddit accounts. Our 12-month old accounts offer an established presence, high engagement rates, and community trust, perfect for enhancing your Reddit experience.",
  questionAnswerArray: [
    {
      question: "What is the price of 12-Month Old Reddit Accounts?",
      answer:
        "Purchase 12-Month Old Reddit Accounts for $90 with a 20% discount. Enhance your Reddit experience with an established account, high engagement rates, and community trust.",
    },
    {
      question: "What are the features of 12-Month Old Reddit Accounts?",
      answer:
        "Our 12-Month Old Reddit Accounts offer an established presence, high engagement rates, and community trust. Enjoy access to exclusive subreddits and optimized posting capabilities.",
    },
    {
      question: "What are the benefits of 12-Month Old Reddit Accounts?",
      answer:
        "Benefit from an established account, high engagement rates, and community trust with 12-Month Old Reddit Accounts. Gain access to exclusive subreddits and optimized posting for better visibility.",
    },
    {
      question:
        "What is the discount percentage for 12-Month Old Reddit Accounts?",
      answer:
        "Get 12-Month Old Reddit Accounts at a 20% discount – a great deal to enhance your Reddit experience with an established presence, high engagement rates, and community trust.",
    },
    {
      question: "What is the introduction of 12-Month Old Reddit Accounts?",
      answer:
        "Introducing 12-Month Old Reddit Accounts – your top choice for an established presence, high engagement rates, and community trust. Join Reddit Success and elevate your digital presence.",
    },
    {
      question: "Why purchase 12-Month Old Reddit Accounts?",
      answer:
        "Unlock the full potential of Reddit with our 12-Month Old Reddit Accounts. Enjoy an established presence, high engagement rates, and access to exclusive subreddits for comprehensive community engagement.",
    },
    {
      question: "Are there any Risks Associated with Buying Reddit Accounts?",
      answer:
        "While there are potential risks, Reddit Success ensures secure transactions. Consider possible risks, prioritize security, and trust Reddit Success for reliable account services.",
    },
  ],
  features: [
    {
      title: "Established Account",
      description:
        "Our Reddit accounts have a well-established presence, enhancing your credibility and influence on the platform.",
    },
    {
      title: "High Engagement Rate",
      description:
        "Benefit from a high engagement rate, ensuring your posts and comments receive the attention they deserve.",
    },
    {
      title: "Community Trust",
      description:
        "Gain the trust of the Reddit community with our aged accounts, fostering authentic interactions.",
    },
    {
      title: "Access to Exclusive Subreddits",
      description:
        "Enjoy access to exclusive subreddits, allowing you to participate in high-quality discussions and communities.",
    },
    {
      title: "Optimized Posting",
      description:
        "Experience optimized posting capabilities, improving the visibility and impact of your contributions.",
    },
  ],
  faq: [
    {
      question: "How do I purchase 12-Month Old Reddit Accounts?",
      answer:
        "For secure transactions, visit our official website or reach out to our customer support. Reddit Success guarantees a seamless purchasing experience.",
    },
    {
      question:
        "What payment methods are accepted for buying 12-Month Old Reddit Accounts?",
      answer:
        "We accept a variety of payment methods, including credit cards, PayPal, and other secure options. Check our website for the complete list.",
    },
    {
      question: "Is it safe to buy 12-Month Old Reddit Accounts?",
      answer:
        "Yes, purchasing 12-Month Old Reddit Accounts from us is safe. Follow best practices for a secure and positive purchasing experience.",
    },
    {
      question: "Can I customize the features of 12-Month Old Reddit Accounts?",
      answer:
        "While features are generally predefined, we strive to meet specific customization requests. Contact customer support for more details.",
    },
    {
      question:
        "What support is available after purchasing 12-Month Old Reddit Accounts?",
      answer:
        "We offer ongoing support post-purchase. For any questions or assistance, contact our customer support team for prompt help.",
    },
  ],
};

export const reviews = [
  {
    name: "Daniel",
    rating: 5,
    comment:
      "SECOND BUYING form Discord Arena store ! Discord Arena is always so pleasant and responsible with its customers, now that I know a trusted salesperson I will definitely be back! ♥",
  },
  {
    name: "艾米丽",
    rating: 4,
    comment:
      "2015 account is 100% legit, can vouch as another reputable seller",
  },
  {
    name: "チャールズ",
    rating: 5,
    comment: "Good seller, replies fast 100% legit",
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
      {/* <Head>
        <title>Buy {data.months} old Reddit Accounts | Discord Arena</title>
        <meta name="description" content={data.introduction} />
        <meta property="og:title" content={data.name} />
        <meta property="og:description" content={data.introduction} />
        <meta
          property="og:image"
          content="https://example.com/photos/1x1/photo.jpg"
        />
        <meta property="og:url" content={data.link} />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="Your Website Name" />
        <meta name="twitter:title" content={data.name} />
        <meta name="twitter:description" content={data.introduction} />
        <meta
          name="twitter:image"
          content="https://example.com/photos/1x1/photo.jpg"
        />
        <meta name="twitter:card" content="summary_large_image" />
        <script type="application/ld+json">
          {`
            {
              "@context": "https://schema.org",
              "@type": "Product",
              "name": "${data.name}",
              "image": "https://example.com/photos/1x1/photo.jpg",
              "description": "${data.introduction}",
              "brand": {
                "@type": "Thing",
                "name": "Discord"
              },
              "aggregateRating": {
                "@type": "AggregateRating",
                "ratingValue": "${calculateAverageRating(reviews)}",
                "reviewCount": "${reviews.length}"
              },
              "offers": {
                "@type": "Offer",
                "url": "${data.link}",
                "priceCurrency": "USD",
                "price": "${data.price}",
                "priceValidUntil": "2025-12-31",
                "availability": "https://schema.org/InStock",
                "seller": {
                  "@type": "Organization",
                  "name": "YoYoHoni"
                }
              }
            }
          `}
        </script>
      </Head> */}
      <div className="min-h-[100vh] w-[100%] bg-[#121212] text-white">
        <div className="mx-auto max-w-[800px] px-7 pb-12 pt-[100px]">
          <h1 className="mx-auto  text-2xl sm:text-3xl md:text-4xl">
            Buy {data.months} old or aged {data.type} Accounts
          </h1>
          <div className="my-7 h-[1px] bg-[#fff]"></div>
          <p className="text-[15px] opacity-80 md:text-[1.15rem] mb-3">
            Buy {data.months} months old Reddit Accounts at cheap prices here on
            Discord Arena.
          </p>
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
            <span className="text-center w-full justify-center items-center rounded-md bg-[#F6EBFF] px-3  py-[10px] text-xl  font-bold text-black">
              Out of Stock
            </span>
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
