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
      description: "A gym coach landing page designed to convert visitors into members.",
      typeLabel: "Type",
      servicesLabel: "Services",
      openCaseLabel: "View Case Study",
      backToPortfolio: "Back to Portfolio",
      builtFor: "Built for",
      pages: {
        gymCoach: {
          eyebrow: "Featured case study",
          type: "Gym Coach",
          services: ["Branding", "Landing page", "Booking", "SEO"],
          heroTitle: "From local lead to paid member",
          heroDescription:
            "A gym coach landing page redesigned to capture leads faster, build trust instantly, and convert more visitors into booked sessions.",
          challengeHeading: "Built to solve real friction",
          challengeDescription:
            "From no progress and unstable routines to better habits and consistent results.",
          whatWeBuilt: [
            {
              title: "Conversion-first hero",
              description:
                "Clear offer blocks, value-first headline, and one action per section.",
            },
            {
              title: "Trust-building proof",
              description:
                "Visible social proof, success metrics, and concise client outcomes.",
            },
            {
              title: "Frictionless booking",
              description:
                "Simple CTA flow designed to remove hesitation before signup.",
            },
          ],
          whatWeBuiltTitle: "What we built",
          plansHeading: "Choose the right level of support",
          processHeading: "A clear system from signup to results",
          processFallback: "Process details coming soon.",
          aboutSummary:
            "A modern coaching program with structured routines, nutrition, and weekly adjustments designed to help you stay consistent and improve every week.",
          ctaEyebrow: "Ready",
          results: [
            { label: "Lead quality", value: "+73%" },
            { label: "Landing Conversion", value: "+41%" },
            { label: "Session Bookings", value: "+55%" },
          ],
          resultsTitle: "Results",
          ctaLabel: "Talk about your project",
          ctaUrl: "/#contact",
          challengeTitle: "Does this sound familiar?",
          challenges: [
            {
              title: "No visible progress",
              description:
                "You train hard but the mirror and your results are not showing the effort.",
            },
            {
              title: "Plans are not flexible",
              description:
                "Most routines ignore your schedule, workday, and lifestyle.",
            },
            {
              title: "You lose momentum",
              description:
                "You start motivated, then routines become hard to keep up with.",
            },
            {
              title: "You need a clear method",
              description:
                "You have info overload and no practical structure for action.",
            },
          ],
          differenceTitle: "The difference",
          differenceLeftTitle: "Trying alone",
          differenceLeftItems: [
            "No structured progression and inconsistent routine changes.",
            "Random nutrition with no real alignment to goals.",
            "Slow progress and frequent drop-offs.",
            "Too many weeks lost with no measurable improvement.",
          ],
          differenceRightTitle: "With coaching",
          differenceRightItems: [
            "A plan based on your level, objective and timeline.",
            "Nutrition adapted to your real life and routines.",
            "Weekly tracking and adjustments.",
            "Visible progress from day one with a clear path.",
          ],
          aboutTitle: "Who is behind the plan",
          aboutText:
            "A personal coach focused on consistent progress: training, nutrition and follow-up designed to keep your goals realistic and measurable.",
          aboutBullets: [
            "Personalized routines with real progression.",
            "Weekly check-ins and plan adjustments.",
            "Simple structure to stay consistent and accountable.",
          ],
          plansTitle: "Andoni-style coaching program",
          plans: [
            {
              title: "Quarterly Program",
              price: "€287",
              meta: "€95.67 per month",
              badge: "Most flexible",
              highlight: "Plan ready in 48h",
              features: [
                "Personalized training routine",
                "Weekly progress review",
                "Nutrition plan adapted to your needs",
                "Daily WhatsApp support",
                "Exclusive client guide",
              ],
            },
            {
              title: "Annual Program",
              price: "€997",
              meta: "€83.08 per month",
              badge: "Best value",
              highlight: "Save €151 vs quarterly",
              features: [
                "Everything in quarterly",
                "Long-term momentum tracking",
                "Priority feedback window",
                "Priority monthly check-ins",
              ],
            },
          ],
          processTitle: "How it works",
          processSteps: [
            {
              title: "Step 1 — Complete intake form",
              text: "Share your goals, schedule, and current habits. This helps us define your starting point.",
            },
            {
              title: "Step 2 — Quick WhatsApp interview",
              text: "We clarify doubts and align expectations before designing.",
            },
            {
              title: "Step 3 — Build your plan",
              text: "A complete workout and nutrition plan is created uniquely for you.",
            },
            {
              title: "Step 4 — Delivery in 48h",
              text: "You receive your plan ready to start with an easy onboarding flow.",
            },
            {
              title: "Step 5 — We grow together",
              text: "Weekly progress check and constant refinements to keep results moving.",
            },
          ],
          faqTitle: "Common questions",
          faq: [
            {
              q: "How long before I see results?",
              a: "Most clients notice first visible changes in 4 to 6 weeks, with better habits from week one.",
            },
            {
              q: "Do I need to have gym experience?",
              a: "No. The program adapts to beginners and advanced users.",
            },
            {
              q: "What if I have food restrictions?",
              a: "The plan is built around your preferences, restrictions, and daily routine.",
            },
            {
              q: "Can I contact you anytime?",
              a: "Yes, direct WhatsApp support is included for timely adjustments.",
            },
          ],
          ctaTitle: "Stop overthinking.",
          ctaText:
            "Enrollment is limited for personalized support. Let’s map your next 12 weeks and get moving.",
          ctaPrimaryLabel: "Start my plan",
          ctaPrimaryUrl: "/#contact",
          ctaSecondaryLabel: "Book a call",
          ctaSecondaryUrl: "https://wa.me/qr/CC5HA3I4QH4SP1",
        },
      },
      slides: [
        {
          type: "Gym Coach",
          services: ["Branding", "Landing page", "Booking", "SEO"],
          title: "Gym Coach Landing Page",
          description:
            "A performance-driven landing page with clear offers, social proof, and lead capture for local training clients.",
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
        "Una landing page para coach de gimnasio diseñada para convertir visitantes en clientes.",
      typeLabel: "Tipo",
      servicesLabel: "Servicios",
      openCaseLabel: "Ver caso",
      backToPortfolio: "Volver al portafolio",
      builtFor: "Diseñado para",
      pages: {
        gymCoach: {
          eyebrow: "Caso destacado",
          type: "Coach de gimnasio",
          services: ["Marca", "Landing page", "Reserva", "Nutrición"],
          heroTitle: "De visitante a cliente recurrente",
          heroDescription:
            "Landing page para un coach de gimnasio enfocada en convertir leads con mayor velocidad y claridad, mostrando resultados y permitiendo reserva rápida.",
          challengeHeading: "Diseñado para resolver puntos de fricción reales",
          challengeDescription:
            "De la rutina irregular y los resultados lentos a hábitos más consistentes y mejoras visibles.",
          whatWeBuiltTitle: "Lo que construimos",
          plansHeading: "Elige el nivel correcto de acompañamiento",
          processHeading: "Un sistema claro desde el inicio hasta los resultados",
          processFallback: "Detalles del proceso pronto.",
          aboutSummary:
            "Un programa de coaching moderno con rutinas estructuradas, nutrición y ajustes semanales para mantener constancia y mejorar cada semana.",
          ctaEyebrow: "Listo",
          whatWeBuilt: [
            {
              title: "Hero orientado a conversión",
              description:
                "Bloques de oferta claros, titular orientado a valor y una sola acción principal por sección.",
            },
            {
              title: "Prueba social fuerte",
              description:
                "Prueba social visible, métricas de resultados y casos concretos para generar confianza.",
            },
            {
              title: "Reservas más sencillas",
              description:
                "Un flujo de CTA claro para bajar fricción antes de agendar.",
            },
          ],
          resultsTitle: "Resultados",
          results: [
            { label: "Calidad de leads", value: "+73%" },
            { label: "Conversión de landing", value: "+41%" },
            { label: "Reservas de sesiones", value: "+55%" },
          ],
          ctaLabel: "Háblanos de tu proyecto",
          ctaUrl: "/#contact",
          challengeTitle: "¿Te suena esto?",
          challenges: [
            {
              title: "Entrenas sin ver cambios",
              description:
                "Haces esfuerzo pero la báscula y el espejo no muestran los avances esperados.",
            },
            {
              title: "Plan poco flexible",
              description:
                "La mayoría de rutinas no se adapta a tu horario, energía y vida diaria.",
            },
            {
              title: "Pierdes continuidad",
              description:
                "Empiezas con fuerza, pero a las pocas semanas la motivación baja.",
            },
            {
              title: "Necesitas método, no motivación",
              description:
                "Tienes mucha información, pero no una estructura práctica para actuar.",
            },
          ],
          differenceTitle: "La diferencia",
          differenceLeftTitle: "Por tu cuenta",
          differenceLeftItems: [
            "Sin progresión real y sin ajustes semanales.",
            "Nutrición desordenada o genérica.",
            "Progreso lento y sensación de estancamiento.",
            "Semanas perdidas que no se recuperan.",
          ],
          differenceRightTitle: "Con coaching",
          differenceRightItems: [
            "Plan diseñado a tu nivel, objetivo y disponibilidad.",
            "Nutrición ajustada a tu rutina real.",
            "Revisión semanal y cambios según tus resultados.",
            "Progreso visible desde temprano con ruta clara.",
          ],
          aboutTitle: "Quién está detrás de tu plan",
          aboutText:
            "Coach personal con enfoque práctico: entrenamiento, nutrición y seguimiento para que avances de forma consistente.",
          aboutBullets: [
            "Rutinas personalizadas con progresión real.",
            "Revisión semanal de resultados.",
            "Estructura simple para mantener constancia.",
          ],
          plansTitle: "Plan de coaching para resultados",
          plans: [
            {
              title: "Plan Trimestral",
              price: "287 €",
              meta: "95,67 €/mes",
              badge: "Más flexible",
              highlight: "Plan listo en 48h",
              features: [
                "Rutina personalizada",
                "Revisión semanal",
                "Nutrición adaptada a tus hábitos",
                "Soporte por WhatsApp diario",
                "Material y guía exclusiva",
              ],
            },
            {
              title: "Plan Anual",
              price: "997 €",
              meta: "83,08 €/mes",
              badge: "Mejor valor",
              highlight: "Ahorra 151 €",
              features: [
                "Todo lo del plan trimestral",
                "Seguimiento de largo plazo",
                "Ventanas de ajuste con prioridad",
                "Revisión mensual intensiva",
              ],
            },
          ],
          processTitle: "Cómo funciona",
          processSteps: [
            {
              title: "Paso 1 - Completa el formulario",
              text: "Cuéntame tu objetivo, disponibilidad y hábitos para armar el plan correcto.",
            },
            {
              title: "Paso 2 - Hablamos por WhatsApp",
              text: "Resolvemos dudas y validamos la estrategia antes de empezar.",
            },
            {
              title: "Paso 3 - Diseñamos tu plan",
              text: "Creamos rutina y nutrición a medida para ti.",
            },
            {
              title: "Paso 4 - Recibes todo en 48h",
              text: "Plan listo, explicado y preparado para arrancar sin complicaciones.",
            },
            {
              title: "Paso 5 - Avanzamos juntos",
              text: "Revisión semanal para ajustes y mantenerte consistente.",
            },
          ],
          faqTitle: "Preguntas frecuentes",
          faq: [
            {
              q: "¿Cuándo notaré resultados?",
              a: "Los primeros cambios suelen verse en 4 a 6 semanas. En la primera semana ya entras en acción con un plan claro.",
            },
            {
              q: "¿Necesito experiencia previa?",
              a: "No, el plan se adapta tanto si comienzas de cero como si ya tienes experiencia.",
            },
            {
              q: "¿Y si no tolero algunos alimentos?",
              a: "El plan se ajusta a intolerancias, preferencias y estilo de vida.",
            },
            {
              q: "¿Puedo escribirte cuando tenga dudas?",
              a: "Sí. Tienes soporte directo y seguimiento continuo.",
            },
          ],
          ctaTitle: "Deja de pensarlo, empieza hoy",
          ctaText:
            "Las plazas son limitadas para mantener soporte personalizado. Te ayudamos a planear tus próximos 12 semanas.",
          ctaPrimaryLabel: "Quiero mi plan",
          ctaPrimaryUrl: "/#contact",
          ctaSecondaryLabel: "Ver mis planes",
          ctaSecondaryUrl: "https://wa.me/qr/CC5HA3I4QH4SP1",
        },
      },
      slides: [
        {
          type: "Coach de gimnasio",
          services: ["Marca", "Landing page", "Reserva", "Nutrición"],
          title: "Landing de coach de gimnasio",
          description:
            "Página de aterrizaje enfocada en resultados, prueba social y captación de leads para entrenamientos personalizados.",
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

function getInitialLang() {
  if (typeof window === "undefined") return "en";

  const urlLang = new URLSearchParams(window.location.search).get("lang");
  if (urlLang === "en" || urlLang === "es") {
    return urlLang;
  }

  const storedLang = localStorage.getItem(STORAGE_KEY);
  if (storedLang === "en" || storedLang === "es") {
    return storedLang;
  }

  return getBrowserLang();
}

function getBrowserLang() {
  if (typeof navigator === "undefined") return "en";
  const lang = navigator.language?.toLowerCase() || "";
  return lang.startsWith("es") ? "es" : "en";
}

export function LanguageProvider({ children }) {
  const [lang, setLang] = useState(getInitialLang);

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

