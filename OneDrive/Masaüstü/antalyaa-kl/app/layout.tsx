import type { Metadata } from "next";
import "./globals.css";
import { Footer, Header, MobileBottomBar } from "@/components/layout";
import { SITE_NAME, getDistricts, getServiceBrands } from "@/lib/data";

export const metadata: Metadata = {
  title: `${SITE_NAME} | Antalya Klima ve Beyaz Eşya Servisi`,
  description: "Antalya genelinde klima ve beyaz eşya servis çözümleri."
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const districts = getDistricts().map((d) => d.ilce);
  const brands = [...getServiceBrands("klima"), ...getServiceBrands("beyaz-esya")];
  return (
    <html lang="tr">
      <body>
        <Header />
        {children}
        <Footer districts={districts} brands={brands} />
        <MobileBottomBar />
      </body>
    </html>
  );
}
