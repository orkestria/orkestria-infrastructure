"use client";

import { Bot, MessageCircle } from "lucide-react";

const Footer = () => {
  return (
    <footer className="py-12 px-6 border-t border-border/50">
      <div className="container mx-auto">
        <div className="grid md:grid-cols-3 gap-10 mb-10">
          {/* Brand */}
          <div className="md:col-span-2">
            <div className="flex items-center gap-3 mb-4">
              <div className="neu-card-sm p-2">
                <Bot className="w-5 h-5 text-primary" />
              </div>
              <span className="font-display text-xl font-bold text-gradient-navy">
                OrkestrIA
              </span>
            </div>
            <p className="text-muted-foreground text-sm max-w-sm leading-relaxed">
              Consultoría IT y automatización con Inteligencia Artificial. 
              Transformamos empresas con soluciones tecnológicas inteligentes.
            </p>
          </div>

          {/* Social */}
          <div>
            <h4 className="font-display font-semibold mb-4">Síguenos</h4>
            <div className="flex gap-3">
              <a
                href="https://www.linkedin.com/in/orkestria-undefined-99aa6b3a9/"
                target="_blank"
                rel="noopener noreferrer"
                className="neu-card-sm p-2.5 hover:-translate-y-1 transition-all duration-300"
              >
                <img src="/icons/linkedin.png" alt="LinkedIn" className="w-5 h-5 object-contain" />
              </a>
              <a
                href="https://wa.me/34629015344"
                target="_blank"
                rel="noopener noreferrer"
                className="neu-card-sm p-2.5 hover:-translate-y-1 transition-all duration-300"
              >
                <MessageCircle className="w-5 h-5 text-muted-foreground hover:text-primary transition-colors" />
              </a>
              <a
                href="https://www.instagram.com/orkestria.tech?igsh=cnZsendqbm1waWUx&utm_source=qr"
                target="_blank"
                rel="noopener noreferrer"
                className="neu-card-sm p-2.5 hover:-translate-y-1 transition-all duration-300"
              >
                <img src="/icons/instagram.png" alt="Instagram" className="w-5 h-5 object-contain" />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="pt-8 border-t border-border/50 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-muted-foreground">
          <p>© 2026 OrkestrIA. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
