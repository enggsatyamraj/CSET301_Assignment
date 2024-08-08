import React from "react";
import Head from "next/head";

const WhyChoose = () => {
  const pointsArray = [
    {
      title: "Expertise",
      description:
        "With years of experience in the industry, our team brings unmatched expertise and insights to every project, ensuring top-notch results tailored to your specific goals.",
    },
    {
      title: "Quality Assurance",
      description:
        "We guarantee the highest quality in all our products and services, including aged social media accounts, Discord services, reaction services, and more, providing you with reliable solutions for your digital endeavors.",
    },
    {
      title: "Customer Satisfaction",
      description:
        "Our priority is your satisfaction. We strive to exceed your expectations with personalized attention, prompt support, and solutions that drive real, measurable results for your business.",
    },
    {
      title: "Innovation",
      description:
        "We are committed to staying ahead of the curve. By constantly innovating and adapting to the latest trends and technologies, we ensure that your strategies are always cutting-edge and effective.",
    },
    {
      title: "Transparent Pricing",
      description:
        "We believe in transparent and fair pricing. You can trust us to offer competitive rates without compromising on the quality or integrity of our services.",
    },
    {
      title: "Tailored Solutions",
      description:
        "Every business is unique, and we understand that. We offer personalized solutions that are customized to your specific needs, ensuring that you get exactly what you need to succeed in your digital endeavors. Our tailored solutions encompass SEO optimization, social media engagement, and brand visibility.",
    },
    {
      title: "Keyword Optimization",
      description:
        "Boost your online presence with our keyword optimization strategies. We conduct in-depth research to identify and target the most relevant keywords for your business, ensuring maximum visibility and reach.",
    },
    {
      title: "Data-Driven Approach",
      description:
        "Harness the power of data with our data-driven approach. We analyze user behavior, trends, and metrics to refine and optimize your strategies, delivering data-backed results that propel your business forward.",
    },
  ];

  return (
    <div className="bg-[#121212] text-white py-12">
      {/* <Head>
        <title>Why Choose Discord Arena | Elevate Your Strategy</title>
        <meta
          name="description"
          content="Discover the reasons to choose Discord Arena for top-notch expertise, quality assurance, customer satisfaction, innovation, transparent pricing, tailored solutions, keyword optimization, and a data-driven approach."
        />
        <meta name="author" content="Discord Arena" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "Discord Arena",
              url: "https://www.discordarena.com/",
              logo: "URL_TO_YOUR_LOGO",
              contactPoint: {
                "@type": "ContactPoint",
                telephone: "+1-123-456-7890",
                contactType: "Customer service",
              },
            }),
          }}
        />
      </Head> */}
      <div className="max-w-[1280px] min-h-[60vh] mx-auto px-4 pb-12">
  <div>
    <p className="md:text-4xl text-3xl font-semibold mb-6 w-[98%] sm:w-[80%] md:w-[70%] lg:w-[100%] text-center">
      Elevate Your Strategy with Our Trusted Solutions
    </p>

    <ul className="mt-5 grid grid-cols-1 md:grid-cols-2 gap-4 pt-[20px]">
      {pointsArray.map((item, index) => (
        <li
          key={index}
          className="mb-8 relative border-[1px] p-4 rounded-lg"
        >
          <p className="sm:text-[17px] text-[15px] font-semibold absolute bg-[#dcdcdc] px-2 text-[#121212] rounded-md -top-[15px]">
            {item.title}
          </p>
          <p>{item.description}</p>
        </li>
      ))}
    </ul>
  </div>
</div>

    </div>
  );
};

export default WhyChoose;
