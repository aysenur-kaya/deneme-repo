export const CHAT_CONFIG = {
  assistantName: "XTRA AI",
  assistantFullName: "XTRA AI Assistant",
  welcomeMessage: `Merhaba 👋 Ben XTRA AI.

Web tasarımı, SEO, dijital reklam, sosyal medya yönetimi, kurumsal kimlik ve yazılım çözümleri hakkında size yardımcı olabilirim.

Ayrıca web siteniz için ücretsiz ön SEO analizi sunabilirim.

Size nasıl yardımcı olabilirim?`,
  typingDelay: { min: 800, max: 1600 },
  tooltipDelayMs: 5000,
  tooltipDurationMs: 4000,
  tooltipText: "Merhaba 👋 Yardım ister misiniz?",
  storageKeys: {
    tooltipShown: "xtra-ai-tooltip-shown",
  },
} as const;
