"use client";

import { QUICK_ACTIONS } from "@/lib/chat/responses";

interface QuickActionsProps {
  onSelect: (trigger: string) => void;
  disabled?: boolean;
}

export function QuickActions({ onSelect, disabled }: QuickActionsProps) {
  return (
    <div className="shrink-0 border-t border-white/5 px-3 py-2">
      <p className="mb-1.5 px-0.5 text-[10px] font-medium uppercase tracking-wider text-soft-gray/60">
        Hızlı İşlemler
      </p>
      {/* Yatay scroll — dikey alan tasarrufu */}
      <div className="flex gap-1.5 overflow-x-auto pb-0.5 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
        {QUICK_ACTIONS.map((action) => (
          <button
            key={action.id}
            onClick={() => onSelect(action.trigger)}
            disabled={disabled}
            className="inline-flex shrink-0 items-center gap-1 rounded-lg border border-white/10 bg-white/[0.03] px-2.5 py-1.5 text-[11px] font-medium text-soft-gray transition-colors hover:border-neon/20 hover:text-neon/90 disabled:cursor-not-allowed disabled:opacity-50"
          >
            <span className="text-xs">{action.emoji}</span>
            <span className="whitespace-nowrap">{action.label}</span>
          </button>
        ))}
      </div>
    </div>
  );
}
