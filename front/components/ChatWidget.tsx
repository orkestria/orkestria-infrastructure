"use client";

import { useState } from "react";
import { MessageCircle, X } from "lucide-react";
import Chatbot from "@/components/Chatbot";

const ChatWidget = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <Chatbot isOpen={isOpen} onClose={() => setIsOpen(false)} />

      {/* Floating button — hidden when chat is open on mobile (chat takes full screen) */}
      <button
        onClick={() => setIsOpen((prev) => !prev)}
        aria-label={isOpen ? "Cerrar chat" : "Abrir chat"}
        className={`fixed bottom-6 right-6 z-[60] w-14 h-14 rounded-full gradient-navy shadow-lg flex items-center justify-center transition-all duration-300 hover:scale-110 active:scale-95 ${
          isOpen ? "sm:flex hidden" : "flex"
        }`}
      >
        {isOpen ? (
          <X className="w-6 h-6 text-white" />
        ) : (
          <MessageCircle className="w-6 h-6 text-white" />
        )}
      </button>
    </>
  );
};

export default ChatWidget;
