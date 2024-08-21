import Head from "next/head";
import React from "react";
import { Actor } from "next/font/google";
import Footer from "@/components/Footer";
import PageWrapper from "../PageWrapper";
import discordData from "../../dataFolder/discord.json";
import instagramData from "../../dataFolder/instagram.json";

const actor = Actor({ weight: "400", subsets: ["latin"] });

export const faqItems = [
  {
    question: "How quickly will I receive my order after payment?",
    answer: "The average time for receiving an order is 10-15 minutes.",
  },
  {
    question: "What if I have a problem with my order?",
    answer:
      "If you have any problems with your order, please contact our support team.",
  },
  {
    question: "What payment methods do you accept?",
    answer: "We accept all major credit and debit cards, as well as PayPal.",
  },
  {
    question: "What if I want to cancel my order?",
    answer:
      "If you want to cancel your order, please contact our support team as soon as possible.",
  },
  {
    question: "Do you offer refunds?",
    answer:
      "We offer refunds on a case-by-case basis. Please contact our support team for more information.",
  },
  {
    question:
      "I need an Instagram / Twitter / Discord account, with / without photo, with real / fake subscribers, 2010/2015, Russia / Germany / US / India . Do you have such?",
    answer:
      "Yes, we have a wide range of accounts available for purchase. Please vsit our account section for more information.",
  },
  {
    question: "What is the difference between fresher and aged accounts ?",
    answer:
      "The fresher the account, the more it is sensible to actions in the first days of use, and more likely to ask for phone verification at login or after a few actions. The more aged, the more it can endure. However, while aged accounts can easily accept login from other locations and resist at more daily actions, it is safer to warm up any account regardless of age, like proceeding with only a few actions daily, for a few days. If fresh accounts are warmed up properly, in time they can be as much as effective as aged accounts.",
  },
  {
    question: "Is buying Discord account legal?",
    answer:
      "Yes, buying Discord accounts is legal. However, it is important to ensure that you are purchasing accounts from a reputable source(Which is Discord Arena for Sure) to avoid any potential issues.",
  },
  {
    question:
      "What are aged Discord accounts, and why should I consider buying them?",
    answer:
      "Aged Discord accounts have a history of activity and engagement. Purchasing them allows you to join established communities, access exclusive features, and enhance your online presence.",
  },
  {
    question: "How do I know if a Discord account is verified?",
    answer:
      'Verified Discord accounts are linked to valid phone numbers. Look for the "verified" badge next to a user\'s profile. We offer phone-verified accounts for added credibility.',
  },
  {
    question: "Can I trust the accounts for sale on Discord Arena?",
    answer:
      "Absolutely! Our verified and aged Discord accounts undergo thorough checks. We prioritize authenticity and reliability, ensuring a positive experience for buyers.",
  },
  {
    question: "What's the process for buying a Discord account?",
    answer:
      "It's simple! Explore our range, choose the account that suits your needs, and complete the purchase. Hassle-free and secure.",
  },
  {
    question: "Are there premium features available with certain accounts?",
    answer:
      "Yes! Premium Discord accounts offer additional perks, such as exclusive servers, custom emojis, and enhanced security.",
  },
  {
    question: "Can I find niche-specific accounts on Discord Arena?",
    answer:
      "Absolutely! Whether you're into gaming, art, or music, we curate accounts to match various interests.",
  },
  {
    question:
      "Is customer support available if I have questions after purchasing an account?",
    answer:
      "Yes! Reach out to our support team for any queries or assistance. We're here to help.",
  },
  {
    question: "What services do you offer for Discord accounts?",
    answer:
      "We provide various services for Discord, including account sales, server boosts, and invite purchases. Explore our offerings for more details.",
  },
  {
    question: "How can I contact customer support for my Discord account?",
    answer:
      "Our dedicated customer support team can be contacted via email at https://www.discordarena.com/ . Feel free to reach out with any Discord-related queries or concerns.",
  },
  {
    question: "Is there a refund policy for purchased Discord accounts?",
    answer:
      "Yes, we have a 30-day refund policy for Discord accounts. Please refer to our refund policy page for detailed information on the process and conditions.",
  },
  {
    question: "How do I reset the password for my Discord account?",
    answer:
      'To reset your Discord account password, go to the login page and click on the "Forgot Password" link. Follow the provided instructions to reset your password securely.',
  },
  {
    question:
      "Do you offer international shipping for Discord tokens and accounts?",
    answer:
      "Certainly! We provide international delivery for all digital items, including Discord tokens and accounts. The delivery is electronic and instant.",
  },
  {
    question:
      "What payment methods are accepted for buying Discord accounts and tokens?",
    answer:
      "We accept a variety of payment methods, including credit cards, PayPal, and bank transfers, for purchasing Discord accounts, tokens, and other related services.",
  },
  {
    question: "How can I track my order for Discord server boosts or invites?",
    answer:
      "Upon processing your order, you`ll receive a confirmation email with tracking information for Discord server boosts or invites. Monitor your order through the provided details.",
  },
  {
    question: "Do you have a mobile app for managing Discord accounts?",
    answer:
      "Yes, we offer a mobile app for both iOS and Android platforms. You can conveniently manage your Discord accounts on-the-go by downloading the app from the respective app stores.",
  },
  {
    question:
      "Are your Discord accounts and services environmentally friendly?",
    answer:
      "Absolutely! We are committed to environmental sustainability. Although our services are digital, we implement eco-friendly practices to minimize our environmental impact.",
  },
  {
    question: "Can I request a custom order for Discord-related services?",
    answer:
      "Certainly! We welcome custom orders and tailored services. Get in touch with our customer support team to discuss your specific requirements for Discord-related services.",
  },
  {
    question: "What is the process for buying Discord server boosts?",
    answer:
      "To purchase Discord server boosts, navigate to our Boosting section, select the desired boost package, and proceed to checkout. Follow the instructions to complete the transaction.",
  },
  {
    question:
      "How can I verify the authenticity of the Discord accounts you sell?",
    answer:
      "We guarantee the authenticity of our Discord accounts. For added assurance, we provide verification processes, ensuring you receive genuine and reliable Discord accounts.",
  },
  {
    question: "Are the Discord accounts you sell aged or newly created?",
    answer:
      "We offer a mix of aged and newly created Discord accounts. You can choose the type of account that best suits your preferences and needs.",
  },
  {
    question:
      "Can I purchase phone-verified Discord accounts from your platform?",
    answer:
      "Yes, we provide phone-verified Discord accounts for enhanced security. These accounts come with an added layer of verification for your peace of mind.",
  },
  {
    question: "What is the advantage of purchasing an aged Discord account?",
    answer:
      "Aged Discord accounts often come with established histories, making them ideal for certain purposes. They may have server memberships and activity, providing a head start for users.",
  },
  {
    question:
      "How secure is the process of buying Discord accounts from your platform?",
    answer:
      "We prioritize the security of our users. Our platform employs industry-standard security measures to safeguard your personal information and ensure a secure purchasing process.",
  },
  {
    question: "Can I buy Discord tokens for specific functionalities?",
    answer:
      "Certainly! Explore our token offerings to find options that suit your specific needs and functionalities within the Discord platform.",
  },
  {
    question:
      "Are your Discord tokens and accounts compliant with Discord’s terms of service?",
    answer:
      "Yes, all our Discord tokens and accounts adhere to Discord’s terms of service. We prioritize compliance to provide a reliable and trustworthy service.",
  },
  {
    question: "Can I purchase Discord server invites for specific communities?",
    answer:
      "Yes, we offer Discord server invites tailored to specific communities and interests. Explore our selection to find the right server invites for your preferences.",
  },
  {
    question:
      "How can I ensure the confidentiality of my personal information when making a purchase?",
    answer:
      "We take user privacy seriously. Our platform employs encryption and privacy measures to secure your personal information during the purchasing process.",
  },
  {
    question: "How do I purchase Discord server boosts using Discord Nitro?",
    answer:
      "To purchase Discord server boosts using Discord Nitro, visit the Nitro section in your Discord settings, select the desired boost level, and proceed with the purchase.",
  },
  {
    question: "Can I buy Discord invites to grow my server community?",
    answer:
      "Certainly! Explore our Discord invite offerings to find options that can help boost your server community and increase engagement.",
  },
  {
    question: "Is it possible to buy  followers for social media growth?",
    answer:
      "Yes, we offer services for purchasing  followers, providing a convenient way to enhance your social media presence.",
  },
  {
    question: "How can I boost my  account through purchased followers?",
    answer:
      "Purchasing  followers can help boost your account's visibility and reach a wider audience, contributing to overall social media growth.",
  },
  {
    question: "Can I buy aged  accounts for specific purposes?",
    answer:
      "Yes, we offer aged  accounts that may have established histories, making them suitable for specific purposes and strategies.",
  },
  {
    question: "How do I create a  account for social media engagement?",
    answer:
      "To create a  account, visit the  sign-up page, enter the required information, and follow the on-screen instructions to set up your account.",
  },
  {
    question:
      "What are the benefits of selling Instagram accounts on your platform?",
    answer:
      "Selling Instagram accounts on our platform provides an opportunity to monetize your account and connect with potential buyers interested in established profiles.",
  },
  {
    question:
      "How can I purchase verified Instagram accounts for authenticity?",
    answer:
      "Explore our offerings to purchase verified Instagram accounts, providing an added layer of authenticity and trust for your social media endeavors.",
  },
  {
    question: "Can I buy Instagram accounts at affordable prices?",
    answer:
      "Yes, we offer a range of Instagram accounts for sale at various price points, allowing you to find an option that fits your budget and requirements.",
  },
  {
    question:
      "How can I find social media accounts linked to a specific phone number?",
    answer:
      "While we do not provide this service, you can use online tools to search for social media accounts linked to a phone number independently.",
  },
  {
    question:
      "What is the process for searching for social media accounts by email?",
    answer:
      "To search for social media accounts by email, you can use online search engines and social media platforms, entering the email address in the search bar.",
  },
  {
    question:
      "Can I find social media accounts by phone number through your platform?",
    answer:
      "No, our platform does not offer a service for searching social media accounts by phone number. This is typically done through external tools.",
  },
  {
    question: "How do I create a new  account for online engagement?",
    answer:
      "To create a new  account, visit the  sign-up page, provide the necessary information, and follow the on-screen instructions to set up your account.",
  },
  {
    question: "What is the process for finding social media accounts by email?",
    answer:
      "While we do not offer this service, you can use online tools and search engines to look for social media accounts linked to a specific email address.",
  },
  {
    question: "Can I purchase Instagram accounts for selling purposes?",
    answer:
      "Explore our platform to find Instagram accounts available for purchase. Choose accounts that align with your selling goals and preferences.",
  },
  {
    question:
      "Is it possible to buy  accounts for specific niches or industries?",
    answer:
      "Yes, we offer  accounts for sale that cater to various niches and industries. Browse our selection to find accounts suited to your interests.",
  },
  {
    question: "How can I create a new Discord account for online interactions?",
    answer:
      "To create a new Discord account, visit the Discord sign-up page, enter the required details, and follow the prompts to set up your account for online interactions.",
  },
  {
    question:
      "Can I use two Discord accounts on the same device simultaneously?",
    answer:
      "Yes, you can use two Discord accounts on the same device simultaneously by logging into each account through separate browser profiles or using a third-party application.",
  },
  {
    question: "How do I manage multiple Discord accounts efficiently?",
    answer:
      "To manage multiple Discord accounts efficiently, consider using a third-party application that supports multiple account logins or creating separate browser profiles for each account.",
  },
  {
    question:
      "Is it possible to log into two Discord accounts on a mobile device at once?",
    answer:
      "While Discord does not natively support this feature, you can use third-party applications or browser profiles to log into two Discord accounts on a mobile device.",
  },
  {
    question:
      "How do I find all social media accounts linked to a specific email address?",
    answer:
      "While we do not provide this service, you can use online tools and search engines to look for social media accounts linked to a specific email address.",
  },
  {
    question: "Can I purchase Instagram accounts for business promotion?",
    answer:
      "Absolutely! Explore our platform to find Instagram accounts suitable for business promotion. Choose accounts that align with your promotional goals and preferences.",
  },
  {
    question: "Is it possible to buy Snapchat accounts for personal use?",
    answer:
      "Yes, we offer Snapchat accounts for sale, providing a convenient way for personal use. Explore our selection to find accounts that match your preferences.",
  },
  {
    question: "How can I increase engagement on my Discord server?",
    answer:
      "To increase engagement on your Discord server, consider hosting events, creating interactive channels, and promoting community participation. Explore our boost options for additional features.",
  },
  {
    question: "Can I purchase YouTube subscribers to grow my channel?",
    answer:
      "Yes, we provide services for purchasing YouTube subscribers, offering a way to boost your channel's subscriber count and enhance visibility.",
  },
  {
    question:
      "What steps should I take if I encounter issues with a purchased account?",
    answer:
      "If you encounter any issues with a purchased account, contact our customer support immediately. We are dedicated to resolving concerns and ensuring a positive experience for our users.",
  },
  {
    question:
      "Do you offer discounts for bulk purchases of accounts or services?",
    answer:
      "Certainly! Contact our sales team to inquire about discounts for bulk purchases of accounts or services. We may have special offers tailored to your needs.",
  },
  {
    question: "How can I protect my Discord account from unauthorized access?",
    answer:
      "To protect your Discord account, enable two-factor authentication (2FA), use a strong and unique password, and be cautious of phishing attempts. Our customer support can assist with security-related queries.",
  },
  {
    question:
      "What are the benefits of purchasing server boosts for my Discord community?",
    answer:
      "Purchasing server boosts can unlock various benefits, including enhanced audio quality, increased upload limits, and improved video quality. Explore our boosting section for detailed information on available features.",
  },
];

