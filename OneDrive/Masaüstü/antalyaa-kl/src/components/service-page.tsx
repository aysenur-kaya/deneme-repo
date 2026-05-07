import Link from "next/link";
import { buildSchemas } from "@/lib/seo";
import { PHONE_NUMBER, PHONE_TEL, WHATSAPP_LINK, getDistricts, getServiceBrands, getServicesList, slugify } from "@/lib/data";
import type { ServiceType } from "@/lib/types";

export function ServicePage({
  service,
  h1,
  h2,
  district,
  location,
  brand
}: {
  service: ServiceType;
  h1: string;
  h2: string;
  district?: string;
  location?: string;
  brand?: string;
}) {
  const districts = getDistricts();
  const brands = getServiceBrands(service);
  const services = getServicesList(service);
  const schemaPayloads = buildSchemas({
    pageTitle: h1,
    pathname: "/",
    serviceName: h1,
    districtLabel: district ?? "Antalya"
  });

  return (
    <main>
      {schemaPayloads.map((schema, index) => (
        <script key={`${h1}-schema-${index}`} type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      ))}
      <section className="bg-gradient-to-br from-zinc-950 via-brand-900 to-black py-20 text-white">
        <div className="container-main">
          <h1 className="max-w-3xl text-4xl font-extrabold leading-tight md:text-5xl">{h1}</h1>
          <p className="mt-4 max-w-2xl text-zinc-200">{h2}</p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a href={`tel:+${PHONE_TEL}`} className="rounded-xl bg-brand-600 px-5 py-3 font-semibold">
              {PHONE_NUMBER}
            </a>
            <a href={WHATSAPP_LINK} className="rounded-xl bg-emerald-500 px-5 py-3 font-semibold text-black">
              WhatsApp Hattı
            </a>
          </div>
        </div>
      </section>

      <section className="container-main py-14">
        <h2 className="text-2xl font-bold">Hizmet Çözümleri</h2>
        <div className="mt-6 grid gap-4 md:grid-cols-3">
          {services.map((item) => (
            <div key={item} className="rounded-2xl border border-zinc-200 p-5 shadow-sm transition hover:-translate-y-1 hover:shadow-md">
              <p className="font-semibold">{item}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="container-main py-12">
        <h2 className="text-2xl font-bold">Marka Servis Alanı</h2>
        <div className="mt-6 flex flex-wrap gap-2">
          {brands.slice(0, 30).map((item) => (
            <span key={item} className="rounded-full border border-zinc-300 px-3 py-1 text-sm">
              {item}
            </span>
          ))}
        </div>
      </section>

      <section className="container-main py-12">
        <h2 className="text-2xl font-bold">Antalya Bölgesel Servis Noktaları</h2>
        <div className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {districts.slice(0, 16).map((d) => (
            <Link key={d.ilce} href={`/${slugify(d.ilce)}-${service}-servisi`} className="rounded-xl border p-4 hover:border-brand-600">
              {d.ilce}
            </Link>
          ))}
        </div>
      </section>

      <section className="container-main py-12">
        <h2 className="text-2xl font-bold">Sık Sorulan Sorular</h2>
        <div className="mt-4 space-y-3">
          <details className="rounded-xl border p-4">
            <summary className="cursor-pointer font-semibold">Aynı gün servis var mı?</summary>
            <p className="mt-2 text-sm text-zinc-600">Evet, Antalya genelinde yoğunluğa göre aynı gün yönlendirme sağlanır.</p>
          </details>
          <details className="rounded-xl border p-4">
            <summary className="cursor-pointer font-semibold">Orijinal yedek parça kullanıyor musunuz?</summary>
            <p className="mt-2 text-sm text-zinc-600">Uygunluk durumuna göre orijinal ve garantili parça tercih edilir.</p>
          </details>
        </div>
      </section>

      <section className="container-main py-12">
        <h2 className="text-2xl font-bold">Sayfa Konumu</h2>
        <p className="mt-2 text-zinc-600">
          İlçe: {district ?? "Antalya Geneli"} | Mahalle: {location ?? "-"} | Marka: {brand ?? "-"}
        </p>
      </section>
    </main>
  );
}
