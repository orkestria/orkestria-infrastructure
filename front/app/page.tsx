import type { Metadata } from "next";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import Benefits from "@/components/Benefits";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";
import ScrollReveal from "@/components/ScrollReveal";

export const metadata: Metadata = {
  title: "OrkestrIA | Consultoría IA & Automatización de Procesos en Madrid",
  description: "OrkestrIA: consultoría IA, automatización de procesos, chatbots empresariales y desarrollo web en Madrid. Transforma tu empresa con Inteligencia Artificial. Consulta gratuita.",
  alternates: {
    canonical: "https://orkestria.es",
  },
  openGraph: {
    title: "OrkestrIA | Consultoría IA & Automatización de Procesos en Madrid",
    description: "Transforma tu empresa con IA: automatización de procesos, chatbots, análisis de datos y desarrollo web en Madrid. Consulta inicial gratuita.",
    url: "https://orkestria.es",
  },
};

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      <main>
        <Hero />
        <Services />
        <Benefits />
        <CTA />
        <SeoContent />
      </main>
      <Footer />
    </div>
  );
}

function SeoContent() {
  const seoCards = [
    {
      title: "Consultoría IA",
      content: <>Nuestro servicio de <strong className="text-foreground">consultoría IA</strong> comienza con un análisis profundo de tus procesos, identificando oportunidades donde la Inteligencia Artificial genera el mayor impacto. Elaboramos una hoja de ruta personalizada adaptada a tu presupuesto y objetivos de negocio.</>,
    },
    {
      title: "Automatización de Procesos",
      content: <>Diseñamos flujos de trabajo automatizados con <strong className="text-foreground">n8n, Make, Zapier</strong> y desarrollo propio que conectan todos tus sistemas: CRM, ERP, email y APIs externas. Nuestros clientes ahorran entre 15 y 40 horas semanales con una reducción de errores superior al 90%.</>,
    },
    {
      title: "Chatbots y Asistentes Virtuales",
      content: <>Desarrollamos <strong className="text-foreground">chatbots empresariales</strong> basados en GPT-4, Claude y Gemini que se integran en tu web, WhatsApp, Telegram o Instagram. Disponibles 24/7, reducen la carga de soporte hasta en un 70% con atención completamente personalizada.</>,
    },
    {
      title: "Análisis de Datos e Inteligencia de Negocio",
      content: <>Convertimos tus datos en ventajas competitivas. Creamos <strong className="text-foreground">dashboards inteligentes</strong>, modelos predictivos y sistemas de análisis automatizado que te dan visibilidad total de tu negocio en tiempo real.</>,
    },
    {
      title: "Desarrollo Web y Aplicaciones a Medida",
      content: <>Diseñamos y desarrollamos <strong className="text-foreground">páginas web modernas y aplicaciones a medida</strong> con las últimas tecnologías. Cada proyecto está optimizado para velocidad, accesibilidad y SEO.</>,
    },
  ];

  const faqItems = [
    {
      q: "¿Cuánto cuesta implementar Inteligencia Artificial en mi empresa?",
      a: "El coste depende del alcance del proyecto. Ofrecemos soluciones para todos los presupuestos, desde automatizaciones puntuales hasta transformaciones digitales completas. La consulta inicial es siempre gratuita y sin compromiso.",
    },
    {
      q: "¿Necesito conocimientos técnicos para trabajar con OrkestrIA?",
      a: "No. Nos encargamos de toda la parte técnica. Solo necesitas contarnos tus necesidades de negocio y nosotros diseñamos e implementamos la solución. Además, formamos a tu equipo para que puedas gestionar las herramientas de forma autónoma.",
    },
    {
      q: "¿Cuánto tiempo tarda en implementarse una solución de IA?",
      a: "Depende del proyecto. Un chatbot o una automatización sencilla puede estar lista en 1-2 semanas. Proyectos más complejos pueden llevar entre 4 y 12 semanas. Siempre trabajamos con plazos claros y entregas progresivas.",
    },
    {
      q: "¿Trabajáis solo en Madrid o también con empresas de otras ciudades?",
      a: "Aunque estamos ubicados en Madrid, trabajamos con empresas de toda España, Europa y Latinoamérica. La mayoría de nuestros proyectos se realizan de forma completamente remota, con total efectividad.",
    },
  ];

  return (
    <section className="py-20 sm:py-36 lg:py-64 px-6 border-t border-border/30">
      <div className="container mx-auto">
        {/* Section Header */}
        <ScrollReveal className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="font-display text-3xl md:text-5xl font-bold mb-4">
            Servicios de <span className="text-gradient-navy">Inteligencia Artificial</span> para Empresas
          </h2>
          <p className="text-muted-foreground text-lg">
            Soluciones a medida que automatizan procesos, reducen costes y aumentan la productividad de tu empresa.
          </p>
        </ScrollReveal>

        {/* Grid principal */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 text-muted-foreground">
          {seoCards.map((card, i) => (
            <ScrollReveal key={card.title} delay={i * 100} variant="bounce">
              <div className="neu-card p-8 h-full">
                <h3 className="font-display text-xl font-semibold text-foreground mb-3">
                  {card.title}
                </h3>
                <p className="leading-relaxed text-sm">{card.content}</p>
              </div>
            </ScrollReveal>
          ))}

          {/* Por qué OrkestrIA */}
          <ScrollReveal delay={seoCards.length * 100} variant="bounce">
            <div className="neu-card p-8 h-full">
              <h3 className="font-display text-xl font-semibold text-foreground mb-3">
                ¿Por Qué Elegir OrkestrIA?
              </h3>
              <ul className="space-y-2 text-sm list-none pl-0">
                {[
                  "Consulta inicial gratuita sin compromiso",
                  "Soluciones 100% personalizadas",
                  "Tecnología de última generación",
                  "Soporte continuo y formación incluida",
                  "Resultados medibles desde el inicio",
                  "Experiencia multisector",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-2">
                    <span className="text-primary mt-0.5">✓</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </ScrollReveal>
        </div>

        {/* FAQ */}
        <div className="mt-16">
          <ScrollReveal className="mb-10">
            <h2 className="font-display text-2xl md:text-4xl font-bold text-center">
              Preguntas <span className="text-gradient-navy">Frecuentes</span>
            </h2>
          </ScrollReveal>
          <div className="grid md:grid-cols-2 gap-8">
            {faqItems.map(({ q, a }, i) => (
              <ScrollReveal key={q} delay={i * 100} variant="bounce">
                <div className="neu-card p-8 h-full">
                  <h3 className="font-display font-semibold text-foreground mb-2">{q}</h3>
                  <p className="text-sm leading-relaxed text-muted-foreground">{a}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
