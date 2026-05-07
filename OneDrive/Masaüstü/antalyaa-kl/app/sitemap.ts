import type { MetadataRoute } from "next";
import { SITE_URL, getDistricts, getServiceBrands, slugify } from "@/lib/data";

export default function sitemap(): MetadataRoute.Sitemap {
  const base: MetadataRoute.Sitemap = [
    "",
    "/klima-servisi",
    "/beyaz-esya-servisi",
    "/antalya-klima-servisi",
    "/antalya-beyaz-esya-servisi",
    "/blog"
  ].map((route) => ({ url: `${SITE_URL}${route}` }));

  const districtPages = getDistricts().flatMap((d) => [
    { url: `${SITE_URL}/${slugify(d.ilce)}-klima-servisi` },
    { url: `${SITE_URL}/${slugify(d.ilce)}-beyaz-esya-servisi` }
  ]);

  const districtBrandPages = getDistricts().flatMap((d) =>
    getServiceBrands("klima")
      .slice(0, 10)
      .map((b) => ({ url: `${SITE_URL}/${slugify(d.ilce)}/${slugify(b)}-klima-servisi` }))
  );

  return [...base, ...districtPages, ...districtBrandPages];
}
