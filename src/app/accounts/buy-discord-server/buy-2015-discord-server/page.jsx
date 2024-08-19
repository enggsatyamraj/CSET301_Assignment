import React from "react";
import discordData from "../../../../dataFolder/discordserver.json";
import { FaDiscord } from "react-icons/fa";
import Link from "next/link";
import { Actor } from "next/font/google";
import Head from "next/head";
import Footer from "@/components/Footer";

const actor = Actor({ weight: "400", subsets: ["latin"] });

export const data = {
  id: 1,
  year: 2015,
  link: "https://discord.gg/fullmoon",
  type: "Discord Server",
  name: "Buy 2015 Discord Server",
  image: "2015-discord-server.svg",
  price: "Contact Now",
  discountPercentage: 15,
  smallShowFiveFeatures: {
    feature1: "Large User Base",
    feature2: "Well-Moderated Community",
    feature3: "Exclusive Roles",
    feature4: "Custom Bots",
    feature5: "High Engagement",
  },
  introduction:
    "Unlock the potential of your community with our 2015 Discord Server offering. Designed for growth and success, this package comes equipped with a large user base, well-moderated community, and high engagement. Featuring custom bots and exclusive roles, this server provides the ideal platform for enhancing your community’s experience and ensuring smooth, vibrant interactions.",
  questionAnswerArray: [
    {
      question: "What is the cost of the 2015 Discord server?",
      answer:
        "The 2015 Discord server is priced at $1500 with a special 15% discount. Elevate your server experience with a well-moderated community, large user base, and tailored features.",
    },
    {
      question: "What makes the 2015 Discord server stand out?",
      answer:
        "The 2015 Discord server offers a well-moderated, large user base, custom bots, and exclusive roles. It’s perfect for anyone looking to create a dynamic and engaged community.",
    },
    {
      question: "How does the 2015 Discord server enhance user engagement?",
      answer:
        "With high engagement, exclusive roles, and custom bots, the 2015 Discord server fosters a lively and interactive community, ensuring that users remain active and invested.",
    },
    {
      question: "Is there any discount available for the 2015 Discord server?",
      answer:
        "Yes, you can enjoy a 15% discount on the 2015 Discord server package, making it an excellent value for upgrading your server’s performance and user engagement.",
    },
    {
      question: "How would you describe the 2015 Discord server?",
      answer:
        "The 2015 Discord server is a robust platform featuring a large user base, exclusive roles, and custom bots, providing a seamless experience for growing communities.",
    },
    {
      question: "Why should I choose the 2015 Discord server?",
      answer:
        "Choosing the 2015 Discord server gives you access to a large, well-moderated community with unique features such as custom bots and high engagement. It’s a top-tier solution for expanding your server.",
    },
    {
      question:
        "What security measures are in place when purchasing the 2015 Discord server?",
      answer:
        "Our secure purchasing process ensures your transaction is safe, and we provide reliable support to guarantee your server’s success after purchase.",
    },
  ],
  features: [
    {
      title: "Large User Base",
      description:
        "Kickstart your server with a substantial user base, ensuring a bustling and dynamic community from the outset.",
    },
    {
      title: "Well-Moderated Community",
      description:
        "Enjoy peace of mind with a well-moderated server, creating a safe and respectful environment for all members.",
    },
    {
      title: "Exclusive Roles",
      description:
        "Offer your members exclusive roles that enhance their experience and give them a sense of belonging within the community.",
    },
    {
      title: "Custom Bots",
      description:
        "Automate your server’s operations with custom bots designed to streamline tasks and enhance member interactions.",
    },
    {
      title: "High Engagement",
      description:
        "Encourage participation and activity with high engagement, ensuring your server remains lively and attractive to new users.",
    },
  ],
  faq: [
    {
      question: "How can I purchase the 2015 Discord server?",
      answer:
        "You can easily purchase the 2015 Discord server by contacting us through our website. Our team will guide you through a secure and hassle-free process.",
    },
    {
      question:
        "What payment methods are accepted for the 2015 Discord server?",
      answer:
        "We accept multiple payment methods, including bank transfers, credit cards, and popular digital payment platforms. Visit our site for more details.",
    },
    {
      question: "Is it safe to buy the 2015 Discord server?",
      answer:
        "Yes, purchasing from us is secure. We prioritize safe transactions and provide full customer support to ensure your satisfaction.",
    },
    {
      question:
        "Can I personalize the 2015 Discord server to suit my community?",
      answer:
        "The server comes with powerful features, but we're open to custom requests. Let us know your needs, and we'll do our best to accommodate them.",
    },
    {
      question:
        "What kind of support is available after purchasing the 2015 Discord server?",
      answer:
        "Our dedicated support team is available to assist you after your purchase. Whether you need help setting up or troubleshooting, we're here 24/7.",
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
