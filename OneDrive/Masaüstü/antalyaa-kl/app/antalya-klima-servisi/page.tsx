import { ServicePage } from "@/components/service-page";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  pathname: "/antalya-klima-servisi",
  service: "klima",
  district: "Antalya"
});

export default function AntalyaKlimaServisiPage() {
  return <ServicePage service="klima" h1="Antalya Klima Servisi" h2="Antalya merkez ve tüm ilçelerde aynı gün klima servisi." />;
}
