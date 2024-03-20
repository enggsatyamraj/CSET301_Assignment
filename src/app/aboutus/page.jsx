import Footer from "@/components/Footer";
import Head from "next/head";
import Link from "next/link";
import React from "react";

const page = () => {
  return (
    <>
      <Head>
        <script type="application/ld+json">
          {`
            {
              "@context": "https://schema.org",
              "@type": "Organization",
              "name": "Discord Arena",
              "url": "https://www.discordarena.com/",
              "logo": "URL_TO_YOUR_LOGO_IMAGE",
              "description": "Empowering your digital presence with premium Discord, Instagram, and Twitter accounts. Join Discord Arena for exclusive and high-quality accounts tailored to your needs.",
              "foundingDate": "2022",
              "founders": [
                {
                  "@type": "Person",
                  "name": "Your Name",
                  "url": "YOUR_PERSONAL_URL"
                }
              ],
              "contactPoint": {
                "@type": "ContactPoint",
                "email": "YOUR_EMAIL",
                "contactType": "customer support"
              }
            }
          `}
        </script>

        {/* Meta Tags */}
        <title>About Us - Discord Arena</title>
        <meta
          name="description"
          content="Discover Discord Arena - Your go-to source for premium Discord, Instagram, and Twitter accounts. Learn about our mission, values, and the high-quality services we provide."
        />
        <meta
          name="keywords"
          content="Discord Arena, premium accounts, Discord, Instagram, Twitter, exclusive accounts, high-quality accounts, buy accounts"
        />
        <meta name="author" content="Discord Arena" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta property="og:title" content="About Us - Discord Arena" />
        <meta
          property="og:description"
          content="Discover Discord Arena - Your go-to source for premium Discord, Instagram, and Twitter accounts. Learn about our mission, values, and the high-quality services we provide."
        />
        <meta property="og:type" content="website" />
        <meta
          property="og:url"
          content="https://www.discordarena.com/aboutus"
        />
        <meta property="og:image" content="URL_TO_YOUR_SOCIAL_SHARE_IMAGE" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@discordarena" />
        <meta name="twitter:title" content="About Us - Discord Arena" />
        <meta
          name="twitter:description"
          content="Discover Discord Arena - Your go-to source for premium Discord, Instagram, and Twitter accounts. Learn about our mission, values, and the high-quality services we provide."
        />
        <meta name="twitter:image" content="URL_TO_YOUR_SOCIAL_SHARE_IMAGE" />
      </Head>
      <div className="bg-normal w-[100%] pt-[100px]">
        <div className="max-w-[1280px] mx-auto px-7 sm:px-12 text-white relative min-h-[60vh] w-[100%] ">
          <div className="min-h-[90vh] py-10 relative flex flex-col justify-center z-4">
            <b className="text-[#A5A6F6] font-bold md:text-2xl text-2xl my-3 tracking-widest">
              About Discord Arena
            </b>
            <p className="text-3xl sm:text-3xl mb-6 md:text-4xl  sm:w-[80%] md:w-[70%] lh:w-[60%]">
              Empowering Your Digital Presence with Premium Accounts
            </p>
            <p className="text-[15px] md:w-[70%] sm:w-[80%] w-[90%] lg:w-[50%] opacity-60">
              Welcome to Discord Arena! We specialize in providing premium
              Discord, Instagram, and Twitter accounts tailored to meet your
              unique needs. Since our establishment in 2022, our mission has
              been to empower your digital presence by offering exclusive and
              high-quality accounts that elevate your online experience.
            </p>
            <p className="text-[15px] mt-4 md:w-[70%] sm:w-[80%] w-[90%] lg:w-[50%] opacity-60">
              At Discord Arena, we understand that a vibrant online presence is
              crucial in today&apos;s digital landscape. Our carefully curated
              selection of accounts reflects our commitment to delivering
              excellence. Whether you&apos;re seeking a Discord community that aligns
              with your interests, an Instagram account with a unique aesthetic,
              or a Twitter handle that stands out, Discord Arena is dedicated to
              providing accounts that go beyond expectations. We believe in the
              power of exclusivity, quality, and a seamless user experience, and
              we&apos;re here to help you achieve your online aspirations.
            </p>
            <Link
              href={"/contactus"}
              className="bg-[#A5A6F6] w-fit text-black text-[14px] px-3 mt-5 font-semibold py-2 rounded-[15px]"
            >
              CONTACT US
            </Link>
            <div className="radial_one"></div>
          </div>
        </div>
      </div>

      <div className="bg-[#121212] py-12">
        <div className="max-w-[1280px] mx-auto px-7 sm:px-12 text-white relative min-h-[60vh] w-[100%] ">
          <b className="text-3xl font-bold">Our Services</b>
          <p className="opacity-80 mt-5 text-[15px] w-[98%] md:w-[80%]">
            At Discord Arena, we take pride in offering a curated selection of
            premium accounts in three major categories: Discord, Instagram, and
            Twitter. Each account is meticulously chosen to ensure exclusivity,
            quality, and a seamless experience for our users. Whether you&apos;re a
            gamer looking for the perfect Discord community or a social media
            enthusiast seeking a premium Instagram or Twitter account, Discord
            Arena is your ultimate destination.
          </p>

          <b className="text-3xl font-bold mt-[50px]">
            Why Choose Discord Arena?
          </b>
          <p className="opacity-80 mt-5 text-[15px] w-[98%] md:w-[80%] mb-10">
            - Exclusive Accounts: Access a handpicked selection of exclusive
            Discord, Instagram, and Twitter accounts.
            <br /> - Quality Assurance: Each account undergoes rigorous quality
            checks to ensure authenticity and premium features.
            <br /> - Tailored Experience: Find accounts that suit your
            interests, preferences, and online aspirations.
            <br /> - Customer Support: Our dedicated customer support team is
            ready to assist you at every step.
            <br /> - Secure Transactions: Experience secure and transparent
            transactions for a worry-free purchase.
          </p>

          <Link
            href={"/"}
            className="border-[#A5A6F6] border-[1px] text-[#A5A6F6] px-5 py-2 rounded-[20px] hover:bg-[#A5A6F6] hover:text-black hover:cursor-pointer transition-all duration-300 mt-10 font-semibold w-fit"
          >
            GO TO HOME
          </Link>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default page;