export const additionalFaqItems = [
  {
    question: "How can I buy Instagram accounts?",
    answer:
      "You can explore online platforms that specialize in selling Instagram accounts or contact reputable sellers directly for a secure purchase.",
  },
  {
    question: "Are there any websites to buy verified Instagram accounts?",
    answer:
      "Yes, there are websites that offer verified Instagram accounts for sale. Make sure to verify the legitimacy of the platform before making a purchase.",
  },
  {
    question: "What is the process to create a new Instagram account?",
    answer:
      "To create a new Instagram account, download the app, sign up with a valid email or phone number, set a username, and complete the profile information.",
  },
  {
    question: "Can I link my Instagram account to a Facebook page?",
    answer:
      "Yes, you can link your Instagram account to a Facebook page. Navigate to your Instagram settings, choose 'Account,' then 'Linked Accounts' to connect your Facebook page.",
  },
  {
    question:
      "Where can I find Instagram accounts for sale with real followers?",
    answer:
      "Look for reputable sellers or online platforms specializing in selling Instagram accounts. Ensure they provide transparency on follower authenticity before making a purchase.",
  },
  {
    question: "How do I find the email linked to an Instagram account?",
    answer:
      "Unfortunately, Instagram does not disclose email information. You may try reaching out through other social media platforms or known contacts if available.",
  },
  {
    question: "What are the steps to create multiple Instagram accounts?",
    answer:
      "Open the Instagram app, go to 'Settings,' scroll down and select 'Add Account.' Enter the required details to create and switch between multiple accounts.",
  },
  {
    question: "Is it possible to use Instagram without an account?",
    answer:
      "No, Instagram requires users to create an account to access its features. There is no option to use Instagram without signing up.",
  },
  {
    question: "Where can I sell my Instagram account?",
    answer:
      "You can sell your Instagram account on specialized platforms for buying and selling social media accounts. Ensure compliance with terms and conditions.",
  },
  {
    question: "How can I find Instagram accounts to follow for followers?",
    answer:
      "Explore popular hashtags, engage with relevant communities, and follow accounts in your niche. This can help attract followers interested in your content.",
  },
  {
    question: "What's the best way to start an Instagram account from scratch?",
    answer:
      "Define your niche, create engaging content, use relevant hashtags, interact with your audience, and collaborate with other users to grow your Instagram account organically.",
  },
  {
    question: "Can I find old Instagram accounts and their followers?",
    answer:
      "Instagram does not provide direct access to information about old accounts and their followers. You may try contacting Instagram support for assistance.",
  },
  {
    question: "How can I link multiple Instagram accounts on one phone?",
    answer:
      "Go to 'Settings' on your Instagram profile, select 'Add Account,' and enter the login details of the additional account. You can switch between accounts easily.",
  },
  {
    question: "What are the best Instagram accounts to follow for inspiration?",
    answer:
      "Explore accounts in your areas of interest, such as travel, art, or technology. Look for influencers, creators, and brands that align with your preferences.",
  },
  {
    question:
      "Is it possible to find out who owns an Instagram account by email?",
    answer:
      "Instagram does not disclose ownership information based on email. Consider reaching out through other channels if you need to contact the account owner.",
  },
  {
    question: "Can I create an Instagram account without Facebook?",
    answer:
      "Yes, you can create an Instagram account without using Facebook. Simply choose the 'Sign up with email or phone number' option during the registration process.",
  },
  {
    question: "Where can I buy aged Instagram accounts with real followers?",
    answer:
      "Explore reputable online platforms that specialize in selling aged Instagram accounts. Look for reviews and testimonials to ensure authenticity.",
  },
  {
    question: "How do I get information about an Instagram account for free?",
    answer:
      "Instagram does not provide personal information about accounts for free. You may contact the account owner directly or use other means of communication.",
  },
  {
    question:
      "Is it possible to create multiple Instagram accounts with the same email?",
    answer:
      "No, each Instagram account requires a unique email address. You cannot use the same email to create multiple accounts on the platform.",
  },
  {
    question: "What is the price range for buying Instagram accounts?",
    answer:
      "The price of Instagram accounts varies based on factors such as follower count, engagement, and niche. Prices can range from a few dollars to several hundred or even more.",
  },
  {
    question: "How can I verify my Instagram account for sale?",
    answer:
      "Instagram verification is typically handled by the platform itself. Selling a verified account involves ensuring legal compliance and transparent communication with potential buyers.",
  },
  {
    question: "Are there any websites to buy Instagram accounts in bulk?",
    answer:
      "Yes, there are websites where you can buy Instagram accounts in bulk. Make sure to research and choose reputable platforms to avoid scams.",
  },
  {
    question: "Can I sell Instagram followers on my account?",
    answer:
      "Selling Instagram followers is against Instagram's terms of service and can result in account suspension. Focus on organic growth and engagement for long-term success.",
  },
  {
    question: "How do I find the age of an Instagram account?",
    answer:
      "Instagram does not provide information about an account's creation date. You may try reaching out to the account owner or explore third-party tools for estimation.",
  },
  {
    question:
      "What is the process to create a new Instagram page from Facebook?",
    answer:
      "Connect your Facebook and Instagram accounts in the Facebook settings. After linking, you can easily create a new Instagram page using your Facebook profile.",
  },
  {
    question: "Where can I find websites to sell Instagram accounts?",
    answer:
      "There are online marketplaces dedicated to buying and selling social media accounts. Ensure you comply with their guidelines and policies when selling your Instagram account.",
  },
  {
    question:
      "How can I get information from an Instagram account without an account?",
    answer:
      "Instagram requires users to have an account to access detailed information. Without an account, you can only view limited public information available on profiles.",
  },
  {
    question: "What are the best websites to buy Instagram usernames?",
    answer:
      "Look for reputable platforms that facilitate the buying and selling of Instagram usernames. Ensure secure transactions and check the terms of use before making a purchase.",
  },
  {
    question: "Is it possible to buy an Instagram account with PayPal?",
    answer:
      "Yes, some sellers accept PayPal as a payment method for Instagram account transactions. Confirm payment details and terms with the seller before making a purchase.",
  },
];

