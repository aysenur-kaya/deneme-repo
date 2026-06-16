"use client";

import { FormEvent, KeyboardEvent } from "react";
import { Send } from "lucide-react";

interface ChatInputProps {
  value: string;
  onChange: (value: string) => void;
  onSend: () => void;
  disabled?: boolean;
}

export function ChatInput({ value, onChange, onSend, disabled }: ChatInputProps) {
  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (value.trim() && !disabled) onSend();
  };

  const handleKeyDown = (e: KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      if (value.trim() && !disabled) onSend();
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="shrink-0 border-t border-white/10 bg-dark-300/30 px-3 py-2.5"
    >
      <div className="flex items-center gap-2">
        <textarea
          value={value}
          onChange={(e) => onChange(e.target.value)}
          onKeyDown={handleKeyDown}
          placeholder="Mesajınızı yazın..."
          disabled={disabled}
          rows={1}
          className="max-h-16 min-h-[36px] flex-1 resize-none rounded-lg border border-white/10 bg-dark-200/60 px-3 py-2 text-sm text-white placeholder:text-soft-gray/40 transition-colors focus:border-neon/30 focus:outline-none disabled:opacity-50"
        />

        <button
          type="submit"
          disabled={!value.trim() || disabled}
          className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-neon text-dark transition-opacity hover:opacity-90 disabled:cursor-not-allowed disabled:opacity-40"
          aria-label="Mesaj gönder"
        >
          <Send className="h-3.5 w-3.5" />
        </button>
      </div>
    </form>
  );
}
