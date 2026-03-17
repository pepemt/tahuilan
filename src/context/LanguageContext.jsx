import { createContext, useContext, useEffect, useMemo, useState } from "react";

const STORAGE_KEY = "tahuilan-site-lang";

const translations = {
  en: {
    nav: {
      home: "Home",
      services: "Services",
      process: "Process",
      portfolio: "Portfolio",
      contact: "Contact",
      cta: "Get Started",
      languageLabel: "ES",
    },
    hero: {
      title: "Modern websites that make your business stand out",
      subtitle:
        "We create fast, modern websites that help your business look professional, build trust, and attract more clients.",
      badge: "Available for new projects",
      ctaPrimary: "Request a Quote",
      ctaSecondary: "See Our Work",
    },
    services: {
      badge: "Services",
      title: "Websites built for real businesses",
      description:
        "Running a business is already hard. We make your website simple, fast, and professional.",
    },
    serviceItems: [
      {
        title: "Business Websites",
        description:
          "Professional websites that build trust and establish your business online.",
      },
      {
        title: "Landing Pages",
        description:
          "High-converting landing pages designed to turn visitors into clients.",
      },
      {
        title: "Portfolio Websites",
        description:
          "Showcase your work with a clean, modern, and credible portfolio.",
      },
      {
        title: "Website Redesign",
        description:
          "Transform outdated websites into fast, modern, mobile-first experiences.",
      },
      {
        title: "Performance Optimization",
        description:
          "Improve speed and Core Web Vitals so your site performs better.",
      },
    ],
    process: {
      badge: "How It Works",
      title: "How we build your website",
      description:
        "From first idea to final launch, we make the process simple, clear, and focused on your business.",
      steps: [
        {
          step: "Step 01",
          title: "Tell us about your business",
          content:
            "Share your goals, audience, and brand style so we can create a website that fits your business.",
        },
        {
          step: "Step 02",
          title: "We design your website",
          content:
            "We create a custom design that reflects your brand and helps turn visitors into customers.",
        },
        {
          step: "Step 03",
          title: "You review and request changes",
          content:
            "Review your website, share feedback, and request adjustments until everything feels right.",
        },
        {
          step: "Step 04",
          title: "We launch your website",
          content:
            "We launch your fast, polished, and mobile-friendly website so your business is ready to stand out online.",
        },
      ],
    },
    portfolio: {
      badge: "Our Work",
      title: "Our Portfolio",
      description:
        "Some examples of projects and experiences we build for real businesses.",
      typeLabel: "Type",
      servicesLabel: "Services",
      slides: [
        {
          title: "UI/UX Design",
          description:
            "We build a car rental platform focused on user experience, security, and data privacy.",
        },
        {
          title: "Blockchain Wallet",
          description:
            "We build a blockchain wallet for the masses, focused on security and usability.",
        },
        {
          title: "Ecommerce Store",
          description:
            "We build an ecommerce store focused on performance, trust, and user experience.",
        },
        {
          title: "SaaS Platform",
          description:
            "We build a SaaS platform focused on user experience, security, and privacy.",
        },
        {
          title: "SEO Optimization",
          description:
            "We optimize digital experiences to improve discoverability and conversion.",
        },
      ],
    },
    whyUs: {
      badge: "Why Choose Us",
      title: "Built for businesses that want to stand out",
      description:
        "We focus on what matters most: creating websites that make your business look professional, fast, and trustworthy online.",
      reasons: [
        {
          title: "Modern Design",
          description:
            "Clean, contemporary designs that make your business look credible and professional.",
        },
        {
          title: "Fast Websites",
          description:
            "Optimized for speed so visitors stay engaged instead of leaving your site.",
        },
        {
          title: "Mobile Friendly",
          description:
            "Fully responsive layouts that look perfect on phones, tablets, and desktops.",
        },
        {
          title: "Professional Experience",
          description:
            "Thoughtful interactions and polished visuals that build trust with your audience.",
        },
        {
          title: "Clear Communication",
          description: "Simple and transparent communication throughout the entire project.",
        },
      ],
    },
    contact: {
      badge: "Get In Touch",
      title: "Let's build something great together",
      subtitle:
        "Tell us about your project and we'll get back to you within 24 hours.",
      formName: "Your Name",
      formEmail: "your@email.com",
      formMessage: "Tell us about your project...",
      formSubmit: "Send Message",
      formSubmitted: "Message Sent!",
      panelTitle: "Let's build something great",
      panelDescription:
        "Whether you need a brand new website or want to redesign your existing one, we're here to help your business stand out online.",
      instagram: "Instagram",
      whatsapp: "WhatsApp",
      notice:
        "We typically respond within 24 hours. No spam, no obligations — just a conversation about how we can help.",
    },
    footer: {
      tagline: "Modern websites for modern businesses.",
      home: "Home",
      services: "Services",
      portfolio: "Portfolio",
      contact: "Contact",
      copyright: "All rights reserved.",
    },
  },
  es: {
    nav: {
      home: "Inicio",
      services: "Servicios",
      process: "Proceso",
      portfolio: "Portafolio",
      contact: "Contacto",
      cta: "Comenzar",
      languageLabel: "EN",
    },
    hero: {
      title: "Sitios web modernos para negocios que quieren destacar",
      subtitle:
        "Creamos sitios web rápidos y modernos que ayudan a que tu negocio se vea profesional, genere confianza y atraiga más clientes.",
      badge: "Disponible para nuevos proyectos",
      ctaPrimary: "Solicitar cotización",
      ctaSecondary: "Ver nuestro trabajo",
    },
    services: {
      badge: "Servicios",
      title: "Sitios web construidos para negocios reales",
      description:
        "Dirigir un negocio ya es difícil. Hacemos tu sitio web simple, rápido y profesional.",
    },
    serviceItems: [
      {
        title: "Sitios Web Empresariales",
        description:
          "Sitios profesionales que generan confianza y posicionan tu negocio en línea.",
      },
      {
        title: "Landing Pages",
        description:
          "Páginas de aterrizaje de alta conversión diseñadas para transformar visitantes en clientes.",
      },
      {
        title: "Portafolios",
        description:
          "Muestra tu trabajo con un portafolio limpio, moderno y creíble.",
      },
      {
        title: "Rediseño de Sitios",
        description:
          "Transformamos sitios desactualizados en experiencias rápidas, modernas y enfocadas en móvil.",
      },
      {
        title: "Optimización de Rendimiento",
        description:
          "Mejoramos velocidad y Core Web Vitals para que tu sitio funcione mejor.",
      },
    ],
    process: {
      badge: "Cómo funciona",
      title: "Cómo construimos tu sitio",
      description:
        "Desde la primera idea hasta el lanzamiento final, hacemos el proceso simple, claro y enfocado en tu negocio.",
      steps: [
        {
          step: "Paso 01",
          title: "Cuéntanos sobre tu negocio",
          content:
            "Comparte tus objetivos, audiencia y estilo de marca para crear un sitio alineado con tu negocio.",
        },
        {
          step: "Paso 02",
          title: "Diseñamos tu sitio web",
          content:
            "Creamos un diseño personalizado que refleja tu marca y ayuda a convertir visitas en clientes.",
        },
        {
          step: "Paso 03",
          title: "Revisas y pides cambios",
          content:
            "Revisas el sitio, compartes comentarios y pedimos ajustes hasta que quede perfecto.",
        },
        {
          step: "Paso 04",
          title: "Lanzamos tu sitio web",
          content:
            "Lanzamos un sitio rápido, pulido y adaptado a móvil para que tu negocio destaque en línea.",
        },
      ],
    },
    portfolio: {
      badge: "Nuestro trabajo",
      title: "Nuestro portafolio",
      description:
        "Algunos ejemplos de proyectos y experiencias que construimos para negocios reales.",
      typeLabel: "Tipo",
      servicesLabel: "Servicios",
      slides: [
        {
          title: "Diseño UI/UX",
          description:
            "Construimos una plataforma de renta de autos enfocada en experiencia de usuario, seguridad y privacidad.",
        },
        {
          title: "Billetera Blockchain",
          description:
            "Construimos una billetera blockchain enfocada en seguridad y facilidad de uso.",
        },
        {
          title: "Tienda Ecommerce",
          description:
            "Creamos una tienda en línea enfocada en rendimiento, confianza y experiencia de usuario.",
        },
        {
          title: "Plataforma SaaS",
          description:
            "Construimos una plataforma SaaS con foco en experiencia de usuario, seguridad y privacidad.",
        },
        {
          title: "SEO Optimization",
          description:
            "Optimizamos experiencias digitales para mejorar visibilidad y conversión.",
        },
      ],
    },
    whyUs: {
      badge: "Por qué elegirnos",
      title: "Pensado para negocios que quieren destacar",
      description:
        "Nos enfocamos en lo que más importa: crear sitios web que hagan que tu negocio se vea profesional, rápido y confiable.",
      reasons: [
        {
          title: "Diseño Moderno",
          description:
            "Diseños limpios y contemporáneos que hacen que tu negocio luzca confiable y profesional.",
        },
        {
          title: "Sitios Rápidos",
          description:
            "Optimizado para la velocidad para que tus visitantes se mantengan interesados y no se vayan.",
        },
        {
          title: "Compatibilidad Móvil",
          description:
            "Diseños completamente responsivos que se ven perfectos en celular, tablet y escritorio.",
        },
        {
          title: "Experiencia Profesional",
          description:
            "Interacciones y visuales bien cuidados que construyen confianza con tu audiencia.",
        },
        {
          title: "Comunicación Clara",
          description: "Comunicación simple y transparente durante todo el proyecto.",
        },
      ],
    },
    contact: {
      badge: "Ponte en contacto",
      title: "Construyamos algo increíble",
      subtitle: "Cuéntanos sobre tu proyecto y te respondemos en menos de 24 horas.",
      formName: "Tu nombre",
      formEmail: "tu@email.com",
      formMessage: "Cuéntanos sobre tu proyecto...",
      formSubmit: "Enviar mensaje",
      formSubmitted: "¡Mensaje enviado!",
      panelTitle: "Construyamos algo increíble",
      panelDescription:
        "Ya sea que necesites un sitio nuevo o rediseñar uno existente, te ayudamos a que tu negocio destaque en línea.",
      instagram: "Instagram",
      whatsapp: "WhatsApp",
      notice:
        "Solemos responder dentro de las 24 horas. Sin spam ni compromisos: solo una conversación sobre cómo ayudarte.",
    },
    footer: {
      tagline: "Sitios web modernos para negocios modernos.",
      home: "Inicio",
      services: "Servicios",
      portfolio: "Portafolio",
      contact: "Contacto",
      copyright: "Todos los derechos reservados.",
    },
  },
};

