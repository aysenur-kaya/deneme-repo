import type { Metadata } from "next";
import { PHONE_NUMBER, SITE_NAME, SITE_URL, WHATSAPP_LINK } from "@/lib/data";
import type { ServiceType } from "@/lib/types";

const serviceLabel: Record<ServiceType, string> = {
  klima: "Klima Servisi",
  "beyaz-esya": "Beyaz Eşya Servisi"
};

export function buildMetadata({
  pathname,
  service,
  district,
  location,
  brand
}: {
  pathname: string;
  service: ServiceType;
  district?: string;
  location?: string;
  brand?: string;
}): Metadata {
  const titleParts = [district, location, brand, serviceLabel[service], "Antalya"]
    .filter(Boolean)
    .join(" ");
  const title = `${titleParts} | ${SITE_NAME}`;
  const description = `${district ?? "Antalya"} ${location ?? ""} ${brand ?? ""} için hızlı ${serviceLabel[service].toLowerCase()} hizmeti. Aynı gün servis, uzman ekip ve garantili işlem.`;
  return {
    title,
    description,
    alternates: { canonical: `${SITE_URL}${pathname}` },
    openGraph: { title, description, url: `${SITE_URL}${pathname}`, siteName: SITE_NAME, type: "website" }
  };
}

export function buildSchemas({
  pageTitle,
  pathname,
  serviceName,
  districtLabel
}: {
  pageTitle: string;
  pathname: string;
  serviceName: string;
  districtLabel: string;
}) {
  return [
    {
      "@context": "https://schema.org",
      "@type": "LocalBusiness",
      name: SITE_NAME,
      url: `${SITE_URL}${pathname}`,
      telephone: PHONE_NUMBER,
      areaServed: districtLabel,
      sameAs: [WHATSAPP_LINK]
    },
    {
      "@context": "https://schema.org",
      "@type": "Service",
      name: serviceName,
      areaServed: districtLabel,
      provider: { "@type": "LocalBusiness", name: SITE_NAME }
    },
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: [
        {
          "@type": "Question",
          name: "Servis ne kadar sürede gelir?",
          acceptedAnswer: { "@type": "Answer", text: "Antalya genelinde aynı gün servis planlaması yapılır." }
        },
        {
          "@type": "Question",
          name: "Marka bağımsız destek veriyor musunuz?",
          acceptedAnswer: { "@type": "Answer", text: "Evet, birçok klima ve beyaz eşya markası için servis desteği sağlanır." }
        }
      ]
    },
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Ana Sayfa", item: SITE_URL },
        { "@type": "ListItem", position: 2, name: pageTitle, item: `${SITE_URL}${pathname}` }
      ]
    }
  ];
}
