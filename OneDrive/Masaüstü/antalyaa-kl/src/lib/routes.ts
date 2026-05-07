import { deslugify, getDistricts, getLocationsByDistrict, getServiceBrands, slugify } from "@/lib/data";
import type { ServiceType } from "@/lib/types";

export function parseDistrictSlug(input: string) {
  return input.replace(/-(klima|beyaz-esya)-servisi$/, "");
}

export function parseLocationSlug(input: string) {
  return input.replace(/-(klima|beyaz-esya)-servisi$/, "");
}

export function buildTitle(service: ServiceType, district?: string, location?: string, brand?: string) {
  const serviceLabel = service === "klima" ? "Klima Servisi" : "Beyaz Eşya Servisi";
  return `${district ? `${district} ` : ""}${location ? `${location} ` : ""}${brand ? `${brand} ` : ""}${serviceLabel}`.trim();
}

export function districtParams(service: ServiceType) {
  return getDistricts().map((d) => ({ district: `${slugify(d.ilce)}-${service}-servisi` }));
}

export function districtLocationParams(service: ServiceType) {
  return getDistricts().flatMap((d) =>
    d.mahalleler.slice(0, 20).map((m) => ({
      district: slugify(d.ilce),
      location: `${slugify(m)}-${service}-servisi`
    }))
  );
}

export function districtBrandParams(service: ServiceType) {
  return getDistricts().flatMap((d) =>
    getServiceBrands(service).slice(0, 20).map((b) => ({
      district: slugify(d.ilce),
      brand: `${slugify(b)}-${service}-servisi`
    }))
  );
}

export function districtLocationBrandParams(service: ServiceType) {
  return getDistricts().flatMap((d) =>
    d.mahalleler.slice(0, 8).flatMap((m) =>
      getServiceBrands(service).slice(0, 12).map((b) => ({
        district: slugify(d.ilce),
        location: slugify(m),
        brand: `${slugify(b)}-${service}-servisi`
      }))
    )
  );
}

export function parseBrandService(brandSlug: string) {
  const service: ServiceType = brandSlug.endsWith("-klima-servisi") ? "klima" : "beyaz-esya";
  const brand = brandSlug.replace(/-(klima|beyaz-esya)-servisi$/, "");
  return { service, brand: deslugify(brand) };
}