const LanguageContext = createContext({
  lang: "en",
  setLang: () => {},
  t: () => "",
  translations,
});

function getBrowserLang() {
  if (typeof navigator === "undefined") return "en";
  const lang = navigator.language?.toLowerCase() || "";
  return lang.startsWith("es") ? "es" : "en";
}

export function LanguageProvider({ children }) {
  const [lang, setLang] = useState("en");

  useEffect(() => {
    if (typeof window === "undefined") return;

    const storedLang = localStorage.getItem(STORAGE_KEY);
    if (storedLang === "en" || storedLang === "es") {
      setLang(storedLang);
      return;
    }

    setLang(getBrowserLang());
  }, []);

  useEffect(() => {
    if (typeof window === "undefined") return;
    localStorage.setItem(STORAGE_KEY, lang);
  }, [lang]);

  const t = (path, fallback = path) => {
    const langMap = translations[lang] ?? translations.en;
    const fallbackMap = translations.en;
    const parts = path.split(".");
    let value = langMap;
    let fallbackValue = fallbackMap;

    for (const part of parts) {
      value = value?.[part];
      fallbackValue = fallbackValue?.[part];
    }

    return value ?? fallbackValue ?? fallback;
  };

  const value = useMemo(() => ({ lang, setLang, t, translations }), [lang]);

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>;
}

export function useLanguage() {
  return useContext(LanguageContext);
}

