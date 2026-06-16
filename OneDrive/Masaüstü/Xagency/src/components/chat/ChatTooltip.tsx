"use client";

import { motion } from "framer-motion";
import { X } from "lucide-react";
import { CHAT_CONFIG } from "@/lib/chat/config";

interface ChatTooltipProps {
  onDismiss: () => void;
}

export function ChatTooltip({ onDismiss }: ChatTooltipProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 6, scale: 0.96 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      exit={{ opacity: 0, y: 4, scale: 0.96 }}
      transition={{ duration: 0.25, ease: [0.25, 0.4, 0.25, 1] }}
      className="absolute bottom-full right-0 mb-2.5 w-max max-w-[220px]"
    >
      <div className="relative rounded-xl border border-white/10 bg-dark-200/95 px-3.5 py-2.5 shadow-lg backdrop-blur-xl">
        <p className="pr-5 text-xs leading-snug text-soft-light">
          {CHAT_CONFIG.tooltipText}
        </p>
        <button
          onClick={onDismiss}
          className="absolute right-1.5 top-1.5 flex h-5 w-5 items-center justify-center rounded text-soft-gray/60 transition-colors hover:text-white"
          aria-label="Kapat"
        >
          <X className="h-3 w-3" />
        </button>
        {/* Arrow */}
        <div className="absolute -bottom-1.5 right-5 h-3 w-3 rotate-45 border-b border-r border-white/10 bg-dark-200/95" />
      </div>
    </motion.div>
  );
}
