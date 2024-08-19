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
  name: "Buy 2016 Aged Discord Servers",
  image: "2016-discord-server.svg",
  price: "Contact Now",
  discountPercentage: 10,
  smallShowFiveFeatures: {
    feature1: "Verified Membership",
    feature2: "High Activity Levels",
    feature3: "Engaged Community",
    feature4: "Custom Emojis",
    feature5: "Dedicated Support Channels",
  },
  introduction:
    

"Welcome to Discord Arena – the perfect place to revitalize your seasoned Discord server. Boost your server's performance and engagement with ease. Our 2016 aged Discord Servers package provides the opportunity to breathe new life into your community. Unlock the benefits of verified membership, increased activity, and a re-energized community. Enjoy custom emojis, exclusive support channels, and much more. Join Discord Arena today and give your server the boost it deserves!",
  questionAnswerArray: [
    {
      question: "What is the price of the Discord server?",
      answer:
        "Secure your Discord server with a 10% discount. Elevate your community with verified credibility, enhanced capabilities, and exclusive perks.",
    },
    {
      question: "What features does the Discord server offer?",
      answer:
        "Experience verified credibility, enhanced server capabilities, and exclusive perks with our Discord server. Engage with a community, and enjoy the benefits of integrated automation bots.",
    },
    {
      question: "What are the benefits of using this Discord server?",
      answer:
        "Our Discord server offers added credibility, advanced capabilities, and exclusive perks. Connect with engaged communities and leverage integrated automation for enhanced functionality.",
    },
    {
      question: "What discount can I get for the Discord server?",
      answer:
        "Avail our Discord server at a 10% discount – a valuable opportunity to enhance your experience with verified credibility, advanced capabilities, and exclusive perks.",
    },
    {
      question: "What is the introduction of this Discord server?",
      answer:
        "Introducing our Discord server – your premium choice for verified credibility, advanced capabilities, and exclusive perks. Join our community and elevate your digital presence today.",
    },
    {
      question: "Why should I purchase this Discord server?",
      answer:
        "Unlock exclusive features, advanced capabilities, and tools for managing and growing your community with our Discord server. Join engaged communities for comprehensive engagement and functionality.",
    },
    {
      question:
        "Are there any risks associated with using this Discord server?",
      answer:
        "While risks exist, we ensure secure transactions. Prioritize security and trust us for reliable social media services, including Discord.",
    },
  ],
  features: [
    {
      title: "Verified Membership",
      description:
        "Enjoy the benefits of a server with verified membership, ensuring a trusted and secure community.",
    },
    {
      title: "High Activity Levels",
      description:
        "Experience high activity levels with members who are regularly online and engaged.",
    },
    {
      title: "Engaged Community",
      description:
        "Join a server with an engaged community that actively participates in discussions and events.",
    },
    {
      title: "Custom Emojis",
      description:
        "Access a wide variety of custom emojis that are unique to the server.",
    },
    {
      title: "Dedicated Support Channels",
      description:
        "Benefit from dedicated support channels to assist with any questions or issues.",
    },
  ],
  faq: [
    {
      question: "How do I purchase the Discord server?",
      answer:
        "You can purchase the Discord server by visiting our official website or contacting our customer support for secure and reliable transactions. We ensure a smooth purchasing experience.",
    },
    {
      question:
        "What payment methods are accepted for buying the Discord server?",
      answer:
        "We accept various payment methods, including credit cards, PayPal, and other secure online options. Please check our website for the complete list of accepted payment methods.",
    },
    {
      question: "Is it safe to buy the Discord server?",
      answer:
        "Yes, it is safe to buy our Discord server. We prioritize security and follow best practices to ensure a positive and secure purchasing experience for our customers.",
    },
    {
      question: "Can I customize the features of the Discord server?",
      answer:
        "While features are predefined, we continually strive to enhance our offerings. Feel free to contact our customer support for specific customization requests, and we'll do our best to accommodate your needs.",
    },
    {
      question:
        "What support is available after purchasing the Discord server?",
      answer:
        "We provide ongoing support after purchase. If you have any questions, issues, or need assistance, please don't hesitate to contact our customer support team, and we'll be delighted to help.",
    },
  ],
};

export const reviews = [
  {
    name: "Naman Singh",
    rating: 5,
    comment:
      "great customer service, fast responses, like a few hours and reallllllllly easy like super easy to log in . love it.",
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
      "Amazing , Helpful in all ways fast as it gets u won’t regret it don’t be nervous I was helped within minutes and got my product under seconds",
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
           Buy {data.year} Aged {data.type} Servers
          </h1>
          <div className="my-7 h-[1px] bg-[#fff]"></div>
          <p className="text-[15px] opacity-80 md:text-[1.15rem] mb-3">
            Buy {data.year} Discord Server at cheap prices here on Discord
            Arena.
          </p>
          <p className="mb-3 mt-5 text-2xl font-semibold">
            Buy {data.year} Discord Server{" "}
          </p>
          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 mt-3">
            <img
              src={`../../discord-accounts/${data.image}`}
              alt={data.name}
              className="mb-4"
            />
            <div>
              <p className="mb-5 text-2xl">
                Buy cheap {data.year} Discord Server{" "}
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
            Features and benefits of discord servers - {data.year}
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
