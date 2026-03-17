import type { Metadata } from "next";
import { Inter, Space_Grotesk } from "next/font/google";
import "./globals.css";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import Header from "@/components/Header";
import PageTransition from "@/components/PageTransition";
import CookieBanner from "@/components/CookieBanner";

const inter = Inter({ 
  subsets: ["latin"],
  variable: "--font-inter",
});

const spaceGrotesk = Space_Grotesk({ 
  subsets: ["latin"],
  variable: "--font-space-grotesk",
});

const BASE_URL = 'https://orkestria.es';

export const metadata: Metadata = {
  metadataBase: new URL(BASE_URL),
  title: {
    default: "OrkestrIA | Consultoría IA & Automatización de Procesos en Madrid",
    template: "%s | OrkestrIA",
  },
  description: "OrkestrIA: consultoría IA, automatización de procesos, chatbots empresariales y desarrollo web en Madrid. Transformamos tu negocio con Inteligencia Artificial. Solicita presupuesto gratis.",
  keywords: [
    "orkestria",
    "orkestria consulting",
    "orquestria",
    "consultoría IA",
    "consultoría inteligencia artificial Madrid",
    "automatización de procesos empresariales",
    "automatización con IA",
    "chatbots empresariales",
    "asistentes virtuales IA",
    "chatbot para empresas España",
    "inteligencia artificial empresas Madrid",
    "transformación digital Madrid",
    "servicios IA Madrid",
    "agencia IA España",
    "desarrollo web Madrid",
    "análisis de datos IA",
    "aplicaciones a medida",
    "consultoría IT Madrid",
    "automatización tareas repetitivas",
    "soluciones IA empresas",
    "startup IA Madrid",
    "n8n automatización",
    "make automatización",
    "zapier alternativa IA",
    "flujos de trabajo automatizados",
  ],
  authors: [{ name: "OrkestrIA", url: BASE_URL }],
  creator: "OrkestrIA",
  publisher: "OrkestrIA",
  category: "Consultoría IT & Inteligencia Artificial",
  icons: {
    icon: '/favicon.svg',
    shortcut: '/favicon.svg',
    apple: '/favicon.svg',
  },
  openGraph: {
    type: "website",
    locale: "es_ES",
    url: BASE_URL,
    siteName: "OrkestrIA",
    title: "OrkestrIA | Consultoría IA & Automatización de Procesos en Madrid",
    description: "OrkestrIA: consultoría IA, automatización de procesos, chatbots empresariales y desarrollo web en Madrid. Transformamos tu negocio con Inteligencia Artificial.",
    images: [
      {
        url: `${BASE_URL}/opengraph-image`,
        width: 1200,
        height: 630,
        alt: "OrkestrIA - Consultoría IA y Automatización en Madrid",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "OrkestrIA | Consultoría IA & Automatización en Madrid",
    description: "Transformamos tu empresa con IA: automatización, chatbots, análisis de datos y desarrollo web. Solicita tu consulta gratuita.",
    images: [`${BASE_URL}/opengraph-image`],
  },
  verification: {
    google: "ehBs94X5xoIfYFCQroH5vCp7xzOuCDGS1uRkEKUqCcQ",
  },
  alternates: {
    canonical: BASE_URL,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": `${BASE_URL}/#organization`,
      "name": "OrkestrIA",
      "legalName": "Orkestria Consulting",
      "alternateName": ["Orkestria Consulting", "Orquestria", "OrkestrIA Madrid"],
      "url": BASE_URL,
      "logo": {
        "@type": "ImageObject",
        "url": `${BASE_URL}/favicon.svg`,
        "width": 512,
        "height": 512,
      },
      "description": "OrkestrIA es una agencia de Inteligencia Artificial y consultoría IT ubicada en Madrid, especializada en automatización de procesos, chatbots empresariales, análisis de datos y desarrollo web.",
      "contactPoint": {
        "@type": "ContactPoint",
        "telephone": "+34-629-015-344",
        "email": "orkestria.contacto@gmail.com",
        "contactType": "customer service",
        "availableLanguage": ["Spanish", "English"],
      },
      "sameAs": [
        "https://www.instagram.com/orkestria.tech",
        "https://www.linkedin.com/company/orkestria",
      ],
      "foundingLocation": {
        "@type": "Place",
        "name": "Madrid, España",
      },
    },
    {
      "@type": "LocalBusiness",
      "@id": `${BASE_URL}/#localbusiness`,
      "name": "OrkestrIA",
      "legalName": "Orkestria Consulting",
      "description": "Consultoría IT y automatización con Inteligencia Artificial para empresas en Madrid y toda Europa. Servicios de IA: chatbots, automatización, análisis de datos y desarrollo web.",
      "url": BASE_URL,
      "telephone": "+34-629-015-344",
      "email": "orkestria.contacto@gmail.com",
      "address": {
        "@type": "PostalAddress",
        "addressLocality": "Madrid",
        "addressRegion": "Comunidad de Madrid",
        "addressCountry": "ES",
      },
      "geo": {
        "@type": "GeoCoordinates",
        "latitude": 40.4168,
        "longitude": -3.7038,
      },
      "areaServed": [
        { "@type": "Country", "name": "España" },
        { "@type": "Continent", "name": "Europa" },
        { "@type": "Continent", "name": "Latinoamérica" },
      ],
      "priceRange": "$$",
      "image": `${BASE_URL}/opengraph-image`,
      "openingHoursSpecification": {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        "opens": "09:00",
        "closes": "19:00",
      },
    },
    {
      "@type": "WebSite",
      "@id": `${BASE_URL}/#website`,
      "url": BASE_URL,
      "name": "OrkestrIA",
      "inLanguage": "es-ES",
      "description": "Consultoría IA, automatización de procesos y servicios tecnológicos en Madrid.",
      "potentialAction": {
        "@type": "SearchAction",
        "target": {
          "@type": "EntryPoint",
          "urlTemplate": `${BASE_URL}/?q={search_term_string}`,
        },
        "query-input": "required name=search_term_string",
      },
    },
    {
      "@type": "Service",
      "@id": `${BASE_URL}/#service-consultoria-ia`,
      "name": "Consultoría IA",
      "description": "Analizamos tus procesos y diseñamos estrategias de Inteligencia Artificial personalizadas para maximizar el ROI de tu empresa.",
      "provider": { "@id": `${BASE_URL}/#organization` },
      "areaServed": "España",
      "serviceType": "Consultoría de Inteligencia Artificial",
    },
    {
      "@type": "Service",
      "@id": `${BASE_URL}/#service-automatizacion`,
      "name": "Automatización de Procesos con IA",
      "description": "Automatizamos tareas repetitivas con flujos de trabajo inteligentes que ahorran tiempo y reducen errores en tu empresa.",
      "provider": { "@id": `${BASE_URL}/#organization` },
      "areaServed": "España",
      "serviceType": "Automatización de Procesos Empresariales",
    },
    {
      "@type": "Service",
      "@id": `${BASE_URL}/#service-chatbots`,
      "name": "Chatbots y Asistentes Virtuales con IA",
      "description": "Desarrollamos chatbots y asistentes virtuales inteligentes que mejoran la atención al cliente 24/7 para empresas.",
      "provider": { "@id": `${BASE_URL}/#organization` },
      "areaServed": "España",
      "serviceType": "Chatbots Empresariales",
    },
    {
      "@type": "Service",
      "@id": `${BASE_URL}/#service-datos`,
      "name": "Análisis de Datos con Inteligencia Artificial",
      "description": "Transformamos tus datos en insights accionables con dashboards y reportes inteligentes impulsados por IA.",
      "provider": { "@id": `${BASE_URL}/#organization` },
      "areaServed": "España",
      "serviceType": "Análisis de Datos e Inteligencia de Negocio",
    },
    {
      "@type": "Service",
      "@id": `${BASE_URL}/#service-web`,
      "name": "Desarrollo Web en Madrid",
      "description": "Creamos páginas web modernas, rápidas y optimizadas para SEO que impulsan la presencia digital de tu empresa.",
      "provider": { "@id": `${BASE_URL}/#organization` },
      "areaServed": "España",
      "serviceType": "Desarrollo Web",
    },
    {
      "@type": "FAQPage",
      "@id": `${BASE_URL}/#faq`,
      "mainEntity": [
        {
          "@type": "Question",
          "name": "¿Qué servicios ofrece OrkestrIA?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "OrkestrIA ofrece consultoría IA, automatización de procesos empresariales, desarrollo de chatbots y asistentes virtuales, análisis de datos, desarrollo web y aplicaciones a medida. Todos nuestros servicios están orientados a la transformación digital mediante Inteligencia Artificial.",
          },
        },
        {
          "@type": "Question",
          "name": "¿Dónde está ubicada OrkestrIA?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "OrkestrIA está ubicada en Madrid, España. Trabajamos con empresas de toda España, Europa y Latinoamérica de forma remota y presencial.",
          },
        },
        {
          "@type": "Question",
          "name": "¿Cuánto cuesta implementar IA en mi empresa?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "El coste varía según las necesidades específicas de cada empresa. En OrkestrIA ofrecemos una consulta inicial gratuita para evaluar tu caso y presentar una propuesta personalizada sin compromiso. Contáctanos en orkestria.contacto@gmail.com.",
          },
        },
        {
          "@type": "Question",
          "name": "¿Qué es la automatización de procesos con IA?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "La automatización de procesos con IA consiste en usar tecnologías de Inteligencia Artificial para ejecutar tareas repetitivas de forma automática, reduciendo errores, ahorrando tiempo y liberando a tu equipo para trabajos de mayor valor. OrkestrIA implementa soluciones de automatización con herramientas como n8n, Make y desarrollo a medida.",
          },
        },
        {
          "@type": "Question",
          "name": "¿Cuánto tiempo tarda en implementarse una solución de IA?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Los proyectos más sencillos, como un chatbot básico o una automatización de flujo, pueden estar listos en 1-2 semanas. Proyectos más complejos de transformación digital pueden llevar entre 1 y 3 meses. Siempre trabajamos con plazos claros y entregas progresivas.",
          },
        },
      ],
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body className={`${inter.variable} ${spaceGrotesk.variable} antialiased`}>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <TooltipProvider>
          <Toaster />
          <Sonner />
          <Header />
          <PageTransition>
            {children}
          </PageTransition>
          <CookieBanner />
        </TooltipProvider>
      </body>
    </html>
  );
}
