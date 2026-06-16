import { ChatMessage } from "@/types/chat";
import { CHAT_CONFIG } from "./config";

export function generateMessageId(): string {
  return `msg-${Date.now()}-${Math.random().toString(36).slice(2, 9)}`;
}

export function getTypingDelay(): number {
  const { min, max } = CHAT_CONFIG.typingDelay;
  return min + Math.random() * (max - min);
}

export function formatMessageTime(date: Date): string {
  return date.toLocaleTimeString("tr-TR", {
    hour: "2-digit",
    minute: "2-digit",
  });
}

export function toAPIHistory(messages: ChatMessage[]) {
  return messages
    .filter((m) => m.id !== "welcome")
    .map((m) => ({
      role: m.role,
      content: m.content,
    }));
}
