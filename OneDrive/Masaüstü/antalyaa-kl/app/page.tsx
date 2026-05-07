import Link from "next/link";
import { ServicePage } from "@/components/service-page";
import { getDistricts, getServiceBrands, slugify } from "@/lib/data";

export default function HomePage() {
  const districts = getDistricts();
  const brands = getServiceBrands("klima").slice(0, 12);
  return (
    <>
      <ServicePage
        service="klima"
        h1="Antalya Klima ve Beyaz Eşya Servisi"
        h2="Aynı gün servis, uzman ekip ve Antalya geneline hızlı müdahale."
      />
      <section className="container-main py-14">
        <h2 className="text-2xl font-bold">Hızlı Erişim</h2>
        <div className="mt-5 grid gap-3 md:grid-cols-2">
          <Link href="/klima-servisi" className="rounded-xl border p-4">Klima Servisi</Link>
          <Link href="/beyaz-esya-servisi" className="rounded-xl border p-4">Beyaz Eşya Servisi</Link>
        </div>
        <div className="mt-8 text-sm text-zinc-700">
          Örnek ilçe sayfası:{" "}
          <Link href={`/${slugify(districts[0].ilce)}-klima-servisi`} className="text-brand-700 underline">
            {districts[0].ilce} Klima Servisi
          </Link>
        </div>
        <div className="mt-3 text-sm text-zinc-700">Öne çıkan markalar: {brands.join(", ")}</div>
      </section>
    </>
  );
}
