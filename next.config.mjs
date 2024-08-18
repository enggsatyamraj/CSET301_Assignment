/** @type {import('next').NextConfig} */
const nextConfig = {
  async headers() {
    return [
      {
        source: "/:all*(jpg|jpeg|png|svg|gif)",
        headers: [
          {
            key: "Cache-Control",
            value: "public, max-age=31536000, immutable",
          },
        ],
      },
    ];
  },
  async redirects(){
    return [
      {
        source:'/accounts/discord',
        destination:'/accounts/buy-discord-accounts',
        permanent:true
      },
      {
        source: '/accounts/reddit',
        destination: '/accounts/buy-reddit-accounts',
        permanent: true,
      },
      {
        source:'/accounts/youtube',
        destination:'/accounts/buy-youtube-accounts',
        permanent:true,
      },
      {
        source:'/accounts/discordserver',
        destination:'/accounts/buy-discord-server',
        permanent:true,
      },
      {
        source:'/accounts/instagram',
        destination:'/accounts/buy-instagram-accounts',
        permanent:true,
      },
      {
        source:"/accounts/discord-server-boost",
        destination:"/accounts/buy-discord-server-boost",
        permanent:true,
      }
    ]
  }
};

export default nextConfig;
