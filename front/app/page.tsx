import type { Metadata } from "next";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import Benefits from "@/components/Benefits";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";

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
  return (
    <section className="py-24 px-6 border-t border-border/30">
      <div className="container mx-auto max-w-5xl">
        <div className="prose prose-lg max-w-none text-muted-foreground space-y-10">

          {/* Bloque principal */}
          <div className="neu-card p-10">
            <h2 className="font-display text-3xl font-bold text-foreground mb-6">
              Servicios de <span className="text-gradient-navy">Inteligencia Artificial</span> para Empresas en Madrid
            </h2>
            <p className="leading-relaxed mb-4">
              <strong className="text-foreground">OrkestrIA</strong> es la agencia de Inteligencia Artificial y consultoría IT
              líder en Madrid, especializada en ayudar a empresas de todos los tamaños a implementar soluciones tecnológicas
              avanzadas que automatizan procesos, reducen costes y aumentan la productividad. Nuestro equipo de expertos en
              IA trabaja directamente contigo para diseñar e implementar soluciones a medida que generan resultados reales
              y medibles desde el primer día.
            </p>
            <p className="leading-relaxed">
              Si buscas una <strong className="text-foreground">consultoría de inteligencia artificial en Madrid</strong> o
              necesitas <strong className="text-foreground">automatizar los procesos de tu empresa</strong>, OrkestrIA es
              tu partner tecnológico ideal. Combinamos experiencia técnica, agilidad de startup y un enfoque 100%
              orientado a resultados para transformar tu negocio con la última tecnología de IA disponible.
            </p>
          </div>

          {/* Consultoría IA */}
          <div className="neu-card p-10">
            <h2 className="font-display text-2xl font-bold text-foreground mb-4">
              Consultoría IA: Estrategia de Inteligencia Artificial para tu Negocio
            </h2>
            <p className="leading-relaxed mb-4">
              Nuestro servicio de <strong className="text-foreground">consultoría IA</strong> comienza con un análisis
              profundo de tus procesos actuales, identificando las oportunidades de mejora donde la Inteligencia Artificial
              puede generar el mayor impacto. Elaboramos una hoja de ruta tecnológica personalizada que se adapta a tu
              presupuesto, tu equipo y tus objetivos de negocio.
            </p>
            <p className="leading-relaxed">
              No vendemos soluciones genéricas. Cada proyecto de <strong className="text-foreground">consultoría de IA
              en Madrid</strong> que realizamos está diseñado específicamente para resolver los desafíos únicos de tu
              empresa, con indicadores de rendimiento claros y un retorno de inversión demostrable. Desde la selección
              de modelos de IA hasta la integración con tus sistemas existentes, acompañamos a tu empresa en cada paso
              de la transformación digital.
            </p>
          </div>

          {/* Automatización */}
          <div className="neu-card p-10">
            <h2 className="font-display text-2xl font-bold text-foreground mb-4">
              Automatización de Procesos Empresariales con IA
            </h2>
            <p className="leading-relaxed mb-4">
              La <strong className="text-foreground">automatización de procesos con Inteligencia Artificial</strong> es
              una de las inversiones con mayor retorno que puede hacer una empresa hoy en día. En OrkestrIA diseñamos e
              implementamos flujos de trabajo automatizados que eliminan tareas repetitivas, reducen el margen de error
              humano y liberan a tu equipo para que se centre en actividades estratégicas de alto valor.
            </p>
            <p className="leading-relaxed mb-4">
              Trabajamos con las mejores herramientas del mercado —incluyendo <strong className="text-foreground">n8n,
              Make (Integromat), Zapier</strong> y desarrollo propio— para crear automatizaciones que conectan todos tus
              sistemas: CRM, ERP, email, bases de datos, APIs externas y más. Desde la automatización de facturación y
              gestión de pedidos hasta el procesamiento automático de documentos e informes, cubrimos todos los casos de uso.
            </p>
            <p className="leading-relaxed">
              Las empresas que han implementado nuestras soluciones de <strong className="text-foreground">automatización
              inteligente</strong> reportan ahorros de entre 15 y 40 horas semanales en tareas administrativas,
              con una reducción de errores superior al 90%.
            </p>
          </div>

          {/* Chatbots */}
          <div className="neu-card p-10">
            <h2 className="font-display text-2xl font-bold text-foreground mb-4">
              Chatbots y Asistentes Virtuales con IA para Empresas
            </h2>
            <p className="leading-relaxed mb-4">
              Los <strong className="text-foreground">chatbots empresariales con Inteligencia Artificial</strong> han
              revolucionado la forma en que las empresas atienden a sus clientes. En OrkestrIA desarrollamos asistentes
              virtuales inteligentes basados en los modelos de lenguaje más avanzados (GPT-4, Claude, Gemini) que
              comprenden el contexto de las conversaciones, responden con precisión y aprenden continuamente.
            </p>
            <p className="leading-relaxed">
              Nuestros <strong className="text-foreground">chatbots para empresas en España</strong> se integran en tu
              web, WhatsApp, Telegram, Instagram o cualquier canal digital donde estén tus clientes. Disponibles las
              24 horas del día, los 7 días de la semana, reducen la carga de tu equipo de soporte hasta en un 70%
              mientras ofrecen una experiencia de atención al cliente excepcional y completamente personalizada
              para tu marca.
            </p>
          </div>

          {/* Análisis de datos + Desarrollo web */}
          <div className="grid md:grid-cols-2 gap-8">
            <div className="neu-card p-8">
              <h2 className="font-display text-xl font-bold text-foreground mb-3">
                Análisis de Datos e Inteligencia de Negocio
              </h2>
              <p className="leading-relaxed text-sm">
                Convertimos tus datos en ventajas competitivas. Creamos <strong className="text-foreground">dashboards
                inteligentes</strong>, modelos predictivos y sistemas de análisis automatizado que te dan visibilidad
                total de tu negocio en tiempo real. Toma decisiones basadas en datos, no en intuición.
              </p>
            </div>
            <div className="neu-card p-8">
              <h2 className="font-display text-xl font-bold text-foreground mb-3">
                Desarrollo Web y Aplicaciones a Medida en Madrid
              </h2>
              <p className="leading-relaxed text-sm">
                Diseñamos y desarrollamos <strong className="text-foreground">páginas web modernas y aplicaciones
                a medida</strong> con las últimas tecnologías. Cada proyecto está optimizado para velocidad,
                accesibilidad y SEO, asegurando la mejor presencia digital para tu negocio.
              </p>
            </div>
          </div>

          {/* Por qué OrkestrIA */}
          <div className="neu-card p-10">
            <h2 className="font-display text-2xl font-bold text-foreground mb-4">
              ¿Por Qué Elegir OrkestrIA como tu Agencia de IA?
            </h2>
            <p className="leading-relaxed mb-4">
              Existen muchas empresas que ofrecen servicios tecnológicos, pero <strong className="text-foreground">OrkestrIA
              se diferencia</strong> por su enfoque completamente personalizado, su agilidad y su compromiso con los
              resultados reales. No somos una gran consultora con capas de gestión y proyectos eternos. Somos un equipo
              especializado y apasionado que trabaja directamente contigo, sin intermediarios, para entregar soluciones
              de IA que funcionan desde el primer día.
            </p>
            <ul className="space-y-2 text-sm list-none pl-0">
              {[
                "Consulta inicial gratuita sin compromiso",
                "Soluciones 100% personalizadas para tu sector y tamaño de empresa",
                "Tecnología de última generación: GPT-4, Claude, Gemini y modelos open-source",
                "Soporte continuo y formación a tu equipo incluida",
                "Resultados medibles y KPIs definidos desde el inicio del proyecto",
                "Experiencia en sectores: retail, legal, salud, educación, logística y más",
              ].map((item) => (
                <li key={item} className="flex items-start gap-2">
                  <span className="text-primary mt-0.5">✓</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* FAQ */}
          <div className="neu-card p-10">
            <h2 className="font-display text-2xl font-bold text-foreground mb-6">
              Preguntas Frecuentes sobre Nuestros Servicios de IA
            </h2>
            <div className="space-y-6">
              {[
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
              ].map(({ q, a }) => (
                <div key={q}>
                  <h3 className="font-semibold text-foreground mb-2">{q}</h3>
                  <p className="text-sm leading-relaxed">{a}</p>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
