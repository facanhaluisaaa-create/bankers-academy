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
    { url: `${BASE}/bootcamp`, changeFrequency: "monthly", priority: 0.9 },
    { url: `${BASE}/bootcamp/experiencia`, changeFrequency: "monthly", priority: 0.7 },
    { url: `${BASE}/bootcamp/jornada`, changeFrequency: "monthly", priority: 0.7 },
    { url: `${BASE}/bootcamp/certificado`, changeFrequency: "monthly", priority: 0.7 },
    { url: `${BASE}/bootcamp/alumni`, changeFrequency: "monthly", priority: 0.6 },
    { url: `${BASE}/bootcamp/edicoes`, changeFrequency: "monthly", priority: 0.6 },
    { url: `${BASE}/bootcamp/mentores`, changeFrequency: "monthly", priority: 0.6 },
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
