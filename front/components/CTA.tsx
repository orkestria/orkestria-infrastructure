"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight, Mail, Phone } from "lucide-react";
import ReactMarkdown from "react-markdown";
import ScrollReveal from "./ScrollReveal";


const CTA = () => {
  const [showResponse, setShowResponse] = useState(false);
  const [companyInfo, setCompanyInfo] = useState("");
  const [backendResponse, setBackendResponse] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleContinue = async () => {
    const text = companyInfo.trim().slice(0, 2000);
    if (!text) return;

    setIsLoading(true);
    try {
      const response = await fetch('/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ companyInfo: text }),
      });

      if (!response.ok) throw new Error(`HTTP ${response.status}`);

      const data = await response.json();
      const msg = data.status === 'ok' && typeof data.message === 'string'
        ? data.message
        : 'Lo siento, ha ocurrido un error. Inténtalo de nuevo.';
      setBackendResponse(msg);
      setShowResponse(true);
    } catch {
      setBackendResponse('No he podido conectar con el servidor. Inténtalo de nuevo.');
      setShowResponse(true);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section id="contacto" className="py-16 sm:py-28 lg:py-52 xl:py-64 px-3 sm:px-6">
      <div className="container mx-auto">
        <ScrollReveal>
        <div className="neu-card p-4 sm:p-10 md:p-16 text-center relative overflow-hidden">
          {/* Background decoration */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
          <div className="absolute bottom-0 left-0 w-48 h-48 bg-accent/5 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2" />

          <div className="relative z-10 max-w-3xl mx-auto">
            <h2 className="font-display text-2xl sm:text-3xl md:text-5xl font-bold mb-4 sm:mb-6">
              ¿Listo para <span className="text-gradient-navy">transformar</span> tu empresa?
            </h2>

            <p className="text-muted-foreground text-base sm:text-lg mb-8 sm:mb-10 max-w-xl mx-auto">
              Agenda una consulta gratuita con nuestros expertos y descubre cómo la IA puede impulsar tu negocio.
            </p>

            {/* Formulario */}
            <div className="neu-card p-4 sm:p-8 mb-6 sm:mb-8 animate-fade-in" style={{ animationDelay: '0.2s' }}>
              <div className="mb-4 sm:mb-6">
                <label htmlFor="company-info" className="block text-base sm:text-lg font-display font-semibold mb-3 sm:mb-4 text-foreground animate-fade-in" style={{ animationDelay: '0.3s' }}>
                  ¿Qué hace tu empresa? ✨
                </label>
                <textarea
                  id="company-info"
                  value={companyInfo}
                  onChange={(e) => setCompanyInfo(e.target.value)}
                  placeholder="Cuéntanos sobre tu empresa y cómo podemos ayudarte..."
                  className="w-full p-3 sm:p-4 rounded-2xl border-2 border-border bg-background focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all duration-300 min-h-[100px] sm:min-h-[120px] resize-none shadow-neu-sm hover:shadow-neu animate-fade-in text-base"
                  style={{ animationDelay: '0.4s' }}
                  maxLength={2000}
                />
              </div>

              <Button
                variant="hero"
                size="lg"
                onClick={handleContinue}
                disabled={isLoading}
                className="w-full animate-fade-in"
                style={{ animationDelay: '0.5s' }}
              >
                {isLoading ? 'Conectando...' : 'Continuar con el Asistente'}
                <ArrowRight className="w-4 h-4 flex-shrink-0" />
              </Button>
            </div>

            {/* Respuesta del Backend */}
            {showResponse && (
              <div className="neu-card p-4 sm:p-6 mb-6 sm:mb-8 animate-fade-in">
                <div className="flex items-start gap-3">
                  <div className="neu-card-sm p-2 bg-primary/10 flex-shrink-0">
                    <img src="/favicon.svg" alt="OrkestrIA" className="w-5 h-5" />
                  </div>
                  <div className="text-left min-w-0">
                    <h3 className="font-display font-bold text-base sm:text-lg mb-2">Respuesta del Asistente</h3>
                    <div className="text-muted-foreground leading-relaxed prose prose-sm max-w-none [&>p]:mb-2 [&>ul]:mt-1 [&>ul]:pl-4 [&>ol]:mt-1 [&>ol]:pl-4 [&>li]:mb-1 [&>strong]:font-semibold [&>strong]:text-foreground">
                      <ReactMarkdown>{backendResponse}</ReactMarkdown>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* Contact Info */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-muted-foreground">
              <div className="flex items-center justify-center gap-2 neu-card-sm px-3 py-2.5">
                <Mail className="w-4 h-4 text-primary flex-shrink-0" />
                <span className="font-medium text-sm truncate">orkestria.contacto@gmail.com</span>
              </div>
              <div className="flex items-center justify-center gap-2 neu-card-sm px-3 py-2.5">
                <Phone className="w-4 h-4 text-primary flex-shrink-0" />
                <span className="font-medium text-sm">+34 629015344</span>
              </div>
              <a
                href="https://www.instagram.com/orkestria.tech?igsh=cnZsendqbm1waWUx&utm_source=qr"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 neu-card-sm px-3 py-2.5 hover:-translate-y-1 transition-all duration-300"
              >
                <img src="/icons/instagram.png" alt="Instagram" className="w-4 h-4 object-contain flex-shrink-0" />
                <span className="font-medium text-sm">@orkestria.tech</span>
              </a>
            </div>
          </div>
        </div>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default CTA;
