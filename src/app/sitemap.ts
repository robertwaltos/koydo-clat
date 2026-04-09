import type { MetadataRoute } from "next";

const BASE = "https://clat.koydo.app";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    { url: BASE, lastModified: new Date() },
    { url: `${BASE}/learn`, lastModified: new Date() },
    { url: `${BASE}/pricing`, lastModified: new Date() },
    { url: `${BASE}/privacy`, lastModified: new Date() },
    { url: `${BASE}/terms`, lastModified: new Date() },
  ];
}
