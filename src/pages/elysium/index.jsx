import { useState } from "react";
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
  // Número con código de país, sin "+" ni espacios. Ej: 5215512345678
  whatsapp: "5210000000000",
  instagram: "",
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
  { title: "Aplicas", text: "Llenas el formulario de abajo. Toma dos minutos." },
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

const DAYS_OPTIONS = ["2 días", "3 días", "4 días", "5 o más días"];

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

function Field({ label, required, hint, children }) {
  return (
    <div className="mt-6">
      <label className="mb-2 block text-[11px] font-bold uppercase tracking-[0.16em] text-[#b3a9a3]">
        {label} {required && <span className="text-[#e3192b]">*</span>}
      </label>
      {children}
      {hint && <p className="mt-1.5 text-xs text-[#6e6462]">{hint}</p>}
    </div>
  );
}

const inputCls =
  "w-full rounded-sm border border-white/10 bg-black/40 px-4 py-3 text-[#f5efe9] placeholder:text-[#6e6462] transition-colors focus:border-[#e3192b] focus:outline-none";

const STEP_REQUIRED = [
  ["name", "age", "phone"],
  ["goal", "days", "commitment"],
  ["why", "budget", "consent"],
];
const STEP_NAMES = ["Quién eres", "Tu meta", "Tu compromiso"];

