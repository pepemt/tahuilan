import { motion } from "framer-motion";
import "@fontsource/bebas-neue";
import "@fontsource/unifrakturcook/700.css";

/**
 * Elysium · programa de coaching online de Swagger.
 * Todo lo editable (WhatsApp, textos, fotos) está en las constantes de arriba.
 */
const CONFIG = {
  program: "Elysium",
  coach: "Swagger",
  // Número con código de país, sin "+" ni espacios (+52 81 2599 2035)
  whatsapp: "528125992035",
  instagram: "https://www.instagram.com/sswagger.999",
  tiktok: "https://www.tiktok.com/@sswagger.999",
  // Logo fijo de fondo detrás de todo lo que va después del hero. false para quitarlo.
  logoBackground: true,
};

const IMG = "/images/elysium";

const MARQUEE = [
  "Entrena con propósito",
  "Ciencia aplicada",
  "Nutrición sin dietas raras",
  "Check-ins semanales",
  "Coaching 1:1",
];

const STORY = [
  {
    numeral: "I",
    title: "El comienzo",
    text: "Antes de los músculos hubo un chavo flaco con ganas de moverse. Boxeo, calle y mucha energía: ahí empezó la disciplina.",
    images: [`${IMG}/inicio.jpg`, `${IMG}/boxeo.jpg`],
  },
  {
    numeral: "II",
    title: "La transformación",
    text: "Años de errores, rutinas copiadas y aprendizaje. Hasta que entrenar con método cambió todo. Lo que ves aquí no es genética: es constancia.",
    images: [`${IMG}/antes-despues.jpg`],
    labels: true,
  },
  {
    numeral: "III",
    title: "El escenario",
    text: "De entrenar solo a subirse a competir. Hoy Swagger usa todo lo que vivió y estudia para llevarte por el mismo camino, pero sin perder años.",
    images: [`${IMG}/escenario.jpg`],
  },
];

const PILLARS = [
  {
    numeral: "I",
    title: "Entrenamiento",
    text: "Programa hecho para ti: tu nivel, tu horario, tu gym. Con progresión clara semana a semana.",
  },
  {
    numeral: "II",
    title: "Nutrición",
    text: "Calorías y macros a tu medida, con comida normal. Sin dietas extremas ni prohibiciones absurdas.",
  },
  {
    numeral: "III",
    title: "Seguimiento",
    text: "Check-ins semanales con fotos, peso y rendimiento. Si algo no funciona, se ajusta.",
  },
  {
    numeral: "IV",
    title: "Mentalidad",
    text: "Hábitos, constancia y alguien que te exige. La parte que nadie te enseña en un PDF.",
  },
];

const SCIENCE = [
  "Sobrecarga progresiva medida, no al azar",
  "Volumen y frecuencia basados en evidencia",
  "Técnica primero para progresar sin lesiones",
  "Descanso y sueño como parte del plan",
];

const STEPS = [
  { title: "Escribes", text: "Mándale mensaje a Swagger por WhatsApp o redes." },
  { title: "Diagnóstico", text: "Swagger revisa tu caso y te contacta para conocerte." },
  { title: "Tu plan", text: "Recibes entrenamiento y nutrición hechos para ti." },
  { title: "Evolución", text: "Check-ins cada semana y ajustes hasta llegar a tu meta." },
];

const GALLERY = [
  { src: `${IMG}/gym.jpg`, alt: "Swagger entrenando en el gym" },
  { src: `${IMG}/pose-lateral.jpg`, alt: "Pose lateral de pecho" },
  { src: `${IMG}/espalda.jpg`, alt: "Pose de espalda" },
  { src: `${IMG}/escenario.jpg`, alt: "Swagger en competencia" },
];

