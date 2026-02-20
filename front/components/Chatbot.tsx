"use client";

import { useState, useEffect, useRef } from "react";
import { X, Send, Bot, User } from "lucide-react";
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

const API_BASE_URL = process.env.NEXT_PUBLIC_BACKEND_URL || 'http://localhost:3001';

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
      const response = await fetch(`${API_BASE_URL}/api/asistente`, {
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
      {/* Overlay */}
      <button
        type="button"
        aria-label="Cerrar chat"
        className="fixed inset-0 w-full h-full bg-black/50 backdrop-blur-sm z-50 animate-fade-in border-none cursor-default"
        onClick={onClose}
      />

      {/* Chatbot Container */}
      <div className="fixed bottom-0 right-0 sm:bottom-6 sm:right-6 w-full sm:w-96 h-[600px] sm:h-[650px] z-50 animate-slide-in-right">
        <div className="neu-card h-full flex flex-col bg-background rounded-t-2xl sm:rounded-2xl overflow-hidden shadow-2xl">
          {/* Header */}
          <div className="gradient-navy p-4 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="neu-card-sm p-2 bg-white/10">
                <Bot className="w-6 h-6 text-white" />
              </div>
              <div>
                <h3 className="font-display font-bold text-white">OrkestrIA</h3>
                <span className="text-xs text-white/80">Asistente Virtual</span>
              </div>
            </div>
            <button
              onClick={onClose}
              className="p-2 hover:bg-white/10 rounded-lg transition-colors"
            >
              <X className="w-5 h-5 text-white" />
            </button>
          </div>

          {/* Messages */}
          <div className="flex-1 overflow-y-auto p-4 space-y-4">
            {messages.map((message) => (
              <div
                key={message.id}
                className={`flex gap-3 animate-fade-in ${
                  message.sender === "user" ? "flex-row-reverse" : ""
                }`}
              >
                <div
                  className={`neu-card-sm p-2 w-8 h-8 flex items-center justify-center flex-shrink-0 ${
                    message.sender === "bot" ? "bg-primary/10" : "bg-accent/10"
                  }`}
                >
                  {message.sender === "bot" ? (
                    <Bot className="w-4 h-4 text-primary" />
                  ) : (
                    <User className="w-4 h-4 text-accent" />
                  )}
                </div>
                <div
                  className={`neu-card p-3 max-w-[75%] ${
                    message.sender === "user"
                      ? "bg-gradient-navy-light text-white"
                      : ""
                  }`}
                >
                  {message.sender === "bot" ? (
                    <div className="text-sm leading-relaxed prose prose-sm prose-invert max-w-none [&>p]:mb-2 [&>ul]:mt-1 [&>ul]:pl-4 [&>ol]:mt-1 [&>ol]:pl-4 [&>li]:mb-1 [&>strong]:font-semibold">
                      <ReactMarkdown>{message.text}</ReactMarkdown>
                    </div>
                  ) : (
                    <p className="text-sm leading-relaxed">{message.text}</p>
                  )}
                </div>
              </div>
            ))}
            {isLoading && (
              <div className="flex gap-3 animate-fade-in">
                <div className="neu-card-sm p-2 w-8 h-8 flex items-center justify-center flex-shrink-0 bg-primary/10">
                  <Bot className="w-4 h-4 text-primary" />
                </div>
                <div className="neu-card p-3">
                  <span className="flex gap-1">
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
          <div className="p-4 border-t border-border/50">
            <div className="flex gap-2">
              <Input
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                onKeyDown={(e) => e.key === "Enter" && handleSendMessage()}
                placeholder="Escribe tu mensaje..."
                className="flex-1"
                disabled={isLoading}
                maxLength={2000}
              />
              <Button
                onClick={handleSendMessage}
                variant="neuPrimary"
                size="icon"
                className="flex-shrink-0"
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
