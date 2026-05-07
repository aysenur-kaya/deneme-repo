import { ServicePage } from "@/components/service-page";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  pathname: "/antalya-beyaz-esya-servisi",
  service: "beyaz-esya",
  district: "Antalya"
});

export default function AntalyaBeyazEsyaServisiPage() {
  return (
    <ServicePage
      service="beyaz-esya"
      h1="Antalya Beyaz Eşya Servisi"
      h2="Antalya merkez ve tüm ilçelerde marka bağımsız beyaz eşya teknik servis."
    />
  );
}
