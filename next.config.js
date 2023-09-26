/** @type {import('next').NextConfig} */
module.exports = {
  images: {
    imageSizes: [32, 48, 64],
    remotePatterns: [
      {
        hostname: "cdn.weatherapi.com",
      },
    ],
  },
}
