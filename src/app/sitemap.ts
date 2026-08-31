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
    { url: `${BASE}/quem-somos`, changeFrequency: "monthly", priority: 0.8 },
    { url: `${BASE}/quem-somos/historia`, changeFrequency: "monthly", priority: 0.6 },
    { url: `${BASE}/quem-somos/lideranca`, changeFrequency: "monthly", priority: 0.6 },
    {
      url: `${BASE}/quem-somos/especialistas`,
      changeFrequency: "monthly",
      priority: 0.6,
    },
    {
      url: `${BASE}/quem-somos/ecossistema`,
      changeFrequency: "monthly",
      priority: 0.6,
    },
  ];
}
