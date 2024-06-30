import { additionalBlogs, blogs } from "./page";

export const generateMetadata = () => {
    const jsonLdMarkup = {
      "@context": "https://schema.org",
      "@type": "Blog",
      mainEntityOfPage: {
        "@type": "WebPage",
        "@id": "https://www.discordarena.com/blogs",
      },
      headline:
        "Expert Tips & Insights on Discord Accounts | Discord Arena Blog",
      description:
        "Explore our blog for expert advice, tips, and insights on using aged Discord accounts to maximize your online presence and engagement.",
      image: "https://www.discordarena.com/og-image.jpg",
      author: {
        "@type": "Organization",
        name: "Discord Arena",
      },
      publisher: {
        "@type": "Organization",
        name: "Discord Arena",
        logo: {
          "@type": "ImageObject",
          url: "https://www.discordarena.com/logo.jpg",
        },
      },
      datePublished: "2024-02-20",
      dateModified: "2024-02-20",
      blogPost: [
        ...blogs.map((blog) => ({
          "@type": "BlogPosting",
          headline: blog.headline,
          description: blog.description,
        })),
        ...additionalBlogs.map((blog) => ({
          "@type": "BlogPosting",
          headline: blog.headline,
          description: blog.description,
        })),
      ],
    };
  
    return {
      title: "Latest News on Aged Discord Accounts | Discord Arena Blog",
      description:
        "Explore our blog for expert advice, tips, and insights on using aged Discord accounts to maximize your online presence and engagement.",
      openGraph: {
        title: "Discord Arena - Blogs || Discord Accounts || Instagram Accounts",
        description:
          "Discover a wealth of information in our blogs covering topics such as optimizing Discord engagement, securing your Discord account, navigating Discord tokens, growth strategies, monetizing Instagram, creating and growing your account, efficient management of multiple social media accounts, Discord Nitro boosting, Snapchat accounts for personal use, and accelerating YouTube channel growth.",
        type: "website",
        url: "https://www.discordarena.com/blogs",
        images: [
          {
            url: "https://www.discordarena.com/og-image.jpg",
            width: 1200,
            height: 630,
            alt: "Discord Arena Blogs",
          },
        ],
      },
      twitter: {
        card: "summary_large_image",
        title: "Discord Arena - Blogs || Discord Accounts || Instagram Accounts",
        description:
          "Discover a wealth of information in our blogs covering topics such as optimizing Discord engagement, securing your Discord account, navigating Discord tokens, growth strategies, monetizing Instagram, creating and growing your account, efficient management of multiple social media accounts, Discord Nitro boosting, Snapchat accounts for personal use, and accelerating YouTube channel growth.",
        images: ["https://www.discordarena.com/-image.jpg"],
      },
      keywords:
        "discord, accounts, instagram, blogs, social media growth, server boosts",
      robots: "index, follow",
      viewport: "width=device-width, initial-scale=1.0",
      authors: [
        {
          name: "Discord Arena",
          url: "https://www.discordarena.com",
        },
      ],
      revisitAfter: { duration: 7, unit: "days" },
      rating: "general",
      language: "en-us",
      classification: "Business",
      copyright: "2023 Discord Arena",
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
      alternates: {
        canonical: "https://www.discordarena.com/blogs",
        languages: {
          "en-US": "https://www.discordarena.com/blogs",
          "es-ES": "https://www.discordarena.com/es/blogs",
        },
      },
    };
  };