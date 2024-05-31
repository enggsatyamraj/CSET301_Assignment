import React from "react";
import Image from "next/image";
import order_completed from "../../../public/order-completed.svg";
import form_submit from "../../../public/Group.svg";
import Footer from "@/components/Footer";
import Link from "next/link";
import ContactUsComponent from "@/components/ContactUsComponent";

export const generateMetadata = () => {
  const title = "Contact Us | Get in Touch with Discord Arena";
  const description =
    "Have questions or need assistance? Contact Discord Arena for prompt support and expert advice on all our services and products.";
  const keywords =
    "Contact Discord Arena, support for Discord accounts, get in touch, customer service, contact us, Discord Arena, premium accounts, Discord, Instagram, customer support, inquiries";
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
            Get in Touch with Discord Arena
          </h1>
          <ContactUsComponent />
        </div>
        <Footer />
      </div>
    </div>
  );
};

export default Page;