const FAQS = [
  {
    q: "¿Sirve si nunca he entrenado?",
    a: "Sí. El plan arranca desde tu nivel real. Si eres principiante, empezamos por técnica y básicos para que construyas una buena base.",
  },
  {
    q: "¿Tengo que dejar de comer lo que me gusta?",
    a: "No. Trabajamos con macros y opciones flexibles. La idea es que puedas sostenerlo meses, no solo dos semanas.",
  },
  {
    q: "¿Cómo son los check-ins?",
    a: "Cada semana mandas fotos, peso y cómo te fue en tus entrenamientos. Con eso Swagger ajusta el plan y te da feedback directo.",
  },
  {
    q: "¿Quién es Swagger?",
    a: "Estudiante de Ciencias del Deporte y competidor. Combina lo que aprende en la carrera con lo que ha vivido en el gym y en el escenario.",
  },
  {
    q: "¿Puedo entrenar en casa?",
    a: "Sí. El programa se adapta al material que tengas, desde un gym completo hasta unas mancuernas en casa.",
  },
];

const display = { fontFamily: "'Bebas Neue', 'Geist Variable', sans-serif" };
const gothic = { fontFamily: "'UnifrakturCook', serif" };

const reveal = {
  initial: { opacity: 0, y: 32 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.2 },
  transition: { duration: 0.7, ease: "easeOut" },
};

const wrap = "mx-auto w-[min(calc(100%-32px),1200px)] md:w-[min(calc(100%-64px),1200px)]";
const eyebrow = "text-[11px] font-bold uppercase tracking-[0.3em] text-[#e3192b]";
const h2 =
  "m-0 text-[clamp(44px,8vw,96px)] uppercase leading-[0.9] tracking-[0.01em] text-[#f5efe9]";
const btnRed =
  "inline-flex min-h-[52px] items-center justify-center rounded-sm bg-[#e3192b] px-7 py-3 text-sm font-bold uppercase tracking-[0.16em] text-white shadow-[0_0_30px_rgba(227,25,43,.35)] transition-all hover:bg-[#ff2d3d] hover:shadow-[0_0_45px_rgba(255,45,61,.55)] cursor-pointer";
const btnGhost =
  "inline-flex min-h-[52px] items-center justify-center rounded-sm border border-white/20 px-7 py-3 text-sm font-bold uppercase tracking-[0.16em] text-[#f5efe9] transition-colors hover:border-[#e3192b] hover:text-[#ff2d3d] cursor-pointer";

