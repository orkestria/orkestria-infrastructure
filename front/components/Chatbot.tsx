"use client";

import { useState, useEffect, useRef } from "react";
import { X, Send, User } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import ReactMarkdown from "react-markdown";

interface Message {
  id: number;
  text: string;
  sender: "user" | "bot";
}

interface ChatbotProps {
  isOpen: boolean;
  onClose: () => void;
  initialMessage?: string;
}


const Chatbot = ({ isOpen, onClose, initialMessage }: ChatbotProps) => {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: 1,
      text: "¡Hola! 👋 Soy el asistente de OrkestrIA. ¿En qué puedo ayudarte hoy?",
      sender: "bot",
    },
  ]);
  const [inputValue, setInputValue] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const bottomRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (initialMessage && isOpen) {
      setMessages(prev => [...prev, {
        id: Date.now(),
        text: initialMessage,
        sender: "bot",
      }]);
    }
  }, [initialMessage, isOpen]);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  const handleSendMessage = async () => {
    const text = inputValue.trim();
    if (!text || isLoading) return;

    const userMessage: Message = {
      id: Date.now(),
      text,
      sender: "user",
    };

    setMessages(prev => [...prev, userMessage]);
    setInputValue("");
    setIsLoading(true);

    try {
      const response = await fetch('/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ message: text }),
      });

      if (!response.ok) {
        throw new Error(`HTTP ${response.status}`);
      }
      const data = await response.json();
      const botText = data.status === 'ok' && typeof data.message === 'string'
        ? data.message
        : 'Lo siento, ha ocurrido un error. Inténtalo de nuevo.';

      setMessages(prev => [...prev, {
        id: Date.now(),
        text: botText,
        sender: "bot",
      }]);
    } catch {
      setMessages(prev => [...prev, {
        id: Date.now(),
        text: 'No he podido conectar con el servidor. Inténtalo de nuevo.',
        sender: "bot",
      }]);
    } finally {
      setIsLoading(false);
    }
  };

  if (!isOpen) return null;

  return (
    <>
      {/* Overlay — solo visible en desktop */}
      <button
        type="button"
        aria-label="Cerrar chat"
        className="hidden sm:block fixed inset-0 w-full h-full bg-black/50 backdrop-blur-sm z-50 animate-fade-in border-none cursor-default"
        onClick={onClose}
      />

      {/* Chatbot Container — full screen en móvil, flotante en desktop */}
      <div className="fixed inset-0 sm:inset-auto sm:bottom-6 sm:right-6 sm:w-96 sm:h-[650px] z-50 animate-fade-in">
        <div className="h-full flex flex-col bg-background sm:rounded-2xl overflow-hidden shadow-2xl sm:neu-card">
          {/* Header */}
          <div className="gradient-navy px-4 py-3 flex items-center justify-between flex-shrink-0">
            <div className="flex items-center gap-3">
              <div className="neu-card-sm p-2 bg-white/10">
                <img src="/favicon.svg" alt="OrkestrIA" className="w-5 h-5 brightness-0 invert" />
              </div>
              <div>
                <h3 className="font-display font-bold text-white text-sm">OrkestrIA</h3>
                <span className="text-xs text-white/80">Asistente Virtual</span>
              </div>
            </div>
            <button
              onClick={onClose}
              className="p-2 hover:bg-white/10 rounded-lg transition-colors"
              aria-label="Cerrar"
            >
              <X className="w-5 h-5 text-white" />
            </button>
          </div>

          {/* Messages */}
          <div className="flex-1 overflow-y-auto p-4 space-y-4 overscroll-contain">
            {messages.map((message) => (
              <div
                key={message.id}
                className={`flex gap-2 animate-fade-in ${
                  message.sender === "user" ? "flex-row-reverse" : ""
                }`}
              >
                <div
                  className={`neu-card-sm p-1.5 w-7 h-7 flex items-center justify-center flex-shrink-0 mt-1 ${
                    message.sender === "bot" ? "bg-primary/10" : "bg-accent/10"
                  }`}
                >
                  {message.sender === "bot" ? (
                    <img src="/favicon.svg" alt="OrkestrIA" className="w-3.5 h-3.5" />
                  ) : (
                    <User className="w-3.5 h-3.5 text-accent" />
                  )}
                </div>
                <div
                  className={`neu-card p-3 max-w-[80%] ${
                    message.sender === "user"
                      ? "bg-gradient-navy-light text-white"
                      : ""
                  }`}
                >
                  {message.sender === "bot" ? (
                    <div className="text-sm leading-relaxed prose prose-sm prose-invert max-w-none [&>p]:mb-2 [&>p:last-child]:mb-0 [&>ul]:mt-1 [&>ul]:pl-4 [&>ol]:mt-1 [&>ol]:pl-4 [&>li]:mb-1 [&>strong]:font-semibold">
                      <ReactMarkdown>{message.text}</ReactMarkdown>
                    </div>
                  ) : (
                    <p className="text-sm leading-relaxed">{message.text}</p>
                  )}
                </div>
              </div>
            ))}
            {isLoading && (
              <div className="flex gap-2 animate-fade-in">
                <div className="neu-card-sm p-1.5 w-7 h-7 flex items-center justify-center flex-shrink-0 mt-1 bg-primary/10">
                  <img src="/favicon.svg" alt="OrkestrIA" className="w-3.5 h-3.5" />
                </div>
                <div className="neu-card p-3">
                  <span className="flex gap-1 items-center">
                    <span className="w-2 h-2 bg-primary/50 rounded-full animate-bounce" style={{ animationDelay: '0ms' }} />
                    <span className="w-2 h-2 bg-primary/50 rounded-full animate-bounce" style={{ animationDelay: '150ms' }} />
                    <span className="w-2 h-2 bg-primary/50 rounded-full animate-bounce" style={{ animationDelay: '300ms' }} />
                  </span>
                </div>
              </div>
            )}
            <div ref={bottomRef} />
          </div>

          {/* Input */}
          <div className="p-3 border-t border-border/50 flex-shrink-0 bg-background pb-[calc(0.75rem+env(safe-area-inset-bottom))]">
            <div className="flex gap-2">
              <Input
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                onKeyDown={(e) => e.key === "Enter" && handleSendMessage()}
                placeholder="Escribe tu mensaje..."
                className="flex-1 text-base"
                disabled={isLoading}
                maxLength={2000}
              />
              <Button
                onClick={handleSendMessage}
                variant="neuPrimary"
                size="icon"
                className="flex-shrink-0 w-10 h-10"
                disabled={isLoading}
              >
                <Send className="w-4 h-4" />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Chatbot;
