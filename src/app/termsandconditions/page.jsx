import React from "react";

export const generateMetadata = () => {
  return {
    title: "Terms and Conditions | Discord Arena",
    description:
      "Read the Terms and Conditions of Discord Arena, outlining the rules and regulations for using our website and services. Ensure you understand your rights and responsibilities when engaging with our platform.",
    keywords:
      "Terms and Conditions, Discord Arena, user agreement, website terms, legal terms",
    author: "Discord Arena",
    openGraph: {
      title: "Terms and Conditions | Discord Arena",
      description:
        "Review the Terms and Conditions for using Discord Arena. Know your rights and obligations while accessing our services.",
      type: "website",
      url: "https://www.discordarena.com/terms-and-conditions",
      images: [
        {
          url: "https://www.discordarena.com/assets/terms-og-image.png",
          width: 1200,
          height: 630,
          alt: "Terms and Conditions | Discord Arena",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      site: "@discordarena",
      title: "Terms and Conditions | Discord Arena",
      description:
        "Understand the legal terms and conditions of using Discord Arena's services.",
      image: "https://www.discordarena.com/assets/terms-twitter-image.png",
    },
    structuredData: {
      "@context": "https://schema.org",
      "@type": "WebPage",
      name: "Terms and Conditions | Discord Arena",
      description:
        "Read the Terms and Conditions of Discord Arena, outlining the rules and regulations for using our website and services.",
      url: "https://www.discordarena.com/terms-and-conditions",
      about: {
        "@type": "Organization",
        name: "Discord Arena",
        url: "https://www.discordarena.com",
        logo: "https://www.discordarena.com/assets/logo.png",
        description:
          "Discord Arena provides aged and premium social media accounts for marketers, influencers, and community builders.",
      },
    },
  };
};

const page = () => {
  return (
    <div className="bg-normal overflow-x-hidden text-gray-300">
      <div className="max-w-[800px] mx-auto pt-[120px] pb-[60px] px-[25px]">
        <h1 className="md:text-4xl text-3xl font-bold mb-8 text-center">
          Terms of Service
        </h1>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-5">Welcome</h2>
          <p>
            Thank you for visiting our website. By accessing and using our
            services, you agree to adhere to the following terms. Please review
            these terms thoroughly. If you do not agree with any part of these
            terms, please discontinue using our services immediately.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-5">
            Clarifications and Key Terms
          </h2>
          <h3 className="text-xl font-semibold mb-3">Clarifications </h3>
          <ul className="list-disc ml-6 mb-4">
            <li>
              <strong>Affiliate</strong> refers to any entity that controls, is
              controlled by, or is under common control with another entity.
            </li>
            <li>
              <strong>Region</strong> denotes West Bengal, India.
            </li>
            <li>
              <strong>Organization</strong> (referred to as “the Organization,”
              “We,” “Us,” or “Our”) refers to Discord Arena.
            </li>
            <li>
              <strong>Device</strong> includes any technology used to access our
              services, such as computers, smartphones, or tablets.
            </li>
            <li>
              <strong>Service</strong> pertains to the Website.
            </li>
            <li>
              <strong>Terms of Service</strong> (referred to as “Terms”)
              includes these Terms of Service which represent the entire
              agreement between you and the Organization concerning the use of
              the Service.
            </li>
            <li>
              <strong>External Services</strong> indicates services or content
              from third parties that might be integrated or accessible via our
              Service.
            </li>
            <li>
              <strong>Website</strong> signifies Discord Arena, available at{" "}
              <a href="https://www.discordarena.com" className="text-blue-500">
                https://www.discordarena.com
              </a>
              .
            </li>
            <li>
              <strong>User</strong> refers to the person or entity accessing or
              utilizing the Service.
            </li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-5">Acceptance of Terms</h2>
          <p>
            These Terms of Service govern your use of our Service and form a
            binding agreement between you and the Organization. Your use of the
            Service is contingent upon your acceptance and adherence to these
            Terms.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-5">User Obligations</h2>
          <p>
            You are responsible for providing accurate and current information
            on our site. You must maintain the confidentiality of your account
            details and are liable for all activities conducted under your
            account. If you suspect any unauthorized use of your account, notify
            us promptly.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-5">Prohibited Conduct</h2>
          <p>
            You agree not to engage in illegal activities or any actions
            prohibited by these Terms. This includes using the Service for
            unlawful activities, distributing harmful software, or disrupting
            the normal function of our website.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-5">Ownership of Content</h2>
          <p>
            All content found on Discord Arena, including text, images, and
            logos, is the property of Discord Arena or its licensors and is
            protected under intellectual property laws. Unauthorized use,
            reproduction, or distribution of our content is prohibited without
            our express written consent.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-5">External Links</h2>
          <p>
            Our Service may contain links to other websites or external
            services. We do not control these external sites and are not
            responsible for their content or privacy practices. We recommend
            reviewing the terms and privacy policies of any external sites you
            visit.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-5">
            Termination of Service
          </h2>
          <p>
            We reserve the right to terminate or suspend your access to the
            Service immediately, without notice or liability, for any reason,
            including breaches of these Terms. Upon termination, your access
            rights will cease immediately.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-5">
            Limitation of Liability
          </h2>
          <p>
            Our liability is limited to the amount actually paid by you for the
            Service, or $100 USD if no purchase was made. We are not responsible
            for any incidental, special, indirect, or consequential damages,
            including loss of data or profits.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-5">
            Disclaimer of Warranties
          </h2>
          <p>
            The Service is provided on an “AS IS” and “AS AVAILABLE” basis. We
            do not guarantee that the Service will meet your needs or be free
            from errors. We do not warrant uninterrupted availability or freedom
            from harmful components.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-5">
            Governing Jurisdiction
          </h2>
          <p>
            These Terms will be governed by the laws of West Bengal, India,
            without regard to its conflict of law principles. You may also be
            subject to other applicable local, state, or national laws.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-5">Dispute Resolution</h2>
          <p>
            Any disputes or concerns regarding the Service should be addressed
            to us first to attempt an informal resolution.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-5">Severability</h2>
          <p>
            If any provision of these Terms is found to be unenforceable, it
            will be modified to reflect the original intent as closely as
            possible, and the remaining provisions will remain in effect. A
            waiver of any term does not constitute a waiver of any other term.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-5">Amendments to Terms</h2>
          <p>
            We may update these Terms from time to time. Significant changes
            will be communicated to you at least 30 days before they take
            effect. Continued use of the Service after such changes implies
            acceptance of the new terms. If you do not agree with the updated
            terms, you should cease using the Service.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-5">Contact Information</h2>
          <p>
            For any questions regarding these Terms of Service, please reach out
            to us at{" "}
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