const ICONS = {
  whatsapp:
    "M17.47 14.38c-.3-.15-1.76-.87-2.03-.97-.27-.1-.47-.15-.67.15-.2.3-.77.97-.94 1.17-.17.2-.35.22-.65.07-.3-.15-1.26-.46-2.4-1.48-.89-.79-1.49-1.77-1.66-2.07-.17-.3-.02-.46.13-.61.13-.13.3-.35.45-.52.15-.17.2-.3.3-.5.1-.2.05-.37-.02-.52-.08-.15-.67-1.62-.92-2.22-.24-.58-.49-.5-.67-.51h-.57c-.2 0-.52.07-.8.37-.27.3-1.04 1.02-1.04 2.48s1.07 2.88 1.21 3.08c.15.2 2.1 3.2 5.08 4.49.71.31 1.26.49 1.69.63.71.23 1.36.2 1.87.12.57-.08 1.76-.72 2-1.41.25-.7.25-1.29.17-1.41-.07-.13-.27-.2-.57-.35M12.05 21.5h-.01a9.4 9.4 0 0 1-4.8-1.32l-.34-.2-3.57.94.95-3.48-.22-.36a9.43 9.43 0 1 1 8 4.42m8.02-17.45A11.32 11.32 0 0 0 12.05.72C5.8.72.7 5.8.7 12.06c0 2 .52 3.95 1.52 5.67L.6 23.6l6.01-1.58a11.3 11.3 0 0 0 5.43 1.38h.01c6.25 0 11.34-5.09 11.35-11.34 0-3.03-1.18-5.88-3.33-8.02",
  instagram:
    "M12 2.16c3.2 0 3.58.01 4.85.07 1.17.05 1.8.25 2.23.41.56.22.96.48 1.38.9.42.42.68.82.9 1.38.16.42.36 1.06.41 2.23.06 1.27.07 1.65.07 4.85s-.01 3.58-.07 4.85c-.05 1.17-.25 1.8-.41 2.23-.22.56-.48.96-.9 1.38-.42.42-.82.68-1.38.9-.42.16-1.06.36-2.23.41-1.27.06-1.65.07-4.85.07s-3.58-.01-4.85-.07c-1.17-.05-1.8-.25-2.23-.41a3.7 3.7 0 0 1-1.38-.9 3.7 3.7 0 0 1-.9-1.38c-.16-.42-.36-1.06-.41-2.23C2.17 15.58 2.16 15.2 2.16 12s.01-3.58.07-4.85c.05-1.17.25-1.8.41-2.23.22-.56.48-.96.9-1.38.42-.42.82-.68 1.38-.9.42-.16 1.06-.36 2.23-.41C8.42 2.17 8.8 2.16 12 2.16M12 0C8.74 0 8.33.01 7.05.07 5.78.13 4.9.33 4.14.63c-.79.3-1.46.72-2.13 1.38A5.9 5.9 0 0 0 .63 4.14C.33 4.9.13 5.78.07 7.05.01 8.33 0 8.74 0 12s.01 3.67.07 4.95c.06 1.27.26 2.15.56 2.91.3.79.72 1.46 1.38 2.13a5.9 5.9 0 0 0 2.13 1.38c.76.3 1.64.5 2.91.56C8.33 23.99 8.74 24 12 24s3.67-.01 4.95-.07c1.27-.06 2.15-.26 2.91-.56a5.9 5.9 0 0 0 2.13-1.38 5.9 5.9 0 0 0 1.38-2.13c.3-.76.5-1.64.56-2.91.06-1.28.07-1.69.07-4.95s-.01-3.67-.07-4.95c-.06-1.27-.26-2.15-.56-2.91a5.9 5.9 0 0 0-1.38-2.13A5.9 5.9 0 0 0 19.86.63C19.1.33 18.22.13 16.95.07 15.67.01 15.26 0 12 0m0 5.84a6.16 6.16 0 1 0 0 12.32 6.16 6.16 0 0 0 0-12.32M12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8m6.4-11.85a1.44 1.44 0 1 0 0 2.88 1.44 1.44 0 0 0 0-2.88",
  tiktok:
    "M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64c.3 0 .59.04.86.13V9.4a6.34 6.34 0 0 0-1-.08A6.34 6.34 0 0 0 3 15.66a6.34 6.34 0 0 0 10.86 4.43 6.3 6.3 0 0 0 1.86-4.49V8.69a8.18 8.18 0 0 0 4.78 1.52V6.79a4.84 4.84 0 0 1-.91-.1",
};

function Icon({ name, className = "h-5 w-5" }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden>
      <path d={ICONS[name]} />
    </svg>
  );
}

const SOCIALS = [
  {
    name: "whatsapp",
    label: "WhatsApp",
    handle: "+52 81 2599 2035",
    cta: "Escríbele ahora",
    href: `https://wa.me/${CONFIG.whatsapp}?text=${encodeURIComponent(`Hola ${CONFIG.coach}, quiero entrar a ${CONFIG.program}`)}`,
  },
  { name: "instagram", label: "Instagram", handle: "@sswagger.999", cta: "Ver perfil", href: CONFIG.instagram },
  { name: "tiktok", label: "TikTok", handle: "@sswagger.999", cta: "Ver videos", href: CONFIG.tiktok },
];

/** Botones redondos con las redes de Swagger. */
function SocialLinks({ className = "" }) {
  return (
    <div className={`flex items-center gap-3 ${className}`}>
      {SOCIALS.map((s) => (
        <a
          key={s.name}
          href={s.href}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={s.label}
          className="flex h-11 w-11 items-center justify-center rounded-full border border-white/15 text-[#f5efe9] transition-all hover:border-[#e3192b] hover:bg-[#e3192b] hover:shadow-[0_0_24px_rgba(227,25,43,.5)]"
        >
          <Icon name={s.name} />
        </a>
      ))}
    </div>
  );
}

