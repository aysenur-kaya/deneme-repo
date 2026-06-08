import type { Metadata } from "next";
import { Inter, Space_Grotesk } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Ayşenur | Frontend, Backend, SEO & Digital Design",
  description:
    "Ayşenur - Modern web siteleri, e-ticaret sistemleri ve dijital tasarımlar geliştiriyorum. Frontend, backend, SEO ve grafik tasarım alanlarında profesyonel freelance hizmetler.",
  keywords: [
    "Ayşenur",
    "web geliştirici",
    "frontend developer",
    "backend developer",
    "e-ticaret",
    "SEO",
    "grafik tasarım",
    "Next.js",
    "React",
    "freelance",
  ],
  authors: [{ name: "Ayşenur" }],
  openGraph: {
    title: "Ayşenur | Frontend, Backend, SEO & Digital Design",
    description:
      "Modern web siteleri, e-ticaret sistemleri ve dijital tasarımlar geliştiriyorum.",
    type: "website",
    locale: "tr_TR",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="tr" className={`${inter.variable} ${spaceGrotesk.variable}`}>
      <body className="min-h-screen bg-[#0a0a0f] text-zinc-100 antialiased">
        {children}
      </body>
    </html>
  );
}
