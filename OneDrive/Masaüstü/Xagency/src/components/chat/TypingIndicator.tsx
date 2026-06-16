"use client";

import { motion } from "framer-motion";
import { Bot } from "lucide-react";

export function TypingIndicator() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -5 }}
      className="flex items-end gap-2.5"
    >
      <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-neon/30 bg-neon/10">
        <Bot className="h-4 w-4 text-neon" />
      </div>

      <div className="rounded-2xl rounded-bl-md border border-white/10 bg-white/5 px-4 py-3 backdrop-blur-xl">
        <div className="flex items-center gap-1.5">
          {[0, 1, 2].map((i) => (
            <motion.span
              key={i}
              className="h-2 w-2 rounded-full bg-neon/70"
              animate={{ y: [0, -5, 0], opacity: [0.4, 1, 0.4] }}
              transition={{
                duration: 0.8,
                repeat: Infinity,
                delay: i * 0.15,
                ease: "easeInOut",
              }}
            />
          ))}
        </div>
      </div>
    </motion.div>
  );
}
