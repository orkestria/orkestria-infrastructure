import type { Metadata } from "next";
import { Inter, Space_Grotesk } from "next/font/google";
import "./globals.css";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import Header from "@/components/Header";
import PageTransition from "@/components/PageTransition";

const inter = Inter({ 
  subsets: ["latin"],
  variable: "--font-inter",
});

const spaceGrotesk = Space_Grotesk({ 
  subsets: ["latin"],
  variable: "--font-space-grotesk",
});

const BASE_URL = 'https://orkestria-infrastructure.vercel.app';

export const metadata: Metadata = {
  metadataBase: new URL(BASE_URL),
  title: {
    default: "OrkestrIA - Consultoría IT & Automatización con IA",
    template: "%s | OrkestrIA",
  },
  description: "Orquestamos soluciones tecnológicas inteligentes para automatizar procesos, optimizar operaciones y potenciar el crecimiento de tu negocio con IA.",
  keywords: ["consultoría IA", "automatización inteligente", "inteligencia artificial empresas", "chatbots empresariales", "Madrid", "transformación digital"],
  authors: [{ name: "OrkestrIA", url: BASE_URL }],
  creator: "OrkestrIA",
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
    title: "OrkestrIA - Consultoría IT & Automatización con IA",
    description: "Orquestamos soluciones tecnológicas inteligentes para automatizar procesos, optimizar operaciones y potenciar el crecimiento de tu negocio con IA.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "OrkestrIA - Consultoría IT & Automatización con IA",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "OrkestrIA - Consultoría IT & Automatización con IA",
    description: "Orquestamos soluciones tecnológicas inteligentes para automatizar procesos, optimizar operaciones y potenciar el crecimiento de tu negocio con IA.",
    images: ["/og-image.png"],
  },
  verification: {
    google: "ehBs94X5xoIfYFCQroH5vCp7xzOuCDGS1uRkEKUqCcQ",
  },
  alternates: {
    canonical: BASE_URL,
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": `${BASE_URL}/#organization`,
      "name": "OrkestrIA",
      "url": BASE_URL,
      "logo": {
        "@type": "ImageObject",
        "url": `${BASE_URL}/favicon.svg`,
      },
      "contactPoint": {
        "@type": "ContactPoint",
        "telephone": "+34-629-015-344",
        "email": "orkestria.contacto@gmail.com",
        "contactType": "customer service",
        "availableLanguage": ["Spanish", "English"],
      },
      "sameAs": [
        "https://www.instagram.com/orkestria.tech",
        "https://www.linkedin.com/in/orkestria-undefined-99aa6b3a9/",
      ],
    },
    {
      "@type": "LocalBusiness",
      "@id": `${BASE_URL}/#localbusiness`,
      "name": "OrkestrIA",
      "description": "Consultoría IT y automatización con Inteligencia Artificial para empresas en Madrid y toda Europa.",
      "url": BASE_URL,
      "telephone": "+34-629-015-344",
      "email": "orkestria.contacto@gmail.com",
      "address": {
        "@type": "PostalAddress",
        "addressLocality": "Madrid",
        "addressCountry": "ES",
      },
      "areaServed": ["España", "Europa", "Latinoamérica"],
      "priceRange": "$$",
      "image": `${BASE_URL}/og-image.png`,
    },
    {
      "@type": "WebSite",
      "@id": `${BASE_URL}/#website`,
      "url": BASE_URL,
      "name": "OrkestrIA",
      "inLanguage": "es-ES",
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
        </TooltipProvider>
      </body>
    </html>
  );
}
