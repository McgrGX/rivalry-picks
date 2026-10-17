import type { MetadataRoute } from "next";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const origin = "https://rivalry-picks.pages.dev";

  return [
    { url: `${origin}/`, lastModified: new Date() },
    { url: `${origin}/#categories`, lastModified: new Date() },
    { url: `${origin}/#scoreboard`, lastModified: new Date() },
  ];
}
