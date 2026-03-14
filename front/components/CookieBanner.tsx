"use client";

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Cookie } from "lucide-react";

const CookieBanner = () => {
  const [visible, setVisible] = useState(false);
  const [hiding, setHiding] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem("cookie-consent");
    if (!consent) {
      const timer = setTimeout(() => setVisible(true), 800);
      return () => clearTimeout(timer);
    }
  }, []);

  const dismiss = (accepted: boolean) => {
    localStorage.setItem("cookie-consent", accepted ? "accepted" : "rejected");
    setHiding(true);
    setTimeout(() => setVisible(false), 300);
  };

  if (!visible) return null;

  return (
    <div
      className={`fixed bottom-4 sm:bottom-6 left-2 right-2 sm:left-1/2 sm:right-auto sm:-translate-x-1/2 sm:w-full sm:max-w-2xl z-50 transition-all duration-300 ${
        hiding ? "opacity-0 translate-y-3 pointer-events-none" : "opacity-100 translate-y-0"
      }`}
      style={{ paddingBottom: 'env(safe-area-inset-bottom)' }}
    >
      <div className="neu-card p-4 sm:p-5">
        {/* Mobile: icono + texto en una fila, botones abajo */}
        <div className="flex items-start gap-3 mb-4">
          <div className="neu-pressed w-9 h-9 rounded-xl flex items-center justify-center flex-shrink-0 mt-0.5">
            <Cookie className="w-4 h-4 text-primary" />
          </div>
          <p className="text-sm text-muted-foreground leading-relaxed">
            Usamos cookies propias para mejorar tu experiencia. No compartimos tus datos con terceros.{" "}
            <a
              href="/privacidad"
              className="text-primary underline underline-offset-2 hover:opacity-80 transition-opacity"
            >
              Política de privacidad
            </a>
          </p>
        </div>

        {/* Botones: full width en móvil, auto en desktop */}
        <div className="flex gap-2">
          <Button
            variant="neu"
            size="sm"
            className="flex-1 sm:flex-none"
            onClick={() => dismiss(false)}
          >
            Rechazar
          </Button>
          <Button
            variant="hero"
            size="sm"
            className="flex-1 sm:flex-none"
            onClick={() => dismiss(true)}
          >
            Aceptar todo
          </Button>
        </div>
      </div>
    </div>
  );
};

export default CookieBanner;
