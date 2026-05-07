import { ServicePage } from "@/components/service-page";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  pathname: "/beyaz-esya-servisi",
  service: "beyaz-esya",
  district: "Antalya"
});

export default function BeyazEsyaServisiPage() {
  return (
    <ServicePage
      service="beyaz-esya"
      h1="Antalya Beyaz Eşya Servisi"
      h2="Çamaşır, bulaşık, buzdolabı ve diğer beyaz eşyalarınız için hızlı ve güvenilir teknik servis."
    />
  );
}