export const allData = [
  ...faqItems,
  ...additionalFaqItems,
  ...discordData.reduce((acc, cur) => [...acc, ...cur.questionAnswerArray], []),
  ...instagramData.reduce(
    (acc, cur) => [...acc, ...cur.questionAnswerArray],
    []
  ),
];

export const generateMetadata = () => {
  const jsonLdMarkup = `
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "mainEntity": [
        ${allData.map(
          (item, index) => `{
          "@type": "Question",
          "name": "${item.question}",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "${item.answer}"
          }
        }${index < allData.length - 1 ? "," : ""}`
        )}
      ]
    }
  `;

  return {
    title: "Frequently Asked Questions | Buying Aged Discord Accounts",
    description:
      "Find answers to common questions about purchasing aged social media accounts from Discord Arena. Learn about aged Discord accounts, server boosts, and more.",
    keywords:
      "Discord Arena FAQs, aged accounts questions, premium social media profiles, buying guide, customer support",
    openGraph: {
      title:
        "Discord Arena - FAQ Page || Discord Accounts || Instgram Accounts",
      description:
        "Explore our FAQ page to find answers to common questions about our services.",
      type: "website",
      url: "https://www.discordarena.com/faq",
      images: [
        {
          url: "https://www.discordarena.com/og-image.jpg",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title:
        "Discord Arena - FAQ Page || Discord Accounts || Instgram Accounts",
      description:
        "Explore our FAQ page to find answers to common questions about our services.",
      images: ["https://www.discordarena.com/-image.jpg"],
    },
    keywords:
      "Discord account FAQs, buying Discord accounts, server boost questions, Discord Arena support, discord, accounts, faq, frequently asked questions",
    robots: "index, follow",
    viewport: "width=device-width, initial-scale=1.0",
    authors: [
      {
        name: "Discord Arena",
      },
    ],
    distribution: "web",
    revisitAfter: { duration: 7, unit: "days" },
    rating: "general",
    language: "en-us",
    classification: "Business",
    copyright: "2022",
    themeColor: "#000000",
    msapplicationTileColor: "#000000",
    msapplicationTileImage: "/ms-icon-144x144.png",
    googleSiteVerification: "verification_token",
    applicationName: "Discord Arena",
    appleWebAppCapable: true,
    appleWebAppTitle: "Discord Arena",
    appleWebAppStatusBarStyle: "black",
    mobileWebAppCapable: true,
    msapplicationNavbuttonColor: "#000000",
    msapplicationStartUrl: "/",
    referrer: "no-referrer-when-downgrade",
    formatDetection: {
      telephone: false,
    },
    jsonLd: jsonLdMarkup,
  };
};

export default function page() {
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

      <div className="bg-normal w-[100%] min-h-[100vh] text-white pt-[100px] pb-10 px-7 sm:px-12 relative">
        <PageWrapper>
          <div className="radial_one"></div>
          <div className="max-w-[1280px] mx-auto">
            <h1 className="text-4xl font-bold text-center mb-8">
              Frequently Asked Questions About Our Services : Buy Discord Now
            </h1>
            <div className="">
              {allData.map((item, index) => {
                return (
                  <div
                    key={index}
                    className="mb-8 opacity-90 mx-auto lg:max-w-[80%]"
                  >
                    <p className="mb-1 sm:text-[21px] text-[19px] lg:text-[23px]">
                      {item.question}
                    </p>
                    <p className="sm:text-[16px] text-[14px] opacity-70 lg:text-[18px]">
                      -{">"} {item.answer}
                    </p>
                    <div className="h-[0.5px] mt-3 bg-gradient-to-r from-white to-black"></div>
                  </div>
                );
              })}
            </div>
          </div>
        </PageWrapper>
      </div>
    </div>
  );
}
