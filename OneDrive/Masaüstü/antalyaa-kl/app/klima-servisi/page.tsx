import { ServicePage } from "@/components/service-page";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({ pathname: "/klima-servisi", service: "klima", district: "Antalya" });

export default function KlimaServisiPage() {
  return (
    <ServicePage
      service="klima"
      h1="Antalya Klima Servisi"
      h2="Bakım, tamir, montaj ve arıza çözümlerinde Antalya geneli profesyonel klima servisi."
    />
  );
}
