import type { MetadataRoute } from "next";
import { experiences, projects } from "@/constants/data";

const SITE_URL = "https://muhammad-bilal-yousaf.vercel.app";

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();

  return [
    { url: SITE_URL, lastModified, changeFrequency: "monthly", priority: 1 },
    { url: `${SITE_URL}/projects`, lastModified, changeFrequency: "monthly", priority: 0.8 },
    { url: `${SITE_URL}/experience`, lastModified, changeFrequency: "monthly", priority: 0.8 },
    ...projects.map((p) => ({
      url: `${SITE_URL}/projects/${p.id}`,
      lastModified,
      changeFrequency: "yearly" as const,
      priority: p.featured ? 0.7 : 0.5,
    })),
    ...experiences.map((e) => ({
      url: `${SITE_URL}/experience/${e.id}`,
      lastModified,
      changeFrequency: "yearly" as const,
      priority: 0.6,
    })),
  ];
}
