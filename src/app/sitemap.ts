import type { MetadataRoute } from "next";
import { siteConfig } from "@/lib/site";

// Only list pages that exist. Add each new page (e.g. /explore, /founder) here when it's built.
export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: siteConfig.url,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 1,
    },
  ];
}
