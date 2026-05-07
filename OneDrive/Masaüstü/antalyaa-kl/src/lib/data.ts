import antalyaData from "@/data/antalya.json";
import klimaData from "@/data/gemini-code-1778147632176.json";
import beyazEsyaData from "@/data/gemini-code-1778147674157.json";
import type { AntalyaData, ServiceType } from "@/lib/types";

export const SITE_NAME = "Antalya Servisi";
export const SITE_URL = "https://antalya-servisi.vercel.app";
export const PHONE_NUMBER = "0242 000 00 00";
export const PHONE_TEL = "902420000000";
export const WHATSAPP_LINK = "https://wa.me/905320000000";

const antalya = antalyaData as AntalyaData;
const klimaBrands = klimaData.klima_markalari;
const beyazEsyaBrands = beyazEsyaData.beyaz_esya_markalari;

export function slugify(input: string): string {
  return input
    .toLocaleLowerCase("tr-TR")
    .replace(/ı/g, "i")
    .replace(/ğ/g, "g")
    .replace(/ü/g, "u")
    .replace(/ş/g, "s")
    .replace(/ö/g, "o")
    .replace(/ç/g, "c")
    .replace(/[^a-z0-9\s-]/g, "")
    .trim()
    .replace(/\s+/g, "-")
    .replace(/-+/g, "-");
}

export function deslugify(input: string): string {
  return input
    .split("-")
    .map((part) => (part.length ? part[0].toUpperCase() + part.slice(1) : part))
    .join(" ");
}

export function getDistricts() {
  return antalya.ilceler;
}

export function getLocationsByDistrict(districtSlug: string) {
  const district = antalya.ilceler.find((d) => slugify(d.ilce) === districtSlug);
  return district?.mahalleler ?? [];
}

export function getServiceBrands(service: ServiceType) {
  return service === "klima" ? klimaBrands : beyazEsyaBrands;
}

export function getServicesList(service: ServiceType) {
  if (service === "klima") {
    return ["Klima bakım", "Klima tamir", "Klima montaj", "Klima gaz dolumu", "Klima arıza servisi"];
  }
  return [
    "Çamaşır makinesi servisi",
    "Bulaşık makinesi servisi",
    "Buzdolabı servisi",
    "Fırın servisi",
    "Derin dondurucu servisi",
    "Kurutma makinesi servisi"
  ];
}
