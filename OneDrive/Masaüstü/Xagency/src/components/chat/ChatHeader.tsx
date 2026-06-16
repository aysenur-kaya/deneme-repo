"use client";

import { Bot, X } from "lucide-react";
import { CHAT_CONFIG } from "@/lib/chat/config";

interface ChatHeaderProps {
  onClose: () => void;
}

export function ChatHeader({ onClose }: ChatHeaderProps) {
  return (
    <div className="flex shrink-0 items-center justify-between border-b border-white/10 px-3.5 py-3 sm:px-4">
      <div className="flex items-center gap-2.5">
        <div className="relative flex h-8 w-8 items-center justify-center rounded-lg border border-white/10 bg-white/[0.04]">
          <Bot className="h-4 w-4 text-neon/90" />
          <span className="absolute -bottom-0.5 -right-0.5 h-2 w-2 rounded-full border border-dark-200 bg-neon" />
        </div>

        <div>
          <h3 className="text-sm font-semibold text-white">
            {CHAT_CONFIG.assistantName}
          </h3>
          <div className="flex items-center gap-1">
            <span className="h-1 w-1 rounded-full bg-neon/80" />
            <span className="text-[10px] text-soft-gray">Online</span>
          </div>
        </div>
      </div>

      <button
        onClick={onClose}
        className="flex h-8 w-8 items-center justify-center rounded-lg border border-white/10 text-soft-gray transition-colors hover:border-white/20 hover:text-white"
        aria-label="Sohbeti kapat"
      >
        <X className="h-4 w-4" />
      </button>
    </div>
  );
}