function ApplyForm() {
  const [step, setStep] = useState(0);
  const [error, setError] = useState("");
  const [sent, setSent] = useState(false);
  const [data, setData] = useState({
    name: "",
    age: "",
    phone: "",
    email: "",
    city: "",
    goal: "",
    days: "",
    commitment: "",
    why: "",
    budget: "",
    consent: false,
  });

  const set = (key) => (e) =>
    setData((d) => ({
      ...d,
      [key]: e.target.type === "checkbox" ? e.target.checked : e.target.value,
    }));

  const validStep = () => STEP_REQUIRED[step].every((key) => Boolean(data[key]));

  const next = () => {
    if (!validStep()) {
      setError("Llena los campos marcados con * para seguir.");
      return;
    }
    setError("");
    setStep((s) => s + 1);
  };

  const submit = (e) => {
    e.preventDefault();
    if (!validStep()) {
      setError("Llena los campos marcados con * y acepta el aviso de privacidad.");
      return;
    }
    const message = [
      `Hola ${CONFIG.coach}, quiero entrar a ${CONFIG.program}.`,
      "",
      `Nombre: ${data.name}`,
      `Edad: ${data.age}`,
      `Teléfono: ${data.phone}`,
      data.email && `Correo: ${data.email}`,
      data.city && `Ciudad: ${data.city}`,
      "",
      `Meta: ${data.goal}`,
      `Días disponibles: ${data.days}`,
      `Compromiso: ${data.commitment}/10`,
      "",
      `Por qué ahora: ${data.why}`,
      `Inversión mensual: ${data.budget}`,
    ]
      .filter((line) => line !== false)
      .join("\n");
    window.open(
      `https://wa.me/${CONFIG.whatsapp}?text=${encodeURIComponent(message)}`,
      "_blank",
      "noopener,noreferrer",
    );
    setSent(true);
  };

  if (sent) {
    return (
      <div className="rounded-sm border border-[#e3192b]/40 bg-[#e3192b]/[.06] p-8 text-center">
        <p className="text-5xl text-[#e3192b]" style={gothic}>
          E
        </p>
        <h3 className="mt-4 text-4xl uppercase" style={display}>
          Bienvenido a la arena, {data.name}
        </h3>
        <p className="mx-auto mt-3 max-w-[44ch] text-[#b3a9a3]">
          Se abrió WhatsApp con tu solicitud. Mándala y {CONFIG.coach} te responde personalmente.
        </p>
      </div>
    );
  }

  return (
    <form
      onSubmit={submit}
      noValidate
      className="rounded-sm border border-white/10 bg-[#110d0d]/80 p-6 backdrop-blur md:p-9"
    >
      <div className="flex gap-2">
        {STEP_NAMES.map((name, i) => (
          <div key={name} className="flex-1">
            <div
              className={`h-1 rounded-full transition-colors duration-300 ${i <= step ? "bg-[#e3192b]" : "bg-white/10"}`}
            />
            <p
              className={`mt-2 text-[10px] font-bold uppercase tracking-[0.18em] ${i === step ? "text-[#f5efe9]" : "text-[#6e6462]"}`}
            >
              {i + 1}. {name}
            </p>
          </div>
        ))}
      </div>

      {step === 0 && (
        <div className="grid gap-x-5 sm:grid-cols-2">
          <Field label="Nombre" required>
            <input className={inputCls} value={data.name} onChange={set("name")} placeholder="¿Cómo te llamas?" />
          </Field>
          <Field label="Edad" required>
            <input className={inputCls} type="number" min="14" value={data.age} onChange={set("age")} placeholder="20" />
          </Field>
          <Field label="WhatsApp" required>
            <input className={inputCls} type="tel" value={data.phone} onChange={set("phone")} placeholder="55 1234 5678" />
          </Field>
          <Field label="Correo">
            <input className={inputCls} type="email" value={data.email} onChange={set("email")} placeholder="tu@correo.com" />
          </Field>
          <div className="sm:col-span-2">
            <Field label="Ciudad">
              <input className={inputCls} value={data.city} onChange={set("city")} placeholder="¿Desde dónde entrenas?" />
            </Field>
          </div>
        </div>
      )}

      {step === 1 && (
        <div>
          <Field label="¿Qué quieres lograr?" required>
            <textarea
              className={`${inputCls} min-h-[110px] resize-y`}
              value={data.goal}
              onChange={set("goal")}
              placeholder="Ganar músculo, bajar grasa, prepararme para competir…"
            />
          </Field>
          <Field label="¿Cuántos días puedes entrenar?" required>
            <div className="grid grid-cols-2 gap-2 sm:grid-cols-4">
              {DAYS_OPTIONS.map((o) => (
                <button
                  type="button"
                  key={o}
                  onClick={() => setData((d) => ({ ...d, days: o }))}
                  className={`rounded-sm border px-3 py-3 text-sm font-semibold transition-colors ${
                    data.days === o
                      ? "border-[#e3192b] bg-[#e3192b] text-white"
                      : "border-white/10 text-[#b3a9a3] hover:border-white/30"
                  }`}
                >
                  {o}
                </button>
              ))}
            </div>
          </Field>
          <Field label={`Nivel de compromiso: ${data.commitment || "–"}/10`} required>
            <input
              type="range"
              min="1"
              max="10"
              value={data.commitment || 5}
              onChange={set("commitment")}
              className="w-full accent-[#e3192b]"
            />
          </Field>
        </div>
      )}

      {step === 2 && (
        <div>
          <Field label="¿Por qué ahora?" required>
            <textarea
              className={`${inputCls} min-h-[110px] resize-y`}
              value={data.why}
              onChange={set("why")}
              placeholder="Cuéntame qué te motivó a dar el paso"
            />
          </Field>
          <Field
            label="¿Cuánto puedes invertir al mes?"
            required
            hint="Una cifra aproximada ayuda a proponerte el plan correcto."
          >
            <input className={inputCls} value={data.budget} onChange={set("budget")} placeholder="$ MXN" />
          </Field>
          <label className="mt-6 flex gap-3 text-xs leading-relaxed text-[#6e6462]">
            <input
              type="checkbox"
              checked={data.consent}
              onChange={set("consent")}
              className="mt-0.5 h-4 w-4 flex-none accent-[#e3192b]"
            />
            Acepto que mis datos se usen solo para responder esta solicitud.
          </label>
        </div>
      )}

      {error && (
        <p className="mt-6 rounded-sm border-l-[3px] border-[#e3192b] bg-[#e3192b]/10 px-4 py-3 text-sm text-[#ff8a94]">
          {error}
        </p>
      )}

      <div className="mt-8 flex justify-between gap-3">
        {step > 0 ? (
          <button
            type="button"
            className={btnGhost}
            onClick={() => {
              setError("");
              setStep((s) => s - 1);
            }}
          >
            Atrás
          </button>
        ) : (
          <span />
        )}
        {step < 2 ? (
          <button type="button" className={btnRed} onClick={next}>
            Siguiente
          </button>
        ) : (
          <button type="submit" className={btnRed}>
            Enviar solicitud
          </button>
        )}
      </div>
    </form>
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
                  "radial-gradient(ellipse 50% 60% at 20% 50%, rgba(227,25,43,.18), transparent 70%)",
              }}
            />
            <div className={`${wrap} relative grid items-start gap-12 md:grid-cols-[.8fr_1.2fr] md:gap-16`}>
              <div className="md:sticky md:top-24">
                <img src={`${IMG}/logo.jpg`} alt={`Logo de ${CONFIG.program}`} className="w-40 mix-blend-lighten md:w-56" />
                <p className={`${eyebrow} mt-8`}>Lugares limitados</p>
                <h2 className={`${h2} mt-4`} style={display}>
                  Entra a la arena
                </h2>
                <p className="mt-5 max-w-[38ch] text-[#b3a9a3]">
                  {CONFIG.coach} trabaja con pocos alumnos para darle a cada uno atención real. Cuéntale
                  tu caso y te contesta personalmente.
                </p>
              </div>
              <ApplyForm />
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
              <a href="/" className="hover:text-[#f5efe9]">
                Sitio por Tahuilan
              </a>
            </div>
          </footer>
        </div>
      </div>
    </main>
  );
}
