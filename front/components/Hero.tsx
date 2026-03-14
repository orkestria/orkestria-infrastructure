"use client";

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles } from "lucide-react";

const TYPED_TEXT = "Inteligencia Artificial";

const Hero = () => {
  const [displayed, setDisplayed] = useState("");
  const [done, setDone] = useState(false);

  useEffect(() => {
    let i = 0;
    const interval = setInterval(() => {
      i++;
      setDisplayed(TYPED_TEXT.slice(0, i));
      if (i === TYPED_TEXT.length) {
        clearInterval(interval);
        setDone(true);
      }
    }, 60);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="flex items-start justify-center pt-32 pb-52 px-6 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 right-10 w-96 h-96 bg-primary/5 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-20 left-10 w-[30rem] h-[30rem] bg-accent/5 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }} />
      </div>

      <div className="container mx-auto relative z-10">
        <div className="max-w-5xl mx-auto text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 neu-card-sm px-5 py-2.5 mb-10 animate-fade-in">
            <Sparkles className="w-5 h-5 text-accent" />
            <span className="text-base font-medium text-muted-foreground">
              Consultoría IT & Automatización con IA
            </span>
          </div>

          {/* Main Heading */}
          <h1 className="font-display text-5xl md:text-7xl lg:text-8xl font-bold mb-8 animate-fade-in" style={{ animationDelay: '0.1s' }}>
            Transforma tu empresa con{' '}
            <span className="text-gradient-navy">
              {displayed}
              {!done && (
                <span className="inline-block w-[3px] h-[0.85em] bg-current align-middle ml-1 animate-pulse" />
              )}
            </span>
          </h1>

          {/* Subtitle */}
          <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto mb-12 animate-fade-in" style={{ animationDelay: '0.2s' }}>
            Orquestamos soluciones tecnológicas inteligentes para automatizar procesos,
            optimizar operaciones y potenciar el crecimiento de tu negocio.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in" style={{ animationDelay: '0.3s' }}>
            <Button variant="hero" size="xl" asChild>
              <a href="#nosotros">
                Solicitar Consulta
                <ArrowRight className="w-5 h-5" />
              </a>
            </Button>
            <Button variant="neu" size="xl" asChild>
              <a href="#servicios">
                Ver Servicios
              </a>
            </Button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-20">
            {[
              { value: '100%', label: 'Personalizado' },
              { value: 'IA', label: 'Tecnología punta' },
              { value: '24/7', label: 'Soporte' },
              { value: '∞', label: 'Escalabilidad' },
            ].map((stat, i) => (
              <div
                key={stat.label}
                className="neu-card-sm p-7 text-center animate-stat-in"
                style={{ animationDelay: `${0.5 + i * 0.15}s` }}
              >
                <div className="font-display text-4xl md:text-5xl font-bold text-gradient-navy mb-1">
                  {stat.value}
                </div>
                <div className="text-sm text-muted-foreground font-medium">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
