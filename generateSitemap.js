const fs = require("fs");
const path = require("path");

const baseUrl = "http://discordarena.com";

// Get current date in YYYY-MM-DD format
const getCurrentDate = () => {
  const now = new Date();
  const year = now.getFullYear();
  const month = String(now.getMonth() + 1).padStart(2, '0');
  const day = String(now.getDate()).padStart(2, '0');
  return `${year}-${month}-${day}`;
};

const generateSitemap = () => {
  const staticUrls = [
    { url: "/", priority: 1.0 },
    { url: "/accounts", priority: 0.9 },
    { url: "/aboutus", priority: 0.9 },
    { url: "/blogs", priority: 0.9 },
    { url: "/faq", priority: 0.9 },
    { url: "/contactus", priority: 0.9 },
    { url: "/accounts/discord", priority: 0.9 },
    { url: "/accounts/discordserver", priority: 0.9 },
    { url: "/accounts/instagram", priority: 0.9 },
    { url: "/accounts/reddit", priority: 0.9 },
  ];

  const blogsData = require("./src/dataFolder/blogs.json");
  const discordData = require("./src/dataFolder/discord.json");
  const discordServerData = require("./src/dataFolder/discordserver.json");
  const instagramData = require("./src/dataFolder/instagram.json");
  const redditData = require("./src/dataFolder/reddit.json");

  const currentDate = getCurrentDate();

  let sitemap = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n`;

  // Function to add URLs with a specified priority
  const addUrls = (urls, priority) => {
    urls.forEach((url) => {
      sitemap += `  <url>\n    <loc>${baseUrl}${url.url}</loc>\n    <changefreq>daily</changefreq>\n    <lastmod>${currentDate}</lastmod>\n    <priority>${priority}</priority>\n  </url>\n`;
    });
  };

  // Add static URLs with their respective priorities
  addUrls(staticUrls, 0.8);

  // Function to add dynamic URLs
  const addDynamicUrls = (data, pathPrefix, priority) => {
    data.forEach((item) => {
      const url = `${baseUrl}${pathPrefix}${encodeURIComponent(
        item.name.toLowerCase().split(" ").join("-")
      )}`;
      sitemap += `  <url>\n    <loc>${url}</loc>\n    <changefreq>daily</changefreq>\n    <lastmod>${currentDate}</lastmod>\n    <priority>${priority}</priority>\n  </url>\n`;
    });
  };

  // Add dynamic URLs with priority 0.8
  addDynamicUrls(blogsData, "/blogs/", 0.8);
  addDynamicUrls(discordData, "/accounts/discord/", 0.8);
  addDynamicUrls(discordServerData, "/accounts/discordserver/", 0.8);
  addDynamicUrls(instagramData, "/accounts/instagram/", 0.8);
  addDynamicUrls(redditData, "/accounts/reddit/", 0.8);

  sitemap += "</urlset>";

  try {
    fs.writeFileSync(path.join(__dirname, "src/app", "sitemap.xml"), sitemap);
    console.log("Sitemap generated successfully.");
  } catch (error) {
    console.error("Error generating sitemap:", error);
  }
};

generateSitemap();
