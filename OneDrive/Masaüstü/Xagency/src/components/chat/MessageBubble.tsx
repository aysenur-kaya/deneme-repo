"use client";

import { motion } from "framer-motion";
import { Bot, User } from "lucide-react";
import { ChatMessage } from "@/types/chat";
import { formatMessageTime } from "@/lib/chat/utils";

interface MessageBubbleProps {
  message: ChatMessage;
  index: number;
}

export function MessageBubble({ message, index }: MessageBubbleProps) {
  const isUser = message.role === "user";

  return (
    <motion.div
      initial={{ opacity: 0, y: 12, scale: 0.96 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{
        duration: 0.35,
        delay: index * 0.04,
        ease: [0.25, 0.4, 0.25, 1],
      }}
      className={`flex items-end gap-2.5 ${isUser ? "flex-row-reverse" : "flex-row"}`}
    >
      <div
        className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-full border ${
          isUser
            ? "border-neon/40 bg-neon/15"
            : "border-neon/30 bg-neon/10"
        }`}
      >
        {isUser ? (
          <User className="h-4 w-4 text-neon" />
        ) : (
          <Bot className="h-4 w-4 text-neon" />
        )}
      </div>

      <div
        className={`max-w-[82%] sm:max-w-[75%] ${
          isUser ? "items-end" : "items-start"
        } flex flex-col`}
      >
        <div
          className={`rounded-2xl px-4 py-2.5 text-sm leading-relaxed whitespace-pre-line ${
            isUser
              ? "rounded-br-md border border-neon/30 bg-neon/10 text-white shadow-neon-sm"
              : "rounded-bl-md border border-white/10 bg-white/5 text-soft-light backdrop-blur-xl"
          }`}
        >
          {message.content}
        </div>
        <span
          className={`mt-1 px-1 text-[10px] text-soft-gray/60 ${
            isUser ? "text-right" : "text-left"
          }`}
        >
          {formatMessageTime(message.timestamp)}
        </span>
      </div>
    </motion.div>
  );
}
