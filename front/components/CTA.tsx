"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight, Mail, Phone, Bot } from "lucide-react";

const CTA = () => {
  const [showResponse, setShowResponse] = useState(false);
  const [companyInfo, setCompanyInfo] = useState("");
  const [backendResponse, setBackendResponse] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleContinue = async () => {
    if (!companyInfo.trim()) return;
    
    setIsLoading(true);
    try {
      const response = await fetch('http://localhost:3001/api/asistente', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ companyInfo }),
      });
      
      const data = await response.json();
      setBackendResponse(data.message);
      setShowResponse(true);
    } catch (error) {
      console.error('Error al conectar con el backend:', error);
      setBackendResponse('Error al conectar con el servidor.');
      setShowResponse(true);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section id="nosotros" className="py-24 px-6">
      <div className="container mx-auto">
        <div className="neu-card p-10 md:p-16 text-center relative overflow-hidden">
          {/* Background decoration */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
          <div className="absolute bottom-0 left-0 w-48 h-48 bg-accent/5 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2" />

          <div className="relative z-10 max-w-3xl mx-auto">
            <h2 className="font-display text-3xl md:text-5xl font-bold mb-6">
              ¿Listo para <span className="text-gradient-navy">transformar</span> tu empresa?
            </h2>
            
            <p className="text-muted-foreground text-lg mb-10 max-w-xl mx-auto">
              Agenda una consulta gratuita con nuestros expertos y descubre cómo la IA puede impulsar tu negocio.
            </p>

            {/* Formulario */}
            <div className="neu-card p-8 mb-8 animate-fade-in" style={{ animationDelay: '0.2s' }}>
              <div className="mb-6">
                <label htmlFor="company-info" className="block text-lg font-display font-semibold mb-4 text-foreground animate-fade-in" style={{ animationDelay: '0.3s' }}>
                  ¿Qué hace tu empresa? ✨
                </label>
                <textarea
                  id="company-info"
                  value={companyInfo}
                  onChange={(e) => setCompanyInfo(e.target.value)}
                  placeholder="Cuéntanos sobre tu empresa y cómo podemos ayudarte..."
                  className="w-full p-4 rounded-2xl border-2 border-border bg-background focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all duration-300 min-h-[120px] resize-none shadow-neu-sm hover:shadow-neu animate-fade-in"
                  style={{ animationDelay: '0.4s' }}
                />
              </div>
              
              <Button 
                variant="hero" 
                size="xl"
                onClick={handleContinue}
                disabled={isLoading}
                className="w-full sm:w-auto animate-fade-in"
                style={{ animationDelay: '0.5s' }}
              >
                {isLoading ? 'Conectando...' : 'Continuar con el Asistente'}
                <ArrowRight className="w-5 h-5" />
              </Button>
            </div>

            {/* Respuesta del Backend */}
            {showResponse && (
              <div className="neu-card p-6 mb-8 animate-fade-in">
                <div className="flex items-start gap-3">
                  <div className="neu-card-sm p-2 bg-primary/10 flex-shrink-0">
                    <Bot className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-display font-bold text-lg mb-2">Respuesta del Asistente</h3>
                    <p className="text-muted-foreground leading-relaxed">{backendResponse}</p>
                  </div>
                </div>
              </div>
            )}

            {/* Contact Info */}
            <div className="flex flex-col sm:flex-row gap-8 justify-center items-center text-muted-foreground">
              <div className="flex items-center gap-3">
                <div className="neu-card-sm p-2.5">
                  <Mail className="w-5 h-5 text-primary" />
                </div>
                <span className="font-medium">hola@orkestria.com</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="neu-card-sm p-2.5">
                  <Phone className="w-5 h-5 text-primary" />
                </div>
                <span className="font-medium">+34 900 123 456</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;
