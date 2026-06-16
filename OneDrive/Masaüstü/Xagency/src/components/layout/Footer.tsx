"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  Instagram,
  Twitter,
  Linkedin,
  Youtube,
  Mail,
  MapPin,
  Phone,
} from "lucide-react";
import { navLinks, footerServices, siteConfig } from "@/lib/data";

const socialIcons = {
  Instagram,
  Twitter,
  Linkedin,
  Youtube,
};

export function Footer() {
  return (
    <footer className="relative border-t border-white/10 bg-dark-100">
      <div className="absolute inset-0 bg-gradient-radial-neon opacity-30" />

      <div className="container-custom relative section-padding pb-8">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
          <div className="lg:col-span-1">
            <Link href="/" className="inline-block">
              <span className="text-2xl font-black tracking-tighter">
                <span className="neon-text">XT</span>
                <span className="text-white">RAGENCY</span>
              </span>
            </Link>
            <p className="mt-4 text-sm leading-relaxed text-soft-gray">
              {siteConfig.description}
            </p>
            <div className="mt-6 flex gap-3">
              {(["Instagram", "Twitter", "Linkedin", "Youtube"] as const).map(
                (name) => {
                  const Icon = socialIcons[name];
                  return (
                    <motion.a
                      key={name}
                      href="#"
                      whileHover={{ scale: 1.1, y: -2 }}
                      className="flex h-10 w-10 items-center justify-center rounded-lg border border-white/10 bg-white/5 text-soft-gray transition-colors hover:border-neon/50 hover:text-neon"
                      aria-label={name}
                    >
                      <Icon className="h-4 w-4" />
                    </motion.a>
                  );
                }
              )}
            </div>
          </div>

          <div>
            <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-white">
              Menü
            </h3>
            <ul className="space-y-3">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-soft-gray transition-colors hover:text-neon"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-white">
              Hizmetler
            </h3>
            <ul className="space-y-3">
              {footerServices.map((service) => (
                <li key={service}>
                  <Link
                    href="/hizmetler"
                    className="text-sm text-soft-gray transition-colors hover:text-neon"
                  >
                    {service}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-white">
              İletişim
            </h3>
            <ul className="space-y-3">
              <li className="flex items-center gap-3 text-sm text-soft-gray">
                <Mail className="h-4 w-4 shrink-0 text-neon" />
                info@xtragency.com
              </li>
              <li className="flex items-center gap-3 text-sm text-soft-gray">
                <Phone className="h-4 w-4 shrink-0 text-neon" />
                +90 (212) 000 00 00
              </li>
              <li className="flex items-start gap-3 text-sm text-soft-gray">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-neon" />
                İstanbul, Türkiye
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-8 sm:flex-row">
          <p className="text-xs text-soft-gray">
            © 2026 XTRAGENCY. Tüm hakları saklıdır.
          </p>
          <div className="flex gap-6 text-xs text-soft-gray">
            <Link href="#" className="hover:text-neon transition-colors">
              Gizlilik Politikası
            </Link>
            <Link href="#" className="hover:text-neon transition-colors">
              Kullanım Şartları
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
