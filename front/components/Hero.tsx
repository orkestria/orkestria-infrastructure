"use client";

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles, SlidersHorizontal, Brain, Clock, TrendingUp } from "lucide-react";

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
    <section className="flex items-start justify-center pt-28 pb-28 sm:pt-32 sm:pb-40 lg:pt-36 lg:pb-48 px-6 relative overflow-hidden">
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
              <a
                href="#contacto"
                onClick={(e) => { e.preventDefault(); document.getElementById("contacto")?.scrollIntoView({ behavior: "smooth", block: "center" }); }}
              >
                Solicitar Consulta
                <ArrowRight className="w-5 h-5" />
              </a>
            </Button>
            <Button variant="neu" size="xl" asChild>
              <a
                href="#servicios"
                onClick={(e) => { e.preventDefault(); document.getElementById("servicios")?.scrollIntoView({ behavior: "smooth", block: "center" }); }}
              >
                Ver Servicios
              </a>
            </Button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 mt-12 md:mt-20">
            {[
              { value: '100%', label: 'Personalizado', icon: SlidersHorizontal, desc: 'Soluciones a medida' },
              { value: 'IA', label: 'Tecnología punta', icon: Brain, desc: 'Modelos de última gen' },
              { value: '24/7', label: 'Soporte', icon: Clock, desc: 'Siempre disponibles' },
              { value: '∞', label: 'Escalabilidad', icon: TrendingUp, desc: 'Crece sin límites' },
            ].map((stat, i) => (
              <div
                key={stat.label}
                className="neu-card-sm p-6 text-center animate-stat-in flex flex-col items-center gap-2"
                style={{ animationDelay: `${0.5 + i * 0.15}s` }}
              >
                <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center mb-1">
                  <stat.icon className="w-5 h-5 text-primary" />
                </div>
                <div className="font-display text-3xl md:text-4xl font-bold text-gradient-navy leading-none">
                  {stat.value}
                </div>
                <div className="font-semibold text-sm text-foreground">{stat.label}</div>
                <div className="text-xs text-muted-foreground">{stat.desc}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
