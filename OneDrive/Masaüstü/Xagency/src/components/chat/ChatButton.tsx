"use client";

import { motion } from "framer-motion";
import { MessageCircle, X } from "lucide-react";

interface ChatButtonProps {
  isOpen: boolean;
  showHint?: boolean;
  onClick: () => void;
}

export function ChatButton({ isOpen, showHint, onClick }: ChatButtonProps) {
  return (
    <motion.button
      onClick={onClick}
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ type: "spring", stiffness: 260, damping: 22, delay: 0.8 }}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className={`group relative flex h-12 w-12 items-center justify-center rounded-full border border-white/15 bg-dark-200/90 shadow-lg backdrop-blur-sm transition-shadow hover:border-neon/30 hover:shadow-[0_4px_20px_rgba(57,255,20,0.15)] sm:h-14 sm:w-14 ${
        showHint ? "ring-2 ring-neon/20" : ""
      }`}
      aria-label={isOpen ? "Sohbeti kapat" : "XTRA AI ile sohbet et"}
    >
      <motion.div
        animate={{ rotate: isOpen ? 90 : 0 }}
        transition={{ duration: 0.25 }}
        className="relative z-10"
      >
        {isOpen ? (
          <X className="h-5 w-5 text-neon sm:h-6 sm:w-6" />
        ) : (
          <MessageCircle className="h-5 w-5 text-neon/90 sm:h-6 sm:w-6" />
        )}
      </motion.div>
    </motion.button>
  );
}
