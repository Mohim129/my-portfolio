export default function robots() {
  const baseUrl = "https://mohim-portfolio-three.vercel.app"; // Replace with your actual domain

  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: ["/private/"],
    },
    sitemap: `${baseUrl}/sitemap.xml`,
  };
}