/** Brasas rojas que suben. Posiciones deterministas para que no cambien entre renders. */
function Embers({ count = 22 }) {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden>
      {Array.from({ length: count }, (_, i) => {
        const left = (i * 37) % 100;
        const size = 2 + (i % 3);
        const duration = 7 + (i % 5) * 1.6;
        return (
          <motion.span
            key={i}
            className="absolute bottom-0 rounded-full bg-[#ff2d3d]"
            style={{
              left: `${left}%`,
              width: size,
              height: size,
              boxShadow: "0 0 10px 2px rgba(255,45,61,.7)",
            }}
            initial={{ y: 0, opacity: 0 }}
            animate={{ y: "-110vh", opacity: [0, 1, 1, 0], x: [0, i % 2 ? 24 : -24, 0] }}
            transition={{ duration, delay: (i * 0.53) % 7, repeat: Infinity, ease: "linear" }}
          />
        );
      })}
    </div>
  );
}

/** Logo que se queda fijo de fondo mientras el contenido pasa por encima. */
function LogoBackdrop() {
  return (
    <div className="pointer-events-none sticky top-0 -mb-[100svh] h-[100svh] overflow-hidden" aria-hidden>
      <div
        className="absolute inset-0"
        style={{
          background: "radial-gradient(ellipse 45% 40% at 50% 52%, rgba(227,25,43,.16), transparent 70%)",
        }}
      />
      <motion.img
        src={`${IMG}/logo.jpg`}
        alt=""
        className="absolute left-1/2 top-1/2 w-[min(92vw,820px)] -translate-x-1/2 -translate-y-1/2 opacity-[.13] mix-blend-lighten"
        animate={{ scale: [1, 1.04, 1] }}
        transition={{ duration: 10, ease: "easeInOut", repeat: Infinity }}
      />
    </div>
  );
}

function Marquee() {
  const row = (
    <div className="flex shrink-0 items-center">
      {MARQUEE.map((item) => (
        <span key={item} className="flex items-center">
          <span className="px-6 text-2xl uppercase tracking-[0.08em] md:text-3xl" style={display}>
            {item}
          </span>
          <span className="text-lg text-black/50">✦</span>
        </span>
      ))}
    </div>
  );
  return (
    <div className="relative z-10 -rotate-1 scale-[1.02] overflow-hidden border-y border-black/30 bg-[#e3192b] py-3 text-[#0b0707]">
      <motion.div
        className="flex w-max"
        animate={{ x: ["0%", "-50%"] }}
        transition={{ duration: 28, ease: "linear", repeat: Infinity }}
      >
        {row}
        {row}
        {row}
        {row}
      </motion.div>
    </div>
  );
}

function SectionHead({ kicker, title, children }) {
  return (
    <motion.div {...reveal} className="mb-14 max-w-3xl">
      <p className={eyebrow}>{kicker}</p>
      <h2 className={`${h2} mt-4`} style={display}>
        {title}
      </h2>
      {children && <p className="mt-5 max-w-[56ch] text-[#b3a9a3]">{children}</p>}
    </motion.div>
  );
}

function StoryImages({ chapter }) {
  if (chapter.labels) {
    return (
      <div className="relative overflow-hidden rounded-sm border border-white/10">
        <img src={chapter.images[0]} alt="Antes y después de Swagger" className="w-full" loading="lazy" />
        <span className="absolute bottom-3 left-3 bg-black/70 px-3 py-1 text-xs font-bold uppercase tracking-[0.2em]">
          Antes
        </span>
        <span className="absolute bottom-3 right-3 bg-[#e3192b] px-3 py-1 text-xs font-bold uppercase tracking-[0.2em]">
          Después
        </span>
      </div>
    );
  }
  return (
    <div className={`grid gap-3 ${chapter.images.length > 1 ? "grid-cols-2" : ""}`}>
      {chapter.images.map((src) => (
        <div key={src} className="aspect-[3/4] overflow-hidden rounded-sm border border-white/10">
          <img
            src={src}
            alt={chapter.title}
            loading="lazy"
            className="h-full w-full object-cover object-bottom grayscale-[35%] transition duration-700 hover:scale-105 hover:grayscale-0"
          />
        </div>
      ))}
    </div>
  );
}

