import React from "react";
import Image from "next/image";
import order_completed from "../../../public/order-completed.svg";
import form_submit from "../../../public/Group.svg";
import Footer from "@/components/Footer";
import Link from "next/link";
import ContactUsComponent from "@/components/ContactUsComponent";

export const generateMetadata = () => {
  const title = "Customer Care & Support | Know more about Aged Accounts";
  const description =
    "Contact Discord Arena for inquiries about aged Discord accounts, premium profiles, and customer support. We're here to help.";
  const keywords =
    "Contact Discord Arena, customer support, aged Discord accounts inquiry, verified profiles, premium accounts support, Discord Nitro support";
  const author = "Discord Arena";
  const ogUrl = "https://www.discordarena.com/contact-us";
  const ogImage = "URL_TO_YOUR_SOCIAL_SHARE_IMAGE";

  const jsonLdScript = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Discord Arena",
    url: "https://www.discordarena.com/",
    logo: "URL_TO_YOUR_LOGO_IMAGE",
    description:
      "Empowering your digital presence with premium Discord, Instagram, and other accounts. Join Discord Arena for exclusive and high-quality accounts tailored to your needs.",
    contactPoint: {
      "@type": "ContactPoint",
      email: "contact@discordarena.com",
      contactType: "customer support",
      areaServed: "Worldwide",
      availableLanguage: "English",
    },
  };

  return {
    title: title,
    description: description,
    keywords: keywords,
    authors: [{ name: author }],
    openGraph: {
      type: "website",
      url: ogUrl,
      title: title,
      description: description,
      images: [
        {
          url: ogImage,
          alt: "Discord Arena Contact Us",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: title,
      description: description,
      images: [ogImage],
    },
    other: {
      "application-ld+json": JSON.stringify(jsonLdScript),
    },
  };
};

const Page = () => {
  return (
    <div>
      <noscript>
        <iframe
          src="https://www.googletagmanager.com/ns.html?id=GTM-KM5VZD9Z"
          height="0"
          width="0"
          style={{ display: "none", visibility: "hidden" }}
        ></iframe>
      </noscript>
      <div className="bg-normal min-h-[100vh] w-[100vw] overflow-hidden  relative">
        <div className="radial_one"></div>
        <div className="radial_three"></div>
        <div className="max-w-[1152px] py-8 px-3 w-[90%] min-h-[50vh] mt-[100px] bg-[#121212] rounded-lg bg-opacity-55 backdrop-blur-sm text-white mx-auto mb-[100px]">
          <h1 className="md:text-4xl sm:text-3xl text-2xl font-semibold text-center ">
            Connect with Discord Arena Customer Support: Trusted Aged Discord Accounts & Server boosts
          </h1>
          <p className="text-[15px] md:w-[70%] sm:w-[80%] mt-5 w-[90%] lg:w-[80%] opacity-70 mb-6 mx-auto text-center">
            Looking to connect with Discord Arena&apos;s customer support? <span>Our dedicated team is here to assist you with all your needs, ensuring a seamless experience whether you&apos;re inquiring about our trusted aged Discord accounts or exploring server boosts.</span>
            <span>We pride ourselves on providing reliable and responsive support to help you maximize your Discord experience and achieve your goals.</span>
            <span>From answering your questions to resolving any issues you might face, our customer support is committed to delivering the assistance you need to enhance your server management and engagement.</span>
            Reach out to us today and experience the exceptional service that sets Discord Arena apart.
            <span>Your satisfaction is our priority, and we&apos;re here to help you get the most out of every feature we offer.</span>
          </p>

          <p className="text-[15px] md:w-[70%] sm:w-[80%] w-[90%] lg:w-[80%] opacity-70 mb-6 mx-auto text-center">
            <span>Have questions or need support? Don&apos;t hesitate to contact us for expert assistance.</span>
            Our team is available to guide you through our offerings and ensure that you fully benefit from our services, whether it&apos;s selecting the right account or understanding how our server boosts can enhance your Discord community.
            <span>Experience prompt, professional, and personalized support with Discord Arena and take your Discord experience to the next level.</span>
          </p>
          <ContactUsComponent />
        </div>
      </div>
    </div>
  );
};

export default Page;
