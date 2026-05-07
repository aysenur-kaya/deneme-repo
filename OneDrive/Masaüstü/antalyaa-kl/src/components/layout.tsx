import Link from "next/link";
import { PHONE_NUMBER, PHONE_TEL, SITE_NAME, WHATSAPP_LINK } from "@/lib/data";

export function Header() {
  return (
    <header className="sticky top-0 z-40 border-b border-zinc-800/30 bg-zinc-950/95 text-white backdrop-blur">
      <div className="container-main flex h-16 items-center justify-between">
        <Link href="/" className="text-lg font-semibold tracking-tight">
          {SITE_NAME}
        </Link>
        <nav className="hidden gap-5 text-sm md:flex">
          <Link href="/klima-servisi">Klima</Link>
          <Link href="/beyaz-esya-servisi">Beyaz Eşya</Link>
          <Link href="/blog">Blog</Link>
        </nav>
        <div className="flex items-center gap-2">
          <a href={`tel:+${PHONE_TEL}`} className="rounded-full bg-brand-600 px-3 py-1.5 text-xs font-semibold">
            {PHONE_NUMBER}
          </a>
          <a href={WHATSAPP_LINK} className="rounded-full bg-emerald-500 px-3 py-1.5 text-xs font-semibold text-black">
            WhatsApp
          </a>
        </div>
      </div>
    </header>
  );
}

export function Footer({ districts, brands }: { districts: string[]; brands: string[] }) {
  return (
    <footer className="mt-20 bg-gradient-to-b from-brand-900 via-zinc-900 to-black text-white">
      <div className="container-main grid gap-8 py-14 md:grid-cols-4">
        <div>
          <h3 className="text-xl font-bold">{SITE_NAME}</h3>
          <p className="mt-3 text-sm text-zinc-300">Antalya genelinde premium klima ve beyaz eşya servis deneyimi.</p>
        </div>
        <div>
          <h4 className="font-semibold">Hizmetler</h4>
          <ul className="mt-3 space-y-1 text-sm text-zinc-300">
            <li>Klima Bakım</li>
            <li>Klima Tamir</li>
            <li>Beyaz Eşya Onarım</li>
          </ul>
        </div>
        <div>
          <h4 className="font-semibold">Bölgeler</h4>
          <ul className="mt-3 max-h-28 space-y-1 overflow-auto text-sm text-zinc-300">
            {districts.slice(0, 12).map((d) => (
              <li key={d}>{d}</li>
            ))}
          </ul>
        </div>
        <div>
          <h4 className="font-semibold">Markalar</h4>
          <ul className="mt-3 max-h-28 space-y-1 overflow-auto text-sm text-zinc-300">
            {brands.slice(0, 12).map((b) => (
              <li key={b}>{b}</li>
            ))}
          </ul>
        </div>
      </div>
      <div className="border-t border-zinc-700/50 py-4 text-center text-xs text-zinc-400">
        © {new Date().getFullYear()} {SITE_NAME}. Tüm hakları saklıdır.
      </div>
    </footer>
  );
}

export function MobileBottomBar() {
  return (
    <div className="fixed inset-x-0 bottom-0 z-50 grid grid-cols-2 gap-2 border-t border-zinc-700 bg-zinc-950 p-3 md:hidden">
      <a href={`tel:+${PHONE_TEL}`} className="rounded-lg bg-brand-600 px-4 py-3 text-center text-sm font-semibold text-white">
        Telefon
      </a>
      <a href={WHATSAPP_LINK} className="rounded-lg bg-emerald-500 px-4 py-3 text-center text-sm font-semibold text-black">
        WhatsApp
      </a>
    </div>
  );
}
