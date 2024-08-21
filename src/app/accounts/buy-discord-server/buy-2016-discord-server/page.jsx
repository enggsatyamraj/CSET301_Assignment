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
  year: 2016,
  link: "https://discord.gg/halfmoon",
  type: "Discord Server",
  name: "Buy 2016 Discord Server",
  image: "2016-discord-server.svg",
  price: "Contact Now",
  discountPercentage: 10,
  smallShowFiveFeatures: {
    feature1: "Verified Members",
    feature2: "Active Discussions",
    feature3: "Vibrant Community",
    feature4: "Unique Emojis",
    feature5: "24/7 Support",
  },
  introduction:
    "Buy 2016 Discord Server with verified members and custom emojis. Perfect for enhancing community engagement and server activity with unique features.",
  questionAnswerArray: [
    {
      question: "What is the price of the 2016 Discord server?",
      answer:
        "Our 2016 Discord server is available for $1200, with an additional 10% discount. Upgrade your community effortlessly with verified members, vibrant interactions, and enhanced server features.",
    },
    {
      question: "What features are included in the 2016 Discord server?",
      answer:
        "The 2016 Discord server offers verified members, active discussions, custom emojis, and robust support channels, along with advanced server features to enhance your community.",
    },
    {
      question: "How does the 2016 Discord server benefit my community?",
      answer:
        "By acquiring the 2016 Discord server, you boost your server’s credibility with verified members, foster active participation, and gain access to unique features that enrich your community experience.",
    },
    {
      question: "Is there a discount available for the 2016 Discord server?",
      answer:
        "Yes, enjoy a 10% discount on our 2016 Discord server package. This offer is designed to help you maximize your investment while upgrading your server’s performance.",
    },
    {
      question: "How would you describe this 2016 Discord server?",
      answer:
        "The 2016 Discord server is a comprehensive solution for boosting community engagement, credibility, and server functionality. It's the ideal package for taking your server to new heights.",
    },
    {
      question: "Why should I consider buying this 2016 Discord server?",
      answer:
        "Investing in our 2016 Discord server allows you to instantly elevate your community with verified credibility, unique features, and a dedicated support system that ensures smooth server operations.",
    },
    {
      question: "Are there any risks in purchasing the 2016 Discord server?",
      answer:
        "We prioritize secure transactions and guarantee customer satisfaction, making the purchase of our 2016 Discord server safe and reliable for your community.",
    },
  ],
  features: [
    {
      title: "Verified Members",
      description:
        "Add credibility to your server with a roster of verified members, ensuring a trusted and high-quality community.",
    },
    {
      title: "Active Discussions",
      description:
        "Engage in lively and ongoing discussions with active community members, keeping your server vibrant and thriving.",
    },
    {
      title: "Vibrant Community",
      description:
        "Be part of a vibrant community that shares interests and participates in events, driving continuous interaction.",
    },
    {
      title: "Unique Emojis",
      description:
        "Express yourself with a variety of custom-made emojis exclusive to your server, offering a personalized touch.",
    },
    {
      title: "24/7 Support",
      description:
        "Receive round-the-clock support to ensure your server runs smoothly and any issues are resolved promptly.",
    },
  ],
  faq: [
    {
      question: "How can I purchase the 2016 Discord server?",
      answer:
        "Purchasing is simple – visit our official website or contact customer support to finalize your secure transaction. We're here to assist every step of the way.",
    },
    {
      question:
        "What payment options do you offer for the 2016 Discord server?",
      answer:
        "We accept a wide range of payment methods, including credit cards, PayPal, and secure online payment options. For a full list, please refer to our website.",
    },
    {
      question: "Is it safe to buy the 2016 Discord server?",
      answer:
        "Yes, purchasing from us is secure. We follow industry best practices to ensure your transaction is safe and your server purchase is protected.",
    },
    {
      question: "Can I customize the 2016 Discord server to fit my needs?",
      answer:
        "While the server comes with predefined features, we're always open to hearing your customization requests. Contact our support team, and we'll do our best to tailor the experience to your needs.",
    },
    {
      question:
        "What support will I receive after purchasing the 2016 Discord server?",
      answer:
        "We offer continuous support post-purchase. If you encounter any issues or need assistance, our dedicated team is available 24/7 to help you.",
    },
  ],
};

export const reviews = [
  {
    name: "Naman Singh",
    rating: 5,
    comment:
      "The service team is fantastic, responding in record time—often within hours. The login is unbelievably easy and intuitive. I'm really satisfied!",
  },
  {
    name: "Lěi Hin",
    rating: 4,
    comment: "SUPER FAST DELIVERY man i highly recommend",
  },
  {
    name: "William knepper",
    rating: 5,
    comment:
      "Top-notch service, both efficient and helpful. They responded within minutes, and my product was in hand in seconds. No need to hesitate!",
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
    title: `Buy ${data.year} Aged Discord Server | Old & Premium Servers`,
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
        <title>Buy {data.year} Discord Server | Discord Arena</title>
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
            Buy {data.year} Aged & Old {data.type}
          </h1>
          <div className="my-7 h-[1px] bg-[#fff]"></div>
          <p className="text-[15px] opacity-80 md:text-[1.15rem] mb-3">
            Buy Premium {data.year} Discord Server at cheap prices here on
            Discord Arena.
          </p>
          <p className="mb-3 mt-5 text-2xl font-semibold">
            Buy Premium & old {data.year} Discord Server{" "}
          </p>
          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 mt-3">
            <img
              src={`../../discord-accounts/${data.image}`}
              alt={data.name}
              className="mb-4"
            />
            <div>
              <p className="mb-5 text-2xl">
                Buy {data.year} old Discord Servers at cheap prices{" "}
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
            {/* <span className="flex flex-1 items-center justify-center rounded-md bg-[#00C89D] px-3 py-[10px]  text-xl font-bold  text-black ">
              ${data.price}
            </span>
            <Link
              href={data.link}
              target="_blank"
              className="flex-[3] text-center justify-center items-center rounded-md bg-[#F6EBFF] px-3  py-[10px] text-xl  font-bold text-black"
            >
              Purchase
            </Link> */}
            <Link
              target="_blank"
              href={data.link}
              className="rounded-md bg-[#00C89D] text-white w-[100%] text-center px-4 py-[10px] text-xl font-semibold "
            >
              {data.price}
            </Link>
          </div>
          {/* <p className="mb-3 mt-7 text-2xl">
            Cheap {data.year} {data.type} accounts
          </p>
          <p className="text-[16px] opacity-85 mb-4">{data.introduction}</p> */}

          <p className="mb-3 mt-5 text-2xl font-semibold">
            Features and benefits of aged discord servers - {data.year}
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
            FAQs related to aged Discord Servers - {data.year}
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