export default function ElysiumPage() {
  return (
    <main
      className="min-h-screen overflow-x-clip bg-[#070606] text-[16px] leading-relaxed text-[#f5efe9] selection:bg-[#e3192b] selection:text-white"
      style={{ fontFamily: "'Geist Variable', Inter, sans-serif" }}
    >
      {/* Header */}
      <header className="fixed inset-x-0 top-0 z-50 border-b border-white/5 bg-[#070606]/70 backdrop-blur-md">
        <div className={`${wrap} flex h-16 items-center justify-between gap-4`}>
          <a href="#inicio" className="flex items-center gap-3">
            <img src={`${IMG}/logo.jpg`} alt="" className="h-9 w-9 rounded-full object-cover mix-blend-lighten" />
            <span className="text-2xl text-[#f5efe9]" style={gothic}>
              {CONFIG.program}
            </span>
          </a>
          <nav className="hidden items-center gap-8 text-xs font-bold uppercase tracking-[0.2em] text-[#b3a9a3] md:flex">
            <a href="#historia" className="hover:text-[#f5efe9]">Historia</a>
            <a href="#codigo" className="hover:text-[#f5efe9]">El código</a>
            <a href="#proceso" className="hover:text-[#f5efe9]">Proceso</a>
            <a href="#faq" className="hover:text-[#f5efe9]">Dudas</a>
          </nav>
          <a
            href="#unete"
            className="rounded-sm bg-[#e3192b] px-5 py-2.5 text-xs font-bold uppercase tracking-[0.16em] text-white transition-colors hover:bg-[#ff2d3d]"
          >
            Únete
          </a>
        </div>
      </header>

      {/* Hero */}
      <section id="inicio" className="relative min-h-[100svh] overflow-hidden pt-16">
        <div
          className="absolute inset-0"
          style={{
            background:
              "radial-gradient(ellipse 60% 55% at 72% 45%, rgba(227,25,43,.28), transparent 70%), radial-gradient(ellipse 40% 30% at 15% 90%, rgba(227,25,43,.12), transparent 70%)",
          }}
        />
        <Embers />
        <div className={`${wrap} relative grid min-h-[calc(100svh-4rem)] items-center gap-8 py-12 md:grid-cols-[1.1fr_.9fr]`}>
          <div className="relative z-10 order-2 md:order-1">
            <motion.p {...reveal} className={eyebrow}>
              Coaching online 1:1 · por {CONFIG.coach}
            </motion.p>
            <motion.h1
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, ease: "easeOut" }}
              className="mt-5 text-[clamp(64px,12vw,168px)] uppercase leading-[0.82]"
              style={display}
            >
              Forja tu
              <br />
              <span className="text-[#e3192b] [text-shadow:0_0_40px_rgba(227,25,43,.45)]">leyenda</span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4, duration: 0.8 }}
              className="mt-6 max-w-[48ch] text-lg text-[#b3a9a3]"
            >
              <span className="text-[#f5efe9]" style={gothic}>
                {CONFIG.program}
              </span>{" "}
              es el programa de {CONFIG.coach}: entrenamiento, nutrición y seguimiento real,
              respaldados por la ciencia del deporte.{" "}
              <strong className="font-semibold text-[#f5efe9]">
                Esto no es para tibios, es para gente comprometida y que quiera hacer un cambio.
              </strong>
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.6 }}
              className="mt-9 flex flex-wrap gap-3"
            >
              <a href="#unete" className={btnRed}>
                Quiero entrar
              </a>
              <a href="#historia" className={btnGhost}>
                Conoce la historia
              </a>
            </motion.div>
            <div className="mt-12 grid max-w-lg grid-cols-3 gap-4 border-t border-white/10 pt-6">
              {[
                ["Ciencias", "del deporte"],
                ["Competidor", "en escenario"],
                ["1:1", "100% online"],
              ].map(([big, small]) => (
                <div key={big}>
                  <p className="text-3xl uppercase text-[#f5efe9] md:text-4xl" style={display}>
                    {big}
                  </p>
                  <p className="text-[11px] uppercase tracking-[0.18em] text-[#6e6462]">{small}</p>
                </div>
              ))}
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 1.05 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.2, ease: "easeOut" }}
            className="relative order-1 mx-auto w-full max-w-[520px] md:order-2"
          >
            <img
              src={`${IMG}/hero.jpg`}
              alt={`${CONFIG.coach}, coach de ${CONFIG.program}`}
              className="w-full mix-blend-lighten [mask-image:radial-gradient(ellipse_62%_58%_at_55%_45%,#000_45%,transparent_100%)]"
            />
            <span
              className="pointer-events-none absolute -bottom-2 right-0 text-[clamp(70px,11vw,140px)] leading-none text-white/[.06]"
              style={gothic}
            >
              {CONFIG.coach}
            </span>
          </motion.div>
        </div>
      </section>

      <div className="relative">
        {CONFIG.logoBackground && <LogoBackdrop />}
        {/* Capa propia para que todo el contenido quede siempre encima del logo */}
        <div className="relative z-10">
          <Marquee />

          {/* Historia */}
          <section id="historia" className="relative py-24 md:py-32">
            <div className={wrap}>
              <SectionHead kicker="La historia" title="Del cero al escenario">
                {CONFIG.coach} no empezó con genética de revista. Empezó como tú: con dudas, sin
                método y con ganas de cambiar.
              </SectionHead>

              <div className="relative">
                <div className="absolute bottom-0 left-[19px] top-0 w-px bg-gradient-to-b from-[#e3192b] via-[#e3192b]/40 to-transparent md:left-1/2" />
                {STORY.map((chapter, i) => (
                  <motion.article
                    key={chapter.title}
                    {...reveal}
                    className={`relative mb-20 grid gap-8 pl-14 last:mb-0 md:grid-cols-2 md:gap-16 md:pl-0 ${
                      i % 2 ? "md:[&>*:first-child]:order-2" : ""
                    }`}
                  >
                    <span
                      className="absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded-full border border-[#e3192b] bg-[#070606] pt-0.5 text-xl text-[#e3192b] shadow-[0_0_20px_rgba(227,25,43,.4)] md:left-1/2 md:-translate-x-1/2"
                      style={display}
                    >
                      {chapter.numeral}
                    </span>
                    <div className={`self-center ${i % 2 ? "md:pl-12" : "md:pr-12 md:text-right"}`}>
                      <p className={eyebrow}>Capítulo {chapter.numeral}</p>
                      <h3 className="mt-3 text-5xl uppercase md:text-6xl" style={display}>
                        {chapter.title}
                      </h3>
                      <p className={`mt-4 max-w-[44ch] text-[#b3a9a3] ${i % 2 ? "" : "md:ml-auto"}`}>
                        {chapter.text}
                      </p>
                    </div>
                    <div className={i % 2 ? "md:pr-12" : "md:pl-12"}>
                      <StoryImages chapter={chapter} />
                    </div>
                  </motion.article>
                ))}
              </div>
            </div>
          </section>

          {/* El código */}
          <section id="codigo" className="relative border-y border-white/5 bg-[#0d0909]/60 py-24 md:py-32">
            <div className={wrap}>
              <SectionHead kicker="El código Elysium" title="Cuatro pilares, cero improvisación">
                Cada parte del programa existe por una razón. Juntas, te llevan a resultados que sí
                se sostienen.
              </SectionHead>
              <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
                {PILLARS.map((p, i) => (
                  <motion.div
                    key={p.title}
                    {...reveal}
                    transition={{ ...reveal.transition, delay: i * 0.1 }}
                    className="group relative overflow-hidden rounded-sm border border-white/10 bg-[#070606]/75 p-7 backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:border-[#e3192b]/60 hover:shadow-[0_10px_40px_-10px_rgba(227,25,43,.45)]"
                  >
                    <span
                      className="absolute -top-3 right-3 text-[120px] leading-none text-white/[.04] transition-colors group-hover:text-[#e3192b]/15"
                      style={display}
                    >
                      {p.numeral}
                    </span>
                    <span className="text-4xl text-[#e3192b]" style={display}>
                      {p.numeral}
                    </span>
                    <h3 className="mt-6 text-3xl uppercase" style={display}>
                      {p.title}
                    </h3>
                    <p className="mt-3 text-[15px] text-[#b3a9a3]">{p.text}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </section>

          {/* Ciencia */}
          <section className="relative overflow-hidden py-24 md:py-32">
            <div className={`${wrap} grid items-center gap-12 md:grid-cols-2 md:gap-20`}>
              <motion.div {...reveal} className="relative">
                <div className="absolute -inset-6 rounded-full bg-[#e3192b]/15 blur-3xl" />
                <img
                  src={`${IMG}/espalda.jpg`}
                  alt={`Espalda de ${CONFIG.coach}`}
                  loading="lazy"
                  className="relative w-full rounded-sm border border-white/10"
                />
              </motion.div>
              <motion.div {...reveal}>
                <p className={eyebrow}>Ciencia, no bro-science</p>
                <h2 className={`${h2} mt-4`} style={display}>
                  Cada serie tiene un porqué
                </h2>
                <p className="mt-5 max-w-[50ch] text-[#b3a9a3]">
                  {CONFIG.coach} estudia Ciencias del Deporte. Eso significa que tu plan no sale de un
                  video viral: sale de fisiología, evidencia y de lo que ha probado en su propio cuerpo.
                </p>
                <ul className="mt-8 space-y-3">
                  {SCIENCE.map((item) => (
                    <li key={item} className="flex items-start gap-4 border-b border-white/10 pb-3">
                      <span className="mt-1 text-[#e3192b]">✦</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            </div>
          </section>

          {/* Proceso */}
          <section id="proceso" className="border-y border-white/5 bg-[#0d0909]/60 py-24 md:py-32">
            <div className={wrap}>
              <SectionHead kicker="Cómo funciona" title="Tu camino a Elysium" />
              <div className="grid gap-px overflow-hidden rounded-sm border border-white/10 bg-white/10 backdrop-blur-sm sm:grid-cols-2 lg:grid-cols-4">
                {STEPS.map((s, i) => (
                  <motion.div
                    key={s.title}
                    {...reveal}
                    transition={{ ...reveal.transition, delay: i * 0.1 }}
                    className="bg-[#0d0909]/85 p-8"
                  >
                    <p className="text-6xl text-[#e3192b]/80" style={display}>
                      0{i + 1}
                    </p>
                    <h3 className="mt-4 text-2xl uppercase tracking-wide" style={display}>
                      {s.title}
                    </h3>
                    <p className="mt-2 text-[15px] text-[#b3a9a3]">{s.text}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </section>

          {/* Galería */}
          <section className="py-24 md:py-28">
            <div className={wrap}>
              <SectionHead kicker="En el gym" title="Disciplina diaria" />
            </div>
            <div className="flex snap-x snap-mandatory gap-4 overflow-x-auto px-4 pb-4 md:px-8 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
              {GALLERY.map((g) => (
                <div
                  key={g.src}
                  className="aspect-[3/4] w-[72vw] max-w-[360px] flex-none snap-center overflow-hidden rounded-sm border border-white/10"
                >
                  <img
                    src={g.src}
                    alt={g.alt}
                    loading="lazy"
                    className="h-full w-full object-cover object-bottom transition duration-700 hover:scale-105"
                  />
                </div>
              ))}
            </div>
          </section>

          {/* Únete */}
          <section id="unete" className="relative scroll-mt-16 overflow-hidden py-24 md:py-32">
            <div
              className="absolute inset-0"
              style={{
                background:
                  "radial-gradient(ellipse 50% 60% at 50% 50%, rgba(227,25,43,.18), transparent 70%)",
              }}
            />
            <div className={`${wrap} relative text-center`}>
              <img
                src={`${IMG}/logo.jpg`}
                alt={`Logo de ${CONFIG.program}`}
                className="mx-auto w-40 [mask-image:radial-gradient(closest-side,#000_70%,transparent)] md:w-56"
              />
              <p className={`${eyebrow} mt-8`}>Lugares limitados</p>
              <h2 className={`${h2} mt-4`} style={display}>
                Entra a la arena
              </h2>
              <p className="mx-auto mt-5 max-w-[46ch] text-[#b3a9a3]">
                {CONFIG.coach} trabaja con pocos alumnos para darle a cada uno atención real. Escríbele
                por donde prefieras y te contesta personalmente.
              </p>
              <div className="mx-auto mt-12 grid max-w-4xl gap-4 sm:grid-cols-3">
                {SOCIALS.map((s, i) => (
                  <motion.a
                    key={s.name}
                    {...reveal}
                    transition={{ ...reveal.transition, delay: i * 0.1 }}
                    href={s.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`group flex flex-col items-center rounded-sm border p-8 backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 ${
                      s.name === "whatsapp"
                        ? "border-[#e3192b] bg-[#e3192b]/15 shadow-[0_0_40px_rgba(227,25,43,.25)] hover:bg-[#e3192b]/25"
                        : "border-white/10 bg-[#070606]/70 hover:border-[#e3192b]/60 hover:shadow-[0_10px_40px_-10px_rgba(227,25,43,.45)]"
                    }`}
                  >
                    <span className="flex h-20 w-20 items-center justify-center rounded-full border border-white/15 bg-black/40 text-[#f5efe9] transition-colors group-hover:border-[#e3192b] group-hover:bg-[#e3192b]">
                      <Icon name={s.name} className="h-9 w-9" />
                    </span>
                    <span className="mt-6 text-4xl uppercase" style={display}>
                      {s.label}
                    </span>
                    <span className="mt-1 text-sm text-[#b3a9a3]">{s.handle}</span>
                    <span className="mt-6 text-xs font-bold uppercase tracking-[0.18em] text-[#e3192b] group-hover:text-[#ff2d3d]">
                      {s.cta} →
                    </span>
                  </motion.a>
                ))}
              </div>
            </div>
          </section>

          {/* FAQ */}
          <section id="faq" className="border-t border-white/5 py-24 md:py-32">
            <div className={`${wrap} max-w-3xl`}>
              <SectionHead kicker="Dudas" title="Antes de entrar" />
              <div>
                {FAQS.map((f) => (
                  <details key={f.q} className="group border-b border-white/10">
                    <summary className="flex cursor-pointer list-none items-center justify-between gap-6 py-6 text-lg font-semibold [&::-webkit-details-marker]:hidden">
                      {f.q}
                      <span className="flex h-8 w-8 flex-none items-center justify-center rounded-full border border-white/15 text-[#e3192b] transition-transform duration-300 group-open:rotate-45">
                        +
                      </span>
                    </summary>
                    <p className="m-0 pb-6 text-[#b3a9a3]">{f.a}</p>
                  </details>
                ))}
              </div>
              <div className="mt-12 text-center">
                <a href="#unete" className={btnRed}>
                  Quiero entrar a {CONFIG.program}
                </a>
              </div>
            </div>
          </section>

          <footer className="border-t border-white/5 py-10">
            <div className={`${wrap} flex flex-wrap items-center justify-between gap-4 text-xs text-[#6e6462]`}>
              <span className="flex items-center gap-3">
                <span className="text-xl text-[#f5efe9]" style={gothic}>
                  {CONFIG.program}
                </span>
                · Coaching by {CONFIG.coach} · © {new Date().getFullYear()}
              </span>
              <SocialLinks />
              <a
                href="https://tahuilan.com"
                target="_blank"
                rel="noopener noreferrer"
                className="group uppercase tracking-[0.18em]"
              >
                Created by{" "}
                <span className="font-bold text-[#f5efe9] transition-colors group-hover:text-[#ff2d3d]">
                  tahuilan.com
                </span>
              </a>
            </div>
          </footer>
        </div>
      </div>
      <a
        href={`https://wa.me/${CONFIG.whatsapp}?text=${encodeURIComponent(`Hola ${CONFIG.coach}, quiero info de ${CONFIG.program}`)}`}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Escribir por WhatsApp"
        className="fixed bottom-5 right-5 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-[#25d366] text-white shadow-[0_8px_30px_rgba(0,0,0,.5)] transition-transform hover:scale-110"
      >
        <Icon name="whatsapp" className="h-7 w-7" />
      </a>
    </main>
  );
}
