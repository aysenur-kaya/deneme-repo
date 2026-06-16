import { QuickAction } from "@/types/chat";
import { CHAT_CONFIG } from "./config";

export const QUICK_ACTIONS: QuickAction[] = [
  {
    id: "web-quote",
    label: "Web Sitesi Fiyat Teklifi",
    emoji: "🚀",
    trigger: "Web Sitesi Fiyat Teklifi",
    response:
      "Size uygun teklif hazırlayabilmemiz için projenizin detaylarını paylaşabilir misiniz?",
  },
  {
    id: "seo-analysis",
    label: "SEO Analizi Yap",
    emoji: "📈",
    trigger: "SEO Analizi Yap",
    response:
      "Domain adresinizi paylaşın. Ön analiz için gerekli bilgileri hazırlayalım.",
  },
  {
    id: "google-ads",
    label: "Google Ads Danışmanlığı",
    emoji: "🎯",
    trigger: "Google Ads Danışmanlığı",
    response:
      "Google Ads kampanyalarınız için hedeflerinizi paylaşabilirsiniz.",
  },
  {
    id: "social-media",
    label: "Sosyal Medya Yönetimi",
    emoji: "📱",
    trigger: "Sosyal Medya Yönetimi",
    response:
      "Sosyal medya yönetimi hizmetimiz hakkında detaylı bilgi verebilirim.",
  },
  {
    id: "brand-identity",
    label: "Kurumsal Kimlik Tasarımı",
    emoji: "🎨",
    trigger: "Kurumsal Kimlik Tasarımı",
    response:
      "Logo, renk paleti ve marka kimliği ihtiyaçlarınızı paylaşabilirsiniz.",
  },
  {
    id: "software",
    label: "Yazılım Çözümleri",
    emoji: "💻",
    trigger: "Yazılım Çözümleri",
    response:
      "Web uygulaması, otomasyon veya özel yazılım ihtiyaçlarınızı anlatabilirsiniz.",
  },
];

const KEYWORD_RESPONSES: { keywords: string[]; response: string }[] = [
  {
    keywords: ["seo", "arama", "google sıra", "organik"],
    response:
      "SEO hizmetlerimizle web sitenizi arama motorlarında üst sıralara taşıyoruz. Ücretsiz ön analiz için domain adresinizi paylaşabilir veya /seo-analiz sayfamızı ziyaret edebilirsiniz.",
  },
  {
    keywords: ["web", "site", "website", "tasarım"],
    response:
      "Modern, hızlı ve dönüşüm odaklı web siteleri tasarlıyoruz. Projenizin kapsamını paylaşırsanız size özel bir teklif hazırlayabiliriz.",
  },
  {
    keywords: ["fiyat", "teklif", "ücret", "maliyet", "bütçe"],
    response:
      "Her proje benzersizdir. Size en uygun teklifi hazırlayabilmemiz için projenizin detaylarını paylaşmanız yeterli.",
  },
  {
    keywords: ["reklam", "ads", "google ads", "meta", "facebook"],
    response:
      "Hedefli dijital reklam kampanyalarıyla markanızın görünürlüğünü artırıyoruz. Kampanya hedeflerinizi paylaşabilirsiniz.",
  },
  {
    keywords: ["sosyal", "instagram", "linkedin", "tiktok"],
    response:
      "Sosyal medya yönetimi hizmetimizle markanızın dijital sesini güçlendiriyoruz. Hangi platformlarda aktif olmak istediğinizi belirtin.",
  },
  {
    keywords: ["logo", "kimlik", "marka", "kurumsal"],
    response:
      "Kurumsal kimlik tasarımında logo, renk paleti ve marka kılavuzu dahil kapsamlı çözümler sunuyoruz.",
  },
  {
    keywords: ["yazılım", "uygulama", "api", "otomasyon"],
    response:
      "Özel yazılım çözümleri, web uygulamaları ve otomasyon sistemleri geliştiriyoruz. İhtiyacınızı detaylandırabilir misiniz?",
  },
  {
    keywords: ["merhaba", "selam", "hey", "günaydın", "iyi günler"],
    response: CHAT_CONFIG.welcomeMessage,
  },
];

const DEFAULT_RESPONSE =
  "Teşekkürler! Mesajınızı aldım. Size en kısa sürede yardımcı olacağım. Daha hızlı destek için yukarıdaki hazır seçeneklerden birini de kullanabilirsiniz.";

export function getQuickActionResponse(trigger: string): string | null {
  const action = QUICK_ACTIONS.find(
    (a) => a.trigger === trigger || a.label === trigger
  );
  return action?.response ?? null;
}

/**
 * Rule-based response engine.
 * Replace `fetchAIResponse` body with OpenAI API call when ready.
 */
export function getLocalResponse(userMessage: string): string {
  const quickResponse = getQuickActionResponse(userMessage);
  if (quickResponse) return quickResponse;

  const normalized = userMessage.toLowerCase().trim();

  for (const item of KEYWORD_RESPONSES) {
    if (item.keywords.some((kw) => normalized.includes(kw))) {
      return item.response;
    }
  }

  return DEFAULT_RESPONSE;
}

export async function fetchAIResponse(
  userMessage: string,
  history: { role: string; content: string }[]
): Promise<string> {
  // Future: OpenAI API integration — pass `history` for context
  void history;

  await new Promise((r) =>
    setTimeout(r, CHAT_CONFIG.typingDelay.min + Math.random() * 400)
  );

  return getLocalResponse(userMessage);
}

export function createWelcomeMessage() {
  return {
    id: "welcome",
    role: "assistant" as const,
    content: CHAT_CONFIG.welcomeMessage,
    timestamp: new Date(),
  };
}
