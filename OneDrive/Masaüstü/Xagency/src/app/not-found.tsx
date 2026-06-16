"use client";

import { NeonButton } from "@/components/ui/NeonButton";

export default function NotFound() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center px-4 text-center">
      <h1 className="text-8xl font-black neon-text">404</h1>
      <p className="mt-4 text-xl text-white">Sayfa Bulunamadı</p>
      <p className="mt-2 text-soft-gray">
        Aradığınız sayfa mevcut değil veya taşınmış olabilir.
      </p>
      <div className="mt-8">
        <NeonButton href="/" variant="primary">
          Anasayfaya Dön
        </NeonButton>
      </div>
    </div>
  );
}
