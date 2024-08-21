import React from "react";

export const generateMetadata = () => {
  return {
    title: "Disclaimer | Discord Arena",
    description:
      "Read the disclaimer for Discord Arena, which outlines the limitations of liability and the nature of the information provided on the site.",
    keywords:
      "disclaimer, terms, conditions, liability, information, legal, Discord Arena",
    robots: {
      index: true,
      follow: true,
    },
    openGraph: {
      title: "Disclaimer | Discord Arena",
      description:
        "Read the disclaimer for Discord Arena, which outlines the limitations of liability and the nature of the information provided on the site.",
      url: "https://www.discordarena.com/disclaimer",
      site_name: "Discord Arena",
      images: [
        {
          url: "https://www.discordarena.com/images/disclaimer-thumbnail.jpg",
          width: 1200,
          height: 630,
          alt: "Discord Arena Disclaimer",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: "Disclaimer | Discord Arena",
      description:
        "Read the disclaimer for Discord Arena, which outlines the limitations of liability and the nature of the information provided on the site.",
      image: "https://www.discordarena.com/images/disclaimer-thumbnail.jpg",
    },
  };
};

const page = () => {
  return (
    <div className="bg-normal overflow-x-hidden text-[#c9c9c7]">
      <div className="max-w-[800px] mx-auto pt-[150px] pb-[50px] px-[20px]">
        <h1 className="md:text-4xl text-3xl font-bold mb-6 text-center">
          Disclaimer
        </h1>

        <section className="mb-6">
          <h2 className="text-2xl font-semibold mb-4">General Information</h2>
          <p>
            The information provided by Discord Arena is for general
            informational purposes only. All information on the Site is provided
            in good faith, however we make no representation or warranty of any
            kind, express or implied, regarding the accuracy, adequacy,
            validity, reliability, availability, or completeness of any
            information on the Site.
          </p>
        </section>

        <section className="mb-6">
          <h2 className="text-2xl font-semibold mb-4">
            No Professional Advice
          </h2>
          <p>
            The Site may contain information about various topics, including but
            not limited to financial, legal, or medical topics. However, such
            information is not intended to be and should not be construed as
            professional advice. Always seek the advice of your professional
            with any questions you may have regarding a particular subject.
          </p>
        </section>

        <section className="mb-6">
          <h2 className="text-2xl font-semibold mb-4">
            External Links Disclaimer
          </h2>
          <p>
            The Site may contain (or you may be sent through the Site) links to
            other websites or content belonging to or originating from third
            parties. External links are provided for your convenience, and we do
            not endorse or make any representations about them. We are not
            responsible for the accuracy, legality, or content of any external
            sites or resources.
          </p>
        </section>

        <section className="mb-6">
          <h2 className="text-2xl font-semibold mb-4">
            Limitations of Liability
          </h2>
          <p>
            To the fullest extent permitted by applicable law, Discord Arena
            shall not be liable for any indirect, incidental, special,
            consequential, or punitive damages, including loss of profits, data,
            or other intangible losses, resulting from your use or inability to
            use the Site or any other content provided on the Site.
          </p>
        </section>

        <section className="mb-6">
          <h2 className="text-2xl font-semibold mb-4">No Warranties</h2>
          <p>
            The Site is provided on an &quot;as is&quot; and &quot;as
            available&quot; basis without any warranties of any kind, whether
            express or implied. We do not warrant that the Site will be
            uninterrupted, error-free, or free of harmful components. Your use
            of the Site is at your own risk.
          </p>
        </section>

        <section className="mb-6">
          <h2 className="text-2xl font-semibold mb-4">Indemnification</h2>
          <p>
            You agree to indemnify, defend, and hold harmless Discord Arena and
            its affiliates, officers, directors, employees, and agents from and
            against any claims, liabilities, damages, losses, or expenses,
            including reasonable attorneys&apos; fees, arising out of or related
            to your use of the Site or any violation of these disclaimers.
          </p>
        </section>

        <section className="mb-6">
          <h2 className="text-2xl font-semibold mb-4">
            Changes to This Disclaimer
          </h2>
          <p>
            We reserve the right to amend this Disclaimer at any time. All
            changes will be posted on this page with an updated revision date.
            You are encouraged to review this Disclaimer periodically for any
            changes. Your continued use of the Site after any modifications to
            the Disclaimer will constitute your acknowledgment of the
            modifications and your consent to abide by and be bound by the
            modified Disclaimer.
          </p>
        </section>

        <section className="mb-6">
          <h2 className="text-2xl font-semibold mb-4">Contact Us</h2>
          <p>
            If you have any questions about this Disclaimer or the Site, please
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
