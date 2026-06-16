export type MessageRole = "user" | "assistant";

export interface ChatMessage {
  id: string;
  role: MessageRole;
  content: string;
  timestamp: Date;
}

export interface QuickAction {
  id: string;
  label: string;
  emoji: string;
  trigger: string;
  response: string;
}

export interface ChatState {
  messages: ChatMessage[];
  isOpen: boolean;
  isTyping: boolean;
  hasUnread: boolean;
  input: string;
}

export interface SendMessageOptions {
  skipUserMessage?: boolean;
}

export interface ChatAPIResponse {
  message: string;
  success: boolean;
}
