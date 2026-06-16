"use client";

import { useEffect, useRef } from "react";
import { AnimatePresence } from "framer-motion";
import { ChatMessage } from "@/types/chat";
import { MessageBubble } from "./MessageBubble";
import { TypingIndicator } from "./TypingIndicator";

interface ChatMessagesProps {
  messages: ChatMessage[];
  isTyping: boolean;
}

export function ChatMessages({ messages, isTyping }: ChatMessagesProps) {
  const bottomRef = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, isTyping]);

  return (
    <div
      ref={containerRef}
      className="flex-1 overflow-y-auto overscroll-contain px-3 py-3"
    >
      <div className="flex flex-col gap-3">
        {messages.map((message, index) => (
          <MessageBubble key={message.id} message={message} index={index} />
        ))}

        <AnimatePresence>{isTyping && <TypingIndicator />}</AnimatePresence>
      </div>
      <div ref={bottomRef} />
    </div>
  );
}
