export const generateMetadata = () => {
    const title = "Contact Us - Discord Arena";
    const description =
      "Have questions or need assistance? Get in touch with our team at Discord Arena. We are here to help with all your queries related to premium Discord, Instagram, and other accounts.";
    const keywords =
      "contact us, Discord Arena, premium accounts, Discord, Instagram, customer support, inquiries";
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