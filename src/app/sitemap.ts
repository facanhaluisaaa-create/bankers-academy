import type { MetadataRoute } from "next";
import { IBBC_PATH } from "@/data/bootcamp/config";

const BASE = "https://www.bankersacademy.com.br";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    { url: BASE, changeFrequency: "monthly", priority: 1 },
    {
      url: `${BASE}${IBBC_PATH}`,
      changeFrequency: "monthly",
      priority: 0.9,
    },
  ];
}
