export const skills = [
  {
    title: "Frontend Development",
    description:
      "HTML, CSS, JavaScript, React ve Next.js ile modern arayüzler geliştiriyorum.",
    icon: "⚡",
  },
  {
    title: "Backend Development",
    description:
      "Node.js, Express.js, PostgreSQL ve Supabase ile dinamik sistemler kuruyorum.",
    icon: "🔧",
  },
  {
    title: "E-Ticaret Siteleri",
    description:
      "Ürün listeleme, kategori yapısı, sepet mantığı ve yönetim paneli odaklı e-ticaret çözümleri hazırlıyorum.",
    icon: "🛒",
  },
  {
    title: "SEO Optimizasyonu",
    description:
      "Teknik SEO, site içi SEO, meta başlık/açıklama, hız optimizasyonu ve Google araçlarıyla SEO çalışmaları yapıyorum.",
    icon: "📈",
  },
  {
    title: "Grafik Tasarım",
    description:
      "Logo, kartvizit, sosyal medya postları, katalog, dergi ve marka kimliği tasarımları hazırlıyorum.",
    icon: "🎨",
  },
  {
    title: "Yapay Zeka Araçları",
    description:
      "ChatGPT, Cursor, Claude, Gemini ve görsel/video AI araçlarıyla üretim sürecini hızlandırıyorum.",
    icon: "🤖",
  },
];

export type Project = {
  title: string;
  category: string;
  description: string;
  technologies: string[];
  features: string[];
  premium?: boolean;
  brandingBadges?: string[];
  techLabel?: string;
};

export const featuredProject: Project = {
  title: "İzmir Klima Servisi Web Sitesi + Admin Panel",
  category: "Full-Stack Web Uygulaması",
  description:
    "İzmir bölgesinde hizmet veren klima ve beyaz eşya servisi için modern, SEO uyumlu ve mobil uyumlu bir web sitesi geliştirildi. Projeye özel admin panel, blog yönetimi, hizmet yönetimi, ilçe/mahalle yönetimi, müşteri talepleri ve bildirim sistemi eklendi.",
  technologies: [
    "Next.js",
    "React",
    "Node.js",
    "PostgreSQL",
    "Supabase",
    "Render",
    "Vercel",
    "SEO",
  ],
  features: [
    "Mobil uyumlu tasarım",
    "Admin panel",
    "Blog/rehber yönetimi",
    "Hizmet yönetimi",
    "Müşteri talep formu",
    "İlçe ve mahalle yönetimi",
    "Bildirim sistemi",
    "SEO uyumlu sayfa yapısı",
    "Backend ve veritabanı bağlantısı",
  ],
};

export const showcaseProjects: Project[] = [
  {
    title: "Mefer Kurumsal Web Sitesi & Marka Kimliği",
    category: "Kurumsal Web Sitesi + Branding",
    description:
      "Mefer markası için modern, mobil uyumlu ve SEO odaklı kurumsal web sitesi geliştirildi. Aynı zamanda markanın dijital kimliği oluşturularak logo, kartvizit, katalog ve kurumsal tasarım çalışmaları hazırlandı. Projede modern UI/UX, premium marka görünümü ve kullanıcı deneyimi ön planda tutuldu.",
    technologies: [
      "Next.js",
      "React",
      "Tailwind CSS",
      "SEO",
      "Photoshop",
      "Illustrator",
      "InDesign",
    ],
    features: [
      "Responsive kurumsal web sitesi",
      "Modern UI/UX tasarımı",
      "SEO uyumlu yapı",
      "Hız optimizasyonu",
      "Kurumsal marka kimliği",
      "Logo tasarımı",
      "Kartvizit tasarımı",
      "Katalog tasarımı",
      "Kurumsal kimlik çalışmaları",
      "Premium görsel tasarım sistemi",
    ],
    premium: true,
    brandingBadges: ["Branding", "Web Dev", "UI/UX", "Identity"],
  },
  {
    title: "Rent A Car Web Sitesi",
    category: "Araç Kiralama Platformu",
    description:
      "Araç kiralama firması için kullanıcı dostu, modern ve mobil uyumlu bir rent a car web sitesi geliştirildi. Araç listeleme sistemi, araç detay sayfaları ve teklif alma alanları oluşturuldu.",
    technologies: ["Next.js", "React", "Tailwind CSS", "JavaScript"],
    features: [
      "Araç listeleme sistemi",
      "Araç detay sayfaları",
      "Teklif alma alanı",
      "Mobil uyumlu yapı",
      "Modern kart tasarımları",
      "SEO uyumlu sayfa yapısı",
    ],
  },
  {
    title: "E-Ticaret Web Sitesi",
    category: "E-Ticaret",
    description:
      "Modern kullanıcı deneyimi, mobil uyumluluk ve dönüşüm odaklı alışveriş akışıyla e-ticaret web sitesi arayüzü geliştirildi.",
    technologies: ["React", "Next.js", "Tailwind CSS", "JavaScript"],
    features: [
      "Ürün kartları",
      "Kategori yapısı",
      "Kampanya alanları",
      "Responsive tasarım",
      "Modern UI bileşenleri",
      "E-ticaret kullanıcı deneyimi",
    ],
  },
  {
    title: "Grafik Tasarım & Dijital Tasarım Çalışmaları",
    category: "Grafik Tasarım",
    description:
      "Markalar için logo, sosyal medya postları, kartvizit, katalog, dergi ve kurumsal kimlik odaklı modern tasarım çalışmaları hazırlandı.",
    technologies: ["Photoshop", "Illustrator", "InDesign", "Canva", "Figma"],
    techLabel: "Araçlar",
    features: [
      "Logo tasarımı",
      "Kartvizit tasarımı",
      "Sosyal medya tasarımları",
      "Katalog tasarımı",
      "Dergi tasarımı",
      "Kurumsal kimlik çalışmaları",
    ],
  },
];

export const services = [
  "Kurumsal Web Sitesi",
  "E-Ticaret Sitesi",
  "Landing Page Tasarımı",
  "Admin Panel / Dashboard",
  "SEO Optimizasyonu",
  "Logo ve Kurumsal Kimlik",
  "Sosyal Medya Tasarımları",
  "Katalog ve Dergi Tasarımı",
];

export const technologies = [
  "HTML",
  "CSS",
  "JavaScript",
  "React",
  "Next.js",
  "Node.js",
  "Express.js",
  "PostgreSQL",
  "Supabase",
  "Git",
  "GitHub",
  "Vercel",
  "Render",
  "Figma",
  "Canva",
  "Photoshop",
  "Illustrator",
  "InDesign",
  "ChatGPT",
  "Cursor",
  "Claude",
  "Gemini",
];

export const navLinks = [
  { label: "Hakkımda", href: "#hakkimda" },
  { label: "Uzmanlık", href: "#uzmanlik" },
  { label: "Projeler", href: "#projeler" },
  { label: "Hizmetler", href: "#hizmetler" },
  { label: "İletişim", href: "#iletisim" },
];

export const projectTypes = [
  "Kurumsal Web Sitesi",
  "E-Ticaret Sitesi",
  "Landing Page",
  "Admin Panel",
  "SEO Optimizasyonu",
  "Grafik Tasarım",
  "Diğer",
];
