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
    "Get in touch with Discord Arena for inquiries about our premium aged and verified social media accounts through Customer Care support. Have questions or need assistance? Contact Discord Arena for prompt support and expert advice on all our services and products.";
  const keywords =
    "contact Discord Arena, customer support, premium accounts inquiry, aged Discord accounts, verified social media profiles, support team, Contact Discord Arena, support for Discord accounts, get in touch, customer service, contact us, Discord Arena, premium accounts, Discord, Instagram, customer support, inquiries";
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
            <p className="text-[15px] md:w-[70%] sm:w-[80%] w-[90%] lg:w-[80%] opacity-70 mb-6 mx-auto text-center">
         Looking to connect with Discord Arena&apos;s customer support? Our team is here to assist with all your needs, whether it&apos;s about trusted aged Discord accounts or server boosts. Reach out to us for reliable support and get the most out of your Discord experience.
        </p>
          <ContactUsComponent />
        </div>
      </div>
    </div>
  );
};

export default Page;
