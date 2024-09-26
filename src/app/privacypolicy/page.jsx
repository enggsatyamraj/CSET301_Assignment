import React from "react";

export function generateMetadata() {
  return {
    title: "Privacy Policy | Discord Arena",
    description:
      "Read the privacy policy of Discord Arena to understand how we collect, use, and protect your personal information.",
    keywords: ["Privacy Policy", "Discord Arena", "data protection", "personal information", "data security", "user privacy", "account confidentiality", "information collection", "user consent", "data handling"],
    robots: {
      index: true,
      follow: true,
    },
    openGraph: {
      title: "Privacy Policy | Discord Arena",
      description:
        "Read the privacy policy of Discord Arena to understand how we collect, use, and protect your personal information.",
      url: "https://www.discordarena.com/privacy-policy",
      siteName: "Discord Arena",
      images: [
        {
          url: "https://www.discordarena.com/images/privacy-policy-cover.jpg",
          width: 1200,
          height: 630,
          alt: "Privacy Policy Cover Image",
        },
      ],
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: "Privacy Policy | Discord Arena",
      description:
        "Read the privacy policy of Discord Arena to understand how we collect, use, and protect your personal information.",
      image: "https://www.discordarena.com/images/privacy-policy-cover.jpg",
    },
  };
}

const page = () => {
  return (
    <div className="bg-normal overflow-x-hidden text-[#c9c9c7]">
      <div className="max-w-[800px] mx-auto pt-[150px] pb-[50px] px-[20px]">
        <h1 className="md:text-4xl text-3xl font-bold mb-6 text-center">
          Privacy Policy
        </h1>

        <section className="mb-6">
          <h2 className="text-2xl font-semibold mb-4">Introduction</h2>
          <p>
            Welcome to Discord Arena. This Privacy Policy explains how we
            collect, use, disclose, and safeguard your information when you
            visit our website or use our services. Please read this policy
            carefully. If you do not agree with the terms of this privacy
            policy, please do not access the site.
          </p>
        </section>

        <section className="mb-6">
          <h2 className="text-2xl font-semibold mb-4">
            Information We Collect
          </h2>
          <p>
            We collect information about you in a variety of ways. The types of
            information we may collect include:
          </p>
          <ul className="list-disc ml-6 mb-4">
            <li>
              <strong>Personal Data:</strong> Personally identifiable
              information, such as your name, email address, and contact
              information, that you voluntarily give to us when you register
              with the site or when you choose to participate in various
              activities related to the site.
            </li>
            <li>
              <strong>Derivative Data:</strong> Information our servers
              automatically collect when you access the site, such as your IP
              address, your browser type, your operating system, your access
              times, and the pages you have directly viewed.
            </li>
            <li>
              <strong>Financial Data:</strong> Financial information, such as
              data related to your payment method (e.g., valid credit card
              number, card brand, expiration date) that we may collect when you
              purchase, order, return, exchange, or request information about
              our services from the site.
            </li>
            <li>
              <strong>Data From Social Networks:</strong> User information from
              social networking sites, such as Facebook, Google+, Instagram,
              Twitter, and LinkedIn, including your name, your social network
              username, location, and any other information you choose to make
              available to us through your social media account.
            </li>
            <li>
              <strong>Mobile Device Data:</strong> Device information, such as
              your mobile device ID, model, and manufacturer, and information
              about the location of your device, if you access our site from a
              mobile device.
            </li>
          </ul>
        </section>

        <section className="mb-6">
          <h2 className="text-2xl font-semibold mb-4">
            Use of Your Information
          </h2>
          <p>
            Having accurate information about you permits us to provide you with
            a smooth, efficient, and customized experience. Specifically, we may
            use information collected about you via the site to:
          </p>
          <ul className="list-disc ml-6 mb-4">
            <li>Assist in creating and managing your account.</li>
            <li>
              Deliver targeted advertising, coupons, newsletters, and other
              information regarding promotions and the site to you.
            </li>
            <li>
              Monitor and analyze usage and trends to improve your experience
              with the site.
            </li>
            <li>Notify you of updates to the site.</li>
            <li>Provide you with customer support.</li>
            <li>
              Request feedback and contact you about your use of the site.
            </li>
            <li>Perform other business activities as needed.</li>
          </ul>
        </section>

        <section className="mb-6">
          <h2 className="text-2xl font-semibold mb-4">
            Disclosure of Your Information
          </h2>
          <p>
            We may share information we have collected about you in certain
            situations. Your information may be disclosed as follows:
          </p>
          <ul className="list-disc ml-6 mb-4">
            <li>
              <strong>By Law or to Protect Rights:</strong> If we believe the
              release of information about you is necessary to respond to legal
              process, to investigate or remedy potential violations of our
              policies, or to protect the rights, property, and safety of
              others, we may share your information as permitted or required by
              any applicable law, rule, or regulation.
            </li>
            <li>
              <strong>Business Transfers:</strong> We may share or transfer your
              information in connection with, or during negotiations of, any
              merger, sale of company assets, financing, or acquisition of all
              or a portion of our business to another company.
            </li>
            <li>
              <strong>Third-Party Service Providers:</strong> We may share your
              information with third-party service providers that perform
              services for us or on our behalf.
            </li>
            <li>
              <strong>Affiliates:</strong> We may share your information with
              our affiliates, in which case we will require those affiliates to
              honor this privacy policy.
            </li>
            <li>
              <strong>With Your Consent:</strong> We may disclose your
              information for any other purpose with your consent.
            </li>
          </ul>
        </section>

        <section className="mb-6">
          <h2 className="text-2xl font-semibold mb-4">
            Security of Your Information
          </h2>
          <p>
            We use administrative, technical, and physical security measures to
            help protect your personal information. While we have taken
            reasonable steps to secure the personal information you provide to
            us, please be aware that despite our efforts, no security measures
            are perfect or impenetrable, and no method of data transmission can
            be guaranteed against any interception or other type of misuse.
          </p>
        </section>

        <section className="mb-6">
          <h2 className="text-2xl font-semibold mb-4">Policy for Children</h2>
          <p>
            We do not knowingly solicit information from or market to children
            under the age of 13. If we learn that we have collected personal
            information from a child under age 13 without verification of
            parental consent, we will delete that information as quickly as
            possible.
          </p>
        </section>

        <section className="mb-6">
          <h2 className="text-2xl font-semibold mb-4">
            Changes to This Privacy Policy
          </h2>
          <p>
            We may update this Privacy Policy from time to time in order to
            reflect, for example, changes to our practices or for other
            operational, legal, or regulatory reasons. We will notify you of any
            changes by posting the new Privacy Policy on this page. You are
            advised to review this Privacy Policy periodically for any changes.
          </p>
        </section>

        <section className="mb-6">
          <h2 className="text-2xl font-semibold mb-4">Contact Us</h2>
          <p>
            If you have questions or comments about this Privacy Policy, please
            contact us at{" "}
            <a href="mailto:support@discordarena.com" className="text-blue-500">
              support@discordarena.com
            </a>
            .
          </p>
        </section>
      </div>
    </div>
  );
};

export default page;
