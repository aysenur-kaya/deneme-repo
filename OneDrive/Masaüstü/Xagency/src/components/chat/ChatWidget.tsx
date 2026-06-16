"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ChatMessage } from "@/types/chat";
import { CHAT_CONFIG } from "@/lib/chat/config";
import { createWelcomeMessage, fetchAIResponse } from "@/lib/chat/responses";
import { generateMessageId, getTypingDelay, toAPIHistory } from "@/lib/chat/utils";
import { ChatButton } from "./ChatButton";
import { ChatHeader } from "./ChatHeader";
import { ChatMessages } from "./ChatMessages";
import { ChatInput } from "./ChatInput";
import { QuickActions } from "./QuickActions";
import { ChatTooltip } from "./ChatTooltip";

export function ChatWidget() {
  const [isOpen, setIsOpen] = useState(false);
  const [showTooltip, setShowTooltip] = useState(false);
  const [isTyping, setIsTyping] = useState(false);
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const [initialized, setInitialized] = useState(false);
  const tooltipTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const tooltipHideRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const initWelcome = useCallback(() => {
    if (initialized) return;
    setMessages([createWelcomeMessage()]);
    setInitialized(true);
  }, [initialized]);

  const sendAssistantMessage = useCallback(
    async (userText: string, history: ChatMessage[]) => {
      setIsTyping(true);
      await new Promise((r) => setTimeout(r, getTypingDelay()));

      const response = await fetchAIResponse(userText, toAPIHistory(history));

      setMessages((prev) => [
        ...prev,
        {
          id: generateMessageId(),
          role: "assistant",
          content: response,
          timestamp: new Date(),
        },
      ]);
      setIsTyping(false);
    },
    []
  );

  const handleSend = useCallback(
    async (text?: string) => {
      const content = (text ?? input).trim();
      if (!content || isTyping) return;

      const userMessage: ChatMessage = {
        id: generateMessageId(),
        role: "user",
        content,
        timestamp: new Date(),
      };

      let newHistory: ChatMessage[] = [];

      setMessages((prev) => {
        const base = prev.length === 0 ? [createWelcomeMessage()] : prev;
        if (prev.length === 0) setInitialized(true);
        newHistory = [...base, userMessage];
        return newHistory;
      });

      setInput("");
      await sendAssistantMessage(content, newHistory);
    },
    [input, isTyping, sendAssistantMessage]
  );

  const dismissTooltip = useCallback(() => {
    setShowTooltip(false);
    if (tooltipHideRef.current) clearTimeout(tooltipHideRef.current);
  }, []);

  const handleOpen = useCallback(() => {
    initWelcome();
    setIsOpen(true);
    dismissTooltip();
  }, [initWelcome, dismissTooltip]);

  const handleClose = useCallback(() => {
    setIsOpen(false);
  }, []);

  const handleToggle = useCallback(() => {
    if (isOpen) handleClose();
    else handleOpen();
  }, [isOpen, handleOpen, handleClose]);

  const handleQuickAction = useCallback(
    (trigger: string) => {
      handleSend(trigger);
    },
    [handleSend]
  );

  // 5 saniye sonra mini tooltip — chat penceresi açılmaz
  useEffect(() => {
    if (typeof window === "undefined") return;

    const tooltipShown = sessionStorage.getItem(
      CHAT_CONFIG.storageKeys.tooltipShown
    );
    if (tooltipShown) return;

    tooltipTimerRef.current = setTimeout(() => {
      sessionStorage.setItem(CHAT_CONFIG.storageKeys.tooltipShown, "true");
      setShowTooltip(true);

      tooltipHideRef.current = setTimeout(() => {
        setShowTooltip(false);
      }, CHAT_CONFIG.tooltipDurationMs);
    }, CHAT_CONFIG.tooltipDelayMs);

    return () => {
      if (tooltipTimerRef.current) clearTimeout(tooltipTimerRef.current);
      if (tooltipHideRef.current) clearTimeout(tooltipHideRef.current);
    };
  }, []);

  return (
    <>
      {/* Mobil backdrop — hafif, hero okunabilir kalsın */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            onClick={handleClose}
            className="fixed inset-0 z-[55] bg-black/30 backdrop-blur-[2px] sm:hidden"
            aria-hidden
          />
        )}
      </AnimatePresence>

      <div className="fixed bottom-4 right-4 z-[60] sm:bottom-6 sm:right-6">
        {/* Desktop: panel butonun üstünde */}
        <div className="hidden flex-col items-end sm:flex">
          <AnimatePresence>
            {isOpen && (
              <motion.div
                key="chat-panel-desktop"
                initial={{ opacity: 0, scale: 0.92, y: 12 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.92, y: 12 }}
                transition={{ duration: 0.28, ease: [0.25, 0.4, 0.25, 1] }}
                style={{
                  transformOrigin: "bottom right",
                  maxHeight: "560px",
                  height: "min(560px, calc(100vh - 140px))",
                }}
                className="mb-3 flex w-[380px] max-w-[380px] flex-col overflow-hidden rounded-2xl border border-white/10 bg-dark-200/95 shadow-xl backdrop-blur-xl"
              >
                <ChatPanelContent
                  messages={messages}
                  isTyping={isTyping}
                  input={input}
                  onInputChange={setInput}
                  onSend={() => handleSend()}
                  onClose={handleClose}
                  onQuickAction={handleQuickAction}
                />
              </motion.div>
            )}
          </AnimatePresence>

          <div className="relative">
            <AnimatePresence>
              {showTooltip && !isOpen && (
                <ChatTooltip onDismiss={dismissTooltip} />
              )}
            </AnimatePresence>
            <ChatButton
              isOpen={isOpen}
              showHint={showTooltip}
              onClick={handleToggle}
            />
          </div>
        </div>

        {/* Mobil: tooltip + buton */}
        <div className="relative sm:hidden">
          <AnimatePresence>
            {showTooltip && !isOpen && (
              <ChatTooltip onDismiss={dismissTooltip} />
            )}
          </AnimatePresence>

          {!isOpen && (
            <ChatButton
              isOpen={false}
              showHint={showTooltip}
              onClick={handleToggle}
            />
          )}
        </div>

        <AnimatePresence>
          {isOpen && (
            <motion.div
              key="chat-panel-mobile"
              initial={{ opacity: 0, y: "100%" }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: "100%" }}
              transition={{ duration: 0.32, ease: [0.25, 0.4, 0.25, 1] }}
              className="fixed inset-x-0 bottom-0 z-[60] flex flex-col overflow-hidden rounded-t-2xl border border-white/10 border-b-0 bg-dark-200/98 shadow-2xl backdrop-blur-xl sm:hidden"
              style={{ maxHeight: "75vh" }}
            >
              <ChatPanelContent
                messages={messages}
                isTyping={isTyping}
                input={input}
                onInputChange={setInput}
                onSend={() => handleSend()}
                onClose={handleClose}
                onQuickAction={handleQuickAction}
              />
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </>
  );
}

interface ChatPanelContentProps {
  messages: ChatMessage[];
  isTyping: boolean;
  input: string;
  onInputChange: (v: string) => void;
  onSend: () => void;
  onClose: () => void;
  onQuickAction: (trigger: string) => void;
}

function ChatPanelContent({
  messages,
  isTyping,
  input,
  onInputChange,
  onSend,
  onClose,
  onQuickAction,
}: ChatPanelContentProps) {
  return (
    <>
      <ChatHeader onClose={onClose} />
      <ChatMessages messages={messages} isTyping={isTyping} />
      <QuickActions onSelect={onQuickAction} disabled={isTyping} />
      <ChatInput
        value={input}
        onChange={onInputChange}
        onSend={onSend}
        disabled={isTyping}
      />
    </>
  );
}
