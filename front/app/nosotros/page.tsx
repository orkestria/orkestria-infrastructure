import type { Metadata } from "next";
import Footer from "@/components/Footer";
import { Users, Target, Award, Lightbulb } from "lucide-react";

export const metadata: Metadata = {
  title: "Sobre OrkestrIA | Agencia de IA y Consultoría IT en Madrid",
  description: "Conoce OrkestrIA: startup tecnológica de Madrid especializada en Inteligencia Artificial. Automatización, chatbots y consultoría IA para empresas en España y Europa.",
  keywords: [
    "orkestria empresa",
    "agencia IA Madrid",
    "quiénes somos OrkestrIA",
    "startup inteligencia artificial Madrid",
    "equipo consultoría IA España",
  ],
  alternates: {
    canonical: "https://orkestria.es/nosotros",
  },
  openGraph: {
    title: "Sobre OrkestrIA | Agencia de IA y Consultoría IT en Madrid",
    description: "Conoce OrkestrIA: startup tecnológica de Madrid especializada en IA. Automatización, chatbots y consultoría para empresas en España y Europa.",
    url: "https://orkestria.es/nosotros",
  },
};

export default function Nosotros() {
  return (
    <div className="min-h-screen bg-background">
      <main className="pt-24 pb-16">
        {/* Hero Section */}
        <section className="px-6 py-16 relative overflow-hidden">
          <div className="absolute inset-0 overflow-hidden">
            <div className="absolute top-20 right-10 w-72 h-72 bg-primary/5 rounded-full blur-3xl animate-float" />
            <div className="absolute bottom-20 left-10 w-96 h-96 bg-accent/5 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }} />
          </div>

          <div className="container mx-auto relative z-10">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="font-display text-4xl md:text-6xl font-bold mb-6 animate-fade-in">
                Sobre <span className="text-gradient-navy">OrkestrIA</span>
              </h1>
              <p className="text-xl text-muted-foreground mb-8 animate-fade-in" style={{ animationDelay: '0.1s' }}>
                Transformamos empresas con soluciones de IA desde el corazón de Madrid
              </p>
            </div>
          </div>
        </section>

        {/* Historia */}
        <section className="px-6 py-16">
          <div className="container mx-auto max-w-4xl">
            <div className="neu-card p-10 animate-fade-in" style={{ animationDelay: '0.2s' }}>
              <h2 className="font-display text-3xl font-bold mb-6 text-gradient-navy">
                Nuestra Historia
              </h2>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  OrkestrIA es una startup tecnológica nacida en Madrid con una misión clara: hacer que la Inteligencia 
                  Artificial sea accesible y práctica para empresas de todos los tamaños. Combinamos agilidad, 
                  tecnología de vanguardia y un enfoque personalizado en cada proyecto.
                </p>
                <p>
                  Trabajamos directamente contigo, sin intermediarios ni capas de gestión innecesarias. 
                  Cada solución que desarrollamos está diseñada específicamente para resolver tus desafíos únicos, 
                  con resultados medibles y un retorno de inversión claro.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Valores */}
        <section className="px-6 py-16">
          <div className="container mx-auto">
            <h2 className="font-display text-3xl md:text-4xl font-bold text-center mb-12">
              Nuestros <span className="text-gradient-navy">Valores</span>
            </h2>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
              {[
                {
                  icon: Target,
                  title: "Enfoque en Resultados",
                  description: "Medimos nuestro éxito por el impacto real en tu negocio",
                },
                {
                  icon: Users,
                  title: "Colaboración",
                  description: "Trabajamos codo a codo contigo en cada proyecto",
                },
                {
                  icon: Lightbulb,
                  title: "Innovación",
                  description: "Implementamos las últimas tecnologías de IA",
                },
                {
                  icon: Award,
                  title: "Excelencia",
                  description: "Buscamos la máxima calidad en nuestras soluciones",
                },
              ].map((value) => (
                <div
                  key={value.title}
                  className="neu-card p-6 text-center animate-fade-in hover:-translate-y-2 transition-all duration-300"
                >
                  <div className="neu-pressed w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <value.icon className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="font-display font-semibold mb-2">{value.title}</h3>
                  <p className="text-sm text-muted-foreground">{value.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Equipo .*/}
        <section className="px-6 py-16 relative">
          <div className="absolute inset-0 bg-gradient-to-b from-background via-secondary/30 to-background" />
          
          <div className="container mx-auto relative z-10">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="font-display text-3xl md:text-4xl font-bold mb-6 animate-fade-in">
                Equipo <span className="text-gradient-navy">Especializado</span>
              </h2>
              <div className="neu-card p-10 animate-fade-in" style={{ animationDelay: '0.2s' }}>
                <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                  Somos una startup tecnológica ágil y enfocada, donde cada miembro del equipo es un experto 
                  en su área. Trabajamos con las últimas tecnologías de IA para entregar resultados excepcionales, 
                  sin la burocracia de las grandes corporaciones.
                </p>
                <div className="grid md:grid-cols-3 gap-6 text-center">
                  {[
                    { number: "100%", label: "Soluciones Personalizadas" },
                    { number: "IA", label: "Última Generación" },
                    { number: "0%", label: "Burocracia" },
                  ].map((stat) => (
                    <div
                      key={stat.label}
                      className="stat-card-neu relative p-6 animate-fade-in group cursor-pointer overflow-hidden rounded-2xl transition-all duration-700 hover:scale-125 hover:shadow-2xl"
                    >
                      <div className="relative z-10">
                        <div className="font-display text-4xl font-bold mb-2 transition-all duration-700 group-hover:scale-125 text-gradient-navy group-hover:glow-blue">
                          {stat.number}
                        </div>
                        <div className="text-sm font-medium transition-all duration-700 text-muted-foreground group-hover:text-primary group-hover:font-semibold group-hover:scale-110 group-hover:text-base">
                          {stat.label}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Ubicación */}
        <section className="px-6 py-16">
          <div className="container mx-auto max-w-4xl">
            <div className="neu-card p-10 text-center animate-fade-in">
              <h2 className="font-display text-3xl font-bold mb-4 text-gradient-navy">
                Ubicados en Madrid
              </h2>
              <p className="text-muted-foreground text-lg mb-6">
                Desde la capital de España, trabajamos con empresas de toda Europa y Latinoamérica, 
                ofreciendo soluciones de IA de clase mundial con el calor y la cercanía que nos caracteriza.
              </p>
              <div className="flex flex-wrap gap-4 justify-center text-sm text-muted-foreground">
                <span className="neu-card-sm px-4 py-2">🇪🇸 Madrid, España</span>
                <span className="neu-card-sm px-4 py-2">📧 orkestria.contacto@gmail.com</span>
                <span className="neu-card-sm px-4 py-2">📞 +34 600 60 14 62</span>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
